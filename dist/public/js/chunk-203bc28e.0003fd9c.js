"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-203bc28e"], {
  "0fd9": function fd9(t, e, n) {
    "use strict";

    n("99af"), n("4160"), n("caad"), n("13d5"), n("4ec9"), n("b64b"), n("d3b7"), n("ac1f"), n("2532"), n("3ca3"), n("5319"), n("159b"), n("ddb0");
    var i = n("ade3"),
        a = n("5530"),
        o = (n("4b85"), n("2b0e")),
        r = n("d9f7"),
        s = n("80d2"),
        c = ["sm", "md", "lg", "xl"],
        u = ["start", "end", "center"];

    function l(t, e) {
      return c.reduce(function (n, i) {
        return n[t + Object(s["E"])(i)] = e(), n;
      }, {});
    }

    var d = function d(t) {
      return [].concat(u, ["baseline", "stretch"]).includes(t);
    },
        p = l("align", function () {
      return {
        type: String,
        default: null,
        validator: d
      };
    }),
        f = function f(t) {
      return [].concat(u, ["space-between", "space-around"]).includes(t);
    },
        h = l("justify", function () {
      return {
        type: String,
        default: null,
        validator: f
      };
    }),
        v = function v(t) {
      return [].concat(u, ["space-between", "space-around", "stretch"]).includes(t);
    },
        g = l("alignContent", function () {
      return {
        type: String,
        default: null,
        validator: v
      };
    }),
        b = {
      align: Object.keys(p),
      justify: Object.keys(h),
      alignContent: Object.keys(g)
    },
        y = {
      align: "align",
      justify: "justify",
      alignContent: "align-content"
    };

    function m(t, e, n) {
      var i = y[t];

      if (null != n) {
        if (e) {
          var a = e.replace(t, "");
          i += "-".concat(a);
        }

        return i += "-".concat(n), i.toLowerCase();
      }
    }

    var j = new Map();
    e["a"] = o["a"].extend({
      name: "v-row",
      functional: !0,
      props: Object(a["a"])(Object(a["a"])(Object(a["a"])({
        tag: {
          type: String,
          default: "div"
        },
        dense: Boolean,
        noGutters: Boolean,
        align: {
          type: String,
          default: null,
          validator: d
        }
      }, p), {}, {
        justify: {
          type: String,
          default: null,
          validator: f
        }
      }, h), {}, {
        alignContent: {
          type: String,
          default: null,
          validator: v
        }
      }, g),
      render: function render(t, e) {
        var n = e.props,
            a = e.data,
            o = e.children,
            s = "";

        for (var c in n) {
          s += String(n[c]);
        }

        var u = j.get(s);
        return u || function () {
          var t, e;

          for (e in u = [], b) {
            b[e].forEach(function (t) {
              var i = n[t],
                  a = m(e, t, i);
              a && u.push(a);
            });
          }

          u.push((t = {
            "no-gutters": n.noGutters,
            "row--dense": n.dense
          }, Object(i["a"])(t, "align-".concat(n.align), n.align), Object(i["a"])(t, "justify-".concat(n.justify), n.justify), Object(i["a"])(t, "align-content-".concat(n.alignContent), n.alignContent), t)), j.set(s, u);
        }(), t(n.tag, Object(r["a"])(a, {
          staticClass: "row",
          class: u
        }), o);
      }
    });
  },
  "145b": function b(t, e, n) {
    "use strict";

    n("4a75");
  },
  1859: function _(t, e, n) {
    "use strict";

    n.r(e);

    var i = function i() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;
      return n("v-footer", {
        attrs: {
          id: "dashboard-core-footer"
        }
      }, [n("v-container", [n("v-row", {
        attrs: {
          align: "center",
          "no-gutters": ""
        }
      }, [n("v-spacer", {
        staticClass: "hidden-sm-and-down"
      }), n("v-col", {
        attrs: {
          cols: "12",
          md: "auto"
        }
      }, [n("div", {
        staticClass: "body-1 font-weight-light pt-6 pt-md-0 text-center"
      }, [t._v(" © 2021, made with "), n("v-icon", {
        attrs: {
          size: "18"
        }
      }, [t._v(" mdi-heart ")]), t._v(" by Ziphonex.com ")], 1)])], 1)], 1)], 1);
    },
        a = [],
        o = {
      name: "DashboardCoreFooter",
      data: function data() {
        return {};
      }
    },
        r = o,
        s = (n("145b"), n("2877")),
        c = n("6544"),
        u = n.n(c),
        l = n("62ad"),
        d = n("a523"),
        p = (n("a9e3"), n("c7cd"), n("5530")),
        f = (n("b5b6"), n("8dd9")),
        h = n("3a66"),
        v = n("d10f"),
        g = n("58df"),
        b = n("80d2"),
        y = Object(g["a"])(f["a"], Object(h["a"])("footer", ["height", "inset"]), v["a"]).extend({
      name: "v-footer",
      props: {
        height: {
          default: "auto",
          type: [Number, String]
        },
        inset: Boolean,
        padless: Boolean,
        tag: {
          type: String,
          default: "footer"
        }
      },
      computed: {
        applicationProperty: function applicationProperty() {
          return this.inset ? "insetFooter" : "footer";
        },
        classes: function classes() {
          return Object(p["a"])(Object(p["a"])({}, f["a"].options.computed.classes.call(this)), {}, {
            "v-footer--absolute": this.absolute,
            "v-footer--fixed": !this.absolute && (this.app || this.fixed),
            "v-footer--padless": this.padless,
            "v-footer--inset": this.inset
          });
        },
        computedBottom: function computedBottom() {
          if (this.isPositioned) return this.app ? this.$vuetify.application.bottom : 0;
        },
        computedLeft: function computedLeft() {
          if (this.isPositioned) return this.app && this.inset ? this.$vuetify.application.left : 0;
        },
        computedRight: function computedRight() {
          if (this.isPositioned) return this.app && this.inset ? this.$vuetify.application.right : 0;
        },
        isPositioned: function isPositioned() {
          return Boolean(this.absolute || this.fixed || this.app);
        },
        styles: function styles() {
          var t = parseInt(this.height);
          return Object(p["a"])(Object(p["a"])({}, f["a"].options.computed.styles.call(this)), {}, {
            height: isNaN(t) ? t : Object(b["g"])(t),
            left: Object(b["g"])(this.computedLeft),
            right: Object(b["g"])(this.computedRight),
            bottom: Object(b["g"])(this.computedBottom)
          });
        }
      },
      methods: {
        updateApplication: function updateApplication() {
          var t = parseInt(this.height);
          return isNaN(t) ? this.$el ? this.$el.clientHeight : 0 : t;
        }
      },
      render: function render(t) {
        var e = this.setBackgroundColor(this.color, {
          staticClass: "v-footer",
          class: this.classes,
          style: this.styles
        });
        return t(this.tag, e, this.$slots.default);
      }
    }),
        m = n("132d"),
        j = n("0fd9"),
        O = n("2fa4"),
        w = Object(s["a"])(r, i, a, !1, null, null, null);

    e["default"] = w.exports;
    u()(w, {
      VCol: l["a"],
      VContainer: d["a"],
      VFooter: y,
      VIcon: m["a"],
      VRow: j["a"],
      VSpacer: O["a"]
    });
  },
  "20f6": function f6(t, e, n) {},
  "2fa4": function fa4(t, e, n) {
    "use strict";

    n("20f6");
    var i = n("80d2");
    e["a"] = Object(i["i"])("spacer", "div", "v-spacer");
  },
  "3a66": function a66(t, e, n) {
    "use strict";

    n.d(e, "a", function () {
      return o;
    });
    var i = n("fe6c"),
        a = n("58df");

    function o(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return Object(a["a"])(Object(i["b"])(["absolute", "fixed"])).extend({
        name: "applicationable",
        props: {
          app: Boolean
        },
        computed: {
          applicationProperty: function applicationProperty() {
            return t;
          }
        },
        watch: {
          app: function app(t, e) {
            e ? this.removeApplication(!0) : this.callUpdate();
          },
          applicationProperty: function applicationProperty(t, e) {
            this.$vuetify.application.unregister(this._uid, e);
          }
        },
        activated: function activated() {
          this.callUpdate();
        },
        created: function created() {
          for (var t = 0, n = e.length; t < n; t++) {
            this.$watch(e[t], this.callUpdate);
          }

          this.callUpdate();
        },
        mounted: function mounted() {
          this.callUpdate();
        },
        deactivated: function deactivated() {
          this.removeApplication();
        },
        destroyed: function destroyed() {
          this.removeApplication();
        },
        methods: {
          callUpdate: function callUpdate() {
            this.app && this.$vuetify.application.register(this._uid, this.applicationProperty, this.updateApplication());
          },
          removeApplication: function removeApplication() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            (t || this.app) && this.$vuetify.application.unregister(this._uid, this.applicationProperty);
          },
          updateApplication: function updateApplication() {
            return 0;
          }
        }
      });
    }
  },
  "4a75": function a75(t, e, n) {},
  a523: function a523(t, e, n) {
    "use strict";

    n("99af"), n("4de4"), n("b64b"), n("2ca0"), n("20f6"), n("4b85"), n("a15b"), n("498a");
    var i = n("2b0e");

    function a(t) {
      return i["a"].extend({
        name: "v-".concat(t),
        functional: !0,
        props: {
          id: String,
          tag: {
            type: String,
            default: "div"
          }
        },
        render: function render(e, n) {
          var i = n.props,
              a = n.data,
              o = n.children;
          a.staticClass = "".concat(t, " ").concat(a.staticClass || "").trim();
          var r = a.attrs;

          if (r) {
            a.attrs = {};
            var s = Object.keys(r).filter(function (t) {
              if ("slot" === t) return !1;
              var e = r[t];
              return t.startsWith("data-") ? (a.attrs[t] = e, !1) : e || "string" === typeof e;
            });
            s.length && (a.staticClass += " ".concat(s.join(" ")));
          }

          return i.id && (a.domProps = a.domProps || {}, a.domProps.id = i.id), e(i.tag, a, o);
        }
      });
    }

    var o = n("d9f7");
    e["a"] = a("container").extend({
      name: "v-container",
      functional: !0,
      props: {
        id: String,
        tag: {
          type: String,
          default: "div"
        },
        fluid: {
          type: Boolean,
          default: !1
        }
      },
      render: function render(t, e) {
        var n,
            i = e.props,
            a = e.data,
            r = e.children,
            s = a.attrs;
        return s && (a.attrs = {}, n = Object.keys(s).filter(function (t) {
          if ("slot" === t) return !1;
          var e = s[t];
          return t.startsWith("data-") ? (a.attrs[t] = e, !1) : e || "string" === typeof e;
        })), i.id && (a.domProps = a.domProps || {}, a.domProps.id = i.id), t(i.tag, Object(o["a"])(a, {
          staticClass: "container",
          class: Array({
            "container--fluid": i.fluid
          }).concat(n || [])
        }), r);
      }
    });
  },
  b5b6: function b5b6(t, e, n) {}
}]);
//# sourceMappingURL=chunk-203bc28e.0003fd9c.js.map