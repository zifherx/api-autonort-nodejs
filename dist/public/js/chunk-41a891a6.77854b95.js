"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-41a891a6"], {
  "0fd9": function fd9(e, t, n) {
    "use strict";

    n("99af"), n("4160"), n("caad"), n("13d5"), n("4ec9"), n("b64b"), n("d3b7"), n("ac1f"), n("2532"), n("3ca3"), n("5319"), n("159b"), n("ddb0");
    var a = n("ade3"),
        r = n("5530"),
        i = (n("4b85"), n("2b0e")),
        o = n("d9f7"),
        c = n("80d2"),
        l = ["sm", "md", "lg", "xl"],
        u = ["start", "end", "center"];

    function s(e, t) {
      return l.reduce(function (n, a) {
        return n[e + Object(c["E"])(a)] = t(), n;
      }, {});
    }

    var d = function d(e) {
      return [].concat(u, ["baseline", "stretch"]).includes(e);
    },
        f = s("align", function () {
      return {
        type: String,
        default: null,
        validator: d
      };
    }),
        m = function m(e) {
      return [].concat(u, ["space-between", "space-around"]).includes(e);
    },
        p = s("justify", function () {
      return {
        type: String,
        default: null,
        validator: m
      };
    }),
        v = function v(e) {
      return [].concat(u, ["space-between", "space-around", "stretch"]).includes(e);
    },
        b = s("alignContent", function () {
      return {
        type: String,
        default: null,
        validator: v
      };
    }),
        g = {
      align: Object.keys(f),
      justify: Object.keys(p),
      alignContent: Object.keys(b)
    },
        h = {
      align: "align",
      justify: "justify",
      alignContent: "align-content"
    };

    function y(e, t, n) {
      var a = h[e];

      if (null != n) {
        if (t) {
          var r = t.replace(e, "");
          a += "-".concat(r);
        }

        return a += "-".concat(n), a.toLowerCase();
      }
    }

    var C = new Map();
    t["a"] = i["a"].extend({
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
          validator: m
        }
      }, p), {}, {
        alignContent: {
          type: String,
          default: null,
          validator: v
        }
      }, b),
      render: function render(e, t) {
        var n = t.props,
            r = t.data,
            i = t.children,
            c = "";

        for (var l in n) {
          c += String(n[l]);
        }

        var u = C.get(c);
        return u || function () {
          var e, t;

          for (t in u = [], g) {
            g[t].forEach(function (e) {
              var a = n[e],
                  r = y(t, e, a);
              r && u.push(r);
            });
          }

          u.push((e = {
            "no-gutters": n.noGutters,
            "row--dense": n.dense
          }, Object(a["a"])(e, "align-".concat(n.align), n.align), Object(a["a"])(e, "justify-".concat(n.justify), n.justify), Object(a["a"])(e, "align-content-".concat(n.alignContent), n.alignContent), e)), C.set(c, u);
        }(), e(n.tag, Object(o["a"])(r, {
          staticClass: "row",
          class: u
        }), i);
      }
    });
  },
  "40c6": function c6(e, t, n) {
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
      }, [e._v(" Edición de Clientes ")])])], 1), n("v-row", [n("v-col", {
        attrs: {
          cols: "12",
          md: "8"
        }
      }, [n("form", {
        on: {
          submit: function submit(t) {
            return t.preventDefault(), e.guardarCliente();
          }
        }
      }, [n("v-text-field", {
        attrs: {
          label: "Nombre",
          outlined: "",
          "prepend-icon": "mdi-account-tie",
          required: ""
        },
        model: {
          value: e.customer.name,
          callback: function callback(t) {
            e.$set(e.customer, "name", t);
          },
          expression: "customer.name"
        }
      }), n("v-text-field", {
        attrs: {
          label: "DNI",
          counter: 8,
          rules: e.dniRules,
          outlined: "",
          "prepend-icon": "mdi-lock",
          required: ""
        },
        model: {
          value: e.customer.document,
          callback: function callback(t) {
            e.$set(e.customer, "document", t);
          },
          expression: "customer.document"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Celular",
          counter: 9,
          rules: e.cellRules,
          outlined: "",
          "prepend-icon": "mdi-lock",
          required: ""
        },
        model: {
          value: e.customer.cellphone,
          callback: function callback(t) {
            e.$set(e.customer, "cellphone", t);
          },
          expression: "customer.cellphone"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Email",
          rules: e.emailRules,
          outlined: "",
          "prepend-icon": "mdi-lock",
          required: ""
        },
        model: {
          value: e.customer.email,
          callback: function callback(t) {
            e.$set(e.customer, "email", t);
          },
          expression: "customer.email"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Dirección",
          outlined: "",
          "prepend-icon": "mdi-lock",
          required: ""
        },
        model: {
          value: e.customer.address,
          callback: function callback(t) {
            e.$set(e.customer, "address", t);
          },
          expression: "customer.address"
        }
      }), n("v-card-actions", [n("v-btn", {
        staticClass: "mr-4",
        attrs: {
          to: "/ventas",
          color: "blue-grey"
        }
      }, [e._v(" Cancelar ")]), n("v-btn", {
        staticClass: "mr-4",
        attrs: {
          type: "submit",
          color: "green"
        }
      }, [e._v(" Actualizar ")])], 1)], 1)])], 1)], 1);
    },
        r = [],
        i = n("bc3a"),
        o = n.n(i),
        c = "https://sistema-adv.herokuapp.com/api/customer/",
        l = {
      name: "EditarCliente",
      data: function data() {
        return {
          customer: {
            name: "",
            document: "",
            cellphone: "",
            email: "",
            address: ""
          },
          dniRules: [function (e) {
            return !!e || "DNI es requerido";
          }, function (e) {
            return e.length <= 8 || "DNI no debe ser mayor a 8 dígitos";
          }],
          cellRules: [function (e) {
            return !!e || "Celular es requerido";
          }, function (e) {
            return e.length <= 9 || "Celular no debe ser mayor a 9 dígitos";
          }],
          emailRules: [function (e) {
            return !!e || "E-mail es requerido";
          }, function (e) {
            return /.+@.+/.test(e) || "Ingresa un email válido";
          }]
        };
      },
      mounted: function mounted() {
        this.activarEdicion();
      },
      methods: {
        activarEdicion: function activarEdicion() {
          var e = this;
          this.id = this.$route.params.id, o.a.get(c + this.id).then(function (t) {
            e.customer = t.data;
          }).catch(function (e) {
            console.log(e);
          });
        },
        guardarCliente: function guardarCliente() {
          var e = this.$router,
              t = this.customer;
          o.a.put(c + this.id, t).then(function (t) {
            e.push("/ventas/clientes");
          }).catch(function (e) {
            console.log(e);
          });
        }
      }
    },
        u = l,
        s = n("2877"),
        d = n("6544"),
        f = n.n(d),
        m = n("8336"),
        p = n("99d9"),
        v = n("62ad"),
        b = n("a523"),
        g = n("0fd9"),
        h = n("8654"),
        y = Object(s["a"])(u, a, r, !1, null, null, null);

    t["default"] = y.exports;
    f()(y, {
      VBtn: m["a"],
      VCardActions: p["a"],
      VCol: v["a"],
      VContainer: b["a"],
      VRow: g["a"],
      VTextField: h["a"]
    });
  }
}]);
//# sourceMappingURL=chunk-41a891a6.77854b95.js.map