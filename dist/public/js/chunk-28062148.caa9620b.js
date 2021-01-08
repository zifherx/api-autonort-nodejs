"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-28062148"], {
  2038: function _(t, n, e) {
    "use strict";

    e.r(n);

    var a = function a() {
      var t = this,
          n = t.$createElement,
          e = t._self._c || n;
      return e("v-main", [e("router-view"), e("dashboard-core-footer")], 1);
    },
        o = [],
        i = (e("d3b7"), {
      name: "DashboardCoreView",
      components: {
        DashboardCoreFooter: function DashboardCoreFooter() {
          return e.e("chunk-203bc28e").then(e.bind(null, "1859"));
        }
      }
    }),
        r = i,
        c = e("2877"),
        s = e("6544"),
        d = e.n(s),
        p = (e("bd0c"), e("d10f")),
        u = p["a"].extend({
      name: "v-main",
      props: {
        tag: {
          type: String,
          default: "main"
        }
      },
      computed: {
        styles: function styles() {
          var t = this.$vuetify.application,
              n = t.bar,
              e = t.top,
              a = t.right,
              o = t.footer,
              i = t.insetFooter,
              r = t.bottom,
              c = t.left;
          return {
            paddingTop: "".concat(e + n, "px"),
            paddingRight: "".concat(a, "px"),
            paddingBottom: "".concat(o + i + r, "px"),
            paddingLeft: "".concat(c, "px")
          };
        }
      },
      render: function render(t) {
        var n = {
          staticClass: "v-main",
          style: this.styles,
          ref: "main"
        };
        return t(this.tag, n, [t("div", {
          staticClass: "v-main__wrap"
        }, this.$slots.default)]);
      }
    }),
        l = Object(c["a"])(r, a, o, !1, null, null, null);

    n["default"] = l.exports;
    d()(l, {
      VMain: u
    });
  },
  bd0c: function bd0c(t, n, e) {}
}]);
//# sourceMappingURL=chunk-28062148.caa9620b.js.map