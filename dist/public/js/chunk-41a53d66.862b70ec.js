"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-41a53d66"], {
  "0fd9": function fd9(t, e, n) {
    "use strict";

    n("99af"), n("4160"), n("caad"), n("13d5"), n("4ec9"), n("b64b"), n("d3b7"), n("ac1f"), n("2532"), n("3ca3"), n("5319"), n("159b"), n("ddb0");
    var a = n("ade3"),
        r = n("5530"),
        o = (n("4b85"), n("2b0e")),
        i = n("d9f7"),
        c = n("80d2"),
        s = ["sm", "md", "lg", "xl"],
        l = ["start", "end", "center"];

    function u(t, e) {
      return s.reduce(function (n, a) {
        return n[t + Object(c["E"])(a)] = e(), n;
      }, {});
    }

    var d = function d(t) {
      return [].concat(l, ["baseline", "stretch"]).includes(t);
    },
        p = u("align", function () {
      return {
        type: String,
        default: null,
        validator: d
      };
    }),
        f = function f(t) {
      return [].concat(l, ["space-between", "space-around"]).includes(t);
    },
        v = u("justify", function () {
      return {
        type: String,
        default: null,
        validator: f
      };
    }),
        b = function b(t) {
      return [].concat(l, ["space-between", "space-around", "stretch"]).includes(t);
    },
        g = u("alignContent", function () {
      return {
        type: String,
        default: null,
        validator: b
      };
    }),
        m = {
      align: Object.keys(p),
      justify: Object.keys(v),
      alignContent: Object.keys(g)
    },
        h = {
      align: "align",
      justify: "justify",
      alignContent: "align-content"
    };

    function y(t, e, n) {
      var a = h[t];

      if (null != n) {
        if (e) {
          var r = e.replace(t, "");
          a += "-".concat(r);
        }

        return a += "-".concat(n), a.toLowerCase();
      }
    }

    var C = new Map();
    e["a"] = o["a"].extend({
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
      }, p), {}, {
        justify: {
          type: String,
          default: null,
          validator: f
        }
      }, v), {}, {
        alignContent: {
          type: String,
          default: null,
          validator: b
        }
      }, g),
      render: function render(t, e) {
        var n = e.props,
            r = e.data,
            o = e.children,
            c = "";

        for (var s in n) {
          c += String(n[s]);
        }

        var l = C.get(c);
        return l || function () {
          var t, e;

          for (e in l = [], m) {
            m[e].forEach(function (t) {
              var a = n[t],
                  r = y(e, t, a);
              r && l.push(r);
            });
          }

          l.push((t = {
            "no-gutters": n.noGutters,
            "row--dense": n.dense
          }, Object(a["a"])(t, "align-".concat(n.align), n.align), Object(a["a"])(t, "justify-".concat(n.justify), n.justify), Object(a["a"])(t, "align-content-".concat(n.alignContent), n.alignContent), t)), C.set(c, l);
        }(), t(n.tag, Object(i["a"])(r, {
          staticClass: "row",
          class: l
        }), o);
      }
    });
  },
  "6e55": function e55(t, e, n) {
    "use strict";

    n.r(e);

    var a = function a() {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;
      return n("v-container", [n("v-row", [n("v-col", {
        staticClass: "mb-4"
      }, [n("h1", {
        staticClass: "display-2 font-weight-bold mb-3"
      }, [t._v(" Edición de Accesorios ")])])], 1), n("v-row", [n("v-col", {
        attrs: {
          cols: "12",
          md: "8"
        }
      }, [n("form", {
        on: {
          submit: function submit(e) {
            return e.preventDefault(), t.guardarAccesorio();
          }
        }
      }, [n("v-text-field", {
        attrs: {
          label: "Accesorio",
          outlined: "",
          "prepend-icon": "mdi-account-tie",
          required: ""
        },
        model: {
          value: t.props.name,
          callback: function callback(e) {
            t.$set(t.props, "name", e);
          },
          expression: "props.name"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Tipo",
          outlined: "",
          "prepend-icon": "mdi-label",
          required: ""
        },
        model: {
          value: t.props.type,
          callback: function callback(e) {
            t.$set(t.props, "type", e);
          },
          expression: "props.type"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Vehiculo",
          outlined: "",
          "prepend-icon": "mdi-lock",
          required: ""
        },
        model: {
          value: t.props.forCar,
          callback: function callback(e) {
            t.$set(t.props, "forCar", e);
          },
          expression: "props.forCar"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Cantidad",
          type: "number",
          outlined: "",
          "prepend-icon": "mdi-lock",
          required: ""
        },
        model: {
          value: t.props.cantidad,
          callback: function callback(e) {
            t.$set(t.props, "cantidad", e);
          },
          expression: "props.cantidad"
        }
      }), n("v-text-field", {
        attrs: {
          label: "Precio",
          "prepend-icon": "mdi-cash",
          prefix: "$",
          outlined: "",
          required: ""
        },
        model: {
          value: t.props.precio,
          callback: function callback(e) {
            t.$set(t.props, "precio", e);
          },
          expression: "props.precio"
        }
      }), n("v-card-actions", [n("v-btn", {
        staticClass: "mr-4",
        attrs: {
          to: "/ventas",
          color: "blue-grey"
        }
      }, [t._v(" Cancelar ")]), n("v-btn", {
        staticClass: "mr-4",
        attrs: {
          type: "submit",
          color: "green"
        }
      }, [t._v(" Actualizar ")])], 1)], 1)])], 1)], 1);
    },
        r = [],
        o = n("bc3a"),
        i = n.n(o),
        c = "https://sistema-adv.herokuapp.com/api/props/",
        s = {
      name: "EditarAccesorio",
      data: function data() {
        return {
          props: {
            name: "",
            type: "",
            forCar: "",
            cantidad: "",
            precio: ""
          }
        };
      },
      mounted: function mounted() {
        this.activarEdicion();
      },
      methods: {
        activarEdicion: function activarEdicion() {
          var t = this;
          this.id = this.$route.params.id, i.a.get(c + this.id).then(function (e) {
            t.props = e.data;
          }).catch(function (t) {
            console.log(t);
          });
        },
        guardarAccesorio: function guardarAccesorio() {
          var t = this.$router,
              e = this.props;
          i.a.put(c + this.id, e).then(function (e) {
            t.push("/ventas/accesorios");
          });
        }
      }
    },
        l = s,
        u = n("2877"),
        d = n("6544"),
        p = n.n(d),
        f = n("8336"),
        v = n("99d9"),
        b = n("62ad"),
        g = n("a523"),
        m = n("0fd9"),
        h = n("8654"),
        y = Object(u["a"])(l, a, r, !1, null, null, null);

    e["default"] = y.exports;
    p()(y, {
      VBtn: f["a"],
      VCardActions: v["a"],
      VCol: b["a"],
      VContainer: g["a"],
      VRow: m["a"],
      VTextField: h["a"]
    });
  }
}]);
//# sourceMappingURL=chunk-41a53d66.862b70ec.js.map