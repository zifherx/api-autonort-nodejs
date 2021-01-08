"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0a38be"], {
  "0349": function _(t, a, s) {
    "use strict";

    s.r(a);

    var e = function e() {
      var t = this,
          a = t.$createElement,
          s = t._self._c || a;
      return s("v-container", [s("v-row", [s("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [s("v-card", {
        staticClass: "mx-auto",
        attrs: {
          elevation: "10",
          outlined: "",
          shaped: "",
          "max-width": "450"
        }
      }, [s("v-img", {
        attrs: {
          src: "https://cdn.pixabay.com/photo/2020/06/07/20/49/toyota-rav-4-5272095_1280.jpg",
          "aspect-ratio": 16 / 9
        }
      }), s("v-card-title", [s("div", {
        staticClass: "display-4 mb-2"
      }, [t._v(" Vehículos ")])]), s("v-card-text", [s("v-row", {
        staticClass: "mx-0 my-5",
        attrs: {
          align: "center"
        }
      }, [s("v-rating", {
        attrs: {
          value: 3,
          color: "amber",
          dense: "",
          "half-increments": "",
          readonly: "",
          size: "14"
        }
      }), s("div", [t._v("3.0 (100)")])], 1), s("div", [t._v(" Aquí se podrá visualizar todos los vehículos libres, asignados o por conseguir. ")])], 1), s("v-divider", {
        staticClass: "my-2"
      }), s("v-card-text", [s("v-row", {
        staticClass: "mx-6"
      }, [s("v-chip-group", [s("v-chip", {
        attrs: {
          color: "purple",
          "text-color": "white",
          to: "adv/vehiculos"
        }
      }, [s("v-icon", [t._v("mdi-clipboard-list")]), t._v("Reporte ")], 1), s("v-chip", {
        attrs: {
          color: "success",
          to: "adv/vehiculos/nuevo"
        }
      }, [s("v-icon", {
        attrs: {
          left: ""
        }
      }, [t._v(" mdi-plus ")]), t._v("Nuevo ")], 1), s("v-chip", {
        attrs: {
          color: "warning"
        }
      }, [s("v-icon", {
        attrs: {
          left: ""
        }
      }, [t._v(" mdi-label ")]), t._v("Asignar ")], 1)], 1)], 1)], 1)], 1)], 1), s("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [s("v-card", {
        staticClass: "mx-auto",
        attrs: {
          elevation: "10",
          outlined: "",
          shaped: "",
          "max-width": "450"
        }
      }, [s("v-img", {
        attrs: {
          src: "https://cdn.pixabay.com/photo/2019/01/13/13/25/collector-3930337_1280.jpg",
          "aspect-ratio": 16 / 9
        }
      }), s("v-card-title", [s("div", {
        staticClass: "display-4 mb-2"
      }, [t._v(" Expedientes ")])]), s("v-card-text", [s("v-row", {
        staticClass: "mx-0 my-5",
        attrs: {
          align: "center"
        }
      }, [s("v-rating", {
        attrs: {
          value: 2,
          color: "amber",
          dense: "",
          "half-increments": "",
          readonly: "",
          size: "14"
        }
      }), s("div", [t._v("2.0 (0)")])], 1), s("div", [t._v(" Se podrá revisar y gestionar los expedientes para la verificación de su Facturación. ")])], 1), s("v-divider", {
        staticClass: "my-2"
      }), s("v-card-text", [s("v-row", {
        staticClass: "mx-6"
      }, [s("v-chip-group", [s("v-chip", {
        attrs: {
          color: "purple",
          "text-color": "white",
          to: "adv/expedientes"
        }
      }, [s("v-icon", [t._v("mdi-clipboard-list")]), t._v("Histórico ")], 1), s("v-chip", {
        attrs: {
          color: "success",
          to: "adv/expedientes/nuevo"
        }
      }, [s("v-icon", {
        attrs: {
          left: ""
        }
      }, [t._v(" mdi-plus ")]), t._v("Nuevo ")], 1)], 1)], 1)], 1)], 1)], 1), s("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [s("v-card", {
        staticClass: "mx-auto",
        attrs: {
          elevation: "10",
          outlined: "",
          shaped: "",
          "max-width": "450"
        }
      }, [s("v-img", {
        attrs: {
          src: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
          "aspect-ratio": 16 / 9
        }
      }), s("v-card-title", [s("div", {
        staticClass: "display-4 mb-2"
      }, [t._v(" Ventas ")])]), s("v-card-text", [s("v-row", {
        staticClass: "mx-0 my-5",
        attrs: {
          align: "center"
        }
      }, [s("v-rating", {
        attrs: {
          value: 3.5,
          color: "amber",
          dense: "",
          "half-increments": "",
          readonly: "",
          size: "14"
        }
      }), s("div", [t._v("3.5 (150)")])], 1), s("div", [t._v(" Gestión de ventas según campañas y vehículos disponibles. ")])], 1), s("v-divider", {
        staticClass: "my-2"
      }), s("v-card-text", [s("v-row", {
        staticClass: "mx-6"
      }, [s("v-chip-group", [s("v-chip", {
        attrs: {
          color: "purple",
          "text-color": "white",
          to: "adv/ventas"
        }
      }, [s("v-icon", [t._v("mdi-clipboard-list")]), t._v("Reporte ")], 1), s("v-chip", {
        attrs: {
          color: "success",
          to: "adv/ventas/nuevo"
        }
      }, [s("v-icon", {
        attrs: {
          left: ""
        }
      }, [t._v(" mdi-plus ")]), t._v("Nuevo ")], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
    },
        i = [],
        o = {
      name: "DashboardVehiculos",
      methods: {}
    },
        r = o,
        c = s("2877"),
        v = s("6544"),
        l = s.n(v),
        d = s("b0af"),
        n = s("99d9"),
        p = s("cc20"),
        m = s("ef9a"),
        u = s("62ad"),
        h = s("a523"),
        x = s("ce7e"),
        _ = s("132d"),
        g = s("adda"),
        b = s("1d4d"),
        C = s("0fd9"),
        w = Object(c["a"])(r, e, i, !1, null, null, null);

    a["default"] = w.exports;
    l()(w, {
      VCard: d["a"],
      VCardText: n["b"],
      VCardTitle: n["c"],
      VChip: p["a"],
      VChipGroup: m["a"],
      VCol: u["a"],
      VContainer: h["a"],
      VDivider: x["a"],
      VIcon: _["a"],
      VImg: g["a"],
      VRating: b["a"],
      VRow: C["a"]
    });
  }
}]);
//# sourceMappingURL=chunk-2d0a38be.f41aeffd.js.map