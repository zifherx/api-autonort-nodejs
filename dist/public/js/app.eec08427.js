"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e) {
  function t(t) {
    for (var a, c, u = t[0], o = t[1], s = t[2], l = 0, d = []; l < u.length; l++) {
      c = u[l], Object.prototype.hasOwnProperty.call(r, c) && r[c] && d.push(r[c][0]), r[c] = 0;
    }

    for (a in o) {
      Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    }

    h && h(t);

    while (d.length) {
      d.shift()();
    }

    return i.push.apply(i, s || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], a = !0, c = 1; c < n.length; c++) {
        var u = n[c];
        0 !== r[u] && (a = !1);
      }

      a && (i.splice(t--, 1), e = o(o.s = n[0]));
    }

    return e;
  }

  var a = {},
      c = {
    app: 0
  },
      r = {
    app: 0
  },
      i = [];

  function u(e) {
    return o.p + "js/" + ({}[e] || e) + "." + {
      "chunk-15dda605": "246d2f4e",
      "chunk-2d0a38be": "f41aeffd",
      "chunk-2d222ce6": "d659c725",
      "chunk-2d0a4b70": "fb0a5b1e",
      "chunk-2d0c4de7": "43a6252a",
      "chunk-2e7d08b1": "0e7d4fd0",
      "chunk-406bcdd6": "b8969c3f",
      "chunk-464751e3": "9ea409f9",
      "chunk-9fab9338": "cd46e4df",
      "chunk-488ea702": "0d153585",
      "chunk-4cbe4618": "dc149073",
      "chunk-70ae54fa": "673433cf",
      "chunk-9e7dd066": "3a0ab801",
      "chunk-dbbb3af0": "887aca0d",
      "chunk-ac00a36c": "6aaa8589",
      "chunk-00a05a78": "385dcf34",
      "chunk-d27703a4": "7f73a693",
      "chunk-05e63baa": "c8196c6f",
      "chunk-0dc4f1fb": "4c6ba6d5",
      "chunk-27443f68": "ea593668",
      "chunk-2dbe8e63": "4391d15a",
      "chunk-34033999": "1ece9be8",
      "chunk-41ddc89a": "af617598",
      "chunk-424e895c": "d4892363",
      "chunk-435e5340": "833a017a",
      "chunk-4517a804": "bcdc1238",
      "chunk-4c70d064": "5d0659ee",
      "chunk-5092e020": "00c2c1ee",
      "chunk-63d7f57e": "0f5aa02b",
      "chunk-7e36d66c": "d7f5e772",
      "chunk-acd698a0": "5c60c3b3",
      "chunk-dfad60fa": "1be79a46",
      "chunk-417d4324": "e5a6d16b",
      "chunk-417f9e0e": "5c084ded",
      "chunk-41a40532": "e4bd0eda",
      "chunk-41a532c8": "60edbb56",
      "chunk-41a53d66": "862b70ec",
      "chunk-41a795fe": "0da6ce78",
      "chunk-41a891a6": "77854b95",
      "chunk-41a9455c": "1e2ff45b",
      "chunk-41a94d60": "c699063b",
      "chunk-41ac0bd4": "39f4fe35",
      "chunk-cbaaac64": "e9f8e9bb",
      "chunk-08c9dcaa": "c4b48276",
      "chunk-28062148": "caa9620b",
      "chunk-cfe9773e": "b03081a8",
      "chunk-d1f6c994": "ff4647b7",
      "chunk-203bc28e": "0003fd9c"
    }[e] + ".js";
  }

  function o(t) {
    if (a[t]) return a[t].exports;
    var n = a[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }

  o.e = function (e) {
    var t = [],
        n = {
      "chunk-15dda605": 1,
      "chunk-2e7d08b1": 1,
      "chunk-406bcdd6": 1,
      "chunk-9fab9338": 1,
      "chunk-488ea702": 1,
      "chunk-4cbe4618": 1,
      "chunk-70ae54fa": 1,
      "chunk-9e7dd066": 1,
      "chunk-dbbb3af0": 1,
      "chunk-ac00a36c": 1,
      "chunk-00a05a78": 1,
      "chunk-d27703a4": 1,
      "chunk-05e63baa": 1,
      "chunk-0dc4f1fb": 1,
      "chunk-27443f68": 1,
      "chunk-2dbe8e63": 1,
      "chunk-34033999": 1,
      "chunk-41ddc89a": 1,
      "chunk-424e895c": 1,
      "chunk-435e5340": 1,
      "chunk-4517a804": 1,
      "chunk-4c70d064": 1,
      "chunk-5092e020": 1,
      "chunk-63d7f57e": 1,
      "chunk-7e36d66c": 1,
      "chunk-acd698a0": 1,
      "chunk-dfad60fa": 1,
      "chunk-cbaaac64": 1,
      "chunk-08c9dcaa": 1,
      "chunk-28062148": 1,
      "chunk-cfe9773e": 1,
      "chunk-d1f6c994": 1,
      "chunk-203bc28e": 1
    };
    c[e] ? t.push(c[e]) : 0 !== c[e] && n[e] && t.push(c[e] = new Promise(function (t, n) {
      for (var a = "css/" + ({}[e] || e) + "." + {
        "chunk-15dda605": "4fc78cd9",
        "chunk-2d0a38be": "31d6cfe0",
        "chunk-2d222ce6": "31d6cfe0",
        "chunk-2d0a4b70": "31d6cfe0",
        "chunk-2d0c4de7": "31d6cfe0",
        "chunk-2e7d08b1": "73d90aa2",
        "chunk-406bcdd6": "f5781af4",
        "chunk-464751e3": "31d6cfe0",
        "chunk-9fab9338": "97dcea3f",
        "chunk-488ea702": "acbc1271",
        "chunk-4cbe4618": "e14ccda2",
        "chunk-70ae54fa": "ba1d52f1",
        "chunk-9e7dd066": "6089b7f8",
        "chunk-dbbb3af0": "2aacc8a3",
        "chunk-ac00a36c": "5b67ae3a",
        "chunk-00a05a78": "c00e6084",
        "chunk-d27703a4": "5734e242",
        "chunk-05e63baa": "6bc5126f",
        "chunk-0dc4f1fb": "8c2f0773",
        "chunk-27443f68": "42c47dc4",
        "chunk-2dbe8e63": "bf3caf3c",
        "chunk-34033999": "6bc5126f",
        "chunk-41ddc89a": "8c2f0773",
        "chunk-424e895c": "ed2afac4",
        "chunk-435e5340": "8c2f0773",
        "chunk-4517a804": "8c2f0773",
        "chunk-4c70d064": "b901766c",
        "chunk-5092e020": "ed2afac4",
        "chunk-63d7f57e": "8c2f0773",
        "chunk-7e36d66c": "ed2afac4",
        "chunk-acd698a0": "ed2afac4",
        "chunk-dfad60fa": "42c47dc4",
        "chunk-417d4324": "31d6cfe0",
        "chunk-417f9e0e": "31d6cfe0",
        "chunk-41a40532": "31d6cfe0",
        "chunk-41a532c8": "31d6cfe0",
        "chunk-41a53d66": "31d6cfe0",
        "chunk-41a795fe": "31d6cfe0",
        "chunk-41a891a6": "31d6cfe0",
        "chunk-41a9455c": "31d6cfe0",
        "chunk-41a94d60": "31d6cfe0",
        "chunk-41ac0bd4": "31d6cfe0",
        "chunk-cbaaac64": "ca6df252",
        "chunk-08c9dcaa": "fdc350b3",
        "chunk-28062148": "f4f2c1ce",
        "chunk-cfe9773e": "9012d476",
        "chunk-d1f6c994": "c5210200",
        "chunk-203bc28e": "98f0342d"
      }[e] + ".css", r = o.p + a, i = document.getElementsByTagName("link"), u = 0; u < i.length; u++) {
        var s = i[u],
            l = s.getAttribute("data-href") || s.getAttribute("href");
        if ("stylesheet" === s.rel && (l === a || l === r)) return t();
      }

      var d = document.getElementsByTagName("style");

      for (u = 0; u < d.length; u++) {
        s = d[u], l = s.getAttribute("data-href");
        if (l === a || l === r) return t();
      }

      var h = document.createElement("link");
      h.rel = "stylesheet", h.type = "text/css", h.onload = t, h.onerror = function (t) {
        var a = t && t.target && t.target.src || r,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
        i.code = "CSS_CHUNK_LOAD_FAILED", i.request = a, delete c[e], h.parentNode.removeChild(h), n(i);
      }, h.href = r;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(h);
    }).then(function () {
      c[e] = 0;
    }));
    var a = r[e];
    if (0 !== a) if (a) t.push(a[2]);else {
      var i = new Promise(function (t, n) {
        a = r[e] = [t, n];
      });
      t.push(a[2] = i);
      var s,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, o.nc && l.setAttribute("nonce", o.nc), l.src = u(e);
      var d = new Error();

      s = function s(t) {
        l.onerror = l.onload = null, clearTimeout(h);
        var n = r[e];

        if (0 !== n) {
          if (n) {
            var a = t && ("load" === t.type ? "missing" : t.type),
                c = t && t.target && t.target.src;
            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + c + ")", d.name = "ChunkLoadError", d.type = a, d.request = c, n[1](d);
          }

          r[e] = void 0;
        }
      };

      var h = setTimeout(function () {
        s({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = s, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, o.m = e, o.c = a, o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" === _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      o.d(n, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return n;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "/", o.oe = function (e) {
    throw console.error(e), e;
  };
  var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
      l = s.push.bind(s);
  s.push = t, s = s.slice();

  for (var d = 0; d < s.length; d++) {
    t(s[d]);
  }

  var h = l;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function _(e, t, n) {
    e.exports = n("56d7");
  },
  "1f55": function f55(e, t, n) {},
  "27b8": function b8(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-alert", e._g(e._b({
        staticClass: "v-alert--material",
        attrs: {
          dark: ""
        },
        scopedSlots: e._u([e.$attrs.icon ? {
          key: "prepend",
          fn: function fn() {
            return [n("v-icon", {
              staticClass: "v-alert__icon elevation-6 white",
              attrs: {
                light: "",
                color: e.$attrs.color
              }
            }, [e._v(" " + e._s(e.$attrs.icon) + " ")])];
          },
          proxy: !0
        } : null, e.$attrs.dismissible ? {
          key: "close",
          fn: function fn(t) {
            var a = t.toggle;
            return [n("v-btn", {
              attrs: {
                "aria-label": e.$vuetify.lang.t("$vuetify.close"),
                color: "",
                icon: "",
                small: ""
              },
              on: {
                click: a
              }
            }, [n("v-icon", [e._v(" $vuetify.icons.cancel ")])], 1)];
          }
        } : null], null, !0)
      }, "v-alert", e.$attrs, !1), e.$listeners), [e._t("default")], 2);
    },
        c = [],
        r = {
      name: "MaterialAlert"
    },
        i = r,
        u = (n("b22c"), n("2877")),
        o = n("6544"),
        s = n.n(o),
        l = n("0798"),
        d = n("8336"),
        h = n("132d"),
        f = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = f.exports;
    s()(f, {
      VAlert: l["a"],
      VBtn: d["a"],
      VIcon: h["a"]
    });
  },
  3648: function _(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", {
        staticClass: "display-2 font-weight-light col col-12 text-left text--primary pa-0 mb-8"
      }, [n("h5", {
        staticClass: "font-weight-light"
      }, [e._v(" " + e._s(e.subheading) + " "), e.text ? [n("span", {
        staticClass: "subtitle-1",
        domProps: {
          textContent: e._s(e.text)
        }
      })] : e._e()], 2), n("div", {
        staticClass: "pt-2"
      }, [e._t("default")], 2)]);
    },
        c = [],
        r = {
      name: "Subheading",
      props: {
        subheading: {
          type: String,
          default: ""
        },
        text: {
          type: String,
          default: ""
        }
      }
    },
        i = r,
        u = n("2877"),
        o = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = o.exports;
  },
  3728: function _(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-list-item", {
        attrs: {
          href: e.href,
          rel: e.href && "#" !== e.href ? "noopener" : void 0,
          target: e.href && "#" !== e.href ? "_blank" : void 0,
          to: e.item.to,
          "active-class": "primary " + (e.isDark ? "white" : "black") + "--text"
        }
      }, [e.text ? n("v-list-item-icon", {
        staticClass: "v-list-item__icon--text",
        domProps: {
          textContent: e._s(e.computedText)
        }
      }) : e.item.icon ? n("v-list-item-icon", [n("v-icon", {
        domProps: {
          textContent: e._s(e.item.icon)
        }
      })], 1) : e._e(), e.item.title || e.item.subtitle ? n("v-list-item-content", [n("v-list-item-title", {
        domProps: {
          textContent: e._s(e.item.title)
        }
      }), n("v-list-item-subtitle", {
        domProps: {
          textContent: e._s(e.item.subtitle)
        }
      })], 1) : e._e()], 1);
    },
        c = [],
        r = (n("4160"), n("ac1f"), n("1276"), n("159b"), n("7560")),
        i = {
      name: "Item",
      mixins: [r["a"]],
      props: {
        item: {
          type: Object,
          default: function _default() {
            return {
              href: void 0,
              icon: void 0,
              subtitle: void 0,
              title: void 0,
              to: void 0
            };
          }
        },
        text: {
          type: Boolean,
          default: !1
        }
      },
      computed: {
        computedText: function computedText() {
          if (!this.item || !this.item.title) return "";
          var e = "";
          return this.item.title.split(" ").forEach(function (t) {
            e += t.substring(0, 1);
          }), e;
        },
        href: function href() {
          return this.item.href || (this.item.to ? void 0 : "#");
        }
      }
    },
        u = i,
        o = n("2877"),
        s = n("6544"),
        l = n.n(s),
        d = n("132d"),
        h = n("da13"),
        f = n("5d23"),
        b = n("34c3"),
        m = Object(o["a"])(u, a, c, !1, null, null, null);

    t["default"] = m.exports;
    l()(m, {
      VIcon: d["a"],
      VListItem: h["a"],
      VListItemContent: f["a"],
      VListItemIcon: b["a"],
      VListItemSubtitle: f["b"],
      VListItemTitle: f["c"]
    });
  },
  3864: function _(e, t, n) {},
  "3fd1": function fd1(e, t, n) {},
  "407e": function e(_e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-tabs", e._b({
        staticClass: "v-tabs--pill",
        attrs: {
          "active-class": e.color + " " + (e.$vuetify.theme.dark ? "black" : "white") + "--text",
          "hide-slider": ""
        },
        model: {
          value: e.internalValue,
          callback: function callback(t) {
            e.internalValue = t;
          },
          expression: "internalValue"
        }
      }, "v-tabs", e.$attrs, !1), [e._t("default"), e._t("items")], 2);
    },
        c = [],
        r = n("a452"),
        i = {
      name: "MaterialTabs",
      mixins: [r["a"]],
      props: {
        color: {
          type: String,
          default: "primary"
        }
      }
    },
        u = i,
        o = (n("9743"), n("2877")),
        s = n("6544"),
        l = n.n(s),
        d = n("fe57"),
        h = Object(o["a"])(u, a, c, !1, null, null, null);

    t["default"] = h.exports;
    l()(h, {
      VTabs: d["a"]
    });
  },
  "55a9": function a9(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-card", {
        staticClass: "text-center v-card--testimony"
      }, [n("div", {
        staticClass: "pt-6"
      }, [n("v-icon", {
        attrs: {
          color: "black",
          "x-large": ""
        }
      }, [e._v(" mdi-format-quote-close ")])], 1), n("v-card-text", {
        staticClass: "display-1 font-weight-light font-italic mb-3",
        domProps: {
          textContent: e._s(e.blurb)
        }
      }), n("div", {
        staticClass: "display-2 font-weight-light mb-2",
        domProps: {
          textContent: e._s(e.author)
        }
      }), n("div", {
        staticClass: "body-2 text-uppercase grey--text",
        domProps: {
          textContent: e._s(e.handle)
        }
      }), n("v-avatar", {
        staticClass: "elevation-12",
        attrs: {
          color: "grey",
          size: "100"
        }
      }, [n("v-img", {
        attrs: {
          alt: e.author + " Testimonial",
          src: e.avatar
        }
      })], 1), n("div")], 1);
    },
        c = [],
        r = {
      name: "BaseMaterialTestimony",
      props: {
        author: {
          type: String,
          default: ""
        },
        avatar: {
          type: String,
          default: "https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg"
        },
        blurb: {
          type: String,
          default: ""
        },
        handle: {
          type: String,
          default: ""
        }
      }
    },
        i = r,
        u = (n("7bbe"), n("2877")),
        o = n("6544"),
        s = n.n(o),
        l = n("8212"),
        d = n("b0af"),
        h = n("99d9"),
        f = n("132d"),
        b = n("adda"),
        m = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = m.exports;
    s()(m, {
      VAvatar: l["a"],
      VCard: d["a"],
      VCardText: h["b"],
      VIcon: f["a"],
      VImg: b["a"]
    });
  },
  "56d7": function d7(e, t, n) {
    "use strict";

    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");

    var a = n("2b0e"),
        c = function c() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("router-view");
    },
        r = [],
        i = {
      name: "App"
    },
        u = i,
        o = n("2877"),
        s = Object(o["a"])(u, c, r, !1, null, null, null),
        l = s.exports,
        d = (n("d3b7"), n("8c4f"));

    a["a"].use(d["a"]);
    var h = new d["a"]({
      mode: "hash",
      base: "/",
      routes: [{
        path: "/",
        component: function component() {
          return n.e("chunk-2e7d08b1").then(n.bind(null, "cd59"));
        },
        children: [{
          name: "Dashboard",
          path: "",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-00a05a78"), n.e("chunk-d27703a4")]).then(n.bind(null, "5c3a8"));
          }
        }, {
          name: "Listar Usuarios",
          path: "/usuarios",
          component: function component() {
            return Promise.all([n.e("chunk-464751e3"), n.e("chunk-9fab9338")]).then(n.bind(null, "8f61"));
          }
        }, {
          name: "Crear Usuario",
          path: "/usuarios/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-dfad60fa")]).then(n.bind(null, "5249"));
          }
        }, {
          name: "Actualizar Usuario",
          path: "/usuarios/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-27443f68")]).then(n.bind(null, "337b"));
          }
        }, {
          name: "Menu ADV",
          path: "/adv",
          component: function component() {
            return Promise.all([n.e("chunk-15dda605"), n.e("chunk-2d0a38be")]).then(n.bind(null, "0349"));
          }
        }, {
          name: "Lista Vehiculos",
          path: "/adv/vehiculos",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-2dbe8e63")]).then(n.bind(null, "aa27"));
          }
        }, {
          name: "Crear Vehiculo",
          path: "/adv/vehiculos/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-7e36d66c")]).then(n.bind(null, "788c"));
          }
        }, {
          name: "Editar Vehiculo",
          path: "/adv/vehiculos/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-5092e020")]).then(n.bind(null, "f9d3"));
          }
        }, {
          name: "Lista Expedientes",
          path: "/adv/expedientes",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-34033999")]).then(n.bind(null, "b9744"));
          }
        }, {
          name: "Crear Expediente",
          path: "/adv/expedientes/nuevo",
          component: function component() {
            return n.e("chunk-2d0c4de7").then(n.bind(null, "3d55"));
          }
        }, {
          name: "Editar Expediente",
          path: "/adv/expedientes/editar/:id",
          component: function component() {
            return n.e("chunk-2d0a4b70").then(n.bind(null, "082d"));
          }
        }, {
          name: "Lista Ventas",
          path: "/adv/ventas",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-05e63baa")]).then(n.bind(null, "ce89"));
          }
        }, {
          name: "Crear Venta",
          path: "/adv/ventas/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-4c70d064")]).then(n.bind(null, "5e1e"));
          }
        }, {
          name: "Editar Venta",
          path: "/adv/ventas/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-acd698a0")]).then(n.bind(null, "17d9"));
          }
        }, {
          name: "Vista Venta",
          path: "/adv/ventas/vista/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-424e895c")]).then(n.bind(null, "07cc"));
          }
        }, {
          name: "Menu Ventas",
          path: "/ventas",
          component: function component() {
            return Promise.all([n.e("chunk-15dda605"), n.e("chunk-2d222ce6")]).then(n.bind(null, "cfd1"));
          }
        }, {
          name: "Lista Campañas",
          path: "/ventas/campañas",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-63d7f57e")]).then(n.bind(null, "6369"));
          }
        }, {
          name: "Crear Campaña",
          path: "/ventas/campañas/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41a795fe")]).then(n.bind(null, "5459"));
          }
        }, {
          name: "Editar Campaña",
          path: "/ventas/campañas/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41a40532")]).then(n.bind(null, "90f8"));
          }
        }, {
          name: "Lista Financiamiento",
          path: "/ventas/financiamiento",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-435e5340")]).then(n.bind(null, "d56d"));
          }
        }, {
          name: "Crear Financiamiento",
          path: "/ventas/financiamiento/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41ac0bd4")]).then(n.bind(null, "071b"));
          }
        }, {
          name: "Editar Financiamiento",
          path: "/ventas/financiamiento/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41a94d60")]).then(n.bind(null, "36c2"));
          }
        }, {
          name: "Lista Clientes",
          path: "/ventas/clientes",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-0dc4f1fb")]).then(n.bind(null, "ba83"));
          }
        }, {
          name: "Crear Cliente",
          path: "/ventas/clientes/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41a532c8")]).then(n.bind(null, "6ea0"));
          }
        }, {
          name: "Editar Cliente",
          path: "/ventas/clientes/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41a891a6")]).then(n.bind(null, "40c6"));
          }
        }, {
          name: "Lista Accesorios",
          path: "/ventas/accesorios",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-41ddc89a")]).then(n.bind(null, "43e8"));
          }
        }, {
          name: "Crear Accesorio",
          path: "/ventas/accesorios/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-417f9e0e")]).then(n.bind(null, "a309"));
          }
        }, {
          name: "Editar Accesorio",
          path: "/ventas/accesorios/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41a53d66")]).then(n.bind(null, "6e55"));
          }
        }, {
          name: "Lista Vendedores",
          path: "/ventas/vendedores",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-00a05a78"), n.e("chunk-4517a804")]).then(n.bind(null, "8940"));
          }
        }, {
          name: "Crear Vendedor",
          path: "/ventas/vendedores/nuevo",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-41a9455c")]).then(n.bind(null, "37e5"));
          }
        }, {
          name: "Editar Vendedor",
          path: "/ventas/vendedores/editar/:id",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-464751e3"), n.e("chunk-417d4324")]).then(n.bind(null, "bd8f"));
          }
        }, {
          name: "User Profile",
          path: "pages/user",
          component: function component() {
            return Promise.all([n.e("chunk-dbbb3af0"), n.e("chunk-ac00a36c"), n.e("chunk-cbaaac64")]).then(n.bind(null, "78a0"));
          }
        }, {
          name: "Notifications",
          path: "components/notifications",
          component: function component() {
            return n.e("chunk-9e7dd066").then(n.bind(null, "38e4"));
          }
        }, {
          name: "Icons",
          path: "components/icons",
          component: function component() {
            return n.e("chunk-4cbe4618").then(n.bind(null, "3da0"));
          }
        }, {
          name: "Typography",
          path: "components/typography",
          component: function component() {
            return n.e("chunk-488ea702").then(n.bind(null, "01af"));
          }
        }, {
          name: "Regular Tables",
          path: "tables/regular-tables",
          component: function component() {
            return n.e("chunk-406bcdd6").then(n.bind(null, "35fd"));
          }
        }, {
          name: "Google Maps",
          path: "maps/google-maps",
          component: function component() {
            return n.e("chunk-70ae54fa").then(n.bind(null, "3b73"));
          }
        }]
      }]
    }),
        f = n("2f62");
    a["a"].use(f["a"]);
    var b = new f["a"].Store({
      state: {
        barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
        barImage: "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",
        drawer: null
      },
      mutations: {
        SET_BAR_IMAGE: function SET_BAR_IMAGE(e, t) {
          e.barImage = t;
        },
        SET_DRAWER: function SET_DRAWER(e, t) {
          e.drawer = t;
        }
      },
      actions: {}
    }),
        m = (n("4160"), n("ac1f"), n("5319"), n("159b"), n("ddb0"), n("8103")),
        p = n.n(m),
        k = n("bba4"),
        v = n.n(k),
        g = n("e51e");
    g.keys().forEach(function (e) {
      var t = g(e),
          n = p()(v()(e.replace(/^\.\//, "").replace(/\.\w+$/, "")));
      a["a"].component("Base".concat(n), t.default || t);
    });
    n("4633");
    a["a"].use(n("84b5"));
    var y = n("7bb1"),
        C = n("4c93");
    Object(y["c"])("email", C["a"]), Object(y["c"])("max", C["b"]), Object(y["c"])("min", C["c"]), Object(y["c"])("numeric", C["d"]), Object(y["c"])("required", C["e"]), a["a"].component("validation-provider", y["b"]), a["a"].component("validation-observer", y["a"]);

    var _ = n("f309"),
        x = n("5530"),
        P = n("a925"),
        V = n("1072");

    a["a"].use(P["a"]);
    var S = {
      en: Object(x["a"])(Object(x["a"])({}, n("edd4")), {}, {
        $vuetify: V["a"]
      })
    },
        O = new P["a"]({
      locale: "en",
      fallbackLocale: "en",
      messages: S
    });
    n("1f55");
    a["a"].use(_["a"]);
    var w = {
      primary: "#4CAF50",
      secondary: "#9C27b0",
      accent: "#9C27b0",
      info: "#00CAE3"
    },
        j = new _["a"]({
      lang: {
        t: function t(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
            n[a - 1] = arguments[a];
          }

          return O.t(e, n);
        }
      },
      theme: {
        themes: {
          dark: w,
          light: w
        }
      }
    });
    a["a"].config.productionTip = !1, new a["a"]({
      router: h,
      store: b,
      vuetify: j,
      i18n: O,
      render: function render(e) {
        return e(l);
      }
    }).$mount("#app");
  },
  "5ac2": function ac2(e, t, n) {
    "use strict";

    n("e500");
  },
  "5f10": function f10(e, t, n) {},
  6661: function _(e, t, n) {},
  6904: function _(e, t, n) {},
  "740d": function d(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("section", {
        staticClass: "mb-12 text-center"
      }, [n("h1", {
        staticClass: "font-weight-light mb-2 headline",
        domProps: {
          textContent: e._s("Vuetify " + e.heading)
        }
      }), n("span", {
        staticClass: "font-weight-light subtitle-1"
      }, [e._v(" Please checkout the "), n("a", {
        staticClass: "secondary--text",
        staticStyle: {
          "text-decoration": "none"
        },
        attrs: {
          href: "https://vuetifyjs.com/" + e.link,
          rel: "noopener",
          target: "_blank"
        }
      }, [e._v(" full documentation ")])])]);
    },
        c = [],
        r = {
      name: "VComponent",
      props: {
        heading: {
          type: String,
          default: ""
        },
        link: {
          type: String,
          default: ""
        }
      }
    },
        i = r,
        u = n("2877"),
        o = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = o.exports;
  },
  "7bbe": function bbe(e, t, n) {
    "use strict";

    n("5f10");
  },
  "8df3": function df3(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("base-material-card", e._g(e._b({
        staticClass: "v-card--material-chart",
        scopedSlots: e._u([{
          key: "heading",
          fn: function fn() {
            return [n("chartist", {
              staticStyle: {
                "max-height": "150px"
              },
              attrs: {
                data: e.data,
                "event-handlers": e.eventHandlers,
                options: e.options,
                ratio: e.ratio,
                "responsive-options": e.responsiveOptions,
                type: e.type
              }
            })];
          },
          proxy: !0
        }])
      }, "base-material-card", e.$attrs, !1), e.$listeners), [e._t("reveal-actions", null, {
        slot: "reveal-actions"
      }), e._t("default"), e._t("actions", null, {
        slot: "actions"
      })], 2);
    },
        c = [],
        r = (n("caad"), {
      name: "MaterialChartCard",
      inheritAttrs: !1,
      props: {
        data: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        eventHandlers: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        options: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        ratio: {
          type: String,
          default: void 0
        },
        responsiveOptions: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        type: {
          type: String,
          required: !0,
          validator: function validator(e) {
            return ["Bar", "Line", "Pie"].includes(e);
          }
        }
      }
    }),
        i = r,
        u = (n("e56a"), n("2877")),
        o = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = o.exports;
  },
  9743: function _(e, t, n) {
    "use strict";

    n("3fd1");
  },
  a46f: function a46f(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("base-material-card", e._g(e._b({
        staticClass: "v-card--material-stats",
        attrs: {
          icon: e.icon
        },
        scopedSlots: e._u([{
          key: "after-heading",
          fn: function fn() {
            return [n("div", {
              staticClass: "ml-auto text-right"
            }, [n("div", {
              staticClass: "body-3 grey--text font-weight-light",
              domProps: {
                textContent: e._s(e.title)
              }
            }), n("h3", {
              staticClass: "display-2 font-weight-light text--primary"
            }, [e._v(" " + e._s(e.value) + " "), n("small", [e._v(e._s(e.smallValue))])])])];
          },
          proxy: !0
        }])
      }, "base-material-card", e.$attrs, !1), e.$listeners), [n("v-col", {
        staticClass: "px-0",
        attrs: {
          cols: "12"
        }
      }, [n("v-divider")], 1), n("v-icon", {
        staticClass: "ml-2 mr-1",
        attrs: {
          color: e.subIconColor,
          size: "16"
        }
      }, [e._v(" " + e._s(e.subIcon) + " ")]), n("span", {
        staticClass: "caption grey--text font-weight-light",
        class: e.subTextColor,
        domProps: {
          textContent: e._s(e.subText)
        }
      })], 1);
    },
        c = [],
        r = n("5530"),
        i = n("c034"),
        u = {
      name: "MaterialStatsCard",
      inheritAttrs: !1,
      props: Object(r["a"])(Object(r["a"])({}, i["default"].props), {}, {
        icon: {
          type: String,
          required: !0
        },
        subIcon: {
          type: String,
          default: void 0
        },
        subIconColor: {
          type: String,
          default: void 0
        },
        subTextColor: {
          type: String,
          default: void 0
        },
        subText: {
          type: String,
          default: void 0
        },
        title: {
          type: String,
          default: void 0
        },
        value: {
          type: String,
          default: void 0
        },
        smallValue: {
          type: String,
          default: void 0
        }
      })
    },
        o = u,
        s = (n("ecdb"), n("2877")),
        l = n("6544"),
        d = n.n(l),
        h = n("62ad"),
        f = n("ce7e"),
        b = n("132d"),
        m = Object(s["a"])(o, a, c, !1, null, null, null);

    t["default"] = m.exports;
    d()(m, {
      VCol: h["a"],
      VDivider: f["a"],
      VIcon: b["a"]
    });
  },
  afbc: function afbc(e, t, n) {
    "use strict";

    n("c5ef");
  },
  b22c: function b22c(e, t, n) {
    "use strict";

    n("6904");
  },
  c034: function c034(e, t, n) {
    "use strict";

    n.r(t);
    var a,
        c,
        r = n("b0af"),
        i = {
      name: "Card",
      extends: r["a"]
    },
        u = i,
        o = n("2877"),
        s = Object(o["a"])(u, a, c, !1, null, null, null);
    t["default"] = s.exports;
  },
  c5ef: function c5ef(e, t, n) {},
  cc0b: function cc0b(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-snackbar", e._b({
        staticClass: "v-snackbar--material",
        model: {
          value: e.internalValue,
          callback: function callback(t) {
            e.internalValue = t;
          },
          expression: "internalValue"
        }
      }, "v-snackbar", Object.assign({}, e.$attrs, {
        color: "transparent"
      }), !1), [n("base-material-alert", {
        staticClass: "ma-0",
        attrs: {
          color: e.$attrs.color,
          dismissible: e.dismissible,
          type: e.type,
          dark: ""
        },
        model: {
          value: e.internalValue,
          callback: function callback(t) {
            e.internalValue = t;
          },
          expression: "internalValue"
        }
      }, [e._t("default")], 2)], 1);
    },
        c = [],
        r = {
      name: "BaseMaterialSnackbar",
      props: {
        dismissible: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: ""
        },
        value: Boolean
      },
      data: function data() {
        return {
          internalValue: this.value
        };
      },
      watch: {
        internalValue: function internalValue(e, t) {
          e !== t && this.$emit("input", e);
        },
        value: function value(e, t) {
          e !== t && (this.internalValue = e);
        }
      }
    },
        i = r,
        u = (n("5ac2"), n("2877")),
        o = n("6544"),
        s = n.n(o),
        l = n("2db4"),
        d = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = d.exports;
    s()(d, {
      VSnackbar: l["a"]
    });
  },
  e1fc: function e1fc(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("base-item-group", {
        attrs: {
          item: e.item,
          text: "",
          "sub-group": ""
        }
      });
    },
        c = [],
        r = {
      name: "ItemSubGroup",
      props: {
        item: {
          type: Object,
          default: function _default() {
            return {
              avatar: void 0,
              group: void 0,
              title: void 0,
              children: []
            };
          }
        }
      }
    },
        i = r,
        u = n("2877"),
        o = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = o.exports;
  },
  e3bb: function e3bb(e, t, n) {
    "use strict";

    n("6661");
  },
  e500: function e500(e, t, n) {},
  e51e: function e51e(e, t, n) {
    var a = {
      "./Card.vue": "c034",
      "./Item.vue": "3728",
      "./ItemGroup.vue": "e9c3",
      "./ItemSubGroup.vue": "e1fc",
      "./MaterialAlert.vue": "27b8",
      "./MaterialCard.vue": "e6f8",
      "./MaterialChartCard.vue": "8df3",
      "./MaterialSnackbar.vue": "cc0b",
      "./MaterialStatsCard.vue": "a46f",
      "./MaterialTabs.vue": "407e",
      "./MaterialTestimony.vue": "55a9",
      "./Subheading.vue": "3648",
      "./VComponent.vue": "740d"
    };

    function c(e) {
      var t = r(e);
      return n(t);
    }

    function r(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t;
      }

      return a[e];
    }

    c.keys = function () {
      return Object.keys(a);
    }, c.resolve = r, e.exports = c, c.id = "e51e";
  },
  e56a: function e56a(e, t, n) {
    "use strict";

    n("3864");
  },
  e6f8: function e6f8(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-card", e._b({
        staticClass: "v-card--material pa-3",
        class: e.classes
      }, "v-card", e.$attrs, !1), [n("div", {
        staticClass: "d-flex grow flex-wrap"
      }, [e.avatar ? n("v-avatar", {
        staticClass: "mx-auto v-card--material__avatar elevation-6",
        attrs: {
          size: "128",
          color: "grey"
        }
      }, [n("v-img", {
        attrs: {
          src: e.avatar
        }
      })], 1) : n("v-sheet", {
        staticClass: "text-start v-card--material__heading mb-n6",
        class: {
          "pa-7": !e.$slots.image
        },
        attrs: {
          color: e.color,
          "max-height": e.icon ? 90 : void 0,
          width: e.icon ? "auto" : "100%",
          elevation: "6",
          dark: ""
        }
      }, [e.$slots.heading ? e._t("heading") : e.$slots.image ? e._t("image") : e.title && !e.icon ? n("div", {
        staticClass: "display-1 font-weight-light",
        domProps: {
          textContent: e._s(e.title)
        }
      }) : e.icon ? n("v-icon", {
        attrs: {
          size: "32"
        },
        domProps: {
          textContent: e._s(e.icon)
        }
      }) : e._e(), e.text ? n("div", {
        staticClass: "headline font-weight-thin",
        domProps: {
          textContent: e._s(e.text)
        }
      }) : e._e()], 2), e.$slots["after-heading"] ? n("div", {
        staticClass: "ml-6"
      }, [e._t("after-heading")], 2) : e.icon && e.title ? n("div", {
        staticClass: "ml-4"
      }, [n("div", {
        staticClass: "card-title font-weight-light",
        domProps: {
          textContent: e._s(e.title)
        }
      })]) : e._e()], 1), e._t("default"), e.$slots.actions ? [n("v-divider", {
        staticClass: "mt-2"
      }), n("v-card-actions", {
        staticClass: "pb-0"
      }, [e._t("actions")], 2)] : e._e()], 2);
    },
        c = [],
        r = {
      name: "MaterialCard",
      props: {
        avatar: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "success"
        },
        icon: {
          type: String,
          default: void 0
        },
        image: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        title: {
          type: String,
          default: ""
        }
      },
      computed: {
        classes: function classes() {
          return {
            "v-card--material--has-heading": this.hasHeading
          };
        },
        hasHeading: function hasHeading() {
          return Boolean(this.$slots.heading || this.title || this.icon);
        },
        hasAltHeading: function hasAltHeading() {
          return Boolean(this.$slots.heading || this.title && this.icon);
        }
      }
    },
        i = r,
        u = (n("e3bb"), n("2877")),
        o = n("6544"),
        s = n.n(o),
        l = n("8212"),
        d = n("b0af"),
        h = n("99d9"),
        f = n("ce7e"),
        b = n("132d"),
        m = n("adda"),
        p = n("8dd9"),
        k = Object(u["a"])(i, a, c, !1, null, null, null);

    t["default"] = k.exports;
    s()(k, {
      VAvatar: l["a"],
      VCard: d["a"],
      VCardActions: h["a"],
      VDivider: f["a"],
      VIcon: b["a"],
      VImg: m["a"],
      VSheet: p["a"]
    });
  },
  e9c3: function e9c3(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-list-group", {
        attrs: {
          group: e.group,
          "prepend-icon": e.item.icon,
          "sub-group": e.subGroup,
          "append-icon": "mdi-menu-down",
          color: "rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)" !== e.barColor ? "white" : "grey darken-1"
        },
        scopedSlots: e._u([{
          key: "activator",
          fn: function fn() {
            return [e.text ? n("v-list-item-icon", {
              staticClass: "v-list-item__icon--text",
              domProps: {
                textContent: e._s(e.computedText)
              }
            }) : e.item.avatar ? n("v-list-item-avatar", {
              staticClass: "align-self-center",
              attrs: {
                color: "white",
                contain: ""
              }
            }, [n("v-img", {
              attrs: {
                src: "https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
              }
            })], 1) : e._e(), n("v-list-item-content", [n("v-list-item-title", {
              domProps: {
                textContent: e._s(e.item.title)
              }
            })], 1)];
          },
          proxy: !0
        }])
      }, [e._l(e.children, function (e, t) {
        return [e.children ? n("base-item-sub-group", {
          key: "sub-group-" + t,
          attrs: {
            item: e
          }
        }) : n("base-item", {
          key: "item-" + t,
          attrs: {
            item: e,
            text: ""
          }
        })];
      })], 2);
    },
        c = [],
        r = (n("99af"), n("4de4"), n("4160"), n("a15b"), n("d81d"), n("ac1f"), n("1276"), n("159b"), n("5530")),
        i = n("375a"),
        u = n.n(i),
        o = n("2f62"),
        s = {
      name: "ItemGroup",
      inheritAttrs: !1,
      props: {
        item: {
          type: Object,
          default: function _default() {
            return {
              avatar: void 0,
              group: void 0,
              title: void 0,
              children: []
            };
          }
        },
        subGroup: {
          type: Boolean,
          default: !1
        },
        text: {
          type: Boolean,
          default: !1
        }
      },
      computed: Object(r["a"])(Object(r["a"])({}, Object(o["c"])(["barColor"])), {}, {
        children: function children() {
          var e = this;
          return this.item.children.map(function (t) {
            return Object(r["a"])(Object(r["a"])({}, t), {}, {
              to: t.to ? "".concat(e.item.group, "/").concat(t.to) : void 0
            });
          });
        },
        computedText: function computedText() {
          if (!this.item || !this.item.title) return "";
          var e = "";
          return this.item.title.split(" ").forEach(function (t) {
            e += t.substring(0, 1);
          }), e;
        },
        group: function group() {
          return this.genGroup(this.item.children);
        }
      }),
      methods: {
        genGroup: function genGroup(e) {
          var t = this;
          return e.filter(function (e) {
            return e.to;
          }).map(function (e) {
            var n = e.group || t.item.group,
                a = "".concat(n, "/").concat(u()(e.to));
            return e.children && (a = "".concat(a, "|").concat(t.genGroup(e.children))), a;
          }).join("|");
        }
      }
    },
        l = s,
        d = (n("afbc"), n("2877")),
        h = n("6544"),
        f = n.n(h),
        b = n("adda"),
        m = n("56b0"),
        p = n("8270"),
        k = n("5d23"),
        v = n("34c3"),
        g = Object(d["a"])(l, a, c, !1, null, null, null);

    t["default"] = g.exports;
    f()(g, {
      VImg: b["a"],
      VListGroup: m["a"],
      VListItemAvatar: p["a"],
      VListItemContent: k["a"],
      VListItemIcon: v["a"],
      VListItemTitle: k["c"]
    });
  },
  ecdb: function ecdb(e, t, n) {
    "use strict";

    n("f94b");
  },
  edd4: function edd4(e) {
    e.exports = JSON.parse('{"avatar":"Sistema ADV","buttons":"Buttons","calendar":"Calendar","charts":"Charts","components":"Components","ct":"CT","dashboard":"Dashboard","dtables":"Data Tables","eforms":"Extended Forms","error":"Error Page","etables":"Extended Tables","example":"Example","forms":"Forms","fullscreen":"Full Screen Map","google":"Google Maps","grid":"Grid System","icons":"Icons","lock":"Lock Screen Page","login":"Login Page","maps":"Maps","multi":"Multi Level Collapse","notifications":"Notifications","pages":"Pages","plan":"Choose Plan","pricing":"Pricing","my-profile":"Mi Perfil","edit-profile":"Editar Perfil","register":"Register Page","rforms":"Regular Forms","rtables":"Regular Tables","rtl":"RTL Support","search":"Search","settings":"Settings","tables":"Tables","tabs":"Tabs","tim":"Creative Tim","timeline":"Timeline","typography":"Typography","upgrade":"Upgrade To PRO","user":"User Profile","vforms":"Validation Forms","widgets":"Widgets","wizard":"Wizard"}');
  },
  f94b: function f94b(e, t, n) {}
});
//# sourceMappingURL=app.eec08427.js.map