!function (t) {
  function e(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {exports: {}, id: i, loaded: !1};
    return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
  }

  var n = {};
  return e.m = t, e.c = n, e.p = "/", e(0)
}([function (t, e, n) {
  n(4), n(5), n(6), n(7), n(8), n(9), n(1), n(10), n(11), n(12), n(13), n(14), n(15), n(16), t.exports = n(17)
}, function (t, e, n) {
  "use strict";

  function i(t) {
    d.env() && (w(t.design) && v.on("__wf_design", t.design), w(t.preview) && v.on("__wf_preview", t.preview)), w(t.destroy) && v.on("__wf_destroy", t.destroy), t.ready && w(t.ready) && r(t)
  }

  function r(t) {
    return x ? void t.ready() : void(y.contains(h, t.ready) || h.push(t.ready))
  }

  function o(t) {
    w(t.design) && v.off("__wf_design", t.design), w(t.preview) && v.off("__wf_preview", t.preview), w(t.destroy) && v.off("__wf_destroy", t.destroy), t.ready && w(t.ready) && a(t)
  }

  function a(t) {
    h = y.filter(h, function (e) {
      return e !== t.ready
    })
  }

  function s(t, e) {
    var n = [], i = {};
    return i.up = y.throttle(function (t) {
      y.each(n, function (e) {
        e(t)
      })
    }), t && e && t.on(e, i.up), i.on = function (t) {
      "function" == typeof t && (y.contains(n, t) || n.push(t))
    }, i.off = function (t) {
      return arguments.length ? void(n = y.filter(n, function (e) {
        return e !== t
      })) : void(n = [])
    }, i
  }

  function u(t) {
    w(t) && t()
  }

  function c() {
    T = !1, y.each(f, i)
  }

  function l() {
    S && (S.reject(), v.off("load", S.resolve)), S = new m.Deferred, v.on("load", S.resolve)
  }

  var d = {}, f = {}, h = [], p = window.moutheme || [], m = window.jQuery, v = m(window), g = m(document),
    w = m.isFunction, y = d._ = n(18), b = n(3) && m.tram, x = !1, T = !1, k = window.Modernizr;
  b.config.hideBackface = !1, b.config.keepInherited = !0, d.define = function (t, e) {
    f[t] && o(f[t]);
    var n = f[t] = e(m, y) || {};
    return i(n), n
  }, d.require = function (t) {
    return f[t]
  }, d.push = function (t) {
    return x ? void(w(t) && t()) : void p.push(t)
  }, d.env = function (t) {
    var e = window.__wf_design, n = "undefined" != typeof e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.mouthemeEditor : "test" === t ? window.__wf_test : void 0 : n
  };
  var _ = navigator.userAgent.toLowerCase(), M = navigator.appVersion.toLowerCase(),
    A = d.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    z = d.env.chrome = /chrome/.test(_) && /Google/.test(navigator.vendor) && parseInt(M.match(/chrome\/(\d+)\./)[1], 10),
    O = d.env.ios = k && k.ios;
  d.env.safari = /safari/.test(_) && !z && !O;
  var C;
  A && g.on("touchstart mousedown", function (t) {
    C = t.target
  }), d.validClick = A ? function (t) {
    return t === C || m.contains(t, C)
  } : function () {
    return !0
  };
  var L = "resize.moutheme orientationchange.moutheme load.moutheme", E = "scroll.moutheme " + L;
  if (d.resize = s(v, L), d.scroll = s(v, E), d.redraw = s(), d.location = function (t) {
    window.location = t
  }, d.app = d.env() ? {} : null, d.app) {
    var j = new Event("__wf_redraw");
    d.app.redrawElement = function (t, e) {
      e.dispatchEvent(j)
    }, d.location = function (t) {
      window.dispatchEvent(new CustomEvent("__wf_location", {detail: t}))
    }
  }
  d.ready = function () {
    x = !0, T ? c() : y.each(h, u), y.each(p, u), d.resize.up()
  };
  var S;
  d.load = function (t) {
    S.then(t)
  }, d.destroy = function (t) {
    t = t || {}, T = !0, v.triggerHandler("__wf_destroy"), null != t.domready && (x = t.domready), y.each(f, o), d.resize.off(), d.scroll.off(), d.redraw.off(), h = [], p = [], "pending" === S.state() && l()
  }, m(d.ready), l(), t.exports = window.moutheme = d
}, function (t) {
  "use strict";
  var e = window.jQuery, n = {}, i = [], r = ".w-ix", o = {
    reset: function (t, e) {
      e.__wf_intro = null
    }, intro: function (t, i) {
      i.__wf_intro || (i.__wf_intro = !0, e(i).triggerHandler(n.types.INTRO))
    }, outro: function (t, i) {
      i.__wf_intro && (i.__wf_intro = null, e(i).triggerHandler(n.types.OUTRO))
    }
  };
  n.triggers = {}, n.types = {INTRO: "w-ix-intro" + r, OUTRO: "w-ix-outro" + r}, n.init = function () {
    for (var t = i.length, r = 0; t > r; r++) {
      var a = i[r];
      a[0](0, a[1])
    }
    i = [], e.extend(n.triggers, o)
  }, n.async = function () {
    for (var t in o) {
      var e = o[t];
      o.hasOwnProperty(t) && (n.triggers[t] = function (t, n) {
        i.push([e, n])
      })
    }
  }, n.async(), t.exports = n
}, function () {
  window.tram = function (t) {
    function e(t, e) {
      var n = new $.Bare;
      return n.init(t, e)
    }

    function n(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase()
      })
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16), n = e >> 16 & 255, i = e >> 8 & 255, r = 255 & e;
      return [n, i, r]
    }

    function r(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
    }

    function o() {
    }

    function a(t, e) {
      K("Type warning: Expected: [" + t + "] Got: [" + typeof e + "] " + e)
    }

    function s(t, e, n) {
      K("Units do not match [" + t + "]: " + e + ", " + n)
    }

    function u(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var i = n;
      return J.test(t) || !V.test(t) ? i = parseInt(t, 10) : V.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i === i ? i : n
    }

    function c(t) {
      for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
        var r = t[e];
        r && i.push(r)
      }
      return i
    }

    var l = function (t, e, n) {
        function i(t) {
          return "object" == typeof t
        }

        function r(t) {
          return "function" == typeof t
        }

        function o() {
        }

        function a(s, u) {
          function c() {
            var t = new l;
            return r(t.init) && t.init.apply(t, arguments), t
          }

          function l() {
          }

          u === n && (u = s, s = Object), c.Bare = l;
          var d, f = o[t] = s[t], h = l[t] = c[t] = new o;
          return h.constructor = c, c.mixin = function (e) {
            return l[t] = c[t] = a(c, e)[t], c
          }, c.open = function (t) {
            if (d = {}, r(t) ? d = t.call(c, h, f, c, s) : i(t) && (d = t), i(d)) for (var n in d) e.call(d, n) && (h[n] = d[n]);
            return r(h.init) || (h.init = s), c
          }, c.open(u)
        }

        return a
      }("prototype", {}.hasOwnProperty), d = {
        ease: ["ease", function (t, e, n, i) {
          var r = (t /= i) * t, o = r * t;
          return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
        }], "ease-in": ["ease-in", function (t, e, n, i) {
          var r = (t /= i) * t, o = r * t;
          return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
        }], "ease-out": ["ease-out", function (t, e, n, i) {
          var r = (t /= i) * t, o = r * t;
          return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
        }], "ease-in-out": ["ease-in-out", function (t, e, n, i) {
          var r = (t /= i) * t, o = r * t;
          return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
        }], linear: ["linear", function (t, e, n, i) {
          return n * t / i + e
        }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, i) {
          return n * (t /= i) * t + e
        }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, i) {
          return -n * (t /= i) * (t - 2) + e
        }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
        }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, i) {
          return n * (t /= i) * t * t + e
        }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, i) {
          return n * ((t = t / i - 1) * t * t + 1) + e
        }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
        }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, i) {
          return n * (t /= i) * t * t * t + e
        }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, i) {
          return -n * ((t = t / i - 1) * t * t * t - 1) + e
        }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
        }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, i) {
          return n * (t /= i) * t * t * t * t + e
        }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, i) {
          return n * ((t = t / i - 1) * t * t * t * t + 1) + e
        }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, i) {
          return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
        }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, i) {
          return n * Math.sin(t / i * (Math.PI / 2)) + e
        }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, i) {
          return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
        }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, i) {
          return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
        }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, i) {
          return t === i ? e + n : n * (-Math.pow(2, -10 * t / i) + 1) + e
        }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, i) {
          return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (-Math.pow(2, -10 * --t) + 2) + e
        }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, i) {
          return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
        }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, i) {
          return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
        }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, i, r) {
          return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
        }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, i, r) {
          return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
        }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, i, r) {
          return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * (((r *= 1.525) + 1) * t - r) + e : n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + e
        }]
      }, f = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      }, h = document, p = window, m = "bkwld-tram", v = /[\-\.0-9]/g, g = /[A-Z]/, w = "number", y = /^(rgb|#)/,
      b = /(em|cm|mm|in|pt|pc|px)$/, x = /(em|cm|mm|in|pt|pc|px|%)$/, T = /(deg|rad|turn)$/, k = "unitless",
      _ = /(all|none) 0s ease 0s/, M = /^(width|height)$/, A = " ", z = h.createElement("a"),
      O = ["Webkit", "Moz", "O", "ms"], C = ["-webkit-", "-moz-", "-o-", "-ms-"], L = function (t) {
        if (t in z.style) return {dom: t, css: t};
        var e, n, i = "", r = t.split("-");
        for (e = 0; e < r.length; e++) i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
        for (e = 0; e < O.length; e++) if (n = O[e] + i, n in z.style) return {dom: n, css: C[e] + t}
      }, E = e.support = {
        bind: Function.prototype.bind,
        transform: L("transform"),
        transition: L("transition"),
        backface: L("backface-visibility"),
        timing: L("transition-timing-function")
      };
    if (E.transition) {
      var j = E.timing.dom;
      if (z.style[j] = d["ease-in-back"][0], !z.style[j]) for (var S in f) d[S][0] = f[S]
    }
    var B = e.frame = function () {
      var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
      return t && E.bind ? t.bind(p) : function (t) {
        p.setTimeout(t, 16)
      }
    }(), I = e.now = function () {
      var t = p.performance, e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
      return e && E.bind ? e.bind(t) : Date.now || function () {
        return +new Date
      }
    }(), q = l(function (e) {
      function i(t, e) {
        var n = c(("" + t).split(A)), i = n[0];
        e = e || {};
        var r = Y[i];
        if (!r) return K("Unsupported property: " + i);
        if (!e.weak || !this.props[i]) {
          var o = r[0], a = this.props[i];
          return a || (a = this.props[i] = new o.Bare), a.init(this.$el, n, r, e), a
        }
      }

      function r(t, e, n) {
        if (t) {
          var r = typeof t;
          if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == r && e) return this.timer = new X({
            duration: t,
            context: this,
            complete: s
          }), void(this.active = !0);
          if ("string" == r && e) {
            switch (t) {
              case"hide":
                h.call(this);
                break;
              case"stop":
                l.call(this);
                break;
              case"redraw":
                p.call(this);
                break;
              default:
                i.call(this, t, n && n[1])
            }
            return s.call(this)
          }
          if ("function" == r) return void t.call(this, this);
          if ("object" == r) {
            var o = 0;
            y.call(this, t, function (t, e) {
              t.span > o && (o = t.span), t.stop(), t.animate(e)
            }, function (t) {
              "wait" in t && (o = u(t.wait, 0))
            }), w.call(this), o > 0 && (this.timer = new X({
              duration: o,
              context: this
            }), this.active = !0, e && (this.timer.complete = s));
            var a = this, c = !1, d = {};
            B(function () {
              y.call(a, t, function (t) {
                t.active && (c = !0, d[t.name] = t.nextStyle)
              }), c && a.$el.css(d)
            })
          }
        }
      }

      function o(t) {
        t = u(t, 0), this.active ? this.queue.push({options: t}) : (this.timer = new X({
          duration: t,
          context: this,
          complete: s
        }), this.active = !0)
      }

      function a(t) {
        return this.active ? (this.queue.push({
          options: t,
          args: arguments
        }), void(this.timer.complete = s)) : K("No active transition timer. Use start() or wait() before then().")
      }

      function s() {
        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
          var t = this.queue.shift();
          r.call(this, t.options, !0, t.args)
        }
      }

      function l(t) {
        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
        var e;
        "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == typeof t && null != t ? t : this.props, y.call(this, e, b), w.call(this)
      }

      function d(t) {
        l.call(this, t), y.call(this, t, x, T)
      }

      function f(t) {
        "string" != typeof t && (t = "block"), this.el.style.display = t
      }

      function h() {
        l.call(this), this.el.style.display = "none"
      }

      function p() {
        this.el.offsetHeight
      }

      function v() {
        l.call(this), t.removeData(this.el, m), this.$el = this.el = null
      }

      function w() {
        var t, e, n = [];
        this.upstream && n.push(this.upstream);
        for (t in this.props) e = this.props[t], e.active && n.push(e.string);
        n = n.join(","), this.style !== n && (this.style = n, this.el.style[E.transition.dom] = n)
      }

      function y(t, e, r) {
        var o, a, s, u, c = e !== b, l = {};
        for (o in t) s = t[o], o in Q ? (l.transform || (l.transform = {}), l.transform[o] = s) : (g.test(o) && (o = n(o)), o in Y ? l[o] = s : (u || (u = {}), u[o] = s));
        for (o in l) {
          if (s = l[o], a = this.props[o], !a) {
            if (!c) continue;
            a = i.call(this, o)
          }
          e.call(this, a, s)
        }
        r && u && r.call(this, u)
      }

      function b(t) {
        t.stop()
      }

      function x(t, e) {
        t.set(e)
      }

      function T(t) {
        this.$el.css(t)
      }

      function k(t, n) {
        e[t] = function () {
          return this.children ? M.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
        }
      }

      function M(t, e) {
        var n, i = this.children.length;
        for (n = 0; i > n; n++) t.apply(this.children[n], e);
        return this
      }

      e.init = function (e) {
        if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, W.keepInherited && !W.fallback) {
          var n = Z(this.el, "transition");
          n && !_.test(n) && (this.upstream = n)
        }
        E.backface && W.hideBackface && U(this.el, E.backface.css, "hidden")
      }, k("add", i), k("start", r), k("wait", o), k("then", a), k("next", s), k("stop", l), k("set", d), k("show", f), k("hide", h), k("redraw", p), k("destroy", v)
    }), $ = l(q, function (e) {
      function n(e, n) {
        var i = t.data(e, m) || t.data(e, m, new q.Bare);
        return i.el || i.init(e), n ? i.start(n) : i
      }

      e.init = function (e, i) {
        var r = t(e);
        if (!r.length) return this;
        if (1 === r.length) return n(r[0], i);
        var o = [];
        return r.each(function (t, e) {
          o.push(n(e, i))
        }), this.children = o, this
      }
    }), D = l(function (t) {
      function e() {
        var t = this.get();
        this.update("auto");
        var e = this.get();
        return this.update(t), e
      }

      function n(t, e, n) {
        return void 0 !== e && (n = e), t in d ? t : n
      }

      function i(t) {
        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
        return (e ? r(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
      }

      var o = {duration: 500, ease: "ease", delay: 0};
      t.init = function (t, e, i, r) {
        this.$el = t, this.el = t[0];
        var a = e[0];
        i[2] && (a = i[2]), G[a] && (a = G[a]), this.name = a, this.type = i[1], this.duration = u(e[1], this.duration, o.duration), this.ease = n(e[2], this.ease, o.ease), this.delay = u(e[3], this.delay, o.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = M.test(this.name), this.unit = r.unit || this.unit || W.defaultUnit, this.angle = r.angle || this.angle || W.defaultAngle, W.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + d[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
      }, t.set = function (t) {
        t = this.convert(t, this.type), this.update(t), this.redraw()
      }, t.transition = function (t) {
        this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
      }, t.fallback = function (t) {
        var n = this.el.style[this.name] || this.convert(this.get(), this.type);
        t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new N({
          from: n,
          to: t,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        })
      }, t.get = function () {
        return Z(this.el, this.name)
      }, t.update = function (t) {
        U(this.el, this.name, t)
      }, t.stop = function () {
        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, U(this.el, this.name, this.get()));
        var t = this.tween;
        t && t.context && t.destroy()
      }, t.convert = function (t, e) {
        if ("auto" == t && this.auto) return t;
        var n, r = "number" == typeof t, o = "string" == typeof t;
        switch (e) {
          case w:
            if (r) return t;
            if (o && "" === t.replace(v, "")) return +t;
            n = "number(unitless)";
            break;
          case y:
            if (o) {
              if ("" === t && this.original) return this.original;
              if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : i(t)
            }
            n = "hex or rgb string";
            break;
          case b:
            if (r) return t + this.unit;
            if (o && e.test(t)) return t;
            n = "number(px) or string(unit)";
            break;
          case x:
            if (r) return t + this.unit;
            if (o && e.test(t)) return t;
            n = "number(px) or string(unit or %)";
            break;
          case T:
            if (r) return t + this.angle;
            if (o && e.test(t)) return t;
            n = "number(deg) or string(angle)";
            break;
          case k:
            if (r) return t;
            if (o && x.test(t)) return t;
            n = "number(unitless) or string(unit or %)"
        }
        return a(n, t), t
      }, t.redraw = function () {
        this.el.offsetHeight
      }
    }), R = l(D, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
      }
    }), P = l(D, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.animate = this.fallback
      }, t.get = function () {
        return this.$el[this.name]()
      }, t.update = function (t) {
        this.$el[this.name](t)
      }
    }), F = l(D, function (t, e) {
      function n(t, e) {
        var n, i, r, o, a;
        for (n in t) o = Q[n], r = o[0], i = o[1] || n, a = this.convert(t[n], r), e.call(this, i, a, r)
      }

      t.init = function () {
        e.init.apply(this, arguments), this.current || (this.current = {}, Q.perspective && W.perspective && (this.current.perspective = W.perspective, U(this.el, this.name, this.style(this.current)), this.redraw()))
      }, t.set = function (t) {
        n.call(this, t, function (t, e) {
          this.current[t] = e
        }), U(this.el, this.name, this.style(this.current)), this.redraw()
      }, t.transition = function (t) {
        var e = this.values(t);
        this.tween = new H({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease
        });
        var n, i = {};
        for (n in this.current) i[n] = n in e ? e[n] : this.current[n];
        this.active = !0, this.nextStyle = this.style(i)
      }, t.fallback = function (t) {
        var e = this.values(t);
        this.tween = new H({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        })
      }, t.update = function () {
        U(this.el, this.name, this.style(this.current))
      }, t.style = function (t) {
        var e, n = "";
        for (e in t) n += e + "(" + t[e] + ") ";
        return n
      }, t.values = function (t) {
        var e, i = {};
        return n.call(this, t, function (t, n, r) {
          i[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, r))
        }), i
      }
    }), N = l(function (e) {
      function n(t) {
        1 === h.push(t) && B(a)
      }

      function a() {
        var t, e, n, i = h.length;
        if (i) for (B(a), e = I(), t = i; t--;) n = h[t], n && n.render(e)
      }

      function u(e) {
        var n, i = t.inArray(e, h);
        i >= 0 && (n = h.slice(i + 1), h.length = i, n.length && (h = h.concat(n)))
      }

      function c(t) {
        return Math.round(t * p) / p
      }

      function l(t, e, n) {
        return r(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
      }

      var f = {ease: d.ease[1], from: 0, to: 1};
      e.init = function (t) {
        this.duration = t.duration || 0, this.delay = t.delay || 0;
        var e = t.ease || f.ease;
        d[e] && (e = d[e][1]), "function" != typeof e && (e = f.ease), this.ease = e, this.update = t.update || o, this.complete = t.complete || o, this.context = t.context || this, this.name = t.name;
        var n = t.from, i = t.to;
        void 0 === n && (n = f.from), void 0 === i && (i = f.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = I(), t.autoplay !== !1 && this.play()
      }, e.play = function () {
        this.active || (this.start || (this.start = I()), this.active = !0, n(this))
      }, e.stop = function () {
        this.active && (this.active = !1, u(this))
      }, e.render = function (t) {
        var e, n = t - this.start;
        if (this.delay) {
          if (n <= this.delay) return;
          n -= this.delay
        }
        if (n < this.duration) {
          var i = this.ease(n, 0, 1, this.duration);
          return e = this.startRGB ? l(this.startRGB, this.endRGB, i) : c(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
        }
        e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
      }, e.format = function (t, e) {
        if (e += "", t += "", "#" == t.charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
        if (!this.unit) {
          var n = e.replace(v, ""), r = t.replace(v, "");
          n !== r && s("tween", e, t), this.unit = n
        }
        e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
      }, e.destroy = function () {
        this.stop(), this.context = null, this.ease = this.update = this.complete = o
      };
      var h = [], p = 1e3
    }), X = l(N, function (t) {
      t.init = function (t) {
        this.duration = t.duration || 0, this.complete = t.complete || o, this.context = t.context, this.play()
      }, t.render = function (t) {
        var e = t - this.start;
        e < this.duration || (this.complete.call(this.context), this.destroy())
      }
    }), H = l(N, function (t, e) {
      t.init = function (t) {
        this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
        var e, n;
        for (e in t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new N({
          name: e,
          from: this.current[e],
          to: n,
          duration: t.duration,
          delay: t.delay,
          ease: t.ease,
          autoplay: !1
        }));
        this.play()
      }, t.render = function (t) {
        var e, n, i = this.tweens.length, r = !1;
        for (e = i; e--;) n = this.tweens[e], n.context && (n.render(t), this.current[n.name] = n.value, r = !0);
        return r ? void(this.update && this.update.call(this.context)) : this.destroy()
      }, t.destroy = function () {
        if (e.destroy.call(this), this.tweens) {
          var t, n = this.tweens.length;
          for (t = n; t--;) this.tweens[t].destroy();
          this.tweens = null, this.current = null
        }
      }
    }), W = e.config = {
      defaultUnit: "px",
      defaultAngle: "deg",
      keepInherited: !1,
      hideBackface: !1,
      perspective: "",
      fallback: !E.transition,
      agentTests: []
    };
    e.fallback = function (t) {
      if (!E.transition) return W.fallback = !0;
      W.agentTests.push("(" + t + ")");
      var e = new RegExp(W.agentTests.join("|"), "i");
      W.fallback = e.test(navigator.userAgent)
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new N(t)
    }, e.delay = function (t, e, n) {
      return new X({complete: e, duration: t, context: n})
    }, t.fn.tram = function (t) {
      return e.call(null, this, t)
    };
    var U = t.style, Z = t.css, G = {transform: E.transform && E.transform.css}, Y = {
      color: [R, y],
      background: [R, y, "background-color"],
      "outline-color": [R, y],
      "border-color": [R, y],
      "border-top-color": [R, y],
      "border-right-color": [R, y],
      "border-bottom-color": [R, y],
      "border-left-color": [R, y],
      "border-width": [D, b],
      "border-top-width": [D, b],
      "border-right-width": [D, b],
      "border-bottom-width": [D, b],
      "border-left-width": [D, b],
      "border-spacing": [D, b],
      "letter-spacing": [D, b],
      margin: [D, b],
      "margin-top": [D, b],
      "margin-right": [D, b],
      "margin-bottom": [D, b],
      "margin-left": [D, b],
      padding: [D, b],
      "padding-top": [D, b],
      "padding-right": [D, b],
      "padding-bottom": [D, b],
      "padding-left": [D, b],
      "outline-width": [D, b],
      opacity: [D, w],
      top: [D, x],
      right: [D, x],
      bottom: [D, x],
      left: [D, x],
      "font-size": [D, x],
      "text-indent": [D, x],
      "word-spacing": [D, x],
      width: [D, x],
      "min-width": [D, x],
      "max-width": [D, x],
      height: [D, x],
      "min-height": [D, x],
      "max-height": [D, x],
      "line-height": [D, k],
      "scroll-top": [P, w, "scrollTop"],
      "scroll-left": [P, w, "scrollLeft"]
    }, Q = {};
    E.transform && (Y.transform = [F], Q = {
      x: [x, "translateX"],
      y: [x, "translateY"],
      rotate: [T],
      rotateX: [T],
      rotateY: [T],
      scale: [w],
      scaleX: [w],
      scaleY: [w],
      skew: [T],
      skewX: [T],
      skewY: [T]
    }), E.transform && E.backface && (Q.z = [x, "translateZ"], Q.rotateZ = [T], Q.scaleZ = [w], Q.perspective = [b]);
    var J = /ms/, V = /s|\./, K = function () {
      var t = "warn", e = window.console;
      return e && e[t] ? function (n) {
        e[t](n)
      } : o
    }();
    return t.tram = e
  }(window.jQuery)
}, function (t, e, n) {
  "use strict";
  var i = n(1);
  i.define("brand", t.exports = function (t) {
    {
      var e = {}, n = t("html"), r = t("body");
      window.location, i.env()
    }
    return e.ready = function () {
      var e = n.attr("data-wf-status");
      if (e) {
        var i = t("<div></div>"), o = t("<a></a>");
        o.attr("href", "http://moutheme.com?utm_campaign=brandjs"), i.css({
          position: "fixed",
          bottom: 0,
          right: 0,
          borderTop: "5px solid #2b3239",
          borderLeft: "5px solid #2b3239",
          borderTopLeftRadius: "5px",
          backgroundColor: "#2b3239",
          padding: "5px 5px 5px 10px",
          fontFamily: "Arial",
          fontSize: "10px",
          textTransform: "uppercase",
          opacity: "0",
          transition: "opacity 0.50s ease-in-out"
        }), o.css({color: "#AAADB0", textDecoration: "none"});
        var a = t("<img>");
        if (a.attr("src", "https://daks2k3a4ib2z.cloudfront.net/54153e6a3d25f2755b1f14ed/5445a4b1944ecdaa4df86d3e_subdomain-brand.svg"), a.css({
          opacity: .9,
          width: "55px",
          verticalAlign: "middle",
          paddingLeft: "4px",
          paddingBottom: "3px"
        }), i.text("Built with"), i.append(a), o.append(i), r.append(o), /PhantomJS/.test(window.navigator.userAgent)) return;
        i.css({opacity: "1.0"})
      }
    }, e
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1), r = n(2);
  i.define("dropdown", t.exports = function (t, e) {
    function n() {
      m = w && i.env("design"), p = g.find(y), p.each(o)
    }

    function o(e, n) {
      var i = t(n), r = t.data(n, y);
      r || (r = t.data(n, y, {
        open: !1,
        el: i,
        config: {}
      })), r.list = i.children(".w-dropdown-list"), r.toggle = i.children(".w-dropdown-toggle"), r.links = r.list.children(".w-dropdown-link"), r.outside = f(r), r.complete = h(r), i.off(y), r.toggle.off(y), a(r), r.nav && r.nav.off(y), r.nav = i.closest(".w-nav"), r.nav.on(x, s(r)), m ? i.on("setting" + y, s(r)) : (r.toggle.on("tap" + y, u(r)), i.on(x, s(r)), w && l(r))
    }

    function a(t) {
      t.config = {hover: +t.el.attr("data-hover"), delay: +t.el.attr("data-delay") || 0}
    }

    function s(t) {
      return function (e, n) {
        return n = n || {}, "w-close" === e.type ? l(t) : "setting" === e.type ? (a(t), n.open === !0 && c(t, !0), void(n.open === !1 && l(t, !0))) : void 0
      }
    }

    function u(t) {
      return e.debounce(function () {
        t.open ? l(t) : c(t)
      })
    }

    function c(t) {
      t.open || (d(t), t.open = !0, t.list.addClass(b), t.toggle.addClass(b), T.intro(0, t.el[0]), i.redraw.up(), m || g.on("tap" + y, t.outside), window.clearTimeout(t.delayId))
    }

    function l(t, e) {
      if (t.open) {
        t.open = !1;
        var n = t.config;
        return T.outro(0, t.el[0]), g.off("tap" + y, t.outside), window.clearTimeout(t.delayId), !n.delay || e ? t.complete() : void(t.delayId = window.setTimeout(t.complete, n.delay))
      }
    }

    function d(e) {
      var n = e.el[0];
      p.each(function (e, i) {
        var r = t(i);
        r.is(n) || r.has(n).length || r.triggerHandler(x)
      })
    }

    function f(n) {
      return n.outside && g.off("tap" + y, n.outside), e.debounce(function (e) {
        if (n.open) {
          var i = t(e.target);
          i.closest(".w-dropdown-toggle").length || n.el.is(i.closest(y)) || l(n)
        }
      })
    }

    function h(t) {
      return function () {
        t.list.removeClass(b), t.toggle.removeClass(b)
      }
    }

    var p, m, v = {}, g = (t.tram, t(document)), w = i.env(), y = ".w-dropdown", b = "w--open", x = "w-close" + y,
      T = r.triggers;
    return v.ready = v.design = v.preview = n, v
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1);
  i.define("edit", t.exports = function (t) {
    function e() {
      c || /\?edit/.test(h.hash) && m()
    }

    function n() {
      c = !0, window.mouthemeEditor = !0, d.off(p, e), t.ajax({
        url: u("https://editor-api.moutheme.com/api/editor/view"),
        xhrFields: {withCredentials: !0},
        dataType: "json",
        crossDomain: !0,
        success: r
      })
    }

    function r(t) {
      return t ? void o(s(t.scriptPath), function () {
        window.mouthemeEditor(t)
      }) : void console.error("Could not load editor data")
    }

    function o(e, n) {
      t.ajax({type: "GET", url: e, dataType: "script", cache: !0}).then(n, a)
    }

    function a(t, e, n) {
      throw console.error("Could not load editor script: " + e), n
    }

    function s(t) {
      return t.indexOf("//") >= 0 ? t : u("https://editor-api.moutheme.com" + t)
    }

    function u(t) {
      return t.replace(/([^:])\/\//g, "$1/")
    }

    var c, l = {}, d = t(window), f = function () {
    }, h = document.location, p = "hashchange", m = i.env("test") ? f : n;
    return localStorage && localStorage.getItem && localStorage.getItem("mouthemeEditor") ? m() : h.search ? (/[?&](edit)(?:[=&]|$)/.test(h.search) || /\?edit$/.test(h.search)) && m() : d.on(p, e).triggerHandler(p), l
  })
}, function (t, e, n) {
  var i = n(1);
  i.define("forms", t.exports = function (t, e) {
    function r() {
      g = t("html").attr("data-wf-site"), v = t(T + " form"), v.length && v.each(o)
    }

    function o(e, n) {
      var i = t(n), r = t.data(n, T);
      r || (r = t.data(n, T, {form: i})), s(r);
      var o = i.closest("div.w-form");
      r.done = o.find("> .w-form-done"), r.fail = o.find("> .w-form-fail");
      var a = r.action = i.attr("action");
      return r.handler = null, r.redirect = i.attr("data-redirect"), A.test(a) ? void(r.handler = f) : a ? void 0 : g ? void(r.handler = d) : void z()
    }

    function a() {
      w = !0, y.on("submit", T + " form", function (e) {
        var n = t.data(this, T);
        n.handler && (n.evt = e, n.handler(n))
      })
    }

    function s(t) {
      var e = t.btn = t.form.find(':input[type="submit"]');
      t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
    }

    function u(t) {
      var e = t.btn, n = t.wait;
      e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
    }

    function c(e, n) {
      var i = null;
      return n = n || {}, e.find(':input:not([type="submit"])').each(function (r, o) {
        var a = t(o), s = a.attr("type"), u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1), c = a.val();
        if ("checkbox" === s && (c = a.is(":checked")), "radio" === s) {
          if (null === n[u] || "string" == typeof n[u]) return;
          c = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
        }
        "string" == typeof c && (c = t.trim(c)), n[u] = c, i = i || l(a, u, c)
      }), i
    }

    function l(t, e, n) {
      var i = null;
      return t.attr("required") ? (n ? (k.test(e) || k.test(t.attr("type"))) && (_.test(n) || (i = "Please enter a valid email address for: " + e)) : i = "Please fill out the required field: " + e, i) : null
    }

    function d(e) {
      s(e);
      var n = e.form,
        r = {name: n.attr("data-name") || n.attr("name") || "Untitled Form", source: b.href, test: i.env(), fields: {}};
      p(e);
      var o = c(n, r.fields);
      if (o) return M(o);
      if (u(e), !g) return void h(e);
      var a = "https://moutheme.com/api/v1/form/" + g;
      x && a.indexOf("https://moutheme.com") >= 0 && (a = a.replace("https://moutheme.com", "http://formdata.moutheme.com")), t.ajax({
        url: a,
        type: "POST",
        data: r,
        dataType: "json",
        crossDomain: !0
      }).done(function () {
        e.success = !0, h(e)
      }).fail(function () {
        h(e)
      })
    }

    function f(n) {
      s(n);
      var i = n.form, r = {};
      if (/^https/.test(b.href) && !/^https/.test(n.action)) return void i.attr("method", "post");
      p(n);
      var o = c(i, r);
      if (o) return M(o);
      u(n);
      var a;
      e.each(r, function (t, e) {
        k.test(e) && (r.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (a = t), /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
      }), a && !r.FNAME && (a = a.split(" "), r.FNAME = a[0], r.LNAME = r.LNAME || a[1]);
      var l = n.action.replace("/post?", "/post-json?") + "&c=?", d = l.indexOf("u=") + 2;
      d = l.substring(d, l.indexOf("&", d));
      var f = l.indexOf("id=") + 3;
      f = l.substring(f, l.indexOf("&", f)), r["b_" + d + "_" + f] = "", t.ajax({
        url: l,
        data: r,
        dataType: "jsonp"
      }).done(function (t) {
        n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), h(n)
      }).fail(function () {
        h(n)
      })
    }

    function h(t) {
      var e = t.form, n = (e.closest("div.w-form"), t.redirect), r = t.success;
      return r && n ? void i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), void s(t))
    }

    function p(t) {
      t.evt && t.evt.preventDefault(), t.evt = null
    }

    var m = {};
    n(19);
    var v, g, w, y = t(document), b = window.location, x = window.XDomainRequest && !window.atob, T = ".w-form",
      k = /e(\-)?mail/i, _ = /^\S+@\S+$/, M = window.alert, A = /list-manage[1-9]?.com/i, z = e.debounce(function () {
        M("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
      }, 100);
    return m.ready = function () {
      r(), w || a()
    }, m.preview = m.design = function () {
      r()
    }, m
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1);
  i.define("gplus", t.exports = function (t) {
    function e() {
      o.find(".w-widget-gplus").length && n()
    }

    function n() {
      r = !0, t.getScript("https://apis.google.com/js/plusone.js")
    }

    var r, o = t(document), a = {};
    return a.ready = function () {
      i.env() || r || e()
    }, a
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1), r = n(2);
  i.define("ix", t.exports = function (t, e) {
    function n(t) {
      t && (C = {}, e.each(t, function (t) {
        C[t.slug] = t.value
      }), o())
    }

    function o() {
      var e = t("[data-ix]");
      e.length && (e.each(u), e.each(a), L.length && (i.scroll.on(c), setTimeout(c, 1)), E.length && i.load(l), j.length && setTimeout(d, S), r.init(), i.redraw.up())
    }

    function a(n, o) {
      var a = t(o), u = a.attr("data-ix"), c = C[u];
      if (c) {
        var l = c.triggers;
        l && (y.style(a, c.style), e.each(l, function (t) {
          function e() {
            f(t, a, {group: "A"})
          }

          function n() {
            f(t, a, {group: "B"})
          }

          var o = {}, u = t.type, c = t.stepsB && t.stepsB.length;
          if ("load" === u) return void(t.preload && !_ ? E.push(e) : j.push(e));
          if ("click" === u) return a.on("click" + x, function (e) {
            i.validClick(e.currentTarget) && ("#" === a.attr("href") && e.preventDefault(), f(t, a, {group: o.clicked ? "B" : "A"}), c && (o.clicked = !o.clicked))
          }), void(O = O.add(a));
          if ("hover" === u) return a.on("mouseenter" + x, e), a.on("mouseleave" + x, n), void(O = O.add(a));
          if ("scroll" === u) return void L.push({
            el: a,
            trigger: t,
            state: {active: !1},
            offsetTop: s(t.offsetTop),
            offsetBot: s(t.offsetBot)
          });
          var l = B[u];
          if (l) {
            var d = a.closest(l);
            return d.on(r.types.INTRO, e).on(r.types.OUTRO, n), void(O = O.add(d))
          }
        }))
      }
    }

    function s(t) {
      if (!t) return 0;
      t += "";
      var e = parseInt(t, 10);
      return e !== e ? 0 : (t.indexOf("%") > 0 && (e /= 100, e >= 1 && (e = .999)), e)
    }

    function u(e, n) {
      t(n).off(x)
    }

    function c() {
      for (var t = b.scrollTop(), e = b.height(), n = L.length, i = 0; n > i; i++) {
        var r = L[i], o = r.el, a = r.trigger, s = a.stepsB && a.stepsB.length, u = r.state, c = o.offset().top,
          l = o.outerHeight(), d = r.offsetTop, h = r.offsetBot;
        1 > d && d > 0 && (d *= e), 1 > h && h > 0 && (h *= e);
        var p = c + l - d >= t && t + e >= c + h;
        p !== u.active && (p !== !1 || s) && (u.active = p, f(a, o, {group: p ? "A" : "B"}))
      }
    }

    function l() {
      for (var t = E.length, e = 0; t > e; e++) E[e]()
    }

    function d() {
      for (var t = j.length, e = 0; t > e; e++) j[e]()
    }

    function f(e, n, i, r) {
      function o() {
        return u ? f(e, n, i, !0) : ("auto" === p.width && d.set({width: "auto"}), "auto" === p.height && d.set({height: "auto"}), void(a && a()))
      }

      i = i || {};
      var a = i.done;
      if (!g || i.force) {
        var s = i.group || "A", u = e["loop" + s], c = e["steps" + s];
        if (c && c.length) {
          if (c.length < 2 && (u = !1), !r) {
            var l = e.selector;
            l && (n = e.descend ? n.find(l) : e.siblings ? n.siblings(l) : t(l), _ && n.attr("data-ix-affect", 1)), M && n.addClass("w-ix-emptyfix")
          }
          for (var d = T(n), p = {}, m = 0; m < c.length; m++) h(d, c[m], p);
          p.start ? d.then(o) : o()
        }
      }
    }

    function h(t, e, n) {
      var r = "add", o = "start";
      n.start && (r = o = "then");
      var a = e.transition;
      if (a) {
        a = a.split(",");
        for (var s = 0; s < a.length; s++) {
          var u = a[s], c = z.test(u) ? {fallback: !0} : null;
          t[r](u, c)
        }
      }
      var l = v(e) || {};
      if (null != l.width && (n.width = l.width), null != l.height && (n.height = l.height), null == a) {
        n.start ? t.then(function () {
          var e = this.queue;
          this.set(l), l.display && (t.redraw(), i.redraw.up()), this.queue = e, this.next()
        }) : (t.set(l), l.display && (t.redraw(), i.redraw.up()));
        var d = l.wait;
        null != d && (t.wait(d), n.start = !0)
      } else {
        if (l.display) {
          var f = l.display;
          delete l.display, n.start ? t.then(function () {
            var t = this.queue;
            this.set({display: f}).redraw(), i.redraw.up(), this.queue = t, this.next()
          }) : (t.set({display: f}).redraw(), i.redraw.up())
        }
        t[o](l), n.start = !0
      }
    }

    function p(t, e) {
      var n = T(t);
      t.css("transition", "");
      var i = t.css("transition");
      i === A && (i = n.upstream = null), n.upstream = A, n.set(v(e)), n.upstream = i
    }

    function m(t, e) {
      T(t).set(v(e))
    }

    function v(t) {
      var e = {}, n = !1;
      for (var i in t) "transition" !== i && (e[i] = t[i], n = !0);
      return n ? e : null
    }

    var g, w, y = {}, b = t(window), x = ".w-ix", T = t.tram, k = i.env, _ = k(), M = k.chrome && k.chrome < 35,
      A = "none 0s ease 0s", z = /width|height/, O = t(), C = {}, L = [], E = [], j = [], S = 1,
      B = {tabs: ".w-tab-link, .w-tab-pane", dropdown: ".w-dropdown", slider: ".w-slide", navbar: ".w-nav"};
    return y.init = function (t) {
      setTimeout(function () {
        n(t)
      }, 1)
    }, y.preview = function () {
      g = !1, S = 100, setTimeout(function () {
        n(window.__wf_ix)
      }, 1)
    }, y.design = function () {
      g = !0, y.destroy()
    }, y.destroy = function () {
      w = !0, O.each(u), i.scroll.off(c), r.async(), L = [], E = [], j = []
    }, y.ready = function () {
      C && w && (w = !1, o())
    }, y.run = f, y.style = _ ? p : m, y
  })
}, function (t, e, n) {
  "use strict";

  function i(t, e, n) {
    function i(t, e) {
      return A = T(t) ? t : [t], y || i.build(), A.length > 1 && (y.items = y.empty, A.forEach(function (t) {
        var e = v("thumbnail"), n = v("item").append(e);
        y.items = y.items.add(n), u(t.thumbnailUrl || t.url, function (t) {
          t.prop("width") > t.prop("height") ? h(t, "wide") : h(t, "tall"), e.append(h(t, "thumbnail-image"))
        })
      }), y.strip.empty().append(y.items), h(y.content, "group")), x(p(y.lightbox, "hide").focus()).add("opacity .3s").start({opacity: 1}), h(y.html, "noscroll"), i.show(e || 0)
    }

    function r(t) {
      return function (e) {
        this === e.target && (e.stopPropagation(), e.preventDefault(), t())
      }
    }

    function o(t) {
      t.preventDefault()
    }

    function a(t) {
      var e = t.keyCode;
      27 === e ? i.hide() : 37 === e ? i.prev() : 39 === e && i.next()
    }

    function s() {
      y && (p(y.html, "noscroll"), h(y.lightbox, "hide"), y.strip.empty(), y.view && y.view.remove(), p(y.content, "group"), h(y.arrowLeft, "inactive"), h(y.arrowRight, "inactive"), w = y.view = void 0)
    }

    function u(t, e) {
      var n = v("img", "img");
      return n.one("load", function () {
        e(n)
      }), n.attr("src", t), n
    }

    function c(t) {
      return function () {
        t.remove()
      }
    }

    function l(t, e, n) {
      this.$element = t, this.className = e, this.delay = n || 200, this.hide()
    }

    function d(t, e) {
      return t.replace(M, (e ? " ." : " ") + _)
    }

    function f(t) {
      return d(t, !0)
    }

    function h(t, e) {
      return t.addClass(d(e))
    }

    function p(t, e) {
      return t.removeClass(d(e))
    }

    function m(t, e, n) {
      return t.toggleClass(d(e), n)
    }

    function v(t, i) {
      return h(n(e.createElement(i || "div")), t)
    }

    function g(t, e) {
      var n = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"/>';
      return "data:image/svg+xml;charset=utf-8," + encodeURI(n)
    }

    var w, y, b, x = n.tram, T = Array.isArray, k = "w-lightbox", _ = k + "-", M = /(^|\s+)/g, A = [];
    i.build = function () {
      return i.destroy(), y = {
        html: n(e.documentElement),
        empty: n()
      }, y.arrowLeft = v("control left inactive"), y.arrowRight = v("control right inactive"), y.close = v("control close"), y.spinner = v("spinner"), y.strip = v("strip"), b = new l(y.spinner, d("hide")), y.content = v("content").append(y.spinner, y.arrowLeft, y.arrowRight, y.close), y.container = v("container").append(y.content, y.strip), y.lightbox = v("backdrop hide").append(y.container), y.strip.on("tap", f("item"), L), y.content.on("swipe", E).on("tap", f("left"), z).on("tap", f("right"), O).on("tap", f("close"), C).on("tap", f("image, caption"), O), y.container.on("tap", f("view, strip"), C).on("dragstart", f("img"), o), y.lightbox.on("keydown", a).on("focusin", j), n("body").append(y.lightbox.prop("tabIndex", 0)), i
    }, i.destroy = function () {
      y && (p(y.html, "noscroll"), y.lightbox.remove(), y = void 0)
    }, i.show = function (t) {
      if (t !== w) {
        var e = A[t];
        if (!e) return i.hide();
        var r = w;
        w = t, b.show();
        var o = e.html && g(e.width, e.height) || e.url;
        return u(o, function (i) {
          function o() {
            return b.hide(), t !== w ? void d.remove() : (m(y.arrowLeft, "inactive", 0 >= t), m(y.arrowRight, "inactive", t >= A.length - 1), y.view ? (x(y.view).add("opacity .3s").start({opacity: 0}).then(c(y.view)), x(d).add("opacity .3s").add("transform .3s").set({x: t > r ? "80px" : "-80px"}).start({
              opacity: 1,
              x: 0
            })) : d.css("opacity", 1), y.view = d, void(y.items && h(p(y.items, "active").eq(t), "active")))
          }

          if (t === w) {
            var a, s, u = v("figure", "figure").append(h(i, "image")), l = v("frame").append(u),
              d = v("view").append(l);
            e.html && (a = n(e.html), s = a.is("iframe"), s && a.on("load", o), u.append(h(a, "embed"))), e.caption && u.append(v("caption", "figcaption").text(e.caption)), y.spinner.before(d), s || o()
          }
        }), i
      }
    }, i.hide = function () {
      return x(y.lightbox).add("opacity .3s").start({opacity: 0}).then(s), i
    }, i.prev = function () {
      w > 0 && i.show(w - 1)
    }, i.next = function () {
      w < A.length - 1 && i.show(w + 1)
    };
    var z = r(i.prev), O = r(i.next), C = r(i.hide), L = function (t) {
      var e = n(this).index();
      t.preventDefault(), i.show(e)
    }, E = function (t, e) {
      t.preventDefault(), "left" === e.direction ? i.next() : "right" === e.direction && i.prev()
    }, j = function () {
      this.focus()
    };
    return l.prototype.show = function () {
      var t = this;
      t.timeoutId || (t.timeoutId = setTimeout(function () {
        t.$element.removeClass(t.className), delete t.timeoutId
      }, t.delay))
    }, l.prototype.hide = function () {
      var t = this;
      return t.timeoutId ? (clearTimeout(t.timeoutId), void delete t.timeoutId) : void t.$element.addClass(t.className)
    }, function () {
      function n() {
        var e = t.innerHeight, n = t.innerWidth,
          i = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
        s.textContent = i
      }

      var i = t.navigator.userAgent, r = /(iPhone|iPad|iPod);[^OS]*OS (\d)/, o = i.match(r),
        a = i.indexOf("Android ") > -1 && -1 === i.indexOf("Chrome");
      if (a || o && !(o[2] > 7)) {
        var s = e.createElement("style");
        e.head.appendChild(s), t.addEventListener("orientationchange", n, !0), n()
      }
    }(), i
  }

  var r = n(1);
  r.define("lightbox", t.exports = function (t) {
    function e() {
      c = p && r.env("design"), s = t(document.body), f.destroy(), l = {}, u = h.find(m), u.mouthemeLightBox()
    }

    function n(t) {
      var e, n, i = t.el.children(".w-json").html();
      if (!i) return void(t.items = []);
      try {
        i = JSON.parse(i)
      } catch (r) {
        console.error("Malformed lightbox JSON configuration.", r)
      }
      a(i), e = i.group, e ? (n = l[e], n || (n = l[e] = []), t.items = n, i.items.length && (t.index = n.length, n.push.apply(n, i.items))) : t.items = i.items
    }

    function o(t) {
      return function () {
        t.items.length && f(t.items, t.index || 0)
      }
    }

    function a(t) {
      t.images && (t.images.forEach(function (t) {
        t.type = "image"
      }), t.items = t.images), t.embed && (t.embed.type = "video", t.items = [t.embed]), t.groupId && (t.group = t.groupId)
    }

    var s, u, c, l, d = {}, f = i(window, document, t), h = t(document), p = r.env(), m = ".w-lightbox";
    return d.ready = d.design = d.preview = e, jQuery.fn.extend({
      mouthemeLightBox: function () {
        var e = this;
        t.each(e, function (e, i) {
          var r = t.data(i, m);
          r || (r = t.data(i, m, {
            el: t(i),
            mode: "images",
            images: [],
            embed: ""
          })), r.el.off(m), n(r), c ? r.el.on("setting" + m, n.bind(null, r)) : r.el.on("tap" + m, o(r)).on("click" + m, function (t) {
            t.preventDefault()
          })
        })
      }
    }), d
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1);
  i.define("links", t.exports = function (t, e) {
    function n() {
      s = f && i.env("design"), c = i.env("slug") || h.pathname || "", i.scroll.off(o), u = [];
      for (var t = document.links, e = 0; e < t.length; ++e) r(t[e]);
      u.length && (i.scroll.on(o), o())
    }

    function r(e) {
      var n = s && e.getAttribute("href-disabled") || e.getAttribute("href");
      if (p.href = n, !(n.indexOf(":") >= 0)) {
        var i = t(e);
        if (0 === n.indexOf("#") && v.test(n)) {
          var r = t(n);
          return void(r.length && u.push({link: i, sec: r, active: !1}))
        }
        if ("#" !== n) {
          var o = p.href === h.href || n === c || g.test(n) && w.test(c);
          a(i, m, o)
        }
      }
    }

    function o() {
      var t = d.scrollTop(), n = d.height();
      e.each(u, function (e) {
        var i = e.link, r = e.sec, o = r.offset().top, u = r.outerHeight(), c = .5 * n,
          l = r.is(":visible") && o + u - c >= t && t + n >= o + c;
        e.active !== l && (e.active = l, a(i, m, l), s && (i[0].__wf_current = l))
      })
    }

    function a(t, e, n) {
      var i = t.hasClass(e);
      n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
    }

    var s, u, c, l = {}, d = t(window), f = i.env(), h = window.location, p = document.createElement("a"),
      m = "w--current", v = /^#[a-zA-Z][\w:.-]*$/, g = /index\.(html|php)$/, w = /\/$/;
    return l.ready = l.design = l.preview = n, l
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1);
  i.define("maps", t.exports = function (t, e) {
    function n() {
      d.length && i.app && d.each(i.app.redrawElement)
    }

    function r() {
      function e() {
        window._wf_maps_loaded = function () {
        }, p = window.google, d.each(s), o(), a()
      }

      d = h.find(m), d.length && (null === p ? (t.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded"), window._wf_maps_loaded = e) : e())
    }

    function o() {
      i.resize.off(u), i.redraw.off(u)
    }

    function a() {
      i.resize.on(u), i.redraw.on(u)
    }

    function s(e, n) {
      var i = t(n).data();
      l(n, i)
    }

    function u() {
      d.each(c)
    }

    function c(t, e) {
      var n = l(e);
      p.maps.event.trigger(n.map, "resize"), n.setMapPosition()
    }

    function l(e, n) {
      var r = t.data(e, v);
      if (r) return r;
      var o = t(e);
      r = t.data(e, v, {
        latLng: "51.511214,-0.119824",
        tooltip: "",
        style: "roadmap",
        zoom: 12,
        marker: new p.maps.Marker({draggable: !1}),
        infowindow: new p.maps.InfoWindow({disableAutoPan: !0})
      });
      var a = n.widgetLatlng || r.latLng;
      r.latLng = a;
      var s = a.split(","), u = new p.maps.LatLng(s[0], s[1]);
      r.latLngObj = u;
      var c = i.env.touch && n.disableTouch ? !1 : !0;
      r.map = new p.maps.Map(e, {
        center: r.latLngObj,
        zoom: r.zoom,
        maxZoom: 18,
        mapTypeControl: !1,
        panControl: !1,
        streetViewControl: !1,
        scrollwheel: !n.disableScroll,
        draggable: c,
        zoomControl: !0,
        zoomControlOptions: {style: p.maps.ZoomControlStyle.SMALL},
        mapTypeId: r.style
      }), r.marker.setMap(r.map), r.setMapPosition = function () {
        r.map.setCenter(r.latLngObj);
        var t = 0, e = 0, n = o.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
        t -= parseInt(n.paddingLeft, 10), t += parseInt(n.paddingRight, 10), e -= parseInt(n.paddingTop, 10), e += parseInt(n.paddingBottom, 10), (t || e) && r.map.panBy(t, e), o.css("position", "")
      }, p.maps.event.addListener(r.map, "tilesloaded", function () {
        p.maps.event.clearListeners(r.map, "tilesloaded"), r.setMapPosition()
      }), r.setMapPosition(), r.marker.setPosition(r.latLngObj), r.infowindow.setPosition(r.latLngObj);
      var l = n.widgetTooltip;
      l && (r.tooltip = l, r.infowindow.setContent(l), r.infowindowOpen || (r.infowindow.open(r.map, r.marker), r.infowindowOpen = !0));
      var d = n.widgetStyle;
      d && r.map.setMapTypeId(d);
      var f = n.widgetZoom;
      return null != f && (r.zoom = f, r.map.setZoom(+f)), p.maps.event.addListener(r.marker, "click", function () {
        window.open("https://maps.google.com/?z=" + r.zoom + "&daddr=" + r.latLng)
      }), r
    }

    var d, f = {}, h = t(document), p = null, m = ".w-widget-map";
    f.ready = function () {
      i.env() || r()
    }, f.preview = function () {
      d = h.find(m), i.resize.off(n), d.length && (i.resize.on(n), n())
    }, f.design = function () {
      d = h.find(m), i.resize.off(n), d.length && e.defer(n)
    }, f.destroy = o;
    var v = "w-widget-map";
    return f
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1), r = n(2);
  i.define("navbar", t.exports = function (t, e) {
    function n() {
      _ = C && i.env("design"), T = t(document.body), k = O.find(E), k.length && (k.each(u), o(), a())
    }

    function o() {
      i.resize.off(s)
    }

    function a() {
      i.resize.on(s)
    }

    function s() {
      k.each(g)
    }

    function u(e, n) {
      var i = t(n), r = t.data(n, E);
      r || (r = t.data(n, E, {
        open: !1,
        el: i,
        config: {}
      })), r.menu = i.find(".w-nav-menu"), r.links = r.menu.find(".w-nav-link"), r.dropdowns = r.menu.find(".w-dropdown"), r.button = i.find(".w-nav-button"), r.container = i.find(".w-container"), r.outside = v(r), r.el.off(E), r.button.off(E), r.menu.off(E), d(r), _ ? (c(r), r.el.on("setting" + E, f(r))) : (l(r), r.button.on("tap" + E, p(r)), r.menu.on("click" + E, "a", m(r))), g(e, n)
    }

    function c(t) {
      t.overlay && (x(t, !0), t.overlay.remove(), t.overlay = null)
    }

    function l(e) {
      e.overlay || (e.overlay = t(L).appendTo(e.el), e.parent = e.menu.parent(), x(e, !0))
    }

    function d(t) {
      var n = {}, i = t.config || {}, r = n.animation = t.el.attr("data-animation") || "default";
      n.animOver = /^over/.test(r), n.animDirect = /left$/.test(r) ? -1 : 1, i.animation !== r && t.open && e.defer(h, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
      var o = t.el.attr("data-duration");
      n.duration = null != o ? +o : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
    }

    function f(t) {
      return function (n, i) {
        i = i || {};
        var r = z.width();
        d(t), i.open === !0 && y(t, !0), i.open === !1 && x(t, !0), t.open && e.defer(function () {
          r !== z.width() && h(t)
        })
      }
    }

    function h(t) {
      t.open && (x(t, !0), y(t, !0))
    }

    function p(t) {
      return e.debounce(function () {
        t.open ? x(t) : y(t)
      })
    }

    function m(e) {
      return function (n) {
        var r = t(this), o = r.attr("href");
        return i.validClick(n.currentTarget) ? void(o && 0 === o.indexOf("#") && e.open && x(e)) : void n.preventDefault()
      }
    }

    function v(n) {
      return n.outside && O.off("tap" + E, n.outside), e.debounce(function (e) {
        if (n.open) {
          var i = t(e.target).closest(".w-nav-menu");
          n.menu.is(i) || x(n)
        }
      })
    }

    function g(e, n) {
      var i = t.data(n, E), r = i.collapsed = "none" !== i.button.css("display");
      if (!i.open || r || _ || x(i, !0), i.container.length) {
        var o = w(i);
        i.links.each(o), i.dropdowns.each(o)
      }
      i.open && b(i)
    }

    function w(e) {
      var n = e.container.css(q);
      return "none" === n && (n = ""), function (e, i) {
        i = t(i), i.css(q, ""), "none" === i.css(q) && i.css(q, n)
      }
    }

    function y(t, e) {
      if (!t.open) {
        t.open = !0, t.menu.addClass(S), t.links.addClass(B), t.button.addClass(j);
        var n = t.config, r = n.animation;
        "none" !== r && A.support.transform || (e = !0);
        var o = b(t), a = t.menu.outerHeight(!0), s = t.menu.outerWidth(!0), u = t.el.height(), c = t.el[0];
        if (g(0, c), I.intro(0, c), i.redraw.up(), _ || O.on("tap" + E, t.outside), !e) {
          var l = "transform " + n.duration + "ms " + n.easing;
          if (t.overlay && t.overlay.show().append(t.menu), n.animOver) return A(t.menu).add(l).set({
            x: n.animDirect * s,
            height: o
          }).start({x: 0}), void(t.overlay && t.overlay.width(s));
          var d = u + a;
          A(t.menu).add(l).set({y: -d}).start({y: 0})
        }
      }
    }

    function b(t) {
      var e = t.config, n = e.docHeight ? O.height() : T.height();
      return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.height()), t.overlay && t.overlay.height(n), n
    }

    function x(t, e) {
      function n() {
        t.menu.height(""), A(t.menu).set({
          x: 0,
          y: 0
        }), t.menu.removeClass(S), t.links.removeClass(B), t.overlay && t.overlay.children().length && (t.menu.appendTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
      }

      if (t.open) {
        t.open = !1, t.button.removeClass(j);
        var i = t.config;
        "none" !== i.animation && A.support.transform || (e = !0);
        {
          i.animation
        }
        if (I.outro(0, t.el[0]), O.off("tap" + E, t.outside), e) return A(t.menu).stop(), void n();
        var r = "transform " + i.duration + "ms " + i.easing2, o = t.menu.outerHeight(!0), a = t.menu.outerWidth(!0),
          s = t.el.height();
        if (i.animOver) return void A(t.menu).add(r).start({x: a * i.animDirect}).then(n);
        var u = s + o;
        A(t.menu).add(r).start({y: -u}).then(n)
      }
    }

    var T, k, _, M = {}, A = t.tram, z = t(window), O = t(document), C = i.env(),
      L = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", j = "w--open", S = "w--nav-menu-open",
      B = "w--nav-link-open", I = r.triggers;
    M.ready = M.design = M.preview = n, M.destroy = o;
    var q = "max-width";
    return M
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1);
  i.define("scroll", t.exports = function (t) {
    function e() {
      try {
        return !!c.frameElement
      } catch (t) {
        return !0
      }
    }

    function n() {
      l.hash && r(l.hash.substring(1));
      var e = l.href.split("#")[0];
      u.on("click", "a", function (n) {
        if (!(i.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link"))) {
          if ("#" === this.getAttribute("href")) return void n.preventDefault();
          var o = this.href.split("#"), a = o[0] === e ? o[1] : null;
          a && r(a, n)
        }
      })
    }

    function r(e, n) {
      if (f.test(e)) {
        var r = t("#" + e);
        if (r.length) {
          if (n && (n.preventDefault(), n.stopPropagation()), l.hash !== e && d && d.pushState) {
            var a = d.state && d.state.hash;
            a !== e && d.pushState({hash: e}, "", "#" + e)
          }
          var s = i.env("editor") ? ".w-editor-body" : "body",
            u = t("header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])"),
            h = "fixed" === u.css("position") ? u.outerHeight() : 0;
          c.setTimeout(function () {
            o(r, h)
          }, n ? 0 : 300)
        }
      }
    }

    function o(e, n) {
      var i = t(c).scrollTop(), r = e.offset().top - n;
      if ("mid" === e.data("scroll")) {
        var o = t(c).height() - n, s = e.outerHeight();
        o > s && (r -= Math.round((o - s) / 2))
      }
      var u = 1;
      t("body").add(e).each(function () {
        var e = parseFloat(t(this).attr("data-scroll-time"), 10);
        !isNaN(e) && (0 === e || e > 0) && (u = e)
      }), Date.now || (Date.now = function () {
        return (new Date).getTime()
      });
      var l = Date.now(),
        d = c.requestAnimationFrame || c.mozRequestAnimationFrame || c.webkitRequestAnimationFrame || function (t) {
          c.setTimeout(t, 15)
        }, f = (472.143 * Math.log(Math.abs(i - r) + 125) - 2e3) * u, h = function () {
          var t = Date.now() - l;
          c.scroll(0, a(i, r, t, f)), f >= t && d(h)
        };
      h()
    }

    function a(t, e, n, i) {
      return n > i ? e : t + (e - t) * s(n / i)
    }

    function s(t) {
      return .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    var u = t(document), c = window, l = c.location, d = e() ? null : c.history, f = /^[a-zA-Z][\w:.-]*$/;
    return {ready: n}
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1), r = n(2);
  i.define("slider", t.exports = function (t, e) {
    function n() {
      T = O.find(L), T.length && (T.filter(":visible").each(u), M = null, _ || (o(), a()))
    }

    function o() {
      i.resize.off(s), i.redraw.off(A.redraw)
    }

    function a() {
      i.resize.on(s), i.redraw.on(A.redraw)
    }

    function s() {
      T.filter(":visible").each(g)
    }

    function u(e, n) {
      var i = t(n), r = t.data(n, L);
      return r || (r = t.data(n, L, {
        index: 0,
        depth: 1,
        el: i,
        config: {}
      })), r.mask = i.children(".w-slider-mask"), r.left = i.children(".w-slider-arrow-left"), r.right = i.children(".w-slider-arrow-right"), r.nav = i.children(".w-slider-nav"), r.slides = r.mask.children(".w-slide"), r.slides.each(j.reset), M && (r.maskWidth = 0), z.support.transform ? (r.el.off(L), r.left.off(L), r.right.off(L), r.nav.off(L), c(r), k ? (r.el.on("setting" + L, m(r)), p(r), r.hasTimer = !1) : (r.el.on("swipe" + L, m(r)), r.left.on("tap" + L, l(r)), r.right.on("tap" + L, d(r)), r.config.autoplay && !r.hasTimer && (r.hasTimer = !0, r.timerCount = 1, h(r))), r.nav.on("tap" + L, "> div", m(r)), C || r.mask.contents().filter(function () {
        return 3 === this.nodeType
      }).remove(), void g(e, n)) : (r.left.hide(), r.right.hide(), r.nav.hide(), void(_ = !0))
    }

    function c(t) {
      var e = {};
      e.crossOver = 0, e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
      var n = t.el.attr("data-duration");
      if (e.duration = null != n ? +n : 500, +t.el.attr("data-infinite") && (e.infinite = !0), +t.el.attr("data-disable-swipe") && (e.disableSwipe = !0), +t.el.attr("data-hide-arrows") ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), +t.el.attr("data-autoplay")) {
        e.autoplay = !0, e.delay = +t.el.attr("data-delay") || 2e3, e.timerMax = +t.el.attr("data-autoplay-limit");
        var i = "mousedown" + L + " touchstart" + L;
        k || t.el.off(i).one(i, function () {
          p(t)
        })
      }
      var r = t.right.width();
      e.edge = r ? r + 40 : 100, t.config = e
    }

    function l(t) {
      return function () {
        v(t, {index: t.index - 1, vector: -1})
      }
    }

    function d(t) {
      return function () {
        v(t, {index: t.index + 1, vector: 1})
      }
    }

    function f(i, r) {
      var o = null;
      r === i.slides.length && (n(), w(i)), e.each(i.anchors, function (e, n) {
        t(e.els).each(function (e, i) {
          t(i).index() === r && (o = n)
        })
      }), null != o && v(i, {index: o, immediate: !0})
    }

    function h(t) {
      p(t);
      var e = t.config, n = e.timerMax;
      n && t.timerCount++ > n || (t.timerId = window.setTimeout(function () {
        null == t.timerId || k || (d(t)(), h(t))
      }, e.delay))
    }

    function p(t) {
      window.clearTimeout(t.timerId), t.timerId = null
    }

    function m(e) {
      return function (n, r) {
        r = r || {};
        var o = e.config;
        if (k && "setting" === n.type) {
          if ("prev" === r.select) return l(e)();
          if ("next" === r.select) return d(e)();
          if (c(e), w(e), null == r.select) return;
          return void f(e, r.select)
        }
        if ("swipe" !== n.type) e.nav.has(n.target).length && v(e, {index: t(n.target).index()}); else {
          if (o.disableSwipe) return;
          if (i.env("editor")) return;
          if ("left" === r.direction) return d(e)();
          if ("right" === r.direction) return l(e)()
        }
      }
    }

    function v(e, n) {
      function i() {
        f = t(o[e.index].els), p = e.slides.not(f), "slide" !== m && (d.visibility = "hidden"), z(p).set(d)
      }

      n = n || {};
      var r = e.config, o = e.anchors;
      e.previous = e.index;
      var a = n.index, s = {};
      0 > a ? (a = o.length - 1, r.infinite && (s.x = -e.endX, s.from = 0, s.to = o[0].width)) : a >= o.length && (a = 0, r.infinite && (s.x = o[o.length - 1].width, s.from = -o[o.length - 1].x, s.to = s.from - s.x)), e.index = a;
      var u = e.nav.children().eq(e.index).addClass("w-active");
      e.nav.children().not(u).removeClass("w-active"), r.hideArrows && (e.index === o.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
      var c = e.offsetX || 0, l = e.offsetX = -o[e.index].x, d = {x: l, opacity: 1, visibility: ""},
        f = t(o[e.index].els), h = t(o[e.previous] && o[e.previous].els), p = e.slides.not(f), m = r.animation,
        v = r.easing, g = Math.round(r.duration), w = n.vector || (e.index > e.previous ? 1 : -1),
        y = "opacity " + g + "ms " + v, b = "transform " + g + "ms " + v;
      if (k || (f.each(j.intro), p.each(j.outro)), n.immediate && !M) return z(f).set(d), void i();
      if (e.index !== e.previous) {
        if ("cross" === m) {
          var x = Math.round(g - g * r.crossOver), T = Math.round(g - x);
          return y = "opacity " + x + "ms " + v, z(h).set({visibility: ""}).add(y).start({opacity: 0}), void z(f).set({
            visibility: "",
            x: l,
            opacity: 0,
            zIndex: e.depth++
          }).add(y).wait(T).then({opacity: 1}).then(i)
        }
        return "fade" === m ? (z(h).set({visibility: ""}).stop(), void z(f).set({
          visibility: "",
          x: l,
          opacity: 0,
          zIndex: e.depth++
        }).add(y).start({opacity: 1}).then(i)) : "over" === m ? (d = {x: e.endX}, z(h).set({visibility: ""}).stop(), void z(f).set({
          visibility: "",
          zIndex: e.depth++,
          x: l + o[e.index].width * w
        }).add(b).start({x: l}).then(i)) : void(r.infinite && s.x ? (z(e.slides.not(h)).set({
          visibility: "",
          x: s.x
        }).add(b).start({x: l}), z(h).set({
          visibility: "",
          x: s.from
        }).add(b).start({x: s.to}), e.shifted = h) : (r.infinite && e.shifted && (z(e.shifted).set({
          visibility: "",
          x: c
        }), e.shifted = null), z(e.slides).set({visibility: ""}).add(b).start({x: l})))
      }
    }

    function g(e, n) {
      var i = t.data(n, L);
      return b(i) ? w(i) : void(k && x(i) && w(i))
    }

    function w(e) {
      var n = 1, i = 0, r = 0, o = 0, a = e.maskWidth, s = a - e.config.edge;
      0 > s && (s = 0), e.anchors = [{els: [], x: 0, width: 0}], e.slides.each(function (u, c) {
        r - i > s && (n++, i += a, e.anchors[n - 1] = {
          els: [],
          x: r,
          width: 0
        }), o = t(c).outerWidth(!0), r += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(c)
      }), e.endX = r, k && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, y(e));
      var u = e.index;
      u >= n && (u = n - 1), v(e, {immediate: !0, index: u})
    }

    function y(e) {
      var n, i = [], r = e.el.attr("data-nav-spacing");
      r && (r = parseFloat(r) + "px");
      for (var o = 0; o < e.pages; o++) n = t(E), e.nav.hasClass("w-num") && n.text(o + 1), null != r && n.css({
        "margin-left": r,
        "margin-right": r
      }), i.push(n);
      e.nav.empty().append(i)
    }

    function b(t) {
      var e = t.mask.width();
      return t.maskWidth !== e ? (t.maskWidth = e, !0) : !1
    }

    function x(e) {
      var n = 0;
      return e.slides.each(function (e, i) {
        n += t(i).outerWidth(!0)
      }), e.slidesWidth !== n ? (e.slidesWidth = n, !0) : !1
    }

    var T, k, _, M, A = {}, z = t.tram, O = t(document), C = i.env(), L = ".w-slider",
      E = '<div class="w-slider-dot" data-wf-ignore />', j = r.triggers;
    return A.ready = function () {
      n()
    }, A.design = function () {
      k = !0, n()
    }, A.preview = function () {
      k = !1, n()
    }, A.redraw = function () {
      M = !0, n()
    }, A.destroy = o, A
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1), r = n(2);
  i.define("tabs", t.exports = function (t) {
    function e() {
      f = y && i.env("design"), d = v.find(x), d.length && (d.each(s), i.env("preview") && d.each(a), h = null, n(), o())
    }

    function n() {
      i.redraw.off(p.redraw)
    }

    function o() {
      i.redraw.on(p.redraw)
    }

    function a(e, n) {
      var i = (t(n), t.data(n, x));
      i && (i.links && i.links.each(_.reset), i.panes && i.panes.each(_.reset))
    }

    function s(e, n) {
      var i = t(n), r = t.data(n, x);
      if (r || (r = t.data(n, x, {
        el: i,
        config: {}
      })), r.current = null, r.menu = i.children(".w-tab-menu"), r.links = r.menu.children(".w-tab-link"), r.content = i.children(".w-tab-content"), r.panes = r.content.children(".w-tab-pane"), r.el.off(x), r.links.off(x), u(r), !f) {
        r.links.on("click" + x, c(r));
        var o = r.links.filter("." + T), a = o.attr(b);
        a && l(r, {tab: a, immediate: !0})
      }
    }

    function u(t) {
      {
        var e = {};
        t.config || {}
      }
      e.easing = t.el.attr("data-easing") || "ease";
      var n = +t.el.attr("data-duration-in");
      n = e.intro = n === n ? n : 0;
      var i = +t.el.attr("data-duration-out");
      i = e.outro = i === i ? i : 0, e.immediate = !n && !i, t.config = e
    }

    function c(t) {
      return function (e) {
        var n = e.currentTarget.getAttribute(b);
        n && l(t, {tab: n})
      }
    }

    function l(e, n) {
      function r() {
        return d.removeClass(k).removeAttr("style"), l.addClass(k).each(_.intro), i.redraw.up(), o.intro ? void m(l).set({opacity: 0}).redraw().add("opacity " + o.intro + "ms " + a, {fallback: w}).start({opacity: 1}) : m(l).set({opacity: 1})
      }

      n = n || {};
      var o = e.config, a = o.easing, s = n.tab;
      if (s !== e.current) {
        e.current = s, e.links.each(function (e, n) {
          var i = t(n);
          n.getAttribute(b) === s ? i.addClass(T).each(_.intro) : i.hasClass(T) && i.removeClass(T).each(_.outro)
        });
        var u = [], c = [];
        e.panes.each(function (e, n) {
          var i = t(n);
          n.getAttribute(b) === s ? u.push(n) : i.hasClass(k) && c.push(n)
        });
        var l = t(u), d = t(c);
        return n.immediate || o.immediate ? (l.addClass(k).each(_.intro), d.removeClass(k), void(h || i.redraw.up())) : void(d.length && o.outro ? (d.each(_.outro), m(d).add("opacity " + o.outro + "ms " + a, {fallback: w}).start({opacity: 0}).then(r)) : r())
      }
    }

    var d, f, h, p = {}, m = t.tram, v = (t(window), t(document)), g = i.env, w = g.safari, y = g(), b = "data-w-tab",
      x = ".w-tabs", T = "w--current", k = "w--tab-active", _ = r.triggers;
    return p.ready = p.design = p.preview = e, p.redraw = function () {
      h = !0, e()
    }, p.destroy = function () {
      d = v.find(x), d.length && (d.each(a), n())
    }, p
  })
}, function (t, e, n) {
  "use strict";
  var i = n(1);
  i.define("touch", t.exports = function (t) {
    function e(t) {
      function e(t) {
        var e = t.touches;
        e && e.length > 1 || (d = !0, f = !1, e ? (h = !0, u = e[0].clientX, c = e[0].clientY) : (u = t.clientX, c = t.clientY), l = u)
      }

      function i(t) {
        if (d) {
          if (h && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
          var e = t.touches, i = e ? e[0].clientX : t.clientX, r = e ? e[0].clientY : t.clientY, s = i - l;
          l = i, Math.abs(s) > p && o && o() + "" == "" && (n("swipe", t, {direction: s > 0 ? "right" : "left"}), a()), (Math.abs(i - u) > 10 || Math.abs(r - c) > 10) && (f = !0)
        }
      }

      function r(t) {
        return d ? (d = !1, h && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(h = !1)) : void(f || n("tap", t))) : void 0
      }

      function a() {
        d = !1
      }

      function s() {
        t.removeEventListener("touchstart", e, !1), t.removeEventListener("touchmove", i, !1), t.removeEventListener("touchend", r, !1), t.removeEventListener("touchcancel", a, !1), t.removeEventListener("mousedown", e, !1), t.removeEventListener("mousemove", i, !1), t.removeEventListener("mouseup", r, !1), t.removeEventListener("mouseout", a, !1), t = null
      }

      var u, c, l, d = !1, f = !1, h = !1, p = Math.min(Math.round(.04 * window.innerWidth), 40);
      t.addEventListener("touchstart", e, !1), t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("mousedown", e, !1), t.addEventListener("mousemove", i, !1), t.addEventListener("mouseup", r, !1), t.addEventListener("mouseout", a, !1), this.destroy = s
    }

    function n(e, n, i) {
      var r = t.Event(e, {originalEvent: n});
      t(n.target).trigger(r, i)
    }

    var i = {}, r = !document.addEventListener, o = window.getSelection;
    return r && (t.event.special.tap = {bindType: "click", delegateType: "click"}), i.init = function (n) {
      return r ? null : (n = "string" == typeof n ? t(n).get(0) : n, n ? new e(n) : null)
    }, i.instance = i.init(document), i
  })
}, function (t, e, n) {
  "use strict";
  var i = window.$, r = n(3) && i.tram;
  t.exports = function () {
    var t = {};
    t.VERSION = "1.6.0-moutheme";
    var e = {}, n = Array.prototype, i = Object.prototype, o = Function.prototype, a = (n.push, n.slice),
      s = (n.concat, i.toString, i.hasOwnProperty), u = n.forEach, c = n.map, l = (n.reduce, n.reduceRight, n.filter),
      d = (n.every, n.some), f = n.indexOf, h = (n.lastIndexOf, Array.isArray, Object.keys),
      p = (o.bind, t.each = t.forEach = function (n, i, r) {
        if (null == n) return n;
        if (u && n.forEach === u) n.forEach(i, r); else if (n.length === +n.length) {
          for (var o = 0, a = n.length; a > o; o++) if (i.call(r, n[o], o, n) === e) return
        } else for (var s = t.keys(n), o = 0, a = s.length; a > o; o++) if (i.call(r, n[s[o]], s[o], n) === e) return;
        return n
      });
    t.map = t.collect = function (t, e, n) {
      var i = [];
      return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function (t, r, o) {
        i.push(e.call(n, t, r, o))
      }), i)
    }, t.find = t.detect = function (t, e, n) {
      var i;
      return m(t, function (t, r, o) {
        return e.call(n, t, r, o) ? (i = t, !0) : void 0
      }), i
    }, t.filter = t.select = function (t, e, n) {
      var i = [];
      return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function (t, r, o) {
        e.call(n, t, r, o) && i.push(t)
      }), i)
    };
    var m = t.some = t.any = function (n, i, r) {
      i || (i = t.identity);
      var o = !1;
      return null == n ? o : d && n.some === d ? n.some(i, r) : (p(n, function (t, n, a) {
        return o || (o = i.call(r, t, n, a)) ? e : void 0
      }), !!o)
    };
    t.contains = t.include = function (t, e) {
      return null == t ? !1 : f && t.indexOf === f ? -1 != t.indexOf(e) : m(t, function (t) {
        return t === e
      })
    }, t.delay = function (t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
    }, t.throttle = function (t) {
      var e, n, i;
      return function () {
        e || (e = !0, n = arguments, i = this, r.frame(function () {
          e = !1, t.apply(i, n)
        }))
      }
    }, t.debounce = function (e, n, i) {
      var r, o, a, s, u, c = function () {
        var l = t.now() - s;
        n > l ? r = setTimeout(c, n - l) : (r = null, i || (u = e.apply(a, o), a = o = null))
      };
      return function () {
        a = this, o = arguments, s = t.now();
        var l = i && !r;
        return r || (r = setTimeout(c, n)), l && (u = e.apply(a, o), a = o = null), u
      }
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;
      for (var n = 1, i = arguments.length; i > n; n++) {
        var r = arguments[n];
        for (var o in r) void 0 === e[o] && (e[o] = r[o])
      }
      return e
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (h) return h(e);
      var n = [];
      for (var i in e) t.has(e, i) && n.push(i);
      return n
    }, t.has = function (t, e) {
      return s.call(t, e)
    }, t.isObject = function (t) {
      return t === Object(t)
    }, t.now = Date.now || function () {
      return (new Date).getTime()
    }, t.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var v = /(.)^/, g = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
      w = /\\|'|\r|\n|\u2028|\u2029/g, y = function (t) {
        return "\\" + g[t]
      };
    return t.template = function (e, n, i) {
      !n && i && (n = i), n = t.defaults({}, n, t.templateSettings);
      var r = RegExp([(n.escape || v).source, (n.interpolate || v).source, (n.evaluate || v).source].join("|") + "|$", "g"),
        o = 0, a = "__p+='";
      e.replace(r, function (t, n, i, r, s) {
        return a += e.slice(o, s).replace(w, y), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
      try {
        var s = new Function(n.variable || "obj", "_", a)
      } catch (u) {
        throw u.source = a, u
      }
      var c = function (e) {
        return s.call(this, e, t)
      }, l = n.variable || "obj";
      return c.source = "function(" + l + "){\n" + a + "}", c
    }, t
  }()
}, function (t) {
  t.exports = function (t) {
    if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
      var e = /^https?:\/\//i, n = /^get|post$/i, i = new RegExp("^" + location.protocol, "i");
      t.ajaxTransport("* text html xml json", function (r, o) {
        if (r.crossDomain && r.async && n.test(r.type) && e.test(r.url) && i.test(r.url)) {
          var a = null;
          return {
            send: function (e, n) {
              var i = "", s = (o.dataType || "").toLowerCase();
              a = new XDomainRequest, /^\d+$/.test(o.timeout) && (a.timeout = o.timeout), a.ontimeout = function () {
                n(500, "timeout")
              }, a.onload = function () {
                var e = "Content-Length: " + a.responseText.length + "\r\nContent-Type: " + a.contentType,
                  i = {code: 200, message: "success"}, r = {text: a.responseText};
                try {
                  if ("html" === s || /text\/html/i.test(a.contentType)) r.html = a.responseText; else if ("json" === s || "text" !== s && /\/json/i.test(a.contentType)) try {
                    r.json = t.parseJSON(a.responseText)
                  } catch (o) {
                    i.code = 500, i.message = "parseerror"
                  } else if ("xml" === s || "text" !== s && /\/xml/i.test(a.contentType)) {
                    var u = new ActiveXObject("Microsoft.XMLDOM");
                    u.async = !1;
                    try {
                      u.loadXML(a.responseText)
                    } catch (o) {
                      u = void 0
                    }
                    if (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) throw i.code = 500, i.message = "parseerror", "Invalid XML: " + a.responseText;
                    r.xml = u
                  }
                } catch (c) {
                  throw c
                } finally {
                  n(i.code, i.message, r, e)
                }
              }, a.onprogress = function () {
              }, a.onerror = function () {
                n(500, "error", {text: a.responseText})
              }, o.data && (i = "string" === t.type(o.data) ? o.data : t.param(o.data)), a.open(r.type, r.url), a.send(i)
            }, abort: function () {
              a && a.abort()
            }
          }
        }
      })
    }
  }(window.jQuery)
}]), moutheme.require("ix").init([{
  slug: "show-dropdown",
  name: "show-dropdown",
  value: {
    style: {},
    triggers: [{
      type: "hover",
      selector: ".dropdown-menu",
      descend: !0,
      stepsA: [{display: "block"}],
      stepsB: [{display: "none"}]
    }]
  }
}, {
  slug: "portfolio-hover",
  name: "portfolio-hover",
  value: {
    style: {},
    triggers: [{
      type: "hover",
      selector: ".portfolio-overlay",
      descend: !0,
      stepsA: [{opacity: 1, transition: "opacity 400ms ease 0ms"}],
      stepsB: [{opacity: 0, transition: "opacity 400ms ease 0ms"}]
    }, {
      type: "hover",
      selector: ".portfolio-ico-zoom",
      descend: !0,
      stepsA: [{wait: 200}, {
        opacity: 1,
        transition: "transform 400ms ease 0ms, opacity 400ms ease 0ms",
        x: "0px",
        y: "0px"
      }],
      stepsB: [{opacity: 0, transition: "transform 400ms ease 0ms, opacity 400ms ease 0ms", x: "-66px", y: "0px"}]
    }, {
      type: "hover",
      selector: ".portfolio-ico",
      descend: !0,
      stepsA: [{opacity: 1, transition: "transform 400ms ease 0ms, opacity 400ms ease 0ms", x: "0px", y: "0px"}],
      stepsB: [{opacity: 0, transition: "transform 400ms ease 0ms, opacity 400ms ease 0ms", x: "-30px", y: "0px"}]
    }]
  }
}, {
  slug: "move-portfolio-ico-zoom",
  name: "move-portfolio-ico-zoom",
  value: {style: {opacity: 0, x: "-66px", y: "0px"}, triggers: []}
}, {
  slug: "move-portfolio-ico",
  name: "move-portfolio-ico",
  value: {style: {opacity: 0, x: "-30px", y: "0px"}, triggers: []}
}, {
  slug: "move-txt-dropdown",
  name: "move-txt-dropdown",
  value: {
    style: {},
    triggers: [{
      type: "hover",
      selector: ".dd-txt",
      descend: !0,
      stepsA: [{transition: "transform 300ms ease 0ms", x: "15px", y: "0px"}],
      stepsB: [{transition: "transform 300ms ease 0ms", x: "0px", y: "0px"}]
    }]
  }
}, {
  slug: "show-dropdown-lvl-3",
  name: "show-dropdown-lvl-3",
  value: {
    style: {},
    triggers: [{
      type: "hover",
      selector: ".dd-lvl-2",
      descend: !0,
      stepsA: [{display: "block"}],
      stepsB: [{display: "none"}]
    }]
  }
}, {
  slug: "show-navigation-menu",
  name: "show-navigation-menu",
  value: {
    style: {},
    triggers: [{
      type: "click",
      selector: ".navigation",
      stepsA: [{height: "auto", transition: "height 500ms ease 0ms"}],
      stepsB: [{height: "0px", transition: "height 500ms ease 0ms"}]
    }]
  }
}, {
  slug: "show-arrow-slider",
  name: "show arrow slider",
  value: {
    style: {},
    triggers: [{
      type: "hover",
      selector: ".arrow-big-sl",
      descend: !0,
      stepsA: [{opacity: 1, transition: "opacity 300ms ease 0ms"}],
      stepsB: [{opacity: 0, transition: "opacity 300ms ease 0ms"}]
    }]
  }
}, {
  slug: "slide-big-title",
  name: "slide-big-title",
  value: {
    style: {opacity: 0, x: "0px", y: "-40px"},
    triggers: [{
      type: "slider",
      stepsA: [{
        opacity: 1,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "0px",
        group: "A",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "cf385391-6489-dc36-961c-28465a0b14f8", style: {modelType: "MacroStyle"}}
        }
      }],
      stepsB: [{
        opacity: 0,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "-40px",
        group: "B",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "cf385391-6489-dc36-961c-28465a0b14f8", style: {modelType: "MacroStyle"}}
        }
      }]
    }]
  }
}, {
  slug: "slide-sub-title",
  name: "slide-sub-title",
  value: {
    style: {opacity: 0, x: "0px", y: "-40px"},
    triggers: [{
      type: "slider",
      stepsA: [{
        wait: 200,
        group: "A",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "ca4313e1-84b4-df80-34b5-45e67b55dff9", style: {modelType: "MacroStyle"}}
        }
      }, {
        opacity: 1,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "0px",
        group: "A",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "ca4313e1-84b4-df80-34b5-45e67b55dff9", style: {modelType: "MacroStyle"}}
        }
      }],
      stepsB: [{
        opacity: 0,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "-40px",
        group: "B",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "ca4313e1-84b4-df80-34b5-45e67b55dff9", style: {modelType: "MacroStyle"}}
        }
      }]
    }]
  }
}, {
  slug: "slide-spc",
  name: "slide-spc",
  value: {
    style: {opacity: 0, x: "0px", y: "-40px"},
    triggers: [{
      type: "slider",
      stepsA: [{
        wait: 400,
        group: "A",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "5e9a21b9-70e9-a16d-e4ae-b9b2bd128d08", style: {modelType: "MacroStyle"}}
        }
      }, {
        opacity: 1,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "0px",
        group: "A",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "5e9a21b9-70e9-a16d-e4ae-b9b2bd128d08", style: {modelType: "MacroStyle"}}
        }
      }],
      stepsB: [{
        opacity: 0,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "-40px",
        group: "B",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "5e9a21b9-70e9-a16d-e4ae-b9b2bd128d08", style: {modelType: "MacroStyle"}}
        }
      }]
    }]
  }
}, {
  slug: "slide-mascot",
  name: "slide-mascot",
  value: {
    style: {opacity: 0, x: "0px", y: "100px"},
    triggers: [{
      type: "slider",
      stepsA: [{
        wait: 200,
        group: "A",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "17319b26-b108-af3e-50fb-1c9f40ec3274", style: {modelType: "MacroStyle"}}
        }
      }, {
        opacity: 1,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "0px",
        group: "A",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "17319b26-b108-af3e-50fb-1c9f40ec3274", style: {modelType: "MacroStyle"}}
        }
      }],
      stepsB: [{
        opacity: 0,
        transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms",
        x: "0px",
        y: "100px",
        group: "B",
        trigger: {
          modelType: "MacroTrigger",
          macro: {modelType: "Macro", guid: "17319b26-b108-af3e-50fb-1c9f40ec3274", style: {modelType: "MacroStyle"}}
        }
      }]
    }]
  }
}]);
