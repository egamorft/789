/*!For license information please see lotus-agent.bundle.js.LICENSE.txt*/ ! function(e, t) {
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
                            var s = t[r] = {
                                i: r,
                                l: !1,
                                exports: {}
                            };
                            return e[r].call(s.exports, s, s.exports, n), s.l = !0, s.exports
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
                                for (var s in e) n.d(r, s, function(t) {
                                    return e[t]
                                }.bind(null, s));
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
                        n.r(t), n.d(t, "__extends", (function() {
                            return s
                        })), n.d(t, "__assign", (function() {
                            return i
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
                            return p
                        })), n.d(t, "__values", (function() {
                            return h
                        })), n.d(t, "__read", (function() {
                            return g
                        })), n.d(t, "__spread", (function() {
                            return m
                        })), n.d(t, "__spreadArrays", (function() {
                            return y
                        })), n.d(t, "__spreadArray", (function() {
                            return b
                        })), n.d(t, "__await", (function() {
                            return v
                        })), n.d(t, "__asyncGenerator", (function() {
                            return w
                        })), n.d(t, "__asyncDelegator", (function() {
                            return _
                        })), n.d(t, "__asyncValues", (function() {
                            return C
                        })), n.d(t, "__makeTemplateObject", (function() {
                            return T
                        })), n.d(t, "__importStar", (function() {
                            return U
                        })), n.d(t, "__importDefault", (function() {
                            return O
                        })), n.d(t, "__classPrivateFieldGet", (function() {
                            return I
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

                        function s(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }
                        var i = function() {
                            return i = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                                return e
                            }, i.apply(this, arguments)
                        };

                        function o(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var s = 0;
                                for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
                            }
                            return n
                        }

                        function a(e, t, n, r) {
                            var s, i = arguments.length,
                                o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
                            return i > 3 && o && Object.defineProperty(t, n, o), o
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
                            return new(n || (n = Promise))((function(s, i) {
                                function o(e) {
                                    try {
                                        u(r.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        u(r.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function u(e) {
                                    var t;
                                    e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(o, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        }

                        function f(e, t) {
                            var n, r, s, i, o = {
                                label: 0,
                                sent: function() {
                                    if (1 & s[0]) throw s[1];
                                    return s[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function a(i) {
                                return function(a) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; o;) try {
                                            if (n = 1, r && (s = 2 & i[0] ? r.return : i[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, i[1])).done) return s;
                                            switch (r = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    s = i;
                                                    break;
                                                case 4:
                                                    return o.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    o.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = o.ops.pop(), o.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((s = (s = o.trys).length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                        o = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                                        o.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && o.label < s[1]) {
                                                        o.label = s[1], s = i;
                                                        break
                                                    }
                                                    if (s && o.label < s[2]) {
                                                        o.label = s[2], o.ops.push(i);
                                                        break
                                                    }
                                                    s[2] && o.ops.pop(), o.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, o)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = s = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, a])
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

                        function p(e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || d(t, e, n)
                        }

                        function h(e) {
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
                            var r, s, i = n.call(e),
                                o = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = i.next()).done;) o.push(r.value)
                            } catch (e) {
                                s = {
                                    error: e
                                }
                            } finally {
                                try {
                                    r && !r.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (s) throw s.error
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
                                s = 0;
                            for (t = 0; t < n; t++)
                                for (var i = arguments[t], o = 0, a = i.length; o < a; o++, s++) r[s] = i[o];
                            return r
                        }

                        function b(e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, s = 0, i = t.length; s < i; s++) !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)), r[s] = t[s]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        }

                        function v(e) {
                            return this instanceof v ? (this.v = e, this) : new v(e)
                        }

                        function w(e, t, n) {
                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                            var r, s = n.apply(e, t || []),
                                i = [];
                            return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
                                return this
                            }, r;

                            function o(e) {
                                s[e] && (r[e] = function(t) {
                                    return new Promise((function(n, r) {
                                        i.push([e, t, n, r]) > 1 || a(e, t)
                                    }))
                                })
                            }

                            function a(e, t) {
                                try {
                                    (n = s[e](t)).value instanceof v ? Promise.resolve(n.value.v).then(u, l) : c(i[0][2], n)
                                } catch (e) {
                                    c(i[0][3], e)
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
                                e(t), i.shift(), i.length && a(i[0][0], i[0][1])
                            }
                        }

                        function _(e) {
                            var t, n;
                            return t = {}, r("next"), r("throw", (function(e) {
                                throw e
                            })), r("return"), t[Symbol.iterator] = function() {
                                return this
                            }, t;

                            function r(r, s) {
                                t[r] = e[r] ? function(t) {
                                    return (n = !n) ? {
                                        value: v(e[r](t)),
                                        done: "return" === r
                                    } : s ? s(t) : t
                                } : s
                            }
                        }

                        function C(e) {
                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                            var t, n = e[Symbol.asyncIterator];
                            return n ? n.call(e) : (e = h(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                                return this
                            }, t);

                            function r(n) {
                                t[n] = e[n] && function(t) {
                                    return new Promise((function(r, s) {
                                        ! function(e, t, n, r) {
                                            Promise.resolve(r).then((function(t) {
                                                e({
                                                    value: t,
                                                    done: n
                                                })
                                            }), t)
                                        }(r, s, (t = e[n](t)).done, t.value)
                                    }))
                                }
                            }
                        }

                        function T(e, t) {
                            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                                value: t
                            }) : e.raw = t, e
                        }
                        var R = Object.create ? function(e, t) {
                            Object.defineProperty(e, "default", {
                                enumerable: !0,
                                value: t
                            })
                        } : function(e, t) {
                            e.default = t
                        };

                        function U(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && d(t, e, n);
                            return R(t, e), t
                        }

                        function O(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }

                        function I(e, t, n, r) {
                            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                        }

                        function L(e, t, n, r, s) {
                            if ("m" === r) throw new TypeError("Private method is not writable");
                            if ("a" === r && !s) throw new TypeError("Private accessor was defined without a setter");
                            if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                            return "a" === r ? s.call(e, n) : s ? s.value = n : t.set(e, n), n
                        }
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.allToUpperCase = t.allToLowerCase = t.encodeBody = t.decodeBody = t.Format = t.promisify = t.trim = t.arrChooseN = t.randomHexString = t.randomString = t.cheapRandStr = t.dataSizeBytes = t.inspectBody = t.inspectError = t.isErrorInfoOrPartialErrorInfo = t.now = t.parseQueryString = t.toQueryString = t.arrPopRandomElement = t.defaultPostHeaders = t.defaultGetHeaders = t.allSame = t.arrEvery = t.arrFilter = t.arrMap = t.safeArrForEach = t.arrForEach = t.forInOwnNonNullProperties = t.valuesArray = t.keysArray = t.arrWithoutValue = t.arrDeleteValue = t.arrIn = t.arrIndexOf = t.arrSubtract = t.arrIntersectOb = t.arrIntersect = t.intersect = t.containsValue = t.inherits = t.prototypicalClone = t.shallowClone = t.isEmptyArg = t.isOnlyPropIn = t.isEmpty = t.isObject = t.ensureArray = t.isArray = t.copy = t.mixin = void 0, t.arrEquals = t.toBase64 = t.matchDerivedChannel = t.shallowEquals = t.getGlobalObject = t.getRetryTime = t.getJitterCoefficient = t.getBackoffCoefficient = void 0;
                            var r = n(0),
                                s = r.__importDefault(n(3)),
                                i = r.__importStar(n(8)),
                                o = r.__importDefault(n(4)),
                                a = n(11),
                                u = n(31);

                            function l(e) {
                                return Math.floor(Math.random() * e.length)
                            }

                            function c(e) {
                                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                for (var r = 0; r < t.length; r++) {
                                    var s = t[r];
                                    if (!s) break;
                                    var i = Object.prototype.hasOwnProperty;
                                    for (var o in s) i && !i.call(s, o) || (e[o] = s[o])
                                }
                                return e
                            }

                            function f(e) {
                                return null == e
                            }

                            function d(e, t) {
                                var n = function() {};
                                n.prototype = e;
                                var r = new n;
                                return t && c(r, t), r
                            }

                            function p(e, n) {
                                for (var r = [], s = 0; s < e.length; s++) {
                                    var i = e[s]; - 1 != (0, t.arrIndexOf)(n, i) && r.push(i)
                                }
                                return r
                            }

                            function h(e, t) {
                                for (var n = [], r = 0; r < e.length; r++) {
                                    var s = e[r];
                                    s in t && n.push(s)
                                }
                                return n
                            }

                            function g(e, n) {
                                var r = (0, t.arrIndexOf)(e, n),
                                    s = -1 != r;
                                return s && e.splice(r, 1), s
                            }
                            t.mixin = c, t.copy = function(e) {
                                return c({}, e)
                            }, t.isArray = Array.isArray || function(e) {
                                return "[object Array]" == Object.prototype.toString.call(e)
                            }, t.ensureArray = function(e) {
                                return f(e) ? [] : (0, t.isArray)(e) ? e : [e]
                            }, t.isObject = function(e) {
                                return "[object Object]" == Object.prototype.toString.call(e)
                            }, t.isEmpty = function(e) {
                                for (var t in e) return !1;
                                return !0
                            }, t.isOnlyPropIn = function(e, t) {
                                for (var n in e)
                                    if (n !== t) return !1;
                                return !0
                            }, t.isEmptyArg = f, t.shallowClone = function(e) {
                                var t = new Object;
                                for (var n in e) t[n] = e[n];
                                return t
                            }, t.prototypicalClone = d, t.inherits = function(e, t) {
                                s.default.Config.inherits ? s.default.Config.inherits(e, t) : (e.super_ = t, e.prototype = d(t.prototype, {
                                    constructor: e
                                }))
                            }, t.containsValue = function(e, t) {
                                for (var n in e)
                                    if (e[n] == t) return !0;
                                return !1
                            }, t.intersect = function(e, n) {
                                return (0, t.isArray)(n) ? p(e, n) : h(e, n)
                            }, t.arrIntersect = p, t.arrIntersectOb = h, t.arrSubtract = function(e, n) {
                                for (var r = [], s = 0; s < e.length; s++) {
                                    var i = e[s]; - 1 == (0, t.arrIndexOf)(n, i) && r.push(i)
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
                            }, t.arrDeleteValue = g, t.arrWithoutValue = function(e, t) {
                                var n = e.slice();
                                return g(n, t), n
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
                                for (var n = [], r = e.length, s = 0; s < r; s++) n.push(t(e[s], s, e));
                                return n
                            }, t.arrFilter = Array.prototype.filter ? function(e, t) {
                                return e.filter(t)
                            } : function(e, t) {
                                for (var n = [], r = e.length, s = 0; s < r; s++) t(e[s]) && n.push(e[s]);
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
                            var m, y = {
                                json: "application/json",
                                jsonp: "application/javascript",
                                xml: "application/xml",
                                html: "text/html",
                                msgpack: "application/x-msgpack"
                            };

                            function b(e) {
                                return e.splice(l(e), 1)[0]
                            }

                            function v(e) {
                                return Math.min((e + 2) / 3, 2)
                            }

                            function w() {
                                return 1 - .2 * Math.random()
                            }
                            t.defaultGetHeaders = function(e, t) {
                                    return {
                                        accept: y[t || m.json],
                                        "X-Ably-Version": i.default.protocolVersion.toString(),
                                        "Ably-Agent": (0, i.getAgentString)(e)
                                    }
                                }, t.defaultPostHeaders = function(e, t) {
                                    var n;
                                    return {
                                        accept: n = y[t || m.json],
                                        "content-type": n,
                                        "X-Ably-Version": i.default.protocolVersion.toString(),
                                        "Ably-Agent": (0, i.getAgentString)(e)
                                    }
                                }, t.arrPopRandomElement = b, t.toQueryString = function(e) {
                                    var t = [];
                                    if (e)
                                        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                                    return t.length ? "?" + t.join("&") : ""
                                }, t.parseQueryString = function(e) {
                                    for (var t, n = /([^?&=]+)=?([^&]*)/g, r = {}; t = n.exec(e);) r[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
                                    return r
                                }, t.now = Date.now || function() {
                                    return (new Date).getTime()
                                }, t.isErrorInfoOrPartialErrorInfo = function(e) {
                                    return "object" == typeof e && null !== e && ("ErrorInfo" == e.constructor.name || "PartialErrorInfo" == e.constructor.name)
                                }, t.inspectError = function(e) {
                                    var t, n;
                                    return e instanceof Error || "ErrorInfo" === (null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) || "PartialErrorInfo" === (null === (n = null == e ? void 0 : e.constructor) || void 0 === n ? void 0 : n.name) ? e.toString() : s.default.Config.inspect(e)
                                }, t.inspectBody = function(e) {
                                    return s.default.BufferUtils.isBuffer(e) ? e.toString() : "string" == typeof e ? e : s.default.Config.inspect(e)
                                }, t.dataSizeBytes = function(e) {
                                    if (s.default.BufferUtils.isBuffer(e)) return s.default.BufferUtils.byteLength(e);
                                    if ("string" == typeof e) return s.default.Config.stringByteSize(e);
                                    throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof e)
                                }, t.cheapRandStr = function() {
                                    return String(Math.random()).substr(2)
                                }, t.randomString = function(e) {
                                    if (s.default.Config.getRandomValues && "undefined" != typeof Uint8Array) {
                                        var t = new Uint8Array(e);
                                        return s.default.Config.getRandomValues(t), s.default.BufferUtils.base64Encode(t)
                                    }
                                    for (var n = s.default.BufferUtils.base64CharSet, r = Math.round(4 * e / 3), i = "", o = 0; o < r; o++) i += n[l(n)];
                                    return i
                                }, t.randomHexString = function(e) {
                                    if (s.default.Config.getRandomValues && "undefined" != typeof Uint8Array) {
                                        var t = new Uint8Array(e);
                                        return s.default.Config.getRandomValues(t), s.default.BufferUtils.hexEncode(t)
                                    }
                                    for (var n = s.default.BufferUtils.hexCharSet, r = 2 * e, i = "", o = 0; o < r; o++) i += n[l(n)];
                                    return i
                                }, t.arrChooseN = function(e, t) {
                                    for (var n = Math.min(t, e.length), r = e.slice(), s = [], i = 0; i < n; i++) s.push(b(r));
                                    return s
                                }, t.trim = String.prototype.trim ? function(e) {
                                    return e.trim()
                                } : function(e) {
                                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                                }, t.promisify = function(e, t, n) {
                                    return new Promise((function(s, i) {
                                        e[t].apply(e, r.__spreadArray(r.__spreadArray([], n, !1), [function(e, t) {
                                            e ? i(e) : s(t)
                                        }], !1))
                                    }))
                                },
                                function(e) {
                                    e.msgpack = "msgpack", e.json = "json"
                                }(m = t.Format || (t.Format = {})), t.decodeBody = function(e, t) {
                                    return "msgpack" == t ? s.default.Config.msgpack.decode(e) : JSON.parse(String(e))
                                }, t.encodeBody = function(e, t) {
                                    return "msgpack" == t ? s.default.Config.msgpack.encode(e, !0) : JSON.stringify(e)
                                }, t.allToLowerCase = function(e) {
                                    return e.map((function(e) {
                                        return e && e.toLowerCase()
                                    }))
                                }, t.allToUpperCase = function(e) {
                                    return e.map((function(e) {
                                        return e && e.toUpperCase()
                                    }))
                                }, t.getBackoffCoefficient = v, t.getJitterCoefficient = w, t.getRetryTime = function(e, t) {
                                    return e * v(t) * w()
                                }, t.getGlobalObject = function() {
                                    return e || ("undefined" != typeof window ? window : self)
                                }, t.shallowEquals = function(e, t) {
                                    return Object.keys(e).every((function(n) {
                                        return e[n] === t[n]
                                    })) && Object.keys(t).every((function(n) {
                                        return t[n] === e[n]
                                    }))
                                }, t.matchDerivedChannel = function(e) {
                                    var t = e.match(/^(\[([^?]*)(?:(.*))\])?(.+)$/);
                                    if (!t || !t.length || t.length < 5) throw new o.default("regex match failed", 400, 40010);
                                    if (t[2]) throw new o.default("cannot use a derived option with a ".concat(t[2], " channel"), 400, 40010);
                                    return {
                                        qualifierParam: t[3] || "",
                                        channelName: t[4]
                                    }
                                }, t.toBase64 = function(e) {
                                    return s.default.Config.createHmac ? Buffer.from(e, "ascii").toString("base64") : (0, a.stringify)((0, u.parse)(e))
                                }, t.arrEquals = function(e, n) {
                                    return e.length === n.length && (0, t.arrEvery)(e, (function(e, t) {
                                        return e === n[t]
                                    }))
                                }
                        }).call(this, n(13))
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var r, s = n(0).__importDefault(n(3)),
                                i = e || ("undefined" != typeof window ? window : self);

                            function o(e, t) {
                                return "".concat(e).padStart(t ? 3 : 2, "0")
                            }

                            function a(e) {
                                return s.default.Config.logTimestamps ? function(t) {
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
                                            return "undefined" == typeof Window && "undefined" == typeof WorkerGlobalScope || "function" == typeof(null === (t = null === (e = null == i ? void 0 : i.console) || void 0 === e ? void 0 : e.log) || void 0 === t ? void 0 : t.apply) ? (n = function() {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                console.log.apply(console, e)
                                            }, r = console.warn ? function() {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                console.warn.apply(console, e)
                                            } : n) : n = r = (null == i ? void 0 : i.console.log) ? function() {
                                                Function.prototype.apply.call(console.log, console, arguments)
                                            } : function() {}, [n, r].map(a)
                                        }(),
                                        t = e[0],
                                        n = e[1];
                                    this.logHandler = t, this.logErrorHandler = n
                                }, e.logLevel = r.Error, e.LOG_NONE = r.None, e.LOG_ERROR = r.Error, e.LOG_MAJOR = r.Major, e.LOG_MINOR = r.Minor, e.LOG_MICRO = r.Micro, e.LOG_DEFAULT = r.Error, e.LOG_DEBUG = r.Micro, e.logAction = function(t, n, s) {
                                    e.shouldLog(t) && (t === r.Error ? e.logErrorHandler : e.logHandler)("Ably: " + n + ": " + s)
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
                        }).call(this, n(13))
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function() {};
                        t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.PartialErrorInfo = void 0;
                        var r = n(0),
                            s = r.__importDefault(n(3)),
                            i = r.__importStar(n(1));

                        function o(e) {
                            var t = "[" + e.constructor.name;
                            return e.message && (t += ": " + e.message), e.statusCode && (t += "; statusCode=" + e.statusCode), e.code && (t += "; code=" + e.code), e.cause && (t += "; cause=" + i.inspectError(e.cause)), !e.href || e.message && e.message.indexOf("help.ably.io") > -1 || (t += "; see " + e.href + " "), t += "]"
                        }
                        var a = function(e) {
                            function t(n, r, s, i) {
                                var o = e.call(this, n) || this;
                                return void 0 !== Object.setPrototypeOf && Object.setPrototypeOf(o, t.prototype), o.code = r, o.statusCode = s, o.cause = i, o
                            }
                            return r.__extends(t, e), t.prototype.toString = function() {
                                return o(this)
                            }, t.fromValues = function(e) {
                                var n = e,
                                    r = n.message,
                                    i = n.code,
                                    o = n.statusCode;
                                if ("string" != typeof r || "number" != typeof i || "number" != typeof o) throw new Error("ErrorInfo.fromValues(): invalid values: " + s.default.Config.inspect(e));
                                var a = Object.assign(new t(r, i, o), e);
                                return a.code && !a.href && (a.href = "https://help.ably.io/error/" + a.code), a
                            }, t
                        }(Error);
                        t.default = a;
                        var u = function(e) {
                            function t(n, r, s, i) {
                                var o = e.call(this, n) || this;
                                return void 0 !== Object.setPrototypeOf && Object.setPrototypeOf(o, t.prototype), o.code = r, o.statusCode = s, o.cause = i, o
                            }
                            return r.__extends(t, e), t.prototype.toString = function() {
                                return o(this)
                            }, t
                        }(Error);
                        t.PartialErrorInfo = u
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function() {
                            if ("function" == typeof ArrayBuffer) {
                                var e = r.lib.WordArray,
                                    t = e.init,
                                    n = e.init = function(e) {
                                        if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
                                            for (var n = e.byteLength, r = [], s = 0; s < n; s++) r[s >>> 2] |= e[s] << 24 - s % 4 * 8;
                                            t.call(this, r, n)
                                        } else t.apply(this, arguments)
                                    };
                                n.prototype = e
                            }
                        }(), r.lib.WordArray)
                    }, function(e, t, n) {
                        (function(t) {
                            var r;
                            e.exports = (r = r || function(e, r) {
                                var s;
                                if ("undefined" != typeof window && window.crypto && (s = window.crypto), !s && "undefined" != typeof window && window.msCrypto && (s = window.msCrypto), !s && void 0 !== t && t.crypto && (s = t.crypto), !s) try {
                                    s = n(44)
                                } catch (e) {}
                                var i = function() {
                                        if (s) {
                                            if ("function" == typeof s.getRandomValues) try {
                                                return s.getRandomValues(new Uint32Array(1))[0]
                                            } catch (e) {}
                                            if ("function" == typeof s.randomBytes) try {
                                                return s.randomBytes(4).readInt32LE()
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
                                                s = e.sigBytes;
                                            if (this.clamp(), r % 4)
                                                for (var i = 0; i < s; i++) {
                                                    var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                                    t[r + i >>> 2] |= o << 24 - (r + i) % 4 * 8
                                                } else
                                                    for (i = 0; i < s; i += 4) t[r + i >>> 2] = n[i >>> 2];
                                            return this.sigBytes += s, this
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
                                            for (var t = [], n = 0; n < e; n += 4) t.push(i());
                                            return new c.init(t, e)
                                        }
                                    }),
                                    f = a.enc = {},
                                    d = f.Hex = {
                                        stringify: function(e) {
                                            for (var t = e.words, n = e.sigBytes, r = [], s = 0; s < n; s++) {
                                                var i = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                                r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
                                            }
                                            return r.join("")
                                        },
                                        parse: function(e) {
                                            for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                                            return new c.init(n, t / 2)
                                        }
                                    },
                                    p = f.Latin1 = {
                                        stringify: function(e) {
                                            for (var t = e.words, n = e.sigBytes, r = [], s = 0; s < n; s++) {
                                                var i = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                                r.push(String.fromCharCode(i))
                                            }
                                            return r.join("")
                                        },
                                        parse: function(e) {
                                            for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                                            return new c.init(n, t)
                                        }
                                    },
                                    h = f.Utf8 = {
                                        stringify: function(e) {
                                            try {
                                                return decodeURIComponent(escape(p.stringify(e)))
                                            } catch (e) {
                                                throw new Error("Malformed UTF-8 data")
                                            }
                                        },
                                        parse: function(e) {
                                            return p.parse(unescape(encodeURIComponent(e)))
                                        }
                                    },
                                    g = u.BufferedBlockAlgorithm = l.extend({
                                        reset: function() {
                                            this._data = new c.init, this._nDataBytes = 0
                                        },
                                        _append: function(e) {
                                            "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                                        },
                                        _process: function(t) {
                                            var n, r = this._data,
                                                s = r.words,
                                                i = r.sigBytes,
                                                o = this.blockSize,
                                                a = i / (4 * o),
                                                u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,
                                                l = e.min(4 * u, i);
                                            if (u) {
                                                for (var f = 0; f < u; f += o) this._doProcessBlock(s, f);
                                                n = s.splice(0, u), r.sigBytes -= l
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
                        }).call(this, n(13))
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(2)),
                            o = r.__importDefault(n(3));

                        function a(e, t, n) {
                            try {
                                t.apply(e, n)
                            } catch (e) {
                                i.default.logAction(i.default.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + e + "; stack = " + (e && e.stack))
                            }
                        }

                        function u(e, t, n) {
                            for (var r, i, o, a = 0; a < e.length; a++)
                                if (r = e[a], n && (r = r[n]), s.isArray(r)) {
                                    for (; - 1 !== (i = s.arrIndexOf(r, t));) r.splice(i, 1);
                                    n && 0 === r.length && delete e[a][n]
                                } else if (s.isObject(r))
                                for (o in r) Object.prototype.hasOwnProperty.call(r, o) && s.isArray(r[o]) && u([r], t, o)
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
                                    var i = t[0],
                                        a = t[1];
                                    if ("function" != typeof a) throw new Error("EventListener.on(): Invalid arguments: " + o.default.Config.inspect(t));
                                    if (s.isEmptyArg(i)) this.any.push(a);
                                    else if (s.isArray(i)) i.forEach((function(t) {
                                        e.on(t, a)
                                    }));
                                    else {
                                        if ("string" != typeof i) throw new Error("EventListener.on(): Invalid arguments: " + o.default.Config.inspect(t));
                                        (this.events[i] || (this.events[i] = [])).push(a)
                                    }
                                }
                            }, e.prototype.off = function() {
                                for (var e, t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                if (0 == n.length || s.isEmptyArg(n[0]) && s.isEmptyArg(n[1])) return this.any = [], this.events = Object.create(null), this.anyOnce = [], void(this.eventsOnce = Object.create(null));
                                var i = n[0],
                                    a = n[1],
                                    l = null,
                                    c = null;
                                if (1 !== n.length && a) {
                                    if ("function" != typeof a) throw new Error("EventEmitter.off(): invalid arguments:" + o.default.Config.inspect(n));
                                    c = (e = [i, a])[0], l = e[1]
                                } else "function" == typeof i ? l = i : c = i;
                                if (l && s.isEmptyArg(c)) u([this.any, this.events, this.anyOnce, this.eventsOnce], l);
                                else if (s.isArray(c)) c.forEach((function(e) {
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
                                    i = [];
                                this.anyOnce.length && (Array.prototype.push.apply(i, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(i, this.any);
                                var o = this.eventsOnce[e];
                                o && (Array.prototype.push.apply(i, o), delete this.eventsOnce[e]);
                                var u = this.events[e];
                                u && Array.prototype.push.apply(i, u), s.arrForEach(i, (function(e) {
                                    a(r, e, t)
                                }))
                            }, e.prototype.once = function() {
                                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var r = t.length;
                                if ((0 === r || 1 === r && "function" != typeof t[0]) && o.default.Config.Promise) {
                                    var i = t[0];
                                    return new o.default.Config.Promise((function(t) {
                                        e.once(i, t)
                                    }))
                                }
                                var a = t[0],
                                    u = t[1];
                                if (1 === t.length && "function" == typeof a) this.anyOnce.push(a);
                                else if (s.isEmptyArg(a)) {
                                    if ("function" != typeof u) throw new Error("EventEmitter.once(): Invalid arguments:" + o.default.Config.inspect(t));
                                    this.anyOnce.push(u)
                                } else if (s.isArray(a)) {
                                    var l = this,
                                        c = function() {
                                            var e = Array.prototype.slice.call(arguments);
                                            if (s.arrForEach(a, (function(e) {
                                                    l.off(e, c)
                                                })), "function" != typeof u) throw new Error("EventEmitter.once(): Invalid arguments:" + o.default.Config.inspect(t));
                                            u.apply(this, e)
                                        };
                                    s.arrForEach(a, (function(e) {
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
                                for (var s = this, i = [], u = 3; u < arguments.length; u++) i[u - 3] = arguments[u];
                                var l = {
                                    event: t
                                };
                                if ("string" != typeof t || "string" != typeof n) throw "whenState requires a valid event String argument";
                                if ("function" != typeof r && o.default.Config.Promise) return new o.default.Config.Promise((function(r) {
                                    e.prototype.whenState.apply(s, [t, n, r].concat(i))
                                }));
                                t === n ? a(l, r, i) : this.once(t, r)
                            }, e
                        }();
                        t.default = l
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.getDefaults = t.normaliseOptions = t.objectifyOptions = t.getAgentString = t.getHosts = t.getFallbackHosts = t.environmentFallbackHosts = t.getHttpScheme = t.getPort = t.getHost = void 0;
                        var r = n(0),
                            s = r.__importDefault(n(3)),
                            i = r.__importStar(n(1)),
                            o = r.__importDefault(n(2)),
                            a = r.__importDefault(n(4)),
                            u = n(43),
                            l = "ably-js/" + u.version,
                            c = {
                                ENVIRONMENT: "",
                                REST_HOST: "rest.ably.io",
                                REALTIME_HOST: "realtime.ably.io",
                                FALLBACK_HOSTS: ["A.ably-realtime.com", "B.ably-realtime.com", "C.ably-realtime.com", "D.ably-realtime.com", "E.ably-realtime.com"],
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
                                protocolVersion: 2,
                                agent: l,
                                getHost: f,
                                getPort: d,
                                getHttpScheme: p,
                                environmentFallbackHosts: h,
                                getFallbackHosts: g,
                                getHosts: m,
                                checkHost: y,
                                objectifyOptions: b,
                                normaliseOptions: v
                            };

                        function f(e, t, n) {
                            return t = n ? t == e.restHost && e.realtimeHost || t || e.realtimeHost : t || e.restHost
                        }

                        function d(e, t) {
                            return t || e.tls ? e.tlsPort : e.port
                        }

                        function p(e) {
                            return e.tls ? "https://" : "http://"
                        }

                        function h(e) {
                            return [e + "-a-fallback.ably-realtime.com", e + "-b-fallback.ably-realtime.com", e + "-c-fallback.ably-realtime.com", e + "-d-fallback.ably-realtime.com", e + "-e-fallback.ably-realtime.com"]
                        }

                        function g(e) {
                            var t = e.fallbackHosts,
                                n = void 0 !== e.httpMaxRetryCount ? e.httpMaxRetryCount : c.httpMaxRetryCount;
                            return t ? i.arrChooseN(t, n) : []
                        }

                        function m(e) {
                            return [e.restHost].concat(g(e))
                        }

                        function y(e) {
                            if ("string" != typeof e) throw new a.default("host must be a string; was a " + typeof e, 4e4, 400);
                            if (!e.length) throw new a.default("host must not be zero-length", 4e4, 400)
                        }

                        function b(e) {
                            return "string" == typeof e ? -1 == e.indexOf(":") ? {
                                token: e
                            } : {
                                key: e
                            } : e
                        }

                        function v(e) {
                            if (e.host && (o.default.deprecated("host", "restHost"), e.restHost = e.host), e.wsHost && (o.default.deprecated("wsHost", "realtimeHost"), e.realtimeHost = e.wsHost), e.queueEvents && (o.default.deprecated("queueEvents", "queueMessages"), e.queueMessages = e.queueEvents), e.fallbackHostsUseDefault) {
                                if (e.fallbackHosts) {
                                    var t = "fallbackHosts and fallbackHostsUseDefault cannot both be set";
                                    throw o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", t), new a.default(t, 4e4, 400)
                                }
                                if (e.port || e.tlsPort) throw t = "fallbackHostsUseDefault cannot be set when port or tlsPort are set", o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", t), new a.default(t, 4e4, 400);
                                e.environment ? o.default.deprecatedWithMsg("fallbackHostsUseDefault", "There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.") : o.default.deprecated("fallbackHostsUseDefault", "fallbackHosts: Ably.Defaults.FALLBACK_HOSTS"), e.fallbackHosts = c.FALLBACK_HOSTS
                            }!0 === e.recover && (o.default.deprecated("{recover: true}", "{recover: function(lastConnectionDetails, cb) { cb(true); }}"), e.recover = function(e, t) {
                                t(!0)
                            }), "function" == typeof e.recover && !0 === e.closeOnUnload && (o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), e.recover = void 0), "closeOnUnload" in e || (e.closeOnUnload = !e.recover), e.transports && i.arrIn(e.transports, "xhr") && (o.default.deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]'), i.arrDeleteValue(e.transports, "xhr"), e.transports.push("xhr_streaming")), "queueMessages" in e || (e.queueMessages = !0);
                            var n = e.environment && String(e.environment).toLowerCase() || c.ENVIRONMENT,
                                u = !n || "production" === n;
                            e.fallbackHosts || e.restHost || e.realtimeHost || e.port || e.tlsPort || (e.fallbackHosts = u ? c.FALLBACK_HOSTS : h(n));
                            var l = e.restHost || (u ? c.REST_HOST : n + "-" + c.REST_HOST),
                                f = function(e, t, n) {
                                    return e.realtimeHost ? e.realtimeHost : e.restHost ? (o.default.logAction(o.default.LOG_MINOR, "Defaults.normaliseOptions", 'restHost is set to "' + e.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + e.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.'), e.restHost) : t ? c.REALTIME_HOST : n + "-" + c.REALTIME_HOST
                                }(e, u, n);
                            i.arrForEach((e.fallbackHosts || []).concat(l, f), y), e.port = e.port || c.PORT, e.tlsPort = e.tlsPort || c.TLS_PORT, "tls" in e || (e.tls = !0);
                            var d = function(e) {
                                var t = {};
                                for (var n in c.TIMEOUTS) t[n] = e[n] || c.TIMEOUTS[n];
                                return t
                            }(e);
                            e.useBinaryProtocol = "useBinaryProtocol" in e ? s.default.Config.supportsBinary && e.useBinaryProtocol : s.default.Config.preferBinary, e.clientId && ((e.headers = e.headers || {})["X-Ably-ClientId"] = s.default.BufferUtils.base64Encode(s.default.BufferUtils.utf8Encode(e.clientId))), "idempotentRestPublishing" in e || (e.idempotentRestPublishing = !0), e.promises && !s.default.Config.Promise && (o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", "{promises: true} was specified, but no Promise constructor found; disabling promises"), e.promises = !1);
                            var p = null,
                                g = e.connectivityCheckUrl;
                            if (e.connectivityCheckUrl) {
                                var m = e.connectivityCheckUrl.split("?"),
                                    b = m[0],
                                    v = m[1];
                                p = v ? i.parseQueryString(v) : {}, -1 === b.indexOf("://") && (b = "https://" + b), g = b
                            }
                            return r.__assign(r.__assign({}, e), {
                                useBinaryProtocol: "useBinaryProtocol" in e ? s.default.Config.supportsBinary && e.useBinaryProtocol : s.default.Config.preferBinary,
                                realtimeHost: f,
                                restHost: l,
                                maxMessageSize: e.maxMessageSize || c.maxMessageSize,
                                timeouts: d,
                                connectivityCheckParams: p,
                                connectivityCheckUrl: g
                            })
                        }
                        t.getHost = f, t.getPort = d, t.getHttpScheme = p, t.environmentFallbackHosts = h, t.getFallbackHosts = g, t.getHosts = m, t.getAgentString = function(e) {
                            var t = c.agent;
                            if (e.agents)
                                for (var n in e.agents) t += " " + n + "/" + e.agents[n];
                            return t
                        }, t.objectifyOptions = b, t.normaliseOptions = v, t.default = c, t.getDefaults = function(e) {
                            return Object.assign(c, e)
                        }
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(3)),
                            i = r.__importDefault(n(2)),
                            o = r.__importDefault(n(4)),
                            a = r.__importStar(n(1));

                        function u(e) {
                            var t = 0;
                            return e.name && (t += e.name.length), e.clientId && (t += e.clientId.length), e.extras && (t += JSON.stringify(e.extras).length), e.data && (t += a.dataSizeBytes(e.data)), t
                        }
                        var l = function() {
                            function e() {}
                            return e.prototype.toJSON = function() {
                                var e = this.encoding,
                                    t = this.data;
                                return t && s.default.BufferUtils.isBuffer(t) && (arguments.length > 0 ? (e = e ? e + "/base64" : "base64", t = s.default.BufferUtils.base64Encode(t)) : t = s.default.BufferUtils.toBuffer(t)), {
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
                                return this.name && (e += "; name=" + this.name), this.id && (e += "; id=" + this.id), this.timestamp && (e += "; timestamp=" + this.timestamp), this.clientId && (e += "; clientId=" + this.clientId), this.connectionId && (e += "; connectionId=" + this.connectionId), this.encoding && (e += "; encoding=" + this.encoding), this.extras && (e += "; extras =" + JSON.stringify(this.extras)), this.data && ("string" == typeof this.data ? e += "; data=" + this.data : s.default.BufferUtils.isBuffer(this.data) ? e += "; data (buffer)=" + s.default.BufferUtils.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data)), this.extras && (e += "; extras=" + JSON.stringify(this.extras)), e += "]"
                            }, e.encrypt = function(e, t, n) {
                                var r = e.data,
                                    i = e.encoding,
                                    o = t.channelCipher;
                                i = i ? i + "/" : "", s.default.BufferUtils.isBuffer(r) || (r = s.default.BufferUtils.utf8Encode(String(r)), i += "utf-8/"), o.encrypt(r, (function(t, r) {
                                    t ? n(t) : (e.data = r, e.encoding = i + "cipher+" + o.algorithm, n(null, e))
                                }))
                            }, e.encode = function(t, n, r) {
                                var i = t.data;
                                if ("string" != typeof i && !s.default.BufferUtils.isBuffer(i) && null != i) {
                                    if (!a.isObject(i) && !a.isArray(i)) throw new o.default("Data type is unsupported", 40013, 400);
                                    t.data = JSON.stringify(i), t.encoding = t.encoding ? t.encoding + "/json" : "json"
                                }
                                null != n && n.cipher ? e.encrypt(t, n, r) : r(null, t)
                            }, e.encodeArray = function(t, n, r) {
                                for (var s = 0, i = 0; i < t.length; i++) e.encode(t[i], n, (function(e) {
                                    e ? r(e) : ++s == t.length && r(null, t)
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
                                    i = e.encoding;
                                if (i) {
                                    var a = i.split("/"),
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
                                                    c = s.default.BufferUtils.base64Decode(String(c)), u == a.length && (r = c);
                                                    continue;
                                                case "utf-8":
                                                    c = s.default.BufferUtils.utf8Decode(c);
                                                    continue;
                                                case "json":
                                                    c = JSON.parse(c);
                                                    continue;
                                                case "cipher":
                                                    if (null != n.channelOptions && n.channelOptions.cipher && n.channelOptions.channelCipher) {
                                                        var p = d[3],
                                                            h = n.channelOptions.channelCipher;
                                                        if (p != h.algorithm) throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                                                        c = h.decrypt(c);
                                                        continue
                                                    }
                                                    throw new Error("Unable to decrypt message; not an encrypted channel");
                                                case "vcdiff":
                                                    if (!n.plugins || !n.plugins.vcdiff) throw new o.default("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
                                                    if ("undefined" == typeof Uint8Array) throw new o.default("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
                                                    try {
                                                        var g = n.baseEncodedPreviousPayload;
                                                        "string" == typeof g && (g = s.default.BufferUtils.utf8Encode(g)), g = s.default.BufferUtils.toBuffer(g), c = s.default.BufferUtils.toBuffer(c), r = c = s.default.BufferUtils.typedArrayToBuffer(n.plugins.vcdiff.decode(c, g))
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
                                        throw new o.default("Error processing the " + f + " encoding, decoder returned ‘" + m.message + "’", m.code || 40013, 400)
                                    } finally {
                                        e.encoding = u <= 0 ? null : a.slice(0, u).join("/"), e.data = c
                                    }
                                }
                                n.baseEncodedPreviousPayload = r
                            }, e.fromResponseBody = function(t, n, r) {
                                r && (t = a.decodeBody(t, r));
                                for (var s = 0; s < t.length; s++) {
                                    var o = t[s] = e.fromValues(t[s]);
                                    try {
                                        e.decode(o, n)
                                    } catch (e) {
                                        i.default.logAction(i.default.LOG_ERROR, "Message.fromResponseBody()", e.toString())
                                    }
                                }
                                return t
                            }, e.fromValues = function(t) {
                                return Object.assign(new e, t)
                            }, e.fromValuesArray = function(t) {
                                for (var n = t.length, r = new Array(n), s = 0; s < n; s++) r[s] = e.fromValues(t[s]);
                                return r
                            }, e.fromEncoded = function(t, n) {
                                var r = e.fromValues(t),
                                    o = function(e) {
                                        if (e && e.cipher) {
                                            if (!s.default.Crypto) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                                            var t = s.default.Crypto.getCipher(e.cipher);
                                            return {
                                                cipher: t.cipherParams,
                                                channelCipher: t.cipher
                                            }
                                        }
                                        return null != e ? e : {}
                                    }(null != n ? n : null);
                                try {
                                    e.decode(r, o)
                                } catch (e) {
                                    i.default.logAction(i.default.LOG_ERROR, "Message.fromEncoded()", e.toString())
                                }
                                return r
                            }, e.fromEncodedArray = function(t, n) {
                                return t.map((function(t) {
                                    return e.fromEncoded(t, n)
                                }))
                            }, e.getMessagesSize = function(e) {
                                for (var t, n = 0, r = 0; r < e.length; r++) n += (t = e[r]).size || (t.size = u(t));
                                return n
                            }, e.serialize = a.encodeBody, e
                        }();
                        t.default = l
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(4)),
                            o = r.__importDefault(n(9)),
                            a = r.__importDefault(n(15)),
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
                                AUTH: 17,
                                ACTIVATE: 18
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
                        var p = "id channel channelSerial connectionId count msgSerial timestamp".split(" "),
                            h = function() {
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
                                }, e.Action = u, e.channelModes = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE"], e.ActionName = l, e.serialize = s.encodeBody, e.deserialize = function(t, n) {
                                    var r = s.decodeBody(t, n);
                                    return e.fromDeserialized(r)
                                }, e.fromDeserialized = function(t) {
                                    var n = t.error;
                                    n && (t.error = i.default.fromValues(n));
                                    var r = t.messages;
                                    if (r)
                                        for (var s = 0; s < r.length; s++) r[s] = o.default.fromValues(r[s]);
                                    var u = t.presence;
                                    if (u)
                                        for (s = 0; s < u.length; s++) u[s] = a.default.fromValues(u[s], !0);
                                    return Object.assign(new e, t)
                                }, e.stringify = function(t) {
                                    var n, r = "[ProtocolMessage";
                                    void 0 !== t.action && (r += "; action=" + e.ActionName[t.action] || 0);
                                    for (var u = 0; u < p.length; u++) n = p[u], void 0 !== t[n] && (r += "; " + n + "=" + t[n]);
                                    if (t.messages && (r += "; messages=" + d(o.default.fromValuesArray(t.messages))), t.presence && (r += "; presence=" + d(a.default.fromValuesArray(t.presence))), t.error && (r += "; error=" + i.default.fromValues(t.error).toString()), t.auth && t.auth.accessToken && (r += "; token=" + t.auth.accessToken), t.flags && (r += "; flags=" + f.filter(t.hasFlag).join(",")), t.params) {
                                        var l = "";
                                        s.forInOwnNonNullProperties(t.params, (function(e) {
                                            l.length > 0 && (l += "; "), l += e + "=" + t.params[e]
                                        })), l.length > 0 && (r += "; params=[" + l + "]")
                                    }
                                    return r += "]"
                                }, e
                            }();
                        t.default = h
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function() {
                            var e = r,
                                t = e.lib.WordArray;

                            function n(e, n, r) {
                                for (var s = [], i = 0, o = 0; o < n; o++)
                                    if (o % 4) {
                                        var a = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
                                        s[i >>> 2] |= a << 24 - i % 4 * 8, i++
                                    } return t.create(s, i)
                            }
                            e.enc.Base64 = {
                                stringify: function(e) {
                                    var t = e.words,
                                        n = e.sigBytes,
                                        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                                    e.clamp();
                                    for (var s = [], i = 0; i < n; i += 3)
                                        for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) s.push(r.charAt(o >>> 6 * (3 - a) & 63));
                                    var u = r.charAt(64);
                                    if (u)
                                        for (; s.length % 4;) s.push(u);
                                    return s.join("")
                                },
                                parse: function(e) {
                                    var t = e.length,
                                        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                        s = this._reverseMap;
                                    if (!s) {
                                        s = this._reverseMap = [];
                                        for (var i = 0; i < r.length; i++) s[r.charCodeAt(i)] = i
                                    }
                                    var o = r.charAt(64);
                                    if (o) {
                                        var a = e.indexOf(o); - 1 !== a && (t = a)
                                    }
                                    return n(e, t, s)
                                }
                            }
                        }(), r.enc.Base64)
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(10)),
                            o = r.__importDefault(n(26)),
                            a = r.__importDefault(n(2)),
                            u = r.__importDefault(n(8)),
                            l = r.__importDefault(n(20)),
                            c = r.__importDefault(n(17)),
                            f = r.__importDefault(n(4)),
                            d = r.__importDefault(n(21)),
                            p = r.__importDefault(n(3));

                        function h(e) {
                            return function(e) {
                                return !!e.code && !c.default.isTokenErr(e) && (!!s.arrIn([80015, 80017, 80030], e.code) || e.code >= 4e4 && e.code < 5e4)
                            }(e) ? [i.default.fromValues({
                                action: i.default.Action.ERROR,
                                error: e
                            })] : [i.default.fromValues({
                                action: i.default.Action.DISCONNECTED,
                                error: e
                            })]
                        }
                        var g = function(e) {
                            function t(t, n, r) {
                                var s = e.call(this, t, n, r, !0) || this;
                                return s.onAuthUpdated = function(e) {
                                    s.authParams = {
                                        access_token: e.token
                                    }
                                }, s.stream = !("stream" in r) || r.stream, s.sendRequest = null, s.recvRequest = null, s.pendingCallback = null, s.pendingItems = null, s
                            }
                            return r.__extends(t, e), t.prototype.connect = function() {
                                var e = this;
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.connect()", "starting"), o.default.prototype.connect.call(this);
                                var t = this.params,
                                    n = t.options,
                                    r = u.default.getHost(n, t.host),
                                    i = u.default.getPort(n),
                                    l = n.tls ? "https://" : "http://";
                                this.baseUri = l + r + ":" + i + "/comet/";
                                var c = this.baseUri + "connect";
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.connect()", "uri: " + c), this.auth.getAuthParams((function(t, n) {
                                    if (t) e.disconnect(t);
                                    else if (!e.isDisposed) {
                                        e.authParams = n;
                                        var r = e.params.getConnectParams(n);
                                        "stream" in r && (e.stream = r.stream), a.default.logAction(a.default.LOG_MINOR, "CometTransport.connect()", "connectParams:" + s.toQueryString(r));
                                        var i = !1,
                                            o = e.recvRequest = e.createRequest(c, null, r, null, e.stream ? d.default.REQ_RECV_STREAM : d.default.REQ_RECV);
                                        o.on("data", (function(t) {
                                            e.recvRequest && (i || (i = !0, e.emit("preconnect")), e.onData(t))
                                        })), o.on("complete", (function(t) {
                                            e.recvRequest || (t = t || new f.default("Request cancelled", 80003, 400)), e.recvRequest = null, i || t || (i = !0, e.emit("preconnect")), e.onActivity(), t ? t.code ? e.onData(h(t)) : e.disconnect(t) : p.default.Config.nextTick((function() {
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
                                        n && (a.default.logAction(a.default.LOG_ERROR, "CometTransport.request" + (e ? "Close()" : "Disconnect()"), "request returned err = " + s.inspectError(n)), t.finish("disconnected", n))
                                    })), r.exec()
                                }
                            }, t.prototype.dispose = function() {
                                var e = this;
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = !0, this.recvRequest && (a.default.logAction(a.default.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", l.default.disconnected()), p.default.Config.nextTick((function() {
                                    e.emit("disposed")
                                })))
                            }, t.prototype.onConnect = function(e) {
                                var t;
                                if (!this.isDisposed) {
                                    var n = null === (t = e.connectionDetails) || void 0 === t ? void 0 : t.connectionKey;
                                    o.default.prototype.onConnect.call(this, e);
                                    var r = this.baseUri + n;
                                    a.default.logAction(a.default.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + r), this.sendUri = r + "/send", this.recvUri = r + "/recv", this.closeUri = r + "/close", this.disconnectUri = r + "/disconnect"
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
                                    e && a.default.logAction(a.default.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + s.inspectError(e)), t.sendRequest = null, e ? e.code ? t.onData(h(e)) : t.disconnect(e) : (n && t.onData(n), t.pendingItems && p.default.Config.nextTick((function() {
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
                                        e.recvRequest = null, e.onActivity(), t ? t.code ? e.onData(h(t)) : e.disconnect(t) : p.default.Config.nextTick((function() {
                                            e.recv()
                                        }))
                                    })), t.exec()
                                }
                            }, t.prototype.onData = function(e) {
                                try {
                                    var t = this.decodeResponse(e);
                                    if (t && t.length)
                                        for (var n = 0; n < t.length; n++) this.onProtocolMessage(i.default.fromDeserialized(t[n]))
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
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(3)),
                            i = r.__importStar(n(1)),
                            o = r.__importDefault(n(2)),
                            a = r.__importDefault(n(17)),
                            u = r.__importDefault(n(18)),
                            l = n(4);

                        function c(e, t, n, r, s) {
                            e.http.supportsAuthHeaders ? e.auth.getAuthHeaders((function(e, o) {
                                e ? r(e) : s(i.mixin(o, t), n)
                            })) : e.auth.getAuthParams((function(e, o) {
                                e ? r(e) : s(t, i.mixin(o, n))
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
                        var p = function() {
                            function e() {}
                            return e.get = function(t, n, r, s, i, o) {
                                e.do(u.default.Get, t, n, null, r, s, i, o)
                            }, e.delete = function(t, n, r, s, i, o) {
                                e.do(u.default.Delete, t, n, null, r, s, i, o)
                            }, e.post = function(t, n, r, s, i, o, a) {
                                e.do(u.default.Post, t, n, r, s, i, o, a)
                            }, e.patch = function(t, n, r, s, i, o, a) {
                                e.do(u.default.Patch, t, n, r, s, i, o, a)
                            }, e.put = function(t, n, r, s, i, o, a) {
                                e.do(u.default.Put, t, n, r, s, i, o, a)
                            }, e.do = function(e, t, n, r, u, p, h, g) {
                                o.default.shouldLog(o.default.LOG_MICRO) && (g = function(e, t, n, r) {
                                    return function(a, u, l, c, p) {
                                        a ? o.default.logAction(o.default.LOG_MICRO, "Resource." + t + "()", "Received Error; " + d(n, r) + "; Error: " + i.inspectError(a)) : o.default.logAction(o.default.LOG_MICRO, "Resource." + t + "()", "Received; " + d(n, r) + "; Headers: " + f(l) + "; StatusCode: " + p + "; Body: " + (s.default.BufferUtils.isBuffer(u) ? u.toString() : u)), e && e(a, u, l, c, p)
                                    }
                                }(g, e, n, p)), h && (g = g && function(e, t) {
                                    return function(n, r, s, o, a) {
                                        if (!n || r) {
                                            if (!o) try {
                                                r = i.decodeBody(r, t)
                                            } catch (t) {
                                                return void(i.isErrorInfoOrPartialErrorInfo(t) ? e(t) : e(new l.PartialErrorInfo(i.inspectError(t), null)))
                                            }
                                            if (r) {
                                                var u = r,
                                                    c = u.statusCode,
                                                    f = u.response,
                                                    d = u.headers;
                                                if (void 0 !== c) {
                                                    if (c < 200 || c >= 300) {
                                                        var p = f && f.error || n;
                                                        return p || ((p = new Error("Error in unenveloping " + r)).statusCode = c), void e(p, f, d, !0, c)
                                                    }
                                                    e(n, f, d, !0, c)
                                                } else e(n, r, s, !0, a)
                                            } else e(new l.PartialErrorInfo("unenvelope(): Response body is missing", null))
                                        } else e(n)
                                    }
                                }(g, h), (p = p || {}).envelope = h), c(t, u, p, g, (function u(l, f) {
                                    var p;
                                    if (o.default.shouldLog(o.default.LOG_MICRO) && o.default.logAction(o.default.LOG_MICRO, "Resource." + e + "()", "Sending; " + d(n, f)), o.default.shouldLog(o.default.LOG_MICRO)) {
                                        var h = r;
                                        if ((null === (p = l["content-type"]) || void 0 === p ? void 0 : p.indexOf("msgpack")) > 0) try {
                                            h = s.default.Config.msgpack.decode(r)
                                        } catch (t) {
                                            o.default.logAction(o.default.LOG_MICRO, "Resource." + e + "()", "Sending MsgPack Decoding Error: " + i.inspectError(t))
                                        }
                                        o.default.logAction(o.default.LOG_MICRO, "Resource." + e + "()", "Sending; " + d(n, f) + "; Body: " + h)
                                    }
                                    t.http.do(e, t, n, l, r, f, (function(e, n, r, s, i) {
                                        e && a.default.isTokenErr(e) ? t.auth.authorize(null, null, (function(e) {
                                            e ? g(e) : c(t, r, f, g, u)
                                        })) : g(e, n, r, s, i)
                                    }))
                                }))
                            }, e
                        }();
                        t.default = p
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(2)),
                            i = r.__importDefault(n(3)),
                            o = r.__importDefault(n(9)),
                            a = r.__importStar(n(1));

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
                                return e && i.default.BufferUtils.isBuffer(e) && (arguments.length > 0 ? (t = t ? t + "/base64" : "base64", e = i.default.BufferUtils.base64Encode(e)) : e = i.default.BufferUtils.toBuffer(e)), {
                                    id: this.id,
                                    clientId: this.clientId,
                                    action: u(this.action),
                                    data: e,
                                    encoding: t,
                                    extras: this.extras
                                }
                            }, e.prototype.toString = function() {
                                var e = "[PresenceMessage";
                                return e += "; action=" + this.action, this.id && (e += "; id=" + this.id), this.timestamp && (e += "; timestamp=" + this.timestamp), this.clientId && (e += "; clientId=" + this.clientId), this.connectionId && (e += "; connectionId=" + this.connectionId), this.encoding && (e += "; encoding=" + this.encoding), this.data && ("string" == typeof this.data ? e += "; data=" + this.data : i.default.BufferUtils.isBuffer(this.data) ? e += "; data (buffer)=" + i.default.BufferUtils.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data)), this.extras && (e += "; extras=" + JSON.stringify(this.extras)), e += "]"
                            }, e.fromResponseBody = function(t, n, r) {
                                var i = [];
                                r && (t = a.decodeBody(t, r));
                                for (var o = 0; o < t.length; o++) {
                                    var u = i[o] = e.fromValues(t[o], !0);
                                    try {
                                        e.decode(u, n)
                                    } catch (e) {
                                        s.default.logAction(s.default.LOG_ERROR, "PresenceMessage.fromResponseBody()", e.toString())
                                    }
                                }
                                return i
                            }, e.fromValues = function(t, n) {
                                return n && (t.action = e.Actions[t.action]), Object.assign(new e, t)
                            }, e.fromValuesArray = function(t) {
                                for (var n = t.length, r = new Array(n), s = 0; s < n; s++) r[s] = e.fromValues(t[s]);
                                return r
                            }, e.fromEncoded = function(t, n) {
                                var r = e.fromValues(t, !0);
                                try {
                                    e.decode(r, null != n ? n : {})
                                } catch (e) {
                                    s.default.logAction(s.default.LOG_ERROR, "PresenceMessage.fromEncoded()", e.toString())
                                }
                                return r
                            }, e.fromEncodedArray = function(t, n) {
                                return t.map((function(t) {
                                    return e.fromEncoded(t, n)
                                }))
                            }, e.fromData = function(t) {
                                return t instanceof e ? t : e.fromValues({
                                    data: t
                                })
                            }, e.Actions = ["absent", "present", "enter", "leave", "update"], e.encode = o.default.encode, e.decode = o.default.decode, e.getMessagesSize = o.default.getMessagesSize, e
                        }();
                        t.default = l
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var r = n(0),
                                s = r.__importStar(n(1)),
                                i = r.__importDefault(n(7)),
                                o = r.__importStar(n(4)),
                                a = r.__importDefault(n(2)),
                                u = r.__importDefault(n(8)),
                                l = r.__importDefault(n(21)),
                                c = r.__importDefault(n(3));

                            function f(e, t) {
                                if (function(e, t) {
                                        return s.arrIn(s.allToLowerCase(s.keysArray(t)), "x-ably-errorcode")
                                    }(0, t)) return e.error && o.default.fromValues(e.error)
                            }
                            var d = function() {},
                                p = 0,
                                h = {},
                                g = void 0 !== e && e.XDomainRequest;

                            function m() {
                                var e, t;
                                return g && (e = (t = navigator.userAgent.toString().match(/MSIE\s([\d.]+)/)) && Number(t[1])) && 10 === e
                            }
                            var y = function(e) {
                                function t(t, n, r, i, o, a, u) {
                                    var l = e.call(this) || this;
                                    return (r = r || {}).rnd = s.cheapRandStr(), m() && !r.envelope && (r.envelope = "json"), l.uri = t + s.toQueryString(r), l.headers = n || {}, l.body = i, l.method = u ? u.toUpperCase() : s.isEmptyArg(i) ? "GET" : "POST", l.requestMode = o, l.timeouts = a, l.timedOut = !1, l.requestComplete = !1, l.id = String(++p), h[l.id] = l, l
                                }
                                return r.__extends(t, e), t.createRequest = function(e, n, r, i, o, a, l) {
                                    var c = a || u.default.TIMEOUTS;
                                    return new t(e, n, s.copy(r), i, o, c, l)
                                }, t.prototype.complete = function(e, t, n, r, s) {
                                    this.requestComplete || (this.requestComplete = !0, !e && t && this.emit("data", t), this.emit("complete", e, t, n, r, s), this.dispose())
                                }, t.prototype.abort = function() {
                                    this.dispose()
                                }, t.prototype.exec = function() {
                                    var e = this,
                                        t = this.headers,
                                        n = this.requestMode == l.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout,
                                        r = this.timer = setTimeout((function() {
                                            e.timedOut = !0, u.abort()
                                        }), n),
                                        i = this.method,
                                        u = this.xhr = new XMLHttpRequest,
                                        d = t.accept,
                                        p = this.body,
                                        h = "text";
                                    for (var g in d ? 0 === d.indexOf("application/x-msgpack") && (h = "arraybuffer") : t.accept = "application/json", p && (t["content-type"] || (t["content-type"] = "application/json")).indexOf("application/json") > -1 && "string" != typeof p && (p = JSON.stringify(p)), u.open(i, this.uri, !0), u.responseType = h, "authorization" in t && (u.withCredentials = !0), t) u.setRequestHeader(g, t[g]);
                                    var m, y, b, v = function(t, n, r, s) {
                                        var i, u = n + " (event type: " + t.type + ")";
                                        (null === (i = null == e ? void 0 : e.xhr) || void 0 === i ? void 0 : i.statusText) && (u += ", current statusText is " + e.xhr.statusText), a.default.logAction(a.default.LOG_ERROR, "Request.on" + t.type + "()", u), e.complete(new o.PartialErrorInfo(u, r, s))
                                    };
                                    u.onerror = function(e) {
                                        v(e, "XHR error occurred", null, 400)
                                    }, u.onabort = function(t) {
                                        e.timedOut ? v(t, "Request aborted due to request timeout expiring", null, 408) : v(t, "Request cancelled", null, 400)
                                    }, u.ontimeout = function(e) {
                                        v(e, "Request timed out", null, 408)
                                    };
                                    var w = 0,
                                        _ = !1,
                                        C = function() {
                                            var n;
                                            try {
                                                var r = function(e, t) {
                                                    return e.getResponseHeader && e.getResponseHeader(t)
                                                }(u, "content-type");
                                                if (r ? r.indexOf("application/json") >= 0 : "text" == u.responseType) {
                                                    var i = "arraybuffer" === u.responseType ? c.default.BufferUtils.utf8Decode(u.response) : String(u.responseText);
                                                    n = i.length ? JSON.parse(i) : i, _ = !0
                                                } else n = u.response;
                                                void 0 !== n.response ? (y = n.statusCode, b = y < 400, t = n.headers, n = n.response) : t = function(e) {
                                                    for (var t = s.trim(e.getAllResponseHeaders()).split("\r\n"), n = {}, r = 0; r < t.length; r++) {
                                                        var i = t[r].split(":").map(s.trim);
                                                        n[i[0].toLowerCase()] = i[1]
                                                    }
                                                    return n
                                                }(u)
                                            } catch (t) {
                                                return void e.complete(new o.PartialErrorInfo("Malformed response body from server: " + t.message, null, 400))
                                            }
                                            if (b || s.isArray(n)) e.complete(null, n, t, _, y);
                                            else {
                                                var a = f(n, t);
                                                a || (a = new o.PartialErrorInfo("Error response received from server: " + y + " body was: " + c.default.Config.inspect(n), null, y)), e.complete(a, n, t, _, y)
                                            }
                                        };

                                    function T() {
                                        for (var e, t, n = u.responseText, r = n.length - 1; w < r && (e = n.indexOf("\n", w)) > -1;) t = n.slice(w, e), w = e + 1, R(t)
                                    }
                                    var R = function(t) {
                                        try {
                                            t = JSON.parse(t)
                                        } catch (t) {
                                            return void e.complete(new o.PartialErrorInfo("Malformed response body from server: " + t.message, null, 400))
                                        }
                                        e.emit("data", t)
                                    };
                                    u.onreadystatechange = function() {
                                        var t = u.readyState;
                                        t < 3 || 0 !== u.status && (void 0 === y && (1223 === (y = u.status) && (y = 204), clearTimeout(r), b = y < 400, 204 != y ? m = e.requestMode == l.default.REQ_RECV_STREAM && b && function(e) {
                                            return e.getResponseHeader && (e.getResponseHeader("transfer-encoding") || !e.getResponseHeader("content-length"))
                                        }(u) : e.complete(null, null, null, null, y)), 3 == t && m ? T() : 4 == t && (m ? (T(), e.streamComplete = !0, c.default.Config.nextTick((function() {
                                            e.complete()
                                        }))) : C()))
                                    }, u.send(p)
                                }, t.prototype.dispose = function() {
                                    var e = this.xhr;
                                    if (e) {
                                        e.onreadystatechange = e.onerror = e.onabort = e.ontimeout = d, this.xhr = null;
                                        var t = this.timer;
                                        t && (clearTimeout(t), this.timer = null), this.requestComplete || e.abort()
                                    }
                                    delete h[this.id]
                                }, t
                            }(i.default);
                            t.default = y
                        }).call(this, n(13))
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(2)),
                            i = r.__importStar(n(1)),
                            o = r.__importDefault(n(23)),
                            a = r.__importDefault(n(4)),
                            u = r.__importDefault(n(45)),
                            l = n(11),
                            c = r.__importDefault(n(18)),
                            f = r.__importDefault(n(25)),
                            d = r.__importDefault(n(3)),
                            p = r.__importDefault(n(14)),
                            h = Math.pow(2, 17);

                        function g() {}

                        function m(e) {
                            return i.isErrorInfoOrPartialErrorInfo(e) ? (e.code || (403 === e.statusCode ? e.code = 40300 : (e.code = 40170, e.statusCode = 401)), e) : new a.default(i.inspectError(e), e.code || 40170, e.statusCode || 401)
                        }
                        var y = function(e, t) {
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
                                n = i.keysArray(e, !0);
                            if (!n) return "";
                            n.sort();
                            for (var r = 0; r < n.length; r++) t[n[r]] = e[n[r]].sort();
                            return JSON.stringify(t)
                        }

                        function v(e) {
                            if (e.authCallback) s.default.logAction(s.default.LOG_MINOR, "Auth()", "using token auth with authCallback");
                            else if (e.authUrl) s.default.logAction(s.default.LOG_MINOR, "Auth()", "using token auth with authUrl");
                            else if (e.key) s.default.logAction(s.default.LOG_MINOR, "Auth()", "using token auth with client-side signing");
                            else {
                                if (!e.tokenDetails) {
                                    var t = "authOptions must include valid authentication parameters";
                                    throw s.default.logAction(s.default.LOG_ERROR, "Auth()", t), new Error(t)
                                }
                                s.default.logAction(s.default.LOG_MINOR, "Auth()", "using token auth with supplied token only")
                            }
                        }

                        function w(e) {
                            return e.useTokenAuth || ! function(e) {
                                return "useTokenAuth" in e && !e.useTokenAuth
                            }(e) && (e.authCallback || e.authUrl || e.token || e.tokenDetails)
                        }
                        var _ = 0,
                            C = function() {
                                function e(e, t) {
                                    if (this.authOptions = {}, this.client = e, this.tokenParams = t.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, w(t)) {
                                        if (t.key && !y) {
                                            var n = "client-side token request signing not supported";
                                            throw s.default.logAction(s.default.LOG_ERROR, "Auth()", n), new Error(n)
                                        }(function(e) {
                                            return !e.key && !e.authCallback && !e.authUrl
                                        })(t) && s.default.logAction(s.default.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(t.defaultTokenParams, t), v(this.authOptions)
                                    } else {
                                        if (!t.key) throw n = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)", s.default.logAction(s.default.LOG_ERROR, "Auth()", n), new a.default(n, 40160, 401);
                                        s.default.logAction(s.default.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(t)
                                    }
                                }
                                return e.prototype.authorize = function(e, t, n) {
                                    var r, o = this;
                                    if ("function" != typeof e || n ? "function" != typeof t || n ? r = t : (n = t, r = null) : (n = e, r = e = null), !n && this.client.options.promises) return i.promisify(this, "authorize", arguments);
                                    if (r && r.key && this.authOptions.key !== r.key) throw new a.default("Unable to update auth options with incompatible key", 40102, 401);
                                    r && "force" in r && (s.default.logAction(s.default.LOG_ERROR, "Auth.authorize", "Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want"), i.isOnlyPropIn(r, "force") && (r = null)), this._forceNewToken(e, r, (function(e, t) {
                                        if (e) return o.client.connection && e.statusCode === f.default.Forbidden && o.client.connection.connectionManager.actOnErrorFromAuthorize(e), void(null == n || n(e));
                                        o.client.connection ? o.client.connection.connectionManager.onAuthUpdated(t, n || g) : null == n || n(null, t)
                                    }))
                                }, e.prototype.authorise = function(e, t, n) {
                                    s.default.deprecated("Auth.authorise", "Auth.authorize"), this.authorize(e, t, n)
                                }, e.prototype._forceNewToken = function(e, t, n) {
                                    var r = this;
                                    this.tokenDetails = null, this._saveTokenOptions(e, t), v(this.authOptions), this._ensureValidAuthCredentials(!0, (function(e, t) {
                                        delete r.tokenParams.timestamp, delete r.authOptions.queryTime, n(e, t)
                                    }))
                                }, e.prototype.requestToken = function(e, t, n) {
                                    var r = this;
                                    if ("function" != typeof e || n ? "function" != typeof t || n || (n = t, t = null) : (n = e, t = e = null), !n && this.client.options.promises) return i.promisify(this, "requestToken", arguments);
                                    t = t || this.authOptions, e = e || i.copy(this.tokenParams);
                                    var o, u = n || g,
                                        l = this.client;
                                    if (t.authCallback) s.default.logAction(s.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), o = t.authCallback;
                                    else if (t.authUrl) s.default.logAction(s.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), o = function(e, n) {
                                        var o, u = i.mixin({
                                                accept: "application/json, text/plain"
                                            }, t.authHeaders),
                                            f = t.authMethod && "post" === t.authMethod.toLowerCase(),
                                            p = t.authUrl.indexOf("?");
                                        p > -1 && (o = i.parseQueryString(t.authUrl.slice(p)), t.authUrl = t.authUrl.slice(0, p), f || (t.authParams = i.mixin(o, t.authParams)));
                                        var g = i.mixin({}, t.authParams || {}, e),
                                            m = function(e, t, r, o) {
                                                var u;
                                                if (e ? s.default.logAction(s.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + i.inspectError(e)) : (u = r["content-type"], s.default.logAction(s.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + u + "; body: " + i.inspectBody(t))), e || o) return n(e, t);
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
                                        if (s.default.logAction(s.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + t.authUrl + "; Params: " + JSON.stringify(g) + "; method: " + (f ? "POST" : "GET")), f) {
                                            var y = u || {};
                                            y["content-type"] = "application/x-www-form-urlencoded";
                                            var b = i.toQueryString(g).slice(1);
                                            r.client.http.doUri(c.default.Post, l, t.authUrl, y, b, o, m)
                                        } else r.client.http.doUri(c.default.Get, l, t.authUrl, u || {}, null, g, m)
                                    };
                                    else {
                                        if (!t.key) return s.default.logAction(s.default.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), void u(new a.default("Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)", 40171, 403));
                                        s.default.logAction(s.default.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), o = function(e, n) {
                                            r.createTokenRequest(e, t, n)
                                        }
                                    }
                                    "capability" in e && (e.capability = b(e.capability));
                                    var f = !1,
                                        p = this.client.options.timeouts.realtimeRequestTimeout,
                                        y = setTimeout((function() {
                                            f = !0;
                                            var e = "Token request callback timed out after " + p / 1e3 + " seconds";
                                            s.default.logAction(s.default.LOG_ERROR, "Auth.requestToken()", e), u(new a.default(e, 40170, 401))
                                        }), p);
                                    o(e, (function(e, n, o) {
                                        if (!f) {
                                            if (clearTimeout(y), e) return s.default.logAction(s.default.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + i.inspectError(e)), void u(m(e));
                                            if ("string" != typeof n) {
                                                if ("object" != typeof n) {
                                                    var d = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof n;
                                                    return s.default.logAction(s.default.LOG_ERROR, "Auth.requestToken()", d), void u(new a.default(d, 40170, 401))
                                                }
                                                var p = JSON.stringify(n).length;
                                                if (p > h && !t.suppressMaxLengthCheck) u(new a.default("Token request/details object exceeded max permitted stringified size (was " + p + " bytes)", 40170, 401));
                                                else if ("issued" in n) u(null, n);
                                                else {
                                                    if (!("keyName" in n)) return d = "Expected token request callback to call back with a token string, token request object, or token details object", s.default.logAction(s.default.LOG_ERROR, "Auth.requestToken()", d), void u(new a.default(d, 40170, 401));
                                                    var g, b, v, w;
                                                    b = function(e, t, n, r) {
                                                        if (e) return s.default.logAction(s.default.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + i.inspectError(e)), void u(m(e));
                                                        r || (t = JSON.parse(t)), s.default.logAction(s.default.LOG_MINOR, "Auth.getToken()", "token received"), u(null, t)
                                                    }, v = "/keys/" + (g = n).keyName + "/requestToken", w = i.defaultPostHeaders(r.client.options), t.requestHeaders && i.mixin(w, t.requestHeaders), s.default.logAction(s.default.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + v + "; Token params: " + JSON.stringify(g)), r.client.http.do(c.default.Post, l, (function(e) {
                                                        return l.baseUri(e) + v
                                                    }), w, JSON.stringify(g), null, b)
                                                }
                                            } else 0 === n.length ? u(new a.default("Token string is empty", 40170, 401)) : n.length > h ? u(new a.default("Token string exceeded max permitted length (was " + n.length + " bytes)", 40170, 401)) : "undefined" === n || "null" === n ? u(new a.default("Token string was literal null/undefined", 40170, 401)) : "{" !== n[0] || o && o.indexOf("application/jwt") > -1 ? u(null, {
                                                token: n
                                            }) : u(new a.default("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401))
                                        }
                                    }))
                                }, e.prototype.createTokenRequest = function(e, t, n) {
                                    var r = this;
                                    if ("function" != typeof e || n ? "function" != typeof t || n || (n = t, t = null) : (n = e, t = e = null), !n && this.client.options.promises) return i.promisify(this, "createTokenRequest", arguments);
                                    t = t || this.authOptions, e = e || i.copy(this.tokenParams);
                                    var o = t.key;
                                    if (o) {
                                        var u = o.split(":"),
                                            l = u[0],
                                            c = u[1];
                                        if (c)
                                            if ("" !== e.clientId) {
                                                "capability" in e && (e.capability = b(e.capability));
                                                var f, d = i.mixin({
                                                        keyName: l
                                                    }, e),
                                                    p = e.clientId || "",
                                                    h = e.ttl || "",
                                                    g = e.capability || "";
                                                f = function() {
                                                    var e = d.nonce || (d.nonce = ("000000" + Math.floor(1e16 * Math.random())).slice(-16)),
                                                        t = d.timestamp,
                                                        r = d.keyName + "\n" + h + "\n" + g + "\n" + p + "\n" + t + "\n" + e + "\n";
                                                    d.mac = d.mac || y(r, c), s.default.logAction(s.default.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), n(null, d)
                                                }, d.timestamp ? f() : r.getTimestamp(t && t.queryTime, (function(e, t) {
                                                    e ? n(e) : (d.timestamp = t, f())
                                                }))
                                            } else n(new a.default("clientId can’t be an empty string", 40012, 400));
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
                                                access_token: n.token
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
                                                authorization: "Bearer " + i.toBase64(n.token)
                                            })
                                        }
                                    }))
                                }, e.prototype.getTimestamp = function(e, t) {
                                    this.isTimeOffsetSet() || !e && !this.authOptions.queryTime ? t(null, this.getTimestampUsingOffset()) : this.client.time(t)
                                }, e.prototype.getTimestampUsingOffset = function() {
                                    return i.now() + (this.client.serverTimeOffset || 0)
                                }, e.prototype.isTimeOffsetSet = function() {
                                    return null !== this.client.serverTimeOffset
                                }, e.prototype._saveBasicOptions = function(e) {
                                    this.method = "basic", this.key = e.key, this.basicKey = i.toBase64(e.key), this.authOptions = e || {}, "clientId" in e && this._userSetClientId(e.clientId)
                                }, e.prototype._saveTokenOptions = function(e, t) {
                                    this.method = "token", e && (this.tokenParams = e), t && (t.token && (t.tokenDetails = "string" == typeof t.token ? {
                                        token: t.token
                                    } : t.token), t.tokenDetails && (this.tokenDetails = t.tokenDetails), "clientId" in t && this._userSetClientId(t.clientId), this.authOptions = t)
                                }, e.prototype._ensureValidAuthCredentials = function(e, t) {
                                    var n = this,
                                        r = this.tokenDetails;
                                    if (r) {
                                        if (this._tokenClientIdMismatch(r.clientId)) return void t(new a.default("Mismatch between clientId in token (" + r.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403));
                                        if (!this.isTimeOffsetSet() || !r.expires || r.expires >= this.getTimestampUsingOffset()) return s.default.logAction(s.default.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + r.expires), void t(null, r);
                                        s.default.logAction(s.default.LOG_MINOR, "Auth.getToken()", "deleting expired token"), this.tokenDetails = null
                                    }
                                    if ((this.waitingForTokenRequest || (this.waitingForTokenRequest = o.default.create())).push(t), null === this.currentTokenRequestId || e) {
                                        var i = this.currentTokenRequestId = _++;
                                        this.requestToken(this.tokenParams, this.authOptions, (function(e, t) {
                                            if (n.currentTokenRequestId > i) s.default.logAction(s.default.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one");
                                            else {
                                                n.currentTokenRequestId = null;
                                                var r = n.waitingForTokenRequest || g;
                                                n.waitingForTokenRequest = null, e ? r(e) : r(null, n.tokenDetails = t)
                                            }
                                        }))
                                    }
                                }, e.prototype._userSetClientId = function(e) {
                                    if ("string" != typeof e && null !== e) throw new a.default("clientId must be either a string or null", 40012, 400);
                                    if ("*" === e) throw new a.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
                                    var t = this._uncheckedSetClientId(e);
                                    if (t) throw t
                                }, e.prototype._uncheckedSetClientId = function(e) {
                                    if (this._tokenClientIdMismatch(e)) {
                                        var t = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + e,
                                            n = new a.default(t, 40102, 401);
                                        return s.default.logAction(s.default.LOG_ERROR, "Auth._uncheckedSetClientId()", t), n
                                    }
                                    return this.clientId = this.tokenParams.clientId = e, null
                                }, e.prototype._tokenClientIdMismatch = function(e) {
                                    return !(!this.clientId || "*" === this.clientId || !e || "*" === e || this.clientId === e)
                                }, e.isTokenErr = function(e) {
                                    return e.code && e.code >= 40140 && e.code < 40150
                                }, e.prototype.revokeTokens = function(e, t, n) {
                                    if (w(this.client.options)) throw new a.default("Cannot revoke tokens when using token auth", 40162, 401);
                                    var s, o = this.client.options.keyName;
                                    if ("function" == typeof t ? (n = t, s = {}) : s = null != t ? t : {}, void 0 === n) {
                                        if (this.client.options.promises) return i.promisify(this, "revokeTokens", [e, s]);
                                        n = g
                                    }
                                    var u = n,
                                        l = r.__assign({
                                            targets: e.map((function(e) {
                                                return "".concat(e.type, ":").concat(e.value)
                                            }))
                                        }, s),
                                        c = this.client.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        f = i.defaultPostHeaders(this.client.options, c);
                                    this.client.options.headers && i.mixin(f, this.client.options.headers);
                                    var d = i.encodeBody(l, c);
                                    p.default.post(this.client, "/keys/".concat(o, "/revokeTokens"), d, f, {
                                        newBatchResponse: "true"
                                    }, null, (function(e, t, n, r) {
                                        if (e) u(e);
                                        else {
                                            var s = r ? t : i.decodeBody(t, c);
                                            u(null, s)
                                        }
                                    }))
                                }, e
                            }();
                        t.default = C
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        Object.defineProperty(t, "__esModule", {
                                value: !0
                            }),
                            function(e) {
                                e.Get = "get", e.Delete = "delete", e.Post = "post", e.Put = "put", e.Patch = "patch"
                            }(r || (r = {})), t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.HttpPaginatedResponse = t.PaginatedResult = void 0;
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(2)),
                            o = r.__importDefault(n(14)),
                            a = function() {
                                function e(e, t, n, r, s, i) {
                                    this.rest = e, this.path = t, this.headers = n, this.envelope = null != r ? r : null, this.bodyHandler = s, this.useHttpPaginatedResponse = i || !1
                                }
                                return e.prototype.get = function(e, t) {
                                    var n = this;
                                    o.default.get(this.rest, this.path, this.headers, e, this.envelope, (function(e, r, s, i, o) {
                                        n.handlePage(e, r, s, i, o, t)
                                    }))
                                }, e.prototype.delete = function(e, t) {
                                    var n = this;
                                    o.default.delete(this.rest, this.path, this.headers, e, this.envelope, (function(e, r, s, i, o) {
                                        n.handlePage(e, r, s, i, o, t)
                                    }))
                                }, e.prototype.post = function(e, t, n) {
                                    var r = this;
                                    o.default.post(this.rest, this.path, t, this.headers, e, this.envelope, (function(e, t, s, i, o) {
                                        n && r.handlePage(e, t, s, i, o, n)
                                    }))
                                }, e.prototype.put = function(e, t, n) {
                                    var r = this;
                                    o.default.put(this.rest, this.path, t, this.headers, e, this.envelope, (function(e, t, s, i, o) {
                                        n && r.handlePage(e, t, s, i, o, n)
                                    }))
                                }, e.prototype.patch = function(e, t, n) {
                                    var r = this;
                                    o.default.patch(this.rest, this.path, t, this.headers, e, this.envelope, (function(e, t, s, i, o) {
                                        n && r.handlePage(e, t, s, i, o, n)
                                    }))
                                }, e.prototype.handlePage = function(e, t, n, r, o, a) {
                                    if (e && function(e, t, n) {
                                            return !(n && (t || "number" == typeof e.code))
                                        }(e, t, this.useHttpPaginatedResponse)) return i.default.logAction(i.default.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + s.inspectError(e)), void(null == a || a(e));
                                    var c, f, d;
                                    try {
                                        c = this.bodyHandler(t, n || {}, r)
                                    } catch (t) {
                                        return void(null == a || a(e || t))
                                    }
                                    n && (f = n.Link || n.link) && (d = function(e) {
                                        "string" == typeof e && (e = e.split(","));
                                        for (var t, n = {}, r = 0; r < e.length; r++) {
                                            var i = e[r].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
                                            if (i) {
                                                var o = (t = void 0, (t = i[1].match(/^\.\/(\w+)\?(.*)$/)) && t[2] && s.parseQueryString(t[2]));
                                                o && (n[i[2]] = o)
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
                                    var i = this;
                                    n && ("first" in n && (this.first = function(e) {
                                        if (!e && i.resource.rest.options.promises) return s.promisify(i, "first", []);
                                        i.get(n.first, e)
                                    }), "current" in n && (this.current = function(e) {
                                        if (!e && i.resource.rest.options.promises) return s.promisify(i, "current", []);
                                        i.get(n.current, e)
                                    }), this.next = function(e) {
                                        if (!e && i.resource.rest.options.promises) return s.promisify(i, "next", []);
                                        "next" in n ? i.get(n.next, e) : e(null)
                                    }, this.hasNext = function() {
                                        return "next" in n
                                    }, this.isLast = function() {
                                        var e;
                                        return !(null === (e = r.hasNext) || void 0 === e ? void 0 : e.call(r))
                                    })
                                }
                                return e.prototype.get = function(e, t) {
                                    var n = this.resource;
                                    o.default.get(n.rest, n.path, n.headers, e, n.envelope, (function(e, r, s, i, o) {
                                        n.handlePage(e, r, s, i, o, t)
                                    }))
                                }, e
                            }();
                        t.PaginatedResult = u;
                        var l = function(e) {
                            function t(t, n, r, s, i, o) {
                                var a = e.call(this, t, n, i) || this;
                                return a.statusCode = s, a.success = s < 300 && s >= 200, a.headers = r, a.errorCode = o && o.code, a.errorMessage = o && o.message, a
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
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.isRetriable = void 0;
                        var r = n(0).__importDefault(n(4)),
                            s = {
                                DISCONNECTED: 80003,
                                SUSPENDED: 80002,
                                FAILED: 8e4,
                                CLOSING: 80017,
                                CLOSED: 80017,
                                UNKNOWN_CONNECTION_ERR: 50002,
                                UNKNOWN_CHANNEL_ERR: 50001
                            },
                            i = {
                                disconnected: function() {
                                    return r.default.fromValues({
                                        statusCode: 400,
                                        code: s.DISCONNECTED,
                                        message: "Connection to server temporarily unavailable"
                                    })
                                },
                                suspended: function() {
                                    return r.default.fromValues({
                                        statusCode: 400,
                                        code: s.SUSPENDED,
                                        message: "Connection to server unavailable"
                                    })
                                },
                                failed: function() {
                                    return r.default.fromValues({
                                        statusCode: 400,
                                        code: s.FAILED,
                                        message: "Connection failed or disconnected by server"
                                    })
                                },
                                closing: function() {
                                    return r.default.fromValues({
                                        statusCode: 400,
                                        code: s.CLOSING,
                                        message: "Connection closing"
                                    })
                                },
                                closed: function() {
                                    return r.default.fromValues({
                                        statusCode: 400,
                                        code: s.CLOSED,
                                        message: "Connection closed"
                                    })
                                },
                                unknownConnectionErr: function() {
                                    return r.default.fromValues({
                                        statusCode: 500,
                                        code: s.UNKNOWN_CONNECTION_ERR,
                                        message: "Internal connection error"
                                    })
                                },
                                unknownChannelErr: function() {
                                    return r.default.fromValues({
                                        statusCode: 500,
                                        code: s.UNKNOWN_CONNECTION_ERR,
                                        message: "Internal channel error"
                                    })
                                }
                            };
                        t.isRetriable = function(e) {
                            return !e.statusCode || !e.code || e.statusCode >= 500 || Object.values(s).includes(e.code)
                        }, t.default = i
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        Object.defineProperty(t, "__esModule", {
                                value: !0
                            }),
                            function(e) {
                                e[e.REQ_SEND = 0] = "REQ_SEND", e[e.REQ_RECV = 1] = "REQ_RECV", e[e.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", e[e.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM"
                            }(r || (r = {})), t.default = r
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(5), n(58), n(11), n(40), n(32), n(24), n(27), n(28), n(59), n(60), r)
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0).__importDefault(n(2)),
                            s = function() {
                                function e(e) {
                                    this.members = e || []
                                }
                                return e.prototype.call = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    for (var n = 0, s = this.members; n < s.length; n++) {
                                        var i = s[n];
                                        if (i) try {
                                            i.apply(void 0, e)
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
                        t.default = s
                    }, function(e, t, n) {
                        var r, s, i, o;
                        e.exports = (r = n(6), i = (s = r).lib.Base, o = s.enc.Utf8, void(s.algo.HMAC = i.extend({
                            init: function(e, t) {
                                e = this._hasher = new e.init, "string" == typeof t && (t = o.parse(t));
                                var n = e.blockSize,
                                    r = 4 * n;
                                t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                                for (var s = this._oKey = t.clone(), i = this._iKey = t.clone(), a = s.words, u = i.words, l = 0; l < n; l++) a[l] ^= 1549556828, u[l] ^= 909522486;
                                s.sigBytes = i.sigBytes = r, this.reset()
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
                        var r;
                        Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.isSuccessCode = void 0,
                            function(e) {
                                e[e.Success = 200] = "Success", e[e.NoContent = 204] = "NoContent", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.Forbidden = 403] = "Forbidden", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.InternalServerError = 500] = "InternalServerError"
                            }(r || (r = {})), t.isSuccessCode = function(e) {
                                return e >= r.Success && e < r.BadRequest
                            }, t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(10)),
                            i = r.__importStar(n(1)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(2)),
                            u = r.__importDefault(n(20)),
                            l = r.__importDefault(n(4)),
                            c = r.__importDefault(n(3)),
                            f = s.default.Action,
                            d = s.default.fromValues({
                                action: f.CLOSE
                            }),
                            p = s.default.fromValues({
                                action: f.DISCONNECT
                            }),
                            h = function(e) {
                                function t(t, n, r, s) {
                                    var i = e.call(this) || this;
                                    return s && (r.format = void 0, r.heartbeats = !0), i.connectionManager = t, t.registerProposedTransport(i), i.auth = n, i.params = r, i.timeouts = r.options.timeouts, i.format = r.format, i.isConnected = !1, i.isFinished = !1, i.isDisposed = !1, i.maxIdleInterval = null, i.idleTimer = null, i.lastActivity = null, i
                                }
                                return r.__extends(t, e), t.prototype.connect = function() {}, t.prototype.close = function() {
                                    this.isConnected && this.requestClose(), this.finish("closed", u.default.closed())
                                }, t.prototype.disconnect = function(e) {
                                    this.isConnected && this.requestDisconnect(), this.finish("disconnected", e || u.default.disconnected())
                                }, t.prototype.fail = function(e) {
                                    this.isConnected && this.requestDisconnect(), this.finish("failed", e || u.default.failed())
                                }, t.prototype.finish = function(e, t) {
                                    var n;
                                    this.isFinished || (this.isFinished = !0, this.isConnected = !1, this.maxIdleInterval = null, clearTimeout(null !== (n = this.idleTimer) && void 0 !== n ? n : void 0), this.idleTimer = null, this.emit(e, t), this.dispose())
                                }, t.prototype.onProtocolMessage = function(e) {
                                    switch (a.default.shouldLog(a.default.LOG_MICRO) && a.default.logAction(a.default.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + s.default.stringify(e) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), e.action) {
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
                                            this.connectionManager.onChannelMessage(e, this);
                                            break;
                                        case f.ACTIVATE:
                                            break;
                                        case f.AUTH:
                                            this.auth.authorize((function(e) {
                                                e && a.default.logAction(a.default.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + i.inspectError(e))
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
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.onDisconnect()", "err = " + i.inspectError(t)), this.finish("disconnected", t)
                                }, t.prototype.onFatalError = function(e) {
                                    var t = e && e.error;
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.onFatalError()", "err = " + i.inspectError(t)), this.finish("failed", t)
                                }, t.prototype.onClose = function(e) {
                                    var t = e && e.error;
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.onClose()", "err = " + i.inspectError(t)), this.finish("closed", t)
                                }, t.prototype.requestClose = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.requestClose()", ""), this.send(d)
                                }, t.prototype.requestDisconnect = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(p)
                                }, t.prototype.ping = function(e) {
                                    var t = {
                                        action: s.default.Action.HEARTBEAT
                                    };
                                    e && (t.id = e), this.send(s.default.fromValues(t))
                                }, t.prototype.dispose = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = !0, this.off()
                                }, t.prototype.onActivity = function() {
                                    this.maxIdleInterval && (this.lastActivity = this.connectionManager.lastActivity = i.now(), this.setIdleTimer(this.maxIdleInterval + 100))
                                }, t.prototype.setIdleTimer = function(e) {
                                    var t = this;
                                    this.idleTimer || (this.idleTimer = setTimeout((function() {
                                        t.onIdleTimerExpire()
                                    }), e))
                                }, t.prototype.onIdleTimerExpire = function() {
                                    if (!this.lastActivity || !this.maxIdleInterval) throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
                                    this.idleTimer = null;
                                    var e = i.now() - this.lastActivity,
                                        t = this.maxIdleInterval - e;
                                    if (t <= 0) {
                                        var n = "No activity seen from realtime in " + e + "ms; assuming connection has dropped";
                                        a.default.logAction(a.default.LOG_ERROR, "Transport.onIdleTimerExpire()", n), this.disconnect(new l.default(n, 80003, 408))
                                    } else this.setIdleTimer(t + 100)
                                }, t.tryConnect = function(e, t, n, r, s) {
                                    var i, o = new e(t, n, r),
                                        u = function(e) {
                                            clearTimeout(i), s({
                                                event: this.event,
                                                error: e
                                            })
                                        },
                                        c = t.options.timeouts.realtimeRequestTimeout;
                                    i = setTimeout((function() {
                                        o.off(["preconnect", "disconnected", "failed"]), o.dispose(), u.call({
                                            event: "disconnected"
                                        }, new l.default("Timeout waiting for transport to indicate itself viable", 5e4, 500))
                                    }), c), o.on(["failed", "disconnected"], u), o.on("preconnect", (function() {
                                        a.default.logAction(a.default.LOG_MINOR, "Transport.tryConnect()", "viable transport " + o), clearTimeout(i), o.off(["failed", "disconnected"], u), s(null, o)
                                    })), o.connect()
                                }, t
                            }(o.default);
                        t.default = h
                    }, function(e, t, n) {
                        var r, s, i, o, a, u, l, c;
                        e.exports = (c = n(6), n(40), n(24), s = (r = c).lib, i = s.Base, o = s.WordArray, a = r.algo, u = a.MD5, l = a.EvpKDF = i.extend({
                            cfg: i.extend({
                                keySize: 4,
                                hasher: u,
                                iterations: 1
                            }),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e)
                            },
                            compute: function(e, t) {
                                for (var n, r = this.cfg, s = r.hasher.create(), i = o.create(), a = i.words, u = r.keySize, l = r.iterations; a.length < u;) {
                                    n && s.update(n), n = s.update(e).finalize(t), s.reset();
                                    for (var c = 1; c < l; c++) n = s.finalize(n), s.reset();
                                    i.concat(n)
                                }
                                return i.sigBytes = 4 * u, i
                            }
                        }), r.EvpKDF = function(e, t, n) {
                            return l.create(n).compute(e, t)
                        }, c.EvpKDF)
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(27), void(r.lib.Cipher || function(e) {
                            var t = r,
                                n = t.lib,
                                s = n.Base,
                                i = n.WordArray,
                                o = n.BufferedBlockAlgorithm,
                                a = t.enc,
                                u = (a.Utf8, a.Base64),
                                l = t.algo.EvpKDF,
                                c = n.Cipher = o.extend({
                                    cfg: s.extend(),
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
                                            return "string" == typeof e ? v : y
                                        }
                                        return function(t) {
                                            return {
                                                encrypt: function(n, r, s) {
                                                    return e(r).encrypt(t, n, r, s)
                                                },
                                                decrypt: function(n, r, s) {
                                                    return e(r).decrypt(t, n, r, s)
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
                                d = n.BlockCipherMode = s.extend({
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
                                p = f.CBC = function() {
                                    var t = d.extend();

                                    function n(t, n, r) {
                                        var s, i = this._iv;
                                        i ? (s = i, this._iv = e) : s = this._prevBlock;
                                        for (var o = 0; o < r; o++) t[n + o] ^= s[o]
                                    }
                                    return t.Encryptor = t.extend({
                                        processBlock: function(e, t) {
                                            var r = this._cipher,
                                                s = r.blockSize;
                                            n.call(this, e, t, s), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + s)
                                        }
                                    }), t.Decryptor = t.extend({
                                        processBlock: function(e, t) {
                                            var r = this._cipher,
                                                s = r.blockSize,
                                                i = e.slice(t, t + s);
                                            r.decryptBlock(e, t), n.call(this, e, t, s), this._prevBlock = i
                                        }
                                    }), t
                                }(),
                                h = (t.pad = {}).Pkcs7 = {
                                    pad: function(e, t) {
                                        for (var n = 4 * t, r = n - e.sigBytes % n, s = r << 24 | r << 16 | r << 8 | r, o = [], a = 0; a < r; a += 4) o.push(s);
                                        var u = i.create(o, r);
                                        e.concat(u)
                                    },
                                    unpad: function(e) {
                                        var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                                        e.sigBytes -= t
                                    }
                                },
                                g = (n.BlockCipher = c.extend({
                                    cfg: c.cfg.extend({
                                        mode: p,
                                        padding: h
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
                                }), n.CipherParams = s.extend({
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
                                        return (n ? i.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(u)
                                    },
                                    parse: function(e) {
                                        var t, n = u.parse(e),
                                            r = n.words;
                                        return 1398893684 == r[0] && 1701076831 == r[1] && (t = i.create(r.slice(2, 4)), r.splice(0, 4), n.sigBytes -= 16), g.create({
                                            ciphertext: n,
                                            salt: t
                                        })
                                    }
                                },
                                y = n.SerializableCipher = s.extend({
                                    cfg: s.extend({
                                        format: m
                                    }),
                                    encrypt: function(e, t, n, r) {
                                        r = this.cfg.extend(r);
                                        var s = e.createEncryptor(n, r),
                                            i = s.finalize(t),
                                            o = s.cfg;
                                        return g.create({
                                            ciphertext: i,
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
                                b = (t.kdf = {}).OpenSSL = {
                                    execute: function(e, t, n, r) {
                                        r || (r = i.random(8));
                                        var s = l.create({
                                                keySize: t + n
                                            }).compute(e, r),
                                            o = i.create(s.words.slice(t), 4 * n);
                                        return s.sigBytes = 4 * t, g.create({
                                            key: s,
                                            iv: o,
                                            salt: r
                                        })
                                    }
                                },
                                v = n.PasswordBasedCipher = y.extend({
                                    cfg: y.cfg.extend({
                                        kdf: b
                                    }),
                                    encrypt: function(e, t, n, r) {
                                        var s = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize);
                                        r.iv = s.iv;
                                        var i = y.encrypt.call(this, e, t, s.key, r);
                                        return i.mixIn(s), i
                                    },
                                    decrypt: function(e, t, n, r) {
                                        r = this.cfg.extend(r), t = this._parse(t, r.format);
                                        var s = r.kdf.execute(n, e.keySize, e.ivSize, t.salt);
                                        return r.iv = s.iv, y.decrypt.call(this, e, t, s.key, r)
                                    }
                                })
                        }()))
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.Request = t.createRequest = void 0;
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(12)),
                            o = r.__importDefault(n(3)),
                            a = r.__importDefault(n(7)),
                            u = n(4),
                            l = r.__importDefault(n(8)),
                            c = r.__importDefault(n(2)),
                            f = r.__importDefault(n(21)),
                            d = s.getGlobalObject(),
                            p = function() {},
                            h = d._ablyjs_jsonp = {};
                        h._ = function(e) {
                            return h["_" + e] || p
                        };
                        var g = 1,
                            m = "jsonp";

                        function y(e, t, n, r, i, o, a) {
                            return o = o || l.default.TIMEOUTS, new v(void 0, e, t, s.copy(n), r, i, o, a)
                        }
                        t.createRequest = y;
                        var b = function(e) {
                                function t(t, n, r) {
                                    var s = e.call(this, t, n, r) || this;
                                    return s.shortName = m, r.stream = !1, s
                                }
                                return r.__extends(t, e), t.isAvailable = function() {
                                    return o.default.Config.jsonpSupported && o.default.Config.allowComet
                                }, t.prototype.toString = function() {
                                    return "JSONPTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
                                }, t.prototype.createRequest = function(e, t, n, r, s, i, o) {
                                    return y(e, t, n, r, s, i = (null == this ? void 0 : this.timeouts) || i || l.default.TIMEOUTS, o)
                                }, t
                            }(i.default),
                            v = function(e) {
                                function t(t, n, r, i, o, a, u, l) {
                                    var c = e.call(this) || this;
                                    return void 0 === t && (t = g++), c.id = t, c.uri = n, c.params = i || {}, c.params.rnd = s.cheapRandStr(), r && (r["X-Ably-Version"] && (c.params.v = r["X-Ably-Version"]), r["X-Ably-Lib"] && (c.params.lib = r["X-Ably-Lib"])), c.body = o, c.method = l, c.requestMode = a, c.timeouts = u, c.requestComplete = !1, c
                                }
                                return r.__extends(t, e), t.prototype.exec = function() {
                                    var e = this,
                                        t = this.id,
                                        n = this.body,
                                        r = this.method,
                                        i = this.uri,
                                        a = this.params;
                                    a.callback = "_ablyjs_jsonp._(" + t + ")", a.envelope = "jsonp", n && (a.body = n), r && "get" !== r && (a.method = r);
                                    var l = this.script = document.createElement("script"),
                                        d = i + s.toQueryString(a);
                                    l.src = d, l.src.split("/").slice(-1)[0] !== d.split("/").slice(-1)[0] && c.default.logAction(c.default.LOG_ERROR, "JSONP Request.exec()", "Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param"), l.async = !0, l.type = "text/javascript", l.charset = "UTF-8", l.onerror = function(t) {
                                        e.complete(new u.PartialErrorInfo("JSONP script error (event: " + o.default.Config.inspect(t) + ")", null, 400))
                                    }, h["_" + t] = function(t) {
                                        if (t.statusCode) {
                                            var n = t.response;
                                            if (204 == t.statusCode) e.complete(null, null, null, t.statusCode);
                                            else if (n)
                                                if (t.statusCode < 400 || s.isArray(n)) e.complete(null, n, t.headers, t.statusCode);
                                                else {
                                                    var r = n.error || new u.PartialErrorInfo("Error response received from server", null, t.statusCode);
                                                    e.complete(r)
                                                }
                                            else e.complete(new u.PartialErrorInfo("Invalid server response: no envelope detected", null, 500))
                                        } else e.complete(null, t)
                                    };
                                    var p = this.requestMode == f.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout;
                                    this.timer = setTimeout(this.abort.bind(this), p);
                                    var g = document.getElementsByTagName("head")[0];
                                    g.insertBefore(l, g.firstChild)
                                }, t.prototype.complete = function(e, t, n, r) {
                                    if (n = n || {}, !this.requestComplete) {
                                        this.requestComplete = !0;
                                        var s = void 0;
                                        t && (s = "string" == typeof t ? "text/plain" : "application/json", n["content-type"] = s, this.emit("data", t)), this.emit("complete", e, t, n, !0, r), this.dispose()
                                    }
                                }, t.prototype.abort = function() {
                                    this.dispose()
                                }, t.prototype.dispose = function() {
                                    var e = this.timer;
                                    e && (clearTimeout(e), this.timer = null);
                                    var t = this.script;
                                    t.parentNode && t.parentNode.removeChild(t), delete h[this.id], this.emit("disposed")
                                }, t
                            }(a.default);
                        t.Request = v, t.default = function(e) {
                            return d.JSONPTransport = b, b.isAvailable() && (e.supportedTransports[m] = b), b
                        }
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(2)),
                            o = r.__importDefault(n(8)),
                            a = r.__importDefault(n(17)),
                            u = r.__importDefault(n(46)),
                            l = r.__importDefault(n(19)),
                            c = r.__importDefault(n(33)),
                            f = r.__importDefault(n(4)),
                            d = r.__importDefault(n(49)),
                            p = r.__importDefault(n(18)),
                            h = r.__importDefault(n(3)),
                            g = r.__importDefault(n(9)),
                            m = r.__importDefault(n(15)),
                            y = r.__importDefault(n(14)),
                            b = function() {},
                            v = function() {
                                function e(e) {
                                    if (!e) {
                                        var t = "no options provided";
                                        throw i.default.logAction(i.default.LOG_ERROR, "Rest()", t), new Error(t)
                                    }
                                    var n = o.default.objectifyOptions(e);
                                    n.log && i.default.setLog(n.log.level, n.log.handler), i.default.logAction(i.default.LOG_MICRO, "Rest()", "initialized with clientOptions " + h.default.Config.inspect(e));
                                    var r = this.options = o.default.normaliseOptions(n);
                                    if (r.key) {
                                        var s = r.key.match(/^([^:\s]+):([^:.\s]+)$/);
                                        if (!s) throw t = "invalid key parameter", i.default.logAction(i.default.LOG_ERROR, "Rest()", t), new f.default(t, 40400, 404);
                                        r.keyName = s[1], r.keySecret = s[2]
                                    }
                                    if ("clientId" in r) {
                                        if ("string" != typeof r.clientId && null !== r.clientId) throw new f.default("clientId must be either a string or null", 40012, 400);
                                        if ("*" === r.clientId) throw new f.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400)
                                    }
                                    i.default.logAction(i.default.LOG_MINOR, "Rest()", "started; version = " + o.default.version), this.baseUri = this.authority = function(e) {
                                        return o.default.getHttpScheme(r) + e + ":" + o.default.getPort(r, !1)
                                    }, this._currentFallback = null, this.serverTimeOffset = null, this.http = new h.default.Http(r), this.auth = new a.default(this, r), this.channels = new w(this), this.push = new u.default(this)
                                }
                                return e.prototype.stats = function(e, t) {
                                    if (void 0 === t)
                                        if ("function" == typeof e) t = e, e = null;
                                        else {
                                            if (this.options.promises) return s.promisify(this, "stats", [e]);
                                            t = b
                                        } var n = s.defaultGetHeaders(this.options),
                                        r = this.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        i = this.http.supportsLinkHeaders ? void 0 : r;
                                    this.options.headers && s.mixin(n, this.options.headers), new l.default(this, "/stats", n, i, (function(e, t, n) {
                                        for (var r = n ? e : JSON.parse(e), s = 0; s < r.length; s++) r[s] = d.default.fromValues(r[s]);
                                        return r
                                    })).get(e, t)
                                }, e.prototype.time = function(e, t) {
                                    var n = this;
                                    if (void 0 === t)
                                        if ("function" == typeof e) t = e, e = null;
                                        else if (this.options.promises) return s.promisify(this, "time", [e]);
                                    var r = t || b,
                                        i = s.defaultGetHeaders(this.options);
                                    this.options.headers && s.mixin(i, this.options.headers), this.http.do(p.default.Get, this, (function(e) {
                                        return n.authority(e) + "/time"
                                    }), i, null, e, (function(e, t, i, o) {
                                        if (e) r(e);
                                        else {
                                            o || (t = JSON.parse(t));
                                            var a = t[0];
                                            a ? (n.serverTimeOffset = a - s.now(), r(null, a)) : r(new f.default("Internal error (unexpected result type from GET /time)", 5e4, 500))
                                        }
                                    }))
                                }, e.prototype.request = function(e, t, n, r, i, o) {
                                    var a = this.options.useBinaryProtocol,
                                        u = a ? h.default.Config.msgpack.encode : JSON.stringify,
                                        c = a ? h.default.Config.msgpack.decode : JSON.parse,
                                        d = a ? s.Format.msgpack : s.Format.json,
                                        p = this.http.supportsLinkHeaders ? void 0 : d;
                                    n = n || {};
                                    var g = e.toLowerCase(),
                                        m = "get" == g ? s.defaultGetHeaders(this.options, d) : s.defaultPostHeaders(this.options, d);
                                    if (void 0 === o) {
                                        if (this.options.promises) return s.promisify(this, "request", [e, t, n, r, i]);
                                        o = b
                                    }
                                    "string" != typeof r && (r = u(r)), this.options.headers && s.mixin(m, this.options.headers), i && s.mixin(m, i);
                                    var y = new l.default(this, t, m, p, (function(e, t, n) {
                                        return s.ensureArray(n ? e : c(e))
                                    }), !0);
                                    if (!s.arrIn(h.default.Http.methods, g)) throw new f.default("Unsupported method " + g, 40500, 405);
                                    s.arrIn(h.default.Http.methodsWithBody, g) ? y[g](n, r, o) : y[g](n, o)
                                }, e.prototype.batchPublish = function(e, t) {
                                    if (void 0 === t) {
                                        if (this.options.promises) return s.promisify(this, "batchPublish", [e]);
                                        t = b
                                    }
                                    var n, r, i = t;
                                    s.isArray(e) ? (n = e, r = !1) : (n = [e], r = !0);
                                    var o = this.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        a = s.defaultPostHeaders(this.options, o);
                                    this.options.headers && s.mixin(a, this.options.headers);
                                    var u = s.encodeBody(n, o);
                                    y.default.post(this, "/messages", u, a, {
                                        newBatchResponse: "true"
                                    }, null, (function(e, t, n, a) {
                                        if (e) i(e);
                                        else {
                                            var u = a ? t : s.decodeBody(t, o);
                                            i(null, r ? u[0] : u)
                                        }
                                    }))
                                }, e.prototype.batchPresence = function(e, t) {
                                    if (void 0 === t) {
                                        if (this.options.promises) return s.promisify(this, "batchPresence", [e]);
                                        t = b
                                    }
                                    var n = t,
                                        r = this.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        i = s.defaultPostHeaders(this.options, r);
                                    this.options.headers && s.mixin(i, this.options.headers);
                                    var o = e.join(",");
                                    y.default.get(this, "/presence", i, {
                                        newBatchResponse: "true",
                                        channels: o
                                    }, null, (function(e, t, i, o) {
                                        if (e) n(e);
                                        else {
                                            var a = o ? t : s.decodeBody(t, r);
                                            n(null, a)
                                        }
                                    }))
                                }, e.prototype.setLog = function(e) {
                                    i.default.setLog(e.level, e.handler)
                                }, e.Promise = function(t) {
                                    return (t = o.default.objectifyOptions(t)).promises = !0, new e(t)
                                }, e.Callbacks = e, e.Platform = h.default, e.Message = g.default, e.PresenceMessage = m.default, e
                            }(),
                            w = function() {
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
                        t.default = v
                    }, function(e, t, n) {
                        e.exports = n(6).enc.Utf8
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function(e) {
                            var t = r,
                                n = t.lib,
                                s = n.WordArray,
                                i = n.Hasher,
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
                                for (var r = 2, s = 0; s < 64;) t(r) && (s < 8 && (a[s] = n(e.pow(r, .5))), u[s] = n(e.pow(r, 1 / 3)), s++), r++
                            }();
                            var l = [],
                                c = o.SHA256 = i.extend({
                                    _doReset: function() {
                                        this._hash = new s.init(a.slice(0))
                                    },
                                    _doProcessBlock: function(e, t) {
                                        for (var n = this._hash.words, r = n[0], s = n[1], i = n[2], o = n[3], a = n[4], c = n[5], f = n[6], d = n[7], p = 0; p < 64; p++) {
                                            if (p < 16) l[p] = 0 | e[t + p];
                                            else {
                                                var h = l[p - 15],
                                                    g = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
                                                    m = l[p - 2],
                                                    y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                                                l[p] = g + l[p - 7] + y + l[p - 16]
                                            }
                                            var b = r & s ^ r & i ^ s & i,
                                                v = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                                w = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & c ^ ~a & f) + u[p] + l[p];
                                            d = f, f = c, c = a, a = o + w | 0, o = i, i = s, s = r, r = w + (v + b) | 0
                                        }
                                        n[0] = n[0] + r | 0, n[1] = n[1] + s | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + c | 0, n[6] = n[6] + f | 0, n[7] = n[7] + d | 0
                                    },
                                    _doFinalize: function() {
                                        var t = this._data,
                                            n = t.words,
                                            r = 8 * this._nDataBytes,
                                            s = 8 * t.sigBytes;
                                        return n[s >>> 5] |= 128 << 24 - s % 32, n[14 + (s + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (s + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash
                                    },
                                    clone: function() {
                                        var e = i.clone.call(this);
                                        return e._hash = this._hash.clone(), e
                                    }
                                });
                            t.SHA256 = i._createHelper(c), t.HmacSHA256 = i._createHmacHelper(c)
                        }(Math), r.SHA256)
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(7)),
                            o = r.__importDefault(n(2)),
                            a = r.__importDefault(n(34)),
                            u = r.__importDefault(n(9)),
                            l = r.__importDefault(n(4)),
                            c = r.__importDefault(n(19)),
                            f = r.__importDefault(n(14)),
                            d = r.__importDefault(n(3));

                        function p() {}

                        function h(e) {
                            var t = e || {};
                            if (t.cipher) {
                                if (!d.default.Crypto) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                                var n = d.default.Crypto.getCipher(t.cipher);
                                t.cipher = n.cipherParams, t.channelCipher = n.cipher
                            } else "cipher" in t && (t.cipher = void 0, t.channelCipher = null);
                            return t
                        }
                        var g = function(e) {
                            function t(t, n, r) {
                                var s = e.call(this) || this;
                                return o.default.logAction(o.default.LOG_MINOR, "Channel()", "started; name = " + n), s.rest = t, s.name = n, s.basePath = "/channels/" + encodeURIComponent(n), s.presence = new a.default(s), s.channelOptions = h(r), s
                            }
                            return r.__extends(t, e), t.prototype.setOptions = function(e) {
                                this.channelOptions = h(e)
                            }, t.prototype.history = function(e, t) {
                                if (o.default.logAction(o.default.LOG_MICRO, "Channel.history()", "channel = " + this.name), void 0 === t)
                                    if ("function" == typeof e) t = e, e = null;
                                    else {
                                        if (this.rest.options.promises) return s.promisify(this, "history", arguments);
                                        t = p
                                    } this._history(e, t)
                            }, t.prototype._history = function(e, t) {
                                var n = this.rest,
                                    r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                    i = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                    o = s.defaultGetHeaders(n.options, r);
                                n.options.headers && s.mixin(o, n.options.headers);
                                var a = this.channelOptions;
                                new c.default(n, this.basePath + "/messages", o, i, (function(e, t, n) {
                                    return u.default.fromResponseBody(e, a, n ? void 0 : r)
                                })).get(e, t)
                            }, t.prototype.publish = function() {
                                var e, t, n = this,
                                    r = arguments[0],
                                    i = arguments[1],
                                    o = arguments[arguments.length - 1];
                                if ("function" != typeof o) {
                                    if (this.rest.options.promises) return s.promisify(this, "publish", arguments);
                                    o = p
                                }
                                if ("string" == typeof r || null === r) e = [u.default.fromValues({
                                    name: r,
                                    data: i
                                })], t = arguments[2];
                                else if (s.isObject(r)) e = [u.default.fromValues(r)], t = arguments[1];
                                else {
                                    if (!s.isArray(r)) throw new l.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                                    e = u.default.fromValuesArray(r), t = arguments[1]
                                }
                                "object" == typeof t && t || (t = {});
                                var a = this.rest,
                                    c = a.options,
                                    f = c.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                    d = a.options.idempotentRestPublishing,
                                    h = s.defaultPostHeaders(a.options, f);
                                if (c.headers && s.mixin(h, c.headers), d && function(e) {
                                        return s.arrEvery(e, (function(e) {
                                            return !e.id
                                        }))
                                    }(e)) {
                                    var g = s.randomString(9);
                                    s.arrForEach(e, (function(e, t) {
                                        e.id = g + ":" + t.toString()
                                    }))
                                }
                                u.default.encodeArray(e, this.channelOptions, (function(r) {
                                    if (r) o(r);
                                    else {
                                        var s = u.default.getMessagesSize(e),
                                            i = c.maxMessageSize;
                                        s > i ? o(new l.default("Maximum size of messages that can be published at once exceeded ( was " + s + " bytes; limit is " + i + " bytes)", 40009, 400)) : n._publish(u.default.serialize(e, f), h, t, o)
                                    }
                                }))
                            }, t.prototype._publish = function(e, t, n, r) {
                                f.default.post(this.rest, this.basePath + "/messages", e, t, n, null, r)
                            }, t.prototype.status = function(e) {
                                if ("function" != typeof e && this.rest.options.promises) return s.promisify(this, "status", []);
                                var t = this.rest.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                    n = s.defaultPostHeaders(this.rest.options, t);
                                f.default.get(this.rest, this.basePath, n, {}, t, e || p)
                            }, t
                        }(i.default);
                        t.default = g
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(7)),
                            o = r.__importDefault(n(2)),
                            a = r.__importDefault(n(19)),
                            u = r.__importDefault(n(15));

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
                                        if (this.channel.rest.options.promises) return s.promisify(this, "get", arguments);
                                        t = l
                                    } var n = this.channel.rest,
                                    r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                    i = this.channel.rest.http.supportsLinkHeaders ? void 0 : r,
                                    c = s.defaultGetHeaders(n.options, r);
                                n.options.headers && s.mixin(c, n.options.headers);
                                var f = this.channel.channelOptions;
                                new a.default(n, this.basePath, c, i, (function(e, t, n) {
                                    return u.default.fromResponseBody(e, f, n ? void 0 : r)
                                })).get(e, t)
                            }, t.prototype.history = function(e, t) {
                                return o.default.logAction(o.default.LOG_MICRO, "Presence.history()", "channel = " + this.channel.name), this._history(e, t)
                            }, t.prototype._history = function(e, t) {
                                if (void 0 === t)
                                    if ("function" == typeof e) t = e, e = null;
                                    else {
                                        if (this.channel.rest.options.promises) return s.promisify(this, "_history", [e]);
                                        t = l
                                    } var n = this.channel.rest,
                                    r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                    i = this.channel.rest.http.supportsLinkHeaders ? void 0 : r,
                                    o = s.defaultGetHeaders(n.options, r);
                                n.options.headers && s.mixin(o, n.options.headers);
                                var c = this.channel.channelOptions;
                                new a.default(n, this.basePath + "/history", o, i, (function(e, t, n) {
                                    return u.default.fromResponseBody(e, c, n ? void 0 : r)
                                })).get(e, t)
                            }, t
                        }(i.default);
                        t.default = c
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.TransportParams = void 0;
                            var r = n(0),
                                s = r.__importDefault(n(10)),
                                i = r.__importStar(n(1)),
                                o = r.__importStar(n(52)),
                                a = r.__importStar(n(8)),
                                u = r.__importDefault(n(3)),
                                l = r.__importDefault(n(7)),
                                c = r.__importDefault(n(36)),
                                f = r.__importDefault(n(2)),
                                d = r.__importDefault(n(37)),
                                p = r.__importStar(n(20)),
                                h = r.__importStar(n(4)),
                                g = r.__importDefault(n(17)),
                                m = r.__importDefault(n(9)),
                                y = r.__importDefault(n(23)),
                                b = r.__importDefault(n(53)),
                                v = r.__importDefault(n(26)),
                                w = r.__importDefault(n(25)),
                                _ = function() {
                                    var e;
                                    return void 0 !== u.default.WebStorage && (null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.localSupported)
                                },
                                C = function() {
                                    var e;
                                    return void 0 !== u.default.WebStorage && (null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.sessionSupported)
                                },
                                T = s.default.Action,
                                R = function() {},
                                U = "ably-transport-preference",
                                O = "ably-connection-recovery";

                            function I(e) {
                                try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    return null
                                }
                            }
                            var L = function() {
                                function e(e, t, n, r) {
                                    this.options = e, this.host = t, this.mode = n, this.connectionKey = r, this.format = e.useBinaryProtocol ? i.Format.msgpack : i.Format.json
                                }
                                return e.prototype.getConnectParams = function(e) {
                                    var t = e ? i.copy(e) : {},
                                        n = this.options;
                                    switch (this.mode) {
                                        case "upgrade":
                                            t.upgrade = this.connectionKey;
                                            break;
                                        case "resume":
                                            t.resume = this.connectionKey;
                                            break;
                                        case "recover":
                                            var r = I(n.recover);
                                            r && (t.recover = r.connectionKey)
                                    }
                                    return void 0 !== n.clientId && (t.clientId = n.clientId), !1 === n.echoMessages && (t.echo = "false"), void 0 !== this.format && (t.format = this.format), void 0 !== this.stream && (t.stream = this.stream), void 0 !== this.heartbeats && (t.heartbeats = this.heartbeats), t.v = a.default.protocolVersion, t.agent = (0, a.getAgentString)(this.options), void 0 !== n.transportParams && i.mixin(t, n.transportParams), t
                                }, e.prototype.toString = function() {
                                    var e = "[mode=" + this.mode;
                                    return this.host && (e += ",host=" + this.host), this.connectionKey && (e += ",connectionKey=" + this.connectionKey), this.format && (e += ",format=" + this.format), e += "]"
                                }, e
                            }();
                            t.TransportParams = L;
                            var $ = function(t) {
                                function n(e, r) {
                                    var s = t.call(this) || this;
                                    s.disconnectedRetryCount = 0, n.initTransports(), s.realtime = e, s.options = r;
                                    var o = r.timeouts,
                                        l = o.preferenceConnectTimeout + o.realtimeRequestTimeout;
                                    if (s.states = {
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
                                        }, s.state = s.states.initialized, s.errorReason = null, s.queuedMessages = new c.default, s.msgSerial = 0, s.connectionDetails = void 0, s.connectionId = void 0, s.connectionKey = void 0, s.connectionStateTtl = o.connectionStateTtl, s.maxIdleInterval = null, s.transports = i.intersect(r.transports || a.default.defaultTransports, n.supportedTransports), s.baseTransport = i.intersect(a.default.baseTransportOrder, s.transports)[0], s.upgradeTransports = i.intersect(s.transports, a.default.upgradeTransports), s.transportPreference = null, s.httpHosts = a.default.getHosts(r), s.activeProtocol = null, s.proposedTransports = [], s.pendingTransports = [], s.host = null, s.lastAutoReconnectAttempt = null, s.lastActivity = null, s.forceFallbackHost = !1, s.connectCounter = 0, f.default.logAction(f.default.LOG_MINOR, "Realtime.ConnectionManager()", "started"), f.default.logAction(f.default.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (r.transports || a.default.defaultTransports) + "]"), f.default.logAction(f.default.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + s.transports + "]"), f.default.logAction(f.default.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + s.httpHosts + "]"), !s.transports.length) {
                                        var d = "no requested transports available";
                                        throw f.default.logAction(f.default.LOG_ERROR, "realtime.ConnectionManager()", d), new Error(d)
                                    }
                                    var p = u.default.Config.addEventListener;
                                    return p && (C() && "function" == typeof r.recover && p("beforeunload", s.persistConnection.bind(s)), !0 === r.closeOnUnload && p("beforeunload", (function() {
                                        f.default.logAction(f.default.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), s.requestState({
                                            state: "closing"
                                        })
                                    })), p("online", (function() {
                                        s.state == s.states.disconnected || s.state == s.states.suspended ? (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection"), s.requestState({
                                            state: "connecting"
                                        })) : s.state == s.states.connecting && (s.pendingTransports.forEach((function(e) {
                                            e.off()
                                        })), s.disconnectAllTransports(), s.startConnect())
                                    })), p("offline", (function() {
                                        s.state == s.states.connected && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport"), s.disconnectAllTransports())
                                    }))), s
                                }
                                return r.__extends(n, t), n.initTransports = function() {
                                    (0, b.default)(n), i.arrForEach(u.default.Transports, (function(e) {
                                        e(n)
                                    }))
                                }, n.prototype.createTransportParams = function(e, t) {
                                    return new L(this.options, e, t, this.connectionKey)
                                }, n.prototype.getTransportParams = function(e) {
                                    var t = this;
                                    ! function(e) {
                                        if (t.connectionKey) e("resume");
                                        else if ("string" != typeof t.options.recover) {
                                            var n, r, s = t.options.recover,
                                                i = C() && (null === (r = null === (n = u.default.WebStorage) || void 0 === n ? void 0 : n.getSession) || void 0 === r ? void 0 : r.call(n, O));
                                            if (i && "function" == typeof s) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data"), void s(i, (function(n) {
                                                n ? (t.options.recover = i.recoveryKey, e("recover")) : e("clean")
                                            }));
                                            e("clean")
                                        } else e("recover")
                                    }((function(n) {
                                        var r = t.createTransportParams(null, n);
                                        if ("recover" === n) {
                                            f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + t.options.recover);
                                            var s = I(t.options.recover);
                                            s && (t.msgSerial = s.msgSerial)
                                        } else f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + r.toString());
                                        e(r)
                                    }))
                                }, n.prototype.tryATransport = function(e, t, r) {
                                    var s = this;
                                    f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + t), v.default.tryConnect(n.supportedTransports[t], this, this.realtime.auth, e, (function(n, i) {
                                        var o = s.state;
                                        return o == s.states.closing || o == s.states.closed || o == s.states.failed ? (i && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + o.state + " while we were attempting the transport; closing " + i), i.close()), void r(!0)) : n ? (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + t + " " + n.event + ", err: " + n.error.toString()), void(!g.default.isTokenErr(n.error) || s.errorReason && g.default.isTokenErr(s.errorReason) ? "failed" === n.event ? (s.notifyState({
                                            state: "failed",
                                            error: n.error
                                        }), r(!0)) : "disconnected" === n.event && ((0, p.isRetriable)(n.error) ? r(!1) : (s.notifyState({
                                            state: s.states.connecting.failState,
                                            error: n.error
                                        }), r(!0))) : (s.errorReason = n.error, s.realtime.auth._forceNewToken(null, null, (function(n) {
                                            n ? s.actOnErrorFromAuthorize(n) : s.tryATransport(e, t, r)
                                        }))))) : (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + t + "; setting pending"), s.setTransportPending(i, e), void r(null, i))
                                    }))
                                }, n.prototype.setTransportPending = function(e, t) {
                                    var n = this,
                                        r = t.mode;
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + e + "; mode = " + r), i.arrDeleteValue(this.proposedTransports, e), this.pendingTransports.push(e);
                                    var s = u.default.Defaults.transportPreferenceOrder[u.default.Defaults.transportPreferenceOrder.length - 1];
                                    e.once("connected", (function(o, a, l) {
                                        "upgrade" == r && n.activeProtocol ? e.shortName !== s && i.arrIn(n.getUpgradePossibilities(), s) && n.activeProtocol ? setTimeout((function() {
                                            n.scheduleTransportActivation(o, e, a, l)
                                        }), n.options.timeouts.parallelUpgradeDelay) : n.scheduleTransportActivation(o, e, a, l) : (n.activateTransport(o, e, a, l), u.default.Config.nextTick((function() {
                                            n.connectImpl(t)
                                        }))), "recover" === r && n.options.recover && (n.options.recover = null, n.unpersistConnection())
                                    }));
                                    var o = this;
                                    e.on(["disconnected", "closed", "failed"], (function(t) {
                                        o.deactivateTransport(e, this.event, t)
                                    })), this.emit("transport.pending", e)
                                }, n.prototype.scheduleTransportActivation = function(e, t, n, r) {
                                    var o, a, l = this,
                                        c = this.activeProtocol && this.activeProtocol.getTransport(),
                                        d = function() {
                                            t.disconnect(), i.arrDeleteValue(l.pendingTransports, t)
                                        };
                                    if (this.state !== this.states.connected && this.state !== this.states.connecting) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + t.shortName), void d();
                                    if (c && (o = t, a = c, !(i.arrIndexOf(u.default.Defaults.transportPreferenceOrder, o.shortName) > i.arrIndexOf(u.default.Defaults.transportPreferenceOrder, a.shortName)))) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + t.shortName + " is no better than current active transport " + c.shortName + " - abandoning upgrade"), void d();
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Scheduling transport upgrade; transport = " + t);
                                    var p = null;
                                    if (!t.isConnected) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + t.shortName + "is no longer connected; abandoning upgrade"), void d();
                                    if (this.state === this.states.connected) f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Currently connected, so temporarily pausing events until the upgrade is complete"), this.state = this.states.synchronizing, p = this.activeProtocol;
                                    else if (this.state !== this.states.connecting) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + t.shortName), void d();
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Syncing transport; transport = " + t);
                                    var h = function() {
                                        f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Activating transport; transport = " + t), t.send(s.default.fromValues({
                                            action: T.ACTIVATE
                                        })), l.activateTransport(e, t, n, r), l.state === l.states.synchronizing ? (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = " + t), l.state = l.states.connected) : f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, but state is now " + l.state.state + ", so leaving unchanged"), l.state.sendEvents && l.sendQueuedMessages()
                                    };
                                    p ? p.onceIdle(h) : h()
                                }, n.prototype.activateTransport = function(e, t, n, r) {
                                    var s = this;
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + t), e && f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + e), n && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + n), r && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(r)), this.persistTransportPreference(t);
                                    var a = this.state,
                                        l = this.states.connected.state;
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + a.state), a.state == this.states.closing.state || a.state == this.states.closed.state || a.state == this.states.failed.state) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), t.disconnect(), !1;
                                    if (i.arrDeleteValue(this.pendingTransports, t), !t.isConnected) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + t + " since it appears to no longer be connected"), !1;
                                    var c = this.activeProtocol;
                                    this.activeProtocol = new o.default(t), this.host = t.params.host;
                                    var p = r.connectionKey;
                                    if (p && this.connectionKey != p && this.setConnection(n, r, !!e), this.onConnectionDetailsUpdate(r, t), u.default.Config.nextTick((function() {
                                            t.on("connected", (function(e, n, r) {
                                                s.onConnectionDetailsUpdate(r, t), s.emit("update", new d.default(l, l, null, e))
                                            }))
                                        })), a.state === this.states.connected.state ? e && (this.errorReason = this.realtime.connection.errorReason = e, this.emit("update", new d.default(l, l, null, e))) : (this.notifyState({
                                            state: "connected",
                                            error: e
                                        }), this.errorReason = this.realtime.connection.errorReason = e || null), this.emit("transport.active", t), c)
                                        if (c.messageQueue.count() > 0 && f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + c.transport.shortName + ", new one is " + t.shortName + ") finishing with " + c.messageQueue.count() + " messages still pending"), c.transport === t) {
                                            var h = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + t.shortName + "; stack = " + (new Error).stack;
                                            f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", h)
                                        } else c.finish();
                                    return i.safeArrForEach(this.pendingTransports, (function(e) {
                                        if (e === t) {
                                            var n = "Assumption violated: activating a transport that is still marked as a pending transport; transport = " + t.shortName + "; stack = " + (new Error).stack;
                                            f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", n), i.arrDeleteValue(s.pendingTransports, t)
                                        } else e.disconnect()
                                    })), i.safeArrForEach(this.proposedTransports, (function(e) {
                                        e === t ? (f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Assumption violated: activating a transport that is still marked as a proposed transport; transport = " + t.shortName + "; stack = " + (new Error).stack), i.arrDeleteValue(s.proposedTransports, t)) : e.dispose()
                                    })), !0
                                }, n.prototype.deactivateTransport = function(e, t, n) {
                                    var r = this.activeProtocol,
                                        s = r && r.getTransport() === e,
                                        o = i.arrDeleteValue(this.pendingTransports, e),
                                        a = i.arrDeleteValue(this.proposedTransports, e),
                                        l = this.noTransportsScheduledForActivation();
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + e), f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + t + (s ? "; was active" : o ? "; was pending" : a ? "; was proposed" : "") + (l ? "" : "; another transport is scheduled for activation")), n && n.message && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + n.message), s && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(r.getPendingMessages()), u.default.Config.nextTick((function() {
                                            r.clearPendingMessages()
                                        })), this.activeProtocol = this.host = null), this.emit("transport.inactive", e), s && l || s && "failed" === t || "closed" === t || null === r && o && 0 === this.pendingTransports.length) {
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
                                    } else s && "disconnected" === t && this.state !== this.states.synchronizing && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), this.notifyState({
                                        state: "connecting",
                                        error: n
                                    }))
                                }, n.prototype.noTransportsScheduledForActivation = function() {
                                    return i.isEmpty(this.pendingTransports) || this.pendingTransports.every((function(e) {
                                        return !e.isConnected
                                    }))
                                }, n.prototype.setConnection = function(e, t, n) {
                                    var r = this.connectionId;
                                    (r && r !== e || !r && n) && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0, this.queuedMessages.resetSendAttempted()), this.connectionId !== e && f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), this.realtime.connection.id = this.connectionId = e, this.realtime.connection.key = this.connectionKey = t.connectionKey
                                }, n.prototype.clearConnection = function() {
                                    this.realtime.connection.id = this.connectionId = void 0, this.realtime.connection.key = this.connectionKey = void 0, this.msgSerial = 0, this.unpersistConnection()
                                }, n.prototype.createRecoveryKey = function() {
                                    return this.connectionKey ? JSON.stringify({
                                        connectionKey: this.connectionKey,
                                        msgSerial: this.msgSerial,
                                        channelSerials: this.realtime.channels.channelSerials()
                                    }) : null
                                }, n.prototype.checkConnectionStateFreshness = function() {
                                    if (this.lastActivity && this.connectionId) {
                                        var e = i.now() - this.lastActivity;
                                        e > this.connectionStateTtl + this.maxIdleInterval && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + e + "ms ago; discarding connection state"), this.clearConnection(), this.states.connecting.failState = "suspended")
                                    }
                                }, n.prototype.persistConnection = function() {
                                    if (C()) {
                                        var t = this.createRecoveryKey();
                                        t && (n = {
                                            recoveryKey: t,
                                            disconnectedAt: i.now(),
                                            location: e.location,
                                            clientId: this.realtime.auth.clientId
                                        }, C() && (null === (s = null === (r = u.default.WebStorage) || void 0 === r ? void 0 : r.setSession) || void 0 === s || s.call(r, O, n)))
                                    }
                                    var n, r, s
                                }, n.prototype.unpersistConnection = function() {
                                    var e, t;
                                    C() && (null === (t = null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.removeSession) || void 0 === t || t.call(e, O))
                                }, n.prototype.getError = function() {
                                    return this.errorReason || this.getStateError()
                                }, n.prototype.getStateError = function() {
                                    var e, t;
                                    return null === (t = (e = p.default)[this.state.state]) || void 0 === t ? void 0 : t.call(e)
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
                                    var t, n, r = this,
                                        s = e.state,
                                        o = "disconnected" === s && (this.state === this.states.connected || this.state === this.states.synchronizing || e.retryImmediately || this.state === this.states.connecting && e.error && g.default.isTokenErr(e.error) && !(this.errorReason && g.default.isTokenErr(this.errorReason)));
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + s + (o ? "; will retry connection immediately" : "")), s != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(e.state), "suspended" !== s && "connected" !== s || (this.disconnectedRetryCount = 0), !this.state.terminal)) {
                                        var a = this.states[e.state],
                                            l = a.retryDelay;
                                        "disconnected" === a.state && (this.disconnectedRetryCount++, l = i.getRetryTime(a.retryDelay, this.disconnectedRetryCount));
                                        var c = new d.default(this.state.state, a.state, l, e.error || (null === (n = (t = p.default)[a.state]) || void 0 === n ? void 0 : n.call(t)));
                                        if (o) {
                                            var h = function() {
                                                    r.state === r.states.disconnected && (r.lastAutoReconnectAttempt = i.now(), r.requestState({
                                                        state: "connecting"
                                                    }))
                                                },
                                                m = this.lastAutoReconnectAttempt && i.now() - this.lastAutoReconnectAttempt + 1;
                                            m && m < 1e3 ? (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + m + "ms ago, waiting another " + (1e3 - m) + "ms before trying again"), setTimeout(h, 1e3 - m)) : u.default.Config.nextTick(h)
                                        } else "disconnected" !== s && "suspended" !== s || this.startRetryTimer(l);
                                        ("disconnected" === s && !o || "suspended" === s || a.terminal) && u.default.Config.nextTick((function() {
                                            r.disconnectAllTransports()
                                        })), "connected" != s || this.activeProtocol || f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange(c), this.state.sendEvents ? this.sendQueuedMessages() : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(s, c.reason), this.failQueuedMessages(c.reason))
                                    }
                                }, n.prototype.requestState = function(e) {
                                    var t, n, r = this,
                                        s = e.state;
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + s + "; current state: " + this.state.state), s != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(s), !("connecting" == s && "connected" == this.state.state || "closing" == s && "closed" == this.state.state))) {
                                        var i = this.states[s],
                                            o = new d.default(this.state.state, i.state, null, e.error || (null === (n = (t = p.default)[i.state]) || void 0 === n ? void 0 : n.call(t)));
                                        this.enactStateChange(o), "connecting" == s && u.default.Config.nextTick((function() {
                                            r.startConnect()
                                        })), "closing" == s && this.closeImpl()
                                    }
                                }, n.prototype.startConnect = function() {
                                    var e = this;
                                    if (this.state === this.states.connecting) {
                                        var t = this.realtime.auth,
                                            n = ++this.connectCounter,
                                            r = function() {
                                                e.checkConnectionStateFreshness(), e.getTransportParams((function(t) {
                                                    if ("recover" === t.mode && t.options.recover) {
                                                        var r = I(t.options.recover);
                                                        r && e.realtime.channels.recoverChannels(r.channelSerials)
                                                    }
                                                    n === e.connectCounter && e.connectImpl(t, n)
                                                }))
                                            };
                                        if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), "basic" === t.method) r();
                                        else {
                                            var s = function(t) {
                                                n === e.connectCounter && (t ? e.actOnErrorFromAuthorize(t) : r())
                                            };
                                            this.errorReason && g.default.isTokenErr(this.errorReason) ? t._forceNewToken(null, null, s) : t._ensureValidAuthCredentials(!1, s)
                                        }
                                    } else f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state)
                                }, n.prototype.connectImpl = function(e, t) {
                                    var n = this.state.state;
                                    n !== this.states.connecting.state && n !== this.states.connected.state ? f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect (or connected to upgrade), but was " + n) : this.pendingTransports.length ? f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Transports " + this.pendingTransports[0].toString() + " currently pending; taking no action") : n == this.states.connected.state ? this.upgradeIfNeeded(e) : this.transports.length > 1 && this.getTransportPreference() ? this.connectPreference(e, t) : this.connectBase(e, t)
                                }, n.prototype.connectPreference = function(e, t) {
                                    var n = this,
                                        r = this.getTransportPreference(),
                                        s = !1;
                                    i.arrIn(this.transports, r) || (this.unpersistTransportPreference(), this.connectImpl(e, t)), f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Trying to connect with stored transport preference " + r);
                                    var o = setTimeout((function() {
                                        s = !0, n.state.state !== n.states.connected.state && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Shortcircuit connection attempt with " + r + " failed; clearing preference and trying from scratch"), n.disconnectAllTransports(), n.unpersistTransportPreference()), n.connectImpl(e, t)
                                    }), this.options.timeouts.preferenceConnectTimeout);
                                    e.host = this.httpHosts[0], this.tryATransport(e, r, (function(r, a) {
                                        clearTimeout(o), s && a ? (a.off(), a.disconnect(), i.arrDeleteValue(n.pendingTransports, a)) : a || r || (n.unpersistTransportPreference(), n.connectImpl(e, t))
                                    }))
                                }, n.prototype.connectBase = function(e, t) {
                                    var n = this,
                                        r = function(e) {
                                            n.notifyState({
                                                state: n.states.connecting.failState,
                                                error: e
                                            })
                                        },
                                        s = this.httpHosts.slice(),
                                        o = function(e, r) {
                                            t === n.connectCounter && (r || e || u())
                                        };
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectBase()", "Trying to connect with base transport " + this.baseTransport);
                                    var a = s.shift();
                                    if (a) {
                                        e.host = a;
                                        var u = function() {
                                            s.length ? n.realtime.http.checkConnectivity ? n.realtime.http.checkConnectivity((function(a, u) {
                                                t === n.connectCounter && (a ? r(a) : u ? (e.host = i.arrPopRandomElement(s), n.tryATransport(e, n.baseTransport, o)) : r(new h.default("Unable to connect (network unreachable)", 80003, 404)))
                                            })) : r(new h.PartialErrorInfo("Internal error: Http.checkConnectivity not set", null, 500)) : r(new h.default("Unable to connect (and no more fallback hosts to try)", 80003, 404))
                                        };
                                        if (this.forceFallbackHost && s.length) return this.forceFallbackHost = !1, void u();
                                        this.tryATransport(e, this.baseTransport, o)
                                    } else r(new h.default("Unable to connect (no available host)", 80003, 404))
                                }, n.prototype.getUpgradePossibilities = function() {
                                    var e = this.activeProtocol.getTransport().shortName,
                                        t = i.arrIndexOf(this.upgradeTransports, e);
                                    return this.upgradeTransports.slice(t + 1)
                                }, n.prototype.upgradeIfNeeded = function(e) {
                                    var t = this,
                                        n = this.getUpgradePossibilities();
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.upgradeIfNeeded()", "upgrade possibilities: " + u.default.Config.inspect(n)), n.length && i.arrForEach(n, (function(n) {
                                        var r = t.createTransportParams(e.host, "upgrade");
                                        t.tryATransport(r, n, R)
                                    }))
                                }, n.prototype.closeImpl = function() {
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), i.safeArrForEach(this.pendingTransports, (function(e) {
                                        f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + e), e && e.close()
                                    })), i.safeArrForEach(this.proposedTransports, (function(e) {
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
                                                var i = this.activeProtocol.getTransport().params;
                                                u.default.Config.nextTick((function() {
                                                    "connected" === r.state.state && r.upgradeIfNeeded(i)
                                                }))
                                            }
                                            var o = null === (n = this.activeProtocol) || void 0 === n ? void 0 : n.getTransport();
                                            o && o.onAuthUpdated && o.onAuthUpdated(e);
                                            var a = s.default.fromValues({
                                                action: T.AUTH,
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
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports" + (e ? " except the active transport" : "")), this.connectCounter++, i.safeArrForEach(this.pendingTransports, (function(e) {
                                        f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + e), e && e.disconnect()
                                    })), this.pendingTransports = [], i.safeArrForEach(this.proposedTransports, (function(e) {
                                        f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disposing of proposed transport: " + e), e && e.dispose()
                                    })), this.proposedTransports = [], this.activeProtocol && !e && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect())
                                }, n.prototype.send = function(e, t, n) {
                                    n = n || R;
                                    var r = this.state;
                                    if (r.sendEvents) return f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.send()", "sending event"), void this.sendImpl(new o.PendingMessage(e, n));
                                    if (!(t && r.queueEvents || r.forceQueueEvents)) {
                                        var i = "rejecting event, queueEvent was " + t + ", state was " + r.state;
                                        return f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.send()", i), void n(this.errorReason || new h.default(i, 9e4, 400))
                                    }
                                    f.default.shouldLog(f.default.LOG_MICRO) && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + s.default.stringify(e)), this.queue(e, n)
                                }, n.prototype.sendImpl = function(e) {
                                    var t = e.message;
                                    e.ackRequired && !e.sendAttempted && (t.msgSerial = this.msgSerial++);
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
                                        if ((r = e.action) !== T.PRESENCE && r !== T.MESSAGE) return !1;
                                        if (r !== t.action) return !1;
                                        var s = r === T.PRESENCE ? "presence" : "messages",
                                            o = e[s].concat(t[s]);
                                        return !(m.default.getMessagesSize(o) > n || !i.allSame(o, "clientId") || !i.arrEvery(o, (function(e) {
                                            return !e.id
                                        })) || (e[s] = o, 0))
                                    }(n.message, e, r) ? (n.merged || (n.callback = y.default.create([n.callback]), n.merged = !0), n.callback.push(t)) : this.queuedMessages.push(new o.PendingMessage(e, t))
                                }, n.prototype.sendQueuedMessages = function() {
                                    var e;
                                    for (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages"); e = this.queuedMessages.shift();) this.sendImpl(e)
                                }, n.prototype.queuePendingMessages = function(e) {
                                    e && e.length && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + e.length + " pending messages"), this.queuedMessages.prepend(e))
                                }, n.prototype.failQueuedMessages = function(e) {
                                    var t = this.queuedMessages.count();
                                    t > 0 && (f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + t + " queued messages, err = " + i.inspectError(e)), this.queuedMessages.completeAllMessages(e))
                                }, n.prototype.onChannelMessage = function(e, t) {
                                    var n = this.activeProtocol && t === this.activeProtocol.getTransport(),
                                        r = i.arrIn(this.pendingTransports, t) && this.state == this.states.synchronizing;
                                    n || r || i.arrIndexOf([T.ACK, T.NACK, T.ERROR], e.action) > -1 ? this.realtime.channels.onChannelMessage(e) : f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.onChannelMessage()", "received message " + JSON.stringify(e) + "on defunct transport; discarding")
                                }, n.prototype.ping = function(e, t) {
                                    var n = this;
                                    if (e) {
                                        f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.ping()", "transport = " + e);
                                        var r = i.now(),
                                            s = i.cheapRandStr(),
                                            o = function(n) {
                                                if (n === s) {
                                                    e.off("heartbeat", o), clearTimeout(a);
                                                    var u = i.now() - r;
                                                    t(null, u)
                                                }
                                            },
                                            a = setTimeout((function() {
                                                e.off("heartbeat", o), t(new h.default("Timeout waiting for heartbeat response", 5e4, 500))
                                            }), this.options.timeouts.realtimeRequestTimeout);
                                        return e.on("heartbeat", o), void e.ping(s)
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
                                    } else t(new h.default("Unable to ping service; not connected", 4e4, 400))
                                }, n.prototype.abort = function(e) {
                                    this.activeProtocol.getTransport().fail(e)
                                }, n.prototype.registerProposedTransport = function(e) {
                                    this.proposedTransports.push(e)
                                }, n.prototype.getTransportPreference = function() {
                                    var e, t;
                                    return this.transportPreference || _() && (null === (t = null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.get) || void 0 === t ? void 0 : t.call(e, U))
                                }, n.prototype.persistTransportPreference = function(e) {
                                    var t, n;
                                    i.arrIn(a.default.upgradeTransports, e.shortName) && (this.transportPreference = e.shortName, _() && (null === (n = null === (t = u.default.WebStorage) || void 0 === t ? void 0 : t.set) || void 0 === n || n.call(t, U, e.shortName)))
                                }, n.prototype.unpersistTransportPreference = function() {
                                    var e, t;
                                    this.transportPreference = null, _() && (null === (t = null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.remove) || void 0 === t || t.call(e, U))
                                }, n.prototype.actOnErrorFromAuthorize = function(e) {
                                    if (40171 === e.code) this.notifyState({
                                        state: "failed",
                                        error: e
                                    });
                                    else if (40102 === e.code) this.notifyState({
                                        state: "failed",
                                        error: e
                                    });
                                    else if (e.statusCode === w.default.Forbidden) {
                                        var t = "Client configured authentication provider returned 403; failing the connection";
                                        f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", t), this.notifyState({
                                            state: "failed",
                                            error: new h.default(t, 80019, 403, e)
                                        })
                                    } else t = "Client configured authentication provider request failed", f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", t), this.notifyState({
                                        state: this.state.failState,
                                        error: new h.default(t, 80019, 401, e)
                                    })
                                }, n.prototype.onConnectionDetailsUpdate = function(e, t) {
                                    if (e) {
                                        this.connectionDetails = e, e.maxMessageSize && (this.options.maxMessageSize = e.maxMessageSize);
                                        var n = e.clientId;
                                        if (n) {
                                            var r = this.realtime.auth._uncheckedSetClientId(n);
                                            if (r) return f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", r.message), void t.fail(r)
                                        }
                                        var s = e.connectionStateTtl;
                                        s && (this.connectionStateTtl = s), this.maxIdleInterval = e.maxIdleInterval, this.emit("connectiondetails", e)
                                    }
                                }, n.supportedTransports = {}, n
                            }(l.default);
                            t.default = $
                        }).call(this, n(13))
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(7)),
                            i = r.__importDefault(n(2)),
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
                                    i.default.logAction(i.default.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + e + "; count = " + t), n = n || null;
                                    var r = this.messages;
                                    if (0 === r.length) throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
                                    var s = r[0];
                                    if (s) {
                                        var o = s.message.msgSerial,
                                            a = e + t;
                                        if (a > o)
                                            for (var u = 0, l = r.splice(0, a - o); u < l.length; u++) l[u].callback(n);
                                        0 == r.length && this.emit("idle")
                                    }
                                }, t.prototype.completeAllMessages = function(e) {
                                    this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, e)
                                }, t.prototype.resetSendAttempted = function() {
                                    for (var e = 0, t = this.messages; e < t.length; e++) t[e].sendAttempted = !1
                                }, t.prototype.clear = function() {
                                    i.default.logAction(i.default.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), this.messages = [], this.emit("idle")
                                }, t
                            }(s.default);
                        t.default = o
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, n, r) {
                            this.previous = e, this.current = t, n && (this.retryIn = n), r && (this.reason = r)
                        };
                        t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(10)),
                            i = r.__importDefault(n(7)),
                            o = r.__importStar(n(1)),
                            a = r.__importDefault(n(33)),
                            u = r.__importDefault(n(2)),
                            l = r.__importDefault(n(54)),
                            c = r.__importDefault(n(9)),
                            f = r.__importDefault(n(39)),
                            d = r.__importStar(n(4)),
                            p = r.__importDefault(n(15)),
                            h = r.__importDefault(n(20)),
                            g = s.default.Action,
                            m = function() {},
                            y = function(e) {
                                function t(t, n, r) {
                                    var s = e.call(this, t, n, r) || this;
                                    return s.retryCount = 0, s.history = function(e, t) {
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
                                    }, s.whenState = function(e, t) {
                                        return i.default.prototype.whenState.call(s, e, s.state, t)
                                    }, u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel()", "started; name = " + n), s.realtime = t, s.presence = new l.default(s), s.connectionManager = t.connection.connectionManager, s.state = "initialized", s.subscriptions = new i.default, s.syncChannelSerial = void 0, s.properties = {
                                        attachSerial: void 0,
                                        channelSerial: void 0
                                    }, s.setOptions(r), s.errorReason = null, s._requestedFlags = null, s._mode = null, s._attachResume = !1, s._decodingContext = {
                                        channelOptions: s.channelOptions,
                                        plugins: t.options.plugins || {},
                                        baseEncodedPreviousPayload: void 0
                                    }, s._lastPayload = {
                                        messageId: null,
                                        protocolMessageChannelSerial: null,
                                        decodeFailureRecoveryInProgress: null
                                    }, s._allChannelChanges = new i.default, s
                                }
                                return r.__extends(t, e), t.prototype.invalidStateError = function() {
                                    return new d.default("Channel operation failed as channel state is " + this.state, 90001, 400, this.errorReason || void 0)
                                }, t.processListenerArgs = function(e) {
                                    return "function" == typeof(e = Array.prototype.slice.call(e))[0] && e.unshift(null), null == e[e.length - 1] && e.pop(), e
                                }, t.prototype.setOptions = function(e, t) {
                                    if (!t && this.rest.options.promises) return o.promisify(this, "setOptions", arguments);
                                    var n = t || function(e) {
                                            e && u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.setOptions()", "Set options failed: " + e.toString())
                                        },
                                        r = function(e) {
                                            if (e && "params" in e && !o.isObject(e.params)) return new d.default("options.params must be an object", 4e4, 400);
                                            if (e && "modes" in e) {
                                                if (!o.isArray(e.modes)) return new d.default("options.modes must be an array", 4e4, 400);
                                                for (var t = 0; t < e.modes.length; t++) {
                                                    var n = e.modes[t];
                                                    if (!n || "string" != typeof n || !o.arrIn(s.default.channelModes, String.prototype.toUpperCase.call(n))) return new d.default("Invalid channel mode: " + n, 4e4, 400)
                                                }
                                            }
                                        }(e);
                                    r ? n(r) : (a.default.prototype.setOptions.call(this, e), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(e) ? (this.attachImpl(), this._allChannelChanges.once(["attached", "update", "detached", "failed"], (function(e) {
                                        switch (this.event) {
                                            case "update":
                                            case "attached":
                                                return void(null == n || n(null));
                                            default:
                                                return void(null == n || n(e.reason))
                                        }
                                    }))) : n())
                                }, t.prototype._shouldReattachToSetOptions = function(e) {
                                    if ("attached" !== this.state && "attaching" !== this.state) return !1;
                                    if (null == e ? void 0 : e.params) {
                                        var t = Object.assign({}, e.params);
                                        if (delete t.agent, 0 !== Object.keys(t).length && !this.params) return !0;
                                        if (this.params && !o.shallowEquals(this.params, t)) return !0
                                    }
                                    return !(!(null == e ? void 0 : e.modes) || this.modes && o.arrEquals(e.modes, this.modes))
                                }, t.prototype.publish = function() {
                                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    var r = t[0],
                                        s = t.length,
                                        i = t[s - 1];
                                    if ("function" != typeof i) {
                                        if (this.realtime.options.promises) return o.promisify(this, "publish", arguments);
                                        i = m, ++s
                                    }
                                    if (this.connectionManager.activeState()) {
                                        if (2 == s)
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
                                            if (t) i(t);
                                            else {
                                                var n = c.default.getMessagesSize(r);
                                                n > a ? i(new d.default("Maximum size of messages that can be published at once exceeded ( was " + n + " bytes; limit is " + a + " bytes)", 40009, 400)) : e.__publish(r, i)
                                            }
                                        }))
                                    } else i(this.connectionManager.getError())
                                }, t.prototype.__publish = function(e, t) {
                                    u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.publish()", "message count = " + e.length);
                                    var n = this.state;
                                    switch (n) {
                                        case "failed":
                                        case "suspended":
                                            t(d.default.fromValues(this.invalidStateError()));
                                            break;
                                        default:
                                            u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + n);
                                            var r = new s.default;
                                            r.action = g.MESSAGE, r.channel = this.name, r.messages = e, this.sendMessage(r, t)
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
                                    else if ("attached" === this.state) return void t(null, null);
                                    this._attach(!1, null, t)
                                }, t.prototype._attach = function(e, t, n) {
                                    n || (n = function(e) {
                                        e && u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + e.toString())
                                    });
                                    var r = this.connectionManager;
                                    r.activeState() ? (("attaching" !== this.state || e) && this.requestState("attaching", t), this.once((function(e) {
                                        switch (this.event) {
                                            case "attached":
                                                null == n || n(null, e);
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
                                    u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
                                    var e = s.default.fromValues({
                                        action: g.ATTACH,
                                        channel: this.name,
                                        params: this.channelOptions.params,
                                        channelSerial: this.properties.channelSerial
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
                                    u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
                                    var t = s.default.fromValues({
                                        action: g.DETACH,
                                        channel: this.name
                                    });
                                    this.sendMessage(t, e || m)
                                }, t.prototype.subscribe = function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = t.processListenerArgs(e),
                                        s = r[0],
                                        i = r[1],
                                        a = r[2];
                                    return !a && this.realtime.options.promises ? o.promisify(this, "subscribe", [s, i]) : "failed" !== this.state ? (s && "object" == typeof s && !Array.isArray(s) ? this._subscribeFilter(s, i) : this.subscriptions.on(s, i), this.attach(a || m)) : void(null == a || a(d.default.fromValues(this.invalidStateError())))
                                }, t.prototype._subscribeFilter = function(e, t) {
                                    var n = function(n) {
                                        var r, s, i, o, a, u, l = {
                                            name: n.name,
                                            refTimeserial: null === (s = null === (r = n.extras) || void 0 === r ? void 0 : r.ref) || void 0 === s ? void 0 : s.timeserial,
                                            refType: null === (o = null === (i = n.extras) || void 0 === i ? void 0 : i.ref) || void 0 === o ? void 0 : o.type,
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
                                        var s = this.filteredSubscriptions.get(t);
                                        s.set(e, (null === (r = null == s ? void 0 : s.get(e)) || void 0 === r ? void 0 : r.concat(n)) || [n])
                                    } else this.filteredSubscriptions.set(t, new Map([
                                        [e, [n]]
                                    ]))
                                }, t.prototype._getAndDeleteFilteredSubscriptions = function(e, t) {
                                    var n = this;
                                    if (!this.filteredSubscriptions) return [];
                                    if (!t && e) return Array.from(this.filteredSubscriptions.entries()).map((function(t) {
                                        var r, s = t[0],
                                            i = t[1],
                                            o = i.get(e);
                                        return i.delete(e), 0 === i.size && (null === (r = n.filteredSubscriptions) || void 0 === r || r.delete(s)), o
                                    })).reduce((function(e, t) {
                                        var n;
                                        return t ? (n = e).concat.apply(n, t) : e
                                    }), []);
                                    if (!t || !this.filteredSubscriptions.has(t)) return [];
                                    var r = this.filteredSubscriptions.get(t);
                                    if (!e) {
                                        var s = Array.from(r.values()).reduce((function(e, t) {
                                            return e.concat.apply(e, t)
                                        }), []);
                                        return this.filteredSubscriptions.delete(t), s
                                    }
                                    var i = r.get(e);
                                    return r.delete(e), i || []
                                }, t.prototype.unsubscribe = function() {
                                    for (var e, n = this, r = [], s = 0; s < arguments.length; s++) r[s] = arguments[s];
                                    var i = t.processListenerArgs(r),
                                        o = i[0],
                                        a = i[1];
                                    "object" == typeof o && !a || (null === (e = this.filteredSubscriptions) || void 0 === e ? void 0 : e.has(a)) ? this._getAndDeleteFilteredSubscriptions(o, a).forEach((function(e) {
                                        return n.subscriptions.off(e)
                                    })) : this.subscriptions.off(o, a)
                                }, t.prototype.sync = function() {
                                    switch (this.state) {
                                        case "initialized":
                                        case "detaching":
                                        case "detached":
                                            throw new d.PartialErrorInfo("Unable to sync to channel; not attached", 4e4)
                                    }
                                    var e = this.connectionManager;
                                    if (!e.activeState()) throw e.getError();
                                    var t = s.default.fromValues({
                                        action: g.SYNC,
                                        channel: this.name
                                    });
                                    this.syncChannelSerial && (t.channelSerial = this.syncChannelSerial), e.send(t)
                                }, t.prototype.sendMessage = function(e, t) {
                                    this.connectionManager.send(e, this.realtime.options.queueMessages, t)
                                }, t.prototype.sendPresence = function(e, t) {
                                    var n = s.default.fromValues({
                                        action: g.PRESENCE,
                                        channel: this.name,
                                        presence: o.isArray(e) ? p.default.fromValuesArray(e) : [p.default.fromValues(e)]
                                    });
                                    this.sendMessage(n, t)
                                }, t.prototype.onMessage = function(e) {
                                    e.action !== g.ATTACHED && e.action !== g.MESSAGE && e.action !== g.PRESENCE || this.setChannelSerial(e.channelSerial);
                                    var t, n = !1;
                                    switch (e.action) {
                                        case g.ATTACHED:
                                            this.properties.attachSerial = e.channelSerial, this._mode = e.getMode(), this.params = e.params || {};
                                            var r = e.decodeModesFromFlags();
                                            this.modes = r && o.allToLowerCase(r) || void 0;
                                            var s = e.hasFlag("RESUMED"),
                                                i = e.hasFlag("HAS_PRESENCE"),
                                                a = e.hasFlag("HAS_BACKLOG");
                                            if ("attached" === this.state) {
                                                s || this.presence.onAttached(i);
                                                var l = new f.default(this.state, this.state, s, a, e.error);
                                                this._allChannelChanges.emit("update", l), s && !this.channelOptions.updateOnAttached || this.emit("update", l)
                                            } else "detaching" === this.state ? this.checkPendingState() : this.notifyState("attached", e.error, s, i, a);
                                            break;
                                        case g.DETACHED:
                                            var m = e.error ? d.default.fromValues(e.error) : new d.default("Channel detached", 90001, 404);
                                            "detaching" === this.state ? this.notifyState("detached", m) : "attaching" === this.state ? this.notifyState("suspended", m) : this.requestState("attaching", m);
                                            break;
                                        case g.SYNC:
                                            if (n = !0, t = this.syncChannelSerial = e.channelSerial, !e.presence) break;
                                        case g.PRESENCE:
                                            for (var y = e.presence, b = e.id, v = e.connectionId, w = e.timestamp, _ = this.channelOptions, C = void 0, T = 0; T < y.length; T++) try {
                                                C = y[T], p.default.decode(C, _), C.connectionId || (C.connectionId = v), C.timestamp || (C.timestamp = w), C.id || (C.id = b + ":" + T)
                                            } catch (e) {
                                                u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", e.toString())
                                            }
                                            this.presence.setPresence(y, n, t);
                                            break;
                                        case g.MESSAGE:
                                            if ("attached" !== this.state) return void u.default.logAction(u.default.LOG_MAJOR, "RealtimeChannel.onMessage()", 'Message "' + e.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
                                            var R = e.messages,
                                                U = R[0],
                                                O = R[R.length - 1];
                                            if (b = e.id, v = e.connectionId, w = e.timestamp, U.extras && U.extras.delta && U.extras.delta.from !== this._lastPayload.messageId) {
                                                var I = 'Delta message decode failure - previous message not available for message "' + e.id + '" on this channel "' + this.name + '".';
                                                u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", I), this._startDecodeFailureRecovery(new d.default(I, 40018, 400));
                                                break
                                            }
                                            for (T = 0; T < R.length; T++) {
                                                I = R[T];
                                                try {
                                                    c.default.decode(I, this._decodingContext)
                                                } catch (e) {
                                                    switch (u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", e.toString()), e.code) {
                                                        case 40018:
                                                            return void this._startDecodeFailureRecovery(e);
                                                        case 40019:
                                                        case 40021:
                                                            return void this.notifyState("failed", e)
                                                    }
                                                }
                                                I.connectionId || (I.connectionId = v), I.timestamp || (I.timestamp = w), I.id || (I.id = b + ":" + T)
                                            }
                                            this._lastPayload.messageId = O.id, this._lastPayload.protocolMessageChannelSerial = e.channelSerial, this.onEvent(R);
                                            break;
                                        case g.ERROR:
                                            var L = e.error;
                                            L && 80016 == L.code ? this.checkPendingState() : this.notifyState("failed", d.default.fromValues(L));
                                            break;
                                        default:
                                            u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", "Fatal protocol error: unrecognised action (" + e.action + ")"), this.connectionManager.abort(h.default.unknownChannelErr())
                                    }
                                }, t.prototype._startDecodeFailureRecovery = function(e) {
                                    var t = this;
                                    this._lastPayload.decodeFailureRecoveryInProgress || (u.default.logAction(u.default.LOG_MAJOR, "RealtimeChannel.onMessage()", "Starting decode failure recovery process."), this._lastPayload.decodeFailureRecoveryInProgress = !0, this._attach(!0, e, (function() {
                                        t._lastPayload.decodeFailureRecoveryInProgress = !1
                                    })))
                                }, t.prototype.onAttached = function() {
                                    u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name)
                                }, t.prototype.notifyState = function(e, t, n, r, s) {
                                    if (u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + e), this.clearStateTimer(), o.arrIn(["detached", "suspended", "failed"], e) && (this.properties.channelSerial = null), e !== this.state) {
                                        this.presence.actOnChannelState(e, r, t), "suspended" === e && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), t && (this.errorReason = t);
                                        var i = new f.default(this.state, e, n, s, t),
                                            a = "failed" === e ? u.default.LOG_ERROR : u.default.LOG_MAJOR;
                                        u.default.logAction(a, 'Channel state for channel "' + this.name + '"', e + (t ? "; reason: " + t : "")), "attaching" !== e && "suspended" !== e && (this.retryCount = 0), "attached" === e && this.onAttached(), "attached" === e ? this._attachResume = !0 : "detaching" !== e && "failed" !== e || (this._attachResume = !1), this.state = e, this._allChannelChanges.emit(e, i), this.emit(e, i)
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
                                        var t = o.getRetryTime(this.realtime.options.timeouts.channelRetryTimeout, this.retryCount);
                                        this.retryTimer = setTimeout((function() {
                                            "suspended" === e.state && e.connectionManager.state.sendEvents && (e.retryTimer = null, u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), e.requestState("attaching"))
                                        }), t)
                                    }
                                }, t.prototype.cancelRetryTimer = function() {
                                    this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null)
                                }, t.prototype.getReleaseErr = function() {
                                    var e = this.state;
                                    return "initialized" === e || "detached" === e || "failed" === e ? null : new d.default("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + e, 90001, 400)
                                }, t.prototype.setChannelSerial = function(e) {
                                    u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.setChannelSerial()", "Updating channel serial; serial = " + e + "; previous = " + this.properties.channelSerial), e && (this.properties.channelSerial = e)
                                }, t
                            }(a.default);
                        t.default = y
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function(e, t, n, r, s) {
                            this.previous = e, this.current = t, "attached" === t && (this.resumed = n, this.hasBacklog = r), s && (this.reason = s)
                        };
                        t.default = r
                    }, function(e, t, n) {
                        var r, s, i, o, a, u, l, c;
                        e.exports = (c = n(6), s = (r = c).lib, i = s.WordArray, o = s.Hasher, a = r.algo, u = [], l = a.SHA1 = o.extend({
                            _doReset: function() {
                                this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, r = n[0], s = n[1], i = n[2], o = n[3], a = n[4], l = 0; l < 80; l++) {
                                    if (l < 16) u[l] = 0 | e[t + l];
                                    else {
                                        var c = u[l - 3] ^ u[l - 8] ^ u[l - 14] ^ u[l - 16];
                                        u[l] = c << 1 | c >>> 31
                                    }
                                    var f = (r << 5 | r >>> 27) + a + u[l];
                                    f += l < 20 ? 1518500249 + (s & i | ~s & o) : l < 40 ? 1859775393 + (s ^ i ^ o) : l < 60 ? (s & i | s & o | i & o) - 1894007588 : (s ^ i ^ o) - 899497514, a = o, o = i, i = s << 30 | s >>> 2, s = r, r = f
                                }
                                n[0] = n[0] + r | 0, n[1] = n[1] + s | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0
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
                            for (var r = 0, s = n.length; r < s; r++) {
                                var i = n.charCodeAt(r);
                                if (i < 128) e.setUint8(t++, i >>> 0 & 127 | 0);
                                else if (i < 2048) e.setUint8(t++, i >>> 6 & 31 | 192), e.setUint8(t++, i >>> 0 & 63 | 128);
                                else if (i < 65536) e.setUint8(t++, i >>> 12 & 15 | 224), e.setUint8(t++, i >>> 6 & 63 | 128), e.setUint8(t++, i >>> 0 & 63 | 128);
                                else {
                                    if (!(i < 1114112)) throw new Error("bad codepoint " + i);
                                    e.setUint8(t++, i >>> 18 & 7 | 240), e.setUint8(t++, i >>> 12 & 63 | 128), e.setUint8(t++, i >>> 6 & 63 | 128), e.setUint8(t++, i >>> 0 & 63 | 128)
                                }
                            }
                        }

                        function s(e, t, n) {
                            for (var r = "", s = t, i = t + n; s < i; s++) {
                                var o = e.getUint8(s);
                                if (0 != (128 & o))
                                    if (192 != (224 & o))
                                        if (224 != (240 & o)) {
                                            if (240 != (248 & o)) throw new Error("Invalid byte " + o.toString(16));
                                            r += String.fromCharCode((7 & o) << 18 | (63 & e.getUint8(++s)) << 12 | (63 & e.getUint8(++s)) << 6 | (63 & e.getUint8(++s)) << 0)
                                        } else r += String.fromCharCode((15 & o) << 12 | (63 & e.getUint8(++s)) << 6 | (63 & e.getUint8(++s)) << 0);
                                else r += String.fromCharCode((15 & o) << 6 | 63 & e.getUint8(++s));
                                else r += String.fromCharCode(o)
                            }
                            return r
                        }

                        function i(e) {
                            for (var t = 0, n = 0, r = e.length; n < r; n++) {
                                var s = e.charCodeAt(n);
                                if (s < 128) t += 1;
                                else if (s < 2048) t += 2;
                                else if (s < 65536) t += 3;
                                else {
                                    if (!(s < 1114112)) throw new Error("bad codepoint " + s);
                                    t += 4
                                }
                            }
                            return t
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
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
                                    var t = s(n.view, n.offset, e);
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

                        function c(e, t, n, s) {
                            var o = typeof e;
                            if ("string" == typeof e) {
                                var u = i(e);
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
                            if ("undefined" === o) return s ? 0 : (t.setUint8(n, 212), t.setUint8(n + 1, 0), t.setUint8(n + 2, 0), 3);
                            if (null === e) return s ? 0 : (t.setUint8(n, 192), 1);
                            if ("boolean" === o) return t.setUint8(n, e ? 195 : 194), 1;
                            if ("function" == typeof e.toJSON) return c(e.toJSON(), t, n, s);
                            if ("object" === o) {
                                var d, p = 0,
                                    h = void 0,
                                    g = Array.isArray(e);
                                if ((d = g ? e.length : (h = l(e, s)).length) < 16 ? (t.setUint8(n, d | (g ? 144 : 128)), p = 1) : d < 65536 ? (t.setUint8(n, g ? 220 : 222), t.setUint16(n + 1, d), p = 3) : d < 4294967296 && (t.setUint8(n, g ? 221 : 223), t.setUint32(n + 1, d), p = 5), g)
                                    for (var m = 0; m < d; m++) p += c(e[m], t, n + p, s);
                                else if (h)
                                    for (m = 0; m < d; m++) {
                                        var y = h[m];
                                        p += c(y, t, n + p), p += c(e[y], t, n + p, s)
                                    }
                                return p
                            }
                            if ("function" === o) return 0;
                            throw new Error("Unknown type " + o)
                        }

                        function f(e, t) {
                            var n = typeof e;
                            if ("string" === n) {
                                var r = i(e);
                                if (r < 32) return 1 + r;
                                if (r < 256) return 2 + r;
                                if (r < 65536) return 3 + r;
                                if (r < 4294967296) return 5 + r
                            }
                            if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
                                var s = e.byteLength;
                                if (s < 256) return 2 + s;
                                if (s < 65536) return 3 + s;
                                if (s < 4294967296) return 5 + s
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
                                for (var r = [], s = 0; s < e.byteLength; s++) {
                                    if (s > 20) {
                                        r.push("...");
                                        break
                                    }
                                    var i = t.getUint8(s).toString(16);
                                    1 === i.length && (i = "0" + i), r.push(i)
                                }
                                return "<" + n + " " + r.join(" ") + ">"
                            },
                            utf8Write: r,
                            utf8Read: s,
                            utf8ByteCount: i
                        }
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(30)),
                            i = r.__importDefault(n(50)),
                            o = r.__importDefault(n(3)),
                            a = r.__importDefault(n(4)),
                            u = r.__importDefault(n(55)),
                            l = r.__importDefault(n(57)),
                            c = r.__importDefault(n(62)),
                            f = r.__importDefault(n(64)),
                            d = r.__importDefault(n(68)),
                            p = r.__importDefault(n(2)),
                            h = n(8),
                            g = r.__importDefault(n(65)),
                            m = r.__importDefault(n(66)),
                            y = r.__importDefault(n(41)),
                            b = (0, l.default)(f.default, u.default);
                        o.default.Crypto = b, o.default.BufferUtils = u.default, o.default.Http = c.default, o.default.Config = f.default, o.default.Transports = d.default, o.default.WebStorage = g.default, s.default.Crypto = b, i.default.Crypto = b, p.default.initLogHandlers(), o.default.Defaults = (0, h.getDefaults)(m.default), o.default.Config.agent && (o.default.Defaults.agent += " " + o.default.Config.agent), o.default.Config.noUpgrade && (o.default.Defaults.upgradeTransports = []), t.default = {
                            ErrorInfo: a.default,
                            Rest: s.default,
                            Realtime: i.default,
                            msgpack: y.default
                        }
                    }, function(e) {
                        e.exports = JSON.parse('{"name":"ably","description":"Realtime client library for Ably, the realtime messaging service","version":"1.2.48","license":"Apache-2.0","bugs":{"url":"https://github.com/ably/ably-js/issues","email":"support@ably.com"},"main":"./build/ably-node.js","typings":"./ably.d.ts","react-native":{"./build/ably-node.js":"./build/ably-reactnative.js"},"browser":{"./build/ably-node.js":"./build/ably-commonjs.js"},"files":["build/**","ably.d.ts","callbacks.d.ts","callbacks.js","promises.d.ts","promises.js","resources/**","src/**","react/**"],"dependencies":{"@ably/msgpack-js":"^0.4.0","got":"^11.8.5","ws":"^8.14.2"},"peerDependencies":{"react":">=16.8.0","react-dom":">=16.8.0"},"peerDependenciesMeta":{"react":{"optional":true},"react-dom":{"optional":true}},"devDependencies":{"@ably/vcdiff-decoder":"1.0.4","@testing-library/react":"^13.3.0","@types/crypto-js":"^4.0.1","@types/jmespath":"^0.15.2","@types/node":"^15.0.0","@types/request":"^2.48.7","@types/ws":"^8.2.0","@typescript-eslint/eslint-plugin":"^5.14.0","@typescript-eslint/parser":"^5.14.0","@vitejs/plugin-react":"^1.3.2","async":"ably-forks/async#requirejs","aws-sdk":"^2.1413.0","chai":"^4.2.0","copy-webpack-plugin":"^6.4.1","cors":"^2.8.5","crypto-js":"ably-forks/crypto-js#crypto-lite","eslint":"^7.13.0","eslint-plugin-import":"^2.28.0","eslint-plugin-jsdoc":"^40.0.0","eslint-plugin-react":"^7.32.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-security":"^1.4.0","express":"^4.17.1","glob":"~4.4","google-closure-compiler":"^20180610.0.1","grunt":"^1.6.1","grunt-bump":"^0.3.1","grunt-cli":"~1.2.0","grunt-closure-tools":"^1.0.0","grunt-contrib-concat":"~0.5","grunt-shell":"~1.1","grunt-webpack":"^4.0.2","hexy":"~0.2","jmespath":"^0.16.0","jsdom":"^20.0.0","kexec":"ably-forks/node-kexec#update-for-node-12","minimist":"^1.2.5","mocha":"^8.1.3","null-loader":"^4.0.1","playwright":"^1.39.0","prettier":"^2.5.1","react":">=18.1.0","react-dom":">=18.1.0","requirejs":"~2.1","shelljs":"~0.8","source-map-explorer":"^2.5.2","ts-loader":"^8.2.0","tsconfig-paths-webpack-plugin":"^4.0.1","tslib":"^2.3.1","typedoc":"^0.23.8","typescript":"^4.6.4","vite":"^4.4.9","vitest":"^0.18.0","webpack":"^4.44.2","webpack-cli":"^4.2.0"},"engines":{"node":">=5.10.x"},"repository":"ably/ably-js","jspm":{"registry":"npm","directories":{"lib":"build"},"main":"ably"},"scripts":{"start:react":"npx vite serve","grunt":"grunt","test":"grunt test","test:node":"grunt test:node","test:node:skip-build":"grunt mocha","test:webserver":"grunt test:webserver","test:playwright":"node test/support/runPlaywrightTests.js","test:react":"vitest run","concat":"grunt concat","build":"grunt build:all && npm run build:react","build:node":"grunt build:node","build:browser":"grunt build:browser","build:react":"npm run build:react:mjs && npm run build:react:cjs && cp src/platform/react-hooks/res/package.react.json react/package.json","build:react:mjs":"tsc --project src/platform/react-hooks/tsconfig.mjs.json && cp src/platform/react-hooks/res/package.mjs.json react/mjs/package.json","build:react:cjs":"tsc --project src/platform/react-hooks/tsconfig.cjs.json && cp src/platform/react-hooks/res/package.cjs.json react/cjs/package.json","requirejs":"grunt requirejs","lint":"eslint .","lint:fix":"eslint --fix .","check-closure-compiler":"grunt check-closure-compiler","prepare":"npm run build","format":"prettier --write --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js docs/chrome-mv3.md","format:check":"prettier --check --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js","sourcemap":"source-map-explorer build/ably.min.js","sourcemap:noencryption":"source-map-explorer build/ably.noencryption.min.js","docs":"typedoc --entryPoints ably.d.ts --out docs/generated/default --readme docs/landing-pages/default.md && typedoc --entryPoints promises.d.ts --out docs/generated/promises --name \\"ably (Promise-based)\\" --readme docs/landing-pages/promises.md && cp docs/landing-pages/choose-library.html docs/generated/index.html"}}')
                    }, function(e, t) {}, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(32), n(24), r.HmacSHA256)
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(47)),
                            o = r.__importDefault(n(14)),
                            a = r.__importDefault(n(19)),
                            u = r.__importDefault(n(4)),
                            l = r.__importDefault(n(48)),
                            c = function() {},
                            f = function(e) {
                                this.rest = e, this.admin = new d(e)
                            },
                            d = function() {
                                function e(e) {
                                    this.rest = e, this.deviceRegistrations = new p(e), this.channelSubscriptions = new h(e)
                                }
                                return e.prototype.publish = function(e, t, n) {
                                    var r = this.rest,
                                        i = r.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        a = s.defaultPostHeaders(r.options, i),
                                        u = {},
                                        l = s.mixin({
                                            recipient: e
                                        }, t);
                                    if ("function" != typeof n) {
                                        if (this.rest.options.promises) return s.promisify(this, "publish", arguments);
                                        n = c
                                    }
                                    r.options.headers && s.mixin(a, r.options.headers), r.options.pushFullWait && s.mixin(u, {
                                        fullWait: "true"
                                    });
                                    var f = s.encodeBody(l, i);
                                    o.default.post(r, "/push/publish", f, a, u, null, (function(e) {
                                        return n(e)
                                    }))
                                }, e
                            }(),
                            p = function() {
                                function e(e) {
                                    this.rest = e
                                }
                                return e.prototype.save = function(e, t) {
                                    var n = this.rest,
                                        r = i.default.fromValues(e),
                                        a = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        u = s.defaultPostHeaders(n.options, a),
                                        l = {};
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "save", arguments);
                                        t = c
                                    }
                                    n.options.headers && s.mixin(u, n.options.headers), n.options.pushFullWait && s.mixin(l, {
                                        fullWait: "true"
                                    });
                                    var f = s.encodeBody(r, a);
                                    o.default.put(n, "/push/deviceRegistrations/" + encodeURIComponent(e.id), f, u, l, null, (function(e, n, r, s) {
                                        t(e, e ? void 0 : i.default.fromResponseBody(n, s ? void 0 : a))
                                    }))
                                }, e.prototype.get = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        a = s.defaultGetHeaders(n.options, r),
                                        l = e.id || e;
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "get", arguments);
                                        t = c
                                    }
                                    "string" == typeof l && l.length ? (n.options.headers && s.mixin(a, n.options.headers), o.default.get(n, "/push/deviceRegistrations/" + encodeURIComponent(l), a, {}, null, (function(e, n, s, o) {
                                        t(e, e ? void 0 : i.default.fromResponseBody(n, o ? void 0 : r))
                                    }))) : t(new u.default("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400))
                                }, e.prototype.list = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        o = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                        u = s.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "list", arguments);
                                        t = c
                                    }
                                    n.options.headers && s.mixin(u, n.options.headers), new a.default(n, "/push/deviceRegistrations", u, o, (function(e, t, n) {
                                        return i.default.fromResponseBody(e, n ? void 0 : r)
                                    })).get(e, t)
                                }, e.prototype.remove = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        i = s.defaultGetHeaders(n.options, r),
                                        a = {},
                                        l = e.id || e;
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "remove", arguments);
                                        t = c
                                    }
                                    "string" == typeof l && l.length ? (n.options.headers && s.mixin(i, n.options.headers), n.options.pushFullWait && s.mixin(a, {
                                        fullWait: "true"
                                    }), o.default.delete(n, "/push/deviceRegistrations/" + encodeURIComponent(l), i, a, null, (function(e) {
                                        return t(e)
                                    }))) : t(new u.default("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400))
                                }, e.prototype.removeWhere = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        i = s.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "removeWhere", arguments);
                                        t = c
                                    }
                                    n.options.headers && s.mixin(i, n.options.headers), n.options.pushFullWait && s.mixin(e, {
                                        fullWait: "true"
                                    }), o.default.delete(n, "/push/deviceRegistrations", i, e, null, (function(e) {
                                        return t(e)
                                    }))
                                }, e
                            }(),
                            h = function() {
                                function e(t) {
                                    this.remove = e.prototype.removeWhere, this.rest = t
                                }
                                return e.prototype.save = function(e, t) {
                                    var n = this.rest,
                                        r = l.default.fromValues(e),
                                        i = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        a = s.defaultPostHeaders(n.options, i),
                                        u = {};
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "save", arguments);
                                        t = c
                                    }
                                    n.options.headers && s.mixin(a, n.options.headers), n.options.pushFullWait && s.mixin(u, {
                                        fullWait: "true"
                                    });
                                    var f = s.encodeBody(r, i);
                                    o.default.post(n, "/push/channelSubscriptions", f, a, u, null, (function(e, n, r, s) {
                                        t(e, !e && l.default.fromResponseBody(n, s ? void 0 : i))
                                    }))
                                }, e.prototype.list = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        i = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                        o = s.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "list", arguments);
                                        t = c
                                    }
                                    n.options.headers && s.mixin(o, n.options.headers), new a.default(n, "/push/channelSubscriptions", o, i, (function(e, t, n) {
                                        return l.default.fromResponseBody(e, n ? void 0 : r)
                                    })).get(e, t)
                                }, e.prototype.removeWhere = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        i = s.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "removeWhere", arguments);
                                        t = c
                                    }
                                    n.options.headers && s.mixin(i, n.options.headers), n.options.pushFullWait && s.mixin(e, {
                                        fullWait: "true"
                                    }), o.default.delete(n, "/push/channelSubscriptions", i, e, null, (function(e) {
                                        return t(e)
                                    }))
                                }, e.prototype.listChannels = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? s.Format.msgpack : s.Format.json,
                                        i = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                        o = s.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return s.promisify(this, "listChannels", arguments);
                                        t = c
                                    }
                                    n.options.headers && s.mixin(o, n.options.headers), n.options.pushFullWait && s.mixin(e, {
                                        fullWait: "true"
                                    }), new a.default(n, "/push/channels", o, i, (function(e, t, n) {
                                        for (var i = !n && r ? s.decodeBody(e, r) : e, o = 0; o < i.length; o++) i[o] = String(i[o]);
                                        return i
                                    })).get(e, t)
                                }, e
                            }();
                        t.default = f
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r, s, i = n(0),
                            o = i.__importStar(n(1)),
                            a = i.__importDefault(n(4));
                        ! function(e) {
                            e.Phone = "phone", e.Tablet = "tablet", e.Desktop = "desktop", e.TV = "tv", e.Watch = "watch", e.Car = "car", e.Embedded = "embedded", e.Other = "other"
                        }(r || (r = {})),
                        function(e) {
                            e.Android = "android", e.IOS = "ios", e.Browser = "browser"
                        }(s || (s = {}));
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
                                var e, t, n, r, s = "[DeviceDetails";
                                return this.id && (s += "; id=" + this.id), this.platform && (s += "; platform=" + this.platform), this.formFactor && (s += "; formFactor=" + this.formFactor), this.clientId && (s += "; clientId=" + this.clientId), this.metadata && (s += "; metadata=" + this.metadata), this.deviceIdentityToken && (s += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), (null === (e = this.push) || void 0 === e ? void 0 : e.recipient) && (s += "; push.recipient=" + JSON.stringify(this.push.recipient)), (null === (t = this.push) || void 0 === t ? void 0 : t.state) && (s += "; push.state=" + this.push.state), (null === (n = this.push) || void 0 === n ? void 0 : n.error) && (s += "; push.error=" + JSON.stringify(this.push.error)), (null === (r = this.push) || void 0 === r ? void 0 : r.metadata) && (s += "; push.metadata=" + this.push.metadata), s += "]"
                            }, e.fromResponseBody = function(t, n) {
                                return n && (t = o.decodeBody(t, n)), o.isArray(t) ? e.fromValuesArray(t) : e.fromValues(t)
                            }, e.fromValues = function(t) {
                                return t.error = t.error && a.default.fromValues(t.error), Object.assign(new e, t)
                            }, e.fromValuesArray = function(t) {
                                for (var n = t.length, r = new Array(n), s = 0; s < n; s++) r[s] = e.fromValues(t[s]);
                                return r
                            }, e.toRequestBody = o.encodeBody, e
                        }();
                        t.default = u
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0).__importStar(n(1)),
                            s = function() {
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
                                    for (var n = t.length, r = new Array(n), s = 0; s < n; s++) r[s] = e.fromValues(t[s]);
                                    return r
                                }, e.toRequestBody = r.encodeBody, e
                            }();
                        t.default = s
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = function(e) {
                                this.count = e && e.count || 0, this.data = e && e.data || 0, this.uncompressedData = e && e.uncompressedData || 0, this.failed = e && e.failed || 0, this.refused = e && e.refused || 0
                            },
                            o = function(e) {
                                function t(t) {
                                    var n = e.call(this, t) || this;
                                    return t && t.category && (n.category = {}, s.forInOwnNonNullProperties(t.category, (function(e) {
                                        n.category[e] = new i(t.category[e])
                                    }))), n
                                }
                                return r.__extends(t, e), t
                            }(i),
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
                            p = function(e) {
                                this.all = new c(e && e.all), this.producerPaid = new d(e && e.producerPaid), this.consumerPaid = new d(e && e.consumerPaid)
                            },
                            h = function(e) {
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
                                this.delta = void 0, e && e.delta && (this.delta = {}, s.forInOwnNonNullProperties(e.delta, (function(n) {
                                    t.delta[n] = new g(e.delta[n])
                                })))
                            },
                            y = function(e) {
                                function t(t) {
                                    var n = e.call(this, t) || this;
                                    return n.persisted = new c(t && t.persisted), n.connections = new l(t && t.connections), n.channels = new a(t && t.channels), n.apiRequests = new u(t && t.apiRequests), n.tokenRequests = new u(t && t.tokenRequests), n.xchgProducer = new p(t && t.xchgProducer), n.xchgConsumer = new p(t && t.xchgConsumer), n.push = new h(t && t.pushStats), n.processed = new m(t && t.processed), n.inProgress = t && t.inProgress || void 0, n.unit = t && t.unit || void 0, n.intervalId = t && t.intervalId || void 0, n
                                }
                                return r.__extends(t, e), t.fromValues = function(e) {
                                    return new t(e)
                                }, t
                            }(d);
                        t.default = y
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(30)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(2)),
                            u = r.__importDefault(n(51)),
                            l = r.__importDefault(n(38)),
                            c = r.__importDefault(n(8)),
                            f = r.__importDefault(n(4)),
                            d = r.__importDefault(n(10)),
                            p = r.__importDefault(n(35)),
                            h = r.__importDefault(n(3)),
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
                                }, t.Callbacks = t, t.Utils = s, t.ConnectionManager = p.default, t.Platform = h.default, t.ProtocolMessage = d.default, t.Message = g.default, t
                            }(i.default),
                            y = function(e) {
                                function t(t) {
                                    var n = e.call(this) || this;
                                    return n.realtime = t, n.all = Object.create(null), t.connection.connectionManager.on("transport.active", (function() {
                                        n.onTransportActive()
                                    })), n
                                }
                                return r.__extends(t, e), t.prototype.channelSerials = function() {
                                    for (var e = {}, t = 0, n = s.keysArray(this.all, !0); t < n.length; t++) {
                                        var r = n[t],
                                            i = this.all[r];
                                        i.properties.channelSerial && (e[r] = i.properties.channelSerial)
                                    }
                                    return e
                                }, t.prototype.recoverChannels = function(e) {
                                    for (var t = 0, n = s.keysArray(e, !0); t < n.length; t++) {
                                        var r = n[t];
                                        this.get(r).properties.channelSerial = e[r]
                                    }
                                }, t.prototype.onChannelMessage = function(e) {
                                    var t = e.channel;
                                    if (void 0 !== t) {
                                        var n = this.all[t];
                                        n ? n.onMessage(e) : a.default.logAction(a.default.LOG_ERROR, "Channels.onChannelMessage()", "received event for non-existent channel: " + t)
                                    } else a.default.logAction(a.default.LOG_ERROR, "Channels.onChannelMessage()", "received event unspecified channel, action = " + e.action)
                                }, t.prototype.onTransportActive = function() {
                                    for (var e in this.all) {
                                        var t = this.all[e];
                                        "attaching" === t.state || "detaching" === t.state ? t.checkPendingState() : "suspended" === t.state ? t._attach(!1, null) : "attached" === t.state && t.requestState("attaching")
                                    }
                                }, t.prototype.propogateConnectionInterruption = function(e, t) {
                                    var n = ["attaching", "attached", "detaching", "suspended"],
                                        r = {
                                            closing: "detached",
                                            closed: "detached",
                                            failed: "failed",
                                            suspended: "suspended"
                                        } [e];
                                    for (var i in this.all) {
                                        var o = this.all[i];
                                        s.arrIn(n, o.state) && o.notifyState(r, t)
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
                                }, t.prototype.getDerived = function(e, t, n) {
                                    if (t.filter) {
                                        var r = s.toBase64(t.filter),
                                            i = s.matchDerivedChannel(e);
                                        e = "[filter=".concat(r).concat(i.qualifierParam, "]").concat(i.channelName)
                                    }
                                    return this.get(e, n)
                                }, t.prototype.release = function(e) {
                                    e = String(e);
                                    var t = this.all[e];
                                    if (t) {
                                        var n = t.getReleaseErr();
                                        if (n) throw n;
                                        delete this.all[e]
                                    }
                                }, t
                            }(o.default);
                        t.default = m
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(7)),
                            o = r.__importDefault(n(35)),
                            a = r.__importDefault(n(2)),
                            u = r.__importDefault(n(37)),
                            l = r.__importDefault(n(3));

                        function c() {}
                        var f = function(e) {
                            function t(t, n) {
                                var r = e.call(this) || this;
                                return r.whenState = function(e, t) {
                                    return i.default.prototype.whenState.call(r, e, r.state, t, new u.default(void 0, e))
                                }, r.ably = t, r.connectionManager = new o.default(t, n), r.state = r.connectionManager.state.state, r.key = void 0, r.id = void 0, r.errorReason = null, r.connectionManager.on("connectionstate", (function(e) {
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
                                    if (this.ably.options.promises) return s.promisify(this, "ping", arguments);
                                    e = c
                                }
                                this.connectionManager.ping(null, e)
                            }, t.prototype.close = function() {
                                a.default.logAction(a.default.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({
                                    state: "closing"
                                })
                            }, Object.defineProperty(t.prototype, "recoveryKey", {
                                get: function() {
                                    return this.createRecoveryKey()
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.createRecoveryKey = function() {
                                return this.connectionManager.createRecoveryKey()
                            }, t
                        }(i.default);
                        t.default = f
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.PendingMessage = void 0;
                        var r = n(0),
                            s = r.__importDefault(n(10)),
                            i = r.__importStar(n(1)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(2)),
                            u = r.__importDefault(n(36)),
                            l = r.__importDefault(n(4)),
                            c = s.default.Action,
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
                                a.default.logAction(a.default.LOG_ERROR, "Protocol.onNack()", "serial = " + e + "; count = " + t + "; err = " + i.inspectError(n)), n || (n = new l.default("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages(e, t, n)
                            }, t.prototype.onceIdle = function(e) {
                                var t = this.messageQueue;
                                0 !== t.count() ? t.once("idle", e) : e()
                            }, t.prototype.send = function(e) {
                                e.ackRequired && this.messageQueue.push(e), a.default.shouldLog(a.default.LOG_MICRO) && a.default.logAction(a.default.LOG_MICRO, "Protocol.send()", "sending msg; " + s.default.stringify(e.message)), e.sendAttempted = !0, this.transport.send(e.message)
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
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(3)),
                            i = r.__importStar(n(1)),
                            o = r.__importDefault(n(26)),
                            a = r.__importDefault(n(8)),
                            u = r.__importDefault(n(2)),
                            l = r.__importDefault(n(10)),
                            c = r.__importDefault(n(4)),
                            f = "web_socket",
                            d = function(e) {
                                function t(t, n, r) {
                                    var i = e.call(this, t, n, r) || this;
                                    return i.shortName = f, r.heartbeats = s.default.Config.useProtocolHeartbeats, i.wsHost = a.default.getHost(r.options, r.host, !0), i
                                }
                                return r.__extends(t, e), t.isAvailable = function() {
                                    return !!s.default.Config.WebSocket
                                }, t.prototype.createWebSocket = function(e, t) {
                                    return this.uri = e + i.toQueryString(t), new s.default.Config.WebSocket(this.uri)
                                }, t.prototype.toString = function() {
                                    return "WebSocketTransport; uri=" + this.uri
                                }, t.prototype.connect = function() {
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.connect()", "starting"), o.default.prototype.connect.call(this);
                                    var e = this,
                                        t = this.params,
                                        n = t.options,
                                        r = (n.tls ? "wss://" : "ws://") + this.wsHost + ":" + a.default.getPort(n) + "/";
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + r), this.auth.getAuthParams((function(n, i) {
                                        if (!e.isDisposed) {
                                            var o = "";
                                            for (var a in i) o += " " + a + ": " + i[a] + ";";
                                            if (u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + o + " err: " + n), n) e.disconnect(n);
                                            else {
                                                var l = t.getConnectParams(i);
                                                try {
                                                    var c = e.wsConnection = e.createWebSocket(r, l);
                                                    c.binaryType = s.default.Config.binaryType, c.onopen = function() {
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
                                        var n = "Exception from ws connection when trying to send: " + i.inspectError(e);
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
                                        var s = "Unclean disconnection of WebSocket ; code = " + n;
                                        r = new c.default(s, 80003, 400), u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.onWsClose()", s), this.finish("disconnected", r)
                                    }
                                    this.emit("disposed")
                                }, t.prototype.onWsError = function(e) {
                                    var t = this;
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + e.message), s.default.Config.nextTick((function() {
                                        t.disconnect(Error(e.message))
                                    }))
                                }, t.prototype.dispose = function() {
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = !0;
                                    var e = this.wsConnection;
                                    e && (e.onmessage = function() {}, delete this.wsConnection, s.default.Config.nextTick((function() {
                                        if (u.default.logAction(u.default.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !e) throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
                                        e.close()
                                    })))
                                }, t
                            }(o.default);
                        t.default = function(e) {
                            return d.isAvailable() && (e.supportedTransports[f] = d), d
                        }
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(1)),
                            i = r.__importDefault(n(34)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(2)),
                            u = r.__importDefault(n(15)),
                            l = r.__importStar(n(4)),
                            c = r.__importDefault(n(38)),
                            f = r.__importDefault(n(23)),
                            d = r.__importDefault(n(39)),
                            p = function() {};

                        function h(e) {
                            var t = e.channel.realtime,
                                n = t.auth.clientId;
                            return (!n || "*" === n) && "connected" === t.connection.state
                        }

                        function g(e, t) {
                            if (e.isSynthesized() || t.isSynthesized()) return e.timestamp >= t.timestamp;
                            var n = e.parseId(),
                                r = t.parseId();
                            return n.msgSerial === r.msgSerial ? n.index > r.index : n.msgSerial > r.msgSerial
                        }
                        var m = function(e) {
                                function t(t) {
                                    var n = e.call(this, t) || this;
                                    return n.channel = t, n.syncComplete = !1, n.members = new y(n, (function(e) {
                                        return e.clientId + ":" + e.connectionId
                                    })), n._myMembers = new y(n, (function(e) {
                                        return e.clientId
                                    })), n.subscriptions = new o.default, n.pendingPresence = [], n
                                }
                                return r.__extends(t, e), t.prototype.enter = function(e, t) {
                                    if (h(this)) throw new l.default("clientId must be specified to enter a presence channel", 40012, 400);
                                    return this._enterOrUpdateClient(void 0, void 0, e, "enter", t)
                                }, t.prototype.update = function(e, t) {
                                    if (h(this)) throw new l.default("clientId must be specified to update presence data", 40012, 400);
                                    return this._enterOrUpdateClient(void 0, void 0, e, "update", t)
                                }, t.prototype.enterClient = function(e, t, n) {
                                    return this._enterOrUpdateClient(void 0, e, t, "enter", n)
                                }, t.prototype.updateClient = function(e, t, n) {
                                    return this._enterOrUpdateClient(void 0, e, t, "update", n)
                                }, t.prototype._enterOrUpdateClient = function(e, t, n, r, i) {
                                    var o = this;
                                    if (!i)
                                        if ("function" == typeof n) i = n, n = null;
                                        else {
                                            if (this.channel.realtime.options.promises) return s.promisify(this, "_enterOrUpdateClient", [e, t, n, r]);
                                            i = p
                                        } var c = this.channel;
                                    if (c.connectionManager.activeState()) {
                                        a.default.logAction(a.default.LOG_MICRO, "RealtimePresence." + r + "Client()", "channel = " + c.name + ", id = " + e + ", client = " + (t || "(implicit) " + this.channel.realtime.auth.clientId));
                                        var f = u.default.fromData(n);
                                        f.action = r, e && (f.id = e), t && (f.clientId = t), u.default.encode(f, c.channelOptions, (function(e) {
                                            if (e) i(e);
                                            else switch (c.state) {
                                                case "attached":
                                                    c.sendPresence(f, i);
                                                    break;
                                                case "initialized":
                                                case "detached":
                                                    c.attach();
                                                case "attaching":
                                                    o.pendingPresence.push({
                                                        presence: f,
                                                        callback: i
                                                    });
                                                    break;
                                                default:
                                                    (e = new l.PartialErrorInfo("Unable to " + r + " presence channel while in " + c.state + " state", 90001)).code = 90001, i(e)
                                            }
                                        }))
                                    } else i(c.connectionManager.getError())
                                }, t.prototype.leave = function(e, t) {
                                    if (h(this)) throw new l.default("clientId must have been specified to enter or leave a presence channel", 40012, 400);
                                    return this.leaveClient(void 0, e, t)
                                }, t.prototype.leaveClient = function(e, t, n) {
                                    if (!n)
                                        if ("function" == typeof t) n = t, t = null;
                                        else {
                                            if (this.channel.realtime.options.promises) return s.promisify(this, "leaveClient", [e, t]);
                                            n = p
                                        } var r = this.channel;
                                    if (r.connectionManager.activeState()) {
                                        a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
                                        var i = u.default.fromData(t);
                                        switch (i.action = "leave", e && (i.clientId = e), r.state) {
                                            case "attached":
                                                r.sendPresence(i, n);
                                                break;
                                            case "attaching":
                                                this.pendingPresence.push({
                                                    presence: i,
                                                    callback: n
                                                });
                                                break;
                                            case "initialized":
                                            case "failed":
                                                var o = new l.PartialErrorInfo("Unable to leave presence channel (incompatible state)", 90001);
                                                null == n || n(o);
                                                break;
                                            default:
                                                null == n || n(r.invalidStateError())
                                        }
                                    } else null == n || n(r.connectionManager.getError())
                                }, t.prototype.get = function(e, t) {
                                    var n = this,
                                        r = Array.prototype.slice.call(arguments);
                                    1 == r.length && "function" == typeof r[0] && r.unshift(null), e = r[0], t = r[1];
                                    var i = !e || !("waitForSync" in e) || e.waitForSync;
                                    if (!t) {
                                        if (this.channel.realtime.options.promises) return s.promisify(this, "get", r);
                                        t = p
                                    }

                                    function o(n) {
                                        t(null, e ? n.list(e) : n.values())
                                    }
                                    "suspended" !== this.channel.state ? function(e, t, n) {
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
                                                t(l.default.fromValues(e.invalidStateError()))
                                        }
                                    }(this.channel, t, (function() {
                                        var e = n.members;
                                        i ? e.waitSync((function() {
                                            o(e)
                                        })) : o(e)
                                    })) : i ? t(l.default.fromValues({
                                        statusCode: 400,
                                        code: 91005,
                                        message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                                    })) : o(this.members)
                                }, t.prototype.history = function(e, t) {
                                    if (a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name), void 0 === t)
                                        if ("function" == typeof e) t = e, e = null;
                                        else {
                                            if (this.channel.realtime.options.promises) return s.promisify(this, "history", arguments);
                                            t = p
                                        } e && e.untilAttach && ("attached" === this.channel.state ? (delete e.untilAttach, e.from_serial = this.channel.properties.attachSerial) : t(new l.default("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400))), i.default.prototype._history.call(this, e, t)
                                }, t.prototype.setPresence = function(e, t, n) {
                                    var r, s;
                                    a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + n);
                                    var i = this.members,
                                        o = this._myMembers,
                                        l = [],
                                        c = this.channel.connectionManager.connectionId;
                                    t && (this.members.startSync(), n && (s = n.match(/^[\w-]+:(.*)$/)) && (r = s[1]));
                                    for (var f = 0; f < e.length; f++) switch ((d = u.default.fromValues(e[f])).action) {
                                        case "leave":
                                            i.remove(d) && l.push(d), d.connectionId !== c || d.isSynthesized() || o.remove(d);
                                            break;
                                        case "enter":
                                        case "present":
                                        case "update":
                                            i.put(d) && l.push(d), d.connectionId === c && o.put(d)
                                    }
                                    for (t && !r && (i.endSync(), this.channel.syncChannelSerial = null), f = 0; f < l.length; f++) {
                                        var d = l[f];
                                        this.subscriptions.emit(d.action, d)
                                    }
                                }, t.prototype.onAttached = function(e) {
                                    a.default.logAction(a.default.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()), this._ensureMyMembersPresent();
                                    var t = this.pendingPresence,
                                        n = t.length;
                                    if (n) {
                                        this.pendingPresence = [];
                                        var r = [],
                                            s = f.default.create();
                                        a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.onAttached", "sending " + n + " queued presence messages");
                                        for (var i = 0; i < n; i++) {
                                            var o = t[i];
                                            r.push(o.presence), s.push(o.callback)
                                        }
                                        this.channel.sendPresence(r, s)
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
                                        a.default.logAction(a.default.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + s.inspectError(e));
                                        for (var t = 0; t < this.pendingPresence.length; t++) try {
                                            this.pendingPresence[t].callback(e)
                                        } catch (e) {}
                                        this.pendingPresence = []
                                    }
                                }, t.prototype._clearMyMembers = function() {
                                    this._myMembers.clear()
                                }, t.prototype._ensureMyMembersPresent = function() {
                                    var e = this,
                                        t = this._myMembers,
                                        n = function(t) {
                                            if (t) {
                                                var n = "Presence auto-re-enter failed: " + t.toString(),
                                                    r = new l.default(n, 91004, 400);
                                                a.default.logAction(a.default.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", n);
                                                var s = new d.default(e.channel.state, e.channel.state, !0, !1, r);
                                                e.channel.emit("update", s)
                                            }
                                        };
                                    for (var r in t.map) {
                                        var s = t.map[r];
                                        a.default.logAction(a.default.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + s.clientId + '" into the presence set'), this._enterOrUpdateClient(s.id, s.clientId, s.data, "enter", n)
                                    }
                                }, t.prototype._synthesizeLeaves = function(e) {
                                    var t = this.subscriptions;
                                    s.arrForEach(e, (function(e) {
                                        var n = u.default.fromValues({
                                            action: "leave",
                                            connectionId: e.connectionId,
                                            clientId: e.clientId,
                                            data: e.data,
                                            encoding: e.encoding,
                                            timestamp: s.now()
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
                                        i = n[1],
                                        o = n[2],
                                        a = this.channel;
                                    if (!o) {
                                        if (this.channel.realtime.options.promises) return s.promisify(this, "subscribe", [r, i]);
                                        o = p
                                    }
                                    "failed" !== a.state ? (this.subscriptions.on(r, i), a.attach(o)) : o(l.default.fromValues(a.invalidStateError()))
                                }, t.prototype.unsubscribe = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = c.default.processListenerArgs(e),
                                        r = n[0],
                                        s = n[1];
                                    this.subscriptions.off(r, s)
                                }, t
                            }(i.default),
                            y = function(e) {
                                function t(t, n) {
                                    var r = e.call(this) || this;
                                    return r.presence = t, r.map = Object.create(null), r.syncInProgress = !1, r.residualMembers = null, r.memberKey = n, r
                                }
                                return r.__extends(t, e), t.prototype.get = function(e) {
                                    return this.map[e]
                                }, t.prototype.getClient = function(e) {
                                    var t = this.map,
                                        n = [];
                                    for (var r in t) {
                                        var s = t[r];
                                        s.clientId == e && "absent" != s.action && n.push(s)
                                    }
                                    return n
                                }, t.prototype.list = function(e) {
                                    var t = this.map,
                                        n = e && e.clientId,
                                        r = e && e.connectionId,
                                        s = [];
                                    for (var i in t) {
                                        var o = t[i];
                                        "absent" !== o.action && (n && n != o.clientId || r && r != o.connectionId || s.push(o))
                                    }
                                    return s
                                }, t.prototype.put = function(e) {
                                    "enter" !== e.action && "update" !== e.action || ((e = u.default.fromValues(e)).action = "present");
                                    var t = this.map,
                                        n = this.memberKey(e);
                                    this.residualMembers && delete this.residualMembers[n];
                                    var r = t[n];
                                    return !(r && !g(e, r) || (t[n] = e, 0))
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
                                        n = this.memberKey(e),
                                        r = t[n];
                                    return !(r && !g(e, r) || (this.syncInProgress ? ((e = u.default.fromValues(e)).action = "absent", t[n] = e) : delete t[n], 0))
                                }, t.prototype.startSync = function() {
                                    var e = this.map,
                                        t = this.syncInProgress;
                                    a.default.logAction(a.default.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), this.syncInProgress || (this.residualMembers = s.copy(e), this.setInProgress(!0))
                                }, t.prototype.endSync = function() {
                                    var e = this.map,
                                        t = this.syncInProgress;
                                    if (a.default.logAction(a.default.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), t) {
                                        for (var n in e) "absent" === e[n].action && delete e[n];
                                        for (var n in this.presence._synthesizeLeaves(s.valuesArray(this.residualMembers)), this.residualMembers) delete e[n];
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
                        t.default = m
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = n(56),
                            i = n(31),
                            o = n(11),
                            a = r.__importDefault(n(5)),
                            u = r.__importDefault(n(3)),
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
                                    for (var t, n, r, s, i = "", o = this.base64CharSet, a = e.byteLength, u = a % 3, l = a - u, c = 0; c < l; c += 3) t = (258048 & (s = e[c] << 16 | e[c + 1] << 8 | e[c + 2])) >> 12, n = (4032 & s) >> 6, r = 63 & s, i += o[(16515072 & s) >> 18] + o[t] + o[n] + o[r];
                                    return 1 == u ? (t = (3 & (s = e[l])) << 4, i += o[(252 & s) >> 2] + o[t] + "==") : 2 == u && (t = (1008 & (s = e[l] << 8 | e[l + 1])) >> 4, n = (15 & s) << 2, i += o[(64512 & s) >> 10] + o[t] + o[n] + "="), i
                                }, e.prototype.base64ToArrayBuffer = function(e) {
                                    for (var t = null === atob || void 0 === atob ? void 0 : atob(e), n = t.length, r = new Uint8Array(n), s = 0; s < n; s++) {
                                        var i = t.charCodeAt(s);
                                        r[s] = i
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
                                    return (0, s.stringify)(this.toWordArray(e))
                                }, e.prototype.hexDecode = function(e) {
                                    var t = (0, s.parse)(e);
                                    return ArrayBuffer ? this.toArrayBuffer(t) : t
                                }, e.prototype.utf8Encode = function(e) {
                                    return u.default.Config.TextEncoder ? (new u.default.Config.TextEncoder).encode(e).buffer : (0, i.parse)(e)
                                }, e.prototype.utf8Decode = function(e) {
                                    if (!this.isBuffer(e)) throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray");
                                    return TextDecoder && !this.isWordArray(e) ? (new TextDecoder).decode(e) : (e = this.toWordArray(e), (0, i.stringify)(e))
                                }, e.prototype.bufferCompare = function(e, t) {
                                    if (!e) return -1;
                                    if (!t) return 1;
                                    var n = this.toWordArray(e),
                                        r = this.toWordArray(t);
                                    n.clamp(), r.clamp();
                                    var s = n.sigBytes - r.sigBytes;
                                    if (0 != s) return s;
                                    for (var i = n.words, o = r.words, a = 0; a < i.length; a++)
                                        if (0 != (s = i[a] - o[a])) return s;
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
                        var r = n(5),
                            s = n.n(r),
                            i = n(11),
                            o = n(22),
                            a = n.n(o),
                            u = n(2),
                            l = n.n(u),
                            c = n(4),
                            f = n.n(c);
                        t.default = function(e, t) {
                            var n;
                            if (e.getRandomWordArray) n = e.getRandomWordArray;
                            else if ("undefined" != typeof Uint32Array && e.getRandomValues) {
                                var r = new Uint32Array(4);
                                n = function(n, s) {
                                    var i = n / 4,
                                        o = 4 == i ? r : new Uint32Array(i);
                                    e.getRandomValues(o, (function(e) {
                                        void 0 !== s && s(e, t.toWordArray(o))
                                    }))
                                }
                            } else n = function(e, t) {
                                l.a.logAction(l.a.LOG_MAJOR, "Ably.Crypto.generateRandom()", "Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()");
                                for (var n = e / 4, r = new Array(n), i = 0; i < n; i++) r[i] = Math.floor(4294967296 * Math.random()) - 2147483648;
                                t(null, s.a.create(r))
                            };
                            var o = [s.a.create([269488144, 269488144, 269488144, 269488144], 16), s.a.create([16777216], 1), s.a.create([33685504], 2), s.a.create([50529024], 3), s.a.create([67372036], 4), s.a.create([84215045, 83886080], 5), s.a.create([101058054, 101056512], 6), s.a.create([117901063, 117901056], 7), s.a.create([134744072, 134744072], 8), s.a.create([151587081, 151587081, 150994944], 9), s.a.create([168430090, 168430090, 168427520], 10), s.a.create([185273099, 185273099, 185273088], 11), s.a.create([202116108, 202116108, 202116108], 12), s.a.create([218959117, 218959117, 218959117, 218103808], 13), s.a.create([235802126, 235802126, 235802126, 235798528], 14), s.a.create([252645135, 252645135, 252645135, 252645135], 15), s.a.create([269488144, 269488144, 269488144, 269488144], 16)];

                            function u() {}

                            function c() {
                                this.algorithm = null, this.keyLength = null, this.mode = null, this.key = null
                            }

                            function d(e, n, r) {
                                this.algorithm = e.algorithm + "-" + String(e.keyLength) + "-" + e.mode, this.cjsAlgorithm = e.algorithm.toUpperCase().replace(/-\d+$/, ""), this.key = t.toWordArray(e.key), r && (this.iv = t.toWordArray(r).clone()), this.blockLengthWords = n
                            }
                            return u.CipherParams = c, u.getDefaultParams = function(e) {
                                var n;
                                if ("function" != typeof e && "string" != typeof e) {
                                    if (!e.key) throw new Error("Crypto.getDefaultParams: a key is required");
                                    n = "string" == typeof e.key ? Object(i.parse)(e.key.replace("_", "/").replace("-", "+")) : t.toWordArray(e.key);
                                    var r = new c;
                                    if (r.key = n, r.algorithm = e.algorithm || "aes", r.keyLength = 32 * n.words.length, r.mode = e.mode || "cbc", e.keyLength && e.keyLength !== r.keyLength) throw new Error("Crypto.getDefaultParams: a keyLength of " + e.keyLength + " was specified, but the key actually has length " + r.keyLength);
                                    return function(e) {
                                        if ("aes" === e.algorithm && "cbc" === e.mode) {
                                            if (128 === e.keyLength || 256 === e.keyLength) return;
                                            throw new Error("Unsupported key length " + e.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)")
                                        }
                                    }(r), r
                                }
                                if (l.a.deprecated("Crypto.getDefaultParams(key, callback)", "Crypto.getDefaultParams({key: key})"), "function" == typeof e) u.generateRandomKey((function(t) {
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
                            }, u.generateRandomKey = function(e, t) {
                                1 == arguments.length && "function" == typeof e && (t = e, e = void 0), n((e || 256) / 8, (function(e, n) {
                                    void 0 !== t && t(e ? f.a.fromValues(e) : null, n)
                                }))
                            }, u.getCipher = function(e) {
                                var t = e instanceof c ? e : u.getDefaultParams(e);
                                return {
                                    cipherParams: t,
                                    cipher: new d(t, 4, e.iv)
                                }
                            }, d.prototype.encrypt = function(e, r) {
                                l.a.logAction(l.a.LOG_MICRO, "CBCCipher.encrypt()", "");
                                var s = (e = t.toWordArray(e)).sigBytes,
                                    i = function(e) {
                                        return e + 16 & -16
                                    }(s),
                                    u = this,
                                    c = function() {
                                        u.getIv((function(t, n) {
                                            if (t) r(t);
                                            else {
                                                var a = u.encryptCipher.process(e.concat(o[i - s])),
                                                    l = n.concat(a);
                                                r(null, l)
                                            }
                                        }))
                                    };
                                this.encryptCipher ? c() : this.iv ? (this.encryptCipher = a.a.algo[this.cjsAlgorithm].createEncryptor(this.key, {
                                    iv: this.iv
                                }), c()) : n(16, (function(e, t) {
                                    e ? r(e) : (u.encryptCipher = a.a.algo[u.cjsAlgorithm].createEncryptor(u.key, {
                                        iv: t
                                    }), u.iv = t, c())
                                }))
                            }, d.prototype.decrypt = function(e) {
                                l.a.logAction(l.a.LOG_MICRO, "CBCCipher.decrypt()", ""), e = t.toWordArray(e);
                                var n = this.blockLengthWords,
                                    r = e.words,
                                    i = s.a.create(r.slice(0, n)),
                                    o = s.a.create(r.slice(n)),
                                    u = a.a.algo[this.cjsAlgorithm].createDecryptor(this.key, {
                                        iv: i
                                    }),
                                    c = u.process(o),
                                    f = u.finalize();
                                return u.reset(), f && f.sigBytes && c.concat(f), c
                            }, d.prototype.getIv = function(e) {
                                if (this.iv) {
                                    var t = this.iv;
                                    return this.iv = null, void e(null, t)
                                }
                                var r = this;
                                n(16, (function(t, n) {
                                    t ? e(t) : e(null, r.encryptCipher.process(n))
                                }))
                            }, u
                        }
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function() {
                            var e = r,
                                t = e.lib.WordArray,
                                n = e.enc;

                            function s(e) {
                                return e << 8 & 4278255360 | e >>> 8 & 16711935
                            }
                            n.Utf16 = n.Utf16BE = {
                                stringify: function(e) {
                                    for (var t = e.words, n = e.sigBytes, r = [], s = 0; s < n; s += 2) {
                                        var i = t[s >>> 2] >>> 16 - s % 4 * 8 & 65535;
                                        r.push(String.fromCharCode(i))
                                    }
                                    return r.join("")
                                },
                                parse: function(e) {
                                    for (var n = e.length, r = [], s = 0; s < n; s++) r[s >>> 1] |= e.charCodeAt(s) << 16 - s % 2 * 16;
                                    return t.create(r, 2 * n)
                                }
                            }, n.Utf16LE = {
                                stringify: function(e) {
                                    for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i += 2) {
                                        var o = s(t[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
                                        r.push(String.fromCharCode(o))
                                    }
                                    return r.join("")
                                },
                                parse: function(e) {
                                    for (var n = e.length, r = [], i = 0; i < n; i++) r[i >>> 1] |= s(e.charCodeAt(i) << 16 - i % 2 * 16);
                                    return t.create(r, 2 * n)
                                }
                            }
                        }(), r.enc.Utf16)
                    }, function(e, t, n) {
                        var r, s, i, o;
                        e.exports = (o = n(6), n(28), s = (r = o).lib.CipherParams, i = r.enc.Hex, r.format.Hex = {
                            stringify: function(e) {
                                return e.ciphertext.toString(i)
                            },
                            parse: function(e) {
                                var t = i.parse(e);
                                return s.create({
                                    ciphertext: t
                                })
                            }
                        }, o.format.Hex)
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(11), n(61), n(27), n(28), function() {
                            var e = r,
                                t = e.lib.BlockCipher,
                                n = e.algo,
                                s = [],
                                i = [],
                                o = [],
                                a = [],
                                u = [],
                                l = [],
                                c = [],
                                f = [],
                                d = [],
                                p = [];
                            ! function() {
                                for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                                var n = 0,
                                    r = 0;
                                for (t = 0; t < 256; t++) {
                                    var h = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                                    h = h >>> 8 ^ 255 & h ^ 99, s[n] = h, i[h] = n;
                                    var g = e[n],
                                        m = e[g],
                                        y = e[m],
                                        b = 257 * e[h] ^ 16843008 * h;
                                    o[n] = b << 24 | b >>> 8, a[n] = b << 16 | b >>> 16, u[n] = b << 8 | b >>> 24, l[n] = b, b = 16843009 * y ^ 65537 * m ^ 257 * g ^ 16843008 * n, c[h] = b << 24 | b >>> 8, f[h] = b << 16 | b >>> 16, d[h] = b << 8 | b >>> 24, p[h] = b, n ? (n = g ^ e[e[e[y ^ g]]], r ^= e[e[r]]) : n = r = 1
                                }
                            }();
                            var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                                g = n.AES = t.extend({
                                    _doReset: function() {
                                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                                            for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), i = this._keySchedule = [], o = 0; o < r; o++) o < n ? i[o] = t[o] : (l = i[o - 1], o % n ? n > 6 && o % n == 4 && (l = s[l >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & l]) : (l = s[(l = l << 8 | l >>> 24) >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & l], l ^= h[o / n | 0] << 24), i[o] = i[o - n] ^ l);
                                            for (var a = this._invKeySchedule = [], u = 0; u < r; u++) {
                                                if (o = r - u, u % 4) var l = i[o];
                                                else l = i[o - 4];
                                                a[u] = u < 4 || o <= 4 ? l : c[s[l >>> 24]] ^ f[s[l >>> 16 & 255]] ^ d[s[l >>> 8 & 255]] ^ p[s[255 & l]]
                                            }
                                        }
                                    },
                                    encryptBlock: function(e, t) {
                                        this._doCryptBlock(e, t, this._keySchedule, o, a, u, l, s)
                                    },
                                    decryptBlock: function(e, t) {
                                        var n = e[t + 1];
                                        e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, c, f, d, p, i), n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n
                                    },
                                    _doCryptBlock: function(e, t, n, r, s, i, o, a) {
                                        for (var u = this._nRounds, l = e[t] ^ n[0], c = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], d = e[t + 3] ^ n[3], p = 4, h = 1; h < u; h++) {
                                            var g = r[l >>> 24] ^ s[c >>> 16 & 255] ^ i[f >>> 8 & 255] ^ o[255 & d] ^ n[p++],
                                                m = r[c >>> 24] ^ s[f >>> 16 & 255] ^ i[d >>> 8 & 255] ^ o[255 & l] ^ n[p++],
                                                y = r[f >>> 24] ^ s[d >>> 16 & 255] ^ i[l >>> 8 & 255] ^ o[255 & c] ^ n[p++],
                                                b = r[d >>> 24] ^ s[l >>> 16 & 255] ^ i[c >>> 8 & 255] ^ o[255 & f] ^ n[p++];
                                            l = g, c = m, f = y, d = b
                                        }
                                        g = (a[l >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & d]) ^ n[p++], m = (a[c >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & l]) ^ n[p++], y = (a[f >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & c]) ^ n[p++], b = (a[d >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & f]) ^ n[p++], e[t] = g, e[t + 1] = m, e[t + 2] = y, e[t + 3] = b
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
                                s = n.WordArray,
                                i = n.Hasher,
                                o = t.algo,
                                a = [];
                            ! function() {
                                for (var t = 0; t < 64; t++) a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
                            }();
                            var u = o.MD5 = i.extend({
                                _doReset: function() {
                                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                                },
                                _doProcessBlock: function(e, t) {
                                    for (var n = 0; n < 16; n++) {
                                        var r = t + n,
                                            s = e[r];
                                        e[r] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                                    }
                                    var i = this._hash.words,
                                        o = e[t + 0],
                                        u = e[t + 1],
                                        p = e[t + 2],
                                        h = e[t + 3],
                                        g = e[t + 4],
                                        m = e[t + 5],
                                        y = e[t + 6],
                                        b = e[t + 7],
                                        v = e[t + 8],
                                        w = e[t + 9],
                                        _ = e[t + 10],
                                        C = e[t + 11],
                                        T = e[t + 12],
                                        R = e[t + 13],
                                        U = e[t + 14],
                                        O = e[t + 15],
                                        I = i[0],
                                        L = i[1],
                                        $ = i[2],
                                        S = i[3];
                                    I = l(I, L, $, S, o, 7, a[0]), S = l(S, I, L, $, u, 12, a[1]), $ = l($, S, I, L, p, 17, a[2]), L = l(L, $, S, I, h, 22, a[3]), I = l(I, L, $, S, g, 7, a[4]), S = l(S, I, L, $, m, 12, a[5]), $ = l($, S, I, L, y, 17, a[6]), L = l(L, $, S, I, b, 22, a[7]), I = l(I, L, $, S, v, 7, a[8]), S = l(S, I, L, $, w, 12, a[9]), $ = l($, S, I, L, _, 17, a[10]), L = l(L, $, S, I, C, 22, a[11]), I = l(I, L, $, S, T, 7, a[12]), S = l(S, I, L, $, R, 12, a[13]), $ = l($, S, I, L, U, 17, a[14]), I = c(I, L = l(L, $, S, I, O, 22, a[15]), $, S, u, 5, a[16]), S = c(S, I, L, $, y, 9, a[17]), $ = c($, S, I, L, C, 14, a[18]), L = c(L, $, S, I, o, 20, a[19]), I = c(I, L, $, S, m, 5, a[20]), S = c(S, I, L, $, _, 9, a[21]), $ = c($, S, I, L, O, 14, a[22]), L = c(L, $, S, I, g, 20, a[23]), I = c(I, L, $, S, w, 5, a[24]), S = c(S, I, L, $, U, 9, a[25]), $ = c($, S, I, L, h, 14, a[26]), L = c(L, $, S, I, v, 20, a[27]), I = c(I, L, $, S, R, 5, a[28]), S = c(S, I, L, $, p, 9, a[29]), $ = c($, S, I, L, b, 14, a[30]), I = f(I, L = c(L, $, S, I, T, 20, a[31]), $, S, m, 4, a[32]), S = f(S, I, L, $, v, 11, a[33]), $ = f($, S, I, L, C, 16, a[34]), L = f(L, $, S, I, U, 23, a[35]), I = f(I, L, $, S, u, 4, a[36]), S = f(S, I, L, $, g, 11, a[37]), $ = f($, S, I, L, b, 16, a[38]), L = f(L, $, S, I, _, 23, a[39]), I = f(I, L, $, S, R, 4, a[40]), S = f(S, I, L, $, o, 11, a[41]), $ = f($, S, I, L, h, 16, a[42]), L = f(L, $, S, I, y, 23, a[43]), I = f(I, L, $, S, w, 4, a[44]), S = f(S, I, L, $, T, 11, a[45]), $ = f($, S, I, L, O, 16, a[46]), I = d(I, L = f(L, $, S, I, p, 23, a[47]), $, S, o, 6, a[48]), S = d(S, I, L, $, b, 10, a[49]), $ = d($, S, I, L, U, 15, a[50]), L = d(L, $, S, I, m, 21, a[51]), I = d(I, L, $, S, T, 6, a[52]), S = d(S, I, L, $, h, 10, a[53]), $ = d($, S, I, L, _, 15, a[54]), L = d(L, $, S, I, u, 21, a[55]), I = d(I, L, $, S, v, 6, a[56]), S = d(S, I, L, $, O, 10, a[57]), $ = d($, S, I, L, y, 15, a[58]), L = d(L, $, S, I, R, 21, a[59]), I = d(I, L, $, S, g, 6, a[60]), S = d(S, I, L, $, C, 10, a[61]), $ = d($, S, I, L, p, 15, a[62]), L = d(L, $, S, I, w, 21, a[63]), i[0] = i[0] + I | 0, i[1] = i[1] + L | 0, i[2] = i[2] + $ | 0, i[3] = i[3] + S | 0
                                },
                                _doFinalize: function() {
                                    var t = this._data,
                                        n = t.words,
                                        r = 8 * this._nDataBytes,
                                        s = 8 * t.sigBytes;
                                    n[s >>> 5] |= 128 << 24 - s % 32;
                                    var i = e.floor(r / 4294967296),
                                        o = r;
                                    n[15 + (s + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (s + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
                                    for (var a = this._hash, u = a.words, l = 0; l < 4; l++) {
                                        var c = u[l];
                                        u[l] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                                    }
                                    return a
                                },
                                clone: function() {
                                    var e = i.clone.call(this);
                                    return e._hash = this._hash.clone(), e
                                }
                            });

                            function l(e, t, n, r, s, i, o) {
                                var a = e + (t & n | ~t & r) + s + o;
                                return (a << i | a >>> 32 - i) + t
                            }

                            function c(e, t, n, r, s, i, o) {
                                var a = e + (t & r | n & ~r) + s + o;
                                return (a << i | a >>> 32 - i) + t
                            }

                            function f(e, t, n, r, s, i, o) {
                                var a = e + (t ^ n ^ r) + s + o;
                                return (a << i | a >>> 32 - i) + t
                            }

                            function d(e, t, n, r, s, i, o) {
                                var a = e + (n ^ (t | ~r)) + s + o;
                                return (a << i | a >>> 32 - i) + t
                            }
                            t.MD5 = i._createHelper(u), t.HmacMD5 = i._createHmacHelper(u)
                        }(Math), r.MD5)
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var s = n(0),
                            i = s.__importDefault(n(3)),
                            o = s.__importStar(n(1)),
                            a = s.__importDefault(n(8)),
                            u = n(4),
                            l = s.__importDefault(n(18)),
                            c = s.__importDefault(n(16)),
                            f = s.__importDefault(n(21)),
                            d = s.__importDefault(n(2)),
                            p = n(29),
                            h = s.__importDefault(n(63)),
                            g = n(25);

                        function m(e) {
                            var t = e.statusCode;
                            return 408 === t && !e.code || 400 === t && !e.code || t >= 500 && t <= 504
                        }

                        function y(e) {
                            var t = e.connection,
                                n = t && t.connectionManager.host;
                            return n ? [n].concat(a.default.getFallbackHosts(e.options)) : a.default.getHosts(e.options)
                        }
                        var b = (r = function() {
                            function e(e) {
                                this.checksInProgress = null, this.checkConnectivity = void 0, this.supportsAuthHeaders = !1, this.supportsLinkHeaders = !1, this._getHosts = y, this.options = e || {};
                                var t = this.options.connectivityCheckUrl || a.default.connectivityCheckUrl,
                                    n = this.options.connectivityCheckParams,
                                    r = !this.options.connectivityCheckUrl;
                                i.default.Config.xhrSupported ? (this.supportsAuthHeaders = !0, this.Request = function(e, t, n, r, s, i, o) {
                                    var a = c.default.createRequest(n, r, s, i, f.default.REQ_SEND, t && t.options.timeouts, e);
                                    return a.once("complete", o), a.exec(), a
                                }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(e) {
                                    e(null, !0)
                                } : this.checkConnectivity = function(e) {
                                    d.default.logAction(d.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + t), this.doUri(l.default.Get, null, t, null, null, n, (function(t, n, s, i, o) {
                                        var a = !1;
                                        a = r ? !t && "yes" == (null == n ? void 0 : n.replace(/\n/, "")) : !t && (0, g.isSuccessCode)(o), d.default.logAction(d.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + a), e(null, a)
                                    }))
                                }) : i.default.Config.jsonpSupported ? (this.Request = function(e, t, n, r, s, o, a) {
                                    var u = (0, p.createRequest)(n, r, s, o, f.default.REQ_SEND, t && t.options.timeouts, e);
                                    return u.once("complete", a), i.default.Config.nextTick((function() {
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
                                        var r = new p.Request("isTheInternetUp", n, null, null, null, f.default.REQ_SEND, a.default.TIMEOUTS);
                                        r.once("complete", (function(e, n) {
                                            var r = !e && n;
                                            d.default.logAction(d.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Result: " + r);
                                            for (var s = 0; s < t.checksInProgress.length; s++) t.checksInProgress[s](null, r);
                                            t.checksInProgress = null
                                        })), i.default.Config.nextTick((function() {
                                            r.exec()
                                        }))
                                    }
                                }) : i.default.Config.fetchSupported ? (this.supportsAuthHeaders = !0, this.Request = h.default, this.checkConnectivity = function(e) {
                                    d.default.logAction(d.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + t), this.doUri(l.default.Get, null, t, null, null, null, (function(t, n) {
                                        var r = !t && "yes" == (null == n ? void 0 : n.replace(/\n/, ""));
                                        d.default.logAction(d.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + r), e(null, r)
                                    }))
                                }) : this.Request = function(e, t, n, r, s, i, o) {
                                    o(new u.PartialErrorInfo("no supported HTTP transports available", null, 400), null)
                                }
                            }
                            return e.prototype.do = function(e, t, n, r, i, a, l) {
                                var c = this,
                                    f = "function" == typeof n ? n : function(e) {
                                        return t.baseUri(e) + n
                                    },
                                    d = t._currentFallback;
                                if (d) {
                                    if (d.validUntil > o.now()) return this.Request ? void this.Request(e, t, f(d.host), r, a, i, (function(o) {
                                        for (var u = [], f = 1; f < arguments.length; f++) u[f - 1] = arguments[f];
                                        if (o && m(o)) return t._currentFallback = null, void c.do(e, t, n, r, i, a, l);
                                        null == l || l.apply(void 0, s.__spreadArray([o], u, !1))
                                    })) : void(null == l || l(new u.PartialErrorInfo("Request invoked before assigned to", null, 500)));
                                    t._currentFallback = null
                                }
                                var p = y(t);
                                if (1 !== p.length) {
                                    var h = function(n, u) {
                                        var d = n.shift();
                                        c.doUri(e, t, f(d), r, i, a, (function(e) {
                                            for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                                            e && m(e) && n.length ? h(n, !0) : (u && (t._currentFallback = {
                                                host: d,
                                                validUntil: o.now() + t.options.timeouts.fallbackRetryTimeout
                                            }), null == l || l.apply(void 0, s.__spreadArray([e], r, !1)))
                                        }))
                                    };
                                    h(p)
                                } else this.doUri(e, t, f(p[0]), r, i, a, l)
                            }, e.prototype.doUri = function(e, t, n, r, s, i, o) {
                                this.Request ? this.Request(e, t, n, r, i, s, o) : o(new u.PartialErrorInfo("Request invoked before assigned to", null, 500))
                            }, e
                        }(), r.methods = [l.default.Get, l.default.Delete, l.default.Post, l.default.Put, l.default.Patch], r.methodsWithoutBody = [l.default.Get, l.default.Delete], r.methodsWithBody = [l.default.Post, l.default.Put, l.default.Patch], r);
                        t.default = b
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importStar(n(4)),
                            i = r.__importDefault(n(3)),
                            o = r.__importDefault(n(8)),
                            a = r.__importStar(n(1)),
                            u = n(1);
                        t.default = function(e, t, n, r, l, c, f) {
                            var d = new Headers(r || {}),
                                p = e ? e.toUpperCase() : a.isEmptyArg(c) ? "GET" : "POST",
                                h = new AbortController,
                                g = setTimeout((function() {
                                    h.abort(), f(new s.PartialErrorInfo("Request timed out", null, 408))
                                }), t ? t.options.timeouts.httpRequestTimeout : o.default.TIMEOUTS.httpRequestTimeout),
                                m = {
                                    method: p,
                                    headers: d,
                                    body: c
                                };
                            i.default.Config.isWebworker || (m.credentials = d.has("authorization") ? "include" : "same-origin"), (0, u.getGlobalObject)().fetch(n + "?" + new URLSearchParams(l || {}), m).then((function(e) {
                                clearTimeout(g);
                                var t = e.headers.get("Content-Type");
                                (t && t.indexOf("application/x-msgpack") > -1 ? e.arrayBuffer() : t && t.indexOf("application/json") > -1 ? e.json() : e.text()).then((function(n) {
                                    var r = !!t && -1 === t.indexOf("application/x-msgpack");
                                    if (e.ok) f(null, n, e.headers, r, e.status);
                                    else {
                                        var o = function(e, t) {
                                            if (function(e, t) {
                                                    return !!t.get("x-ably-errorcode")
                                                }(0, t)) return e.error && s.default.fromValues(e.error)
                                        }(n, e.headers) || new s.PartialErrorInfo("Error response received from server: " + e.status + " body was: " + i.default.Config.inspect(n), null, e.status);
                                        f(o, n, e.headers, r, e.status)
                                    }
                                }))
                            })).catch((function(e) {
                                clearTimeout(g), f(e)
                            }))
                        }
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0),
                            s = r.__importDefault(n(41)),
                            i = r.__importStar(n(1)).getGlobalObject();
                        "undefined" == typeof Window && "undefined" == typeof WorkerGlobalScope && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
                        var o, a = i.navigator && i.navigator.userAgent.toString(),
                            u = {
                                agent: "browser",
                                logTimestamps: !0,
                                userAgent: a,
                                currentUrl: i.location && i.location.href,
                                noUpgrade: a && !!a.match(/MSIE\s8\.0/),
                                binaryType: "arraybuffer",
                                WebSocket: i.WebSocket,
                                fetchSupported: !!i.fetch,
                                xhrSupported: i.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                                jsonpSupported: "undefined" != typeof document,
                                allowComet: (o = i.location, !i.WebSocket || !o || !o.origin || o.origin.indexOf("http") > -1),
                                streamingSupported: !0,
                                useProtocolHeartbeats: !0,
                                createHmac: null,
                                msgpack: s.default,
                                supportsBinary: !!i.TextDecoder,
                                preferBinary: !1,
                                ArrayBuffer: i.ArrayBuffer,
                                atob: i.atob,
                                nextTick: void 0 !== i.setImmediate ? i.setImmediate.bind(i) : function(e) {
                                    setTimeout(e, 0)
                                },
                                addEventListener: i.addEventListener,
                                inspect: JSON.stringify,
                                stringByteSize: function(e) {
                                    return i.TextDecoder && (new i.TextEncoder).encode(e).length || e.length
                                },
                                TextEncoder: i.TextEncoder,
                                TextDecoder: i.TextDecoder,
                                Promise: i.Promise,
                                getRandomValues: function(e) {
                                    if (void 0 !== e) return function(t, n) {
                                        e.getRandomValues(t), n && n(null)
                                    }
                                }(i.crypto || msCrypto)
                            };
                        t.default = u
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var r = n(0).__importStar(n(1)),
                                s = "ablyjs-storage-test",
                                i = function() {
                                    function t() {
                                        try {
                                            e.sessionStorage.setItem(s, s), e.sessionStorage.removeItem(s), this.sessionSupported = !0
                                        } catch (e) {
                                            this.sessionSupported = !1
                                        }
                                        try {
                                            e.localStorage.setItem(s, s), e.localStorage.removeItem(s), this.localSupported = !0
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
                                    }, t.prototype._set = function(e, t, n, s) {
                                        var i = {
                                            value: t
                                        };
                                        return n && (i.expires = r.now() + n), this.storageInterface(s).setItem(e, JSON.stringify(i))
                                    }, t.prototype._get = function(e, t) {
                                        if (t && !this.sessionSupported) throw new Error("Session Storage not supported");
                                        if (!t && !this.localSupported) throw new Error("Local Storage not supported");
                                        var n = this.storageInterface(t).getItem(e);
                                        if (!n) return null;
                                        var s = JSON.parse(n);
                                        return s.expires && s.expires < r.now() ? (this.storageInterface(t).removeItem(e), null) : s.value
                                    }, t.prototype._remove = function(e, t) {
                                        return this.storageInterface(t).removeItem(e)
                                    }, t.prototype.storageInterface = function(t) {
                                        return t ? e.sessionStorage : e.localStorage
                                    }, t
                                }();
                            t.default = new i
                        }).call(this, n(13))
                    }, function(e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(0).__importDefault(n(67)),
                            s = {
                                connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
                                jsonpInternetUpUrl: "https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js",
                                defaultTransports: [r.default.XhrPolling, r.default.XhrStreaming, r.default.JsonP, r.default.WebSocket],
                                baseTransportOrder: [r.default.XhrPolling, r.default.XhrStreaming, r.default.JsonP, r.default.WebSocket],
                                transportPreferenceOrder: [r.default.JsonP, r.default.XhrPolling, r.default.XhrStreaming, r.default.WebSocket],
                                upgradeTransports: [r.default.XhrStreaming, r.default.WebSocket]
                            };
                        t.default = s
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        Object.defineProperty(t, "__esModule", {
                                value: !0
                            }),
                            function(e) {
                                e.WebSocket = "web_socket", e.Comet = "comet", e.XhrStreaming = "xhr_streaming", e.XhrPolling = "xhr_polling", e.JsonP = "jsonp"
                            }(r || (r = {})), t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n(29),
                            s = n.n(r),
                            i = n(1),
                            o = n(3),
                            a = n.n(o),
                            u = n(12),
                            l = n.n(u),
                            c = n(16),
                            f = n.n(c),
                            d = function(e) {
                                var t = "xhr_polling";

                                function n(e, n, r) {
                                    r.stream = !1, l.a.call(this, e, n, r), this.shortName = t
                                }
                                return i.inherits(n, l.a), n.isAvailable = function() {
                                    return a.a.Config.xhrSupported && a.a.Config.allowComet
                                }, n.prototype.toString = function() {
                                    return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
                                }, n.prototype.createRequest = function(e, t, n, r, s) {
                                    return f.a.createRequest(e, t, n, r, s, this.timeouts)
                                }, void 0 !== e && n.isAvailable() && (e.supportedTransports[t] = n), n
                            },
                            p = function(e) {
                                var t = "xhr_streaming";

                                function n(e, n, r) {
                                    l.a.call(this, e, n, r), this.shortName = t
                                }
                                return i.inherits(n, l.a), n.isAvailable = function() {
                                    return a.a.Config.xhrSupported && a.a.Config.streamingSupported && a.a.Config.allowComet
                                }, n.prototype.toString = function() {
                                    return "XHRStreamingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
                                }, n.prototype.createRequest = function(e, t, n, r, s) {
                                    return f.a.createRequest(e, t, n, r, s, this.timeouts)
                                }, void 0 !== e && n.isAvailable() && (e.supportedTransports[t] = n), n
                            };
                        t.default = [s.a, d, p]
                    }]).default
                }, e.exports = t()
            },
            9742: (e, t) => {
                "use strict";
                t.byteLength = function(e) {
                    var t = a(e),
                        n = t[0],
                        r = t[1];
                    return 3 * (n + r) / 4 - r
                }, t.toByteArray = function(e) {
                    var t, n, i = a(e),
                        o = i[0],
                        u = i[1],
                        l = new s(function(e, t, n) {
                            return 3 * (t + n) / 4 - n
                        }(0, o, u)),
                        c = 0,
                        f = u > 0 ? o - 4 : o;
                    for (n = 0; n < f; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
                    2 === u && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, l[c++] = 255 & t);
                    1 === u && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t);
                    return l
                }, t.fromByteArray = function(e) {
                    for (var t, r = e.length, s = r % 3, i = [], o = 16383, a = 0, l = r - s; a < l; a += o) i.push(u(e, a, a + o > l ? l : a + o));
                    1 === s ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === s && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                    return i.join("")
                };
                for (var n = [], r = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0; o < 64; ++o) n[o] = i[o], r[i.charCodeAt(o)] = o;

                function a(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var n = e.indexOf("=");
                    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
                }

                function u(e, t, r) {
                    for (var s, i, o = [], a = t; a < r; a += 3) s = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(n[(i = s) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
                    return o.join("")
                }
                r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
            },
            8764: (e, t, n) => {
                "use strict";
                const r = n(9742),
                    s = n(645),
                    i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
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
                        const s = r.write(e, t);
                        s !== n && (r = r.slice(0, s));
                        return r
                    }(e, t);
                    if (ArrayBuffer.isView(e)) return function(e) {
                        if (K(e, Uint8Array)) {
                            const t = new Uint8Array(e);
                            return p(t.buffer, t.byteOffset, t.byteLength)
                        }
                        return d(e)
                    }(e);
                    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (K(e, ArrayBuffer) || e && K(e.buffer, ArrayBuffer)) return p(e, t, n);
                    if ("undefined" != typeof SharedArrayBuffer && (K(e, SharedArrayBuffer) || e && K(e.buffer, SharedArrayBuffer))) return p(e, t, n);
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    const r = e.valueOf && e.valueOf();
                    if (null != r && r !== e) return u.from(r, t, n);
                    const s = function(e) {
                        if (u.isBuffer(e)) {
                            const t = 0 | h(e.length),
                                n = a(t);
                            return 0 === n.length || e.copy(n, 0, 0, t), n
                        }
                        if (void 0 !== e.length) return "number" != typeof e.length || Q(e.length) ? a(0) : d(e);
                        if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data)
                    }(e);
                    if (s) return s;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return u.from(e[Symbol.toPrimitive]("string"), t, n);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function c(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function f(e) {
                    return c(e), a(e < 0 ? 0 : 0 | h(e))
                }

                function d(e) {
                    const t = e.length < 0 ? 0 : 0 | h(e.length),
                        n = a(t);
                    for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
                    return n
                }

                function p(e, t, n) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    let r;
                    return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, u.prototype), r
                }

                function h(e) {
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
                    let s = !1;
                    for (;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                            return W(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return V(e).length;
                        default:
                            if (s) return r ? -1 : W(e).length;
                            t = ("" + t).toLowerCase(), s = !0
                    }
                }

                function m(e, t, n) {
                    let r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return S(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return O(this, t, n);
                        case "ascii":
                            return L(this, t, n);
                        case "latin1":
                        case "binary":
                            return $(this, t, n);
                        case "base64":
                            return U(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return A(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }

                function y(e, t, n) {
                    const r = e[t];
                    e[t] = e[n], e[n] = r
                }

                function b(e, t, n, r, s) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Q(n = +n) && (n = s ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (s) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!s) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, r, s);
                    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, s);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function v(e, t, n, r, s) {
                    let i, o = 1,
                        a = e.length,
                        u = t.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        o = 2, a /= 2, u /= 2, n /= 2
                    }

                    function l(e, t) {
                        return 1 === o ? e[t] : e.readUInt16BE(t * o)
                    }
                    if (s) {
                        let r = -1;
                        for (i = n; i < a; i++)
                            if (l(e, i) === l(t, -1 === r ? 0 : i - r)) {
                                if (-1 === r && (r = i), i - r + 1 === u) return r * o
                            } else - 1 !== r && (i -= i - r), r = -1
                    } else
                        for (n + u > a && (n = a - u), i = n; i >= 0; i--) {
                            let n = !0;
                            for (let r = 0; r < u; r++)
                                if (l(e, i + r) !== l(t, r)) {
                                    n = !1;
                                    break
                                } if (n) return i
                        }
                    return -1
                }

                function w(e, t, n, r) {
                    n = Number(n) || 0;
                    const s = e.length - n;
                    r ? (r = Number(r)) > s && (r = s) : r = s;
                    const i = t.length;
                    let o;
                    for (r > i / 2 && (r = i / 2), o = 0; o < r; ++o) {
                        const r = parseInt(t.substr(2 * o, 2), 16);
                        if (Q(r)) return o;
                        e[n + o] = r
                    }
                    return o
                }

                function _(e, t, n, r) {
                    return J(W(t, e.length - n), e, n, r)
                }

                function C(e, t, n, r) {
                    return J(function(e) {
                        const t = [];
                        for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t
                    }(t), e, n, r)
                }

                function T(e, t, n, r) {
                    return J(V(t), e, n, r)
                }

                function R(e, t, n, r) {
                    return J(function(e, t) {
                        let n, r, s;
                        const i = [];
                        for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, s = n % 256, i.push(s), i.push(r);
                        return i
                    }(t, e.length - n), e, n, r)
                }

                function U(e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                }

                function O(e, t, n) {
                    n = Math.min(e.length, n);
                    const r = [];
                    let s = t;
                    for (; s < n;) {
                        const t = e[s];
                        let i = null,
                            o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                        if (s + o <= n) {
                            let n, r, a, u;
                            switch (o) {
                                case 1:
                                    t < 128 && (i = t);
                                    break;
                                case 2:
                                    n = e[s + 1], 128 == (192 & n) && (u = (31 & t) << 6 | 63 & n, u > 127 && (i = u));
                                    break;
                                case 3:
                                    n = e[s + 1], r = e[s + 2], 128 == (192 & n) && 128 == (192 & r) && (u = (15 & t) << 12 | (63 & n) << 6 | 63 & r, u > 2047 && (u < 55296 || u > 57343) && (i = u));
                                    break;
                                case 4:
                                    n = e[s + 1], r = e[s + 2], a = e[s + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (u = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a, u > 65535 && u < 1114112 && (i = u))
                            }
                        }
                        null === i ? (i = 65533, o = 1) : i > 65535 && (i -= 65536, r.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(i), s += o
                    }
                    return function(e) {
                        const t = e.length;
                        if (t <= I) return String.fromCharCode.apply(String, e);
                        let n = "",
                            r = 0;
                        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += I));
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
                    for (let s = 0, i = Math.min(n, r); s < i; ++s)
                        if (e[s] !== t[s]) {
                            n = e[s], r = t[s];
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
                    let s = 0;
                    for (n = 0; n < e.length; ++n) {
                        let t = e[n];
                        if (K(t, Uint8Array)) s + t.length > r.length ? (u.isBuffer(t) || (t = u.from(t)), t.copy(r, s)) : Uint8Array.prototype.set.call(r, t, s);
                        else {
                            if (!u.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                            t.copy(r, s)
                        }
                        s += t.length
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
                    return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : m.apply(this, arguments)
                }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(e) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === u.compare(this, e)
                }, u.prototype.inspect = function() {
                    let e = "";
                    const n = t.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                }, i && (u.prototype[i] = u.prototype.inspect), u.prototype.compare = function(e, t, n, r, s) {
                    if (K(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === s && (s = this.length), t < 0 || n > e.length || r < 0 || s > this.length) throw new RangeError("out of range index");
                    if (r >= s && t >= n) return 0;
                    if (r >= s) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    let i = (s >>>= 0) - (r >>>= 0),
                        o = (n >>>= 0) - (t >>>= 0);
                    const a = Math.min(i, o),
                        l = this.slice(r, s),
                        c = e.slice(t, n);
                    for (let e = 0; e < a; ++e)
                        if (l[e] !== c[e]) {
                            i = l[e], o = c[e];
                            break
                        } return i < o ? -1 : o < i ? 1 : 0
                }, u.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, u.prototype.indexOf = function(e, t, n) {
                    return b(this, e, t, n, !0)
                }, u.prototype.lastIndexOf = function(e, t, n) {
                    return b(this, e, t, n, !1)
                }, u.prototype.write = function(e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    const s = this.length - t;
                    if ((void 0 === n || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    let i = !1;
                    for (;;) switch (r) {
                        case "hex":
                            return w(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return _(this, e, t, n);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return C(this, e, t, n);
                        case "base64":
                            return T(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return R(this, e, t, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), i = !0
                    }
                }, u.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                const I = 4096;

                function L(e, t, n) {
                    let r = "";
                    n = Math.min(e.length, n);
                    for (let s = t; s < n; ++s) r += String.fromCharCode(127 & e[s]);
                    return r
                }

                function $(e, t, n) {
                    let r = "";
                    n = Math.min(e.length, n);
                    for (let s = t; s < n; ++s) r += String.fromCharCode(e[s]);
                    return r
                }

                function S(e, t, n) {
                    const r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    let s = "";
                    for (let r = t; r < n; ++r) s += X[e[r]];
                    return s
                }

                function A(e, t, n) {
                    const r = e.slice(t, n);
                    let s = "";
                    for (let e = 0; e < r.length - 1; e += 2) s += String.fromCharCode(r[e] + 256 * r[e + 1]);
                    return s
                }

                function P(e, t, n) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function E(e, t, n, r, s, i) {
                    if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > s || t < i) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > e.length) throw new RangeError("Index out of range")
                }

                function k(e, t, n, r, s) {
                    F(t, r, s, e, n, 7);
                    let i = Number(t & BigInt(4294967295));
                    e[n++] = i, i >>= 8, e[n++] = i, i >>= 8, e[n++] = i, i >>= 8, e[n++] = i;
                    let o = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n
                }

                function M(e, t, n, r, s) {
                    F(t, r, s, e, n, 7);
                    let i = Number(t & BigInt(4294967295));
                    e[n + 7] = i, i >>= 8, e[n + 6] = i, i >>= 8, e[n + 5] = i, i >>= 8, e[n + 4] = i;
                    let o = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8
                }

                function x(e, t, n, r, s, i) {
                    if (n + r > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function B(e, t, n, r, i) {
                    return t = +t, n >>>= 0, i || x(e, 0, n, 4), s.write(e, t, n, r, 23, 4), n + 4
                }

                function j(e, t, n, r, i) {
                    return t = +t, n >>>= 0, i || x(e, 0, n, 8), s.write(e, t, n, r, 52, 8), n + 8
                }
                u.prototype.slice = function(e, t) {
                    const n = this.length;
                    (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                    const r = this.subarray(e, t);
                    return Object.setPrototypeOf(r, u.prototype), r
                }, u.prototype.readUintLE = u.prototype.readUIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || P(e, t, this.length);
                    let r = this[e],
                        s = 1,
                        i = 0;
                    for (; ++i < t && (s *= 256);) r += this[e + i] * s;
                    return r
                }, u.prototype.readUintBE = u.prototype.readUIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || P(e, t, this.length);
                    let r = this[e + --t],
                        s = 1;
                    for (; t > 0 && (s *= 256);) r += this[e + --t] * s;
                    return r
                }, u.prototype.readUint8 = u.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || P(e, 1, this.length), this[e]
                }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8
                }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, u.prototype.readBigUInt64LE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                        s = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
                    return BigInt(r) + (BigInt(s) << BigInt(32))
                })), u.prototype.readBigUInt64BE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                        s = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
                    return (BigInt(r) << BigInt(32)) + BigInt(s)
                })), u.prototype.readIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || P(e, t, this.length);
                    let r = this[e],
                        s = 1,
                        i = 0;
                    for (; ++i < t && (s *= 256);) r += this[e + i] * s;
                    return s *= 128, r >= s && (r -= Math.pow(2, 8 * t)), r
                }, u.prototype.readIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || P(e, t, this.length);
                    let r = t,
                        s = 1,
                        i = this[e + --r];
                    for (; r > 0 && (s *= 256);) i += this[e + --r] * s;
                    return s *= 128, i >= s && (i -= Math.pow(2, 8 * t)), i
                }, u.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, u.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || P(e, 2, this.length);
                    const n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || P(e, 2, this.length);
                    const n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, u.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, u.prototype.readBigInt64LE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                    return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
                })), u.prototype.readBigInt64BE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                    return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
                })), u.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || P(e, 4, this.length), s.read(this, e, !0, 23, 4)
                }, u.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || P(e, 4, this.length), s.read(this, e, !1, 23, 4)
                }, u.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || P(e, 8, this.length), s.read(this, e, !0, 52, 8)
                }, u.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || P(e, 8, this.length), s.read(this, e, !1, 52, 8)
                }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, n >>>= 0, !r) {
                        E(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                    }
                    let s = 1,
                        i = 0;
                    for (this[t] = 255 & e; ++i < n && (s *= 256);) this[t + i] = e / s & 255;
                    return t + n
                }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, n >>>= 0, !r) {
                        E(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                    }
                    let s = n - 1,
                        i = 1;
                    for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) this[t + s] = e / i & 255;
                    return t + n
                }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, u.prototype.writeBigUInt64LE = Y((function(e, t = 0) {
                    return k(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })), u.prototype.writeBigUInt64BE = Y((function(e, t = 0) {
                    return M(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })), u.prototype.writeIntLE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        const r = Math.pow(2, 8 * n - 1);
                        E(this, e, t, n, r - 1, -r)
                    }
                    let s = 0,
                        i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++s < n && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + s - 1] && (o = 1), this[t + s] = (e / i >> 0) - o & 255;
                    return t + n
                }, u.prototype.writeIntBE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        const r = Math.pow(2, 8 * n - 1);
                        E(this, e, t, n, r - 1, -r)
                    }
                    let s = n - 1,
                        i = 1,
                        o = 0;
                    for (this[t + s] = 255 & e; --s >= 0 && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + s + 1] && (o = 1), this[t + s] = (e / i >> 0) - o & 255;
                    return t + n
                }, u.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, u.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, u.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, u.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, u.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, u.prototype.writeBigInt64LE = Y((function(e, t = 0) {
                    return k(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })), u.prototype.writeBigInt64BE = Y((function(e, t = 0) {
                    return M(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })), u.prototype.writeFloatLE = function(e, t, n) {
                    return B(this, e, t, !0, n)
                }, u.prototype.writeFloatBE = function(e, t, n) {
                    return B(this, e, t, !1, n)
                }, u.prototype.writeDoubleLE = function(e, t, n) {
                    return j(this, e, t, !0, n)
                }, u.prototype.writeDoubleBE = function(e, t, n) {
                    return j(this, e, t, !1, n)
                }, u.prototype.copy = function(e, t, n, r) {
                    if (!u.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    const s = r - n;
                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), s
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
                    let s;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                        for (s = t; s < n; ++s) this[s] = e;
                    else {
                        const i = u.isBuffer(e) ? e : u.from(e, r),
                            o = i.length;
                        if (0 === o) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (s = 0; s < n - t; ++s) this[s + t] = i[s % o]
                    }
                    return this
                };
                const G = {};

                function N(e, t, n) {
                    G[e] = class extends n {
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

                function D(e) {
                    let t = "",
                        n = e.length;
                    const r = "-" === e[0] ? 1 : 0;
                    for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                    return `${e.slice(0,n)}${t}`
                }

                function F(e, t, n, r, s, i) {
                    if (e > n || e < t) {
                        const r = "bigint" == typeof t ? "n" : "";
                        let s;
                        throw s = i > 3 ? 0 === t || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(i+1)}${r}` : `>= -(2${r} ** ${8*(i+1)-1}${r}) and < 2 ** ${8*(i+1)-1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new G.ERR_OUT_OF_RANGE("value", s, e)
                    }! function(e, t, n) {
                        q(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || z(t, e.length - (n + 1))
                    }(r, s, i)
                }

                function q(e, t) {
                    if ("number" != typeof e) throw new G.ERR_INVALID_ARG_TYPE(t, "number", e)
                }

                function z(e, t, n) {
                    if (Math.floor(e) !== e) throw q(e, n), new G.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                    if (t < 0) throw new G.ERR_BUFFER_OUT_OF_BOUNDS;
                    throw new G.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
                }
                N("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
                }), RangeError), N("ERR_INVALID_ARG_TYPE", (function(e, t) {
                    return `The "${e}" argument must be of type number. Received type ${typeof t}`
                }), TypeError), N("ERR_OUT_OF_RANGE", (function(e, t, n) {
                    let r = `The value of "${e}" is out of range.`,
                        s = n;
                    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? s = D(String(n)) : "bigint" == typeof n && (s = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (s = D(s)), s += "n"), r += ` It must be ${t}. Received ${s}`, r
                }), RangeError);
                const H = /[^+/0-9A-Za-z-_]/g;

                function W(e, t) {
                    let n;
                    t = t || 1 / 0;
                    const r = e.length;
                    let s = null;
                    const i = [];
                    for (let o = 0; o < r; ++o) {
                        if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
                            if (!s) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                if (o + 1 === r) {
                                    (t -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                s = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && i.push(239, 191, 189), s = n;
                                continue
                            }
                            n = 65536 + (s - 55296 << 10 | n - 56320)
                        } else s && (t -= 3) > -1 && i.push(239, 191, 189);
                        if (s = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            i.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            i.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return i
                }

                function V(e) {
                    return r.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function J(e, t, n, r) {
                    let s;
                    for (s = 0; s < r && !(s + n >= t.length || s >= e.length); ++s) t[s + n] = e[s];
                    return s
                }

                function K(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }

                function Q(e) {
                    return e != e
                }
                const X = function() {
                    const e = "0123456789abcdef",
                        t = new Array(256);
                    for (let n = 0; n < 16; ++n) {
                        const r = 16 * n;
                        for (let s = 0; s < 16; ++s) t[r + s] = e[n] + e[s]
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
                var s = Number.isNaN || function(e) {
                    return e != e
                };

                function i() {
                    i.init.call(this)
                }
                e.exports = i, e.exports.once = function(e, t) {
                    return new Promise((function(n, r) {
                        function s() {
                            void 0 !== i && e.removeListener("error", i), n([].slice.call(arguments))
                        }
                        var i;
                        "error" !== t && (i = function(n) {
                            e.removeListener(t, s), r(n)
                        }, e.once("error", i)), e.once(t, s)
                    }))
                }, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
                var o = 10;

                function a(e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
                }

                function u(e) {
                    return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners
                }

                function l(e, t, n, r) {
                    var s, i, o, l;
                    if (a(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), o = i[t]), void 0 === o) o = i[t] = n, ++e._eventsCount;
                    else if ("function" == typeof o ? o = i[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), (s = u(e)) > 0 && o.length > s && !o.warned) {
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
                        s = c.bind(r);
                    return s.listener = n, r.wrapFn = s, s
                }

                function d(e, t, n) {
                    var r = e._events;
                    if (void 0 === r) return [];
                    var s = r[t];
                    return void 0 === s ? [] : "function" == typeof s ? n ? [s.listener || s] : [s] : n ? function(e) {
                        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                        return t
                    }(s) : h(s, s.length)
                }

                function p(e) {
                    var t = this._events;
                    if (void 0 !== t) {
                        var n = t[e];
                        if ("function" == typeof n) return 1;
                        if (void 0 !== n) return n.length
                    }
                    return 0
                }

                function h(e, t) {
                    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                    return n
                }
                Object.defineProperty(i, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(e) {
                        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                        o = e
                    }
                }), i.init = function() {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                }, i.prototype.setMaxListeners = function(e) {
                    if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                    return this._maxListeners = e, this
                }, i.prototype.getMaxListeners = function() {
                    return u(this)
                }, i.prototype.emit = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                    var s = "error" === e,
                        i = this._events;
                    if (void 0 !== i) s = s && void 0 === i.error;
                    else if (!s) return !1;
                    if (s) {
                        var o;
                        if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                        var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                        throw a.context = o, a
                    }
                    var u = i[e];
                    if (void 0 === u) return !1;
                    if ("function" == typeof u) r(u, this, t);
                    else {
                        var l = u.length,
                            c = h(u, l);
                        for (n = 0; n < l; ++n) r(c[n], this, t)
                    }
                    return !0
                }, i.prototype.addListener = function(e, t) {
                    return l(this, e, t, !1)
                }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
                    return l(this, e, t, !0)
                }, i.prototype.once = function(e, t) {
                    return a(t), this.on(e, f(this, e, t)), this
                }, i.prototype.prependOnceListener = function(e, t) {
                    return a(t), this.prependListener(e, f(this, e, t)), this
                }, i.prototype.removeListener = function(e, t) {
                    var n, r, s, i, o;
                    if (a(t), void 0 === (r = this._events)) return this;
                    if (void 0 === (n = r[e])) return this;
                    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                    else if ("function" != typeof n) {
                        for (s = -1, i = n.length - 1; i >= 0; i--)
                            if (n[i] === t || n[i].listener === t) {
                                o = n[i].listener, s = i;
                                break
                            } if (s < 0) return this;
                        0 === s ? n.shift() : function(e, t) {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop()
                        }(n, s), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, o || t)
                    }
                    return this
                }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
                    var t, n, r;
                    if (void 0 === (n = this._events)) return this;
                    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                    if (0 === arguments.length) {
                        var s, i = Object.keys(n);
                        for (r = 0; r < i.length; ++r) "removeListener" !== (s = i[r]) && this.removeAllListeners(s);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                    }
                    if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                    else if (void 0 !== t)
                        for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                    return this
                }, i.prototype.listeners = function(e) {
                    return d(this, e, !0)
                }, i.prototype.rawListeners = function(e) {
                    return d(this, e, !1)
                }, i.listenerCount = function(e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
                }, i.prototype.listenerCount = p, i.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? t(this._events) : []
                }
            },
            645: (e, t) => {
                t.read = function(e, t, n, r, s) {
                    var i, o, a = 8 * s - r - 1,
                        u = (1 << a) - 1,
                        l = u >> 1,
                        c = -7,
                        f = n ? s - 1 : 0,
                        d = n ? -1 : 1,
                        p = e[t + f];
                    for (f += d, i = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; i = 256 * i + e[t + f], f += d, c -= 8);
                    for (o = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
                    if (0 === i) i = 1 - l;
                    else {
                        if (i === u) return o ? NaN : 1 / 0 * (p ? -1 : 1);
                        o += Math.pow(2, r), i -= l
                    }
                    return (p ? -1 : 1) * o * Math.pow(2, i - r)
                }, t.write = function(e, t, n, r, s, i) {
                    var o, a, u, l = 8 * i - s - 1,
                        c = (1 << l) - 1,
                        f = c >> 1,
                        d = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        p = r ? 0 : i - 1,
                        h = r ? 1 : -1,
                        g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (o++, u /= 2), o + f >= c ? (a = 0, o = c) : o + f >= 1 ? (a = (t * u - 1) * Math.pow(2, s), o += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, s), o = 0)); s >= 8; e[n + p] = 255 & a, p += h, a /= 256, s -= 8);
                    for (o = o << s | a, l += s; l > 0; e[n + p] = 255 & o, p += h, o /= 256, l -= 8);
                    e[n + p - h] |= 128 * g
                }
            },
            6526: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(9871);
                t.default = class {
                    constructor() {
                        this._data = new r.Data
                    }
                    get Data() {
                        return this._data
                    }
                }
            },
            9871: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Data = void 0;
                const s = r(n(3231)),
                    i = r(n(535));
                t.Data = class {
                    constructor() {
                        this._lottery = new s.default, this._report = new i.default
                    }
                    get Lottery() {
                        return this._lottery
                    }
                    get Report() {
                        return this._report
                    }
                }
            },
            3231: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Chart}/lottery`
                    }
                    async aggBookieBetTypeReportByDate(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return null != e.GameType && t.push(`gameType=${e.GameType}`), null != e.BetType && t.push(`betType=${e.BetType}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bookie-bet-type-report-by-date?${t.join("&")}`)
                    }
                    async aggCompanyBetTypeReportByDate(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return null != e.GameType && t.push(`gameType=${e.GameType}`), null != e.BetType && t.push(`betType=${e.BetType}`), await r.Lotus.RestClient.get(`${this.baseUrl}/company-bet-type-report-by-date?${t.join("&")}`)
                    }
                    async aggTopManagerTurnoverWinLossReport(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return null != e.GameType && t.push(`gameType=${e.GameType}`), null != e.BetType && t.push(`betType=${e.BetType}`), await r.Lotus.RestClient.get(`${this.baseUrl}/top-manager-turover-winloss?${t.join("&")}`)
                    }
                    async aggAgentBetTypeReportByDate(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return null != e.GameType && t.push(`gameType=${e.GameType}`), null != e.BetType && t.push(`betType=${e.BetType}`), await r.Lotus.RestClient.get(`${this.baseUrl}/agent-bet-type-report-by-date?${t.join("&")}`)
                    }
                }
            },
            535: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Chart}/report`
                    }
                    async aggCompanyProductReportByDate(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/company-product-report-by-date?${t.join("&")}`)
                    }
                    async aggPlayerBetDailyByDate(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-daily-by-date?${t.join("&")}`)
                    }
                    async aggCurrentQuarterTotalWinLossByProduct() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/company-total-winloss-by-product`)
                    }
                    async aggTopPlayerTurnoverWinLoss(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return null != e.Products && e.Products.length > 0 && e.Products.forEach((e => {
                            t.push(`products=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/top-player-turnover-winloss?${t.join("&")}`)
                    }
                    async aggAgentProductReportByDate(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/agent-product-report-by-date?${t.join("&")}`)
                    }
                }
            },
            6365: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(2881));
                t.default = class {
                    constructor() {
                        this.notification = new s.default
                    }
                    get Notification() {
                        return this.notification
                    }
                }
            },
            6336: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Communication}/notifications/agent/admin`
                    }
                    async createNotification(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/notification`, e)
                    }
                    async updateNotification(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/notification/${e.Id}`, {
                            Category: e.Category,
                            Message: e.Message,
                            PublishedAt: e.PublishedAt,
                            ExpiredAt: e.ExpiredAt,
                            DisplayPages: e.DisplayPages,
                            DisplaySections: e.DisplaySections
                        })
                    }
                    async createPrivateNotification(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/private-notification`, e)
                    }
                    async updatePrivateNotification(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/private-notification/${e.Id}`, {
                            Message: e.Message,
                            PublishedAt: e.PublishedAt,
                            ExpiredAt: e.ExpiredAt,
                            Recipients: e.Recipients,
                            DisplaySections: e.DisplaySections
                        })
                    }
                    async getNotificationById(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/notification/${e.Id}`)
                    }
                    async deleteNotificationById(e) {
                        return await r.Lotus.RestClient.delete(`${this.baseUrl}/notification/${e.Id}`)
                    }
                    async getNotificationsByCategory(e) {
                        const t = [`categories=${e.Category}`];
                        return e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/notification/category?${t.join("&")}`)
                    }
                }
            },
            2881: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(35),
                    i = r(n(6336));
                t.default = class {
                    constructor() {
                        this.notificationAdmin = new i.default
                    }
                    get Admin() {
                        return this.notificationAdmin
                    }
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Communication}/notifications/agent/notification`
                    }
                    async read(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/${e.Id}/read`)
                    }
                    async getNotificationsOnSection() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/section`)
                    }
                    async getNotificationsByCategory(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`, `category=${e.Category}`];
                        return e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await s.Lotus.RestClient.get(`${this.baseUrl}/category?${t.join("&")}`)
                    }
                }
            },
            5101: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(4117));
                t.default = class {
                    constructor() {
                        this.userAgent = new s.default
                    }
                    get UserAgent() {
                        return this.userAgent
                    }
                }
            },
            4117: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(7780));
                t.default = class {
                    constructor() {
                        this._userAgentHelper = new s.default
                    }
                    parser(e) {
                        return this._userAgentHelper.parser(e)
                    }
                }
            },
            9882: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Common}/iplookup`
                    }
                    async lookup(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/lookup?ip=${e}`)
                    }
                    async companyLookup(e) {
                        if (null == e) return [];
                        const t = e.map((e => `ip=${e}`));
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/company-lookup?${t.join("&")}`)
                    }
                }
            },
            5196: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Logging}/activities/agent/identity`
                    }
                    async searchAuthActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Level >= 0 && t.push(`level=${e.Level}`), e.Username && t.push(`username=${e.Username}`), e.Ip && t.push(`ip=${e.Ip}`), await r.Lotus.RestClient.get(`${this.baseUrl}/auth/search?${t.join("&")}`)
                    }
                    async searchIdentityActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `activityType=${e.ActivityType}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.baseUrl}/identity/search?${t.join("&")}`)
                    }
                    async searchAccountBalanceTx(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.TransactionTypes && e.TransactionTypes.forEach((e => {
                            t.push(`transactionTypes=${e}`)
                        })), e.Sort && t.push(`sort=${e.Sort}`), await r.Lotus.RestClient.get(`${this.baseUrl}/account-balance/search?${t.join("&")}`)
                    }
                }
            },
            8960: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Logging}/activities/agent/lottery`
                    }
                    async searchTermActivity(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `size=${e.Size}`, `page=${e.Page}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/term/search?${t.join("&")}`)
                    }
                    async searchLoLiveActivity(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `size=${e.Size}`, `page=${e.Page}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/lo-live/search?${t.join("&")}`)
                    }
                    async searchHandleNumberActivity(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`, `size=${e.Size}`, `page=${e.Page}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/handle-number/search?${t.join("&")}`)
                    }
                    async searchShareHolderActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.baseUrl}/share-holder/search?${t.join("&")}`)
                    }
                    async searchUserGameSettingActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-game-setting/search?${t.join("&")}`)
                    }
                }
            },
            6539: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Logging}/activities/agent/wm-casino`
                    }
                    async searchShareHolderActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.baseUrl}/share-holder/search?${t.join("&")}`)
                    }
                    async searchUserGameActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), e.ActivityType >= 0 && t.push(`activityType=${e.ActivityType}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-game/search?${t.join("&")}`)
                    }
                }
            },
            1995: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(8960)),
                    i = r(n(5196)),
                    o = r(n(6539));
                t.default = class {
                    constructor() {
                        this.activityLottery = new s.default, this.activityIdentity = new i.default, this.activityWMCasino = new o.default
                    }
                    get Lottery() {
                        return this.activityLottery
                    }
                    get Identity() {
                        return this.activityIdentity
                    }
                    get WMCasino() {
                        return this.activityWMCasino
                    }
                }
            },
            3038: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(1995));
                t.default = class {
                    constructor() {
                        this.activity = new s.default
                    }
                    get Activity() {
                        return this.activity
                    }
                }
            },
            6242: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/bookkeeping/agent`
                    }
                    async startExecution(e) {
                        let t = {
                            Term: e.term,
                            GameTypes: e.gameTypes
                        };
                        return !0 === e.redo && (t.Redo = !0), await r.Lotus.RestClient.post(`${this.baseUrl}/start-execution`, t)
                    }
                    async startExecutionTemporary(e) {
                        let t = {
                            Term: e.Term,
                            GameType: e.GameType
                        };
                        return !0 === e.Redo && (t.Redo = !0), await r.Lotus.RestClient.post(`${this.baseUrl}/start-execution-temporary`, t)
                    }
                }
            },
            896: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/city-schedules/agent`
                    }
                    async getSchedulesByGameType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.gameType}`)
                    }
                }
            },
            5601: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/live`
                    }
                    get basePriceAgentUrl() {
                        return `${this.baseUrl}/base-prices/agent`
                    }
                    get settingAgentUrl() {
                        return `${this.baseUrl}/settings/agent`
                    }
                    async getBasePrices(e) {
                        return await r.Lotus.RestClient.get(`${this.basePriceAgentUrl}/?gameType=${e.GameType}&betType=${e.BetType}`)
                    }
                    async calculateBasePrice(e) {
                        return await r.Lotus.RestClient.post(`${this.basePriceAgentUrl}/calculate`, e)
                    }
                    async updateBasePrice(e) {
                        return await r.Lotus.RestClient.put(`${this.basePriceAgentUrl}`, e)
                    }
                    async current(e) {
                        const t = [];
                        return e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.settingAgentUrl}/current?${t.join("&")}`)
                    }
                    async makeOdds(e) {
                        return await r.Lotus.RestClient.put(`${this.settingAgentUrl}/make-odds`, e)
                    }
                    async closePrize(e) {
                        return await r.Lotus.RestClient.put(`${this.settingAgentUrl}/close-prize`, e)
                    }
                    async close(e) {
                        return await r.Lotus.RestClient.put(`${this.settingAgentUrl}/close`, e)
                    }
                    async open(e) {
                        return await r.Lotus.RestClient.put(`${this.settingAgentUrl}/open`, e)
                    }
                    async ping(e) {
                        return await r.Lotus.RestClient.put(`${this.settingAgentUrl}/ping`, e)
                    }
                }
            },
            5497: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(35),
                    i = r(n(3714)),
                    o = r(n(4669)),
                    a = r(n(6242)),
                    u = r(n(896)),
                    l = r(n(8117)),
                    c = r(n(5601)),
                    f = r(n(8273)),
                    d = r(n(3334)),
                    p = r(n(421)),
                    h = r(n(4218)),
                    g = r(n(507)),
                    m = r(n(845)),
                    y = r(n(9114)),
                    b = r(n(3410)),
                    v = r(n(8975)),
                    w = r(n(7601)),
                    _ = r(n(3753)),
                    C = r(n(7228)),
                    T = r(n(5566)),
                    R = r(n(273));
                t.default = class {
                    constructor() {
                        this.report = new i.default, this.term = new o.default, this.booKKeeping = new a.default, this.lotteryResult = new f.default, this.citySchedule = new u.default, this.parameter = new l.default, this.live = new c.default, this.priceTable = new p.default, this.priceAutoManagement = new h.default, this.userGameSetting = new g.default, this.shareHolder = new m.default, this.payoutsType = new y.default, this.numberShare = new b.default, this.priceChangeTask = new v.default, this.ticketCancelTask = new w.default, this.publicOdds = new _.default, this.priceAutoProfile = new C.default, this.riskManagement = new T.default, this.numberCancelTask = new R.default
                    }
                    get Report() {
                        return this.report
                    }
                    get Term() {
                        return this.term
                    }
                    get BookKeeping() {
                        return this.booKKeeping
                    }
                    get CitySchedule() {
                        return this.citySchedule
                    }
                    get Parameter() {
                        return this.parameter
                    }
                    get Live() {
                        return this.live
                    }
                    get PriceTable() {
                        return this.priceTable
                    }
                    get PriceAutoManagement() {
                        return this.priceAutoManagement
                    }
                    get PriceAutoProfile() {
                        return this.priceAutoProfile
                    }
                    get UserGameSetting() {
                        return this.userGameSetting
                    }
                    get ShareHolder() {
                        return this.shareHolder
                    }
                    get PayoutsType() {
                        return this.payoutsType
                    }
                    get NumberShare() {
                        return this.numberShare
                    }
                    get PriceChangeTask() {
                        return this.priceChangeTask
                    }
                    get LotteryResult() {
                        return this.lotteryResult
                    }
                    get TicketCancelTask() {
                        return this.ticketCancelTask
                    }
                    get NumberCancelTask() {
                        return this.numberCancelTask
                    }
                    get PublicOdds() {
                        return this.publicOdds
                    }
                    get RiskManagement() {
                        return this.riskManagement
                    }
                    get Realtime() {
                        if (null == s.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == s.Lotus.Realtime.Client.auth || !s.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new d.default), this.realtime
                    }
                }
            },
            3334: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    s = n(9641),
                    i = n(35);
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
            8273: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/lottery-results/agent`
                    }
                    async updateCaishen4Result(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/caishen4`, e)
                    }
                    async getCaishen4ResultByTerm(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/caishen4?term=${e.Term}`)
                    }
                    async updateSouthernResult(e) {
                        let t = e;
                        return Object.keys(t).forEach((e => {
                            null == t[e] && delete t[e]
                        })), await r.Lotus.RestClient.put(`${this.baseUrl}/southern`, t)
                    }
                    async updateSouthernResultLive(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/southern/live`, e)
                    }
                    async getSouthernResultByTerm(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/southern?term=${e.Term}&gameType=${e.GameType}`)
                    }
                    async updateNorthernResult(e) {
                        return await r.Lotus.RestClient.put(` ${this.baseUrl}/northern`, e)
                    }
                    async updateNorthernResultLive(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/northern/live`, e)
                    }
                    async getNorthernResultByTerm(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/northern?term=${e.Term}`)
                    }
                }
            },
            273: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/game-play/agent/number-cancel-tasks`
                    }
                    async createTask(e) {
                        let t = {
                            Term: e.Term,
                            GameType: e.GameType,
                            BetType: e.BetType,
                            Numbers: e.Numbers
                        };
                        return null != e.CancelPlayers && e.CancelPlayers.length > 0 && Object.assign(t, {
                            CancelPlayers: e.CancelPlayers
                        }), null != e.CancelAgents && e.CancelAgents.length > 0 && Object.assign(t, {
                            CancelAgents: e.CancelAgents
                        }), null != e.ExceptPlayers && e.ExceptPlayers.length > 0 && Object.assign(t, {
                            ExceptPlayers: e.ExceptPlayers
                        }), await r.Lotus.RestClient.post(`${this.baseUrl}/create-task`, t)
                    }
                    async getAllTasks(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list-tasks?term=${e.Term}`)
                    }
                    async getTaskDetails(e) {
                        const t = [`taskId=${e.TaskId}`, `number=${e.Number}`];
                        return null != e.Status && t.push(`status=${e.Status}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), null != e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/list-task-details?${t.join("&")}`)
                    }
                    async startTask(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/start-task`, {
                            TaskId: e.TaskId
                        })
                    }
                    async cancelTask(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/cancel-task`, {
                            TaskId: e.TaskId
                        })
                    }
                }
            },
            3410: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/share-holders/agent/number-shares`
                    }
                    async getAll(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                    async update(e) {
                        return await r.Lotus.RestClient.put(this.baseUrl, e)
                    }
                    async delete(e) {
                        return await r.Lotus.RestClient.delete(this.baseUrl, e)
                    }
                }
            },
            8117: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/parameters/agent`
                    }
                    async getParametersByGameType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.GameType}`)
                    }
                    async updateParameter(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}`, e)
                    }
                }
            },
            9114: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/payouts-types/agent`
                    }
                    async getAll() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                    async getById(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.Id}`)
                    }
                    async updateById(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.Id}`, {
                            Title: e.Title,
                            Description: e.Description
                        })
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/create`, e)
                    }
                    async updatePlayerPayoutsType(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/update-player-payouts-type`, e)
                    }
                    async getUserPayoutsType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/users-payouts-type/${e.UserId}`, e)
                    }
                    async createPriceChangeTask(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/users-payouts-type/${e.UserId}`, e)
                    }
                }
            },
            4218: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                var s;
                t.default = class {
                        constructor() {}
                        get baseUrl() {
                            return `${r.Lotus.Config.Urls.Lottery}/extra-price/agent/automatic`
                        }
                        get basePriceExceptionUrl() {
                            return `${r.Lotus.Config.Urls.Lottery}/extra-price/agent/price-automatic-exception`
                        }
                        async getSettingsByGameType(e) {
                            return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.GameType}`)
                        }
                        async getSettingsByBetType(e) {
                            return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.GameType}/${e.BetType}`)
                        }
                        async updateRisks(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/risks`, e)
                        }
                        async updatePoints(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/points`, e)
                        }
                        async updatePointAvg(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/point-avg`, e)
                        }
                        async updateAutoChangePriceType(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/type`, e)
                        }
                        async getNumberPriceExceptions(e) {
                            const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                            return await r.Lotus.RestClient.get(`${this.basePriceExceptionUrl}?${t.join("&")}`)
                        }
                        async updateNumberPriceException(e) {
                            return await r.Lotus.RestClient.put(this.basePriceExceptionUrl, e)
                        }
                    },
                    function(e) {
                        e[e.None = 0] = "None", e[e.Point = 1] = "Point", e[e.Risk = 2] = "Risk", e[e.PointAvg = 3] = "PointAvg"
                    }(s || (s = {}))
            },
            7228: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/extra-price/agent/profiles`
                    }
                    async list() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}`)
                    }
                    async getDetails(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.Id}/details`)
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}`, {
                            Name: e.Name
                        })
                    }
                    async delete(e) {
                        return await r.Lotus.RestClient.delete(`${this.baseUrl}/${e.Id}`)
                    }
                    async switch (e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.Id}/switch`)
                    }
                    async setTimer(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.Id}/timer`, {
                            Time: e.Time
                        })
                    }
                }
            },
            8975: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/payouts-types/agent/price-change-tasks`
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/create`, e)
                    }
                    async list(e) {
                        return e.LastId ? await r.Lotus.RestClient.get(`${this.baseUrl}/list?lastId=${e.LastId}`) : await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                }
            },
            421: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    async getOdds(e) {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery}/odds/agent?term=${e.term}&gameType=${e.gameType}&betType=${e.betType}`)
                    }
                    async updatePrices(e) {
                        let t = {
                            Term: e.term,
                            GameType: e.gameType,
                            BetType: e.betType,
                            NumberPrices: []
                        };
                        for (let n of e.numberPrices) t.NumberPrices.push({
                            Number: n.number,
                            Price: n.price
                        });
                        return await r.Lotus.RestClient.put(`${r.Lotus.Config.Urls.Lottery}/extra-price/agent/manual`, t)
                    }
                    async closeNumbers(e) {
                        return await r.Lotus.RestClient.put(`${r.Lotus.Config.Urls.Lottery}/stop-numbers/agent/close`, {
                            Term: e.term,
                            GameType: e.gameType,
                            BetType: e.betType,
                            Numbers: e.numbers
                        })
                    }
                    async openNumbers(e) {
                        return await r.Lotus.RestClient.put(`${r.Lotus.Config.Urls.Lottery}/stop-numbers/agent/open`, {
                            Term: e.term,
                            GameType: e.gameType,
                            BetType: e.betType,
                            Numbers: e.numbers
                        })
                    }
                    async buildCustomPlayerOdds(e) {
                        let t = {
                            Term: e.Term,
                            GameType: e.GameType,
                            BetType: e.BetType
                        };
                        return null != e.IPList && Array.isArray(e.IPList) && Object.assign(t, {
                            IPList: e.IPList
                        }), null != e.PlayerUserIdList && Array.isArray(e.PlayerUserIdList) && Object.assign(t, {
                            PlayerUserIdList: e.PlayerUserIdList
                        }), await r.Lotus.RestClient.post(`${r.Lotus.Config.Urls.Lottery}/odds/agent/build-custom-player-odds`, t)
                    }
                    async buildCustomAgentOdds(e) {
                        let t = {
                            Term: e.Term,
                            GameType: e.GameType,
                            BetType: e.BetType,
                            UserIdList: e.UserIdList
                        };
                        return await r.Lotus.RestClient.post(`${r.Lotus.Config.Urls.Lottery}/odds/agent/build-custom-agent-odds`, t)
                    }
                }
            },
            3753: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/odds/agent/public-odds`
                    }
                    async getSettings() {
                        return await r.Lotus.RestClient.get(this.baseUrl)
                    }
                    async updateUserPublicOdds(e) {
                        return await r.Lotus.RestClient.put(this.baseUrl, {
                            UserId: e.UserId
                        })
                    }
                }
            },
            8664: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/cancelation`
                    }
                    async getReportGroupByBetType(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/user-bet-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getTicketItems(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                }
            },
            3938: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/consolidation`
                    }
                    async getTaggedUserReportGroupByBetType(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/tagged-bet-type?${t.join("&")}`)
                    }
                    async getTaggedUserReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/tagged-user?${t.join("&")}`)
                    }
                }
            },
            747: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/data-lake/new-ticket-items`
                    }
                    async exportAggPlayerTotalBets(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/export-agg-player-total-bets`, {
                            Term: e.Term,
                            GameType: e.GameType,
                            BetType: e.BetType,
                            CancelNumbers: e.CancelNumbers,
                            DoubtNumbers: e.DoubtNumbers
                        })
                    }
                    async exportPlayerTickets(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/export-player-tickets`, {
                            Term: e.Term,
                            GameType: e.GameType,
                            BetType: e.BetType,
                            CancelNumbers: e.CancelNumbers,
                            MinNumberMatch: e.MinNumberMatch
                        })
                    }
                    async exportPlayerBetHistory(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/export-agg-player-bet-history`, {
                            Term: e.Term,
                            GameType: e.GameType,
                            BetType: e.BetType,
                            CancelNumbers: e.CancelNumbers,
                            HistoryDays: e.HistoryDays
                        })
                    }
                }
            },
            8017: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(35),
                    i = r(n(747));
                t.default = class {
                    constructor() {
                        this._dataLakeNewTicketItems = new i.default
                    }
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/reports/agent/data-lake`
                    }
                    async checkQueryExecution(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/check-query-execution?id=${e}`)
                    }
                    get NewTicketItems() {
                        return this._dataLakeNewTicketItems
                    }
                }
            },
            6855: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/outstanding`
                    }
                    async getUserReportGroupByBetType(e) {
                        const t = [];
                        return e && (e.UserId && t.push(`userId=${e.UserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        }))), await r.Lotus.RestClient.get(`${this.baseUrl}/user-bet-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [];
                        return e && (e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`userId=${e.UserId}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getTicketItems(e) {
                        const t = [`userId=${e.UserId}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                    async getTicketItemsByNumber(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`, `number=${e.Number}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items-number?${t.join("&")}`)
                    }
                    async getHighestPointTicketItemsByNumber(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`, `number=${e.Number}`];
                        return e.Limit && t.push(`limit=${e.Limit}`), e.MaxPoint && t.push(`maxPoint=${e.MaxPoint}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items-number-highest-point?${t.join("&")}`)
                    }
                    async getTicketItemsByNumberAgents(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`, `number=${e.Number}`];
                        return e.UserIdList.forEach((e => {
                            t.push(`userIds=${e}`)
                        })), e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items-number-agents?${t.join("&")}`)
                    }
                }
            },
            9755: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/player-winlose`
                    }
                    async getMyPlayersReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/my-players-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.UserIds.forEach((e => {
                            t.push(`userIds=${e}`)
                        })), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByUserTerm(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.UserIds.forEach((e => {
                            t.push(`userIds=${e}`)
                        })), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-user-term?${t.join("&")}`)
                    }
                }
            },
            3714: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(8664)),
                    i = r(n(7073)),
                    o = r(n(8871)),
                    a = r(n(6855)),
                    u = r(n(7587)),
                    l = r(n(9755)),
                    c = r(n(3938)),
                    f = r(n(8017)),
                    d = r(n(5373));
                t.default = class {
                    constructor() {
                        this.cancelation = new s.default, this.ticketReport = new i.default, this.ticketItemReport = new o.default, this.outstanding = new a.default, this.statement = new u.default, this.playerWinLose = new l.default, this.consolidation = new c.default, this.dataLake = new f.default, this.temporaryStatement = new d.default
                    }
                    get Cancelation() {
                        return this.cancelation
                    }
                    get Ticket() {
                        return this.ticketReport
                    }
                    get TicketItem() {
                        return this.ticketItemReport
                    }
                    get Outstanding() {
                        return this.outstanding
                    }
                    get Statement() {
                        return this.statement
                    }
                    get PlayerWinLose() {
                        return this.playerWinLose
                    }
                    get Consolidation() {
                        return this.consolidation
                    }
                    get DataLake() {
                        return this.dataLake
                    }
                    get TemporaryStatement() {
                        return this.temporaryStatement
                    }
                }
            },
            7587: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/statements`
                    }
                    async getUserReportGroupByBetType(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.UserId && t.push(`userId=${e.UserId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-bet-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getTicketItems(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                }
            },
            5373: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/temporary-statements`
                    }
                    async getUserReportGroupByBetType(e) {
                        const t = [`term=${e.Term}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.UserId && t.push(`userId=${e.UserId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-bet-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [`term=${e.Term}`];
                        return e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`userId=${e.UserId}`, `term=${e.Term}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getTicketItems(e) {
                        const t = [`userId=${e.UserId}`, `term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                }
            },
            7073: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/tickets`
                    }
                    async getTicketsByNumbers(e) {
                        const t = [`userId=${e.UserId}`, `term=${e.Term}`];
                        return e.Numbers.forEach((e => {
                            t.push(`numbers=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/numbers?${t.join("&")}`)
                    }
                }
            },
            8871: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/agent/ticket-items`
                    }
                    async getItemsByTicket(e) {
                        const t = [`userId=${e.UserId}`, `term=${e.Term}`, `ticketNumber=${e.TicketNumber}`];
                        return e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket?${t.join("&")}`)
                    }
                }
            },
            5566: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/risk-management`
                    }
                    async getPlayersDuplicateIp(e) {
                        let t = [`term=${e.Term}`, `minPlayers=${e.MinPlayers}`, `page=${e.Page}`, `size=${e.Size}`];
                        return null != e.IP && t.push(`ip=${e.IP}`), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-ip/duplication-ip?${t.join("&")}`)
                    }
                    async getPlayersByIP(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-ip/list-players-by-ip?term=${e.Term}&ip=${e.IP}`)
                    }
                    async getIPListByUsername(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-ip/list-ip-by-term-username?term=${e.Term}&username=${e.Username}`)
                    }
                }
            },
            845: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/share-holders/agent`
                    }
                    async getShareHolders() {
                        return await r.Lotus.RestClient.get(this.baseUrl)
                    }
                    async getUserShareHolders(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.userId}`)
                    }
                    async getAncestorsShareHolderOverview(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.userId}/ancestors?gameType=${e.gameType}`)
                    }
                    async updateUserShareHolders(e) {
                        const t = [];
                        for (let n of e.shareHolders) t.push({
                            GameType: n.gameType,
                            BetType: n.betType,
                            Percent: n.percent,
                            ParentPercent: n.parentPercent,
                            Fixed: n.fixed,
                            Price: n.price
                        });
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.userId}`, t)
                    }
                }
            },
            4669: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/terms/agent`
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/create`, {
                            Date: e.date,
                            GameTypes: e.gameTypes
                        })
                    }
                    async getTermsByDate(e) {
                        const t = [];
                        return e.date && t.push(`date=${e.date}`), e.checkBookKeepingReady && t.push(`checkBookKeepingReady=${e.checkBookKeepingReady}`), await r.Lotus.RestClient.get(`${this.baseUrl}/list?${t.join("&")}`)
                    }
                    async updateGameStatus(e) {
                        let t = {
                            Term: e.term,
                            GameType: e.gameType,
                            Status: e.status
                        };
                        return e.includeBetTypes && (t.IncludeBetTypes = e.includeBetTypes), e.excludeBetTypes && (t.ExcludeBetTypes = e.excludeBetTypes), await r.Lotus.RestClient.put(`${this.baseUrl}/game-status`, t)
                    }
                    async updateGameAutoClose(e) {
                        let t = {
                            Term: e.term,
                            GameType: e.gameType,
                            AutoCloseAt: e.autoCloseAt
                        };
                        return e.includeBetTypes && (t.IncludeBetTypes = e.includeBetTypes), e.excludeBetTypes && (t.ExcludeBetTypes = e.excludeBetTypes), await r.Lotus.RestClient.put(`${this.baseUrl}/game-auto-close`, t)
                    }
                }
            },
            7601: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/game-play/agent/ticket-cancel-tasks`
                    }
                    async createTask(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}`, e)
                    }
                    async getTasks(e) {
                        const t = [`term=${e.Term}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                }
            },
            8721: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/user-game-settings/agent/game-limit`
                    }
                    async getSettings(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/settings?gameLimitCode=${e.GameLimitCode}`)
                    }
                    async updateSettings(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/settings`, e)
                    }
                    async getUsersLimited(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/users?gameLimitCode=${e.GameLimitCode}&page=${e.Page}&size=${e.Size}`)
                    }
                    async addUsersToLimitation(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/users`, {
                            GameLimitCode: e.GameLimitCode,
                            Usernames: e.Usernames
                        })
                    }
                    async removeUsersFromLimitation(e) {
                        return await r.Lotus.RestClient.delete(`${this.baseUrl}/users`, {
                            Usernames: e.Usernames
                        })
                    }
                }
            },
            507: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(35),
                    i = r(n(8721));
                t.default = class {
                    constructor() {
                        this.gameLimit = new i.default
                    }
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/user-game-settings/agent`
                    }
                    get GameLimit() {
                        return this.gameLimit
                    }
                    async getSettings() {
                        return await s.Lotus.RestClient.get(this.baseUrl)
                    }
                    async getUserSettings(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}`)
                    }
                    async updateUserSettings(e) {
                        return await s.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, e.Settings)
                    }
                }
            },
            5165: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/bookkeeping/agent`
                    }
                    async startExecution(e) {
                        let t = {
                            Term: e.Term,
                            GameType: e.GameType
                        };
                        return !0 === e.Redo && (t.Redo = !0), await r.Lotus.RestClient.post(`${this.baseUrl}/start-execution`, t)
                    }
                }
            },
            7162: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/live/agent`
                    }
                    async latest(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/live/latest?term=${e.Term}&gameType=${e.GameType}`)
                    }
                    async open(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/live/open`, {
                            Term: e.Term,
                            GameType: e.GameType
                        })
                    }
                    async close(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/live/close`, {
                            Term: e.Term,
                            GameType: e.GameType
                        })
                    }
                    async closePrize(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/live/close-prize`, {
                            Term: e.Term,
                            GameType: e.GameType,
                            PrizeNr: e.PrizeNr
                        })
                    }
                    async ping(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/live/ping`, {
                            Term: e.Term,
                            GameType: e.GameType,
                            IgnoreCheckTime: e.IgnoreCheckTime
                        })
                    }
                    async notify(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/live/notify`, {
                            Term: e.Term,
                            GameType: e.GameType,
                            Message: e.Message
                        })
                    }
                    async getPrizePrices(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/prize-price?gameType=${e.GameType}&betType=${e.BetType}`)
                    }
                    async updatePrizePrice(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/prize-price`, e)
                    }
                    async calculatePrizePrice(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/prize-price/calculate`, e)
                    }
                }
            },
            3830: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/logs/agent`
                    }
                    async searchTermActivity(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `size=${e.Size}`, `page=${e.Page}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/term/search?${t.join("&")}`)
                    }
                    async searchLiveActivity(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `size=${e.Size}`, `page=${e.Page}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/live/search?${t.join("&")}`)
                    }
                    async searchHandleNumberActivity(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`, `size=${e.Size}`, `page=${e.Page}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/handle-number/search?${t.join("&")}`)
                    }
                    async searchShareHolderActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.baseUrl}/share-holder/search?${t.join("&")}`)
                    }
                    async searchUserGameSettingActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-game-setting/search?${t.join("&")}`)
                    }
                }
            },
            9340: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(35),
                    i = r(n(8030)),
                    o = r(n(8732)),
                    a = r(n(5165)),
                    u = r(n(5916)),
                    l = r(n(3266)),
                    c = r(n(610)),
                    f = r(n(6310)),
                    d = r(n(699)),
                    p = r(n(3975)),
                    h = r(n(6840)),
                    g = r(n(2051)),
                    m = r(n(3810)),
                    y = r(n(2225)),
                    b = r(n(6815)),
                    v = r(n(7162)),
                    w = r(n(3830)),
                    _ = r(n(2841));
                t.default = class {
                    constructor() {
                        this.report = new i.default, this.term = new o.default, this.booKKeeping = new a.default, this.lotteryResult = new l.default, this.parameter = new u.default, this.priceTable = new f.default, this.priceAutoManagement = new d.default, this.userGameSetting = new p.default, this.shareHolder = new h.default, this.payoutsType = new g.default, this.numberShare = new m.default, this.priceChangeTask = new y.default, this.publicOdds = new b.default, this.live = new v.default, this.logging = new w.default, this.resultStats = new _.default
                    }
                    get Report() {
                        return this.report
                    }
                    get Term() {
                        return this.term
                    }
                    get BookKeeping() {
                        return this.booKKeeping
                    }
                    get Parameter() {
                        return this.parameter
                    }
                    get PriceTable() {
                        return this.priceTable
                    }
                    get PriceAutoManagement() {
                        return this.priceAutoManagement
                    }
                    get UserGameSetting() {
                        return this.userGameSetting
                    }
                    get ShareHolder() {
                        return this.shareHolder
                    }
                    get PayoutsType() {
                        return this.payoutsType
                    }
                    get NumberShare() {
                        return this.numberShare
                    }
                    get PriceChangeTask() {
                        return this.priceChangeTask
                    }
                    get LotteryResult() {
                        return this.lotteryResult
                    }
                    get PublicOdds() {
                        return this.publicOdds
                    }
                    get Live() {
                        return this.live
                    }
                    get Logging() {
                        return this.logging
                    }
                    get ResultStats() {
                        return this.resultStats
                    }
                    get Realtime() {
                        if (null == s.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == s.Lotus.Realtime.Client.auth || !s.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new c.default), this.realtime
                    }
                }
            },
            610: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    s = n(9641),
                    i = n(35);
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
                            for (let e = 0; e < n.length; e++) n[e] && (t = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.PRODUCTION_LOTTERY789}:ancestor:${n[e]}`), t.subscribe((e => {
                                this.emit(`${s.RealtimeLocalChannelName.LOTTERY789}:ancestor:event:${e.name}`, e.data, e)
                            })), this.ancestorsChannels.push(t))
                    }
                    subscribeGeneralChannel() {
                        this.generalChannel = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.PRODUCTION_LOTTERY789}:general`), this.generalChannel.subscribe((e => {
                            this.emit(`${s.RealtimeLocalChannelName.LOTTERY789}:general:event:${e.name}`, e.data, e)
                        }))
                    }
                    subscribeSelfChannel() {
                        this.selfChannel = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.PRODUCTION_LOTTERY789}:self:${i.Lotus.Realtime.Client.auth.clientId}`), this.selfChannel.subscribe((e => {
                            this.emit(`${s.RealtimeLocalChannelName.LOTTERY789}:self:event:${e.name}`, e.data, e)
                        }))
                    }
                }
                t.default = o
            },
            3266: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/lottery-results/agent`
                    }
                    async updateSouthernResult(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/southern`, {
                            Term: e.Term,
                            Jackpot: e.Jackpot,
                            First: e.First,
                            Second: e.Second,
                            Third: e.Third,
                            Fourth: e.Fourth,
                            Fiveth: e.Fiveth,
                            Sixth: e.Sixth,
                            Seventh: e.Seventh,
                            Eighth: e.Eighth
                        })
                    }
                    async updateSouthernResultLive(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/southern/live`, {
                            Term: e.Term,
                            Prize: e.Prize,
                            Result: e.Result
                        })
                    }
                    async getSouthernResultByTerm(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/southern?term=${e.Term}`)
                    }
                    async updateNorthernResult(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/northern`, {
                            Term: e.Term,
                            Jackpot: e.Jackpot,
                            First: e.First,
                            Second: e.Second,
                            Third: e.Third,
                            Fourth: e.Fourth,
                            Fiveth: e.Fiveth,
                            Sixth: e.Sixth,
                            Seventh: e.Seventh
                        })
                    }
                    async updateNorthernResultLive(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/northern/live`, {
                            Term: e.Term,
                            Prize: e.Prize,
                            Result: e.Result
                        })
                    }
                    async getNorthernResultByTerm(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/northern?term=${e.Term}`)
                    }
                }
            },
            3810: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/share-holders/agent/number-shares`
                    }
                    async getAll(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                    async update(e) {
                        return await r.Lotus.RestClient.put(this.baseUrl, e)
                    }
                    async delete(e) {
                        return await r.Lotus.RestClient.delete(this.baseUrl, e)
                    }
                }
            },
            5916: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/parameters/agent`
                    }
                    async getParametersByGameType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}?gameType=${e.GameType}`)
                    }
                    async updateParameter(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}`, e)
                    }
                }
            },
            2051: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/payouts-types/agent`
                    }
                    async getAll() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                    async getById(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.Id}`)
                    }
                    async updateById(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.Id}`, {
                            Title: e.Title,
                            Description: e.Description
                        })
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/create`, e)
                    }
                    async updatePlayerPayoutsType(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/update-player-payouts-type`, e)
                    }
                    async getUserPayoutsType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/users-payouts-type/${e.UserId}`, e)
                    }
                    async createPriceChangeTask(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/users-payouts-type/${e.UserId}`, e)
                    }
                }
            },
            699: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                var s;
                t.default = class {
                        constructor() {}
                        get baseUrl() {
                            return `${r.Lotus.Config.Urls.Lottery789}/extra-price/agent/automatic`
                        }
                        get basePriceExceptionUrl() {
                            return `${r.Lotus.Config.Urls.Lottery789}/extra-price/agent/price-automatic-exception`
                        }
                        async getSettingsByGameType(e) {
                            return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.GameType}`)
                        }
                        async getSettingsByBetType(e) {
                            return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.GameType}/${e.BetType}`)
                        }
                        async updateRisks(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/risks`, e)
                        }
                        async updatePoints(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/points`, e)
                        }
                        async updatePointAvg(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/point-avg`, e)
                        }
                        async updateAutoChangePriceType(e) {
                            return await r.Lotus.RestClient.put(`${this.baseUrl}/type`, e)
                        }
                        async getNumberPriceExceptions(e) {
                            const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                            return await r.Lotus.RestClient.get(`${this.basePriceExceptionUrl}?${t.join("&")}`)
                        }
                        async updateNumberPriceException(e) {
                            return await r.Lotus.RestClient.put(this.basePriceExceptionUrl, e)
                        }
                    },
                    function(e) {
                        e[e.None = 0] = "None", e[e.Point = 1] = "Point", e[e.Risk = 2] = "Risk", e[e.PointAvg = 3] = "PointAvg"
                    }(s || (s = {}))
            },
            2225: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/payouts-types/agent/price-change-tasks`
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/create`, e)
                    }
                    async list(e) {
                        return e && e.LastId ? await r.Lotus.RestClient.get(`${this.baseUrl}/list?lastId=${e.LastId}`) : await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                }
            },
            6310: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    async getOdds(e) {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery789}/odds/agent?term=${e.Term}&gameType=${e.GameType}&betType=${e.BetType}`)
                    }
                    async updatePrices(e) {
                        return await r.Lotus.RestClient.put(`${r.Lotus.Config.Urls.Lottery789}/extra-price/agent/manual`, e)
                    }
                    async closeNumbers(e) {
                        return await r.Lotus.RestClient.put(`${r.Lotus.Config.Urls.Lottery789}/stop-numbers/agent/close`, e)
                    }
                    async openNumbers(e) {
                        return await r.Lotus.RestClient.put(`${r.Lotus.Config.Urls.Lottery789}/stop-numbers/agent/open`, e)
                    }
                }
            },
            6815: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/odds/agent/public-odds`
                    }
                    async getSettings() {
                        return await r.Lotus.RestClient.get(this.baseUrl)
                    }
                    async updateUserPublicOdds(e) {
                        return await r.Lotus.RestClient.put(this.baseUrl, {
                            UserId: e.UserId
                        })
                    }
                }
            },
            4565: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/reports/agent/consolidation`
                    }
                    async getTaggedUserReportGroupByBetType(e) {
                        const t = [];
                        return e.Term ? t.push(`term=${e.Term}`) : e.From && e.To && (t.push(`from=${e.From}`), t.push(`to=${e.To}`)), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/tagged-bet-type?${t.join("&")}`)
                    }
                    async getTaggedUserReportGroupByUser(e) {
                        const t = [];
                        return e.Term ? t.push(`term=${e.Term}`) : e.From && e.To && (t.push(`from=${e.From}`), t.push(`to=${e.To}`)), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/tagged-user?${t.join("&")}`)
                    }
                    async getTaggedUserReportGroupByTerm(e) {
                        const t = [`date=${e.Date}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/tagged-term?${t.join("&")}`)
                    }
                }
            },
            6697: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/reports/agent/outstanding`
                    }
                    async getUserReportGroupByBetType(e) {
                        const t = [];
                        return e && (e.UserId && t.push(`userId=${e.UserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        }))), await r.Lotus.RestClient.get(`${this.baseUrl}/user-bet-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [];
                        return e && (e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`userId=${e.UserId}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getTicketItems(e) {
                        const t = [`userId=${e.UserId}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                    async getTicketItemsByNumber(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`, `betType=${e.BetType}`, `number=${e.Number}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items-number?${t.join("&")}`)
                    }
                }
            },
            177: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/reports/agent/player-winlose`
                    }
                    async getMyPlayersReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/my-players-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.UserIds.forEach((e => {
                            t.push(`userIds=${e}`)
                        })), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByUserTerm(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.UserIds.forEach((e => {
                            t.push(`userIds=${e}`)
                        })), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-user-term?${t.join("&")}`)
                    }
                }
            },
            8030: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(8847)),
                    i = r(n(6680)),
                    o = r(n(6697)),
                    a = r(n(5056)),
                    u = r(n(177)),
                    l = r(n(4565));
                t.default = class {
                    constructor() {
                        this.ticketReport = new s.default, this.ticketItemReport = new i.default, this.outstanding = new o.default, this.statement = new a.default, this.playerWinLose = new u.default, this.consolidation = new l.default
                    }
                    get Ticket() {
                        return this.ticketReport
                    }
                    get TicketItem() {
                        return this.ticketItemReport
                    }
                    get Outstanding() {
                        return this.outstanding
                    }
                    get Statement() {
                        return this.statement
                    }
                    get PlayerWinLose() {
                        return this.playerWinLose
                    }
                    get Consolidation() {
                        return this.consolidation
                    }
                }
            },
            5056: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/reports/agent/statements`
                    }
                    async getUserReportGroupByBetType(e) {
                        const t = [];
                        return e.Term ? t.push(`term=${e.Term}`) : e.From && e.To && (t.push(`from=${e.From}`), t.push(`to=${e.To}`)), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.UserId && t.push(`userId=${e.UserId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-bet-type?${t.join("&")}`)
                    }
                    async getUserReportGroupByTerm(e) {
                        const t = [`date=${e.Date}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.UserId && t.push(`userId=${e.UserId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-term?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [];
                        return e.Term ? t.push(`term=${e.Term}`) : e.From && e.To && (t.push(`from=${e.From}`), t.push(`to=${e.To}`)), e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByBetType(e) {
                        const t = [`userId=${e.UserId}`];
                        return e.Term ? t.push(`term=${e.Term}`) : e.From && e.To && (t.push(`from=${e.From}`), t.push(`to=${e.To}`)), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes && e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-bet-type?${t.join("&")}`)
                    }
                    async getTicketItems(e) {
                        const t = [`userId=${e.UserId}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.Term ? t.push(`term=${e.Term}`) : e.From && e.To && (t.push(`from=${e.From}`), t.push(`to=${e.To}`)), e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                }
            },
            8847: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/reports/agent/tickets`
                    }
                    async getTicketsByNumbers(e) {
                        const t = [`userId=${e.UserId}`, `term=${e.Term}`];
                        return e.Numbers.forEach((e => {
                            t.push(`numbers=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/numbers?${t.join("&")}`)
                    }
                }
            },
            6680: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/reports/agent/ticket-items`
                    }
                    async getItemsByTicket(e) {
                        const t = [`userId=${e.UserId}`, `term=${e.Term}`, `ticketNumber=${e.TicketNumber}`];
                        return e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket?${t.join("&")}`)
                    }
                }
            },
            2841: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/result-stats/agent`
                    }
                    get buildAllNorthernResults() {}
                }
            },
            6840: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/share-holders/agent`
                    }
                    async getShareHolders() {
                        return await r.Lotus.RestClient.get(this.baseUrl)
                    }
                    async getUserShareHolders(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}`)
                    }
                    async getAncestorsShareHolderOverview(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}/ancestors?gameType=${e.GameType}`)
                    }
                    async updateUserShareHolders(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, e.ShareHolders)
                    }
                }
            },
            8732: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/terms/agent`
                    }
                    async create(e) {
                        let t = {
                            GameType: e.GameType,
                            DrawResultAt: e.DrawResultAt
                        };
                        return e.FiscalDate && (t.FiscalDate = e.FiscalDate), await r.Lotus.RestClient.post(`${this.baseUrl}/create`, t)
                    }
                    async latest(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/latest?checkBookKeepingReady=${e.CheckBookKeepingReady}`)
                    }
                    async getTermsByDateGameType(e) {
                        const t = [`date=${e.Date}`, `gameType=${e.GameType}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list?${t.join("&")}`)
                    }
                    async updateGameStatus(e) {
                        let t = {
                            Term: e.Term,
                            GameType: e.GameType,
                            Status: e.Status
                        };
                        return e.IncludeBetTypes && (t.IncludeBetTypes = e.IncludeBetTypes), e.ExcludeBetTypes && (t.ExcludeBetTypes = e.ExcludeBetTypes), await r.Lotus.RestClient.put(`${this.baseUrl}/game-status`, t)
                    }
                    async updateGameAutoClose(e) {
                        let t = {
                            Term: e.Term,
                            GameType: e.GameType,
                            AutoCloseAt: e.AutoCloseAt
                        };
                        return e.IncludeBetTypes && (t.IncludeBetTypes = e.IncludeBetTypes), e.ExcludeBetTypes && (t.ExcludeBetTypes = e.ExcludeBetTypes), await r.Lotus.RestClient.put(`${this.baseUrl}/game-auto-close`, t)
                    }
                    async updateDrawResult(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/draw-result`, e)
                    }
                }
            },
            3975: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/user-game-settings/agent`
                    }
                    async getSettings() {
                        return await r.Lotus.RestClient.get(this.baseUrl)
                    }
                    async getUserSettings(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}`)
                    }
                    async updateUserSettings(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, e.Settings)
                    }
                }
            },
            5883: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LotusClass = void 0;
                const s = r(n(4480)),
                    i = r(n(146)),
                    o = r(n(419)),
                    a = r(n(5497)),
                    u = r(n(5912)),
                    l = r(n(5366)),
                    c = r(n(3038)),
                    f = r(n(6365)),
                    d = r(n(9340)),
                    p = r(n(8882)),
                    h = r(n(9533)),
                    g = r(n(7899)),
                    m = r(n(6526)),
                    y = r(n(9882)),
                    b = r(n(5101)),
                    v = r(n(7753));
                t.LotusClass = class {
                    constructor() {
                        this.config = {
                            Urls: {}
                        }, this.restClient = new o.default, this.realtimeClient = new i.default, this.user = new s.default, this.public = new h.default, this.reporting = new l.default, this.lottery = new a.default, this.wmCasino = new u.default, this.logging = new c.default, this.communication = new f.default, this.lottery789 = new d.default, this.senCasino = new p.default, this.saba = new g.default, this.chart = new m.default, this.iplookup = new y.default, this.helper = new b.default, this.telegram = new v.default
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
                    get Public() {
                        return this.public
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
                    get Logging() {
                        return this.logging
                    }
                    get Communication() {
                        return this.communication
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
                    get Chart() {
                        return this.chart
                    }
                    get IpLookup() {
                        return this.iplookup
                    }
                    get Helper() {
                        return this.helper
                    }
                    get Telegram() {
                        return this.telegram
                    }
                    get Config() {
                        return this.config
                    }
                }
            },
            7576: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(2369));
                t.default = class {
                    constructor() {
                        this._term = new s.default
                    }
                    get Term() {
                        return this._term
                    }
                }
            },
            2369: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/terms/public`
                    }
                    async getCurrentDrawGameResult() {
                        return await r.Lotus.Public.RestClient.get(`${this.baseUrl}/schedule/game-draw-result/current`)
                    }
                }
            },
            9533: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(9327)),
                    i = r(n(8124)),
                    o = r(n(7576));
                t.default = class {
                    constructor() {
                        this.restClient = new s.default, this._senCasino = new i.default, this._lottery789 = new o.default
                    }
                    get SenCasino() {
                        return this._senCasino
                    }
                    get Lottery789() {
                        return this._lottery789
                    }
                    get RestClient() {
                        return this.restClient
                    }
                }
            },
            7289: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(9457));
                t.default = class {
                    constructor() {
                        this._sedieGame = new s.default
                    }
                    get Sedie() {
                        return this._sedieGame
                    }
                }
            },
            5954: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/dealers/public`
                    }
                    async getCurrentGame(e) {
                        return await r.Lotus.Public.RestClient.get(`${this.baseUrl}/current-game?areaNumber=${e.AreaNumber}`)
                    }
                }
            },
            9457: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(5954));
                t.default = class {
                    constructor() {
                        this._dealer = new s.default
                    }
                    get Dealer() {
                        return this._dealer
                    }
                }
            },
            8124: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(7289));
                t.default = class {
                    constructor() {
                        this._games = new s.default
                    }
                    get Games() {
                        return this._games
                    }
                }
            },
            146: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var s = Object.getOwnPropertyDescriptor(t, n);
                        s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, s)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                        return s(t, e), t
                    },
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const a = i(n(9350)),
                    u = o(n(4774)),
                    l = n(35);
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
            3289: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Reporting}/statements/agent/consolidation`
                    }
                    async getReportGroupByProduction(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return Array.isArray(e.ProductTypes) && e.ProductTypes.length && e.ProductTypes.forEach((e => {
                            t.push(`productTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/production-type?${t.join("&")}`)
                    }
                    async getReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return Array.isArray(e.ProductTypes) && e.ProductTypes.length && e.ProductTypes.forEach((e => {
                            t.push(`productTypes=${e}`)
                        })), e.Size > 0 && e.Page > 0 && (t.push(`size=${e.Size}`), t.push(`page=${e.Page}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/user?${t.join("&")}`)
                    }
                }
            },
            7784: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Reporting}/statements/agent/dashboard`
                    }
                    async overview() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}`)
                    }
                }
            },
            5366: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(4632)),
                    i = r(n(3289)),
                    o = r(n(7784));
                t.default = class {
                    constructor() {
                        this.statement = new s.default, this.consolidation = new i.default, this.dashboard = new o.default
                    }
                    get Statement() {
                        return this.statement
                    }
                    get Consolidation() {
                        return this.consolidation
                    }
                    get Dashboard() {
                        return this.dashboard
                    }
                }
            },
            4632: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Reporting}/statements/agent/statements`
                    }
                    async getUserReportGroupByProduction(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.ProductTypes && e.ProductTypes.forEach((e => {
                            t.push(`productTypes=${e}`)
                        })), e.UserId && t.push(`userId=${e.UserId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-production-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), Array.isArray(e.ProductTypes) && e.ProductTypes.length && e.ProductTypes.forEach((e => {
                            t.push(`productTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByProduction(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return Array.isArray(e.ProductTypes) && e.ProductTypes.length && e.ProductTypes.forEach((e => {
                            t.push(`productTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-production-type?${t.join("&")}`)
                    }
                }
            },
            419: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(440)),
                    i = n(35);
                class o extends s.default {
                    constructor() {
                        super()
                    }
                    useAuthorizationInterceptor() {
                        this.authorizationInterceptor = this.axiosInstance.interceptors.request.use((async e => {
                            const t = await i.Lotus.User.Current.getSession();
                            return null != t && (e.headers.Authorization = "Bearer " + t.getIdToken().getJwtToken()), e
                        }))
                    }
                }
                t.default = o
            },
            1013: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/bet-limit/agent`
                    }
                    async getUserBetLimit(e) {
                        const t = !0 === e.IncludeParent;
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/get-user?userId=${e.UserId}&includeParent=${t}`)
                    }
                    async updateUserBetLimit(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/update-user`, e)
                    }
                }
            },
            8225: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/league`
                    }
                    async getLeagueName(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/name?leagueId=${e.LeagueId}`)
                    }
                }
            },
            4969: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/logs`
                    }
                    get activityAgentBaseUrl() {
                        return `${this.baseUrl}/activity/agent`
                    }
                    async searchShareHolderActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.activityAgentBaseUrl}/share-holder/search?${t.join("&")}`)
                    }
                    async searchBetLimitActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.activityAgentBaseUrl}/bet-limit/search?${t.join("&")}`)
                    }
                }
            },
            7809: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/maintenance/agent`
                    }
                    async getMaintenance() {
                        return await r.Lotus.RestClient.get(this.baseUrl)
                    }
                    async updateMaintenance(e) {
                        return await r.Lotus.RestClient.put(this.baseUrl, e)
                    }
                }
            },
            5226: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
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
            7698: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/reports/outstanding/agent`
                    }
                    async getUserReportGroupBySportGroup(e) {
                        const t = [];
                        return null != e && (null != e.SportGroups && Array.isArray(e.SportGroups) && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), null != e.UserId && t.push(`userId=${e.UserId}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/user-sport-group?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [];
                        return null != e && (e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), null != e.SportGroups && Array.isArray(e.SportGroups) && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupBySportGroup(e) {
                        const t = [`userId=${e.UserId}`];
                        return null != e.SportGroups && Array.isArray(e.SportGroups) && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-sport-group?${t.join("&")}`)
                    }
                    async getBetItems(e) {
                        const t = [`userId=${e.UserId}`, `sportGroup=${e.SportGroup}`];
                        return e.LastTx > 0 && t.push(`lastTx=${e.LastTx}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                    async getMatchBetTypeReport(e) {
                        const t = [`group=${e.Group}`];
                        return e.LeagueId > 0 && t.push(`leagueId=${e.LeagueId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/match-bet-type?${t.join("&")}`)
                    }
                    async getMatchBetTypeLeagues(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/match-bet-type-leagues?group=${e.Group}`)
                    }
                    async getBetItemsByMatch(e) {
                        const t = [`matchId=${e.MatchId}`, `betType=${e.BetType}`];
                        return e.LastTx > 0 && t.push(`lastTx=${e.LastTx}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items-by-match?${t.join("&")}`)
                    }
                    async getIncompletedFiscalDate() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/incompleted-fiscal-date`)
                    }
                }
            },
            4089: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/reports/player-winlose/agent`
                    }
                    async getMyPlayersReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return null != e.SportGroups && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/my-players-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupBySportGroup(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return null != e.SportGroups && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-sport-group?${t.join("&")}`)
                    }
                }
            },
            1511: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(7698)),
                    i = r(n(4089)),
                    o = r(n(3346));
                t.default = class {
                    constructor() {
                        this.statement = new o.default, this.playerWinLose = new i.default, this.playerOutstanding = new s.default
                    }
                    get Statement() {
                        return this.statement
                    }
                    get PlayerWinLose() {
                        return this.playerWinLose
                    }
                    get Outstanding() {
                        return this.playerOutstanding
                    }
                }
            },
            3346: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/reports/statements`
                    }
                    get agentBaseUrl() {
                        return `${this.baseUrl}/agent`
                    }
                    async getUserReportGroupBySportGroup(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return null != e.SportGroups && Array.isArray(e.SportGroups) && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.agentBaseUrl}/user-sport-group?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), null != e.SportGroups && Array.isArray(e.SportGroups) && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.agentBaseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupBySportGroup(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return null != e.SportGroups && Array.isArray(e.SportGroups) && e.SportGroups.forEach((e => {
                            t.push(`sportGroups=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.agentBaseUrl}/player-sport-group?${t.join("&")}`)
                    }
                    async getBetItems(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`, `sportGroup=${e.SportGroup}`];
                        return e.LastTx > 0 && t.push(`lastTx=${e.LastTx}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.agentBaseUrl}/bet-items?${t.join("&")}`)
                    }
                    async getSystemParlayDetails(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/parlay/system-parlay?refNo=${e.RefNo}`)
                    }
                    async getRNGBetItems(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/rng/bet-items?refNo=${e.RefNo}`)
                    }
                }
            },
            7899: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(1013)),
                    i = r(n(1511)),
                    o = r(n(5109)),
                    a = r(n(43)),
                    u = r(n(8225)),
                    l = r(n(5226)),
                    c = r(n(4969)),
                    f = r(n(6202)),
                    d = r(n(7809));
                t.default = class {
                    constructor() {
                        this.shareHolder = new o.default, this.betLimit = new s.default, this.report = new i.default, this.league = new u.default, this.team = new a.default, this.match = new l.default, this.wallet = new f.default, this.logging = new c.default, this.maintenance = new d.default
                    }
                    get ShareHolder() {
                        return this.shareHolder
                    }
                    get BetLimit() {
                        return this.betLimit
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
                    get Logging() {
                        return this.logging
                    }
                    get Wallet() {
                        return this.wallet
                    }
                    get Maintenance() {
                        return this.maintenance
                    }
                }
            },
            5109: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/share-holder/agent`
                    }
                    async getUserShareHolder(e) {
                        const t = !0 === e.IncludeParent;
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/get-user?userId=${e.UserId}&includeParent=${t}`)
                    }
                    async getUserAncestorsShareHolder(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/get-user-ancestors?userId=${e.UserId}`)
                    }
                    async updateUserShareHolder(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/update-user`, e)
                    }
                }
            },
            43: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/team`
                    }
                    async getTeamName(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/name?teamId=${e.TeamId}`)
                    }
                }
            },
            6202: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/wallet/agent`
                    }
                    async getPlayerBalance(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/player-balance?userId=${e.UserId}`)
                    }
                    async resetPlayerBalance(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/reset-player-balance`, {
                            UserId: e.UserId
                        })
                    }
                }
            },
            5877: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Dealer = void 0;
                const r = n(35);
                t.Dealer = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/games/agent/dealers`
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}`, e)
                    }
                    async list(e) {
                        const t = [];
                        return e && (e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/list?${t.join("&")}`)
                    }
                    async update(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.Id}`, {
                            Code: e.Code,
                            FullName: e.FullName,
                            Avatar: e.Avatar
                        })
                    }
                }
            },
            9093: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(6695)),
                    i = r(n(5839));
                t.default = class {
                    constructor() {
                        this._sedieGame = new i.default, this._politics = new s.default
                    }
                    get Sedie() {
                        return this._sedieGame
                    }
                    get Politics() {
                        return this._politics
                    }
                }
            },
            1554: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/reports/agent/bookkeeping`
                    }
                    async start(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/start`, e)
                    }
                }
            },
            2717: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/events/agent/events`
                    }
                    async current() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/current`)
                    }
                    async updateProperties(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/info`, e)
                    }
                    async updateResults(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/results`, e)
                    }
                }
            },
            5137: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/reports/gameStats`
                    }
                    async current() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/current`)
                    }
                }
            },
            3430: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/events/agent/parameters`
                    }
                    async list() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                    async updateOdds(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/update-odds`, {
                            Parameters: e
                        })
                    }
                    async updateStatus(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/update-status`, e)
                    }
                }
            },
            6695: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(7885)),
                    i = n(35),
                    o = r(n(3430)),
                    a = r(n(2717)),
                    u = r(n(1554)),
                    l = r(n(1387)),
                    c = r(n(5137)),
                    f = r(n(5166));
                t.default = class {
                    constructor() {
                        this._event = new a.default, this._parameter = new o.default, this._bookKeeping = new u.default, this._report = new l.default, this._gameStats = new c.default, this._userGame = new f.default
                    }
                    get Event() {
                        return this._event
                    }
                    get BookKeeping() {
                        return this._bookKeeping
                    }
                    get Parameter() {
                        return this._parameter
                    }
                    get Report() {
                        return this._report
                    }
                    get GameStats() {
                        return this._gameStats
                    }
                    get UserGame() {
                        return this._userGame
                    }
                    get Realtime() {
                        if (null == i.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == i.Lotus.Realtime.Client.auth || !i.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this._politicsRealtime || (this._politicsRealtime = new s.default), this._politicsRealtime
                    }
                }
            },
            7885: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187);
                class s extends r.EventEmitter {
                    constructor() {
                        super()
                    }
                    configure() {}
                    async subcribe(e) {}
                    async unsubscribe(e) {}
                }
                t.default = s
            },
            7853: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/reports/agent/outstanding`
                    }
                    async getUserReportGroupByBetType(e) {
                        const t = [];
                        return e && e.UserId && t.push(`userId=${e.UserId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-bet-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [];
                        return e && (e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getBetItems(e) {
                        const t = [`userId=${e.UserId}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                }
            },
            1387: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(7853)),
                    i = r(n(1057));
                t.default = class {
                    constructor() {
                        this.outstanding = new s.default, this.statement = new i.default
                    }
                    get Outstanding() {
                        return this.outstanding
                    }
                    get Statement() {
                        return this.statement
                    }
                }
            },
            1057: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/reports/agent/statements`
                    }
                    async getBetItems(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                }
            },
            5166: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/events/agent/user-games`
                    }
                    async getUserGame(e) {
                        const t = !0 === e.IncludeParent;
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}?includeParent=${t}`)
                    }
                    async updateUserGame(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, e)
                    }
                }
            },
            6818: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/games/agent/area`
                    }
                    async getAreas(e) {
                        const t = [];
                        return e && (e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/list?${t.join("&")}`)
                    }
                    async updateProperties(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/properties`, e)
                    }
                    async updateStatus(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/status`, e)
                    }
                }
            },
            2959: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/dealers/agent/bookkeeping`
                    }
                    async redo(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/redo`, e)
                    }
                    async cancelGame(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/cancel-game`, e)
                    }
                }
            },
            2069: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/dealers/dealer`
                    }
                    async startNewGame(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/start-new-game`, e)
                    }
                    async updatePlayGame(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/game-play`, e)
                    }
                    async updateEndGame(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/game-end`, e)
                    }
                    async checkIn(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/check-in`, e)
                    }
                    async changeEquipment(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/change-equipment`, e)
                    }
                    async updateAreaPaused(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/area-paused`, e)
                    }
                    async updateAreaReserving(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/area-reserving`, e)
                    }
                    async joinGame(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/join-game`, e)
                    }
                    async cancelGame(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/cancel-game`, e)
                    }
                    async snapshotGameResult(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/snapshot-game-result`, e)
                    }
                }
            },
            9959: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/games/agent/games`
                    }
                    async getGamesByAreaNumberDate(e) {
                        const t = [`areaNumber=${e.AreaNumber}`];
                        return e.GameNumber && t.push(`gameNumber=${e.GameNumber}`), e.GameRound > 0 && t.push(`gameRound=${e.GameRound}`), e.Date && t.push(`date=${e.Date}`), e.IncludedGameStats && t.push(`includedGameStats=${e.IncludedGameStats}`), e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/list-by-area-date?${t.join("&")}`)
                    }
                    async updateGameResult(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/game-result`, e)
                    }
                }
            },
            2686: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/reports/agent/game-stats`
                    }
                    async getStatsByRound(e) {
                        const t = [`areaNumber=${e.AreaNumber}`, `gameNumber=${e.GameNumber}`, `gameRound=${e.GameRound}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/stats-by-round?${t.join("&")}`)
                    }
                }
            },
            169: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/logs/agent`
                    }
                    async searchGameActivity(e) {
                        const t = [`areaNumber=${e.AreaNumber}`, `gameNumber=${e.GameNumber}`, `gameRound=${e.GameRound}`, `size=${e.Size}`, `page=${e.Page}`];
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/games/search?${t.join("&")}`)
                    }
                    async searchGameActivityByUser(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `username=${e.Username}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.ActivityType >= 0 && t.push(`activityType=${e.ActivityType}`), await r.Lotus.RestClient.get(`${this.baseUrl}/games/search-by-user?${t.join("&")}`)
                    }
                }
            },
            951: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/games/agent/parameters`
                    }
                    async getParameters() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                    async updateProperties(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}`, e)
                    }
                }
            },
            904: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/reports/agent/statements`
                    }
                    async getBetItems(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                    async getBetItemsByGame(e) {
                        const t = [`areaNumber=${e.AreaNumber}`, `gameNumber=${e.GameNumber}`, `gameRound=${e.GameRound}`];
                        return e.BetType >= 0 && t.push(`betType=${e.BetType}`), e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items-by-game?${t.join("&")}`)
                    }
                }
            },
            5839: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(2069)),
                    i = r(n(9705)),
                    o = n(35),
                    a = r(n(2959)),
                    u = r(n(9959)),
                    l = r(n(6818)),
                    c = r(n(951)),
                    f = r(n(904)),
                    d = r(n(2686)),
                    p = r(n(169));
                t.default = class {
                    constructor() {
                        this._dealer = new s.default, this._bookKeeping = new a.default, this._game = new u.default, this._area = new l.default, this._parameter = new c.default, this._report = new f.default, this._gameStats = new d.default, this._logging = new p.default
                    }
                    get Dealer() {
                        return this._dealer
                    }
                    get BookKeeping() {
                        return this._bookKeeping
                    }
                    get Game() {
                        return this._game
                    }
                    get Area() {
                        return this._area
                    }
                    get Parameter() {
                        return this._parameter
                    }
                    get Report() {
                        return this._report
                    }
                    get GameStats() {
                        return this._gameStats
                    }
                    get Logging() {
                        return this._logging
                    }
                    get Realtime() {
                        if (null == o.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == o.Lotus.Realtime.Client.auth || !o.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this._sedieRealtime || (this._sedieRealtime = new i.default), this._sedieRealtime
                    }
                }
            },
            9705: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    s = n(35),
                    i = n(9641),
                    o = n(8659);
                class a extends r.EventEmitter {
                    constructor() {
                        super()
                    }
                    configure() {}
                    async subcribe(e) {
                        this.areaChannel = s.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_SEN_CASINO_GAMETYPE_AREANUMBER}:${o.GameType.Sedie}:${e.AreaNumber}`), this.areaChannel.subscribe((t => {
                            this.emit(`area:${e.AreaNumber}:event:${t.name}`, t.data, t), console.log(`event=${t.name} data=${JSON.stringify(t.data)}`)
                        }))
                    }
                    async unsubscribe(e) {
                        null !== this.areaChannel && this.areaChannel.unsubscribe()
                    }
                }
                t.default = a
            },
            6946: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/logs/agent`
                    }
                    async searchShareHolderActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), await r.Lotus.RestClient.get(`${this.baseUrl}/share-holder/search?${t.join("&")}`)
                    }
                    async searchUserGameActivity(e) {
                        const t = [`from=${encodeURIComponent(e.From)}`, `to=${encodeURIComponent(e.To)}`, `size=${e.Size}`, `page=${e.Page}`];
                        return e.Username && t.push(`username=${e.Username}`), e.UpdateUsername && t.push(`updateUsername=${e.UpdateUsername}`), e.ActivityType >= 0 && t.push(`activityType=${e.ActivityType}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-game/search?${t.join("&")}`)
                    }
                }
            },
            9637: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/reports/agent/player-winlose`
                    }
                    async getMyPlayersReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/my-players-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByGameType(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-game-type?${t.join("&")}`)
                    }
                }
            },
            9468: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(1771)),
                    i = r(n(9637));
                t.default = class {
                    constructor() {
                        this._statement = new s.default, this._playerWinlose = new i.default
                    }
                    get Statement() {
                        return this._statement
                    }
                    get PlayerWinLose() {
                        return this._playerWinlose
                    }
                }
            },
            1771: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/reports/agent/statements`
                    }
                    async getUserReportGroupByGameType(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/user-game-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByGameType(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-game-type?${t.join("&")}`)
                    }
                }
            },
            8882: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(9093)),
                    i = n(5877),
                    o = n(5725),
                    a = n(8743),
                    u = r(n(9468)),
                    l = r(n(6946));
                t.default = class {
                    constructor() {
                        this._games = new s.default, this._dealer = new i.Dealer, this._shareHolder = new o.ShareHolder, this._userGame = new a.UserGame, this._report = new u.default, this._logging = new l.default
                    }
                    get Games() {
                        return this._games
                    }
                    get Dealer() {
                        return this._dealer
                    }
                    get ShareHolder() {
                        return this._shareHolder
                    }
                    get UserGame() {
                        return this._userGame
                    }
                    get Report() {
                        return this._report
                    }
                    get Logging() {
                        return this._logging
                    }
                }
            },
            5725: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ShareHolder = void 0;
                const r = n(35);
                t.ShareHolder = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/games/agent/share-holders`
                    }
                    async getUserShareHolder(e) {
                        const t = !0 === e.IncludeParent;
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}?includeParent=${t}`)
                    }
                    async getAncestorsShareHolderOverview(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}/ancestors`)
                    }
                    async updateUserShareHolder(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, {
                            Percent: e.Percent,
                            ParentPercent: e.ParentPercent,
                            Fixed: e.Fixed,
                            CommissionPercent: e.CommissionPercent
                        })
                    }
                }
            },
            8743: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UserGame = void 0;
                const r = n(35);
                t.UserGame = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/games/agent/user-games`
                    }
                    async getUserGame(e) {
                        const t = !0 === e.IncludeParent;
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}?includeParent=${t}`)
                    }
                    async updateUserGame(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, e)
                    }
                    async resetPlayerWinLoseStats(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/${e.UserId}/reset-player-wl-stats`)
                    }
                }
            },
            7753: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
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
            3888: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(2509)),
                    i = n(35);
                class o extends s.default {
                    constructor(e) {
                        super({
                            username: e.username,
                            storage: e.storage,
                            userPoolId: i.Lotus.Config.UserPoolId,
                            userPoolClientId: i.Lotus.Config.UserPoolClientId,
                            advancedSecurityDataCollectionFlag: i.Lotus.Config.AdvancedSecurityDataCollectionFlag
                        })
                    }
                    async authenticate(e) {
                        return await this.authenticateInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/sign-in`,
                            username: e.username,
                            password: e.password,
                            scope: "backend"
                        })
                    }
                    async completeNewPassword(e) {
                        return await this.completeNewPasswordInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/complete-new-password`,
                            newPassword: e.newPassword
                        })
                    }
                    async confirmSignIn(e) {
                        return await this.confirmSignInInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/confirm-sign-in`,
                            code: e.code
                        })
                    }
                    async getAblyToken() {
                        return await i.Lotus.RestClient.post(`${i.Lotus.Config.Urls.Identity}/auth/realtime`)
                    }
                    async refreshSession(e) {
                        return await this.refreshSessionInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/refresh-token`,
                            refreshToken: e
                        })
                    }
                    async profile(e) {
                        return await this.profileInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/users/profile`,
                            bypassCache: e.bypassCache
                        })
                    }
                    async changePassword(e) {
                        const t = this.signInUserSession.getAccessToken().getJwtToken();
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/password`, {
                            AccessToken: t,
                            Password: e.password,
                            NewPassword: e.newPassword
                        })
                    }
                    async changePreferredUsername(e) {
                        const t = this.signInUserSession.getAccessToken().getJwtToken();
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/preferred-username`, {
                            AccessToken: t,
                            NewName: e.name
                        })
                    }
                    async checkPreferredUsername(e) {
                        return await i.Lotus.RestClient.post(`${i.Lotus.Config.Urls.Identity}/users/check-preferred-username`, {
                            PreferredUsername: e.name
                        })
                    }
                    async checkUsername(e) {
                        return await i.Lotus.RestClient.post(`${i.Lotus.Config.Urls.Identity}/users/check-username`, {
                            Username: e.name
                        })
                    }
                    async create(e) {
                        let t = {
                            Username: e.Username,
                            Password: e.Password
                        };
                        return e.FullName && (t.FullName = e.FullName), e.About && (t.About = e.About), await i.Lotus.RestClient.post(`${i.Lotus.Config.Urls.Identity}/users/create`, t)
                    }
                    async setUserPassword(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.userId}/password`, {
                            Password: e.password,
                            Permanent: e.permanent
                        })
                    }
                    async getChildren(e) {
                        let t = [];
                        return e.UserId && t.push(`userId=${e.UserId}`), e.Status && t.push(`status=${e.Status}`), e.Page && t.push(`page=${e.Page}`), e.Size && t.push(`size=${e.Size}`), await i.Lotus.RestClient.get(`${i.Lotus.Config.Urls.Identity}/users/children?${t.join("&")}`)
                    }
                    async getDescendantsByLevel(e) {
                        let t = [`level=${e.Level}`];
                        return e.SortField && t.push(`sortField=${e.SortField}`), e.SortOrder && t.push(`sortOrder=${e.SortOrder}`), e.Page && t.push(`page=${e.Page}`), e.Size && t.push(`size=${e.Size}`), await i.Lotus.RestClient.get(`${i.Lotus.Config.Urls.Identity}/users/descendants-by-level?${t.join("&")}`)
                    }
                    async searchPaging(e) {
                        let t = [`matchName=${e.MatchName}`];
                        return e.Page && t.push(`page=${e.Page}`), e.Size && t.push(`size=${e.Size}`), await i.Lotus.RestClient.get(`${i.Lotus.Config.Urls.Identity}/users/search/paging?${t.join("&")}`)
                    }
                    async searchLite(e) {
                        let t = [`matchName=${e.MatchName}`];
                        return e.Level && t.push(`level=${e.Level}`), await i.Lotus.RestClient.get(`${i.Lotus.Config.Urls.Identity}/users/search/lite?${t.join("&")}`)
                    }
                    async generateTOTPSecretCode() {
                        return this.generateTOTPSecretCodeInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/mfa/generate-totp-secret-code`
                        })
                    }
                    async enableMFA(e) {
                        return this.enableMFAInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/mfa/enable`,
                            code: e.code
                        })
                    }
                    async disableMFA(e) {
                        return this.disableMFAInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/mfa/disable`,
                            code: e.code
                        })
                    }
                    async setUserRequiredMFA(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/mfa/${e.userId}/required`, {
                            MfaRequired: e.mfaRequired
                        })
                    }
                    async disableUserMFA(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/mfa/${e.userId}/disable`, {})
                    }
                    async updateProfile(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/profile`, {
                            FullName: e.fullName,
                            About: e.about
                        })
                    }
                    async updateUserProfile(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.userId}/profile`, {
                            FullName: e.fullName,
                            About: e.about
                        })
                    }
                    async getAncestors(e) {
                        return await i.Lotus.RestClient.get(`${i.Lotus.Config.Urls.Identity}/users/${e.userId}/ancestors`)
                    }
                    async enableUser(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.userId}/status`, {
                            Status: 1
                        })
                    }
                    async disableUser(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.userId}/status`, {
                            Status: 0
                        })
                    }
                    async suspend(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.UserId}/suspend`)
                    }
                    async unsuspend(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.UserId}/unsuspend`)
                    }
                    async block(e) {
                        let t = {};
                        return !0 === e.ResetDownlineCreditLimit && (t = {
                            ResetDownlineCreditLimit: e.ResetDownlineCreditLimit
                        }), await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.UserId}/block`, t)
                    }
                    async unblock(e) {
                        let t = {};
                        return !0 === e.IncludeDownlineUsers && (t = {
                            IncludeDownlineUsers: e.IncludeDownlineUsers
                        }), await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/${e.UserId}/unblock`, t)
                    }
                    async forceSignOut(e) {
                        return await i.Lotus.RestClient.post(`${i.Lotus.Config.Urls.Identity}/users/${e.UserId}/force-sign-out`, e)
                    }
                    async signOut() {
                        i.Lotus.User && i.Lotus.User.Realtime && i.Lotus.User.Realtime.leave();
                        const e = this.signInUserSession.getAccessToken().getJwtToken();
                        null != e && await super.signOutInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/sign-out`,
                            accessToken: e
                        })
                    }
                }
                t.default = o
            },
            1551: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Identity}/sub-users`
                    }
                    async getAll() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                    async create(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/create`, {
                            Username: e.Username,
                            Password: e.Password,
                            FullName: e.FullName
                        })
                    }
                    async setPassword(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}/password`, {
                            Password: e.Password,
                            Permanent: e.Permanent
                        })
                    }
                    async setRequiredMFA(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}/mfa/required`, {
                            MfaRequired: e.MfaRequired
                        })
                    }
                    async disableMfa(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}/mfa/disable`)
                    }
                    async enable(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}/status`, {
                            Status: 1
                        })
                    }
                    async disable(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}/status`, {
                            Status: 0
                        })
                    }
                    async setAcl(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}/acl`, {
                            Acl: e.Acl
                        })
                    }
                    async updateProfile(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}/profile`, {
                            FullName: e.FullName
                        })
                    }
                }
            },
            4480: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(1115)),
                    i = r(n(3888)),
                    o = r(n(7021)),
                    a = r(n(1551)),
                    u = r(n(2375)),
                    l = r(n(4500)),
                    c = n(35),
                    f = r(n(5866)),
                    d = r(n(1434)),
                    p = r(n(9158));
                t.default = class {
                    constructor() {
                        this.cognitorUser = null, this.sessionValid = !1, this.storage = (new s.default).getStorage(), this.subUser = new a.default, this.userTag = new u.default, this.wallet = new f.default, this.userProduction = new d.default, this.userOnline = new p.default
                    }
                    get Current() {
                        if (!this.cognitorUser) throw new Error("Current user is not instance. Please check authentication firstly.");
                        if (!1 === this.sessionValid) throw new Error("Please sign in before using User.Current");
                        return this.cognitorUser
                    }
                    get SubUser() {
                        return this.subUser
                    }
                    get UserTag() {
                        return this.userTag
                    }
                    get Wallet() {
                        return this.wallet
                    }
                    get UserProduction() {
                        return this.userProduction
                    }
                    get UserOnline() {
                        return this.userOnline
                    }
                    async authenticate(e) {
                        const t = new i.default({
                                username: e.username,
                                storage: this.storage
                            }),
                            n = await t.authenticate({
                                username: e.username,
                                password: e.password
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
                            const n = new i.default({
                                username: t,
                                storage: this.storage
                            });
                            return await n.getSession(), this.cognitorUser = n, this.sessionValid = !0, !0
                        } catch (e) {
                            return !1
                        }
                    }
                    get Realtime() {
                        if (null == c.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == c.Lotus.Realtime.Client.auth || !c.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new l.default), this.realtime
                    }
                }
            },
            9158: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Identity}/users/user-online`
                    }
                    async listDownline(e) {
                        const t = [];
                        return e.Size > 0 && e.Page > 0 && (t.push(`size=${e.Size}`), t.push(`page=${e.Page}`)), e.Level > 0 && t.push(`level=${e.Level}`), await r.Lotus.RestClient.get(`${this.baseUrl}/list-downline?${t.join("&")}`)
                    }
                    async counterGroupByLevel() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/counter-group-by-level`)
                    }
                    async counter() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/counter`)
                    }
                }
            },
            1434: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                var s;
                t.default = class {
                        constructor() {}
                        get baseUrl() {
                            return `${r.Lotus.Config.Urls.Identity}/user-production/agent`
                        }
                        async getProducts() {
                            return await r.Lotus.RestClient.get(`${this.baseUrl}`)
                        }
                        async getUserProducts(e) {
                            const t = !0 === e.IncludeParent;
                            return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}?includeParent=${t}`)
                        }
                        async updateUserProduct(e) {
                            let t = {};
                            return e.AddProducts && (t.AddProducts = e.AddProducts, t.AddProductForDescendants = !0 === e.AddProductForDescendants), e.RemoveProducts && (t.RemoveProducts = e.RemoveProducts), await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, t)
                        }
                    },
                    function(e) {
                        e[e.TraditionalLottery = 0] = "TraditionalLottery", e[e.CompanyLottery = 1] = "CompanyLottery", e[e.CompanyCasino = 2] = "CompanyCasino", e[e.WMCasino = 100] = "WMCasino"
                    }(s || (s = {}))
            },
            4500: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    s = n(9641),
                    i = n(35);
                class o extends r.EventEmitter {
                    constructor() {
                        super(), this.generalNotificationChannel = null, this.selfChannel = null, this.ancestorsChannels = []
                    }
                    configure() {}
                    subscribeAncestorsChannels(e) {
                        let t = null;
                        const n = e.ancestors.filter((e => e.length > 0)).slice(1);
                        for (let e = 0; e < n.length; e++) n[e] && (t = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.IDENTITY_ANCESTOR_USERID}:${n[e]}`), t.subscribe((e => {
                            this.emit(`${s.RealtimeLocalChannelName.ANCESTOR}:event:${e.name}`, e.data)
                        })), this.ancestorsChannels.push(t))
                    }
                    subscribeSelfChannel() {
                        this.selfChannel = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.SELF}:${i.Lotus.Realtime.Client.auth.clientId}`), this.selfChannel.subscribe((e => {
                            this.emit(`${s.RealtimeLocalChannelName.SELF}:event:${e.name}`, e.data), console.log(`event=${e.name} data=${JSON.stringify(e.data)}`)
                        }))
                    }
                    subscribeGeneralChannel() {
                        this.generalNotificationChannel = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.GENERAL_NOTIFICATION_SECTION_AGENT}`), this.generalNotificationChannel.subscribe((e => {
                            this.emit(`${s.RealtimeLocalChannelName.GENERAL}:event:${e.name}`, e.data), console.log(`event=${e.name} data=${JSON.stringify(e.data)}`)
                        }))
                    }
                    async subcribe() {
                        const e = (await i.Lotus.User.Current.getSession()).getIdToken().getUserPath();
                        e ? this.subscribeAncestorsChannels({
                            ancestors: e.split(",")
                        }) : console.error("Không tìm thấy thông tin của tài khoản "), this.subscribeSelfChannel(), this.subscribeGeneralChannel()
                    }
                    async leave() {
                        null !== this.selfChannel && this.selfChannel.detach(), null !== this.generalNotificationChannel && this.generalNotificationChannel.detach(), null !== this.ancestorsChannels && this.ancestorsChannels.forEach((e => {
                            e.detach()
                        }))
                    }
                }
                t.default = o
            },
            2375: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Identity}/user-tags`
                    }
                    async getTagged() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/tagged`)
                    }
                    async getChildrenTags() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/children`)
                    }
                    async deleteChildTag(e) {
                        return await r.Lotus.RestClient.delete(`${this.baseUrl}`, {
                            UserId: e.UserId
                        })
                    }
                    async tag(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}`, {
                            UserId: e.UserId,
                            Tags: e.Tags
                        })
                    }
                }
            },
            5866: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Identity}/wallets/agent`
                    }
                    async getWallet(e) {
                        const t = [];
                        return e && e.UserId && t.push(`userId=${e.UserId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/user-wallet?${t.join("&")}`)
                    }
                    async updateCreditLimit(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/credit-limit`, {
                            UserId: e.UserId,
                            CreditLimit: e.CreditLimit
                        })
                    }
                    async updatePaymentMethod(e) {
                        const t = {
                            UserId: e.UserId,
                            PaymentMethod: e.PaymentMethod
                        };
                        return e.PlayerPaymentDates && (t.PlayerPaymentDates = e.PlayerPaymentDates), await r.Lotus.RestClient.put(`${this.baseUrl}/payment-method`, t)
                    }
                    async settle(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/settle`, {
                            UserId: e.UserId
                        })
                    }
                }
            },
            8058: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.WMCasino}/games/agent/maintenance`
                    }
                    async getMaintenance() {
                        return await r.Lotus.RestClient.get(this.baseUrl)
                    }
                    async updateMaintenance(e) {
                        return await r.Lotus.RestClient.put(this.baseUrl, e)
                    }
                }
            },
            9915: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(336));
                t.default = class {
                    constructor() {
                        this.statement = new s.default
                    }
                    get Statement() {
                        return this.statement
                    }
                }
            },
            336: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.WMCasino}/reports/agent/statements`
                    }
                    async getUserReportGroupByGameType(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/user-game-type?${t.join("&")}`)
                    }
                    async getChildrenReportGroupByUser(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.ParentUserId && t.push(`parentUserId=${e.ParentUserId}`), e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.Size > 0 && t.push(`size=${e.Size}`), e.Page > 0 && t.push(`page=${e.Page}`), await r.Lotus.RestClient.get(`${this.baseUrl}/children-user?${t.join("&")}`)
                    }
                    async getPlayerReportGroupByGameType(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`];
                        return e.GameTypes && e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/player-game-type?${t.join("&")}`)
                    }
                    async getBetItems(e) {
                        const t = [`userId=${e.UserId}`, `from=${e.From}`, `to=${e.To}`, `gameType=${e.GameType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                }
            },
            7268: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.WMCasino}/games/agent/share-holders`
                    }
                    async getUserShareHolder(e) {
                        const t = !0 === e.IncludeParent;
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}?includeParent=${t}`)
                    }
                    async getAncestorsShareHolderOverview(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}/ancestors`)
                    }
                    async updateUserShareHolder(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, {
                            Percent: e.Percent,
                            ParentPercent: e.ParentPercent,
                            Fixed: e.Fixed,
                            CommissionPercent: e.CommissionPercent
                        })
                    }
                }
            },
            7109: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(35);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.WMCasino}/games/agent/user-games`
                    }
                    async getUserGame(e) {
                        const t = !0 === e.IncludeParent;
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.UserId}?includeParent=${t}`)
                    }
                    async updateUserGame(e) {
                        let t = {
                            MaxWinAmount: e.MaxWinAmount,
                            MaxLoseAmount: e.MaxLoseAmount
                        };
                        return e.PlayerBetLimits && (t.PlayerBetLimits = e.PlayerBetLimits), await r.Lotus.RestClient.put(`${this.baseUrl}/${e.UserId}`, t)
                    }
                    async resetPlayerWinLoseStats(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/${e.UserId}/reset-player-wl-stats`)
                    }
                    async enablePlayerBet(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/${e.UserId}/enable-player-bet`)
                    }
                }
            },
            5912: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(7109)),
                    i = r(n(7268)),
                    o = r(n(9915)),
                    a = r(n(8058));
                t.default = class {
                    constructor() {
                        this.userGame = new s.default, this.shareHolder = new i.default, this.report = new o.default, this.maintenance = new a.default
                    }
                    get UserGame() {
                        return this.userGame
                    }
                    get ShareHolder() {
                        return this.shareHolder
                    }
                    get Report() {
                        return this.report
                    }
                    get Maintenance() {
                        return this.maintenance
                    }
                }
            },
            35: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Lotus = void 0;
                const r = n(5883);
                let s = null;
                s || (s = new r.LotusClass);
                const i = s;
                t.Lotus = i
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
                const s = r(n(1115)),
                    i = r(n(7021)),
                    o = n(4816);
                t.default = class {
                    constructor(e) {
                        this.username = e.username, this.storage = e.storage || (new s.default).getStorage(), this.userPoolId = e.userPoolId, this.userPoolClientId = e.userPoolClientId, this.advancedSecurityDataCollectionFlag = e.advancedSecurityDataCollectionFlag, this.signInUserSession = null, this.keyPrefix = "Lotus", this.userDataKey = `${this.keyPrefix}.${this.username}.userData`
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
                        return new i.default({
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
                        const s = new o.IdToken(this.storage.getItem(e)),
                            a = new o.AccessToken(this.storage.getItem(t)),
                            u = new o.RefreshToken(this.storage.getItem(n)),
                            l = parseInt(this.storage.getItem(r), 0) || 0,
                            c = new i.default({
                                idToken: s,
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
                        const s = await e.post(t.url, n);
                        e.useAuthorizationInterceptor();
                        return s.ChallengeName ? (this.cacheChallenge(s.ChallengeName, s.Session), {
                            RequireAction: s.ChallengeName
                        }) : (this.signInUserSession = this.getUserSession({
                            idToken: s.IdToken,
                            accessToken: s.AccessToken,
                            refreshToken: s.RefreshToken
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
                            const s = await e.post(t.url, n);
                            return e.useAuthorizationInterceptor(), Object.prototype.hasOwnProperty.call(s, "RefreshToken") || (s.RefreshToken = t.refreshToken.getToken()), this.signInUserSession = this.getUserSession({
                                idToken: s.IdToken,
                                accessToken: s.AccessToken,
                                refreshToken: s.RefreshToken
                            }), this.cacheTokens(), this.signInUserSession
                        } catch (e) {
                            throw "NotAuthorizedException" === e.code && this.clearCachedUser(), e
                        }
                    }
                    async completeNewPasswordInternal(e, t) {
                        const n = `${this.keyPrefix}.${this.username}.challengeName`,
                            r = `${this.keyPrefix}.${this.username}.session`,
                            s = this.storage.getItem(n),
                            i = this.storage.getItem(r);
                        if (!s) throw new Error("Challenge Name not found.");
                        if (!i) throw new Error("Session not found.");
                        if ("NEW_PASSWORD_REQUIRED" !== s) throw new Error("Require Action is not NEW_PASSWORD_REQUIRED");
                        let o = {
                            Username: this.username,
                            NewPassword: t.newPassword,
                            Session: i
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
                            s = this.storage.getItem(n),
                            i = this.storage.getItem(r);
                        if (!s) throw new Error("Challenge Name not found.");
                        if (!i) throw new Error("Session not found.");
                        if ("SOFTWARE_TOKEN_MFA" !== s) throw new Error("Require Action is not SOFTWARE_TOKEN_MFA");
                        const o = {
                            Username: this.username,
                            Session: i,
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
                            s = `${this.keyPrefix}.LastAuthUser`;
                        this.storage.setItem(e, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(t, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(n, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(r, `${this.signInUserSession.getClockDrift()}`), this.storage.setItem(s, this.username)
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
                            s = `${this.keyPrefix}.LastAuthUser`;
                        this.storage.removeItem(e), this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(s), this.storage.removeItem(r)
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
                class s {
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
                t.JwtToken = s;
                t.IdToken = class extends s {
                    constructor(e = "") {
                        super(e)
                    }
                };
                t.AccessToken = class extends s {
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
            7780: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = r(n(2238));
                t.default = class {
                    constructor() {}
                    parser(e) {
                        var t, n, r, i;
                        if (null == e) return "";
                        null == this.uaParser && (this.uaParser = new s.default);
                        const o = this.uaParser.setUA(e).getResult();
                        if (null == o) return e;
                        const a = null === (t = o.browser) || void 0 === t ? void 0 : t.name,
                            u = null === (n = o.browser) || void 0 === n ? void 0 : n.version,
                            l = null === (r = o.os) || void 0 === r ? void 0 : r.name,
                            c = null === (i = o.os) || void 0 === i ? void 0 : i.version;
                        return null == a || null == u || null == l || null == c ? e : `${a} (${u}) trên ${l} (${c})`
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
                const s = r(n(440));
                class i extends s.default {
                    constructor() {
                        super(!0)
                    }
                    useAuthorizationInterceptor() {}
                }
                t.default = i
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
                const s = r(n(7218)),
                    i = r(n(4486));
                t.default = class {
                    constructor(e = !1) {
                        this.axiosInstance = s.default.create(), !1 === e && this.useAuthorizationInterceptor()
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
                                if (500 === e.status) throw new i.default("InternalServerError", "Có lỗi xảy ra trong quá trình xử lý, quý khách vui lòng thử lại sau");
                                if (504 === e.status) throw new i.default("GatewayTimeout", "Quy trình xử lý dữ liệu lâu hơn dự kiến, quý khách vui lòng thử lại sau");
                                throw e.response.data ? new i.default(e.response.data.code, e.response.data.message) : new i.default("UnhandledException", "Yêu cầu của quý khách thực hiện không thành công, vui lòng thử lại sau")
                            }
                            throw new i.default("NetworkException", "Kết nối mạng của quý khách hiện tại không ổn định, hãy kiểm tra lại")
                        }
                    }
                }
            },
            9641: (e, t) => {
                "use strict";
                var n, r;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.RealtimeLocalChannelName = t.RealtimeChannelName = void 0,
                    function(e) {
                        e.GENERAL_NOTIFICATION_SECTION_AGENT = "general:notification:section:agent", e.GENERAL_NOTIFICATION_SECTION_PLAYER = "general:notification:section:player", e.SELF = "self", e.IDENTITY_ANCESTOR_USERID = "identity:ancestor", e.PRODUCTION_SEN_CASINO_GAMETYPE_AREANUMBER = "product:sen-casino", e.PRODUCTION_LOTTERY = "product:lottery", e.PRODUCTION_LOTTERY789 = "product:lottery789"
                    }(n || (t.RealtimeChannelName = n = {})),
                    function(e) {
                        e.GENERAL = "general", e.SELF = "self", e.ANCESTOR = "ancestor", e.SEN_CASINO = "sen-casino", e.LOTTERY = "lottery", e.LOTTERY789 = "lottery789"
                    }(r || (t.RealtimeLocalChannelName = r = {}))
            },
            8659: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.GameTypeHelper = t.GameType = void 0,
                    function(e) {
                        e[e.Sedie = 0] = "Sedie"
                    }(n || (t.GameType = n = {}));
                const r = {
                    toString(e) {
                        if (e === n.Sedie) return "Xóc Đĩa"
                    }
                };
                t.GameTypeHelper = r
            },
            2238: function(e, t, n) {
                var r;
                ! function(s, i) {
                    "use strict";
                    var o = "function",
                        a = "undefined",
                        u = "object",
                        l = "string",
                        c = "major",
                        f = "model",
                        d = "name",
                        p = "type",
                        h = "vendor",
                        g = "version",
                        m = "architecture",
                        y = "console",
                        b = "mobile",
                        v = "tablet",
                        w = "smarttv",
                        _ = "wearable",
                        C = "embedded",
                        T = "Amazon",
                        R = "Apple",
                        U = "ASUS",
                        O = "BlackBerry",
                        I = "Browser",
                        L = "Chrome",
                        $ = "Firefox",
                        S = "Google",
                        A = "Huawei",
                        P = "LG",
                        E = "Microsoft",
                        k = "Motorola",
                        M = "Opera",
                        x = "Samsung",
                        B = "Sharp",
                        j = "Sony",
                        G = "Xiaomi",
                        N = "Zebra",
                        D = "Facebook",
                        F = "Chromium OS",
                        q = "Mac OS",
                        z = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        H = function(e, t) {
                            return typeof e === l && -1 !== W(t).indexOf(W(e))
                        },
                        W = function(e) {
                            return e.toLowerCase()
                        },
                        V = function(e, t) {
                            if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === a ? e : e.substring(0, 500)
                        },
                        J = function(e, t) {
                            for (var n, r, s, a, l, c, f = 0; f < t.length && !l;) {
                                var d = t[f],
                                    p = t[f + 1];
                                for (n = r = 0; n < d.length && !l && d[n];)
                                    if (l = d[n++].exec(e))
                                        for (s = 0; s < p.length; s++) c = l[++r], typeof(a = p[s]) === u && a.length > 0 ? 2 === a.length ? typeof a[1] == o ? this[a[0]] = a[1].call(this, c) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== o || a[1].exec && a[1].test ? this[a[0]] = c ? c.replace(a[1], a[2]) : i : this[a[0]] = c ? a[1].call(this, c, a[2]) : i : 4 === a.length && (this[a[0]] = c ? a[3].call(this, c.replace(a[1], a[2])) : i) : this[a] = c || i;
                                f += 2
                            }
                        },
                        K = function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === u && t[n].length > 0) {
                                    for (var r = 0; r < t[n].length; r++)
                                        if (H(t[n][r], e)) return "?" === n ? i : n
                                } else if (H(t[n], e)) return "?" === n ? i : n;
                            return e
                        },
                        Q = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        X = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [g, [d, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [g, [d, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [d, g],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [g, [d, M + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [g, [d, M]],
                                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                                [g, [d, "Baidu"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [d, g],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [g, [d, "UC" + I]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                                [g, [d, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [g, [d, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [g, [d, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [g, [d, "Yandex"]],
                                [/slbrowser\/([\w\.]+)/i],
                                [g, [d, "Smart Lenovo " + I]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [d, /(.+)/, "$1 Secure " + I], g
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [g, [d, $ + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [g, [d, M + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [g, [d, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [g, [d, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [g, [d, M + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [g, [d, "MIUI " + I]],
                                [/fxios\/([-\w\.]+)/i],
                                [g, [d, $]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [d, "360 " + I]
                                ],
                                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                                [
                                    [d, /(.+)/, "$1 " + I], g
                                ],
                                [/samsungbrowser\/([\w\.]+)/i],
                                [g, [d, x + " Internet"]],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [d, /_/g, " "], g
                                ],
                                [/metasr[\/ ]?([\d\.]+)/i],
                                [g, [d, "Sogou Explorer"]],
                                [/(sogou)mo\w+\/([\d\.]+)/i],
                                [
                                    [d, "Sogou Mobile"], g
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [d, g],
                                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [d],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [d, D], g
                                ],
                                [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [d, g],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [g, [d, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [g, [d, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [g, [d, L + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [d, L + " WebView"], g
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [g, [d, "Android " + I]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [d, g],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [g, [d, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [g, d],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [d, [g, K, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [d, g],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [d, "Netscape"], g
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [g, [d, $ + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [d, g],
                                [/(cobalt)\/([\w\.]+)/i],
                                [d, [g, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [m, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [m, W]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [m, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [m, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [m, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [m, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [m, /ower/, "", W]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [m, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [m, W]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [f, [h, x],
                                    [p, v]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [f, [h, x],
                                    [p, b]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [f, [h, R],
                                    [p, b]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [f, [h, R],
                                    [p, v]
                                ],
                                [/(macintosh);/i],
                                [f, [h, R]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [f, [h, B],
                                    [p, b]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [f, [h, A],
                                    [p, v]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [f, [h, A],
                                    [p, b]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [f, /_/g, " "],
                                    [h, G],
                                    [p, b]
                                ],
                                [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [f, /_/g, " "],
                                    [h, G],
                                    [p, v]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [f, [h, "OPPO"],
                                    [p, b]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [f, [h, "Vivo"],
                                    [p, b]
                                ],
                                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                                [f, [h, "Realme"],
                                    [p, b]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [f, [h, k],
                                    [p, b]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [f, [h, k],
                                    [p, v]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [f, [h, P],
                                    [p, v]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [f, [h, P],
                                    [p, b]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [f, [h, "Lenovo"],
                                    [p, v]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [f, /_/g, " "],
                                    [h, "Nokia"],
                                    [p, b]
                                ],
                                [/(pixel c)\b/i],
                                [f, [h, S],
                                    [p, v]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [f, [h, S],
                                    [p, b]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [f, [h, j],
                                    [p, b]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [f, "Xperia Tablet"],
                                    [h, j],
                                    [p, v]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [f, [h, "OnePlus"],
                                    [p, b]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [f, [h, T],
                                    [p, v]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [f, /(.+)/g, "Fire Phone $1"],
                                    [h, T],
                                    [p, b]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [f, h, [p, v]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [f, [h, O],
                                    [p, b]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [f, [h, U],
                                    [p, v]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [f, [h, U],
                                    [p, b]
                                ],
                                [/(nexus 9)/i],
                                [f, [h, "HTC"],
                                    [p, v]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [h, [f, /_/g, " "],
                                    [p, b]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [f, [h, "Acer"],
                                    [p, v]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [f, [h, "Meizu"],
                                    [p, b]
                                ],
                                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                                [f, [h, "Ulefone"],
                                    [p, b]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [h, f, [p, b]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [h, f, [p, v]],
                                [/(surface duo)/i],
                                [f, [h, E],
                                    [p, v]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [f, [h, "Fairphone"],
                                    [p, b]
                                ],
                                [/(u304aa)/i],
                                [f, [h, "AT&T"],
                                    [p, b]
                                ],
                                [/\bsie-(\w*)/i],
                                [f, [h, "Siemens"],
                                    [p, b]
                                ],
                                [/\b(rct\w+) b/i],
                                [f, [h, "RCA"],
                                    [p, v]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [f, [h, "Dell"],
                                    [p, v]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [f, [h, "Verizon"],
                                    [p, v]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [f, [h, "Barnes & Noble"],
                                    [p, v]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [f, [h, "NuVision"],
                                    [p, v]
                                ],
                                [/\b(k88) b/i],
                                [f, [h, "ZTE"],
                                    [p, v]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [f, [h, "ZTE"],
                                    [p, b]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [f, [h, "Swiss"],
                                    [p, b]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [f, [h, "Swiss"],
                                    [p, v]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [f, [h, "Zeki"],
                                    [p, v]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [h, "Dragon Touch"], f, [p, v]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [f, [h, "Insignia"],
                                    [p, v]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [f, [h, "NextBook"],
                                    [p, v]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [h, "Voice"], f, [p, b]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [h, "LvTel"], f, [p, b]
                                ],
                                [/\b(ph-1) /i],
                                [f, [h, "Essential"],
                                    [p, b]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [f, [h, "Envizen"],
                                    [p, v]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [f, [h, "MachSpeed"],
                                    [p, v]
                                ],
                                [/\btu_(1491) b/i],
                                [f, [h, "Rotor"],
                                    [p, v]
                                ],
                                [/(shield[\w ]+) b/i],
                                [f, [h, "Nvidia"],
                                    [p, v]
                                ],
                                [/(sprint) (\w+)/i],
                                [h, f, [p, b]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [f, /\./g, " "],
                                    [h, E],
                                    [p, b]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [f, [h, N],
                                    [p, v]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [f, [h, N],
                                    [p, b]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [h, [p, w]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [f, /^/, "SmartTV"],
                                    [h, x],
                                    [p, w]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [h, P],
                                    [p, w]
                                ],
                                [/(apple) ?tv/i],
                                [h, [f, R + " TV"],
                                    [p, w]
                                ],
                                [/crkey/i],
                                [
                                    [f, L + "cast"],
                                    [h, S],
                                    [p, w]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [f, [h, T],
                                    [p, w]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [f, [h, B],
                                    [p, w]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [f, [h, j],
                                    [p, w]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [f, [h, G],
                                    [p, w]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [h, f, [p, w]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [h, V],
                                    [f, V],
                                    [p, w]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [p, w]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [h, f, [p, y]],
                                [/droid.+; (shield) bui/i],
                                [f, [h, "Nvidia"],
                                    [p, y]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [f, [h, j],
                                    [p, y]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [f, [h, E],
                                    [p, y]
                                ],
                                [/((pebble))app/i],
                                [h, f, [p, _]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [f, [h, R],
                                    [p, _]
                                ],
                                [/droid.+; (glass) \d/i],
                                [f, [h, S],
                                    [p, _]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [f, [h, N],
                                    [p, _]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [f, [h, D],
                                    [p, _]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [h, [p, C]],
                                [/(aeobc)\b/i],
                                [f, [h, T],
                                    [p, C]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                                [f, [p, b]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [f, [p, v]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [p, v]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [p, b]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [f, [h, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [g, [d, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [g, [d, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [d, g],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [g, d]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [d, g],
                                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                                [d, [g, K, Q]],
                                [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [g, K, Q],
                                    [d, "Windows"]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [g, /_/g, "."],
                                    [d, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [d, q],
                                    [g, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [g, d],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [d, g],
                                [/\(bb(10);/i],
                                [g, [d, O]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [g, [d, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [g, [d, $ + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [g, [d, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [g, [d, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [g, [d, L + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [d, F], g
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [d, g],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [d, "Solaris"], g
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [d, g]
                            ]
                        },
                        Y = function(e, t) {
                            if (typeof e === u && (t = e, e = i), !(this instanceof Y)) return new Y(e, t).getResult();
                            var n = typeof s !== a && s.navigator ? s.navigator : i,
                                r = e || (n && n.userAgent ? n.userAgent : ""),
                                y = n && n.userAgentData ? n.userAgentData : i,
                                w = t ? function(e, t) {
                                    var n = {};
                                    for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                                    return n
                                }(X, t) : X,
                                _ = n && n.userAgent == r;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[d] = i, t[g] = i, J.call(t, r, w.browser), t[c] = typeof(e = t[g]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, _ && n && n.brave && typeof n.brave.isBrave == o && (t[d] = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[m] = i, J.call(e, r, w.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[h] = i, e[f] = i, e[p] = i, J.call(e, r, w.device), _ && !e[p] && y && y.mobile && (e[p] = b), _ && "Macintosh" == e[f] && n && typeof n.standalone !== a && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[f] = "iPad", e[p] = v), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[d] = i, e[g] = i, J.call(e, r, w.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[d] = i, e[g] = i, J.call(e, r, w.os), _ && !e[d] && y && "Unknown" != y.platform && (e[d] = y.platform.replace(/chrome os/i, F).replace(/macos/i, q)), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return r
                            }, this.setUA = function(e) {
                                return r = typeof e === l && e.length > 500 ? V(e, 500) : e, this
                            }, this.setUA(r), this
                        };
                    Y.VERSION = "1.0.37", Y.BROWSER = z([d, g, c]), Y.CPU = z([m]), Y.DEVICE = z([f, h, p, y, b, w, v, _, C]), Y.ENGINE = Y.OS = z([d, g]), typeof t !== a ? (e.exports && (t = e.exports = Y), t.UAParser = Y) : n.amdO ? (r = function() {
                        return Y
                    }.call(t, n, t, e)) === i || (e.exports = r) : typeof s !== a && (s.UAParser = Y);
                    var Z = typeof s !== a && (s.jQuery || s.Zepto);
                    if (Z && !Z.ua) {
                        var ee = new Y;
                        Z.ua = ee.getResult(), Z.ua.get = function() {
                            return ee.getUA()
                        }, Z.ua.set = function(e) {
                            ee.setUA(e);
                            var t = ee.getResult();
                            for (var n in t) Z.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : this)
            },
            7218: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                const {
                    toString: s
                } = Object.prototype, {
                    getPrototypeOf: i
                } = Object, o = (a = Object.create(null), e => {
                    const t = s.call(e);
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
                const p = l("string"),
                    h = l("function"),
                    g = l("number"),
                    m = e => null !== e && "object" == typeof e,
                    y = e => {
                        if ("object" !== o(e)) return !1;
                        const t = i(e);
                        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
                    },
                    b = u("Date"),
                    v = u("File"),
                    w = u("Blob"),
                    _ = u("FileList"),
                    C = u("URLSearchParams");

                function T(e, t, {
                    allOwnKeys: n = !1
                } = {}) {
                    if (null == e) return;
                    let r, s;
                    if ("object" != typeof e && (e = [e]), c(e))
                        for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
                    else {
                        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                            i = s.length;
                        let o;
                        for (r = 0; r < i; r++) o = s[r], t.call(null, e[o], o, e)
                    }
                }

                function R(e, t) {
                    t = t.toLowerCase();
                    const n = Object.keys(e);
                    let r, s = n.length;
                    for (; s-- > 0;)
                        if (r = n[s], t === r.toLowerCase()) return r;
                    return null
                }
                const U = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : n.g,
                    O = e => !f(e) && e !== U;
                const I = (L = "undefined" != typeof Uint8Array && i(Uint8Array), e => L && e instanceof L);
                var L;
                const $ = u("HTMLFormElement"),
                    S = (({
                        hasOwnProperty: e
                    }) => (t, n) => e.call(t, n))(Object.prototype),
                    A = u("RegExp"),
                    P = (e, t) => {
                        const n = Object.getOwnPropertyDescriptors(e),
                            r = {};
                        T(n, ((n, s) => {
                            let i;
                            !1 !== (i = t(n, s, e)) && (r[s] = i || n)
                        })), Object.defineProperties(e, r)
                    },
                    E = "abcdefghijklmnopqrstuvwxyz",
                    k = "0123456789",
                    M = {
                        DIGIT: k,
                        ALPHA: E,
                        ALPHA_DIGIT: E + E.toUpperCase() + k
                    };
                const x = u("AsyncFunction");
                var B = {
                    isArray: c,
                    isArrayBuffer: d,
                    isBuffer: function(e) {
                        return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && h(e.constructor.isBuffer) && e.constructor.isBuffer(e)
                    },
                    isFormData: e => {
                        let t;
                        return e && ("function" == typeof FormData && e instanceof FormData || h(e.append) && ("formdata" === (t = o(e)) || "object" === t && h(e.toString) && "[object FormData]" === e.toString()))
                    },
                    isArrayBufferView: function(e) {
                        let t;
                        return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && d(e.buffer), t
                    },
                    isString: p,
                    isNumber: g,
                    isBoolean: e => !0 === e || !1 === e,
                    isObject: m,
                    isPlainObject: y,
                    isUndefined: f,
                    isDate: b,
                    isFile: v,
                    isBlob: w,
                    isRegExp: A,
                    isFunction: h,
                    isStream: e => m(e) && h(e.pipe),
                    isURLSearchParams: C,
                    isTypedArray: I,
                    isFileList: _,
                    forEach: T,
                    merge: function e() {
                        const {
                            caseless: t
                        } = O(this) && this || {}, n = {}, r = (r, s) => {
                            const i = t && R(n, s) || s;
                            y(n[i]) && y(r) ? n[i] = e(n[i], r) : y(r) ? n[i] = e({}, r) : c(r) ? n[i] = r.slice() : n[i] = r
                        };
                        for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && T(arguments[e], r);
                        return n
                    },
                    extend: (e, t, n, {
                        allOwnKeys: s
                    } = {}) => (T(t, ((t, s) => {
                        n && h(t) ? e[s] = r(t, n) : e[s] = t
                    }), {
                        allOwnKeys: s
                    }), e),
                    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
                    inherits: (e, t, n, r) => {
                        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                            value: t.prototype
                        }), n && Object.assign(e.prototype, n)
                    },
                    toFlatObject: (e, t, n, r) => {
                        let s, o, a;
                        const u = {};
                        if (t = t || {}, null == e) return t;
                        do {
                            for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0;) a = s[o], r && !r(a, e, t) || u[a] || (t[a] = e[a], u[a] = !0);
                            e = !1 !== n && i(e)
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
                    isHTMLForm: $,
                    hasOwnProperty: S,
                    hasOwnProp: S,
                    reduceDescriptors: P,
                    freezeMethods: e => {
                        P(e, ((t, n) => {
                            if (h(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                            const r = e[n];
                            h(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
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
                    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                        return t.toUpperCase() + n
                    })),
                    noop: () => {},
                    toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
                    findKey: R,
                    global: U,
                    isContextDefined: O,
                    ALPHABET: M,
                    generateString: (e = 16, t = M.ALPHA_DIGIT) => {
                        let n = "";
                        const {
                            length: r
                        } = t;
                        for (; e--;) n += t[Math.random() * r | 0];
                        return n
                    },
                    isSpecCompliantForm: function(e) {
                        return !!(e && h(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
                    },
                    toJSONObject: e => {
                        const t = new Array(10),
                            n = (e, r) => {
                                if (m(e)) {
                                    if (t.indexOf(e) >= 0) return;
                                    if (!("toJSON" in e)) {
                                        t[r] = e;
                                        const s = c(e) ? [] : {};
                                        return T(e, ((e, t) => {
                                            const i = n(e, r + 1);
                                            !f(i) && (s[t] = i)
                                        })), t[r] = void 0, s
                                    }
                                }
                                return e
                            };
                        return n(e, 0)
                    },
                    isAsyncFn: x,
                    isThenable: e => e && (m(e) || h(e)) && h(e.then) && h(e.catch)
                };

                function j(e, t, n, r, s) {
                    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s)
                }
                B.inherits(j, Error, {
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
                            config: B.toJSONObject(this.config),
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        }
                    }
                });
                const G = j.prototype,
                    N = {};
                ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
                    N[e] = {
                        value: e
                    }
                })), Object.defineProperties(j, N), Object.defineProperty(G, "isAxiosError", {
                    value: !0
                }), j.from = (e, t, n, r, s, i) => {
                    const o = Object.create(G);
                    return B.toFlatObject(e, o, (function(e) {
                        return e !== Error.prototype
                    }), (e => "isAxiosError" !== e)), j.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o
                };

                function D(e) {
                    return B.isPlainObject(e) || B.isArray(e)
                }

                function F(e) {
                    return B.endsWith(e, "[]") ? e.slice(0, -2) : e
                }

                function q(e, t, n) {
                    return e ? e.concat(t).map((function(e, t) {
                        return e = F(e), !n && t ? "[" + e + "]" : e
                    })).join(n ? "." : "") : t
                }
                const z = B.toFlatObject(B, {}, null, (function(e) {
                    return /^is[A-Z]/.test(e)
                }));

                function H(e, t, n) {
                    if (!B.isObject(e)) throw new TypeError("target must be an object");
                    t = t || new FormData;
                    const r = (n = B.toFlatObject(n, {
                            metaTokens: !0,
                            dots: !1,
                            indexes: !1
                        }, !1, (function(e, t) {
                            return !B.isUndefined(t[e])
                        }))).metaTokens,
                        s = n.visitor || l,
                        i = n.dots,
                        o = n.indexes,
                        a = (n.Blob || "undefined" != typeof Blob && Blob) && B.isSpecCompliantForm(t);
                    if (!B.isFunction(s)) throw new TypeError("visitor must be a function");

                    function u(e) {
                        if (null === e) return "";
                        if (B.isDate(e)) return e.toISOString();
                        if (!a && B.isBlob(e)) throw new j("Blob is not supported. Use a Buffer instead.");
                        return B.isArrayBuffer(e) || B.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                    }

                    function l(e, n, s) {
                        let a = e;
                        if (e && !s && "object" == typeof e)
                            if (B.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
                            else if (B.isArray(e) && function(e) {
                                return B.isArray(e) && !e.some(D)
                            }(e) || (B.isFileList(e) || B.endsWith(n, "[]")) && (a = B.toArray(e))) return n = F(n), a.forEach((function(e, r) {
                            !B.isUndefined(e) && null !== e && t.append(!0 === o ? q([n], r, i) : null === o ? n : n + "[]", u(e))
                        })), !1;
                        return !!D(e) || (t.append(q(s, n, i), u(e)), !1)
                    }
                    const c = [],
                        f = Object.assign(z, {
                            defaultVisitor: l,
                            convertValue: u,
                            isVisitable: D
                        });
                    if (!B.isObject(e)) throw new TypeError("data must be an object");
                    return function e(n, r) {
                        if (!B.isUndefined(n)) {
                            if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                            c.push(n), B.forEach(n, (function(n, i) {
                                !0 === (!(B.isUndefined(n) || null === n) && s.call(t, n, B.isString(i) ? i.trim() : i, r, f)) && e(n, r ? r.concat(i) : [i])
                            })), c.pop()
                        }
                    }(e), t
                }

                function W(e) {
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

                function V(e, t) {
                    this._pairs = [], e && H(e, this, t)
                }
                const J = V.prototype;

                function K(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }

                function Q(e, t, n) {
                    if (!t) return e;
                    const r = n && n.encode || K,
                        s = n && n.serialize;
                    let i;
                    if (i = s ? s(t, n) : B.isURLSearchParams(t) ? t.toString() : new V(t, n).toString(r), i) {
                        const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                    }
                    return e
                }
                J.append = function(e, t) {
                    this._pairs.push([e, t])
                }, J.toString = function(e) {
                    const t = e ? function(t) {
                        return e.call(this, t, W)
                    } : W;
                    return this._pairs.map((function(e) {
                        return t(e[0]) + "=" + t(e[1])
                    }), "").join("&")
                };
                var X = class {
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
                            B.forEach(this.handlers, (function(t) {
                                null !== t && e(t)
                            }))
                        }
                    },
                    Y = {
                        silentJSONParsing: !0,
                        forcedJSONParsing: !0,
                        clarifyTimeoutError: !1
                    },
                    Z = {
                        isBrowser: !0,
                        classes: {
                            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : V,
                            FormData: "undefined" != typeof FormData ? FormData : null,
                            Blob: "undefined" != typeof Blob ? Blob : null
                        },
                        protocols: ["http", "https", "file", "blob", "url", "data"]
                    };
                const ee = "undefined" != typeof window && "undefined" != typeof document,
                    te = (ne = "undefined" != typeof navigator && navigator.product, ee && ["ReactNative", "NativeScript", "NS"].indexOf(ne) < 0);
                var ne;
                const re = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
                var se = {
                    ...Object.freeze({
                        __proto__: null,
                        hasBrowserEnv: ee,
                        hasStandardBrowserWebWorkerEnv: re,
                        hasStandardBrowserEnv: te
                    }),
                    ...Z
                };

                function ie(e) {
                    function t(e, n, r, s) {
                        let i = e[s++];
                        if ("__proto__" === i) return !0;
                        const o = Number.isFinite(+i),
                            a = s >= e.length;
                        if (i = !i && B.isArray(r) ? r.length : i, a) return B.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !o;
                        r[i] && B.isObject(r[i]) || (r[i] = []);
                        return t(e, n, r[i], s) && B.isArray(r[i]) && (r[i] = function(e) {
                            const t = {},
                                n = Object.keys(e);
                            let r;
                            const s = n.length;
                            let i;
                            for (r = 0; r < s; r++) i = n[r], t[i] = e[i];
                            return t
                        }(r[i])), !o
                    }
                    if (B.isFormData(e) && B.isFunction(e.entries)) {
                        const n = {};
                        return B.forEachEntry(e, ((e, r) => {
                            t(function(e) {
                                return B.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
                            }(e), r, n, 0)
                        })), n
                    }
                    return null
                }
                const oe = {
                    transitional: Y,
                    adapter: ["xhr", "http"],
                    transformRequest: [function(e, t) {
                        const n = t.getContentType() || "",
                            r = n.indexOf("application/json") > -1,
                            s = B.isObject(e);
                        s && B.isHTMLForm(e) && (e = new FormData(e));
                        if (B.isFormData(e)) return r && r ? JSON.stringify(ie(e)) : e;
                        if (B.isArrayBuffer(e) || B.isBuffer(e) || B.isStream(e) || B.isFile(e) || B.isBlob(e)) return e;
                        if (B.isArrayBufferView(e)) return e.buffer;
                        if (B.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                        let i;
                        if (s) {
                            if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                                return H(e, new se.classes.URLSearchParams, Object.assign({
                                    visitor: function(e, t, n, r) {
                                        return se.isNode && B.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                                    }
                                }, t))
                            }(e, this.formSerializer).toString();
                            if ((i = B.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                                const t = this.env && this.env.FormData;
                                return H(i ? {
                                    "files[]": e
                                } : e, t && new t, this.formSerializer)
                            }
                        }
                        return s || r ? (t.setContentType("application/json", !1), function(e, t, n) {
                            if (B.isString(e)) try {
                                return (t || JSON.parse)(e), B.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (n || JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function(e) {
                        const t = this.transitional || oe.transitional,
                            n = t && t.forcedJSONParsing,
                            r = "json" === this.responseType;
                        if (e && B.isString(e) && (n && !this.responseType || r)) {
                            const n = !(t && t.silentJSONParsing) && r;
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                if (n) {
                                    if ("SyntaxError" === e.name) throw j.from(e, j.ERR_BAD_RESPONSE, this, null, this.response);
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
                        FormData: se.classes.FormData,
                        Blob: se.classes.Blob
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": void 0
                        }
                    }
                };
                B.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
                    oe.headers[e] = {}
                }));
                var ae = oe;
                const ue = B.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
                const le = Symbol("internals");

                function ce(e) {
                    return e && String(e).trim().toLowerCase()
                }

                function fe(e) {
                    return !1 === e || null == e ? e : B.isArray(e) ? e.map(fe) : String(e)
                }

                function de(e, t, n, r, s) {
                    return B.isFunction(r) ? r.call(this, t, n) : (s && (t = n), B.isString(t) ? B.isString(r) ? -1 !== t.indexOf(r) : B.isRegExp(r) ? r.test(t) : void 0 : void 0)
                }
                class pe {
                    constructor(e) {
                        e && this.set(e)
                    }
                    set(e, t, n) {
                        const r = this;

                        function s(e, t, n) {
                            const s = ce(t);
                            if (!s) throw new Error("header name must be a non-empty string");
                            const i = B.findKey(r, s);
                            (!i || void 0 === r[i] || !0 === n || void 0 === n && !1 !== r[i]) && (r[i || t] = fe(e))
                        }
                        const i = (e, t) => B.forEach(e, ((e, n) => s(e, n, t)));
                        return B.isPlainObject(e) || e instanceof this.constructor ? i(e, t) : B.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? i((e => {
                            const t = {};
                            let n, r, s;
                            return e && e.split("\n").forEach((function(e) {
                                s = e.indexOf(":"), n = e.substring(0, s).trim().toLowerCase(), r = e.substring(s + 1).trim(), !n || t[n] && ue[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                            })), t
                        })(e), t) : null != e && s(t, e, n), this
                    }
                    get(e, t) {
                        if (e = ce(e)) {
                            const n = B.findKey(this, e);
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
                                if (B.isFunction(t)) return t.call(this, e, n);
                                if (B.isRegExp(t)) return t.exec(e);
                                throw new TypeError("parser must be boolean|regexp|function")
                            }
                        }
                    }
                    has(e, t) {
                        if (e = ce(e)) {
                            const n = B.findKey(this, e);
                            return !(!n || void 0 === this[n] || t && !de(0, this[n], n, t))
                        }
                        return !1
                    }
                    delete(e, t) {
                        const n = this;
                        let r = !1;

                        function s(e) {
                            if (e = ce(e)) {
                                const s = B.findKey(n, e);
                                !s || t && !de(0, n[s], s, t) || (delete n[s], r = !0)
                            }
                        }
                        return B.isArray(e) ? e.forEach(s) : s(e), r
                    }
                    clear(e) {
                        const t = Object.keys(this);
                        let n = t.length,
                            r = !1;
                        for (; n--;) {
                            const s = t[n];
                            e && !de(0, this[s], s, e, !0) || (delete this[s], r = !0)
                        }
                        return r
                    }
                    normalize(e) {
                        const t = this,
                            n = {};
                        return B.forEach(this, ((r, s) => {
                            const i = B.findKey(n, s);
                            if (i) return t[i] = fe(r), void delete t[s];
                            const o = e ? function(e) {
                                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
                            }(s) : String(s).trim();
                            o !== s && delete t[s], t[o] = fe(r), n[o] = !0
                        })), this
                    }
                    concat(...e) {
                        return this.constructor.concat(this, ...e)
                    }
                    toJSON(e) {
                        const t = Object.create(null);
                        return B.forEach(this, ((n, r) => {
                            null != n && !1 !== n && (t[r] = e && B.isArray(n) ? n.join(", ") : n)
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
                        const t = (this[le] = this[le] = {
                                accessors: {}
                            }).accessors,
                            n = this.prototype;

                        function r(e) {
                            const r = ce(e);
                            t[r] || (! function(e, t) {
                                const n = B.toCamelCase(" " + t);
                                ["get", "set", "has"].forEach((r => {
                                    Object.defineProperty(e, r + n, {
                                        value: function(e, n, s) {
                                            return this[r].call(this, t, e, n, s)
                                        },
                                        configurable: !0
                                    })
                                }))
                            }(n, e), t[r] = !0)
                        }
                        return B.isArray(e) ? e.forEach(r) : r(e), this
                    }
                }
                pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), B.reduceDescriptors(pe.prototype, (({
                    value: e
                }, t) => {
                    let n = t[0].toUpperCase() + t.slice(1);
                    return {
                        get: () => e,
                        set(e) {
                            this[n] = e
                        }
                    }
                })), B.freezeMethods(pe);
                var he = pe;

                function ge(e, t) {
                    const n = this || ae,
                        r = t || n,
                        s = he.from(r.headers);
                    let i = r.data;
                    return B.forEach(e, (function(e) {
                        i = e.call(n, i, s.normalize(), t ? t.status : void 0)
                    })), s.normalize(), i
                }

                function me(e) {
                    return !(!e || !e.__CANCEL__)
                }

                function ye(e, t, n) {
                    j.call(this, null == e ? "canceled" : e, j.ERR_CANCELED, t, n), this.name = "CanceledError"
                }
                B.inherits(ye, j, {
                    __CANCEL__: !0
                });
                var be = se.hasStandardBrowserEnv ? {
                    write(e, t, n, r, s, i) {
                        const o = [e + "=" + encodeURIComponent(t)];
                        B.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), B.isString(r) && o.push("path=" + r), B.isString(s) && o.push("domain=" + s), !0 === i && o.push("secure"), document.cookie = o.join("; ")
                    },
                    read(e) {
                        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write() {},
                    read: () => null,
                    remove() {}
                };

                function ve(e, t) {
                    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
                        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
                    }(e, t) : t
                }
                var we = se.hasStandardBrowserEnv ? function() {
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
                            const t = B.isString(e) ? r(e) : e;
                            return t.protocol === n.protocol && t.host === n.host
                        }
                }() : function() {
                    return !0
                };

                function _e(e, t) {
                    let n = 0;
                    const r = function(e, t) {
                        e = e || 10;
                        const n = new Array(e),
                            r = new Array(e);
                        let s, i = 0,
                            o = 0;
                        return t = void 0 !== t ? t : 1e3,
                            function(a) {
                                const u = Date.now(),
                                    l = r[o];
                                s || (s = u), n[i] = a, r[i] = u;
                                let c = o,
                                    f = 0;
                                for (; c !== i;) f += n[c++], c %= e;
                                if (i = (i + 1) % e, i === o && (o = (o + 1) % e), u - s < t) return;
                                const d = l && u - l;
                                return d ? Math.round(1e3 * f / d) : void 0
                            }
                    }(50, 250);
                    return s => {
                        const i = s.loaded,
                            o = s.lengthComputable ? s.total : void 0,
                            a = i - n,
                            u = r(a);
                        n = i;
                        const l = {
                            loaded: i,
                            total: o,
                            progress: o ? i / o : void 0,
                            bytes: a,
                            rate: u || void 0,
                            estimated: u && o && i <= o ? (o - i) / u : void 0,
                            event: s
                        };
                        l[t ? "download" : "upload"] = !0, e(l)
                    }
                }
                const Ce = {
                    http: null,
                    xhr: "undefined" != typeof XMLHttpRequest && function(e) {
                        return new Promise((function(t, n) {
                            let r = e.data;
                            const s = he.from(e.headers).normalize();
                            let i, o, {
                                responseType: a,
                                withXSRFToken: u
                            } = e;

                            function l() {
                                e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i)
                            }
                            if (B.isFormData(r))
                                if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv) s.setContentType(!1);
                                else if (!1 !== (o = s.getContentType())) {
                                const [e, ...t] = o ? o.split(";").map((e => e.trim())).filter(Boolean) : [];
                                s.setContentType([e || "multipart/form-data", ...t].join("; "))
                            }
                            let c = new XMLHttpRequest;
                            if (e.auth) {
                                const t = e.auth.username || "",
                                    n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                                s.set("Authorization", "Basic " + btoa(t + ":" + n))
                            }
                            const f = ve(e.baseURL, e.url);

                            function d() {
                                if (!c) return;
                                const r = he.from("getAllResponseHeaders" in c && c.getAllResponseHeaders());
                                ! function(e, t, n) {
                                    const r = n.config.validateStatus;
                                    n.status && r && !r(n.status) ? t(new j("Request failed with status code " + n.status, [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                                }((function(e) {
                                    t(e), l()
                                }), (function(e) {
                                    n(e), l()
                                }), {
                                    data: a && "text" !== a && "json" !== a ? c.response : c.responseText,
                                    status: c.status,
                                    statusText: c.statusText,
                                    headers: r,
                                    config: e,
                                    request: c
                                }), c = null
                            }
                            if (c.open(e.method.toUpperCase(), Q(f, e.params, e.paramsSerializer), !0), c.timeout = e.timeout, "onloadend" in c ? c.onloadend = d : c.onreadystatechange = function() {
                                    c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf("file:")) && setTimeout(d)
                                }, c.onabort = function() {
                                    c && (n(new j("Request aborted", j.ECONNABORTED, e, c)), c = null)
                                }, c.onerror = function() {
                                    n(new j("Network Error", j.ERR_NETWORK, e, c)), c = null
                                }, c.ontimeout = function() {
                                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                                    const r = e.transitional || Y;
                                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new j(t, r.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED, e, c)), c = null
                                }, se.hasStandardBrowserEnv && (u && B.isFunction(u) && (u = u(e)), u || !1 !== u && we(f))) {
                                const t = e.xsrfHeaderName && e.xsrfCookieName && be.read(e.xsrfCookieName);
                                t && s.set(e.xsrfHeaderName, t)
                            }
                            void 0 === r && s.setContentType(null), "setRequestHeader" in c && B.forEach(s.toJSON(), (function(e, t) {
                                c.setRequestHeader(t, e)
                            })), B.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && "json" !== a && (c.responseType = e.responseType), "function" == typeof e.onDownloadProgress && c.addEventListener("progress", _e(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && c.upload && c.upload.addEventListener("progress", _e(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = t => {
                                c && (n(!t || t.type ? new ye(null, e, c) : t), c.abort(), c = null)
                            }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
                            const p = function(e) {
                                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                                return t && t[1] || ""
                            }(f);
                            p && -1 === se.protocols.indexOf(p) ? n(new j("Unsupported protocol " + p + ":", j.ERR_BAD_REQUEST, e)) : c.send(r || null)
                        }))
                    }
                };
                B.forEach(Ce, ((e, t) => {
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
                const Te = e => `- ${e}`,
                    Re = e => B.isFunction(e) || null === e || !1 === e;
                var Ue = e => {
                    e = B.isArray(e) ? e : [e];
                    const {
                        length: t
                    } = e;
                    let n, r;
                    const s = {};
                    for (let i = 0; i < t; i++) {
                        let t;
                        if (n = e[i], r = n, !Re(n) && (r = Ce[(t = String(n)).toLowerCase()], void 0 === r)) throw new j(`Unknown adapter '${t}'`);
                        if (r) break;
                        s[t || "#" + i] = r
                    }
                    if (!r) {
                        const e = Object.entries(s).map((([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
                        throw new j("There is no suitable adapter to dispatch the request " + (t ? e.length > 1 ? "since :\n" + e.map(Te).join("\n") : " " + Te(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
                    }
                    return r
                };

                function Oe(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ye(null, e)
                }

                function Ie(e) {
                    Oe(e), e.headers = he.from(e.headers), e.data = ge.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
                    return Ue(e.adapter || ae.adapter)(e).then((function(t) {
                        return Oe(e), t.data = ge.call(e, e.transformResponse, t), t.headers = he.from(t.headers), t
                    }), (function(t) {
                        return me(t) || (Oe(e), t && t.response && (t.response.data = ge.call(e, e.transformResponse, t.response), t.response.headers = he.from(t.response.headers))), Promise.reject(t)
                    }))
                }
                const Le = e => e instanceof he ? e.toJSON() : e;

                function $e(e, t) {
                    t = t || {};
                    const n = {};

                    function r(e, t, n) {
                        return B.isPlainObject(e) && B.isPlainObject(t) ? B.merge.call({
                            caseless: n
                        }, e, t) : B.isPlainObject(t) ? B.merge({}, t) : B.isArray(t) ? t.slice() : t
                    }

                    function s(e, t, n) {
                        return B.isUndefined(t) ? B.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
                    }

                    function i(e, t) {
                        if (!B.isUndefined(t)) return r(void 0, t)
                    }

                    function o(e, t) {
                        return B.isUndefined(t) ? B.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
                    }

                    function a(n, s, i) {
                        return i in t ? r(n, s) : i in e ? r(void 0, n) : void 0
                    }
                    const u = {
                        url: i,
                        method: i,
                        data: i,
                        baseURL: o,
                        transformRequest: o,
                        transformResponse: o,
                        paramsSerializer: o,
                        timeout: o,
                        timeoutMessage: o,
                        withCredentials: o,
                        withXSRFToken: o,
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
                        headers: (e, t) => s(Le(e), Le(t), !0)
                    };
                    return B.forEach(Object.keys(Object.assign({}, e, t)), (function(r) {
                        const i = u[r] || s,
                            o = i(e[r], t[r], r);
                        B.isUndefined(o) && i !== a || (n[r] = o)
                    })), n
                }
                const Se = "1.6.5",
                    Ae = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
                    Ae[e] = function(n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                const Pe = {};
                Ae.transitional = function(e, t, n) {
                    function r(e, t) {
                        return "[Axios v1.6.5] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }
                    return (n, s, i) => {
                        if (!1 === e) throw new j(r(s, " has been removed" + (t ? " in " + t : "")), j.ERR_DEPRECATED);
                        return t && !Pe[s] && (Pe[s] = !0, console.warn(r(s, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, s, i)
                    }
                };
                var Ee = {
                    assertOptions: function(e, t, n) {
                        if ("object" != typeof e) throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
                        const r = Object.keys(e);
                        let s = r.length;
                        for (; s-- > 0;) {
                            const i = r[s],
                                o = t[i];
                            if (o) {
                                const t = e[i],
                                    n = void 0 === t || o(t, i, e);
                                if (!0 !== n) throw new j("option " + i + " must be " + n, j.ERR_BAD_OPTION_VALUE)
                            } else if (!0 !== n) throw new j("Unknown option " + i, j.ERR_BAD_OPTION)
                        }
                    },
                    validators: Ae
                };
                const ke = Ee.validators;
                class Me {
                    constructor(e) {
                        this.defaults = e, this.interceptors = {
                            request: new X,
                            response: new X
                        }
                    }
                    request(e, t) {
                        "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = $e(this.defaults, t);
                        const {
                            transitional: n,
                            paramsSerializer: r,
                            headers: s
                        } = t;
                        void 0 !== n && Ee.assertOptions(n, {
                            silentJSONParsing: ke.transitional(ke.boolean),
                            forcedJSONParsing: ke.transitional(ke.boolean),
                            clarifyTimeoutError: ke.transitional(ke.boolean)
                        }, !1), null != r && (B.isFunction(r) ? t.paramsSerializer = {
                            serialize: r
                        } : Ee.assertOptions(r, {
                            encode: ke.function,
                            serialize: ke.function
                        }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                        let i = s && B.merge(s.common, s[t.method]);
                        s && B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
                            delete s[e]
                        })), t.headers = he.concat(i, s);
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
                            const e = [Ie.bind(this), void 0];
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
                            l = Ie.call(this, d)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                        for (f = 0, c = u.length; f < c;) l = l.then(u[f++], u[f++]);
                        return l
                    }
                    getUri(e) {
                        return Q(ve((e = $e(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
                    }
                }
                B.forEach(["delete", "get", "head", "options"], (function(e) {
                    Me.prototype[e] = function(t, n) {
                        return this.request($e(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }))
                    }
                })), B.forEach(["post", "put", "patch"], (function(e) {
                    function t(t) {
                        return function(n, r, s) {
                            return this.request($e(s || {}, {
                                method: e,
                                headers: t ? {
                                    "Content-Type": "multipart/form-data"
                                } : {},
                                url: n,
                                data: r
                            }))
                        }
                    }
                    Me.prototype[e] = t(), Me.prototype[e + "Form"] = t(!0)
                }));
                var xe = Me;
                class Be {
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
                        }, e((function(e, r, s) {
                            n.reason || (n.reason = new ye(e, r, s), t(n.reason))
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
                            token: new Be((function(t) {
                                e = t
                            })),
                            cancel: e
                        }
                    }
                }
                var je = Be;
                const Ge = {
                    Continue: 100,
                    SwitchingProtocols: 101,
                    Processing: 102,
                    EarlyHints: 103,
                    Ok: 200,
                    Created: 201,
                    Accepted: 202,
                    NonAuthoritativeInformation: 203,
                    NoContent: 204,
                    ResetContent: 205,
                    PartialContent: 206,
                    MultiStatus: 207,
                    AlreadyReported: 208,
                    ImUsed: 226,
                    MultipleChoices: 300,
                    MovedPermanently: 301,
                    Found: 302,
                    SeeOther: 303,
                    NotModified: 304,
                    UseProxy: 305,
                    Unused: 306,
                    TemporaryRedirect: 307,
                    PermanentRedirect: 308,
                    BadRequest: 400,
                    Unauthorized: 401,
                    PaymentRequired: 402,
                    Forbidden: 403,
                    NotFound: 404,
                    MethodNotAllowed: 405,
                    NotAcceptable: 406,
                    ProxyAuthenticationRequired: 407,
                    RequestTimeout: 408,
                    Conflict: 409,
                    Gone: 410,
                    LengthRequired: 411,
                    PreconditionFailed: 412,
                    PayloadTooLarge: 413,
                    UriTooLong: 414,
                    UnsupportedMediaType: 415,
                    RangeNotSatisfiable: 416,
                    ExpectationFailed: 417,
                    ImATeapot: 418,
                    MisdirectedRequest: 421,
                    UnprocessableEntity: 422,
                    Locked: 423,
                    FailedDependency: 424,
                    TooEarly: 425,
                    UpgradeRequired: 426,
                    PreconditionRequired: 428,
                    TooManyRequests: 429,
                    RequestHeaderFieldsTooLarge: 431,
                    UnavailableForLegalReasons: 451,
                    InternalServerError: 500,
                    NotImplemented: 501,
                    BadGateway: 502,
                    ServiceUnavailable: 503,
                    GatewayTimeout: 504,
                    HttpVersionNotSupported: 505,
                    VariantAlsoNegotiates: 506,
                    InsufficientStorage: 507,
                    LoopDetected: 508,
                    NotExtended: 510,
                    NetworkAuthenticationRequired: 511
                };
                Object.entries(Ge).forEach((([e, t]) => {
                    Ge[t] = e
                }));
                var Ne = Ge;
                const De = function e(t) {
                    const n = new xe(t),
                        s = r(xe.prototype.request, n);
                    return B.extend(s, xe.prototype, n, {
                        allOwnKeys: !0
                    }), B.extend(s, n, null, {
                        allOwnKeys: !0
                    }), s.create = function(n) {
                        return e($e(t, n))
                    }, s
                }(ae);
                De.Axios = xe, De.CanceledError = ye, De.CancelToken = je, De.isCancel = me, De.VERSION = Se, De.toFormData = H, De.AxiosError = j, De.Cancel = De.CanceledError, De.all = function(e) {
                    return Promise.all(e)
                }, De.spread = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }, De.isAxiosError = function(e) {
                    return B.isObject(e) && !0 === e.isAxiosError
                }, De.mergeConfig = $e, De.AxiosHeaders = he, De.formToJSON = e => ie(B.isHTMLForm(e) ? new FormData(e) : e), De.getAdapter = Ue, De.HttpStatusCode = Ne, De.default = De, e.exports = De
            }
        },
        t = {};

    function n(r) {
        var s = t[r];
        if (void 0 !== s) return s.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }
    return n.amdO = {}, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n(35)
})()));