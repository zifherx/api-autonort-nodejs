"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-cbaaac64"], {
  "0fd9": function fd9(t, a, e) {
    "use strict";

    e("99af"), e("4160"), e("caad"), e("13d5"), e("4ec9"), e("b64b"), e("d3b7"), e("ac1f"), e("2532"), e("3ca3"), e("5319"), e("159b"), e("ddb0");
    var n = e("ade3"),
        i = e("5530"),
        r = (e("4b85"), e("2b0e")),
        s = e("d9f7"),
        o = e("80d2"),
        l = ["sm", "md", "lg", "xl"],
        c = ["start", "end", "center"];

    function u(t, a) {
      return l.reduce(function (e, n) {
        return e[t + Object(o["E"])(n)] = a(), e;
      }, {});
    }

    var d = function d(t) {
      return [].concat(c, ["baseline", "stretch"]).includes(t);
    },
        f = u("align", function () {
      return {
        type: String,
        default: null,
        validator: d
      };
    }),
        p = function p(t) {
      return [].concat(c, ["space-between", "space-around"]).includes(t);
    },
        h = u("justify", function () {
      return {
        type: String,
        default: null,
        validator: p
      };
    }),
        v = function v(t) {
      return [].concat(c, ["space-between", "space-around", "stretch"]).includes(t);
    },
        g = u("alignContent", function () {
      return {
        type: String,
        default: null,
        validator: v
      };
    }),
        b = {
      align: Object.keys(f),
      justify: Object.keys(h),
      alignContent: Object.keys(g)
    },
        m = {
      align: "align",
      justify: "justify",
      alignContent: "align-content"
    };

    function y(t, a, e) {
      var n = m[t];

      if (null != e) {
        if (a) {
          var i = a.replace(t, "");
          n += "-".concat(i);
        }

        return n += "-".concat(e), n.toLowerCase();
      }
    }

    var w = new Map();
    a["a"] = r["a"].extend({
      name: "v-row",
      functional: !0,
      props: Object(i["a"])(Object(i["a"])(Object(i["a"])({
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
      }, h), {}, {
        alignContent: {
          type: String,
          default: null,
          validator: v
        }
      }, g),
      render: function render(t, a) {
        var e = a.props,
            i = a.data,
            r = a.children,
            o = "";

        for (var l in e) {
          o += String(e[l]);
        }

        var c = w.get(o);
        return c || function () {
          var t, a;

          for (a in c = [], b) {
            b[a].forEach(function (t) {
              var n = e[t],
                  i = y(a, t, n);
              i && c.push(i);
            });
          }

          c.push((t = {
            "no-gutters": e.noGutters,
            "row--dense": e.dense
          }, Object(n["a"])(t, "align-".concat(e.align), e.align), Object(n["a"])(t, "justify-".concat(e.justify), e.justify), Object(n["a"])(t, "align-content-".concat(e.alignContent), e.alignContent), t)), w.set(o, c);
        }(), t(e.tag, Object(s["a"])(i, {
          staticClass: "row",
          class: c
        }), r);
      }
    });
  },
  1681: function _(t, a, e) {},
  "78a0": function a0(t, a, e) {
    "use strict";

    e.r(a);

    var n = function n() {
      var t = this,
          a = t.$createElement,
          e = t._self._c || a;
      return e("v-container", {
        attrs: {
          id: "user-profile",
          fluid: "",
          tag: "section"
        }
      }, [e("v-row", {
        attrs: {
          justify: "center"
        }
      }, [e("v-col", {
        attrs: {
          cols: "12",
          md: "8"
        }
      }, [e("base-material-card", {
        scopedSlots: t._u([{
          key: "heading",
          fn: function fn() {
            return [e("div", {
              staticClass: "display-2 font-weight-light"
            }, [t._v(" Edit Profile ")]), e("div", {
              staticClass: "subtitle-1 font-weight-light"
            }, [t._v(" Complete your profile ")])];
          },
          proxy: !0
        }])
      }, [e("v-form", [e("v-container", {
        staticClass: "py-0"
      }, [e("v-row", [e("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [e("v-text-field", {
        attrs: {
          label: "Company (disabled)",
          disabled: ""
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "User Name"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "Email Address"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "6"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "First Name"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "6"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "Last Name"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "Adress"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "City"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "Country"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [e("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          label: "Postal Code",
          type: "number"
        }
      })], 1), e("v-col", {
        attrs: {
          cols: "12"
        }
      }, [e("v-textarea", {
        staticClass: "purple-input",
        attrs: {
          label: "About Me",
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      })], 1), e("v-col", {
        staticClass: "text-right",
        attrs: {
          cols: "12"
        }
      }, [e("v-btn", {
        staticClass: "mr-0",
        attrs: {
          color: "success"
        }
      }, [t._v(" Update Profile ")])], 1)], 1)], 1)], 1)], 1)], 1), e("v-col", {
        attrs: {
          cols: "12",
          md: "4"
        }
      }, [e("base-material-card", {
        staticClass: "v-card-profile",
        attrs: {
          avatar: "https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        }
      }, [e("v-card-text", {
        staticClass: "text-center"
      }, [e("h6", {
        staticClass: "display-1 mb-1 grey--text"
      }, [t._v(" CEO / CO-FOUNDER ")]), e("h4", {
        staticClass: "display-2 font-weight-light mb-3 black--text"
      }, [t._v(" Alec Thompson ")]), e("p", {
        staticClass: "font-weight-light grey--text"
      }, [t._v(" Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... ")]), e("v-btn", {
        staticClass: "mr-0",
        attrs: {
          color: "success",
          rounded: ""
        }
      }, [t._v(" Follow ")])], 1)], 1)], 1)], 1)], 1);
    },
        i = [],
        r = {},
        s = r,
        o = e("2877"),
        l = e("6544"),
        c = e.n(l),
        u = e("8336"),
        d = e("99d9"),
        f = e("62ad"),
        p = e("a523"),
        h = (e("4de4"), e("7db0"), e("4160"), e("caad"), e("07ac"), e("2532"), e("159b"), e("5530")),
        v = e("58df"),
        g = e("7e2b"),
        b = e("3206"),
        m = Object(v["a"])(g["a"], Object(b["b"])("form")).extend({
      name: "v-form",
      provide: function provide() {
        return {
          form: this
        };
      },
      inheritAttrs: !1,
      props: {
        disabled: Boolean,
        lazyValidation: Boolean,
        readonly: Boolean,
        value: Boolean
      },
      data: function data() {
        return {
          inputs: [],
          watchers: [],
          errorBag: {}
        };
      },
      watch: {
        errorBag: {
          handler: function handler(t) {
            var a = Object.values(t).includes(!0);
            this.$emit("input", !a);
          },
          deep: !0,
          immediate: !0
        }
      },
      methods: {
        watchInput: function watchInput(t) {
          var a = this,
              e = function e(t) {
            return t.$watch("hasError", function (e) {
              a.$set(a.errorBag, t._uid, e);
            }, {
              immediate: !0
            });
          },
              n = {
            _uid: t._uid,
            valid: function valid() {},
            shouldValidate: function shouldValidate() {}
          };

          return this.lazyValidation ? n.shouldValidate = t.$watch("shouldValidate", function (i) {
            i && (a.errorBag.hasOwnProperty(t._uid) || (n.valid = e(t)));
          }) : n.valid = e(t), n;
        },
        validate: function validate() {
          return 0 === this.inputs.filter(function (t) {
            return !t.validate(!0);
          }).length;
        },
        reset: function reset() {
          this.inputs.forEach(function (t) {
            return t.reset();
          }), this.resetErrorBag();
        },
        resetErrorBag: function resetErrorBag() {
          var t = this;
          this.lazyValidation && setTimeout(function () {
            t.errorBag = {};
          }, 0);
        },
        resetValidation: function resetValidation() {
          this.inputs.forEach(function (t) {
            return t.resetValidation();
          }), this.resetErrorBag();
        },
        register: function register(t) {
          this.inputs.push(t), this.watchers.push(this.watchInput(t));
        },
        unregister: function unregister(t) {
          var a = this.inputs.find(function (a) {
            return a._uid === t._uid;
          });

          if (a) {
            var e = this.watchers.find(function (t) {
              return t._uid === a._uid;
            });
            e && (e.valid(), e.shouldValidate()), this.watchers = this.watchers.filter(function (t) {
              return t._uid !== a._uid;
            }), this.inputs = this.inputs.filter(function (t) {
              return t._uid !== a._uid;
            }), this.$delete(this.errorBag, a._uid);
          }
        }
      },
      render: function render(t) {
        var a = this;
        return t("form", {
          staticClass: "v-form",
          attrs: Object(h["a"])({
            novalidate: !0
          }, this.attrs$),
          on: {
            submit: function submit(t) {
              return a.$emit("submit", t);
            }
          }
        }, this.$slots.default);
      }
    }),
        y = e("0fd9"),
        w = e("8654"),
        C = (e("a9e3"), e("1681"), Object(v["a"])(w["a"])),
        x = C.extend({
      name: "v-textarea",
      props: {
        autoGrow: Boolean,
        noResize: Boolean,
        rowHeight: {
          type: [Number, String],
          default: 24,
          validator: function validator(t) {
            return !isNaN(parseFloat(t));
          }
        },
        rows: {
          type: [Number, String],
          default: 5,
          validator: function validator(t) {
            return !isNaN(parseInt(t, 10));
          }
        }
      },
      computed: {
        classes: function classes() {
          return Object(h["a"])({
            "v-textarea": !0,
            "v-textarea--auto-grow": this.autoGrow,
            "v-textarea--no-resize": this.noResizeHandle
          }, w["a"].options.computed.classes.call(this));
        },
        noResizeHandle: function noResizeHandle() {
          return this.noResize || this.autoGrow;
        }
      },
      watch: {
        lazyValue: function lazyValue() {
          this.autoGrow && this.$nextTick(this.calculateInputHeight);
        },
        rowHeight: function rowHeight() {
          this.autoGrow && this.$nextTick(this.calculateInputHeight);
        }
      },
      mounted: function mounted() {
        var t = this;
        setTimeout(function () {
          t.autoGrow && t.calculateInputHeight();
        }, 0);
      },
      methods: {
        calculateInputHeight: function calculateInputHeight() {
          var t = this.$refs.input;

          if (t) {
            t.style.height = "0";
            var a = t.scrollHeight,
                e = parseInt(this.rows, 10) * parseFloat(this.rowHeight);
            t.style.height = Math.max(e, a) + "px";
          }
        },
        genInput: function genInput() {
          var t = w["a"].options.methods.genInput.call(this);
          return t.tag = "textarea", delete t.data.attrs.type, t.data.attrs.rows = this.rows, t;
        },
        onInput: function onInput(t) {
          w["a"].options.methods.onInput.call(this, t), this.autoGrow && this.calculateInputHeight();
        },
        onKeyDown: function onKeyDown(t) {
          this.isFocused && 13 === t.keyCode && t.stopPropagation(), this.$emit("keydown", t);
        }
      }
    }),
        j = Object(o["a"])(s, n, i, !1, null, null, null);

    a["default"] = j.exports;
    c()(j, {
      VBtn: u["a"],
      VCardText: d["b"],
      VCol: f["a"],
      VContainer: p["a"],
      VForm: m,
      VRow: y["a"],
      VTextField: w["a"],
      VTextarea: x
    });
  },
  a523: function a523(t, a, e) {
    "use strict";

    e("99af"), e("4de4"), e("b64b"), e("2ca0"), e("20f6"), e("4b85"), e("a15b"), e("498a");
    var n = e("2b0e");

    function i(t) {
      return n["a"].extend({
        name: "v-".concat(t),
        functional: !0,
        props: {
          id: String,
          tag: {
            type: String,
            default: "div"
          }
        },
        render: function render(a, e) {
          var n = e.props,
              i = e.data,
              r = e.children;
          i.staticClass = "".concat(t, " ").concat(i.staticClass || "").trim();
          var s = i.attrs;

          if (s) {
            i.attrs = {};
            var o = Object.keys(s).filter(function (t) {
              if ("slot" === t) return !1;
              var a = s[t];
              return t.startsWith("data-") ? (i.attrs[t] = a, !1) : a || "string" === typeof a;
            });
            o.length && (i.staticClass += " ".concat(o.join(" ")));
          }

          return n.id && (i.domProps = i.domProps || {}, i.domProps.id = n.id), a(n.tag, i, r);
        }
      });
    }

    var r = e("d9f7");
    a["a"] = i("container").extend({
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
      render: function render(t, a) {
        var e,
            n = a.props,
            i = a.data,
            s = a.children,
            o = i.attrs;
        return o && (i.attrs = {}, e = Object.keys(o).filter(function (t) {
          if ("slot" === t) return !1;
          var a = o[t];
          return t.startsWith("data-") ? (i.attrs[t] = a, !1) : a || "string" === typeof a;
        })), n.id && (i.domProps = i.domProps || {}, i.domProps.id = n.id), t(n.tag, Object(r["a"])(i, {
          staticClass: "container",
          class: Array({
            "container--fluid": n.fluid
          }).concat(e || [])
        }), s);
      }
    });
  }
}]);
//# sourceMappingURL=chunk-cbaaac64.e9f8e9bb.js.map