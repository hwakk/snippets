/*! For license information please see main.736755f4.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          C = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          M = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          z = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var O = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function j(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          R = Object.assign;
        function F(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var A = !1;
        function B(e, t) {
          if (!e || A) return "";
          A = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case C:
              return "Fragment";
            case x:
              return "Portal";
            case E:
              return "Profiler";
            case k:
              return "StrictMode";
            case M:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case z:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function G(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          K(e, t);
          var n = U(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function le(e, t) {
          var n = U(t.value),
            r = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Ce = null,
          ke = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof xe) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          Ce ? (ke ? ke.push(e) : (ke = [e])) : (Ce = e);
        }
        function _e() {
          if (Ce) {
            var e = Ce,
              t = ke;
            if (((ke = Ce = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Me() {}
        var Le = !1;
        function ze(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Le = !1), (null !== Ce || null !== ke) && (Me(), _e());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ce) {
            Oe = !1;
          }
        function je(e, t, n, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Re = null,
          Fe = !1,
          Ae = null,
          Be = {
            onError: function (e) {
              (De = !0), (Re = e);
            },
          };
        function Ve(e, t, n, r, a, l, i, o, s) {
          (De = !1), (Re = null), je.apply(Be, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ge(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (He(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ue(a), e;
                    if (i === r) return Ue(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          xt,
          Ct,
          kt,
          Et,
          Tt = !1,
          _t = [],
          Pt = null,
          Mt = null,
          Lt = null,
          zt = new Map(),
          Nt = new Map(),
          Ot = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function jt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Mt = null;
              break;
            case "mouseover":
            case "mouseout":
              Lt = null;
              break;
            case "pointerover":
            case "pointerout":
              zt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Rt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ge(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      Ct(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function At(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Bt() {
          (Tt = !1),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Mt && Ft(Mt) && (Mt = null),
            null !== Lt && Ft(Lt) && (Lt = null),
            zt.forEach(At),
            Nt.forEach(At);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ht(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < _t.length) {
            Vt(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Vt(Pt, e),
              null !== Mt && Vt(Mt, e),
              null !== Lt && Vt(Lt, e),
              zt.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < Ot.length;
            n++
          )
            (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; )
            Rt(n), null === n.blockedOn && Ot.shift();
        }
        var Gt = w.ReactCurrentBatchConfig,
          Ut = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            l = Gt.transition;
          Gt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Gt.transition = l);
          }
        }
        function $t(e, t, n, r) {
          var a = bt,
            l = Gt.transition;
          Gt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Gt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Ut) {
            var a = Yt(e, t, n, r);
            if (null === a) Ur(e, t, r, Qt, n), jt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Dt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Mt = Dt(Mt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Lt = Dt(Lt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return zt.set(l, Dt(zt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Nt.set(l, Dt(Nt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((jt(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && St(l),
                  null === (l = Yt(e, t, n, r)) && Ur(e, t, r, Qt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Ur(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Yt(e, t, n, r) {
          if (((Qt = null), null !== (e = ya((e = Se(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ge(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = R({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = R({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(R({}, pn, { dataTransfer: 0 })),
          gn = an(R({}, dn, { relatedTarget: 0 })),
          vn = an(
            R({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = R({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(R({}, un, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function En() {
          return kn;
        }
        var Tn = R({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          _n = an(Tn),
          Pn = an(
            R({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Mn = an(
            R({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Ln = an(
            R({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          zn = R({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = an(zn),
          On = [9, 13, 27, 32],
          In = c && "CompositionEvent" in window,
          jn = null;
        c && "documentMode" in document && (jn = document.documentMode);
        var Dn = c && "TextEvent" in window && !jn,
          Rn = c && (!In || (jn && 8 < jn && 11 >= jn)),
          Fn = String.fromCharCode(32),
          An = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== On.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Gn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Gn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Te(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          qn = null;
        function Qn(e) {
          Fr(e, 0);
        }
        function Yn(e) {
          if (q(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Wn(t, qn, e, Se(e)), ze(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== Q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = $r(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Cr = {},
          kr = {};
        function Er(e) {
          if (Cr[e]) return Cr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Cr[e] = n[t]);
          return e;
        }
        c &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Tr = Er("animationend"),
          _r = Er("animationiteration"),
          Pr = Er("animationstart"),
          Mr = Er("transitionend"),
          Lr = new Map(),
          zr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Nr(e, t) {
          Lr.set(e, t), s(t, [e]);
        }
        for (var Or = 0; Or < zr.length; Or++) {
          var Ir = zr[Or];
          Nr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Nr(Tr, "onAnimationEnd"),
          Nr(_r, "onAnimationIteration"),
          Nr(Pr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Mr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, s, u) {
              if ((Ve.apply(this, arguments), De)) {
                if (!De) throw Error(l(198));
                var c = Re;
                (De = !1), (Re = null), Fe || ((Fe = !0), (Ae = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Rr(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, o, u), (l = s);
                }
            }
          }
          if (Fe) throw ((e = Ae), (Fe = !1), (Ae = null), e);
        }
        function Ar(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Gr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Gr(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Gr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Ur(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          ze(function () {
            var r = l,
              a = Se(n),
              i = [];
            e: {
              var o = Lr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = _n;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Mn;
                    break;
                  case Tr:
                  case _r:
                  case Pr:
                    s = vn;
                    break;
                  case Mr:
                    s = Ln;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Ne(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = He(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? o : wa(s)),
                  (p = null == u ? o : wa(u)),
                  ((o = new c(m, h + "leave", s, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Qr(i, o, s, c, !1),
                  null !== u && null !== d && Qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var g = Xn;
              else if (Un(o))
                if (Kn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Wn(i, g, n, a)
                  : (v && v(e, o, r),
                    "focusout" === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Un(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Zt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Hn = !0))),
                0 < (v = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!In && Bn(e, t))
                          ? ((e = en()), (Jt = Zt = Kt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Fr(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Ne(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Ne(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Ne(n, l)) && i.unshift(Wr(n, s, o))
                : a || (null != (s = Ne(n, l)) && i.push(Wr(n, s, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(l(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var xa = [],
          Ca = -1;
        function ka(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Ca || ((e.current = xa[Ca]), (xa[Ca] = null), Ca--);
        }
        function Ta(e, t) {
          Ca++, (xa[Ca] = e.current), (e.current = t);
        }
        var _a = {},
          Pa = ka(_a),
          Ma = ka(!1),
          La = _a;
        function za(e, t) {
          var n = e.type.contextTypes;
          if (!n) return _a;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Na(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oa() {
          Ea(Ma), Ea(Pa);
        }
        function Ia(e, t, n) {
          if (Pa.current !== _a) throw Error(l(168));
          Ta(Pa, t), Ta(Ma, n);
        }
        function ja(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, G(e) || "Unknown", a));
          return R({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (La = Pa.current),
            Ta(Pa, e),
            Ta(Ma, Ma.current),
            !0
          );
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = ja(e, t, La)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Ma),
              Ea(Pa),
              Ta(Pa, e))
            : Ea(Ma),
            Ta(Ma, n);
        }
        var Fa = null,
          Aa = !1,
          Ba = !1;
        function Va(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Ha() {
          if (!Ba && null !== Fa) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Aa = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), qe(Je, Ha), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Ga = [],
          Ua = 0,
          Wa = null,
          $a = 0,
          qa = [],
          Qa = 0,
          Ya = null,
          Xa = 1,
          Ka = "";
        function Za(e, t) {
          (Ga[Ua++] = $a), (Ga[Ua++] = Wa), (Wa = e), ($a = t);
        }
        function Ja(e, t, n) {
          (qa[Qa++] = Xa), (qa[Qa++] = Ka), (qa[Qa++] = Ya), (Ya = e);
          var r = Xa;
          e = Ka;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Xa = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ka = l + e);
          } else (Xa = (1 << l) | (n << a) | r), (Ka = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Ga[--Ua]), (Ga[Ua] = null), ($a = Ga[--Ua]), (Ga[Ua] = null);
          for (; e === Ya; )
            (Ya = qa[--Qa]),
              (qa[Qa] = null),
              (Ka = qa[--Qa]),
              (qa[Qa] = null),
              (Xa = qa[--Qa]),
              (qa[Qa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = zu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Xa, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = zu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = w.ReactCurrentBatchConfig;
        function gl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function vl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function yl(e) {
          return (0, e._init)(e._payload);
        }
        function bl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ou(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ru(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === C
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === N &&
                    yl(l) === t.type))
              ? (((r = a(t, n.props)).ref = gl(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = gl(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = ju(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ru("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = gl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case N:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || j(t))
                return ((t = ju(t, e.mode, n, null)).return = e), t;
              vl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? u(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case N:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || j(n)) return null !== a ? null : d(e, t, n, r, null);
              vl(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case N:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || j(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              vl(t, r);
            }
            return null;
          }
          function m(a, l, o, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, o[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = i(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === o.length) return n(a, d), al && Za(a, m), u;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((l = i(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Za(a, m), u;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (g = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, m),
              u
            );
          }
          function g(a, o, s, u) {
            var c = j(s);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = o, g = (o = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), al && Za(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((o = i(y, o, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Za(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, g),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === C &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === C) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === N &&
                            yl(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = gl(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === C
                      ? (((l = ju(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = Iu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = gl(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case x:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Fu(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case N:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, l, i, s);
              if (j(i)) return g(r, l, i, s);
              vl(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Ru(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var wl = bl(!0),
          Sl = bl(!1),
          xl = ka(null),
          Cl = null,
          kl = null,
          El = null;
        function Tl() {
          El = kl = Cl = null;
        }
        function _l(e) {
          var t = xl.current;
          Ea(xl), (e._currentValue = t);
        }
        function Pl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ml(e, t) {
          (Cl = e),
            (El = kl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bo = !0), (e.firstContext = null));
        }
        function Ll(e) {
          var t = e._currentValue;
          if (El !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === kl)
            ) {
              if (null === Cl) throw Error(l(308));
              (kl = e), (Cl.dependencies = { lanes: 0, firstContext: e });
            } else kl = kl.next = e;
          return t;
        }
        var zl = null;
        function Nl(e) {
          null === zl ? (zl = [e]) : zl.push(e);
        }
        function Ol(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Nl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Il(e, r)
          );
        }
        function Il(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var jl = !1;
        function Dl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Rl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Al(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Il(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Nl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Il(e, n)
          );
        }
        function Bl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Vl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Hl(e, t, n, r) {
          var a = e.updateQueue;
          jl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = R({}, d, f);
                      break e;
                    case 2:
                      jl = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Ds |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Gl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Ul = {},
          Wl = ka(Ul),
          $l = ka(Ul),
          ql = ka(Ul);
        function Ql(e) {
          if (e === Ul) throw Error(l(174));
          return e;
        }
        function Yl(e, t) {
          switch ((Ta(ql, t), Ta($l, e), Ta(Wl, Ul), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Wl), Ta(Wl, t);
        }
        function Xl() {
          Ea(Wl), Ea($l), Ea(ql);
        }
        function Kl(e) {
          Ql(ql.current);
          var t = Ql(Wl.current),
            n = se(t, e.type);
          t !== n && (Ta($l, e), Ta(Wl, n));
        }
        function Zl(e) {
          $l.current === e && (Ea(Wl), Ea($l));
        }
        var Jl = ka(0);
        function ei(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ti = [];
        function ni() {
          for (var e = 0; e < ti.length; e++)
            ti[e]._workInProgressVersionPrimary = null;
          ti.length = 0;
        }
        var ri = w.ReactCurrentDispatcher,
          ai = w.ReactCurrentBatchConfig,
          li = 0,
          ii = null,
          oi = null,
          si = null,
          ui = !1,
          ci = !1,
          di = 0,
          fi = 0;
        function pi() {
          throw Error(l(321));
        }
        function hi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function mi(e, t, n, r, a, i) {
          if (
            ((li = i),
            (ii = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ri.current = null === e || null === e.memoizedState ? Zi : Ji),
            (e = n(r, a)),
            ci)
          ) {
            i = 0;
            do {
              if (((ci = !1), (di = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (si = oi = null),
                (t.updateQueue = null),
                (ri.current = eo),
                (e = n(r, a));
            } while (ci);
          }
          if (
            ((ri.current = Ki),
            (t = null !== oi && null !== oi.next),
            (li = 0),
            (si = oi = ii = null),
            (ui = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function gi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function vi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === si ? (ii.memoizedState = si = e) : (si = si.next = e), si
          );
        }
        function yi() {
          if (null === oi) {
            var e = ii.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = oi.next;
          var t = null === si ? ii.memoizedState : si.next;
          if (null !== t) (si = t), (oi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (oi = e).memoizedState,
              baseState: oi.baseState,
              baseQueue: oi.baseQueue,
              queue: oi.queue,
              next: null,
            }),
              null === si ? (ii.memoizedState = si = e) : (si = si.next = e);
          }
          return si;
        }
        function bi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function wi(e) {
          var t = yi(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = oi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((li & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (ii.lanes |= d),
                  (Ds |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (bo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (ii.lanes |= i), (Ds |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Si(e) {
          var t = yi(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (bo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function xi() {}
        function Ci(e, t) {
          var n = ii,
            r = yi(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bo = !0)),
            (r = r.queue),
            ji(Ti.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== si && 1 & si.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Li(9, Ei.bind(null, n, r, a, t), void 0, null),
              null === Ms)
            )
              throw Error(l(349));
            0 !== (30 & li) || ki(n, t, a);
          }
          return a;
        }
        function ki(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ii.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ii.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ei(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), _i(t) && Pi(e);
        }
        function Ti(e, t, n) {
          return n(function () {
            _i(t) && Pi(e);
          });
        }
        function _i(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Pi(e) {
          var t = Il(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Mi(e) {
          var t = vi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: bi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = qi.bind(null, ii, e)),
            [t.memoizedState, e]
          );
        }
        function Li(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ii.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ii.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zi() {
          return yi().memoizedState;
        }
        function Ni(e, t, n, r) {
          var a = vi();
          (ii.flags |= e),
            (a.memoizedState = Li(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Oi(e, t, n, r) {
          var a = yi();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== oi) {
            var i = oi.memoizedState;
            if (((l = i.destroy), null !== r && hi(r, i.deps)))
              return void (a.memoizedState = Li(t, n, l, r));
          }
          (ii.flags |= e), (a.memoizedState = Li(1 | t, n, l, r));
        }
        function Ii(e, t) {
          return Ni(8390656, 8, e, t);
        }
        function ji(e, t) {
          return Oi(2048, 8, e, t);
        }
        function Di(e, t) {
          return Oi(4, 2, e, t);
        }
        function Ri(e, t) {
          return Oi(4, 4, e, t);
        }
        function Fi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ai(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Oi(4, 4, Fi.bind(null, t, e), n)
          );
        }
        function Bi() {}
        function Vi(e, t) {
          var n = yi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Hi(e, t) {
          var n = yi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Gi(e, t, n) {
          return 0 === (21 & li)
            ? (e.baseState && ((e.baseState = !1), (bo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (ii.lanes |= n), (Ds |= n), (e.baseState = !0)),
              t);
        }
        function Ui(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ai.transition;
          ai.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ai.transition = r);
          }
        }
        function Wi() {
          return yi().memoizedState;
        }
        function $i(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Qi(e))
          )
            Yi(t, n);
          else if (null !== (n = Ol(e, t, n, r))) {
            nu(n, e, r, eu()), Xi(n, t, r);
          }
        }
        function qi(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Qi(e)) Yi(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Nl(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Ol(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), Xi(n, t, r));
          }
        }
        function Qi(e) {
          var t = e.alternate;
          return e === ii || (null !== t && t === ii);
        }
        function Yi(e, t) {
          ci = ui = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Ki = {
            readContext: Ll,
            useCallback: pi,
            useContext: pi,
            useEffect: pi,
            useImperativeHandle: pi,
            useInsertionEffect: pi,
            useLayoutEffect: pi,
            useMemo: pi,
            useReducer: pi,
            useRef: pi,
            useState: pi,
            useDebugValue: pi,
            useDeferredValue: pi,
            useTransition: pi,
            useMutableSource: pi,
            useSyncExternalStore: pi,
            useId: pi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Ll,
            useCallback: function (e, t) {
              return (vi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ll,
            useEffect: Ii,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ni(4194308, 4, Fi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ni(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ni(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = vi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = vi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = $i.bind(null, ii, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (vi().memoizedState = e);
            },
            useState: Mi,
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return (vi().memoizedState = e);
            },
            useTransition: function () {
              var e = Mi(!1),
                t = e[0];
              return (
                (e = Ui.bind(null, e[1])), (vi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ii,
                a = vi();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ms)) throw Error(l(349));
                0 !== (30 & li) || ki(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Ii(Ti.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Li(9, Ei.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = vi(),
                t = Ms.identifierPrefix;
              if (al) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - it(Xa) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = fi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          Ji = {
            readContext: Ll,
            useCallback: Vi,
            useContext: Ll,
            useEffect: ji,
            useImperativeHandle: Ai,
            useInsertionEffect: Di,
            useLayoutEffect: Ri,
            useMemo: Hi,
            useReducer: wi,
            useRef: zi,
            useState: function () {
              return wi(bi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return Gi(yi(), oi.memoizedState, e);
            },
            useTransition: function () {
              return [wi(bi)[0], yi().memoizedState];
            },
            useMutableSource: xi,
            useSyncExternalStore: Ci,
            useId: Wi,
            unstable_isNewReconciler: !1,
          },
          eo = {
            readContext: Ll,
            useCallback: Vi,
            useContext: Ll,
            useEffect: ji,
            useImperativeHandle: Ai,
            useInsertionEffect: Di,
            useLayoutEffect: Ri,
            useMemo: Hi,
            useReducer: Si,
            useRef: zi,
            useState: function () {
              return Si(bi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              var t = yi();
              return null === oi
                ? (t.memoizedState = e)
                : Gi(t, oi.memoizedState, e);
            },
            useTransition: function () {
              return [Si(bi)[0], yi().memoizedState];
            },
            useMutableSource: xi,
            useSyncExternalStore: Ci,
            useId: Wi,
            unstable_isNewReconciler: !1,
          };
        function to(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function no(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ro = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Fl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Al(e, l, a)) && (nu(t, e, a, r), Bl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Fl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Al(e, l, a)) && (nu(t, e, a, r), Bl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Fl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Al(e, a, r)) && (nu(t, e, r, n), Bl(t, e, r));
          },
        };
        function ao(e, t, n, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function lo(e, t, n) {
          var r = !1,
            a = _a,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Ll(l))
              : ((a = Na(t) ? La : Pa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? za(e, a)
                  : _a)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ro),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function io(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ro.enqueueReplaceState(t, t.state, null);
        }
        function oo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Dl(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Ll(l))
            : ((l = Na(t) ? La : Pa.current), (a.context = za(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (no(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && ro.enqueueReplaceState(a, a.state, null),
              Hl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function so(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function uo(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function co(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fo = "function" === typeof WeakMap ? WeakMap : Map;
        function po(e, t, n) {
          ((n = Fl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Us || ((Us = !0), (Ws = r)), co(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = Fl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                co(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                co(0, t),
                  "function" !== typeof r &&
                    (null === $s ? ($s = new Set([this])) : $s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mo(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fo();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function go(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fl(-1, 1)).tag = 2), Al(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yo = w.ReactCurrentOwner,
          bo = !1;
        function wo(e, t, n, r) {
          t.child = null === e ? Sl(t, null, n, r) : wl(t, e.child, n, r);
        }
        function So(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            Ml(t, a),
            (r = mi(e, t, n, r, l, a)),
            (n = gi()),
            null === e || bo
              ? (al && n && el(t), (t.flags |= 1), wo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Uo(e, t, a))
          );
        }
        function xo(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Nu(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Co(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Uo(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ou(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Co(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((bo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Uo(e, t, a);
              0 !== (131072 & e.flags) && (bo = !0);
            }
          }
          return To(e, t, n, r, a);
        }
        function ko(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(Os, Ns),
                (Ns |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(Os, Ns),
                  (Ns |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ta(Os, Ns),
                (Ns |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(Os, Ns),
              (Ns |= r);
          return wo(e, t, a, n), t.child;
        }
        function Eo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function To(e, t, n, r, a) {
          var l = Na(n) ? La : Pa.current;
          return (
            (l = za(t, l)),
            Ml(t, a),
            (n = mi(e, t, n, r, l, a)),
            (r = gi()),
            null === e || bo
              ? (al && r && el(t), (t.flags |= 1), wo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Uo(e, t, a))
          );
        }
        function _o(e, t, n, r, a) {
          if (Na(n)) {
            var l = !0;
            Da(t);
          } else l = !1;
          if ((Ml(t, a), null === t.stateNode))
            Go(e, t), lo(t, n, r), oo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ll(u))
              : (u = za(t, (u = Na(n) ? La : Pa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && io(t, i, r, u)),
              (jl = !1);
            var f = t.memoizedState;
            (i.state = f),
              Hl(t, r, i, a),
              (s = t.memoizedState),
              o !== r || f !== s || Ma.current || jl
                ? ("function" === typeof c &&
                    (no(t, n, c, r), (s = t.memoizedState)),
                  (o = jl || ao(t, n, o, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Rl(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : to(t.type, o)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ll(s))
                : (s = za(t, (s = Na(n) ? La : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && io(t, i, r, s)),
              (jl = !1),
              (f = t.memoizedState),
              (i.state = f),
              Hl(t, r, i, a);
            var h = t.memoizedState;
            o !== d || f !== h || Ma.current || jl
              ? ("function" === typeof p &&
                  (no(t, n, p, r), (h = t.memoizedState)),
                (u = jl || ao(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Po(e, t, n, r, l, a);
        }
        function Po(e, t, n, r, a, l) {
          Eo(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ra(t, n, !1), Uo(e, t, l);
          (r = t.stateNode), (yo.current = t);
          var o =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = wl(t, e.child, null, l)),
                (t.child = wl(t, null, o, l)))
              : wo(e, t, o, l),
            (t.memoizedState = r.state),
            a && Ra(t, n, !0),
            t.child
          );
        }
        function Mo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            Yl(e, t.containerInfo);
        }
        function Lo(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), wo(e, t, n, r), t.child;
        }
        var zo,
          No,
          Oo,
          Io,
          jo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Do(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ro(e, t, n) {
          var r,
            a = t.pendingProps,
            i = Jl.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ta(Jl, 1 & i),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Du(s, a, 0, null)),
                      (e = ju(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Do(n)),
                      (t.memoizedState = jo),
                      e)
                    : Fo(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ao(e, t, o, (r = uo(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Du(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = ju(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && wl(t, e.child, null, o),
                    (t.child.memoizedState = Do(o)),
                    (t.memoizedState = jo),
                    i);
              if (0 === (1 & t.mode)) return Ao(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Ao(e, t, o, (r = uo((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), bo || s)) {
                if (null !== (r = Ms)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Il(e, a), nu(r, e, a, -1));
                }
                return mu(), Ao(e, t, o, (r = uo(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = _u.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Qa++] = Xa),
                    (qa[Qa++] = Ka),
                    (qa[Qa++] = Ya),
                    (Xa = e.id),
                    (Ka = e.overflow),
                    (Ya = t)),
                  (t = Fo(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Ou(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Ou(r, o))
                : ((o = ju(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Do(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = jo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Ou(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fo(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ao(e, t, n, r) {
          return (
            null !== r && hl(r),
            wl(t, e.child, null, n),
            ((e = Fo(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bo(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pl(e.return, t, n);
        }
        function Vo(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Ho(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((wo(e, t, r.children, n), 0 !== (2 & (r = Jl.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, n, t);
                else if (19 === e.tag) Bo(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(Jl, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ei(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Vo(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ei(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Vo(t, !0, n, null, l);
                break;
              case "together":
                Vo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Go(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Uo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ou((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ou(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wo(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $o(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $o(t), null;
            case 1:
            case 17:
              return Na(t.type) && Oa(), $o(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xl(),
                Ea(Ma),
                Ea(Pa),
                ni(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (iu(ll), (ll = null)))),
                No(e, t),
                $o(t),
                null
              );
            case 5:
              Zl(t);
              var a = Ql(ql.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Oo(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return $o(t), null;
                }
                if (((e = Ql(Wl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < jr.length; a++) Ar(jr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      X(r, i), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ar("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ar("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), J(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    zo(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < jr.length; a++) Ar(jr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Y(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ar("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), J(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + U(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $o(t), null;
            case 6:
              if (e && null != t.stateNode) Io(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = Ql(ql.current)), Ql(Wl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return $o(t), null;
            case 13:
              if (
                (Ea(Jl),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (i = !1);
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $o(t), (i = !1);
                } else null !== ll && (iu(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Jl.current)
                        ? 0 === Is && (Is = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $o(t),
                  null);
            case 4:
              return (
                Xl(),
                No(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                $o(t),
                null
              );
            case 10:
              return _l(t.type._context), $o(t), null;
            case 19:
              if ((Ea(Jl), null === (i = t.memoizedState))) return $o(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Wo(i, !1);
                else {
                  if (0 !== Is || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ei(e))) {
                        for (
                          t.flags |= 128,
                            Wo(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(Jl, (1 & Jl.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ke() > Hs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wo(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ei(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wo(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return $o(t), null;
                  } else
                    2 * Ke() - i.renderingStartTime > Hs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wo(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = Jl.current),
                  Ta(Jl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($o(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ns) &&
                    ($o(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $o(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Qo(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Na(t.type) && Oa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xl(),
                Ea(Ma),
                Ea(Pa),
                ni(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zl(t), null;
            case 13:
              if (
                (Ea(Jl),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(Jl), null;
            case 4:
              return Xl(), null;
            case 10:
              return _l(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (zo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (No = function () {}),
          (Oo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Ql(Wl.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = R({}, a, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ar("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Io = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yo = !1,
          Xo = !1,
          Ko = "function" === typeof WeakSet ? WeakSet : Set,
          Zo = null;
        function Jo(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ku(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            ku(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && es(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ls(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ls(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function os(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Xo || Jo(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ht(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xo &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Xo &&
                (Jo(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  ku(n, t, o);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xo = (r = Xo) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Xo = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ko()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(l(160));
                ps(i, o, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ku(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  ku(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  ku(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && Jo(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && Jo(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  ku(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      K(a, i),
                      be(s, o);
                    var c = be(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        Z(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    ku(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  ku(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  ku(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Vs = Ke())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xo = (c = Xo) || d), ms(t, e), (Xo = c))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zo = e, d = e.child; null !== d; ) {
                    for (f = Zo = d; null !== Zo; ) {
                      switch (((h = (p = Zo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Jo(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              ku(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Jo(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zo = h)) : Ss(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", o)));
                      } catch (g) {
                        ku(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        ku(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, os(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, os(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              ku(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Zo = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zo; ) {
            var a = Zo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yo;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Xo;
                o = Yo;
                var u = Xo;
                if (((Yo = i), (Xo = s) && !u))
                  for (Zo = a; null !== Zo; )
                    (s = (i = Zo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? xs(a)
                        : null !== s
                        ? ((s.return = i), (Zo = s))
                        : xs(a);
                for (; null !== l; ) (Zo = l), bs(l, t, n), (l = l.sibling);
                (Zo = a), (Yo = o), (Xo = u);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Zo = l))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xo)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : to(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Gl(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Gl(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ht(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Xo || (512 & t.flags && as(t));
              } catch (p) {
                ku(t, t.return, p);
              }
            }
            if (t === e) {
              Zo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (t === e) {
              Zo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function xs(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    ku(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      ku(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, l, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    ku(t, i, s);
                  }
              }
            } catch (s) {
              ku(t, t.return, s);
            }
            if (t === e) {
              Zo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Zo = o);
              break;
            }
            Zo = t.return;
          }
        }
        var Cs,
          ks = Math.ceil,
          Es = w.ReactCurrentDispatcher,
          Ts = w.ReactCurrentOwner,
          _s = w.ReactCurrentBatchConfig,
          Ps = 0,
          Ms = null,
          Ls = null,
          zs = 0,
          Ns = 0,
          Os = ka(0),
          Is = 0,
          js = null,
          Ds = 0,
          Rs = 0,
          Fs = 0,
          As = null,
          Bs = null,
          Vs = 0,
          Hs = 1 / 0,
          Gs = null,
          Us = !1,
          Ws = null,
          $s = null,
          qs = !1,
          Qs = null,
          Ys = 0,
          Xs = 0,
          Ks = null,
          Zs = -1,
          Js = 0;
        function eu() {
          return 0 !== (6 & Ps) ? Ke() : -1 !== Zs ? Zs : (Zs = Ke());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== zs
            ? zs & -zs
            : null !== ml.transition
            ? (0 === Js && (Js = mt()), Js)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Ks = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & Ps) && e === Ms) ||
              (e === Ms && (0 === (2 & Ps) && (Rs |= n), 4 === Is && ou(e, zs)),
              ru(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                ((Hs = Ke() + 500), Aa && Ha()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = ft(e, e === Ms ? zs : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Va(e);
                  })(su.bind(null, e))
                : Va(su.bind(null, e)),
                ia(function () {
                  0 === (6 & Ps) && Ha();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Mu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Zs = -1), (Js = 0), 0 !== (6 & Ps))) throw Error(l(327));
          var n = e.callbackNode;
          if (xu() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ms ? zs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = Ps;
            Ps |= 2;
            var i = hu();
            for (
              (Ms === e && zs === t) ||
              ((Gs = null), (Hs = Ke() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Tl(),
              (Es.current = i),
              (Ps = a),
              null !== Ls ? (t = 0) : ((Ms = null), (zs = 0), (t = Is));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = js), fu(e, 0), ou(e, r), ru(e, Ke()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = lu(e, i))),
                  1 === t))
              )
                throw ((n = js), fu(e, 0), ou(e, r), ru(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  Su(e, Bs, Gs);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = Vs + 500 - Ke()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Su.bind(null, e, Bs, Gs), t);
                    break;
                  }
                  Su(e, Bs, Gs);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * ks(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Su.bind(null, e, Bs, Gs), r);
                    break;
                  }
                  Su(e, Bs, Gs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Ke()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = As;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Bs), (Bs = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function ou(e, t) {
          for (
            t &= ~Fs,
              t &= ~Rs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ps)) throw Error(l(327));
          xu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Ke()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = js), fu(e, 0), ou(e, t), ru(e, Ke()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Bs, Gs),
            ru(e, Ke()),
            null
          );
        }
        function uu(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && ((Hs = Ke() + 500), Aa && Ha());
          }
        }
        function cu(e) {
          null !== Qs && 0 === Qs.tag && 0 === (6 & Ps) && xu();
          var t = Ps;
          Ps |= 1;
          var n = _s.transition,
            r = bt;
          try {
            if (((_s.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (_s.transition = n), 0 === (6 & (Ps = t)) && Ha();
          }
        }
        function du() {
          (Ns = Os.current), Ea(Os);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ls))
            for (n = Ls.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Oa();
                  break;
                case 3:
                  Xl(), Ea(Ma), Ea(Pa), ni();
                  break;
                case 5:
                  Zl(r);
                  break;
                case 4:
                  Xl();
                  break;
                case 13:
                case 19:
                  Ea(Jl);
                  break;
                case 10:
                  _l(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ms = e),
            (Ls = e = Ou(e.current, null)),
            (zs = Ns = t),
            (Is = 0),
            (js = null),
            (Fs = Rs = Ds = 0),
            (Bs = As = null),
            null !== zl)
          ) {
            for (t = 0; t < zl.length; t++)
              if (null !== (r = (n = zl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            zl = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ls;
            try {
              if ((Tl(), (ri.current = Ki), ui)) {
                for (var r = ii.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ui = !1;
              }
              if (
                ((li = 0),
                (si = oi = ii = null),
                (ci = !1),
                (di = 0),
                (Ts.current = null),
                null === n || null === n.return)
              ) {
                (Is = 1), (js = t), (Ls = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = zs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = go(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      vo(h, o, s, 0, t),
                      1 & h.mode && mo(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mo(i, c, t), mu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = go(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vo(v, o, s, 0, t),
                      hl(so(u, s));
                    break e;
                  }
                }
                (i = u = so(u, s)),
                  4 !== Is && (Is = 2),
                  null === As ? (As = [i]) : As.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Vl(i, po(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $s || !$s.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Vl(i, ho(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(n);
            } catch (w) {
              (t = w), Ls === n && null !== n && (Ls = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Es.current;
          return (Es.current = Ki), null === e ? Ki : e;
        }
        function mu() {
          (0 !== Is && 3 !== Is && 2 !== Is) || (Is = 4),
            null === Ms ||
              (0 === (268435455 & Ds) && 0 === (268435455 & Rs)) ||
              ou(Ms, zs);
        }
        function gu(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = hu();
          for ((Ms === e && zs === t) || ((Gs = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((Tl(), (Ps = n), (Es.current = r), null !== Ls))
            throw Error(l(261));
          return (Ms = null), (zs = 0), Is;
        }
        function vu() {
          for (; null !== Ls; ) bu(Ls);
        }
        function yu() {
          for (; null !== Ls && !Ye(); ) bu(Ls);
        }
        function bu(e) {
          var t = Cs(e.alternate, e, Ns);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ls = t),
            (Ts.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qo(n, t, Ns))) return void (Ls = n);
            } else {
              if (null !== (n = Qo(n, t)))
                return (n.flags &= 32767), void (Ls = n);
              if (null === e) return (Is = 6), void (Ls = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ls = t);
            Ls = t = e;
          } while (null !== t);
          0 === Is && (Is = 5);
        }
        function Su(e, t, n) {
          var r = bt,
            a = _s.transition;
          try {
            (_s.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xu();
                } while (null !== Qs);
                if (0 !== (6 & Ps)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === Ms && ((Ls = Ms = null), (zs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Mu(tt, function () {
                      return xu(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = _s.transition), (_s.transition = null);
                  var o = bt;
                  bt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Ts.current = null),
                    (function (e, t) {
                      if (((ea = Ut), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = o),
                                    p === i && ++d === r && (u = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Zo = t;
                        null !== Zo;

                      )
                        if (
                          ((e = (t = Zo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zo = e);
                        else
                          for (; null !== Zo; ) {
                            t = Zo;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : to(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (S) {
                              ku(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zo = e);
                              break;
                            }
                            Zo = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    (Ut = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Xe(),
                    (Ps = s),
                    (bt = o),
                    (_s.transition = i);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Qs = e), (Ys = a)),
                  (i = e.pendingLanes),
                  0 === i && ($s = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Us) throw ((Us = !1), (e = Ws), (Ws = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && xu(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Ks
                      ? Xs++
                      : ((Xs = 0), (Ks = e))
                    : (Xs = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (_s.transition = a), (bt = r);
          }
          return null;
        }
        function xu() {
          if (null !== Qs) {
            var e = wt(Ys),
              t = _s.transition,
              n = bt;
            try {
              if (((_s.transition = null), (bt = 16 > e ? 16 : e), null === Qs))
                var r = !1;
              else {
                if (((e = Qs), (Qs = null), (Ys = 0), 0 !== (6 & Ps)))
                  throw Error(l(331));
                var a = Ps;
                for (Ps |= 4, Zo = e.current; null !== Zo; ) {
                  var i = Zo,
                    o = i.child;
                  if (0 !== (16 & Zo.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zo = c; null !== Zo; ) {
                          var d = Zo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zo = f);
                          else
                            for (; null !== Zo; ) {
                              var p = (d = Zo).sibling,
                                h = d.return;
                              if ((ls(d), d === c)) {
                                Zo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zo = p);
                                break;
                              }
                              Zo = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Zo = o);
                  else
                    e: for (; null !== Zo; ) {
                      if (0 !== (2048 & (i = Zo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zo = y);
                        break e;
                      }
                      Zo = i.return;
                    }
                }
                var b = e.current;
                for (Zo = b; null !== Zo; ) {
                  var w = (o = Zo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), (Zo = w);
                  else
                    e: for (o = b; null !== Zo; ) {
                      if (0 !== (2048 & (s = Zo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (x) {
                          ku(s, s.return, x);
                        }
                      if (s === o) {
                        Zo = null;
                        break e;
                      }
                      var S = s.sibling;
                      if (null !== S) {
                        (S.return = s.return), (Zo = S);
                        break e;
                      }
                      Zo = s.return;
                    }
                }
                if (
                  ((Ps = a),
                  Ha(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (_s.transition = t);
            }
          }
          return !1;
        }
        function Cu(e, t, n) {
          (e = Al(e, (t = po(0, (t = so(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function ku(e, t, n) {
          if (3 === e.tag) Cu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Cu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $s || !$s.has(r)))
                ) {
                  (t = Al(t, (e = ho(t, (e = so(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ms === e &&
              (zs & n) === n &&
              (4 === Is ||
              (3 === Is && (130023424 & zs) === zs && 500 > Ke() - Vs)
                ? fu(e, 0)
                : (Fs |= n)),
            ru(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Il(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function _u(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Mu(e, t) {
          return qe(e, t);
        }
        function Lu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function zu(e, t, n, r) {
          return new Lu(e, t, n, r);
        }
        function Nu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ou(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = zu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Nu(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case C:
                return ju(n.children, a, i, t);
              case k:
                (o = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = zu(12, n, t, 2 | a)).elementType = E), (e.lanes = i), e
                );
              case M:
                return (
                  ((e = zu(13, n, t, a)).elementType = M), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = zu(19, n, t, a)).elementType = L), (e.lanes = i), e
                );
              case O:
                return Du(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      o = 10;
                      break e;
                    case _:
                      o = 9;
                      break e;
                    case P:
                      o = 11;
                      break e;
                    case z:
                      o = 14;
                      break e;
                    case N:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = zu(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function ju(e, t, n, r) {
          return ((e = zu(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = zu(22, e, r, t)).elementType = O),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ru(e, t, n) {
          return ((e = zu(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = zu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Au(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, a, l, i, o, s) {
          return (
            (e = new Au(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = zu(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Dl(l),
            e
          );
        }
        function Vu(e) {
          if (!e) return _a;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Na(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Na(n)) return ja(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, a, l, i, o, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, l, 0, o, s)).context = Vu(null)),
            (n = e.current),
            ((l = Fl((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Al(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Gu(e, t, n, r) {
          var a = t.current,
            l = eu(),
            i = tu(a);
          return (
            (n = Vu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fl(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Al(a, t, i)) && (nu(e, a, i, l), Bl(e, a, i)),
            i
          );
        }
        function Uu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $u(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        Cs = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ma.current) bo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Mo(t), pl();
                        break;
                      case 5:
                        Kl(t);
                        break;
                      case 1:
                        Na(t.type) && Da(t);
                        break;
                      case 4:
                        Yl(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(xl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(Jl, 1 & Jl.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ro(e, t, n)
                            : (Ta(Jl, 1 & Jl.current),
                              null !== (e = Uo(e, t, n)) ? e.sibling : null);
                        Ta(Jl, 1 & Jl.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ho(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(Jl, Jl.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), ko(e, t, n);
                    }
                    return Uo(e, t, n);
                  })(e, t, n)
                );
              bo = 0 !== (131072 & e.flags);
            }
          else (bo = !1), al && 0 !== (1048576 & t.flags) && Ja(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Go(e, t), (e = t.pendingProps);
              var a = za(t, Pa.current);
              Ml(t, n), (a = mi(null, t, r, e, a, n));
              var i = gi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Na(r) ? ((i = !0), Da(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Dl(t),
                    (a.updater = ro),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    oo(t, r, e, n),
                    (t = Po(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    wo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Go(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Nu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === z) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = to(r, e)),
                  a)
                ) {
                  case 0:
                    t = To(null, t, r, e, n);
                    break e;
                  case 1:
                    t = _o(null, t, r, e, n);
                    break e;
                  case 11:
                    t = So(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xo(null, t, r, to(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                To(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _o(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 3:
              e: {
                if ((Mo(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Rl(e, t),
                  Hl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Lo(e, t, r, n, (a = so(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Lo(e, t, r, n, (a = so(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Sl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Uo(e, t, n);
                    break e;
                  }
                  wo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Kl(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Eo(e, t),
                wo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Ro(e, t, n);
            case 4:
              return (
                Yl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wl(t, null, r, n)) : wo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                So(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 7:
              return wo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Ta(xl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Ma.current) {
                      t = Uo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Fl(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Pl(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          Pl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                wo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ml(t, n),
                (r = r((a = Ll(a)))),
                (t.flags |= 1),
                wo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = to((r = t.type), t.pendingProps)),
                xo(e, t, r, (a = to(r.type, a)), n)
              );
            case 15:
              return Co(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : to(r, a)),
                Go(e, t),
                (t.tag = 1),
                Na(r) ? ((e = !0), Da(t)) : (e = !1),
                Ml(t, n),
                lo(t, r, a),
                oo(t, r, a, n),
                Po(null, t, r, !0, e, n)
              );
            case 19:
              return Ho(e, t, n);
            case 22:
              return ko(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function Ju(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Uu(i);
                o.call(e);
              };
            }
            Gu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Uu(i);
                    l.call(e);
                  };
                }
                var i = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Uu(s);
                  o.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Gu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Uu(i);
        }
        (Yu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Gu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Gu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Ot.length && 0 !== t && t < Ot[n].priority;
                n++
              );
              Ot.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ke()),
                    0 === (6 & Ps) && ((Hs = Ke() + 500), Ha()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Il(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  $u(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Il(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              $u(e, 134217728);
            }
          }),
          (Ct = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Il(e, t);
              if (null !== n) nu(n, e, t, eu());
              $u(e, t);
            }
          }),
          (kt = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(l(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = uu),
          (Me = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Te, _e, uu],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (lt = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ku(t)) throw Error(l(200));
            return Ju(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              o = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ha] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ku(t)) throw Error(l(200));
            return Ju(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ku(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Ju(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ku(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return Ju(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          C = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, a) && !k.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: C.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function M(e, t, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + P(s, 0) : l),
              S(i)
                ? ((a = ""),
                  null != e && (a = e.replace(_, "$&/") + "/"),
                  M(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(_, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), S(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + P((o = e[u]), u);
              s += M(o, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += M((o = o.value), t, a, (c = l + P(o, u++)), i);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            M(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function z(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          O = { transition: null },
          I = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: C,
          };
        function j() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.act = j),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = C.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !k.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: z,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = j),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), O(x);
            else {
              var t = r(c);
              null !== t && I(S, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), y(T), (T = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !M()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var o = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && I(S, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var C,
          k = !1,
          E = null,
          T = -1,
          _ = 5,
          P = -1;
        function M() {
          return !(t.unstable_now() - P < _);
        }
        function L() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? C() : ((k = !1), (E = null));
            }
          } else k = !1;
        }
        if ("function" === typeof b)
          C = function () {
            b(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            N = z.port2;
          (z.port1.onmessage = L),
            (C = function () {
              N.postMessage(null);
            });
        } else
          C = function () {
            v(L, 0);
          };
        function O(e) {
          (E = e), k || ((k = !0), C());
        }
        function I(e, n) {
          T = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), O(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(T), (T = -1)) : (g = !0), I(S, l - i)))
                : ((e.sortIndex = o), n(u, e), m || h || ((m = !0), O(x))),
              e
            );
          }),
          (t.unstable_shouldYield = M),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.p = "/"),
    (() => {
      var e,
        t,
        r,
        a,
        l,
        i,
        o,
        s = n(43),
        u = n(391);
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      function d(n, u) {
        let { title: d, titleId: f, ...p } = n;
        return s.createElement(
          "svg",
          c(
            {
              id: "_\\uB808\\uC774\\uC5B4_1",
              "data-name": "\\uB808\\uC774\\uC5B4 1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 188 189",
              fill: "current",
              ref: u,
              "aria-labelledby": f,
            },
            p
          ),
          d ? s.createElement("title", { id: f }, d) : null,
          e ||
            (e = s.createElement(
              "defs",
              null,
              s.createElement(
                "style",
                null,
                "\n      .cls-1 {\n        stroke-width: 0px;\n      }\n    "
              )
            )),
          t ||
            (t = s.createElement("path", {
              className: "cls-1",
              d: "M91.18,189.42C45.16,189.47-1.45,149.34-.2,93.29.5,61.54,14.27,36.62,40.03,18,52.93,8.68,66.77,2.53,82.69.49c46.6-5.96,91.03,24.11,102.43,69.75,13.33,53.33-20.24,106.51-74.21,117.25-6.45,1.28-13.14,1.32-19.72,1.93ZM137.32,82.68c-1.55-4.41-3.06-8.7-4.7-13.37-2.73.32-4.99.91-7.21.78-3.83-.22-7.74-.48-11.41-1.49-3.4-.94-5.14-5.32-3.78-8.68.86-2.11,2.18-4.11,3.65-5.87,1.97-2.35,4.28-4.41,6.67-6.83-3.52-6.01-7.55-10.89-13.17-13.32-10.2,4.92-19.58,9.59-29.09,14-5.33,2.47-10.94,4.13-16.95,3.3-5.48-.76-8.12-4.51-7.02-9.95,1.14-5.62,4.52-9.91,8.83-13.37,3.62-2.91,7.68-5.29,11.46-8.01,1.1-.79,1.91-1.97,4.05-4.24-12.18,1.74-22.63,3.6-31.42,9.52-18.45,12.43-31.19,29.22-35.21,51.54-1.3,7.22-1.64,14.71-1.63,22.07.04,24.42,9.6,44.65,28.36,60.2,13.13,10.89,27.81,18.35,45.55,18.42,17.81.06,34.14-10.7,41.73-28.32-3.01-.67-6.09-1.04-8.94-2.05-4-1.42-6.01-5.3-4.77-9.38.77-2.53,1.92-5.35,3.79-7.05,3.98-3.63,8.44-6.77,12.91-9.8,2.49-1.69,5.41-2.75,8.19-4.11.76-5.32,1.46-10.2,2.19-15.32,3.98-.71,7.45-1.12,10.8-1.97,4.97-1.26,9.56-3.31,12.53-7.87,1.89-2.9,1.31-6.06-1.35-8.27-2.93-2.43-6.41-2.91-9.9-2.61-4.56.39-9.08,1.3-14.18,2.07ZM153.33,138.17c-5.62.84-11.68,1.89-15.38,7.83-1.88,3.02-.58,6.46,2.85,7.2,6.48,1.39,12.24-.04,17.1-4.63,1.74-1.64,2.94-3.54,2.19-6.13-.72-2.48-3.24-4.25-6.76-4.27ZM126.45,33.44c1.19.87,2.76,2.94,4.54,3.14,5.36.6,11.22-4.94,11.58-10.46.14-2.19-1.24-3.75-3.28-4.09-5.85-.98-12.78,4.75-12.85,11.41ZM101.64,18.63c-4.3-2.33-8.08-1.19-11.27,2.01-.87.87-1.34,2.94-.93,4.06.4,1.08,2.17,2.27,3.37,2.31,5.07.17,6.87-1.66,8.82-8.37ZM151.56,58.32c3.68-.11,5.64-1.68,5.86-3.95.19-1.93-1.66-3.81-3.6-3.54-2.45.34-4.78,1.45-4.85,4.03-.04,1.28,1.9,2.61,2.59,3.46ZM170.09,112.78c-.27-2.89-3.09-4.23-5.39-3.27-1.81.76-3.28,2.04-2.64,4.25.68,2.33,2.85,2.45,4.54,1.82,1.47-.55,2.59-2.05,3.48-2.81Z",
            })),
          r ||
            (r = s.createElement("path", {
              className: "cls-1",
              d: "M67.62,128.64c-1.98-.3-3.53-.44-5.03-.79-5.73-1.35-7.99-6.63-4.97-11.59.6-.99,1.3-1.95,2.13-2.75,8.87-8.43,19.21-14.26,31.05-17.38,4.74-1.25,9.25.13,13.64,1.53,3.93,1.25,5.42,5.74,3.51,9.6-.68,1.37-1.5,2.76-2.56,3.84-10.48,10.73-23.5,15.91-37.78,17.53Z",
            })),
          a ||
            (a = s.createElement("path", {
              className: "cls-1",
              d: "M80.69,143.54c1.45.15,2.79-.05,3.72.47,1.59.89,3.74,2.02,4.11,3.46.36,1.41-.74,3.84-1.99,4.92-4.78,4.12-10.57,6.4-16.69,7.73-1.47.32-3.09.18-4.62.02-2.55-.27-4.58-1.77-4.88-4.22-.2-1.69.46-3.94,1.56-5.24,3.41-4.02,8.32-5.49,13.28-6.58,1.88-.41,3.85-.4,5.5-.56Z",
            })),
          l ||
            (l = s.createElement("path", {
              className: "cls-1",
              d: "M72.99,66.79c1.42.27,2.57.39,3.67.7,3.09.88,4.52,4.81,2.77,7.46-3.37,5.11-12.44,9.04-18.24,7.49-1.67-.44-3.56-1.84-4.37-3.33-1.19-2.2-.13-4.54,1.71-6.2,4.17-3.75,9.38-5.06,14.45-6.13Z",
            })),
          i ||
            (i = s.createElement("path", {
              className: "cls-1",
              d: "M38.21,109.84c.76.49,1.46,1.98,1.29,2.85-.68,3.67-4.3,6.32-9.11,6.48",
            })),
          o ||
            (o = s.createElement("path", {
              className: "cls-1",
              d: "M37.35,68.07c-1.61,3.37-4.71,4.68-8.6,4.8-.71-.74-1.8-1.41-2.12-2.35",
            }))
        );
      }
      const f = s.forwardRef(d);
      n.p;
      var p, h;
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          m.apply(this, arguments)
        );
      }
      function g(e, t) {
        let { title: n, titleId: r, ...a } = e;
        return s.createElement(
          "svg",
          m(
            {
              width: 25,
              height: 24,
              viewBox: "0 0 25 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? s.createElement("title", { id: r }, n) : null,
          p ||
            (p = s.createElement(
              "g",
              { id: "octicon:eye-24", clipPath: "url(#clip0_25_2779)" },
              s.createElement("path", {
                id: "Vector",
                d: "M15.8333 12C15.8333 12.4596 15.7428 12.9148 15.5669 13.3394C15.391 13.764 15.1332 14.1499 14.8082 14.4749C14.4832 14.7999 14.0973 15.0577 13.6727 15.2336C13.2481 15.4095 12.7929 15.5 12.3333 15.5C11.8737 15.5 11.4186 15.4095 10.9939 15.2336C10.5693 15.0577 10.1834 14.7999 9.85844 14.4749C9.53343 14.1499 9.27563 13.764 9.09973 13.3394C8.92384 12.9148 8.83331 12.4596 8.83331 12C8.83331 11.0717 9.20206 10.1815 9.85844 9.52513C10.5148 8.86875 11.4051 8.5 12.3333 8.5C13.2616 8.5 14.1518 8.86875 14.8082 9.52513C15.4646 10.1815 15.8333 11.0717 15.8333 12Z",
                fill: "white",
              }),
              s.createElement("path", {
                id: "Vector_2",
                d: "M12.3333 3.5C15.7653 3.5 18.4573 5.034 20.3873 6.741C22.3133 8.444 23.5193 10.351 24.0033 11.201C24.1434 11.444 24.2171 11.7195 24.2171 12C24.2171 12.2805 24.1434 12.556 24.0033 12.799C23.5193 13.649 22.3133 15.556 20.3873 17.26C18.4583 18.966 15.7653 20.5 12.3333 20.5C8.90131 20.5 6.20931 18.966 4.27931 17.26C2.35331 15.558 1.14731 13.65 0.663306 12.8C0.523248 12.557 0.449524 12.2815 0.449524 12.001C0.449524 11.7205 0.523248 11.445 0.663306 11.202C1.14731 10.352 2.35331 8.445 4.27931 6.74C6.20831 5.034 8.90131 3.5 12.3333 3.5ZM1.96631 11.945C1.95537 11.9613 1.94946 11.9804 1.94931 12C1.94997 12.02 1.95564 12.0387 1.96631 12.056C2.40731 12.83 3.51731 14.583 5.27331 16.136C7.02431 17.685 9.37831 19 12.3333 19C15.2883 19 17.6433 17.685 19.3933 16.136C21.1493 14.583 22.2593 12.83 22.7003 12.056C22.7114 12.0394 22.7174 12.0199 22.7173 12C22.7174 11.9801 22.7114 11.9606 22.7003 11.944C22.2593 11.171 21.1493 9.417 19.3933 7.864C17.6423 6.315 15.2883 5 12.3333 5C9.37831 5 7.02331 6.314 5.27331 7.865C3.51731 9.417 2.40731 11.171 1.96631 11.945Z",
                fill: "white",
              })
            )),
          h ||
            (h = s.createElement(
              "defs",
              null,
              s.createElement(
                "clipPath",
                { id: "clip0_25_2779" },
                s.createElement("rect", {
                  width: 24,
                  height: 24,
                  fill: "white",
                  transform: "translate(0.333313)",
                })
              )
            ))
        );
      }
      const v = s.forwardRef(g);
      n.p;
      var y;
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          b.apply(this, arguments)
        );
      }
      function w(e, t) {
        let { title: n, titleId: r, ...a } = e;
        return s.createElement(
          "svg",
          b(
            {
              width: 19,
              height: 2,
              viewBox: "0 0 19 2",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? s.createElement("title", { id: r }, n) : null,
          y ||
            (y = s.createElement("path", {
              d: "M1.33331 1H17.3333",
              stroke: "white",
              strokeWidth: 2,
              strokeLinecap: "round",
            }))
        );
      }
      const S = s.forwardRef(w);
      n.p;
      var x, C;
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          k.apply(this, arguments)
        );
      }
      function E(e, t) {
        let { title: n, titleId: r, ...a } = e;
        return s.createElement(
          "svg",
          k(
            {
              width: 246,
              height: 245,
              viewBox: "0 0 246 245",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? s.createElement("title", { id: r }, n) : null,
          x ||
            (x = s.createElement("path", {
              d: "M136.985 132.833C135.709 134.041 134.471 135.302 133.143 136.457C120.842 147.18 108.534 157.888 96.2254 168.596C93.0998 171.312 90.0935 174.201 86.8038 176.7C68.4381 190.68 51.7806 206.648 34.5264 221.918C29.6851 226.203 24.6423 230.277 19.5921 234.314C17.9212 235.65 16.4665 236.956 15.9518 239.132C15.7802 239.875 15.3849 240.595 14.9671 241.24C13.0425 244.204 9.40968 245.638 6.23932 244.73C2.78548 243.739 0.398387 240.97 0.0403229 237.526C-0.302822 234.269 1.5621 230.382 4.94879 229.504C12.5353 227.553 17.9212 222.241 23.9784 217.919C25.0302 217.168 26.0448 216.358 27.0593 215.555C43.7242 202.401 60.2623 189.081 77.0839 176.137C95.1363 162.248 113.457 148.718 131.674 135.047C133.106 133.974 134.628 133.013 136.112 132C136.411 132.278 136.702 132.548 137 132.825L136.985 132.833Z",
              fill: "white",
            })),
          C ||
            (C = s.createElement("path", {
              d: "M245.634 1.11C243.924 2.72 242.264 4.4 240.484 5.94C223.994 20.23 207.494 34.5 190.994 48.77C186.804 52.39 182.774 56.24 178.364 59.57C153.744 78.2 131.414 99.48 108.284 119.83C101.794 125.54 95.0341 130.97 88.2641 136.35C86.0241 138.13 84.0741 139.87 83.3841 142.77C83.1541 143.76 82.6241 144.72 82.0641 145.58C79.4841 149.53 74.6141 151.44 70.3641 150.23C65.7341 148.91 62.5341 145.22 62.0541 140.63C61.5941 136.29 64.0941 131.11 68.6341 129.94C78.8041 127.34 86.0241 120.26 94.1441 114.5C95.5541 113.5 96.9141 112.42 98.2741 111.35C120.614 93.82 142.784 76.07 165.334 58.82C189.534 40.31 214.094 22.28 238.514 4.06C240.434 2.63 242.474 1.35 244.464 0C244.864 0.37 245.254 0.73 245.654 1.1L245.634 1.11Z",
              fill: "white",
            }))
        );
      }
      const T = s.forwardRef(E);
      n.p;
      var _;
      function P() {
        return (
          (P = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          P.apply(this, arguments)
        );
      }
      function M(e, t) {
        let { title: n, titleId: r, ...a } = e;
        return s.createElement(
          "svg",
          P(
            {
              width: 96,
              height: 92,
              viewBox: "0 0 96 92",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? s.createElement("title", { id: r }, n) : null,
          _ ||
            (_ = s.createElement("path", {
              d: "M95.18 39.39C84.81 45.52 73.51 47.21 63.58 50.63C59.82 55.04 56.51 58.94 52.7 63.41C50.73 72.27 51.28 82.32 49.2 91.83C46.66 92.14 46.3 90.64 46.11 89.35C45.19 83.2 43.7 77.03 43.73 70.88C43.78 62.62 38.89 57.5 33.73 52.49C32.2 51 29.35 50.55 27.02 50.28C20.84 49.56 14.61 49.24 8.41 48.68C6.41 48.5 4.43 48.09 0 47.41C4.8 45.77 7.27 44.8 9.81 44.1C13.13 43.18 16.51 42.46 19.87 41.68C28.42 39.71 36.46 36.9 40.87 28.76C43.09 19.57 45.26 10.53 47.52 1.51C47.64 1.04 48.58 0.77 49.77 0C50.79 7.09 51.74 13.88 52.74 20.66C54.34 31.5 56.89 34.2 67.52 35.88C72.98 36.74 78.49 37.29 83.98 37.98C87.72 38.45 91.46 38.92 95.2 39.38L95.18 39.39Z",
              fill: "white",
            }))
        );
      }
      const L = s.forwardRef(M);
      n.p;
      var z = n(950),
        N = n(579);
      const O = (e) => {
          const { children: t } = e;
          return (0, z.createPortal)(
            (0, N.jsx)(N.Fragment, { children: t }),
            document.getElementById("modal")
          );
        },
        I = (e) => {
          const { children: t } = e;
          return (
            (0, s.useEffect)(() => {
              const e = document.querySelector("body"),
                t = e.style.overflow;
              return (
                (e.style.overflow = "hidden"),
                () => {
                  e.style.overflow = t;
                }
              );
            }),
            (0, N.jsx)(O, { children: t })
          );
        };
      var j;
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          D.apply(this, arguments)
        );
      }
      function R(e, t) {
        let { title: n, titleId: r, ...a } = e;
        return s.createElement(
          "svg",
          D(
            {
              width: 14,
              height: 14,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? s.createElement("title", { id: r }, n) : null,
          j ||
            (j = s.createElement("path", {
              d: "M12.892 0.302021C12.7995 0.209317 12.6896 0.135769 12.5686 0.085588C12.4477 0.0354065 12.318 0.00957632 12.187 0.00957632C12.0561 0.00957632 11.9264 0.0354065 11.8054 0.085588C11.6844 0.135769 11.5745 0.209317 11.482 0.302021L6.59202 5.18202L1.70202 0.29202C1.60944 0.199438 1.49953 0.125998 1.37856 0.0758934C1.2576 0.0257884 1.12795 9.75509e-10 0.997021 0C0.86609 -9.75509e-10 0.736441 0.0257884 0.615477 0.0758934C0.494513 0.125998 0.384602 0.199438 0.29202 0.29202C0.199438 0.384602 0.125998 0.494513 0.0758934 0.615477C0.0257884 0.736441 -9.75509e-10 0.86609 0 0.997021C9.75509e-10 1.12795 0.0257884 1.2576 0.0758934 1.37856C0.125998 1.49953 0.199438 1.60944 0.29202 1.70202L5.18202 6.59202L0.29202 11.482C0.199438 11.5746 0.125998 11.6845 0.0758934 11.8055C0.0257884 11.9264 0 12.0561 0 12.187C0 12.3179 0.0257884 12.4476 0.0758934 12.5686C0.125998 12.6895 0.199438 12.7994 0.29202 12.892C0.384602 12.9846 0.494513 13.058 0.615477 13.1081C0.736441 13.1583 0.86609 13.184 0.997021 13.184C1.12795 13.184 1.2576 13.1583 1.37856 13.1081C1.49953 13.058 1.60944 12.9846 1.70202 12.892L6.59202 8.00202L11.482 12.892C11.5746 12.9846 11.6845 13.058 11.8055 13.1081C11.9264 13.1583 12.0561 13.184 12.187 13.184C12.3179 13.184 12.4476 13.1583 12.5686 13.1081C12.6895 13.058 12.7994 12.9846 12.892 12.892C12.9846 12.7994 13.058 12.6895 13.1081 12.5686C13.1583 12.4476 13.184 12.3179 13.184 12.187C13.184 12.0561 13.1583 11.9264 13.1081 11.8055C13.058 11.6845 12.9846 11.5746 12.892 11.482L8.00202 6.59202L12.892 1.70202C13.272 1.32202 13.272 0.682021 12.892 0.302021Z",
              fill: "black",
            }))
        );
      }
      const F = s.forwardRef(R),
        A =
          (n.p,
          (e) => {
            const { menuList: t, onClose: n, onMenuClick: r } = e;
            return (0, N.jsx)(I, {
              children: (0, N.jsxs)("div", {
                className: "menu",
                children: [
                  (0, N.jsxs)("div", {
                    className: "menu__header",
                    children: [
                      (0, N.jsx)("h2", { children: "Menu" }),
                      (0, N.jsx)("button", {
                        onClick: () => {
                          n();
                        },
                        children: (0, N.jsx)(F, { width: 24, height: 24 }),
                      }),
                    ],
                  }),
                  (0, N.jsx)("div", {
                    className: "menu__container",
                    children: (0, N.jsx)("ul", {
                      children: t.map((e, t) =>
                        (0, N.jsx)(
                          "li",
                          {
                            className: "menu__item",
                            onClick: () => {
                              n(), r(e);
                            },
                            children: (0, N.jsx)("span", { children: e }),
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            });
          });
      var B, V, H, G, U, W, $, q, Q, Y;
      function X() {
        return (
          (X = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          X.apply(this, arguments)
        );
      }
      function K(e, t) {
        let { title: n, titleId: r, ...a } = e;
        return s.createElement(
          "svg",
          X(
            {
              width: 42,
              height: 42,
              viewBox: "0 0 42 42",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? s.createElement("title", { id: r }, n) : null,
          B ||
            (B = s.createElement("path", {
              d: "M36.8135 9.99739C34.0165 9.91284 31.9631 7.75195 32.0005 4.9381C32.0426 1.93634 34.4 -0.201061 37.4309 0.0150277C40.2093 0.212326 42.1457 2.46247 41.9914 5.30451C41.837 8.09957 39.648 10.082 36.8135 9.99739Z",
              fill: "black",
            })),
          V ||
            (V = s.createElement("path", {
              d: "M23.9954 11.4326C21.599 12.9005 18.9876 13.3052 16.6929 14.1241C15.824 15.1802 15.059 16.1141 14.1786 17.1845C13.7233 19.3062 13.8504 21.7128 13.3697 23.9901C12.7828 24.0644 12.6996 23.7052 12.6557 23.3963C12.4431 21.9235 12.0987 20.446 12.1057 18.9733C12.1172 16.9953 10.9872 15.7693 9.79475 14.5696C9.44118 14.2128 8.78256 14.105 8.24412 14.0403C6.81597 13.8679 5.37626 13.7913 3.94349 13.6572C3.4813 13.6141 3.02374 13.5159 2 13.3531C3.10924 12.9603 3.68004 12.7281 4.26702 12.5604C5.03424 12.3401 5.81534 12.1677 6.59181 11.9809C8.56765 11.5092 10.4256 10.8363 11.4447 8.88703C11.9578 6.68634 12.4592 4.52157 12.9815 2.36159C13.0092 2.24904 13.2265 2.18439 13.5015 2C13.7372 3.69781 13.9567 5.32378 14.1878 6.94736C14.5576 9.54317 15.1468 10.1897 17.6034 10.592C18.8651 10.798 20.1384 10.9297 21.4071 11.0949C22.2714 11.2075 23.1357 11.32 24 11.4302L23.9954 11.4326Z",
              fill: "black",
            })),
          H ||
            (H = s.createElement("path", {
              d: "M4.81353 9.99739C2.01645 9.91284 -0.0369158 7.75195 0.000503239 4.9381C0.0425997 1.93634 2.4 -0.201061 5.43094 0.0150277C8.20931 0.212326 10.1457 2.46247 9.99139 5.30451C9.83704 8.09957 7.64802 10.082 4.81353 9.99739Z",
              fill: "black",
            })),
          G ||
            (G = s.createElement("path", {
              d: "M4.88812 23.9984C3.20987 23.9477 1.97785 22.6512 2.0003 20.9629C2.02556 19.1618 3.44 17.8794 5.25857 18.009C6.92558 18.1274 8.08745 19.4775 7.99483 21.1827C7.90222 22.8597 6.58881 24.0492 4.88812 23.9984Z",
              fill: "black",
            })),
          U ||
            (U = s.createElement("path", {
              d: "M20.8881 7.99844C19.2099 7.9477 17.9779 6.65117 18.0003 4.96286C18.0256 3.1618 19.44 1.87936 21.2586 2.00902C22.9256 2.1274 24.0874 3.47748 23.9948 5.1827C23.9022 6.85974 22.5888 8.04917 20.8881 7.99844Z",
              fill: "black",
            })),
          W ||
            (W = s.createElement("path", {
              d: "M4.81353 41.9974C2.01645 41.9128 -0.0369158 39.7519 0.000503239 36.9381C0.0425997 33.9363 2.4 31.7989 5.43094 32.015C8.20931 32.2123 10.1457 34.4625 9.99139 37.3045C9.83704 40.0996 7.64802 42.082 4.81353 41.9974Z",
              fill: "black",
            })),
          $ ||
            ($ = s.createElement("path", {
              d: "M36.8135 41.9974C34.0165 41.9128 31.9631 39.7519 32.0005 36.9381C32.0426 33.9363 34.4 31.7989 37.4309 32.015C40.2093 32.2123 42.1457 34.4625 41.9914 37.3045C41.837 40.0996 39.648 42.082 36.8135 41.9974Z",
              fill: "black",
            })),
          q ||
            (q = s.createElement("path", {
              d: "M20.8135 41.9974C18.0165 41.9128 15.9631 39.7519 16.0005 36.9381C16.0426 33.9363 18.4 31.7989 21.4309 32.015C24.2093 32.2123 26.1457 34.4625 25.9914 37.3045C25.837 40.0996 23.648 42.082 20.8135 41.9974Z",
              fill: "black",
            })),
          Q ||
            (Q = s.createElement("path", {
              d: "M36.8135 25.9974C34.0165 25.9128 31.9631 23.7519 32.0005 20.9381C32.0426 17.9363 34.4 15.7989 37.4309 16.015C40.2093 16.2123 42.1457 18.4625 41.9914 21.3045C41.837 24.0996 39.648 26.082 36.8135 25.9974Z",
              fill: "black",
            })),
          Y ||
            (Y = s.createElement("path", {
              d: "M20.8135 25.9974C18.0165 25.9128 15.9631 23.7519 16.0005 20.9381C16.0426 17.9363 18.4 15.7989 21.4309 16.015C24.2093 16.2123 26.1457 18.4625 25.9914 21.3045C25.837 24.0996 23.648 26.082 20.8135 25.9974Z",
              fill: "black",
            }))
        );
      }
      const Z = s.forwardRef(K),
        J =
          (n.p,
          (e) => {
            const { menuList: t, onMenuClick: n } = e,
              [r, a] = (0, s.useState)(!1);
            return (0, N.jsxs)("header", {
              children: [
                (0, N.jsxs)("div", {
                  className: "logo",
                  children: [
                    (0, N.jsx)(f, { fill: "black" }),
                    (0, N.jsx)("p", { children: "OrbitCode" }),
                  ],
                }),
                (0, N.jsxs)("nav", {
                  id: "menu",
                  children: [
                    (0, N.jsx)("ul", {
                      className: "menu__list",
                      children: t.map((e, t) =>
                        (0, N.jsx)(
                          "li",
                          {
                            className: "menu__item",
                            onClick: () => n(e),
                            children: e,
                          },
                          t
                        )
                      ),
                    }),
                    (0, N.jsxs)("button", {
                      children: [
                        (0, N.jsx)(Z, {
                          className: "menu__icon",
                          onClick: () => {
                            a(!r);
                          },
                        }),
                        r &&
                          (0, N.jsx)(A, {
                            menuList: t,
                            onClose: () => {
                              a(!1);
                            },
                            onMenuClick: n,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          });
      function ee(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function te(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : ee(t[n]) &&
                ee(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                te(e[n], t[n]);
          });
      }
      const ne = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function re() {
        const e = "undefined" !== typeof document ? document : {};
        return te(e, ne), e;
      }
      const ae = {
        document: ne,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function le() {
        const e = "undefined" !== typeof window ? window : {};
        return te(e, ae), e;
      }
      function ie(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function oe() {
        return Date.now();
      }
      function se(e, t) {
        void 0 === t && (t = "x");
        const n = le();
        let r, a, l;
        const i = (function (e) {
          const t = le();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((a = i.transform || i.webkitTransform),
              a.split(",").length > 6 &&
                (a = a
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (l = new n.WebKitCSSMatrix("none" === a ? "" : a)))
            : ((l =
                i.MozTransform ||
                i.OTransform ||
                i.MsTransform ||
                i.msTransform ||
                i.transform ||
                i
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (r = l.toString().split(","))),
          "x" === t &&
            (a = n.WebKitCSSMatrix
              ? l.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (a = n.WebKitCSSMatrix
              ? l.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          a || 0
        );
      }
      function ue(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function ce() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (
            void 0 !== a &&
            null !== a &&
            ((n = a),
            !("undefined" !== typeof window &&
            "undefined" !== typeof window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const n = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, r = n.length; t < r; t += 1) {
              const r = n[t],
                l = Object.getOwnPropertyDescriptor(a, r);
              void 0 !== l &&
                l.enumerable &&
                (ue(e[r]) && ue(a[r])
                  ? a[r].__swiper__
                    ? (e[r] = a[r])
                    : ce(e[r], a[r])
                  : !ue(e[r]) && ue(a[r])
                  ? ((e[r] = {}),
                    a[r].__swiper__ ? (e[r] = a[r]) : ce(e[r], a[r]))
                  : (e[r] = a[r]));
            }
          }
        }
        var n;
        return e;
      }
      function de(e, t, n) {
        e.style.setProperty(t, n);
      }
      function fe(e) {
        let { swiper: t, targetPosition: n, side: r } = e;
        const a = le(),
          l = -t.translate;
        let i,
          o = null;
        const s = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(t.cssModeFrameID);
        const u = n > l ? "next" : "prev",
          c = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
          d = () => {
            (i = new Date().getTime()), null === o && (o = i);
            const e = Math.max(Math.min((i - o) / s, 1), 0),
              u = 0.5 - Math.cos(e * Math.PI) / 2;
            let f = l + u * (n - l);
            if ((c(f, n) && (f = n), t.wrapperEl.scrollTo({ [r]: f }), c(f, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [r]: f });
                }),
                void a.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = a.requestAnimationFrame(d);
          };
        d();
      }
      function pe(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function he(e) {
        try {
          return void console.warn(e);
        } catch (t) {}
      }
      function me(e, t) {
        void 0 === t && (t = []);
        const n = document.createElement(e);
        return (
          n.classList.add(
            ...(Array.isArray(t)
              ? t
              : (function (e) {
                  return (
                    void 0 === e && (e = ""),
                    e
                      .trim()
                      .split(" ")
                      .filter((e) => !!e.trim())
                  );
                })(t))
          ),
          n
        );
      }
      function ge(e, t) {
        return le().getComputedStyle(e, null).getPropertyValue(t);
      }
      function ve(e) {
        let t,
          n = e;
        if (n) {
          for (t = 0; null !== (n = n.previousSibling); )
            1 === n.nodeType && (t += 1);
          return t;
        }
      }
      function ye(e, t) {
        const n = [];
        let r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
        return n;
      }
      function be(e, t, n) {
        const r = le();
        return n
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function we(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
      let Se, xe, Ce;
      function ke() {
        return (
          Se ||
            (Se = (function () {
              const e = le(),
                t = re();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          Se
        );
      }
      function Ee(e) {
        return (
          void 0 === e && (e = {}),
          xe ||
            (xe = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = ke(),
                r = le(),
                a = r.navigator.platform,
                l = t || r.navigator.userAgent,
                i = { ios: !1, android: !1 },
                o = r.screen.width,
                s = r.screen.height,
                u = l.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = l.match(/(iPad).*OS\s([\d_]+)/);
              const d = l.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === a;
              let h = "MacIntel" === a;
              return (
                !c &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(o, "x").concat(s)) >= 0 &&
                  ((c = l.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                u && !p && ((i.os = "android"), (i.android = !0)),
                (c || f || d) && ((i.os = "ios"), (i.ios = !0)),
                i
              );
            })(e)),
          xe
        );
      }
      function Te() {
        return (
          Ce ||
            (Ce = (function () {
              const e = le(),
                t = Ee();
              let n = !1;
              function r() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              }
              if (r()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                  const [e, r] = t
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  n = e < 16 || (16 === e && r < 2);
                }
              }
              const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
                l = r();
              return {
                isSafari: n || l,
                needPerspectiveFix: n,
                need3dFix: l || (a && t.ios),
                isWebView: a,
              };
            })()),
          Ce
        );
      }
      var _e = {
        on(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          const a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            t.apply(r, l);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          const r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, a) => {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, r;
          for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
            l[i] = arguments[i];
          "string" === typeof l[0] || Array.isArray(l[0])
            ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
            : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
            n.unshift(r);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(r, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(r, n);
                  });
            }),
            e
          );
        },
      };
      const Pe = (e, t, n) => {
        t && !e.classList.contains(n)
          ? e.classList.add(n)
          : !t && e.classList.contains(n) && e.classList.remove(n);
      };
      const Me = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const n = t.closest(
            e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass)
          );
          if (n) {
            let t = n.querySelector(".".concat(e.params.lazyPreloaderClass));
            !t &&
              e.isElement &&
              (n.shadowRoot
                ? (t = n.shadowRoot.querySelector(
                    ".".concat(e.params.lazyPreloaderClass)
                  ))
                : requestAnimationFrame(() => {
                    n.shadowRoot &&
                      ((t = n.shadowRoot.querySelector(
                        ".".concat(e.params.lazyPreloaderClass)
                      )),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        Le = (e, t) => {
          if (!e.slides[t]) return;
          const n = e.slides[t].querySelector('[loading="lazy"]');
          n && n.removeAttribute("loading");
        },
        ze = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const n = e.slides.length;
          if (!n || !t || t < 0) return;
          t = Math.min(t, n);
          const r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            a = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const n = a,
              l = [n - t];
            return (
              l.push(...Array.from({ length: t }).map((e, t) => n + r + t)),
              void e.slides.forEach((t, n) => {
                l.includes(t.column) && Le(e, n);
              })
            );
          }
          const l = a + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = a - t; i <= l + t; i += 1) {
              const t = ((i % n) + n) % n;
              (t < a || t > l) && Le(e, t);
            }
          else
            for (
              let i = Math.max(a - t, 0);
              i <= Math.min(l + t, n - 1);
              i += 1
            )
              i !== a && (i > l || i < a) && Le(e, i);
        };
      var Ne = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.el;
          (t =
            "undefined" !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : r.clientWidth),
            (n =
              "undefined" !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : r.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(ge(r, "padding-left") || 0, 10) -
                parseInt(ge(r, "padding-right") || 0, 10)),
              (n =
                n -
                parseInt(ge(r, "padding-top") || 0, 10) -
                parseInt(ge(r, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t, n) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0);
          }
          const n = e.params,
            {
              wrapperEl: r,
              slidesEl: a,
              size: l,
              rtlTranslate: i,
              wrongRTL: o,
            } = e,
            s = e.virtual && n.virtual.enabled,
            u = s ? e.virtual.slides.length : e.slides.length,
            c = pe(a, ".".concat(e.params.slideClass, ", swiper-slide")),
            d = s ? e.virtual.slides.length : c.length;
          let f = [];
          const p = [],
            h = [];
          let m = n.slidesOffsetBefore;
          "function" === typeof m && (m = n.slidesOffsetBefore.call(e));
          let g = n.slidesOffsetAfter;
          "function" === typeof g && (g = n.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = n.spaceBetween,
            w = -m,
            S = 0,
            x = 0;
          if ("undefined" === typeof l) return;
          "string" === typeof b && b.indexOf("%") >= 0
            ? (b = (parseFloat(b.replace("%", "")) / 100) * l)
            : "string" === typeof b && (b = parseFloat(b)),
            (e.virtualSize = -b),
            c.forEach((e) => {
              i ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            n.centeredSlides &&
              n.cssMode &&
              (de(r, "--swiper-centered-offset-before", ""),
              de(r, "--swiper-centered-offset-after", ""));
          const C = n.grid && n.grid.rows > 1 && e.grid;
          let k;
          C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const E =
            "auto" === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              (e) => "undefined" !== typeof n.breakpoints[e].slidesPerView
            ).length > 0;
          for (let T = 0; T < d; T += 1) {
            let r;
            if (
              ((k = 0),
              c[T] && (r = c[T]),
              C && e.grid.updateSlide(T, r, c),
              !c[T] || "none" !== ge(r, "display"))
            ) {
              if ("auto" === n.slidesPerView) {
                E && (c[T].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(r),
                  l = r.style.transform,
                  i = r.style.webkitTransform;
                if (
                  (l && (r.style.transform = "none"),
                  i && (r.style.webkitTransform = "none"),
                  n.roundLengths)
                )
                  k = e.isHorizontal()
                    ? be(r, "width", !0)
                    : be(r, "height", !0);
                else {
                  const e = t(a, "width"),
                    n = t(a, "padding-left"),
                    l = t(a, "padding-right"),
                    i = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    s = a.getPropertyValue("box-sizing");
                  if (s && "border-box" === s) k = e + i + o;
                  else {
                    const { clientWidth: t, offsetWidth: a } = r;
                    k = e + n + l + i + o + (a - t);
                  }
                }
                l && (r.style.transform = l),
                  i && (r.style.webkitTransform = i),
                  n.roundLengths && (k = Math.floor(k));
              } else
                (k = (l - (n.slidesPerView - 1) * b) / n.slidesPerView),
                  n.roundLengths && (k = Math.floor(k)),
                  c[T] &&
                    (c[T].style[e.getDirectionLabel("width")] = "".concat(
                      k,
                      "px"
                    ));
              c[T] && (c[T].swiperSlideSize = k),
                h.push(k),
                n.centeredSlides
                  ? ((w = w + k / 2 + S / 2 + b),
                    0 === S && 0 !== T && (w = w - l / 2 - b),
                    0 === T && (w = w - l / 2 - b),
                    Math.abs(w) < 0.001 && (w = 0),
                    n.roundLengths && (w = Math.floor(w)),
                    x % n.slidesPerGroup === 0 && f.push(w),
                    p.push(w))
                  : (n.roundLengths && (w = Math.floor(w)),
                    (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                      e.params.slidesPerGroup ===
                      0 && f.push(w),
                    p.push(w),
                    (w = w + k + b)),
                (e.virtualSize += k + b),
                (S = k),
                (x += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, l) + g),
            i &&
              o &&
              ("slide" === n.effect || "coverflow" === n.effect) &&
              (r.style.width = "".concat(e.virtualSize + b, "px")),
            n.setWrapperSize &&
              (r.style[e.getDirectionLabel("width")] = "".concat(
                e.virtualSize + b,
                "px"
              )),
            C && e.grid.updateWrapperSize(k, f),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < f.length; r += 1) {
              let a = f[r];
              n.roundLengths && (a = Math.floor(a)),
                f[r] <= e.virtualSize - l && t.push(a);
            }
            (f = t),
              Math.floor(e.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - l);
          }
          if (s && n.loop) {
            const t = h[0] + b;
            if (n.slidesPerGroup > 1) {
              const r = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    n.slidesPerGroup
                ),
                a = t * n.slidesPerGroup;
              for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + a);
            }
            for (
              let r = 0;
              r < e.virtual.slidesBefore + e.virtual.slidesAfter;
              r += 1
            )
              1 === n.slidesPerGroup && f.push(f[f.length - 1] + t),
                p.push(p[p.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === f.length && (f = [0]), 0 !== b)) {
            const t =
              e.isHorizontal() && i
                ? "marginLeft"
                : e.getDirectionLabel("marginRight");
            c.filter(
              (e, t) => !(n.cssMode && !n.loop) || t !== c.length - 1
            ).forEach((e) => {
              e.style[t] = "".concat(b, "px");
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (b || 0);
            }),
              (e -= b);
            const t = e - l;
            f = f.map((e) => (e <= 0 ? -m : e > t ? t + g : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (b || 0);
              }),
              (e -= b),
              e < l)
            ) {
              const t = (l - e) / 2;
              f.forEach((e, n) => {
                f[n] = e - t;
              }),
                p.forEach((e, n) => {
                  p[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: f,
              slidesGrid: p,
              slidesSizesGrid: h,
            }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            de(r, "--swiper-centered-offset-before", "".concat(-f[0], "px")),
              de(
                r,
                "--swiper-centered-offset-after",
                "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (d !== u && e.emit("slidesLengthChange"),
            f.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== y && e.emit("slidesGridLengthChange"),
            n.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit("slidesUpdated"),
            !s && !n.cssMode && ("slide" === n.effect || "fade" === n.effect))
          ) {
            const t = "".concat(n.containerModifierClass, "backface-hidden"),
              r = e.el.classList.contains(t);
            d <= n.maxBackfaceHiddenSlides
              ? r || e.el.classList.add(t)
              : r && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let a,
            l = 0;
          "number" === typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const i = (e) =>
            r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                n.push(e);
              });
            else
              for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length && !r) break;
                n.push(i(e));
              }
          else n.push(i(t.activeIndex));
          for (a = 0; a < n.length; a += 1)
            if ("undefined" !== typeof n[a]) {
              const e = n[a].offsetHeight;
              l = e > l ? e : l;
            }
          (l || 0 === l) && (t.wrapperEl.style.height = "".concat(l, "px"));
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            n = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset =
              (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
              n -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: a, snapGrid: l } = t;
          if (0 === r.length) return;
          "undefined" === typeof r[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let i = -e;
          a && (i = e),
            r.forEach((e) => {
              e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          let o = n.spaceBetween;
          "string" === typeof o && o.indexOf("%") >= 0
            ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
            : "string" === typeof o && (o = parseFloat(o));
          for (let s = 0; s < r.length; s += 1) {
            const e = r[s];
            let u = e.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
            const c =
                (i + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                (e.swiperSlideSize + o),
              d =
                (i - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                (e.swiperSlideSize + o),
              f = -(i - u),
              p = f + t.slidesSizesGrid[s],
              h = f >= 0 && f <= t.size - t.slidesSizesGrid[s];
            ((f >= 0 && f < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (f <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(e),
              t.visibleSlidesIndexes.push(s),
              r[s].classList.add(n.slideVisibleClass)),
              h && r[s].classList.add(n.slideFullyVisibleClass),
              (e.progress = a ? -c : c),
              (e.originalProgress = a ? -d : d);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: a, isBeginning: l, isEnd: i, progressLoop: o } = t;
          const s = l,
            u = i;
          if (0 === r) (a = 0), (l = !0), (i = !0);
          else {
            a = (e - t.minTranslate()) / r;
            const n = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            (l = n || a <= 0), (i = o || a >= 1), n && (a = 0), o && (a = 1);
          }
          if (n.loop) {
            const n = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              a = t.slidesGrid[n],
              l = t.slidesGrid[r],
              i = t.slidesGrid[t.slidesGrid.length - 1],
              s = Math.abs(e);
            (o = s >= a ? (s - a) / i : (s + i - l) / i), o > 1 && (o -= 1);
          }
          Object.assign(t, {
            progress: a,
            progressLoop: o,
            isBeginning: l,
            isEnd: i,
          }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            l && !s && t.emit("reachBeginning toEdge"),
            i && !u && t.emit("reachEnd toEdge"),
            ((s && !l) || (u && !i)) && t.emit("fromEdge"),
            t.emit("progress", a);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: n, slidesEl: r, activeIndex: a } = e,
            l = e.virtual && n.virtual.enabled,
            i = e.grid && n.grid && n.grid.rows > 1,
            o = (e) =>
              pe(
                r,
                ".".concat(n.slideClass).concat(e, ", swiper-slide").concat(e)
              )[0];
          let s, u, c;
          if (l)
            if (n.loop) {
              let t = a - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (s = o('[data-swiper-slide-index="'.concat(t, '"]')));
            } else s = o('[data-swiper-slide-index="'.concat(a, '"]'));
          else
            i
              ? ((s = t.filter((e) => e.column === a)[0]),
                (c = t.filter((e) => e.column === a + 1)[0]),
                (u = t.filter((e) => e.column === a - 1)[0]))
              : (s = t[a]);
          s &&
            (i ||
              ((c = (function (e, t) {
                const n = [];
                for (; e.nextElementSibling; ) {
                  const r = e.nextElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(s, ".".concat(n.slideClass, ", swiper-slide"))[0]),
              n.loop && !c && (c = t[0]),
              (u = (function (e, t) {
                const n = [];
                for (; e.previousElementSibling; ) {
                  const r = e.previousElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(s, ".".concat(n.slideClass, ", swiper-slide"))[0]),
              n.loop && 0 === !u && (u = t[t.length - 1]))),
            t.forEach((e) => {
              Pe(e, e === s, n.slideActiveClass),
                Pe(e, e === c, n.slideNextClass),
                Pe(e, e === u, n.slidePrevClass);
            }),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: a,
              activeIndex: l,
              realIndex: i,
              snapIndex: o,
            } = t;
          let s,
            u = e;
          const c = (e) => {
            let n = e - t.virtual.slidesBefore;
            return (
              n < 0 && (n = t.virtual.slides.length + n),
              n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
              n
            );
          };
          if (
            ("undefined" === typeof u &&
              (u = (function (e) {
                const { slidesGrid: t, params: n } = e,
                  r = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let l = 0; l < t.length; l += 1)
                  "undefined" !== typeof t[l + 1]
                    ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
                      ? (a = l)
                      : r >= t[l] && r < t[l + 1] && (a = l + 1)
                    : r >= t[l] && (a = l);
                return (
                  n.normalizeSlideIndex &&
                    (a < 0 || "undefined" === typeof a) &&
                    (a = 0),
                  a
                );
              })(t)),
            r.indexOf(n) >= 0)
          )
            s = r.indexOf(n);
          else {
            const e = Math.min(a.slidesPerGroupSkip, u);
            s = e + Math.floor((u - e) / a.slidesPerGroup);
          }
          if ((s >= r.length && (s = r.length - 1), u === l && !t.params.loop))
            return void (
              s !== o && ((t.snapIndex = s), t.emit("snapIndexChange"))
            );
          if (u === l && t.params.loop && t.virtual && t.params.virtual.enabled)
            return void (t.realIndex = c(u));
          const d = t.grid && a.grid && a.grid.rows > 1;
          let f;
          if (t.virtual && a.virtual.enabled && a.loop) f = c(u);
          else if (d) {
            const e = t.slides.filter((e) => e.column === u)[0];
            let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)),
              (f = Math.floor(n / a.grid.rows));
          } else if (t.slides[u]) {
            const e = t.slides[u].getAttribute("data-swiper-slide-index");
            f = e ? parseInt(e, 10) : u;
          } else f = u;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: s,
            previousRealIndex: i,
            realIndex: f,
            previousIndex: l,
            activeIndex: u,
          }),
            t.initialized && ze(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              (i !== f && t.emit("realIndexChange"), t.emit("slideChange"));
        },
        updateClickedSlide: function (e, t) {
          const n = this,
            r = n.params;
          let a = e.closest(".".concat(r.slideClass, ", swiper-slide"));
          !a &&
            n.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
              !a &&
                e.matches &&
                e.matches(".".concat(r.slideClass, ", swiper-slide")) &&
                (a = e);
            });
          let l,
            i = !1;
          if (a)
            for (let o = 0; o < n.slides.length; o += 1)
              if (n.slides[o] === a) {
                (i = !0), (l = o);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  a.getAttribute("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = l),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var Oe = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: r,
            wrapperEl: a,
          } = this;
          if (t.virtualTranslate) return n ? -r : r;
          if (t.cssMode) return r;
          let l = se(a, e);
          return (l += this.cssOverflowAdjustment()), n && (l = -l), l || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            { rtlTranslate: r, params: a, wrapperEl: l, progress: i } = n;
          let o,
            s = 0,
            u = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (u = e),
            a.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : u),
            a.cssMode
              ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -s : -u)
              : a.virtualTranslate ||
                (n.isHorizontal()
                  ? (s -= n.cssOverflowAdjustment())
                  : (u -= n.cssOverflowAdjustment()),
                (l.style.transform = "translate3d("
                  .concat(s, "px, ")
                  .concat(u, "px, ")
                  .concat(0, "px)")));
          const c = n.maxTranslate() - n.minTranslate();
          (o = 0 === c ? 0 : (e - n.minTranslate()) / c),
            o !== i && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          const l = this,
            { params: i, wrapperEl: o } = l;
          if (l.animating && i.preventInteractionOnTransition) return !1;
          const s = l.minTranslate(),
            u = l.maxTranslate();
          let c;
          if (
            ((c = r && e > s ? s : r && e < u ? u : e),
            l.updateProgress(c),
            i.cssMode)
          ) {
            const e = l.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!l.support.smoothScroll)
                return (
                  fe({
                    swiper: l,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (l.setTransition(0),
                l.setTranslate(c),
                n &&
                  (l.emit("beforeTransitionStart", t, a),
                  l.emit("transitionEnd")))
              : (l.setTransition(t),
                l.setTranslate(c),
                n &&
                  (l.emit("beforeTransitionStart", t, a),
                  l.emit("transitionStart")),
                l.animating ||
                  ((l.animating = !0),
                  l.onTranslateToWrapperTransitionEnd ||
                    (l.onTranslateToWrapperTransitionEnd = function (e) {
                      l &&
                        !l.destroyed &&
                        e.target === this &&
                        (l.wrapperEl.removeEventListener(
                          "transitionend",
                          l.onTranslateToWrapperTransitionEnd
                        ),
                        (l.onTranslateToWrapperTransitionEnd = null),
                        delete l.onTranslateToWrapperTransitionEnd,
                        (l.animating = !1),
                        n && l.emit("transitionEnd"));
                    }),
                  l.wrapperEl.addEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Ie(e) {
        let { swiper: t, runCallbacks: n, direction: r, step: a } = e;
        const { activeIndex: l, previousIndex: i } = t;
        let o = r;
        if (
          (o || (o = l > i ? "next" : l < i ? "prev" : "reset"),
          t.emit("transition".concat(a)),
          n && l !== i)
        ) {
          if ("reset" === o)
            return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === o
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var je = {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode ||
            ((n.wrapperEl.style.transitionDuration = "".concat(e, "ms")),
            (n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          r.cssMode ||
            (r.autoHeight && n.updateAutoHeight(),
            Ie({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          (n.animating = !1),
            r.cssMode ||
              (n.setTransition(0),
              Ie({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      };
      var De = {
        slideTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === n && (n = !0),
            "string" === typeof e && (e = parseInt(e, 10));
          const l = this;
          let i = e;
          i < 0 && (i = 0);
          const {
            params: o,
            snapGrid: s,
            slidesGrid: u,
            previousIndex: c,
            activeIndex: d,
            rtlTranslate: f,
            wrapperEl: p,
            enabled: h,
          } = l;
          if (
            (!h && !r && !a) ||
            l.destroyed ||
            (l.animating && o.preventInteractionOnTransition)
          )
            return !1;
          "undefined" === typeof t && (t = l.params.speed);
          const m = Math.min(l.params.slidesPerGroupSkip, i);
          let g = m + Math.floor((i - m) / l.params.slidesPerGroup);
          g >= s.length && (g = s.length - 1);
          const v = -s[g];
          if (o.normalizeSlideIndex)
            for (let b = 0; b < u.length; b += 1) {
              const e = -Math.floor(100 * v),
                t = Math.floor(100 * u[b]),
                n = Math.floor(100 * u[b + 1]);
              "undefined" !== typeof u[b + 1]
                ? e >= t && e < n - (n - t) / 2
                  ? (i = b)
                  : e >= t && e < n && (i = b + 1)
                : e >= t && (i = b);
            }
          if (l.initialized && i !== d) {
            if (
              !l.allowSlideNext &&
              (f
                ? v > l.translate && v > l.minTranslate()
                : v < l.translate && v < l.minTranslate())
            )
              return !1;
            if (
              !l.allowSlidePrev &&
              v > l.translate &&
              v > l.maxTranslate() &&
              (d || 0) !== i
            )
              return !1;
          }
          let y;
          if (
            (i !== (c || 0) && n && l.emit("beforeSlideChangeStart"),
            l.updateProgress(v),
            (y = i > d ? "next" : i < d ? "prev" : "reset"),
            (f && -v === l.translate) || (!f && v === l.translate))
          )
            return (
              l.updateActiveIndex(i),
              o.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== o.effect && l.setTranslate(v),
              "reset" !== y && (l.transitionStart(n, y), l.transitionEnd(n, y)),
              !1
            );
          if (o.cssMode) {
            const e = l.isHorizontal(),
              n = f ? v : -v;
            if (0 === t) {
              const t = l.virtual && l.params.virtual.enabled;
              t &&
                ((l.wrapperEl.style.scrollSnapType = "none"),
                (l._immediateVirtual = !0)),
                t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
                  ? ((l._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      p[e ? "scrollLeft" : "scrollTop"] = n;
                    }))
                  : (p[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (l.wrapperEl.style.scrollSnapType = ""),
                      (l._immediateVirtual = !1);
                  });
            } else {
              if (!l.support.smoothScroll)
                return (
                  fe({
                    swiper: l,
                    targetPosition: n,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            l.setTransition(t),
            l.setTranslate(v),
            l.updateActiveIndex(i),
            l.updateSlidesClasses(),
            l.emit("beforeTransitionStart", t, r),
            l.transitionStart(n, y),
            0 === t
              ? l.transitionEnd(n, y)
              : l.animating ||
                ((l.animating = !0),
                l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.wrapperEl.removeEventListener(
                        "transitionend",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      (l.onSlideToWrapperTransitionEnd = null),
                      delete l.onSlideToWrapperTransitionEnd,
                      l.transitionEnd(n, y));
                  }),
                l.wrapperEl.addEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = !0),
            "string" === typeof e)
          ) {
            e = parseInt(e, 10);
          }
          const a = this;
          if (a.destroyed) return;
          "undefined" === typeof t && (t = a.params.speed);
          const l = a.grid && a.params.grid && a.params.grid.rows > 1;
          let i = e;
          if (a.params.loop)
            if (a.virtual && a.params.virtual.enabled)
              i += a.virtual.slidesBefore;
            else {
              let e;
              if (l) {
                const t = i * a.params.grid.rows;
                e = a.slides.filter(
                  (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                )[0].column;
              } else e = a.getSlideIndexByData(i);
              const t = l
                  ? Math.ceil(a.slides.length / a.params.grid.rows)
                  : a.slides.length,
                { centeredSlides: n } = a.params;
              let o = a.params.slidesPerView;
              "auto" === o
                ? (o = a.slidesPerViewDynamic())
                : ((o = Math.ceil(parseFloat(a.params.slidesPerView, 10))),
                  n && o % 2 === 0 && (o += 1));
              let s = t - e < o;
              if (
                (n && (s = s || e < Math.ceil(o / 2)),
                r && n && "auto" !== a.params.slidesPerView && !l && (s = !1),
                s)
              ) {
                const r = n
                  ? e < a.activeIndex
                    ? "prev"
                    : "next"
                  : e - a.activeIndex - 1 < a.params.slidesPerView
                  ? "next"
                  : "prev";
                a.loopFix({
                  direction: r,
                  slideTo: !0,
                  activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                  slideRealIndex: "next" === r ? a.realIndex : void 0,
                });
              }
              if (l) {
                const e = i * a.params.grid.rows;
                i = a.slides.filter(
                  (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                )[0].column;
              } else i = a.getSlideIndexByData(i);
            }
          return (
            requestAnimationFrame(() => {
              a.slideTo(i, t, n, r);
            }),
            a
          );
        },
        slideNext: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this,
            { enabled: a, params: l, animating: i } = r;
          if (!a || r.destroyed) return r;
          "undefined" === typeof e && (e = r.params.speed);
          let o = l.slidesPerGroup;
          "auto" === l.slidesPerView &&
            1 === l.slidesPerGroup &&
            l.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o,
            u = r.virtual && l.virtual.enabled;
          if (l.loop) {
            if (i && !u && l.loopPreventsSliding) return !1;
            if (
              (r.loopFix({ direction: "next" }),
              (r._clientLeft = r.wrapperEl.clientLeft),
              r.activeIndex === r.slides.length - 1 && l.cssMode)
            )
              return (
                requestAnimationFrame(() => {
                  r.slideTo(r.activeIndex + s, e, t, n);
                }),
                !0
              );
          }
          return l.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this,
            {
              params: a,
              snapGrid: l,
              slidesGrid: i,
              rtlTranslate: o,
              enabled: s,
              animating: u,
            } = r;
          if (!s || r.destroyed) return r;
          "undefined" === typeof e && (e = r.params.speed);
          const c = r.virtual && a.virtual.enabled;
          if (a.loop) {
            if (u && !c && a.loopPreventsSliding) return !1;
            r.loopFix({ direction: "prev" }),
              (r._clientLeft = r.wrapperEl.clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const f = d(o ? r.translate : -r.translate),
            p = l.map((e) => d(e));
          let h = l[p.indexOf(f) - 1];
          if ("undefined" === typeof h && a.cssMode) {
            let e;
            l.forEach((t, n) => {
              f >= t && (e = n);
            }),
              "undefined" !== typeof e && (h = l[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          if (
            ("undefined" !== typeof h &&
              ((m = i.indexOf(h)),
              m < 0 && (m = r.activeIndex - 1),
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            a.rewind && r.isBeginning)
          ) {
            const a =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(a, e, t, n);
          }
          return a.loop && 0 === r.activeIndex && a.cssMode
            ? (requestAnimationFrame(() => {
                r.slideTo(m, e, t, n);
              }),
              !0)
            : r.slideTo(m, e, t, n);
        },
        slideReset: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this;
          if (!r.destroyed)
            return (
              "undefined" === typeof e && (e = r.params.speed),
              r.slideTo(r.activeIndex, e, t, n)
            );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === t && (t = !0), void 0 === r && (r = 0.5);
          const a = this;
          if (a.destroyed) return;
          "undefined" === typeof e && (e = a.params.speed);
          let l = a.activeIndex;
          const i = Math.min(a.params.slidesPerGroupSkip, l),
            o = i + Math.floor((l - i) / a.params.slidesPerGroup),
            s = a.rtlTranslate ? a.translate : -a.translate;
          if (s >= a.snapGrid[o]) {
            const e = a.snapGrid[o];
            s - e > (a.snapGrid[o + 1] - e) * r &&
              (l += a.params.slidesPerGroup);
          } else {
            const e = a.snapGrid[o - 1];
            s - e <= (a.snapGrid[o] - e) * r && (l -= a.params.slidesPerGroup);
          }
          return (
            (l = Math.max(l, 0)),
            (l = Math.min(l, a.slidesGrid.length - 1)),
            a.slideTo(l, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this;
          if (e.destroyed) return;
          const { params: t, slidesEl: n } = e,
            r =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let a,
            l = e.clickedIndex;
          const i = e.isElement ? "swiper-slide" : ".".concat(t.slideClass);
          if (t.loop) {
            if (e.animating) return;
            (a = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? l < e.loopedSlides - r / 2 ||
                  l > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (l = e.getSlideIndex(
                      pe(
                        n,
                        ""
                          .concat(i, '[data-swiper-slide-index="')
                          .concat(a, '"]')
                      )[0]
                    )),
                    ie(() => {
                      e.slideTo(l);
                    }))
                  : e.slideTo(l)
                : l > e.slides.length - r
                ? (e.loopFix(),
                  (l = e.getSlideIndex(
                    pe(
                      n,
                      "".concat(i, '[data-swiper-slide-index="').concat(a, '"]')
                    )[0]
                  )),
                  ie(() => {
                    e.slideTo(l);
                  }))
                : e.slideTo(l);
          } else e.slideTo(l);
        },
      };
      var Re = {
        loopCreate: function (e) {
          const t = this,
            { params: n, slidesEl: r } = t;
          if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
          const a = () => {
              pe(r, ".".concat(n.slideClass, ", swiper-slide")).forEach(
                (e, t) => {
                  e.setAttribute("data-swiper-slide-index", t);
                }
              );
            },
            l = t.grid && n.grid && n.grid.rows > 1,
            i = n.slidesPerGroup * (l ? n.grid.rows : 1),
            o = t.slides.length % i !== 0,
            s = l && t.slides.length % n.grid.rows !== 0,
            u = (e) => {
              for (let r = 0; r < e; r += 1) {
                const e = t.isElement
                  ? me("swiper-slide", [n.slideBlankClass])
                  : me("div", [n.slideClass, n.slideBlankClass]);
                t.slidesEl.append(e);
              }
            };
          if (o) {
            if (n.loopAddBlankSlides) {
              u(i - (t.slides.length % i)), t.recalcSlides(), t.updateSlides();
            } else
              he(
                "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            a();
          } else if (s) {
            if (n.loopAddBlankSlides) {
              u(n.grid.rows - (t.slides.length % n.grid.rows)),
                t.recalcSlides(),
                t.updateSlides();
            } else
              he(
                "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
              );
            a();
          } else a();
          t.loopFix({
            slideRealIndex: e,
            direction: n.centeredSlides ? void 0 : "next",
          });
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: n = !0,
            direction: r,
            setTranslate: a,
            activeSlideIndex: l,
            byController: i,
            byMousewheel: o,
          } = void 0 === e ? {} : e;
          const s = this;
          if (!s.params.loop) return;
          s.emit("beforeLoopFix");
          const {
              slides: u,
              allowSlidePrev: c,
              allowSlideNext: d,
              slidesEl: f,
              params: p,
            } = s,
            { centeredSlides: h } = p;
          if (
            ((s.allowSlidePrev = !0),
            (s.allowSlideNext = !0),
            s.virtual && p.virtual.enabled)
          )
            return (
              n &&
                (p.centeredSlides || 0 !== s.snapIndex
                  ? p.centeredSlides && s.snapIndex < p.slidesPerView
                    ? s.slideTo(
                        s.virtual.slides.length + s.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : s.snapIndex === s.snapGrid.length - 1 &&
                      s.slideTo(s.virtual.slidesBefore, 0, !1, !0)
                  : s.slideTo(s.virtual.slides.length, 0, !1, !0)),
              (s.allowSlidePrev = c),
              (s.allowSlideNext = d),
              void s.emit("loopFix")
            );
          let m = p.slidesPerView;
          "auto" === m
            ? (m = s.slidesPerViewDynamic())
            : ((m = Math.ceil(parseFloat(p.slidesPerView, 10))),
              h && m % 2 === 0 && (m += 1));
          const g = p.slidesPerGroupAuto ? m : p.slidesPerGroup;
          let v = g;
          v % g !== 0 && (v += g - (v % g)),
            (v += p.loopAdditionalSlides),
            (s.loopedSlides = v);
          const y = s.grid && p.grid && p.grid.rows > 1;
          u.length < m + v
            ? he(
                "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
              )
            : y &&
              "row" === p.grid.fill &&
              he(
                "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
              );
          const b = [],
            w = [];
          let S = s.activeIndex;
          "undefined" === typeof l
            ? (l = s.getSlideIndex(
                u.filter((e) => e.classList.contains(p.slideActiveClass))[0]
              ))
            : (S = l);
          const x = "next" === r || !r,
            C = "prev" === r || !r;
          let k = 0,
            E = 0;
          const T = y ? Math.ceil(u.length / p.grid.rows) : u.length,
            _ =
              (y ? u[l].column : l) +
              (h && "undefined" === typeof a ? -m / 2 + 0.5 : 0);
          if (_ < v) {
            k = Math.max(v - _, g);
            for (let e = 0; e < v - _; e += 1) {
              const t = e - Math.floor(e / T) * T;
              if (y) {
                const e = T - t - 1;
                for (let t = u.length - 1; t >= 0; t -= 1)
                  u[t].column === e && b.push(t);
              } else b.push(T - t - 1);
            }
          } else if (_ + m > T - v) {
            E = Math.max(_ - (T - 2 * v), g);
            for (let e = 0; e < E; e += 1) {
              const t = e - Math.floor(e / T) * T;
              y
                ? u.forEach((e, n) => {
                    e.column === t && w.push(n);
                  })
                : w.push(t);
            }
          }
          if (
            ((s.__preventObserver__ = !0),
            requestAnimationFrame(() => {
              s.__preventObserver__ = !1;
            }),
            C &&
              b.forEach((e) => {
                (u[e].swiperLoopMoveDOM = !0),
                  f.prepend(u[e]),
                  (u[e].swiperLoopMoveDOM = !1);
              }),
            x &&
              w.forEach((e) => {
                (u[e].swiperLoopMoveDOM = !0),
                  f.append(u[e]),
                  (u[e].swiperLoopMoveDOM = !1);
              }),
            s.recalcSlides(),
            "auto" === p.slidesPerView
              ? s.updateSlides()
              : y &&
                ((b.length > 0 && C) || (w.length > 0 && x)) &&
                s.slides.forEach((e, t) => {
                  s.grid.updateSlide(t, e, s.slides);
                }),
            p.watchSlidesProgress && s.updateSlidesOffset(),
            n)
          )
            if (b.length > 0 && C) {
              if ("undefined" === typeof t) {
                const e = s.slidesGrid[S],
                  t = s.slidesGrid[S + k] - e;
                o
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(S + Math.ceil(k), 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate =
                        s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else if (a) {
                const e = y ? b.length / p.grid.rows : b.length;
                s.slideTo(s.activeIndex + e, 0, !1, !0),
                  (s.touchEventsData.currentTranslate = s.translate);
              }
            } else if (w.length > 0 && x)
              if ("undefined" === typeof t) {
                const e = s.slidesGrid[S],
                  t = s.slidesGrid[S - E] - e;
                o
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(S - E, 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate =
                        s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else {
                const e = y ? w.length / p.grid.rows : w.length;
                s.slideTo(s.activeIndex - e, 0, !1, !0);
              }
          if (
            ((s.allowSlidePrev = c),
            (s.allowSlideNext = d),
            s.controller && s.controller.control && !i)
          ) {
            const e = {
              slideRealIndex: t,
              direction: r,
              setTranslate: a,
              activeSlideIndex: l,
              byController: !0,
            };
            Array.isArray(s.controller.control)
              ? s.controller.control.forEach((t) => {
                  !t.destroyed &&
                    t.params.loop &&
                    t.loopFix({
                      ...e,
                      slideTo: t.params.slidesPerView === p.slidesPerView && n,
                    });
                })
              : s.controller.control instanceof s.constructor &&
                s.controller.control.params.loop &&
                s.controller.control.loopFix({
                  ...e,
                  slideTo:
                    s.controller.control.params.slidesPerView ===
                      p.slidesPerView && n,
                });
          }
          s.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: n } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const r = [];
          e.slides.forEach((e) => {
            const t =
              "undefined" === typeof e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            r[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            r.forEach((e) => {
              n.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      var Fe = {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const n =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (n.style.cursor = "move"),
            (n.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      };
      function Ae(e, t, n) {
        const r = le(),
          { params: a } = e,
          l = a.edgeSwipeDetection,
          i = a.edgeSwipeThreshold;
        return (
          !l ||
          !(n <= i || n >= r.innerWidth - i) ||
          ("prevent" === l && (t.preventDefault(), !0))
        );
      }
      function Be(e) {
        const t = this,
          n = re();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === r.type) {
          if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
          a.pointerId = r.pointerId;
        } else
          "touchstart" === r.type &&
            1 === r.targetTouches.length &&
            (a.touchId = r.targetTouches[0].identifier);
        if ("touchstart" === r.type)
          return void Ae(t, r, r.targetTouches[0].pageX);
        const { params: l, touches: i, enabled: o } = t;
        if (!o) return;
        if (!l.simulateTouch && "mouse" === r.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let s = r.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(s))
          return;
        if ("which" in r && 3 === r.which) return;
        if ("button" in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
          c = r.composedPath ? r.composedPath() : r.path;
        u && r.target && r.target.shadowRoot && c && (s = c[0]);
        const d = l.noSwipingSelector
            ? l.noSwipingSelector
            : ".".concat(l.noSwipingClass),
          f = !(!r.target || !r.target.shadowRoot);
        if (
          l.noSwiping &&
          (f
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === re() || n === le()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode
                      ? r || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(d, s)
            : s.closest(d))
        )
          return void (t.allowClick = !0);
        if (l.swipeHandler && !s.closest(l.swipeHandler)) return;
        (i.currentX = r.pageX), (i.currentY = r.pageY);
        const p = i.currentX,
          h = i.currentY;
        if (!Ae(t, r, p)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (i.startX = p),
          (i.startY = h),
          (a.touchStartTime = oe()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          l.threshold > 0 && (a.allowThresholdMove = !1);
        let m = !0;
        s.matches(a.focusableElements) &&
          ((m = !1), "SELECT" === s.nodeName && (a.isTouched = !1)),
          n.activeElement &&
            n.activeElement.matches(a.focusableElements) &&
            n.activeElement !== s &&
            n.activeElement.blur();
        const g = m && t.allowTouchMove && l.touchStartPreventDefault;
        (!l.touchStartForcePreventDefault && !g) ||
          s.isContentEditable ||
          r.preventDefault(),
          l.freeMode &&
            l.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !l.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", r);
      }
      function Ve(e) {
        const t = re(),
          n = this,
          r = n.touchEventsData,
          { params: a, touches: l, rtlTranslate: i, enabled: o } = n;
        if (!o) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let s,
          u = e;
        if (
          (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type)
        ) {
          if (null !== r.touchId) return;
          if (u.pointerId !== r.pointerId) return;
        }
        if ("touchmove" === u.type) {
          if (
            ((s = [...u.changedTouches].filter(
              (e) => e.identifier === r.touchId
            )[0]),
            !s || s.identifier !== r.touchId)
          )
            return;
        } else s = u;
        if (!r.isTouched)
          return void (
            r.startMoving &&
            r.isScrolling &&
            n.emit("touchMoveOpposite", u)
          );
        const c = s.pageX,
          d = s.pageY;
        if (u.preventedByNestedSwiper)
          return (l.startX = c), void (l.startY = d);
        if (!n.allowTouchMove)
          return (
            u.target.matches(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(l, {
                startX: c,
                startY: d,
                currentX: c,
                currentY: d,
              }),
              (r.touchStartTime = oe()))
            )
          );
        if (a.touchReleaseOnEdges && !a.loop)
          if (n.isVertical()) {
            if (
              (d < l.startY && n.translate <= n.maxTranslate()) ||
              (d > l.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (c < l.startX && n.translate <= n.maxTranslate()) ||
            (c > l.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          u.target === t.activeElement &&
          u.target.matches(r.focusableElements)
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        r.allowTouchCallbacks && n.emit("touchMove", u),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = c),
          (l.currentY = d);
        const f = l.currentX - l.startX,
          p = l.currentY - l.startY;
        if (
          n.params.threshold &&
          Math.sqrt(f ** 2 + p ** 2) < n.params.threshold
        )
          return;
        if ("undefined" === typeof r.isScrolling) {
          let e;
          (n.isHorizontal() && l.currentY === l.startY) ||
          (n.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : f * f + p * p >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(p), Math.abs(f))) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                ? e > a.touchAngle
                : 90 - e > a.touchAngle));
        }
        if (
          (r.isScrolling && n.emit("touchMoveOpposite", u),
          "undefined" === typeof r.startMoving &&
            ((l.currentX === l.startX && l.currentY === l.startY) ||
              (r.startMoving = !0)),
          r.isScrolling ||
            ("touchmove" === u.type && r.preventTouchMoveFromPointerMove))
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !a.cssMode && u.cancelable && u.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let h = n.isHorizontal() ? f : p,
          m = n.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        a.oneWayMovement &&
          ((h = Math.abs(h) * (i ? 1 : -1)), (m = Math.abs(m) * (i ? 1 : -1))),
          (l.diff = h),
          (h *= a.touchRatio),
          i && ((h = -h), (m = -m));
        const g = n.touchesDirection;
        (n.swipeDirection = h > 0 ? "prev" : "next"),
          (n.touchesDirection = m > 0 ? "prev" : "next");
        const v = n.params.loop && !a.cssMode,
          y =
            ("next" === n.touchesDirection && n.allowSlideNext) ||
            ("prev" === n.touchesDirection && n.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (v && y && n.loopFix({ direction: n.swipeDirection }),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            n.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            !a.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", u);
        }
        if (
          (new Date().getTime(),
          r.isMoved &&
            r.allowThresholdMove &&
            g !== n.touchesDirection &&
            v &&
            y &&
            Math.abs(h) >= 1)
        )
          return (
            Object.assign(l, {
              startX: c,
              startY: d,
              currentX: c,
              currentY: d,
              startTranslate: r.currentTranslate,
            }),
            (r.loopSwapReset = !0),
            void (r.startTranslate = r.currentTranslate)
          );
        n.emit("sliderMove", u),
          (r.isMoved = !0),
          (r.currentTranslate = h + r.startTranslate);
        let b = !0,
          w = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (w = 0),
          h > 0
            ? (v &&
                y &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (a.centeredSlides
                    ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
                    : n.minTranslate()) &&
                n.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > n.minTranslate() &&
                ((b = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.minTranslate() -
                    1 +
                    (-n.minTranslate() + r.startTranslate + h) ** w)))
            : h < 0 &&
              (v &&
                y &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (a.centeredSlides
                    ? n.maxTranslate() +
                      n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
                    : n.maxTranslate()) &&
                n.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    n.slides.length -
                    ("auto" === a.slidesPerView
                      ? n.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              r.currentTranslate < n.maxTranslate() &&
                ((b = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.maxTranslate() +
                    1 -
                    (n.maxTranslate() - r.startTranslate - h) ** w))),
          b && (u.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          a.threshold > 0)
        ) {
          if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (l.startX = l.currentX),
              (l.startY = l.currentY),
              (r.currentTranslate = r.startTranslate),
              void (l.diff = n.isHorizontal()
                ? l.currentX - l.startX
                : l.currentY - l.startY)
            );
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
            a.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          a.freeMode &&
            a.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function He(e) {
        const t = this,
          n = t.touchEventsData;
        let r,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        if ("touchend" === a.type || "touchcancel" === a.type) {
          if (
            ((r = [...a.changedTouches].filter(
              (e) => e.identifier === n.touchId
            )[0]),
            !r || r.identifier !== n.touchId)
          )
            return;
        } else {
          if (null !== n.touchId) return;
          if (a.pointerId !== n.pointerId) return;
          r = a;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(a.type)
        ) {
          if (
            !(
              ["pointercancel", "contextmenu"].includes(a.type) &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        (n.pointerId = null), (n.touchId = null);
        const {
          params: l,
          touches: i,
          rtlTranslate: o,
          slidesGrid: s,
          enabled: u,
        } = t;
        if (!u) return;
        if (!l.simulateTouch && "mouse" === a.pointerType) return;
        if (
          (n.allowTouchCallbacks && t.emit("touchEnd", a),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && l.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        l.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = oe(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = a.path || (a.composedPath && a.composedPath());
          t.updateClickedSlide((e && e[0]) || a.target, e),
            t.emit("tap click", a),
            d < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", a);
        }
        if (
          ((n.lastClickTime = oe()),
          ie(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            (0 === i.diff && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let f;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (f = l.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: f });
        const p = f >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          m = t.slidesSizesGrid[0];
        for (
          let w = 0;
          w < s.length;
          w += w < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
        ) {
          const e = w < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          "undefined" !== typeof s[w + e]
            ? (p || (f >= s[w] && f < s[w + e])) &&
              ((h = w), (m = s[w + e] - s[w]))
            : (p || f >= s[w]) &&
              ((h = w), (m = s[s.length - 1] - s[s.length - 2]));
        }
        let g = null,
          v = null;
        l.rewind &&
          (t.isBeginning
            ? (v =
                l.virtual && l.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (g = 0));
        const y = (f - s[h]) / m,
          b = h < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (d > l.longSwipesMs) {
          if (!l.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (y >= l.longSwipesRatio
              ? t.slideTo(l.rewind && t.isEnd ? g : h + b)
              : t.slideTo(h)),
            "prev" === t.swipeDirection &&
              (y > 1 - l.longSwipesRatio
                ? t.slideTo(h + b)
                : null !== v && y < 0 && Math.abs(y) > l.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(h));
        } else {
          if (!l.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
            ? a.target === t.navigation.nextEl
              ? t.slideTo(h + b)
              : t.slideTo(h)
            : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + b),
              "prev" === t.swipeDirection && t.slideTo(null !== v ? v : h));
        }
      }
      function Ge() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: a, snapGrid: l } = e,
          i = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const o = i && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !i
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = r),
          e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
      }
      function Ue(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function We() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let a;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const l = e.maxTranslate() - e.minTranslate();
        (a = 0 === l ? 0 : (e.translate - e.minTranslate()) / l),
          a !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      function $e(e) {
        const t = this;
        Me(t, e.target),
          t.params.cssMode ||
            ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      function qe() {
        const e = this;
        e.documentTouchHandlerProceeded ||
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
      }
      const Qe = (e, t) => {
        const n = re(),
          { params: r, el: a, wrapperEl: l, device: i } = e,
          o = !!r.nested,
          s = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        n[s]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
          a[s]("touchstart", e.onTouchStart, { passive: !1 }),
          a[s]("pointerdown", e.onTouchStart, { passive: !1 }),
          n[s]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
          n[s]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
          n[s]("touchend", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerup", e.onTouchEnd, { passive: !0 }),
          n[s]("pointercancel", e.onTouchEnd, { passive: !0 }),
          n[s]("touchcancel", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerout", e.onTouchEnd, { passive: !0 }),
          n[s]("pointerleave", e.onTouchEnd, { passive: !0 }),
          n[s]("contextmenu", e.onTouchEnd, { passive: !0 }),
          (r.preventClicks || r.preventClicksPropagation) &&
            a[s]("click", e.onClick, !0),
          r.cssMode && l[s]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[u](
                i.ios || i.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Ge,
                !0
              )
            : e[u]("observerUpdate", Ge, !0),
          a[s]("load", e.onLoad, { capture: !0 });
      };
      var Ye = {
        attachEvents: function () {
          const e = this,
            { params: t } = e;
          (e.onTouchStart = Be.bind(e)),
            (e.onTouchMove = Ve.bind(e)),
            (e.onTouchEnd = He.bind(e)),
            (e.onDocumentTouchStart = qe.bind(e)),
            t.cssMode && (e.onScroll = We.bind(e)),
            (e.onClick = Ue.bind(e)),
            (e.onLoad = $e.bind(e)),
            Qe(e, "on");
        },
        detachEvents: function () {
          Qe(this, "off");
        },
      };
      const Xe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var Ke = {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: n, params: r, el: a } = e,
            l = r.breakpoints;
          if (!l || (l && 0 === Object.keys(l).length)) return;
          const i = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
          if (!i || e.currentBreakpoint === i) return;
          const o = (i in l ? l[i] : void 0) || e.originalParams,
            s = Xe(e, r),
            u = Xe(e, o),
            c = e.params.grabCursor,
            d = o.grabCursor,
            f = r.enabled;
          s && !u
            ? (a.classList.remove(
                "".concat(r.containerModifierClass, "grid"),
                "".concat(r.containerModifierClass, "grid-column")
              ),
              e.emitContainerClasses())
            : !s &&
              u &&
              (a.classList.add("".concat(r.containerModifierClass, "grid")),
              ((o.grid.fill && "column" === o.grid.fill) ||
                (!o.grid.fill && "column" === r.grid.fill)) &&
                a.classList.add(
                  "".concat(r.containerModifierClass, "grid-column")
                ),
              e.emitContainerClasses()),
            c && !d ? e.unsetGrabCursor() : !c && d && e.setGrabCursor(),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if ("undefined" === typeof o[t]) return;
              const n = r[t] && r[t].enabled,
                a = o[t] && o[t].enabled;
              n && !a && e[t].disable(), !n && a && e[t].enable();
            });
          const p = o.direction && o.direction !== r.direction,
            h = r.loop && (o.slidesPerView !== r.slidesPerView || p),
            m = r.loop;
          p && n && e.changeDirection(), ce(e.params, o);
          const g = e.params.enabled,
            v = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            f && !g ? e.disable() : !f && g && e.enable(),
            (e.currentBreakpoint = i),
            e.emit("_beforeBreakpoint", o),
            n &&
              (h
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !m && v
                ? (e.loopCreate(t), e.updateSlides())
                : m && !v && e.loopDestroy()),
            e.emit("breakpoint", o);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let r = !1;
          const a = le(),
            l = "window" === t ? a.innerHeight : n.clientHeight,
            i = Object.keys(e).map((e) => {
              if ("string" === typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: l * t, point: e };
              }
              return { value: e, point: e };
            });
          i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let o = 0; o < i.length; o += 1) {
            const { point: e, value: l } = i[o];
            "window" === t
              ? a.matchMedia("(min-width: ".concat(l, "px)")).matches && (r = e)
              : l <= n.clientWidth && (r = e);
          }
          return r || "max";
        },
      };
      var Ze = {
        addClasses: function () {
          const e = this,
            { classNames: t, params: n, rtl: r, el: a, device: l } = e,
            i = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" === typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: l.android },
                { ios: l.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...i), a.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      };
      var Je = {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: r } = n;
            if (r) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        et = {
          init: !0,
          direction: "horizontal",
          oneWayMovement: !1,
          swiperElementNodeName: "SWIPER-CONTAINER",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          eventsPrefix: "swiper",
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopAddBlankSlides: !0,
          loopAdditionalSlides: 0,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-blank",
          slideActiveClass: "swiper-slide-active",
          slideVisibleClass: "swiper-slide-visible",
          slideFullyVisibleClass: "swiper-slide-fully-visible",
          slideNextClass: "swiper-slide-next",
          slidePrevClass: "swiper-slide-prev",
          wrapperClass: "swiper-wrapper",
          lazyPreloaderClass: "swiper-lazy-preloader",
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function tt(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              "navigation" === r &&
                e[r] &&
                e[r].enabled &&
                !e[r].prevEl &&
                !e[r].nextEl &&
                (e[r].auto = !0),
              ["pagination", "scrollbar"].indexOf(r) >= 0 &&
                e[r] &&
                e[r].enabled &&
                !e[r].el &&
                (e[r].auto = !0),
              r in e && "enabled" in a
                ? ("object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  ce(t, n))
                : ce(t, n))
            : ce(t, n);
        };
      }
      const nt = {
          eventsEmitter: _e,
          update: Ne,
          translate: Oe,
          transition: je,
          slide: De,
          loop: Re,
          grabCursor: Fe,
          events: Ye,
          breakpoints: Ke,
          checkOverflow: Je,
          classes: Ze,
        },
        rt = {};
      class at {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = ce({}, t)),
            e && !t.el && (t.el = e);
          const l = re();
          if (
            t.el &&
            "string" === typeof t.el &&
            l.querySelectorAll(t.el).length > 1
          ) {
            const e = [];
            return (
              l.querySelectorAll(t.el).forEach((n) => {
                const r = ce({}, t, { el: n });
                e.push(new at(r));
              }),
              e
            );
          }
          const i = this;
          (i.__swiper__ = !0),
            (i.support = ke()),
            (i.device = Ee({ userAgent: t.userAgent })),
            (i.browser = Te()),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              i.modules.push(...t.modules);
          const o = {};
          i.modules.forEach((e) => {
            e({
              params: t,
              swiper: i,
              extendParams: tt(t, o),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            });
          });
          const s = ce({}, et, o);
          return (
            (i.params = ce({}, s, rt, t)),
            (i.originalParams = ce({}, i.params)),
            (i.passedParams = ce({}, t)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach((e) => {
                i.on(e, i.params.on[e]);
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === i.params.direction,
              isVertical: () => "vertical" === i.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit("_swiper"),
            i.params.init && i.init(),
            i
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: n } = this,
            r = ve(pe(t, ".".concat(n.slideClass, ", swiper-slide"))[0]);
          return ve(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = pe(e, ".".concat(t.slideClass, ", swiper-slide"));
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            a = (n.maxTranslate() - r) * e + r;
          n.translateTo(a, "undefined" === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((n) => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: r,
            slidesGrid: a,
            slidesSizesGrid: l,
            size: i,
            activeIndex: o,
          } = this;
          let s = 1;
          if ("number" === typeof n.slidesPerView) return n.slidesPerView;
          if (n.centeredSlides) {
            let e,
              t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
            for (let n = o + 1; n < r.length; n += 1)
              r[n] &&
                !e &&
                ((t += Math.ceil(r[n].swiperSlideSize)),
                (s += 1),
                t > i && (e = !0));
            for (let n = o - 1; n >= 0; n -= 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (s += 1), t > i && (e = !0));
          } else if ("current" === e)
            for (let u = o + 1; u < r.length; u += 1) {
              (t ? a[u] + l[u] - a[o] < i : a[u] - a[o] < i) && (s += 1);
            }
          else
            for (let u = o - 1; u >= 0; u -= 1) {
              a[o] - a[u] < i && (s += 1);
            }
          return s;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          if (
            (n.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && Me(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            n.freeMode && n.freeMode.enabled && !n.cssMode)
          )
            r(), n.autoHeight && e.updateAutoHeight();
          else {
            if (
              ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
              e.isEnd &&
              !n.centeredSlides
            ) {
              const t =
                e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
              a = e.slideTo(t.length - 1, 0, !1, !0);
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || r();
          }
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            r = n.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.el.classList.remove(
                "".concat(n.params.containerModifierClass).concat(r)
              ),
              n.el.classList.add(
                "".concat(n.params.containerModifierClass).concat(e)
              ),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(
                  "".concat(t.params.containerModifierClass, "rtl")
                ),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(
                  "".concat(t.params.containerModifierClass, "rtl")
                ),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let n = e || t.params.el;
          if (("string" === typeof n && (n = document.querySelector(n)), !n))
            return !1;
          (n.swiper = t),
            n.parentNode &&
              n.parentNode.host &&
              n.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          const r = () =>
            ".".concat(
              (t.params.wrapperClass || "").trim().split(" ").join(".")
            );
          let a = (() => {
            if (n && n.shadowRoot && n.shadowRoot.querySelector) {
              return n.shadowRoot.querySelector(r());
            }
            return pe(n, r())[0];
          })();
          return (
            !a &&
              t.params.createElements &&
              ((a = me("div", t.params.wrapperClass)),
              n.append(a),
              pe(n, ".".concat(t.params.slideClass)).forEach((e) => {
                a.append(e);
              })),
            Object.assign(t, {
              el: n,
              wrapperEl: a,
              slidesEl:
                t.isElement && !n.parentNode.host.slideSlots
                  ? n.parentNode.host
                  : a,
              hostEl: t.isElement ? n.parentNode.host : n,
              mounted: !0,
              rtl:
                "rtl" === n.dir.toLowerCase() || "rtl" === ge(n, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === n.dir.toLowerCase() || "rtl" === ge(n, "direction")),
              wrongRTL: "-webkit-box" === ge(a, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          const n = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            n.forEach((e) => {
              e.complete
                ? Me(t, e)
                : e.addEventListener("load", (e) => {
                    Me(t, e.target);
                  });
            }),
            ze(t),
            (t.initialized = !0),
            ze(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: r, el: a, wrapperEl: l, slides: i } = n;
          return (
            "undefined" === typeof n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                a.removeAttribute("style"),
                l.removeAttribute("style"),
                i &&
                  i.length &&
                  i.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (n) {}
                    try {
                      delete t[e];
                    } catch (n) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          ce(rt, e);
        }
        static get extendedDefaults() {
          return rt;
        }
        static get defaults() {
          return et;
        }
        static installModule(e) {
          at.prototype.__modules__ || (at.prototype.__modules__ = []);
          const t = at.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => at.installModule(e)), at)
            : (at.installModule(e), at);
        }
      }
      Object.keys(nt).forEach((e) => {
        Object.keys(nt[e]).forEach((t) => {
          at.prototype[t] = nt[e][t];
        });
      }),
        at.use([
          function (e) {
            let { swiper: t, on: n, emit: r } = e;
            const a = le();
            let l = null,
              i = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              s = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((l = new ResizeObserver((e) => {
                    i = a.requestAnimationFrame(() => {
                      const { width: n, height: r } = t;
                      let a = n,
                        l = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: r,
                          target: i,
                        } = e;
                        (i && i !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (l = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && l === r) || o();
                    });
                  })),
                  l.observe(t.el))
                : (a.addEventListener("resize", o),
                  a.addEventListener("orientationchange", s));
            }),
              n("destroy", () => {
                i && a.cancelAnimationFrame(i),
                  l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)),
                  a.removeEventListener("resize", o),
                  a.removeEventListener("orientationchange", s);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: r, emit: a } = e;
            const l = [],
              i = le(),
              o = function (e, n) {
                void 0 === n && (n = {});
                const r = new (i.MutationObserver || i.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void a("observerUpdate", e[0]);
                    const n = function () {
                      a("observerUpdate", e[0]);
                    };
                    i.requestAnimationFrame
                      ? i.requestAnimationFrame(n)
                      : i.setTimeout(n, 0);
                  }
                );
                r.observe(e, {
                  attributes:
                    "undefined" === typeof n.attributes || n.attributes,
                  childList: "undefined" === typeof n.childList || n.childList,
                  characterData:
                    "undefined" === typeof n.characterData || n.characterData,
                }),
                  l.push(r);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = ye(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t]);
                  }
                  o(t.hostEl, { childList: t.params.observeSlideChildren }),
                    o(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                l.forEach((e) => {
                  e.disconnect();
                }),
                  l.splice(0, l.length);
              });
          },
        ]);
      const lt = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function it(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function ot(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : it(t[n]) && it(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : ot(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function st(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function ut(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function ct(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function dt(e) {
        void 0 === e && (e = "");
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          n = [];
        return (
          t.forEach((e) => {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      function ft(e) {
        return (
          void 0 === e && (e = ""),
          e
            ? e.includes("swiper-wrapper")
              ? e
              : "swiper-wrapper ".concat(e)
            : "swiper-wrapper"
        );
      }
      function pt() {
        return (
          (pt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          pt.apply(this, arguments)
        );
      }
      function ht(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function mt(e) {
        const t = [];
        return (
          s.Children.toArray(e).forEach((e) => {
            ht(e)
              ? t.push(e)
              : e.props &&
                e.props.children &&
                mt(e.props.children).forEach((e) => t.push(e));
          }),
          t
        );
      }
      function gt(e) {
        const t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          s.Children.toArray(e).forEach((e) => {
            if (ht(e)) t.push(e);
            else if (e.props && e.props.slot && n[e.props.slot])
              n[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const r = mt(e.props.children);
              r.length > 0
                ? r.forEach((e) => t.push(e))
                : n["container-end"].push(e);
            } else n["container-end"].push(e);
          }),
          { slides: t, slots: n }
        );
      }
      function vt(e, t) {
        return "undefined" === typeof window
          ? (0, s.useEffect)(e, t)
          : (0, s.useLayoutEffect)(e, t);
      }
      const yt = (0, s.createContext)(null),
        bt = (0, s.createContext)(null),
        wt = (0, s.forwardRef)(function (e, t) {
          let {
              className: n,
              tag: r = "div",
              wrapperTag: a = "div",
              children: l,
              onSwiper: i,
              ...o
            } = void 0 === e ? {} : e,
            u = !1;
          const [c, d] = (0, s.useState)("swiper"),
            [f, p] = (0, s.useState)(null),
            [h, m] = (0, s.useState)(!1),
            g = (0, s.useRef)(!1),
            v = (0, s.useRef)(null),
            y = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            w = (0, s.useRef)(null),
            S = (0, s.useRef)(null),
            x = (0, s.useRef)(null),
            C = (0, s.useRef)(null),
            k = (0, s.useRef)(null),
            {
              params: E,
              passedParams: T,
              rest: _,
              events: P,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              const n = { on: {} },
                r = {},
                a = {};
              ot(n, et), (n._emitClasses = !0), (n.init = !1);
              const l = {},
                i = lt.map((e) => e.replace(/_/, "")),
                o = Object.assign({}, e);
              return (
                Object.keys(o).forEach((o) => {
                  "undefined" !== typeof e[o] &&
                    (i.indexOf(o) >= 0
                      ? it(e[o])
                        ? ((n[o] = {}),
                          (a[o] = {}),
                          ot(n[o], e[o]),
                          ot(a[o], e[o]))
                        : ((n[o] = e[o]), (a[o] = e[o]))
                      : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o]
                      ? t
                        ? (r[
                            "".concat(o[2].toLowerCase()).concat(o.substr(3))
                          ] = e[o])
                        : (n.on[
                            "".concat(o[2].toLowerCase()).concat(o.substr(3))
                          ] = e[o])
                      : (l[o] = e[o]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
                }),
                { params: n, passedParams: a, rest: l, events: r }
              );
            })(o),
            { slides: M, slots: L } = gt(l),
            z = () => {
              m(!h);
            };
          Object.assign(E.on, {
            _containerClasses(e, t) {
              d(t);
            },
          });
          const N = () => {
            Object.assign(E.on, P), (u = !0);
            const e = { ...E };
            if (
              (delete e.wrapperClass,
              (y.current = new at(e)),
              y.current.virtual && y.current.params.virtual.enabled)
            ) {
              y.current.virtual.slides = M;
              const e = {
                cache: !1,
                slides: M,
                renderExternal: p,
                renderExternalUpdate: !1,
              };
              ot(y.current.params.virtual, e),
                ot(y.current.originalParams.virtual, e);
            }
          };
          v.current || N(), y.current && y.current.on("_beforeBreakpoint", z);
          return (
            (0, s.useEffect)(() => () => {
              y.current && y.current.off("_beforeBreakpoint", z);
            }),
            (0, s.useEffect)(() => {
              !g.current &&
                y.current &&
                (y.current.emitSlidesClasses(), (g.current = !0));
            }),
            vt(() => {
              if ((t && (t.current = v.current), v.current))
                return (
                  y.current.destroyed && N(),
                  (function (e, t) {
                    let {
                      el: n,
                      nextEl: r,
                      prevEl: a,
                      paginationEl: l,
                      scrollbarEl: i,
                      swiper: o,
                    } = e;
                    st(t) &&
                      r &&
                      a &&
                      ((o.params.navigation.nextEl = r),
                      (o.originalParams.navigation.nextEl = r),
                      (o.params.navigation.prevEl = a),
                      (o.originalParams.navigation.prevEl = a)),
                      ut(t) &&
                        l &&
                        ((o.params.pagination.el = l),
                        (o.originalParams.pagination.el = l)),
                      ct(t) &&
                        i &&
                        ((o.params.scrollbar.el = i),
                        (o.originalParams.scrollbar.el = i)),
                      o.init(n);
                  })(
                    {
                      el: v.current,
                      nextEl: S.current,
                      prevEl: x.current,
                      paginationEl: C.current,
                      scrollbarEl: k.current,
                      swiper: y.current,
                    },
                    E
                  ),
                  i && !y.current.destroyed && i(y.current),
                  () => {
                    y.current &&
                      !y.current.destroyed &&
                      y.current.destroy(!0, !1);
                  }
                );
            }, []),
            vt(() => {
              !u &&
                P &&
                y.current &&
                Object.keys(P).forEach((e) => {
                  y.current.on(e, P[e]);
                });
              const e = (function (e, t, n, r, a) {
                const l = [];
                if (!t) return l;
                const i = (e) => {
                  l.indexOf(e) < 0 && l.push(e);
                };
                if (n && r) {
                  const e = r.map(a),
                    t = n.map(a);
                  e.join("") !== t.join("") && i("children"),
                    r.length !== n.length && i("children");
                }
                return (
                  lt
                    .filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((n) => {
                      if (n in e && n in t)
                        if (it(e[n]) && it(t[n])) {
                          const r = Object.keys(e[n]),
                            a = Object.keys(t[n]);
                          r.length !== a.length
                            ? i(n)
                            : (r.forEach((r) => {
                                e[n][r] !== t[n][r] && i(n);
                              }),
                              a.forEach((r) => {
                                e[n][r] !== t[n][r] && i(n);
                              }));
                        } else e[n] !== t[n] && i(n);
                    }),
                  l
                );
              })(T, b.current, M, w.current, (e) => e.key);
              return (
                (b.current = T),
                (w.current = M),
                e.length &&
                  y.current &&
                  !y.current.destroyed &&
                  (function (e) {
                    let {
                      swiper: t,
                      slides: n,
                      passedParams: r,
                      changedParams: a,
                      nextEl: l,
                      prevEl: i,
                      scrollbarEl: o,
                      paginationEl: s,
                    } = e;
                    const u = a.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: c,
                        pagination: d,
                        navigation: f,
                        scrollbar: p,
                        virtual: h,
                        thumbs: m,
                      } = t;
                    let g, v, y, b, w, S, x, C;
                    a.includes("thumbs") &&
                      r.thumbs &&
                      r.thumbs.swiper &&
                      c.thumbs &&
                      !c.thumbs.swiper &&
                      (g = !0),
                      a.includes("controller") &&
                        r.controller &&
                        r.controller.control &&
                        c.controller &&
                        !c.controller.control &&
                        (v = !0),
                      a.includes("pagination") &&
                        r.pagination &&
                        (r.pagination.el || s) &&
                        (c.pagination || !1 === c.pagination) &&
                        d &&
                        !d.el &&
                        (y = !0),
                      a.includes("scrollbar") &&
                        r.scrollbar &&
                        (r.scrollbar.el || o) &&
                        (c.scrollbar || !1 === c.scrollbar) &&
                        p &&
                        !p.el &&
                        (b = !0),
                      a.includes("navigation") &&
                        r.navigation &&
                        (r.navigation.prevEl || i) &&
                        (r.navigation.nextEl || l) &&
                        (c.navigation || !1 === c.navigation) &&
                        f &&
                        !f.prevEl &&
                        !f.nextEl &&
                        (w = !0);
                    const k = (e) => {
                      t[e] &&
                        (t[e].destroy(),
                        "navigation" === e
                          ? (t.isElement &&
                              (t[e].prevEl.remove(), t[e].nextEl.remove()),
                            (c[e].prevEl = void 0),
                            (c[e].nextEl = void 0),
                            (t[e].prevEl = void 0),
                            (t[e].nextEl = void 0))
                          : (t.isElement && t[e].el.remove(),
                            (c[e].el = void 0),
                            (t[e].el = void 0)));
                    };
                    a.includes("loop") &&
                      t.isElement &&
                      (c.loop && !r.loop
                        ? (S = !0)
                        : !c.loop && r.loop
                        ? (x = !0)
                        : (C = !0)),
                      u.forEach((e) => {
                        if (it(c[e]) && it(r[e]))
                          Object.assign(c[e], r[e]),
                            ("navigation" !== e &&
                              "pagination" !== e &&
                              "scrollbar" !== e) ||
                              !("enabled" in r[e]) ||
                              r[e].enabled ||
                              k(e);
                        else {
                          const t = r[e];
                          (!0 !== t && !1 !== t) ||
                          ("navigation" !== e &&
                            "pagination" !== e &&
                            "scrollbar" !== e)
                            ? (c[e] = r[e])
                            : !1 === t && k(e);
                        }
                      }),
                      u.includes("controller") &&
                        !v &&
                        t.controller &&
                        t.controller.control &&
                        c.controller &&
                        c.controller.control &&
                        (t.controller.control = c.controller.control),
                      a.includes("children") && n && h && c.virtual.enabled
                        ? ((h.slides = n), h.update(!0))
                        : a.includes("virtual") &&
                          h &&
                          c.virtual.enabled &&
                          (n && (h.slides = n), h.update(!0)),
                      a.includes("children") && n && c.loop && (C = !0),
                      g && m.init() && m.update(!0);
                    v && (t.controller.control = c.controller.control),
                      y &&
                        (!t.isElement ||
                          (s && "string" !== typeof s) ||
                          ((s = document.createElement("div")),
                          s.classList.add("swiper-pagination"),
                          s.part.add("pagination"),
                          t.el.appendChild(s)),
                        s && (c.pagination.el = s),
                        d.init(),
                        d.render(),
                        d.update()),
                      b &&
                        (!t.isElement ||
                          (o && "string" !== typeof o) ||
                          ((o = document.createElement("div")),
                          o.classList.add("swiper-scrollbar"),
                          o.part.add("scrollbar"),
                          t.el.appendChild(o)),
                        o && (c.scrollbar.el = o),
                        p.init(),
                        p.updateSize(),
                        p.setTranslate()),
                      w &&
                        (t.isElement &&
                          ((l && "string" !== typeof l) ||
                            ((l = document.createElement("div")),
                            l.classList.add("swiper-button-next"),
                            (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
                            l.part.add("button-next"),
                            t.el.appendChild(l)),
                          (i && "string" !== typeof i) ||
                            ((i = document.createElement("div")),
                            i.classList.add("swiper-button-prev"),
                            (i.innerHTML = t.hostEl.constructor.prevButtonSvg),
                            i.part.add("button-prev"),
                            t.el.appendChild(i))),
                        l && (c.navigation.nextEl = l),
                        i && (c.navigation.prevEl = i),
                        f.init(),
                        f.update()),
                      a.includes("allowSlideNext") &&
                        (t.allowSlideNext = r.allowSlideNext),
                      a.includes("allowSlidePrev") &&
                        (t.allowSlidePrev = r.allowSlidePrev),
                      a.includes("direction") &&
                        t.changeDirection(r.direction, !1),
                      (S || C) && t.loopDestroy(),
                      (x || C) && t.loopCreate(),
                      t.update();
                  })({
                    swiper: y.current,
                    slides: M,
                    passedParams: T,
                    changedParams: e,
                    nextEl: S.current,
                    prevEl: x.current,
                    scrollbarEl: k.current,
                    paginationEl: C.current,
                  }),
                () => {
                  P &&
                    y.current &&
                    Object.keys(P).forEach((e) => {
                      y.current.off(e, P[e]);
                    });
                }
              );
            }),
            vt(() => {
              ((e) => {
                !e ||
                  e.destroyed ||
                  !e.params.virtual ||
                  (e.params.virtual && !e.params.virtual.enabled) ||
                  (e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.parallax &&
                    e.params.parallax &&
                    e.params.parallax.enabled &&
                    e.parallax.setTranslate());
              })(y.current);
            }, [f]),
            s.createElement(
              r,
              pt(
                {
                  ref: v,
                  className: dt("".concat(c).concat(n ? " ".concat(n) : "")),
                },
                _
              ),
              s.createElement(
                bt.Provider,
                { value: y.current },
                L["container-start"],
                s.createElement(
                  a,
                  { className: ft(E.wrapperClass) },
                  L["wrapper-start"],
                  E.virtual
                    ? (function (e, t, n) {
                        if (!n) return null;
                        const r = (e) => {
                            let n = e;
                            return (
                              e < 0
                                ? (n = t.length + e)
                                : n >= t.length && (n -= t.length),
                              n
                            );
                          },
                          a = e.isHorizontal()
                            ? {
                                [e.rtlTranslate ? "right" : "left"]: "".concat(
                                  n.offset,
                                  "px"
                                ),
                              }
                            : { top: "".concat(n.offset, "px") },
                          { from: l, to: i } = n,
                          o = e.params.loop ? -t.length : 0,
                          u = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let s = o; s < u; s += 1)
                          s >= l && s <= i && c.push(t[r(s)]);
                        return c.map((t, n) =>
                          s.cloneElement(t, {
                            swiper: e,
                            style: a,
                            key:
                              t.props.virtualIndex ||
                              t.key ||
                              "slide-".concat(n),
                          })
                        );
                      })(y.current, M, f)
                    : M.map((e, t) =>
                        s.cloneElement(e, {
                          swiper: y.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  L["wrapper-end"]
                ),
                st(E) &&
                  s.createElement(
                    s.Fragment,
                    null,
                    s.createElement("div", {
                      ref: x,
                      className: "swiper-button-prev",
                    }),
                    s.createElement("div", {
                      ref: S,
                      className: "swiper-button-next",
                    })
                  ),
                ct(E) &&
                  s.createElement("div", {
                    ref: k,
                    className: "swiper-scrollbar",
                  }),
                ut(E) &&
                  s.createElement("div", {
                    ref: C,
                    className: "swiper-pagination",
                  }),
                L["container-end"]
              )
            )
          );
        });
      wt.displayName = "Swiper";
      const St = (0, s.forwardRef)(function (e, t) {
        let {
          tag: n = "div",
          children: r,
          className: a = "",
          swiper: l,
          zoom: i,
          lazy: o,
          virtualIndex: u,
          swiperSlideIndex: c,
          ...d
        } = void 0 === e ? {} : e;
        const f = (0, s.useRef)(null),
          [p, h] = (0, s.useState)("swiper-slide"),
          [m, g] = (0, s.useState)(!1);
        function v(e, t, n) {
          t === f.current && h(n);
        }
        vt(() => {
          if (
            ("undefined" !== typeof c && (f.current.swiperSlideIndex = c),
            t && (t.current = f.current),
            f.current && l)
          ) {
            if (!l.destroyed)
              return (
                l.on("_slideClass", v),
                () => {
                  l && l.off("_slideClass", v);
                }
              );
            "swiper-slide" !== p && h("swiper-slide");
          }
        }),
          vt(() => {
            l && f.current && !l.destroyed && h(l.getSlideClasses(f.current));
          }, [l]);
        const y = {
            isActive: p.indexOf("swiper-slide-active") >= 0,
            isVisible: p.indexOf("swiper-slide-visible") >= 0,
            isPrev: p.indexOf("swiper-slide-prev") >= 0,
            isNext: p.indexOf("swiper-slide-next") >= 0,
          },
          b = () => ("function" === typeof r ? r(y) : r);
        return s.createElement(
          n,
          pt(
            {
              ref: f,
              className: dt("".concat(p).concat(a ? " ".concat(a) : "")),
              "data-swiper-slide-index": u,
              onLoad: () => {
                g(!0);
              },
            },
            d
          ),
          i &&
            s.createElement(
              yt.Provider,
              { value: y },
              s.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" === typeof i ? i : void 0,
                },
                b(),
                o &&
                  !m &&
                  s.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !i &&
            s.createElement(
              yt.Provider,
              { value: y },
              b(),
              o &&
                !m &&
                s.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      function xt(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!+\/])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function Ct(e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        const l = "swiper-pagination";
        let i;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: "".concat(l, "-bullet"),
            bulletActiveClass: "".concat(l, "-bullet-active"),
            modifierClass: "".concat(l, "-"),
            currentClass: "".concat(l, "-current"),
            totalClass: "".concat(l, "-total"),
            hiddenClass: "".concat(l, "-hidden"),
            progressbarFillClass: "".concat(l, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(l, "-progressbar-opposite"),
            clickableClass: "".concat(l, "-clickable"),
            lockClass: "".concat(l, "-lock"),
            horizontalClass: "".concat(l, "-horizontal"),
            verticalClass: "".concat(l, "-vertical"),
            paginationDisabledClass: "".concat(l, "-disabled"),
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let o = 0;
        function s() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function u(e, n) {
          const { bulletActiveClass: r } = t.params.pagination;
          e &&
            (e =
              e[
                "".concat("prev" === n ? "previous" : "next", "ElementSibling")
              ]) &&
            (e.classList.add("".concat(r, "-").concat(n)),
            (e =
              e[
                "".concat("prev" === n ? "previous" : "next", "ElementSibling")
              ]) &&
              e.classList.add("".concat(r, "-").concat(n, "-").concat(n)));
        }
        function c(e) {
          const n = e.target.closest(xt(t.params.pagination.bulletClass));
          if (!n) return;
          e.preventDefault();
          const r = ve(n) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === r) return;
            t.slideToLoop(r);
          } else t.slideTo(r);
        }
        function d() {
          const e = t.rtl,
            n = t.params.pagination;
          if (s()) return;
          let r,
            l,
            c = t.pagination.el;
          c = we(c);
          const d =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            f = t.params.loop
              ? Math.ceil(d / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((l = t.previousRealIndex || 0),
                (r =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : "undefined" !== typeof t.snapIndex
              ? ((r = t.snapIndex), (l = t.previousSnapIndex))
              : ((l = t.previousIndex || 0), (r = t.activeIndex || 0)),
            "bullets" === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const a = t.pagination.bullets;
            let s, d, f;
            if (
              (n.dynamicBullets &&
                ((i = be(a[0], t.isHorizontal() ? "width" : "height", !0)),
                c.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] = "".concat(
                    i * (n.dynamicMainBullets + 4),
                    "px"
                  );
                }),
                n.dynamicMainBullets > 1 &&
                  void 0 !== l &&
                  ((o += r - (l || 0)),
                  o > n.dynamicMainBullets - 1
                    ? (o = n.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (s = Math.max(r - o, 0)),
                (d = s + (Math.min(a.length, n.dynamicMainBullets) - 1)),
                (f = (d + s) / 2)),
              a.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => "".concat(n.bulletActiveClass).concat(e)),
                ]
                  .map((e) =>
                    "string" === typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              c.length > 1)
            )
              a.forEach((e) => {
                const a = ve(e);
                a === r
                  ? e.classList.add(...n.bulletActiveClass.split(" "))
                  : t.isElement && e.setAttribute("part", "bullet"),
                  n.dynamicBullets &&
                    (a >= s &&
                      a <= d &&
                      e.classList.add(
                        ..."".concat(n.bulletActiveClass, "-main").split(" ")
                      ),
                    a === s && u(e, "prev"),
                    a === d && u(e, "next"));
              });
            else {
              const e = a[r];
              if (
                (e && e.classList.add(...n.bulletActiveClass.split(" ")),
                t.isElement &&
                  a.forEach((e, t) => {
                    e.setAttribute(
                      "part",
                      t === r ? "bullet-active" : "bullet"
                    );
                  }),
                n.dynamicBullets)
              ) {
                const e = a[s],
                  t = a[d];
                for (let r = s; r <= d; r += 1)
                  a[r] &&
                    a[r].classList.add(
                      ..."".concat(n.bulletActiveClass, "-main").split(" ")
                    );
                u(e, "prev"), u(t, "next");
              }
            }
            if (n.dynamicBullets) {
              const r = Math.min(a.length, n.dynamicMainBullets + 4),
                l = (i * r - i) / 2 - f * i,
                o = e ? "right" : "left";
              a.forEach((e) => {
                e.style[t.isHorizontal() ? o : "top"] = "".concat(l, "px");
              });
            }
          }
          c.forEach((e, l) => {
            if (
              ("fraction" === n.type &&
                (e.querySelectorAll(xt(n.currentClass)).forEach((e) => {
                  e.textContent = n.formatFractionCurrent(r + 1);
                }),
                e.querySelectorAll(xt(n.totalClass)).forEach((e) => {
                  e.textContent = n.formatFractionTotal(f);
                })),
              "progressbar" === n.type)
            ) {
              let a;
              a = n.progressbarOpposite
                ? t.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : t.isHorizontal()
                ? "horizontal"
                : "vertical";
              const l = (r + 1) / f;
              let i = 1,
                o = 1;
              "horizontal" === a ? (i = l) : (o = l),
                e.querySelectorAll(xt(n.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = "translate3d(0,0,0) scaleX("
                    .concat(i, ") scaleY(")
                    .concat(o, ")")),
                    (e.style.transitionDuration = "".concat(
                      t.params.speed,
                      "ms"
                    ));
                });
            }
            "custom" === n.type && n.renderCustom
              ? ((e.innerHTML = n.renderCustom(t, r + 1, f)),
                0 === l && a("paginationRender", e))
              : (0 === l && a("paginationRender", e), a("paginationUpdate", e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](n.lockClass);
          });
        }
        function f() {
          const e = t.params.pagination;
          if (s()) return;
          const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.grid && t.params.grid.rows > 1
              ? t.slides.length / Math.ceil(t.params.grid.rows)
              : t.slides.length;
          let r = t.pagination.el;
          r = we(r);
          let l = "";
          if ("bullets" === e.type) {
            let r = t.params.loop
              ? Math.ceil(n / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && r > n && (r = n);
            for (let n = 0; n < r; n += 1)
              e.renderBullet
                ? (l += e.renderBullet.call(t, n, e.bulletClass))
                : (l += "<"
                    .concat(e.bulletElement, " ")
                    .concat(t.isElement ? 'part="bullet"' : "", ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, ">"));
          }
          "fraction" === e.type &&
            (l = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : '<span class="'.concat(e.currentClass, '"></span>') +
                " / " +
                '<span class="'.concat(e.totalClass, '"></span>')),
            "progressbar" === e.type &&
              (l = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
            (t.pagination.bullets = []),
            r.forEach((n) => {
              "custom" !== e.type && (n.innerHTML = l || ""),
                "bullets" === e.type &&
                  t.pagination.bullets.push(
                    ...n.querySelectorAll(xt(e.bulletClass))
                  );
            }),
            "custom" !== e.type && a("paginationRender", r[0]);
        }
        function p() {
          t.params.pagination = (function (e, t, n, r) {
            return (
              e.params.createElements &&
                Object.keys(r).forEach((a) => {
                  if (!n[a] && !0 === n.auto) {
                    let l = pe(e.el, ".".concat(r[a]))[0];
                    l ||
                      ((l = me("div", r[a])),
                      (l.className = r[a]),
                      e.el.append(l)),
                      (n[a] = l),
                      (t[a] = l);
                  }
                }),
              n
            );
          })(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination",
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let n;
          "string" === typeof e.el &&
            t.isElement &&
            (n = t.el.querySelector(e.el)),
            n ||
              "string" !== typeof e.el ||
              (n = [...document.querySelectorAll(e.el)]),
            n || (n = e.el),
            n &&
              0 !== n.length &&
              (t.params.uniqueNavElements &&
                "string" === typeof e.el &&
                Array.isArray(n) &&
                n.length > 1 &&
                ((n = [...t.el.querySelectorAll(e.el)]),
                n.length > 1 &&
                  (n = n.filter((e) => ye(e, ".swiper")[0] === t.el)[0])),
              Array.isArray(n) && 1 === n.length && (n = n[0]),
              Object.assign(t.pagination, { el: n }),
              (n = we(n)),
              n.forEach((n) => {
                "bullets" === e.type &&
                  e.clickable &&
                  n.classList.add(...(e.clickableClass || "").split(" ")),
                  n.classList.add(e.modifierClass + e.type),
                  n.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass
                  ),
                  "bullets" === e.type &&
                    e.dynamicBullets &&
                    (n.classList.add(
                      "".concat(e.modifierClass).concat(e.type, "-dynamic")
                    ),
                    (o = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  "progressbar" === e.type &&
                    e.progressbarOpposite &&
                    n.classList.add(e.progressbarOppositeClass),
                  e.clickable && n.addEventListener("click", c),
                  t.enabled || n.classList.add(e.lockClass);
              }));
        }
        function h() {
          const e = t.params.pagination;
          if (s()) return;
          let n = t.pagination.el;
          n &&
            ((n = we(n)),
            n.forEach((n) => {
              n.classList.remove(e.hiddenClass),
                n.classList.remove(e.modifierClass + e.type),
                n.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable &&
                  (n.classList.remove(...(e.clickableClass || "").split(" ")),
                  n.removeEventListener("click", c));
            })),
            t.pagination.bullets &&
              t.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        r("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: n } = t.pagination;
          (n = we(n)),
            n.forEach((n) => {
              n.classList.remove(e.horizontalClass, e.verticalClass),
                n.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                );
            });
        }),
          r("init", () => {
            !1 === t.params.pagination.enabled ? m() : (p(), f(), d());
          }),
          r("activeIndexChange", () => {
            "undefined" === typeof t.snapIndex && d();
          }),
          r("snapIndexChange", () => {
            d();
          }),
          r("snapGridLengthChange", () => {
            f(), d();
          }),
          r("destroy", () => {
            h();
          }),
          r("enable disable", () => {
            let { el: e } = t.pagination;
            e &&
              ((e = we(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass
                )
              ));
          }),
          r("lock unlock", () => {
            d();
          }),
          r("click", (e, n) => {
            const r = n.target,
              l = we(t.pagination.el);
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              l &&
              l.length > 0 &&
              !r.classList.contains(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && r === t.navigation.nextEl) ||
                  (t.navigation.prevEl && r === t.navigation.prevEl))
              )
                return;
              const e = l[0].classList.contains(
                t.params.pagination.hiddenClass
              );
              a(!0 === e ? "paginationShow" : "paginationHide"),
                l.forEach((e) =>
                  e.classList.toggle(t.params.pagination.hiddenClass)
                );
            }
          });
        const m = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = we(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass)
            )),
            h();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = we(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
              )),
              p(),
              f(),
              d();
          },
          disable: m,
          render: f,
          update: d,
          init: p,
          destroy: h,
        });
      }
      function kt(e) {
        let t,
          n,
          r,
          a,
          { swiper: l, extendParams: i, on: o } = e;
        i({ grid: { rows: 1, fill: "column" } });
        const s = () => {
          let e = l.params.spaceBetween;
          return (
            "string" === typeof e && e.indexOf("%") >= 0
              ? (e = (parseFloat(e.replace("%", "")) / 100) * l.size)
              : "string" === typeof e && (e = parseFloat(e)),
            e
          );
        };
        o("init", () => {
          a = l.params.grid && l.params.grid.rows > 1;
        }),
          o("update", () => {
            const { params: e, el: t } = l,
              n = e.grid && e.grid.rows > 1;
            a && !n
              ? (t.classList.remove(
                  "".concat(e.containerModifierClass, "grid"),
                  "".concat(e.containerModifierClass, "grid-column")
                ),
                (r = 1),
                l.emitContainerClasses())
              : !a &&
                n &&
                (t.classList.add("".concat(e.containerModifierClass, "grid")),
                "column" === e.grid.fill &&
                  t.classList.add(
                    "".concat(e.containerModifierClass, "grid-column")
                  ),
                l.emitContainerClasses()),
              (a = n);
          }),
          (l.grid = {
            initSlides: (e) => {
              const { slidesPerView: a } = l.params,
                { rows: i, fill: o } = l.params.grid,
                s =
                  l.virtual && l.params.virtual.enabled
                    ? l.virtual.slides.length
                    : e.length;
              (r = Math.floor(s / i)),
                (t = Math.floor(s / i) === s / i ? s : Math.ceil(s / i) * i),
                "auto" !== a && "row" === o && (t = Math.max(t, a * i)),
                (n = t / i);
            },
            unsetSlides: () => {
              l.slides &&
                l.slides.forEach((e) => {
                  e.swiperSlideGridSet &&
                    ((e.style.height = ""),
                    (e.style[l.getDirectionLabel("margin-top")] = ""));
                });
            },
            updateSlide: (e, a, i) => {
              const { slidesPerGroup: o } = l.params,
                u = s(),
                { rows: c, fill: d } = l.params.grid,
                f =
                  l.virtual && l.params.virtual.enabled
                    ? l.virtual.slides.length
                    : i.length;
              let p, h, m;
              if ("row" === d && o > 1) {
                const n = Math.floor(e / (o * c)),
                  r = e - c * o * n,
                  l = 0 === n ? o : Math.min(Math.ceil((f - n * c * o) / c), o);
                (m = Math.floor(r / l)),
                  (h = r - m * l + n * o),
                  (p = h + (m * t) / c),
                  (a.style.order = p);
              } else
                "column" === d
                  ? ((h = Math.floor(e / c)),
                    (m = e - h * c),
                    (h > r || (h === r && m === c - 1)) &&
                      ((m += 1), m >= c && ((m = 0), (h += 1))))
                  : ((m = Math.floor(e / n)), (h = e - m * n));
              (a.row = m),
                (a.column = h),
                (a.style.height = "calc((100% - "
                  .concat((c - 1) * u, "px) / ")
                  .concat(c, ")")),
                (a.style[l.getDirectionLabel("margin-top")] =
                  0 !== m ? u && "".concat(u, "px") : ""),
                (a.swiperSlideGridSet = !0);
            },
            updateWrapperSize: (e, n) => {
              const { centeredSlides: r, roundLengths: a } = l.params,
                i = s(),
                { rows: o } = l.params.grid;
              if (
                ((l.virtualSize = (e + i) * t),
                (l.virtualSize = Math.ceil(l.virtualSize / o) - i),
                l.params.cssMode ||
                  (l.wrapperEl.style[l.getDirectionLabel("width")] = "".concat(
                    l.virtualSize + i,
                    "px"
                  )),
                r)
              ) {
                const e = [];
                for (let t = 0; t < n.length; t += 1) {
                  let r = n[t];
                  a && (r = Math.floor(r)),
                    n[t] < l.virtualSize + n[0] && e.push(r);
                }
                n.splice(0, n.length), n.push(...e);
              }
            },
          });
      }
      St.displayName = "SwiperSlide";
      const Et = () => {
        const [e] = (0, s.useState)([
          { title: "Home", ref: (0, s.useRef)(null) },
          { title: "Services", ref: (0, s.useRef)(null) },
          { title: "Projects", ref: (0, s.useRef)(null) },
          { title: "Contact", ref: (0, s.useRef)(null) },
        ]);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(J, {
              menuList: e.map((e) => e.title),
              onMenuClick: (t) => {
                var n;
                const r = e.find((e) => e.title === t);
                null === r ||
                  void 0 === r ||
                  null === (n = r.ref.current) ||
                  void 0 === n ||
                  n.scrollIntoView({ behavior: "smooth" });
              },
            }),
            (0, N.jsxs)("main", {
              children: [
                (0, N.jsxs)("section", {
                  id: "home",
                  ref: e[0].ref,
                  children: [
                    (0, N.jsxs)("figure", {
                      className: "background__img",
                      children: [
                        (0, N.jsx)(T, { id: "comet1" }),
                        (0, N.jsx)(L, { id: "star1" }),
                      ],
                    }),
                    (0, N.jsxs)("div", {
                      className: "section__container",
                      children: [
                        (0, N.jsxs)("div", {
                          className: "main__title",
                          children: [
                            (0, N.jsx)("img", {
                              id: "planet1",
                              src: "assets/planet-1.png",
                              alt: "background",
                            }),
                            (0, N.jsx)("h1", {
                              className: "title__first",
                              children: "Orbit",
                            }),
                            (0, N.jsxs)("h1", {
                              className: "title__second",
                              children: [
                                "Code",
                                (0, N.jsx)("span", { children: "." }),
                              ],
                            }),
                          ],
                        }),
                        (0, N.jsxs)("p", {
                          className: "main__desc",
                          children: [
                            (0, N.jsx)("strong", {
                              children:
                                "\ucc28\uc6d0\uc774 \ub2e4\ub978 \uc6f9 \uacbd\ud5d8, \uc624\ub974\ube57\ucf54\ub4dc\uc640 \ud568\uaed8\ud558\uc138\uc694.",
                            }),
                            "\uc624\ub974\ube57\ucf54\ub4dc\ub294 \uc5ec\ub7ec\ubd84\uc758 \ube44\uc988\ub2c8\uc2a4\ub97c \uc644\ubcbd\ud558\uac8c \ubc18\uc601\ud558\ub294 \ub9de\ucda4\ud615 \uc6f9\uc0ac\uc774\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uace0\uac1d\uc758 \ub2c8\uc988\ub97c \uc815\ubc00\ud558\uac8c \ubd84\uc11d\ud558\uc5ec \ucc3d\uc758\uc801\uc774\uace0 \ud601\uc2e0\uc801\uc778 \ub514\uc790\uc778\uc73c\ub85c \uad6c\ud604\ud574, \ubc29\ubb38\uc790\ub4e4\uc5d0\uac8c \uc78a\uc9c0 \ubabb\ud560 \uc6f9 \uacbd\ud5d8\uc744 \uc120\uc0ac\ud569\ub2c8\ub2e4. \ucd5c\uc2e0 \uae30\uc220\uacfc \ucd5c\uc801\ud654\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uae30\ubc18\uc73c\ub85c, \uc5ec\ub7ec\ubd84\uc758 \ube44\uc988\ub2c8\uc2a4 \uc131\uc7a5\uc744 \uac00\uc18d\ud654\ud560 \uc218 \uc788\ub294 \uac15\ub825\ud55c \uc628\ub77c\uc778 \ud50c\ub7ab\ud3fc\uc744 \uc81c\uacf5\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc624\ub974\ube57\ucf54\ub4dc\uc640 \ud568\uaed8, \ub2f9\uc2e0\uc758 \ube44\uc988\ub2c8\uc2a4\uac00 \uc628\ub77c\uc778\uc5d0\uc11c \ube5b\ub098\uac8c \ub9cc\ub4dc\uc138\uc694.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, N.jsxs)("section", {
                  id: "services",
                  ref: e[1].ref,
                  children: [
                    (0, N.jsxs)("figure", {
                      className: "background__img",
                      children: [
                        (0, N.jsx)(L, { id: "star2" }),
                        (0, N.jsx)("img", {
                          id: "planet2",
                          src: "assets/planet-2.png",
                          alt: "background",
                        }),
                        (0, N.jsx)("img", {
                          id: "bgService",
                          src: "assets/services.png",
                          alt: "background",
                        }),
                      ],
                    }),
                    (0, N.jsxs)("div", {
                      className: "section__container",
                      children: [
                        (0, N.jsxs)("div", {
                          className: "sub__title",
                          children: [
                            (0, N.jsx)("span", { children: "<" }),
                            (0, N.jsx)("p", { children: "Services" }),
                            (0, N.jsx)("span", { children: "/>" }),
                          ],
                        }),
                        (0, N.jsxs)("div", {
                          className: "service__content",
                          children: [
                            (0, N.jsxs)("div", {
                              className: "content",
                              children: [
                                (0, N.jsx)("p", {
                                  className: "content__title",
                                  children:
                                    "\ud569\ub9ac\uc801\uc778 \ube44\uc6a9",
                                }),
                                (0, N.jsx)("p", {
                                  className: "content__desc",
                                  children:
                                    "\uc6b0\ub9ac\ub294 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \ud569\ub9ac\uc801\uc778 \ube44\uc6a9\uc73c\ub85c \uc81c\uacf5\ud568\uc73c\ub85c\uc368, \uc911\uc18c\uae30\uc5c5\ubd80\ud130 \ub300\uae30\uc5c5\uae4c\uc9c0 \ub2e4\uc591\ud55c \uaddc\ubaa8\uc758 \uae30\uc5c5\ub4e4\uc774 \uace0\ud488\uc9c8\uc758 \uc6f9 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ube44\uc6a9 \ud6a8\uc728\uc801\uc778 \uc194\ub8e8\uc158\uc744 \uc81c\uacf5\ud558\uba74\uc11c\ub3c4 \ud488\uc9c8\uc5d0\uc11c\ub294 \uc808\ub300 \ud0c0\ud611\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 Orbitcode\uc758 \ubaa9\ud45c\uc785\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\uc758 \uc694\uad6c\uc640 \uc608\uc0b0\uc5d0 \ub9de\ucd98 \ub2e4\uc591\ud55c \ud328\ud0a4\uc9c0\ub97c \uc81c\uacf5\ud558\uc5ec \uace0\uac1d\uc774 \ucd5c\uc801\uc758 \uac00\uce58\ub97c \uc5bb\uc744 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.",
                                }),
                                (0, N.jsx)("p", {
                                  className: "content__title",
                                  children:
                                    "\uccb4\uacc4\uc801\uc778 \ud648\ud398\uc774\uc9c0 \uac1c\ubc1c",
                                }),
                                (0, N.jsx)("p", {
                                  className: "content__desc",
                                  children:
                                    "\ud504\ub85c\uc81d\ud2b8\uc758 \ucd08\uae30 \ub2e8\uacc4\uc5d0\uc11c\ubd80\ud130 \uc885\ub8cc\uae4c\uc9c0 \uccb4\uacc4\uc801\uc778 \uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\ub97c \ub530\ub985\ub2c8\ub2e4. \uc694\uad6c \uc0ac\ud56d \uc218\uc9d1, \uc124\uacc4, \uac1c\ubc1c, \ud14c\uc2a4\ud305, \ubc30\ud3ec\uc5d0 \uc774\ub974\uae30\uae4c\uc9c0 \ubaa8\ub4e0 \ub2e8\uacc4\ub294 \uba85\ud655\ud55c \ub85c\ub4dc\ub9f5\uc5d0 \ub530\ub77c \uc9c4\ud589\ub418\uba70, \uc774\ub97c \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\uc758 \ud22c\uba85\uc131\uacfc \uc608\uce21 \uac00\ub2a5\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc811\uadfc \ubc29\uc2dd\uc740 \uc624\ub958\ub97c \ucd5c\uc18c\ud654\ud558\uace0, \ud504\ub85c\uc81d\ud2b8\uc758 \uc2dc\uac04\uacfc \ube44\uc6a9\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.",
                                }),
                              ],
                            }),
                            (0, N.jsxs)("div", {
                              className: "content",
                              children: [
                                (0, N.jsx)("p", {
                                  className: "content__title",
                                  children:
                                    "\ubc18\uc751\ud615 \uc6f9 \uc0ac\uc774\ud2b8 \uc81c\uc791",
                                }),
                                (0, N.jsx)("p", {
                                  className: "content__desc",
                                  children:
                                    "Orbitcode\ub294 \ubaa8\ub4e0 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc644\ubcbd\ud558\uac8c \uc791\ub3d9\ud558\ub294 \ubc18\uc751\ud615 \uc6f9 \uc0ac\uc774\ud2b8\ub97c \uc81c\uc791\ud569\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8\ud3f0, \ud0dc\ube14\ub9bf, \ub370\uc2a4\ud06c\ud0d1 \ub4f1 \ub2e4\uc591\ud55c \ud654\uba74 \ud06c\uae30\uc5d0 \ub9de\ucd94\uc5b4 \ucd5c\uc801\ud654\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\ubbc0\ub85c \ubc29\ubb38\uc790\ub294 \uc5b4\ub5a4 \uae30\uae30\ub97c \uc0ac\uc6a9\ud558\ub4e0 \uc77c\uad00\ub41c \ud488\uc9c8\uc758 \ub0b4\uc6a9\uc744 \uacbd\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc0ac\uc6a9\uc790 \ub9cc\uc871\ub3c4\ub97c \ub192\uc774\uace0, \uad6c\uae00 \ub4f1 \uac80\uc0c9 \uc5d4\uc9c4\uc5d0\uc11c\uc758 \ub354 \ub192\uc740 \ub7ad\ud0b9\uc744 \ud655\ubcf4\ud560 \uc218 \uc788\ub294 \uae30\ubc18\uc774 \ub429\ub2c8\ub2e4.",
                                }),
                              ],
                            }),
                            (0, N.jsxs)("div", {
                              className: "content",
                              children: [
                                (0, N.jsx)("p", {
                                  className: "content__title",
                                  children:
                                    "\ub9de\ucda4\ud615 \ub514\uc790\uc778",
                                }),
                                (0, N.jsx)("p", {
                                  className: "content__desc",
                                  children:
                                    "Orbitcode\ub294 \uace0\uac1d\uc758 \ube0c\ub79c\ub529\uacfc \ubaa9\ud45c\uc5d0 \ub9de\ucdb0 \ud2b9\ud654\ub41c \ub514\uc790\uc778\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ud15c\ud50c\ub9bf\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\ub294 \uc804\uc801\uc73c\ub85c \ub9de\ucda4\ud654\ub41c \ub514\uc790\uc778\uc740 \uac01 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \ub3c5\ud2b9\ud55c \uc694\uad6c\uc640 \uac1c\uc131\uc744 \ubc18\uc601\ud569\ub2c8\ub2e4. \uc774\ub294 \ube0c\ub79c\ub4dc\uc758 \ub3c5\ucc3d\uc131\uc744 \uac15\uc870\ud558\uace0, \ubc29\ubb38\uc790\uc5d0\uac8c \uac15\ub82c\ud558\uace0 \uae30\uc5b5\uc5d0 \ub0a8\ub294 \uccab\uc778\uc0c1\uc744 \uc81c\uacf5\ud558\ub294 \ub370 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4.",
                                }),
                              ],
                            }),
                            (0, N.jsxs)("div", {
                              className: "content",
                              children: [
                                (0, N.jsx)("p", {
                                  className: "content__title",
                                  children:
                                    "\uc11c\ube44\uc2a4 \ud658\uacbd \uad6c\ucd95",
                                }),
                                (0, N.jsx)("p", {
                                  className: "content__desc",
                                  children:
                                    "\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud544\uc694\ub85c \ud558\ub294 \ubaa8\ub4e0 \uc11c\ube44\uc2a4 \ud658\uacbd\uc744 \uad6c\ucd95\ud569\ub2c8\ub2e4. \uc774\ub294 \uc6f9 \ud638\uc2a4\ud305, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uad00\ub9ac, \ubc31\uc5d4\ub4dc \ub85c\uc9c1 \uad6c\ud604 \ub4f1\uc744 \ud3ec\ud568\ud558\uba70, \uc548\uc815\uc801\uc774\uace0 \ud655\uc7a5 \uac00\ub2a5\ud55c \uc778\ud504\ub77c \uc704\uc5d0 \uad6c\ucd95\ub429\ub2c8\ub2e4. Orbitcode\ub294 \ucd5c\uc2e0 \ud074\ub77c\uc6b0\ub4dc \uae30\uc220\uacfc \uc11c\ubc84\ub9ac\uc2a4 \uc544\ud0a4\ud14d\ucc98\ub97c \ud65c\uc6a9\ud558\uc5ec \uace0\uc131\ub2a5, \uace0\uac00\uc6a9\uc131\uc758 \uc6f9 \uc194\ub8e8\uc158\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, N.jsx)("section", {
                  id: "projects",
                  ref: e[2].ref,
                  children: (0, N.jsxs)("div", {
                    className: "section__container",
                    children: [
                      (0, N.jsxs)("div", {
                        className: "sub__title",
                        children: [
                          (0, N.jsx)("span", { children: "<" }),
                          (0, N.jsx)("p", { children: "Projects" }),
                          (0, N.jsx)("span", { children: "/>" }),
                        ],
                      }),
                      (0, N.jsx)("div", {
                        className: "project__content",
                        children: (0, N.jsx)(wt, {
                          slidesPerView: "auto",
                          grid: { rows: 2, fill: "row" },
                          spaceBetween: 20,
                          pagination: { clickable: !0 },
                          modules: [kt, Ct],
                          breakpoints: {
                            768: {
                              slidesPerView: 2,
                              grid: { rows: 2, fill: "row" },
                            },
                            1024: {
                              slidesPerView: 3,
                              grid: { rows: 2, fill: "row" },
                            },
                          },
                          className: "mySwiper",
                          children: new Array(10).fill(1).map((e, t) =>
                            (0, N.jsxs)(
                              St,
                              {
                                className: "content",
                                children: [
                                  (0, N.jsxs)("div", {
                                    className: "content__title",
                                    children: [
                                      (0, N.jsxs)("div", {
                                        className: "left",
                                        children: [
                                          (0, N.jsx)(f, {
                                            width: 22,
                                            height: 22,
                                            fill: "white",
                                          }),
                                          (0, N.jsx)("p", {
                                            children: "project name",
                                          }),
                                        ],
                                      }),
                                      (0, N.jsxs)("div", {
                                        className: "right",
                                        children: [
                                          (0, N.jsx)(v, {
                                            width: 24,
                                            height: 24,
                                          }),
                                          (0, N.jsx)(S, { width: 16 }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, N.jsx)("div", {
                                    className: "content__desc",
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, N.jsxs)("section", {
                  id: "contact",
                  ref: e[3].ref,
                  children: [
                    (0, N.jsxs)("figure", {
                      className: "background__img",
                      children: [
                        (0, N.jsx)("div", {
                          id: "circle",
                          children: (0, N.jsx)("div", { id: "rect" }),
                        }),
                        (0, N.jsx)("img", {
                          id: "astronaut",
                          src: "assets/astronaut.png",
                          alt: "background",
                        }),
                        (0, N.jsx)("img", {
                          id: "bgContact",
                          src: "assets/contact.png",
                          alt: "background",
                        }),
                      ],
                    }),
                    (0, N.jsxs)("div", {
                      className: "section__container",
                      children: [
                        (0, N.jsxs)("div", {
                          className: "sub__title",
                          children: [
                            (0, N.jsx)("span", { children: "<" }),
                            (0, N.jsx)("p", { children: "Contact" }),
                            (0, N.jsx)("span", { children: "/>" }),
                          ],
                        }),
                        (0, N.jsx)("div", {
                          className: "contact__content",
                          children: (0, N.jsxs)("div", {
                            className: "email",
                            children: [
                              (0, N.jsx)("span", { children: "email" }),
                              "admin@orbitcode.kr",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsx)("footer", {
              children: (0, N.jsx)("div", {
                className: "footer",
                children: (0, N.jsx)("p", {
                  children:
                    "Copyright \xae2024 OrbitCode. All rights reserved.",
                }),
              }),
            }),
          ],
        });
      };
      const Tt = function () {
        return (0, N.jsx)("div", {
          className: "App",
          children: (0, N.jsx)(Et, {}),
        });
      };
      u.createRoot(document.getElementById("root")).render(
        (0, N.jsx)(s.StrictMode, { children: (0, N.jsx)(Tt, {}) })
      );
    })();
})();

//# sourceMappingURL=main.736755f4.js.map
