(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-93d6ec30"], {
        2441: function (t, r, e) {
            var n = e("6a99").getSymbolSize;
            r.getRowColCoords = function (t) {
                if (1 === t) return [];
                for (var r = Math.floor(t / 7) + 2, e = n(t), o = 145 === e ? 26 : 2 * Math.ceil((e - 13) / (2 * r - 2)), i = [e - 7], a = 1; a < r - 1; a++) i[a] = i[a - 1] - o;
                return i.push(6), i.reverse()
            }, r.getPositions = function (t) {
                for (var e = [], n = r.getRowColCoords(t), o = n.length, i = 0; i < o; i++)
                    for (var a = 0; a < o; a++) 0 === i && 0 === a || 0 === i && a === o - 1 || i === o - 1 && 0 === a || e.push([n[i], n[a]]);
                return e
            }
        },
        "26c1": function (t, r, e) {
            var n = e("7a14"),
                o = n.alloc(512),
                i = n.alloc(256);
            (function () {
                for (var t = 1, r = 0; r < 255; r++) o[r] = t, i[t] = r, t <<= 1, 256 & t && (t ^= 285);
                for (r = 255; r < 512; r++) o[r] = o[r - 255]
            })(), r.log = function (t) {
                if (t < 1) throw new Error("log(" + t + ")");
                return i[t]
            }, r.exp = function (t) {
                return o[t]
            }, r.mul = function (t, r) {
                return 0 === t || 0 === r ? 0 : o[i[t] + i[r]]
            }
        },
        "27cd": function (t, r, e) {
            "use strict";
            r.byteLength = h, r.toByteArray = l, r.fromByteArray = d;
            for (var n = [], o = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, f = a.length; u < f; ++u) n[u] = a[u], o[a.charCodeAt(u)] = u;

            function s(t) {
                var r = t.length;
                if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var e = t.indexOf("="); - 1 === e && (e = r);
                var n = e === r ? 0 : 4 - e % 4;
                return [e, n]
            }

            function h(t) {
                var r = s(t),
                    e = r[0],
                    n = r[1];
                return 3 * (e + n) / 4 - n
            }

            function c(t, r, e) {
                return 3 * (r + e) / 4 - e
            }

            function l(t) {
                var r, e, n = s(t),
                    a = n[0],
                    u = n[1],
                    f = new i(c(t, a, u)),
                    h = 0,
                    l = u > 0 ? a - 4 : a;
                for (e = 0; e < l; e += 4) r = o[t.charCodeAt(e)] << 18 | o[t.charCodeAt(e + 1)] << 12 | o[t.charCodeAt(e + 2)] << 6 | o[t.charCodeAt(e + 3)], f[h++] = r >> 16 & 255, f[h++] = r >> 8 & 255, f[h++] = 255 & r;
                return 2 === u && (r = o[t.charCodeAt(e)] << 2 | o[t.charCodeAt(e + 1)] >> 4, f[h++] = 255 & r), 1 === u && (r = o[t.charCodeAt(e)] << 10 | o[t.charCodeAt(e + 1)] << 4 | o[t.charCodeAt(e + 2)] >> 2, f[h++] = r >> 8 & 255, f[h++] = 255 & r), f
            }

            function g(t) {
                return n[t >> 18 & 63] + n[t >> 12 & 63] + n[t >> 6 & 63] + n[63 & t]
            }

            function p(t, r, e) {
                for (var n, o = [], i = r; i < e; i += 3) n = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(g(n));
                return o.join("")
            }

            function d(t) {
                for (var r, e = t.length, o = e % 3, i = [], a = 16383, u = 0, f = e - o; u < f; u += a) i.push(p(t, u, u + a > f ? f : u + a));
                return 1 === o ? (r = t[e - 1], i.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === o && (r = (t[e - 2] << 8) + t[e - 1], i.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "=")), i.join("")
            }
            o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
        },
        "414f": function (t, r) {
            r.isValid = function (t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        4341: function (t, r, e) {
            var n = e("7a14"),
                o = e("6a99"),
                i = e("ffa5"),
                a = e("464c"),
                u = e("e6a3"),
                f = e("2441"),
                s = e("994e"),
                h = e("b39c"),
                c = e("eabe"),
                l = e("70cf"),
                g = e("6e90"),
                p = e("6455"),
                d = e("7437"),
                y = e("d2ce"),
                v = e("490f");

            function w(t, r) {
                for (var e = t.size, n = s.getPositions(r), o = 0; o < n.length; o++)
                    for (var i = n[o][0], a = n[o][1], u = -1; u <= 7; u++)
                        if (!(i + u <= -1 || e <= i + u))
                            for (var f = -1; f <= 7; f++) a + f <= -1 || e <= a + f || (u >= 0 && u <= 6 && (0 === f || 6 === f) || f >= 0 && f <= 6 && (0 === u || 6 === u) || u >= 2 && u <= 4 && f >= 2 && f <= 4 ? t.set(i + u, a + f, !0, !0) : t.set(i + u, a + f, !1, !0))
            }

            function E(t) {
                for (var r = t.size, e = 8; e < r - 8; e++) {
                    var n = e % 2 === 0;
                    t.set(e, 6, n, !0), t.set(6, e, n, !0)
                }
            }

            function m(t, r) {
                for (var e = f.getPositions(r), n = 0; n < e.length; n++)
                    for (var o = e[n][0], i = e[n][1], a = -2; a <= 2; a++)
                        for (var u = -2; u <= 2; u++) - 2 === a || 2 === a || -2 === u || 2 === u || 0 === a && 0 === u ? t.set(o + a, i + u, !0, !0) : t.set(o + a, i + u, !1, !0)
            }

            function A(t, r) {
                for (var e, n, o, i = t.size, a = g.getEncodedBits(r), u = 0; u < 18; u++) e = Math.floor(u / 3), n = u % 3 + i - 8 - 3, o = 1 === (a >> u & 1), t.set(e, n, o, !0), t.set(n, e, o, !0)
            }

            function b(t, r, e) {
                var n, o, i = t.size,
                    a = p.getEncodedBits(r, e);
                for (n = 0; n < 15; n++) o = 1 === (a >> n & 1), n < 6 ? t.set(n, 8, o, !0) : n < 8 ? t.set(n + 1, 8, o, !0) : t.set(i - 15 + n, 8, o, !0), n < 8 ? t.set(8, i - n - 1, o, !0) : n < 9 ? t.set(8, 15 - n - 1 + 1, o, !0) : t.set(8, 15 - n - 1, o, !0);
                t.set(i - 8, 8, 1, !0)
            }

            function R(t, r) {
                for (var e = t.size, n = -1, o = e - 1, i = 7, a = 0, u = e - 1; u > 0; u -= 2) {
                    6 === u && u--;
                    while (1) {
                        for (var f = 0; f < 2; f++)
                            if (!t.isReserved(o, u - f)) {
                                var s = !1;
                                a < r.length && (s = 1 === (r[a] >>> i & 1)), t.set(o, u - f, s), i--, -1 === i && (a++, i = 7)
                            } if (o += n, o < 0 || e <= o) {
                            o -= n, n = -n;
                            break
                        }
                    }
                }
            }

            function B(t, r, e) {
                var n = new a;
                e.forEach((function (r) {
                    n.put(r.mode.bit, 4), n.put(r.getLength(), d.getCharCountIndicator(r.mode, t)), r.write(n)
                }));
                var i = o.getSymbolTotalCodewords(t),
                    u = c.getTotalCodewordsCount(t, r),
                    f = 8 * (i - u);
                n.getLengthInBits() + 4 <= f && n.put(0, 4);
                while (n.getLengthInBits() % 8 !== 0) n.putBit(0);
                for (var s = (f - n.getLengthInBits()) / 8, h = 0; h < s; h++) n.put(h % 2 ? 17 : 236, 8);
                return P(n, t, r)
            }

            function P(t, r, e) {
                for (var i = o.getSymbolTotalCodewords(r), a = c.getTotalCodewordsCount(r, e), u = i - a, f = c.getBlocksCount(r, e), s = i % f, h = f - s, g = Math.floor(i / f), p = Math.floor(u / f), d = p + 1, y = g - p, v = new l(y), w = 0, E = new Array(f), m = new Array(f), A = 0, b = n.from(t.buffer), R = 0; R < f; R++) {
                    var B = R < h ? p : d;
                    E[R] = b.slice(w, w + B), m[R] = v.encode(E[R]), w += B, A = Math.max(A, B)
                }
                var P, T, _ = n.alloc(i),
                    C = 0;
                for (P = 0; P < A; P++)
                    for (T = 0; T < f; T++) P < E[T].length && (_[C++] = E[T][P]);
                for (P = 0; P < y; P++)
                    for (T = 0; T < f; T++) _[C++] = m[T][P];
                return _
            }

            function T(t, r, e, n) {
                var i;
                if (v(t)) i = y.fromArray(t);
                else {
                    if ("string" !== typeof t) throw new Error("Invalid data");
                    var a = r;
                    if (!a) {
                        var f = y.rawSplit(t);
                        a = g.getBestVersionForData(f, e)
                    }
                    i = y.fromString(t, a || 40)
                }
                var s = g.getBestVersionForData(i, e);
                if (!s) throw new Error("The amount of data is too big to be stored in a QR Code");
                if (r) {
                    if (r < s) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + s + ".\n")
                } else r = s;
                var c = B(r, e, i),
                    l = o.getSymbolSize(r),
                    p = new u(l);
                return w(p, r), E(p), m(p, r), b(p, e, 0), r >= 7 && A(p, r), R(p, c), isNaN(n) && (n = h.getBestMask(p, b.bind(null, p, e))), h.applyMask(n, p), b(p, e, n), {
                    modules: p,
                    version: r,
                    errorCorrectionLevel: e,
                    maskPattern: n,
                    segments: i
                }
            }
            r.create = function (t, r) {
                if ("undefined" === typeof t || "" === t) throw new Error("No input text");
                var e, n, a = i.M;
                return "undefined" !== typeof r && (a = i.from(r.errorCorrectionLevel, i.M), e = g.from(r.version), n = h.from(r.maskPattern), r.toSJISFunc && o.setToSJISFunction(r.toSJISFunc)), T(t, e, a, n)
            }
        },
        "464c": function (t, r) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function (t) {
                    var r = Math.floor(t / 8);
                    return 1 === (this.buffer[r] >>> 7 - t % 8 & 1)
                },
                put: function (t, r) {
                    for (var e = 0; e < r; e++) this.putBit(1 === (t >>> r - e - 1 & 1))
                },
                getLengthInBits: function () {
                    return this.length
                },
                putBit: function (t) {
                    var r = Math.floor(this.length / 8);
                    this.buffer.length <= r && this.buffer.push(0), t && (this.buffer[r] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = e
        },
        "490f": function (t, r) {
            var e = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == e.call(t)
            }
        },
        5618: function (t, r, e) {
            var n = e("6b1e"),
                o = e("4341"),
                i = e("e0fb"),
                a = e("a47e");

            function u(t, r, e, i, a) {
                var u = [].slice.call(arguments, 1),
                    f = u.length,
                    s = "function" === typeof u[f - 1];
                if (!s && !n()) throw new Error("Callback required as last argument");
                if (!s) {
                    if (f < 1) throw new Error("Too few arguments provided");
                    return 1 === f ? (e = r, r = i = void 0) : 2 !== f || r.getContext || (i = e, e = r, r = void 0), new Promise((function (n, a) {
                        try {
                            var u = o.create(e, i);
                            n(t(u, r, i))
                        } catch (f) {
                            a(f)
                        }
                    }))
                }
                if (f < 2) throw new Error("Too few arguments provided");
                2 === f ? (a = e, e = r, r = i = void 0) : 3 === f && (r.getContext && "undefined" === typeof a ? (a = i, i = void 0) : (a = i, i = e, e = r, r = void 0));
                try {
                    var h = o.create(e, i);
                    a(null, t(h, r, i))
                } catch (c) {
                    a(c)
                }
            }
            r.create = o.create, r.toCanvas = u.bind(null, i.render), r.toDataURL = u.bind(null, i.renderToDataURL), r.toString = u.bind(null, (function (t, r, e) {
                return a.render(t, e)
            }))
        },
        "571a": function (t, r) {
            var e = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == e.call(t)
            }
        },
        6455: function (t, r, e) {
            var n = e("6a99"),
                o = 1335,
                i = 21522,
                a = n.getBCHDigit(o);
            r.getEncodedBits = function (t, r) {
                var e = t.bit << 3 | r,
                    u = e << 10;
                while (n.getBCHDigit(u) - a >= 0) u ^= o << n.getBCHDigit(u) - a;
                return (e << 10 | u) ^ i
            }
        },
        "6a99": function (t, r) {
            var e, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            r.getSymbolSize = function (t) {
                if (!t) throw new Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, r.getSymbolTotalCodewords = function (t) {
                return n[t]
            }, r.getBCHDigit = function (t) {
                var r = 0;
                while (0 !== t) r++, t >>>= 1;
                return r
            }, r.setToSJISFunction = function (t) {
                if ("function" !== typeof t) throw new Error('"toSJISFunc" is not a valid function.');
                e = t
            }, r.isKanjiModeEnabled = function () {
                return "undefined" !== typeof e
            }, r.toSJIS = function (t) {
                return e(t)
            }
        },
        "6b1e": function (t, r) {
            t.exports = function () {
                return "function" === typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        "6e90": function (t, r, e) {
            var n = e("6a99"),
                o = e("eabe"),
                i = e("ffa5"),
                a = e("7437"),
                u = e("414f"),
                f = e("490f"),
                s = 7973,
                h = n.getBCHDigit(s);

            function c(t, e, n) {
                for (var o = 1; o <= 40; o++)
                    if (e <= r.getCapacity(o, n, t)) return o
            }

            function l(t, r) {
                return a.getCharCountIndicator(t, r) + 4
            }

            function g(t, r) {
                var e = 0;
                return t.forEach((function (t) {
                    var n = l(t.mode, r);
                    e += n + t.getBitsLength()
                })), e
            }

            function p(t, e) {
                for (var n = 1; n <= 40; n++) {
                    var o = g(t, n);
                    if (o <= r.getCapacity(n, e, a.MIXED)) return n
                }
            }
            r.from = function (t, r) {
                return u.isValid(t) ? parseInt(t, 10) : r
            }, r.getCapacity = function (t, r, e) {
                if (!u.isValid(t)) throw new Error("Invalid QR Code version");
                "undefined" === typeof e && (e = a.BYTE);
                var i = n.getSymbolTotalCodewords(t),
                    f = o.getTotalCodewordsCount(t, r),
                    s = 8 * (i - f);
                if (e === a.MIXED) return s;
                var h = s - l(e, t);
                switch (e) {
                    case a.NUMERIC:
                        return Math.floor(h / 10 * 3);
                    case a.ALPHANUMERIC:
                        return Math.floor(h / 11 * 2);
                    case a.KANJI:
                        return Math.floor(h / 13);
                    case a.BYTE:
                    default:
                        return Math.floor(h / 8)
                }
            }, r.getBestVersionForData = function (t, r) {
                var e, n = i.from(r, i.M);
                if (f(t)) {
                    if (t.length > 1) return p(t, n);
                    if (0 === t.length) return 1;
                    e = t[0]
                } else e = t;
                return c(e.mode, e.getLength(), n)
            }, r.getEncodedBits = function (t) {
                if (!u.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
                var r = t << 12;
                while (n.getBCHDigit(r) - h >= 0) r ^= s << n.getBCHDigit(r) - h;
                return t << 12 | r
            }
        },
        "70a4": function (t, r, e) {
            var n = e("7437"),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function i(t) {
                this.mode = n.ALPHANUMERIC, this.data = t
            }
            i.getBitsLength = function (t) {
                return 11 * Math.floor(t / 2) + t % 2 * 6
            }, i.prototype.getLength = function () {
                return this.data.length
            }, i.prototype.getBitsLength = function () {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function (t) {
                var r;
                for (r = 0; r + 2 <= this.data.length; r += 2) {
                    var e = 45 * o.indexOf(this.data[r]);
                    e += o.indexOf(this.data[r + 1]), t.put(e, 11)
                }
                this.data.length % 2 && t.put(o.indexOf(this.data[r]), 6)
            }, t.exports = i
        },
        "70cf": function (t, r, e) {
            var n = e("7a14"),
                o = e("8768"),
                i = e("fd40").Buffer;

            function a(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            a.prototype.initialize = function (t) {
                this.degree = t, this.genPoly = o.generateECPolynomial(this.degree)
            }, a.prototype.encode = function (t) {
                if (!this.genPoly) throw new Error("Encoder not initialized");
                var r = n.alloc(this.degree),
                    e = i.concat([t, r], t.length + this.degree),
                    a = o.mod(e, this.genPoly),
                    u = this.degree - a.length;
                if (u > 0) {
                    var f = n.alloc(this.degree);
                    return a.copy(f, u), f
                }
                return a
            }, t.exports = a
        },
        7437: function (t, r, e) {
            var n = e("414f"),
                o = e("8ae1");

            function i(t) {
                if ("string" !== typeof t) throw new Error("Param is not a string");
                var e = t.toLowerCase();
                switch (e) {
                    case "numeric":
                        return r.NUMERIC;
                    case "alphanumeric":
                        return r.ALPHANUMERIC;
                    case "kanji":
                        return r.KANJI;
                    case "byte":
                        return r.BYTE;
                    default:
                        throw new Error("Unknown mode: " + t)
                }
            }
            r.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, r.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, r.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, r.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, r.MIXED = {
                bit: -1
            }, r.getCharCountIndicator = function (t, r) {
                if (!t.ccBits) throw new Error("Invalid mode: " + t);
                if (!n.isValid(r)) throw new Error("Invalid version: " + r);
                return r >= 1 && r < 10 ? t.ccBits[0] : r < 27 ? t.ccBits[1] : t.ccBits[2]
            }, r.getBestModeForData = function (t) {
                return o.testNumeric(t) ? r.NUMERIC : o.testAlphanumeric(t) ? r.ALPHANUMERIC : o.testKanji(t) ? r.KANJI : r.BYTE
            }, r.toString = function (t) {
                if (t && t.id) return t.id;
                throw new Error("Invalid mode")
            }, r.isValid = function (t) {
                return t && t.bit && t.ccBits
            }, r.from = function (t, e) {
                if (r.isValid(t)) return t;
                try {
                    return i(t)
                } catch (n) {
                    return e
                }
            }
        },
        "7a14": function (t, r, e) {
            "use strict";
            var n = e("490f");

            function o() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                            return 42
                        }
                    }, 42 === t.foo()
                } catch (r) {
                    return !1
                }
            }
            a.TYPED_ARRAY_SUPPORT = o();
            var i = a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

            function a(t, r, e) {
                return a.TYPED_ARRAY_SUPPORT || this instanceof a ? "number" === typeof t ? h(this, t) : E(this, t, r, e) : new a(t, r, e)
            }

            function u(t) {
                if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | t
            }

            function f(t) {
                return t !== t
            }

            function s(t, r) {
                var e;
                return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(r), e.__proto__ = a.prototype) : (e = t, null === e && (e = new a(r)), e.length = r), e
            }

            function h(t, r) {
                var e = s(t, r < 0 ? 0 : 0 | u(r));
                if (!a.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < r; ++n) e[n] = 0;
                return e
            }

            function c(t, r) {
                var e = 0 | y(r),
                    n = s(t, e),
                    o = n.write(r);
                return o !== e && (n = n.slice(0, o)), n
            }

            function l(t, r) {
                for (var e = r.length < 0 ? 0 : 0 | u(r.length), n = s(t, e), o = 0; o < e; o += 1) n[o] = 255 & r[o];
                return n
            }

            function g(t, r, e, n) {
                if (e < 0 || r.byteLength < e) throw new RangeError("'offset' is out of bounds");
                if (r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds");
                var o;
                return o = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), a.TYPED_ARRAY_SUPPORT ? o.__proto__ = a.prototype : o = l(t, o), o
            }

            function p(t, r) {
                if (a.isBuffer(r)) {
                    var e = 0 | u(r.length),
                        n = s(t, e);
                    return 0 === n.length || r.copy(n, 0, 0, e), n
                }
                if (r) {
                    if ("undefined" !== typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" !== typeof r.length || f(r.length) ? s(t, 0) : l(t, r);
                    if ("Buffer" === r.type && Array.isArray(r.data)) return l(t, r.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function d(t, r) {
                var e;
                r = r || 1 / 0;
                for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
                    if (e = t.charCodeAt(a), e > 55295 && e < 57344) {
                        if (!o) {
                            if (e > 56319) {
                                (r -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === n) {
                                (r -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = e;
                            continue
                        }
                        if (e < 56320) {
                            (r -= 3) > -1 && i.push(239, 191, 189), o = e;
                            continue
                        }
                        e = 65536 + (o - 55296 << 10 | e - 56320)
                    } else o && (r -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, e < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(e)
                    } else if (e < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112)) throw new Error("Invalid code point");
                        if ((r -= 4) < 0) break;
                        i.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return i
            }

            function y(t) {
                if (a.isBuffer(t)) return t.length;
                if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" !== typeof t && (t = "" + t);
                var r = t.length;
                return 0 === r ? 0 : d(t).length
            }

            function v(t, r, e, n) {
                for (var o = 0; o < n; ++o) {
                    if (o + e >= r.length || o >= t.length) break;
                    r[o + e] = t[o]
                }
                return o
            }

            function w(t, r, e, n) {
                return v(d(r, t.length - e), t, e, n)
            }

            function E(t, r, e, n) {
                if ("number" === typeof r) throw new TypeError('"value" argument must not be a number');
                return "undefined" !== typeof ArrayBuffer && r instanceof ArrayBuffer ? g(t, r, e, n) : "string" === typeof r ? c(t, r, e) : p(t, r)
            }
            a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            })), a.prototype.write = function (t, r, e) {
                void 0 === r || void 0 === e && "string" === typeof r ? (e = this.length, r = 0) : isFinite(r) && (r |= 0, isFinite(e) ? e |= 0 : e = void 0);
                var n = this.length - r;
                if ((void 0 === e || e > n) && (e = n), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                return w(this, t, r, e)
            }, a.prototype.slice = function (t, r) {
                var e, n = this.length;
                if (t = ~~t, r = void 0 === r ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t), a.TYPED_ARRAY_SUPPORT) e = this.subarray(t, r), e.__proto__ = a.prototype;
                else {
                    var o = r - t;
                    e = new a(o, void 0);
                    for (var i = 0; i < o; ++i) e[i] = this[i + t]
                }
                return e
            }, a.prototype.copy = function (t, r, e, n) {
                if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (r < 0) throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
                var o, i = n - e;
                if (this === t && e < r && r < n)
                    for (o = i - 1; o >= 0; --o) t[o + r] = this[o + e];
                else if (i < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o) t[o + r] = this[o + e];
                else Uint8Array.prototype.set.call(t, this.subarray(e, e + i), r);
                return i
            }, a.prototype.fill = function (t, r, e) {
                if ("string" === typeof t) {
                    if ("string" === typeof r ? (r = 0, e = this.length) : "string" === typeof e && (e = this.length), 1 === t.length) {
                        var n = t.charCodeAt(0);
                        n < 256 && (t = n)
                    }
                } else "number" === typeof t && (t &= 255);
                if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
                if (e <= r) return this;
                var o;
                if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" === typeof t)
                    for (o = r; o < e; ++o) this[o] = t;
                else {
                    var i = a.isBuffer(t) ? t : new a(t),
                        u = i.length;
                    for (o = 0; o < e - r; ++o) this[o + r] = i[o % u]
                }
                return this
            }, a.concat = function (t, r) {
                if (!n(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return s(null, 0);
                var e;
                if (void 0 === r)
                    for (r = 0, e = 0; e < t.length; ++e) r += t[e].length;
                var o = h(null, r),
                    i = 0;
                for (e = 0; e < t.length; ++e) {
                    var u = t[e];
                    if (!a.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                    u.copy(o, i), i += u.length
                }
                return o
            }, a.byteLength = y, a.prototype._isBuffer = !0, a.isBuffer = function (t) {
                return !(null == t || !t._isBuffer)
            }, t.exports.alloc = function (t) {
                var r = new a(t);
                return r.fill(0), r
            }, t.exports.from = function (t) {
                return new a(t)
            }
        },
        "7b97": function (t, r) {
            function e(t) {
                if ("number" === typeof t && (t = t.toString()), "string" !== typeof t) throw new Error("Color should be defined as hex string");
                var r = t.slice().replace("#", "").split("");
                if (r.length < 3 || 5 === r.length || r.length > 8) throw new Error("Invalid hex color: " + t);
                3 !== r.length && 4 !== r.length || (r = Array.prototype.concat.apply([], r.map((function (t) {
                    return [t, t]
                })))), 6 === r.length && r.push("F", "F");
                var e = parseInt(r.join(""), 16);
                return {
                    r: e >> 24 & 255,
                    g: e >> 16 & 255,
                    b: e >> 8 & 255,
                    a: 255 & e,
                    hex: "#" + r.slice(0, 6).join("")
                }
            }
            r.getOptions = function (t) {
                t || (t = {}), t.color || (t.color = {});
                var r = "undefined" === typeof t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    n = t.width && t.width >= 21 ? t.width : void 0,
                    o = t.scale || 4;
                return {
                    width: n,
                    scale: n ? 4 : o,
                    margin: r,
                    color: {
                        dark: e(t.color.dark || "#000000ff"),
                        light: e(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, r.getScale = function (t, r) {
                return r.width && r.width >= t + 2 * r.margin ? r.width / (t + 2 * r.margin) : r.scale
            }, r.getImageWidth = function (t, e) {
                var n = r.getScale(t, e);
                return Math.floor((t + 2 * e.margin) * n)
            }, r.qrToImageData = function (t, e, n) {
                for (var o = e.modules.size, i = e.modules.data, a = r.getScale(o, n), u = Math.floor((o + 2 * n.margin) * a), f = n.margin * a, s = [n.color.light, n.color.dark], h = 0; h < u; h++)
                    for (var c = 0; c < u; c++) {
                        var l = 4 * (h * u + c),
                            g = n.color.light;
                        if (h >= f && c >= f && h < u - f && c < u - f) {
                            var p = Math.floor((h - f) / a),
                                d = Math.floor((c - f) / a);
                            g = s[i[p * o + d] ? 1 : 0]
                        }
                        t[l++] = g.r, t[l++] = g.g, t[l++] = g.b, t[l] = g.a
                    }
            }
        },
        8768: function (t, r, e) {
            var n = e("7a14"),
                o = e("26c1");
            r.mul = function (t, r) {
                for (var e = n.alloc(t.length + r.length - 1), i = 0; i < t.length; i++)
                    for (var a = 0; a < r.length; a++) e[i + a] ^= o.mul(t[i], r[a]);
                return e
            }, r.mod = function (t, r) {
                var e = n.from(t);
                while (e.length - r.length >= 0) {
                    for (var i = e[0], a = 0; a < r.length; a++) e[a] ^= o.mul(r[a], i);
                    var u = 0;
                    while (u < e.length && 0 === e[u]) u++;
                    e = e.slice(u)
                }
                return e
            }, r.generateECPolynomial = function (t) {
                for (var e = n.from([1]), i = 0; i < t; i++) e = r.mul(e, [1, o.exp(i)]);
                return e
            }
        },
        "8ae1": function (t, r) {
            var e = "[0-9]+",
                n = "[A-Z $%*+\\-./:]+",
                o = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            o = o.replace(/u/g, "\\u");
            var i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + o + ")(?:.|[\r\n]))+";
            r.KANJI = new RegExp(o, "g"), r.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), r.BYTE = new RegExp(i, "g"), r.NUMERIC = new RegExp(e, "g"), r.ALPHANUMERIC = new RegExp(n, "g");
            var a = new RegExp("^" + o + "$"),
                u = new RegExp("^" + e + "$"),
                f = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            r.testKanji = function (t) {
                return a.test(t)
            }, r.testNumeric = function (t) {
                return u.test(t)
            }, r.testAlphanumeric = function (t) {
                return f.test(t)
            }
        },
        "96a3": function (t, r, e) {
            var n = e("7a14"),
                o = e("7437");

            function i(t) {
                this.mode = o.BYTE, this.data = n.from(t)
            }
            i.getBitsLength = function (t) {
                return 8 * t
            }, i.prototype.getLength = function () {
                return this.data.length
            }, i.prototype.getBitsLength = function () {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function (t) {
                for (var r = 0, e = this.data.length; r < e; r++) t.put(this.data[r], 8)
            }, t.exports = i
        },
        "994e": function (t, r, e) {
            var n = e("6a99").getSymbolSize,
                o = 7;
            r.getPositions = function (t) {
                var r = n(t);
                return [
                    [0, 0],
                    [r - o, 0],
                    [0, r - o]
                ]
            }
        },
        a47e: function (t, r, e) {
            var n = e("7b97");

            function o(t, r) {
                var e = t.a / 255,
                    n = r + '="' + t.hex + '"';
                return e < 1 ? n + " " + r + '-opacity="' + e.toFixed(2).slice(1) + '"' : n
            }

            function i(t, r, e) {
                var n = t + r;
                return "undefined" !== typeof e && (n += " " + e), n
            }

            function a(t, r, e) {
                for (var n = "", o = 0, a = !1, u = 0, f = 0; f < t.length; f++) {
                    var s = Math.floor(f % r),
                        h = Math.floor(f / r);
                    s || a || (a = !0), t[f] ? (u++, f > 0 && s > 0 && t[f - 1] || (n += a ? i("M", s + e, .5 + h + e) : i("m", o, 0), o = 0, a = !1), s + 1 < r && t[f + 1] || (n += i("h", u), u = 0)) : o++
                }
                return n
            }
            r.render = function (t, r, e) {
                var i = n.getOptions(r),
                    u = t.modules.size,
                    f = t.modules.data,
                    s = u + 2 * i.margin,
                    h = i.color.light.a ? "<path " + o(i.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "",
                    c = "<path " + o(i.color.dark, "stroke") + ' d="' + a(f, u, i.margin) + '"/>',
                    l = 'viewBox="0 0 ' + s + " " + s + '"',
                    g = i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "",
                    p = '<svg xmlns="http://www.w3.org/2000/svg" ' + g + l + ' shape-rendering="crispEdges">' + h + c + "</svg>\n";
                return "function" === typeof e && e(null, p), p
            }
        },
        b39c: function (t, r) {
            r.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            var e = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };

            function n(t, e, n) {
                switch (t) {
                    case r.Patterns.PATTERN000:
                        return (e + n) % 2 === 0;
                    case r.Patterns.PATTERN001:
                        return e % 2 === 0;
                    case r.Patterns.PATTERN010:
                        return n % 3 === 0;
                    case r.Patterns.PATTERN011:
                        return (e + n) % 3 === 0;
                    case r.Patterns.PATTERN100:
                        return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 === 0;
                    case r.Patterns.PATTERN101:
                        return e * n % 2 + e * n % 3 === 0;
                    case r.Patterns.PATTERN110:
                        return (e * n % 2 + e * n % 3) % 2 === 0;
                    case r.Patterns.PATTERN111:
                        return (e * n % 3 + (e + n) % 2) % 2 === 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                }
            }
            r.isValid = function (t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, r.from = function (t) {
                return r.isValid(t) ? parseInt(t, 10) : void 0
            }, r.getPenaltyN1 = function (t) {
                for (var r = t.size, n = 0, o = 0, i = 0, a = null, u = null, f = 0; f < r; f++) {
                    o = i = 0, a = u = null;
                    for (var s = 0; s < r; s++) {
                        var h = t.get(f, s);
                        h === a ? o++ : (o >= 5 && (n += e.N1 + (o - 5)), a = h, o = 1), h = t.get(s, f), h === u ? i++ : (i >= 5 && (n += e.N1 + (i - 5)), u = h, i = 1)
                    }
                    o >= 5 && (n += e.N1 + (o - 5)), i >= 5 && (n += e.N1 + (i - 5))
                }
                return n
            }, r.getPenaltyN2 = function (t) {
                for (var r = t.size, n = 0, o = 0; o < r - 1; o++)
                    for (var i = 0; i < r - 1; i++) {
                        var a = t.get(o, i) + t.get(o, i + 1) + t.get(o + 1, i) + t.get(o + 1, i + 1);
                        4 !== a && 0 !== a || n++
                    }
                return n * e.N2
            }, r.getPenaltyN3 = function (t) {
                for (var r = t.size, n = 0, o = 0, i = 0, a = 0; a < r; a++) {
                    o = i = 0;
                    for (var u = 0; u < r; u++) o = o << 1 & 2047 | t.get(a, u), u >= 10 && (1488 === o || 93 === o) && n++, i = i << 1 & 2047 | t.get(u, a), u >= 10 && (1488 === i || 93 === i) && n++
                }
                return n * e.N3
            }, r.getPenaltyN4 = function (t) {
                for (var r = 0, n = t.data.length, o = 0; o < n; o++) r += t.data[o];
                var i = Math.abs(Math.ceil(100 * r / n / 5) - 10);
                return i * e.N4
            }, r.applyMask = function (t, r) {
                for (var e = r.size, o = 0; o < e; o++)
                    for (var i = 0; i < e; i++) r.isReserved(i, o) || r.xor(i, o, n(t, i, o))
            }, r.getBestMask = function (t, e) {
                for (var n = Object.keys(r.Patterns).length, o = 0, i = 1 / 0, a = 0; a < n; a++) {
                    e(a), r.applyMask(a, t);
                    var u = r.getPenaltyN1(t) + r.getPenaltyN2(t) + r.getPenaltyN3(t) + r.getPenaltyN4(t);
                    r.applyMask(a, t), u < i && (i = u, o = a)
                }
                return o
            }
        },
        b7cc: function (t, r, e) {
            "use strict";
            var n = {
                single_source_shortest_paths: function (t, r, e) {
                    var o = {},
                        i = {};
                    i[r] = 0;
                    var a, u, f, s, h, c, l, g, p, d = n.PriorityQueue.make();
                    d.push(r, 0);
                    while (!d.empty())
                        for (f in a = d.pop(), u = a.value, s = a.cost, h = t[u] || {}, h) h.hasOwnProperty(f) && (c = h[f], l = s + c, g = i[f], p = "undefined" === typeof i[f], (p || g > l) && (i[f] = l, d.push(f, l), o[f] = u));
                    if ("undefined" !== typeof e && "undefined" === typeof i[e]) {
                        var y = ["Could not find a path from ", r, " to ", e, "."].join("");
                        throw new Error(y)
                    }
                    return o
                },
                extract_shortest_path_from_predecessor_list: function (t, r) {
                    var e = [],
                        n = r;
                    while (n) e.push(n), t[n], n = t[n];
                    return e.reverse(), e
                },
                find_path: function (t, r, e) {
                    var o = n.single_source_shortest_paths(t, r, e);
                    return n.extract_shortest_path_from_predecessor_list(o, e)
                },
                PriorityQueue: {
                    make: function (t) {
                        var r, e = n.PriorityQueue,
                            o = {};
                        for (r in t = t || {}, e) e.hasOwnProperty(r) && (o[r] = e[r]);
                        return o.queue = [], o.sorter = t.sorter || e.default_sorter, o
                    },
                    default_sorter: function (t, r) {
                        return t.cost - r.cost
                    },
                    push: function (t, r) {
                        var e = {
                            value: t,
                            cost: r
                        };
                        this.queue.push(e), this.queue.sort(this.sorter)
                    },
                    pop: function () {
                        return this.queue.shift()
                    },
                    empty: function () {
                        return 0 === this.queue.length
                    }
                }
            };
            t.exports = n
        },
        be3c: function (t, r, e) {
            var n = e("7437");

            function o(t) {
                this.mode = n.NUMERIC, this.data = t.toString()
            }
            o.getBitsLength = function (t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function () {
                return this.data.length
            }, o.prototype.getBitsLength = function () {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function (t) {
                var r, e, n;
                for (r = 0; r + 3 <= this.data.length; r += 3) e = this.data.substr(r, 3), n = parseInt(e, 10), t.put(n, 10);
                var o = this.data.length - r;
                o > 0 && (e = this.data.substr(r), n = parseInt(e, 10), t.put(n, 3 * o + 1))
            }, t.exports = o
        },
        d2ce: function (t, r, e) {
            var n = e("7437"),
                o = e("be3c"),
                i = e("70a4"),
                a = e("96a3"),
                u = e("df39"),
                f = e("8ae1"),
                s = e("6a99"),
                h = e("b7cc");

            function c(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function l(t, r, e) {
                var n, o = [];
                while (null !== (n = t.exec(e))) o.push({
                    data: n[0],
                    index: n.index,
                    mode: r,
                    length: n[0].length
                });
                return o
            }

            function g(t) {
                var r, e, o = l(f.NUMERIC, n.NUMERIC, t),
                    i = l(f.ALPHANUMERIC, n.ALPHANUMERIC, t);
                s.isKanjiModeEnabled() ? (r = l(f.BYTE, n.BYTE, t), e = l(f.KANJI, n.KANJI, t)) : (r = l(f.BYTE_KANJI, n.BYTE, t), e = []);
                var a = o.concat(i, r, e);
                return a.sort((function (t, r) {
                    return t.index - r.index
                })).map((function (t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                }))
            }

            function p(t, r) {
                switch (r) {
                    case n.NUMERIC:
                        return o.getBitsLength(t);
                    case n.ALPHANUMERIC:
                        return i.getBitsLength(t);
                    case n.KANJI:
                        return u.getBitsLength(t);
                    case n.BYTE:
                        return a.getBitsLength(t)
                }
            }

            function d(t) {
                return t.reduce((function (t, r) {
                    var e = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return e && e.mode === r.mode ? (t[t.length - 1].data += r.data, t) : (t.push(r), t)
                }), [])
            }

            function y(t) {
                for (var r = [], e = 0; e < t.length; e++) {
                    var o = t[e];
                    switch (o.mode) {
                        case n.NUMERIC:
                            r.push([o, {
                                data: o.data,
                                mode: n.ALPHANUMERIC,
                                length: o.length
                            }, {
                                data: o.data,
                                mode: n.BYTE,
                                length: o.length
                            }]);
                            break;
                        case n.ALPHANUMERIC:
                            r.push([o, {
                                data: o.data,
                                mode: n.BYTE,
                                length: o.length
                            }]);
                            break;
                        case n.KANJI:
                            r.push([o, {
                                data: o.data,
                                mode: n.BYTE,
                                length: c(o.data)
                            }]);
                            break;
                        case n.BYTE:
                            r.push([{
                                data: o.data,
                                mode: n.BYTE,
                                length: c(o.data)
                            }])
                    }
                }
                return r
            }

            function v(t, r) {
                for (var e = {}, o = {
                        start: {}
                    }, i = ["start"], a = 0; a < t.length; a++) {
                    for (var u = t[a], f = [], s = 0; s < u.length; s++) {
                        var h = u[s],
                            c = "" + a + s;
                        f.push(c), e[c] = {
                            node: h,
                            lastCount: 0
                        }, o[c] = {};
                        for (var l = 0; l < i.length; l++) {
                            var g = i[l];
                            e[g] && e[g].node.mode === h.mode ? (o[g][c] = p(e[g].lastCount + h.length, h.mode) - p(e[g].lastCount, h.mode), e[g].lastCount += h.length) : (e[g] && (e[g].lastCount = h.length), o[g][c] = p(h.length, h.mode) + 4 + n.getCharCountIndicator(h.mode, r))
                        }
                    }
                    i = f
                }
                for (l = 0; l < i.length; l++) o[i[l]]["end"] = 0;
                return {
                    map: o,
                    table: e
                }
            }

            function w(t, r) {
                var e, f = n.getBestModeForData(t);
                if (e = n.from(r, f), e !== n.BYTE && e.bit < f.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + n.toString(e) + ".\n Suggested mode is: " + n.toString(f));
                switch (e !== n.KANJI || s.isKanjiModeEnabled() || (e = n.BYTE), e) {
                    case n.NUMERIC:
                        return new o(t);
                    case n.ALPHANUMERIC:
                        return new i(t);
                    case n.KANJI:
                        return new u(t);
                    case n.BYTE:
                        return new a(t)
                }
            }
            r.fromArray = function (t) {
                return t.reduce((function (t, r) {
                    return "string" === typeof r ? t.push(w(r, null)) : r.data && t.push(w(r.data, r.mode)), t
                }), [])
            }, r.fromString = function (t, e) {
                for (var n = g(t, s.isKanjiModeEnabled()), o = y(n), i = v(o, e), a = h.find_path(i.map, "start", "end"), u = [], f = 1; f < a.length - 1; f++) u.push(i.table[a[f]].node);
                return r.fromArray(d(u))
            }, r.rawSplit = function (t) {
                return r.fromArray(g(t, s.isKanjiModeEnabled()))
            }
        },
        df39: function (t, r, e) {
            var n = e("7437"),
                o = e("6a99");

            function i(t) {
                this.mode = n.KANJI, this.data = t
            }
            i.getBitsLength = function (t) {
                return 13 * t
            }, i.prototype.getLength = function () {
                return this.data.length
            }, i.prototype.getBitsLength = function () {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function (t) {
                var r;
                for (r = 0; r < this.data.length; r++) {
                    var e = o.toSJIS(this.data[r]);
                    if (e >= 33088 && e <= 40956) e -= 33088;
                    else {
                        if (!(e >= 57408 && e <= 60351)) throw new Error("Invalid SJIS character: " + this.data[r] + "\nMake sure your charset is UTF-8");
                        e -= 49472
                    }
                    e = 192 * (e >>> 8 & 255) + (255 & e), t.put(e, 13)
                }
            }, t.exports = i
        },
        e0fb: function (t, r, e) {
            var n = e("7b97");

            function o(t, r, e) {
                t.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = e, r.width = e, r.style.height = e + "px", r.style.width = e + "px"
            }

            function i() {
                try {
                    return document.createElement("canvas")
                } catch (t) {
                    throw new Error("You need to specify a canvas element")
                }
            }
            r.render = function (t, r, e) {
                var a = e,
                    u = r;
                "undefined" !== typeof a || r && r.getContext || (a = r, r = void 0), r || (u = i()), a = n.getOptions(a);
                var f = n.getImageWidth(t.modules.size, a),
                    s = u.getContext("2d"),
                    h = s.createImageData(f, f);
                return n.qrToImageData(h.data, t, a), o(s, u, f), s.putImageData(h, 0, 0), u
            }, r.renderToDataURL = function (t, e, n) {
                var o = n;
                "undefined" !== typeof o || e && e.getContext || (o = e, e = void 0), o || (o = {});
                var i = r.render(t, e, o),
                    a = o.type || "image/png",
                    u = o.rendererOpts || {};
                return i.toDataURL(a, u.quality)
            }
        },
        e6a3: function (t, r, e) {
            var n = e("7a14");

            function o(t) {
                if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = n.alloc(t * t), this.reservedBit = n.alloc(t * t)
            }
            o.prototype.set = function (t, r, e, n) {
                var o = t * this.size + r;
                this.data[o] = e, n && (this.reservedBit[o] = !0)
            }, o.prototype.get = function (t, r) {
                return this.data[t * this.size + r]
            }, o.prototype.xor = function (t, r, e) {
                this.data[t * this.size + r] ^= e
            }, o.prototype.isReserved = function (t, r) {
                return this.reservedBit[t * this.size + r]
            }, t.exports = o
        },
        eabe: function (t, r, e) {
            var n = e("ffa5"),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            r.getBlocksCount = function (t, r) {
                switch (r) {
                    case n.L:
                        return o[4 * (t - 1) + 0];
                    case n.M:
                        return o[4 * (t - 1) + 1];
                    case n.Q:
                        return o[4 * (t - 1) + 2];
                    case n.H:
                        return o[4 * (t - 1) + 3];
                    default:
                        return
                }
            }, r.getTotalCodewordsCount = function (t, r) {
                switch (r) {
                    case n.L:
                        return i[4 * (t - 1) + 0];
                    case n.M:
                        return i[4 * (t - 1) + 1];
                    case n.Q:
                        return i[4 * (t - 1) + 2];
                    case n.H:
                        return i[4 * (t - 1) + 3];
                    default:
                        return
                }
            }
        },
        fb22: function (t, r) {
            r.read = function (t, r, e, n, o) {
                var i, a, u = 8 * o - n - 1,
                    f = (1 << u) - 1,
                    s = f >> 1,
                    h = -7,
                    c = e ? o - 1 : 0,
                    l = e ? -1 : 1,
                    g = t[r + c];
                for (c += l, i = g & (1 << -h) - 1, g >>= -h, h += u; h > 0; i = 256 * i + t[r + c], c += l, h -= 8);
                for (a = i & (1 << -h) - 1, i >>= -h, h += n; h > 0; a = 256 * a + t[r + c], c += l, h -= 8);
                if (0 === i) i = 1 - s;
                else {
                    if (i === f) return a ? NaN : 1 / 0 * (g ? -1 : 1);
                    a += Math.pow(2, n), i -= s
                }
                return (g ? -1 : 1) * a * Math.pow(2, i - n)
            }, r.write = function (t, r, e, n, o, i) {
                var a, u, f, s = 8 * i - o - 1,
                    h = (1 << s) - 1,
                    c = h >> 1,
                    l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    g = n ? 0 : i - 1,
                    p = n ? 1 : -1,
                    d = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
                for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), r += a + c >= 1 ? l / f : l * Math.pow(2, 1 - c), r * f >= 2 && (a++, f /= 2), a + c >= h ? (u = 0, a = h) : a + c >= 1 ? (u = (r * f - 1) * Math.pow(2, o), a += c) : (u = r * Math.pow(2, c - 1) * Math.pow(2, o), a = 0)); o >= 8; t[e + g] = 255 & u, g += p, u /= 256, o -= 8);
                for (a = a << o | u, s += o; s > 0; t[e + g] = 255 & a, g += p, a /= 256, s -= 8);
                t[e + g - p] |= 128 * d
            }
        },
        fd40: function (t, r, e) {
            "use strict";
            (function (t) {
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <http://feross.org>
                 * @license  MIT
                 */
                var n = e("27cd"),
                    o = e("fb22"),
                    i = e("571a");

                function a() {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                                return 42
                            }
                        }, 42 === t.foo() && "function" === typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (r) {
                        return !1
                    }
                }

                function u() {
                    return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function f(t, r) {
                    if (u() < r) throw new RangeError("Invalid typed array length");
                    return s.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r), t.__proto__ = s.prototype) : (null === t && (t = new s(r)), t.length = r), t
                }

                function s(t, r, e) {
                    if (!s.TYPED_ARRAY_SUPPORT && !(this instanceof s)) return new s(t, r, e);
                    if ("number" === typeof t) {
                        if ("string" === typeof r) throw new Error("If encoding is specified then the first argument must be a string");
                        return g(this, t)
                    }
                    return h(this, t, r, e)
                }

                function h(t, r, e, n) {
                    if ("number" === typeof r) throw new TypeError('"value" argument must not be a number');
                    return "undefined" !== typeof ArrayBuffer && r instanceof ArrayBuffer ? y(t, r, e, n) : "string" === typeof r ? p(t, r, e) : v(t, r)
                }

                function c(t) {
                    if ("number" !== typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function l(t, r, e, n) {
                    return c(r), r <= 0 ? f(t, r) : void 0 !== e ? "string" === typeof n ? f(t, r).fill(e, n) : f(t, r).fill(e) : f(t, r)
                }

                function g(t, r) {
                    if (c(r), t = f(t, r < 0 ? 0 : 0 | w(r)), !s.TYPED_ARRAY_SUPPORT)
                        for (var e = 0; e < r; ++e) t[e] = 0;
                    return t
                }

                function p(t, r, e) {
                    if ("string" === typeof e && "" !== e || (e = "utf8"), !s.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | m(r, e);
                    t = f(t, n);
                    var o = t.write(r, e);
                    return o !== n && (t = t.slice(0, o)), t
                }

                function d(t, r) {
                    var e = r.length < 0 ? 0 : 0 | w(r.length);
                    t = f(t, e);
                    for (var n = 0; n < e; n += 1) t[n] = 255 & r[n];
                    return t
                }

                function y(t, r, e, n) {
                    if (r.byteLength, e < 0 || r.byteLength < e) throw new RangeError("'offset' is out of bounds");
                    if (r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds");
                    return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), s.TYPED_ARRAY_SUPPORT ? (t = r, t.__proto__ = s.prototype) : t = d(t, r), t
                }

                function v(t, r) {
                    if (s.isBuffer(r)) {
                        var e = 0 | w(r.length);
                        return t = f(t, e), 0 === t.length ? t : (r.copy(t, 0, 0, e), t)
                    }
                    if (r) {
                        if ("undefined" !== typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" !== typeof r.length || rt(r.length) ? f(t, 0) : d(t, r);
                        if ("Buffer" === r.type && i(r.data)) return d(t, r.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }

                function w(t) {
                    if (t >= u()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u().toString(16) + " bytes");
                    return 0 | t
                }

                function E(t) {
                    return +t != t && (t = 0), s.alloc(+t)
                }

                function m(t, r) {
                    if (s.isBuffer(t)) return t.length;
                    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" !== typeof t && (t = "" + t);
                    var e = t.length;
                    if (0 === e) return 0;
                    for (var n = !1;;) switch (r) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return e;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return X(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * e;
                        case "hex":
                            return e >>> 1;
                        case "base64":
                            return G(t).length;
                        default:
                            if (n) return X(t).length;
                            r = ("" + r).toLowerCase(), n = !0
                    }
                }

                function A(t, r, e) {
                    var n = !1;
                    if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
                    if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
                    if (e >>>= 0, r >>>= 0, e <= r) return "";
                    t || (t = "utf8");
                    while (1) switch (t) {
                        case "hex":
                            return D(this, r, e);
                        case "utf8":
                        case "utf-8":
                            return U(this, r, e);
                        case "ascii":
                            return Y(this, r, e);
                        case "latin1":
                        case "binary":
                            return x(this, r, e);
                        case "base64":
                            return M(this, r, e);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return O(this, r, e);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), n = !0
                    }
                }

                function b(t, r, e) {
                    var n = t[r];
                    t[r] = t[e], t[e] = n
                }

                function R(t, r, e, n, o) {
                    if (0 === t.length) return -1;
                    if ("string" === typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = o ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                        if (o) return -1;
                        e = t.length - 1
                    } else if (e < 0) {
                        if (!o) return -1;
                        e = 0
                    }
                    if ("string" === typeof r && (r = s.from(r, n)), s.isBuffer(r)) return 0 === r.length ? -1 : B(t, r, e, n, o);
                    if ("number" === typeof r) return r &= 255, s.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : B(t, [r], e, n, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function B(t, r, e, n, o) {
                    var i, a = 1,
                        u = t.length,
                        f = r.length;
                    if (void 0 !== n && (n = String(n).toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || r.length < 2) return -1;
                        a = 2, u /= 2, f /= 2, e /= 2
                    }

                    function s(t, r) {
                        return 1 === a ? t[r] : t.readUInt16BE(r * a)
                    }
                    if (o) {
                        var h = -1;
                        for (i = e; i < u; i++)
                            if (s(t, i) === s(r, -1 === h ? 0 : i - h)) {
                                if (-1 === h && (h = i), i - h + 1 === f) return h * a
                            } else -1 !== h && (i -= i - h), h = -1
                    } else
                        for (e + f > u && (e = u - f), i = e; i >= 0; i--) {
                            for (var c = !0, l = 0; l < f; l++)
                                if (s(t, i + l) !== s(r, l)) {
                                    c = !1;
                                    break
                                } if (c) return i
                        }
                    return -1
                }

                function P(t, r, e, n) {
                    e = Number(e) || 0;
                    var o = t.length - e;
                    n ? (n = Number(n), n > o && (n = o)) : n = o;
                    var i = r.length;
                    if (i % 2 !== 0) throw new TypeError("Invalid hex string");
                    n > i / 2 && (n = i / 2);
                    for (var a = 0; a < n; ++a) {
                        var u = parseInt(r.substr(2 * a, 2), 16);
                        if (isNaN(u)) return a;
                        t[e + a] = u
                    }
                    return a
                }

                function T(t, r, e, n) {
                    return tt(X(r, t.length - e), t, e, n)
                }

                function _(t, r, e, n) {
                    return tt(Z(r), t, e, n)
                }

                function C(t, r, e, n) {
                    return _(t, r, e, n)
                }

                function I(t, r, e, n) {
                    return tt(G(r), t, e, n)
                }

                function S(t, r, e, n) {
                    return tt(W(r, t.length - e), t, e, n)
                }

                function M(t, r, e) {
                    return 0 === r && e === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(r, e))
                }

                function U(t, r, e) {
                    e = Math.min(t.length, e);
                    var n = [],
                        o = r;
                    while (o < e) {
                        var i, a, u, f, s = t[o],
                            h = null,
                            c = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                        if (o + c <= e) switch (c) {
                            case 1:
                                s < 128 && (h = s);
                                break;
                            case 2:
                                i = t[o + 1], 128 === (192 & i) && (f = (31 & s) << 6 | 63 & i, f > 127 && (h = f));
                                break;
                            case 3:
                                i = t[o + 1], a = t[o + 2], 128 === (192 & i) && 128 === (192 & a) && (f = (15 & s) << 12 | (63 & i) << 6 | 63 & a, f > 2047 && (f < 55296 || f > 57343) && (h = f));
                                break;
                            case 4:
                                i = t[o + 1], a = t[o + 2], u = t[o + 3], 128 === (192 & i) && 128 === (192 & a) && 128 === (192 & u) && (f = (15 & s) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & u, f > 65535 && f < 1114112 && (h = f))
                        }
                        null === h ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), o += c
                    }
                    return L(n)
                }
                r.Buffer = s, r.SlowBuffer = E, r.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : a(), r.kMaxLength = u(), s.poolSize = 8192, s._augment = function (t) {
                    return t.__proto__ = s.prototype, t
                }, s.from = function (t, r, e) {
                    return h(null, t, r, e)
                }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                    value: null,
                    configurable: !0
                })), s.alloc = function (t, r, e) {
                    return l(null, t, r, e)
                }, s.allocUnsafe = function (t) {
                    return g(null, t)
                }, s.allocUnsafeSlow = function (t) {
                    return g(null, t)
                }, s.isBuffer = function (t) {
                    return !(null == t || !t._isBuffer)
                }, s.compare = function (t, r) {
                    if (!s.isBuffer(t) || !s.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
                    if (t === r) return 0;
                    for (var e = t.length, n = r.length, o = 0, i = Math.min(e, n); o < i; ++o)
                        if (t[o] !== r[o]) {
                            e = t[o], n = r[o];
                            break
                        } return e < n ? -1 : n < e ? 1 : 0
                }, s.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
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
                }, s.concat = function (t, r) {
                    if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return s.alloc(0);
                    var e;
                    if (void 0 === r)
                        for (r = 0, e = 0; e < t.length; ++e) r += t[e].length;
                    var n = s.allocUnsafe(r),
                        o = 0;
                    for (e = 0; e < t.length; ++e) {
                        var a = t[e];
                        if (!s.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(n, o), o += a.length
                    }
                    return n
                }, s.byteLength = m, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
                    var t = this.length;
                    if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var r = 0; r < t; r += 2) b(this, r, r + 1);
                    return this
                }, s.prototype.swap32 = function () {
                    var t = this.length;
                    if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var r = 0; r < t; r += 4) b(this, r, r + 3), b(this, r + 1, r + 2);
                    return this
                }, s.prototype.swap64 = function () {
                    var t = this.length;
                    if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var r = 0; r < t; r += 8) b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4);
                    return this
                }, s.prototype.toString = function () {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? U(this, 0, t) : A.apply(this, arguments)
                }, s.prototype.equals = function (t) {
                    if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === s.compare(this, t)
                }, s.prototype.inspect = function () {
                    var t = "",
                        e = r.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
                }, s.prototype.compare = function (t, r, e, n, o) {
                    if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), r < 0 || e > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                    if (n >= o && r >= e) return 0;
                    if (n >= o) return -1;
                    if (r >= e) return 1;
                    if (r >>>= 0, e >>>= 0, n >>>= 0, o >>>= 0, this === t) return 0;
                    for (var i = o - n, a = e - r, u = Math.min(i, a), f = this.slice(n, o), h = t.slice(r, e), c = 0; c < u; ++c)
                        if (f[c] !== h[c]) {
                            i = f[c], a = h[c];
                            break
                        } return i < a ? -1 : a < i ? 1 : 0
                }, s.prototype.includes = function (t, r, e) {
                    return -1 !== this.indexOf(t, r, e)
                }, s.prototype.indexOf = function (t, r, e) {
                    return R(this, t, r, e, !0)
                }, s.prototype.lastIndexOf = function (t, r, e) {
                    return R(this, t, r, e, !1)
                }, s.prototype.write = function (t, r, e, n) {
                    if (void 0 === r) n = "utf8", e = this.length, r = 0;
                    else if (void 0 === e && "string" === typeof r) n = r, e = this.length, r = 0;
                    else {
                        if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        r |= 0, isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0)
                    }
                    var o = this.length - r;
                    if ((void 0 === e || e > o) && (e = o), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var i = !1;;) switch (n) {
                        case "hex":
                            return P(this, t, r, e);
                        case "utf8":
                        case "utf-8":
                            return T(this, t, r, e);
                        case "ascii":
                            return _(this, t, r, e);
                        case "latin1":
                        case "binary":
                            return C(this, t, r, e);
                        case "base64":
                            return I(this, t, r, e);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return S(this, t, r, e);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), i = !0
                    }
                }, s.prototype.toJSON = function () {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var N = 4096;

                function L(t) {
                    var r = t.length;
                    if (r <= N) return String.fromCharCode.apply(String, t);
                    var e = "",
                        n = 0;
                    while (n < r) e += String.fromCharCode.apply(String, t.slice(n, n += N));
                    return e
                }

                function Y(t, r, e) {
                    var n = "";
                    e = Math.min(t.length, e);
                    for (var o = r; o < e; ++o) n += String.fromCharCode(127 & t[o]);
                    return n
                }

                function x(t, r, e) {
                    var n = "";
                    e = Math.min(t.length, e);
                    for (var o = r; o < e; ++o) n += String.fromCharCode(t[o]);
                    return n
                }

                function D(t, r, e) {
                    var n = t.length;
                    (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
                    for (var o = "", i = r; i < e; ++i) o += $(t[i]);
                    return o
                }

                function O(t, r, e) {
                    for (var n = t.slice(r, e), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                    return o
                }

                function k(t, r, e) {
                    if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + r > e) throw new RangeError("Trying to access beyond buffer length")
                }

                function F(t, r, e, n, o, i) {
                    if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (r > o || r < i) throw new RangeError('"value" argument is out of bounds');
                    if (e + n > t.length) throw new RangeError("Index out of range")
                }

                function z(t, r, e, n) {
                    r < 0 && (r = 65535 + r + 1);
                    for (var o = 0, i = Math.min(t.length - e, 2); o < i; ++o) t[e + o] = (r & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
                }

                function J(t, r, e, n) {
                    r < 0 && (r = 4294967295 + r + 1);
                    for (var o = 0, i = Math.min(t.length - e, 4); o < i; ++o) t[e + o] = r >>> 8 * (n ? o : 3 - o) & 255
                }

                function H(t, r, e, n, o, i) {
                    if (e + n > t.length) throw new RangeError("Index out of range");
                    if (e < 0) throw new RangeError("Index out of range")
                }

                function K(t, r, e, n, i) {
                    return i || H(t, r, e, 4, 34028234663852886e22, -34028234663852886e22), o.write(t, r, e, n, 23, 4), e + 4
                }

                function j(t, r, e, n, i) {
                    return i || H(t, r, e, 8, 17976931348623157e292, -17976931348623157e292), o.write(t, r, e, n, 52, 8), e + 8
                }
                s.prototype.slice = function (t, r) {
                    var e, n = this.length;
                    if (t = ~~t, r = void 0 === r ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t), s.TYPED_ARRAY_SUPPORT) e = this.subarray(t, r), e.__proto__ = s.prototype;
                    else {
                        var o = r - t;
                        e = new s(o, void 0);
                        for (var i = 0; i < o; ++i) e[i] = this[i + t]
                    }
                    return e
                }, s.prototype.readUIntLE = function (t, r, e) {
                    t |= 0, r |= 0, e || k(t, r, this.length);
                    var n = this[t],
                        o = 1,
                        i = 0;
                    while (++i < r && (o *= 256)) n += this[t + i] * o;
                    return n
                }, s.prototype.readUIntBE = function (t, r, e) {
                    t |= 0, r |= 0, e || k(t, r, this.length);
                    var n = this[t + --r],
                        o = 1;
                    while (r > 0 && (o *= 256)) n += this[t + --r] * o;
                    return n
                }, s.prototype.readUInt8 = function (t, r) {
                    return r || k(t, 1, this.length), this[t]
                }, s.prototype.readUInt16LE = function (t, r) {
                    return r || k(t, 2, this.length), this[t] | this[t + 1] << 8
                }, s.prototype.readUInt16BE = function (t, r) {
                    return r || k(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, s.prototype.readUInt32LE = function (t, r) {
                    return r || k(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, s.prototype.readUInt32BE = function (t, r) {
                    return r || k(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, s.prototype.readIntLE = function (t, r, e) {
                    t |= 0, r |= 0, e || k(t, r, this.length);
                    var n = this[t],
                        o = 1,
                        i = 0;
                    while (++i < r && (o *= 256)) n += this[t + i] * o;
                    return o *= 128, n >= o && (n -= Math.pow(2, 8 * r)), n
                }, s.prototype.readIntBE = function (t, r, e) {
                    t |= 0, r |= 0, e || k(t, r, this.length);
                    var n = r,
                        o = 1,
                        i = this[t + --n];
                    while (n > 0 && (o *= 256)) i += this[t + --n] * o;
                    return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i
                }, s.prototype.readInt8 = function (t, r) {
                    return r || k(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, s.prototype.readInt16LE = function (t, r) {
                    r || k(t, 2, this.length);
                    var e = this[t] | this[t + 1] << 8;
                    return 32768 & e ? 4294901760 | e : e
                }, s.prototype.readInt16BE = function (t, r) {
                    r || k(t, 2, this.length);
                    var e = this[t + 1] | this[t] << 8;
                    return 32768 & e ? 4294901760 | e : e
                }, s.prototype.readInt32LE = function (t, r) {
                    return r || k(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, s.prototype.readInt32BE = function (t, r) {
                    return r || k(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, s.prototype.readFloatLE = function (t, r) {
                    return r || k(t, 4, this.length), o.read(this, t, !0, 23, 4)
                }, s.prototype.readFloatBE = function (t, r) {
                    return r || k(t, 4, this.length), o.read(this, t, !1, 23, 4)
                }, s.prototype.readDoubleLE = function (t, r) {
                    return r || k(t, 8, this.length), o.read(this, t, !0, 52, 8)
                }, s.prototype.readDoubleBE = function (t, r) {
                    return r || k(t, 8, this.length), o.read(this, t, !1, 52, 8)
                }, s.prototype.writeUIntLE = function (t, r, e, n) {
                    if (t = +t, r |= 0, e |= 0, !n) {
                        var o = Math.pow(2, 8 * e) - 1;
                        F(this, t, r, e, o, 0)
                    }
                    var i = 1,
                        a = 0;
                    this[r] = 255 & t;
                    while (++a < e && (i *= 256)) this[r + a] = t / i & 255;
                    return r + e
                }, s.prototype.writeUIntBE = function (t, r, e, n) {
                    if (t = +t, r |= 0, e |= 0, !n) {
                        var o = Math.pow(2, 8 * e) - 1;
                        F(this, t, r, e, o, 0)
                    }
                    var i = e - 1,
                        a = 1;
                    this[r + i] = 255 & t;
                    while (--i >= 0 && (a *= 256)) this[r + i] = t / a & 255;
                    return r + e
                }, s.prototype.writeUInt8 = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1
                }, s.prototype.writeUInt16LE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : z(this, t, r, !0), r + 2
                }, s.prototype.writeUInt16BE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : z(this, t, r, !1), r + 2
                }, s.prototype.writeUInt32LE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : J(this, t, r, !0), r + 4
                }, s.prototype.writeUInt32BE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : J(this, t, r, !1), r + 4
                }, s.prototype.writeIntLE = function (t, r, e, n) {
                    if (t = +t, r |= 0, !n) {
                        var o = Math.pow(2, 8 * e - 1);
                        F(this, t, r, e, o - 1, -o)
                    }
                    var i = 0,
                        a = 1,
                        u = 0;
                    this[r] = 255 & t;
                    while (++i < e && (a *= 256)) t < 0 && 0 === u && 0 !== this[r + i - 1] && (u = 1), this[r + i] = (t / a >> 0) - u & 255;
                    return r + e
                }, s.prototype.writeIntBE = function (t, r, e, n) {
                    if (t = +t, r |= 0, !n) {
                        var o = Math.pow(2, 8 * e - 1);
                        F(this, t, r, e, o - 1, -o)
                    }
                    var i = e - 1,
                        a = 1,
                        u = 0;
                    this[r + i] = 255 & t;
                    while (--i >= 0 && (a *= 256)) t < 0 && 0 === u && 0 !== this[r + i + 1] && (u = 1), this[r + i] = (t / a >> 0) - u & 255;
                    return r + e
                }, s.prototype.writeInt8 = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1
                }, s.prototype.writeInt16LE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : z(this, t, r, !0), r + 2
                }, s.prototype.writeInt16BE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : z(this, t, r, !1), r + 2
                }, s.prototype.writeInt32LE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : J(this, t, r, !0), r + 4
                }, s.prototype.writeInt32BE = function (t, r, e) {
                    return t = +t, r |= 0, e || F(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), s.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : J(this, t, r, !1), r + 4
                }, s.prototype.writeFloatLE = function (t, r, e) {
                    return K(this, t, r, !0, e)
                }, s.prototype.writeFloatBE = function (t, r, e) {
                    return K(this, t, r, !1, e)
                }, s.prototype.writeDoubleLE = function (t, r, e) {
                    return j(this, t, r, !0, e)
                }, s.prototype.writeDoubleBE = function (t, r, e) {
                    return j(this, t, r, !1, e)
                }, s.prototype.copy = function (t, r, e, n) {
                    if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (r < 0) throw new RangeError("targetStart out of bounds");
                    if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
                    var o, i = n - e;
                    if (this === t && e < r && r < n)
                        for (o = i - 1; o >= 0; --o) t[o + r] = this[o + e];
                    else if (i < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < i; ++o) t[o + r] = this[o + e];
                    else Uint8Array.prototype.set.call(t, this.subarray(e, e + i), r);
                    return i
                }, s.prototype.fill = function (t, r, e, n) {
                    if ("string" === typeof t) {
                        if ("string" === typeof r ? (n = r, r = 0, e = this.length) : "string" === typeof e && (n = e, e = this.length), 1 === t.length) {
                            var o = t.charCodeAt(0);
                            o < 256 && (t = o)
                        }
                        if (void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                        if ("string" === typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                    } else "number" === typeof t && (t &= 255);
                    if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
                    if (e <= r) return this;
                    var i;
                    if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" === typeof t)
                        for (i = r; i < e; ++i) this[i] = t;
                    else {
                        var a = s.isBuffer(t) ? t : X(new s(t, n).toString()),
                            u = a.length;
                        for (i = 0; i < e - r; ++i) this[i + r] = a[i % u]
                    }
                    return this
                };
                var V = /[^+\/0-9A-Za-z-_]/g;

                function q(t) {
                    if (t = Q(t).replace(V, ""), t.length < 2) return "";
                    while (t.length % 4 !== 0) t += "=";
                    return t
                }

                function Q(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }

                function $(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function X(t, r) {
                    var e;
                    r = r || 1 / 0;
                    for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
                        if (e = t.charCodeAt(a), e > 55295 && e < 57344) {
                            if (!o) {
                                if (e > 56319) {
                                    (r -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === n) {
                                    (r -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                o = e;
                                continue
                            }
                            if (e < 56320) {
                                (r -= 3) > -1 && i.push(239, 191, 189), o = e;
                                continue
                            }
                            e = 65536 + (o - 55296 << 10 | e - 56320)
                        } else o && (r -= 3) > -1 && i.push(239, 191, 189);
                        if (o = null, e < 128) {
                            if ((r -= 1) < 0) break;
                            i.push(e)
                        } else if (e < 2048) {
                            if ((r -= 2) < 0) break;
                            i.push(e >> 6 | 192, 63 & e | 128)
                        } else if (e < 65536) {
                            if ((r -= 3) < 0) break;
                            i.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                        } else {
                            if (!(e < 1114112)) throw new Error("Invalid code point");
                            if ((r -= 4) < 0) break;
                            i.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                        }
                    }
                    return i
                }

                function Z(t) {
                    for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
                    return r
                }

                function W(t, r) {
                    for (var e, n, o, i = [], a = 0; a < t.length; ++a) {
                        if ((r -= 2) < 0) break;
                        e = t.charCodeAt(a), n = e >> 8, o = e % 256, i.push(o), i.push(n)
                    }
                    return i
                }

                function G(t) {
                    return n.toByteArray(q(t))
                }

                function tt(t, r, e, n) {
                    for (var o = 0; o < n; ++o) {
                        if (o + e >= r.length || o >= t.length) break;
                        r[o + e] = t[o]
                    }
                    return o
                }

                function rt(t) {
                    return t !== t
                }
            }).call(this, e("0288"))
        },
        ffa5: function (t, r) {
            function e(t) {
                if ("string" !== typeof t) throw new Error("Param is not a string");
                var e = t.toLowerCase();
                switch (e) {
                    case "l":
                    case "low":
                        return r.L;
                    case "m":
                    case "medium":
                        return r.M;
                    case "q":
                    case "quartile":
                        return r.Q;
                    case "h":
                    case "high":
                        return r.H;
                    default:
                        throw new Error("Unknown EC Level: " + t)
                }
            }
            r.L = {
                bit: 1
            }, r.M = {
                bit: 0
            }, r.Q = {
                bit: 3
            }, r.H = {
                bit: 2
            }, r.isValid = function (t) {
                return t && "undefined" !== typeof t.bit && t.bit >= 0 && t.bit < 4
            }, r.from = function (t, n) {
                if (r.isValid(t)) return t;
                try {
                    return e(t)
                } catch (o) {
                    return n
                }
            }
        }
    }
]);