/*! Terms: https://developers.google.com/terms */
(function () {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var h;
    function aa(a) {
        var b = 0;
        return function () {
            return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
        };
    }
    var ba =
            "function" == typeof Object.create
                ? Object.create
                : function (a) {
                      function b() {}
                      b.prototype = a;
                      return new b();
                  },
        ca =
            "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (a, b, c) {
                      if (a == Array.prototype || a == Object.prototype) return a;
                      a[b] = c.value;
                      return a;
                  };
    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this);
    function fa(a, b) {
        if (b)
            a: {
                var c = ea;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e];
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ca(c, a, { configurable: !0, writable: !0, value: b });
            }
    }
    var ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = { ag: !0 },
                la = {};
            try {
                la.__proto__ = ja;
                ia = la.ag;
                break a;
            } catch (a) {}
            ia = !1;
        }
        ha = ia
            ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                  return a;
              }
            : null;
    }
    var ma = ha;
    function p(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (ma) ma(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d);
                    } else a[c] = b[c];
        a.$ = b.prototype;
    }
    fa("Symbol", function (a) {
        function b(e) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c("jscomp_symbol_" + (e || "") + "_" + d++, e);
        }
        function c(e, f) {
            this.Gf = e;
            ca(this, "description", { configurable: !0, writable: !0, value: f });
        }
        if (a) return a;
        c.prototype.toString = function () {
            return this.Gf;
        };
        var d = 0;
        return b;
    });
    fa("Symbol.iterator", function (a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d &&
                "function" != typeof d.prototype[a] &&
                ca(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        return na(aa(this));
                    },
                });
        }
        return a;
    });
    function na(a) {
        a = { next: a };
        a[Symbol.iterator] = function () {
            return this;
        };
        return a;
    }
    function oa(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function () {
                    if (c < a.length) {
                        var e = c++;
                        return { value: b(e, a[e]), done: !1 };
                    }
                    d.next = function () {
                        return { done: !0, value: void 0 };
                    };
                    return d.next();
                },
            };
        d[Symbol.iterator] = function () {
            return d;
        };
        return d;
    }
    fa("Array.prototype.values", function (a) {
        return a
            ? a
            : function () {
                  return oa(this, function (b, c) {
                      return c;
                  });
              };
    });
    fa("Array.prototype.keys", function (a) {
        return a
            ? a
            : function () {
                  return oa(this, function (b) {
                      return b;
                  });
              };
    });
    fa("Object.is", function (a) {
        return a
            ? a
            : function (b, c) {
                  return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
              };
    });
    fa("Array.prototype.includes", function (a) {
        return a
            ? a
            : function (b, c) {
                  var d = this;
                  d instanceof String && (d = String(d));
                  var e = d.length;
                  c = c || 0;
                  for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                      var f = d[c];
                      if (f === b || Object.is(f, b)) return !0;
                  }
                  return !1;
              };
    });
    fa("String.prototype.includes", function (a) {
        return a
            ? a
            : function (b, c) {
                  if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
                  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
                  return -1 !== (this + "").indexOf(b, c || 0);
              };
    });
    var q = this || self,
        pa = /^[\w+/_-]+[=]{0,2}$/,
        qa = null;
    function sa(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && pa.test(a) ? a : "";
    }
    function ta() {}
    function ua(a) {
        a.Ma = void 0;
        a.Hd = function () {
            return a.Ma ? a.Ma : (a.Ma = new a());
        };
    }
    function va(a) {
        var b = typeof a;
        return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    }
    function wa(a) {
        var b = va(a);
        return "array" == b || ("object" == b && "number" == typeof a.length);
    }
    function xa(a) {
        return "function" == va(a);
    }
    function t(a) {
        var b = typeof a;
        return ("object" == b && null != a) || "function" == b;
    }
    function ya(a, b, c) {
        return a.call.apply(a.bind, arguments);
    }
    function za(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    }
    function u(a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya : za;
        return u.apply(null, arguments);
    }
    function Aa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
        };
    }
    function v(a, b) {
        for (var c in b) a[c] = b[c];
    }
    var Ba = Date.now;
    function w(a, b) {
        a = a.split(".");
        var c = q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); ) a.length || void 0 === b ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {})) : (c[d] = b);
    }
    function x(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.$ = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
    }
    function Ca(a) {
        return a;
    }
    function Da(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Da);
        else {
            var b = Error().stack;
            b && (this.stack = b);
        }
        a && (this.message = String(a));
    }
    x(Da, Error);
    Da.prototype.name = "CustomError";
    var Ea;
    function Fa(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Da.call(this, c + a[d]);
    }
    x(Fa, Da);
    Fa.prototype.name = "AssertionError";
    function Ga(a, b) {
        throw new Fa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    var Ha = Array.prototype.indexOf
            ? function (a, b) {
                  return Array.prototype.indexOf.call(a, b, void 0);
              }
            : function (a, b) {
                  if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
                  for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
                  return -1;
              },
        Ia = Array.prototype.forEach
            ? function (a, b, c) {
                  Array.prototype.forEach.call(a, b, c);
              }
            : function (a, b, c) {
                  for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
              };
    function Ja(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
    }
    var Ka = Array.prototype.filter
            ? function (a, b) {
                  return Array.prototype.filter.call(a, b, void 0);
              }
            : function (a, b) {
                  for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                      if (g in f) {
                          var k = f[g];
                          b.call(void 0, k, g, a) && (d[e++] = k);
                      }
                  return d;
              },
        La = Array.prototype.map
            ? function (a, b) {
                  return Array.prototype.map.call(a, b, void 0);
              }
            : function (a, b) {
                  for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
                  return d;
              },
        Ma = Array.prototype.some
            ? function (a, b) {
                  return Array.prototype.some.call(a, b, void 0);
              }
            : function (a, b) {
                  for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
                  return !1;
              };
    function Na(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f;
        return -1;
    }
    function Oa(a, b) {
        return 0 <= Ha(a, b);
    }
    function Pa(a, b) {
        b = Ha(a, b);
        var c;
        (c = 0 <= b) && Qa(a, b);
        return c;
    }
    function Qa(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length;
    }
    function Ra(a, b) {
        b = Na(a, b, void 0);
        0 <= b && Qa(a, b);
    }
    function Sa(a, b) {
        var c = 0;
        Ja(a, function (d, e) {
            b.call(void 0, d, e, a) && Qa(a, e) && c++;
        });
    }
    function Ta(a) {
        return Array.prototype.concat.apply([], arguments);
    }
    function Ua(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c;
        }
        return [];
    }
    function Va(a, b, c, d) {
        return Array.prototype.splice.apply(a, Wa(arguments, 1));
    }
    function Wa(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    }
    function Xa(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a);
    }
    function Ya(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
        return !1;
    }
    function Za(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b;
    }
    var $a = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function bb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < $a.length; f++) (c = $a[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
    }
    var cb;
    function db() {
        if (void 0 === cb) {
            var a = null,
                b = q.trustedTypes;
            if (b && b.createPolicy)
                try {
                    a = b.createPolicy("goog#html", { createHTML: Ca, createScript: Ca, createScriptURL: Ca });
                } catch (c) {
                    q.console && q.console.error(c.message);
                }
            cb = a;
        }
        return cb;
    }
    function eb(a, b) {
        this.ge = (a === fb && b) || "";
        this.Zf = gb;
    }
    eb.prototype.Ta = !0;
    eb.prototype.La = function () {
        return this.ge;
    };
    eb.prototype.toString = function () {
        return "Const{" + this.ge + "}";
    };
    function hb(a) {
        if (a instanceof eb && a.constructor === eb && a.Zf === gb) return a.ge;
        Ga("expected object of type Const, got '" + a + "'");
        return "type_error:Const";
    }
    var gb = {},
        fb = {};
    function ib(a, b) {
        this.Xd = (a === jb && b) || "";
        this.$f = kb;
    }
    h = ib.prototype;
    h.Ta = !0;
    h.La = function () {
        return this.Xd.toString();
    };
    h.Pd = !0;
    h.Hc = function () {
        return 1;
    };
    h.toString = function () {
        return "TrustedResourceUrl{" + this.Xd + "}";
    };
    function lb(a) {
        if (a instanceof ib && a.constructor === ib && a.$f === kb) return a.Xd;
        Ga("expected object of type TrustedResourceUrl, got '" + a + "' of type " + va(a));
        return "type_error:TrustedResourceUrl";
    }
    var kb = {};
    function mb(a) {
        var b = db();
        a = b ? b.createScriptURL(a) : a;
        return new ib(jb, a);
    }
    var jb = {};
    var nb = String.prototype.trim
        ? function (a) {
              return a.trim();
          }
        : function (a) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
          };
    function ob(a, b) {
        if (b) a = a.replace(pb, "&amp;").replace(qb, "&lt;").replace(rb, "&gt;").replace(sb, "&quot;").replace(tb, "&#39;").replace(ub, "&#0;");
        else {
            if (!vb.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(pb, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(qb, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(rb, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(sb, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(tb, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(ub, "&#0;"));
        }
        return a;
    }
    var pb = /&/g,
        qb = /</g,
        rb = />/g,
        sb = /"/g,
        tb = /'/g,
        ub = /\x00/g,
        vb = /[\x00&<>"']/;
    function wb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }
    function xb(a, b) {
        this.Wd = (a === yb && b) || "";
        this.Yf = zb;
    }
    h = xb.prototype;
    h.Ta = !0;
    h.La = function () {
        return this.Wd.toString();
    };
    h.Pd = !0;
    h.Hc = function () {
        return 1;
    };
    h.toString = function () {
        return "SafeUrl{" + this.Wd + "}";
    };
    function Ab(a) {
        if (a instanceof xb && a.constructor === xb && a.Yf === zb) return a.Wd;
        Ga("expected object of type SafeUrl, got '" + a + "' of type " + va(a));
        return "type_error:SafeUrl";
    }
    var Bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Cb(a) {
        if (a instanceof xb) return a;
        a = "object" == typeof a && a.Ta ? a.La() : String(a);
        return Bb.test(a) ? new xb(yb, a) : null;
    }
    function Db(a) {
        if (a instanceof xb) return a;
        a = "object" == typeof a && a.Ta ? a.La() : String(a);
        Bb.test(a) || (a = "about:invalid#zClosurez");
        return new xb(yb, a);
    }
    var zb = {},
        Eb = new xb(yb, "about:invalid#zClosurez"),
        yb = {};
    function Fb() {
        this.ad = "";
        this.Xf = Gb;
    }
    Fb.prototype.Ta = !0;
    var Gb = {};
    Fb.prototype.La = function () {
        return this.ad;
    };
    Fb.prototype.toString = function () {
        return "SafeStyle{" + this.ad + "}";
    };
    Fb.prototype.rb = function (a) {
        this.ad = a;
        return this;
    };
    new Fb().rb("");
    function Hb() {
        this.$c = "";
        this.Wf = Ib;
    }
    Hb.prototype.Ta = !0;
    var Ib = {};
    Hb.prototype.La = function () {
        return this.$c;
    };
    Hb.prototype.toString = function () {
        return "SafeStyleSheet{" + this.$c + "}";
    };
    Hb.prototype.rb = function (a) {
        this.$c = a;
        return this;
    };
    new Hb().rb("");
    var Jb;
    a: {
        var Kb = q.navigator;
        if (Kb) {
            var Lb = Kb.userAgent;
            if (Lb) {
                Jb = Lb;
                break a;
            }
        }
        Jb = "";
    }
    function y(a) {
        return -1 != Jb.indexOf(a);
    }
    function Nb() {
        return (y("Chrome") || y("CriOS")) && !y("Edge");
    }
    function Ob() {
        this.tc = "";
        this.Vf = Pb;
        this.Dd = null;
    }
    h = Ob.prototype;
    h.Pd = !0;
    h.Hc = function () {
        return this.Dd;
    };
    h.Ta = !0;
    h.La = function () {
        return this.tc.toString();
    };
    h.toString = function () {
        return "SafeHtml{" + this.tc + "}";
    };
    function Qb(a) {
        if (a instanceof Ob && a.constructor === Ob && a.Vf === Pb) return a.tc;
        Ga("expected object of type SafeHtml, got '" + a + "' of type " + va(a));
        return "type_error:SafeHtml";
    }
    function Rb(a) {
        if (a instanceof Ob) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Pd && (c = a.Hc());
        a = ob(b && a.Ta ? a.La() : String(a));
        return new Ob().rb(a, c);
    }
    var Pb = {};
    Ob.prototype.rb = function (a, b) {
        var c = db();
        this.tc = c ? c.createHTML(a) : a;
        this.Dd = b;
        return this;
    };
    var Sb = new Ob();
    Sb.tc = q.trustedTypes && q.trustedTypes.emptyHTML ? q.trustedTypes.emptyHTML : "";
    Sb.Dd = 0;
    function Tb(a, b) {
        var c = Ub(a);
        c && "undefined" != typeof c[b] && ((a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element))) || Ga("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, Vb(a)));
    }
    function Vb(a) {
        if (t(a))
            try {
                return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
            } catch (b) {
                return "<object could not be stringified>";
            }
        else return void 0 === a ? "undefined" : null === a ? "null" : typeof a;
    }
    function Ub(a) {
        try {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c || q;
            if (c.Element && c.Location) return c;
        } catch (d) {}
        return null;
    }
    var Wb = (function (a) {
        var b = !1,
            c;
        return function () {
            b || ((c = a()), (b = !0));
            return c;
        };
    })(function () {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Qb(Sb);
        return !b.parentElement;
    });
    function Xb(a, b) {
        Tb(a, "HTMLScriptElement");
        a.src = lb(b);
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b != q ? (b = sa(b.document)) : (null === qa && (qa = sa(q.document)), (b = qa));
        b && a.setAttribute("nonce", b);
    }
    function Yb(a, b) {
        var c = Ub(a);
        c && (!a || (!(a instanceof c.Location) && a instanceof c.Element)) && Ga("Argument is not a Location (or a non-Element mock); got: %s", Vb(a));
        b = b instanceof xb ? b : Db(b);
        a.assign(Ab(b));
    }
    function Zb(a, b, c, d) {
        a = a instanceof xb ? a : Db(a);
        b = b || q;
        c = c instanceof eb ? hb(c) : c || "";
        return b.open(Ab(a), c, d, void 0);
    }
    function $b(a) {
        return (a = ob(a, void 0));
    }
    var ac = "StopIteration" in q ? q.StopIteration : { message: "StopIteration", stack: "" };
    function bc() {}
    bc.prototype.next = function () {
        throw ac;
    };
    bc.prototype.gb = function () {
        return this;
    };
    function cc(a) {
        if (a instanceof bc) return a;
        if ("function" == typeof a.gb) return a.gb(!1);
        if (wa(a)) {
            var b = 0,
                c = new bc();
            c.next = function () {
                for (;;) {
                    if (b >= a.length) throw ac;
                    if (b in a) return a[b++];
                    b++;
                }
            };
            return c;
        }
        throw Error("Not implemented");
    }
    function dc(a, b) {
        if (wa(a))
            try {
                Ia(a, b, void 0);
            } catch (c) {
                if (c !== ac) throw c;
            }
        else {
            a = cc(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a);
            } catch (c) {
                if (c !== ac) throw c;
            }
        }
    }
    function ec(a) {
        if (wa(a)) return Ua(a);
        a = cc(a);
        var b = [];
        dc(a, function (c) {
            b.push(c);
        });
        return b;
    }
    function fc(a, b) {
        this.Ba = {};
        this.J = [];
        this.Rb = this.M = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
        } else a && this.addAll(a);
    }
    h = fc.prototype;
    h.sa = function () {
        gc(this);
        for (var a = [], b = 0; b < this.J.length; b++) a.push(this.Ba[this.J[b]]);
        return a;
    };
    h.Ja = function () {
        gc(this);
        return this.J.concat();
    };
    h.Za = function (a) {
        return hc(this.Ba, a);
    };
    h.ic = function () {
        return 0 == this.M;
    };
    h.clear = function () {
        this.Ba = {};
        this.Rb = this.M = this.J.length = 0;
    };
    h.remove = function (a) {
        return hc(this.Ba, a) ? (delete this.Ba[a], this.M--, this.Rb++, this.J.length > 2 * this.M && gc(this), !0) : !1;
    };
    function gc(a) {
        if (a.M != a.J.length) {
            for (var b = 0, c = 0; b < a.J.length; ) {
                var d = a.J[b];
                hc(a.Ba, d) && (a.J[c++] = d);
                b++;
            }
            a.J.length = c;
        }
        if (a.M != a.J.length) {
            var e = {};
            for (c = b = 0; b < a.J.length; ) (d = a.J[b]), hc(e, d) || ((a.J[c++] = d), (e[d] = 1)), b++;
            a.J.length = c;
        }
    }
    h.get = function (a, b) {
        return hc(this.Ba, a) ? this.Ba[a] : b;
    };
    h.set = function (a, b) {
        hc(this.Ba, a) || (this.M++, this.J.push(a), this.Rb++);
        this.Ba[a] = b;
    };
    h.addAll = function (a) {
        if (a instanceof fc) for (var b = a.Ja(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else for (b in a) this.set(b, a[b]);
    };
    h.forEach = function (a, b) {
        for (var c = this.Ja(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this);
        }
    };
    h.clone = function () {
        return new fc(this);
    };
    h.gb = function (a) {
        gc(this);
        var b = 0,
            c = this.Rb,
            d = this,
            e = new bc();
        e.next = function () {
            if (c != d.Rb) throw Error("The map has changed since the iterator was created");
            if (b >= d.J.length) throw ac;
            var f = d.J[b++];
            return a ? f : d.Ba[f];
        };
        return e;
    };
    function hc(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function ic(a) {
        if (a.sa && "function" == typeof a.sa) return a.sa();
        if ("string" === typeof a) return a.split("");
        if (wa(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b;
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b;
    }
    function jc(a) {
        if (a.Ja && "function" == typeof a.Ja) return a.Ja();
        if (!a.sa || "function" != typeof a.sa) {
            if (wa(a) || "string" === typeof a) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b;
            }
            b = [];
            c = 0;
            for (var d in a) b[c++] = d;
            return b;
        }
    }
    function kc(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (wa(a) || "string" === typeof a) Ia(a, b, c);
        else for (var d = jc(a), e = ic(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a);
    }
    var lc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function mc(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1);
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
            }
        }
    }
    function nc(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f) if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f)) return b;
            b += e + 1;
        }
        return -1;
    }
    var oc = /#|$/;
    function pc(a, b) {
        var c = a.search(oc),
            d = nc(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
    }
    var qc = /[?&]($|#)/;
    function rc(a, b) {
        this.qa = this.yb = this.fb = "";
        this.Kb = null;
        this.lb = this.na = "";
        this.ta = this.Vg = !1;
        if (a instanceof rc) {
            this.ta = void 0 !== b ? b : a.ta;
            sc(this, a.fb);
            var c = a.yb;
            tc(this);
            this.yb = c;
            c = a.qa;
            tc(this);
            this.qa = c;
            uc(this, a.Kb);
            c = a.na;
            tc(this);
            this.na = c;
            vc(this, a.V.clone());
            a = a.lb;
            tc(this);
            this.lb = a;
        } else
            a && (c = String(a).match(lc))
                ? ((this.ta = !!b),
                  sc(this, c[1] || "", !0),
                  (a = c[2] || ""),
                  tc(this),
                  (this.yb = wc(a)),
                  (a = c[3] || ""),
                  tc(this),
                  (this.qa = wc(a, !0)),
                  uc(this, c[4]),
                  (a = c[5] || ""),
                  tc(this),
                  (this.na = wc(a, !0)),
                  vc(this, c[6] || "", !0),
                  (a = c[7] || ""),
                  tc(this),
                  (this.lb = wc(a)))
                : ((this.ta = !!b), (this.V = new xc(null, this.ta)));
    }
    h = rc.prototype;
    h.toString = function () {
        var a = [],
            b = this.fb;
        b && a.push(yc(b, zc, !0), ":");
        var c = this.qa;
        if (c || "file" == b) a.push("//"), (b = this.yb) && a.push(yc(b, zc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), (c = this.Kb), null != c && a.push(":", String(c));
        if ((c = this.na)) this.qa && "/" != c.charAt(0) && a.push("/"), a.push(yc(c, "/" == c.charAt(0) ? Ac : Bc, !0));
        (c = this.V.toString()) && a.push("?", c);
        (c = this.lb) && a.push("#", yc(c, Cc));
        return a.join("");
    };
    h.resolve = function (a) {
        var b = this.clone(),
            c = !!a.fb;
        c ? sc(b, a.fb) : (c = !!a.yb);
        if (c) {
            var d = a.yb;
            tc(b);
            b.yb = d;
        } else c = !!a.qa;
        c ? ((d = a.qa), tc(b), (b.qa = d)) : (c = null != a.Kb);
        d = a.na;
        if (c) uc(b, a.Kb);
        else if ((c = !!a.na)) {
            if ("/" != d.charAt(0))
                if (this.qa && !this.na) d = "/" + d;
                else {
                    var e = b.na.lastIndexOf("/");
                    -1 != e && (d = b.na.substr(0, e + 1) + d);
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), (d = !0));
                }
                d = f.join("/");
            } else d = e;
        }
        c ? (tc(b), (b.na = d)) : (c = "" !== a.V.toString());
        c ? vc(b, a.V.clone()) : (c = !!a.lb);
        c && ((a = a.lb), tc(b), (b.lb = a));
        return b;
    };
    h.clone = function () {
        return new rc(this);
    };
    function sc(a, b, c) {
        tc(a);
        a.fb = c ? wc(b, !0) : b;
        a.fb && (a.fb = a.fb.replace(/:$/, ""));
    }
    function uc(a, b) {
        tc(a);
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.Kb = b;
        } else a.Kb = null;
    }
    function vc(a, b, c) {
        tc(a);
        b instanceof xc ? ((a.V = b), a.V.be(a.ta)) : (c || (b = yc(b, Dc)), (a.V = new xc(b, a.ta)));
    }
    h.getQuery = function () {
        return this.V.toString();
    };
    function Ec(a, b, c) {
        tc(a);
        a.V.set(b, c);
    }
    h.removeParameter = function (a) {
        tc(this);
        this.V.remove(a);
        return this;
    };
    function tc(a) {
        if (a.Vg) throw Error("Tried to modify a read-only Uri");
    }
    h.be = function (a) {
        this.ta = a;
        this.V && this.V.be(a);
    };
    function Fc(a) {
        return a instanceof rc ? a.clone() : new rc(a, void 0);
    }
    function Gc(a, b) {
        a instanceof rc || (a = Fc(a));
        b instanceof rc || (b = Fc(b));
        return a.resolve(b);
    }
    function wc(a, b) {
        return a ? (b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a)) : "";
    }
    function yc(a, b, c) {
        return "string" === typeof a ? ((a = encodeURI(a).replace(b, Hc)), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }
    function Hc(a) {
        a = a.charCodeAt(0);
        return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    }
    var zc = /[#\/\?@]/g,
        Bc = /[#\?:]/g,
        Ac = /[#\?]/g,
        Dc = /[#\?@]/g,
        Cc = /#/g;
    function xc(a, b) {
        this.M = this.P = null;
        this.ma = a || null;
        this.ta = !!b;
    }
    function Ic(a) {
        a.P ||
            ((a.P = new fc()),
            (a.M = 0),
            a.ma &&
                mc(a.ma, function (b, c) {
                    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
                }));
    }
    h = xc.prototype;
    h.add = function (a, b) {
        Ic(this);
        this.ma = null;
        a = Jc(this, a);
        var c = this.P.get(a);
        c || this.P.set(a, (c = []));
        c.push(b);
        this.M += 1;
        return this;
    };
    h.remove = function (a) {
        Ic(this);
        a = Jc(this, a);
        return this.P.Za(a) ? ((this.ma = null), (this.M -= this.P.get(a).length), this.P.remove(a)) : !1;
    };
    h.clear = function () {
        this.P = this.ma = null;
        this.M = 0;
    };
    h.ic = function () {
        Ic(this);
        return 0 == this.M;
    };
    h.Za = function (a) {
        Ic(this);
        a = Jc(this, a);
        return this.P.Za(a);
    };
    h.forEach = function (a, b) {
        Ic(this);
        this.P.forEach(function (c, d) {
            Ia(
                c,
                function (e) {
                    a.call(b, e, d, this);
                },
                this
            );
        }, this);
    };
    h.Ja = function () {
        Ic(this);
        for (var a = this.P.sa(), b = this.P.Ja(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c;
    };
    h.sa = function (a) {
        Ic(this);
        var b = [];
        if ("string" === typeof a) this.Za(a) && (b = Ta(b, this.P.get(Jc(this, a))));
        else {
            a = this.P.sa();
            for (var c = 0; c < a.length; c++) b = Ta(b, a[c]);
        }
        return b;
    };
    h.set = function (a, b) {
        Ic(this);
        this.ma = null;
        a = Jc(this, a);
        this.Za(a) && (this.M -= this.P.get(a).length);
        this.P.set(a, [b]);
        this.M += 1;
        return this;
    };
    h.get = function (a, b) {
        if (!a) return b;
        a = this.sa(a);
        return 0 < a.length ? String(a[0]) : b;
    };
    h.toString = function () {
        if (this.ma) return this.ma;
        if (!this.P) return "";
        for (var a = [], b = this.P.Ja(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.sa(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g);
            }
        }
        return (this.ma = a.join("&"));
    };
    h.clone = function () {
        var a = new xc();
        a.ma = this.ma;
        this.P && ((a.P = this.P.clone()), (a.M = this.M));
        return a;
    };
    function Jc(a, b) {
        b = String(b);
        a.ta && (b = b.toLowerCase());
        return b;
    }
    h.be = function (a) {
        a &&
            !this.ta &&
            (Ic(this),
            (this.ma = null),
            this.P.forEach(function (b, c) {
                var d = c.toLowerCase();
                c != d && (this.remove(c), this.remove(d), 0 < b.length && ((this.ma = null), this.P.set(Jc(this, d), Ua(b)), (this.M += b.length)));
            }, this));
        this.ta = a;
    };
    h.extend = function (a) {
        for (var b = 0; b < arguments.length; b++)
            kc(
                arguments[b],
                function (c, d) {
                    this.add(d, c);
                },
                this
            );
    };
    var Kc = { pi: !0 },
        Lc = { si: !0 },
        Mc = { ri: !0 },
        Nc = { oi: !0 };
    function Oc() {
        throw Error("Do not instantiate directly");
    }
    Oc.prototype.Wb = null;
    Oc.prototype.toString = function () {
        return this.content;
    };
    function Pc() {
        Oc.call(this);
    }
    x(Pc, Oc);
    Pc.prototype.jb = Kc;
    function Qc() {
        Oc.call(this);
    }
    x(Qc, Oc);
    Qc.prototype.jb = Lc;
    Qc.prototype.Wb = 1;
    function Rc(a, b) {
        return null != a && a.jb === b;
    }
    function Sc(a) {
        Sc[" "](a);
        return a;
    }
    Sc[" "] = ta;
    function Tc(a, b) {
        var c = Uc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
    }
    var Vc = y("Opera"),
        A = y("Trident") || y("MSIE"),
        Wc = y("Edge"),
        Xc = Wc || A,
        Yc = y("Gecko") && !(-1 != Jb.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        Zc = -1 != Jb.toLowerCase().indexOf("webkit") && !y("Edge"),
        $c = Zc && y("Mobile"),
        ad = y("Macintosh");
    function bd() {
        var a = q.document;
        return a ? a.documentMode : void 0;
    }
    var cd;
    a: {
        var dd = "",
            ed = (function () {
                var a = Jb;
                if (Yc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Wc) return /Edge\/([\d\.]+)/.exec(a);
                if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Zc) return /WebKit\/(\S+)/.exec(a);
                if (Vc) return /(?:Version)[ \/]?(\S+)/.exec(a);
            })();
        ed && (dd = ed ? ed[1] : "");
        if (A) {
            var fd = bd();
            if (null != fd && fd > parseFloat(dd)) {
                cd = String(fd);
                break a;
            }
        }
        cd = dd;
    }
    var gd = cd,
        Uc = {};
    function hd(a) {
        return Tc(a, function () {
            for (var b = 0, c = nb(String(gd)).split("."), d = nb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    k = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == k[0].length) break;
                    b = wb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || wb(0 == g[2].length, 0 == k[2].length) || wb(g[2], k[2]);
                    g = g[3];
                    k = k[3];
                } while (0 == b);
            }
            return 0 <= b;
        });
    }
    var id;
    if (q.document && A) {
        var jd = bd();
        id = jd ? jd : parseInt(gd, 10) || void 0;
    } else id = void 0;
    var kd = id;
    var ld =
        Object.freeze ||
        function (a) {
            return a;
        };
    function md(a) {
        if (null != a)
            switch (a.Wb) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0;
            }
        return null;
    }
    function B(a) {
        return Rc(a, Kc) ? a : a instanceof Ob ? C(Qb(a).toString(), a.Hc()) : C($b(String(String(a))), md(a));
    }
    var C = (function (a) {
            function b(c) {
                this.content = c;
            }
            b.prototype = a.prototype;
            return function (c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Wb = d);
                return c;
            };
        })(Pc),
        nd = (function (a) {
            function b(c) {
                this.content = c;
            }
            b.prototype = a.prototype;
            return function (c) {
                return new b(String(c));
            };
        })(Qc);
    function od(a, b) {
        return a && b && a.Ug && b.Ug ? (a.jb !== b.jb ? !1 : a.toString() === b.toString()) : a instanceof Oc && b instanceof Oc ? (a.jb != b.jb ? !1 : a.toString() == b.toString()) : a == b;
    }
    function pd(a) {
        return a instanceof Oc ? !!a.content : !!a;
    }
    var qd = (function (a) {
        function b(c) {
            this.content = c;
        }
        b.prototype = a.prototype;
        return function (c, d) {
            c = String(c);
            if (!c) return "";
            c = new b(c);
            void 0 !== d && (c.Wb = d);
            return c;
        };
    })(Pc);
    function rd(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
    }
    function sd(a) {
        return Rc(a, Kc) ? String(String(a.content).replace(td, "").replace(ud, "&lt;")).replace(vd, wd) : $b(String(a));
    }
    function xd(a) {
        Rc(a, Lc) || Rc(a, Mc)
            ? (a = yd(a))
            : a instanceof xb
            ? (a = yd(Ab(a)))
            : a instanceof ib
            ? (a = yd(lb(a).toString()))
            : ((a = String(a)), zd.test(a) ? (a = a.replace(Ad, Bd)) : (Ga("Bad value `%s` for |filterNormalizeUri", [a]), (a = "about:invalid#zSoyz")));
        return a;
    }
    function Cd(a) {
        Rc(a, Lc) || Rc(a, Mc)
            ? (a = yd(a))
            : a instanceof xb
            ? (a = yd(Ab(a)))
            : a instanceof ib
            ? (a = yd(lb(a).toString()))
            : ((a = String(a)), Dd.test(a) ? (a = a.replace(Ad, Bd)) : (Ga("Bad value `%s` for |filterNormalizeMediaUri", [a]), (a = "about:invalid#zSoyz")));
        return a;
    }
    function Ed(a) {
        Rc(a, Nc)
            ? (a = rd(a.content))
            : null == a
            ? (a = "")
            : a instanceof Fb
            ? (a instanceof Fb && a.constructor === Fb && a.Xf === Gb ? (a = a.ad) : (Ga("expected object of type SafeStyle, got '" + a + "' of type " + va(a)), (a = "type_error:SafeStyle")), (a = rd(a)))
            : a instanceof Hb
            ? (a instanceof Hb && a.constructor === Hb && a.Wf === Ib ? (a = a.$c) : (Ga("expected object of type SafeStyleSheet, got '" + a + "' of type " + va(a)), (a = "type_error:SafeStyleSheet")), (a = rd(a)))
            : ((a = String(a)), Fd.test(a) || (Ga("Bad value `%s` for |filterCssValue", [a]), (a = "zSoyz")));
        return a;
    }
    function D(a, b, c, d) {
        a ||
            ((a = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c),
            Ga("expected param " + b + " of type " + d + (", but got " + a) + "."));
        return c;
    }
    var Gd = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;",
    };
    function wd(a) {
        return Gd[a];
    }
    var Hd = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD",
    };
    function Bd(a) {
        return Hd[a];
    }
    var vd = /[\x00\x22\x27\x3c\x3e]/g,
        Ad = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Fd = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        zd = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Dd = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    function yd(a) {
        return String(a).replace(Ad, Bd);
    }
    var td = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        ud = /</g;
    function Id(a) {
        this.la = void 0;
        this.X = {};
        if (a) {
            var b = jc(a);
            a = ic(a);
            for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
        }
    }
    h = Id.prototype;
    h.set = function (a, b) {
        Jd(this, a, b, !1);
    };
    h.add = function (a, b) {
        Jd(this, a, b, !0);
    };
    function Jd(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            a.X[f] || (a.X[f] = new Id());
            a = a.X[f];
        }
        if (d && void 0 !== a.la) throw Error('The collection already contains the key "' + b + '"');
        a.la = c;
    }
    h.get = function (a) {
        a: {
            for (var b = this, c = 0; c < a.length; c++)
                if (((b = b.X[a.charAt(c)]), !b)) {
                    a = void 0;
                    break a;
                }
            a = b;
        }
        return a ? a.la : void 0;
    };
    h.sa = function () {
        var a = [];
        Kd(this, a);
        return a;
    };
    function Kd(a, b) {
        void 0 !== a.la && b.push(a.la);
        for (var c in a.X) Kd(a.X[c], b);
    }
    h.Ja = function (a) {
        var b = [];
        if (a) {
            for (var c = this, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if (!c.X[e]) return [];
                c = c.X[e];
            }
            Ld(c, a, b);
        } else Ld(this, "", b);
        return b;
    };
    function Ld(a, b, c) {
        void 0 !== a.la && c.push(b);
        for (var d in a.X) Ld(a.X[d], b + d, c);
    }
    h.Za = function (a) {
        return void 0 !== this.get(a);
    };
    h.clear = function () {
        this.X = {};
        this.la = void 0;
    };
    h.remove = function (a) {
        for (var b = this, c = [], d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!b.X[e]) throw Error('The collection does not have the key "' + a + '"');
            c.push([b, e]);
            b = b.X[e];
        }
        a = b.la;
        for (delete b.la; 0 < c.length; )
            if (((e = c.pop()), (b = e[0]), (e = e[1]), b.X[e].ic())) delete b.X[e];
            else break;
        return a;
    };
    h.clone = function () {
        return new Id(this);
    };
    h.ic = function () {
        var a;
        if ((a = void 0 === this.la))
            a: {
                for (var b in this.X) {
                    a = !1;
                    break a;
                }
                a = !0;
            }
        return a;
    };
    function Md(a) {
        this.Sa = a;
        this.he = new Id();
        for (a = 0; a < this.Sa.length; a++) {
            var b = this.he.get("+" + this.Sa[a].a);
            b ? b.push(this.Sa[a]) : this.he.add("+" + this.Sa[a].a, [this.Sa[a]]);
        }
    }
    Md.prototype.search = function (a) {
        var b = this.he,
            c = {},
            d = 0;
        void 0 !== b.la && (c[d] = b.la);
        for (; d < a.length; d++) {
            var e = a.charAt(d);
            if (!(e in b.X)) break;
            b = b.X[e];
            void 0 !== b.la && (c[d] = b.la);
        }
        for (var f in c) if (c.hasOwnProperty(f)) return c[f];
        return [];
    };
    function Nd(a) {
        for (var b = 0; b < Od.length; b++) if (Od[b].b === a) return Od[b];
        return null;
    }
    function Pd(a) {
        a = a.toUpperCase();
        for (var b = [], c = 0; c < Od.length; c++) Od[c].c === a && b.push(Od[c]);
        return b;
    }
    function Qd(a) {
        if (0 < a.length && "+" == a.charAt(0)) {
            a = a.substring(1);
            for (var b = [], c = 0; c < Od.length; c++) Od[c].a == a && b.push(Od[c]);
            a = b;
        } else a = Pd(a);
        return a;
    }
    function Rd(a) {
        a.sort(function (b, c) {
            return b.name.localeCompare(c.name, "en");
        });
    }
    var Od = [
        { name: "Afghanistan", b: "93-AF-0", a: "93", c: "AF" },
        { name: "\u00c5land Islands", b: "358-AX-0", a: "358", c: "AX" },
        { name: "Albania", b: "355-AL-0", a: "355", c: "AL" },
        { name: "Algeria", b: "213-DZ-0", a: "213", c: "DZ" },
        { name: "American Samoa", b: "1-AS-0", a: "1", c: "AS" },
        { name: "Andorra", b: "376-AD-0", a: "376", c: "AD" },
        { name: "Angola", b: "244-AO-0", a: "244", c: "AO" },
        { name: "Anguilla", b: "1-AI-0", a: "1", c: "AI" },
        { name: "Antigua and Barbuda", b: "1-AG-0", a: "1", c: "AG" },
        { name: "Argentina", b: "54-AR-0", a: "54", c: "AR" },
        { name: "Armenia", b: "374-AM-0", a: "374", c: "AM" },
        { name: "Aruba", b: "297-AW-0", a: "297", c: "AW" },
        { name: "Ascension Island", b: "247-AC-0", a: "247", c: "AC" },
        { name: "Australia", b: "61-AU-0", a: "61", c: "AU" },
        { name: "Austria", b: "43-AT-0", a: "43", c: "AT" },
        { name: "Azerbaijan", b: "994-AZ-0", a: "994", c: "AZ" },
        { name: "Bahamas", b: "1-BS-0", a: "1", c: "BS" },
        { name: "Bahrain", b: "973-BH-0", a: "973", c: "BH" },
        { name: "Bangladesh", b: "880-BD-0", a: "880", c: "BD" },
        { name: "Barbados", b: "1-BB-0", a: "1", c: "BB" },
        { name: "Belarus", b: "375-BY-0", a: "375", c: "BY" },
        { name: "Belgium", b: "32-BE-0", a: "32", c: "BE" },
        { name: "Belize", b: "501-BZ-0", a: "501", c: "BZ" },
        { name: "Benin", b: "229-BJ-0", a: "229", c: "BJ" },
        { name: "Bermuda", b: "1-BM-0", a: "1", c: "BM" },
        { name: "Bhutan", b: "975-BT-0", a: "975", c: "BT" },
        { name: "Bolivia", b: "591-BO-0", a: "591", c: "BO" },
        { name: "Bosnia and Herzegovina", b: "387-BA-0", a: "387", c: "BA" },
        { name: "Botswana", b: "267-BW-0", a: "267", c: "BW" },
        { name: "Brazil", b: "55-BR-0", a: "55", c: "BR" },
        { name: "British Indian Ocean Territory", b: "246-IO-0", a: "246", c: "IO" },
        { name: "British Virgin Islands", b: "1-VG-0", a: "1", c: "VG" },
        { name: "Brunei", b: "673-BN-0", a: "673", c: "BN" },
        { name: "Bulgaria", b: "359-BG-0", a: "359", c: "BG" },
        { name: "Burkina Faso", b: "226-BF-0", a: "226", c: "BF" },
        { name: "Burundi", b: "257-BI-0", a: "257", c: "BI" },
        { name: "Cambodia", b: "855-KH-0", a: "855", c: "KH" },
        { name: "Cameroon", b: "237-CM-0", a: "237", c: "CM" },
        { name: "Canada", b: "1-CA-0", a: "1", c: "CA" },
        { name: "Cape Verde", b: "238-CV-0", a: "238", c: "CV" },
        { name: "Caribbean Netherlands", b: "599-BQ-0", a: "599", c: "BQ" },
        { name: "Cayman Islands", b: "1-KY-0", a: "1", c: "KY" },
        { name: "Central African Republic", b: "236-CF-0", a: "236", c: "CF" },
        { name: "Chad", b: "235-TD-0", a: "235", c: "TD" },
        { name: "Chile", b: "56-CL-0", a: "56", c: "CL" },
        { name: "China", b: "86-CN-0", a: "86", c: "CN" },
        { name: "Christmas Island", b: "61-CX-0", a: "61", c: "CX" },
        { name: "Cocos [Keeling] Islands", b: "61-CC-0", a: "61", c: "CC" },
        { name: "Colombia", b: "57-CO-0", a: "57", c: "CO" },
        { name: "Comoros", b: "269-KM-0", a: "269", c: "KM" },
        { name: "Democratic Republic Congo", b: "243-CD-0", a: "243", c: "CD" },
        { name: "Republic of Congo", b: "242-CG-0", a: "242", c: "CG" },
        { name: "Cook Islands", b: "682-CK-0", a: "682", c: "CK" },
        { name: "Costa Rica", b: "506-CR-0", a: "506", c: "CR" },
        { name: "C\u00f4te d'Ivoire", b: "225-CI-0", a: "225", c: "CI" },
        { name: "Croatia", b: "385-HR-0", a: "385", c: "HR" },
        { name: "Cuba", b: "53-CU-0", a: "53", c: "CU" },
        { name: "Cura\u00e7ao", b: "599-CW-0", a: "599", c: "CW" },
        { name: "Cyprus", b: "357-CY-0", a: "357", c: "CY" },
        { name: "Czech Republic", b: "420-CZ-0", a: "420", c: "CZ" },
        { name: "Denmark", b: "45-DK-0", a: "45", c: "DK" },
        { name: "Djibouti", b: "253-DJ-0", a: "253", c: "DJ" },
        { name: "Dominica", b: "1-DM-0", a: "1", c: "DM" },
        { name: "Dominican Republic", b: "1-DO-0", a: "1", c: "DO" },
        { name: "East Timor", b: "670-TL-0", a: "670", c: "TL" },
        { name: "Ecuador", b: "593-EC-0", a: "593", c: "EC" },
        { name: "Egypt", b: "20-EG-0", a: "20", c: "EG" },
        { name: "El Salvador", b: "503-SV-0", a: "503", c: "SV" },
        { name: "Equatorial Guinea", b: "240-GQ-0", a: "240", c: "GQ" },
        { name: "Eritrea", b: "291-ER-0", a: "291", c: "ER" },
        { name: "Estonia", b: "372-EE-0", a: "372", c: "EE" },
        { name: "Ethiopia", b: "251-ET-0", a: "251", c: "ET" },
        { name: "Falkland Islands [Islas Malvinas]", b: "500-FK-0", a: "500", c: "FK" },
        { name: "Faroe Islands", b: "298-FO-0", a: "298", c: "FO" },
        { name: "Fiji", b: "679-FJ-0", a: "679", c: "FJ" },
        { name: "Finland", b: "358-FI-0", a: "358", c: "FI" },
        { name: "France", b: "33-FR-0", a: "33", c: "FR" },
        { name: "French Guiana", b: "594-GF-0", a: "594", c: "GF" },
        { name: "French Polynesia", b: "689-PF-0", a: "689", c: "PF" },
        { name: "Gabon", b: "241-GA-0", a: "241", c: "GA" },
        { name: "Gambia", b: "220-GM-0", a: "220", c: "GM" },
        { name: "Georgia", b: "995-GE-0", a: "995", c: "GE" },
        { name: "Germany", b: "49-DE-0", a: "49", c: "DE" },
        { name: "Ghana", b: "233-GH-0", a: "233", c: "GH" },
        { name: "Gibraltar", b: "350-GI-0", a: "350", c: "GI" },
        { name: "Greece", b: "30-GR-0", a: "30", c: "GR" },
        { name: "Greenland", b: "299-GL-0", a: "299", c: "GL" },
        { name: "Grenada", b: "1-GD-0", a: "1", c: "GD" },
        { name: "Guadeloupe", b: "590-GP-0", a: "590", c: "GP" },
        { name: "Guam", b: "1-GU-0", a: "1", c: "GU" },
        { name: "Guatemala", b: "502-GT-0", a: "502", c: "GT" },
        { name: "Guernsey", b: "44-GG-0", a: "44", c: "GG" },
        { name: "Guinea Conakry", b: "224-GN-0", a: "224", c: "GN" },
        { name: "Guinea-Bissau", b: "245-GW-0", a: "245", c: "GW" },
        { name: "Guyana", b: "592-GY-0", a: "592", c: "GY" },
        { name: "Haiti", b: "509-HT-0", a: "509", c: "HT" },
        { name: "Heard Island and McDonald Islands", b: "672-HM-0", a: "672", c: "HM" },
        { name: "Honduras", b: "504-HN-0", a: "504", c: "HN" },
        { name: "Hong Kong", b: "852-HK-0", a: "852", c: "HK" },
        { name: "Hungary", b: "36-HU-0", a: "36", c: "HU" },
        { name: "Iceland", b: "354-IS-0", a: "354", c: "IS" },
        { name: "India", b: "91-IN-0", a: "91", c: "IN" },
        { name: "Indonesia", b: "62-ID-0", a: "62", c: "ID" },
        { name: "Iran", b: "98-IR-0", a: "98", c: "IR" },
        { name: "Iraq", b: "964-IQ-0", a: "964", c: "IQ" },
        { name: "Ireland", b: "353-IE-0", a: "353", c: "IE" },
        { name: "Isle of Man", b: "44-IM-0", a: "44", c: "IM" },
        { name: "Israel", b: "972-IL-0", a: "972", c: "IL" },
        { name: "Italy", b: "39-IT-0", a: "39", c: "IT" },
        { name: "Jamaica", b: "1-JM-0", a: "1", c: "JM" },
        { name: "Japan", b: "81-JP-0", a: "81", c: "JP" },
        { name: "Jersey", b: "44-JE-0", a: "44", c: "JE" },
        { name: "Jordan", b: "962-JO-0", a: "962", c: "JO" },
        { name: "Kazakhstan", b: "7-KZ-0", a: "7", c: "KZ" },
        { name: "Kenya", b: "254-KE-0", a: "254", c: "KE" },
        { name: "Kiribati", b: "686-KI-0", a: "686", c: "KI" },
        { name: "Kosovo", b: "377-XK-0", a: "377", c: "XK" },
        { name: "Kosovo", b: "381-XK-0", a: "381", c: "XK" },
        { name: "Kosovo", b: "386-XK-0", a: "386", c: "XK" },
        { name: "Kuwait", b: "965-KW-0", a: "965", c: "KW" },
        { name: "Kyrgyzstan", b: "996-KG-0", a: "996", c: "KG" },
        { name: "Laos", b: "856-LA-0", a: "856", c: "LA" },
        { name: "Latvia", b: "371-LV-0", a: "371", c: "LV" },
        { name: "Lebanon", b: "961-LB-0", a: "961", c: "LB" },
        { name: "Lesotho", b: "266-LS-0", a: "266", c: "LS" },
        { name: "Liberia", b: "231-LR-0", a: "231", c: "LR" },
        { name: "Libya", b: "218-LY-0", a: "218", c: "LY" },
        { name: "Liechtenstein", b: "423-LI-0", a: "423", c: "LI" },
        { name: "Lithuania", b: "370-LT-0", a: "370", c: "LT" },
        { name: "Luxembourg", b: "352-LU-0", a: "352", c: "LU" },
        { name: "Macau", b: "853-MO-0", a: "853", c: "MO" },
        { name: "Macedonia", b: "389-MK-0", a: "389", c: "MK" },
        { name: "Madagascar", b: "261-MG-0", a: "261", c: "MG" },
        { name: "Malawi", b: "265-MW-0", a: "265", c: "MW" },
        { name: "Malaysia", b: "60-MY-0", a: "60", c: "MY" },
        { name: "Maldives", b: "960-MV-0", a: "960", c: "MV" },
        { name: "Mali", b: "223-ML-0", a: "223", c: "ML" },
        { name: "Malta", b: "356-MT-0", a: "356", c: "MT" },
        { name: "Marshall Islands", b: "692-MH-0", a: "692", c: "MH" },
        { name: "Martinique", b: "596-MQ-0", a: "596", c: "MQ" },
        { name: "Mauritania", b: "222-MR-0", a: "222", c: "MR" },
        { name: "Mauritius", b: "230-MU-0", a: "230", c: "MU" },
        { name: "Mayotte", b: "262-YT-0", a: "262", c: "YT" },
        { name: "Mexico", b: "52-MX-0", a: "52", c: "MX" },
        { name: "Micronesia", b: "691-FM-0", a: "691", c: "FM" },
        { name: "Moldova", b: "373-MD-0", a: "373", c: "MD" },
        { name: "Monaco", b: "377-MC-0", a: "377", c: "MC" },
        { name: "Mongolia", b: "976-MN-0", a: "976", c: "MN" },
        { name: "Montenegro", b: "382-ME-0", a: "382", c: "ME" },
        { name: "Montserrat", b: "1-MS-0", a: "1", c: "MS" },
        { name: "Morocco", b: "212-MA-0", a: "212", c: "MA" },
        { name: "Mozambique", b: "258-MZ-0", a: "258", c: "MZ" },
        { name: "Myanmar [Burma]", b: "95-MM-0", a: "95", c: "MM" },
        { name: "Namibia", b: "264-NA-0", a: "264", c: "NA" },
        { name: "Nauru", b: "674-NR-0", a: "674", c: "NR" },
        { name: "Nepal", b: "977-NP-0", a: "977", c: "NP" },
        { name: "Netherlands", b: "31-NL-0", a: "31", c: "NL" },
        { name: "New Caledonia", b: "687-NC-0", a: "687", c: "NC" },
        { name: "New Zealand", b: "64-NZ-0", a: "64", c: "NZ" },
        { name: "Nicaragua", b: "505-NI-0", a: "505", c: "NI" },
        { name: "Niger", b: "227-NE-0", a: "227", c: "NE" },
        { name: "Nigeria", b: "234-NG-0", a: "234", c: "NG" },
        { name: "Niue", b: "683-NU-0", a: "683", c: "NU" },
        { name: "Norfolk Island", b: "672-NF-0", a: "672", c: "NF" },
        { name: "North Korea", b: "850-KP-0", a: "850", c: "KP" },
        { name: "Northern Mariana Islands", b: "1-MP-0", a: "1", c: "MP" },
        { name: "Norway", b: "47-NO-0", a: "47", c: "NO" },
        { name: "Oman", b: "968-OM-0", a: "968", c: "OM" },
        { name: "Pakistan", b: "92-PK-0", a: "92", c: "PK" },
        { name: "Palau", b: "680-PW-0", a: "680", c: "PW" },
        { name: "Palestinian Territories", b: "970-PS-0", a: "970", c: "PS" },
        { name: "Panama", b: "507-PA-0", a: "507", c: "PA" },
        { name: "Papua New Guinea", b: "675-PG-0", a: "675", c: "PG" },
        { name: "Paraguay", b: "595-PY-0", a: "595", c: "PY" },
        { name: "Peru", b: "51-PE-0", a: "51", c: "PE" },
        { name: "Philippines", b: "63-PH-0", a: "63", c: "PH" },
        { name: "Poland", b: "48-PL-0", a: "48", c: "PL" },
        { name: "Portugal", b: "351-PT-0", a: "351", c: "PT" },
        { name: "Puerto Rico", b: "1-PR-0", a: "1", c: "PR" },
        { name: "Qatar", b: "974-QA-0", a: "974", c: "QA" },
        { name: "R\u00e9union", b: "262-RE-0", a: "262", c: "RE" },
        { name: "Romania", b: "40-RO-0", a: "40", c: "RO" },
        { name: "Russia", b: "7-RU-0", a: "7", c: "RU" },
        { name: "Rwanda", b: "250-RW-0", a: "250", c: "RW" },
        { name: "Saint Barth\u00e9lemy", b: "590-BL-0", a: "590", c: "BL" },
        { name: "Saint Helena", b: "290-SH-0", a: "290", c: "SH" },
        { name: "St. Kitts", b: "1-KN-0", a: "1", c: "KN" },
        { name: "St. Lucia", b: "1-LC-0", a: "1", c: "LC" },
        { name: "Saint Martin", b: "590-MF-0", a: "590", c: "MF" },
        { name: "Saint Pierre and Miquelon", b: "508-PM-0", a: "508", c: "PM" },
        { name: "St. Vincent", b: "1-VC-0", a: "1", c: "VC" },
        { name: "Samoa", b: "685-WS-0", a: "685", c: "WS" },
        { name: "San Marino", b: "378-SM-0", a: "378", c: "SM" },
        { name: "S\u00e3o Tom\u00e9 and Pr\u00edncipe", b: "239-ST-0", a: "239", c: "ST" },
        { name: "Saudi Arabia", b: "966-SA-0", a: "966", c: "SA" },
        { name: "Senegal", b: "221-SN-0", a: "221", c: "SN" },
        { name: "Serbia", b: "381-RS-0", a: "381", c: "RS" },
        { name: "Seychelles", b: "248-SC-0", a: "248", c: "SC" },
        { name: "Sierra Leone", b: "232-SL-0", a: "232", c: "SL" },
        { name: "Singapore", b: "65-SG-0", a: "65", c: "SG" },
        { name: "Sint Maarten", b: "1-SX-0", a: "1", c: "SX" },
        { name: "Slovakia", b: "421-SK-0", a: "421", c: "SK" },
        { name: "Slovenia", b: "386-SI-0", a: "386", c: "SI" },
        { name: "Solomon Islands", b: "677-SB-0", a: "677", c: "SB" },
        { name: "Somalia", b: "252-SO-0", a: "252", c: "SO" },
        { name: "South Africa", b: "27-ZA-0", a: "27", c: "ZA" },
        { name: "South Georgia and the South Sandwich Islands", b: "500-GS-0", a: "500", c: "GS" },
        { name: "South Korea", b: "82-KR-0", a: "82", c: "KR" },
        { name: "South Sudan", b: "211-SS-0", a: "211", c: "SS" },
        { name: "Spain", b: "34-ES-0", a: "34", c: "ES" },
        { name: "Sri Lanka", b: "94-LK-0", a: "94", c: "LK" },
        { name: "Sudan", b: "249-SD-0", a: "249", c: "SD" },
        { name: "Suriname", b: "597-SR-0", a: "597", c: "SR" },
        { name: "Svalbard and Jan Mayen", b: "47-SJ-0", a: "47", c: "SJ" },
        { name: "Swaziland", b: "268-SZ-0", a: "268", c: "SZ" },
        { name: "Sweden", b: "46-SE-0", a: "46", c: "SE" },
        { name: "Switzerland", b: "41-CH-0", a: "41", c: "CH" },
        { name: "Syria", b: "963-SY-0", a: "963", c: "SY" },
        { name: "Taiwan", b: "886-TW-0", a: "886", c: "TW" },
        { name: "Tajikistan", b: "992-TJ-0", a: "992", c: "TJ" },
        { name: "Tanzania", b: "255-TZ-0", a: "255", c: "TZ" },
        { name: "Thailand", b: "66-TH-0", a: "66", c: "TH" },
        { name: "Togo", b: "228-TG-0", a: "228", c: "TG" },
        { name: "Tokelau", b: "690-TK-0", a: "690", c: "TK" },
        { name: "Tonga", b: "676-TO-0", a: "676", c: "TO" },
        { name: "Trinidad/Tobago", b: "1-TT-0", a: "1", c: "TT" },
        { name: "Tunisia", b: "216-TN-0", a: "216", c: "TN" },
        { name: "Turkey", b: "90-TR-0", a: "90", c: "TR" },
        { name: "Turkmenistan", b: "993-TM-0", a: "993", c: "TM" },
        { name: "Turks and Caicos Islands", b: "1-TC-0", a: "1", c: "TC" },
        { name: "Tuvalu", b: "688-TV-0", a: "688", c: "TV" },
        { name: "U.S. Virgin Islands", b: "1-VI-0", a: "1", c: "VI" },
        { name: "Uganda", b: "256-UG-0", a: "256", c: "UG" },
        { name: "Ukraine", b: "380-UA-0", a: "380", c: "UA" },
        { name: "United Arab Emirates", b: "971-AE-0", a: "971", c: "AE" },
        { name: "United Kingdom", b: "44-GB-0", a: "44", c: "GB" },
        { name: "United States", b: "1-US-0", a: "1", c: "US" },
        { name: "Uruguay", b: "598-UY-0", a: "598", c: "UY" },
        { name: "Uzbekistan", b: "998-UZ-0", a: "998", c: "UZ" },
        { name: "Vanuatu", b: "678-VU-0", a: "678", c: "VU" },
        { name: "Vatican City", b: "379-VA-0", a: "379", c: "VA" },
        { name: "Venezuela", b: "58-VE-0", a: "58", c: "VE" },
        { name: "Vietnam", b: "84-VN-0", a: "84", c: "VN" },
        { name: "Wallis and Futuna", b: "681-WF-0", a: "681", c: "WF" },
        { name: "Western Sahara", b: "212-EH-0", a: "212", c: "EH" },
        { name: "Yemen", b: "967-YE-0", a: "967", c: "YE" },
        { name: "Zambia", b: "260-ZM-0", a: "260", c: "ZM" },
        { name: "Zimbabwe", b: "263-ZW-0", a: "263", c: "ZW" },
    ];
    Rd(Od);
    var Sd = new Md(Od);
    function Td(a) {
        return "string" == typeof a.className ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    }
    function Ud(a, b) {
        "string" == typeof a.className ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    }
    function Vd(a, b) {
        return a.classList ? a.classList.contains(b) : Oa(a.classList ? a.classList : Td(a).match(/\S+/g) || [], b);
    }
    function Wd(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!Vd(a, b)) {
            var c = Td(a);
            Ud(a, c + (0 < c.length ? " " + b : b));
        }
    }
    function Xd(a, b) {
        a.classList
            ? a.classList.remove(b)
            : Vd(a, b) &&
              Ud(
                  a,
                  Ka(a.classList ? a.classList : Td(a).match(/\S+/g) || [], function (c) {
                      return c != b;
                  }).join(" ")
              );
    }
    try {
        new self.OffscreenCanvas(0, 0).getContext("2d");
    } catch (a) {}
    var Yd = !A || 9 <= Number(kd),
        Zd = (!Yc && !A) || (A && 9 <= Number(kd)) || (Yc && hd("1.9.1"));
    function $d(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0;
    }
    h = $d.prototype;
    h.clone = function () {
        return new $d(this.x, this.y);
    };
    h.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    h.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    };
    h.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    };
    h.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    };
    h.translate = function (a, b) {
        a instanceof $d ? ((this.x += a.x), (this.y += a.y)) : ((this.x += Number(a)), "number" === typeof b && (this.y += b));
        return this;
    };
    h.scale = function (a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this;
    };
    function ae(a, b) {
        this.width = a;
        this.height = b;
    }
    h = ae.prototype;
    h.clone = function () {
        return new ae(this.width, this.height);
    };
    h.toString = function () {
        return "(" + this.width + " x " + this.height + ")";
    };
    h.aspectRatio = function () {
        return this.width / this.height;
    };
    h.ic = function () {
        return !(this.width * this.height);
    };
    h.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;
    };
    h.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    };
    h.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    };
    h.scale = function (a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this;
    };
    function be(a) {
        return a ? new ce(de(a)) : Ea || (Ea = new ce());
    }
    function ee(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : fe(document, a, b);
    }
    function ge(a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : fe(c, a, b)[0] || null;
        }
        return a || null;
    }
    function fe(a, b, c) {
        var d;
        a = c || a;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e;
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; (a = e[c]); c++) {
                var g = a.className;
                "function" == typeof g.split && Oa(g.split(/\s+/), b) && (f[d++] = a);
            }
            f.length = d;
            return f;
        }
        return e;
    }
    function he(a, b) {
        Xa(b, function (c, d) {
            c && "object" == typeof c && c.Ta && (c = c.La());
            "style" == d
                ? (a.style.cssText = c)
                : "class" == d
                ? (a.className = c)
                : "for" == d
                ? (a.htmlFor = c)
                : ie.hasOwnProperty(d)
                ? a.setAttribute(ie[d], c)
                : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
                ? a.setAttribute(d, c)
                : (a[d] = c);
        });
    }
    var ie = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width",
    };
    function je(a) {
        return a.scrollingElement ? a.scrollingElement : Zc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
    }
    function ke(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k);
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!wa(f) || (t(f) && 0 < f.nodeType)) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (t(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a;
                        }
                        if (xa(f)) {
                            g = "function" == typeof f.item;
                            break a;
                        }
                    }
                    g = !1;
                }
                Ia(g ? Ua(f) : f, e);
            }
        }
    }
    function le(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b);
    }
    function me(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    }
    function de(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    }
    function ne(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
            a.firstChild.data = String(b);
        } else {
            for (var c; (c = a.firstChild); ) a.removeChild(c);
            a.appendChild(de(a).createTextNode(String(b)));
        }
    }
    function oe(a, b) {
        return b
            ? pe(a, function (c) {
                  return !b || ("string" === typeof c.className && Oa(c.className.split(/\s+/), b));
              })
            : null;
    }
    function pe(a, b) {
        for (var c = 0; a; ) {
            if (b(a)) return a;
            a = a.parentNode;
            c++;
        }
        return null;
    }
    function ce(a) {
        this.fa = a || q.document || document;
    }
    h = ce.prototype;
    h.Eb = be;
    h.ga = function () {};
    h.getElementsByTagName = function (a, b) {
        return (b || this.fa).getElementsByTagName(String(a));
    };
    h.Ic = function (a, b) {
        return ee(a, b || this.fa);
    };
    h.u = function (a, b) {
        return ge(a, b || this.fa);
    };
    h.Cd = function (a, b, c) {
        var d = this.fa,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!Yd && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', $b(g.name), '"');
            if (g.type) {
                f.push(' type="', $b(g.type), '"');
                var k = {};
                bb(k, g);
                delete k.type;
                g = k;
            }
            f.push(">");
            f = f.join("");
        }
        f = le(d, f);
        g && ("string" === typeof g ? (f.className = g) : Array.isArray(g) ? (f.className = g.join(" ")) : he(f, g));
        2 < e.length && ke(d, f, e, 2);
    };
    h.createElement = function (a) {
        return le(this.fa, a);
    };
    h.createTextNode = function (a) {
        return this.fa.createTextNode(String(a));
    };
    h.getWindow = function () {
        var a = this.fa;
        return a.parentWindow || a.defaultView;
    };
    h.appendChild = function (a, b) {
        a.appendChild(b);
    };
    h.append = function (a, b) {
        ke(de(a), a, arguments, 1);
    };
    h.canHaveChildren = function (a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1;
        }
        return !0;
    };
    h.removeNode = me;
    h.Le = function () {
        return Zd && void 0 != (void 0).children
            ? (void 0).children
            : Ka((void 0).childNodes, function (a) {
                  return 1 == a.nodeType;
              });
    };
    h.contains = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; ) b = b.parentNode;
        return b == a;
    };
    function qe(a, b, c) {
        b || (b = {});
        c = c || window;
        var d = a instanceof xb ? a : Cb("undefined" != typeof a.href ? a.href : String(a)) || Eb;
        a = b.target || a.target;
        var e = [];
        for (f in b)
            switch (f) {
                case "width":
                case "height":
                case "top":
                case "left":
                    e.push(f + "=" + b[f]);
                    break;
                case "target":
                case "noopener":
                case "noreferrer":
                    break;
                default:
                    e.push(f + "=" + (b[f] ? 1 : 0));
            }
        var f = e.join(",");
        if (((y("iPhone") && !y("iPod") && !y("iPad")) || y("iPad") || y("iPod")) && c.navigator && c.navigator.standalone && a && "_self" != a)
            (f = le(document, "A")),
                Tb(f, "HTMLAnchorElement"),
                (d = d instanceof xb ? d : Db(d)),
                (f.href = Ab(d)),
                f.setAttribute("target", a),
                b.noreferrer && f.setAttribute("rel", "noreferrer"),
                (b = document.createEvent("MouseEvent")),
                b.initMouseEvent("click", !0, !0, c, 1),
                f.dispatchEvent(b),
                (c = {});
        else if (b.noreferrer) {
            if (
                ((c = Zb("", c, a, f)),
                (b = Ab(d)),
                c &&
                    (Xc && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"),
                    (c.opener = null),
                    (b = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + $b(b) + '">'),
                    (b = new Ob().rb(b, null)),
                    (d = c.document)))
            )
                d.write(Qb(b)), d.close();
        } else (c = Zb(d, c, a, f)) && b.noopener && (c.opener = null);
        return c;
    }
    function E(a) {
        var b = a.type;
        if ("string" === typeof b)
            switch (b.toLowerCase()) {
                case "checkbox":
                case "radio":
                    return a.checked ? a.value : null;
                case "select-one":
                    return (b = a.selectedIndex), 0 <= b ? a.options[b].value : null;
                case "select-multiple":
                    b = [];
                    for (var c, d = 0; (c = a.options[d]); d++) c.selected && b.push(c.value);
                    return b.length ? b : null;
            }
        return null != a.value ? a.value : null;
    }
    function re(a, b) {
        var c = a.type;
        switch ("string" === typeof c && c.toLowerCase()) {
            case "checkbox":
            case "radio":
                a.checked = b;
                break;
            case "select-one":
                a.selectedIndex = -1;
                if ("string" === typeof b)
                    for (var d = 0; (c = a.options[d]); d++)
                        if (c.value == b) {
                            c.selected = !0;
                            break;
                        }
                break;
            case "select-multiple":
                "string" === typeof b && (b = [b]);
                for (d = 0; (c = a.options[d]); d++) if (((c.selected = !1), b)) for (var e, f = 0; (e = b[f]); f++) c.value == e && (c.selected = !0);
                break;
            default:
                a.value = null != b ? b : "";
        }
    }
    var se = !A || 9 <= Number(kd),
        te = A && !hd("9"),
        ue = (function () {
            if (!q.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function () {
                        a = !0;
                    },
                });
            try {
                q.addEventListener("test", ta, b), q.removeEventListener("test", ta, b);
            } catch (c) {}
            return a;
        })();
    function ve() {
        this.Cb = this.Cb;
        this.ub = this.ub;
    }
    ve.prototype.Cb = !1;
    ve.prototype.isDisposed = function () {
        return this.Cb;
    };
    ve.prototype.i = function () {
        this.Cb || ((this.Cb = !0), this.h());
    };
    function we(a, b) {
        a.Cb ? b() : (a.ub || (a.ub = []), a.ub.push(b));
    }
    ve.prototype.h = function () {
        if (this.ub) for (; this.ub.length; ) this.ub.shift()();
    };
    function xe(a) {
        a && "function" == typeof a.i && a.i();
    }
    function ye(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.vb = !1;
    }
    ye.prototype.stopPropagation = function () {
        this.vb = !0;
    };
    ye.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
    };
    function ze(a, b) {
        ye.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ia = null;
        a && this.init(a, b);
    }
    x(ze, ye);
    var Ae = ld({ 2: "touch", 3: "pen", 4: "mouse" });
    ze.prototype.init = function (a, b) {
        var c = (this.type = a.type),
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if ((b = a.relatedTarget)) {
            if (Yc) {
                a: {
                    try {
                        Sc(b.nodeName);
                        var e = !0;
                        break a;
                    } catch (f) {}
                    e = !1;
                }
                e || (b = null);
            }
        } else "mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d
            ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX), (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY), (this.screenX = d.screenX || 0), (this.screenY = d.screenY || 0))
            : ((this.offsetX = Zc || void 0 !== a.offsetX ? a.offsetX : a.layerX),
              (this.offsetY = Zc || void 0 !== a.offsetY ? a.offsetY : a.layerY),
              (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
              (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
              (this.screenX = a.screenX || 0),
              (this.screenY = a.screenY || 0));
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ae[a.pointerType] || "";
        this.state = a.state;
        this.Ia = a;
        a.defaultPrevented && this.preventDefault();
    };
    ze.prototype.stopPropagation = function () {
        ze.$.stopPropagation.call(this);
        this.Ia.stopPropagation ? this.Ia.stopPropagation() : (this.Ia.cancelBubble = !0);
    };
    ze.prototype.preventDefault = function () {
        ze.$.preventDefault.call(this);
        var a = this.Ia;
        if (a.preventDefault) a.preventDefault();
        else if (((a.returnValue = !1), te))
            try {
                if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
            } catch (b) {}
    };
    var Be = "closure_listenable_" + ((1e6 * Math.random()) | 0);
    function Ce(a) {
        return !(!a || !a[Be]);
    }
    var De = 0;
    function Ee(a, b, c, d, e) {
        this.listener = a;
        this.bd = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Pc = e;
        this.key = ++De;
        this.Lb = this.Bc = !1;
    }
    function Fe(a) {
        a.Lb = !0;
        a.listener = null;
        a.bd = null;
        a.src = null;
        a.Pc = null;
    }
    function Ge(a) {
        this.src = a;
        this.ba = {};
        this.wc = 0;
    }
    h = Ge.prototype;
    h.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.ba[f];
        a || ((a = this.ba[f] = []), this.wc++);
        var g = He(a, b, d, e);
        -1 < g ? ((b = a[g]), c || (b.Bc = !1)) : ((b = new Ee(b, this.src, f, !!d, e)), (b.Bc = c), a.push(b));
        return b;
    };
    h.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.ba)) return !1;
        var e = this.ba[a];
        b = He(e, b, c, d);
        return -1 < b ? (Fe(e[b]), Qa(e, b), 0 == e.length && (delete this.ba[a], this.wc--), !0) : !1;
    };
    function Ie(a, b) {
        var c = b.type;
        c in a.ba && Pa(a.ba[c], b) && (Fe(b), 0 == a.ba[c].length && (delete a.ba[c], a.wc--));
    }
    h.cd = function (a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.ba)
            if (!a || c == a) {
                for (var d = this.ba[c], e = 0; e < d.length; e++) ++b, Fe(d[e]);
                delete this.ba[c];
                this.wc--;
            }
    };
    h.$b = function (a, b, c, d) {
        a = this.ba[a.toString()];
        var e = -1;
        a && (e = He(a, b, c, d));
        return -1 < e ? a[e] : null;
    };
    h.hasListener = function (a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return Ya(this.ba, function (f) {
            for (var g = 0; g < f.length; ++g) if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
            return !1;
        });
    };
    function He(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Lb && f.listener == b && f.capture == !!c && f.Pc == d) return e;
        }
        return -1;
    }
    var Je = "closure_lm_" + ((1e6 * Math.random()) | 0),
        Ke = {},
        Le = 0;
    function Me(a, b, c, d, e) {
        if (d && d.once) return Ne(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) Me(a, b[f], c, d, e);
            return null;
        }
        c = Oe(c);
        return Ce(a) ? a.listen(b, c, t(d) ? !!d.capture : !!d, e) : Pe(a, b, c, !1, d, e);
    }
    function Pe(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = t(e) ? !!e.capture : !!e,
            k = Qe(a);
        k || (a[Je] = k = new Ge(a));
        c = k.add(b, c, d, g, f);
        if (c.bd) return c;
        d = Re();
        c.bd = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) ue || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Se(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Le++;
        return c;
    }
    function Re() {
        var a = Te,
            b = se
                ? function (c) {
                      return a.call(b.src, b.listener, c);
                  }
                : function (c) {
                      c = a.call(b.src, b.listener, c);
                      if (!c) return c;
                  };
        return b;
    }
    function Ne(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) Ne(a, b[f], c, d, e);
            return null;
        }
        c = Oe(c);
        return Ce(a) ? a.We(b, c, t(d) ? !!d.capture : !!d, e) : Pe(a, b, c, !0, d, e);
    }
    function Ue(a, b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Ue(a, b[f], c, d, e);
        else (d = t(d) ? !!d.capture : !!d), (c = Oe(c)), Ce(a) ? a.ie(b, c, d, e) : a && (a = Qe(a)) && (b = a.$b(b, c, d, e)) && Ve(b);
    }
    function Ve(a) {
        if ("number" !== typeof a && a && !a.Lb) {
            var b = a.src;
            if (Ce(b)) Ie(b.Ha, a);
            else {
                var c = a.type,
                    d = a.bd;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Se(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Le--;
                (c = Qe(b)) ? (Ie(c, a), 0 == c.wc && ((c.src = null), (b[Je] = null))) : Fe(a);
            }
        }
    }
    function Se(a) {
        return a in Ke ? Ke[a] : (Ke[a] = "on" + a);
    }
    function We(a, b, c, d) {
        var e = !0;
        if ((a = Qe(a)))
            if ((b = a.ba[b.toString()]))
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Lb && ((f = Xe(f, d)), (e = e && !1 !== f));
                }
        return e;
    }
    function Xe(a, b) {
        var c = a.listener,
            d = a.Pc || a.src;
        a.Bc && Ve(a);
        return c.call(d, b);
    }
    function Te(a, b) {
        if (a.Lb) return !0;
        if (!se) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = q, d = 0; d < b.length; d++)
                        if (((c = c[b[d]]), null == c)) {
                            b = null;
                            break a;
                        }
                    b = c;
                }
            d = b;
            b = new ze(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a;
                        } catch (g) {
                            e = !0;
                        }
                    if (e || void 0 == d.returnValue) d.returnValue = !0;
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode) d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.vb && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = We(d[e], a, !0, b);
                    c = c && f;
                }
                for (e = 0; !b.vb && e < d.length; e++) (b.currentTarget = d[e]), (f = We(d[e], a, !1, b)), (c = c && f);
            }
            return c;
        }
        return Xe(a, new ze(b, this));
    }
    function Qe(a) {
        a = a[Je];
        return a instanceof Ge ? a : null;
    }
    var Ye = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
    function Oe(a) {
        if (xa(a)) return a;
        a[Ye] ||
            (a[Ye] = function (b) {
                return a.handleEvent(b);
            });
        return a[Ye];
    }
    function Ze() {
        ve.call(this);
        this.Ha = new Ge(this);
        this.bg = this;
        this.Zc = null;
    }
    x(Ze, ve);
    Ze.prototype[Be] = !0;
    h = Ze.prototype;
    h.de = function (a) {
        this.Zc = a;
    };
    h.addEventListener = function (a, b, c, d) {
        Me(this, a, b, c, d);
    };
    h.removeEventListener = function (a, b, c, d) {
        Ue(this, a, b, c, d);
    };
    h.dispatchEvent = function (a) {
        var b,
            c = this.Zc;
        if (c) for (b = []; c; c = c.Zc) b.push(c);
        c = this.bg;
        var d = a.type || a;
        if ("string" === typeof a) a = new ye(a, c);
        else if (a instanceof ye) a.target = a.target || c;
        else {
            var e = a;
            a = new ye(d, c);
            bb(a, e);
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.vb && 0 <= f; f--) {
                var g = (a.currentTarget = b[f]);
                e = af(g, d, !0, a) && e;
            }
        a.vb || ((g = a.currentTarget = c), (e = af(g, d, !0, a) && e), a.vb || (e = af(g, d, !1, a) && e));
        if (b) for (f = 0; !a.vb && f < b.length; f++) (g = a.currentTarget = b[f]), (e = af(g, d, !1, a) && e);
        return e;
    };
    h.h = function () {
        Ze.$.h.call(this);
        this.Ha && this.Ha.cd(void 0);
        this.Zc = null;
    };
    h.listen = function (a, b, c, d) {
        return this.Ha.add(String(a), b, !1, c, d);
    };
    h.We = function (a, b, c, d) {
        return this.Ha.add(String(a), b, !0, c, d);
    };
    h.ie = function (a, b, c, d) {
        this.Ha.remove(String(a), b, c, d);
    };
    function af(a, b, c, d) {
        b = a.Ha.ba[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Lb && g.capture == c) {
                var k = g.listener,
                    m = g.Pc || g.src;
                g.Bc && Ie(a.Ha, g);
                e = !1 !== k.call(m, d) && e;
            }
        }
        return e && !d.defaultPrevented;
    }
    h.$b = function (a, b, c, d) {
        return this.Ha.$b(String(a), b, c, d);
    };
    h.hasListener = function (a, b) {
        return this.Ha.hasListener(void 0 !== a ? String(a) : void 0, b);
    };
    function bf(a) {
        if ((a.altKey && !a.ctrlKey) || a.metaKey || (112 <= a.keyCode && 123 >= a.keyCode)) return !1;
        if (cf(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !Yc;
            default:
                return 166 > a.keyCode || 183 < a.keyCode;
        }
    }
    function df(a, b, c, d, e, f) {
        if (Zc && !hd("525")) return !0;
        if (ad && e) return cf(a);
        if (e && !d) return !1;
        if (!Yc) {
            "number" === typeof b && (b = ef(b));
            var g = 17 == b || 18 == b || (ad && 91 == b);
            if (((!c || ad) && g) || (ad && 16 == b && (d || f))) return !1;
        }
        if ((Zc || Wc) && d && c)
            switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1;
            }
        if (A && d && b == a) return !1;
        switch (a) {
            case 13:
                return Yc ? (f || e ? !1 : !(c && d)) : !0;
            case 27:
                return !(Zc || Wc || Yc);
        }
        return Yc && (d || e || f) ? !1 : cf(a);
    }
    function cf(a) {
        if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((Zc || Wc) && 0 == a)) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return Yc;
            default:
                return !1;
        }
    }
    function ef(a) {
        if (Yc) a = ff(a);
        else if (ad && Zc)
            switch (a) {
                case 93:
                    a = 91;
            }
        return a;
    }
    function ff(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a;
        }
    }
    function gf(a) {
        Ze.call(this);
        this.f = a;
        Me(a, "keydown", this.Mc, !1, this);
        Me(a, "click", this.Pe, !1, this);
    }
    x(gf, Ze);
    gf.prototype.Mc = function (a) {
        (13 == a.keyCode || (Zc && 3 == a.keyCode)) && hf(this, a);
    };
    gf.prototype.Pe = function (a) {
        hf(this, a);
    };
    function hf(a, b) {
        var c = new jf(b);
        if (a.dispatchEvent(c)) {
            c = new kf(b);
            try {
                a.dispatchEvent(c);
            } finally {
                b.stopPropagation();
            }
        }
    }
    gf.prototype.h = function () {
        gf.$.h.call(this);
        Ue(this.f, "keydown", this.Mc, !1, this);
        Ue(this.f, "click", this.Pe, !1, this);
        delete this.f;
    };
    function kf(a) {
        ze.call(this, a.Ia);
        this.type = "action";
    }
    x(kf, ze);
    function jf(a) {
        ze.call(this, a.Ia);
        this.type = "beforeaction";
    }
    x(jf, ze);
    function lf(a) {
        Ze.call(this);
        this.f = a;
        a = A ? "focusout" : "blur";
        this.Xg = Me(this.f, A ? "focusin" : "focus", this, !A);
        this.Yg = Me(this.f, a, this, !A);
    }
    x(lf, Ze);
    lf.prototype.handleEvent = function (a) {
        var b = new ze(a.Ia);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b);
    };
    lf.prototype.h = function () {
        lf.$.h.call(this);
        Ve(this.Xg);
        Ve(this.Yg);
        delete this.f;
    };
    function mf(a) {
        ve.call(this);
        this.Od = a;
        this.J = {};
    }
    x(mf, ve);
    var nf = [];
    h = mf.prototype;
    h.listen = function (a, b, c, d) {
        Array.isArray(b) || (b && (nf[0] = b.toString()), (b = nf));
        for (var e = 0; e < b.length; e++) {
            var f = Me(a, b[e], c || this.handleEvent, d || !1, this.Od || this);
            if (!f) break;
            this.J[f.key] = f;
        }
        return this;
    };
    h.We = function (a, b, c, d) {
        return of(this, a, b, c, d);
    };
    function of(a, b, c, d, e, f) {
        if (Array.isArray(c)) for (var g = 0; g < c.length; g++) of(a, b, c[g], d, e, f);
        else {
            b = Ne(b, c, d || a.handleEvent, e, f || a.Od || a);
            if (!b) return a;
            a.J[b.key] = b;
        }
        return a;
    }
    h.ie = function (a, b, c, d, e) {
        if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.ie(a, b[f], c, d, e);
        else
            (c = c || this.handleEvent),
                (d = t(d) ? !!d.capture : !!d),
                (e = e || this.Od || this),
                (c = Oe(c)),
                (d = !!d),
                (b = Ce(a) ? a.$b(b, c, d, e) : a ? ((a = Qe(a)) ? a.$b(b, c, d, e) : null) : null),
                b && (Ve(b), delete this.J[b.key]);
    };
    h.cd = function () {
        Xa(
            this.J,
            function (a, b) {
                this.J.hasOwnProperty(b) && Ve(a);
            },
            this
        );
        this.J = {};
    };
    h.h = function () {
        mf.$.h.call(this);
        this.cd();
    };
    h.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function pf(a, b) {
        this.Wg = 100;
        this.tg = a;
        this.rh = b;
        this.Wc = 0;
        this.Qc = null;
    }
    pf.prototype.get = function () {
        if (0 < this.Wc) {
            this.Wc--;
            var a = this.Qc;
            this.Qc = a.next;
            a.next = null;
        } else a = this.tg();
        return a;
    };
    pf.prototype.put = function (a) {
        this.rh(a);
        this.Wc < this.Wg && (this.Wc++, (a.next = this.Qc), (this.Qc = a));
    };
    function qf(a) {
        q.setTimeout(function () {
            throw a;
        }, 0);
    }
    var rf;
    function sf() {
        var a = q.MessageChannel;
        "undefined" === typeof a &&
            "undefined" !== typeof window &&
            window.postMessage &&
            window.addEventListener &&
            !y("Presto") &&
            (a = function () {
                var e = le(document, "IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var g = "callImmediate" + Math.random(),
                    k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = u(function (m) {
                    if (("*" == k || m.origin == k) && m.data == g) this.port1.onmessage();
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        f.postMessage(g, k);
                    },
                };
            });
        if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
            var b = new a(),
                c = {},
                d = c;
            b.port1.onmessage = function () {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.xe;
                    c.xe = null;
                    e();
                }
            };
            return function (e) {
                d.next = { xe: e };
                d = d.next;
                b.port2.postMessage(0);
            };
        }
        return function (e) {
            q.setTimeout(e, 0);
        };
    }
    function tf() {
        this.md = this.Sb = null;
    }
    var vf = new pf(
        function () {
            return new uf();
        },
        function (a) {
            a.reset();
        }
    );
    tf.prototype.add = function (a, b) {
        var c = vf.get();
        c.set(a, b);
        this.md ? (this.md.next = c) : (this.Sb = c);
        this.md = c;
    };
    tf.prototype.remove = function () {
        var a = null;
        this.Sb && ((a = this.Sb), (this.Sb = this.Sb.next), this.Sb || (this.md = null), (a.next = null));
        return a;
    };
    function uf() {
        this.next = this.scope = this.Gd = null;
    }
    uf.prototype.set = function (a, b) {
        this.Gd = a;
        this.scope = b;
        this.next = null;
    };
    uf.prototype.reset = function () {
        this.next = this.scope = this.Gd = null;
    };
    function wf(a, b) {
        xf || yf();
        zf || (xf(), (zf = !0));
        Af.add(a, b);
    }
    var xf;
    function yf() {
        if (q.Promise && q.Promise.resolve) {
            var a = q.Promise.resolve(void 0);
            xf = function () {
                a.then(Bf);
            };
        } else
            xf = function () {
                var b = Bf;
                !xa(q.setImmediate) || (q.Window && q.Window.prototype && !y("Edge") && q.Window.prototype.setImmediate == q.setImmediate) ? (rf || (rf = sf()), rf(b)) : q.setImmediate(b);
            };
    }
    var zf = !1,
        Af = new tf();
    function Bf() {
        for (var a; (a = Af.remove()); ) {
            try {
                a.Gd.call(a.scope);
            } catch (b) {
                qf(b);
            }
            vf.put(a);
        }
        zf = !1;
    }
    function Cf(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable;
        } catch (b) {
            return !1;
        }
    }
    function F(a) {
        this.L = 0;
        this.Ua = void 0;
        this.Ab = this.Ya = this.G = null;
        this.Kc = this.Fd = !1;
        if (a != ta)
            try {
                var b = this;
                a.call(
                    void 0,
                    function (c) {
                        Df(b, 2, c);
                    },
                    function (c) {
                        if (!(c instanceof Ef))
                            try {
                                if (c instanceof Error) throw c;
                                throw Error("Promise rejected.");
                            } catch (d) {}
                        Df(b, 3, c);
                    }
                );
            } catch (c) {
                Df(this, 3, c);
            }
    }
    function Ff() {
        this.next = this.context = this.Jb = this.nc = this.child = null;
        this.Tb = !1;
    }
    Ff.prototype.reset = function () {
        this.context = this.Jb = this.nc = this.child = null;
        this.Tb = !1;
    };
    var Gf = new pf(
        function () {
            return new Ff();
        },
        function (a) {
            a.reset();
        }
    );
    function Hf(a, b, c) {
        var d = Gf.get();
        d.nc = a;
        d.Jb = b;
        d.context = c;
        return d;
    }
    function G(a) {
        if (a instanceof F) return a;
        var b = new F(ta);
        Df(b, 2, a);
        return b;
    }
    function If(a) {
        return new F(function (b, c) {
            c(a);
        });
    }
    F.prototype.then = function (a, b, c) {
        return Jf(this, xa(a) ? a : null, xa(b) ? b : null, c);
    };
    F.prototype.$goog_Thenable = !0;
    h = F.prototype;
    h.Lh = function (a, b) {
        a = Hf(a, a, b);
        a.Tb = !0;
        Kf(this, a);
        return this;
    };
    h.Pb = function (a, b) {
        return Jf(this, null, a, b);
    };
    h.cancel = function (a) {
        if (0 == this.L) {
            var b = new Ef(a);
            wf(function () {
                Lf(this, b);
            }, this);
        }
    };
    function Lf(a, b) {
        if (0 == a.L)
            if (a.G) {
                var c = a.G;
                if (c.Ya) {
                    for (var d = 0, e = null, f = null, g = c.Ya; g && (g.Tb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.L && 1 == d ? Lf(c, b) : (f ? ((d = f), d.next == c.Ab && (c.Ab = d), (d.next = d.next.next)) : Mf(c), Nf(c, e, 3, b)));
                }
                a.G = null;
            } else Df(a, 3, b);
    }
    function Kf(a, b) {
        a.Ya || (2 != a.L && 3 != a.L) || Of(a);
        a.Ab ? (a.Ab.next = b) : (a.Ya = b);
        a.Ab = b;
    }
    function Jf(a, b, c, d) {
        var e = Hf(null, null, null);
        e.child = new F(function (f, g) {
            e.nc = b
                ? function (k) {
                      try {
                          var m = b.call(d, k);
                          f(m);
                      } catch (n) {
                          g(n);
                      }
                  }
                : f;
            e.Jb = c
                ? function (k) {
                      try {
                          var m = c.call(d, k);
                          void 0 === m && k instanceof Ef ? g(k) : f(m);
                      } catch (n) {
                          g(n);
                      }
                  }
                : g;
        });
        e.child.G = a;
        Kf(a, e);
        return e.child;
    }
    h.Oh = function (a) {
        this.L = 0;
        Df(this, 2, a);
    };
    h.Ph = function (a) {
        this.L = 0;
        Df(this, 3, a);
    };
    function Df(a, b, c) {
        if (0 == a.L) {
            a === c && ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
            a.L = 1;
            a: {
                var d = c,
                    e = a.Oh,
                    f = a.Ph;
                if (d instanceof F) {
                    Kf(d, Hf(e || ta, f || null, a));
                    var g = !0;
                } else if (Cf(d)) d.then(e, f, a), (g = !0);
                else {
                    if (t(d))
                        try {
                            var k = d.then;
                            if (xa(k)) {
                                Pf(d, k, e, f, a);
                                g = !0;
                                break a;
                            }
                        } catch (m) {
                            f.call(a, m);
                            g = !0;
                            break a;
                        }
                    g = !1;
                }
            }
            g || ((a.Ua = c), (a.L = b), (a.G = null), Of(a), 3 != b || c instanceof Ef || Qf(a, c));
        }
    }
    function Pf(a, b, c, d, e) {
        function f(m) {
            k || ((k = !0), d.call(e, m));
        }
        function g(m) {
            k || ((k = !0), c.call(e, m));
        }
        var k = !1;
        try {
            b.call(a, g, f);
        } catch (m) {
            f(m);
        }
    }
    function Of(a) {
        a.Fd || ((a.Fd = !0), wf(a.Cg, a));
    }
    function Mf(a) {
        var b = null;
        a.Ya && ((b = a.Ya), (a.Ya = b.next), (b.next = null));
        a.Ya || (a.Ab = null);
        return b;
    }
    h.Cg = function () {
        for (var a; (a = Mf(this)); ) Nf(this, a, this.L, this.Ua);
        this.Fd = !1;
    };
    function Nf(a, b, c, d) {
        if (3 == c && b.Jb && !b.Tb) for (; a && a.Kc; a = a.G) a.Kc = !1;
        if (b.child) (b.child.G = null), Rf(b, c, d);
        else
            try {
                b.Tb ? b.nc.call(b.context) : Rf(b, c, d);
            } catch (e) {
                Sf.call(null, e);
            }
        Gf.put(b);
    }
    function Rf(a, b, c) {
        2 == b ? a.nc.call(a.context, c) : a.Jb && a.Jb.call(a.context, c);
    }
    function Qf(a, b) {
        a.Kc = !0;
        wf(function () {
            a.Kc && Sf.call(null, b);
        });
    }
    var Sf = qf;
    function Ef(a) {
        Da.call(this, a);
    }
    x(Ef, Da);
    Ef.prototype.name = "cancel";
    function Tf(a, b) {
        Ze.call(this);
        this.Sc = a || 1;
        this.vc = b || q;
        this.ve = u(this.Nh, this);
        this.Ve = Ba();
    }
    x(Tf, Ze);
    h = Tf.prototype;
    h.enabled = !1;
    h.aa = null;
    h.setInterval = function (a) {
        this.Sc = a;
        this.aa && this.enabled ? (this.stop(), this.start()) : this.aa && this.stop();
    };
    h.Nh = function () {
        if (this.enabled) {
            var a = Ba() - this.Ve;
            0 < a && a < 0.8 * this.Sc ? (this.aa = this.vc.setTimeout(this.ve, this.Sc - a)) : (this.aa && (this.vc.clearTimeout(this.aa), (this.aa = null)), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()));
        }
    };
    h.start = function () {
        this.enabled = !0;
        this.aa || ((this.aa = this.vc.setTimeout(this.ve, this.Sc)), (this.Ve = Ba()));
    };
    h.stop = function () {
        this.enabled = !1;
        this.aa && (this.vc.clearTimeout(this.aa), (this.aa = null));
    };
    h.h = function () {
        Tf.$.h.call(this);
        this.stop();
        delete this.vc;
    };
    function Uf(a, b) {
        if (xa(a)) b && (a = u(a, b));
        else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(0) ? -1 : q.setTimeout(a, 0);
    }
    function Vf(a) {
        Ze.call(this);
        this.aa = null;
        this.f = a;
        a = A || Wc || (Zc && !hd("531") && "TEXTAREA" == a.tagName);
        this.Je = new mf(this);
        this.Je.listen(this.f, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this);
    }
    x(Vf, Ze);
    Vf.prototype.handleEvent = function (a) {
        if ("input" == a.type) (A && hd(10) && 0 == a.keyCode && 0 == a.charCode) || (Wf(this), this.dispatchEvent(Xf(a)));
        else if ("keydown" != a.type || bf(a)) {
            var b = "keydown" == a.type ? this.f.value : null;
            A && 229 == a.keyCode && (b = null);
            var c = Xf(a);
            Wf(this);
            this.aa = Uf(function () {
                this.aa = null;
                this.f.value != b && this.dispatchEvent(c);
            }, this);
        }
    };
    function Wf(a) {
        null != a.aa && (q.clearTimeout(a.aa), (a.aa = null));
    }
    function Xf(a) {
        a = new ze(a.Ia);
        a.type = "input";
        return a;
    }
    Vf.prototype.h = function () {
        Vf.$.h.call(this);
        this.Je.i();
        Wf(this);
        delete this.f;
    };
    function Yf(a, b) {
        Ze.call(this);
        a && (this.Uc && this.detach(), (this.f = a), (this.Tc = Me(this.f, "keypress", this, b)), (this.Td = Me(this.f, "keydown", this.Mc, b, this)), (this.Uc = Me(this.f, "keyup", this.Lg, b, this)));
    }
    x(Yf, Ze);
    h = Yf.prototype;
    h.f = null;
    h.Tc = null;
    h.Td = null;
    h.Uc = null;
    h.ja = -1;
    h.Na = -1;
    h.td = !1;
    var Zf = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45,
        },
        $f = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45,
        },
        ag = !Zc || hd("525"),
        bg = ad && Yc;
    h = Yf.prototype;
    h.Mc = function (a) {
        if (Zc || Wc) if ((17 == this.ja && !a.ctrlKey) || (18 == this.ja && !a.altKey) || (ad && 91 == this.ja && !a.metaKey)) this.Na = this.ja = -1;
        -1 == this.ja && (a.ctrlKey && 17 != a.keyCode ? (this.ja = 17) : a.altKey && 18 != a.keyCode ? (this.ja = 18) : a.metaKey && 91 != a.keyCode && (this.ja = 91));
        ag && !df(a.keyCode, this.ja, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : ((this.Na = ef(a.keyCode)), bg && (this.td = a.altKey));
    };
    h.Lg = function (a) {
        this.Na = this.ja = -1;
        this.td = a.altKey;
    };
    h.handleEvent = function (a) {
        var b = a.Ia,
            c = b.altKey;
        if (A && "keypress" == a.type) {
            var d = this.Na;
            var e = 13 != d && 27 != d ? b.keyCode : 0;
        } else
            (Zc || Wc) && "keypress" == a.type
                ? ((d = this.Na), (e = 0 <= b.charCode && 63232 > b.charCode && cf(d) ? b.charCode : 0))
                : Vc && !Zc
                ? ((d = this.Na), (e = cf(d) ? b.keyCode : 0))
                : ("keypress" == a.type
                      ? (bg && (c = this.td), b.keyCode == b.charCode ? (32 > b.keyCode ? ((d = b.keyCode), (e = 0)) : ((d = this.Na), (e = b.charCode))) : ((d = b.keyCode || this.Na), (e = b.charCode || 0)))
                      : ((d = b.keyCode || this.Na), (e = b.charCode || 0)),
                  ad && 63 == e && 224 == d && (d = 191));
        var f = (d = ef(d));
        d ? (63232 <= d && d in Zf ? (f = Zf[d]) : 25 == d && a.shiftKey && (f = 9)) : b.keyIdentifier && b.keyIdentifier in $f && (f = $f[b.keyIdentifier]);
        (Yc && ag && "keypress" == a.type && !df(f, this.ja, a.shiftKey, a.ctrlKey, c, a.metaKey)) || ((a = f == this.ja), (this.ja = f), (b = new cg(f, e, a, b)), (b.altKey = c), this.dispatchEvent(b));
    };
    h.ga = function () {
        return this.f;
    };
    h.detach = function () {
        this.Tc && (Ve(this.Tc), Ve(this.Td), Ve(this.Uc), (this.Uc = this.Td = this.Tc = null));
        this.f = null;
        this.Na = this.ja = -1;
    };
    h.h = function () {
        Yf.$.h.call(this);
        this.detach();
    };
    function cg(a, b, c, d) {
        ze.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c;
    }
    x(cg, ze);
    function dg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d;
    }
    h = dg.prototype;
    h.clone = function () {
        return new dg(this.top, this.right, this.bottom, this.left);
    };
    h.toString = function () {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
    };
    h.contains = function (a) {
        return this && a ? (a instanceof dg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom) : !1;
    };
    h.expand = function (a, b, c, d) {
        t(a) ? ((this.top -= a.top), (this.right += a.right), (this.bottom += a.bottom), (this.left -= a.left)) : ((this.top -= a), (this.right += Number(b)), (this.bottom += Number(c)), (this.left -= Number(d)));
        return this;
    };
    h.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this;
    };
    h.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this;
    };
    h.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this;
    };
    h.translate = function (a, b) {
        a instanceof $d ? ((this.left += a.x), (this.right += a.x), (this.top += a.y), (this.bottom += a.y)) : ((this.left += a), (this.right += a), "number" === typeof b && ((this.top += b), (this.bottom += b)));
        return this;
    };
    h.scale = function (a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this;
    };
    function eg(a, b) {
        var c = de(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    }
    function fg(a) {
        try {
            return a.getBoundingClientRect();
        } catch (b) {
            return { left: 0, top: 0, right: 0, bottom: 0 };
        }
    }
    function gg(a, b) {
        b = b || je(document);
        var c = b || je(document);
        var d = hg(a),
            e = hg(c);
        if (!A || 9 <= Number(kd)) {
            g = eg(c, "borderLeftWidth");
            var f = eg(c, "borderRightWidth");
            k = eg(c, "borderTopWidth");
            m = eg(c, "borderBottomWidth");
            f = new dg(parseFloat(k), parseFloat(f), parseFloat(m), parseFloat(g));
        } else {
            var g = ig(c, "borderLeft");
            f = ig(c, "borderRight");
            var k = ig(c, "borderTop"),
                m = ig(c, "borderBottom");
            f = new dg(k, f, m, g);
        }
        c == je(document) ? ((g = d.x - c.scrollLeft), (d = d.y - c.scrollTop), !A || 10 <= Number(kd) || ((g += f.left), (d += f.top))) : ((g = d.x - e.x - f.left), (d = d.y - e.y - f.top));
        e = a.offsetWidth;
        f = a.offsetHeight;
        k = Zc && !e && !f;
        (void 0 === e || k) && a.getBoundingClientRect ? ((a = fg(a)), (a = new ae(a.right - a.left, a.bottom - a.top))) : (a = new ae(e, f));
        e = c.clientHeight - a.height;
        f = c.scrollLeft;
        k = c.scrollTop;
        f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
        k += Math.min(d, Math.max(d - e, 0));
        c = new $d(f, k);
        b.scrollLeft = c.x;
        b.scrollTop = c.y;
    }
    function hg(a) {
        var b = de(a),
            c = new $d(0, 0);
        var d = b ? de(b) : document;
        d = !A || 9 <= Number(kd) || "CSS1Compat" == be(d).fa.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = fg(a);
        d = be(b).fa;
        b = je(d);
        d = d.parentWindow || d.defaultView;
        b = A && hd("10") && d.pageYOffset != b.scrollTop ? new $d(b.scrollLeft, b.scrollTop) : new $d(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c;
    }
    var jg = { thin: 2, medium: 4, thick: 6 };
    function ig(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        if (c in jg) a = jg[c];
        else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
        else {
            b = a.style.left;
            var d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = c;
            c = a.style.pixelLeft;
            a.style.left = b;
            a.runtimeStyle.left = d;
            a = +c;
        }
        return a;
    }
    function kg() {}
    ua(kg);
    kg.prototype.eh = 0;
    kg.prototype.Og = "";
    function lg(a) {
        Ze.call(this);
        this.Xb = a || be();
        this.pb = null;
        this.qb = !1;
        this.f = null;
        this.bb = void 0;
        this.Cc = this.Ga = this.G = null;
        this.Sh = !1;
    }
    x(lg, Ze);
    h = lg.prototype;
    h.Ng = kg.Hd();
    h.getId = function () {
        var a;
        (a = this.pb) || ((a = this.Ng), (a = this.pb = a.Og + ":" + (a.eh++).toString(36)));
        return a;
    };
    h.ga = function () {
        return this.f;
    };
    h.Ic = function (a) {
        return this.f ? this.Xb.Ic(a, this.f) : [];
    };
    h.u = function (a) {
        return this.f ? this.Xb.u(a, this.f) : null;
    };
    function mg(a) {
        a.bb || (a.bb = new mf(a));
        return a.bb;
    }
    h.getParent = function () {
        return this.G;
    };
    h.de = function (a) {
        if (this.G && this.G != a) throw Error("Method not supported");
        lg.$.de.call(this, a);
    };
    h.Eb = function () {
        return this.Xb;
    };
    h.Cd = function () {
        this.f = this.Xb.createElement("DIV");
    };
    h.render = function (a) {
        if (this.qb) throw Error("Component already rendered");
        this.f || this.Cd();
        a ? a.insertBefore(this.f, null) : this.Xb.fa.body.appendChild(this.f);
        (this.G && !this.G.qb) || this.j();
    };
    h.j = function () {
        this.qb = !0;
        ng(this, function (a) {
            !a.qb && a.ga() && a.j();
        });
    };
    h.Zb = function () {
        ng(this, function (a) {
            a.qb && a.Zb();
        });
        this.bb && this.bb.cd();
        this.qb = !1;
    };
    h.h = function () {
        this.qb && this.Zb();
        this.bb && (this.bb.i(), delete this.bb);
        ng(this, function (a) {
            a.i();
        });
        !this.Sh && this.f && me(this.f);
        this.G = this.f = this.Cc = this.Ga = null;
        lg.$.h.call(this);
    };
    h.hasChildren = function () {
        return !!this.Ga && 0 != this.Ga.length;
    };
    function ng(a, b) {
        a.Ga && Ia(a.Ga, b, void 0);
    }
    h.removeChild = function (a, b) {
        if (a) {
            var c = "string" === typeof a ? a : a.getId();
            this.Cc && c ? ((a = this.Cc), (a = (null !== a && c in a ? a[c] : void 0) || null)) : (a = null);
            if (c && a) {
                var d = this.Cc;
                c in d && delete d[c];
                Pa(this.Ga, a);
                b && (a.Zb(), a.f && me(a.f));
                b = a;
                if (null == b) throw Error("Unable to set parent component");
                b.G = null;
                lg.$.de.call(b, null);
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a;
    };
    function H(a, b) {
        var c = oe(a, "firebaseui-textfield");
        b ? (Xd(a, "firebaseui-input-invalid"), Wd(a, "firebaseui-input"), c && Xd(c, "firebaseui-textfield-invalid")) : (Xd(a, "firebaseui-input"), Wd(a, "firebaseui-input-invalid"), c && Wd(c, "firebaseui-textfield-invalid"));
    }
    function og(a, b, c) {
        b = new Vf(b);
        we(a, Aa(xe, b));
        mg(a).listen(b, "input", c);
    }
    function pg(a, b, c) {
        b = new Yf(b);
        we(a, Aa(xe, b));
        mg(a).listen(b, "key", function (d) {
            13 == d.keyCode && (d.stopPropagation(), d.preventDefault(), c(d));
        });
    }
    function qg(a, b, c) {
        b = new lf(b);
        we(a, Aa(xe, b));
        mg(a).listen(b, "focusin", c);
    }
    function rg(a, b, c) {
        b = new lf(b);
        we(a, Aa(xe, b));
        mg(a).listen(b, "focusout", c);
    }
    function I(a, b, c) {
        b = new gf(b);
        we(a, Aa(xe, b));
        mg(a).listen(b, "action", function (d) {
            d.stopPropagation();
            d.preventDefault();
            c(d);
        });
    }
    function sg(a) {
        Wd(a, "firebaseui-hidden");
    }
    function tg(a, b) {
        b && ne(a, b);
        Xd(a, "firebaseui-hidden");
    }
    function ug(a) {
        return !Vd(a, "firebaseui-hidden") && "none" != a.style.display;
    }
    function vg(a) {
        wg(a, "upgradeElement");
    }
    function xg(a) {
        wg(a, "downgradeElements");
    }
    var yg = ["mdl-js-textfield", "mdl-js-progress", "mdl-js-spinner", "mdl-js-button"];
    function wg(a, b) {
        a &&
            window.componentHandler &&
            window.componentHandler[b] &&
            Ia(yg, function (c) {
                if (Vd(a, c)) window.componentHandler[b](a);
                Ia(ee(c, a), function (d) {
                    window.componentHandler[b](d);
                });
            });
    }
    function zg(a, b, c) {
        Ag.call(this);
        document.body.appendChild(a);
        a.showModal || window.dialogPolyfill.registerDialog(a);
        a.showModal();
        vg(a);
        b &&
            I(this, a, function (f) {
                var g = a.getBoundingClientRect();
                (f.clientX < g.left || g.left + g.width < f.clientX || f.clientY < g.top || g.top + g.height < f.clientY) && Ag.call(this);
            });
        if (!c) {
            var d = this.ga().parentElement || this.ga().parentNode;
            if (d) {
                var e = this;
                this.uc = function () {
                    if (a.open) {
                        var f = a.getBoundingClientRect().height,
                            g = d.getBoundingClientRect().height,
                            k = d.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
                            m = d.getBoundingClientRect().left - document.body.getBoundingClientRect().left,
                            n = a.getBoundingClientRect().width,
                            l = d.getBoundingClientRect().width;
                        a.style.top = (k + (g - f) / 2).toString() + "px";
                        f = m + (l - n) / 2;
                        a.style.left = f.toString() + "px";
                        a.style.right = (document.body.getBoundingClientRect().width - f - n).toString() + "px";
                    } else window.removeEventListener("resize", e.uc);
                };
                this.uc();
                window.addEventListener("resize", this.uc, !1);
            }
        }
    }
    function Ag() {
        var a = Bg.call(this);
        a && (xg(a), a.open && a.close(), me(a), this.uc && window.removeEventListener("resize", this.uc));
    }
    function Bg() {
        return ge("firebaseui-id-dialog");
    }
    function Cg(a, b, c, d) {
        a = a(b || Dg, c);
        d = (d || be()).createElement("DIV");
        if (t(a))
            if (a instanceof Oc) {
                if (a.jb !== Kc) throw Error("Sanitized content was not of kind HTML.");
                a = new Ob().rb(a.toString(), a.Wb || null);
            } else Ga("Soy template output is unsafe for use as HTML: " + a), (a = Rb("zSoyz"));
        else a = Rb(String(a));
        a.La().match(Eg);
        if (Wb()) for (; d.lastChild; ) d.removeChild(d.lastChild);
        d.innerHTML = Qb(a);
        1 == d.childNodes.length && ((a = d.firstChild), 1 == a.nodeType && (d = a));
        return d;
    }
    var Eg = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        Dg = {};
    function Fg() {
        return "Enter a valid phone number";
    }
    function Gg() {
        return "Unable to send password reset code to specified email";
    }
    function Hg() {
        return "Something went wrong. Please try again.";
    }
    function Ig() {
        return "This email already exists without any means of sign-in. Please reset the password to recover.";
    }
    function Jg(a) {
        a = a || {};
        var b = "";
        a = D(null == a.code || "string" === typeof a.code, "code", a.code, "null|string|undefined");
        switch (t(a) ? a.toString() : a) {
            case "invalid-argument":
                b += "Client specified an invalid argument.";
                break;
            case "invalid-configuration":
                b += "Client specified an invalid project configuration.";
                break;
            case "failed-precondition":
                b += "Request can not be executed in the current system state.";
                break;
            case "out-of-range":
                b += "Client specified an invalid range.";
                break;
            case "unauthenticated":
                b += "Request not authenticated due to missing, invalid, or expired OAuth token.";
                break;
            case "permission-denied":
                b += "Client does not have sufficient permission.";
                break;
            case "not-found":
                b += "Specified resource is not found.";
                break;
            case "aborted":
                b += "Concurrency conflict, such as read-modify-write conflict.";
                break;
            case "already-exists":
                b += "The resource that a client tried to create already exists.";
                break;
            case "resource-exhausted":
                b += "Either out of resource quota or reaching rate limiting.";
                break;
            case "cancelled":
                b += "Request cancelled by the client.";
                break;
            case "data-loss":
                b += "Unrecoverable data loss or data corruption.";
                break;
            case "unknown":
                b += "Unknown server error.";
                break;
            case "internal":
                b += "Internal server error.";
                break;
            case "not-implemented":
                b += "API method not implemented by the server.";
                break;
            case "unavailable":
                b += "Service unavailable.";
                break;
            case "deadline-exceeded":
                b += "Request deadline exceeded.";
                break;
            case "auth/user-disabled":
                b += "The user account has been disabled by an administrator.";
                break;
            case "auth/timeout":
                b += "The operation has timed out.";
                break;
            case "auth/too-many-requests":
                b += "We have blocked all requests from this device due to unusual activity. Try again later.";
                break;
            case "auth/quota-exceeded":
                b += "The quota for this operation has been exceeded. Try again later.";
                break;
            case "auth/network-request-failed":
                b += "A network error has occurred. Try again later.";
                break;
            case "restart-process":
                b += "An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";
                break;
            case "no-matching-tenant-for-email":
                b += "No sign-in provider is available for the given email, please try with a different email.";
        }
        return b;
    }
    function Kg() {
        return "Please login again to perform this operation";
    }
    var Lg = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
    function Mg() {
        return this.u("firebaseui-id-email");
    }
    function Ng() {
        return this.u("firebaseui-id-email-error");
    }
    function Og(a) {
        var b = Mg.call(this),
            c = Ng.call(this);
        og(this, b, function () {
            ug(c) && (H(b, !0), sg(c));
        });
        a &&
            pg(this, b, function () {
                a();
            });
    }
    function Pg() {
        return nb(E(Mg.call(this)) || "");
    }
    function Qg() {
        var a = Mg.call(this);
        var b = Ng.call(this);
        var c = E(a) || "";
        c ? (Lg.test(c) ? (H(a, !0), sg(b), (b = !0)) : (H(a, !1), tg(b, "That email address isn't correct".toString()), (b = !1))) : (H(a, !1), tg(b, "Enter your email address to continue".toString()), (b = !1));
        return b ? nb(E(a)) : null;
    }
    function J() {
        return this.u("firebaseui-id-submit");
    }
    function K() {
        return this.u("firebaseui-id-secondary-link");
    }
    function Rg(a, b) {
        I(this, J.call(this), function (d) {
            a(d);
        });
        var c = K.call(this);
        c &&
            b &&
            I(this, c, function (d) {
                b(d);
            });
    }
    var Sg = !A && !(y("Safari") && !(Nb() || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")));
    function Tg(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (Sg && a.dataset) {
            if (!(!y("Android") || Nb() || y("Firefox") || y("FxiOS") || y("Opera") || y("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a;
        }
        return a.getAttribute(
            "data-" +
                String(b)
                    .replace(/([A-Z])/g, "-$1")
                    .toLowerCase()
        );
    }
    function Ug(a) {
        a = a || {};
        var b = D(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined"),
            c = D(null == a.disabled || "boolean" === typeof a.disabled, "disabled", a.disabled, "boolean|null|undefined"),
            d = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="email">';
        d = D(null == a.ye || "boolean" === typeof a.ye, "changeEmail", a.ye, "boolean|null|undefined") ? d + "Enter new email address" : d + "Email";
        d +=
            '</label><input type="email" name="email" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="' +
            sd(null != b ? b : "") +
            '"' +
            (c ? " disabled" : "") +
            '></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>';
        return C(d);
    }
    function Vg(a) {
        a = a || {};
        a = D(null == a.label || "string" === typeof a.label, "label", a.label, "null|string|undefined");
        var b = '<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';
        b = a ? b + B(a) : b + "Next";
        return C(b + "</button>");
    }
    function Wg() {
        var a = "" + Vg({ label: "Sign In" });
        return C(a);
    }
    function Yg() {
        var a = "" + Vg({ label: "Save" });
        return C(a);
    }
    function Zg() {
        var a = "" + Vg({ label: "Continue" });
        return C(a);
    }
    function $g(a) {
        a = a || {};
        a = D(null == a.label || "string" === typeof a.label, "label", a.label, "null|string|undefined");
        var b = '<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="newPassword">';
        b = a ? b + B(a) : b + "Choose password";
        return C(
            b +
                '</label><input type="password" name="newPassword" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>'
        );
    }
    function ah() {
        var a = {};
        var b = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="password">';
        b = D(null == a.current || "boolean" === typeof a.current, "current", a.current, "boolean|null|undefined") ? b + "Current password" : b + "Password";
        return C(
            b +
                '</label><input type="password" name="password" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>'
        );
    }
    function bh() {
        return C('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>');
    }
    function ch(a) {
        a = a || {};
        a = D(null == a.label || "string" === typeof a.label, "label", a.label, "null|string|undefined");
        var b = '<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';
        b = a ? b + B(a) : b + "Cancel";
        return C(b + "</button>");
    }
    function dh(a) {
        var b = a.R,
            c = "";
        pd(a.S) &&
            pd(b) &&
            (c +=
                '<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>');
        return C(c);
    }
    function eh(a) {
        var b = a.R,
            c = "";
        pd(a.S) &&
            pd(b) &&
            (c +=
                '<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you agree to our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>');
        return C(c);
    }
    function fh(a) {
        a = D("string" === typeof a.message, "message", a.message, "string");
        a = '<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">' + B(a) + '&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">';
        return C(a + "Dismiss</a></p></div>");
    }
    fh.m = "firebaseui.auth.soy2.element.infoBar";
    function gh(a) {
        var b = a.content;
        b = D("string" === typeof b || b instanceof Pc || b instanceof Ob, "content", a.content, "!goog.html.SafeHtml|!goog.soy.data.SanitizedHtml|!soydata.$$EMPTY_STRING_|string");
        a = D(null == a.Bd || "string" === typeof a.Bd, "classes", a.Bd, "null|string|undefined");
        return C('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog' + (a ? " " + sd(a) : "") + '">' + B(b) + "</dialog>");
    }
    function hh(a) {
        var b = D("string" === typeof a.ec, "iconClass", a.ec, "string");
        a = D("string" === typeof a.message, "message", a.message, "string");
        return C(gh({ content: qd('<div class="firebaseui-dialog-icon-wrapper"><div class="' + sd(b) + ' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">' + B(a) + "</div>") }));
    }
    hh.m = "firebaseui.auth.soy2.element.progressDialog";
    function ih(a) {
        a = D(Array.isArray(a.items), "items", a.items, "!Array<{id: string, iconClass: string, label: string,}>");
        for (var b = '<div class="firebaseui-list-box-actions">', c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            b +=
                '<button type="button" data-listboxid="' +
                sd(e.id) +
                '" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">' +
                (e.ec ? '<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon ' + sd(e.ec) + '"></div></div>' : "") +
                '<div class="firebaseui-list-box-label-wrapper">' +
                B(e.label) +
                "</div></button>";
        }
        a = "" + gh({ Bd: "firebaseui-list-box-dialog", content: qd(b + "</div>") });
        return C(a);
    }
    ih.m = "firebaseui.auth.soy2.element.listBoxDialog";
    function jh(a) {
        a = a || {};
        a = D(null == a.kd || "boolean" === typeof a.kd, "useSpinner", a.kd, "boolean|null|undefined");
        return C(
            a
                ? '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>'
                : '<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>'
        );
    }
    jh.m = "firebaseui.auth.soy2.element.busyIndicator";
    function kh(a, b) {
        a = a || {};
        a = D(
            null == a.H || t(a.H),
            "providerConfig",
            a.H,
            "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
        );
        b = b.wg;
        return a.ka
            ? "" + a.ka
            : b[a.providerId]
            ? "" + b[a.providerId]
            : pd(a.providerId) && 0 == ("" + a.providerId).indexOf("saml.")
            ? "" + ("" + a.providerId).substring(5)
            : pd(a.providerId) && 0 == ("" + a.providerId).indexOf("oidc.")
            ? "" + ("" + a.providerId).substring(5)
            : "" + a.providerId;
    }
    function lh() {
        me(mh.call(this));
    }
    function mh() {
        return this.u("firebaseui-id-info-bar");
    }
    function nh() {
        return this.u("firebaseui-id-dismiss-info-bar");
    }
    function oh(a, b, c) {
        var d = this;
        a = Cg(ih, { items: a }, null, this.Eb());
        zg.call(this, a, !0, !0);
        c && (c = ph(a, c)) && (c.focus(), gg(c, a));
        I(this, a, function (e) {
            if ((e = (e = oe(e.target, "firebaseui-id-list-box-dialog-button")) && Tg(e, "listboxid"))) Ag.call(d), b(e);
        });
    }
    function ph(a, b) {
        a = (a || document).getElementsByTagName("BUTTON");
        for (var c = 0; c < a.length; c++) if (Tg(a[c], "listboxid") === b) return a[c];
        return null;
    }
    function qh() {
        return this.u("firebaseui-id-name");
    }
    function rh() {
        return this.u("firebaseui-id-name-error");
    }
    function sh() {
        return this.u("firebaseui-id-new-password");
    }
    function th() {
        return this.u("firebaseui-id-password-toggle");
    }
    function uh() {
        this.Sd = !this.Sd;
        var a = th.call(this),
            b = sh.call(this);
        this.Sd ? ((b.type = "text"), Wd(a, "firebaseui-input-toggle-off"), Xd(a, "firebaseui-input-toggle-on")) : ((b.type = "password"), Wd(a, "firebaseui-input-toggle-on"), Xd(a, "firebaseui-input-toggle-off"));
        b.focus();
    }
    function vh() {
        return this.u("firebaseui-id-new-password-error");
    }
    function wh() {
        this.Sd = !1;
        var a = sh.call(this);
        a.type = "password";
        var b = vh.call(this);
        og(this, a, function () {
            ug(b) && (H(a, !0), sg(b));
        });
        var c = th.call(this);
        Wd(c, "firebaseui-input-toggle-on");
        Xd(c, "firebaseui-input-toggle-off");
        qg(this, a, function () {
            Wd(c, "firebaseui-input-toggle-focus");
            Xd(c, "firebaseui-input-toggle-blur");
        });
        rg(this, a, function () {
            Wd(c, "firebaseui-input-toggle-blur");
            Xd(c, "firebaseui-input-toggle-focus");
        });
        I(this, c, u(uh, this));
    }
    function xh() {
        var a = sh.call(this);
        var b = vh.call(this);
        E(a) ? (H(a, !0), sg(b), (b = !0)) : (H(a, !1), tg(b, "Enter your password".toString()), (b = !1));
        return b ? E(a) : null;
    }
    function yh() {
        return this.u("firebaseui-id-password");
    }
    function zh() {
        return this.u("firebaseui-id-password-error");
    }
    function Ah() {
        var a = yh.call(this),
            b = zh.call(this);
        og(this, a, function () {
            ug(b) && (H(a, !0), sg(b));
        });
    }
    function Bh() {
        var a = yh.call(this);
        var b = zh.call(this);
        E(a) ? (H(a, !0), sg(b), (b = !0)) : (H(a, !1), tg(b, "Enter your password".toString()), (b = !1));
        return b ? E(a) : null;
    }
    function Ch() {
        return this.u("firebaseui-id-phone-confirmation-code");
    }
    function Dh() {
        return this.u("firebaseui-id-phone-confirmation-code-error");
    }
    function Eh(a, b) {
        this.Dc = a;
        this.Oa = b;
    }
    function Fh(a) {
        a = nb(a);
        var b = Sd.search(a);
        return 0 < b.length ? new Eh("1" == b[0].a ? "1-US-0" : b[0].b, nb(a.substr(b[0].a.length + 1))) : null;
    }
    function Gh(a) {
        var b = Nd(a.Dc);
        if (!b) throw Error("Country ID " + a.Dc + " not found.");
        return "+" + b.a + a.Oa;
    }
    function Hh() {
        return this.u("firebaseui-id-phone-number");
    }
    function Ih() {
        return this.u("firebaseui-id-country-selector");
    }
    function Jh() {
        return this.u("firebaseui-id-phone-number-error");
    }
    function Kh(a, b) {
        var c = a.Sa,
            d = Lh("1-US-0", c);
        b = b && Lh(b, c) ? b : d ? "1-US-0" : 0 < c.length ? c[0].b : null;
        if (!b) throw Error("No available default country");
        Mh.call(this, b, a);
    }
    function Lh(a, b) {
        a = Nd(a);
        return !(!a || !Oa(b, a));
    }
    function Nh(a) {
        return La(a, function (b) {
            return { id: b.b, ec: "firebaseui-flag " + Oh(b), label: b.name + " \u200e+" + b.a };
        });
    }
    function Oh(a) {
        return "firebaseui-flag-" + a.c;
    }
    function Ph(a) {
        var b = this;
        oh.call(
            this,
            Nh(a.Sa),
            function (c) {
                Mh.call(b, c, a, !0);
                b.mb().focus();
            },
            this.sc
        );
    }
    function Mh(a, b, c) {
        var d = Nd(a);
        d &&
            (c && ((c = nb(E(Hh.call(this)) || "")), (b = b.search(c)), b.length && b[0].a != d.a && ((c = "+" + d.a + c.substr(b[0].a.length + 1)), re(Hh.call(this), c))),
            (b = Nd(this.sc)),
            (this.sc = a),
            (a = this.u("firebaseui-id-country-selector-flag")),
            b && Xd(a, Oh(b)),
            Wd(a, Oh(d)),
            ne(this.u("firebaseui-id-country-selector-code"), "\u200e+" + d.a));
    }
    function Qh() {
        return this.u("firebaseui-id-resend-countdown");
    }
    var Rh = {},
        Sh = 0;
    function Th(a, b) {
        if (!a) throw Error("Event target element must be provided!");
        a = Uh(a);
        if (Rh[a] && Rh[a].length) for (var c = 0; c < Rh[a].length; c++) Rh[a][c].dispatchEvent(b);
    }
    function Vh(a) {
        var b = Uh(a.ga());
        Rh[b] &&
            Rh[b].length &&
            (Ra(Rh[b], function (c) {
                return c == a;
            }),
            Rh[b].length || delete Rh[b]);
    }
    function Uh(a) {
        "undefined" === typeof a.Fe && ((a.Fe = Sh), Sh++);
        return a.Fe;
    }
    function Wh(a) {
        if (!a) throw Error("Event target element must be provided!");
        Ze.call(this);
        this.yg = a;
    }
    p(Wh, Ze);
    Wh.prototype.ga = function () {
        return this.yg;
    };
    Wh.prototype.register = function () {
        var a = Uh(this.ga());
        Rh[a] ? Oa(Rh[a], this) || Rh[a].push(this) : (Rh[a] = [this]);
    };
    Wh.prototype.unregister = function () {
        Vh(this);
    };
    var Xh = {
        vg: {
            "google.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
            "github.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg",
            "facebook.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg",
            "twitter.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",
            password: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",
            phone: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",
            anonymous: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png",
            "microsoft.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg",
            "yahoo.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg",
            "apple.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",
            saml: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",
            oidc: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg",
        },
        ug: {
            "google.com": "#ffffff",
            "github.com": "#333333",
            "facebook.com": "#3b5998",
            "twitter.com": "#55acee",
            password: "#db4437",
            phone: "#02bd7e",
            anonymous: "#f4b400",
            "microsoft.com": "#2F2F2F",
            "yahoo.com": "#720E9E",
            "apple.com": "#000000",
            saml: "#007bff",
            oidc: "#007bff",
        },
        wg: {
            "google.com": "Google",
            "github.com": "GitHub",
            "facebook.com": "Facebook",
            "twitter.com": "Twitter",
            password: "Password",
            phone: "Phone",
            anonymous: "Guest",
            "microsoft.com": "Microsoft",
            "yahoo.com": "Yahoo",
            "apple.com": "Apple",
        },
    };
    function Yh(a, b, c) {
        ye.call(this, a, b);
        for (var d in c) this[d] = c[d];
    }
    x(Yh, ye);
    function L(a, b, c, d, e) {
        lg.call(this, c);
        this.sf = a;
        this.rf = b;
        this.Rc = !1;
        this.Yc = d || null;
        this.Ra = this.Ea = null;
        this.Gb = Za(Xh);
        bb(this.Gb, e || {});
    }
    x(L, lg);
    h = L.prototype;
    h.Cd = function () {
        var a = Cg(this.sf, this.rf, this.Gb, this.Eb());
        vg(a);
        this.f = a;
    };
    h.j = function () {
        L.$.j.call(this);
        Th(M(this), new Yh("pageEnter", M(this), { pageId: this.Yc }));
        if (this.Oe() && this.Gb.S) {
            var a = this.Gb.S;
            I(this, this.Oe(), function () {
                a();
            });
        }
        if (this.Ne() && this.Gb.R) {
            var b = this.Gb.R;
            I(this, this.Ne(), function () {
                b();
            });
        }
    };
    h.Zb = function () {
        Th(M(this), new Yh("pageExit", M(this), { pageId: this.Yc }));
        L.$.Zb.call(this);
    };
    h.h = function () {
        window.clearTimeout(this.Ea);
        this.rf = this.sf = this.Ea = null;
        this.Rc = !1;
        this.Ra = null;
        xg(this.ga());
        L.$.h.call(this);
    };
    function Zh(a) {
        a.Rc = !0;
        var b = Vd(a.ga(), "firebaseui-use-spinner");
        a.Ea = window.setTimeout(function () {
            a.ga() && null === a.Ra && ((a.Ra = Cg(jh, { kd: b }, null, a.Eb())), a.ga().appendChild(a.Ra), vg(a.Ra));
        }, 500);
    }
    h.Y = function (a, b, c, d) {
        function e() {
            if (f.isDisposed()) return null;
            f.Rc = !1;
            window.clearTimeout(f.Ea);
            f.Ea = null;
            f.Ra && (xg(f.Ra), me(f.Ra), (f.Ra = null));
        }
        var f = this;
        if (f.Rc) return null;
        Zh(f);
        return a.apply(null, b).then(c, d).then(e, e);
    };
    function M(a) {
        return a.ga().parentElement || a.ga().parentNode;
    }
    function $h(a, b, c) {
        pg(a, b, function () {
            c.focus();
        });
    }
    function ai(a, b, c) {
        pg(a, b, function () {
            c();
        });
    }
    v(L.prototype, {
        F: function (a) {
            lh.call(this);
            var b = Cg(fh, { message: a }, null, this.Eb());
            this.ga().appendChild(b);
            I(this, nh.call(this), function () {
                me(b);
            });
        },
        gi: lh,
        ji: mh,
        ii: nh,
        Nb: function (a, b) {
            a = Cg(hh, { ec: a, message: b }, null, this.Eb());
            zg.call(this, a);
        },
        da: Ag,
        Fg: Bg,
        li: function () {
            return this.u("firebaseui-tos");
        },
        Oe: function () {
            return this.u("firebaseui-tos-link");
        },
        Ne: function () {
            return this.u("firebaseui-pp-link");
        },
        mi: function () {
            return this.u("firebaseui-tos-list");
        },
    });
    function bi(a, b) {
        a = a || {};
        D(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = D(null == a.kb || "boolean" === typeof a.kb, "displayCancelButton", a.kb, "boolean|null|undefined"),
            d = D(null == a.ea || "boolean" === typeof a.ea, "displayFullTosPpMessage", a.ea, "boolean|null|undefined");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' +
            (Ug(a) +
                '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
                (c ? ch(null) : "") +
                Vg(null) +
                '</div></div><div class="firebaseui-card-footer">' +
                (d ? eh(b) : dh(b)) +
                "</div></form></div>");
        return C(a);
    }
    bi.m = "firebaseui.auth.soy2.page.signIn";
    function ci(a, b) {
        a = a || {};
        D(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = D(null == a.ea || "boolean" === typeof a.ea, "displayFullTosPpMessage", a.ea, "boolean|null|undefined");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in' +
            ('</h1></div><div class="firebaseui-card-content">' +
                Ug(a) +
                ah() +
                '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' +
                bh() +
                '</div><div class="firebaseui-form-actions">' +
                Wg() +
                '</div></div><div class="firebaseui-card-footer">' +
                (c ? eh(b) : dh(b)) +
                "</div></form></div>");
        return C(a);
    }
    ci.m = "firebaseui.auth.soy2.page.passwordSignIn";
    function di(a, b) {
        a = a || {};
        D(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = D(null == a.Yd || "boolean" === typeof a.Yd, "requireDisplayName", a.Yd, "boolean|null|undefined");
        D(null == a.name || "string" === typeof a.name, "name", a.name, "null|string|undefined");
        var d = D(null == a.hb || "boolean" === typeof a.hb, "allowCancel", a.hb, "boolean|null|undefined"),
            e = D(null == a.ea || "boolean" === typeof a.ea, "displayFullTosPpMessage", a.ea, "boolean|null|undefined"),
            f = '</h1></div><div class="firebaseui-card-content">' + Ug(a);
        c
            ? ((a = a || {}),
              (a = D(null == a.name || "string" === typeof a.name, "name", a.name, "null|string|undefined")),
              (a =
                  '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="name">First &amp; last name</label><input type="text" name="name" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="' +
                  (sd(null != a ? a : "") + '"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>')),
              (a = C(a)))
            : (a = "");
        b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account' +
            (f +
                a +
                $g(null) +
                '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
                (d ? ch(null) : "") +
                Yg() +
                '</div></div><div class="firebaseui-card-footer">' +
                (e ? eh(b) : dh(b)) +
                "</div></form></div>");
        return C(b);
    }
    di.m = "firebaseui.auth.soy2.page.passwordSignUp";
    function ei(a, b) {
        a = a || {};
        D(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        var c = D(null == a.hb || "boolean" === typeof a.hb, "allowCancel", a.hb, "boolean|null|undefined");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>' +
            (Ug(a) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (c ? ch(null) : ""));
        a += Vg({ label: "Send" });
        a += '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>";
        return C(a);
    }
    ei.m = "firebaseui.auth.soy2.page.passwordRecovery";
    function fi(a, b) {
        var c = D("string" === typeof a.email, "email", a.email, "string");
        a = D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined");
        var d =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        c = "Follow the instructions sent to <strong>" + (B(c) + "</strong> to recover your password");
        d = d + c + '</p></div><div class="firebaseui-card-actions">';
        a && ((d = d + '<div class="firebaseui-form-actions">' + Vg({ label: "Done" })), (d += "</div>"));
        d += '</div><div class="firebaseui-card-footer">' + dh(b) + "</div></div>";
        return C(d);
    }
    fi.m = "firebaseui.auth.soy2.page.passwordRecoveryEmailSent";
    function gi(a, b) {
        return C('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">' + jh(null, b) + "</div></div>");
    }
    gi.m = "firebaseui.auth.soy2.page.callback";
    function hi(a, b) {
        return C('<div class="firebaseui-container firebaseui-id-page-spinner">' + jh({ kd: !0 }, b) + "</div>");
    }
    hi.m = "firebaseui.auth.soy2.page.spinner";
    function ii() {
        return C('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>');
    }
    ii.m = "firebaseui.auth.soy2.page.blank";
    function ji(a, b) {
        var c = D("string" === typeof a.email, "email", a.email, "string");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">';
        c = "A sign-in email with additional instructions was sent to <strong>" + (B(c) + "</strong>. Check your email to complete sign-in.");
        a += c;
        c = C('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');
        a = a + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + c + '</div><div class="firebaseui-form-actions">') + ch({ label: "Back" });
        a += '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>";
        return C(a);
    }
    ji.m = "firebaseui.auth.soy2.page.emailLinkSignInSent";
    function ki(a, b) {
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' +
            (C('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>') + '</div><div class="firebaseui-form-actions">');
        a += ch({ label: "Back" });
        a += '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>";
        return C(a);
    }
    ki.m = "firebaseui.auth.soy2.page.emailNotReceived";
    function li(a, b) {
        a = a || {};
        D(null == a.email || "string" === typeof a.email, "email", a.email, "null|string|undefined");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">' +
            (Ug(a) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + ch(null) + Vg(null) + '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>");
        return C(a);
    }
    li.m = "firebaseui.auth.soy2.page.emailLinkSignInConfirmation";
    function mi() {
        var a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            ch({ label: "Dismiss" });
        return C(a + "</div></div></div>");
    }
    mi.m = "firebaseui.auth.soy2.page.differentDeviceError";
    function ni() {
        var a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' +
            ch({ label: "Dismiss" });
        return C(a + "</div></div></div>");
    }
    ni.m = "firebaseui.auth.soy2.page.anonymousUserMismatch";
    function oi(a, b) {
        var c = D("string" === typeof a.email, "email", a.email, "string");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">';
        c = "You\u2019ve already used <strong>" + (B(c) + "</strong> to sign in. Enter your password for that account.");
        a =
            a +
            c +
            ("</p>" +
                ah() +
                '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' +
                bh() +
                '</div><div class="firebaseui-form-actions">' +
                Wg() +
                '</div></div><div class="firebaseui-card-footer">' +
                dh(b) +
                "</div></form></div>");
        return C(a);
    }
    oi.m = "firebaseui.auth.soy2.page.passwordLinking";
    function pi(a, b) {
        var c = D("string" === typeof a.email, "email", a.email, "string");
        D(
            null == a.H || t(a.H),
            "providerConfig",
            a.H,
            "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
        );
        var d = "";
        a = "" + kh(a, b);
        d +=
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">';
        c = "You\u2019ve already used <strong>" + (B(c) + ("</strong>. You can connect your <strong>" + (B(a) + ("</strong> account with <strong>" + (B(c) + "</strong> by signing in with email link below.")))));
        d = d + c + '<p class="firebaseui-text firebaseui-text-justify">';
        c = "For this flow to successfully connect your " + (B(a) + " account with this email, you have to open the link on the same device or browser.");
        d = d + c + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Wg() + '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>");
        return C(d);
    }
    pi.m = "firebaseui.auth.soy2.page.emailLinkSignInLinking";
    function qi(a, b) {
        a = a || {};
        D(
            null == a.H || t(a.H),
            "providerConfig",
            a.H,
            "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
        );
        var c = "";
        a = "" + kh(a, b);
        c +=
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">';
        var d = "You originally intended to connect <strong>" + (B(a) + "</strong> to your email account but have opened the link on a different device where you are not signed in.");
        c = c + d + '</p><p class="firebaseui-text firebaseui-text-justify">';
        a = "If you still want to connect your <strong>" + (B(a) + "</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.");
        c = c + a + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Zg() + '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>");
        return C(c);
    }
    qi.m = "firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";
    function ri(a, b) {
        var c = D("string" === typeof a.email, "email", a.email, "string");
        D(
            null == a.H || t(a.H),
            "providerConfig",
            a.H,
            "null|undefined|{providerId: (null|string|undefined), providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
        );
        var d = "";
        a = "" + kh(a, b);
        d +=
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">';
        c = "You\u2019ve already used <strong>" + (B(c) + ("</strong>. Sign in with " + (B(a) + " to continue.")));
        d = d + c + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Vg({ label: "Sign in with " + a });
        d += '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>";
        return C(d);
    }
    ri.m = "firebaseui.auth.soy2.page.federatedLinking";
    function si(a, b) {
        var c = D("string" === typeof a.email, "email", a.email, "string");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        c = "To continue sign in with <strong>" + (B(c) + "</strong> on this device, you have to recover the password.");
        a = a + c + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + ch(null));
        a += Vg({ label: "Recover password" });
        a += '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>";
        return C(a);
    }
    si.m = "firebaseui.auth.soy2.page.unsupportedProvider";
    function ti(a) {
        var b = D("string" === typeof a.email, "email", a.email, "string");
        var c =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">';
        b = '<p class="firebaseui-text">for <strong>' + (B(b) + "</strong></p>");
        var d = { label: "New password" },
            e;
        for (e in a) e in d || (d[e] = a[e]);
        c = c + b + $g(d);
        c += '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Yg() + "</div></div></form></div>";
        return C(c);
    }
    ti.m = "firebaseui.auth.soy2.page.passwordReset";
    function ui(a) {
        a = a || {};
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">' +
            ((D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(a);
    }
    ui.m = "firebaseui.auth.soy2.page.passwordResetSuccess";
    function vi(a) {
        a = a || {};
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' +
            ((D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(a);
    }
    vi.m = "firebaseui.auth.soy2.page.passwordResetFailure";
    function wi(a) {
        var b = D("string" === typeof a.email, "email", a.email, "string");
        a = D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined");
        var c =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        b = "Your sign-in email address has been changed back to <strong>" + (B(b) + "</strong>.");
        c =
            c +
            b +
            '</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.';
        c += '</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></form></div>";
        return C(c);
    }
    wi.m = "firebaseui.auth.soy2.page.emailChangeRevokeSuccess";
    function xi(a) {
        a = a || {};
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">' +
            ((D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(a);
    }
    xi.m = "firebaseui.auth.soy2.page.emailChangeRevokeFailure";
    function yi(a) {
        a = a || {};
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">' +
            ((D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(a);
    }
    yi.m = "firebaseui.auth.soy2.page.emailVerificationSuccess";
    function zi(a) {
        a = a || {};
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' +
            ((D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(a);
    }
    zi.m = "firebaseui.auth.soy2.page.emailVerificationFailure";
    function Ai(a) {
        var b = D("string" === typeof a.email, "email", a.email, "string");
        a = D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined");
        var c =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        b = "You can now sign in with your new email <strong>" + (B(b) + "</strong>.");
        c = c + b + ('</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(c);
    }
    Ai.m = "firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";
    function Bi(a) {
        a = a || {};
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">' +
            ((D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(a);
    }
    Bi.m = "firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";
    function Ci(a) {
        var b = D("string" === typeof a.factorId, "factorId", a.factorId, "string"),
            c = D(null == a.phoneNumber || "string" === typeof a.phoneNumber, "phoneNumber", a.phoneNumber, "null|string|undefined");
        a = D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined");
        var d =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        switch (t(b) ? b.toString() : b) {
            case "phone":
                b = "The <strong>" + (B(b) + (" " + (B(c) + "</strong> was removed as a second authentication step.")));
                d += b;
                break;
            default:
                d += "The device or app was removed as a second authentication step.";
        }
        d =
            d +
            '</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">' +
            ((a ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></form></div>");
        return C(d);
    }
    Ci.m = "firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";
    function Di(a) {
        a = a || {};
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">' +
            ((D(null == a.l || "boolean" === typeof a.l, "allowContinue", a.l, "boolean|null|undefined") ? '<div class="firebaseui-form-actions">' + Zg() + "</div>" : "") + "</div></div>");
        return C(a);
    }
    Di.m = "firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";
    function Ei(a) {
        var b = D("string" === typeof a.errorMessage, "errorMessage", a.errorMessage, "string");
        a = D(null == a.sd || "boolean" === typeof a.sd, "allowRetry", a.sd, "boolean|null|undefined");
        b =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' +
            (B(b) + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">');
        a && (b += Vg({ label: "Retry" }));
        return C(b + "</div></div></div>");
    }
    Ei.m = "firebaseui.auth.soy2.page.recoverableError";
    function Fi(a) {
        a = D("string" === typeof a.errorMessage, "errorMessage", a.errorMessage, "string");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' +
            (B(a) + "</p></div></div>");
        return C(a);
    }
    Fi.m = "firebaseui.auth.soy2.page.unrecoverableError";
    function Gi(a, b) {
        var c = D("string" === typeof a.Df, "userEmail", a.Df, "string"),
            d = D("string" === typeof a.ff, "pendingEmail", a.ff, "string");
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">';
        c = "Continue with " + (B(c) + "?");
        a = a + c + '</h2><p class="firebaseui-text">';
        c = "You originally wanted to sign in with " + B(d);
        a = a + c + ('</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + ch(null));
        a += Vg({ label: "Continue" });
        a += '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form></div>";
        return C(a);
    }
    Gi.m = "firebaseui.auth.soy2.page.emailMismatch";
    function Hi(a, b) {
        a = D(Array.isArray(a.hf), "providerConfigs", a.hf, "!Array<{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}>");
        for (
            var c =
                    '<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">',
                d = a.length,
                e = 0;
            e < d;
            e++
        ) {
            var f = { H: a[e] },
                g = b;
            f = f || {};
            var k = D(
                null == f.H || t(f.H),
                "providerConfig",
                f.H,
                "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
            );
            var m = f;
            m = m || {};
            var n = "";
            m = D(
                null == m.H || t(m.H),
                "providerConfig",
                m.H,
                "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
            ).providerId;
            switch (t(m) ? m.toString() : m) {
                case "google.com":
                    n += "firebaseui-idp-google";
                    break;
                case "github.com":
                    n += "firebaseui-idp-github";
                    break;
                case "facebook.com":
                    n += "firebaseui-idp-facebook";
                    break;
                case "twitter.com":
                    n += "firebaseui-idp-twitter";
                    break;
                case "phone":
                    n += "firebaseui-idp-phone";
                    break;
                case "anonymous":
                    n += "firebaseui-idp-anonymous";
                    break;
                case "password":
                    n += "firebaseui-idp-password";
                    break;
                default:
                    n += "firebaseui-idp-generic";
            }
            n = '<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised ' + sd(n) + ' firebaseui-id-idp-button" data-provider-id="' + sd(k.providerId) + '" style="background-color:';
            var l = f;
            m = g;
            l = l || {};
            l = D(
                null == l.H || t(l.H),
                "providerConfig",
                l.H,
                "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
            );
            m = m.ug;
            n =
                n +
                sd(Ed(l.Ub ? "" + l.Ub : m[l.providerId] ? "" + m[l.providerId] : 0 == ("" + l.providerId).indexOf("saml.") ? "" + m.saml : 0 == ("" + l.providerId).indexOf("oidc.") ? "" + m.oidc : "" + m.password)) +
                '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';
            l = f;
            m = g;
            l = l || {};
            l = D(
                null == l.H || t(l.H),
                "providerConfig",
                l.H,
                "null|undefined|{providerId: string, providerName: (null|string|undefined), fullLabel: (null|string|undefined), buttonColor: (null|string|undefined), iconUrl: (null|string|undefined),}"
            );
            m = m.vg;
            m = l.fc ? xd(l.fc) : m[l.providerId] ? xd(m[l.providerId]) : 0 == ("" + l.providerId).indexOf("saml.") ? xd(m.saml) : 0 == ("" + l.providerId).indexOf("oidc.") ? xd(m.oidc) : xd(m.password);
            m = nd(m);
            n = n + sd(Cd(m)) + '"></span>';
            od(k.providerId, "password")
                ? ((n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">'),
                  k.ra ? (n += B(k.ra)) : k.ka ? ((f = "Sign in with " + B(kh(f, g))), (n += f)) : (n += "Sign in with email"),
                  (n += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'),
                  (n = k.ka ? n + B(k.ka) : n + "Email"),
                  (n += "</span>"))
                : od(k.providerId, "phone")
                ? ((n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">'),
                  k.ra ? (n += B(k.ra)) : k.ka ? ((f = "Sign in with " + B(kh(f, g))), (n += f)) : (n += "Sign in with phone"),
                  (n += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'),
                  (n = k.ka ? n + B(k.ka) : n + "Phone"),
                  (n += "</span>"))
                : od(k.providerId, "anonymous")
                ? ((n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">'),
                  k.ra ? (n += B(k.ra)) : k.ka ? ((f = "Sign in with " + B(kh(f, g))), (n += f)) : (n += "Continue as guest"),
                  (n += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'),
                  (n = k.ka ? n + B(k.ka) : n + "Guest"),
                  (n += "</span>"))
                : ((n += '<span class="firebaseui-idp-text firebaseui-idp-text-long">'),
                  k.ra ? (n += B(k.ra)) : ((m = "Sign in with " + B(kh(f, g))), (n += m)),
                  (n += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' + (k.ka ? B(k.ka) : B(kh(f, g))) + "</span>"));
            k = C(n + "</button>");
            c += '<li class="firebaseui-list-item">' + k + "</li>";
        }
        c += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + eh(b) + "</div></div>";
        return C(c);
    }
    Hi.m = "firebaseui.auth.soy2.page.providerSignIn";
    function Ii(a, b) {
        a = a || {};
        D(null == a.Oa || "string" === typeof a.Oa, "nationalNumber", a.Oa, "null|string|undefined");
        var c = D(null == a.Ed || "boolean" === typeof a.Ed, "enableVisibleRecaptcha", a.Ed, "boolean|null|undefined"),
            d = D(null == a.kb || "boolean" === typeof a.kb, "displayCancelButton", a.kb, "boolean|null|undefined"),
            e = D(null == a.ea || "boolean" === typeof a.ea, "displayFullTosPpMessage", a.ea, "boolean|null|undefined");
        a = a || {};
        a = D(null == a.Oa || "string" === typeof a.Oa, "nationalNumber", a.Oa, "null|string|undefined");
        a =
            '<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="phoneNumber">Phone number</label><input type="tel" name="phoneNumber" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="' +
            (sd(null != a ? a : "") +
                '"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>');
        a = '</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + C(a);
        c = c
            ? C(
                  '<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'
              )
            : "";
        d =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number' +
            (a + c + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (d ? ch(null) : ""));
        d += Vg({ label: "Verify" });
        e
            ? ((e = b.R),
              (c = '<p class="firebaseui-tos firebaseui-phone-tos">'),
              (c =
                  pd(b.S) && pd(e)
                      ? c +
                        'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.'
                      : c + "By tapping Verify, an SMS may be sent. Message &amp; data rates may apply."),
              (b = C(c + "</p>")))
            : (b = C('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>') + dh(b));
        return C(d + ('</div></div><div class="firebaseui-card-footer">' + b + "</div></form></div>"));
    }
    Ii.m = "firebaseui.auth.soy2.page.phoneSignInStart";
    function Ji(a, b) {
        a = a || {};
        a = D(null == a.phoneNumber || "string" === typeof a.phoneNumber, "phoneNumber", a.phoneNumber, "null|string|undefined");
        var c =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
        var d = 'Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;' + (B(a) + "</a>");
        B(a);
        a = c + d;
        c = C(
            '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="phoneConfirmationCode">6-digit code</label><input type="number" name="phoneConfirmationCode" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'
        );
        c = a + ("</p>" + c + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + ch(null));
        a = c += Vg({ label: "Continue" });
        b = '</div></div><div class="firebaseui-card-footer">' + dh(b) + "</div></form>";
        c = C('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>');
        return C(a + (b + c + "</div>"));
    }
    Ji.m = "firebaseui.auth.soy2.page.phoneSignInFinish";
    function Ki() {
        return C(
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>'
        );
    }
    Ki.m = "firebaseui.auth.soy2.page.signOut";
    function Li(a, b) {
        a = D(Array.isArray(a.tf), "tenantConfigs", a.tf, "!Array<{tenantId: (null|string|undefined), fullLabel: (null|string|undefined), displayName: string, buttonColor: string, iconUrl: string,}>");
        for (
            var c = '<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">',
                d = a.length,
                e = 0;
            e < d;
            e++
        ) {
            var f = a[e];
            var g = D(t(f), "tenantConfig", f, "{tenantId: (null|string|undefined), fullLabel: (null|string|undefined), displayName: string, buttonColor: string, iconUrl: string,}");
            f =
                '<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-' +
                sd(g.tenantId ? "" + g.tenantId : "top-level-project") +
                ' firebaseui-id-tenant-selection-button"' +
                (g.tenantId ? ' data-tenant-id="' + sd(g.tenantId) + '"' : "") +
                ' style="background-color:' +
                sd(Ed(g.Ub)) +
                '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="' +
                sd(Cd(g.fc)) +
                '"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">';
            if (g.ra) f += B(g.ra);
            else {
                var k = "Sign in to " + B(g.displayName);
                f += k;
            }
            f += '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">';
            g = B(g.displayName);
            f = f + g + "</span></button>";
            f = C(f);
            c += '<li class="firebaseui-list-item">' + f + "</li>";
        }
        c += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + eh(b) + "</div></div>";
        return C(c);
    }
    Li.m = "firebaseui.auth.soy2.page.selectTenant";
    function Mi(a, b) {
        a =
            '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' +
            (Ug(null) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Vg(null) + '</div></div><div class="firebaseui-card-footer">' + eh(b) + "</div></form></div>");
        return C(a);
    }
    Mi.m = "firebaseui.auth.soy2.page.providerMatchByEmail";
    function Ni(a, b) {
        L.call(this, ni, void 0, b, "anonymousUserMismatch");
        this.mc = a;
    }
    p(Ni, L);
    Ni.prototype.j = function () {
        var a = this;
        I(this, this.I(), function () {
            a.mc();
        });
        this.I().focus();
        L.prototype.j.call(this);
    };
    Ni.prototype.h = function () {
        this.mc = null;
        L.prototype.h.call(this);
    };
    v(Ni.prototype, { I: K });
    function Oi(a) {
        L.call(this, ii, void 0, a, "blank");
    }
    p(Oi, L);
    function Pi(a) {
        L.call(this, gi, void 0, a, "callback");
    }
    p(Pi, L);
    Pi.prototype.Y = function (a, b, c, d) {
        return a.apply(null, b).then(c, d);
    };
    function Qi(a, b) {
        L.call(this, mi, void 0, b, "differentDeviceError");
        this.mc = a;
    }
    p(Qi, L);
    Qi.prototype.j = function () {
        var a = this;
        I(this, this.I(), function () {
            a.mc();
        });
        this.I().focus();
        L.prototype.j.call(this);
    };
    Qi.prototype.h = function () {
        this.mc = null;
        L.prototype.h.call(this);
    };
    v(Qi.prototype, { I: K });
    function Ri(a, b, c, d) {
        L.call(this, wi, { email: a, l: !!c }, d, "emailChangeRevoke");
        this.pc = b;
        this.ca = c || null;
    }
    p(Ri, L);
    Ri.prototype.j = function () {
        var a = this;
        I(this, Si(this), function () {
            a.pc();
        });
        this.ca && (this.v(this.ca), this.C().focus());
        L.prototype.j.call(this);
    };
    Ri.prototype.h = function () {
        this.pc = this.ca = null;
        L.prototype.h.call(this);
    };
    function Si(a) {
        return a.u("firebaseui-id-reset-password-link");
    }
    v(Ri.prototype, { C: J, I: K, v: Rg });
    function Ti(a, b) {
        try {
            var c = "number" == typeof a.selectionStart;
        } catch (d) {
            c = !1;
        }
        c
            ? ((a.selectionStart = b), (a.selectionEnd = b))
            : A && !hd("9") && ("textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length), (a = a.createTextRange()), a.collapse(!0), a.move("character", b), a.select());
    }
    function Ui(a, b, c, d, e, f) {
        L.call(this, li, { email: c }, f, "emailLinkSignInConfirmation", { S: d, R: e });
        this.Ca = a;
        this.D = b;
    }
    p(Ui, L);
    Ui.prototype.j = function () {
        this.Aa(this.Ca);
        this.v(this.Ca, this.D);
        this.Da();
        L.prototype.j.call(this);
    };
    Ui.prototype.h = function () {
        this.D = this.Ca = null;
        L.prototype.h.call(this);
    };
    Ui.prototype.Da = function () {
        this.A().focus();
        Ti(this.A(), (this.A().value || "").length);
    };
    v(Ui.prototype, { A: Mg, ab: Ng, Aa: Og, getEmail: Pg, pa: Qg, C: J, I: K, v: Rg });
    function Vi(a, b, c, d, e, f) {
        L.call(this, pi, { email: a, H: b }, f, "emailLinkSignInLinking", { S: d, R: e });
        this.s = c;
    }
    p(Vi, L);
    Vi.prototype.j = function () {
        this.v(this.s);
        this.C().focus();
        L.prototype.j.call(this);
    };
    Vi.prototype.h = function () {
        this.s = null;
        L.prototype.h.call(this);
    };
    v(Vi.prototype, { C: J, v: Rg });
    function Wi(a, b, c, d, e) {
        L.call(this, qi, { H: a }, e, "emailLinkSignInLinkingDifferentDevice", { S: c, R: d });
        this.ca = b;
    }
    p(Wi, L);
    Wi.prototype.j = function () {
        this.v(this.ca);
        this.C().focus();
        L.prototype.j.call(this);
    };
    Wi.prototype.h = function () {
        this.ca = null;
        L.prototype.h.call(this);
    };
    v(Wi.prototype, { C: J, v: Rg });
    function Xi(a, b, c, d, e, f) {
        L.call(this, ji, { email: a }, f, "emailLinkSignInSent", { S: d, R: e });
        this.df = b;
        this.D = c;
    }
    p(Xi, L);
    Xi.prototype.j = function () {
        var a = this;
        I(this, this.I(), function () {
            a.D();
        });
        I(this, this.u("firebaseui-id-trouble-getting-email-link"), function () {
            a.df();
        });
        this.I().focus();
        L.prototype.j.call(this);
    };
    Xi.prototype.h = function () {
        this.D = this.df = null;
        L.prototype.h.call(this);
    };
    v(Xi.prototype, { I: K });
    function Yi(a, b, c, d, e, f, g) {
        L.call(this, Gi, { Df: a, ff: b }, g, "emailMismatch", { S: e, R: f });
        this.ca = c;
        this.D = d;
    }
    p(Yi, L);
    Yi.prototype.j = function () {
        this.v(this.ca, this.D);
        this.C().focus();
        L.prototype.j.call(this);
    };
    Yi.prototype.h = function () {
        this.D = this.s = null;
        L.prototype.h.call(this);
    };
    v(Yi.prototype, { C: J, I: K, v: Rg });
    function Zi(a, b, c, d, e) {
        L.call(this, ki, void 0, e, "emailNotReceived", { S: c, R: d });
        this.oc = a;
        this.D = b;
    }
    p(Zi, L);
    Zi.prototype.j = function () {
        var a = this;
        I(this, this.I(), function () {
            a.D();
        });
        I(this, this.Jc(), function () {
            a.oc();
        });
        this.I().focus();
        L.prototype.j.call(this);
    };
    Zi.prototype.Jc = function () {
        return this.u("firebaseui-id-resend-email-link");
    };
    Zi.prototype.h = function () {
        this.D = this.oc = null;
        L.prototype.h.call(this);
    };
    v(Zi.prototype, { I: K });
    function $i(a, b, c, d, e, f) {
        L.call(this, ri, { email: a, H: b }, f, "federatedLinking", { S: d, R: e });
        this.s = c;
    }
    p($i, L);
    $i.prototype.j = function () {
        this.v(this.s);
        this.C().focus();
        L.prototype.j.call(this);
    };
    $i.prototype.h = function () {
        this.s = null;
        L.prototype.h.call(this);
    };
    v($i.prototype, { C: J, v: Rg });
    function N(a, b, c, d, e, f) {
        L.call(this, a, b, d, e || "notice", f);
        this.ca = c || null;
    }
    x(N, L);
    N.prototype.j = function () {
        this.ca && (this.v(this.ca), this.C().focus());
        N.$.j.call(this);
    };
    N.prototype.h = function () {
        this.ca = null;
        N.$.h.call(this);
    };
    v(N.prototype, { C: J, I: K, v: Rg });
    function aj(a, b, c, d, e) {
        N.call(this, fi, { email: a, l: !!b }, b, e, "passwordRecoveryEmailSent", { S: c, R: d });
    }
    x(aj, N);
    function bj(a, b) {
        N.call(this, yi, { l: !!a }, a, b, "emailVerificationSuccess");
    }
    x(bj, N);
    function cj(a, b) {
        N.call(this, zi, { l: !!a }, a, b, "emailVerificationFailure");
    }
    x(cj, N);
    function dj(a, b, c) {
        N.call(this, Ai, { email: a, l: !!b }, b, c, "verifyAndChangeEmailSuccess");
    }
    x(dj, N);
    function ej(a, b) {
        N.call(this, Bi, { l: !!a }, a, b, "verifyAndChangeEmailFailure");
    }
    x(ej, N);
    function fj(a, b) {
        N.call(this, Di, { l: !!a }, a, b, "revertSecondFactorAdditionFailure");
    }
    x(fj, N);
    function gj(a) {
        N.call(this, Ki, void 0, void 0, a, "signOut");
    }
    x(gj, N);
    function hj(a, b) {
        N.call(this, ui, { l: !!a }, a, b, "passwordResetSuccess");
    }
    x(hj, N);
    function ij(a, b) {
        N.call(this, vi, { l: !!a }, a, b, "passwordResetFailure");
    }
    x(ij, N);
    function jj(a, b) {
        N.call(this, xi, { l: !!a }, a, b, "emailChangeRevokeFailure");
    }
    x(jj, N);
    function kj(a, b, c) {
        N.call(this, Ei, { errorMessage: a, sd: !!b }, b, c, "recoverableError");
    }
    x(kj, N);
    function lj(a, b) {
        N.call(this, Fi, { errorMessage: a }, void 0, b, "unrecoverableError");
    }
    x(lj, N);
    function mj(a, b, c, d, e, f) {
        L.call(this, oi, { email: a }, f, "passwordLinking", { S: d, R: e });
        this.s = b;
        this.Xc = c;
    }
    p(mj, L);
    mj.prototype.j = function () {
        this.Rd();
        this.v(this.s, this.Xc);
        ai(this, this.Ka(), this.s);
        this.Ka().focus();
        L.prototype.j.call(this);
    };
    mj.prototype.h = function () {
        this.s = null;
        L.prototype.h.call(this);
    };
    mj.prototype.pa = function () {
        return E(this.u("firebaseui-id-email"));
    };
    v(mj.prototype, { Ka: yh, Jd: zh, Rd: Ah, zd: Bh, C: J, I: K, v: Rg });
    function nj(a, b, c, d, e, f) {
        L.call(this, ei, { email: c, hb: !!b }, f, "passwordRecovery", { S: d, R: e });
        this.s = a;
        this.D = b;
    }
    p(nj, L);
    nj.prototype.j = function () {
        this.Aa();
        this.v(this.s, this.D);
        E(this.A()) || this.A().focus();
        ai(this, this.A(), this.s);
        L.prototype.j.call(this);
    };
    nj.prototype.h = function () {
        this.D = this.s = null;
        L.prototype.h.call(this);
    };
    v(nj.prototype, { A: Mg, ab: Ng, Aa: Og, getEmail: Pg, pa: Qg, C: J, I: K, v: Rg });
    function oj(a, b, c) {
        L.call(this, ti, { email: a }, c, "passwordReset");
        this.s = b;
    }
    p(oj, L);
    oj.prototype.j = function () {
        this.Qd();
        this.v(this.s);
        ai(this, this.za(), this.s);
        this.za().focus();
        L.prototype.j.call(this);
    };
    oj.prototype.h = function () {
        this.s = null;
        L.prototype.h.call(this);
    };
    v(oj.prototype, { za: sh, Id: vh, Gg: th, Qd: wh, yd: xh, C: J, I: K, v: Rg });
    function pj(a, b, c, d, e, f, g) {
        L.call(this, ci, { email: c, ea: !!f }, g, "passwordSignIn", { S: d, R: e });
        this.s = a;
        this.Xc = b;
    }
    p(pj, L);
    pj.prototype.j = function () {
        this.Aa();
        this.Rd();
        this.v(this.s, this.Xc);
        $h(this, this.A(), this.Ka());
        ai(this, this.Ka(), this.s);
        E(this.A()) ? this.Ka().focus() : this.A().focus();
        L.prototype.j.call(this);
    };
    pj.prototype.h = function () {
        this.Xc = this.s = null;
        L.prototype.h.call(this);
    };
    v(pj.prototype, { A: Mg, ab: Ng, Aa: Og, getEmail: Pg, pa: Qg, Ka: yh, Jd: zh, Rd: Ah, zd: Bh, C: J, I: K, v: Rg });
    function qj(a, b, c, d, e, f, g, k, m) {
        L.call(this, di, { email: d, Yd: a, name: e, hb: !!c, ea: !!k }, m, "passwordSignUp", { S: f, R: g });
        this.s = b;
        this.D = c;
        this.Zd = a;
    }
    p(qj, L);
    qj.prototype.j = function () {
        this.Aa();
        this.Zd && this.Qg();
        this.Qd();
        this.v(this.s, this.D);
        this.Da();
        L.prototype.j.call(this);
    };
    qj.prototype.h = function () {
        this.D = this.s = null;
        L.prototype.h.call(this);
    };
    qj.prototype.Da = function () {
        this.Zd ? ($h(this, this.A(), this.ac()), $h(this, this.ac(), this.za())) : $h(this, this.A(), this.za());
        this.s && ai(this, this.za(), this.s);
        E(this.A()) ? (this.Zd && !E(this.ac()) ? this.ac().focus() : this.za().focus()) : this.A().focus();
    };
    v(qj.prototype, {
        A: Mg,
        ab: Ng,
        Aa: Og,
        getEmail: Pg,
        pa: Qg,
        ac: qh,
        ki: rh,
        Qg: function () {
            var a = qh.call(this),
                b = rh.call(this);
            og(this, a, function () {
                ug(b) && (H(a, !0), sg(b));
            });
        },
        ng: function () {
            var a = qh.call(this);
            var b = rh.call(this);
            var c = E(a);
            c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
            H(a, c);
            c ? (sg(b), (b = !0)) : (tg(b, "Enter your account name".toString()), (b = !1));
            return b ? nb(E(a)) : null;
        },
        za: sh,
        Id: vh,
        Gg: th,
        Qd: wh,
        yd: xh,
        C: J,
        I: K,
        v: Rg,
    });
    function rj(a, b, c, d, e, f, g, k, m) {
        L.call(this, Ji, { phoneNumber: e }, m, "phoneSignInFinish", { S: g, R: k });
        this.qh = f;
        this.wb = new Tf(1e3);
        this.ae = f;
        this.af = a;
        this.s = b;
        this.D = c;
        this.oc = d;
    }
    p(rj, L);
    rj.prototype.j = function () {
        var a = this;
        this.yf(this.qh);
        Me(this.wb, "tick", this.Nd, !1, this);
        this.wb.start();
        I(this, this.u("firebaseui-id-change-phone-number-link"), function () {
            a.af();
        });
        I(this, this.Jc(), function () {
            a.oc();
        });
        this.Rg(this.s);
        this.v(this.s, this.D);
        this.Da();
        L.prototype.j.call(this);
    };
    rj.prototype.h = function () {
        this.oc = this.D = this.s = this.af = null;
        this.wb.stop();
        Ue(this.wb, "tick", this.Nd);
        this.wb = null;
        L.prototype.h.call(this);
    };
    rj.prototype.Nd = function () {
        --this.ae;
        0 < this.ae ? this.yf(this.ae) : (this.wb.stop(), Ue(this.wb, "tick", this.Nd), this.Mg(), this.Ah());
    };
    rj.prototype.Da = function () {
        this.Kd().focus();
    };
    v(rj.prototype, {
        Kd: Ch,
        Hg: Dh,
        Rg: function (a) {
            var b = Ch.call(this),
                c = Dh.call(this);
            og(this, b, function () {
                ug(c) && (H(b, !0), sg(c));
            });
            a &&
                pg(this, b, function () {
                    a();
                });
        },
        og: function () {
            var a = nb(E(Ch.call(this)) || "");
            return /^\d{6}$/.test(a) ? a : null;
        },
        Kg: Qh,
        yf: function (a) {
            var b = Qh.call(this);
            a = (9 < a ? "0:" : "0:0") + a;
            a = "Resend code in " + D("string" === typeof a, "timeRemaining", a, "string");
            ne(b, a.toString());
        },
        Mg: function () {
            sg(this.Kg());
        },
        Jc: function () {
            return this.u("firebaseui-id-resend-link");
        },
        Ah: function () {
            tg(this.Jc());
        },
        C: J,
        I: K,
        v: Rg,
    });
    function sj(a, b, c, d, e, f, g, k, m, n) {
        L.call(this, Ii, { Ed: b, Oa: m || null, kb: !!c, ea: !!f }, n, "phoneSignInStart", { S: d, R: e });
        this.sg = k || null;
        this.zg = b;
        this.s = a;
        this.D = c || null;
        this.$g = g || null;
    }
    p(sj, L);
    sj.prototype.j = function () {
        this.Sg(this.$g, this.sg);
        this.v(this.s, this.D || void 0);
        this.Da();
        L.prototype.j.call(this);
    };
    sj.prototype.h = function () {
        this.D = this.s = null;
        L.prototype.h.call(this);
    };
    sj.prototype.Da = function () {
        this.zg || $h(this, this.mb(), this.C());
        ai(this, this.C(), this.s);
        this.mb().focus();
        Ti(this.mb(), (this.mb().value || "").length);
    };
    v(sj.prototype, {
        Fg: Bg,
        mb: Hh,
        Me: Jh,
        Sg: function (a, b, c) {
            var d = this,
                e = Hh.call(this),
                f = Ih.call(this),
                g = Jh.call(this),
                k = a || Sd,
                m = k.Sa;
            if (0 == m.length) throw Error("No available countries provided.");
            Kh.call(d, k, b);
            I(this, f, function () {
                Ph.call(d, k);
            });
            og(this, e, function () {
                ug(g) && (H(e, !0), sg(g));
                var n = nb(E(e) || ""),
                    l = Nd(this.sc),
                    r = k.search(n);
                n = Lh("1-US-0", m);
                r.length && r[0].a != l.a && ((l = r[0]), Mh.call(d, "1" == l.a && n ? "1-US-0" : l.b, k));
            });
            c &&
                pg(this, e, function () {
                    c();
                });
        },
        Ig: function (a) {
            var b = nb(E(Hh.call(this)) || "");
            a = a || Sd;
            var c = a.Sa,
                d = Sd.search(b);
            if (d.length && !Oa(c, d[0])) throw (re(Hh.call(this)), Hh.call(this).focus(), tg(Jh.call(this), "The country code provided is not supported.".toString()), Error("The country code provided is not supported."));
            c = Nd(this.sc);
            d.length && d[0].a != c.a && Mh.call(this, d[0].b, a);
            d.length && (b = b.substr(d[0].a.length + 1));
            return b ? new Eh(this.sc, b) : null;
        },
        hi: Ih,
        Jg: function () {
            return this.u("firebaseui-recaptcha-container");
        },
        Ld: function () {
            return this.u("firebaseui-id-recaptcha-error");
        },
        C: J,
        I: K,
        v: Rg,
    });
    function tj(a, b, c, d) {
        L.call(this, Mi, void 0, d, "providerMatchByEmail", { S: b, R: c });
        this.Ca = a;
    }
    p(tj, L);
    tj.prototype.j = function () {
        this.Aa(this.Ca);
        this.v(this.Ca);
        this.Da();
        L.prototype.j.call(this);
    };
    tj.prototype.h = function () {
        this.Ca = null;
        L.prototype.h.call(this);
    };
    tj.prototype.Da = function () {
        this.A().focus();
        Ti(this.A(), (this.A().value || "").length);
    };
    v(tj.prototype, { A: Mg, ab: Ng, Aa: Og, getEmail: Pg, pa: Qg, C: J, v: Rg });
    function uj(a, b, c, d, e) {
        L.call(this, Hi, { hf: b }, e, "providerSignIn", { S: c, R: d });
        this.bf = a;
    }
    p(uj, L);
    uj.prototype.j = function () {
        this.Pg(this.bf);
        L.prototype.j.call(this);
    };
    uj.prototype.h = function () {
        this.bf = null;
        L.prototype.h.call(this);
    };
    v(uj.prototype, {
        Pg: function (a) {
            function b(g) {
                a(g);
            }
            for (var c = this.Ic("firebaseui-id-idp-button"), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = Tg(e, "providerId");
                I(this, e, Aa(b, f));
            }
        },
    });
    function vj(a, b, c, d, e) {
        L.call(this, Ci, { factorId: a, phoneNumber: c || null, l: !!d }, e, "revertSecondFactorAdditionSuccess");
        this.pc = b;
        this.ca = d || null;
    }
    p(vj, L);
    vj.prototype.j = function () {
        var a = this;
        I(this, Si(this), function () {
            a.pc();
        });
        this.ca && (this.v(this.ca), this.C().focus());
        L.prototype.j.call(this);
    };
    vj.prototype.h = function () {
        this.pc = this.ca = null;
        L.prototype.h.call(this);
    };
    v(vj.prototype, { C: J, I: K, v: Rg });
    function wj(a, b, c, d, e) {
        L.call(this, Li, { tf: b }, e, "selectTenant", { S: c, R: d });
        this.cf = a;
    }
    p(wj, L);
    wj.prototype.j = function () {
        xj(this, this.cf);
        L.prototype.j.call(this);
    };
    wj.prototype.h = function () {
        this.cf = null;
        L.prototype.h.call(this);
    };
    function xj(a, b) {
        function c(k) {
            b(k);
        }
        for (var d = a.Ic("firebaseui-id-tenant-selection-button"), e = 0; e < d.length; e++) {
            var f = d[e],
                g = Tg(f, "tenantId");
            I(a, f, Aa(c, g));
        }
    }
    function yj(a, b, c, d, e, f, g) {
        L.call(this, bi, { email: c, kb: !!b, ea: !!f }, g, "signIn", { S: d, R: e });
        this.Ca = a;
        this.D = b;
    }
    p(yj, L);
    yj.prototype.j = function () {
        this.Aa(this.Ca);
        this.v(this.Ca, this.D || void 0);
        this.Da();
        L.prototype.j.call(this);
    };
    yj.prototype.h = function () {
        this.D = this.Ca = null;
        L.prototype.h.call(this);
    };
    yj.prototype.Da = function () {
        this.A().focus();
        Ti(this.A(), (this.A().value || "").length);
    };
    v(yj.prototype, { A: Mg, ab: Ng, Aa: Og, getEmail: Pg, pa: Qg, C: J, I: K, v: Rg });
    function zj(a) {
        L.call(this, hi, void 0, a, "spinner");
    }
    p(zj, L);
    function Aj(a, b, c, d, e, f) {
        L.call(this, si, { email: a }, f, "unsupportedProvider", { S: d, R: e });
        this.s = b;
        this.D = c;
    }
    p(Aj, L);
    Aj.prototype.j = function () {
        this.v(this.s, this.D);
        this.C().focus();
        L.prototype.j.call(this);
    };
    Aj.prototype.h = function () {
        this.D = this.s = null;
        L.prototype.h.call(this);
    };
    v(Aj.prototype, { C: J, I: K, v: Rg });
    function Bj(a, b, c, d) {
        this.Yb = a;
        this.Ge = b || null;
        this.jh = c || null;
        this.jf = d || null;
    }
    Bj.prototype.getEmail = function () {
        return this.Yb;
    };
    Bj.prototype.bc = function () {
        return this.jf || null;
    };
    Bj.prototype.Va = function () {
        return { email: this.Yb, displayName: this.Ge, photoUrl: this.jh, providerId: this.jf };
    };
    function Cj(a) {
        return a.email ? new Bj(a.email, a.displayName, a.photoUrl, a.providerId) : null;
    }
    var Dj = null;
    function Ej(a) {
        return !(!a || -32e3 != a.code || "Service unavailable" != a.message);
    }
    function Fj(a, b, c, d) {
        Dj ||
            ((a = {
                callbacks: {
                    empty: a,
                    select: function (e, f) {
                        e && e.account && b ? b(Cj(e.account)) : c && c(!Ej(f));
                    },
                    store: a,
                    update: a,
                },
                language: "en",
                providers: void 0,
                ui: d,
            }),
            "undefined" != typeof accountchooser && accountchooser.Api && accountchooser.Api.init ? (Dj = accountchooser.Api.init(a)) : ((Dj = new Gj(a)), Hj()));
    }
    function Ij(a, b, c) {
        function d() {
            var e = Gc(window.location.href, c).toString();
            Dj.select(
                La(b || [], function (f) {
                    return f.Va();
                }),
                { clientCallbackUrl: e }
            );
        }
        b && b.length
            ? d()
            : Dj.checkEmpty(function (e, f) {
                  e || f ? a(!Ej(f)) : d();
              });
    }
    function Gj(a) {
        this.g = a;
        this.g.callbacks = this.g.callbacks || {};
    }
    function Hj() {
        var a = Dj;
        "function" === typeof a.g.callbacks.empty && a.g.callbacks.empty();
    }
    h = Gj.prototype;
    h.store = function () {
        "function" === typeof this.g.callbacks.store && this.g.callbacks.store(void 0, Jj);
    };
    h.select = function () {
        "function" === typeof this.g.callbacks.select && this.g.callbacks.select(void 0, Jj);
    };
    h.update = function () {
        "function" === typeof this.g.callbacks.update && this.g.callbacks.update(void 0, Jj);
    };
    h.checkDisabled = function (a) {
        a(!0);
    };
    h.checkEmpty = function (a) {
        a(void 0, Jj);
    };
    h.checkAccountExist = function (a, b) {
        b(void 0, Jj);
    };
    h.checkShouldUpdate = function (a, b) {
        b(void 0, Jj);
    };
    var Jj = { code: -32e3, message: "Service unavailable", data: "Service is unavailable." };
    function Kj(a) {
        this.W = Fc(a);
    }
    function Lj(a, b) {
        b ? Ec(a.W, O.qd, b) : a.W.removeParameter(O.qd);
    }
    Kj.prototype.ee = function (a) {
        a ? Ec(this.W, O.rd, a) : this.W.removeParameter(O.rd);
    };
    Kj.prototype.ob = function () {
        return this.W.V.get(O.rd) || null;
    };
    function Mj(a, b) {
        null !== b ? Ec(a.W, O.od, b ? "1" : "0") : a.W.removeParameter(O.od);
    }
    function Nj(a) {
        return a.W.V.get(O.nd) || null;
    }
    function Oj(a, b) {
        b ? Ec(a.W, O.PROVIDER_ID, b) : a.W.removeParameter(O.PROVIDER_ID);
    }
    Kj.prototype.bc = function () {
        return this.W.V.get(O.PROVIDER_ID) || null;
    };
    Kj.prototype.toString = function () {
        return this.W.toString();
    };
    var O = { nd: "ui_auid", Vh: "apiKey", od: "ui_sd", Rf: "mode", pe: "oobCode", PROVIDER_ID: "ui_pid", qd: "ui_sid", rd: "tenantId" };
    function Pj() {
        this.Ma = {};
    }
    Pj.prototype.define = function (a, b) {
        if (a.toLowerCase() in this.Ma) throw Error("Configuration " + a + " has already been defined.");
        this.Ma[a.toLowerCase()] = b;
    };
    Pj.prototype.update = function (a, b) {
        if (!(a.toLowerCase() in this.Ma)) throw Error("Configuration " + a + " is not defined.");
        this.Ma[a.toLowerCase()] = b;
    };
    Pj.prototype.get = function (a) {
        if (!(a.toLowerCase() in this.Ma)) throw Error("Configuration " + a + " is not defined.");
        return this.Ma[a.toLowerCase()];
    };
    function Qj(a, b) {
        a = a.get(b);
        if (!a) throw Error("Configuration " + b + " is required.");
        return a;
    }
    function Rj() {
        this.fa = ("undefined" == typeof document ? null : document) || { cookie: "" };
    }
    h = Rj.prototype;
    h.isEnabled = function () {
        return navigator.cookieEnabled;
    };
    h.set = function (a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.ni;
            d = c.sh || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var k = c.Ye;
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === k && (k = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        k = 0 > k ? "" : 0 == k ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Ba() + 1e3 * k).toUTCString();
        this.fa.cookie = a + "=" + b + c + g + k + d + (null != e ? ";samesite=" + e : "");
    };
    h.get = function (a, b) {
        for (var c = a + "=", d = (this.fa.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = nb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return "";
        }
        return b;
    };
    h.remove = function (a, b, c) {
        var d = this.Za(a);
        this.set(a, "", { Ye: 0, path: b, domain: c });
        return d;
    };
    h.Ja = function () {
        return Sj(this).keys;
    };
    h.sa = function () {
        return Sj(this).values;
    };
    h.ic = function () {
        return !this.fa.cookie;
    };
    h.Za = function (a) {
        return void 0 !== this.get(a);
    };
    h.clear = function () {
        for (var a = Sj(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
    };
    function Sj(a) {
        a = (a.fa.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) (e = nb(a[f])), (d = e.indexOf("=")), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return { keys: b, values: c };
    }
    var Tj = new Rj();
    function Uj() {}
    function Vj(a, b, c, d) {
        this.ah = "undefined" !== typeof a && null !== a ? a : -1;
        this.na = b || null;
        this.qa = c || null;
        this.th = !!d;
    }
    p(Vj, Uj);
    Vj.prototype.set = function (a, b) {
        Tj.set(a, b, { Ye: this.ah, path: this.na, domain: this.qa, sh: this.th });
    };
    Vj.prototype.get = function (a) {
        return Tj.get(a) || null;
    };
    Vj.prototype.remove = function (a) {
        Tj.remove(a, this.na, this.qa);
    };
    function Wj(a) {
        this.jc = a;
        this.ia = this.jc.length / 4;
        this.tb = this.ia + 6;
        this.L = [[], [], [], []];
        this.Ob = [[], [], [], []];
        this.ha = Array(Xj * (this.tb + 1));
        for (a = 0; a < this.ia; a++) this.ha[a] = [this.jc[4 * a], this.jc[4 * a + 1], this.jc[4 * a + 2], this.jc[4 * a + 3]];
        var b = Array(4);
        for (a = this.ia; a < Xj * (this.tb + 1); a++) {
            b[0] = this.ha[a - 1][0];
            b[1] = this.ha[a - 1][1];
            b[2] = this.ha[a - 1][2];
            b[3] = this.ha[a - 1][3];
            if (0 == a % this.ia) {
                var c = b,
                    d = c[0];
                c[0] = c[1];
                c[1] = c[2];
                c[2] = c[3];
                c[3] = d;
                Yj(b);
                b[0] ^= Zj[a / this.ia][0];
                b[1] ^= Zj[a / this.ia][1];
                b[2] ^= Zj[a / this.ia][2];
                b[3] ^= Zj[a / this.ia][3];
            } else 6 < this.ia && 4 == a % this.ia && Yj(b);
            this.ha[a] = Array(4);
            this.ha[a][0] = this.ha[a - this.ia][0] ^ b[0];
            this.ha[a][1] = this.ha[a - this.ia][1] ^ b[1];
            this.ha[a][2] = this.ha[a - this.ia][2] ^ b[2];
            this.ha[a][3] = this.ha[a - this.ia][3] ^ b[3];
        }
    }
    Wj.prototype.Hf = 16;
    var Xj = Wj.prototype.Hf / 4;
    Wj.prototype.encrypt = function (a) {
        ak(this, a);
        bk(this, 0);
        for (a = 1; a < this.tb; ++a) {
            ck(this, dk);
            ek(this);
            for (var b = this.L, c = this.Ob[0], d = 0; 4 > d; d++)
                (c[0] = b[0][d]),
                    (c[1] = b[1][d]),
                    (c[2] = b[2][d]),
                    (c[3] = b[3][d]),
                    (b[0][d] = fk[c[0]] ^ gk[c[1]] ^ c[2] ^ c[3]),
                    (b[1][d] = c[0] ^ fk[c[1]] ^ gk[c[2]] ^ c[3]),
                    (b[2][d] = c[0] ^ c[1] ^ fk[c[2]] ^ gk[c[3]]),
                    (b[3][d] = gk[c[0]] ^ c[1] ^ c[2] ^ fk[c[3]]);
            bk(this, a);
        }
        ck(this, dk);
        ek(this);
        bk(this, this.tb);
        return hk(this);
    };
    Wj.prototype.decrypt = function (a) {
        ak(this, a);
        bk(this, this.tb);
        for (a = 1; a < this.tb; ++a) {
            ik(this);
            ck(this, jk);
            bk(this, this.tb - a);
            for (var b = this.L, c = this.Ob[0], d = 0; 4 > d; d++)
                (c[0] = b[0][d]),
                    (c[1] = b[1][d]),
                    (c[2] = b[2][d]),
                    (c[3] = b[3][d]),
                    (b[0][d] = kk[c[0]] ^ lk[c[1]] ^ mk[c[2]] ^ nk[c[3]]),
                    (b[1][d] = nk[c[0]] ^ kk[c[1]] ^ lk[c[2]] ^ mk[c[3]]),
                    (b[2][d] = mk[c[0]] ^ nk[c[1]] ^ kk[c[2]] ^ lk[c[3]]),
                    (b[3][d] = lk[c[0]] ^ mk[c[1]] ^ nk[c[2]] ^ kk[c[3]]);
        }
        ik(this);
        ck(this, jk);
        bk(this, 0);
        return hk(this);
    };
    function ak(a, b) {
        for (var c, d = 0; d < Xj; d++) for (var e = 0; 4 > e; e++) (c = 4 * e + d), (c = b[c]), (a.L[d][e] = c);
    }
    function hk(a) {
        for (var b = [], c = 0; c < Xj; c++) for (var d = 0; 4 > d; d++) b[4 * d + c] = a.L[c][d];
        return b;
    }
    function bk(a, b) {
        for (var c = 0; 4 > c; c++) for (var d = 0; 4 > d; d++) a.L[c][d] ^= a.ha[4 * b + d][c];
    }
    function ck(a, b) {
        for (var c = 0; 4 > c; c++) for (var d = 0; 4 > d; d++) a.L[c][d] = b[a.L[c][d]];
    }
    function ek(a) {
        for (var b = 1; 4 > b; b++) for (var c = 0; 4 > c; c++) a.Ob[b][c] = a.L[b][c];
        for (b = 1; 4 > b; b++) for (c = 0; 4 > c; c++) a.L[b][c] = a.Ob[b][(c + b) % Xj];
    }
    function ik(a) {
        for (var b = 1; 4 > b; b++) for (var c = 0; 4 > c; c++) a.Ob[b][(c + b) % Xj] = a.L[b][c];
        for (b = 1; 4 > b; b++) for (c = 0; 4 > c; c++) a.L[b][c] = a.Ob[b][c];
    }
    function Yj(a) {
        a[0] = dk[a[0]];
        a[1] = dk[a[1]];
        a[2] = dk[a[2]];
        a[3] = dk[a[3]];
    }
    var dk = [
            99,
            124,
            119,
            123,
            242,
            107,
            111,
            197,
            48,
            1,
            103,
            43,
            254,
            215,
            171,
            118,
            202,
            130,
            201,
            125,
            250,
            89,
            71,
            240,
            173,
            212,
            162,
            175,
            156,
            164,
            114,
            192,
            183,
            253,
            147,
            38,
            54,
            63,
            247,
            204,
            52,
            165,
            229,
            241,
            113,
            216,
            49,
            21,
            4,
            199,
            35,
            195,
            24,
            150,
            5,
            154,
            7,
            18,
            128,
            226,
            235,
            39,
            178,
            117,
            9,
            131,
            44,
            26,
            27,
            110,
            90,
            160,
            82,
            59,
            214,
            179,
            41,
            227,
            47,
            132,
            83,
            209,
            0,
            237,
            32,
            252,
            177,
            91,
            106,
            203,
            190,
            57,
            74,
            76,
            88,
            207,
            208,
            239,
            170,
            251,
            67,
            77,
            51,
            133,
            69,
            249,
            2,
            127,
            80,
            60,
            159,
            168,
            81,
            163,
            64,
            143,
            146,
            157,
            56,
            245,
            188,
            182,
            218,
            33,
            16,
            255,
            243,
            210,
            205,
            12,
            19,
            236,
            95,
            151,
            68,
            23,
            196,
            167,
            126,
            61,
            100,
            93,
            25,
            115,
            96,
            129,
            79,
            220,
            34,
            42,
            144,
            136,
            70,
            238,
            184,
            20,
            222,
            94,
            11,
            219,
            224,
            50,
            58,
            10,
            73,
            6,
            36,
            92,
            194,
            211,
            172,
            98,
            145,
            149,
            228,
            121,
            231,
            200,
            55,
            109,
            141,
            213,
            78,
            169,
            108,
            86,
            244,
            234,
            101,
            122,
            174,
            8,
            186,
            120,
            37,
            46,
            28,
            166,
            180,
            198,
            232,
            221,
            116,
            31,
            75,
            189,
            139,
            138,
            112,
            62,
            181,
            102,
            72,
            3,
            246,
            14,
            97,
            53,
            87,
            185,
            134,
            193,
            29,
            158,
            225,
            248,
            152,
            17,
            105,
            217,
            142,
            148,
            155,
            30,
            135,
            233,
            206,
            85,
            40,
            223,
            140,
            161,
            137,
            13,
            191,
            230,
            66,
            104,
            65,
            153,
            45,
            15,
            176,
            84,
            187,
            22,
        ],
        jk = [
            82,
            9,
            106,
            213,
            48,
            54,
            165,
            56,
            191,
            64,
            163,
            158,
            129,
            243,
            215,
            251,
            124,
            227,
            57,
            130,
            155,
            47,
            255,
            135,
            52,
            142,
            67,
            68,
            196,
            222,
            233,
            203,
            84,
            123,
            148,
            50,
            166,
            194,
            35,
            61,
            238,
            76,
            149,
            11,
            66,
            250,
            195,
            78,
            8,
            46,
            161,
            102,
            40,
            217,
            36,
            178,
            118,
            91,
            162,
            73,
            109,
            139,
            209,
            37,
            114,
            248,
            246,
            100,
            134,
            104,
            152,
            22,
            212,
            164,
            92,
            204,
            93,
            101,
            182,
            146,
            108,
            112,
            72,
            80,
            253,
            237,
            185,
            218,
            94,
            21,
            70,
            87,
            167,
            141,
            157,
            132,
            144,
            216,
            171,
            0,
            140,
            188,
            211,
            10,
            247,
            228,
            88,
            5,
            184,
            179,
            69,
            6,
            208,
            44,
            30,
            143,
            202,
            63,
            15,
            2,
            193,
            175,
            189,
            3,
            1,
            19,
            138,
            107,
            58,
            145,
            17,
            65,
            79,
            103,
            220,
            234,
            151,
            242,
            207,
            206,
            240,
            180,
            230,
            115,
            150,
            172,
            116,
            34,
            231,
            173,
            53,
            133,
            226,
            249,
            55,
            232,
            28,
            117,
            223,
            110,
            71,
            241,
            26,
            113,
            29,
            41,
            197,
            137,
            111,
            183,
            98,
            14,
            170,
            24,
            190,
            27,
            252,
            86,
            62,
            75,
            198,
            210,
            121,
            32,
            154,
            219,
            192,
            254,
            120,
            205,
            90,
            244,
            31,
            221,
            168,
            51,
            136,
            7,
            199,
            49,
            177,
            18,
            16,
            89,
            39,
            128,
            236,
            95,
            96,
            81,
            127,
            169,
            25,
            181,
            74,
            13,
            45,
            229,
            122,
            159,
            147,
            201,
            156,
            239,
            160,
            224,
            59,
            77,
            174,
            42,
            245,
            176,
            200,
            235,
            187,
            60,
            131,
            83,
            153,
            97,
            23,
            43,
            4,
            126,
            186,
            119,
            214,
            38,
            225,
            105,
            20,
            99,
            85,
            33,
            12,
            125,
        ],
        Zj = [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [2, 0, 0, 0],
            [4, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0],
            [32, 0, 0, 0],
            [64, 0, 0, 0],
            [128, 0, 0, 0],
            [27, 0, 0, 0],
            [54, 0, 0, 0],
        ],
        fk = [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            16,
            18,
            20,
            22,
            24,
            26,
            28,
            30,
            32,
            34,
            36,
            38,
            40,
            42,
            44,
            46,
            48,
            50,
            52,
            54,
            56,
            58,
            60,
            62,
            64,
            66,
            68,
            70,
            72,
            74,
            76,
            78,
            80,
            82,
            84,
            86,
            88,
            90,
            92,
            94,
            96,
            98,
            100,
            102,
            104,
            106,
            108,
            110,
            112,
            114,
            116,
            118,
            120,
            122,
            124,
            126,
            128,
            130,
            132,
            134,
            136,
            138,
            140,
            142,
            144,
            146,
            148,
            150,
            152,
            154,
            156,
            158,
            160,
            162,
            164,
            166,
            168,
            170,
            172,
            174,
            176,
            178,
            180,
            182,
            184,
            186,
            188,
            190,
            192,
            194,
            196,
            198,
            200,
            202,
            204,
            206,
            208,
            210,
            212,
            214,
            216,
            218,
            220,
            222,
            224,
            226,
            228,
            230,
            232,
            234,
            236,
            238,
            240,
            242,
            244,
            246,
            248,
            250,
            252,
            254,
            27,
            25,
            31,
            29,
            19,
            17,
            23,
            21,
            11,
            9,
            15,
            13,
            3,
            1,
            7,
            5,
            59,
            57,
            63,
            61,
            51,
            49,
            55,
            53,
            43,
            41,
            47,
            45,
            35,
            33,
            39,
            37,
            91,
            89,
            95,
            93,
            83,
            81,
            87,
            85,
            75,
            73,
            79,
            77,
            67,
            65,
            71,
            69,
            123,
            121,
            127,
            125,
            115,
            113,
            119,
            117,
            107,
            105,
            111,
            109,
            99,
            97,
            103,
            101,
            155,
            153,
            159,
            157,
            147,
            145,
            151,
            149,
            139,
            137,
            143,
            141,
            131,
            129,
            135,
            133,
            187,
            185,
            191,
            189,
            179,
            177,
            183,
            181,
            171,
            169,
            175,
            173,
            163,
            161,
            167,
            165,
            219,
            217,
            223,
            221,
            211,
            209,
            215,
            213,
            203,
            201,
            207,
            205,
            195,
            193,
            199,
            197,
            251,
            249,
            255,
            253,
            243,
            241,
            247,
            245,
            235,
            233,
            239,
            237,
            227,
            225,
            231,
            229,
        ],
        gk = [
            0,
            3,
            6,
            5,
            12,
            15,
            10,
            9,
            24,
            27,
            30,
            29,
            20,
            23,
            18,
            17,
            48,
            51,
            54,
            53,
            60,
            63,
            58,
            57,
            40,
            43,
            46,
            45,
            36,
            39,
            34,
            33,
            96,
            99,
            102,
            101,
            108,
            111,
            106,
            105,
            120,
            123,
            126,
            125,
            116,
            119,
            114,
            113,
            80,
            83,
            86,
            85,
            92,
            95,
            90,
            89,
            72,
            75,
            78,
            77,
            68,
            71,
            66,
            65,
            192,
            195,
            198,
            197,
            204,
            207,
            202,
            201,
            216,
            219,
            222,
            221,
            212,
            215,
            210,
            209,
            240,
            243,
            246,
            245,
            252,
            255,
            250,
            249,
            232,
            235,
            238,
            237,
            228,
            231,
            226,
            225,
            160,
            163,
            166,
            165,
            172,
            175,
            170,
            169,
            184,
            187,
            190,
            189,
            180,
            183,
            178,
            177,
            144,
            147,
            150,
            149,
            156,
            159,
            154,
            153,
            136,
            139,
            142,
            141,
            132,
            135,
            130,
            129,
            155,
            152,
            157,
            158,
            151,
            148,
            145,
            146,
            131,
            128,
            133,
            134,
            143,
            140,
            137,
            138,
            171,
            168,
            173,
            174,
            167,
            164,
            161,
            162,
            179,
            176,
            181,
            182,
            191,
            188,
            185,
            186,
            251,
            248,
            253,
            254,
            247,
            244,
            241,
            242,
            227,
            224,
            229,
            230,
            239,
            236,
            233,
            234,
            203,
            200,
            205,
            206,
            199,
            196,
            193,
            194,
            211,
            208,
            213,
            214,
            223,
            220,
            217,
            218,
            91,
            88,
            93,
            94,
            87,
            84,
            81,
            82,
            67,
            64,
            69,
            70,
            79,
            76,
            73,
            74,
            107,
            104,
            109,
            110,
            103,
            100,
            97,
            98,
            115,
            112,
            117,
            118,
            127,
            124,
            121,
            122,
            59,
            56,
            61,
            62,
            55,
            52,
            49,
            50,
            35,
            32,
            37,
            38,
            47,
            44,
            41,
            42,
            11,
            8,
            13,
            14,
            7,
            4,
            1,
            2,
            19,
            16,
            21,
            22,
            31,
            28,
            25,
            26,
        ],
        nk = [
            0,
            9,
            18,
            27,
            36,
            45,
            54,
            63,
            72,
            65,
            90,
            83,
            108,
            101,
            126,
            119,
            144,
            153,
            130,
            139,
            180,
            189,
            166,
            175,
            216,
            209,
            202,
            195,
            252,
            245,
            238,
            231,
            59,
            50,
            41,
            32,
            31,
            22,
            13,
            4,
            115,
            122,
            97,
            104,
            87,
            94,
            69,
            76,
            171,
            162,
            185,
            176,
            143,
            134,
            157,
            148,
            227,
            234,
            241,
            248,
            199,
            206,
            213,
            220,
            118,
            127,
            100,
            109,
            82,
            91,
            64,
            73,
            62,
            55,
            44,
            37,
            26,
            19,
            8,
            1,
            230,
            239,
            244,
            253,
            194,
            203,
            208,
            217,
            174,
            167,
            188,
            181,
            138,
            131,
            152,
            145,
            77,
            68,
            95,
            86,
            105,
            96,
            123,
            114,
            5,
            12,
            23,
            30,
            33,
            40,
            51,
            58,
            221,
            212,
            207,
            198,
            249,
            240,
            235,
            226,
            149,
            156,
            135,
            142,
            177,
            184,
            163,
            170,
            236,
            229,
            254,
            247,
            200,
            193,
            218,
            211,
            164,
            173,
            182,
            191,
            128,
            137,
            146,
            155,
            124,
            117,
            110,
            103,
            88,
            81,
            74,
            67,
            52,
            61,
            38,
            47,
            16,
            25,
            2,
            11,
            215,
            222,
            197,
            204,
            243,
            250,
            225,
            232,
            159,
            150,
            141,
            132,
            187,
            178,
            169,
            160,
            71,
            78,
            85,
            92,
            99,
            106,
            113,
            120,
            15,
            6,
            29,
            20,
            43,
            34,
            57,
            48,
            154,
            147,
            136,
            129,
            190,
            183,
            172,
            165,
            210,
            219,
            192,
            201,
            246,
            255,
            228,
            237,
            10,
            3,
            24,
            17,
            46,
            39,
            60,
            53,
            66,
            75,
            80,
            89,
            102,
            111,
            116,
            125,
            161,
            168,
            179,
            186,
            133,
            140,
            151,
            158,
            233,
            224,
            251,
            242,
            205,
            196,
            223,
            214,
            49,
            56,
            35,
            42,
            21,
            28,
            7,
            14,
            121,
            112,
            107,
            98,
            93,
            84,
            79,
            70,
        ],
        lk = [
            0,
            11,
            22,
            29,
            44,
            39,
            58,
            49,
            88,
            83,
            78,
            69,
            116,
            127,
            98,
            105,
            176,
            187,
            166,
            173,
            156,
            151,
            138,
            129,
            232,
            227,
            254,
            245,
            196,
            207,
            210,
            217,
            123,
            112,
            109,
            102,
            87,
            92,
            65,
            74,
            35,
            40,
            53,
            62,
            15,
            4,
            25,
            18,
            203,
            192,
            221,
            214,
            231,
            236,
            241,
            250,
            147,
            152,
            133,
            142,
            191,
            180,
            169,
            162,
            246,
            253,
            224,
            235,
            218,
            209,
            204,
            199,
            174,
            165,
            184,
            179,
            130,
            137,
            148,
            159,
            70,
            77,
            80,
            91,
            106,
            97,
            124,
            119,
            30,
            21,
            8,
            3,
            50,
            57,
            36,
            47,
            141,
            134,
            155,
            144,
            161,
            170,
            183,
            188,
            213,
            222,
            195,
            200,
            249,
            242,
            239,
            228,
            61,
            54,
            43,
            32,
            17,
            26,
            7,
            12,
            101,
            110,
            115,
            120,
            73,
            66,
            95,
            84,
            247,
            252,
            225,
            234,
            219,
            208,
            205,
            198,
            175,
            164,
            185,
            178,
            131,
            136,
            149,
            158,
            71,
            76,
            81,
            90,
            107,
            96,
            125,
            118,
            31,
            20,
            9,
            2,
            51,
            56,
            37,
            46,
            140,
            135,
            154,
            145,
            160,
            171,
            182,
            189,
            212,
            223,
            194,
            201,
            248,
            243,
            238,
            229,
            60,
            55,
            42,
            33,
            16,
            27,
            6,
            13,
            100,
            111,
            114,
            121,
            72,
            67,
            94,
            85,
            1,
            10,
            23,
            28,
            45,
            38,
            59,
            48,
            89,
            82,
            79,
            68,
            117,
            126,
            99,
            104,
            177,
            186,
            167,
            172,
            157,
            150,
            139,
            128,
            233,
            226,
            255,
            244,
            197,
            206,
            211,
            216,
            122,
            113,
            108,
            103,
            86,
            93,
            64,
            75,
            34,
            41,
            52,
            63,
            14,
            5,
            24,
            19,
            202,
            193,
            220,
            215,
            230,
            237,
            240,
            251,
            146,
            153,
            132,
            143,
            190,
            181,
            168,
            163,
        ],
        mk = [
            0,
            13,
            26,
            23,
            52,
            57,
            46,
            35,
            104,
            101,
            114,
            127,
            92,
            81,
            70,
            75,
            208,
            221,
            202,
            199,
            228,
            233,
            254,
            243,
            184,
            181,
            162,
            175,
            140,
            129,
            150,
            155,
            187,
            182,
            161,
            172,
            143,
            130,
            149,
            152,
            211,
            222,
            201,
            196,
            231,
            234,
            253,
            240,
            107,
            102,
            113,
            124,
            95,
            82,
            69,
            72,
            3,
            14,
            25,
            20,
            55,
            58,
            45,
            32,
            109,
            96,
            119,
            122,
            89,
            84,
            67,
            78,
            5,
            8,
            31,
            18,
            49,
            60,
            43,
            38,
            189,
            176,
            167,
            170,
            137,
            132,
            147,
            158,
            213,
            216,
            207,
            194,
            225,
            236,
            251,
            246,
            214,
            219,
            204,
            193,
            226,
            239,
            248,
            245,
            190,
            179,
            164,
            169,
            138,
            135,
            144,
            157,
            6,
            11,
            28,
            17,
            50,
            63,
            40,
            37,
            110,
            99,
            116,
            121,
            90,
            87,
            64,
            77,
            218,
            215,
            192,
            205,
            238,
            227,
            244,
            249,
            178,
            191,
            168,
            165,
            134,
            139,
            156,
            145,
            10,
            7,
            16,
            29,
            62,
            51,
            36,
            41,
            98,
            111,
            120,
            117,
            86,
            91,
            76,
            65,
            97,
            108,
            123,
            118,
            85,
            88,
            79,
            66,
            9,
            4,
            19,
            30,
            61,
            48,
            39,
            42,
            177,
            188,
            171,
            166,
            133,
            136,
            159,
            146,
            217,
            212,
            195,
            206,
            237,
            224,
            247,
            250,
            183,
            186,
            173,
            160,
            131,
            142,
            153,
            148,
            223,
            210,
            197,
            200,
            235,
            230,
            241,
            252,
            103,
            106,
            125,
            112,
            83,
            94,
            73,
            68,
            15,
            2,
            21,
            24,
            59,
            54,
            33,
            44,
            12,
            1,
            22,
            27,
            56,
            53,
            34,
            47,
            100,
            105,
            126,
            115,
            80,
            93,
            74,
            71,
            220,
            209,
            198,
            203,
            232,
            229,
            242,
            255,
            180,
            185,
            174,
            163,
            128,
            141,
            154,
            151,
        ],
        kk = [
            0,
            14,
            28,
            18,
            56,
            54,
            36,
            42,
            112,
            126,
            108,
            98,
            72,
            70,
            84,
            90,
            224,
            238,
            252,
            242,
            216,
            214,
            196,
            202,
            144,
            158,
            140,
            130,
            168,
            166,
            180,
            186,
            219,
            213,
            199,
            201,
            227,
            237,
            255,
            241,
            171,
            165,
            183,
            185,
            147,
            157,
            143,
            129,
            59,
            53,
            39,
            41,
            3,
            13,
            31,
            17,
            75,
            69,
            87,
            89,
            115,
            125,
            111,
            97,
            173,
            163,
            177,
            191,
            149,
            155,
            137,
            135,
            221,
            211,
            193,
            207,
            229,
            235,
            249,
            247,
            77,
            67,
            81,
            95,
            117,
            123,
            105,
            103,
            61,
            51,
            33,
            47,
            5,
            11,
            25,
            23,
            118,
            120,
            106,
            100,
            78,
            64,
            82,
            92,
            6,
            8,
            26,
            20,
            62,
            48,
            34,
            44,
            150,
            152,
            138,
            132,
            174,
            160,
            178,
            188,
            230,
            232,
            250,
            244,
            222,
            208,
            194,
            204,
            65,
            79,
            93,
            83,
            121,
            119,
            101,
            107,
            49,
            63,
            45,
            35,
            9,
            7,
            21,
            27,
            161,
            175,
            189,
            179,
            153,
            151,
            133,
            139,
            209,
            223,
            205,
            195,
            233,
            231,
            245,
            251,
            154,
            148,
            134,
            136,
            162,
            172,
            190,
            176,
            234,
            228,
            246,
            248,
            210,
            220,
            206,
            192,
            122,
            116,
            102,
            104,
            66,
            76,
            94,
            80,
            10,
            4,
            22,
            24,
            50,
            60,
            46,
            32,
            236,
            226,
            240,
            254,
            212,
            218,
            200,
            198,
            156,
            146,
            128,
            142,
            164,
            170,
            184,
            182,
            12,
            2,
            16,
            30,
            52,
            58,
            40,
            38,
            124,
            114,
            96,
            110,
            68,
            74,
            88,
            86,
            55,
            57,
            43,
            37,
            15,
            1,
            19,
            29,
            71,
            73,
            91,
            85,
            127,
            113,
            99,
            109,
            215,
            217,
            203,
            197,
            239,
            225,
            243,
            253,
            167,
            169,
            187,
            181,
            159,
            145,
            131,
            141,
        ];
    function ok(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && ((b[c++] = e & 255), (e >>= 8));
            b[c++] = e;
        }
        return b;
    }
    function pk(a) {
        return La(a, function (b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b;
        }).join("");
    }
    function qk(a, b) {
        a = new Wj(rk(a));
        b = ok(b);
        for (var c = Va(b, 0, 16), d = "", e; c.length; ) {
            e = 16 - c.length;
            for (var f = 0; f < e; f++) c.push(0);
            d += pk(a.encrypt(c));
            c = Va(b, 0, 16);
        }
        return d;
    }
    function sk(a, b) {
        a = new Wj(rk(a));
        for (var c = [], d = 0; d < b.length; d += 2) c.push(parseInt(b.substring(d, d + 2), 16));
        d = Va(c, 0, 16);
        for (b = ""; d.length; ) {
            d = a.decrypt(d);
            if (8192 >= d.length) d = String.fromCharCode.apply(null, d);
            else {
                for (var e = "", f = 0; f < d.length; f += 8192) e += String.fromCharCode.apply(null, Wa(d, f, f + 8192));
                d = e;
            }
            b += d;
            d = Va(c, 0, 16);
        }
        return b.replace(/(\x00)+$/, "");
    }
    function rk(a) {
        a = ok(a.substring(0, 32));
        for (var b = 32 - a.length, c = 0; c < b; c++) a.push(0);
        return a;
    }
    function tk() {
        try {
            return !(!window.opener || !window.opener.location || window.opener.location.hostname !== window.location.hostname || window.opener.location.protocol !== window.location.protocol);
        } catch (a) {}
        return !1;
    }
    function uk(a) {
        qe(a, { target: window.cordova && window.cordova.InAppBrowser ? "_system" : "_blank" }, void 0);
    }
    function vk(a, b) {
        a = t(a) && 1 == a.nodeType ? a : document.querySelector(String(a));
        if (null == a) throw Error(b || "Cannot find element.");
        return a;
    }
    function wk() {
        return window.location.href;
    }
    function xk() {
        var a = null;
        return new F(function (b) {
            "complete" == q.document.readyState
                ? b()
                : ((a = function () {
                      b();
                  }),
                  Ne(window, "load", a));
        }).Pb(function (b) {
            Ue(window, "load", a);
            throw b;
        });
    }
    function yk() {
        for (var a = 32, b = []; 0 < a; ) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
        return b.join("");
    }
    function zk(a, b, c) {
        c = void 0 === c ? {} : c;
        return Object.keys(a)
            .filter(function (d) {
                return b.includes(d);
            })
            .reduce(function (d, e) {
                d[e] = a[e];
                return d;
            }, c);
    } /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function Ak(a) {
        var b = Bk;
        this.fd = [];
        this.$e = b;
        this.Ce = a || null;
        this.cc = this.Db = !1;
        this.Ua = void 0;
        this.fe = this.fg = this.ud = !1;
        this.jd = 0;
        this.G = null;
        this.vd = 0;
    }
    Ak.prototype.cancel = function (a) {
        if (this.Db) this.Ua instanceof Ak && this.Ua.cancel();
        else {
            if (this.G) {
                var b = this.G;
                delete this.G;
                a ? b.cancel(a) : (b.vd--, 0 >= b.vd && b.cancel());
            }
            this.$e ? this.$e.call(this.Ce, this) : (this.fe = !0);
            this.Db || ((a = new Ck(this)), Dk(this), Ek(this, !1, a));
        }
    };
    Ak.prototype.Ae = function (a, b) {
        this.ud = !1;
        Ek(this, a, b);
    };
    function Ek(a, b, c) {
        a.Db = !0;
        a.Ua = c;
        a.cc = !b;
        Fk(a);
    }
    function Dk(a) {
        if (a.Db) {
            if (!a.fe) throw new Gk(a);
            a.fe = !1;
        }
    }
    Ak.prototype.callback = function (a) {
        Dk(this);
        Ek(this, !0, a);
    };
    function Hk(a, b, c) {
        a.fd.push([b, c, void 0]);
        a.Db && Fk(a);
    }
    Ak.prototype.then = function (a, b, c) {
        var d,
            e,
            f = new F(function (g, k) {
                d = g;
                e = k;
            });
        Hk(this, d, function (g) {
            g instanceof Ck ? f.cancel() : e(g);
        });
        return f.then(a, b, c);
    };
    Ak.prototype.$goog_Thenable = !0;
    function Ik(a) {
        return Ma(a.fd, function (b) {
            return xa(b[1]);
        });
    }
    function Fk(a) {
        if (a.jd && a.Db && Ik(a)) {
            var b = a.jd,
                c = Jk[b];
            c && (q.clearTimeout(c.pb), delete Jk[b]);
            a.jd = 0;
        }
        a.G && (a.G.vd--, delete a.G);
        b = a.Ua;
        for (var d = (c = !1); a.fd.length && !a.ud; ) {
            var e = a.fd.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if ((f = a.cc ? g : f))
                try {
                    var k = f.call(e || a.Ce, b);
                    void 0 !== k && ((a.cc = a.cc && (k == b || k instanceof Error)), (a.Ua = b = k));
                    if (Cf(b) || ("function" === typeof q.Promise && b instanceof q.Promise)) (d = !0), (a.ud = !0);
                } catch (m) {
                    (b = m), (a.cc = !0), Ik(a) || (c = !0);
                }
        }
        a.Ua = b;
        d && ((k = u(a.Ae, a, !0)), (d = u(a.Ae, a, !1)), b instanceof Ak ? (Hk(b, k, d), (b.fg = !0)) : b.then(k, d));
        c && ((b = new Kk(b)), (Jk[b.pb] = b), (a.jd = b.pb));
    }
    function Gk() {
        Da.call(this);
    }
    x(Gk, Da);
    Gk.prototype.message = "Deferred has already fired";
    Gk.prototype.name = "AlreadyCalledError";
    function Ck() {
        Da.call(this);
    }
    x(Ck, Da);
    Ck.prototype.message = "Deferred was canceled";
    Ck.prototype.name = "CanceledError";
    function Kk(a) {
        this.pb = q.setTimeout(u(this.Mh, this), 0);
        this.Bg = a;
    }
    Kk.prototype.Mh = function () {
        delete Jk[this.pb];
        throw this.Bg;
    };
    var Jk = {};
    function Lk(a) {
        var b = {},
            c = b.document || document,
            d = lb(a).toString(),
            e = le(document, "SCRIPT"),
            f = { mf: e, wf: void 0 },
            g = new Ak(f),
            k = null,
            m = null != b.timeout ? b.timeout : 5e3;
        0 < m &&
            ((k = window.setTimeout(function () {
                Mk(e, !0);
                var n = new Nk(1, "Timeout reached for loading script " + d);
                Dk(g);
                Ek(g, !1, n);
            }, m)),
            (f.wf = k));
        e.onload = e.onreadystatechange = function () {
            (e.readyState && "loaded" != e.readyState && "complete" != e.readyState) || (Mk(e, b.fi || !1, k), g.callback(null));
        };
        e.onerror = function () {
            Mk(e, !0, k);
            var n = new Nk(0, "Error while loading script " + d);
            Dk(g);
            Ek(g, !1, n);
        };
        f = b.attributes || {};
        bb(f, { type: "text/javascript", charset: "UTF-8" });
        he(e, f);
        Xb(e, a);
        Ok(c).appendChild(e);
        return g;
    }
    function Ok(a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement;
    }
    function Bk() {
        if (this && this.mf) {
            var a = this.mf;
            a && "SCRIPT" == a.tagName && Mk(a, !0, this.wf);
        }
    }
    function Mk(a, b, c) {
        null != c && q.clearTimeout(c);
        a.onload = ta;
        a.onerror = ta;
        a.onreadystatechange = ta;
        b &&
            window.setTimeout(function () {
                me(a);
            }, 0);
    }
    function Nk(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Da.call(this, c);
        this.code = a;
    }
    x(Nk, Da);
    function Pk() {
        return (q.google && q.google.accounts && q.google.accounts.id) || null;
    }
    function Qk(a) {
        this.Fb = a || Pk();
        this.Re = !1;
        this.wd = null;
    }
    Qk.prototype.cancel = function () {
        this.Fb && this.Re && (this.wd && this.wd(null), this.Fb.cancel());
    };
    Qk.prototype.show = function (a, b) {
        var c = this;
        if (this.Fb && a)
            return (function () {
                c.Re = !0;
                return new F(function (e) {
                    c.wd = e;
                    c.Fb.initialize({ client_id: a, callback: e, auto_select: !b });
                    c.Fb.prompt();
                });
            })();
        if (a) {
            var d = Rk.Hd()
                .load()
                .then(function () {
                    c.Fb = Pk();
                    return c.show(a, b);
                })
                .Pb(function () {
                    return null;
                });
            return G(d);
        }
        return G(null);
    };
    ua(Qk);
    var Sk = new eb(fb, "https://accounts.google.com/gsi/client");
    function Rk() {
        this.Hb = null;
    }
    Rk.prototype.load = function () {
        var a = this;
        if (this.Hb) return this.Hb;
        var b = mb(hb(Sk));
        return Pk()
            ? G()
            : (this.Hb = xk().then(function () {
                  if (!Pk())
                      return new F(function (c, d) {
                          var e = setTimeout(function () {
                              a.Hb = null;
                              d(Error("Network error!"));
                          }, 1e4);
                          q.onGoogleLibraryLoad = function () {
                              clearTimeout(e);
                              c();
                          };
                          G(Lk(b))
                              .then(function () {
                                  Pk() && c();
                              })
                              .Pb(function (f) {
                                  clearTimeout(e);
                                  a.Hb = null;
                                  d(f);
                              });
                      });
              }));
    };
    ua(Rk);
    function Tk(a, b) {
        for (var c = 0; c < a.length; c++) if (!Oa(Uk, a[c]) && ((null !== Vk && a[c] in Vk) || Oa(b, a[c]))) return a[c];
        return null;
    }
    var Uk = ["emailLink", "password", "phone"],
        Vk = { "facebook.com": "FacebookAuthProvider", "github.com": "GithubAuthProvider", "google.com": "GoogleAuthProvider", password: "EmailAuthProvider", "twitter.com": "TwitterAuthProvider", phone: "PhoneAuthProvider" };
    function Wk(a, b, c) {
        this.reset(a, b, c, void 0, void 0);
    }
    Wk.prototype.Fc = null;
    var Xk = 0;
    Wk.prototype.reset = function (a, b, c, d, e) {
        "number" == typeof e || Xk++;
        this.vf = d || Ba();
        this.sb = a;
        this.bh = b;
        this.Xe = c;
        delete this.Fc;
    };
    Wk.prototype.nf = function (a) {
        this.sb = a;
    };
    function Yk(a) {
        this.Ze = a;
        this.dc = this.Ga = this.sb = this.G = null;
    }
    function Zk(a, b) {
        this.name = a;
        this.value = b;
    }
    Zk.prototype.toString = function () {
        return this.name;
    };
    var $k = new Zk("SEVERE", 1e3),
        al = new Zk("WARNING", 900),
        bl = new Zk("INFO", 800),
        cl = new Zk("CONFIG", 700);
    h = Yk.prototype;
    h.getName = function () {
        return this.Ze;
    };
    h.getParent = function () {
        return this.G;
    };
    h.Le = function () {
        this.Ga || (this.Ga = {});
        return this.Ga;
    };
    h.nf = function (a) {
        this.sb = a;
    };
    function dl(a) {
        if (a.sb) return a.sb;
        if (a.G) return dl(a.G);
        Ga("Root logger has no level set.");
        return null;
    }
    h.log = function (a, b, c) {
        if (a.value >= dl(this).value)
            for (xa(b) && (b = b()), a = new Wk(a, String(b), this.Ze), c && (a.Fc = c), c = this; c; ) {
                var d = c,
                    e = a;
                if (d.dc) for (var f = 0; (b = d.dc[f]); f++) b(e);
                c = c.getParent();
            }
    };
    h.info = function (a, b) {
        this.log(bl, a, b);
    };
    h.config = function (a, b) {
        this.log(cl, a, b);
    };
    var el = {},
        fl = null;
    function gl() {
        fl || ((fl = new Yk("")), (el[""] = fl), fl.nf(cl));
    }
    function hl(a) {
        gl();
        var b;
        if (!(b = el[a])) {
            b = new Yk(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = hl(a.substr(0, c));
            c.Le()[d] = b;
            b.G = c;
            el[a] = b;
        }
        return b;
    }
    function il() {
        this.lf = Ba();
    }
    var jl = null;
    il.prototype.set = function (a) {
        this.lf = a;
    };
    il.prototype.reset = function () {
        this.set(Ba());
    };
    il.prototype.get = function () {
        return this.lf;
    };
    function kl(a) {
        this.eb = a || "";
        jl || (jl = new il());
        this.Kh = jl;
    }
    h = kl.prototype;
    h.qe = !0;
    h.pf = !0;
    h.zh = !0;
    h.xh = !0;
    h.qf = !1;
    h.Bh = !1;
    function ll(a) {
        return 10 > a ? "0" + a : String(a);
    }
    function ml(a, b) {
        a = (a.vf - b) / 1e3;
        b = a.toFixed(3);
        var c = 0;
        if (1 > a) c = 2;
        else for (; 100 > a; ) c++, (a *= 10);
        for (; 0 < c--; ) b = " " + b;
        return b;
    }
    function nl(a) {
        kl.call(this, a);
    }
    x(nl, kl);
    function ol(a, b) {
        var c = [];
        c.push(a.eb, " ");
        if (a.pf) {
            var d = new Date(b.vf);
            c.push("[", ll(d.getFullYear() - 2e3) + ll(d.getMonth() + 1) + ll(d.getDate()) + " " + ll(d.getHours()) + ":" + ll(d.getMinutes()) + ":" + ll(d.getSeconds()) + "." + ll(Math.floor(d.getMilliseconds() / 10)), "] ");
        }
        a.zh && c.push("[", ml(b, a.Kh.get()), "s] ");
        a.xh && c.push("[", b.Xe, "] ");
        a.Bh && c.push("[", b.sb.name, "] ");
        c.push(b.bh);
        a.qf && (b = b.Fc) && c.push("\n", b instanceof Error ? b.message : b.toString());
        a.qe && c.push("\n");
        return c.join("");
    }
    function pl() {
        this.lh = u(this.cg, this);
        this.Gc = new nl();
        this.Gc.pf = !1;
        this.Gc.qf = !1;
        this.Se = this.Gc.qe = !1;
        this.Dg = {};
    }
    pl.prototype.cg = function (a) {
        function b(f) {
            if (f) {
                if (f.value >= $k.value) return "error";
                if (f.value >= al.value) return "warn";
                if (f.value >= cl.value) return "log";
            }
            return "debug";
        }
        if (!this.Dg[a.Xe]) {
            var c = ol(this.Gc, a),
                d = ql;
            if (d) {
                var e = b(a.sb);
                rl(d, e, c, a.Fc);
            }
        }
    };
    var ql = q.console;
    function rl(a, b, c, d) {
        if (a[b]) a[b](c, d || "");
        else a.log(c, d || "");
    }
    function sl(a, b) {
        var c = tl;
        c && c.log($k, a, b);
    }
    var tl;
    tl = hl("firebaseui");
    var ul = new pl();
    if (1 != ul.Se) {
        var vl;
        gl();
        vl = fl;
        var wl = ul.lh;
        vl.dc || (vl.dc = []);
        vl.dc.push(wl);
        ul.Se = !0;
    }
    function xl(a) {
        var b = tl;
        b && b.log(al, a, void 0);
    }
    function yl(a, b) {
        this.Yb = a;
        this.xa = b || null;
    }
    yl.prototype.getEmail = function () {
        return this.Yb;
    };
    yl.prototype.Va = function () {
        return { email: this.Yb, credential: this.xa && this.xa.toJSON() };
    };
    function zl(a) {
        if (a && a.email) {
            var b = a.credential && firebase.auth.AuthCredential.fromJSON(a.credential);
            return new yl(a.email, b);
        }
        return null;
    }
    function Al(a, b) {
        this.rg = a;
        this.Ag =
            b ||
            function (c) {
                throw c;
            };
        this.verificationId = a.verificationId;
    }
    Al.prototype.confirm = function (a) {
        return G(this.rg.confirm(a)).Pb(this.Ag);
    };
    function Bl(a) {
        this.uf = a || null;
    }
    Bl.prototype.ob = function () {
        return this.uf;
    };
    Bl.prototype.Va = function () {
        return { tenantId: this.uf };
    };
    var Cl = /MSIE ([\d.]+).*Windows NT ([\d.]+)/,
        Dl = /Firefox\/([\d.]+)/,
        El = /Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/,
        Fl = /Chrome\/([\d.]+)/,
        Gl = /((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/,
        Hl = /Mac OS X;.*(?!(Version)).*Safari/,
        Il = /Android ([\d.]+).*Safari/,
        Jl = /OS ([\d_]+) like Mac OS X.*Mobile.*Safari/,
        Kl = /Konqueror\/([\d.]+)/,
        Ll = /MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/;
    function Ml(a, b) {
        this.Rb = a;
        a = a.split(b || ".");
        this.Vb = [];
        for (b = 0; b < a.length; b++) this.Vb.push(parseInt(a[b], 10));
    }
    Ml.prototype.compare = function (a) {
        a instanceof Ml || (a = new Ml(String(a)));
        for (var b = Math.max(this.Vb.length, a.Vb.length), c = 0; c < b; c++) {
            var d = this.Vb[c],
                e = a.Vb[c];
            if (void 0 !== d && void 0 !== e && d !== e) return d - e;
            if (void 0 === d) return -1;
            if (void 0 === e) return 1;
        }
        return 0;
    };
    function Nl(a, b) {
        return 0 <= a.compare(b);
    }
    function Ol() {
        var a = window.navigator && window.navigator.userAgent;
        if (a) {
            var b;
            if ((b = a.match(El))) {
                var c = new Ml(b[3] || b[1]);
                return 0 <= a.indexOf("Opera Mini") ? !1 : 0 <= a.indexOf("Opera Mobi") ? 0 <= a.indexOf("Android") && Nl(c, "10.1") : Nl(c, "8.0");
            }
            if ((b = a.match(Dl))) return Nl(new Ml(b[1]), "2.0");
            if ((b = a.match(Fl))) return Nl(new Ml(b[1]), "6.0");
            if ((b = a.match(Gl))) return (c = new Ml(b[6])), (a = b[3] && new Ml(b[3])), (b = b[5] && new Ml(b[5], "_")), (!(!a || !Nl(a, "6.0")) || !(!b || !Nl(b, "10.5.6"))) && Nl(c, "3.0");
            if ((b = a.match(Il))) return Nl(new Ml(b[1]), "3.0");
            if ((b = a.match(Jl))) return Nl(new Ml(b[1], "_"), "4.0");
            if ((b = a.match(Kl))) return Nl(new Ml(b[1]), "4.7");
            if ((b = a.match(Ll))) return (c = new Ml(b[1])), (a = new Ml(b[2])), Nl(c, "7.0") && Nl(a, "7.0");
            if ((b = a.match(Cl))) return (c = new Ml(b[1])), (a = new Ml(b[2])), Nl(c, "7.0") && Nl(a, "6.0");
            if (a.match(Hl)) return !1;
        }
        return !0;
    }
    function Pl() {}
    x(Pl, Uj);
    Pl.prototype.clear = function () {
        var a = ec(this.gb(!0)),
            b = this;
        Ia(a, function (c) {
            b.remove(c);
        });
    };
    function Ql(a) {
        this.va = a;
    }
    x(Ql, Pl);
    function Rl(a) {
        if (!a.va) return !1;
        try {
            return a.va.setItem("__sak", "1"), a.va.removeItem("__sak"), !0;
        } catch (b) {
            return !1;
        }
    }
    h = Ql.prototype;
    h.set = function (a, b) {
        try {
            this.va.setItem(a, b);
        } catch (c) {
            if (0 == this.va.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    h.get = function (a) {
        a = this.va.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a;
    };
    h.remove = function (a) {
        this.va.removeItem(a);
    };
    h.gb = function (a) {
        var b = 0,
            c = this.va,
            d = new bc();
        d.next = function () {
            if (b >= c.length) throw ac;
            var e = c.key(b++);
            if (a) return e;
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return e;
        };
        return d;
    };
    h.clear = function () {
        this.va.clear();
    };
    h.key = function (a) {
        return this.va.key(a);
    };
    function Sl() {
        var a = null;
        try {
            a = window.localStorage || null;
        } catch (b) {}
        this.va = a;
    }
    x(Sl, Ql);
    function Tl() {
        var a = null;
        try {
            a = window.sessionStorage || null;
        } catch (b) {}
        this.va = a;
    }
    x(Tl, Ql);
    function Ul(a, b) {
        this.lc = a;
        this.eb = b + "::";
    }
    x(Ul, Pl);
    Ul.prototype.set = function (a, b) {
        this.lc.set(this.eb + a, b);
    };
    Ul.prototype.get = function (a) {
        return this.lc.get(this.eb + a);
    };
    Ul.prototype.remove = function (a) {
        this.lc.remove(this.eb + a);
    };
    Ul.prototype.gb = function (a) {
        var b = this.lc.gb(!0),
            c = this,
            d = new bc();
        d.next = function () {
            for (var e = b.next(); e.substr(0, c.eb.length) != c.eb; ) e = b.next();
            return a ? e.substr(c.eb.length) : c.lc.get(e);
        };
        return d;
    };
    function Vl(a) {
        var b = [];
        Wl(new Xl(), a, b);
        return b.join("");
    }
    function Xl() {
        this.ed = void 0;
    }
    function Wl(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), (e = d[f]), Wl(a, a.ed ? a.ed.call(d, String(f), e) : e, c), (e = ",");
                    c.push("]");
                    return;
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && ((e = b[d]), "function" != typeof e && (c.push(f), Yl(d, c), c.push(":"), Wl(a, a.ed ? a.ed.call(b, d, e) : e, c), (f = ",")));
                    c.push("}");
                    return;
                }
            }
            switch (typeof b) {
                case "string":
                    Yl(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Zl = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        $l = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    function Yl(a, b) {
        b.push(
            '"',
            a.replace($l, function (c) {
                var d = Zl[c];
                d || ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1)), (Zl[c] = d));
                return d;
            }),
            '"'
        );
    }
    function am(a) {
        this.Vc = a;
    }
    am.prototype.set = function (a, b) {
        void 0 === b ? this.Vc.remove(a) : this.Vc.set(a, Vl(b));
    };
    am.prototype.get = function (a) {
        try {
            var b = this.Vc.get(a);
        } catch (c) {
            return;
        }
        if (null !== b)
            try {
                return JSON.parse(b);
            } catch (c) {
                throw "Storage: Invalid value was encountered";
            }
    };
    am.prototype.remove = function (a) {
        this.Vc.remove(a);
    };
    var bm,
        cm = new Sl();
    bm = Rl(cm) ? new Ul(cm, "firebaseui") : null;
    var dm = new am(bm),
        em,
        fm = new Tl();
    em = Rl(fm) ? new Ul(fm, "firebaseui") : null;
    var gm = new am(em),
        hm = { name: "pendingEmailCredential", storage: gm },
        im = { name: "redirectStatus", storage: gm },
        jm = { name: "redirectUrl", storage: gm },
        km = { name: "rememberAccount", storage: gm },
        lm = { name: "rememberedAccounts", storage: dm },
        mm = { name: "emailForSignIn", storage: new am(new Vj(3600, "/")) },
        nm = { name: "pendingEncryptedCredential", storage: new am(new Vj(3600, "/")) };
    function om(a, b) {
        return a.storage.get(b ? a.name + ":" + b : a.name);
    }
    function pm(a, b) {
        a.storage.remove(b ? a.name + ":" + b : a.name);
    }
    function qm(a, b, c) {
        a.storage.set(c ? a.name + ":" + c : a.name, b);
    }
    function rm(a) {
        return om(jm, a) || null;
    }
    function sm(a, b) {
        qm(jm, a, b);
    }
    function tm(a, b) {
        qm(km, a, b);
    }
    function um(a) {
        a = om(lm, a) || [];
        a = La(a, function (b) {
            return Cj(b);
        });
        return Ka(a, function (b) {
            return null != b;
        });
    }
    function vm(a, b) {
        var c = um(b),
            d = Na(c, function (e) {
                return e.getEmail() == a.getEmail() && e.bc() == a.bc();
            });
        -1 < d && Qa(c, d);
        c.unshift(a);
        qm(
            lm,
            La(c, function (e) {
                return e.Va();
            }),
            b
        );
    }
    function wm(a) {
        a = om(hm, a) || null;
        return zl(a);
    }
    function xm(a) {
        pm(hm, a);
    }
    function ym(a, b) {
        qm(hm, a.Va(), b);
    }
    function zm(a) {
        return (a = om(im, a) || null) && "undefined" !== typeof a.tenantId ? new Bl(a.tenantId) : null;
    }
    function Am(a, b) {
        qm(im, a.Va(), b);
    }
    function Bm(a, b) {
        b = om(mm, b);
        var c = null;
        if (b)
            try {
                var d = sk(a, b),
                    e = JSON.parse(d);
                c = (e && e.email) || null;
            } catch (f) {}
        return c;
    }
    function Cm(a, b) {
        b = om(nm, b);
        var c = null;
        if (b)
            try {
                var d = sk(a, b);
                c = JSON.parse(d);
            } catch (e) {}
        return zl(c || null);
    }
    function Dm(a, b, c) {
        qm(nm, qk(a, JSON.stringify(b.Va())), c);
    }
    function Em(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.code = "firebaseui/" + a;
        if (!(a = b)) {
            b = this.code;
            a = "";
            b = D("string" === typeof b, "code", b, "string");
            switch (t(b) ? b.toString() : b) {
                case "firebaseui/merge-conflict":
                    a += "The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";
                    break;
                default:
                    a += Hg();
            }
            a = a.toString();
        }
        this.message = a || "";
        this.credential = c || null;
    }
    p(Em, Error);
    Em.prototype.Va = function () {
        return { code: this.code, message: this.message };
    };
    Em.prototype.toJSON = function () {
        return this.Va();
    };
    function Fm() {
        this.g = new Pj();
        this.g.define("acUiConfig");
        this.g.define("autoUpgradeAnonymousUsers");
        this.g.define("callbacks");
        this.g.define("credentialHelper", "accountchooser.com");
        this.g.define("immediateFederatedRedirect", !1);
        this.g.define("popupMode", !1);
        this.g.define("privacyPolicyUrl");
        this.g.define("queryParameterForSignInSuccessUrl", "signInSuccessUrl");
        this.g.define("queryParameterForWidgetMode", "mode");
        this.g.define("signInFlow");
        this.g.define("signInOptions");
        this.g.define("signInSuccessUrl");
        this.g.define("siteName");
        this.g.define("tosUrl");
        this.g.define("widgetUrl");
    }
    function Gm(a) {
        return a.g.get("acUiConfig") || null;
    }
    function Hm(a) {
        var b = a.g.get("widgetUrl") || wk();
        return Im(a, b);
    }
    function Im(a, b) {
        a = Jm(a);
        for (var c = b.search(oc), d = 0, e, f = []; 0 <= (e = nc(b, d, a, c)); ) f.push(b.substring(d, e)), (d = Math.min(b.indexOf("&", e) + 1 || c, c));
        f.push(b.substr(d));
        b = f.join("").replace(qc, "$1");
        c = "=" + encodeURIComponent("select");
        (a += c)
            ? ((c = b.indexOf("#")),
              0 > c && (c = b.length),
              (d = b.indexOf("?")),
              0 > d || d > c ? ((d = c), (e = "")) : (e = b.substring(d + 1, c)),
              (b = [b.substr(0, d), e, b.substr(c)]),
              (c = b[1]),
              (b[1] = a ? (c ? c + "&" + a : a) : c),
              (a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]))
            : (a = b);
        return a;
    }
    function Km(a) {
        var b = !!a.g.get("autoUpgradeAnonymousUsers");
        b && !Lm(a) && sl('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.', void 0);
        return b;
    }
    function Mm(a) {
        a = a.g.get("signInOptions") || [];
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c];
            d = t(d) ? d : { provider: d };
            d.provider && b.push(d);
        }
        return b;
    }
    function Nm(a, b) {
        a = Mm(a);
        for (var c = 0; c < a.length; c++) if (a[c].provider === b) return a[c];
        return null;
    }
    function Om(a) {
        return La(Mm(a), function (b) {
            return b.provider;
        });
    }
    function Pm(a, b) {
        a = Qm(a);
        for (var c = 0; c < a.length; c++) if (a[c].providerId === b) return a[c];
        return null;
    }
    function Qm(a) {
        return La(Mm(a), function (b) {
            if (Vk[b.provider] || Oa(Rm, b.provider)) {
                b = { providerId: b.provider, ka: b.providerName || null, ra: b.fullLabel || null, Ub: b.buttonColor || null, fc: b.iconUrl ? Ab(Cb(b.iconUrl) || Eb) : null };
                for (var c in b) null === b[c] && delete b[c];
                return b;
            }
            return { providerId: b.provider, ka: b.providerName || null, ra: b.fullLabel || null, Ub: b.buttonColor || null, fc: b.iconUrl ? Ab(Cb(b.iconUrl) || Eb) : null, Zg: b.loginHintKey || null };
        });
    }
    function Sm(a) {
        var b = Nm(a, firebase.auth.GoogleAuthProvider.PROVIDER_ID);
        return b && b.clientId && "googleyolo" === Tm(a) ? b.clientId || null : null;
    }
    function Um(a) {
        var b = null;
        Ia(Mm(a), function (d) {
            d.provider == firebase.auth.PhoneAuthProvider.PROVIDER_ID && t(d.recaptchaParameters) && !Array.isArray(d.recaptchaParameters) && (b = Za(d.recaptchaParameters));
        });
        if (b) {
            var c = [];
            Ia(Vm, function (d) {
                "undefined" !== typeof b[d] && (c.push(d), delete b[d]);
            });
            c.length && xl('The following provided "recaptchaParameters" keys are not allowed: ' + c.join(", "));
        }
        return b;
    }
    function Wm(a, b) {
        a = (a = Nm(a, b)) && a.scopes;
        return Array.isArray(a) ? a : [];
    }
    function Xm(a, b) {
        a = (a = Nm(a, b)) && a.customParameters;
        return t(a) ? ((a = Za(a)), b === firebase.auth.GoogleAuthProvider.PROVIDER_ID && delete a.login_hint, b === firebase.auth.GithubAuthProvider.PROVIDER_ID && delete a.login, a) : null;
    }
    function Ym(a) {
        a = Nm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
        var b = null;
        a && "string" === typeof a.loginHint && (b = Fh(a.loginHint));
        return (a && a.defaultNationalNumber) || (b && b.Oa) || null;
    }
    function Zm(a) {
        var b = ((a = Nm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID)) && a.defaultCountry) || null;
        b = b && Pd(b);
        var c = null;
        a && "string" === typeof a.loginHint && (c = Fh(a.loginHint));
        return (b && b[0]) || (c && Nd(c.Dc)) || null;
    }
    function $m(a) {
        a = Nm(a, firebase.auth.PhoneAuthProvider.PROVIDER_ID);
        if (!a) return null;
        var b = a.whitelistedCountries,
            c = a.blacklistedCountries;
        if ("undefined" !== typeof b && (!Array.isArray(b) || 0 == b.length)) throw Error("WhitelistedCountries must be a non-empty array.");
        if ("undefined" !== typeof c && !Array.isArray(c)) throw Error("BlacklistedCountries must be an array.");
        if (b && c) throw Error("Both whitelistedCountries and blacklistedCountries are provided.");
        if (!b && !c) return Od;
        a = [];
        if (b) {
            c = {};
            for (var d = 0; d < b.length; d++) {
                var e = Qd(b[d]);
                for (var f = 0; f < e.length; f++) c[e[f].b] = e[f];
            }
            for (var g in c) c.hasOwnProperty(g) && a.push(c[g]);
        } else {
            g = {};
            for (b = 0; b < c.length; b++) for (e = Qd(c[b]), d = 0; d < e.length; d++) g[e[d].b] = e[d];
            for (e = 0; e < Od.length; e++) (null !== g && Od[e].b in g) || a.push(Od[e]);
        }
        return a;
    }
    function Jm(a) {
        return Qj(a.g, "queryParameterForWidgetMode");
    }
    Fm.prototype.O = function () {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        a && !b && xl("Privacy Policy URL is missing, the link will not be displayed.");
        if (a && b) {
            if ("function" === typeof a) return a;
            if ("string" === typeof a)
                return function () {
                    uk(a);
                };
        }
        return null;
    };
    Fm.prototype.N = function () {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        b && !a && xl("Term of Service URL is missing, the link will not be displayed.");
        if (a && b) {
            if ("function" === typeof b) return b;
            if ("string" === typeof b)
                return function () {
                    uk(b);
                };
        }
        return null;
    };
    function an(a) {
        return (a = Nm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "undefined" !== typeof a.requireDisplayName ? !!a.requireDisplayName : !0;
    }
    function bn(a) {
        a = Nm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID);
        return !(!a || a.signInMethod !== firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD);
    }
    function cn(a) {
        a = Nm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID);
        return !(!a || !a.forceSameDevice);
    }
    function dn(a) {
        if (bn(a)) {
            var b = { url: wk(), handleCodeInApp: !0 };
            (a = Nm(a, firebase.auth.EmailAuthProvider.PROVIDER_ID)) && "function" === typeof a.emailLinkSignIn && bb(b, a.emailLinkSignIn());
            b.url = Gc(wk(), b.url).toString();
            return b;
        }
        return null;
    }
    function en(a) {
        var b = !!a.g.get("immediateFederatedRedirect"),
            c = Om(a);
        a = fn(a);
        return b && 1 == c.length && !Oa(Uk, c[0]) && "redirect" == a;
    }
    function fn(a) {
        a = a.g.get("signInFlow");
        for (var b in gn) if (gn[b] == a) return gn[b];
        return "redirect";
    }
    function hn(a) {
        return jn(a).uiShown || null;
    }
    function kn(a) {
        return jn(a).signInSuccess || null;
    }
    function ln(a) {
        return jn(a).signInSuccessWithAuthResult || null;
    }
    function Lm(a) {
        return jn(a).signInFailure || null;
    }
    function jn(a) {
        return a.g.get("callbacks") || {};
    }
    function mn(a) {
        return "accountchooser.com" == Tm(a);
    }
    function Tm(a) {
        if ("http:" !== (window.location && window.location.protocol) && "https:" !== (window.location && window.location.protocol)) return "none";
        a = a.g.get("credentialHelper");
        "accountchooser.com" === a && xl('AccountChooser.com will be operating in "universal opt-out" mode starting July 31st, 2020, it should no longer be used as a CredentialHelper. Learn more at https://accountchooser.net/developers');
        for (var b in nn) if (nn[b] === a) return nn[b];
        return "accountchooser.com";
    }
    Fm.prototype.Mb = function (a) {
        for (var b in a)
            try {
                this.g.update(b, a[b]);
            } catch (c) {
                sl('Invalid config: "' + b + '"', void 0);
            }
        $c && this.g.update("popupMode", !1);
        $m(this);
    };
    Fm.prototype.update = function (a, b) {
        this.g.update(a, b);
        $m(this);
    };
    var nn = { Uh: "accountchooser.com", Xh: "googleyolo", NONE: "none" },
        gn = { ai: "popup", bi: "redirect" },
        on = {
            Wh: "callback",
            RECOVER_EMAIL: "recoverEmail",
            ci: "resetPassword",
            REVERT_SECOND_FACTOR_ADDITION: "revertSecondFactorAddition",
            di: "select",
            ei: "signIn",
            VERIFY_AND_CHANGE_EMAIL: "verifyAndChangeEmail",
            VERIFY_EMAIL: "verifyEmail",
        },
        Rm = ["anonymous"],
        Vm = ["sitekey", "tabindex", "callback", "expired-callback"];
    var pn,
        qn,
        rn,
        sn,
        P = {};
    function R(a, b, c, d) {
        P[a].apply(null, Array.prototype.slice.call(arguments, 1));
    }
    var tn = !1,
        un = null;
    function vn(a, b) {
        tn = !!b;
        un || ("undefined" == typeof accountchooser && Ol() ? ((b = mb(hb(new eb(fb, "//www.gstatic.com/accountchooser/client.js")))), (un = G(Lk(b)).Pb(function () {}))) : (un = G()));
        un.then(a, a);
    }
    function wn(a, b) {
        a = S(a);
        (a = jn(a).accountChooserInvoked || null) ? a(b) : b();
    }
    function xn(a, b, c) {
        a = S(a);
        (a = jn(a).accountChooserResult || null) ? a(b, c) : c();
    }
    function yn(a, b, c, d, e) {
        d
            ? (R("callback", a, b), tn && c())
            : wn(a, function () {
                  var f = new Bl(a.ob());
                  Am(f, T(a));
                  Ij(
                      function (g) {
                          pm(im, T(a));
                          xn(a, g ? "empty" : "unavailable", function () {
                              R("signIn", a, b);
                              (g || tn) && c();
                          });
                      },
                      um(T(a)),
                      e
                  );
              });
    }
    function zn(a, b, c, d) {
        function e(f) {
            f = U(f);
            V(b, c, void 0, f);
            d();
        }
        xn(b, "accountSelected", function () {
            tm(!1, T(b));
            var f = An(b);
            W(
                b,
                b
                    .o()
                    .fetchSignInMethodsForEmail(a.getEmail())
                    .then(function (g) {
                        Bn(b, c, g, a.getEmail(), a.Ge || void 0, void 0, f);
                        d();
                    }, e)
            );
        });
    }
    function Cn(a, b, c, d) {
        xn(b, a ? "addAccount" : "unavailable", function () {
            R("signIn", b, c);
            (a || tn) && d();
        });
    }
    function Dn(a, b, c, d) {
        function e() {
            var f = a();
            f && (f = hn(S(f))) && f();
        }
        Fj(
            function () {
                var f = a();
                f && yn(f, b, e, c, d);
            },
            function (f) {
                var g = a();
                g && zn(f, g, b, e);
            },
            function (f) {
                var g = a();
                g && Cn(f, g, b, e);
            },
            a() && Gm(S(a()))
        );
    }
    function En(a, b, c, d) {
        function e(g) {
            if (!g.name || "cancel" != g.name) {
                a: {
                    var k = g.message;
                    try {
                        var m = ((JSON.parse(k).error || {}).message || "").toLowerCase().match(/invalid.+(access|id)_token/);
                        if (m && m.length) {
                            var n = !0;
                            break a;
                        }
                    } catch (l) {}
                    n = !1;
                }
                if (n) (g = M(b)), b.i(), V(a, g, void 0, "Your sign-in session has expired. Please try again.".toString());
                else {
                    n = (g && g.message) || "";
                    if (g.code) {
                        if ("auth/email-already-in-use" == g.code || "auth/credential-already-in-use" == g.code) return;
                        n = U(g);
                    }
                    b.F(n);
                }
            }
        }
        Fn(a);
        if (d) return Gn(a, c), G();
        if (!c.credential) throw Error("No credential found!");
        d = a.o().currentUser || c.user;
        if (!d) throw Error("User not logged in.");
        d = new Bj(d.email, d.displayName, d.photoURL, "password" == c.credential.providerId ? null : c.credential.providerId);
        (null != om(km, T(a)) && !om(km, T(a))) || vm(d, T(a));
        pm(km, T(a));
        try {
            var f = Hn(a, c);
        } catch (g) {
            return sl(g.code || g.message, g), b.F(g.code || g.message), G();
        }
        c = f
            .then(function (g) {
                Gn(a, g);
            }, e)
            .then(void 0, e);
        W(a, f);
        return G(c);
    }
    function Gn(a, b) {
        if (!b.user) throw Error("No user found");
        var c = ln(S(a));
        kn(S(a)) && c && xl("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked.");
        if (c) {
            c = ln(S(a));
            var d = rm(T(a)) || void 0;
            pm(jm, T(a));
            var e = !1;
            if (tk()) {
                if (!c || c(b, d)) (e = !0), Yb(window.opener.location, In(a, d));
                c || window.close();
            } else if (!c || c(b, d)) (e = !0), Yb(window.location, In(a, d));
            e || a.reset();
        } else {
            c = b.user;
            b = b.credential;
            d = kn(S(a));
            e = rm(T(a)) || void 0;
            pm(jm, T(a));
            var f = !1;
            if (tk()) {
                if (!d || d(c, b, e)) (f = !0), Yb(window.opener.location, In(a, e));
                d || window.close();
            } else if (!d || d(c, b, e)) (f = !0), Yb(window.location, In(a, e));
            f || a.reset();
        }
    }
    function In(a, b) {
        a = b || S(a).g.get("signInSuccessUrl");
        if (!a) throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");
        return a;
    }
    function U(a) {
        var b = { code: a.code };
        b = b || {};
        var c = "";
        b = D(null == b.code || "string" === typeof b.code, "code", b.code, "null|string|undefined");
        switch (t(b) ? b.toString() : b) {
            case "auth/email-already-in-use":
                c += "The email address is already used by another account";
                break;
            case "auth/requires-recent-login":
                c += Kg();
                break;
            case "auth/too-many-requests":
                c += "You have entered an incorrect password too many times. Please try again in a few minutes.";
                break;
            case "auth/user-cancelled":
                c += "Please authorize the required permissions to sign in to the application";
                break;
            case "auth/user-not-found":
                c += "That email address doesn't match an existing account";
                break;
            case "auth/user-token-expired":
                c += Kg();
                break;
            case "auth/weak-password":
                c += "Strong passwords have at least 6 characters and a mix of letters and numbers";
                break;
            case "auth/wrong-password":
                c += "The email and password you entered don't match";
                break;
            case "auth/network-request-failed":
                c += "A network error has occurred";
                break;
            case "auth/invalid-phone-number":
                c += Fg();
                break;
            case "auth/invalid-verification-code":
                c += "Wrong code. Try again.";
                break;
            case "auth/code-expired":
                c += "This code is no longer valid";
                break;
            case "auth/expired-action-code":
                c += "This code has expired.";
                break;
            case "auth/invalid-action-code":
                c += "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.";
        }
        if ((c = c.toString())) return c;
        try {
            return JSON.parse(a.message), sl("Internal error: " + a.message, void 0), Hg().toString();
        } catch (d) {
            return a.message;
        }
    }
    function Jn(a, b, c) {
        var d = Vk[b] && firebase.auth[Vk[b]] ? new firebase.auth[Vk[b]]() : 0 == b.indexOf("saml.") ? new firebase.auth.SAMLAuthProvider(b) : new firebase.auth.OAuthProvider(b);
        if (!d) throw Error("Invalid Firebase Auth provider!");
        var e = Wm(S(a), b);
        if (d.addScope) for (var f = 0; f < e.length; f++) d.addScope(e[f]);
        e = Xm(S(a), b) || {};
        c && ((a = b == firebase.auth.GoogleAuthProvider.PROVIDER_ID ? "login_hint" : b == firebase.auth.GithubAuthProvider.PROVIDER_ID ? "login" : (a = Pm(S(a), b)) && a.Zg), a && (e[a] = c));
        d.setCustomParameters && d.setCustomParameters(e);
        return d;
    }
    function Kn(a, b, c, d) {
        function e() {
            var n = new Bl(a.ob());
            Am(n, T(a));
            W(
                a,
                b.Y(
                    u(a.Jh, a),
                    [m],
                    function () {
                        if ("file:" === (window.location && window.location.protocol))
                            return W(
                                a,
                                a.getRedirectResult().then(function (l) {
                                    b.i();
                                    pm(im, T(a));
                                    R("callback", a, k, G(l));
                                }, f)
                            );
                    },
                    g
                )
            );
        }
        function f(n) {
            pm(im, T(a));
            if (!n.name || "cancel" != n.name)
                switch (n.code) {
                    case "auth/popup-blocked":
                        e();
                        break;
                    case "auth/popup-closed-by-user":
                    case "auth/cancelled-popup-request":
                        break;
                    case "auth/credential-already-in-use":
                        break;
                    case "auth/network-request-failed":
                    case "auth/too-many-requests":
                    case "auth/user-cancelled":
                        b.F(U(n));
                        break;
                    default:
                        b.i(), R("callback", a, k, If(n));
                }
        }
        function g(n) {
            pm(im, T(a));
            (n.name && "cancel" == n.name) || (sl("signInWithRedirect: " + n.code, void 0), (n = U(n)), "blank" == b.Yc && en(S(a)) ? (b.i(), R("providerSignIn", a, k, n)) : b.F(n));
        }
        var k = M(b),
            m = Jn(a, c, d);
        "redirect" == fn(S(a))
            ? e()
            : W(
                  a,
                  Ln(a, m).then(function (n) {
                      b.i();
                      R("callback", a, k, G(n));
                  }, f)
              );
    }
    function Mn(a, b) {
        W(
            a,
            b.Y(
                u(a.Fh, a),
                [],
                function (c) {
                    b.i();
                    return En(a, b, c, !0);
                },
                function (c) {
                    (c.name && "cancel" == c.name) || (sl("ContinueAsGuest: " + c.code, void 0), (c = U(c)), b.F(c));
                }
            )
        );
    }
    function Nn(a, b, c) {
        function d(f) {
            var g = !1;
            f = b.Y(
                u(a.Gh, a),
                [f],
                function (k) {
                    var m = M(b);
                    b.i();
                    R("callback", a, m, G(k));
                    g = !0;
                },
                function (k) {
                    if (!k.name || "cancel" != k.name)
                        if (!k || "auth/credential-already-in-use" != k.code)
                            if (k && "auth/email-already-in-use" == k.code && k.email && k.credential) {
                                var m = M(b);
                                b.i();
                                R("callback", a, m, If(k));
                            } else (k = U(k)), b.F(k);
                }
            );
            W(a, f);
            return f.then(
                function () {
                    return g;
                },
                function () {
                    return !1;
                }
            );
        }
        if (c && c.credential && c.clientId === Sm(S(a))) {
            if (Wm(S(a), firebase.auth.GoogleAuthProvider.PROVIDER_ID).length) {
                try {
                    var e = JSON.parse(atob(c.credential.split(".")[1])).email;
                } catch (f) {}
                Kn(a, b, firebase.auth.GoogleAuthProvider.PROVIDER_ID, e);
                return G(!0);
            }
            return d(firebase.auth.GoogleAuthProvider.credential(c.credential));
        }
        c && b.F("The selected credential for the authentication provider is not supported!".toString());
        return G(!1);
    }
    function On(a, b) {
        var c = b.pa(),
            d = b.zd();
        if (c)
            if (d) {
                var e = firebase.auth.EmailAuthProvider.credential(c, d);
                W(
                    a,
                    b.Y(
                        u(a.Hh, a),
                        [c, d],
                        function (f) {
                            return En(a, b, { user: f.user, credential: e, operationType: f.operationType, additionalUserInfo: f.additionalUserInfo });
                        },
                        function (f) {
                            if (!f.name || "cancel" != f.name)
                                switch (f.code) {
                                    case "auth/email-already-in-use":
                                        break;
                                    case "auth/email-exists":
                                        H(b.A(), !1);
                                        tg(b.ab(), U(f));
                                        break;
                                    case "auth/too-many-requests":
                                    case "auth/wrong-password":
                                        H(b.Ka(), !1);
                                        tg(b.Jd(), U(f));
                                        break;
                                    default:
                                        sl("verifyPassword: " + f.message, void 0), b.F(U(f));
                                }
                        }
                    )
                );
            } else b.Ka().focus();
        else b.A().focus();
    }
    function An(a) {
        a = Om(S(a));
        return 1 == a.length && a[0] == firebase.auth.EmailAuthProvider.PROVIDER_ID;
    }
    function Pn(a) {
        a = Om(S(a));
        return 1 == a.length && a[0] == firebase.auth.PhoneAuthProvider.PROVIDER_ID;
    }
    function V(a, b, c, d) {
        An(a) ? (d ? R("signIn", a, b, c, d) : Qn(a, b, c)) : a && Pn(a) && !d ? R("phoneSignInStart", a, b) : a && en(S(a)) && !d ? R("federatedRedirect", a, b, c) : R("providerSignIn", a, b, d, c);
    }
    function Rn(a, b, c, d) {
        var e = M(b);
        W(
            a,
            b.Y(
                u(a.o().fetchSignInMethodsForEmail, a.o()),
                [c],
                function (f) {
                    tm(mn(S(a)), T(a));
                    b.i();
                    Bn(a, e, f, c, void 0, d);
                },
                function (f) {
                    f = U(f);
                    b.F(f);
                }
            )
        );
    }
    function Bn(a, b, c, d, e, f, g) {
        c.length || bn(S(a))
            ? !c.length && bn(S(a))
                ? R("sendEmailLinkForSignIn", a, b, d, function () {
                      R("signIn", a, b);
                  })
                : Oa(c, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)
                ? R("passwordSignIn", a, b, d, g)
                : 1 == c.length && c[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
                ? bn(S(a))
                    ? R("sendEmailLinkForSignIn", a, b, d, function () {
                          R("signIn", a, b);
                      })
                    : R("unsupportedProvider", a, b, d)
                : (c = Tk(c, Om(S(a))))
                ? (ym(new yl(d), T(a)), R("federatedSignIn", a, b, d, c, f))
                : R("unsupportedProvider", a, b, d)
            : R("passwordSignUp", a, b, d, e, void 0, g);
    }
    function Sn(a, b, c, d, e, f) {
        var g = M(b);
        W(
            a,
            b.Y(
                u(a.sendSignInLinkToEmail, a),
                [c, f],
                function () {
                    b.i();
                    R("emailLinkSignInSent", a, g, c, d, f);
                },
                e
            )
        );
    }
    function Qn(a, b, c) {
        mn(S(a))
            ? vn(function () {
                  Dj
                      ? wn(a, function () {
                            var d = new Bl(a.ob());
                            Am(d, T(a));
                            Ij(
                                function (e) {
                                    pm(im, T(a));
                                    xn(a, e ? "empty" : "unavailable", function () {
                                        c ? R("prefilledEmailSignIn", a, b, c) : R("signIn", a, b);
                                    });
                                },
                                um(T(a)),
                                Hm(S(a))
                            );
                        })
                      : (X(a), Dn(Tn, b, !1, Hm(S(a))));
              }, !1)
            : ((tn = !1),
              wn(a, function () {
                  xn(a, "unavailable", function () {
                      c ? R("prefilledEmailSignIn", a, b, c) : R("signIn", a, b);
                  });
              }));
    }
    function Un(a) {
        var b = wk();
        a = Jm(S(a));
        b = pc(b, a) || "";
        for (var c in on) if (on[c].toLowerCase() == b.toLowerCase()) return on[c];
        return "callback";
    }
    function Vn(a) {
        var b = wk();
        a = Qj(S(a).g, "queryParameterForSignInSuccessUrl");
        return (b = pc(b, a)) ? Ab(Cb(b) || Eb) : null;
    }
    function Wn() {
        return pc(wk(), "oobCode");
    }
    function Xn() {
        var a = pc(wk(), "continueUrl");
        return a
            ? function () {
                  Yb(window.location, a);
              }
            : null;
    }
    function Yn(a, b) {
        var c = vk(b, "Could not find the FirebaseUI widget element on the page.");
        b = Vn(a);
        switch (Un(a)) {
            case "callback":
                b && sm(b, T(a));
                a.Te() ? R("callback", a, c) : V(a, c, Zn(a));
                break;
            case "resetPassword":
                R("passwordReset", a, c, Wn(), Xn());
                break;
            case "recoverEmail":
                R("emailChangeRevocation", a, c, Wn());
                break;
            case "revertSecondFactorAddition":
                R("revertSecondFactorAddition", a, c, Wn());
                break;
            case "verifyEmail":
                R("emailVerification", a, c, Wn(), Xn());
                break;
            case "verifyAndChangeEmail":
                R("verifyAndChangeEmail", a, c, Wn(), Xn());
                break;
            case "signIn":
                R("emailLinkSignInCallback", a, c, wk());
                $n();
                break;
            case "select":
                if ((b && sm(b, T(a)), Dj)) {
                    V(a, c);
                    break;
                } else {
                    vn(function () {
                        X(a);
                        Dn(Tn, c, !0);
                    }, !0);
                    return;
                }
            default:
                throw Error("Unhandled widget operation.");
        }
        (b = hn(S(a))) && b();
    }
    function ao(a, b, c, d, e) {
        var f = c.yd();
        f &&
            W(
                a,
                c.Y(
                    u(a.o().confirmPasswordReset, a.o()),
                    [d, f],
                    function () {
                        c.i();
                        var g = new hj(e);
                        g.render(b);
                        Y(a, g);
                    },
                    function (g) {
                        bo(a, b, c, g);
                    }
                )
            );
    }
    function bo(a, b, c, d) {
        "auth/weak-password" == (d && d.code) ? ((a = U(d)), H(c.za(), !1), tg(c.Id(), a), c.za().focus()) : (c && c.i(), (c = new ij()), c.render(b), Y(a, c));
    }
    function co(a, b, c) {
        var d = new Ri(c, function () {
            W(
                a,
                d.Y(
                    u(a.o().sendPasswordResetEmail, a.o()),
                    [c],
                    function () {
                        d.i();
                        d = new aj(c, void 0, S(a).O(), S(a).N());
                        d.render(b);
                        Y(a, d);
                    },
                    function () {
                        d.F(Gg().toString());
                    }
                )
            );
        });
        d.render(b);
        Y(a, d);
    }
    function eo(a, b, c, d) {
        var e = new vj(
            d.factorId,
            function () {
                e.Y(
                    u(a.o().sendPasswordResetEmail, a.o()),
                    [c],
                    function () {
                        e.i();
                        e = new aj(c, void 0, S(a).O(), S(a).N());
                        e.render(b);
                        Y(a, e);
                    },
                    function () {
                        e.F(Gg().toString());
                    }
                );
            },
            d.phoneNumber
        );
        e.render(b);
        Y(a, e);
    }
    P.passwordReset = function (a, b, c, d) {
        W(
            a,
            a
                .o()
                .verifyPasswordResetCode(c)
                .then(
                    function (e) {
                        var f = new oj(e, function () {
                            ao(a, b, f, c, d);
                        });
                        f.render(b);
                        Y(a, f);
                    },
                    function () {
                        bo(a, b);
                    }
                )
        );
    };
    P.emailChangeRevocation = function (a, b, c) {
        var d = null;
        W(
            a,
            a
                .o()
                .checkActionCode(c)
                .then(function (e) {
                    d = e.data.email;
                    return a.o().applyActionCode(c);
                })
                .then(
                    function () {
                        co(a, b, d);
                    },
                    function () {
                        var e = new jj();
                        e.render(b);
                        Y(a, e);
                    }
                )
        );
    };
    P.emailVerification = function (a, b, c, d) {
        W(
            a,
            a
                .o()
                .applyActionCode(c)
                .then(
                    function () {
                        var e = new bj(d);
                        e.render(b);
                        Y(a, e);
                    },
                    function () {
                        var e = new cj();
                        e.render(b);
                        Y(a, e);
                    }
                )
        );
    };
    P.revertSecondFactorAddition = function (a, b, c) {
        var d = null,
            e = null;
        W(
            a,
            a
                .o()
                .checkActionCode(c)
                .then(function (f) {
                    d = f.data.email;
                    e = f.data.multiFactorInfo;
                    return a.o().applyActionCode(c);
                })
                .then(
                    function () {
                        eo(a, b, d, e);
                    },
                    function () {
                        var f = new fj();
                        f.render(b);
                        Y(a, f);
                    }
                )
        );
    };
    P.verifyAndChangeEmail = function (a, b, c, d) {
        var e = null;
        W(
            a,
            a
                .o()
                .checkActionCode(c)
                .then(function (f) {
                    e = f.data.email;
                    return a.o().applyActionCode(c);
                })
                .then(
                    function () {
                        var f = new dj(e, d);
                        f.render(b);
                        Y(a, f);
                    },
                    function () {
                        var f = new ej();
                        f.render(b);
                        Y(a, f);
                    }
                )
        );
    };
    P.anonymousUserMismatch = function (a, b) {
        var c = new Ni(function () {
            c.i();
            V(a, b);
        });
        c.render(b);
        Y(a, c);
    };
    function fo(a, b, c) {
        if (c.user) {
            var d = { user: c.user, credential: c.credential, operationType: c.operationType, additionalUserInfo: c.additionalUserInfo },
                e = wm(T(a)),
                f = e && e.getEmail();
            if (f && !go(c.user, f)) ho(a, b, d);
            else {
                var g = e && e.xa;
                g
                    ? W(
                          a,
                          c.user.linkWithCredential(g).then(
                              function (k) {
                                  d = { user: k.user, credential: g, operationType: k.operationType, additionalUserInfo: k.additionalUserInfo };
                                  io(a, b, d);
                              },
                              function (k) {
                                  jo(a, b, k);
                              }
                          )
                      )
                    : io(a, b, d);
            }
        } else (c = M(b)), b.i(), xm(T(a)), V(a, c);
    }
    function io(a, b, c) {
        xm(T(a));
        En(a, b, c);
    }
    function jo(a, b, c) {
        var d = M(b);
        xm(T(a));
        c = U(c);
        b.i();
        V(a, d, void 0, c);
    }
    function ko(a, b, c, d) {
        var e = M(b);
        W(
            a,
            a
                .o()
                .fetchSignInMethodsForEmail(c)
                .then(
                    function (f) {
                        b.i();
                        f.length
                            ? Oa(f, firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)
                                ? R("passwordLinking", a, e, c)
                                : 1 == f.length && f[0] === firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
                                ? R("emailLinkSignInLinking", a, e, c)
                                : (f = Tk(f, Om(S(a))))
                                ? R("federatedLinking", a, e, c, f, d)
                                : (xm(T(a)), R("unsupportedProvider", a, e, c))
                            : (xm(T(a)), R("passwordRecovery", a, e, c, !1, Ig().toString()));
                    },
                    function (f) {
                        jo(a, b, f);
                    }
                )
        );
    }
    function ho(a, b, c) {
        var d = M(b);
        W(
            a,
            lo(a).then(
                function () {
                    b.i();
                    R("emailMismatch", a, d, c);
                },
                function (e) {
                    (e.name && "cancel" == e.name) || ((e = U(e.code)), b.F(e));
                }
            )
        );
    }
    function go(a, b) {
        if (b == a.email) return !0;
        if (a.providerData) for (var c = 0; c < a.providerData.length; c++) if (b == a.providerData[c].email) return !0;
        return !1;
    }
    P.callback = function (a, b, c) {
        var d = new Pi();
        d.render(b);
        Y(a, d);
        b = c || a.getRedirectResult();
        W(
            a,
            b.then(
                function (e) {
                    fo(a, d, e);
                },
                function (e) {
                    if (e && ("auth/account-exists-with-different-credential" == e.code || "auth/email-already-in-use" == e.code) && e.email && e.credential) ym(new yl(e.email, e.credential), T(a)), ko(a, d, e.email);
                    else if (e && "auth/user-cancelled" == e.code) {
                        var f = wm(T(a)),
                            g = U(e);
                        f && f.xa ? ko(a, d, f.getEmail(), g) : f ? Rn(a, d, f.getEmail(), g) : jo(a, d, e);
                    } else (e && "auth/credential-already-in-use" == e.code) || (e && "auth/operation-not-supported-in-this-environment" == e.code && An(a) ? fo(a, d, { user: null, credential: null }) : jo(a, d, e));
                }
            )
        );
    };
    P.differentDeviceError = function (a, b) {
        var c = new Qi(function () {
            c.i();
            V(a, b);
        });
        c.render(b);
        Y(a, c);
    };
    P.emailLinkConfirmation = function (a, b, c, d, e, f) {
        var g = new Ui(
            function () {
                var k = g.pa();
                k ? (g.i(), d(a, b, k, c)) : g.A().focus();
            },
            function () {
                g.i();
                V(a, b, e || void 0);
            },
            e || void 0,
            S(a).O(),
            S(a).N()
        );
        g.render(b);
        Y(a, g);
        f && g.F(f);
    };
    P.emailLinkNewDeviceLinking = function (a, b, c, d) {
        var e = new Kj(c);
        c = e.bc();
        Oj(e, null);
        if (c) {
            var f = new Wi(
                Pm(S(a), c),
                function () {
                    f.i();
                    d(a, b, e.toString());
                },
                S(a).O(),
                S(a).N()
            );
            f.render(b);
            Y(a, f);
        } else V(a, b);
    };
    function mo(a, b, c, d, e) {
        var f = new Oi(),
            g = new Kj(c),
            k = g.W.V.get(O.pe) || "",
            m = g.W.V.get(O.qd) || "",
            n = "1" === g.W.V.get(O.od),
            l = Nj(g),
            r = g.bc();
        g = g.ob();
        a.ee(g);
        var z = !om(mm, T(a)),
            Q = d || Bm(m, T(a)),
            ab = (d = Cm(m, T(a))) && d.xa;
        r && ab && ab.providerId !== r && (ab = null);
        f.render(b);
        Y(a, f);
        W(
            a,
            f.Y(
                function () {
                    var ra = G(null);
                    ra =
                        (l && z) || (z && n)
                            ? If(Error("anonymous-user-not-found"))
                            : no(a, c).then(function (Mb) {
                                  if (r && !ab) throw Error("pending-credential-not-found");
                                  return Mb;
                              });
                    var ka = null;
                    return ra
                        .then(function (Mb) {
                            ka = Mb;
                            return e ? null : a.o().checkActionCode(k);
                        })
                        .then(function () {
                            return ka;
                        });
                },
                [],
                function (ra) {
                    Q ? oo(a, f, Q, c, ab, ra) : n ? (f.i(), R("differentDeviceError", a, b)) : (f.i(), R("emailLinkConfirmation", a, b, c, po));
                },
                function (ra) {
                    var ka = void 0;
                    if (!ra || !ra.name || "cancel" != ra.name)
                        switch ((f.i(), ra && ra.message)) {
                            case "anonymous-user-not-found":
                                R("differentDeviceError", a, b);
                                break;
                            case "anonymous-user-mismatch":
                                R("anonymousUserMismatch", a, b);
                                break;
                            case "pending-credential-not-found":
                                R("emailLinkNewDeviceLinking", a, b, c, qo);
                                break;
                            default:
                                ra && (ka = U(ra)), V(a, b, void 0, ka);
                        }
                }
            )
        );
    }
    function po(a, b, c, d) {
        mo(a, b, d, c, !0);
    }
    function qo(a, b, c) {
        mo(a, b, c);
    }
    function oo(a, b, c, d, e, f) {
        var g = M(b);
        b.Nb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", "Signing in...".toString());
        var k = null;
        e = (f ? ro(a, f, c, d, e) : a.signInWithEmailLink(c, d, e)).then(
            function (m) {
                pm(nm, T(a));
                pm(mm, T(a));
                b.da();
                b.Nb("firebaseui-icon-done", "Signed in!".toString());
                k = setTimeout(function () {
                    b.da();
                    En(a, b, m, !0);
                }, 1e3);
                W(a, function () {
                    b && (b.da(), b.i());
                    clearTimeout(k);
                });
            },
            function (m) {
                b.da();
                b.i();
                if (!m.name || "cancel" != m.name) {
                    var n = U(m);
                    "auth/email-already-in-use" == m.code || "auth/credential-already-in-use" == m.code
                        ? (pm(nm, T(a)), pm(mm, T(a)))
                        : "auth/invalid-email" == m.code
                        ? ((n = "The email provided does not match the current sign-in session.".toString()), R("emailLinkConfirmation", a, g, d, po, null, n))
                        : V(a, g, c, n);
                }
            }
        );
        W(a, e);
    }
    P.emailLinkSignInCallback = mo;
    function so(a, b, c, d) {
        var e = M(b);
        Sn(
            a,
            b,
            c,
            function () {
                V(a, e, c);
            },
            function (f) {
                if (!f.name || "cancel" != f.name) {
                    var g = U(f);
                    f && "auth/network-request-failed" == f.code ? b.F(g) : (b.i(), V(a, e, c, g));
                }
            },
            d
        );
    }
    P.emailLinkSignInLinking = function (a, b, c) {
        var d = wm(T(a));
        xm(T(a));
        if (d) {
            var e = d.xa.providerId,
                f = new Vi(
                    c,
                    Pm(S(a), e),
                    function () {
                        so(a, f, c, d);
                    },
                    S(a).O(),
                    S(a).N()
                );
            f.render(b);
            Y(a, f);
        } else V(a, b);
    };
    P.emailLinkSignInSent = function (a, b, c, d, e) {
        var f = new Xi(
            c,
            function () {
                f.i();
                R("emailNotReceived", a, b, c, d, e);
            },
            function () {
                f.i();
                d();
            },
            S(a).O(),
            S(a).N()
        );
        f.render(b);
        Y(a, f);
    };
    P.emailMismatch = function (a, b, c) {
        var d = wm(T(a));
        if (d) {
            var e = new Yi(
                c.user.email,
                d.getEmail(),
                function () {
                    var f = e;
                    xm(T(a));
                    En(a, f, c);
                },
                function () {
                    var f = c.credential.providerId,
                        g = M(e);
                    e.i();
                    d.xa ? R("federatedLinking", a, g, d.getEmail(), f) : R("federatedSignIn", a, g, d.getEmail(), f);
                },
                S(a).O(),
                S(a).N()
            );
            e.render(b);
            Y(a, e);
        } else V(a, b);
    };
    P.emailNotReceived = function (a, b, c, d, e) {
        var f = new Zi(
            function () {
                Sn(
                    a,
                    f,
                    c,
                    d,
                    function (g) {
                        g = U(g);
                        f.F(g);
                    },
                    e
                );
            },
            function () {
                f.i();
                V(a, b, c);
            },
            S(a).O(),
            S(a).N()
        );
        f.render(b);
        Y(a, f);
    };
    P.federatedLinking = function (a, b, c, d, e) {
        var f = wm(T(a));
        if (f && f.xa) {
            var g = new $i(
                c,
                Pm(S(a), d),
                function () {
                    Kn(a, g, d, c);
                },
                S(a).O(),
                S(a).N()
            );
            g.render(b);
            Y(a, g);
            e && g.F(e);
        } else V(a, b);
    };
    P.federatedRedirect = function (a, b, c) {
        var d = new Oi();
        d.render(b);
        Y(a, d);
        b = Om(S(a))[0];
        Kn(a, d, b, c);
    };
    P.federatedSignIn = function (a, b, c, d, e) {
        var f = new $i(
            c,
            Pm(S(a), d),
            function () {
                Kn(a, f, d, c);
            },
            S(a).O(),
            S(a).N()
        );
        f.render(b);
        Y(a, f);
        e && f.F(e);
    };
    function to(a, b, c, d) {
        var e = b.zd();
        e
            ? W(
                  a,
                  b.Y(
                      u(a.Ch, a),
                      [c, e],
                      function (f) {
                          f = f.user.linkWithCredential(d).then(function (g) {
                              return En(a, b, { user: g.user, credential: d, operationType: g.operationType, additionalUserInfo: g.additionalUserInfo });
                          });
                          W(a, f);
                          return f;
                      },
                      function (f) {
                          if (!f.name || "cancel" != f.name)
                              switch (f.code) {
                                  case "auth/wrong-password":
                                      H(b.Ka(), !1);
                                      tg(b.Jd(), U(f));
                                      break;
                                  case "auth/too-many-requests":
                                      b.F(U(f));
                                      break;
                                  default:
                                      sl("signInWithEmailAndPassword: " + f.message, void 0), b.F(U(f));
                              }
                      }
                  )
              )
            : b.Ka().focus();
    }
    P.passwordLinking = function (a, b, c) {
        var d = wm(T(a));
        xm(T(a));
        var e = d && d.xa;
        if (e) {
            var f = new mj(
                c,
                function () {
                    to(a, f, c, e);
                },
                function () {
                    f.i();
                    R("passwordRecovery", a, b, c);
                },
                S(a).O(),
                S(a).N()
            );
            f.render(b);
            Y(a, f);
        } else V(a, b);
    };
    function uo(a, b) {
        var c = b.pa();
        if (c) {
            var d = M(b);
            W(
                a,
                b.Y(
                    u(a.o().sendPasswordResetEmail, a.o()),
                    [c],
                    function () {
                        b.i();
                        var e = new aj(
                            c,
                            function () {
                                e.i();
                                V(a, d);
                            },
                            S(a).O(),
                            S(a).N()
                        );
                        e.render(d);
                        Y(a, e);
                    },
                    function (e) {
                        H(b.A(), !1);
                        tg(b.ab(), U(e));
                    }
                )
            );
        } else b.A().focus();
    }
    P.passwordRecovery = function (a, b, c, d, e) {
        var f = new nj(
            function () {
                uo(a, f);
            },
            d
                ? void 0
                : function () {
                      f.i();
                      V(a, b);
                  },
            c,
            S(a).O(),
            S(a).N()
        );
        f.render(b);
        Y(a, f);
        e && f.F(e);
    };
    P.passwordSignIn = function (a, b, c, d) {
        var e = new pj(
            function () {
                On(a, e);
            },
            function () {
                var f = e.getEmail();
                e.i();
                R("passwordRecovery", a, b, f);
            },
            c,
            S(a).O(),
            S(a).N(),
            d
        );
        e.render(b);
        Y(a, e);
    };
    function vo(a, b) {
        var c = an(S(a)),
            d = b.pa(),
            e = null;
        c && (e = b.ng());
        var f = b.yd();
        if (d) {
            if (c)
                if (e) e = $b(e);
                else {
                    b.ac().focus();
                    return;
                }
            if (f) {
                var g = firebase.auth.EmailAuthProvider.credential(d, f);
                W(
                    a,
                    b.Y(
                        u(a.Dh, a),
                        [d, f],
                        function (k) {
                            var m = { user: k.user, credential: g, operationType: k.operationType, additionalUserInfo: k.additionalUserInfo };
                            return c
                                ? ((k = k.user.updateProfile({ displayName: e }).then(function () {
                                      return En(a, b, m);
                                  })),
                                  W(a, k),
                                  k)
                                : En(a, b, m);
                        },
                        function (k) {
                            if (!k.name || "cancel" != k.name) {
                                var m = U(k);
                                switch (k.code) {
                                    case "auth/email-already-in-use":
                                        return wo(a, b, d, k);
                                    case "auth/too-many-requests":
                                        m = "Too many account requests are coming from your IP address. Try again in a few minutes.".toString();
                                    case "auth/operation-not-allowed":
                                    case "auth/weak-password":
                                        H(b.za(), !1);
                                        tg(b.Id(), m);
                                        break;
                                    default:
                                        (k = "setAccountInfo: " + Vl(k)), sl(k, void 0), b.F(m);
                                }
                            }
                        }
                    )
                );
            } else b.za().focus();
        } else b.A().focus();
    }
    function wo(a, b, c, d) {
        function e() {
            var g = U(d);
            H(b.A(), !1);
            tg(b.ab(), g);
            b.A().focus();
        }
        var f = a
            .o()
            .fetchSignInMethodsForEmail(c)
            .then(
                function (g) {
                    g.length ? e() : ((g = M(b)), b.i(), R("passwordRecovery", a, g, c, !1, Ig().toString()));
                },
                function () {
                    e();
                }
            );
        W(a, f);
        return f;
    }
    P.passwordSignUp = function (a, b, c, d, e, f) {
        function g() {
            k.i();
            V(a, b);
        }
        var k = new qj(
            an(S(a)),
            function () {
                vo(a, k);
            },
            e ? void 0 : g,
            c,
            d,
            S(a).O(),
            S(a).N(),
            f
        );
        k.render(b);
        Y(a, k);
    };
    function xo(a, b, c, d) {
        function e(g) {
            b.Kd().focus();
            H(b.Kd(), !1);
            tg(b.Hg(), g);
        }
        var f = b.og();
        f
            ? (b.Nb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", "Verifying...".toString()),
              W(
                  a,
                  b.Y(
                      u(d.confirm, d),
                      [f],
                      function (g) {
                          b.da();
                          b.Nb("firebaseui-icon-done", "Verified!".toString());
                          var k = setTimeout(function () {
                              b.da();
                              b.i();
                              var m = { user: yo(a).currentUser, credential: null, operationType: g.operationType, additionalUserInfo: g.additionalUserInfo };
                              En(a, b, m, !0);
                          }, 1e3);
                          W(a, function () {
                              b && b.da();
                              clearTimeout(k);
                          });
                      },
                      function (g) {
                          if (g.name && "cancel" == g.name) b.da();
                          else {
                              var k = U(g);
                              switch (g.code) {
                                  case "auth/credential-already-in-use":
                                      b.da();
                                      break;
                                  case "auth/code-expired":
                                      g = M(b);
                                      b.da();
                                      b.i();
                                      R("phoneSignInStart", a, g, c, k);
                                      break;
                                  case "auth/missing-verification-code":
                                  case "auth/invalid-verification-code":
                                      b.da();
                                      e(k);
                                      break;
                                  default:
                                      b.da(), b.F(k);
                              }
                          }
                      }
                  )
              ))
            : e("Wrong code. Try again.".toString());
    }
    P.phoneSignInFinish = function (a, b, c, d, e, f) {
        var g = new rj(
            function () {
                g.i();
                R("phoneSignInStart", a, b, c);
            },
            function () {
                xo(a, g, c, e);
            },
            function () {
                g.i();
                V(a, b);
            },
            function () {
                g.i();
                R("phoneSignInStart", a, b, c);
            },
            Gh(c),
            d,
            S(a).O(),
            S(a).N()
        );
        g.render(b);
        Y(a, g);
        f && g.F(f);
    };
    function zo(a, b, c, d) {
        try {
            var e = b.Ig(rn);
        } catch (f) {
            return;
        }
        e
            ? pn
                ? (b.Nb("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", "Verifying...".toString()),
                  W(
                      a,
                      b.Y(
                          u(a.Ih, a),
                          [Gh(e), c],
                          function (f) {
                              var g = M(b);
                              b.Nb("firebaseui-icon-done", "Code sent!".toString());
                              var k = setTimeout(function () {
                                  b.da();
                                  b.i();
                                  R("phoneSignInFinish", a, g, e, 15, f);
                              }, 1e3);
                              W(a, function () {
                                  b && b.da();
                                  clearTimeout(k);
                              });
                          },
                          function (f) {
                              b.da();
                              if (!f.name || "cancel" != f.name) {
                                  grecaptcha.reset(sn);
                                  pn = null;
                                  var g = (f && f.message) || "";
                                  if (f.code)
                                      switch (f.code) {
                                          case "auth/too-many-requests":
                                              g = "This phone number has been used too many times".toString();
                                              break;
                                          case "auth/invalid-phone-number":
                                          case "auth/missing-phone-number":
                                              b.mb().focus();
                                              tg(b.Me(), Fg().toString());
                                              return;
                                          default:
                                              g = U(f);
                                      }
                                  b.F(g);
                              }
                          }
                      )
                  ))
                : qn
                ? tg(b.Ld(), "Solve the reCAPTCHA".toString())
                : !qn && d && b.C().click()
            : (b.mb().focus(), tg(b.Me(), Fg().toString()));
    }
    P.phoneSignInStart = function (a, b, c, d) {
        var e = Um(S(a)) || {};
        pn = null;
        qn = !(e && "invisible" === e.size);
        var f = Pn(a),
            g = Zm(S(a)),
            k = f ? Ym(S(a)) : null;
        g = (c && c.Dc) || (g && g.b) || null;
        c = (c && c.Oa) || k;
        (k = $m(S(a))) && Rd(k);
        rn = k ? new Md($m(S(a))) : Sd;
        var m = new sj(
            function (l) {
                zo(a, m, n, !(!l || !l.keyCode));
            },
            qn,
            f
                ? null
                : function () {
                      n.clear();
                      m.i();
                      V(a, b);
                  },
            S(a).O(),
            S(a).N(),
            f,
            rn,
            g,
            c
        );
        m.render(b);
        Y(a, m);
        d && m.F(d);
        e.callback = function (l) {
            m.Ld() && sg(m.Ld());
            pn = l;
            qn || zo(a, m, n);
        };
        e["expired-callback"] = function () {
            pn = null;
        };
        var n = new firebase.auth.RecaptchaVerifier(qn ? m.Jg() : m.C(), e, yo(a).app);
        W(
            a,
            m.Y(
                u(n.render, n),
                [],
                function (l) {
                    sn = l;
                },
                function (l) {
                    (l.name && "cancel" == l.name) || ((l = U(l)), m.i(), V(a, b, void 0, l));
                }
            )
        );
    };
    P.prefilledEmailSignIn = function (a, b, c) {
        var d = new Oi();
        d.render(b);
        Y(a, d);
        W(
            a,
            d.Y(
                u(a.o().fetchSignInMethodsForEmail, a.o()),
                [c],
                function (e) {
                    d.i();
                    var f = !(!An(a) || !Zn(a));
                    Bn(a, b, e, c, void 0, void 0, f);
                },
                function (e) {
                    e = U(e);
                    d.i();
                    R("signIn", a, b, c, e);
                }
            )
        );
    };
    P.providerSignIn = function (a, b, c, d) {
        var e = new uj(
            function (f) {
                f == firebase.auth.EmailAuthProvider.PROVIDER_ID ? (e.i(), Qn(a, b, d)) : f == firebase.auth.PhoneAuthProvider.PROVIDER_ID ? (e.i(), R("phoneSignInStart", a, b)) : "anonymous" == f ? Mn(a, e) : Kn(a, e, f, d);
                X(a);
                a.Md.cancel();
            },
            Qm(S(a)),
            S(a).O(),
            S(a).N()
        );
        e.render(b);
        Y(a, e);
        c && e.F(c);
        Ao(a);
    };
    P.sendEmailLinkForSignIn = function (a, b, c, d) {
        var e = new Pi();
        e.render(b);
        Y(a, e);
        Sn(a, e, c, d, function (f) {
            e.i();
            f = U(f);
            R("signIn", a, b, c, f);
        });
    };
    P.signIn = function (a, b, c, d) {
        var e = An(a),
            f = e && !mn(S(a)),
            g = new yj(
                function () {
                    var k = g,
                        m = k.pa() || "";
                    m && Rn(a, k, m);
                },
                f
                    ? null
                    : function () {
                          g.i();
                          V(a, b, c);
                      },
                c,
                S(a).O(),
                S(a).N(),
                e
            );
        g.render(b);
        Y(a, g);
        d && g.F(d);
    };
    P.unsupportedProvider = function (a, b, c) {
        var d = new Aj(
            c,
            function () {
                d.i();
                R("passwordRecovery", a, b, c);
            },
            function () {
                d.i();
                V(a, b, c);
            },
            S(a).O(),
            S(a).N()
        );
        d.render(b);
        Y(a, d);
    };
    function Bo(a, b) {
        this.De = !1;
        var c = Co(b);
        if (Do[c]) throw Error('An AuthUI instance already exists for the key "' + c + '"');
        Do[c] = this;
        this.wa = a;
        this.ef = null;
        this.Ud = !1;
        Eo(this.wa);
        this.Pa = firebase.initializeApp({ apiKey: a.app.options.apiKey, authDomain: a.app.options.authDomain }, a.app.name + "-firebaseui-temp").auth();
        Eo(this.Pa);
        this.Pa.setPersistence && this.Pa.setPersistence(firebase.auth.Auth.Persistence.SESSION);
        this.dg = b;
        this.g = new Fm();
        this.K = this.ld = this.nb = this.xc = this.gd = null;
        this.cb = [];
        this.re = !1;
        this.Md = Qk.Hd();
        this.$a = this.rc = null;
        this.Ef = this.hc = !1;
    }
    function Eo(a) {
        a && a.INTERNAL && a.INTERNAL.logFramework && a.INTERNAL.logFramework("FirebaseUI-web");
    }
    var Do = {};
    function Co(a) {
        return a || "[DEFAULT]";
    }
    Bo.prototype.getRedirectResult = function () {
        X(this);
        if (!this.nb) {
            var a = this;
            this.nb = Fo(this, function (b) {
                return b && !wm(T(a))
                    ? G(
                          yo(a)
                              .getRedirectResult()
                              .then(
                                  function (c) {
                                      return c;
                                  },
                                  function (c) {
                                      if (c && "auth/email-already-in-use" == c.code && c.email && c.credential) throw c;
                                      return Go(a, c);
                                  }
                              )
                      )
                    : G(
                          a
                              .o()
                              .getRedirectResult()
                              .then(function (c) {
                                  return Km(S(a)) && !c.user && a.$a && !a.$a.isAnonymous ? yo(a).getRedirectResult() : c;
                              })
                      );
            });
        }
        return this.nb;
    };
    function Y(a, b) {
        X(a);
        a.K = b;
    }
    var Ho = null;
    function Tn() {
        return Ho;
    }
    h = Bo.prototype;
    h.o = function () {
        X(this);
        return this.Pa;
    };
    function yo(a) {
        X(a);
        return a.wa;
    }
    function T(a) {
        X(a);
        return a.dg;
    }
    function Zn(a) {
        X(a);
        return a.gd ? a.gd.emailHint : void 0;
    }
    h.Te = function () {
        X(this);
        return !!zm(T(this)) || Io(wk());
    };
    function Io(a) {
        a = new Kj(a);
        return "signIn" === (a.W.V.get(O.Rf) || null) && !!a.W.V.get(O.pe);
    }
    h.start = function (a, b) {
        Jo(this, a, b);
    };
    function Jo(a, b, c, d) {
        X(a);
        "undefined" !== typeof a.wa.languageCode && (a.ef = a.wa.languageCode);
        var e = "en".replace(/_/g, "-");
        a.wa.languageCode = e;
        a.Pa.languageCode = e;
        a.Ud = !0;
        "undefined" !== typeof a.wa.tenantId && (a.Pa.tenantId = a.wa.tenantId);
        a.Mb(c);
        a.gd = d || null;
        var f = q.document;
        a.rc
            ? a.rc.then(function () {
                  "complete" == f.readyState
                      ? Ko(a, b)
                      : Ne(window, "load", function () {
                            Ko(a, b);
                        });
              })
            : "complete" == f.readyState
            ? Ko(a, b)
            : Ne(window, "load", function () {
                  Ko(a, b);
              });
    }
    function Ko(a, b) {
        var c = vk(b, "Could not find the FirebaseUI widget element on the page.");
        c.setAttribute("lang", "en".replace(/_/g, "-"));
        if (Ho) {
            var d = Ho;
            X(d);
            wm(T(d)) && xl("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset.");
            Ho.reset();
        }
        Ho = a;
        a.ld = c;
        Lo(a, c);
        Rl(new Sl()) && Rl(new Tl())
            ? Yn(a, b)
            : ((b = vk(b, "Could not find the FirebaseUI widget element on the page.")), (c = new lj("The browser you are using does not support Web Storage. Please try again in a different browser.".toString())), c.render(b), Y(a, c));
        b = a.K && "blank" == a.K.Yc && en(S(a));
        zm(T(a)) && !b && ((b = zm(T(a))), a.ee(b.ob()), pm(im, T(a)));
    }
    function Fo(a, b) {
        if (a.hc) return b(Mo(a));
        W(a, function () {
            a.hc = !1;
        });
        if (Km(S(a))) {
            var c = new F(function (d) {
                W(
                    a,
                    a.wa.onAuthStateChanged(function (e) {
                        a.$a = e;
                        a.hc || ((a.hc = !0), d(b(Mo(a))));
                    })
                );
            });
            W(a, c);
            return c;
        }
        a.hc = !0;
        return b(null);
    }
    function Mo(a) {
        X(a);
        return Km(S(a)) && a.$a && a.$a.isAnonymous ? a.$a : null;
    }
    function W(a, b) {
        X(a);
        if (b) {
            a.cb.push(b);
            var c = function () {
                Sa(a.cb, function (d) {
                    return d == b;
                });
            };
            "function" != typeof b && b.then(c, c);
        }
    }
    h.xg = function () {
        X(this);
        this.re = !0;
    };
    function No(a) {
        X(a);
        var b;
        (b = a.re) || ((a = S(a)), (a = Xm(a, firebase.auth.GoogleAuthProvider.PROVIDER_ID)), (b = !(!a || "select_account" !== a.prompt)));
        return b;
    }
    function Fn(a) {
        "undefined" !== typeof a.wa.languageCode && a.Ud && ((a.Ud = !1), (a.wa.languageCode = a.ef));
    }
    h.ee = function (a) {
        this.wa.tenantId = a;
        this.Pa.tenantId = a;
    };
    h.ob = function () {
        return this.Pa.tenantId || null;
    };
    h.reset = function () {
        X(this);
        var a = this;
        this.ld && this.ld.removeAttribute("lang");
        this.xc && this.xc.unregister();
        Fn(this);
        this.gd = null;
        $n();
        pm(im, T(this));
        X(this);
        this.Md.cancel();
        this.nb = G({ user: null, credential: null });
        Ho == this && (Ho = null);
        this.ld = null;
        for (var b = 0; b < this.cb.length; b++)
            if ("function" == typeof this.cb[b]) this.cb[b]();
            else this.cb[b].cancel && this.cb[b].cancel();
        this.cb = [];
        xm(T(this));
        this.K && (this.K.i(), (this.K = null));
        this.Ec = null;
        this.Pa &&
            (this.rc = lo(this).then(
                function () {
                    a.rc = null;
                },
                function () {
                    a.rc = null;
                }
            ));
    };
    function Lo(a, b) {
        a.Ec = null;
        a.xc = new Wh(b);
        a.xc.register();
        Me(a.xc, "pageEnter", function (c) {
            c = c && c.pageId;
            if (a.Ec != c) {
                var d = S(a);
                (d = jn(d).uiChanged || null) && d(a.Ec, c);
                a.Ec = c;
            }
        });
    }
    h.Mb = function (a) {
        X(this);
        this.g.Mb(a);
        !this.Ef && kn(S(this)) && (xl("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."), (this.Ef = !0));
    };
    function S(a) {
        X(a);
        return a.g;
    }
    h.signIn = function () {
        X(this);
        var a = S(this),
            b = Qj(a.g, "widgetUrl");
        var c = Im(a, b);
        S(this).g.get("popupMode")
            ? ((a = (window.screen.availHeight - 600) / 2),
              (b = (window.screen.availWidth - 500) / 2),
              (c = c || "about:blank"),
              (a = { width: 500, height: 600, top: 0 < a ? a : 0, left: 0 < b ? b : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }),
              (a.target = a.target || c.target || "google_popup"),
              (a.width = a.width || 690),
              (a.height = a.height || 500),
              (a = qe(c, a)) && a.focus())
            : Yb(window.location, c);
    };
    function X(a) {
        if (a.De) throw Error("AuthUI instance is deleted!");
    }
    h.delete = function () {
        var a = this;
        X(this);
        return this.Pa.app.delete().then(function () {
            var b = Co(T(a));
            delete Do[b];
            a.reset();
            a.De = !0;
        });
    };
    function Ao(a) {
        X(a);
        try {
            a.Md.show(Sm(S(a)), No(a)).then(function (b) {
                return a.K ? Nn(a, a.K, b) : !1;
            });
        } catch (b) {}
    }
    h.sendSignInLinkToEmail = function (a, b) {
        X(this);
        var c = this,
            d = yk();
        if (!bn(S(this))) return If(Error("Email link sign-in should be enabled to trigger email sending."));
        var e = dn(S(this)),
            f = new Kj(e.url);
        Lj(f, d);
        b && b.xa && (Dm(d, b, T(this)), Oj(f, b.xa.providerId));
        Mj(f, cn(S(this)));
        return Fo(this, function (g) {
            g && ((g = g.uid) ? Ec(f.W, O.nd, g) : f.W.removeParameter(O.nd));
            e.url = f.toString();
            return c.o().sendSignInLinkToEmail(a, e);
        }).then(
            function () {
                var g = T(c),
                    k = {};
                k.email = a;
                qm(mm, qk(d, JSON.stringify(k)), g);
            },
            function (g) {
                pm(nm, T(c));
                pm(mm, T(c));
                throw g;
            }
        );
    };
    function no(a, b) {
        var c = Nj(new Kj(b));
        if (!c) return G(null);
        b = new F(function (d, e) {
            var f = yo(a).onAuthStateChanged(function (g) {
                f();
                g && g.isAnonymous && g.uid === c ? d(g) : g && g.isAnonymous && g.uid !== c ? e(Error("anonymous-user-mismatch")) : e(Error("anonymous-user-not-found"));
            });
            W(a, f);
        });
        W(a, b);
        return b;
    }
    function ro(a, b, c, d, e) {
        X(a);
        var f = e || null,
            g = firebase.auth.EmailAuthProvider.credentialWithLink(c, d);
        c = f
            ? a
                  .o()
                  .signInWithEmailLink(c, d)
                  .then(function (k) {
                      return k.user.linkWithCredential(f);
                  })
                  .then(function () {
                      return lo(a);
                  })
                  .then(function () {
                      return Go(a, { code: "auth/email-already-in-use" }, f);
                  })
            : a
                  .o()
                  .fetchSignInMethodsForEmail(c)
                  .then(function (k) {
                      return k.length ? Go(a, { code: "auth/email-already-in-use" }, g) : b.linkWithCredential(g);
                  });
        W(a, c);
        return c;
    }
    h.signInWithEmailLink = function (a, b, c) {
        X(this);
        var d = c || null,
            e,
            f = this;
        a = this.o()
            .signInWithEmailLink(a, b)
            .then(function (g) {
                e = { user: g.user, credential: null, operationType: g.operationType, additionalUserInfo: g.additionalUserInfo };
                if (d)
                    return g.user.linkWithCredential(d).then(function (k) {
                        e = { user: k.user, credential: d, operationType: e.operationType, additionalUserInfo: k.additionalUserInfo };
                    });
            })
            .then(function () {
                lo(f);
            })
            .then(function () {
                return yo(f).updateCurrentUser(e.user);
            })
            .then(function () {
                e.user = yo(f).currentUser;
                return e;
            });
        W(this, a);
        return a;
    };
    function $n() {
        var a = wk();
        if (Io(a)) {
            a = new Kj(a);
            for (var b in O) O.hasOwnProperty(b) && a.W.removeParameter(O[b]);
            b = { state: "signIn", mode: "emailLink", operation: "clear" };
            var c = q.document.title;
            q.history && q.history.replaceState && q.history.replaceState(b, c, a.toString());
        }
    }
    h.Hh = function (a, b) {
        X(this);
        var c = this;
        return this.o()
            .signInWithEmailAndPassword(a, b)
            .then(function (d) {
                return Fo(c, function (e) {
                    return e
                        ? lo(c).then(function () {
                              return Go(c, { code: "auth/email-already-in-use" }, firebase.auth.EmailAuthProvider.credential(a, b));
                          })
                        : d;
                });
            });
    };
    h.Dh = function (a, b) {
        X(this);
        var c = this;
        return Fo(this, function (d) {
            if (d) {
                var e = firebase.auth.EmailAuthProvider.credential(a, b);
                return d.linkWithCredential(e);
            }
            return c.o().createUserWithEmailAndPassword(a, b);
        });
    };
    h.Gh = function (a) {
        X(this);
        var b = this;
        return Fo(this, function (c) {
            return c
                ? c.linkWithCredential(a).then(
                      function (d) {
                          return d;
                      },
                      function (d) {
                          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
                          return Go(b, d, a);
                      }
                  )
                : b.o().signInWithCredential(a);
        });
    };
    function Ln(a, b) {
        X(a);
        return Fo(a, function (c) {
            return c && !wm(T(a))
                ? c.linkWithPopup(b).then(
                      function (d) {
                          return d;
                      },
                      function (d) {
                          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
                          return Go(a, d);
                      }
                  )
                : a.o().signInWithPopup(b);
        });
    }
    h.Jh = function (a) {
        X(this);
        var b = this,
            c = this.nb;
        this.nb = null;
        return Fo(this, function (d) {
            return d && !wm(T(b)) ? d.linkWithRedirect(a) : b.o().signInWithRedirect(a);
        }).then(
            function () {},
            function (d) {
                b.nb = c;
                throw d;
            }
        );
    };
    h.Ih = function (a, b) {
        X(this);
        var c = this;
        return Fo(this, function (d) {
            return d
                ? d.linkWithPhoneNumber(a, b).then(function (e) {
                      return new Al(e, function (f) {
                          if ("auth/credential-already-in-use" == f.code) return Go(c, f);
                          throw f;
                      });
                  })
                : yo(c)
                      .signInWithPhoneNumber(a, b)
                      .then(function (e) {
                          return new Al(e);
                      });
        });
    };
    h.Fh = function () {
        X(this);
        return yo(this).signInAnonymously();
    };
    function Hn(a, b) {
        X(a);
        return Fo(a, function (c) {
            if (a.$a && !a.$a.isAnonymous && Km(S(a)) && !a.o().currentUser)
                return lo(a).then(function () {
                    "password" == b.credential.providerId && (b.credential = null);
                    return b;
                });
            if (c)
                return lo(a)
                    .then(function () {
                        return c.linkWithCredential(b.credential);
                    })
                    .then(
                        function (d) {
                            b.user = d.user;
                            b.credential = d.credential;
                            b.operationType = d.operationType;
                            b.additionalUserInfo = d.additionalUserInfo;
                            return b;
                        },
                        function (d) {
                            if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
                            return Go(a, d, b.credential);
                        }
                    );
            if (!b.user) throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');
            return lo(a)
                .then(function () {
                    return yo(a).updateCurrentUser(b.user);
                })
                .then(function () {
                    b.user = yo(a).currentUser;
                    b.operationType = "signIn";
                    b.credential && b.credential.providerId && "password" == b.credential.providerId && (b.credential = null);
                    return b;
                });
        });
    }
    h.Ch = function (a, b) {
        X(this);
        return this.o().signInWithEmailAndPassword(a, b);
    };
    function lo(a) {
        X(a);
        return a.o().signOut();
    }
    function Go(a, b, c) {
        X(a);
        if (b && b.code && ("auth/email-already-in-use" == b.code || "auth/credential-already-in-use" == b.code)) {
            var d = Lm(S(a));
            return G()
                .then(function () {
                    return d(new Em("anonymous-upgrade-merge-conflict", null, c || b.credential));
                })
                .then(function () {
                    a.K && (a.K.i(), (a.K = null));
                    throw b;
                });
        }
        return If(b);
    }
    function Oo(a) {
        this.g = new Pj();
        this.g.define("authDomain");
        this.g.define("displayMode", "optionFirst");
        this.g.define("tenants");
        this.g.define("callbacks");
        this.g.define("tosUrl");
        this.g.define("privacyPolicyUrl");
        this.Mb(a);
    }
    Oo.prototype.Mb = function (a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                try {
                    this.g.update(b, a[b]);
                } catch (c) {
                    sl('Invalid config: "' + b + '"', void 0);
                }
    };
    function Po(a) {
        a = a.g.get("displayMode");
        for (var b in Qo) if (Qo[b] === a) return Qo[b];
        return "optionFirst";
    }
    Oo.prototype.O = function () {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        a && !b && xl("Privacy Policy URL is missing, the link will not be displayed.");
        if (a && b) {
            if ("function" === typeof a) return a;
            if ("string" === typeof a)
                return function () {
                    uk(a);
                };
        }
        return null;
    };
    Oo.prototype.N = function () {
        var a = this.g.get("tosUrl") || null,
            b = this.g.get("privacyPolicyUrl") || null;
        b && !a && xl("Terms of Service URL is missing, the link will not be displayed.");
        if (a && b) {
            if ("function" === typeof b) return b;
            if ("string" === typeof b)
                return function () {
                    uk(b);
                };
        }
        return null;
    };
    function Ro(a, b) {
        a = a.g.get("tenants");
        if (!a || (!a.hasOwnProperty(b) && !a.hasOwnProperty("*"))) throw Error("Invalid tenant configuration!");
    }
    function So(a, b, c) {
        a = a.g.get("tenants");
        if (!a) throw Error("Invalid tenant configuration!");
        var d = [];
        a = a[b] || a["*"];
        if (!a) return sl("Invalid tenant configuration: " + (b + " is not configured!"), void 0), d;
        b = a.signInOptions;
        if (!b) throw Error("Invalid tenant configuration: signInOptions are invalid!");
        b.forEach(function (e) {
            if ("string" === typeof e) d.push(e);
            else if ("string" === typeof e.provider) {
                var f = e.hd;
                f && c ? (f instanceof RegExp ? f : new RegExp("@" + f.replace(".", "\\.") + "$")).test(c) && d.push(e.provider) : d.push(e.provider);
            } else (e = "Invalid tenant configuration: signInOption " + (JSON.stringify(e) + " is invalid!")), sl(e, void 0);
        });
        return d;
    }
    function To(a, b, c) {
        a = Uo(a, b);
        (b = a.signInOptions) &&
            c &&
            ((b = b.filter(function (d) {
                return "string" === typeof d ? c.includes(d) : c.includes(d.provider);
            })),
            (a.signInOptions = b));
        return a;
    }
    function Uo(a, b) {
        var c = Vo;
        var d = void 0 === d ? {} : d;
        Ro(a, b);
        a = a.g.get("tenants");
        return zk(a[b] || a["*"], c, d);
    }
    var Vo = ["immediateFederatedRedirect", "privacyPolicyUrl", "signInFlow", "signInOptions", "tosUrl"],
        Qo = { $h: "optionFirst", Yh: "identifierFirst" };
    function Wo(a, b) {
        var c = this;
        this.ib = vk(a);
        this.U = {};
        Object.keys(b).forEach(function (d) {
            c.U[d] = new Oo(b[d]);
        });
        this.Ue = this.K = this.Ea = this.ua = this.xb = this.Wa = null;
        Object.defineProperty(this, "languageCode", {
            get: function () {
                return this.Ue;
            },
            set: function (d) {
                this.Ue = d || null;
            },
            enumerable: !1,
        });
    }
    h = Wo.prototype;
    h.uh = function (a, b) {
        var c = this;
        Xo(this);
        var d = a.apiKey;
        return new F(function (e, f) {
            if (c.U.hasOwnProperty(d)) {
                var g = jn(c.U[d]).selectTenantUiHidden || null;
                if ("optionFirst" === Po(c.U[d])) {
                    var k = [];
                    b.forEach(function (l) {
                        l = l || "_";
                        var r = c.U[d].g.get("tenants");
                        if (!r) throw Error("Invalid tenant configuration!");
                        (r = r[l] || r["*"])
                            ? (l = { tenantId: "_" !== l ? l : null, ra: r.fullLabel || null, displayName: r.displayName, fc: r.iconUrl, Ub: r.buttonColor })
                            : (sl("Invalid tenant configuration: " + (l + " is not configured!"), void 0), (l = null));
                        l && k.push(l);
                    });
                    var m = function (l) {
                        l = { tenantId: l, providerIds: So(c.U[d], l || "_") };
                        e(l);
                    };
                    if (1 === k.length) {
                        m(k[0].tenantId);
                        return;
                    }
                    c.K = new wj(
                        function (l) {
                            Xo(c);
                            g && g();
                            m(l);
                        },
                        k,
                        c.U[d].O(),
                        c.U[d].N()
                    );
                } else
                    c.K = new tj(
                        function () {
                            var l = c.K.pa();
                            if (l) {
                                for (var r = 0; r < b.length; r++) {
                                    var z = So(c.U[d], b[r] || "_", l);
                                    if (0 !== z.length) {
                                        l = { tenantId: b[r], providerIds: z, email: l };
                                        Xo(c);
                                        g && g();
                                        e(l);
                                        return;
                                    }
                                }
                                c.K.F(Jg({ code: "no-matching-tenant-for-email" }).toString());
                            }
                        },
                        c.U[d].O(),
                        c.U[d].N()
                    );
                c.K.render(c.ib);
                (f = jn(c.U[d]).selectTenantUiShown || null) && f();
            } else {
                var n = Error("Invalid project configuration: API key is invalid!");
                n.code = "invalid-configuration";
                c.handleError(n);
                f(n);
            }
        });
    };
    h.o = function (a, b) {
        if (!this.U.hasOwnProperty(a)) throw Error("Invalid project configuration: API key is invalid!");
        var c = b || void 0;
        Ro(this.U[a], b || "_");
        try {
            this.xb = firebase.app(c).auth();
        } catch (e) {
            var d = this.U[a].g.get("authDomain");
            if (!d) throw Error("Invalid project configuration: authDomain is required!");
            a = firebase.initializeApp({ apiKey: a, authDomain: d }, c);
            a.auth().tenantId = b;
            this.xb = a.auth();
        }
        return this.xb;
    };
    h.Eh = function (a, b) {
        var c = this;
        return new F(function (d, e) {
            function f(r, z) {
                c.Wa = new Bo(a);
                Jo(c.Wa, c.ib, r, z);
            }
            var g = a.app.options.apiKey;
            c.U.hasOwnProperty(g) || e(Error("Invalid project configuration: API key is invalid!"));
            var k = To(c.U[g], a.tenantId || "_", b && b.providerIds);
            Xo(c);
            e = {
                signInSuccessWithAuthResult: function (r) {
                    d(r);
                    return !1;
                },
            };
            var m = jn(c.U[g]).signInUiShown || null,
                n = !1;
            e.uiChanged = function (r, z) {
                null === r && "callback" === z
                    ? ((r = ge("firebaseui-id-page-callback", c.ib)) && sg(r), (c.ua = new zj()), c.ua.render(c.ib))
                    : n || (null === r && "spinner" === z) || "blank" === z || (c.ua && (c.ua.i(), (c.ua = null)), (n = !0), m && m(a.tenantId));
            };
            k.callbacks = e;
            k.credentialHelper = "none";
            var l;
            b && b.email && (l = { emailHint: b.email });
            c.Wa
                ? c.Wa.delete().then(function () {
                      f(k, l);
                  })
                : f(k, l);
        });
    };
    h.reset = function () {
        var a = this;
        return G()
            .then(function () {
                a.Wa && a.Wa.delete();
            })
            .then(function () {
                a.Wa = null;
                Xo(a);
            });
    };
    h.yh = function () {
        var a = this;
        this.ua ||
            this.Ea ||
            (this.Ea = window.setTimeout(function () {
                Xo(a);
                a.ua = new zj();
                a.K = a.ua;
                a.ua.render(a.ib);
                a.Ea = null;
            }, 500));
    };
    h.Qe = function () {
        window.clearTimeout(this.Ea);
        this.Ea = null;
        this.ua && (this.ua.i(), (this.ua = null));
    };
    h.qg = function () {
        Xo(this);
        this.K = new gj();
        this.K.render(this.ib);
        return G();
    };
    function Xo(a) {
        a.Wa && a.Wa.reset();
        a.Qe();
        a.K && a.K.i();
    }
    h.handleError = function (a) {
        var b = this,
            c = Jg({ code: a.code }).toString() || a.message;
        Xo(this);
        var d;
        a.retry &&
            "function" === typeof a.retry &&
            (d = function () {
                b.reset();
                a.retry();
            });
        this.K = new kj(c, d);
        this.K.render(this.ib);
    };
    h.kh = function (a) {
        var b = this;
        return G()
            .then(function () {
                var c = b.xb && b.xb.app.options.apiKey;
                if (!b.U.hasOwnProperty(c)) throw Error("Invalid project configuration: API key is invalid!");
                Ro(b.U[c], a.tenantId || "_");
                if (!b.xb.currentUser || b.xb.currentUser.uid !== a.uid) throw Error("The user being processed does not match the signed in user!");
                return (c = jn(b.U[c]).beforeSignInSuccess || null) ? c(a) : a;
            })
            .then(function (c) {
                if (c.uid !== a.uid) throw Error("User with mismatching UID returned.");
                return c;
            });
    };
    w("firebaseui.auth.FirebaseUiHandler", Wo);
    w("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant", Wo.prototype.uh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.getAuth", Wo.prototype.o);
    w("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn", Wo.prototype.Eh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.reset", Wo.prototype.reset);
    w("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar", Wo.prototype.yh);
    w("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar", Wo.prototype.Qe);
    w("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut", Wo.prototype.qg);
    w("firebaseui.auth.FirebaseUiHandler.prototype.handleError", Wo.prototype.handleError);
    w("firebaseui.auth.FirebaseUiHandler.prototype.processUser", Wo.prototype.kh);
    w("firebaseui.auth.AuthUI", Bo);
    w("firebaseui.auth.AuthUI.getInstance", function (a) {
        a = Co(a);
        return Do[a] ? Do[a] : null;
    });
    w("firebaseui.auth.AuthUI.prototype.disableAutoSignIn", Bo.prototype.xg);
    w("firebaseui.auth.AuthUI.prototype.start", Bo.prototype.start);
    w("firebaseui.auth.AuthUI.prototype.setConfig", Bo.prototype.Mb);
    w("firebaseui.auth.AuthUI.prototype.signIn", Bo.prototype.signIn);
    w("firebaseui.auth.AuthUI.prototype.reset", Bo.prototype.reset);
    w("firebaseui.auth.AuthUI.prototype.delete", Bo.prototype.delete);
    w("firebaseui.auth.AuthUI.prototype.isPendingRedirect", Bo.prototype.Te);
    w("firebaseui.auth.AuthUIError", Em);
    w("firebaseui.auth.AuthUIError.prototype.toJSON", Em.prototype.toJSON);
    w("firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM", "accountchooser.com");
    w("firebaseui.auth.CredentialHelper.GOOGLE_YOLO", "googleyolo");
    w("firebaseui.auth.CredentialHelper.NONE", "none");
    w("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID", "anonymous");
    F.prototype["catch"] = F.prototype.Pb;
    F.prototype["finally"] =
        F.prototype.Lh; /*

 Copyright 2015 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
    var Z = { Af: function () {}, Bf: function () {}, Cf: function () {}, je: function () {}, kf: function () {}, register: function () {}, Ie: function () {} };
    Z = (function () {
        function a(l, r) {
            for (var z = 0; z < m.length; z++) if (m[z].className === l) return "undefined" !== typeof r && (m[z] = r), m[z];
            return !1;
        }
        function b(l) {
            l = l.getAttribute("data-upgraded");
            return null === l ? [""] : l.split(",");
        }
        function c(l, r) {
            return -1 !== b(l).indexOf(r);
        }
        function d(l, r, z) {
            if ("CustomEvent" in window && "function" === typeof window.CustomEvent) return new CustomEvent(l, { bubbles: r, cancelable: z });
            var Q = document.createEvent("Events");
            Q.initEvent(l, r, z);
            return Q;
        }
        function e(l, r) {
            if ("undefined" === typeof l && "undefined" === typeof r) for (l = 0; l < m.length; l++) e(m[l].className, m[l].ya);
            else {
                if ("undefined" === typeof r) {
                    var z = a(l);
                    z && (r = z.ya);
                }
                r = document.querySelectorAll("." + r);
                for (z = 0; z < r.length; z++) f(r[z], l);
            }
        }
        function f(l, r) {
            if (!("object" === typeof l && l instanceof Element)) throw Error("Invalid argument provided to upgrade MDL element.");
            var z = d("mdl-componentupgrading", !0, !0);
            l.dispatchEvent(z);
            if (!z.defaultPrevented) {
                z = b(l);
                var Q = [];
                if (r) c(l, r) || Q.push(a(r));
                else {
                    var ab = l.classList;
                    m.forEach(function ($e) {
                        ab.contains($e.ya) && -1 === Q.indexOf($e) && !c(l, $e.className) && Q.push($e);
                    });
                }
                r = 0;
                for (var ra = Q.length, ka; r < ra; r++) {
                    if ((ka = Q[r])) {
                        z.push(ka.className);
                        l.setAttribute("data-upgraded", z.join(","));
                        var Mb = new ka.pg(l);
                        Mb.mdlComponentConfigInternal_ = ka;
                        n.push(Mb);
                        for (var Xg = 0, Yo = ka.xd.length; Xg < Yo; Xg++) ka.xd[Xg](l);
                        ka.zb && (l[ka.className] = Mb);
                    } else throw Error("Unable to find a registered component for the given class.");
                    ka = d("mdl-componentupgraded", !0, !1);
                    l.dispatchEvent(ka);
                }
            }
        }
        function g(l) {
            Array.isArray(l) || (l = l instanceof Element ? [l] : Array.prototype.slice.call(l));
            for (var r = 0, z = l.length, Q; r < z; r++) (Q = l[r]), Q instanceof HTMLElement && (f(Q), 0 < Q.children.length && g(Q.children));
        }
        function k(l) {
            if (l) {
                n.splice(n.indexOf(l), 1);
                var r = l.f.getAttribute("data-upgraded").split(",");
                r.splice(r.indexOf(l.mdlComponentConfigInternal_.Bb), 1);
                l.f.setAttribute("data-upgraded", r.join(","));
                r = d("mdl-componentdowngraded", !0, !1);
                l.f.dispatchEvent(r);
            }
        }
        var m = [],
            n = [];
        return {
            Af: e,
            Bf: f,
            Cf: g,
            je: function () {
                for (var l = 0; l < m.length; l++) e(m[l].className);
            },
            kf: function (l, r) {
                (l = a(l)) && l.xd.push(r);
            },
            register: function (l) {
                var r = !0;
                if ("undefined" !== typeof l.zb || "undefined" !== typeof l.widget) r = l.zb || l.widget;
                var z = { pg: l.constructor || l.constructor, className: l.Bb || l.classAsString, ya: l.ya || l.cssClass, zb: r, xd: [] };
                m.forEach(function (Q) {
                    if (Q.ya === z.ya) throw Error("The provided cssClass has already been registered: " + Q.ya);
                    if (Q.className === z.className) throw Error("The provided className has already been registered");
                });
                if (l.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_")) throw Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");
                a(l.Bb, z) || m.push(z);
            },
            Ie: function (l) {
                function r(Q) {
                    n.filter(function (ab) {
                        return ab.f === Q;
                    }).forEach(k);
                }
                if (l instanceof Array || l instanceof NodeList) for (var z = 0; z < l.length; z++) r(l[z]);
                else if (l instanceof Node) r(l);
                else throw Error("Invalid argument provided to downgrade MDL nodes.");
            },
        };
    })();
    Z.upgradeDom = Z.Af;
    Z.upgradeElement = Z.Bf;
    Z.upgradeElements = Z.Cf;
    Z.upgradeAllRegistered = Z.je;
    Z.registerUpgradedCallback = Z.kf;
    Z.register = Z.register;
    Z.downgradeElements = Z.Ie;
    window.componentHandler = Z;
    window.addEventListener("load", function () {
        "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach && (document.documentElement.classList.add("mdl-js"), Z.je());
    });
    (function () {
        function a(b) {
            this.f = b;
            this.init();
        }
        window.MaterialButton = a;
        a.prototype.Qa = {};
        a.prototype.B = { Uf: "mdl-js-ripple-effect", Tf: "mdl-button__ripple-container", Sf: "mdl-ripple" };
        a.prototype.te = function (b) {
            b && this.f.blur();
        };
        a.prototype.disable = function () {
            this.f.disabled = !0;
        };
        a.prototype.disable = a.prototype.disable;
        a.prototype.enable = function () {
            this.f.disabled = !1;
        };
        a.prototype.enable = a.prototype.enable;
        a.prototype.init = function () {
            if (this.f) {
                if (this.f.classList.contains(this.B.Uf)) {
                    var b = document.createElement("span");
                    b.classList.add(this.B.Tf);
                    this.$d = document.createElement("span");
                    this.$d.classList.add(this.B.Sf);
                    b.appendChild(this.$d);
                    this.kg = this.te.bind(this);
                    this.$d.addEventListener("mouseup", this.kg);
                    this.f.appendChild(b);
                }
                this.ue = this.te.bind(this);
                this.f.addEventListener("mouseup", this.ue);
                this.f.addEventListener("mouseleave", this.ue);
            }
        };
        Z.register({ constructor: a, Bb: "MaterialButton", ya: "mdl-js-button", zb: !0 });
    })();
    (function () {
        function a(b) {
            this.f = b;
            this.init();
        }
        window.MaterialProgress = a;
        a.prototype.Qa = {};
        a.prototype.B = { Jf: "mdl-progress__indeterminate" };
        a.prototype.wh = function (b) {
            this.f.classList.contains(this.B.Jf) || (this.gf.style.width = b + "%");
        };
        a.prototype.setProgress = a.prototype.wh;
        a.prototype.vh = function (b) {
            this.we.style.width = b + "%";
            this.se.style.width = 100 - b + "%";
        };
        a.prototype.setBuffer = a.prototype.vh;
        a.prototype.init = function () {
            if (this.f) {
                var b = document.createElement("div");
                b.className = "progressbar bar bar1";
                this.f.appendChild(b);
                this.gf = b;
                b = document.createElement("div");
                b.className = "bufferbar bar bar2";
                this.f.appendChild(b);
                this.we = b;
                b = document.createElement("div");
                b.className = "auxbar bar bar3";
                this.f.appendChild(b);
                this.se = b;
                this.gf.style.width = "0%";
                this.we.style.width = "100%";
                this.se.style.width = "0%";
                this.f.classList.add("is-upgraded");
            }
        };
        Z.register({ constructor: a, Bb: "MaterialProgress", ya: "mdl-js-progress", zb: !0 });
    })();
    (function () {
        function a(b) {
            this.f = b;
            this.init();
        }
        window.MaterialSpinner = a;
        a.prototype.Qa = { Of: 4 };
        a.prototype.B = { oe: "mdl-spinner__layer", ne: "mdl-spinner__circle-clipper", Mf: "mdl-spinner__circle", Nf: "mdl-spinner__gap-patch", Pf: "mdl-spinner__left", Qf: "mdl-spinner__right" };
        a.prototype.Be = function (b) {
            var c = document.createElement("div");
            c.classList.add(this.B.oe);
            c.classList.add(this.B.oe + "-" + b);
            b = document.createElement("div");
            b.classList.add(this.B.ne);
            b.classList.add(this.B.Pf);
            var d = document.createElement("div");
            d.classList.add(this.B.Nf);
            var e = document.createElement("div");
            e.classList.add(this.B.ne);
            e.classList.add(this.B.Qf);
            for (var f = [b, d, e], g = 0; g < f.length; g++) {
                var k = document.createElement("div");
                k.classList.add(this.B.Mf);
                f[g].appendChild(k);
            }
            c.appendChild(b);
            c.appendChild(d);
            c.appendChild(e);
            this.f.appendChild(c);
        };
        a.prototype.createLayer = a.prototype.Be;
        a.prototype.stop = function () {
            this.f.classList.remove("is-active");
        };
        a.prototype.stop = a.prototype.stop;
        a.prototype.start = function () {
            this.f.classList.add("is-active");
        };
        a.prototype.start = a.prototype.start;
        a.prototype.init = function () {
            if (this.f) {
                for (var b = 1; b <= this.Qa.Of; b++) this.Be(b);
                this.f.classList.add("is-upgraded");
            }
        };
        Z.register({ constructor: a, Bb: "MaterialSpinner", ya: "mdl-js-spinner", zb: !0 });
    })();
    (function () {
        function a(b) {
            this.f = b;
            this.kc = this.Qa.pd;
            this.init();
        }
        window.MaterialTextfield = a;
        a.prototype.Qa = { pd: -1, me: "maxrows" };
        a.prototype.B = { Zh: "mdl-textfield__label", Kf: "mdl-textfield__input", ke: "is-dirty", yc: "is-focused", le: "is-disabled", zc: "is-invalid", Lf: "is-upgraded", If: "has-placeholder" };
        a.prototype.hh = function (b) {
            var c = b.target.value.split("\n").length;
            13 === b.keyCode && c >= this.kc && b.preventDefault();
        };
        a.prototype.gh = function () {
            this.f.classList.add(this.B.yc);
        };
        a.prototype.fh = function () {
            this.f.classList.remove(this.B.yc);
        };
        a.prototype.ih = function () {
            this.Qb();
        };
        a.prototype.Qb = function () {
            this.checkDisabled();
            this.checkValidity();
            this.ze();
            this.Ad();
        };
        a.prototype.checkDisabled = function () {
            this.Z.disabled ? this.f.classList.add(this.B.le) : this.f.classList.remove(this.B.le);
        };
        a.prototype.checkDisabled = a.prototype.checkDisabled;
        a.prototype.Ad = function () {
            this.f.querySelector(":focus") ? this.f.classList.add(this.B.yc) : this.f.classList.remove(this.B.yc);
        };
        a.prototype.checkFocus = a.prototype.Ad;
        a.prototype.checkValidity = function () {
            this.Z.validity && (this.Z.validity.valid ? this.f.classList.remove(this.B.zc) : this.f.classList.add(this.B.zc));
        };
        a.prototype.checkValidity = a.prototype.checkValidity;
        a.prototype.ze = function () {
            this.Z.value && 0 < this.Z.value.length ? this.f.classList.add(this.B.ke) : this.f.classList.remove(this.B.ke);
        };
        a.prototype.checkDirty = a.prototype.ze;
        a.prototype.disable = function () {
            this.Z.disabled = !0;
            this.Qb();
        };
        a.prototype.disable = a.prototype.disable;
        a.prototype.enable = function () {
            this.Z.disabled = !1;
            this.Qb();
        };
        a.prototype.enable = a.prototype.enable;
        a.prototype.mg = function (b) {
            this.Z.value = b || "";
            this.Qb();
        };
        a.prototype.change = a.prototype.mg;
        a.prototype.init = function () {
            if (this.f && (this.Z = this.f.querySelector("." + this.B.Kf))) {
                this.Z.hasAttribute(this.Qa.me) && ((this.kc = parseInt(this.Z.getAttribute(this.Qa.me), 10)), isNaN(this.kc) && (this.kc = this.Qa.pd));
                this.Z.hasAttribute("placeholder") && this.f.classList.add(this.B.If);
                this.lg = this.Qb.bind(this);
                this.hg = this.gh.bind(this);
                this.gg = this.fh.bind(this);
                this.jg = this.ih.bind(this);
                this.Z.addEventListener("input", this.lg);
                this.Z.addEventListener("focus", this.hg);
                this.Z.addEventListener("blur", this.gg);
                this.Z.addEventListener("reset", this.jg);
                this.kc !== this.Qa.pd && ((this.ig = this.hh.bind(this)), this.Z.addEventListener("keydown", this.ig));
                var b = this.f.classList.contains(this.B.zc);
                this.Qb();
                this.f.classList.add(this.B.Lf);
                b && this.f.classList.add(this.B.zc);
                this.Z.hasAttribute("autofocus") && (this.f.focus(), this.Ad());
            }
        };
        Z.register({ constructor: a, Bb: "MaterialTextfield", ya: "mdl-js-textfield", zb: !0 });
    })(); /*

 Copyright (c) 2013 The Chromium Authors. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

    * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following disclaimer
 in the documentation and/or other materials provided with the
 distribution.
    * Neither the name of Google Inc. nor the names of its
 contributors may be used to endorse or promote products derived from
 this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
    (function () {
        function a(f) {
            for (; f; ) {
                if ("DIALOG" == f.nodeName.toUpperCase()) return f;
                f = f.parentElement;
            }
            return null;
        }
        function b(f) {
            f && f.blur && f != document.body && f.blur();
        }
        function c(f) {
            this.T = f;
            this.Vd = this.dd = !1;
            f.hasAttribute("role") || f.setAttribute("role", "dialog");
            f.show = this.show.bind(this);
            f.showModal = this.showModal.bind(this);
            f.close = this.close.bind(this);
            "returnValue" in f || (f.returnValue = "");
            this.Ib = this.Ib.bind(this);
            "MutationObserver" in window ? new MutationObserver(this.Ib).observe(f, { attributes: !0, attributeFilter: ["open"] }) : f.addEventListener("DOMAttrModified", this.Ib);
            Object.defineProperty(f, "open", { set: this.ce.bind(this), get: f.hasAttribute.bind(f, "open") });
            this.Xa = document.createElement("div");
            this.Xa.className = "backdrop";
            this.Ac = this.Ac.bind(this);
        }
        var d = window.CustomEvent;
        (d && "object" != typeof d) ||
            ((d = function (f, g) {
                g = g || {};
                var k = document.createEvent("CustomEvent");
                k.initCustomEvent(f, !!g.bubbles, !!g.cancelable, g.detail || null);
                return k;
            }),
            (d.prototype = window.Event.prototype));
        c.prototype = {
            get Ee() {
                return this.T;
            },
            Ib: function () {
                !this.Vd ||
                    (this.T.hasAttribute("open") && document.body.contains(this.T)) ||
                    ((this.Vd = !1),
                    (this.T.style.zIndex = ""),
                    this.dd && ((this.T.style.top = ""), (this.dd = !1)),
                    this.Xa.removeEventListener("click", this.Ac),
                    this.Xa.parentElement && this.Xa.parentElement.removeChild(this.Xa),
                    e.He.oh(this));
            },
            ce: function (f) {
                f ? this.T.hasAttribute("open") || this.T.setAttribute("open", "") : (this.T.removeAttribute("open"), this.Ib());
            },
            Ac: function (f) {
                var g = document.createEvent("MouseEvents");
                g.initMouseEvent(f.type, f.bubbles, f.cancelable, window, f.detail, f.screenX, f.screenY, f.clientX, f.clientY, f.ctrlKey, f.altKey, f.shiftKey, f.metaKey, f.button, f.relatedTarget);
                this.T.dispatchEvent(g);
                f.stopPropagation();
            },
            Eg: function () {
                var f = this.T.querySelector("[autofocus]:not([disabled])");
                f ||
                    ((f = ["button", "input", "keygen", "select", "textarea"].map(function (g) {
                        return g + ":not([disabled])";
                    })),
                    f.push('[tabindex]:not([disabled]):not([tabindex=""])'),
                    (f = this.T.querySelector(f.join(", "))));
                b(document.activeElement);
                f && f.focus();
            },
            Rh: function (f, g) {
                this.Xa.style.zIndex = f;
                this.T.style.zIndex = g;
            },
            show: function () {
                this.T.open || (this.ce(!0), this.Eg());
            },
            showModal: function () {
                if (this.T.hasAttribute("open")) throw Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");
                if (!document.body.contains(this.T)) throw Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
                if (!e.He.mh(this)) throw Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");
                this.show();
                this.Vd = !0;
                e.dh(this.T) ? (e.ph(this.T), (this.dd = !0)) : (this.dd = !1);
                this.Xa.addEventListener("click", this.Ac);
                this.T.parentNode.insertBefore(this.Xa, this.T.nextSibling);
            },
            close: function (f) {
                if (!this.T.hasAttribute("open")) throw Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");
                this.ce(!1);
                void 0 !== f && (this.T.returnValue = f);
                f = new d("close", { bubbles: !1, cancelable: !1 });
                this.T.dispatchEvent(f);
            },
        };
        var e = {
            ph: function (f) {
                var g = document.body.scrollTop || document.documentElement.scrollTop;
                f.style.top = Math.max(g, g + (window.innerHeight - f.offsetHeight) / 2) + "px";
            },
            Tg: function (f) {
                for (var g = 0; g < document.styleSheets.length; ++g) {
                    var k = document.styleSheets[g],
                        m = null;
                    try {
                        m = k.cssRules;
                    } catch (z) {}
                    if (m)
                        for (k = 0; k < m.length; ++k) {
                            var n = m[k],
                                l = null;
                            try {
                                l = document.querySelectorAll(n.selectorText);
                            } catch (z) {}
                            var r;
                            if ((r = l))
                                a: {
                                    for (r = 0; r < l.length; ++r)
                                        if (l[r] == f) {
                                            r = !0;
                                            break a;
                                        }
                                    r = !1;
                                }
                            if (r && ((l = n.style.getPropertyValue("top")), (n = n.style.getPropertyValue("bottom")), (l && "auto" != l) || (n && "auto" != n))) return !0;
                        }
                }
                return !1;
            },
            dh: function (f) {
                return "absolute" != window.getComputedStyle(f).position || ("auto" != f.style.top && "" != f.style.top) || ("auto" != f.style.bottom && "" != f.style.bottom) ? !1 : !e.Tg(f);
            },
            Ke: function (f) {
                f.showModal && console.warn("This browser already supports <dialog>, the polyfill may not work correctly", f);
                if ("DIALOG" != f.nodeName.toUpperCase()) throw Error("Failed to register dialog: The element is not a dialog.");
                new c(f);
            },
            nh: function (f) {
                f.showModal || e.Ke(f);
            },
            Fa: function () {
                this.oa = [];
                this.qc = document.createElement("div");
                this.qc.className = "_dialog_overlay";
                this.qc.addEventListener("click", function (f) {
                    f.stopPropagation();
                });
                this.Nc = this.Nc.bind(this);
                this.Lc = this.Lc.bind(this);
                this.Oc = this.Oc.bind(this);
                this.Ff = 1e5;
                this.Th = 100150;
            },
        };
        e.Fa.prototype.xf = function () {
            return this.oa.length ? this.oa[this.oa.length - 1].Ee : null;
        };
        e.Fa.prototype.eg = function () {
            document.body.appendChild(this.qc);
            document.body.addEventListener("focus", this.Lc, !0);
            document.addEventListener("keydown", this.Nc);
            document.addEventListener("DOMNodeRemoved", this.Oc);
        };
        e.Fa.prototype.Qh = function () {
            document.body.removeChild(this.qc);
            document.body.removeEventListener("focus", this.Lc, !0);
            document.removeEventListener("keydown", this.Nc);
            document.removeEventListener("DOMNodeRemoved", this.Oc);
        };
        e.Fa.prototype.zf = function () {
            for (var f = this.Ff, g = 0; g < this.oa.length; g++) g == this.oa.length - 1 && (this.qc.style.zIndex = f++), this.oa[g].Rh(f++, f++);
        };
        e.Fa.prototype.Lc = function (f) {
            if (a(f.target) != this.xf()) return f.preventDefault(), f.stopPropagation(), b(f.target), !1;
        };
        e.Fa.prototype.Nc = function (f) {
            if (27 == f.keyCode) {
                f.preventDefault();
                f.stopPropagation();
                f = new d("cancel", { bubbles: !1, cancelable: !0 });
                var g = this.xf();
                g.dispatchEvent(f) && g.close();
            }
        };
        e.Fa.prototype.Oc = function (f) {
            if ("DIALOG" == f.target.nodeName.toUpperCase()) {
                var g = f.target;
                g.open &&
                    this.oa.some(function (k) {
                        if (k.Ee == g) return k.Ib(), !0;
                    });
            }
        };
        e.Fa.prototype.mh = function (f) {
            if (this.oa.length >= (this.Th - this.Ff) / 2 - 1) return !1;
            this.oa.push(f);
            1 == this.oa.length && this.eg();
            this.zf();
            return !0;
        };
        e.Fa.prototype.oh = function (f) {
            f = this.oa.indexOf(f);
            -1 != f && (this.oa.splice(f, 1), this.zf(), 0 == this.oa.length && this.Qh());
        };
        e.He = new e.Fa();
        document.addEventListener(
            "submit",
            function (f) {
                var g = f.target;
                if (g && g.hasAttribute("method") && "dialog" == g.getAttribute("method").toLowerCase() && (f.preventDefault(), (g = a(f.target)))) {
                    var k,
                        m = ["BUTTON", "INPUT"];
                    [document.activeElement, f.explicitOriginalTarget].some(function (n) {
                        if (n && n.form == f.target && -1 != m.indexOf(n.nodeName.toUpperCase())) return (k = n.value), !0;
                    });
                    g.close(k);
                }
            },
            !0
        );
        e.forceRegisterDialog = e.Ke;
        e.registerDialog = e.nh;
        "function" === typeof define && "amd" in define
            ? define(function () {
                  return e;
              })
            : "object" === typeof module && "object" === typeof module.exports
            ? (module.exports = e)
            : (window.dialogPolyfill = e);
    })();
}.call(this));