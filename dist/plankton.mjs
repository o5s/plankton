import * as fe from "react";
import Xr, { useLayoutEffect as Ya, useEffect as Jr, useRef as an, useReducer as qa, createElement as _t, useSyncExternalStore as za, useCallback as lo, useMemo as Xa, useState as Ja, useId as fn, Fragment as Za, createContext as Qa, useContext as es } from "react";
import { createPortal as ts, flushSync as ns } from "react-dom";
var jn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vr = { exports: {} }, Gt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;
function is() {
  if (Ii)
    return Gt;
  Ii = 1;
  var e = Xr, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(u, f, c) {
    var l, d = {}, v = null, g = null;
    c !== void 0 && (v = "" + c), f.key !== void 0 && (v = "" + f.key), f.ref !== void 0 && (g = f.ref);
    for (l in f)
      r.call(f, l) && !o.hasOwnProperty(l) && (d[l] = f[l]);
    if (u && u.defaultProps)
      for (l in f = u.defaultProps, f)
        d[l] === void 0 && (d[l] = f[l]);
    return { $$typeof: n, type: u, key: v, ref: g, props: d, _owner: i.current };
  }
  return Gt.Fragment = t, Gt.jsx = a, Gt.jsxs = a, Gt;
}
var Yt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function os() {
  return Ci || (Ci = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xr, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, y = "@@iterator";
    function T(h) {
      if (h === null || typeof h != "object")
        return null;
      var S = b && h[b] || h[y];
      return typeof S == "function" ? S : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(h) {
      {
        for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), j = 1; j < S; j++)
          _[j - 1] = arguments[j];
        L("error", h, _);
      }
    }
    function L(h, S, _) {
      {
        var j = C.ReactDebugCurrentFrame, J = j.getStackAddendum();
        J !== "" && (S += "%s", _ = _.concat([J]));
        var Y = _.map(function(q) {
          return String(q);
        });
        Y.unshift("Warning: " + S), Function.prototype.apply.call(console[h], console, Y);
      }
    }
    var V = !1, B = !1, F = !1, O = !1, I = !1, w;
    w = Symbol.for("react.module.reference");
    function P(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === o || I || h === i || h === c || h === l || O || h === g || V || B || F || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === d || h.$$typeof === a || h.$$typeof === u || h.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === w || h.getModuleId !== void 0));
    }
    function A(h, S, _) {
      var j = h.displayName;
      if (j)
        return j;
      var J = S.displayName || S.name || "";
      return J !== "" ? _ + "(" + J + ")" : _;
    }
    function M(h) {
      return h.displayName || "Context";
    }
    function U(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case u:
            var S = h;
            return M(S) + ".Consumer";
          case a:
            var _ = h;
            return M(_._context) + ".Provider";
          case f:
            return A(h, h.render, "ForwardRef");
          case d:
            var j = h.displayName || null;
            return j !== null ? j : U(h.type) || "Memo";
          case v: {
            var J = h, Y = J._payload, q = J._init;
            try {
              return U(q(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ne = 0, ee, ce, Re, Ae, Te, Ze, gt;
    function ht() {
    }
    ht.__reactDisabledLog = !0;
    function hr() {
      {
        if (ne === 0) {
          ee = console.log, ce = console.info, Re = console.warn, Ae = console.error, Te = console.group, Ze = console.groupCollapsed, gt = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: ht,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        ne++;
      }
    }
    function vr() {
      {
        if (ne--, ne === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, h, {
              value: ee
            }),
            info: X({}, h, {
              value: ce
            }),
            warn: X({}, h, {
              value: Re
            }),
            error: X({}, h, {
              value: Ae
            }),
            group: X({}, h, {
              value: Te
            }),
            groupCollapsed: X({}, h, {
              value: Ze
            }),
            groupEnd: X({}, h, {
              value: gt
            })
          });
        }
        ne < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $t = C.ReactCurrentDispatcher, Vt;
    function Z(h, S, _) {
      {
        if (Vt === void 0)
          try {
            throw Error();
          } catch (J) {
            var j = J.stack.trim().match(/\n( *(at )?)/);
            Vt = j && j[1] || "";
          }
        return `
` + Vt + h;
      }
    }
    var vt = !1, bt;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      bt = new Pe();
    }
    function Mt(h, S) {
      if (!h || vt)
        return "";
      {
        var _ = bt.get(h);
        if (_ !== void 0)
          return _;
      }
      var j;
      vt = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = $t.current, $t.current = null, hr();
      try {
        if (S) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (we) {
              j = we;
            }
            Reflect.construct(h, [], q);
          } else {
            try {
              q.call();
            } catch (we) {
              j = we;
            }
            h.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            j = we;
          }
          h();
        }
      } catch (we) {
        if (we && j && typeof we.stack == "string") {
          for (var K = we.stack.split(`
`), de = j.stack.split(`
`), ie = K.length - 1, ae = de.length - 1; ie >= 1 && ae >= 0 && K[ie] !== de[ae]; )
            ae--;
          for (; ie >= 1 && ae >= 0; ie--, ae--)
            if (K[ie] !== de[ae]) {
              if (ie !== 1 || ae !== 1)
                do
                  if (ie--, ae--, ae < 0 || K[ie] !== de[ae]) {
                    var se = `
` + K[ie].replace(" at new ", " at ");
                    return h.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", h.displayName)), typeof h == "function" && bt.set(h, se), se;
                  }
                while (ie >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        vt = !1, $t.current = Y, vr(), Error.prepareStackTrace = J;
      }
      var Be = h ? h.displayName || h.name : "", Pn = Be ? Z(Be) : "";
      return typeof h == "function" && bt.set(h, Pn), Pn;
    }
    function hn(h, S, _) {
      return Mt(h, !1);
    }
    function br(h) {
      var S = h.prototype;
      return !!(S && S.isReactComponent);
    }
    function Qe(h, S, _) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return Mt(h, br(h));
      if (typeof h == "string")
        return Z(h);
      switch (h) {
        case c:
          return Z("Suspense");
        case l:
          return Z("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case f:
            return hn(h.render);
          case d:
            return Qe(h.type, S, _);
          case v: {
            var j = h, J = j._payload, Y = j._init;
            try {
              return Qe(Y(J), S, _);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, jt = {}, vn = C.ReactDebugCurrentFrame;
    function yt(h) {
      if (h) {
        var S = h._owner, _ = Qe(h.type, h._source, S ? S.type : null);
        vn.setExtraStackFrame(_);
      } else
        vn.setExtraStackFrame(null);
    }
    function yr(h, S, _, j, J) {
      {
        var Y = Function.call.bind(et);
        for (var q in h)
          if (Y(h, q)) {
            var K = void 0;
            try {
              if (typeof h[q] != "function") {
                var de = Error((j || "React class") + ": " + _ + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              K = h[q](S, q, j, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              K = ie;
            }
            K && !(K instanceof Error) && (yt(J), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", _, q, typeof K), yt(null)), K instanceof Error && !(K.message in jt) && (jt[K.message] = !0, yt(J), E("Failed %s type: %s", _, K.message), yt(null));
          }
      }
    }
    var mr = Array.isArray;
    function Bt(h) {
      return mr(h);
    }
    function Er(h) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, _ = S && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return _;
      }
    }
    function Ht(h) {
      try {
        return bn(h), !1;
      } catch {
        return !0;
      }
    }
    function bn(h) {
      return "" + h;
    }
    function yn(h) {
      if (Ht(h))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(h)), bn(h);
    }
    var tt = C.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mn, nt, rt;
    rt = {};
    function En(h) {
      if (et.call(h, "ref")) {
        var S = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function On(h) {
      if (et.call(h, "key")) {
        var S = Object.getOwnPropertyDescriptor(h, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function be(h, S) {
      if (typeof h.ref == "string" && tt.current && S && tt.current.stateNode !== S) {
        var _ = U(tt.current.type);
        rt[_] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(tt.current.type), h.ref), rt[_] = !0);
      }
    }
    function Me(h, S) {
      {
        var _ = function() {
          mn || (mn = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Tr(h, S) {
      {
        var _ = function() {
          nt || (nt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Tn = function(h, S, _, j, J, Y, q) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: h,
        key: S,
        ref: _,
        props: q,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function wn(h, S, _, j, J) {
      {
        var Y, q = {}, K = null, de = null;
        _ !== void 0 && (yn(_), K = "" + _), On(S) && (yn(S.key), K = "" + S.key), En(S) && (de = S.ref, be(S, J));
        for (Y in S)
          et.call(S, Y) && !Or.hasOwnProperty(Y) && (q[Y] = S[Y]);
        if (h && h.defaultProps) {
          var ie = h.defaultProps;
          for (Y in ie)
            q[Y] === void 0 && (q[Y] = ie[Y]);
        }
        if (K || de) {
          var ae = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          K && Me(q, ae), de && Tr(q, ae);
        }
        return Tn(h, K, de, J, j, tt.current, q);
      }
    }
    var Ut = C.ReactCurrentOwner, In = C.ReactDebugCurrentFrame;
    function je(h) {
      if (h) {
        var S = h._owner, _ = Qe(h.type, h._source, S ? S.type : null);
        In.setExtraStackFrame(_);
      } else
        In.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function Le(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function mt() {
      {
        if (Ut.current) {
          var h = U(Ut.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Wt(h) {
      {
        if (h !== void 0) {
          var S = h.fileName.replace(/^.*[\\\/]/, ""), _ = h.lineNumber;
          return `

Check your code at ` + S + ":" + _ + ".";
        }
        return "";
      }
    }
    var Et = {};
    function ot(h) {
      {
        var S = mt();
        if (!S) {
          var _ = typeof h == "string" ? h : h.displayName || h.name;
          _ && (S = `

Check the top-level render call using <` + _ + ">.");
        }
        return S;
      }
    }
    function Cn(h, S) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var _ = ot(S);
        if (Et[_])
          return;
        Et[_] = !0;
        var j = "";
        h && h._owner && h._owner !== Ut.current && (j = " It was passed a child from " + U(h._owner.type) + "."), je(h), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, j), je(null);
      }
    }
    function Sn(h, S) {
      {
        if (typeof h != "object")
          return;
        if (Bt(h))
          for (var _ = 0; _ < h.length; _++) {
            var j = h[_];
            Le(j) && Cn(j, S);
          }
        else if (Le(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var J = T(h);
          if (typeof J == "function" && J !== h.entries)
            for (var Y = J.call(h), q; !(q = Y.next()).done; )
              Le(q.value) && Cn(q.value, S);
        }
      }
    }
    function wr(h) {
      {
        var S = h.type;
        if (S == null || typeof S == "string")
          return;
        var _;
        if (typeof S == "function")
          _ = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === d))
          _ = S.propTypes;
        else
          return;
        if (_) {
          var j = U(S);
          yr(_, h.props, "prop", j, h);
        } else if (S.PropTypes !== void 0 && !it) {
          it = !0;
          var J = U(S);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ir(h) {
      {
        for (var S = Object.keys(h.props), _ = 0; _ < S.length; _++) {
          var j = S[_];
          if (j !== "children" && j !== "key") {
            je(h), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), je(null);
            break;
          }
        }
        h.ref !== null && (je(h), E("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function Rn(h, S, _, j, J, Y) {
      {
        var q = P(h);
        if (!q) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Wt(J);
          de ? K += de : K += mt();
          var ie;
          h === null ? ie = "null" : Bt(h) ? ie = "array" : h !== void 0 && h.$$typeof === n ? (ie = "<" + (U(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof h, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, K);
        }
        var ae = wn(h, S, _, J, Y);
        if (ae == null)
          return ae;
        if (q) {
          var se = S.children;
          if (se !== void 0)
            if (j)
              if (Bt(se)) {
                for (var Be = 0; Be < se.length; Be++)
                  Sn(se[Be], h);
                Object.freeze && Object.freeze(se);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sn(se, h);
        }
        return h === r ? Ir(ae) : wr(ae), ae;
      }
    }
    function Ot(h, S, _) {
      return Rn(h, S, _, !0);
    }
    function Kt(h, S, _) {
      return Rn(h, S, _, !1);
    }
    var An = Kt, xe = Ot;
    Yt.Fragment = r, Yt.jsx = An, Yt.jsxs = xe;
  }()), Yt;
}
process.env.NODE_ENV === "production" ? Vr.exports = is() : Vr.exports = os();
var W = Vr.exports, Ye = (e, n = []) => ({
  parts: (...t) => {
    if (as(n))
      return Ye(e, t);
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...t) => Ye(e, [...n, ...t]),
  rename: (t) => Ye(t, n),
  build: () => [...new Set(n)].reduce(
    (t, r) => Object.assign(t, {
      [r]: {
        selector: [
          `&[data-scope="${wt(e)}"][data-part="${wt(r)}"]`,
          `& [data-scope="${wt(e)}"][data-part="${wt(r)}"]`
        ].join(", "),
        attrs: { "data-scope": wt(e), "data-part": wt(r) }
      }
    }),
    {}
  )
}), wt = (e) => e.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), as = (e) => e.length === 0, ss = Ye("combobox").parts(
  "root",
  "label",
  "input",
  "positioner",
  "control",
  "trigger",
  "content",
  "clearTrigger",
  "option",
  "optionGroup"
), _e = ss.build();
function Mr(e) {
  const n = /* @__PURE__ */ new Set();
  function t(r) {
    const i = globalThis.requestAnimationFrame(r);
    n.add(() => globalThis.cancelAnimationFrame(i));
  }
  return t(() => t(e)), function() {
    n.forEach((i) => i());
  };
}
function re(e) {
  const n = globalThis.requestAnimationFrame(e);
  return () => {
    globalThis.cancelAnimationFrame(n);
  };
}
function Xn(e) {
  var n;
  return ((n = e.composedPath) == null ? void 0 : n.call(e)[0]) ?? e.target;
}
function Dt(e) {
  return typeof e == "object" && (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE && typeof (e == null ? void 0 : e.nodeName) == "string";
}
function cs(e) {
  if (e == null || !Dt(e))
    return !1;
  try {
    const n = e.ownerDocument.defaultView || window;
    return e instanceof n.HTMLInputElement && e.selectionStart != null || /(textarea|select)/.test(e.localName) || e.isContentEditable;
  } catch {
    return !1;
  }
}
var Zr = () => typeof window < "u";
function ls() {
  const e = navigator.userAgentData;
  return (e == null ? void 0 : e.platform) ?? navigator.platform;
}
var uo = (e) => Zr() && e.test(ls()), us = (e) => Zr() && e.test(navigator.vendor), ds = () => Zr() && !!navigator.maxTouchPoints, fs = () => uo(/^Mac/) && !ds(), ps = () => fo() && us(/apple/i), fo = () => uo(/mac|iphone|ipad|ipod/i), gs = () => fo() && !fs();
function Qr(e, n) {
  return Array.from((e == null ? void 0 : e.querySelectorAll(n)) ?? []);
}
function Si(e, n) {
  return e == null ? void 0 : e.querySelector(n);
}
var z = (e) => e ? "" : void 0, po = (e) => e ? "true" : void 0;
function sn(e, n) {
  return !e || !n || !Dt(e) || !Dt(n) ? !1 : e === n || e.contains(n);
}
var hs = (e) => e.nodeType === Node.DOCUMENT_NODE ? e : e.ownerDocument ?? document;
function pn(e) {
  const n = {
    getRootNode: (t) => {
      var r;
      return ((r = t.getRootNode) == null ? void 0 : r.call(t)) ?? document;
    },
    getDoc: (t) => hs(n.getRootNode(t)),
    getWin: (t) => n.getDoc(t).defaultView ?? window,
    getActiveElement: (t) => n.getDoc(t).activeElement,
    getById: (t, r) => n.getRootNode(t).getElementById(r),
    queryById: (t, r) => {
      const i = n.getById(t, r);
      if (!i)
        throw new Error(`Element with id "${r}" not found.`);
      return i;
    }
  };
  return { ...n, ...e };
}
var vs = (e) => e.nodeType === Node.DOCUMENT_NODE;
function ei(e) {
  return vs(e) ? e : (e == null ? void 0 : e.ownerDocument) ?? document;
}
function bs(e) {
  return (e == null ? void 0 : e.ownerDocument.defaultView) ?? window;
}
function go(e, n) {
  return e.find((t) => t.id === n);
}
function ti(e, n) {
  const t = go(e, n);
  return t ? e.indexOf(t) : -1;
}
function ni(e, n, t = !0) {
  let r = ti(e, n);
  return r = t ? (r + 1) % e.length : Math.min(r + 1, e.length - 1), e[r];
}
function ri(e, n, t = !0) {
  let r = ti(e, n);
  return r === -1 ? t ? e[e.length - 1] : null : (r = t ? (r - 1 + e.length) % e.length : Math.max(0, r - 1), e[r]);
}
var ys = (e) => e.dataset.valuetext ?? e.textContent ?? "", ms = (e, n) => e.toLowerCase().startsWith(n.toLowerCase()), Es = (e, n) => e.map((t, r) => e[(Math.max(n, 0) + r) % e.length]);
function Os(e, n, t) {
  const r = t ? ti(e, t) : -1;
  let i = t ? Es(e, r) : e;
  return n.length === 1 && (i = i.filter((a) => a.id !== t)), i.find((a) => ms(ys(a), n));
}
function Ts(e, n) {
  const { state: t, activeId: r, key: i, timeout: o = 350 } = n, a = t.keysSoFar + i, f = a.length > 1 && Array.from(a).every((g) => g === a[0]) ? a[0] : a;
  let c = e.slice();
  const l = Os(c, f, r);
  function d() {
    clearTimeout(t.timer), t.timer = -1;
  }
  function v(g) {
    t.keysSoFar = g, d(), g !== "" && (t.timer = +setTimeout(() => {
      v(""), d();
    }, o));
  }
  return v(a), l;
}
var Jn = /* @__PURE__ */ Object.assign(Ts, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: ws
});
function ws(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
var Is = 2147483647, ho = (e) => e[0], vo = (e) => e[e.length - 1], Zn = (e, ...n) => (typeof e == "function" ? e(...n) : e) ?? void 0, jr = (...e) => (...n) => {
  e.forEach(function(t) {
    t == null || t(...n);
  });
}, Cs = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (e++, e.toString(36));
})(), Ss = (e) => Array.isArray(e), Rs = (e) => !(e == null || typeof e != "object" || Ss(e));
function pt(e) {
  if (!As(e) || e === void 0)
    return e;
  const n = Reflect.ownKeys(e).filter((r) => typeof r == "string"), t = {};
  for (const r of n) {
    const i = e[r];
    i !== void 0 && (t[r] = pt(i));
  }
  return t;
}
function Ri(e) {
  return JSON.parse(JSON.stringify(e));
}
var As = (e) => e && typeof e == "object" && e.constructor === Object;
function Ps(...e) {
  const n = e.length === 1 ? e[0] : e[1];
  (e.length === 2 ? e[0] : !0) && process.env.NODE_ENV !== "production" && console.warn(n);
}
var D = pn({
  getRootId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.root) ?? `combobox:${e.id}`;
  },
  getLabelId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.label) ?? `combobox:${e.id}:label`;
  },
  getControlId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.control) ?? `combobox:${e.id}:control`;
  },
  getInputId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.input) ?? `combobox:${e.id}:input`;
  },
  getContentId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.content) ?? `combobox:${e.id}:listbox`;
  },
  getPositionerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.positioner) ?? `combobox:${e.id}:popper`;
  },
  getTriggerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.trigger) ?? `combobox:${e.id}:toggle-btn`;
  },
  getClearTriggerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.clearTrigger) ?? `combobox:${e.id}:clear-btn`;
  },
  getOptionId: (e, n, t) => {
    var r, i;
    return ((i = (r = e.ids) == null ? void 0 : r.option) == null ? void 0 : i.call(r, n, t)) ?? [`combobox:${e.id}:option:${n}`, t].filter((o) => o != null).join(":");
  },
  getActiveOptionEl: (e) => e.focusedId ? D.getById(e, e.focusedId) : null,
  getContentEl: (e) => D.getById(e, D.getContentId(e)),
  getInputEl: (e) => D.getById(e, D.getInputId(e)),
  getPositionerEl: (e) => D.getById(e, D.getPositionerId(e)),
  getControlEl: (e) => D.getById(e, D.getControlId(e)),
  getTriggerEl: (e) => D.getById(e, D.getTriggerId(e)),
  getClearTriggerEl: (e) => D.getById(e, D.getClearTriggerId(e)),
  getElements: (e) => Qr(D.getContentEl(e), "[role=option]:not([aria-disabled=true])"),
  getFocusedOptionEl: (e) => {
    var t;
    if (!e.focusedId)
      return null;
    const n = `[role=option][id=${CSS.escape(e.focusedId)}]`;
    return (t = D.getContentEl(e)) == null ? void 0 : t.querySelector(n);
  },
  getFirstEl: (e) => ho(D.getElements(e)),
  getLastEl: (e) => vo(D.getElements(e)),
  getPrevEl: (e, n) => ri(D.getElements(e), n, e.loop),
  getNextEl: (e, n) => ni(D.getElements(e), n, e.loop),
  isInputFocused: (e) => D.getDoc(e).activeElement === D.getInputEl(e),
  getOptionData: (e) => ({
    value: (e == null ? void 0 : e.getAttribute("data-value")) ?? "",
    label: (e == null ? void 0 : e.getAttribute("data-label")) ?? ""
  }),
  getOptionCount: (e) => {
    var r;
    const n = D.getContentEl(e), t = (r = n == null ? void 0 : n.querySelector("[role=option]")) == null ? void 0 : r.getAttribute("aria-setsize");
    return t != null ? parseInt(t) : (n == null ? void 0 : n.querySelectorAll("[role=option]").length) ?? 0;
  },
  getMatchingOptionEl: (e, n) => {
    if (!n)
      return null;
    const t = `[role=option][data-value="${CSS.escape(n)}"`, r = D.getContentEl(e);
    return r ? r.querySelector(t) : null;
  },
  focusInput: (e) => {
    const n = D.getInputEl(e);
    D.getDoc(e).activeElement !== n && (n == null || n.focus()), e.selectInputOnFocus && (n == null || n.select());
  },
  getClosestSectionLabel(e) {
    var t;
    if (!e.focusedId)
      return;
    const n = (t = D.getActiveOptionEl(e)) == null ? void 0 : t.closest("[data-part=option-group]");
    return n == null ? void 0 : n.getAttribute("aria-label");
  },
  getValueLabel: (e, n) => {
    const t = D.getMatchingOptionEl(e, n);
    return D.getOptionData(t).label;
  }
}), Qn = (e, n, t, r) => {
  const i = typeof e == "function" ? e() : e;
  return i == null || i.addEventListener(n, t, r), () => {
    i == null || i.removeEventListener(n, t, r);
  };
}, Ai = (e) => e.button === 0, _s = (e) => e.button === 2 || Ls(e) && e.button === 0, Ds = () => /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), Ls = (e) => Ds() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
function Pi(e, n, t) {
  if (!e)
    return;
  const r = e.ownerDocument.defaultView || window, i = new r.CustomEvent(n, t);
  return e.dispatchEvent(i);
}
var xs = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Esc: "Escape",
  " ": "Space",
  ",": "Comma",
  Left: "ArrowLeft",
  Right: "ArrowRight"
}, _i = {
  ArrowLeft: "ArrowRight",
  ArrowRight: "ArrowLeft"
};
function er(e, n = {}) {
  const { dir: t = "ltr", orientation: r = "horizontal" } = n;
  let { key: i } = e;
  return i = xs[i] ?? i, t === "rtl" && r === "horizontal" && i in _i && (i = _i[i]), i;
}
function Bn(e) {
  return e.nativeEvent ?? e;
}
function xt(e) {
  return e.split("-")[1];
}
function ii(e) {
  return e === "y" ? "height" : "width";
}
function qe(e) {
  return e.split("-")[0];
}
function Nt(e) {
  return ["top", "bottom"].includes(qe(e)) ? "x" : "y";
}
function Di(e, n, t) {
  let { reference: r, floating: i } = e;
  const o = r.x + r.width / 2 - i.width / 2, a = r.y + r.height / 2 - i.height / 2, u = Nt(n), f = ii(u), c = r[f] / 2 - i[f] / 2, l = u === "x";
  let d;
  switch (qe(n)) {
    case "top":
      d = { x: o, y: r.y - i.height };
      break;
    case "bottom":
      d = { x: o, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: a };
      break;
    case "left":
      d = { x: r.x - i.width, y: a };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (xt(n)) {
    case "start":
      d[u] -= c * (t && l ? -1 : 1);
      break;
    case "end":
      d[u] += c * (t && l ? -1 : 1);
  }
  return d;
}
const Ns = async (e, n, t) => {
  const { placement: r = "bottom", strategy: i = "absolute", middleware: o = [], platform: a } = t, u = o.filter(Boolean), f = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let c = await a.getElementRects({ reference: e, floating: n, strategy: i }), { x: l, y: d } = Di(c, r, f), v = r, g = {}, b = 0;
  for (let y = 0; y < u.length; y++) {
    const { name: T, fn: C } = u[y], { x: E, y: L, data: V, reset: B } = await C({ x: l, y: d, initialPlacement: r, placement: v, strategy: i, middlewareData: g, rects: c, platform: a, elements: { reference: e, floating: n } });
    l = E ?? l, d = L ?? d, g = { ...g, [T]: { ...g[T], ...V } }, B && b <= 50 && (b++, typeof B == "object" && (B.placement && (v = B.placement), B.rects && (c = B.rects === !0 ? await a.getElementRects({ reference: e, floating: n, strategy: i }) : B.rects), { x: l, y: d } = Di(c, v, f)), y = -1);
  }
  return { x: l, y: d, placement: v, strategy: i, middlewareData: g };
};
function bo(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function tr(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function oi(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: r, y: i, platform: o, rects: a, elements: u, strategy: f } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: d = "floating", altBoundary: v = !1, padding: g = 0 } = n, b = bo(g), y = u[v ? d === "floating" ? "reference" : "floating" : d], T = tr(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(y))) == null || t ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(u.floating)), boundary: c, rootBoundary: l, strategy: f })), C = d === "floating" ? { ...a.floating, x: r, y: i } : a.reference, E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u.floating)), L = await (o.isElement == null ? void 0 : o.isElement(E)) && await (o.getScale == null ? void 0 : o.getScale(E)) || { x: 1, y: 1 }, V = tr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: C, offsetParent: E, strategy: f }) : C);
  return { top: (T.top - V.top + b.top) / L.y, bottom: (V.bottom - T.bottom + b.bottom) / L.y, left: (T.left - V.left + b.left) / L.x, right: (V.right - T.right + b.right) / L.x };
}
const Br = Math.min, lt = Math.max;
function Hr(e, n, t) {
  return lt(e, Br(n, t));
}
const ks = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: r = 0 } = e || {}, { x: i, y: o, placement: a, rects: u, platform: f, elements: c } = n;
  if (t == null)
    return {};
  const l = bo(r), d = { x: i, y: o }, v = Nt(a), g = ii(v), b = await f.getDimensions(t), y = v === "y", T = y ? "top" : "left", C = y ? "bottom" : "right", E = y ? "clientHeight" : "clientWidth", L = u.reference[g] + u.reference[v] - d[v] - u.floating[g], V = d[v] - u.reference[v], B = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(t));
  let F = B ? B[E] : 0;
  F && await (f.isElement == null ? void 0 : f.isElement(B)) || (F = c.floating[E] || u.floating[g]);
  const O = L / 2 - V / 2, I = l[T], w = F - b[g] - l[C], P = F / 2 - b[g] / 2 + O, A = Hr(I, P, w), M = xt(a) != null && P != A && u.reference[g] / 2 - (P < I ? l[T] : l[C]) - b[g] / 2 < 0;
  return { [v]: d[v] - (M ? P < I ? I - P : w - P : 0), data: { [v]: A, centerOffset: P - A } };
} }), Fs = ["top", "right", "bottom", "left"];
Fs.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const $s = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nr(e) {
  return e.replace(/left|right|bottom|top/g, (n) => $s[n]);
}
function Vs(e, n, t) {
  t === void 0 && (t = !1);
  const r = xt(e), i = Nt(e), o = ii(i);
  let a = i === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (a = nr(a)), { main: a, cross: nr(a) };
}
const Ms = { start: "end", end: "start" };
function _r(e) {
  return e.replace(/start|end/g, (n) => Ms[n]);
}
const js = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: r, middlewareData: i, rects: o, initialPlacement: a, platform: u, elements: f } = n, { mainAxis: c = !0, crossAxis: l = !0, fallbackPlacements: d, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: g = "none", flipAlignment: b = !0, ...y } = e, T = qe(r), C = qe(a) === a, E = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), L = d || (C || !b ? [nr(a)] : function(A) {
      const M = nr(A);
      return [_r(A), M, _r(M)];
    }(a));
    d || g === "none" || L.push(...function(A, M, U, X) {
      const ne = xt(A);
      let ee = function(ce, Re, Ae) {
        const Te = ["left", "right"], Ze = ["right", "left"], gt = ["top", "bottom"], ht = ["bottom", "top"];
        switch (ce) {
          case "top":
          case "bottom":
            return Ae ? Re ? Ze : Te : Re ? Te : Ze;
          case "left":
          case "right":
            return Re ? gt : ht;
          default:
            return [];
        }
      }(qe(A), U === "start", X);
      return ne && (ee = ee.map((ce) => ce + "-" + ne), M && (ee = ee.concat(ee.map(_r)))), ee;
    }(a, b, g, E));
    const V = [a, ...L], B = await oi(n, y), F = [];
    let O = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (c && F.push(B[T]), l) {
      const { main: A, cross: M } = Vs(r, o, E);
      F.push(B[A], B[M]);
    }
    if (O = [...O, { placement: r, overflows: F }], !F.every((A) => A <= 0)) {
      var I, w;
      const A = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = V[A];
      if (M)
        return { data: { index: A, overflows: O }, reset: { placement: M } };
      let U = (w = O.filter((X) => X.overflows[0] <= 0).sort((X, ne) => X.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : w.placement;
      if (!U)
        switch (v) {
          case "bestFit": {
            var P;
            const X = (P = O.map((ne) => [ne.placement, ne.overflows.filter((ee) => ee > 0).reduce((ee, ce) => ee + ce, 0)]).sort((ne, ee) => ne[1] - ee[1])[0]) == null ? void 0 : P[0];
            X && (U = X);
            break;
          }
          case "initialPlacement":
            U = a;
        }
      if (r !== U)
        return { reset: { placement: U } };
    }
    return {};
  } };
}, Bs = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: r } = n, i = await async function(o, a) {
      const { placement: u, platform: f, elements: c } = o, l = await (f.isRTL == null ? void 0 : f.isRTL(c.floating)), d = qe(u), v = xt(u), g = Nt(u) === "x", b = ["left", "top"].includes(d) ? -1 : 1, y = l && g ? -1 : 1, T = typeof a == "function" ? a(o) : a;
      let { mainAxis: C, crossAxis: E, alignmentAxis: L } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return v && typeof L == "number" && (E = v === "end" ? -1 * L : L), g ? { x: E * y, y: C * b } : { x: C * b, y: E * y };
    }(n, e);
    return { x: t + i.x, y: r + i.y, data: i };
  } };
};
function Hs(e) {
  return e === "x" ? "y" : "x";
}
const Us = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(n) {
    const { x: t, y: r, placement: i } = n, { mainAxis: o = !0, crossAxis: a = !1, limiter: u = { fn: (T) => {
      let { x: C, y: E } = T;
      return { x: C, y: E };
    } }, ...f } = e, c = { x: t, y: r }, l = await oi(n, f), d = Nt(qe(i)), v = Hs(d);
    let g = c[d], b = c[v];
    if (o) {
      const T = d === "y" ? "bottom" : "right";
      g = Hr(g + l[d === "y" ? "top" : "left"], g, g - l[T]);
    }
    if (a) {
      const T = v === "y" ? "bottom" : "right";
      b = Hr(b + l[v === "y" ? "top" : "left"], b, b - l[T]);
    }
    const y = u.fn({ ...n, [d]: g, [v]: b });
    return { ...y, data: { x: y.x - t, y: y.y - r } };
  } };
}, Ws = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(n) {
    const { placement: t, rects: r, platform: i, elements: o } = n, { apply: a = () => {
    }, ...u } = e, f = await oi(n, u), c = qe(t), l = xt(t), d = Nt(t) === "x", { width: v, height: g } = r.floating;
    let b, y;
    c === "top" || c === "bottom" ? (b = c, y = l === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (y = c, b = l === "end" ? "top" : "bottom");
    const T = g - f[b], C = v - f[y], E = !n.middlewareData.shift;
    let L = T, V = C;
    if (d) {
      const F = v - f.left - f.right;
      V = l || E ? Br(C, F) : F;
    } else {
      const F = g - f.top - f.bottom;
      L = l || E ? Br(T, F) : F;
    }
    if (E && !l) {
      const F = lt(f.left, 0), O = lt(f.right, 0), I = lt(f.top, 0), w = lt(f.bottom, 0);
      d ? V = v - 2 * (F !== 0 || O !== 0 ? F + O : lt(f.left, f.right)) : L = g - 2 * (I !== 0 || w !== 0 ? I + w : lt(f.top, f.bottom));
    }
    await a({ ...n, availableWidth: V, availableHeight: L });
    const B = await i.getDimensions(o.floating);
    return v !== B.width || g !== B.height ? { reset: { rects: !0 } } : {};
  } };
};
function ve(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ce(e) {
  return ve(e).getComputedStyle(e);
}
function yo(e) {
  return e instanceof ve(e).Node;
}
function Xe(e) {
  return yo(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Hn;
function mo() {
  if (Hn)
    return Hn;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Hn = e.brands.map((n) => n.brand + "/" + n.version).join(" "), Hn) : navigator.userAgent;
}
function Se(e) {
  return e instanceof ve(e).HTMLElement;
}
function Ve(e) {
  return e instanceof ve(e).Element;
}
function Li(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ve(e).ShadowRoot || e instanceof ShadowRoot;
}
function cn(e) {
  const { overflow: n, overflowX: t, overflowY: r, display: i } = Ce(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !["inline", "contents"].includes(i);
}
function Ks(e) {
  return ["table", "td", "th"].includes(Xe(e));
}
function Ur(e) {
  const n = /firefox/i.test(mo()), t = Ce(e), r = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!r && r !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Wr() {
  return /^((?!chrome|android).)*safari/i.test(mo());
}
function pr(e) {
  return ["html", "body", "#document"].includes(Xe(e));
}
const xi = Math.min, tn = Math.max, rr = Math.round;
function Eo(e) {
  const n = Ce(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const i = Se(e), o = i ? e.offsetWidth : t, a = i ? e.offsetHeight : r, u = rr(t) !== o || rr(r) !== a;
  return u && (t = o, r = a), { width: t, height: r, fallback: u };
}
function Oo(e) {
  return Ve(e) ? e : e.contextElement;
}
const To = { x: 1, y: 1 };
function Pt(e) {
  const n = Oo(e);
  if (!Se(n))
    return To;
  const t = n.getBoundingClientRect(), { width: r, height: i, fallback: o } = Eo(n);
  let a = (o ? rr(t.width) : t.width) / r, u = (o ? rr(t.height) : t.height) / i;
  return a && Number.isFinite(a) || (a = 1), u && Number.isFinite(u) || (u = 1), { x: a, y: u };
}
function ln(e, n, t, r) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const a = e.getBoundingClientRect(), u = Oo(e);
  let f = To;
  n && (r ? Ve(r) && (f = Pt(r)) : f = Pt(e));
  const c = u ? ve(u) : window, l = Wr() && t;
  let d = (a.left + (l && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / f.x, v = (a.top + (l && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / f.y, g = a.width / f.x, b = a.height / f.y;
  if (u) {
    const y = ve(u), T = r && Ve(r) ? ve(r) : r;
    let C = y.frameElement;
    for (; C && r && T !== y; ) {
      const E = Pt(C), L = C.getBoundingClientRect(), V = getComputedStyle(C);
      L.x += (C.clientLeft + parseFloat(V.paddingLeft)) * E.x, L.y += (C.clientTop + parseFloat(V.paddingTop)) * E.y, d *= E.x, v *= E.y, g *= E.x, b *= E.y, d += L.x, v += L.y, C = ve(C).frameElement;
    }
  }
  return tr({ width: g, height: b, x: d, y: v });
}
function ze(e) {
  return ((yo(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function gr(e) {
  return Ve(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function wo(e) {
  return ln(ze(e)).left + gr(e).scrollLeft;
}
function Lt(e) {
  if (Xe(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || Li(e) && e.host || ze(e);
  return Li(n) ? n.host : n;
}
function Io(e) {
  const n = Lt(e);
  return pr(n) ? n.ownerDocument.body : Se(n) && cn(n) ? n : Io(n);
}
function ai(e, n) {
  var t;
  n === void 0 && (n = []);
  const r = Io(e), i = r === ((t = e.ownerDocument) == null ? void 0 : t.body), o = ve(r);
  return i ? n.concat(o, o.visualViewport || [], cn(r) ? r : []) : n.concat(r, ai(r));
}
function Ni(e, n, t) {
  let r;
  if (n === "viewport")
    r = function(a, u) {
      const f = ve(a), c = ze(a), l = f.visualViewport;
      let d = c.clientWidth, v = c.clientHeight, g = 0, b = 0;
      if (l) {
        d = l.width, v = l.height;
        const y = Wr();
        (!y || y && u === "fixed") && (g = l.offsetLeft, b = l.offsetTop);
      }
      return { width: d, height: v, x: g, y: b };
    }(e, t);
  else if (n === "document")
    r = function(a) {
      const u = ze(a), f = gr(a), c = a.ownerDocument.body, l = tn(u.scrollWidth, u.clientWidth, c.scrollWidth, c.clientWidth), d = tn(u.scrollHeight, u.clientHeight, c.scrollHeight, c.clientHeight);
      let v = -f.scrollLeft + wo(a);
      const g = -f.scrollTop;
      return Ce(c).direction === "rtl" && (v += tn(u.clientWidth, c.clientWidth) - l), { width: l, height: d, x: v, y: g };
    }(ze(e));
  else if (Ve(n))
    r = function(a, u) {
      const f = ln(a, !0, u === "fixed"), c = f.top + a.clientTop, l = f.left + a.clientLeft, d = Se(a) ? Pt(a) : { x: 1, y: 1 };
      return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: l * d.x, y: c * d.y };
    }(n, t);
  else {
    const a = { ...n };
    if (Wr()) {
      var i, o;
      const u = ve(e);
      a.x -= ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0, a.y -= ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0;
    }
    r = a;
  }
  return tr(r);
}
function Co(e, n) {
  const t = Lt(e);
  return !(t === n || !Ve(t) || pr(t)) && (Ce(t).position === "fixed" || Co(t, n));
}
function ki(e, n) {
  return Se(e) && Ce(e).position !== "fixed" ? n ? n(e) : e.offsetParent : null;
}
function Fi(e, n) {
  const t = ve(e);
  if (!Se(e))
    return t;
  let r = ki(e, n);
  for (; r && Ks(r) && Ce(r).position === "static"; )
    r = ki(r, n);
  return r && (Xe(r) === "html" || Xe(r) === "body" && Ce(r).position === "static" && !Ur(r)) ? t : r || function(i) {
    let o = Lt(i);
    for (; Se(o) && !pr(o); ) {
      if (Ur(o))
        return o;
      o = Lt(o);
    }
    return null;
  }(e) || t;
}
function Gs(e, n, t) {
  const r = Se(n), i = ze(n), o = ln(e, !0, t === "fixed", n);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (r || !r && t !== "fixed")
    if ((Xe(n) !== "body" || cn(i)) && (a = gr(n)), Se(n)) {
      const f = ln(n, !0);
      u.x = f.x + n.clientLeft, u.y = f.y + n.clientTop;
    } else
      i && (u.x = wo(i));
  return { x: o.left + a.scrollLeft - u.x, y: o.top + a.scrollTop - u.y, width: o.width, height: o.height };
}
const Ys = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: r, strategy: i } = e;
  const o = t === "clippingAncestors" ? function(c, l) {
    const d = l.get(c);
    if (d)
      return d;
    let v = ai(c).filter((T) => Ve(T) && Xe(T) !== "body"), g = null;
    const b = Ce(c).position === "fixed";
    let y = b ? Lt(c) : c;
    for (; Ve(y) && !pr(y); ) {
      const T = Ce(y), C = Ur(y);
      C || T.position !== "fixed" || (g = null), (b ? !C && !g : !C && T.position === "static" && g && ["absolute", "fixed"].includes(g.position) || cn(y) && !C && Co(c, y)) ? v = v.filter((E) => E !== y) : g = T, y = Lt(y);
    }
    return l.set(c, v), v;
  }(n, this._c) : [].concat(t), a = [...o, r], u = a[0], f = a.reduce((c, l) => {
    const d = Ni(n, l, i);
    return c.top = tn(d.top, c.top), c.right = xi(d.right, c.right), c.bottom = xi(d.bottom, c.bottom), c.left = tn(d.left, c.left), c;
  }, Ni(n, u, i));
  return { width: f.right - f.left, height: f.bottom - f.top, x: f.left, y: f.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: r } = e;
  const i = Se(t), o = ze(t);
  if (t === o)
    return n;
  let a = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const f = { x: 0, y: 0 };
  if ((i || !i && r !== "fixed") && ((Xe(t) !== "body" || cn(o)) && (a = gr(t)), Se(t))) {
    const c = ln(t);
    u = Pt(t), f.x = c.x + t.clientLeft, f.y = c.y + t.clientTop;
  }
  return { width: n.width * u.x, height: n.height * u.y, x: n.x * u.x - a.scrollLeft * u.x + f.x, y: n.y * u.y - a.scrollTop * u.y + f.y };
}, isElement: Ve, getDimensions: function(e) {
  return Eo(e);
}, getOffsetParent: Fi, getDocumentElement: ze, getScale: Pt, async getElementRects(e) {
  let { reference: n, floating: t, strategy: r } = e;
  const i = this.getOffsetParent || Fi, o = this.getDimensions;
  return { reference: Gs(n, await i(t), r), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ce(e).direction === "rtl" }, qs = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), i = { platform: Ys, ...t }, o = { ...i.platform, _c: r };
  return Ns(e, n, { ...i, platform: o });
};
var Kr, ut = /* @__PURE__ */ new Map(), zs = (e) => e.getBoundingClientRect();
function Gr(e, n) {
  const { scope: t = "rect", getRect: r = zs, onChange: i } = n, o = Xs({ scope: t, getRect: r }), a = ut.get(e);
  return a ? (a.callbacks.push(i), i(r(e))) : (ut.set(e, {
    rect: {},
    callbacks: [i]
  }), ut.size === 1 && (Kr = requestAnimationFrame(o))), function() {
    const f = ut.get(e);
    if (!f)
      return;
    const c = f.callbacks.indexOf(i);
    c > -1 && f.callbacks.splice(c, 1), f.callbacks.length === 0 && (ut.delete(e), ut.size === 0 && cancelAnimationFrame(Kr));
  };
}
function Xs(e) {
  const { scope: n, getRect: t } = e, r = Zs(n);
  return function i() {
    const o = [];
    ut.forEach((a, u) => {
      const f = t(u);
      r(a.rect, f) || (a.rect = f, o.push(a));
    }), o.forEach((a) => {
      a.callbacks.forEach((u) => u(a.rect));
    }), Kr = requestAnimationFrame(i);
  };
}
var So = (e, n) => e.width === n.width && e.height === n.height, Ro = (e, n) => e.top === n.top && e.left === n.left, Js = (e, n) => So(e, n) && Ro(e, n);
function Zs(e) {
  return e === "size" ? So : e === "position" ? Ro : Js;
}
var Dr = (...e) => () => e.forEach((n) => n()), $i = (e) => typeof e == "object" && e !== null && e.nodeType === 1, Vi = (e, n, t, r) => (e.addEventListener(n, t, r), () => e.removeEventListener(n, t, r));
function Qs(e) {
  const n = typeof e == "boolean";
  return {
    ancestorResize: n ? e : e.ancestorResize ?? !0,
    ancestorScroll: n ? e : e.ancestorScroll ?? !0,
    referenceResize: n ? e : e.referenceResize ?? !0
  };
}
function ec(e, n, t, r = !1) {
  const { ancestorScroll: i, ancestorResize: o, referenceResize: a } = Qs(r), u = i || o, f = [];
  u && $i(e) && f.push(...ai(e));
  function c() {
    let d = [Gr(n, { scope: "size", onChange: t })];
    return a && $i(e) && d.push(Gr(e, { onChange: t })), d.push(Dr(...f.map((v) => Vi(v, "resize", t)))), () => d.forEach((v) => v());
  }
  function l() {
    return Dr(...f.map((d) => Vi(d, "scroll", t, { passive: !0 })));
  }
  return Dr(c(), l());
}
var qt = (e) => ({ variable: e, reference: `var(${e})` }), Fe = {
  arrowSize: qt("--arrow-size"),
  arrowSizeHalf: qt("--arrow-size-half"),
  arrowBg: qt("--arrow-background"),
  transformOrigin: qt("--transform-origin"),
  arrowOffset: qt("--arrow-offset")
}, tc = (e) => ({
  top: "bottom center",
  "top-start": e ? `${e.x}px bottom` : "left bottom",
  "top-end": e ? `${e.x}px bottom` : "right bottom",
  bottom: "top center",
  "bottom-start": e ? `${e.x}px top` : "top left",
  "bottom-end": e ? `${e.x}px top` : "top right",
  left: "right center",
  "left-start": e ? `right ${e.y}px` : "right top",
  "left-end": e ? `right ${e.y}px` : "right bottom",
  right: "left center",
  "right-start": e ? `left ${e.y}px` : "left top",
  "right-end": e ? `left ${e.y}px` : "left bottom"
}), nc = {
  name: "transformOrigin",
  fn({ placement: e, elements: n, middlewareData: t }) {
    const { arrow: r } = t, i = tc(r)[e], { floating: o } = n;
    return o.style.setProperty(Fe.transformOrigin.variable, i), {
      data: { transformOrigin: i }
    };
  }
}, rc = (e) => ({
  name: "shiftArrow",
  fn({ placement: n, middlewareData: t }) {
    const { element: r } = e;
    if (t.arrow) {
      const { x: i, y: o } = t.arrow, a = n.split("-")[0];
      Object.assign(r.style, {
        left: i != null ? `${i}px` : "",
        top: o != null ? `${o}px` : "",
        [a]: `calc(100% + ${Fe.arrowOffset.reference})`
      });
    }
    return {};
  }
}), ic = {
  strategy: "absolute",
  placement: "bottom",
  listeners: !0,
  gutter: 8,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
};
function oc(e, n, t = {}) {
  if (!n || !e)
    return;
  const r = Object.assign({}, ic, t), i = n.querySelector("[data-part=arrow]"), o = [], a = typeof r.boundary == "function" ? r.boundary() : r.boundary;
  if (r.flip && o.push(
    js({
      boundary: a,
      padding: r.overflowPadding
    })
  ), r.gutter || r.offset) {
    const f = i ? i.offsetHeight / 2 : 0, c = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (c == null ? void 0 : c.mainAxis) != null && (c.mainAxis += f), o.push(Bs(c));
  }
  o.push(
    Us({
      boundary: a,
      crossAxis: r.overlap,
      padding: r.overflowPadding
    })
  ), i && o.push(
    ks({ element: i, padding: 8 }),
    rc({ element: i })
  ), o.push(nc), o.push(
    Ws({
      padding: r.overflowPadding,
      apply({ rects: f, availableHeight: c, availableWidth: l }) {
        const d = Math.round(f.reference.width);
        n.style.setProperty("--reference-width", `${d}px`), n.style.setProperty("--available-width", `${l}px`), n.style.setProperty("--available-height", `${c}px`), r.sameWidth && Object.assign(n.style, {
          width: `${d}px`,
          minWidth: "unset"
        }), r.fitViewport && Object.assign(n.style, {
          maxWidth: `${l}px`,
          maxHeight: `${c}px`
        });
      }
    })
  );
  function u(f = {}) {
    if (!e || !n)
      return;
    const { placement: c, strategy: l, onComplete: d } = r;
    qs(e, n, {
      placement: c,
      middleware: o,
      strategy: l,
      ...f
    }).then((v) => {
      const g = Math.round(v.x), b = Math.round(v.y);
      Object.assign(n.style, {
        position: v.strategy,
        top: "0px",
        left: "0px",
        transform: `translate3d(${g}px, ${b}px, 0)`
      }), d == null || d(v);
    });
  }
  return u(), jr(
    r.listeners ? ec(e, n, u, r.listeners) : void 0,
    r.onCleanup
  );
}
function Ao(e, n, t = {}) {
  const { defer: r, ...i } = t, o = r ? re : (u) => u(), a = [];
  return a.push(
    o(() => {
      const u = typeof e == "function" ? e() : e, f = typeof n == "function" ? n() : n;
      a.push(oc(u, f, i));
    })
  ), () => {
    a.forEach((u) => u == null ? void 0 : u());
  };
}
var ac = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function Po(e) {
  const { placement: n = "bottom" } = e;
  return {
    arrow: {
      position: "absolute",
      width: Fe.arrowSize.reference,
      height: Fe.arrowSize.reference,
      [Fe.arrowSizeHalf.variable]: `calc(${Fe.arrowSize.reference} / 2)`,
      [Fe.arrowOffset.variable]: `calc(${Fe.arrowSizeHalf.reference} * -1)`
    },
    arrowTip: {
      transform: ac[n.split("-")[0]],
      background: Fe.arrowBg.reference,
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: "inherit"
    },
    floating: {
      position: "absolute",
      minWidth: "max-content",
      top: "0px",
      left: "0px"
    }
  };
}
function sc(e, n, t) {
  var T, C;
  const r = e.context.translations, i = e.context.disabled, o = e.context.isInteractive, a = e.context.invalid, u = e.context.readOnly, f = e.hasTag("open"), c = e.hasTag("focused"), l = e.hasTag("idle"), d = f && e.context.navigationData && e.context.autoComplete, v = (!l || e.context.isHovering) && !e.context.isInputValueEmpty, g = d ? (T = e.context.navigationData) == null ? void 0 : T.label : e.context.inputValue, b = Po({
    placement: e.context.currentPlacement
  }), y = {
    /**
     * Whether the combobox is focused
     */
    isFocused: c,
    /**
     * Whether the combobox content or listbox is open
     */
    isOpen: f,
    /**
     * Whether the combobox input is empty
     */
    isInputValueEmpty: e.context.isInputValueEmpty,
    /**
     * The current value of the combobox input
     */
    inputValue: e.context.inputValue,
    /**
     * The currently focused option (by pointer or keyboard)
     */
    focusedOption: e.context.focusedOptionData,
    /**
     * The currently selected option value
     */
    selectedValue: (C = e.context.selectionData) == null ? void 0 : C.value,
    /**
     * Function to set the combobox value
     */
    setValue(E) {
      let L;
      typeof E == "string" ? L = { value: E, label: D.getValueLabel(e.context, E) } : L = E, n({ type: "SET_VALUE", ...L });
    },
    /**
     * Function to set the combobox input value
     */
    setInputValue(E) {
      n({ type: "SET_INPUT_VALUE", value: E });
    },
    /**
     * Function to clear the combobox input value and selected value
     */
    clearValue() {
      n("CLEAR_VALUE");
    },
    /**
     * Function to focus the combobox input
     */
    focus() {
      var E;
      (E = D.getInputEl(e.context)) == null || E.focus();
    },
    rootProps: t.element({
      ..._e.root.attrs,
      id: D.getRootId(e.context),
      "data-invalid": z(a),
      "data-readonly": z(u)
    }),
    labelProps: t.label({
      ..._e.label.attrs,
      htmlFor: D.getInputId(e.context),
      id: D.getLabelId(e.context),
      "data-readonly": z(u),
      "data-disabled": z(i),
      "data-invalid": z(a),
      "data-focus": z(c)
    }),
    controlProps: t.element({
      ..._e.control.attrs,
      id: D.getControlId(e.context),
      "data-expanded": z(f),
      "data-focus": z(c),
      "data-disabled": z(i),
      "data-invalid": z(a),
      onPointerOver() {
        o && n("POINTER_OVER");
      },
      onPointerLeave() {
        o && n("POINTER_LEAVE");
      }
    }),
    positionerProps: t.element({
      ..._e.positioner.attrs,
      id: D.getPositionerId(e.context),
      "data-expanded": z(f),
      hidden: !f,
      style: b.floating
    }),
    inputProps: t.input({
      ..._e.input.attrs,
      "aria-invalid": po(a),
      "data-invalid": z(a),
      name: e.context.name,
      form: e.context.form,
      disabled: i,
      autoFocus: e.context.autoFocus,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "none",
      spellCheck: "false",
      readOnly: u,
      placeholder: e.context.placeholder,
      id: D.getInputId(e.context),
      type: "text",
      role: "combobox",
      defaultValue: g,
      "data-value": g,
      "aria-autocomplete": e.context.autoComplete ? "both" : "list",
      "aria-controls": f ? D.getContentId(e.context) : void 0,
      "aria-expanded": f,
      "aria-activedescendant": e.context.focusedId ?? void 0,
      onClick() {
        o && n("CLICK_INPUT");
      },
      onFocus() {
        i || n("FOCUS");
      },
      onChange(E) {
        Bn(E).isComposing || n({ type: "CHANGE", value: E.currentTarget.value });
      },
      onKeyDown(E) {
        if (!o)
          return;
        const L = Bn(E);
        if (L.ctrlKey || L.shiftKey || L.isComposing)
          return;
        let V = !1;
        const B = {
          ArrowDown(I) {
            n(I.altKey ? "ALT_ARROW_DOWN" : "ARROW_DOWN"), V = !0;
          },
          ArrowUp() {
            n(E.altKey ? "ALT_ARROW_UP" : "ARROW_UP"), V = !0;
          },
          Home(I) {
            I.ctrlKey || I.metaKey || n({ type: "HOME", preventDefault: () => I.preventDefault() });
          },
          End(I) {
            I.ctrlKey || I.metaKey || n({ type: "END", preventDefault: () => I.preventDefault() });
          },
          Enter() {
            n("ENTER"), V = !0;
          },
          Escape() {
            n("ESCAPE"), V = !0;
          },
          Tab() {
            n("TAB");
          }
        }, F = er(E, e.context), O = B[F];
        O == null || O(E), V && E.preventDefault();
      }
    }),
    triggerProps: t.button({
      ..._e.trigger.attrs,
      id: D.getTriggerId(e.context),
      "aria-haspopup": "listbox",
      type: "button",
      tabIndex: -1,
      "aria-label": r.triggerLabel,
      "aria-expanded": f,
      "aria-controls": f ? D.getContentId(e.context) : void 0,
      disabled: i,
      "data-readonly": z(u),
      "data-disabled": z(i),
      onPointerDown(E) {
        const L = Bn(E);
        !o || !Ai(L) || L.pointerType === "touch" || (n("CLICK_BUTTON"), E.preventDefault());
      },
      onPointerUp(E) {
        E.pointerType === "touch" && n("CLICK_BUTTON");
      }
    }),
    contentProps: t.element({
      ..._e.content.attrs,
      id: D.getContentId(e.context),
      role: "listbox",
      hidden: !f,
      "aria-labelledby": D.getLabelId(e.context),
      onPointerDown(E) {
        E.preventDefault();
      }
    }),
    clearTriggerProps: t.button({
      ..._e.clearTrigger.attrs,
      id: D.getClearTriggerId(e.context),
      type: "button",
      tabIndex: -1,
      disabled: i,
      "aria-label": r.clearTriggerLabel,
      hidden: !v,
      onPointerDown(E) {
        const L = Bn(E);
        !o || !Ai(L) || (n("CLEAR_VALUE"), E.preventDefault());
      }
    }),
    getOptionState(E) {
      var w;
      const { value: L, index: V, disabled: B } = E, F = D.getOptionId(e.context, L, V), O = e.context.focusedId === F, I = ((w = e.context.selectionData) == null ? void 0 : w.value) === L;
      return { disabled: B, focused: O, checked: I };
    },
    getOptionProps(E) {
      const { value: L, label: V, index: B, count: F } = E, O = D.getOptionId(e.context, L, B), I = y.getOptionState(E);
      return t.element({
        ..._e.option.attrs,
        id: O,
        role: "option",
        tabIndex: -1,
        "data-highlighted": z(I.focused),
        "data-disabled": z(I.disabled),
        "data-checked": z(I.checked),
        "aria-selected": I.focused,
        "aria-disabled": I.disabled,
        "aria-posinset": F && B != null ? B + 1 : void 0,
        "aria-setsize": F,
        "data-value": L,
        "data-label": V,
        // Prefer `pointermove` to `pointerenter` to avoid interrupting the keyboard navigation
        // NOTE: for perf, we may want to move these handlers to the listbox
        onPointerMove() {
          I.disabled || n({ type: "POINTEROVER_OPTION", id: O, value: L, label: V });
        },
        onPointerUp() {
          I.disabled || n({ type: "CLICK_OPTION", src: "pointerup", id: O, value: L, label: V });
        },
        onClick() {
          I.disabled || n({ type: "CLICK_OPTION", src: "click", id: O, value: L, label: V });
        },
        onAuxClick(w) {
          I.disabled || (w.preventDefault(), n({ type: "CLICK_OPTION", src: "auxclick", id: O, value: L, label: V }));
        }
      });
    },
    getOptionGroupProps(E) {
      const { label: L } = E;
      return t.element({
        ..._e.optionGroup.attrs,
        role: "group",
        "aria-label": L
      });
    }
  };
  return y;
}
var zt = /* @__PURE__ */ new WeakMap(), Ee = [];
function cc(e, n = {}) {
  const { rootEl: t } = n, r = e.filter(Boolean);
  if (r.length === 0)
    return;
  const i = r[0].ownerDocument || document, o = i.defaultView ?? window, a = new Set(r), u = /* @__PURE__ */ new Set(), f = t ?? i.body;
  let c = (g) => {
    for (let C of g.querySelectorAll("[data-live-announcer], [data-zag-top-layer]"))
      a.add(C);
    let b = (C) => {
      if (a.has(C) || u.has(C.parentElement) && C.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let E of a)
        if (C.contains(E))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, y = i.createTreeWalker(g, NodeFilter.SHOW_ELEMENT, { acceptNode: b }), T = b(g);
    if (T === NodeFilter.FILTER_ACCEPT && l(g), T !== NodeFilter.FILTER_REJECT) {
      let C = y.nextNode();
      for (; C != null; )
        l(C), C = y.nextNode();
    }
  }, l = (g) => {
    let b = zt.get(g) ?? 0;
    g.getAttribute("aria-hidden") === "true" && b === 0 || (b === 0 && g.setAttribute("aria-hidden", "true"), u.add(g), zt.set(g, b + 1));
  };
  Ee.length && Ee[Ee.length - 1].disconnect(), c(f);
  const d = new o.MutationObserver((g) => {
    for (let b of g)
      if (!(b.type !== "childList" || b.addedNodes.length === 0) && ![...a, ...u].some((y) => y.contains(b.target))) {
        for (let y of b.removedNodes)
          y instanceof o.Element && (a.delete(y), u.delete(y));
        for (let y of b.addedNodes)
          (y instanceof o.HTMLElement || y instanceof o.SVGElement) && (y.dataset.liveAnnouncer === "true" || y.dataset.zagTopLayer === "true") ? a.add(y) : y instanceof o.Element && c(y);
      }
  });
  d.observe(f, { childList: !0, subtree: !0 });
  let v = {
    observe() {
      d.observe(f, { childList: !0, subtree: !0 });
    },
    disconnect() {
      d.disconnect();
    }
  };
  return Ee.push(v), () => {
    d.disconnect();
    for (let g of u) {
      let b = zt.get(g);
      b === 1 ? (g.removeAttribute("aria-hidden"), zt.delete(g)) : zt.set(g, b - 1);
    }
    v === Ee[Ee.length - 1] ? (Ee.pop(), Ee.length && Ee[Ee.length - 1].observe()) : Ee.splice(Ee.indexOf(v), 1);
  };
}
function _o(e, n = {}) {
  const { defer: t } = n, r = t ? re : (o) => o(), i = [];
  return i.push(
    r(() => {
      const o = typeof e == "function" ? e() : e;
      i.push(cc(o, n));
    })
  ), () => {
    i.forEach((o) => o == null ? void 0 : o());
  };
}
var Mi = (e, ...n) => (typeof e == "function" ? e(...n) : e) ?? void 0, $e = (e) => e, Lr = () => {
}, lc = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (e++, e.toString(36));
})();
const uc = Symbol(), si = Symbol(), Xt = "a", qn = "w";
let dc = (e, n) => new Proxy(e, n);
const Yr = Object.getPrototypeOf, qr = /* @__PURE__ */ new WeakMap(), Do = (e) => e && (qr.has(e) ? qr.get(e) : Yr(e) === Object.prototype || Yr(e) === Array.prototype), ji = (e) => typeof e == "object" && e !== null, fc = (e) => {
  if (Array.isArray(e))
    return Array.from(e);
  const n = Object.getOwnPropertyDescriptors(e);
  return Object.values(n).forEach((t) => {
    t.configurable = !0;
  }), Object.create(Yr(e), n);
}, Lo = (e) => e[si] || e, xo = (e, n, t, r) => {
  if (!Do(e))
    return e;
  let i = r && r.get(e);
  if (!i) {
    const f = Lo(e);
    i = ((c) => Object.values(Object.getOwnPropertyDescriptors(c)).some((l) => !l.configurable && !l.writable))(f) ? [f, fc(f)] : [f], r == null || r.set(e, i);
  }
  const [o, a] = i;
  let u = t && t.get(o);
  return u && u[1].f === !!a || (u = ((f, c) => {
    const l = { f: c };
    let d = !1;
    const v = (b, y) => {
      if (!d) {
        let T = l[Xt].get(f);
        if (T || (T = {}, l[Xt].set(f, T)), b === qn)
          T[qn] = !0;
        else {
          let C = T[b];
          C || (C = /* @__PURE__ */ new Set(), T[b] = C), C.add(y);
        }
      }
    }, g = { get: (b, y) => y === si ? f : (v("k", y), xo(Reflect.get(b, y), l[Xt], l.c, l.t)), has: (b, y) => y === uc ? (d = !0, l[Xt].delete(f), !0) : (v("h", y), Reflect.has(b, y)), getOwnPropertyDescriptor: (b, y) => (v("o", y), Reflect.getOwnPropertyDescriptor(b, y)), ownKeys: (b) => (v(qn), Reflect.ownKeys(b)) };
    return c && (g.set = g.deleteProperty = () => !1), [g, l];
  })(o, !!a), u[1].p = dc(a || o, u[0]), t && t.set(o, u)), u[1][Xt] = n, u[1].c = t, u[1].t = r, u[1].p;
}, No = (e, n, t, r) => {
  if (Object.is(e, n))
    return !1;
  if (!ji(e) || !ji(n))
    return !0;
  const i = t.get(Lo(e));
  if (!i)
    return !0;
  if (r) {
    const a = r.get(e);
    if (a && a.n === n)
      return a.g;
    r.set(e, { n, g: !1 });
  }
  let o = null;
  try {
    for (const a of i.h || [])
      if (o = Reflect.has(e, a) !== Reflect.has(n, a), o)
        return o;
    if (i[qn] === !0) {
      if (o = ((a, u) => {
        const f = Reflect.ownKeys(a), c = Reflect.ownKeys(u);
        return f.length !== c.length || f.some((l, d) => l !== c[d]);
      })(e, n), o)
        return o;
    } else
      for (const a of i.o || [])
        if (o = !!Reflect.getOwnPropertyDescriptor(e, a) != !!Reflect.getOwnPropertyDescriptor(n, a), o)
          return o;
    for (const a of i.k || [])
      if (o = No(e[a], n[a], t, r), o)
        return o;
    return o === null && (o = !0), o;
  } finally {
    r && r.set(e, { n, g: o });
  }
}, pc = (e) => Do(e) && e[si] || null, Bi = (e, n = !0) => {
  qr.set(e, n);
};
var ir = process.env.NODE_ENV !== "production", xr = (e) => typeof e == "object" && e !== null, dt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakSet(), gc = (e = Object.is, n = (c, l) => new Proxy(c, l), t = (c) => xr(c) && !Qt.has(c) && (Array.isArray(c) || !(Symbol.iterator in c)) && !(c instanceof WeakMap) && !(c instanceof WeakSet) && !(c instanceof Error) && !(c instanceof Number) && !(c instanceof Date) && !(c instanceof String) && !(c instanceof RegExp) && !(c instanceof ArrayBuffer), r = (c) => {
  switch (c.status) {
    case "fulfilled":
      return c.value;
    case "rejected":
      throw c.reason;
    default:
      throw c;
  }
}, i = /* @__PURE__ */ new WeakMap(), o = (c, l, d = r) => {
  const v = i.get(c);
  if ((v == null ? void 0 : v[0]) === l)
    return v[1];
  const g = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c));
  return Bi(g, !0), i.set(c, [l, g]), Reflect.ownKeys(c).forEach((b) => {
    const y = Reflect.get(c, b);
    Qt.has(y) ? (Bi(y, !1), g[b] = y) : y instanceof Promise ? Object.defineProperty(g, b, {
      get() {
        return d(y);
      }
    }) : dt.has(y) ? g[b] = Je(y, d) : g[b] = y;
  }), Object.freeze(g);
}, a = /* @__PURE__ */ new WeakMap(), u = [1, 1], f = (c) => {
  if (!xr(c))
    throw new Error("object required");
  const l = a.get(c);
  if (l)
    return l;
  let d = u[0];
  const v = /* @__PURE__ */ new Set(), g = (w, P = ++u[0]) => {
    d !== P && (d = P, v.forEach((A) => A(w, P)));
  };
  let b = u[1];
  const y = (w = ++u[1]) => (b !== w && !v.size && (b = w, C.forEach(([P]) => {
    const A = P[1](w);
    A > d && (d = A);
  })), d), T = (w) => (P, A) => {
    const M = [...P];
    M[1] = [w, ...M[1]], g(M, A);
  }, C = /* @__PURE__ */ new Map(), E = (w, P) => {
    if (ir && C.has(w))
      throw new Error("prop listener already exists");
    if (v.size) {
      const A = P[3](T(w));
      C.set(w, [P, A]);
    } else
      C.set(w, [P]);
  }, L = (w) => {
    var A;
    const P = C.get(w);
    P && (C.delete(w), (A = P[1]) == null || A.call(P));
  }, V = (w) => (v.add(w), v.size === 1 && C.forEach(([A, M], U) => {
    if (ir && M)
      throw new Error("remove already exists");
    const X = A[3](T(U));
    C.set(U, [A, X]);
  }), () => {
    v.delete(w), v.size === 0 && C.forEach(([A, M], U) => {
      M && (M(), C.set(U, [A]));
    });
  }), B = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)), O = n(B, {
    deleteProperty(w, P) {
      const A = Reflect.get(w, P);
      L(P);
      const M = Reflect.deleteProperty(w, P);
      return M && g(["delete", [P], A]), M;
    },
    set(w, P, A, M) {
      var ee;
      const U = Reflect.has(w, P), X = Reflect.get(w, P, M);
      if (U && (e(X, A) || a.has(A) && e(X, a.get(A))))
        return !0;
      L(P), xr(A) && (A = pc(A) || A);
      let ne = A;
      if (!((ee = Object.getOwnPropertyDescriptor(w, P)) != null && ee.set))
        if (A instanceof Promise)
          A.then((ce) => {
            A.status = "fulfilled", A.value = ce, g(["resolve", [P], ce]);
          }).catch((ce) => {
            A.status = "rejected", A.reason = ce, g(["reject", [P], ce]);
          });
        else {
          !dt.has(A) && t(A) && (ne = ci(A));
          const ce = !Qt.has(ne) && dt.get(ne);
          ce && E(P, ce);
        }
      return Reflect.set(w, P, ne, M), g(["set", [P], A, X]), !0;
    }
  });
  a.set(c, O);
  const I = [B, y, o, V];
  return dt.set(O, I), Reflect.ownKeys(c).forEach((w) => {
    const P = Object.getOwnPropertyDescriptor(c, w);
    P.get || P.set ? Object.defineProperty(B, w, P) : O[w] = c[w];
  }), O;
}) => [
  // public functions
  f,
  // shared state
  dt,
  Qt,
  // internal things
  e,
  n,
  t,
  r,
  i,
  o,
  a,
  u
], [hc] = gc();
function ci(e = {}) {
  return hc(e);
}
function un(e, n, t) {
  const r = dt.get(e);
  ir && !r && console.warn("Please use proxy object");
  let i;
  const o = [], a = r[3];
  let u = !1;
  const c = a((l) => {
    if (o.push(l), t) {
      n(o.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, u && n(o.splice(0));
    }));
  });
  return u = !0, () => {
    u = !1, c();
  };
}
function Je(e, n) {
  const t = dt.get(e);
  ir && !t && console.warn("Please use proxy object");
  const [r, i, o] = t;
  return o(r, i(), n);
}
function Hi(e) {
  return Qt.add(e), e;
}
function vc(e, n) {
  Object.keys(n).forEach((i) => {
    if (Object.getOwnPropertyDescriptor(e, i))
      throw new Error("object property already defined");
    const o = n[i], { get: a, set: u } = typeof o == "function" ? { get: o } : o, f = {};
    f.get = () => a(Je(r)), u && (f.set = (c) => u(r, c)), Object.defineProperty(e, i, f);
  });
  const r = ci(e);
  return r;
}
var bc = (e, n) => Object.is(e, n);
function Ui(e, n, t, r, i) {
  let o = Reflect.get(Je(e), n);
  const a = i || bc;
  function u() {
    const f = Je(e);
    a(o, f[n]) || (t(f[n]), o = Reflect.get(f, n));
  }
  return un(e, u, r);
}
function yc(e) {
  const n = e.computed ?? $e({}), t = e.context ?? $e({}), r = ci({
    value: e.initial ?? "",
    previousValue: "",
    event: $e({}),
    previousEvent: $e({}),
    context: vc(t, n),
    done: !1,
    tags: [],
    hasTag(i) {
      return this.tags.includes(i);
    },
    matches(...i) {
      return i.includes(this.value);
    },
    can(i) {
      return $e(this).nextEvents.includes(i);
    },
    get nextEvents() {
      var a, u;
      const i = ((u = (a = e.states) == null ? void 0 : a[this.value]) == null ? void 0 : u.on) ?? {}, o = (e == null ? void 0 : e.on) ?? {};
      return Object.keys({ ...i, ...o });
    },
    get changed() {
      return this.event.value === "machine.init" || !this.previousValue ? !1 : this.value !== this.previousValue;
    }
  });
  return $e(r);
}
var mc = () => process.env.NODE_ENV !== "production", nn = (e) => Array.isArray(e), rn = (e) => !(e == null || typeof e != "object" || nn(e)), Ec = (e) => typeof e == "number" && !Number.isNaN(e), De = (e) => typeof e == "string", or = (e) => typeof e == "function";
function ar(e) {
  if (!Oc(e) || e === void 0)
    return e;
  const n = Reflect.ownKeys(e).filter((r) => typeof r == "string"), t = {};
  for (const r of n) {
    const i = e[r];
    i !== void 0 && (t[r] = ar(i));
  }
  return t;
}
var Oc = (e) => e && typeof e == "object" && e.constructor === Object;
function ko(e, ...n) {
  for (const t of n) {
    const r = ar(t);
    for (const i in r)
      rn(t[i]) ? (e[i] || (e[i] = {}), ko(e[i], t[i])) : e[i] = t[i];
  }
  return e;
}
function Nr(...e) {
  const n = e.length === 1 ? e[0] : e[1];
  (e.length === 2 ? e[0] : !0) && process.env.NODE_ENV !== "production" && console.warn(n);
}
function zn(...e) {
  const n = e.length === 1 ? e[0] : e[1];
  if ((e.length === 2 ? e[0] : !0) && process.env.NODE_ENV !== "production")
    throw new Error(n);
}
function Un(e, n) {
  return (t, r) => {
    if (Ec(e))
      return e;
    if (or(e))
      return e(t, r);
    if (De(e)) {
      const i = Number.parseFloat(e);
      if (!Number.isNaN(i))
        return i;
      if (n) {
        const o = n == null ? void 0 : n[e];
        return zn(
          o == null,
          `[@zag-js/core > determine-delay] Cannot determine delay for \`${e}\`. It doesn't exist in \`options.delays\``
        ), or(o) ? o(t, r) : o;
      }
    }
  };
}
function Wi(e, n, t) {
  typeof t.value == "object" && (t.value = Rt(t.value)), !t.enumerable || t.get || t.set || !t.configurable || !t.writable || n === "__proto__" ? Object.defineProperty(e, n, t) : e[n] = t.value;
}
function Rt(e) {
  if (typeof e != "object")
    return e;
  var n = 0, t, r, i, o = Object.prototype.toString.call(e);
  if (o === "[object Object]" ? i = Object.create(e.__proto__ || null) : o === "[object Array]" ? i = Array(e.length) : o === "[object Set]" ? (i = /* @__PURE__ */ new Set(), e.forEach(function(a) {
    i.add(Rt(a));
  })) : o === "[object Map]" ? (i = /* @__PURE__ */ new Map(), e.forEach(function(a, u) {
    i.set(Rt(u), Rt(a));
  })) : o === "[object Date]" ? i = /* @__PURE__ */ new Date(+e) : o === "[object RegExp]" ? i = new RegExp(e.source, e.flags) : o === "[object DataView]" ? i = new e.constructor(Rt(e.buffer)) : o === "[object ArrayBuffer]" ? i = e.slice(0) : o.slice(-6) === "Array]" && (i = new e.constructor(e)), i) {
    for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      Wi(i, r[n], Object.getOwnPropertyDescriptor(e, r[n]));
    for (n = 0, r = Object.getOwnPropertyNames(e); n < r.length; n++)
      Object.hasOwnProperty.call(i, t = r[n]) && i[t] === e[t] || Wi(i, t, Object.getOwnPropertyDescriptor(e, t));
  }
  return i || e;
}
function Ki(e) {
  return Rt(e);
}
function he(e) {
  return De(e) ? { type: e } : e;
}
function Ge(e) {
  return e ? nn(e) ? e.slice() : [e] : [];
}
function Fo(e) {
  return rn(e) && e.predicate != null;
}
var Tc = () => !0;
function li(e, n, t, r) {
  return (i) => {
    var o;
    return De(i) ? !!((o = e[i]) != null && o.call(e, n, t, r)) : or(i) ? i(n, t, r) : i.predicate(e)(n, t, r);
  };
}
function wc(...e) {
  return {
    predicate: (n) => (t, r, i) => e.map(li(n, t, r, i)).some(Boolean)
  };
}
function Ic(...e) {
  return {
    predicate: (n) => (t, r, i) => e.map(li(n, t, r, i)).every(Boolean)
  };
}
function Cc(e) {
  return {
    predicate: (n) => (t, r, i) => !li(n, t, r, i)(e)
  };
}
function Sc(...e) {
  return (n, t, r) => r.state.matches(...e);
}
var ui = { or: wc, and: Ic, not: Cc, stateIn: Sc };
function $o(e, n) {
  return e = e ?? Tc, (t, r, i) => {
    if (De(e)) {
      const o = n[e];
      return or(o) ? o(t, r, i) : o;
    }
    return Fo(e) ? e.predicate(n)(t, r, i) : e == null ? void 0 : e(t, r, i);
  };
}
function kr(e, n) {
  return (t, r, i) => Fo(e) ? e.predicate(n)(t, r, i) : e;
}
function Rc(e) {
  return De(e) ? { target: e } : e;
}
function Ac(e, n) {
  return (t, r, i) => Ge(e).map(Rc).find((o) => $o(o.guard, n)(t, r, i) ?? o.target ?? o.actions);
}
var Pc = Object.defineProperty, _c = (e, n, t) => n in e ? Pc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, x = (e, n, t) => (_c(e, typeof n != "symbol" ? n + "" : n, t), t);
function Dc(e) {
  for (; e.length > 0; )
    e.pop();
  return e;
}
var Vo = class {
  // Let's get started!
  constructor(e, n) {
    var r, i, o, a, u, f;
    x(
      this,
      "status",
      "Not Started"
      /* NotStarted */
    ), x(this, "state"), x(this, "initialState"), x(this, "initialContext"), x(this, "id"), x(
      this,
      "type",
      "machine"
      /* Machine */
    ), x(this, "activityEvents", /* @__PURE__ */ new Map()), x(this, "delayedEvents", /* @__PURE__ */ new Map()), x(this, "stateListeners", /* @__PURE__ */ new Set()), x(this, "contextListeners", /* @__PURE__ */ new Set()), x(this, "eventListeners", /* @__PURE__ */ new Set()), x(this, "doneListeners", /* @__PURE__ */ new Set()), x(this, "contextWatchers", /* @__PURE__ */ new Set()), x(this, "removeStateListener", Lr), x(this, "removeEventListener", Lr), x(this, "removeContextListener", Lr), x(this, "parent"), x(this, "children", /* @__PURE__ */ new Map()), x(this, "guardMap"), x(this, "actionMap"), x(this, "delayMap"), x(this, "activityMap"), x(this, "sync"), x(this, "options"), x(this, "config"), x(this, "start", (c) => {
      if (this.state.value = "", this.status === "Running")
        return this;
      this.status = "Running", this.removeStateListener = un(
        this.state,
        () => {
          this.stateListeners.forEach((y) => {
            y(this.stateSnapshot);
          });
        },
        this.sync
      ), this.removeEventListener = Ui(
        this.state,
        "event",
        (y) => {
          this.executeActions(this.config.onEvent, y), this.eventListeners.forEach((T) => {
            T(y);
          });
        },
        this.sync
      ), this.removeContextListener = un(
        this.state.context,
        () => {
          this.log("Context:", this.contextSnapshot), this.contextListeners.forEach((y) => {
            y(this.contextSnapshot);
          });
        },
        this.sync || this.options.debug
      ), this.setupContextWatchers(), this.executeActivities(
        he(
          "machine.start"
          /* Start */
        ),
        Ge(this.config.activities),
        "machine.start"
        /* Start */
      ), this.executeActions(this.config.entry, he(
        "machine.start"
        /* Start */
      ));
      const l = he(
        "machine.init"
        /* Init */
      ), d = rn(c) ? c.value : c, v = rn(c) ? c.context : void 0;
      v && this.setContext(v);
      const g = {
        target: d ?? this.config.initial
      }, b = this.getNextStateInfo(g, l);
      return this.initialState = b, this.performStateChangeEffects(this.state.value, b, l), this;
    }), x(this, "setupContextWatchers", () => {
      var c;
      for (const [l, d] of Object.entries(this.config.watch ?? {})) {
        const v = (c = this.options.compareFns) == null ? void 0 : c[l], g = Ui(
          this.state.context,
          l,
          () => {
            this.executeActions(d, this.state.event);
          },
          this.sync,
          v
        );
        this.contextWatchers.add(g);
      }
    }), x(this, "stop", () => {
      if (this.status !== "Stopped")
        return this.performExitEffects(this.state.value, he(
          "machine.stop"
          /* Stop */
        )), this.executeActions(this.config.exit, he(
          "machine.stop"
          /* Stop */
        )), this.setState(""), this.setEvent(
          "machine.stop"
          /* Stop */
        ), this.stopStateListeners(), this.stopChildren(), this.stopActivities(), this.stopDelayedEvents(), this.stopContextWatchers(), this.stopEventListeners(), this.stopContextListeners(), this.status = "Stopped", this;
    }), x(this, "stopEventListeners", () => {
      this.eventListeners.clear(), this.removeEventListener();
    }), x(this, "stopContextListeners", () => {
      this.contextListeners.clear(), this.removeContextListener();
    }), x(this, "stopStateListeners", () => {
      this.removeStateListener(), this.stateListeners.clear();
    }), x(this, "stopContextWatchers", () => {
      this.contextWatchers.forEach((c) => c()), this.contextWatchers.clear();
    }), x(this, "stopDelayedEvents", () => {
      this.delayedEvents.forEach((c) => {
        c.forEach((l) => l());
      }), this.delayedEvents.clear();
    }), x(this, "stopActivities", (c) => {
      var l, d;
      c ? ((l = this.activityEvents.get(c)) == null || l.forEach((v) => v()), (d = this.activityEvents.get(c)) == null || d.clear(), this.activityEvents.delete(c)) : (this.activityEvents.forEach((v) => {
        v.forEach((g) => g()), v.clear();
      }), this.activityEvents.clear());
    }), x(this, "sendChild", (c, l) => {
      const d = he(c), v = Mi(l, this.contextSnapshot), g = this.children.get(v);
      g || zn(`[@zag-js/core] Cannot send '${d.type}' event to unknown child`), g.send(d);
    }), x(this, "stopChild", (c) => {
      this.children.has(c) || zn(`[@zag-js/core > stop-child] Cannot stop unknown child ${c}`), this.children.get(c).stop(), this.children.delete(c);
    }), x(this, "removeChild", (c) => {
      this.children.delete(c);
    }), x(this, "stopChildren", () => {
      this.children.forEach((c) => c.stop()), this.children.clear();
    }), x(this, "setParent", (c) => {
      this.parent = c;
    }), x(this, "spawn", (c, l) => {
      const d = Mi(c);
      return l && (d.id = l), d.type = "machine.actor", d.setParent(this), this.children.set(d.id, $e(d)), d.onDone(() => {
        this.removeChild(d.id);
      }).start(), $e(Hi(d));
    }), x(this, "addActivityCleanup", (c, l) => {
      var d;
      c && (this.activityEvents.has(c) ? (d = this.activityEvents.get(c)) == null || d.add(l) : this.activityEvents.set(c, /* @__PURE__ */ new Set([l])));
    }), x(this, "setState", (c) => {
      this.state.previousValue = this.state.value, this.state.value = c;
      const l = this.getStateNode(c);
      c == null ? Dc(this.state.tags) : this.state.tags = Ge(l == null ? void 0 : l.tags);
    }), x(this, "setContext", (c) => {
      c && ko(this.state.context, c);
    }), x(this, "withContext", (c) => {
      const l = { ...this.config.context, ...ar(c) };
      return new Vo({ ...this.config, context: l }, this.options);
    }), x(this, "setOptions", (c) => {
      const l = ar(c);
      this.actionMap = { ...this.actionMap, ...l.actions }, this.delayMap = { ...this.delayMap, ...l.delays }, this.activityMap = { ...this.activityMap, ...l.activities }, this.guardMap = { ...this.guardMap, ...l.guards };
    }), x(this, "getStateNode", (c) => {
      var l;
      if (c)
        return (l = this.config.states) == null ? void 0 : l[c];
    }), x(this, "getNextStateInfo", (c, l) => {
      const d = this.determineTransition(c, l), v = !(d != null && d.target), g = (d == null ? void 0 : d.target) ?? this.state.value, b = this.state.value !== g, y = this.getStateNode(g), C = {
        reenter: !v && !b && !(d != null && d.internal),
        transition: d,
        stateNode: y,
        target: g,
        changed: b
      };
      return this.log("NextState:", `[${l.type}]`, this.state.value, "---->", C.target), C;
    }), x(this, "getActionFromDelayedTransition", (c) => {
      const l = he(
        "machine.after"
        /* After */
      ), v = Un(c.delay, this.delayMap)(this.contextSnapshot, l);
      let g;
      return {
        entry: () => {
          g = globalThis.setTimeout(() => {
            const b = this.getNextStateInfo(c, l);
            this.performStateChangeEffects(this.state.value, b, l);
          }, v);
        },
        exit: () => {
          globalThis.clearTimeout(g);
        }
      };
    }), x(this, "getDelayedEventActions", (c) => {
      const l = this.getStateNode(c), d = he(
        "machine.after"
        /* After */
      );
      if (!l || !l.after)
        return;
      const v = [], g = [];
      if (nn(l.after)) {
        const b = this.determineTransition(l.after, d);
        if (!b)
          return;
        const y = this.getActionFromDelayedTransition(b);
        v.push(y.entry), g.push(y.exit);
      } else if (rn(l.after))
        for (const b in l.after) {
          const y = l.after[b];
          let T = {};
          if (nn(y)) {
            const E = this.determineTransition(y, d);
            E && (T = E);
          } else
            De(y) ? T = { target: y, delay: b } : T = { ...y, delay: b };
          const C = this.getActionFromDelayedTransition(T);
          v.push(C.entry), g.push(C.exit);
        }
      return { entries: v, exits: g };
    }), x(this, "executeActions", (c, l) => {
      var v;
      const d = kr(c, this.guardMap)(this.contextSnapshot, l, this.guardMeta);
      for (const g of Ge(d)) {
        const b = De(g) ? (v = this.actionMap) == null ? void 0 : v[g] : g;
        Nr(
          De(g) && !b,
          `[@zag-js/core > execute-actions] No implementation found for action: \`${g}\``
        ), b == null || b(this.state.context, l, this.meta);
      }
    }), x(this, "executeActivities", (c, l, d) => {
      var v;
      for (const g of l) {
        const b = De(g) ? (v = this.activityMap) == null ? void 0 : v[g] : g;
        if (!b) {
          Nr(`[@zag-js/core > execute-activity] No implementation found for activity: \`${g}\``);
          continue;
        }
        const y = b(this.state.context, c, this.meta);
        y && this.addActivityCleanup(d ?? this.state.value, y);
      }
    }), x(this, "createEveryActivities", (c, l) => {
      if (!c)
        return;
      const d = he(
        "machine.every"
        /* Every */
      );
      if (nn(c)) {
        const v = Ge(c).find((T) => {
          const C = T.delay, L = Un(C, this.delayMap)(this.contextSnapshot, d);
          return $o(T.guard, this.guardMap)(this.contextSnapshot, d, this.guardMeta) ?? L != null;
        });
        if (!v)
          return;
        const b = Un(v.delay, this.delayMap)(this.contextSnapshot, d);
        l(() => {
          const T = globalThis.setInterval(() => {
            this.executeActions(v.actions, d);
          }, b);
          return () => {
            globalThis.clearInterval(T);
          };
        });
      } else
        for (const v in c) {
          const g = c == null ? void 0 : c[v], y = Un(v, this.delayMap)(this.contextSnapshot, d);
          l(() => {
            const C = globalThis.setInterval(() => {
              this.executeActions(g, d);
            }, y);
            return () => {
              globalThis.clearInterval(C);
            };
          });
        }
    }), x(this, "setEvent", (c) => {
      this.state.previousEvent = this.state.event, this.state.event = Hi(he(c));
    }), x(this, "performExitEffects", (c, l) => {
      const d = this.state.value;
      if (d === "")
        return;
      const v = c ? this.getStateNode(c) : void 0;
      this.stopActivities(d);
      const g = kr(v == null ? void 0 : v.exit, this.guardMap)(this.contextSnapshot, l, this.guardMeta), b = Ge(g), y = this.delayedEvents.get(d);
      y && b.push(...y), this.executeActions(b, l), this.eventListeners.clear();
    }), x(this, "performEntryEffects", (c, l) => {
      const d = this.getStateNode(c), v = Ge(d == null ? void 0 : d.activities);
      this.createEveryActivities(d == null ? void 0 : d.every, (T) => {
        v.unshift(T);
      }), v.length > 0 && this.executeActivities(l, v);
      const g = kr(d == null ? void 0 : d.entry, this.guardMap)(
        this.contextSnapshot,
        l,
        this.guardMeta
      ), b = Ge(g), y = this.getDelayedEventActions(c);
      d != null && d.after && y && (this.delayedEvents.set(c, y == null ? void 0 : y.exits), b.push(...y.entries)), this.executeActions(b, l), (d == null ? void 0 : d.type) === "final" && (this.state.done = !0, this.doneListeners.forEach((T) => {
        T(this.stateSnapshot);
      }), this.stop());
    }), x(this, "performTransitionEffects", (c, l) => {
      const d = this.determineTransition(c, l);
      this.executeActions(d == null ? void 0 : d.actions, l);
    }), x(this, "performStateChangeEffects", (c, l, d) => {
      this.setEvent(d);
      const v = l.changed || l.reenter;
      v && this.performExitEffects(c, d), this.performTransitionEffects(l.transition, d), this.setState(l.target), v && this.performEntryEffects(l.target, d);
    }), x(this, "determineTransition", (c, l) => {
      const d = Ac(c, this.guardMap);
      return d == null ? void 0 : d(this.contextSnapshot, l, this.guardMeta);
    }), x(this, "sendParent", (c) => {
      var d;
      this.parent || zn("[@zag-js/core > send-parent] Cannot send event to an unknown parent");
      const l = he(c);
      (d = this.parent) == null || d.send(l);
    }), x(this, "log", (...c) => {
      mc() && this.options.debug && console.log(...c);
    }), x(this, "send", (c) => {
      const l = he(c);
      this.transition(this.state.value, l);
    }), x(this, "transition", (c, l) => {
      var y, T;
      const d = De(c) ? this.getStateNode(c) : c == null ? void 0 : c.stateNode, v = he(l);
      if (!d && !this.config.on) {
        const C = this.status === "Stopped" ? "[@zag-js/core > transition] Cannot transition a stopped machine" : `[@zag-js/core > transition] State does not have a definition for \`state\`: ${c}, \`event\`: ${v.type}`;
        Nr(C);
        return;
      }
      const g = ((y = d == null ? void 0 : d.on) == null ? void 0 : y[v.type]) ?? ((T = this.config.on) == null ? void 0 : T[v.type]), b = this.getNextStateInfo(g, v);
      return this.performStateChangeEffects(this.state.value, b, v), b.stateNode;
    }), x(this, "subscribe", (c) => (this.stateListeners.add(c), this.status === "Running" && c(this.stateSnapshot), () => {
      this.stateListeners.delete(c);
    })), x(this, "onDone", (c) => (this.doneListeners.add(c), this)), x(this, "onTransition", (c) => (this.stateListeners.add(c), this.status === "Running" && c(this.stateSnapshot), this)), x(this, "onChange", (c) => (this.contextListeners.add(c), this)), x(this, "onEvent", (c) => (this.eventListeners.add(c), this)), this.config = Ki(e), this.options = Ki(n ?? {}), this.id = this.config.id ?? `machine-${lc()}`, this.guardMap = ((r = this.options) == null ? void 0 : r.guards) ?? {}, this.actionMap = ((i = this.options) == null ? void 0 : i.actions) ?? {}, this.delayMap = ((o = this.options) == null ? void 0 : o.delays) ?? {}, this.activityMap = ((a = this.options) == null ? void 0 : a.activities) ?? {}, this.sync = ((u = this.options) == null ? void 0 : u.sync) ?? !1, this.state = yc(this.config), this.initialContext = Je(this.state.context);
    const t = he(
      "machine.created"
      /* Created */
    );
    this.executeActions((f = this.config) == null ? void 0 : f.created, t);
  }
  // immutable state value
  get stateSnapshot() {
    return $e(Je(this.state));
  }
  getState() {
    return this.stateSnapshot;
  }
  // immutable context value
  get contextSnapshot() {
    return this.stateSnapshot.context;
  }
  /**
   * A reference to the instance methods of the machine.
   * Useful when spawning child machines and managing the communication between them.
   */
  get self() {
    const e = this;
    return {
      id: this.id,
      send: this.send.bind(this),
      sendParent: this.sendParent.bind(this),
      sendChild: this.sendChild.bind(this),
      stop: this.stop.bind(this),
      stopChild: this.stopChild.bind(this),
      spawn: this.spawn.bind(this),
      get state() {
        return e.stateSnapshot;
      },
      get initialContext() {
        return e.initialContext;
      },
      get initialState() {
        var n;
        return ((n = e.initialState) == null ? void 0 : n.target) ?? "";
      }
    };
  }
  get meta() {
    var e;
    return {
      state: this.stateSnapshot,
      guards: this.guardMap,
      send: this.send.bind(this),
      self: this.self,
      initialContext: this.initialContext,
      initialState: ((e = this.initialState) == null ? void 0 : e.target) ?? "",
      getState: () => this.stateSnapshot,
      getAction: (n) => this.actionMap[n],
      getGuard: (n) => this.guardMap[n]
    };
  }
  get guardMeta() {
    return {
      state: this.stateSnapshot
    };
  }
  get [Symbol.toStringTag]() {
    return "Machine";
  }
}, kt = (e, n) => new Vo(e, n);
function sr(e, n, t) {
  if (!e)
    return;
  const r = e.ownerDocument.defaultView || window, i = new r.MutationObserver((o) => {
    for (const a of o)
      a.type === "attributes" && a.attributeName && n.includes(a.attributeName) && t(a);
  });
  return i.observe(e, { attributes: !0, attributeFilter: n }), () => i.disconnect();
}
function Lc(e, n) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView || window, r = new t.MutationObserver(n);
  return r.observe(e, { childList: !0, subtree: !0 }), () => r.disconnect();
}
function xc(e) {
  const n = {
    each(t) {
      var r;
      for (let i = 0; i < ((r = e.frames) == null ? void 0 : r.length); i += 1) {
        const o = e.frames[i];
        o && t(o);
      }
    },
    addEventListener(t, r, i) {
      return n.each((o) => {
        try {
          o.document.addEventListener(t, r, i);
        } catch (a) {
          console.warn(a);
        }
      }), () => {
        try {
          n.removeEventListener(t, r, i);
        } catch (o) {
          console.warn(o);
        }
      };
    },
    removeEventListener(t, r, i) {
      n.each((o) => {
        try {
          o.document.removeEventListener(t, r, i);
        } catch (a) {
          console.warn(a);
        }
      });
    }
  };
  return n;
}
var di = (e) => typeof e == "object" && e !== null && e.nodeType === 1, Mo = (e) => di(e) && e.tagName === "IFRAME";
function Nc(e) {
  return di(e) ? e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0 : !1;
}
function kc(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
var fi = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type", jo = (e, n = !1) => {
  if (!e)
    return [];
  const t = Array.from(e.querySelectorAll(fi));
  (n == !0 || n == "if-empty" && t.length === 0) && di(e) && dn(e) && t.unshift(e);
  const i = t.filter(dn);
  return i.forEach((o, a) => {
    if (Mo(o) && o.contentDocument) {
      const u = o.contentDocument.body;
      i.splice(a, 1, ...jo(u));
    }
  }), i;
};
function dn(e) {
  return !e || e.closest("[inert]") ? !1 : e.matches(fi) && Nc(e);
}
function pi(e, n) {
  if (!e)
    return [];
  const t = Array.from(e.querySelectorAll(fi)), r = t.filter(Gi);
  return n && Gi(e) && r.unshift(e), r.forEach((i, o) => {
    if (Mo(i) && i.contentDocument) {
      const a = i.contentDocument.body, u = pi(a);
      r.splice(o, 1, ...u);
    }
  }), !r.length && n ? t : r;
}
function Gi(e) {
  return e != null && e.tabIndex > 0 ? !0 : dn(e) && !kc(e);
}
function Fc(e, n) {
  const t = pi(e, n), r = t[0] || null, i = t[t.length - 1] || null;
  return [r, i];
}
function $c(e, n) {
  const t = pi(e), r = (e == null ? void 0 : e.ownerDocument) || document, i = n ?? r.activeElement;
  if (!i)
    return null;
  const o = t.indexOf(i);
  return t[o + 1] || null;
}
function Vc(e, n = {}) {
  const { triggerElement: t, onFocus: r } = n, i = (e == null ? void 0 : e.ownerDocument) || document, o = i.body;
  function a(u) {
    if (u.key !== "Tab")
      return;
    let f = null;
    const [c, l] = Fc(e, !0), d = !c && !l;
    u.shiftKey && (i.activeElement === c || d) ? f = t : !u.shiftKey && i.activeElement === t ? f = c : !u.shiftKey && (i.activeElement === l || d) && (f = $c(o, t)), f && (u.preventDefault(), (r == null ? void 0 : r(f)) ?? f.focus());
  }
  return i == null || i.addEventListener("keydown", a, !0), () => {
    i == null || i.removeEventListener("keydown", a, !0);
  };
}
function Mc(e, n) {
  const { defer: t, triggerElement: r, ...i } = n, o = t ? re : (u) => u(), a = [];
  return a.push(
    o(() => {
      const u = typeof e == "function" ? e() : e, f = typeof r == "function" ? r() : r;
      a.push(Vc(u, { triggerElement: f, ...i }));
    })
  ), () => {
    a.forEach((u) => u == null ? void 0 : u());
  };
}
var Yi = "pointerdown.outside", qi = "focus.outside";
function jc(e) {
  const n = e.composedPath() ?? [e.target];
  for (const t of n)
    if (Dt(t) && dn(t))
      return !0;
  return !1;
}
function Bc(e, n) {
  const { exclude: t, onFocusOutside: r, onPointerDownOutside: i, onInteractOutside: o } = n;
  if (!e)
    return;
  const a = ei(e), u = bs(e), f = xc(u);
  function c(y) {
    const T = Xn(y);
    return !Dt(T) || sn(e, T) ? !1 : !(t != null && t(T));
  }
  let l;
  function d(y) {
    function T() {
      if (!(!e || !c(y))) {
        if (i || o) {
          const C = jr(i, o);
          e.addEventListener(Yi, C, { once: !0 });
        }
        Pi(e, Yi, {
          bubbles: !1,
          cancelable: !0,
          detail: {
            originalEvent: y,
            contextmenu: _s(y),
            focusable: jc(y)
          }
        });
      }
    }
    y.pointerType === "touch" ? (f.removeEventListener("click", T), a.removeEventListener("click", T), l = T, a.addEventListener("click", T, { once: !0 }), f.addEventListener("click", T, { once: !0 })) : T();
  }
  const v = /* @__PURE__ */ new Set(), g = setTimeout(() => {
    v.add(f.addEventListener("pointerdown", d, !0)), v.add(Qn(a, "pointerdown", d, !0));
  }, 0);
  function b(y) {
    if (!(!e || !c(y))) {
      if (r || o) {
        const T = jr(r, o);
        e.addEventListener(qi, T, { once: !0 });
      }
      Pi(e, qi, {
        bubbles: !1,
        cancelable: !0,
        detail: {
          originalEvent: y,
          contextmenu: !1,
          focusable: dn(Xn(y))
        }
      });
    }
  }
  return v.add(Qn(a, "focusin", b, !0)), v.add(f.addEventListener("focusin", b, !0)), () => {
    clearTimeout(g), l && (f.removeEventListener("click", l), a.removeEventListener("click", l)), v.forEach((y) => y());
  };
}
function Bo(e, n) {
  const { defer: t } = n, r = t ? re : (o) => o(), i = [];
  return i.push(
    r(() => {
      const o = typeof e == "function" ? e() : e;
      i.push(Bc(o, n));
    })
  ), () => {
    i.forEach((o) => o == null ? void 0 : o());
  };
}
var Ho = {
  border: "0",
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
  wordWrap: "normal"
};
function Hc(e) {
  Object.assign(e.style, Ho);
}
var Wn = "__live-region__";
function Uc(e = {}) {
  const { level: n = "polite", document: t = document, root: r, delay: i = 0 } = e, o = t.defaultView ?? window, a = r ?? t.body;
  function u(c, l) {
    const d = t.getElementById(Wn);
    d == null || d.remove(), l = l ?? i;
    const v = t.createElement("span");
    v.id = Wn, v.dataset.liveAnnouncer = "true";
    const g = n !== "assertive" ? "status" : "alert";
    v.setAttribute("aria-live", n), v.setAttribute("role", g), Hc(v), a.appendChild(v), o.setTimeout(() => {
      v.textContent = c;
    }, l);
  }
  function f() {
    const c = t.getElementById(Wn);
    c == null || c.remove();
  }
  return {
    announce: u,
    destroy: f,
    toJSON() {
      return Wn;
    }
  };
}
var { and: Kn, not: Wc } = ui;
function Kc(e) {
  const n = pt(e);
  return kt(
    {
      id: "combobox",
      initial: n.autoFocus ? "focused" : "idle",
      context: {
        loop: !0,
        openOnClick: !1,
        ariaHidden: !0,
        focusedId: null,
        focusedOptionData: null,
        navigationData: null,
        selectionData: null,
        inputValue: "",
        liveRegion: null,
        focusOnClear: !0,
        selectInputOnFocus: !1,
        selectOnTab: !0,
        isHovering: !1,
        isKeyboardEvent: !1,
        allowCustomValue: !1,
        isCustomValue: (t) => t.inputValue !== t.previousValue,
        inputBehavior: "none",
        selectionBehavior: "set",
        ...n,
        positioning: {
          placement: "bottom",
          flip: !1,
          sameWidth: !0,
          ...n.positioning
        },
        translations: {
          triggerLabel: "Toggle suggestions",
          clearTriggerLabel: "Clear value",
          navigationHint: "use the up and down keys to navigate. Press the enter key to select",
          countAnnouncement: (t) => `${t} ${t === 1 ? "option" : "options"} available`,
          ...n.translations
        }
      },
      computed: {
        isInputValueEmpty: (t) => t.inputValue.length === 0,
        isInteractive: (t) => !(t.readOnly || t.disabled),
        autoComplete: (t) => t.inputBehavior === "autocomplete",
        autoHighlight: (t) => t.inputBehavior === "autohighlight"
      },
      watch: {
        inputValue: "invokeOnInputChange",
        navigationData: "invokeOnHighlight",
        selectionData: ["invokeOnSelect", "blurInputIfNeeded"],
        focusedId: "setSectionLabel"
      },
      entry: ["setupLiveRegion"],
      exit: ["removeLiveRegion"],
      activities: ["syncInputValue"],
      on: {
        SET_VALUE: {
          actions: ["setInputValue", "setSelectionData"]
        },
        SET_INPUT_VALUE: {
          actions: "setInputValue"
        },
        CLEAR_VALUE: [
          {
            guard: "focusOnClear",
            target: "focused",
            actions: ["clearInputValue", "clearSelectedValue"]
          },
          {
            actions: ["clearInputValue", "clearSelectedValue"]
          }
        ],
        POINTER_OVER: {
          actions: "setIsHovering"
        },
        POINTER_LEAVE: {
          actions: "clearIsHovering"
        }
      },
      states: {
        idle: {
          tags: ["idle"],
          entry: ["scrollToTop", "clearFocusedOption"],
          on: {
            CLICK_BUTTON: {
              target: "interacting",
              actions: ["focusInput", "invokeOnOpen"]
            },
            CLICK_INPUT: {
              guard: "openOnClick",
              target: "interacting",
              actions: "invokeOnOpen"
            },
            FOCUS: "focused"
          }
        },
        focused: {
          tags: ["focused"],
          entry: ["focusInput", "scrollToTop", "clearFocusedOption"],
          activities: ["trackInteractOutside"],
          on: {
            CHANGE: {
              target: "suggesting",
              actions: "setInputValue"
            },
            BLUR: "idle",
            ESCAPE: {
              guard: Kn("isCustomValue", Wc("allowCustomValue")),
              actions: "revertInputValue"
            },
            CLICK_INPUT: {
              guard: "openOnClick",
              target: "interacting",
              actions: ["focusInput", "invokeOnOpen"]
            },
            CLICK_BUTTON: {
              target: "interacting",
              actions: ["focusInput", "invokeOnOpen"]
            },
            POINTER_OVER: {
              actions: "setIsHovering"
            },
            ARROW_UP: [
              {
                guard: "autoComplete",
                target: "interacting",
                actions: "invokeOnOpen"
              },
              {
                target: "interacting",
                actions: ["focusLastOption", "invokeOnOpen"]
              }
            ],
            ARROW_DOWN: [
              {
                guard: "autoComplete",
                target: "interacting",
                actions: "invokeOnOpen"
              },
              {
                target: "interacting",
                actions: ["focusFirstOption", "invokeOnOpen"]
              }
            ],
            ALT_ARROW_DOWN: {
              target: "interacting",
              actions: ["focusInput", "invokeOnOpen"]
            }
          }
        },
        suggesting: {
          tags: ["open", "focused"],
          activities: [
            "trackInteractOutside",
            "scrollOptionIntoView",
            "computePlacement",
            "trackOptionNodes",
            "hideOtherElements"
          ],
          entry: ["focusInput", "invokeOnOpen"],
          on: {
            ARROW_DOWN: {
              target: "interacting",
              actions: "focusNextOption"
            },
            ARROW_UP: {
              target: "interacting",
              actions: "focusPrevOption"
            },
            ALT_ARROW_UP: "focused",
            HOME: {
              target: "interacting",
              actions: ["focusFirstOption", "preventDefault"]
            },
            END: {
              target: "interacting",
              actions: ["focusLastOption", "preventDefault"]
            },
            ENTER: [
              {
                guard: Kn("hasFocusedOption", "autoComplete"),
                target: "focused",
                actions: "selectActiveOption"
              },
              {
                guard: "hasFocusedOption",
                target: "focused",
                actions: "selectOption"
              }
            ],
            CHANGE: [
              {
                guard: "autoHighlight",
                actions: ["clearFocusedOption", "setInputValue", "focusFirstOption"]
              },
              {
                actions: ["clearFocusedOption", "setInputValue"]
              }
            ],
            ESCAPE: {
              target: "focused",
              actions: "invokeOnClose"
            },
            POINTEROVER_OPTION: [
              {
                guard: "autoComplete",
                target: "interacting",
                actions: "setActiveOption"
              },
              {
                target: "interacting",
                actions: ["setActiveOption", "setNavigationData"]
              }
            ],
            BLUR: {
              target: "idle",
              actions: "invokeOnClose"
            },
            CLICK_BUTTON: {
              target: "focused",
              actions: "invokeOnClose"
            },
            CLICK_OPTION: {
              target: "focused",
              actions: ["selectOption", "invokeOnClose"]
            }
          }
        },
        interacting: {
          tags: ["open", "focused"],
          activities: ["scrollOptionIntoView", "trackInteractOutside", "computePlacement", "hideOtherElements"],
          entry: "focusMatchingOption",
          on: {
            HOME: {
              actions: ["focusFirstOption", "preventDefault"]
            },
            END: {
              actions: ["focusLastOption", "preventDefault"]
            },
            ARROW_DOWN: [
              {
                guard: Kn("autoComplete", "isLastOptionFocused"),
                actions: ["clearFocusedOption", "scrollToTop"]
              },
              { actions: "focusNextOption" }
            ],
            ARROW_UP: [
              {
                guard: Kn("autoComplete", "isFirstOptionFocused"),
                actions: "clearFocusedOption"
              },
              {
                actions: "focusPrevOption"
              }
            ],
            ALT_UP: {
              target: "focused",
              actions: ["selectOption", "invokeOnClose"]
            },
            CLEAR_FOCUS: {
              actions: "clearFocusedOption"
            },
            TAB: {
              guard: "selectOnTab",
              target: "idle",
              actions: ["selectOption", "invokeOnClose"]
            },
            ENTER: {
              target: "focused",
              actions: ["selectOption", "invokeOnClose"]
            },
            CHANGE: [
              {
                guard: "autoComplete",
                target: "suggesting",
                actions: ["commitNavigationData", "setInputValue"]
              },
              {
                target: "suggesting",
                actions: ["clearFocusedOption", "setInputValue"]
              }
            ],
            POINTEROVER_OPTION: [
              {
                guard: "autoComplete",
                actions: "setActiveOption"
              },
              {
                actions: ["setActiveOption", "setNavigationData"]
              }
            ],
            CLICK_OPTION: {
              target: "focused",
              actions: ["selectOption", "invokeOnClose"]
            },
            ESCAPE: {
              target: "focused",
              actions: "invokeOnClose"
            },
            CLICK_BUTTON: {
              target: "focused",
              actions: "invokeOnClose"
            },
            BLUR: {
              target: "idle",
              actions: "invokeOnClose"
            }
          }
        }
      }
    },
    {
      guards: {
        openOnClick: (t) => !!t.openOnClick,
        isInputValueEmpty: (t) => t.isInputValueEmpty,
        focusOnClear: (t) => !!t.focusOnClear,
        autoFocus: (t) => !!t.autoFocus,
        autoComplete: (t) => t.autoComplete,
        autoHighlight: (t) => t.autoHighlight,
        isFirstOptionFocused: (t) => {
          var r;
          return ((r = D.getFirstEl(t)) == null ? void 0 : r.id) === t.focusedId;
        },
        isLastOptionFocused: (t) => {
          var r;
          return ((r = D.getLastEl(t)) == null ? void 0 : r.id) === t.focusedId;
        },
        isCustomValue: (t) => {
          var r, i;
          return !!((i = t.isCustomValue) != null && i.call(t, { inputValue: t.inputValue, previousValue: (r = t.selectionData) == null ? void 0 : r.value }));
        },
        allowCustomValue: (t) => !!t.allowCustomValue,
        hasFocusedOption: (t) => !!t.focusedId,
        selectOnTab: (t) => !!t.selectOnTab
      },
      activities: {
        syncInputValue: (t) => {
          const r = D.getInputEl(t);
          return sr(r, ["data-value"], () => {
            if (!r)
              return;
            const i = r.dataset.value || "";
            r.value = i, r.selectionStart = i.length, r.selectionEnd = i.length;
          });
        },
        trackInteractOutside(t, r, { send: i }) {
          return Bo(D.getInputEl(t), {
            exclude(o) {
              return [D.getContentEl(t), D.getTriggerEl(t)].some((u) => sn(u, o));
            },
            onInteractOutside(o) {
              var a;
              (a = t.onInteractOutside) == null || a.call(t, o), !o.defaultPrevented && i({ type: "BLUR", src: "interact-outside" });
            }
          });
        },
        hideOtherElements(t) {
          if (t.ariaHidden)
            return _o([D.getInputEl(t), D.getContentEl(t), D.getTriggerEl(t)]);
        },
        computePlacement(t) {
          return t.currentPlacement = t.positioning.placement, Ao(D.getControlEl(t), D.getPositionerEl(t), {
            ...t.positioning,
            onComplete(r) {
              t.currentPlacement = r.placement;
            },
            onCleanup() {
              t.currentPlacement = void 0;
            }
          });
        },
        // in event the options are fetched (async), we still want to auto-highlight the first option
        trackOptionNodes(t, r, i) {
          if (!t.autoHighlight)
            return;
          const o = i.getAction("focusFirstOption"), a = () => o(t, r, i);
          return a(), Lc(D.getContentEl(t), a);
        },
        scrollOptionIntoView(t, r, { getState: i }) {
          const o = D.getInputEl(t);
          return sr(o, ["aria-activedescendant"], () => {
            const a = i().event;
            if (!/(ARROW_UP|ARROW_DOWN|HOME|END|TAB)/.test(a.type))
              return;
            const f = D.getActiveOptionEl(t);
            f == null || f.scrollIntoView({ block: "nearest" }), t.autoComplete && D.focusInput(t);
          });
        }
      },
      actions: {
        setupLiveRegion(t) {
          t.liveRegion = Uc({
            level: "assertive",
            document: D.getDoc(t)
          });
        },
        removeLiveRegion(t) {
          var r;
          (r = t.liveRegion) == null || r.destroy();
        },
        setActiveOption(t, r) {
          const { label: i, id: o, value: a } = r;
          t.focusedId = o, t.focusedOptionData = { label: i, value: a };
        },
        setNavigationData(t, r) {
          const { label: i, value: o } = r;
          t.navigationData = { label: i, value: o };
        },
        clearNavigationData(t) {
          t.navigationData = null;
        },
        commitNavigationData(t) {
          t.navigationData && (t.inputValue = t.navigationData.label, t.navigationData = null);
        },
        clearFocusedOption(t) {
          t.focusedId = null, t.focusedOptionData = null, t.navigationData = null;
        },
        selectActiveOption(t) {
          t.focusedOptionData && (t.selectionData = t.focusedOptionData, t.inputValue = t.focusedOptionData.label);
        },
        selectOption(t, r) {
          const i = !!r.value && !!r.label;
          t.selectionData = i ? {
            label: r.label,
            value: r.value
          } : t.navigationData;
          let o;
          t.selectionData && (t.selectionBehavior === "set" && (o = t.selectionData.label), t.selectionBehavior === "clear" && (o = ""), o != null && (t.inputValue = o));
        },
        blurInputIfNeeded(t) {
          t.autoComplete || !t.blurOnSelect || re(() => {
            var r;
            (r = D.getInputEl(t)) == null || r.blur();
          });
        },
        focusInput(t, r) {
          r.type !== "CHANGE" && D.focusInput(t);
        },
        setInputValue(t, r) {
          const i = r.type === "SET_VALUE" ? r.label : r.value;
          t.inputValue = i;
        },
        clearInputValue(t) {
          t.inputValue = "";
        },
        revertInputValue(t) {
          t.selectionData && (t.inputValue = t.selectionData.label);
        },
        setSelectionData(t, r) {
          const { label: i, value: o } = r;
          t.selectionData = { label: i, value: o };
        },
        clearSelectedValue(t) {
          t.selectionData = null;
        },
        scrollToTop(t) {
          const r = D.getContentEl(t);
          r && (r.scrollTop = 0);
        },
        invokeOnInputChange(t) {
          var r;
          (r = t.onInputChange) == null || r.call(t, { value: t.inputValue });
        },
        invokeOnHighlight(t) {
          var a;
          const { label: r, value: i } = t.navigationData ?? {}, o = D.getMatchingOptionEl(t, i);
          (a = t.onHighlight) == null || a.call(t, { label: r, value: i, relatedTarget: o });
        },
        invokeOnSelect(t) {
          var a;
          const { label: r, value: i } = t.selectionData ?? {}, o = D.getMatchingOptionEl(t, i);
          (a = t.onSelect) == null || a.call(t, { label: r, value: i, relatedTarget: o });
        },
        invokeOnOpen(t) {
          var r;
          (r = t.onOpen) == null || r.call(t);
        },
        invokeOnClose(t) {
          var r;
          (r = t.onClose) == null || r.call(t);
        },
        highlightFirstOption(t) {
          re(() => {
            Uo(t, D.getFirstEl(t));
          });
        },
        focusFirstOption(t) {
          re(() => {
            Jt(t, D.getFirstEl(t));
          });
        },
        focusLastOption(t) {
          re(() => {
            Jt(t, D.getLastEl(t));
          });
        },
        focusNextOption(t) {
          re(() => {
            const r = D.getNextEl(t, t.focusedId ?? "");
            Jt(t, r);
          });
        },
        focusPrevOption(t) {
          re(() => {
            let r = D.getPrevEl(t, t.focusedId ?? "");
            Jt(t, r);
          });
        },
        focusMatchingOption(t) {
          re(() => {
            var i;
            const r = D.getMatchingOptionEl(t, (i = t.selectionData) == null ? void 0 : i.value);
            r == null || r.scrollIntoView({ block: "nearest" }), Jt(t, r);
          });
        },
        announceOptionCount(t) {
          re(() => {
            var o;
            const r = D.getOptionCount(t);
            if (!r)
              return;
            const i = t.translations.countAnnouncement(r);
            (o = t.liveRegion) == null || o.announce(i);
          });
        },
        setIsHovering(t) {
          t.isHovering = !0;
        },
        clearIsHovering(t) {
          t.isHovering = !1;
        },
        preventDefault(t, r) {
          r.preventDefault();
        },
        setSectionLabel(t) {
          const r = D.getClosestSectionLabel(t);
          r && (t.sectionLabel = r);
        }
      }
    }
  );
}
function Uo(e, n) {
  if (!n)
    return;
  const t = D.getOptionData(n);
  return e.focusedId = n.id, e.focusedOptionData = t, t;
}
function Jt(e, n) {
  if (!n || n.id === e.focusedId)
    return;
  const t = Uo(e, n);
  e.navigationData = t;
}
var cr = { exports: {} };
cr.exports;
(function(e, n) {
  var t = 200, r = "Expected a function", i = "__lodash_hash_undefined__", o = 1, a = 2, u = 1 / 0, f = 9007199254740991, c = "[object Arguments]", l = "[object Array]", d = "[object Boolean]", v = "[object Date]", g = "[object Error]", b = "[object Function]", y = "[object GeneratorFunction]", T = "[object Map]", C = "[object Number]", E = "[object Object]", L = "[object Promise]", V = "[object RegExp]", B = "[object Set]", F = "[object String]", O = "[object Symbol]", I = "[object WeakMap]", w = "[object ArrayBuffer]", P = "[object DataView]", A = "[object Float32Array]", M = "[object Float64Array]", U = "[object Int8Array]", X = "[object Int16Array]", ne = "[object Int32Array]", ee = "[object Uint8Array]", ce = "[object Uint8ClampedArray]", Re = "[object Uint16Array]", Ae = "[object Uint32Array]", Te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ze = /^\w*$/, gt = /^\./, ht = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hr = /[\\^$.*+?()[\]{}|]/g, vr = /\\(\\)?/g, $t = /^\[object .+?Constructor\]$/, Vt = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[A] = Z[M] = Z[U] = Z[X] = Z[ne] = Z[ee] = Z[ce] = Z[Re] = Z[Ae] = !0, Z[c] = Z[l] = Z[w] = Z[d] = Z[P] = Z[v] = Z[g] = Z[b] = Z[T] = Z[C] = Z[E] = Z[V] = Z[B] = Z[F] = Z[I] = !1;
  var vt = typeof jn == "object" && jn && jn.Object === Object && jn, bt = typeof self == "object" && self && self.Object === Object && self, Pe = vt || bt || Function("return this")(), Mt = n && !n.nodeType && n, hn = Mt && !0 && e && !e.nodeType && e, br = hn && hn.exports === Mt, Qe = br && vt.process, et = function() {
    try {
      return Qe && Qe.binding("util");
    } catch {
    }
  }(), jt = et && et.isTypedArray;
  function vn(s, p, m, R) {
    for (var $ = -1, k = s ? s.length : 0; ++$ < k; ) {
      var G = s[$];
      p(R, G, m(G), s);
    }
    return R;
  }
  function yt(s, p) {
    for (var m = -1, R = s ? s.length : 0; ++m < R; )
      if (p(s[m], m, s))
        return !0;
    return !1;
  }
  function yr(s) {
    return function(p) {
      return p == null ? void 0 : p[s];
    };
  }
  function mr(s, p) {
    for (var m = -1, R = Array(s); ++m < s; )
      R[m] = p(m);
    return R;
  }
  function Bt(s) {
    return function(p) {
      return s(p);
    };
  }
  function Er(s, p) {
    return s == null ? void 0 : s[p];
  }
  function Ht(s) {
    var p = !1;
    if (s != null && typeof s.toString != "function")
      try {
        p = !!(s + "");
      } catch {
      }
    return p;
  }
  function bn(s) {
    var p = -1, m = Array(s.size);
    return s.forEach(function(R, $) {
      m[++p] = [$, R];
    }), m;
  }
  function yn(s, p) {
    return function(m) {
      return s(p(m));
    };
  }
  function tt(s) {
    var p = -1, m = Array(s.size);
    return s.forEach(function(R) {
      m[++p] = R;
    }), m;
  }
  var Or = Array.prototype, mn = Function.prototype, nt = Object.prototype, rt = Pe["__core-js_shared__"], En = function() {
    var s = /[^.]+$/.exec(rt && rt.keys && rt.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), On = mn.toString, be = nt.hasOwnProperty, Me = nt.toString, Tr = RegExp(
    "^" + On.call(be).replace(hr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Tn = Pe.Symbol, wn = Pe.Uint8Array, Ut = nt.propertyIsEnumerable, In = Or.splice, je = yn(Object.keys, Object), it = Tt(Pe, "DataView"), Le = Tt(Pe, "Map"), mt = Tt(Pe, "Promise"), Wt = Tt(Pe, "Set"), Et = Tt(Pe, "WeakMap"), ot = Tt(Object, "create"), Cn = at(it), Sn = at(Le), wr = at(mt), Ir = at(Wt), Rn = at(Et), Ot = Tn ? Tn.prototype : void 0, Kt = Ot ? Ot.valueOf : void 0, An = Ot ? Ot.toString : void 0;
  function xe(s) {
    var p = -1, m = s ? s.length : 0;
    for (this.clear(); ++p < m; ) {
      var R = s[p];
      this.set(R[0], R[1]);
    }
  }
  function h() {
    this.__data__ = ot ? ot(null) : {};
  }
  function S(s) {
    return this.has(s) && delete this.__data__[s];
  }
  function _(s) {
    var p = this.__data__;
    if (ot) {
      var m = p[s];
      return m === i ? void 0 : m;
    }
    return be.call(p, s) ? p[s] : void 0;
  }
  function j(s) {
    var p = this.__data__;
    return ot ? p[s] !== void 0 : be.call(p, s);
  }
  function J(s, p) {
    var m = this.__data__;
    return m[s] = ot && p === void 0 ? i : p, this;
  }
  xe.prototype.clear = h, xe.prototype.delete = S, xe.prototype.get = _, xe.prototype.has = j, xe.prototype.set = J;
  function Y(s) {
    var p = -1, m = s ? s.length : 0;
    for (this.clear(); ++p < m; ) {
      var R = s[p];
      this.set(R[0], R[1]);
    }
  }
  function q() {
    this.__data__ = [];
  }
  function K(s) {
    var p = this.__data__, m = Dn(p, s);
    if (m < 0)
      return !1;
    var R = p.length - 1;
    return m == R ? p.pop() : In.call(p, m, 1), !0;
  }
  function de(s) {
    var p = this.__data__, m = Dn(p, s);
    return m < 0 ? void 0 : p[m][1];
  }
  function ie(s) {
    return Dn(this.__data__, s) > -1;
  }
  function ae(s, p) {
    var m = this.__data__, R = Dn(m, s);
    return R < 0 ? m.push([s, p]) : m[R][1] = p, this;
  }
  Y.prototype.clear = q, Y.prototype.delete = K, Y.prototype.get = de, Y.prototype.has = ie, Y.prototype.set = ae;
  function se(s) {
    var p = -1, m = s ? s.length : 0;
    for (this.clear(); ++p < m; ) {
      var R = s[p];
      this.set(R[0], R[1]);
    }
  }
  function Be() {
    this.__data__ = {
      hash: new xe(),
      map: new (Le || Y)(),
      string: new xe()
    };
  }
  function Pn(s) {
    return Ln(this, s).delete(s);
  }
  function we(s) {
    return Ln(this, s).get(s);
  }
  function na(s) {
    return Ln(this, s).has(s);
  }
  function ra(s, p) {
    return Ln(this, s).set(s, p), this;
  }
  se.prototype.clear = Be, se.prototype.delete = Pn, se.prototype.get = we, se.prototype.has = na, se.prototype.set = ra;
  function _n(s) {
    var p = -1, m = s ? s.length : 0;
    for (this.__data__ = new se(); ++p < m; )
      this.add(s[p]);
  }
  function ia(s) {
    return this.__data__.set(s, i), this;
  }
  function oa(s) {
    return this.__data__.has(s);
  }
  _n.prototype.add = _n.prototype.push = ia, _n.prototype.has = oa;
  function Ne(s) {
    this.__data__ = new Y(s);
  }
  function aa() {
    this.__data__ = new Y();
  }
  function sa(s) {
    return this.__data__.delete(s);
  }
  function ca(s) {
    return this.__data__.get(s);
  }
  function la(s) {
    return this.__data__.has(s);
  }
  function ua(s, p) {
    var m = this.__data__;
    if (m instanceof Y) {
      var R = m.__data__;
      if (!Le || R.length < t - 1)
        return R.push([s, p]), this;
      m = this.__data__ = new se(R);
    }
    return m.set(s, p), this;
  }
  Ne.prototype.clear = aa, Ne.prototype.delete = sa, Ne.prototype.get = ca, Ne.prototype.has = la, Ne.prototype.set = ua;
  function da(s, p) {
    var m = Ue(s) || Oi(s) ? mr(s.length, String) : [], R = m.length, $ = !!R;
    for (var k in s)
      (p || be.call(s, k)) && !($ && (k == "length" || bi(k, R))) && m.push(k);
    return m;
  }
  function Dn(s, p) {
    for (var m = s.length; m--; )
      if (Ei(s[m][0], p))
        return m;
    return -1;
  }
  function fa(s, p, m, R) {
    return pa(s, function($, k, G) {
      p(R, $, m($), G);
    }), R;
  }
  var pa = Pa(ha), ga = _a();
  function ha(s, p) {
    return s && ga(s, p, $n);
  }
  function gi(s, p) {
    p = xn(p, s) ? [p] : hi(p);
    for (var m = 0, R = p.length; s != null && m < R; )
      s = s[Nn(p[m++])];
    return m && m == R ? s : void 0;
  }
  function va(s) {
    return Me.call(s);
  }
  function ba(s, p) {
    return s != null && p in Object(s);
  }
  function Cr(s, p, m, R, $) {
    return s === p ? !0 : s == null || p == null || !kn(s) && !Fn(p) ? s !== s && p !== p : ya(s, p, Cr, m, R, $);
  }
  function ya(s, p, m, R, $, k) {
    var G = Ue(s), te = Ue(p), oe = l, le = l;
    G || (oe = He(s), oe = oe == c ? E : oe), te || (le = He(p), le = le == c ? E : le);
    var pe = oe == E && !Ht(s), ge = le == E && !Ht(p), ue = oe == le;
    if (ue && !pe)
      return k || (k = new Ne()), G || Ba(s) ? vi(s, p, m, R, $, k) : Da(s, p, oe, m, R, $, k);
    if (!($ & a)) {
      var ye = pe && be.call(s, "__wrapped__"), me = ge && be.call(p, "__wrapped__");
      if (ye || me) {
        var We = ye ? s.value() : s, ke = me ? p.value() : p;
        return k || (k = new Ne()), m(We, ke, R, $, k);
      }
    }
    return ue ? (k || (k = new Ne()), La(s, p, m, R, $, k)) : !1;
  }
  function ma(s, p, m, R) {
    var $ = m.length, k = $, G = !R;
    if (s == null)
      return !k;
    for (s = Object(s); $--; ) {
      var te = m[$];
      if (G && te[2] ? te[1] !== s[te[0]] : !(te[0] in s))
        return !1;
    }
    for (; ++$ < k; ) {
      te = m[$];
      var oe = te[0], le = s[oe], pe = te[1];
      if (G && te[2]) {
        if (le === void 0 && !(oe in s))
          return !1;
      } else {
        var ge = new Ne();
        if (R)
          var ue = R(le, pe, oe, s, p, ge);
        if (!(ue === void 0 ? Cr(pe, le, R, o | a, ge) : ue))
          return !1;
      }
    }
    return !0;
  }
  function Ea(s) {
    if (!kn(s) || Fa(s))
      return !1;
    var p = Ti(s) || Ht(s) ? Tr : $t;
    return p.test(at(s));
  }
  function Oa(s) {
    return Fn(s) && Ar(s.length) && !!Z[Me.call(s)];
  }
  function Ta(s) {
    return typeof s == "function" ? s : s == null ? Ka : typeof s == "object" ? Ue(s) ? Ca(s[0], s[1]) : Ia(s) : Ga(s);
  }
  function wa(s) {
    if (!$a(s))
      return je(s);
    var p = [];
    for (var m in Object(s))
      be.call(s, m) && m != "constructor" && p.push(m);
    return p;
  }
  function Ia(s) {
    var p = xa(s);
    return p.length == 1 && p[0][2] ? mi(p[0][0], p[0][1]) : function(m) {
      return m === s || ma(m, s, p);
    };
  }
  function Ca(s, p) {
    return xn(s) && yi(p) ? mi(Nn(s), p) : function(m) {
      var R = Ua(m, s);
      return R === void 0 && R === p ? Wa(m, s) : Cr(p, R, void 0, o | a);
    };
  }
  function Sa(s) {
    return function(p) {
      return gi(p, s);
    };
  }
  function Ra(s) {
    if (typeof s == "string")
      return s;
    if (Pr(s))
      return An ? An.call(s) : "";
    var p = s + "";
    return p == "0" && 1 / s == -u ? "-0" : p;
  }
  function hi(s) {
    return Ue(s) ? s : Va(s);
  }
  function Aa(s, p) {
    return function(m, R) {
      var $ = Ue(m) ? vn : fa, k = p ? p() : {};
      return $(m, s, Ta(R), k);
    };
  }
  function Pa(s, p) {
    return function(m, R) {
      if (m == null)
        return m;
      if (!Rr(m))
        return s(m, R);
      for (var $ = m.length, k = p ? $ : -1, G = Object(m); (p ? k-- : ++k < $) && R(G[k], k, G) !== !1; )
        ;
      return m;
    };
  }
  function _a(s) {
    return function(p, m, R) {
      for (var $ = -1, k = Object(p), G = R(p), te = G.length; te--; ) {
        var oe = G[s ? te : ++$];
        if (m(k[oe], oe, k) === !1)
          break;
      }
      return p;
    };
  }
  function vi(s, p, m, R, $, k) {
    var G = $ & a, te = s.length, oe = p.length;
    if (te != oe && !(G && oe > te))
      return !1;
    var le = k.get(s);
    if (le && k.get(p))
      return le == p;
    var pe = -1, ge = !0, ue = $ & o ? new _n() : void 0;
    for (k.set(s, p), k.set(p, s); ++pe < te; ) {
      var ye = s[pe], me = p[pe];
      if (R)
        var We = G ? R(me, ye, pe, p, s, k) : R(ye, me, pe, s, p, k);
      if (We !== void 0) {
        if (We)
          continue;
        ge = !1;
        break;
      }
      if (ue) {
        if (!yt(p, function(ke, st) {
          if (!ue.has(st) && (ye === ke || m(ye, ke, R, $, k)))
            return ue.add(st);
        })) {
          ge = !1;
          break;
        }
      } else if (!(ye === me || m(ye, me, R, $, k))) {
        ge = !1;
        break;
      }
    }
    return k.delete(s), k.delete(p), ge;
  }
  function Da(s, p, m, R, $, k, G) {
    switch (m) {
      case P:
        if (s.byteLength != p.byteLength || s.byteOffset != p.byteOffset)
          return !1;
        s = s.buffer, p = p.buffer;
      case w:
        return !(s.byteLength != p.byteLength || !R(new wn(s), new wn(p)));
      case d:
      case v:
      case C:
        return Ei(+s, +p);
      case g:
        return s.name == p.name && s.message == p.message;
      case V:
      case F:
        return s == p + "";
      case T:
        var te = bn;
      case B:
        var oe = k & a;
        if (te || (te = tt), s.size != p.size && !oe)
          return !1;
        var le = G.get(s);
        if (le)
          return le == p;
        k |= o, G.set(s, p);
        var pe = vi(te(s), te(p), R, $, k, G);
        return G.delete(s), pe;
      case O:
        if (Kt)
          return Kt.call(s) == Kt.call(p);
    }
    return !1;
  }
  function La(s, p, m, R, $, k) {
    var G = $ & a, te = $n(s), oe = te.length, le = $n(p), pe = le.length;
    if (oe != pe && !G)
      return !1;
    for (var ge = oe; ge--; ) {
      var ue = te[ge];
      if (!(G ? ue in p : be.call(p, ue)))
        return !1;
    }
    var ye = k.get(s);
    if (ye && k.get(p))
      return ye == p;
    var me = !0;
    k.set(s, p), k.set(p, s);
    for (var We = G; ++ge < oe; ) {
      ue = te[ge];
      var ke = s[ue], st = p[ue];
      if (R)
        var wi = G ? R(st, ke, ue, p, s, k) : R(ke, st, ue, s, p, k);
      if (!(wi === void 0 ? ke === st || m(ke, st, R, $, k) : wi)) {
        me = !1;
        break;
      }
      We || (We = ue == "constructor");
    }
    if (me && !We) {
      var Vn = s.constructor, Mn = p.constructor;
      Vn != Mn && "constructor" in s && "constructor" in p && !(typeof Vn == "function" && Vn instanceof Vn && typeof Mn == "function" && Mn instanceof Mn) && (me = !1);
    }
    return k.delete(s), k.delete(p), me;
  }
  function Ln(s, p) {
    var m = s.__data__;
    return ka(p) ? m[typeof p == "string" ? "string" : "hash"] : m.map;
  }
  function xa(s) {
    for (var p = $n(s), m = p.length; m--; ) {
      var R = p[m], $ = s[R];
      p[m] = [R, $, yi($)];
    }
    return p;
  }
  function Tt(s, p) {
    var m = Er(s, p);
    return Ea(m) ? m : void 0;
  }
  var He = va;
  (it && He(new it(new ArrayBuffer(1))) != P || Le && He(new Le()) != T || mt && He(mt.resolve()) != L || Wt && He(new Wt()) != B || Et && He(new Et()) != I) && (He = function(s) {
    var p = Me.call(s), m = p == E ? s.constructor : void 0, R = m ? at(m) : void 0;
    if (R)
      switch (R) {
        case Cn:
          return P;
        case Sn:
          return T;
        case wr:
          return L;
        case Ir:
          return B;
        case Rn:
          return I;
      }
    return p;
  });
  function Na(s, p, m) {
    p = xn(p, s) ? [p] : hi(p);
    for (var R, $ = -1, G = p.length; ++$ < G; ) {
      var k = Nn(p[$]);
      if (!(R = s != null && m(s, k)))
        break;
      s = s[k];
    }
    if (R)
      return R;
    var G = s ? s.length : 0;
    return !!G && Ar(G) && bi(k, G) && (Ue(s) || Oi(s));
  }
  function bi(s, p) {
    return p = p ?? f, !!p && (typeof s == "number" || Vt.test(s)) && s > -1 && s % 1 == 0 && s < p;
  }
  function xn(s, p) {
    if (Ue(s))
      return !1;
    var m = typeof s;
    return m == "number" || m == "symbol" || m == "boolean" || s == null || Pr(s) ? !0 : Ze.test(s) || !Te.test(s) || p != null && s in Object(p);
  }
  function ka(s) {
    var p = typeof s;
    return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? s !== "__proto__" : s === null;
  }
  function Fa(s) {
    return !!En && En in s;
  }
  function $a(s) {
    var p = s && s.constructor, m = typeof p == "function" && p.prototype || nt;
    return s === m;
  }
  function yi(s) {
    return s === s && !kn(s);
  }
  function mi(s, p) {
    return function(m) {
      return m == null ? !1 : m[s] === p && (p !== void 0 || s in Object(m));
    };
  }
  var Va = Sr(function(s) {
    s = Ha(s);
    var p = [];
    return gt.test(s) && p.push(""), s.replace(ht, function(m, R, $, k) {
      p.push($ ? k.replace(vr, "$1") : R || m);
    }), p;
  });
  function Nn(s) {
    if (typeof s == "string" || Pr(s))
      return s;
    var p = s + "";
    return p == "0" && 1 / s == -u ? "-0" : p;
  }
  function at(s) {
    if (s != null) {
      try {
        return On.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  var Ma = Aa(function(s, p, m) {
    be.call(s, m) ? s[m].push(p) : s[m] = [p];
  });
  function Sr(s, p) {
    if (typeof s != "function" || p && typeof p != "function")
      throw new TypeError(r);
    var m = function() {
      var R = arguments, $ = p ? p.apply(this, R) : R[0], k = m.cache;
      if (k.has($))
        return k.get($);
      var G = s.apply(this, R);
      return m.cache = k.set($, G), G;
    };
    return m.cache = new (Sr.Cache || se)(), m;
  }
  Sr.Cache = se;
  function Ei(s, p) {
    return s === p || s !== s && p !== p;
  }
  function Oi(s) {
    return ja(s) && be.call(s, "callee") && (!Ut.call(s, "callee") || Me.call(s) == c);
  }
  var Ue = Array.isArray;
  function Rr(s) {
    return s != null && Ar(s.length) && !Ti(s);
  }
  function ja(s) {
    return Fn(s) && Rr(s);
  }
  function Ti(s) {
    var p = kn(s) ? Me.call(s) : "";
    return p == b || p == y;
  }
  function Ar(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= f;
  }
  function kn(s) {
    var p = typeof s;
    return !!s && (p == "object" || p == "function");
  }
  function Fn(s) {
    return !!s && typeof s == "object";
  }
  function Pr(s) {
    return typeof s == "symbol" || Fn(s) && Me.call(s) == O;
  }
  var Ba = jt ? Bt(jt) : Oa;
  function Ha(s) {
    return s == null ? "" : Ra(s);
  }
  function Ua(s, p, m) {
    var R = s == null ? void 0 : gi(s, p);
    return R === void 0 ? m : R;
  }
  function Wa(s, p) {
    return s != null && Na(s, p, ba);
  }
  function $n(s) {
    return Rr(s) ? da(s) : wa(s);
  }
  function Ka(s) {
    return s;
  }
  function Ga(s) {
    return xn(s) ? yr(Nn(s)) : Sa(s);
  }
  e.exports = Ma;
})(cr, cr.exports);
var Gc = cr.exports;
const Yc = /* @__PURE__ */ rs(Gc);
function Wo(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (t = Wo(e[n])) && (r && (r += " "), r += t);
    else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function Oe() {
  for (var e, n, t = 0, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Wo(e)) && (r && (r += " "), r += n);
  return r;
}
function qc(e) {
  return new Proxy({}, {
    get() {
      return e;
    }
  });
}
var Ft = qc((e) => e), Ko = typeof document < "u" ? Ya : Jr;
function Go(e) {
  const { children: n, target: t } = e, r = an(null), i = an(null), [, o] = qa((u) => u + 1, 0);
  Ko(() => {
    if (!r.current)
      return;
    const u = r.current.ownerDocument;
    return i.current = u.createElement("zag-portal"), u.body.appendChild(i.current), o(), () => {
      i.current && u.body.removeChild(i.current);
    };
  }, []);
  const a = (t == null ? void 0 : t.current) ?? i.current;
  return a ? ts(n, a) : _t("span", { ref: r });
}
var { use: zi } = Xr;
function Yo(e, n) {
  const t = n == null ? void 0 : n.sync, r = an(), i = an(), o = za(
    lo(
      (f) => {
        const c = un(e, f, t);
        return f(), c;
      },
      [e, t]
    ),
    () => {
      const f = Je(e, zi);
      try {
        if (r.current && i.current && !No(r.current, f, i.current, /* @__PURE__ */ new WeakMap()))
          return r.current;
      } catch {
      }
      return f;
    },
    () => Je(e, zi)
  ), a = /* @__PURE__ */ new WeakMap();
  Jr(() => {
    r.current = o, i.current = a;
  });
  const u = Xa(() => /* @__PURE__ */ new WeakMap(), []);
  return xo(o, a, u);
}
function zc(e) {
  return [Yo(e.state), e.send];
}
function Xc(e) {
  const n = an();
  return n.current || (n.current = { v: e() }), n.current.v;
}
function Jc(e, n) {
  const { actions: t, state: r, context: i } = n ?? {}, o = Xc(() => {
    const a = typeof e == "function" ? e() : e;
    return i ? a.withContext(i) : a;
  });
  return Ko(() => (o.start(r), o.state.can("SETUP") && o.send("SETUP"), () => {
    o.stop();
  }), []), o.setOptions({ actions: t }), o.setContext(i), o;
}
function gn(e, n) {
  const t = Jc(e, n);
  return [Yo(t.state), t.send, t];
}
function Iu({ children: e, onSelect: n, options: t, part: r, value: i, ...o }) {
  var g, b, y, T, C;
  const a = lo(
    (E) => t.find((L) => L.value === E),
    [t]
  ), [u, f] = Ja(t), [c, l] = gn(
    Kc({
      id: fn()
    }),
    {
      context: {
        ...o,
        inputValue: i ? (g = a(i)) == null ? void 0 : g.label : void 0,
        onOpen() {
          f(t);
        },
        onInputChange(E) {
          ns(() => {
            var V;
            const L = t.filter(
              (B) => B.label.toLowerCase().includes(E.value.toLowerCase())
            );
            f(L.length > 0 ? L : t), (V = o.onInputChange) == null || V.call(o, E);
          });
        },
        onSelect(E) {
          n == null || n(E);
        }
      }
    }
  ), d = sc(c, l, Ft), v = Yc(u, (E) => E.title || "no-groups");
  return Jr(() => {
    i && i !== d.selectedValue && d.setValue(i);
  }, [i]), /* @__PURE__ */ W.jsxs("div", { className: "combobox", children: [
    /* @__PURE__ */ W.jsx("div", { ...d.rootProps, children: /* @__PURE__ */ W.jsxs(
      "div",
      {
        ...d.controlProps,
        className: Oe("relative inline-block max-w-full", (b = r == null ? void 0 : r.control) == null ? void 0 : b.className),
        children: [
          /* @__PURE__ */ W.jsx(
            "input",
            {
              ...d.inputProps,
              className: Oe("select data-[invalid]:select-error w-full", (y = r == null ? void 0 : r.input) == null ? void 0 : y.className)
            }
          ),
          /* @__PURE__ */ W.jsx(
            "button",
            {
              ...d.triggerProps,
              className: Oe("absolute right-0 inset-y-0 pr-10", (T = r == null ? void 0 : r.trigger) == null ? void 0 : T.className)
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ W.jsx("div", { ...d.positionerProps, className: "z-50", children: /* @__PURE__ */ W.jsx(
      "ul",
      {
        ...d.contentProps,
        className: Oe("menu max-h-60 overflow-y-auto flex-nowrap", (C = r == null ? void 0 : r.content) == null ? void 0 : C.className),
        children: Object.entries(v).map(([E, L]) => /* @__PURE__ */ W.jsxs(Za, { children: [
          E !== "no-groups" && /* @__PURE__ */ W.jsx("li", { className: "menu-title", children: E }),
          L.map((V, B) => {
            var F;
            return /* @__PURE__ */ _t(
              "li",
              {
                ...d.getOptionProps({ index: B, label: V.label, value: V.value }),
                className: Oe((F = r == null ? void 0 : r.option) == null ? void 0 : F.className),
                key: V.value
              },
              /* @__PURE__ */ W.jsx("a", { children: (e == null ? void 0 : e(V)) || V.label })
            );
          })
        ] }, E))
      }
    ) })
  ] });
}
var Zc = Ye("select").parts(
  "label",
  "positioner",
  "trigger",
  "option",
  "optionGroup",
  "optionGroupLabel",
  "hiddenSelect",
  "content"
), Ke = Zc.build(), N = pn({
  getContentId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.content) ?? `select:${e.id}:content`;
  },
  getTriggerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.trigger) ?? `select:${e.id}:trigger`;
  },
  getLabelId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.label) ?? `select:${e.id}:label`;
  },
  getOptionId: (e, n) => {
    var t, r;
    return ((r = (t = e.ids) == null ? void 0 : t.option) == null ? void 0 : r.call(t, n)) ?? `select:${e.id}:option:${n}`;
  },
  getHiddenSelectId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.hiddenSelect) ?? `select:${e.id}:select`;
  },
  getPositionerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.positioner) ?? `select:${e.id}:positioner`;
  },
  getOptionGroupId: (e, n) => {
    var t, r;
    return ((r = (t = e.ids) == null ? void 0 : t.optionGroup) == null ? void 0 : r.call(t, n)) ?? `select:${e.id}:optgroup:${n}`;
  },
  getOptionGroupLabelId: (e, n) => {
    var t, r;
    return ((r = (t = e.ids) == null ? void 0 : t.optionGroupLabel) == null ? void 0 : r.call(t, n)) ?? `select:${e.id}:optgroup-label:${n}`;
  },
  getHiddenSelectElement: (e) => N.getById(e, N.getHiddenSelectId(e)),
  getContentElement: (e) => N.getById(e, N.getContentId(e)),
  getTriggerElement: (e) => N.getById(e, N.getTriggerId(e)),
  getPositionerElement: (e) => N.getById(e, N.getPositionerId(e)),
  getOptionElements: (e) => Qr(N.getContentElement(e), "[role=option]:not([data-disabled])"),
  getFirstOption: (e) => Si(N.getContentElement(e), "[role=option]:not([data-disabled])"),
  getLastOption: (e) => Si(N.getContentElement(e), "[role=option]:not([data-disabled]):last-of-type"),
  getNextOption: (e, n) => {
    const t = N.getOptionElements(e);
    return ni(t, n, e.loop);
  },
  getPreviousOption: (e, n) => {
    const t = N.getOptionElements(e);
    return ri(t, n, e.loop);
  },
  getOptionDetails(e) {
    const { label: n, value: t } = e.dataset;
    return { label: n, value: t };
  },
  getMatchingOption(e, n, t) {
    return Jn(N.getOptionElements(e), { state: e.typeahead, key: n, activeId: t });
  },
  getHighlightedOption(e) {
    return e.highlightedId ? N.getById(e, e.highlightedId) : null;
  },
  getClosestOption(e) {
    return Dt(e) ? e.closest("[data-part=option]") : null;
  }
});
function Qc(e) {
  return Rs(e) && "value" in e && "label" in e;
}
function Xi(e) {
  if (!Qc(e))
    throw new TypeError("Expected an option data object");
}
function el(e, n, t) {
  var v;
  const r = e.context.disabled, i = e.context.invalid, o = e.context.isInteractive, a = e.matches("open"), u = e.context.highlightedOption, f = e.context.selectedOption, c = e.context.isTypingAhead;
  function l(g) {
    var y;
    const b = N.getOptionId(e.context, g.value);
    return {
      isDisabled: !!(g.disabled || r),
      isHighlighted: e.context.highlightedId === b,
      isSelected: ((y = e.context.selectedOption) == null ? void 0 : y.value) === g.value
    };
  }
  const d = Po({
    placement: e.context.currentPlacement
  });
  return {
    /**
     * Whether the select is open
     */
    isOpen: a,
    /**
     * The currently highlighted option
     */
    highlightedOption: u,
    /**
     * The currently selected option
     */
    selectedOption: f,
    /**
     * Function to focus the select
     */
    focus() {
      var g;
      (g = N.getTriggerElement(e.context)) == null || g.focus();
    },
    /**
     * Function to open the select
     */
    open() {
      n("OPEN");
    },
    /**
     * Function to close the select
     */
    close() {
      n("CLOSE");
    },
    /**
     * Function to set the selected option
     */
    setSelectedOption(g) {
      Xi(g), n({ type: "SELECT_OPTION", value: g });
    },
    /**
     * Function to set the highlighted option
     */
    setHighlightedOption(g) {
      Xi(g), n({ type: "HIGHLIGHT_OPTION", value: g });
    },
    /**
     * Function to clear the selected option
     */
    clearSelectedOption() {
      n({ type: "CLEAR_SELECTED" });
    },
    /**
     * Returns the state details of an option
     */
    getOptionState: l,
    labelProps: t.label({
      dir: e.context.dir,
      id: N.getLabelId(e.context),
      ...Ke.label.attrs,
      "data-disabled": z(r),
      "data-invalid": z(i),
      "data-readonly": z(e.context.readOnly),
      htmlFor: N.getHiddenSelectId(e.context),
      onClick() {
        var g;
        r || (g = N.getTriggerElement(e.context)) == null || g.focus();
      }
    }),
    positionerProps: t.element({
      ...Ke.positioner.attrs,
      id: N.getPositionerId(e.context),
      style: d.floating
    }),
    triggerProps: t.button({
      id: N.getTriggerId(e.context),
      disabled: r,
      dir: e.context.dir,
      type: "button",
      "aria-controls": N.getContentId(e.context),
      "aria-expanded": a,
      "data-expanded": z(a),
      "aria-haspopup": "listbox",
      "aria-labelledby": N.getLabelId(e.context),
      ...Ke.trigger.attrs,
      "data-disabled": z(r),
      "data-invalid": z(i),
      "aria-invalid": i,
      "data-readonly": z(e.context.readOnly),
      "data-placement": e.context.currentPlacement,
      "data-placeholder-shown": z(!e.context.hasSelectedOption),
      onPointerDown(g) {
        g.button || g.ctrlKey || !o || (g.currentTarget.dataset.pointerType = g.pointerType, !(r || g.pointerType === "touch") && n({ type: "TRIGGER_CLICK" }));
      },
      onClick(g) {
        !o || g.button || g.currentTarget.dataset.pointerType === "touch" && n({ type: "TRIGGER_CLICK" });
      },
      onFocus() {
        n("TRIGGER_FOCUS");
      },
      onBlur() {
        n("TRIGGER_BLUR");
      },
      onKeyDown(g) {
        if (!o)
          return;
        const y = {
          ArrowUp() {
            n({ type: "ARROW_UP" });
          },
          ArrowDown() {
            n({ type: "ARROW_DOWN" });
          },
          ArrowLeft() {
            n({ type: "ARROW_LEFT" });
          },
          ArrowRight() {
            n({ type: "ARROW_RIGHT" });
          },
          Home() {
            n({ type: "HOME" });
          },
          Enter() {
            n({ type: "TRIGGER_CLICK" });
          },
          End() {
            n({ type: "END" });
          },
          Space(T) {
            n(c ? { type: "TYPEAHEAD", key: T.key } : { type: "TRIGGER_KEY" });
          }
        }[er(g, e.context)];
        if (y) {
          y(g), g.preventDefault();
          return;
        }
        Jn.isValidEvent(g) && (n({ type: "TYPEAHEAD", key: g.key }), g.preventDefault());
      }
    }),
    getOptionProps(g) {
      const { value: b, label: y, valueText: T } = g, C = l(g);
      return t.element({
        id: N.getOptionId(e.context, b),
        role: "option",
        ...Ke.option.attrs,
        "data-label": y,
        "data-value": b,
        "data-valuetext": T ?? y,
        "aria-selected": C.isSelected,
        "data-selected": z(C.isSelected),
        "data-focus": z(C.isHighlighted),
        "data-disabled": z(C.isDisabled),
        "aria-disabled": po(C.isDisabled)
      });
    },
    getOptionGroupLabelProps(g) {
      const { htmlFor: b } = g;
      return t.element({
        id: N.getOptionGroupId(e.context, b),
        role: "group",
        ...Ke.optionGroupLabel.attrs
      });
    },
    getOptionGroupProps(g) {
      const { id: b } = g;
      return t.element({
        ...Ke.optionGroup.attrs,
        "data-disabled": z(r),
        id: N.getOptionGroupId(e.context, b),
        "aria-labelledby": N.getOptionGroupLabelId(e.context, b)
      });
    },
    hiddenSelectProps: t.select({
      ...Ke.hiddenSelect.attrs,
      name: e.context.name,
      form: e.context.form,
      disabled: !o,
      "aria-hidden": !0,
      id: N.getHiddenSelectId(e.context),
      defaultValue: (v = e.context.selectedOption) == null ? void 0 : v.value,
      style: Ho,
      tabIndex: -1,
      // Some browser extensions will focus the hidden select.
      // Let's forward the focus to the trigger.
      onFocus() {
        var g;
        (g = N.getTriggerElement(e.context)) == null || g.focus();
      },
      "aria-labelledby": N.getLabelId(e.context)
    }),
    contentProps: t.element({
      hidden: !a,
      dir: e.context.dir,
      id: N.getContentId(e.context),
      role: "listbox",
      ...Ke.content.attrs,
      "aria-activedescendant": e.context.highlightedId || "",
      "aria-labelledby": N.getLabelId(e.context),
      tabIndex: 0,
      onPointerMove(g) {
        if (!o)
          return;
        const b = N.getClosestOption(g.target);
        !b || b.hasAttribute("data-disabled") ? n({ type: "POINTER_LEAVE" }) : n({ type: "POINTER_MOVE", id: b.id, target: b });
      },
      onPointerUp(g) {
        if (!o)
          return;
        const b = N.getClosestOption(g.target);
        !b || b.hasAttribute("data-disabled") || n({ type: "OPTION_CLICK", src: "pointerup", id: b.id });
      },
      onPointerLeave() {
        n({ type: "POINTER_LEAVE" });
      },
      onClick(g) {
        if (!o)
          return;
        const b = N.getClosestOption(g.target);
        !b || b.hasAttribute("data-disabled") || n({ type: "OPTION_CLICK", src: "click", id: b.id });
      },
      onKeyDown(g) {
        if (!o)
          return;
        const b = {
          ArrowUp() {
            n({ type: "ARROW_UP" });
          },
          ArrowDown() {
            n({ type: "ARROW_DOWN" });
          },
          Home() {
            n({ type: "HOME" });
          },
          End() {
            n({ type: "END" });
          },
          Tab(T) {
            T.shiftKey || n({ type: "TAB" });
          },
          Enter() {
            n({ type: "TRIGGER_KEY" });
          },
          Space(T) {
            var C;
            c ? n({ type: "TYPEAHEAD", key: T.key }) : (C = b.Enter) == null || C.call(b, T);
          }
        }, y = b[er(g)];
        if (y) {
          y(g), g.preventDefault();
          return;
        }
        cs(g.target) || Jn.isValidEvent(g) && (n({ type: "TYPEAHEAD", key: g.key }), g.preventDefault());
      }
    })
  };
}
function tl(e, n) {
  const t = (r) => {
    r.key === "Escape" && (n == null || n(r));
  };
  return Qn(ei(e), "keydown", t);
}
var Ie = {
  layers: [],
  branches: [],
  count() {
    return this.layers.length;
  },
  pointerBlockingLayers() {
    return this.layers.filter((e) => e.pointerBlocking);
  },
  topMostPointerBlockingLayer() {
    return [...this.pointerBlockingLayers()].slice(-1)[0];
  },
  hasPointerBlockingLayer() {
    return this.pointerBlockingLayers().length > 0;
  },
  isBelowPointerBlockingLayer(e) {
    var r;
    const n = this.indexOf(e), t = this.topMostPointerBlockingLayer() ? this.indexOf((r = this.topMostPointerBlockingLayer()) == null ? void 0 : r.node) : -1;
    return n < t;
  },
  isTopMost(e) {
    const n = this.layers[this.count() - 1];
    return (n == null ? void 0 : n.node) === e;
  },
  getNestedLayers(e) {
    return Array.from(this.layers).slice(this.indexOf(e) + 1);
  },
  isInNestedLayer(e, n) {
    return this.getNestedLayers(e).some((t) => sn(t.node, n));
  },
  isInBranch(e) {
    return Array.from(this.branches).some((n) => sn(n, e));
  },
  add(e) {
    this.layers.push(e);
  },
  addBranch(e) {
    this.branches.push(e);
  },
  remove(e) {
    const n = this.indexOf(e);
    n < 0 || (n < this.count() - 1 && this.getNestedLayers(e).forEach((r) => r.dismiss()), this.layers.splice(n, 1));
  },
  removeBranch(e) {
    const n = this.branches.indexOf(e);
    n >= 0 && this.branches.splice(n, 1);
  },
  indexOf(e) {
    return this.layers.findIndex((n) => n.node === e);
  },
  dismiss(e) {
    var n;
    (n = this.layers[this.indexOf(e)]) == null || n.dismiss();
  },
  clear() {
    this.remove(this.layers[0].node);
  }
}, Ji;
function Zi() {
  Ie.layers.forEach(({ node: e }) => {
    e.style.pointerEvents = Ie.isBelowPointerBlockingLayer(e) ? "none" : "auto";
  });
}
function nl(e) {
  e.style.pointerEvents = "";
}
var Fr = "data-inert";
function rl(e) {
  const n = ei(e);
  return Ie.hasPointerBlockingLayer() && !n.body.hasAttribute(Fr) && (Ji = document.body.style.pointerEvents, n.body.style.pointerEvents = "none", n.body.setAttribute(Fr, "")), () => {
    Ie.hasPointerBlockingLayer() || (n.body.style.pointerEvents = Ji, n.body.removeAttribute(Fr), n.body.style.length === 0 && n.body.removeAttribute("style"));
  };
}
function il(e, n) {
  if (!e) {
    Ps("[@zag-js/dismissable] node is `null` or `undefined`");
    return;
  }
  const { onDismiss: t, pointerBlocking: r, exclude: i, debug: o } = n, a = { dismiss: t, node: e, pointerBlocking: r };
  Ie.add(a), Zi();
  function u(v) {
    var b, y;
    const g = Xn(v.detail.originalEvent);
    Ie.isBelowPointerBlockingLayer(e) || Ie.isInBranch(g) || ((b = n.onPointerDownOutside) == null || b.call(n, v), (y = n.onInteractOutside) == null || y.call(n, v), !v.defaultPrevented && (o && console.log("onPointerDownOutside:", v.detail.originalEvent), t == null || t()));
  }
  function f(v) {
    var b, y;
    const g = Xn(v.detail.originalEvent);
    Ie.isInBranch(g) || ((b = n.onFocusOutside) == null || b.call(n, v), (y = n.onInteractOutside) == null || y.call(n, v), !v.defaultPrevented && (o && console.log("onFocusOutside:", v.detail.originalEvent), t == null || t()));
  }
  function c(v) {
    var g;
    Ie.isTopMost(e) && ((g = n.onEscapeKeyDown) == null || g.call(n, v), !v.defaultPrevented && t && (v.preventDefault(), t()));
  }
  function l(v) {
    if (!e)
      return !1;
    const g = typeof i == "function" ? i() : i;
    return (Array.isArray(g) ? g : [g]).some((y) => sn(y, v)) || Ie.isInNestedLayer(e, v);
  }
  const d = [
    r ? rl(e) : void 0,
    tl(e, c),
    Bo(e, { exclude: l, onFocusOutside: f, onPointerDownOutside: u })
  ];
  return () => {
    Ie.remove(e), Zi(), nl(e), d.forEach((v) => v == null ? void 0 : v());
  };
}
function qo(e, n) {
  const { defer: t } = n, r = t ? re : (o) => o(), i = [];
  return i.push(
    r(() => {
      const o = typeof e == "function" ? e() : e;
      i.push(il(o, n));
    })
  ), () => {
    i.forEach((o) => o == null ? void 0 : o());
  };
}
function ol(e) {
  return al(e) ? e.form : e.closest("form");
}
function al(e) {
  return e.matches("textarea, input, select, button");
}
function sl(e, n) {
  if (!e)
    return;
  const t = ol(e);
  return t == null || t.addEventListener("reset", n, { passive: !0 }), () => {
    t == null || t.removeEventListener("reset", n);
  };
}
function cl(e, n) {
  const t = e == null ? void 0 : e.closest("fieldset");
  if (t)
    return n(t.disabled), sr(t, ["disabled"], () => n(t.disabled));
}
function ll(e, n) {
  if (!e)
    return;
  const { onFieldsetDisabled: t, onFormReset: r } = n, i = [
    sl(e, r),
    cl(e, (o) => {
      o && t();
    })
  ];
  return () => {
    i.forEach((o) => o == null ? void 0 : o());
  };
}
var ul = (e) => e.ownerDocument.defaultView || window;
function dl(e, n) {
  const { type: t, property: r = "value" } = n, i = ul(e)[t].prototype;
  return Object.getOwnPropertyDescriptor(i, r) ?? {};
}
function fl(e, n, t) {
  var i;
  (i = dl(e, t).set) == null || i.call(e, n);
}
function pl(e) {
  const n = pt(e);
  return kt(
    {
      id: "select",
      context: {
        selectOnTab: !1,
        selectedOption: null,
        highlightedOption: null,
        loop: !1,
        closeOnSelect: !0,
        ...n,
        initialSelectedOption: null,
        prevSelectedOption: null,
        prevHighlightedOption: null,
        typeahead: Jn.defaultOptions,
        positioning: {
          placement: "bottom-start",
          gutter: 8,
          ...n.positioning
        }
      },
      computed: {
        hasSelectedOption: (t) => t.selectedOption != null,
        isTypingAhead: (t) => t.typeahead.keysSoFar !== "",
        isInteractive: (t) => !(t.disabled || t.readOnly),
        selectedId: (t) => t.selectedOption ? N.getOptionId(t, t.selectedOption.value) : null,
        highlightedId: (t) => t.highlightedOption ? N.getOptionId(t, t.highlightedOption.value) : null,
        hasSelectedChanged: (t) => {
          var r, i;
          return ((r = t.selectedOption) == null ? void 0 : r.value) !== ((i = t.prevSelectedOption) == null ? void 0 : i.value);
        },
        hasHighlightedChanged: (t) => {
          var r, i;
          return ((r = t.highlightedOption) == null ? void 0 : r.value) !== ((i = t.prevHighlightedOption) == null ? void 0 : i.value);
        }
      },
      initial: "idle",
      watch: {
        selectedOption: ["syncSelectValue", "dispatchChangeEvent"]
      },
      on: {
        HIGHLIGHT_OPTION: {
          actions: ["setHighlightedOption", "invokeOnHighlight"]
        },
        SELECT_OPTION: {
          actions: ["setSelectedOption", "invokeOnSelect"]
        },
        CLEAR_SELECTED: {
          actions: ["clearSelectedOption", "invokeOnSelect"]
        }
      },
      entry: ["setInitialSelectedOption"],
      activities: ["trackFormControlState"],
      states: {
        idle: {
          tags: ["closed"],
          on: {
            TRIGGER_CLICK: {
              target: "open"
            },
            TRIGGER_FOCUS: {
              target: "focused"
            },
            OPEN: {
              target: "open"
            }
          }
        },
        focused: {
          tags: ["closed"],
          entry: ["focusTrigger", "clearHighlightedOption"],
          on: {
            TRIGGER_CLICK: {
              target: "open"
            },
            TRIGGER_BLUR: {
              target: "idle",
              actions: ["clearHighlightedOption"]
            },
            TRIGGER_KEY: {
              target: "open"
            },
            ARROW_UP: {
              target: "open",
              actions: ["highlightLastOption", "invokeOnHighlight"]
            },
            ARROW_DOWN: {
              target: "open",
              actions: ["highlightFirstOption", "invokeOnHighlight"]
            },
            ARROW_LEFT: [
              {
                guard: "hasSelectedOption",
                actions: ["selectPreviousOption", "invokeOnSelect"]
              },
              {
                actions: ["selectLastOption", "invokeOnSelect"]
              }
            ],
            ARROW_RIGHT: [
              {
                guard: "hasSelectedOption",
                actions: ["selectNextOption", "invokeOnSelect"]
              },
              {
                actions: ["selectFirstOption", "invokeOnSelect"]
              }
            ],
            HOME: {
              actions: ["selectFirstOption", "invokeOnSelect"]
            },
            END: {
              actions: ["selectLastOption", "invokeOnSelect"]
            },
            TYPEAHEAD: {
              actions: ["selectMatchingOption", "invokeOnSelect"]
            },
            OPEN: {
              target: "open"
            }
          }
        },
        open: {
          tags: ["open"],
          entry: ["focusContent", "highlightSelectedOption", "invokeOnOpen"],
          exit: ["scrollContentToTop"],
          activities: ["trackInteractOutside", "computePlacement", "scrollToHighlightedOption", "proxyTabFocus"],
          on: {
            CLOSE: {
              target: "focused",
              actions: ["invokeOnClose"]
            },
            TRIGGER_CLICK: {
              target: "focused",
              actions: ["invokeOnClose"]
            },
            OPTION_CLICK: [
              {
                target: "focused",
                actions: ["selectHighlightedOption", "invokeOnSelect", "invokeOnClose"],
                guard: "closeOnSelect"
              },
              {
                actions: ["selectHighlightedOption", "invokeOnSelect"]
              }
            ],
            TRIGGER_KEY: [
              {
                target: "focused",
                actions: ["selectHighlightedOption", "invokeOnSelect", "invokeOnClose"],
                guard: "closeOnSelect"
              },
              {
                actions: ["selectHighlightedOption", "invokeOnSelect"]
              }
            ],
            BLUR: {
              target: "focused",
              actions: ["invokeOnClose"]
            },
            HOME: {
              actions: ["highlightFirstOption", "invokeOnHighlight"]
            },
            END: {
              actions: ["highlightLastOption", "invokeOnHighlight"]
            },
            ARROW_DOWN: [
              {
                guard: "hasHighlightedOption",
                actions: ["highlightNextOption", "invokeOnHighlight"]
              },
              {
                actions: ["highlightFirstOption", "invokeOnHighlight"]
              }
            ],
            ARROW_UP: [
              {
                guard: "hasHighlightedOption",
                actions: ["highlightPreviousOption", "invokeOnHighlight"]
              },
              {
                actions: ["highlightLastOption", "invokeOnHighlight"]
              }
            ],
            TYPEAHEAD: {
              actions: ["highlightMatchingOption", "invokeOnHighlight"]
            },
            POINTER_MOVE: {
              actions: ["highlightOption", "invokeOnHighlight"]
            },
            POINTER_LEAVE: {
              actions: ["clearHighlightedOption"]
            },
            TAB: [
              {
                target: "idle",
                actions: ["selectHighlightedOption", "invokeOnClose", "invokeOnSelect", "clearHighlightedOption"],
                guard: "selectOnTab"
              },
              {
                target: "idle",
                actions: ["invokeOnClose", "clearHighlightedOption"]
              }
            ]
          }
        }
      }
    },
    {
      guards: {
        hasHighlightedOption: (t) => t.highlightedId != null,
        selectOnTab: (t) => !!t.selectOnTab,
        hasSelectedOption: (t) => t.hasSelectedOption,
        closeOnSelect: (t) => !!t.closeOnSelect
      },
      activities: {
        proxyTabFocus(t) {
          return Mc(N.getContentElement(t), {
            triggerElement: N.getTriggerElement(t),
            onFocus(r) {
              re(() => r.focus({ preventScroll: !0 }));
            }
          });
        },
        trackFormControlState(t) {
          return ll(N.getHiddenSelectElement(t), {
            onFieldsetDisabled() {
              t.disabled = !0;
            },
            onFormReset() {
              t.prevSelectedOption = t.selectedOption, t.selectedOption = t.initialSelectedOption;
            }
          });
        },
        trackInteractOutside(t, r, { send: i }) {
          let o = !1;
          return qo(N.getContentElement(t), {
            exclude: [N.getTriggerElement(t)],
            onInteractOutside(a) {
              var u;
              o = a.detail.focusable, (u = t.onInteractOutside) == null || u.call(t, a);
            },
            onDismiss() {
              i({ type: "BLUR", src: "interact-outside", focusable: o });
            }
          });
        },
        computePlacement(t) {
          return t.currentPlacement = t.positioning.placement, Ao(N.getTriggerElement(t), N.getPositionerElement(t), {
            ...t.positioning,
            onComplete(r) {
              t.currentPlacement = r.placement;
            }
          });
        },
        scrollToHighlightedOption(t, r, { getState: i }) {
          const o = () => {
            if (i().event.type === "POINTER_MOVE")
              return;
            const u = N.getHighlightedOption(t);
            u == null || u.scrollIntoView({ block: "nearest" });
          };
          return re(() => {
            o();
          }), sr(N.getContentElement(t), ["aria-activedescendant"], o);
        }
      },
      actions: {
        setInitialSelectedOption(t) {
          t.initialSelectedOption = t.selectedOption;
        },
        highlightPreviousOption(t) {
          if (!t.highlightedId)
            return;
          const r = N.getPreviousOption(t, t.highlightedId);
          It(t, r);
        },
        highlightNextOption(t) {
          if (!t.highlightedId)
            return;
          const r = N.getNextOption(t, t.highlightedId);
          It(t, r);
        },
        highlightFirstOption(t) {
          const r = N.getFirstOption(t);
          It(t, r);
        },
        highlightLastOption(t) {
          const r = N.getLastOption(t);
          It(t, r);
        },
        focusContent(t) {
          re(() => {
            var r;
            (r = N.getContentElement(t)) == null || r.focus({ preventScroll: !0 });
          });
        },
        focusTrigger(t, r) {
          r.focusable || re(() => {
            var i;
            (i = N.getTriggerElement(t)) == null || i.focus({ preventScroll: !0 });
          });
        },
        selectHighlightedOption(t, r) {
          const i = r.id ?? t.highlightedId;
          if (!i)
            return;
          const o = N.getById(t, i);
          Ct(t, o);
        },
        selectFirstOption(t) {
          const r = N.getFirstOption(t);
          Ct(t, r);
        },
        selectLastOption(t) {
          const r = N.getLastOption(t);
          Ct(t, r);
        },
        selectNextOption(t) {
          if (!t.selectedId)
            return;
          const r = N.getNextOption(t, t.selectedId);
          Ct(t, r);
        },
        selectPreviousOption(t) {
          if (!t.selectedId)
            return;
          const r = N.getPreviousOption(t, t.selectedId);
          Ct(t, r);
        },
        highlightSelectedOption(t) {
          t.selectedOption && (t.prevHighlightedOption = t.highlightedOption, t.highlightedOption = t.selectedOption);
        },
        highlightOption(t, r) {
          const i = r.target ?? N.getById(t, r.id);
          It(t, i);
        },
        highlightMatchingOption(t, r) {
          const i = N.getMatchingOption(t, r.key, t.highlightedId);
          It(t, i);
        },
        selectMatchingOption(t, r) {
          const i = N.getMatchingOption(t, r.key, t.selectedId);
          Ct(t, i);
        },
        setHighlightedOption(t, r) {
          r.value && (t.prevHighlightedOption = t.highlightedOption, t.highlightedOption = r.value);
        },
        clearHighlightedOption(t) {
          t.highlightedOption = null;
        },
        setSelectedOption(t, r) {
          r.value && (t.prevSelectedOption = t.selectedOption, t.selectedOption = r.value);
        },
        clearSelectedOption(t) {
          t.selectedOption = null;
        },
        scrollContentToTop(t) {
          var r;
          (r = N.getContentElement(t)) == null || r.scrollTo(0, 0);
        },
        invokeOnOpen(t) {
          var r;
          (r = t.onOpen) == null || r.call(t);
        },
        invokeOnClose(t) {
          var r;
          (r = t.onClose) == null || r.call(t);
        },
        invokeOnHighlight(t) {
          var r;
          t.hasHighlightedChanged && ((r = t.onHighlight) == null || r.call(t, Ri(t.highlightedOption)));
        },
        invokeOnSelect(t) {
          var r;
          t.hasSelectedChanged && ((r = t.onChange) == null || r.call(t, Ri(t.selectedOption)));
        },
        syncSelectValue(t) {
          const r = t.selectedOption, i = N.getHiddenSelectElement(t);
          !i || !r || fl(i, r.value, { type: "HTMLSelectElement" });
        },
        dispatchChangeEvent(t) {
          const r = N.getHiddenSelectElement(t);
          if (!r)
            return;
          const i = N.getWin(t), o = new i.Event("change", { bubbles: !0 });
          r.dispatchEvent(o);
        }
      }
    }
  );
}
function It(e, n) {
  n && (e.prevHighlightedOption = e.highlightedOption, e.highlightedOption = N.getOptionDetails(n));
}
function Ct(e, n) {
  n && (e.prevSelectedOption = e.selectedOption, e.selectedOption = N.getOptionDetails(n));
}
const Cu = ({ options: e, part: n, placeholder: t, ...r }) => {
  var u, f, c;
  const [i, o] = gn(pl({ id: fn() }), { context: r }), a = el(i, o, Ft);
  return /* @__PURE__ */ W.jsxs("div", { children: [
    /* @__PURE__ */ W.jsx("select", { ...a.hiddenSelectProps, children: e.map((l) => /* @__PURE__ */ W.jsx("option", { value: l.value, children: l.label }, l.value)) }),
    /* @__PURE__ */ W.jsx(
      "button",
      {
        ...a.triggerProps,
        className: Oe("select items-center data-[invalid]:select-error", (u = n == null ? void 0 : n.trigger) == null ? void 0 : u.className),
        children: ((f = a.selectedOption) == null ? void 0 : f.label) ?? t
      }
    ),
    /* @__PURE__ */ W.jsx(Go, { children: /* @__PURE__ */ W.jsx("div", { ...a.positionerProps, className: "z-50", children: /* @__PURE__ */ W.jsx(
      "ul",
      {
        ...a.contentProps,
        className: Oe(
          "menu max-h-60 overflow-y-auto flex-nowrap",
          !a.isOpen && "hidden",
          (c = n == null ? void 0 : n.content) == null ? void 0 : c.className
        ),
        children: e.map((l) => {
          var d, v;
          return /* @__PURE__ */ _t(
            "li",
            {
              ...a.getOptionProps(l),
              className: Oe(l.disabled && "disabled", (d = n == null ? void 0 : n.option) == null ? void 0 : d.className),
              key: l.value
            },
            /* @__PURE__ */ W.jsx("a", { className: Oe(l.value === ((v = a.selectedOption) == null ? void 0 : v.value) && "active"), children: l.label })
          );
        })
      }
    ) }) })
  ] });
};
var gl = Ye("dialog").parts(
  "trigger",
  "backdrop",
  "container",
  "content",
  "title",
  "description",
  "closeTrigger"
), ct = gl.build(), Q = pn({
  getContainerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.container) ?? `dialog:${e.id}:container`;
  },
  getBackdropId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.backdrop) ?? `dialog:${e.id}:backdrop`;
  },
  getContentId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.content) ?? `dialog:${e.id}:content`;
  },
  getTriggerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.trigger) ?? `dialog:${e.id}:trigger`;
  },
  getTitleId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.title) ?? `dialog:${e.id}:title`;
  },
  getDescriptionId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.description) ?? `dialog:${e.id}:description`;
  },
  getCloseTriggerId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.closeTrigger) ?? `dialog:${e.id}:close`;
  },
  getContentEl: (e) => Q.getById(e, Q.getContentId(e)),
  getTriggerEl: (e) => Q.getById(e, Q.getTriggerId(e)),
  getContainerEl: (e) => Q.getById(e, Q.getContainerId(e)),
  getTitleEl: (e) => Q.getById(e, Q.getTitleId(e)),
  getDescriptionEl: (e) => Q.getById(e, Q.getDescriptionId(e))
});
function hl(e, n, t) {
  const r = e.context["aria-label"], i = e.matches("open"), o = e.context.renderedElements;
  return {
    /**
     * Whether the dialog is open
     */
    isOpen: i,
    /**
     * Function to open the dialog
     */
    open() {
      n("OPEN");
    },
    /**
     * Function to close the dialog
     */
    close() {
      n("CLOSE");
    },
    triggerProps: t.button({
      ...ct.trigger.attrs,
      id: Q.getTriggerId(e.context),
      "aria-haspopup": "dialog",
      type: "button",
      "aria-expanded": i,
      "aria-controls": Q.getContentId(e.context),
      onClick() {
        n("TOGGLE");
      }
    }),
    backdropProps: t.element({
      ...ct.backdrop.attrs,
      hidden: !i,
      id: Q.getBackdropId(e.context)
    }),
    containerProps: t.element({
      ...ct.container.attrs,
      hidden: !i,
      id: Q.getContainerId(e.context),
      style: {
        pointerEvents: i ? void 0 : "none"
      }
    }),
    contentProps: t.element({
      ...ct.content.attrs,
      role: e.context.role,
      hidden: !i,
      id: Q.getContentId(e.context),
      tabIndex: -1,
      "aria-modal": !0,
      "aria-label": r || void 0,
      "aria-labelledby": r || !o.title ? void 0 : Q.getTitleId(e.context),
      "aria-describedby": o.description ? Q.getDescriptionId(e.context) : void 0
    }),
    titleProps: t.element({
      ...ct.title.attrs,
      id: Q.getTitleId(e.context)
    }),
    descriptionProps: t.element({
      ...ct.description.attrs,
      id: Q.getDescriptionId(e.context)
    }),
    closeTriggerProps: t.button({
      ...ct.closeTrigger.attrs,
      id: Q.getCloseTriggerId(e.context),
      type: "button",
      onClick(a) {
        a.stopPropagation(), n("CLOSE");
      }
    })
  };
}
var $r = "data-zag-scroll-lock";
function Qi(e, n) {
  if (!e)
    return () => {
    };
  const t = e.style.cssText;
  return Object.assign(e.style, n), () => {
    e.style.cssText = t;
  };
}
function vl(e, n, t) {
  if (!e)
    return () => {
    };
  const r = e.style.getPropertyValue(n);
  return e.style.setProperty(n, t), () => {
    r ? e.style.setProperty(n, r) : e.style.removeProperty(n);
  };
}
function bl(e) {
  const n = e.getBoundingClientRect().left;
  return Math.round(n) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function yl(e) {
  const n = e ?? document, t = n.defaultView ?? window, { documentElement: r, body: i } = n;
  if (i.hasAttribute($r))
    return;
  i.setAttribute($r, "");
  const a = t.innerWidth - r.clientWidth, u = () => vl(r, "--scrollbar-width", `${a}px`), f = bl(r), c = () => Qi(i, {
    overflow: "hidden",
    [f]: `${a}px`
  }), l = () => {
    const { scrollX: v, scrollY: g, visualViewport: b } = t, y = (b == null ? void 0 : b.offsetLeft) ?? 0, T = (b == null ? void 0 : b.offsetTop) ?? 0, C = Qi(i, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(g - Math.floor(T))}px`,
      left: `${-(v - Math.floor(y))}px`,
      right: "0",
      [f]: `${a}px`
    });
    return () => {
      C(), t.scrollTo(v, g);
    };
  }, d = [u(), gs() ? l() : c()];
  return () => {
    d.forEach((v) => v()), i.removeAttribute($r);
  };
}
/*!
* tabbable 6.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var zo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], lr = /* @__PURE__ */ zo.join(","), Xo = typeof Element > "u", ft = Xo ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ur = !Xo && Element.prototype.getRootNode ? function(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, dr = function e(n, t) {
  var r;
  t === void 0 && (t = !0);
  var i = n == null || (r = n.getAttribute) === null || r === void 0 ? void 0 : r.call(n, "inert"), o = i === "" || i === "true", a = o || t && n && e(n.parentNode);
  return a;
}, ml = function(n) {
  var t, r = n == null || (t = n.getAttribute) === null || t === void 0 ? void 0 : t.call(n, "contenteditable");
  return r === "" || r === "true";
}, Jo = function(n, t, r) {
  if (dr(n))
    return [];
  var i = Array.prototype.slice.apply(n.querySelectorAll(lr));
  return t && ft.call(n, lr) && i.unshift(n), i = i.filter(r), i;
}, Zo = function e(n, t, r) {
  for (var i = [], o = Array.from(n); o.length; ) {
    var a = o.shift();
    if (!dr(a, !1))
      if (a.tagName === "SLOT") {
        var u = a.assignedElements(), f = u.length ? u : a.children, c = e(f, !0, r);
        r.flatten ? i.push.apply(i, c) : i.push({
          scopeParent: a,
          candidates: c
        });
      } else {
        var l = ft.call(a, lr);
        l && r.filter(a) && (t || !n.includes(a)) && i.push(a);
        var d = a.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(a), v = !dr(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(a));
        if (d && v) {
          var g = e(d === !0 ? a.children : d.children, !0, r);
          r.flatten ? i.push.apply(i, g) : i.push({
            scopeParent: a,
            candidates: g
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return i;
}, Qo = function(n, t) {
  return n.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName) || ml(n)) && isNaN(parseInt(n.getAttribute("tabindex"), 10)) ? 0 : n.tabIndex;
}, El = function(n, t) {
  return n.tabIndex === t.tabIndex ? n.documentOrder - t.documentOrder : n.tabIndex - t.tabIndex;
}, ea = function(n) {
  return n.tagName === "INPUT";
}, Ol = function(n) {
  return ea(n) && n.type === "hidden";
}, Tl = function(n) {
  var t = n.tagName === "DETAILS" && Array.prototype.slice.apply(n.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return t;
}, wl = function(n, t) {
  for (var r = 0; r < n.length; r++)
    if (n[r].checked && n[r].form === t)
      return n[r];
}, Il = function(n) {
  if (!n.name)
    return !0;
  var t = n.form || ur(n), r = function(u) {
    return t.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(n.name));
  else
    try {
      i = r(n.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var o = wl(i, n.form);
  return !o || o === n;
}, Cl = function(n) {
  return ea(n) && n.type === "radio";
}, Sl = function(n) {
  return Cl(n) && !Il(n);
}, Rl = function(n) {
  var t, r = n && ur(n), i = (t = r) === null || t === void 0 ? void 0 : t.host, o = !1;
  if (r && r !== n) {
    var a, u, f;
    for (o = !!((a = i) !== null && a !== void 0 && (u = a.ownerDocument) !== null && u !== void 0 && u.contains(i) || n != null && (f = n.ownerDocument) !== null && f !== void 0 && f.contains(n)); !o && i; ) {
      var c, l, d;
      r = ur(i), i = (c = r) === null || c === void 0 ? void 0 : c.host, o = !!((l = i) !== null && l !== void 0 && (d = l.ownerDocument) !== null && d !== void 0 && d.contains(i));
    }
  }
  return o;
}, eo = function(n) {
  var t = n.getBoundingClientRect(), r = t.width, i = t.height;
  return r === 0 && i === 0;
}, Al = function(n, t) {
  var r = t.displayCheck, i = t.getShadowRoot;
  if (getComputedStyle(n).visibility === "hidden")
    return !0;
  var o = ft.call(n, "details>summary:first-of-type"), a = o ? n.parentElement : n;
  if (ft.call(a, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var u = n; n; ) {
        var f = n.parentElement, c = ur(n);
        if (f && !f.shadowRoot && i(f) === !0)
          return eo(n);
        n.assignedSlot ? n = n.assignedSlot : !f && c !== n.ownerDocument ? n = c.host : n = f;
      }
      n = u;
    }
    if (Rl(n))
      return !n.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return eo(n);
  return !1;
}, Pl = function(n) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))
    for (var t = n.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var r = 0; r < t.children.length; r++) {
          var i = t.children.item(r);
          if (i.tagName === "LEGEND")
            return ft.call(t, "fieldset[disabled] *") ? !0 : !i.contains(n);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, fr = function(n, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  dr(t) || Ol(t) || Al(t, n) || // For a details element with a summary, the summary element gets the focus
  Tl(t) || Pl(t));
}, zr = function(n, t) {
  return !(Sl(t) || Qo(t) < 0 || !fr(n, t));
}, _l = function(n) {
  var t = parseInt(n.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, Dl = function e(n) {
  var t = [], r = [];
  return n.forEach(function(i, o) {
    var a = !!i.scopeParent, u = a ? i.scopeParent : i, f = Qo(u, a), c = a ? e(i.candidates) : u;
    f === 0 ? a ? t.push.apply(t, c) : t.push(u) : r.push({
      documentOrder: o,
      tabIndex: f,
      item: i,
      isScope: a,
      content: c
    });
  }), r.sort(El).reduce(function(i, o) {
    return o.isScope ? i.push.apply(i, o.content) : i.push(o.content), i;
  }, []).concat(t);
}, Ll = function(n, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = Zo([n], t.includeContainer, {
    filter: zr.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: _l
  }) : r = Jo(n, t.includeContainer, zr.bind(null, t)), Dl(r);
}, xl = function(n, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = Zo([n], t.includeContainer, {
    filter: fr.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : r = Jo(n, t.includeContainer, fr.bind(null, t)), r;
}, Gn = function(n, t) {
  if (t = t || {}, !n)
    throw new Error("No node provided");
  return ft.call(n, lr) === !1 ? !1 : zr(t, n);
}, Nl = /* @__PURE__ */ zo.concat("iframe").join(","), to = function(n, t) {
  if (t = t || {}, !n)
    throw new Error("No node provided");
  return ft.call(n, Nl) === !1 ? !1 : fr(t, n);
};
/*!
* focus-trap 7.4.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function no(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ro(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? no(Object(t), !0).forEach(function(r) {
      kl(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : no(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function kl(e, n, t) {
  return n = $l(n), n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Fl(e, n) {
  if (typeof e != "object" || e === null)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function $l(e) {
  var n = Fl(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
var io = {
  activateTrap: function(n, t) {
    if (n.length > 0) {
      var r = n[n.length - 1];
      r !== t && r.pause();
    }
    var i = n.indexOf(t);
    i === -1 || n.splice(i, 1), n.push(t);
  },
  deactivateTrap: function(n, t) {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1), n.length > 0 && n[n.length - 1].unpause();
  }
}, Vl = function(n) {
  return n.tagName && n.tagName.toLowerCase() === "input" && typeof n.select == "function";
}, Ml = function(n) {
  return n.key === "Escape" || n.key === "Esc" || n.keyCode === 27;
}, on = function(n) {
  return n.key === "Tab" || n.keyCode === 9;
}, jl = function(n) {
  return on(n) && !n.shiftKey;
}, Bl = function(n) {
  return on(n) && n.shiftKey;
}, oo = function(n) {
  return setTimeout(n, 0);
}, ao = function(n, t) {
  var r = -1;
  return n.every(function(i, o) {
    return t(i) ? (r = o, !1) : !0;
  }), r;
}, Zt = function(n) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  return typeof n == "function" ? n.apply(void 0, r) : n;
}, Yn = function(n) {
  return n.target.shadowRoot && typeof n.composedPath == "function" ? n.composedPath()[0] : n.target;
}, Hl = [], Ul = function(n, t) {
  var r = (t == null ? void 0 : t.document) || document, i = (t == null ? void 0 : t.trapStack) || Hl, o = ro({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: jl,
    isKeyBackward: Bl
  }, t), a = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0
  }, u, f = function(O, I, w) {
    return O && O[I] !== void 0 ? O[I] : o[w || I];
  }, c = function(O) {
    return a.containerGroups.findIndex(function(I) {
      var w = I.container, P = I.tabbableNodes;
      return w.contains(O) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      P.find(function(A) {
        return A === O;
      });
    });
  }, l = function(O) {
    var I = o[O];
    if (typeof I == "function") {
      for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), A = 1; A < w; A++)
        P[A - 1] = arguments[A];
      I = I.apply(void 0, P);
    }
    if (I === !0 && (I = void 0), !I) {
      if (I === void 0 || I === !1)
        return I;
      throw new Error("`".concat(O, "` was specified but was not a node, or did not return a node"));
    }
    var M = I;
    if (typeof I == "string" && (M = r.querySelector(I), !M))
      throw new Error("`".concat(O, "` as selector refers to no known node"));
    return M;
  }, d = function() {
    var O = l("initialFocus");
    if (O === !1)
      return !1;
    if (O === void 0)
      if (c(r.activeElement) >= 0)
        O = r.activeElement;
      else {
        var I = a.tabbableGroups[0], w = I && I.firstTabbableNode;
        O = w || l("fallbackFocus");
      }
    if (!O)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return O;
  }, v = function() {
    if (a.containerGroups = a.containers.map(function(O) {
      var I = Ll(O, o.tabbableOptions), w = xl(O, o.tabbableOptions);
      return {
        container: O,
        tabbableNodes: I,
        focusableNodes: w,
        firstTabbableNode: I.length > 0 ? I[0] : null,
        lastTabbableNode: I.length > 0 ? I[I.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(A) {
          var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = w.findIndex(function(X) {
            return X === A;
          });
          if (!(U < 0))
            return M ? w.slice(U + 1).find(function(X) {
              return Gn(X, o.tabbableOptions);
            }) : w.slice(0, U).reverse().find(function(X) {
              return Gn(X, o.tabbableOptions);
            });
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(O) {
      return O.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !l("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
  }, g = function F(O) {
    if (O !== !1 && O !== r.activeElement) {
      if (!O || !O.focus) {
        F(d());
        return;
      }
      O.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = O, Vl(O) && O.select();
    }
  }, b = function(O) {
    var I = l("setReturnFocus", O);
    return I || (I === !1 ? !1 : O);
  }, y = function(O) {
    var I = Yn(O);
    if (!(c(I) >= 0)) {
      if (Zt(o.clickOutsideDeactivates, O)) {
        u.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: o.returnFocusOnDeactivate
        });
        return;
      }
      Zt(o.allowOutsideClick, O) || O.preventDefault();
    }
  }, T = function(O) {
    var I = Yn(O), w = c(I) >= 0;
    w || I instanceof Document ? w && (a.mostRecentlyFocusedNode = I) : (O.stopImmediatePropagation(), g(a.mostRecentlyFocusedNode || d()));
  }, C = function(O) {
    var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, w = Yn(O);
    v();
    var P = null;
    if (a.tabbableGroups.length > 0) {
      var A = c(w), M = A >= 0 ? a.containerGroups[A] : void 0;
      if (A < 0)
        I ? P = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : P = a.tabbableGroups[0].firstTabbableNode;
      else if (I) {
        var U = ao(a.tabbableGroups, function(Ae) {
          var Te = Ae.firstTabbableNode;
          return w === Te;
        });
        if (U < 0 && (M.container === w || to(w, o.tabbableOptions) && !Gn(w, o.tabbableOptions) && !M.nextTabbableNode(w, !1)) && (U = A), U >= 0) {
          var X = U === 0 ? a.tabbableGroups.length - 1 : U - 1, ne = a.tabbableGroups[X];
          P = ne.lastTabbableNode;
        } else
          on(O) || (P = M.nextTabbableNode(w, !1));
      } else {
        var ee = ao(a.tabbableGroups, function(Ae) {
          var Te = Ae.lastTabbableNode;
          return w === Te;
        });
        if (ee < 0 && (M.container === w || to(w, o.tabbableOptions) && !Gn(w, o.tabbableOptions) && !M.nextTabbableNode(w)) && (ee = A), ee >= 0) {
          var ce = ee === a.tabbableGroups.length - 1 ? 0 : ee + 1, Re = a.tabbableGroups[ce];
          P = Re.firstTabbableNode;
        } else
          on(O) || (P = M.nextTabbableNode(w));
      }
    } else
      P = l("fallbackFocus");
    P && (on(O) && O.preventDefault(), g(P));
  }, E = function(O) {
    if (Ml(O) && Zt(o.escapeDeactivates, O) !== !1) {
      O.preventDefault(), u.deactivate();
      return;
    }
    (o.isKeyForward(O) || o.isKeyBackward(O)) && C(O, o.isKeyBackward(O));
  }, L = function(O) {
    var I = Yn(O);
    c(I) >= 0 || Zt(o.clickOutsideDeactivates, O) || Zt(o.allowOutsideClick, O) || (O.preventDefault(), O.stopImmediatePropagation());
  }, V = function() {
    if (a.active)
      return io.activateTrap(i, u), a.delayInitialFocusTimer = o.delayInitialFocus ? oo(function() {
        g(d());
      }) : g(d()), r.addEventListener("focusin", T, !0), r.addEventListener("mousedown", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", L, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", E, {
        capture: !0,
        passive: !1
      }), u;
  }, B = function() {
    if (a.active)
      return r.removeEventListener("focusin", T, !0), r.removeEventListener("mousedown", y, !0), r.removeEventListener("touchstart", y, !0), r.removeEventListener("click", L, !0), r.removeEventListener("keydown", E, !0), u;
  };
  return u = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(O) {
      if (a.active)
        return this;
      var I = f(O, "onActivate"), w = f(O, "onPostActivate"), P = f(O, "checkCanFocusTrap");
      P || v(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = r.activeElement, I == null || I();
      var A = function() {
        P && v(), V(), w == null || w();
      };
      return P ? (P(a.containers.concat()).then(A, A), this) : (A(), this);
    },
    deactivate: function(O) {
      if (!a.active)
        return this;
      var I = ro({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, O);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, B(), a.active = !1, a.paused = !1, io.deactivateTrap(i, u);
      var w = f(I, "onDeactivate"), P = f(I, "onPostDeactivate"), A = f(I, "checkCanReturnFocus"), M = f(I, "returnFocus", "returnFocusOnDeactivate");
      w == null || w();
      var U = function() {
        oo(function() {
          M && g(b(a.nodeFocusedBeforeActivation)), P == null || P();
        });
      };
      return M && A ? (A(b(a.nodeFocusedBeforeActivation)).then(U, U), this) : (U(), this);
    },
    pause: function(O) {
      if (a.paused || !a.active)
        return this;
      var I = f(O, "onPause"), w = f(O, "onPostPause");
      return a.paused = !0, I == null || I(), B(), w == null || w(), this;
    },
    unpause: function(O) {
      if (!a.paused || !a.active)
        return this;
      var I = f(O, "onUnpause"), w = f(O, "onPostUnpause");
      return a.paused = !1, I == null || I(), v(), V(), w == null || w(), this;
    },
    updateContainerElements: function(O) {
      var I = [].concat(O).filter(Boolean);
      return a.containers = I.map(function(w) {
        return typeof w == "string" ? r.querySelector(w) : w;
      }), a.active && v(), this;
    }
  }, u.updateContainerElements(n), u;
};
function Wl(e) {
  const n = pt(e);
  return kt(
    {
      id: "dialog",
      initial: n.open ? "open" : "closed",
      context: {
        role: "dialog",
        renderedElements: {
          title: !0,
          description: !0
        },
        modal: !0,
        trapFocus: !0,
        preventScroll: !0,
        closeOnOutsideClick: !0,
        closeOnEsc: !0,
        restoreFocus: !0,
        ...n
      },
      watch: {
        open: ["toggleVisibility"]
      },
      states: {
        open: {
          entry: ["checkRenderedElements"],
          activities: ["trackDismissableElement", "trapFocus", "preventScroll", "hideContentBelow"],
          on: {
            CLOSE: {
              target: "closed",
              actions: ["invokeOnClose", "restoreFocus"]
            },
            TOGGLE: {
              target: "closed",
              actions: ["invokeOnClose", "restoreFocus"]
            }
          }
        },
        closed: {
          on: {
            OPEN: {
              target: "open",
              actions: ["invokeOnOpen"]
            },
            TOGGLE: {
              target: "open",
              actions: ["invokeOnOpen"]
            }
          }
        }
      }
    },
    {
      activities: {
        trackDismissableElement(t, r, { send: i }) {
          return qo(() => Q.getContentEl(t), {
            defer: !0,
            pointerBlocking: t.modal,
            exclude: [Q.getTriggerEl(t)],
            onDismiss() {
              i({ type: "CLOSE", src: "interact-outside" });
            },
            onEscapeKeyDown(a) {
              var u;
              t.closeOnEsc ? i({ type: "CLOSE", src: "escape-key" }) : a.preventDefault(), (u = t.onEsc) == null || u.call(t);
            },
            onPointerDownOutside(a) {
              var u;
              t.closeOnOutsideClick || a.preventDefault(), (u = t.onOutsideClick) == null || u.call(t);
            }
          });
        },
        preventScroll(t) {
          if (t.preventScroll)
            return yl(Q.getDoc(t));
        },
        trapFocus(t) {
          if (!t.trapFocus)
            return;
          let r;
          return Mr(() => {
            const i = Q.getContentEl(t);
            if (i) {
              r = Ul(i, {
                document: Q.getDoc(t),
                escapeDeactivates: !1,
                returnFocusOnDeactivate: !1,
                fallbackFocus: i,
                allowOutsideClick: !0,
                initialFocus: Zn(t.initialFocusEl)
              });
              try {
                r.activate();
              } catch {
              }
            }
          }), () => r == null ? void 0 : r.deactivate();
        },
        hideContentBelow(t) {
          return t.modal ? _o(() => [Q.getContainerEl(t)], { defer: !0 }) : void 0;
        }
      },
      actions: {
        checkRenderedElements(t) {
          re(() => {
            t.renderedElements.title = !!Q.getTitleEl(t), t.renderedElements.description = !!Q.getDescriptionEl(t);
          });
        },
        invokeOnClose(t) {
          var r;
          (r = t.onClose) == null || r.call(t);
        },
        invokeOnOpen(t) {
          var r;
          (r = t.onOpen) == null || r.call(t);
        },
        toggleVisibility(t, r, { send: i }) {
          i({ type: t.open ? "OPEN" : "CLOSE", src: "controlled" });
        },
        restoreFocus(t) {
          t.restoreFocus && re(() => {
            const r = Zn(t.finalFocusEl) ?? Q.getTriggerEl(t);
            r == null || r.focus({ preventScroll: !0 });
          });
        }
      }
    }
  );
}
const Su = ({ children: e, trigger: n, ...t }) => {
  const [r, i] = gn(Wl({ id: fn() }), { context: t }), o = hl(r, i, Ft);
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    n(o.triggerProps),
    /* @__PURE__ */ W.jsxs(Go, { children: [
      /* @__PURE__ */ W.jsx("input", { type: "checkbox", className: "modal-toggle", checked: o.isOpen, readOnly: !0 }),
      /* @__PURE__ */ W.jsx("div", { ...o.backdropProps, className: "modal", children: /* @__PURE__ */ W.jsxs("div", { ...o.contentProps, className: "modal-box", children: [
        e,
        /* @__PURE__ */ W.jsx("footer", { className: "modal-action", children: /* @__PURE__ */ W.jsx("button", { ...o.closeTriggerProps, className: "btn", children: "Close" }) })
      ] }) })
    ] })
  ] });
};
var Kl = Ye("toast").parts("group", "root", "title", "description", "closeTrigger"), en = Kl.build();
function Gl(e) {
  const n = {};
  for (const t of e) {
    const r = t.state.context.placement;
    n[r] || (n[r] = []), n[r].push(t);
  }
  return n;
}
var Yl = {
  info: 5e3,
  error: 5e3,
  success: 2e3,
  loading: 1 / 0,
  custom: 5e3
};
function so(e, n) {
  return e ?? Yl[n];
}
function ql(e, n) {
  const t = e.offsets, r = typeof t == "string" ? { left: t, right: t, bottom: t, top: t } : t, i = e.dir === "rtl", o = n.replace("-start", i ? "-right" : "-left").replace("-end", i ? "-left" : "-right"), a = o.includes("right"), u = o.includes("left"), f = {
    position: "fixed",
    pointerEvents: e.count > 0 ? void 0 : "none",
    display: "flex",
    flexDirection: "column",
    "--toast-gutter": e.gutter,
    zIndex: e.zIndex
  };
  let c = "center";
  if (a && (c = "flex-end"), u && (c = "flex-start"), f.alignItems = c, o.includes("top")) {
    const l = r.top;
    f.top = `calc(env(safe-area-inset-top, 0px) + ${l})`;
  }
  if (o.includes("bottom")) {
    const l = r.bottom;
    f.bottom = `calc(env(safe-area-inset-bottom, 0px) + ${l})`;
  }
  if (!o.includes("left")) {
    const l = r.right;
    f.right = `calc(env(safe-area-inset-right, 0px) + ${l})`;
  }
  if (!o.includes("right")) {
    const l = r.left;
    f.left = `calc(env(safe-area-inset-left, 0px) + ${l})`;
  }
  return f;
}
var At = pn({
  getGroupId: (e) => `toast-group:${e}`,
  getRootId: (e) => `toast:${e.id}`,
  getTitleId: (e) => `toast:${e.id}:title`,
  getDescriptionId: (e) => `toast:${e.id}:description`,
  getCloseTriggerId: (e) => `toast${e.id}:close`,
  getPortalId: (e) => `toast-portal:${e.id}`
}), zl = {};
function Xl(e, n, t) {
  const r = {
    /**
     * The total number of toasts
     */
    count: e.context.count,
    /**
     * The active toasts
     */
    toasts: e.context.toasts,
    /**
     * The active toasts by placement
     */
    toastsByPlacement: Gl(e.context.toasts),
    /**
     * Returns whether the toast id is visible
     */
    isVisible(i) {
      return e.context.toasts.length ? !!e.context.toasts.find((o) => o.id == i) : !1;
    },
    /**
     * Function to create a toast.
     */
    create(i) {
      const o = `toast:${Cs()}`, a = i.id ? i.id : o;
      if (!r.isVisible(a))
        return n({ type: "ADD_TOAST", toast: { ...i, id: a } }), a;
    },
    /**
     * Function to create or update a toast.
     */
    upsert(i) {
      const { id: o } = i;
      return (o ? r.isVisible(o) : !1) && o != null ? r.update(o, i) : r.create(i);
    },
    /**
     * Function to dismiss a toast by id.
     * If no id is provided, all toasts will be dismissed.
     */
    dismiss(i) {
      i == null ? n("DISMISS_ALL") : r.isVisible(i) && n({ type: "DISMISS_TOAST", id: i });
    },
    /**
     * Function to remove a toast by id.
     * If no id is provided, all toasts will be removed.
     */
    remove(i) {
      i == null ? n("REMOVE_ALL") : r.isVisible(i) && n({ type: "REMOVE_TOAST", id: i });
    },
    /**
     * Function to dismiss all toasts by placement.
     */
    dismissByPlacement(i) {
      const o = r.toastsByPlacement[i];
      o && o.forEach((a) => r.dismiss(a.id));
    },
    /**
     * Function to update a toast's options by id.
     */
    update(i, o) {
      if (r.isVisible(i))
        return n({ type: "UPDATE_TOAST", id: i, toast: o }), i;
    },
    /**
     * Function to create a loading toast.
     */
    loading(i) {
      return i.type = "loading", r.upsert(i);
    },
    /**
     * Function to create a success toast.
     */
    success(i) {
      return i.type = "success", r.upsert(i);
    },
    /**
     * Function to create an error toast.
     */
    error(i) {
      return i.type = "error", r.upsert(i);
    },
    /**
     * Function to create a toast from a promise.
     * - When the promise resolves, the toast will be updated with the success options.
     * - When the promise rejects, the toast will be updated with the error options.
     */
    promise(i, o, a = {}) {
      const u = r.loading({ ...a, ...o.loading });
      return i.then((f) => {
        const c = Zn(o.success, f);
        r.success({ ...a, ...c, id: u });
      }).catch((f) => {
        const c = Zn(o.error, f);
        r.error({ ...a, ...c, id: u });
      }), i;
    },
    /**
     * Function to pause a toast by id.
     */
    pause(i) {
      i == null ? n("PAUSE_ALL") : r.isVisible(i) && n({ type: "PAUSE_TOAST", id: i });
    },
    /**
     * Function to resume a toast by id.
     */
    resume(i) {
      i == null ? n("RESUME_ALL") : r.isVisible(i) && n({ type: "RESUME_TOAST", id: i });
    },
    getGroupProps(i) {
      const { placement: o, label: a = "Notifications" } = i;
      return t.element({
        ...en.group.attrs,
        tabIndex: -1,
        "aria-label": a,
        id: At.getGroupId(o),
        "data-placement": o,
        "aria-live": "polite",
        role: "region",
        style: ql(e.context, o)
      });
    },
    subscribe(i) {
      return un(e.context.toasts, () => i(e.context.toasts));
    }
  };
  return Object.assign(zl, r), r;
}
var { not: Jl, and: Zl, or: Ql } = ui;
function eu(e = {}) {
  const { type: n = "info", duration: t, id: r = "toast", placement: i = "bottom", removeDelay: o = 0, ...a } = e, u = pt(a), f = so(t, n);
  return kt(
    {
      id: r,
      entry: "invokeOnOpen",
      initial: n === "loading" ? "persist" : "active",
      context: {
        id: r,
        type: n,
        remaining: f,
        duration: f,
        removeDelay: o,
        createdAt: Date.now(),
        placement: i,
        ...u
      },
      on: {
        UPDATE: [
          {
            guard: Zl("hasTypeChanged", "isChangingToLoading"),
            target: "persist",
            actions: ["setContext", "invokeOnUpdate"]
          },
          {
            guard: Ql("hasDurationChanged", "hasTypeChanged"),
            target: "active:temp",
            actions: ["setContext", "invokeOnUpdate"]
          },
          {
            actions: ["setContext", "invokeOnUpdate"]
          }
        ]
      },
      states: {
        "active:temp": {
          tags: ["visible", "updating"],
          after: {
            0: "active"
          }
        },
        persist: {
          tags: ["visible", "paused"],
          activities: "trackDocumentVisibility",
          on: {
            RESUME: {
              guard: Jl("isLoadingType"),
              target: "active",
              actions: ["setCreatedAt"]
            },
            DISMISS: "dismissing"
          }
        },
        active: {
          tags: ["visible"],
          activities: "trackDocumentVisibility",
          after: {
            VISIBLE_DURATION: "dismissing"
          },
          on: {
            DISMISS: "dismissing",
            PAUSE: {
              target: "persist",
              actions: "setRemainingDuration"
            }
          }
        },
        dismissing: {
          entry: "invokeOnClosing",
          after: {
            REMOVE_DELAY: {
              target: "inactive",
              actions: "notifyParentToRemove"
            }
          }
        },
        inactive: {
          entry: "invokeOnClose",
          type: "final"
        }
      }
    },
    {
      activities: {
        trackDocumentVisibility(c, l, { send: d }) {
          if (!c.pauseOnPageIdle)
            return;
          const v = At.getDoc(c);
          return Qn(v, "visibilitychange", () => {
            d(v.visibilityState === "hidden" ? "PAUSE" : "RESUME");
          });
        }
      },
      guards: {
        isChangingToLoading: (c, l) => {
          var d;
          return ((d = l.toast) == null ? void 0 : d.type) === "loading";
        },
        isLoadingType: (c) => c.type === "loading",
        hasTypeChanged: (c, l) => {
          var d;
          return ((d = l.toast) == null ? void 0 : d.type) !== c.type;
        },
        hasDurationChanged: (c, l) => {
          var d;
          return ((d = l.toast) == null ? void 0 : d.duration) !== c.duration;
        }
      },
      delays: {
        VISIBLE_DURATION: (c) => c.remaining,
        REMOVE_DELAY: (c) => c.removeDelay
      },
      actions: {
        setRemainingDuration(c) {
          c.remaining -= Date.now() - c.createdAt;
        },
        setCreatedAt(c) {
          c.createdAt = Date.now();
        },
        notifyParentToRemove(c, l, { self: d }) {
          d.sendParent({ type: "REMOVE_TOAST", id: d.id });
        },
        invokeOnClosing(c) {
          var l;
          (l = c.onClosing) == null || l.call(c);
        },
        invokeOnClose(c) {
          var l;
          (l = c.onClose) == null || l.call(c);
        },
        invokeOnOpen(c) {
          var l;
          (l = c.onOpen) == null || l.call(c);
        },
        invokeOnUpdate(c) {
          var l;
          (l = c.onUpdate) == null || l.call(c);
        },
        setContext(c, l) {
          const { duration: d, type: v } = l.toast, g = so(d, v);
          Object.assign(c, { ...l.toast, duration: g, remaining: g });
        }
      }
    }
  );
}
function tu(e) {
  const n = pt(e);
  return kt({
    id: "toaster",
    initial: "active",
    context: {
      dir: "ltr",
      max: Number.MAX_SAFE_INTEGER,
      toasts: [],
      gutter: "1rem",
      zIndex: Is,
      pauseOnPageIdle: !1,
      pauseOnInteraction: !0,
      offsets: { left: "0px", right: "0px", top: "0px", bottom: "0px" },
      ...n
    },
    computed: {
      count: (t) => t.toasts.length
    },
    on: {
      SETUP: {},
      PAUSE_TOAST: {
        actions: (t, r, { self: i }) => {
          i.sendChild("PAUSE", r.id);
        }
      },
      PAUSE_ALL: {
        actions: (t) => {
          t.toasts.forEach((r) => r.send("PAUSE"));
        }
      },
      RESUME_TOAST: {
        actions: (t, r, { self: i }) => {
          i.sendChild("RESUME", r.id);
        }
      },
      RESUME_ALL: {
        actions: (t) => {
          t.toasts.forEach((r) => r.send("RESUME"));
        }
      },
      ADD_TOAST: {
        guard: (t) => t.toasts.length < t.max,
        actions: (t, r, { self: i }) => {
          const o = {
            ...r.toast,
            pauseOnPageIdle: t.pauseOnPageIdle,
            pauseOnInteraction: t.pauseOnInteraction,
            dir: t.dir,
            getRootNode: t.getRootNode
          }, a = eu(o), u = i.spawn(a);
          t.toasts.push(u);
        }
      },
      UPDATE_TOAST: {
        actions: (t, r, { self: i }) => {
          i.sendChild({ type: "UPDATE", toast: r.toast }, r.id);
        }
      },
      DISMISS_TOAST: {
        actions: (t, r, { self: i }) => {
          i.sendChild("DISMISS", r.id);
        }
      },
      DISMISS_ALL: {
        actions: (t) => {
          t.toasts.forEach((r) => r.send("DISMISS"));
        }
      },
      REMOVE_TOAST: {
        actions: (t, r, { self: i }) => {
          i.stopChild(r.id);
          const o = t.toasts.findIndex((a) => a.id === r.id);
          t.toasts.splice(o, 1);
        }
      },
      REMOVE_ALL: {
        actions: (t, r, { self: i }) => {
          for (t.toasts.forEach((o) => i.stopChild(o.id)); t.toasts.length; )
            t.toasts.pop();
        }
      }
    }
  });
}
function nu(e, n, t) {
  const r = e.hasTag("visible"), i = e.hasTag("paused"), o = e.context.pauseOnInteraction, a = e.context.placement;
  return {
    /**
     * The type of the toast.
     */
    type: e.context.type,
    /**
     * The title of the toast.
     */
    title: e.context.title,
    /**
     *  The description of the toast.
     */
    description: e.context.description,
    /**
     * The current placement of the toast.
     */
    placement: a,
    /**
     * Whether the toast is visible.
     */
    isVisible: r,
    /**
     * Whether the toast is paused.
     */
    isPaused: i,
    /**
     * Whether the toast is in RTL mode.
     */
    isRtl: e.context.dir === "rtl",
    /**
     * Function to pause the toast (keeping it visible).
     */
    pause() {
      n("PAUSE");
    },
    /**
     * Function to resume the toast dismissing.
     */
    resume() {
      n("RESUME");
    },
    /**
     * Function to instantly dismiss the toast.
     */
    dismiss() {
      n("DISMISS");
    },
    /**
     * Function render the toast in the DOM (based on the defined `render` property)
     */
    render() {
      var u, f;
      return (f = (u = e.context).render) == null ? void 0 : f.call(u, {
        id: e.context.id,
        type: e.context.type,
        duration: e.context.duration,
        title: e.context.title,
        placement: e.context.placement,
        description: e.context.description,
        dismiss() {
          n("DISMISS");
        }
      });
    },
    rootProps: t.element({
      ...en.root.attrs,
      dir: e.context.dir,
      id: At.getRootId(e.context),
      "data-open": z(r),
      "data-type": e.context.type,
      "data-placement": a,
      role: "status",
      "aria-atomic": "true",
      tabIndex: 0,
      style: {
        position: "relative",
        pointerEvents: "auto",
        margin: "calc(var(--toast-gutter) / 2)",
        "--remove-delay": `${e.context.removeDelay}ms`,
        "--duration": `${e.context.duration}ms`
      },
      onKeyDown(u) {
        u.key == "Escape" && (n("DISMISS"), u.preventDefault());
      },
      onFocus() {
        o && n("PAUSE");
      },
      onBlur() {
        o && n("RESUME");
      },
      onPointerEnter() {
        o && n("PAUSE");
      },
      onPointerLeave() {
        o && n("RESUME");
      }
    }),
    titleProps: t.element({
      ...en.title.attrs,
      id: At.getTitleId(e.context)
    }),
    descriptionProps: t.element({
      ...en.description.attrs,
      id: At.getDescriptionId(e.context)
    }),
    closeTriggerProps: t.button({
      id: At.getCloseTriggerId(e.context),
      ...en.closeTrigger.attrs,
      type: "button",
      "aria-label": "Dismiss notification",
      onClick() {
        n("DISMISS");
      }
    })
  };
}
var co = {
  connect: Xl,
  machine: tu
};
function ru({
  title: e,
  titleId: n,
  ...t
}, r) {
  return /* @__PURE__ */ fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: r,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ fe.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ fe.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  }));
}
const iu = fe.forwardRef(ru), ou = iu;
function au({
  title: e,
  titleId: n,
  ...t
}, r) {
  return /* @__PURE__ */ fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: r,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ fe.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ fe.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  }));
}
const su = fe.forwardRef(au), cu = su;
function lu({
  title: e,
  titleId: n,
  ...t
}, r) {
  return /* @__PURE__ */ fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: r,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ fe.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ fe.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
    clipRule: "evenodd"
  }));
}
const uu = fe.forwardRef(lu), du = uu;
function fu({
  title: e,
  titleId: n,
  ...t
}, r) {
  return /* @__PURE__ */ fe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: r,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ fe.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ fe.createElement("path", {
    d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
  }));
}
const pu = fe.forwardRef(fu), gu = pu, hu = ({ actor: e }) => {
  const [n, t] = zc(e), r = nu(n, t, Ft);
  function i(o) {
    const a = "w-5";
    switch (o) {
      case "info":
        return /* @__PURE__ */ W.jsx(cu, { className: a });
      case "success":
        return /* @__PURE__ */ W.jsx(ou, { className: a });
      case "error":
        return /* @__PURE__ */ W.jsx(du, { className: a });
    }
  }
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      ...r.rootProps,
      className: Oe(
        "alert w-auto",
        r.type === "info" && "alert-info",
        r.type === "success" && "alert-success",
        r.type === "error" && "alert-error"
      ),
      children: [
        /* @__PURE__ */ W.jsxs("div", { children: [
          i(r.type),
          /* @__PURE__ */ W.jsxs("div", { children: [
            /* @__PURE__ */ W.jsx("h3", { ...r.titleProps, children: r.title }),
            /* @__PURE__ */ W.jsx("p", { ...r.descriptionProps, children: r.description })
          ] })
        ] }),
        /* @__PURE__ */ W.jsx(gu, { className: "w-4 cursor-pointer", onClick: r.dismiss })
      ]
    }
  );
}, ta = Qa({}), Ru = () => es(ta), vu = ({ children: e }) => {
  const [n, t] = gn(co.machine({ id: fn() })), r = co.connect(n, t, Ft);
  return /* @__PURE__ */ W.jsxs(ta.Provider, { value: r, children: [
    Object.entries(r.toastsByPlacement).map(([i, o]) => /* @__PURE__ */ _t(
      "div",
      {
        ...r.getGroupProps({ placement: i }),
        className: "toast",
        key: i
      },
      o.map((a) => /* @__PURE__ */ W.jsx(hu, { actor: a }, a.id))
    )),
    e
  ] });
};
var bu = Ye("tabs").parts("root", "tablist", "trigger", "contentGroup", "content", "indicator"), St = bu.build(), H = pn({
  getRootId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.root) ?? `tabs:${e.id}`;
  },
  getTablistId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.tablist) ?? `tabs:${e.id}:list`;
  },
  getContentId: (e, n) => {
    var t;
    return ((t = e.ids) == null ? void 0 : t.content) ?? `tabs:${e.id}:content-${n}`;
  },
  getContentGroupId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.contentGroup) ?? `tabs:${e.id}:content-group`;
  },
  getTriggerId: (e, n) => {
    var t;
    return ((t = e.ids) == null ? void 0 : t.trigger) ?? `tabs:${e.id}:trigger-${n}`;
  },
  getIndicatorId: (e) => {
    var n;
    return ((n = e.ids) == null ? void 0 : n.indicator) ?? `tabs:${e.id}:indicator`;
  },
  getTablistEl: (e) => H.getById(e, H.getTablistId(e)),
  getContentEl: (e, n) => H.getById(e, H.getContentId(e, n)),
  getTriggerEl: (e, n) => H.getById(e, H.getTriggerId(e, n)),
  getIndicatorEl: (e) => H.getById(e, H.getIndicatorId(e)),
  getElements: (e) => {
    const t = `[role=tab][data-ownedby='${CSS.escape(H.getTablistId(e))}']:not([disabled])`;
    return Qr(H.getTablistEl(e), t);
  },
  getFirstEl: (e) => ho(H.getElements(e)),
  getLastEl: (e) => vo(H.getElements(e)),
  getNextEl: (e, n) => ni(H.getElements(e), H.getTriggerId(e, n), e.loop),
  getPrevEl: (e, n) => ri(H.getElements(e), H.getTriggerId(e, n), e.loop),
  getActiveContentEl: (e) => {
    if (e.value)
      return H.getContentEl(e, e.value);
  },
  getActiveTabEl: (e) => {
    if (e.value)
      return H.getTriggerEl(e, e.value);
  },
  getOffsetRect: (e) => ({
    left: (e == null ? void 0 : e.offsetLeft) ?? 0,
    top: (e == null ? void 0 : e.offsetTop) ?? 0,
    width: (e == null ? void 0 : e.offsetWidth) ?? 0,
    height: (e == null ? void 0 : e.offsetHeight) ?? 0
  }),
  getRectById: (e, n) => {
    const t = go(H.getElements(e), H.getTriggerId(e, n));
    return H.resolveRect(H.getOffsetRect(t), e.orientation);
  },
  resolveRect(e, n) {
    const t = n === "vertical" ? "height" : "width", r = n === "vertical" ? "top" : "left";
    return {
      [r]: `${e[r]}px`,
      [t]: `${e[t]}px`
    };
  }
});
function yu(e, n, t) {
  const r = e.context.translations, i = e.matches("focused");
  return {
    /**
     * The current value of the tabs.
     */
    value: e.context.value,
    /**
     * The value of the tab that is currently focused.
     */
    focusedValue: e.context.focusedValue,
    /**
     * The previous values of the tabs in sequence of selection.
     */
    previousValues: Array.from(e.context.previousValues),
    /**
     * Sets the value of the tabs.
     */
    setValue(o) {
      n({ type: "SET_VALUE", value: o });
    },
    /**
     * Clears the value of the tabs.
     */
    clearValue() {
      n({ type: "CLEAR_VALUE" });
    },
    /**
     * Sets the indicator rect to the tab with the given id.
     */
    setIndicatorRect(o) {
      n({ type: "SET_INDICATOR_RECT", id: o });
    },
    rootProps: t.element({
      ...St.root.attrs,
      id: H.getRootId(e.context),
      "data-orientation": e.context.orientation,
      "data-focus": z(i),
      dir: e.context.dir
    }),
    tablistProps: t.element({
      ...St.tablist.attrs,
      id: H.getTablistId(e.context),
      role: "tablist",
      "data-focus": z(i),
      "aria-orientation": e.context.orientation,
      "data-orientation": e.context.orientation,
      "aria-label": r.tablistLabel,
      onKeyDown(o) {
        const a = {
          ArrowDown() {
            n("ARROW_DOWN");
          },
          ArrowUp() {
            n("ARROW_UP");
          },
          ArrowLeft() {
            n("ARROW_LEFT");
          },
          ArrowRight() {
            n("ARROW_RIGHT");
          },
          Home() {
            n("HOME");
          },
          End() {
            n("END");
          },
          Enter() {
            n({ type: "ENTER", value: e.context.focusedValue });
          }
        };
        let u = er(o, e.context);
        const f = a[u];
        f && (o.preventDefault(), f(o));
      }
    }),
    getTriggerProps(o) {
      const { value: a, disabled: u } = o, f = e.context.value === a;
      return t.button({
        ...St.trigger.attrs,
        role: "tab",
        type: "button",
        disabled: u,
        "data-orientation": e.context.orientation,
        "data-disabled": z(u),
        "aria-disabled": u,
        "data-value": a,
        "aria-selected": f,
        "data-selected": z(f),
        "aria-controls": H.getContentId(e.context, a),
        "data-ownedby": H.getTablistId(e.context),
        id: H.getTriggerId(e.context, a),
        tabIndex: f ? 0 : -1,
        onFocus() {
          n({ type: "TAB_FOCUS", value: a });
        },
        onBlur(c) {
          const l = c.relatedTarget;
          (l == null ? void 0 : l.getAttribute("role")) !== "tab" && n({ type: "TAB_BLUR" });
        },
        onClick(c) {
          u || (ps() && c.currentTarget.focus(), n({ type: "TAB_CLICK", value: a }));
        }
      });
    },
    contentGroupProps: t.element({
      ...St.contentGroup.attrs,
      id: H.getContentGroupId(e.context),
      "data-orientation": e.context.orientation
    }),
    getContentProps({ value: o }) {
      const a = e.context.value === o;
      return t.element({
        ...St.content.attrs,
        id: H.getContentId(e.context, o),
        tabIndex: 0,
        "aria-labelledby": H.getTriggerId(e.context, o),
        role: "tabpanel",
        "data-ownedby": H.getTablistId(e.context),
        hidden: !a
      });
    },
    indicatorProps: t.element({
      id: H.getIndicatorId(e.context),
      ...St.indicator.attrs,
      "data-orientation": e.context.orientation,
      style: {
        "--transition-duration": "150ms",
        "--transition-property": "left, right, top, bottom, width, height",
        position: "absolute",
        willChange: "var(--transition-property)",
        transitionProperty: "var(--transition-property)",
        transitionDuration: e.context.canIndicatorTransition ? "var(--transition-duration)" : "0ms",
        transitionTimingFunction: "var(--transition-timing-function)",
        ...e.context.indicatorRect
      }
    })
  };
}
var { not: mu } = ui;
function Eu(e) {
  const n = pt(e);
  return kt(
    {
      initial: "idle",
      context: {
        dir: "ltr",
        orientation: "horizontal",
        activationMode: "automatic",
        value: null,
        focusedValue: null,
        previousValues: [],
        indicatorRect: {
          left: "0px",
          top: "0px",
          width: "0px",
          height: "0px"
        },
        canIndicatorTransition: !1,
        isIndicatorRendered: !1,
        loop: !0,
        translations: {},
        ...n
      },
      computed: {
        isHorizontal: (t) => t.orientation === "horizontal",
        isVertical: (t) => t.orientation === "vertical"
      },
      created: ["setPrevSelectedTabs"],
      entry: ["checkRenderedElements", "syncIndicatorRect", "setContentTabIndex"],
      exit: ["cleanupObserver"],
      watch: {
        focusedValue: "invokeOnFocus",
        value: [
          "enableIndicatorTransition",
          "invokeOnChange",
          "setPrevSelectedTabs",
          "syncIndicatorRect",
          "setContentTabIndex"
        ],
        dir: ["syncIndicatorRect"],
        orientation: ["syncIndicatorRect"]
      },
      on: {
        SET_VALUE: {
          actions: "setValue"
        },
        CLEAR_VALUE: {
          actions: "clearValue"
        },
        SET_INDICATOR_RECT: {
          actions: "setIndicatorRect"
        }
      },
      states: {
        idle: {
          on: {
            TAB_FOCUS: [
              {
                guard: "selectOnFocus",
                target: "focused",
                actions: ["setFocusedValue", "setValue"]
              },
              {
                target: "focused",
                actions: "setFocusedValue"
              }
            ],
            TAB_CLICK: {
              target: "focused",
              actions: ["setFocusedValue", "setValue"]
            }
          }
        },
        focused: {
          on: {
            TAB_CLICK: {
              target: "focused",
              actions: ["setFocusedValue", "setValue"]
            },
            ARROW_LEFT: {
              guard: "isHorizontal",
              actions: "focusPrevTab"
            },
            ARROW_RIGHT: {
              guard: "isHorizontal",
              actions: "focusNextTab"
            },
            ARROW_UP: {
              guard: "isVertical",
              actions: "focusPrevTab"
            },
            ARROW_DOWN: {
              guard: "isVertical",
              actions: "focusNextTab"
            },
            HOME: {
              actions: "focusFirstTab"
            },
            END: {
              actions: "focusLastTab"
            },
            ENTER: {
              guard: mu("selectOnFocus"),
              actions: "setValue"
            },
            TAB_FOCUS: [
              {
                guard: "selectOnFocus",
                actions: ["setFocusedValue", "setValue"]
              },
              { actions: "setFocusedValue" }
            ],
            TAB_BLUR: {
              target: "idle",
              actions: "clearFocusedValue"
            }
          }
        }
      }
    },
    {
      guards: {
        isVertical: (t) => t.isVertical,
        isHorizontal: (t) => t.isHorizontal,
        selectOnFocus: (t) => t.activationMode === "automatic"
      },
      actions: {
        setFocusedValue(t, r) {
          t.focusedValue = r.value;
        },
        clearFocusedValue(t) {
          t.focusedValue = null;
        },
        setValue(t, r) {
          t.value = r.value;
        },
        clearValue(t) {
          t.value = null;
        },
        focusFirstTab(t) {
          re(() => {
            var r;
            return (r = H.getFirstEl(t)) == null ? void 0 : r.focus();
          });
        },
        focusLastTab(t) {
          re(() => {
            var r;
            return (r = H.getLastEl(t)) == null ? void 0 : r.focus();
          });
        },
        focusNextTab(t) {
          if (!t.focusedValue)
            return;
          const r = H.getNextEl(t, t.focusedValue);
          re(() => r == null ? void 0 : r.focus());
        },
        focusPrevTab(t) {
          if (!t.focusedValue)
            return;
          const r = H.getPrevEl(t, t.focusedValue);
          re(() => r == null ? void 0 : r.focus());
        },
        checkRenderedElements(t) {
          t.isIndicatorRendered = !!H.getIndicatorEl(t);
        },
        invokeOnChange(t) {
          var r;
          (r = t.onChange) == null || r.call(t, { value: t.value });
        },
        invokeOnFocus(t) {
          var r;
          (r = t.onFocus) == null || r.call(t, { value: t.focusedValue });
        },
        setPrevSelectedTabs(t) {
          t.value != null && (t.previousValues = Ou(t.previousValues, t.value));
        },
        // if tab panel contains focusable elements, remove the tabindex attribute
        setContentTabIndex(t) {
          re(() => {
            const r = H.getActiveContentEl(t);
            if (!r)
              return;
            jo(r).length > 0 ? r.removeAttribute("tabindex") : r.setAttribute("tabindex", "0");
          });
        },
        cleanupObserver(t) {
          var r;
          (r = t.indicatorCleanup) == null || r.call(t);
        },
        enableIndicatorTransition(t) {
          t.canIndicatorTransition = !0;
        },
        setIndicatorRect(t, r) {
          const i = r.id ?? t.value;
          !t.isIndicatorRendered || !i || !H.getTriggerEl(t, i) || (t.indicatorRect = H.getRectById(t, i), Mr(() => {
            t.canIndicatorTransition = !1;
          }));
        },
        syncIndicatorRect(t) {
          var o;
          (o = t.indicatorCleanup) == null || o.call(t);
          const r = t.value;
          if (!t.isIndicatorRendered || !r)
            return;
          const i = H.getActiveTabEl(t);
          i && (t.indicatorCleanup = Gr(i, {
            getRect(a) {
              return H.getOffsetRect(a);
            },
            onChange(a) {
              t.indicatorRect = H.resolveRect(a, t.orientation), Mr(() => {
                t.canIndicatorTransition = !1;
              });
            }
          }));
        }
      }
    }
  );
}
function Ou(e, n) {
  const t = Array.from(e).slice(), r = t.indexOf(n);
  return r > -1 && t.splice(r, 1), t.push(n), t;
}
function Au({ items: e, part: n, ...t }) {
  var a, u;
  const [r, i] = gn(Eu({ id: fn() }), { context: t }), o = yu(r, i, Ft);
  return /* @__PURE__ */ W.jsxs("div", { ...o.rootProps, className: (a = n == null ? void 0 : n.root) == null ? void 0 : a.className, children: [
    /* @__PURE__ */ W.jsx("div", { ...o.tablistProps, className: Oe("tabs", (u = n == null ? void 0 : n.tablist) == null ? void 0 : u.className), children: e.map((f) => {
      var c;
      return /* @__PURE__ */ _t(
        "button",
        {
          ...o.getTriggerProps({ disabled: f.disabled, value: f.value }),
          className: Oe(
            "tab",
            o.value === f.value && "tab-active",
            f.disabled && "tab-disabled",
            (c = n == null ? void 0 : n.trigger) == null ? void 0 : c.className
          ),
          key: f.value
        },
        f.title
      );
    }) }),
    e.map((f) => {
      var c;
      return /* @__PURE__ */ _t(
        "div",
        {
          ...o.getContentProps({ value: f.value }),
          className: (c = n == null ? void 0 : n.content) == null ? void 0 : c.className,
          key: f.value
        },
        f.content
      );
    })
  ] });
}
const Pu = ({ children: e }) => /* @__PURE__ */ W.jsx(vu, { children: e });
export {
  Iu as Combobox,
  Su as Modal,
  Pu as Provider,
  Cu as Select,
  Au as Tabs,
  vu as ToastProvider,
  Ru as useToast
};
