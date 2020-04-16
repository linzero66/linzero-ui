!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var n = e();
    for (var o in n) ("object" == typeof exports ? exports : t)[o] = n[o];
  }
})(window, function () {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var r = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            n.d(
              o,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 5))
    );
  })([
    function (t, e, n) {
      "use strict";
      function o(t, e, n, o, r, i, u, s) {
        var l,
          a = "function" == typeof t ? t.options : t;
        if (
          (e && ((a.render = e), (a.staticRenderFns = n), (a._compiled = !0)),
          o && (a.functional = !0),
          i && (a._scopeId = "data-v-" + i),
          u
            ? ((l = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  r && r.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(u);
              }),
              (a._ssrRegister = l))
            : r &&
              (l = s
                ? function () {
                    r.call(this, this.$root.$options.shadowRoot);
                  }
                : r),
          l)
        )
          if (a.functional) {
            a._injectStyles = l;
            var c = a.render;
            a.render = function (t, e) {
              return l.call(e), c(t, e);
            };
          } else {
            var f = a.beforeCreate;
            a.beforeCreate = f ? [].concat(f, l) : [l];
          }
        return { exports: t, options: a };
      }
      n.d(e, "a", function () {
        return o;
      });
    },
    function (t, e, n) {},
    ,
    function (t, e, n) {
      "use strict";
      var o = n(1);
      n.n(o).a;
    },
    ,
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = function () {
        var t = this.$createElement;
        return (this._self._c || t)(
          "button",
          {
            staticClass: "ml-button",
            class: this.btnClass,
            on: { click: this.handleClick },
          },
          [this._t("default")],
          2
        );
      };
      o._withStripped = !0;
      var r = {
          name: "MlButton",
          props: {
            type: { type: String, default: "primary" },
            disabled: { type: Boolean, default: !1 },
            round: { type: Boolean, default: !1 },
          },
          computed: {
            btnClass() {
              return [
                "ml-button--" + this.type,
                this.disabled ? "ml-button--disabled" : "",
                this.round ? "ml-button--round" : "",
              ];
            },
          },
          methods: {
            handleClick(t) {
              console.log(t), this.$emit("click", t);
            },
          },
        },
        i = (n(3), n(0)),
        u = Object(i.a)(r, o, [], !1, null, null, null);
      u.options.__file = "src/components/button/button.vue";
      var s = u.exports;
      e.default = s;
    },
  ]);
});
