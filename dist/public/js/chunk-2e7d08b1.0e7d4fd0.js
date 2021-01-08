"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2e7d08b1"], {
  cd59: function cd59(t, e, a) {
    "use strict";

    a.r(e);

    var n = function n() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("v-app", [a("dashboard-core-app-bar"), a("dashboard-core-drawer"), a("dashboard-core-view"), a("dashboard-core-settings")], 1);
    },
        r = [],
        i = (a("d3b7"), {
      name: "DashboardIndex",
      components: {
        DashboardCoreAppBar: function DashboardCoreAppBar() {
          return Promise.all([a.e("chunk-dbbb3af0"), a.e("chunk-ac00a36c"), a.e("chunk-00a05a78"), a.e("chunk-d1f6c994")]).then(a.bind(null, "8e07"));
        },
        DashboardCoreDrawer: function DashboardCoreDrawer() {
          return a.e("chunk-08c9dcaa").then(a.bind(null, "09ae"));
        },
        DashboardCoreSettings: function DashboardCoreSettings() {
          return Promise.all([a.e("chunk-dbbb3af0"), a.e("chunk-00a05a78"), a.e("chunk-cfe9773e")]).then(a.bind(null, "51c9"));
        },
        DashboardCoreView: function DashboardCoreView() {
          return a.e("chunk-28062148").then(a.bind(null, "2038"));
        }
      },
      data: function data() {
        return {
          expandOnHover: !1
        };
      }
    }),
        o = i,
        s = a("2877"),
        d = a("6544"),
        c = a.n(d),
        u = a("5530"),
        l = (a("df86"), a("7560")),
        p = a("58df"),
        h = Object(p["a"])(l["a"]).extend({
      name: "v-app",
      props: {
        dark: {
          type: Boolean,
          default: void 0
        },
        id: {
          type: String,
          default: "app"
        },
        light: {
          type: Boolean,
          default: void 0
        }
      },
      computed: {
        isDark: function isDark() {
          return this.$vuetify.theme.dark;
        }
      },
      beforeCreate: function beforeCreate() {
        if (!this.$vuetify || this.$vuetify === this.$root) throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object");
      },
      render: function render(t) {
        var e = t("div", {
          staticClass: "v-application--wrap"
        }, this.$slots.default);
        return t("div", {
          staticClass: "v-application",
          class: Object(u["a"])({
            "v-application--is-rtl": this.$vuetify.rtl,
            "v-application--is-ltr": !this.$vuetify.rtl
          }, this.themeClasses),
          attrs: {
            "data-app": !0
          },
          domProps: {
            id: this.id
          }
        }, [e]);
      }
    }),
        f = Object(s["a"])(o, n, r, !1, null, null, null);

    e["default"] = f.exports;
    c()(f, {
      VApp: h
    });
  },
  df86: function df86(t, e, a) {}
}]);
//# sourceMappingURL=chunk-2e7d08b1.0e7d4fd0.js.map