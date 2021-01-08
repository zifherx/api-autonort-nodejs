"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-41a9455c"], {
  "0fd9": function fd9(e, t, n) {
    "use strict";

    n("99af"), n("4160"), n("caad"), n("13d5"), n("4ec9"), n("b64b"), n("d3b7"), n("ac1f"), n("2532"), n("3ca3"), n("5319"), n("159b"), n("ddb0");
    var a = n("ade3"),
        r = n("5530"),
        l = (n("4b85"), n("2b0e")),
        o = n("d9f7"),
        i = n("80d2"),
        c = ["sm", "md", "lg", "xl"],
        s = ["start", "end", "center"];

    function u(e, t) {
      return c.reduce(function (n, a) {
        return n[e + Object(i["E"])(a)] = t(), n;
      }, {});
    }

    var d = function d(e) {
      return [].concat(s, ["baseline", "stretch"]).includes(e);
    },
        f = u("align", function () {
      return {
        type: String,
        default: null,
        validator: d
      };
    }),
        p = function p(e) {
      return [].concat(s, ["space-between", "space-around"]).includes(e);
    },
        v = u("justify", function () {
      return {
        type: String,
        default: null,
        validator: p
      };
    }),
        b = function b(e) {
      return [].concat(s, ["space-between", "space-around", "stretch"]).includes(e);
    },
        g = u("alignContent", function () {
      return {
        type: String,
        default: null,
        validator: b
      };
    }),
        m = {
      align: Object.keys(f),
      justify: Object.keys(v),
      alignContent: Object.keys(g)
    },
        y = {
      align: "align",
      justify: "justify",
      alignContent: "align-content"
    };

    function h(e, t, n) {
      var a = y[e];

      if (null != n) {
        if (t) {
          var r = t.replace(e, "");
          a += "-".concat(r);
        }

        return a += "-".concat(n), a.toLowerCase();
      }
    }

    var j = new Map();
    t["a"] = l["a"].extend({
      name: "v-row",
      functional: !0,
      props: Object(r["a"])(Object(r["a"])(Object(r["a"])({
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
      }, f), {}, {
        justify: {
          type: String,
          default: null,
          validator: p
        }
      }, v), {}, {
        alignContent: {
          type: String,
          default: null,
          validator: b
        }
      }, g),
      render: function render(e, t) {
        var n = t.props,
            r = t.data,
            l = t.children,
            i = "";

        for (var c in n) {
          i += String(n[c]);
        }

        var s = j.get(i);
        return s || function () {
          var e, t;

          for (t in s = [], m) {
            m[t].forEach(function (e) {
              var a = n[e],
                  r = h(t, e, a);
              r && s.push(r);
            });
          }

          s.push((e = {
            "no-gutters": n.noGutters,
            "row--dense": n.dense
          }, Object(a["a"])(e, "align-".concat(n.align), n.align), Object(a["a"])(e, "justify-".concat(n.justify), n.justify), Object(a["a"])(e, "align-content-".concat(n.alignContent), n.alignContent), e)), j.set(i, s);
        }(), e(n.tag, Object(o["a"])(r, {
          staticClass: "row",
          class: s
        }), l);
      }
    });
  },
  "37e5": function e5(e, t, n) {
    "use strict";

    n.r(t);

    var a = function a() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("v-container", [n("v-row", [n("v-col", {
        staticClass: "mb-4"
      }, [n("h1", {
        staticClass: "display-2 font-weight-bold mb-3"
      }, [e._v(" Alta de Vendedores ")])])], 1), n("v-row", [n("v-col", {
        attrs: {
          cols: "12",
          md: "8"
        }
      }, [n("form", {
        on: {
          submit: function submit(t) {
            return t.preventDefault(), e.guardarVendedor();
          }
        }
      }, [n("v-text-field", {
        attrs: {
          label: "Vendedor",
          counter: 50,
          outlined: "",
          "prepend-icon": "mdi-account-tie",
          required: ""
        },
        model: {
          value: e.seller.name,
          callback: function callback(t) {
            e.$set(e.seller, "name", t);
          },
          expression: "seller.name"
        }
      }), n("v-text-field", {
        attrs: {
          label: "DNI",
          counter: 8,
          rules: e.dniRules,
          outlined: "",
          "prepend-icon": "mdi-label",
          required: ""
        },
        model: {
          value: e.seller.document,
          callback: function callback(t) {
            e.$set(e.seller, "document", t);
          },
          expression: "seller.document"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Categoria",
          counter: 20,
          outlined: "",
          "prepend-icon": "mdi-lock",
          required: ""
        },
        model: {
          value: e.seller.type,
          callback: function callback(t) {
            e.$set(e.seller, "type", t);
          },
          expression: "seller.type"
        }
      }), n("v-card-actions", [n("v-btn", {
        staticClass: "mr-4",
        attrs: {
          to: "/ventas/vendedores",
          color: "blue-grey"
        }
      }, [e._v(" Cancelar ")]), n("v-btn", {
        staticClass: "mr-4",
        attrs: {
          type: "submit",
          color: "green"
        }
      }, [e._v(" Guardar ")])], 1)], 1)])], 1)], 1);
    },
        r = [],
        l = n("bc3a"),
        o = n.n(l),
        i = "https://sistema-adv.herokuapp.com/api/seller",
        c = {
      name: "CrearVendedor",
      data: function data() {
        return {
          seller: {
            name: "",
            type: "",
            document: ""
          },
          dniRules: [function (e) {
            return !!e || "DNI es requerido";
          }, function (e) {
            return e.length <= 8 || "DNI no debe ser mayor a 8 dígitos";
          }]
        };
      },
      mounted: function mounted() {},
      methods: {
        guardarVendedor: function guardarVendedor() {
          var e = this,
              t = this.$router,
              n = this.seller;
          o.a.post(i, n).then(function (n) {
            t.push("/ventas/vendedores"), e.limpiarCampos();
          });
        },
        limpiarCampos: function limpiarCampos() {
          this.seller = "";
        }
      }
    },
        s = c,
        u = n("2877"),
        d = n("6544"),
        f = n.n(d),
        p = n("8336"),
        v = n("99d9"),
        b = n("62ad"),
        g = n("a523"),
        m = n("0fd9"),
        y = n("8654"),
        h = Object(u["a"])(s, a, r, !1, null, null, null);

    t["default"] = h.exports;
    f()(h, {
      VBtn: p["a"],
      VCardActions: v["a"],
      VCol: b["a"],
      VContainer: g["a"],
      VRow: m["a"],
      VTextField: y["a"]
    });
  }
}]);
//# sourceMappingURL=chunk-41a9455c.1e2ff45b.js.map