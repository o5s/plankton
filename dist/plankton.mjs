import * as Z from "react";
import Cn, { useLayoutEffect as oo, useEffect as Sn, useRef as st, useReducer as ao, createElement as Me, useSyncExternalStore as so, useCallback as Hi, useMemo as co, useState as lo, useId as pt, createContext as uo, useContext as fo } from "react";
import { createPortal as po } from "react-dom";
var pn = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii;
function go() {
  if (ii)
    return Ye;
  ii = 1;
  var e = Cn, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, u, s) {
    var c, d = {}, g = null, f = null;
    s !== void 0 && (g = "" + s), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (f = u.ref);
    for (c in u)
      i.call(u, c) && !o.hasOwnProperty(c) && (d[c] = u[c]);
    if (l && l.defaultProps)
      for (c in u = l.defaultProps, u)
        d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: n, type: l, key: g, ref: f, props: d, _owner: r.current };
  }
  return Ye.Fragment = t, Ye.jsx = a, Ye.jsxs = a, Ye;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function ho() {
  return ri || (ri = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Cn, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function m(p) {
      if (p === null || typeof p != "object")
        return null;
      var w = h && p[h] || p[v];
      return typeof w == "function" ? w : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(p) {
      {
        for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), N = 1; N < w; N++)
          P[N - 1] = arguments[N];
        C("error", p, P);
      }
    }
    function C(p, w, P) {
      {
        var N = O.ReactDebugCurrentFrame, U = N.getStackAddendum();
        U !== "" && (w += "%s", P = P.concat([U]));
        var K = P.map(function(j) {
          return String(j);
        });
        K.unshift("Warning: " + w), Function.prototype.apply.call(console[p], console, K);
      }
    }
    var k = !1, F = !1, L = !1, b = !1, E = !1, y;
    y = Symbol.for("react.module.reference");
    function S(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === i || p === o || E || p === r || p === s || p === c || b || p === f || k || F || L || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === d || p.$$typeof === a || p.$$typeof === l || p.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === y || p.getModuleId !== void 0));
    }
    function I(p, w, P) {
      var N = p.displayName;
      if (N)
        return N;
      var U = w.displayName || w.name || "";
      return U !== "" ? P + "(" + U + ")" : P;
    }
    function x(p) {
      return p.displayName || "Context";
    }
    function V(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case i:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case s:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            var w = p;
            return x(w) + ".Consumer";
          case a:
            var P = p;
            return x(P._context) + ".Provider";
          case u:
            return I(p, p.render, "ForwardRef");
          case d:
            var N = p.displayName || null;
            return N !== null ? N : V(p.type) || "Memo";
          case g: {
            var U = p, K = U._payload, j = U._init;
            try {
              return V(j(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, Y = 0, G, J, he, ve, ue, Ge, vt;
    function bt() {
    }
    bt.__reactDisabledLog = !0;
    function Nr() {
      {
        if (Y === 0) {
          G = console.log, J = console.info, he = console.warn, ve = console.error, ue = console.group, Ge = console.groupCollapsed, vt = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: bt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        Y++;
      }
    }
    function _r() {
      {
        if (Y--, Y === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, p, {
              value: G
            }),
            info: H({}, p, {
              value: J
            }),
            warn: H({}, p, {
              value: he
            }),
            error: H({}, p, {
              value: ve
            }),
            group: H({}, p, {
              value: ue
            }),
            groupCollapsed: H({}, p, {
              value: Ge
            }),
            groupEnd: H({}, p, {
              value: vt
            })
          });
        }
        Y < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xt = O.ReactCurrentDispatcher, Jt;
    function mt(p, w, P) {
      {
        if (Jt === void 0)
          try {
            throw Error();
          } catch (U) {
            var N = U.stack.trim().match(/\n( *(at )?)/);
            Jt = N && N[1] || "";
          }
        return `
` + Jt + p;
      }
    }
    var Zt = !1, yt;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      yt = new Fr();
    }
    function Un(p, w) {
      if (!p || Zt)
        return "";
      {
        var P = yt.get(p);
        if (P !== void 0)
          return P;
      }
      var N;
      Zt = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = Xt.current, Xt.current = null, Nr();
      try {
        if (w) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (de) {
              N = de;
            }
            Reflect.construct(p, [], j);
          } else {
            try {
              j.call();
            } catch (de) {
              N = de;
            }
            p.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            N = de;
          }
          p();
        }
      } catch (de) {
        if (de && N && typeof de.stack == "string") {
          for (var M = de.stack.split(`
`), Q = N.stack.split(`
`), q = M.length - 1, X = Q.length - 1; q >= 1 && X >= 0 && M[q] !== Q[X]; )
            X--;
          for (; q >= 1 && X >= 0; q--, X--)
            if (M[q] !== Q[X]) {
              if (q !== 1 || X !== 1)
                do
                  if (q--, X--, X < 0 || M[q] !== Q[X]) {
                    var ne = `
` + M[q].replace(" at new ", " at ");
                    return p.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", p.displayName)), typeof p == "function" && yt.set(p, ne), ne;
                  }
                while (q >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        Zt = !1, Xt.current = K, _r(), Error.prepareStackTrace = U;
      }
      var Le = p ? p.displayName || p.name : "", ni = Le ? mt(Le) : "";
      return typeof p == "function" && yt.set(p, ni), ni;
    }
    function Vr(p, w, P) {
      return Un(p, !1);
    }
    function $r(p) {
      var w = p.prototype;
      return !!(w && w.isReactComponent);
    }
    function Et(p, w, P) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Un(p, $r(p));
      if (typeof p == "string")
        return mt(p);
      switch (p) {
        case s:
          return mt("Suspense");
        case c:
          return mt("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case u:
            return Vr(p.render);
          case d:
            return Et(p.type, w, P);
          case g: {
            var N = p, U = N._payload, K = N._init;
            try {
              return Et(K(U), w, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Ot = Object.prototype.hasOwnProperty, Wn = {}, Kn = O.ReactDebugCurrentFrame;
    function Tt(p) {
      if (p) {
        var w = p._owner, P = Et(p.type, p._source, w ? w.type : null);
        Kn.setExtraStackFrame(P);
      } else
        Kn.setExtraStackFrame(null);
    }
    function Mr(p, w, P, N, U) {
      {
        var K = Function.call.bind(Ot);
        for (var j in p)
          if (K(p, j)) {
            var M = void 0;
            try {
              if (typeof p[j] != "function") {
                var Q = Error((N || "React class") + ": " + P + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              M = p[j](w, j, N, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              M = q;
            }
            M && !(M instanceof Error) && (Tt(U), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", P, j, typeof M), Tt(null)), M instanceof Error && !(M.message in Wn) && (Wn[M.message] = !0, Tt(U), T("Failed %s type: %s", P, M.message), Tt(null));
          }
      }
    }
    var jr = Array.isArray;
    function Qt(p) {
      return jr(p);
    }
    function Br(p) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, P = w && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return P;
      }
    }
    function Hr(p) {
      try {
        return Gn(p), !1;
      } catch {
        return !0;
      }
    }
    function Gn(p) {
      return "" + p;
    }
    function zn(p) {
      if (Hr(p))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(p)), Gn(p);
    }
    var ze = O.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yn, qn, en;
    en = {};
    function Wr(p) {
      if (Ot.call(p, "ref")) {
        var w = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Kr(p) {
      if (Ot.call(p, "key")) {
        var w = Object.getOwnPropertyDescriptor(p, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function Gr(p, w) {
      if (typeof p.ref == "string" && ze.current && w && ze.current.stateNode !== w) {
        var P = V(ze.current.type);
        en[P] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(ze.current.type), p.ref), en[P] = !0);
      }
    }
    function zr(p, w) {
      {
        var P = function() {
          Yn || (Yn = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Yr(p, w) {
      {
        var P = function() {
          qn || (qn = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var qr = function(p, w, P, N, U, K, j) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: p,
        key: w,
        ref: P,
        props: j,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Xr(p, w, P, N, U) {
      {
        var K, j = {}, M = null, Q = null;
        P !== void 0 && (zn(P), M = "" + P), Kr(w) && (zn(w.key), M = "" + w.key), Wr(w) && (Q = w.ref, Gr(w, U));
        for (K in w)
          Ot.call(w, K) && !Ur.hasOwnProperty(K) && (j[K] = w[K]);
        if (p && p.defaultProps) {
          var q = p.defaultProps;
          for (K in q)
            j[K] === void 0 && (j[K] = q[K]);
        }
        if (M || Q) {
          var X = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          M && zr(j, X), Q && Yr(j, X);
        }
        return qr(p, M, Q, U, N, ze.current, j);
      }
    }
    var tn = O.ReactCurrentOwner, Xn = O.ReactDebugCurrentFrame;
    function De(p) {
      if (p) {
        var w = p._owner, P = Et(p.type, p._source, w ? w.type : null);
        Xn.setExtraStackFrame(P);
      } else
        Xn.setExtraStackFrame(null);
    }
    var nn;
    nn = !1;
    function rn(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function Jn() {
      {
        if (tn.current) {
          var p = V(tn.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Jr(p) {
      {
        if (p !== void 0) {
          var w = p.fileName.replace(/^.*[\\\/]/, ""), P = p.lineNumber;
          return `

Check your code at ` + w + ":" + P + ".";
        }
        return "";
      }
    }
    var Zn = {};
    function Zr(p) {
      {
        var w = Jn();
        if (!w) {
          var P = typeof p == "string" ? p : p.displayName || p.name;
          P && (w = `

Check the top-level render call using <` + P + ">.");
        }
        return w;
      }
    }
    function Qn(p, w) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var P = Zr(w);
        if (Zn[P])
          return;
        Zn[P] = !0;
        var N = "";
        p && p._owner && p._owner !== tn.current && (N = " It was passed a child from " + V(p._owner.type) + "."), De(p), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, N), De(null);
      }
    }
    function ei(p, w) {
      {
        if (typeof p != "object")
          return;
        if (Qt(p))
          for (var P = 0; P < p.length; P++) {
            var N = p[P];
            rn(N) && Qn(N, w);
          }
        else if (rn(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var U = m(p);
          if (typeof U == "function" && U !== p.entries)
            for (var K = U.call(p), j; !(j = K.next()).done; )
              rn(j.value) && Qn(j.value, w);
        }
      }
    }
    function Qr(p) {
      {
        var w = p.type;
        if (w == null || typeof w == "string")
          return;
        var P;
        if (typeof w == "function")
          P = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === d))
          P = w.propTypes;
        else
          return;
        if (P) {
          var N = V(w);
          Mr(P, p.props, "prop", N, p);
        } else if (w.PropTypes !== void 0 && !nn) {
          nn = !0;
          var U = V(w);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function eo(p) {
      {
        for (var w = Object.keys(p.props), P = 0; P < w.length; P++) {
          var N = w[P];
          if (N !== "children" && N !== "key") {
            De(p), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), De(null);
            break;
          }
        }
        p.ref !== null && (De(p), T("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    function ti(p, w, P, N, U, K) {
      {
        var j = S(p);
        if (!j) {
          var M = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Jr(U);
          Q ? M += Q : M += Jn();
          var q;
          p === null ? q = "null" : Qt(p) ? q = "array" : p !== void 0 && p.$$typeof === n ? (q = "<" + (V(p.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : q = typeof p, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, M);
        }
        var X = Xr(p, w, P, U, K);
        if (X == null)
          return X;
        if (j) {
          var ne = w.children;
          if (ne !== void 0)
            if (N)
              if (Qt(ne)) {
                for (var Le = 0; Le < ne.length; Le++)
                  ei(ne[Le], p);
                Object.freeze && Object.freeze(ne);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ei(ne, p);
        }
        return p === i ? eo(X) : Qr(X), X;
      }
    }
    function to(p, w, P) {
      return ti(p, w, P, !0);
    }
    function no(p, w, P) {
      return ti(p, w, P, !1);
    }
    var io = no, ro = to;
    qe.Fragment = i, qe.jsx = io, qe.jsxs = ro;
  }()), qe;
}
process.env.NODE_ENV === "production" ? pn.exports = go() : pn.exports = ho();
var $ = pn.exports, ye = (e, n = []) => ({
  parts: (...t) => {
    if (vo(n))
      return ye(e, t);
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...t) => ye(e, [...n, ...t]),
  rename: (t) => ye(t, n),
  build: () => [...new Set(n)].reduce(
    (t, i) => Object.assign(t, {
      [i]: {
        selector: [
          `&[data-scope="${ke(e)}"][data-part="${ke(i)}"]`,
          `& [data-scope="${ke(e)}"][data-part="${ke(i)}"]`
        ].join(", "),
        attrs: { "data-scope": ke(e), "data-part": ke(i) }
      }
    }),
    {}
  )
}), ke = (e) => e.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), vo = (e) => e.length === 0, bo = ye("combobox").parts(
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
), ce = bo.build();
function gn(e) {
  const n = /* @__PURE__ */ new Set();
  function t(i) {
    const r = globalThis.requestAnimationFrame(i);
    n.add(() => globalThis.cancelAnimationFrame(r));
  }
  return t(() => t(e)), function() {
    n.forEach((r) => r());
  };
}
function z(e) {
  const n = globalThis.requestAnimationFrame(e);
  return () => {
    globalThis.cancelAnimationFrame(n);
  };
}
function kt(e) {
  var n;
  return ((n = e.composedPath) == null ? void 0 : n.call(e)[0]) ?? e.target;
}
function je(e) {
  return typeof e == "object" && (e == null ? void 0 : e.nodeType) === Node.ELEMENT_NODE && typeof (e == null ? void 0 : e.nodeName) == "string";
}
function mo(e) {
  if (e == null || !je(e))
    return !1;
  try {
    const n = e.ownerDocument.defaultView || window;
    return e instanceof n.HTMLInputElement && e.selectionStart != null || /(textarea|select)/.test(e.localName) || e.isContentEditable;
  } catch {
    return !1;
  }
}
var Rn = () => typeof window < "u";
function yo() {
  const e = navigator.userAgentData;
  return (e == null ? void 0 : e.platform) ?? navigator.platform;
}
var Ui = (e) => Rn() && e.test(yo()), Eo = (e) => Rn() && e.test(navigator.vendor), Oo = () => Rn() && !!navigator.maxTouchPoints, To = () => Ui(/^Mac/) && !Oo(), wo = () => Wi() && Eo(/apple/i), Wi = () => Ui(/mac|iphone|ipad|ipod/i), Io = () => Wi() && !To();
function Pn(e, n) {
  return Array.from((e == null ? void 0 : e.querySelectorAll(n)) ?? []);
}
function oi(e, n) {
  return e == null ? void 0 : e.querySelector(n);
}
var B = (e) => e ? "" : void 0, Ki = (e) => e ? "true" : void 0;
function ct(e, n) {
  return !e || !n || !je(e) || !je(n) ? !1 : e === n || e.contains(n);
}
var Co = (e) => e.nodeType === Node.DOCUMENT_NODE ? e : e.ownerDocument ?? document;
function gt(e) {
  const n = {
    getRootNode: (t) => {
      var i;
      return ((i = t.getRootNode) == null ? void 0 : i.call(t)) ?? document;
    },
    getDoc: (t) => Co(n.getRootNode(t)),
    getWin: (t) => n.getDoc(t).defaultView ?? window,
    getActiveElement: (t) => n.getDoc(t).activeElement,
    getById: (t, i) => n.getRootNode(t).getElementById(i),
    queryById: (t, i) => {
      const r = n.getById(t, i);
      if (!r)
        throw new Error(`Element with id "${i}" not found.`);
      return r;
    }
  };
  return { ...n, ...e };
}
var So = (e) => e.nodeType === Node.DOCUMENT_NODE;
function An(e) {
  return So(e) ? e : (e == null ? void 0 : e.ownerDocument) ?? document;
}
function Ro(e) {
  return (e == null ? void 0 : e.ownerDocument.defaultView) ?? window;
}
function Gi(e, n) {
  return e.find((t) => t.id === n);
}
function Dn(e, n) {
  const t = Gi(e, n);
  return t ? e.indexOf(t) : -1;
}
function Ln(e, n, t = !0) {
  let i = Dn(e, n);
  return i = t ? (i + 1) % e.length : Math.min(i + 1, e.length - 1), e[i];
}
function kn(e, n, t = !0) {
  let i = Dn(e, n);
  return i === -1 ? t ? e[e.length - 1] : null : (i = t ? (i - 1 + e.length) % e.length : Math.max(0, i - 1), e[i]);
}
var Po = (e) => e.dataset.valuetext ?? e.textContent ?? "", Ao = (e, n) => e.toLowerCase().startsWith(n.toLowerCase()), Do = (e, n) => e.map((t, i) => e[(Math.max(n, 0) + i) % e.length]);
function Lo(e, n, t) {
  const i = t ? Dn(e, t) : -1;
  let r = t ? Do(e, i) : e;
  return n.length === 1 && (r = r.filter((a) => a.id !== t)), r.find((a) => Ao(Po(a), n));
}
function ko(e, n) {
  const { state: t, activeId: i, key: r, timeout: o = 350 } = n, a = t.keysSoFar + r, u = a.length > 1 && Array.from(a).every((f) => f === a[0]) ? a[0] : a;
  let s = e.slice();
  const c = Lo(s, u, i);
  function d() {
    clearTimeout(t.timer), t.timer = -1;
  }
  function g(f) {
    t.keysSoFar = f, d(), f !== "" && (t.timer = +setTimeout(() => {
      g(""), d();
    }, o));
  }
  return g(a), c;
}
var xt = /* @__PURE__ */ Object.assign(ko, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: xo
});
function xo(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
var No = 2147483647, zi = (e) => e[0], Yi = (e) => e[e.length - 1], Nt = (e, ...n) => (typeof e == "function" ? e(...n) : e) ?? void 0, hn = (...e) => (...n) => {
  e.forEach(function(t) {
    t == null || t(...n);
  });
}, _o = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (e++, e.toString(36));
})(), Fo = (e) => Array.isArray(e), Vo = (e) => !(e == null || typeof e != "object" || Fo(e));
function Ae(e) {
  if (!$o(e) || e === void 0)
    return e;
  const n = Reflect.ownKeys(e).filter((i) => typeof i == "string"), t = {};
  for (const i of n) {
    const r = e[i];
    r !== void 0 && (t[i] = Ae(r));
  }
  return t;
}
function ai(e) {
  return JSON.parse(JSON.stringify(e));
}
var $o = (e) => e && typeof e == "object" && e.constructor === Object;
function Mo(...e) {
  const n = e.length === 1 ? e[0] : e[1];
  (e.length === 2 ? e[0] : !0) && process.env.NODE_ENV !== "production" && console.warn(n);
}
var R = gt({
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
    var i, r;
    return ((r = (i = e.ids) == null ? void 0 : i.option) == null ? void 0 : r.call(i, n, t)) ?? [`combobox:${e.id}:option:${n}`, t].filter((o) => o != null).join(":");
  },
  getActiveOptionEl: (e) => e.focusedId ? R.getById(e, e.focusedId) : null,
  getContentEl: (e) => R.getById(e, R.getContentId(e)),
  getInputEl: (e) => R.getById(e, R.getInputId(e)),
  getPositionerEl: (e) => R.getById(e, R.getPositionerId(e)),
  getControlEl: (e) => R.getById(e, R.getControlId(e)),
  getTriggerEl: (e) => R.getById(e, R.getTriggerId(e)),
  getClearTriggerEl: (e) => R.getById(e, R.getClearTriggerId(e)),
  getElements: (e) => Pn(R.getContentEl(e), "[role=option]:not([aria-disabled=true])"),
  getFocusedOptionEl: (e) => {
    var t;
    if (!e.focusedId)
      return null;
    const n = `[role=option][id=${CSS.escape(e.focusedId)}]`;
    return (t = R.getContentEl(e)) == null ? void 0 : t.querySelector(n);
  },
  getFirstEl: (e) => zi(R.getElements(e)),
  getLastEl: (e) => Yi(R.getElements(e)),
  getPrevEl: (e, n) => kn(R.getElements(e), n, e.loop),
  getNextEl: (e, n) => Ln(R.getElements(e), n, e.loop),
  isInputFocused: (e) => R.getDoc(e).activeElement === R.getInputEl(e),
  getOptionData: (e) => ({
    value: (e == null ? void 0 : e.getAttribute("data-value")) ?? "",
    label: (e == null ? void 0 : e.getAttribute("data-label")) ?? ""
  }),
  getOptionCount: (e) => {
    var i;
    const n = R.getContentEl(e), t = (i = n == null ? void 0 : n.querySelector("[role=option]")) == null ? void 0 : i.getAttribute("aria-setsize");
    return t != null ? parseInt(t) : (n == null ? void 0 : n.querySelectorAll("[role=option]").length) ?? 0;
  },
  getMatchingOptionEl: (e, n) => {
    if (!n)
      return null;
    const t = `[role=option][data-value="${CSS.escape(n)}"`, i = R.getContentEl(e);
    return i ? i.querySelector(t) : null;
  },
  focusInput: (e) => {
    const n = R.getInputEl(e);
    R.getDoc(e).activeElement !== n && (n == null || n.focus()), e.selectInputOnFocus && (n == null || n.select());
  },
  getClosestSectionLabel(e) {
    var t;
    if (!e.focusedId)
      return;
    const n = (t = R.getActiveOptionEl(e)) == null ? void 0 : t.closest("[data-part=option-group]");
    return n == null ? void 0 : n.getAttribute("aria-label");
  },
  getValueLabel: (e, n) => {
    const t = R.getMatchingOptionEl(e, n);
    return R.getOptionData(t).label;
  }
}), _t = (e, n, t, i) => {
  const r = typeof e == "function" ? e() : e;
  return r == null || r.addEventListener(n, t, i), () => {
    r == null || r.removeEventListener(n, t, i);
  };
}, si = (e) => e.button === 0, jo = (e) => e.button === 2 || Ho(e) && e.button === 0, Bo = () => /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), Ho = (e) => Bo() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
function ci(e, n, t) {
  if (!e)
    return;
  const i = e.ownerDocument.defaultView || window, r = new i.CustomEvent(n, t);
  return e.dispatchEvent(r);
}
var Uo = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Esc: "Escape",
  " ": "Space",
  ",": "Comma",
  Left: "ArrowLeft",
  Right: "ArrowRight"
}, li = {
  ArrowLeft: "ArrowRight",
  ArrowRight: "ArrowLeft"
};
function Ft(e, n = {}) {
  const { dir: t = "ltr", orientation: i = "horizontal" } = n;
  let { key: r } = e;
  return r = Uo[r] ?? r, t === "rtl" && i === "horizontal" && r in li && (r = li[r]), r;
}
function wt(e) {
  return e.nativeEvent ?? e;
}
function He(e) {
  return e.split("-")[1];
}
function xn(e) {
  return e === "y" ? "height" : "width";
}
function Ee(e) {
  return e.split("-")[0];
}
function Ue(e) {
  return ["top", "bottom"].includes(Ee(e)) ? "x" : "y";
}
function ui(e, n, t) {
  let { reference: i, floating: r } = e;
  const o = i.x + i.width / 2 - r.width / 2, a = i.y + i.height / 2 - r.height / 2, l = Ue(n), u = xn(l), s = i[u] / 2 - r[u] / 2, c = l === "x";
  let d;
  switch (Ee(n)) {
    case "top":
      d = { x: o, y: i.y - r.height };
      break;
    case "bottom":
      d = { x: o, y: i.y + i.height };
      break;
    case "right":
      d = { x: i.x + i.width, y: a };
      break;
    case "left":
      d = { x: i.x - r.width, y: a };
      break;
    default:
      d = { x: i.x, y: i.y };
  }
  switch (He(n)) {
    case "start":
      d[l] -= s * (t && c ? -1 : 1);
      break;
    case "end":
      d[l] += s * (t && c ? -1 : 1);
  }
  return d;
}
const Wo = async (e, n, t) => {
  const { placement: i = "bottom", strategy: r = "absolute", middleware: o = [], platform: a } = t, l = o.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let s = await a.getElementRects({ reference: e, floating: n, strategy: r }), { x: c, y: d } = ui(s, i, u), g = i, f = {}, h = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: m, fn: O } = l[v], { x: T, y: C, data: k, reset: F } = await O({ x: c, y: d, initialPlacement: i, placement: g, strategy: r, middlewareData: f, rects: s, platform: a, elements: { reference: e, floating: n } });
    c = T ?? c, d = C ?? d, f = { ...f, [m]: { ...f[m], ...k } }, F && h <= 50 && (h++, typeof F == "object" && (F.placement && (g = F.placement), F.rects && (s = F.rects === !0 ? await a.getElementRects({ reference: e, floating: n, strategy: r }) : F.rects), { x: c, y: d } = ui(s, g, u)), v = -1);
  }
  return { x: c, y: d, placement: g, strategy: r, middlewareData: f };
};
function qi(e) {
  return typeof e != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Vt(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Nn(e, n) {
  var t;
  n === void 0 && (n = {});
  const { x: i, y: r, platform: o, rects: a, elements: l, strategy: u } = e, { boundary: s = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: g = !1, padding: f = 0 } = n, h = qi(f), v = l[g ? d === "floating" ? "reference" : "floating" : d], m = Vt(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(v))) == null || t ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(l.floating)), boundary: s, rootBoundary: c, strategy: u })), O = d === "floating" ? { ...a.floating, x: i, y: r } : a.reference, T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l.floating)), C = await (o.isElement == null ? void 0 : o.isElement(T)) && await (o.getScale == null ? void 0 : o.getScale(T)) || { x: 1, y: 1 }, k = Vt(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: O, offsetParent: T, strategy: u }) : O);
  return { top: (m.top - k.top + h.top) / C.y, bottom: (k.bottom - m.bottom + h.bottom) / C.y, left: (m.left - k.left + h.left) / C.x, right: (k.right - m.right + h.right) / C.x };
}
const vn = Math.min, Ce = Math.max;
function bn(e, n, t) {
  return Ce(e, vn(n, t));
}
const Ko = (e) => ({ name: "arrow", options: e, async fn(n) {
  const { element: t, padding: i = 0 } = e || {}, { x: r, y: o, placement: a, rects: l, platform: u, elements: s } = n;
  if (t == null)
    return {};
  const c = qi(i), d = { x: r, y: o }, g = Ue(a), f = xn(g), h = await u.getDimensions(t), v = g === "y", m = v ? "top" : "left", O = v ? "bottom" : "right", T = v ? "clientHeight" : "clientWidth", C = l.reference[f] + l.reference[g] - d[g] - l.floating[f], k = d[g] - l.reference[g], F = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(t));
  let L = F ? F[T] : 0;
  L && await (u.isElement == null ? void 0 : u.isElement(F)) || (L = s.floating[T] || l.floating[f]);
  const b = C / 2 - k / 2, E = c[m], y = L - h[f] - c[O], S = L / 2 - h[f] / 2 + b, I = bn(E, S, y), x = He(a) != null && S != I && l.reference[f] / 2 - (S < E ? c[m] : c[O]) - h[f] / 2 < 0;
  return { [g]: d[g] - (x ? S < E ? E - S : y - S : 0), data: { [g]: I, centerOffset: S - I } };
} }), Go = ["top", "right", "bottom", "left"];
Go.reduce((e, n) => e.concat(n, n + "-start", n + "-end"), []);
const zo = { left: "right", right: "left", bottom: "top", top: "bottom" };
function $t(e) {
  return e.replace(/left|right|bottom|top/g, (n) => zo[n]);
}
function Yo(e, n, t) {
  t === void 0 && (t = !1);
  const i = He(e), r = Ue(e), o = xn(r);
  let a = r === "x" ? i === (t ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (a = $t(a)), { main: a, cross: $t(a) };
}
const qo = { start: "end", end: "start" };
function on(e) {
  return e.replace(/start|end/g, (n) => qo[n]);
}
const Xo = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(n) {
    var t;
    const { placement: i, middlewareData: r, rects: o, initialPlacement: a, platform: l, elements: u } = n, { mainAxis: s = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: h = !0, ...v } = e, m = Ee(i), O = Ee(a) === a, T = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = d || (O || !h ? [$t(a)] : function(I) {
      const x = $t(I);
      return [on(I), x, on(x)];
    }(a));
    d || f === "none" || C.push(...function(I, x, V, H) {
      const Y = He(I);
      let G = function(J, he, ve) {
        const ue = ["left", "right"], Ge = ["right", "left"], vt = ["top", "bottom"], bt = ["bottom", "top"];
        switch (J) {
          case "top":
          case "bottom":
            return ve ? he ? Ge : ue : he ? ue : Ge;
          case "left":
          case "right":
            return he ? vt : bt;
          default:
            return [];
        }
      }(Ee(I), V === "start", H);
      return Y && (G = G.map((J) => J + "-" + Y), x && (G = G.concat(G.map(on)))), G;
    }(a, h, f, T));
    const k = [a, ...C], F = await Nn(n, v), L = [];
    let b = ((t = r.flip) == null ? void 0 : t.overflows) || [];
    if (s && L.push(F[m]), c) {
      const { main: I, cross: x } = Yo(i, o, T);
      L.push(F[I], F[x]);
    }
    if (b = [...b, { placement: i, overflows: L }], !L.every((I) => I <= 0)) {
      var E, y;
      const I = (((E = r.flip) == null ? void 0 : E.index) || 0) + 1, x = k[I];
      if (x)
        return { data: { index: I, overflows: b }, reset: { placement: x } };
      let V = (y = b.filter((H) => H.overflows[0] <= 0).sort((H, Y) => H.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : y.placement;
      if (!V)
        switch (g) {
          case "bestFit": {
            var S;
            const H = (S = b.map((Y) => [Y.placement, Y.overflows.filter((G) => G > 0).reduce((G, J) => G + J, 0)]).sort((Y, G) => Y[1] - G[1])[0]) == null ? void 0 : S[0];
            H && (V = H);
            break;
          }
          case "initialPlacement":
            V = a;
        }
      if (i !== V)
        return { reset: { placement: V } };
    }
    return {};
  } };
}, Jo = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(n) {
    const { x: t, y: i } = n, r = await async function(o, a) {
      const { placement: l, platform: u, elements: s } = o, c = await (u.isRTL == null ? void 0 : u.isRTL(s.floating)), d = Ee(l), g = He(l), f = Ue(l) === "x", h = ["left", "top"].includes(d) ? -1 : 1, v = c && f ? -1 : 1, m = typeof a == "function" ? a(o) : a;
      let { mainAxis: O, crossAxis: T, alignmentAxis: C } = typeof m == "number" ? { mainAxis: m, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m };
      return g && typeof C == "number" && (T = g === "end" ? -1 * C : C), f ? { x: T * v, y: O * h } : { x: O * h, y: T * v };
    }(n, e);
    return { x: t + r.x, y: i + r.y, data: r };
  } };
};
function Zo(e) {
  return e === "x" ? "y" : "x";
}
const Qo = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(n) {
    const { x: t, y: i, placement: r } = n, { mainAxis: o = !0, crossAxis: a = !1, limiter: l = { fn: (m) => {
      let { x: O, y: T } = m;
      return { x: O, y: T };
    } }, ...u } = e, s = { x: t, y: i }, c = await Nn(n, u), d = Ue(Ee(r)), g = Zo(d);
    let f = s[d], h = s[g];
    if (o) {
      const m = d === "y" ? "bottom" : "right";
      f = bn(f + c[d === "y" ? "top" : "left"], f, f - c[m]);
    }
    if (a) {
      const m = g === "y" ? "bottom" : "right";
      h = bn(h + c[g === "y" ? "top" : "left"], h, h - c[m]);
    }
    const v = l.fn({ ...n, [d]: f, [g]: h });
    return { ...v, data: { x: v.x - t, y: v.y - i } };
  } };
}, ea = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(n) {
    const { placement: t, rects: i, platform: r, elements: o } = n, { apply: a = () => {
    }, ...l } = e, u = await Nn(n, l), s = Ee(t), c = He(t), d = Ue(t) === "x", { width: g, height: f } = i.floating;
    let h, v;
    s === "top" || s === "bottom" ? (h = s, v = c === (await (r.isRTL == null ? void 0 : r.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (v = s, h = c === "end" ? "top" : "bottom");
    const m = f - u[h], O = g - u[v], T = !n.middlewareData.shift;
    let C = m, k = O;
    if (d) {
      const L = g - u.left - u.right;
      k = c || T ? vn(O, L) : L;
    } else {
      const L = f - u.top - u.bottom;
      C = c || T ? vn(m, L) : L;
    }
    if (T && !c) {
      const L = Ce(u.left, 0), b = Ce(u.right, 0), E = Ce(u.top, 0), y = Ce(u.bottom, 0);
      d ? k = g - 2 * (L !== 0 || b !== 0 ? L + b : Ce(u.left, u.right)) : C = f - 2 * (E !== 0 || y !== 0 ? E + y : Ce(u.top, u.bottom));
    }
    await a({ ...n, availableWidth: k, availableHeight: C });
    const F = await r.getDimensions(o.floating);
    return g !== F.width || f !== F.height ? { reset: { rects: !0 } } : {};
  } };
};
function te(e) {
  var n;
  return ((n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function ae(e) {
  return te(e).getComputedStyle(e);
}
function Xi(e) {
  return e instanceof te(e).Node;
}
function Te(e) {
  return Xi(e) ? (e.nodeName || "").toLowerCase() : "";
}
let It;
function Ji() {
  if (It)
    return It;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (It = e.brands.map((n) => n.brand + "/" + n.version).join(" "), It) : navigator.userAgent;
}
function se(e) {
  return e instanceof te(e).HTMLElement;
}
function ge(e) {
  return e instanceof te(e).Element;
}
function di(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof te(e).ShadowRoot || e instanceof ShadowRoot;
}
function lt(e) {
  const { overflow: n, overflowX: t, overflowY: i, display: r } = ae(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + i + t) && !["inline", "contents"].includes(r);
}
function ta(e) {
  return ["table", "td", "th"].includes(Te(e));
}
function mn(e) {
  const n = /firefox/i.test(Ji()), t = ae(e), i = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!i && i !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((r) => t.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some((r) => {
    const o = t.contain;
    return o != null && o.includes(r);
  });
}
function yn() {
  return /^((?!chrome|android).)*safari/i.test(Ji());
}
function Yt(e) {
  return ["html", "body", "#document"].includes(Te(e));
}
const fi = Math.min, it = Math.max, Mt = Math.round;
function Zi(e) {
  const n = ae(e);
  let t = parseFloat(n.width) || 0, i = parseFloat(n.height) || 0;
  const r = se(e), o = r ? e.offsetWidth : t, a = r ? e.offsetHeight : i, l = Mt(t) !== o || Mt(i) !== a;
  return l && (t = o, i = a), { width: t, height: i, fallback: l };
}
function Qi(e) {
  return ge(e) ? e : e.contextElement;
}
const er = { x: 1, y: 1 };
function $e(e) {
  const n = Qi(e);
  if (!se(n))
    return er;
  const t = n.getBoundingClientRect(), { width: i, height: r, fallback: o } = Zi(n);
  let a = (o ? Mt(t.width) : t.width) / i, l = (o ? Mt(t.height) : t.height) / r;
  return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), { x: a, y: l };
}
function ut(e, n, t, i) {
  var r, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const a = e.getBoundingClientRect(), l = Qi(e);
  let u = er;
  n && (i ? ge(i) && (u = $e(i)) : u = $e(e));
  const s = l ? te(l) : window, c = yn() && t;
  let d = (a.left + (c && ((r = s.visualViewport) == null ? void 0 : r.offsetLeft) || 0)) / u.x, g = (a.top + (c && ((o = s.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / u.y, f = a.width / u.x, h = a.height / u.y;
  if (l) {
    const v = te(l), m = i && ge(i) ? te(i) : i;
    let O = v.frameElement;
    for (; O && i && m !== v; ) {
      const T = $e(O), C = O.getBoundingClientRect(), k = getComputedStyle(O);
      C.x += (O.clientLeft + parseFloat(k.paddingLeft)) * T.x, C.y += (O.clientTop + parseFloat(k.paddingTop)) * T.y, d *= T.x, g *= T.y, f *= T.x, h *= T.y, d += C.x, g += C.y, O = te(O).frameElement;
    }
  }
  return Vt({ width: f, height: h, x: d, y: g });
}
function Oe(e) {
  return ((Xi(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function qt(e) {
  return ge(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function tr(e) {
  return ut(Oe(e)).left + qt(e).scrollLeft;
}
function Be(e) {
  if (Te(e) === "html")
    return e;
  const n = e.assignedSlot || e.parentNode || di(e) && e.host || Oe(e);
  return di(n) ? n.host : n;
}
function nr(e) {
  const n = Be(e);
  return Yt(n) ? n.ownerDocument.body : se(n) && lt(n) ? n : nr(n);
}
function _n(e, n) {
  var t;
  n === void 0 && (n = []);
  const i = nr(e), r = i === ((t = e.ownerDocument) == null ? void 0 : t.body), o = te(i);
  return r ? n.concat(o, o.visualViewport || [], lt(i) ? i : []) : n.concat(i, _n(i));
}
function pi(e, n, t) {
  let i;
  if (n === "viewport")
    i = function(a, l) {
      const u = te(a), s = Oe(a), c = u.visualViewport;
      let d = s.clientWidth, g = s.clientHeight, f = 0, h = 0;
      if (c) {
        d = c.width, g = c.height;
        const v = yn();
        (!v || v && l === "fixed") && (f = c.offsetLeft, h = c.offsetTop);
      }
      return { width: d, height: g, x: f, y: h };
    }(e, t);
  else if (n === "document")
    i = function(a) {
      const l = Oe(a), u = qt(a), s = a.ownerDocument.body, c = it(l.scrollWidth, l.clientWidth, s.scrollWidth, s.clientWidth), d = it(l.scrollHeight, l.clientHeight, s.scrollHeight, s.clientHeight);
      let g = -u.scrollLeft + tr(a);
      const f = -u.scrollTop;
      return ae(s).direction === "rtl" && (g += it(l.clientWidth, s.clientWidth) - c), { width: c, height: d, x: g, y: f };
    }(Oe(e));
  else if (ge(n))
    i = function(a, l) {
      const u = ut(a, !0, l === "fixed"), s = u.top + a.clientTop, c = u.left + a.clientLeft, d = se(a) ? $e(a) : { x: 1, y: 1 };
      return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: c * d.x, y: s * d.y };
    }(n, t);
  else {
    const a = { ...n };
    if (yn()) {
      var r, o;
      const l = te(e);
      a.x -= ((r = l.visualViewport) == null ? void 0 : r.offsetLeft) || 0, a.y -= ((o = l.visualViewport) == null ? void 0 : o.offsetTop) || 0;
    }
    i = a;
  }
  return Vt(i);
}
function ir(e, n) {
  const t = Be(e);
  return !(t === n || !ge(t) || Yt(t)) && (ae(t).position === "fixed" || ir(t, n));
}
function gi(e, n) {
  return se(e) && ae(e).position !== "fixed" ? n ? n(e) : e.offsetParent : null;
}
function hi(e, n) {
  const t = te(e);
  if (!se(e))
    return t;
  let i = gi(e, n);
  for (; i && ta(i) && ae(i).position === "static"; )
    i = gi(i, n);
  return i && (Te(i) === "html" || Te(i) === "body" && ae(i).position === "static" && !mn(i)) ? t : i || function(r) {
    let o = Be(r);
    for (; se(o) && !Yt(o); ) {
      if (mn(o))
        return o;
      o = Be(o);
    }
    return null;
  }(e) || t;
}
function na(e, n, t) {
  const i = se(n), r = Oe(n), o = ut(e, !0, t === "fixed", n);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (i || !i && t !== "fixed")
    if ((Te(n) !== "body" || lt(r)) && (a = qt(n)), se(n)) {
      const u = ut(n, !0);
      l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
    } else
      r && (l.x = tr(r));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const ia = { getClippingRect: function(e) {
  let { element: n, boundary: t, rootBoundary: i, strategy: r } = e;
  const o = t === "clippingAncestors" ? function(s, c) {
    const d = c.get(s);
    if (d)
      return d;
    let g = _n(s).filter((m) => ge(m) && Te(m) !== "body"), f = null;
    const h = ae(s).position === "fixed";
    let v = h ? Be(s) : s;
    for (; ge(v) && !Yt(v); ) {
      const m = ae(v), O = mn(v);
      O || m.position !== "fixed" || (f = null), (h ? !O && !f : !O && m.position === "static" && f && ["absolute", "fixed"].includes(f.position) || lt(v) && !O && ir(s, v)) ? g = g.filter((T) => T !== v) : f = m, v = Be(v);
    }
    return c.set(s, g), g;
  }(n, this._c) : [].concat(t), a = [...o, i], l = a[0], u = a.reduce((s, c) => {
    const d = pi(n, c, r);
    return s.top = it(d.top, s.top), s.right = fi(d.right, s.right), s.bottom = fi(d.bottom, s.bottom), s.left = it(d.left, s.left), s;
  }, pi(n, l, r));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: n, offsetParent: t, strategy: i } = e;
  const r = se(t), o = Oe(t);
  if (t === o)
    return n;
  let a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((r || !r && i !== "fixed") && ((Te(t) !== "body" || lt(o)) && (a = qt(t)), se(t))) {
    const s = ut(t);
    l = $e(t), u.x = s.x + t.clientLeft, u.y = s.y + t.clientTop;
  }
  return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - a.scrollLeft * l.x + u.x, y: n.y * l.y - a.scrollTop * l.y + u.y };
}, isElement: ge, getDimensions: function(e) {
  return Zi(e);
}, getOffsetParent: hi, getDocumentElement: Oe, getScale: $e, async getElementRects(e) {
  let { reference: n, floating: t, strategy: i } = e;
  const r = this.getOffsetParent || hi, o = this.getDimensions;
  return { reference: na(n, await r(t), i), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ae(e).direction === "rtl" }, ra = (e, n, t) => {
  const i = /* @__PURE__ */ new Map(), r = { platform: ia, ...t }, o = { ...r.platform, _c: i };
  return Wo(e, n, { ...r, platform: o });
};
var En, Se = /* @__PURE__ */ new Map(), oa = (e) => e.getBoundingClientRect();
function On(e, n) {
  const { scope: t = "rect", getRect: i = oa, onChange: r } = n, o = aa({ scope: t, getRect: i }), a = Se.get(e);
  return a ? (a.callbacks.push(r), r(i(e))) : (Se.set(e, {
    rect: {},
    callbacks: [r]
  }), Se.size === 1 && (En = requestAnimationFrame(o))), function() {
    const u = Se.get(e);
    if (!u)
      return;
    const s = u.callbacks.indexOf(r);
    s > -1 && u.callbacks.splice(s, 1), u.callbacks.length === 0 && (Se.delete(e), Se.size === 0 && cancelAnimationFrame(En));
  };
}
function aa(e) {
  const { scope: n, getRect: t } = e, i = ca(n);
  return function r() {
    const o = [];
    Se.forEach((a, l) => {
      const u = t(l);
      i(a.rect, u) || (a.rect = u, o.push(a));
    }), o.forEach((a) => {
      a.callbacks.forEach((l) => l(a.rect));
    }), En = requestAnimationFrame(r);
  };
}
var rr = (e, n) => e.width === n.width && e.height === n.height, or = (e, n) => e.top === n.top && e.left === n.left, sa = (e, n) => rr(e, n) && or(e, n);
function ca(e) {
  return e === "size" ? rr : e === "position" ? or : sa;
}
var an = (...e) => () => e.forEach((n) => n()), vi = (e) => typeof e == "object" && e !== null && e.nodeType === 1, bi = (e, n, t, i) => (e.addEventListener(n, t, i), () => e.removeEventListener(n, t, i));
function la(e) {
  const n = typeof e == "boolean";
  return {
    ancestorResize: n ? e : e.ancestorResize ?? !0,
    ancestorScroll: n ? e : e.ancestorScroll ?? !0,
    referenceResize: n ? e : e.referenceResize ?? !0
  };
}
function ua(e, n, t, i = !1) {
  const { ancestorScroll: r, ancestorResize: o, referenceResize: a } = la(i), l = r || o, u = [];
  l && vi(e) && u.push(..._n(e));
  function s() {
    let d = [On(n, { scope: "size", onChange: t })];
    return a && vi(e) && d.push(On(e, { onChange: t })), d.push(an(...u.map((g) => bi(g, "resize", t)))), () => d.forEach((g) => g());
  }
  function c() {
    return an(...u.map((d) => bi(d, "scroll", t, { passive: !0 })));
  }
  return an(s(), c());
}
var Xe = (e) => ({ variable: e, reference: `var(${e})` }), fe = {
  arrowSize: Xe("--arrow-size"),
  arrowSizeHalf: Xe("--arrow-size-half"),
  arrowBg: Xe("--arrow-background"),
  transformOrigin: Xe("--transform-origin"),
  arrowOffset: Xe("--arrow-offset")
}, da = (e) => ({
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
}), fa = {
  name: "transformOrigin",
  fn({ placement: e, elements: n, middlewareData: t }) {
    const { arrow: i } = t, r = da(i)[e], { floating: o } = n;
    return o.style.setProperty(fe.transformOrigin.variable, r), {
      data: { transformOrigin: r }
    };
  }
}, pa = (e) => ({
  name: "shiftArrow",
  fn({ placement: n, middlewareData: t }) {
    const { element: i } = e;
    if (t.arrow) {
      const { x: r, y: o } = t.arrow, a = n.split("-")[0];
      Object.assign(i.style, {
        left: r != null ? `${r}px` : "",
        top: o != null ? `${o}px` : "",
        [a]: `calc(100% + ${fe.arrowOffset.reference})`
      });
    }
    return {};
  }
}), ga = {
  strategy: "absolute",
  placement: "bottom",
  listeners: !0,
  gutter: 8,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
};
function ha(e, n, t = {}) {
  if (!n || !e)
    return;
  const i = Object.assign({}, ga, t), r = n.querySelector("[data-part=arrow]"), o = [], a = typeof i.boundary == "function" ? i.boundary() : i.boundary;
  if (i.flip && o.push(
    Xo({
      boundary: a,
      padding: i.overflowPadding
    })
  ), i.gutter || i.offset) {
    const u = r ? r.offsetHeight / 2 : 0, s = i.gutter ? { mainAxis: i.gutter } : i.offset;
    (s == null ? void 0 : s.mainAxis) != null && (s.mainAxis += u), o.push(Jo(s));
  }
  o.push(
    Qo({
      boundary: a,
      crossAxis: i.overlap,
      padding: i.overflowPadding
    })
  ), r && o.push(
    Ko({ element: r, padding: 8 }),
    pa({ element: r })
  ), o.push(fa), o.push(
    ea({
      padding: i.overflowPadding,
      apply({ rects: u, availableHeight: s, availableWidth: c }) {
        const d = Math.round(u.reference.width);
        n.style.setProperty("--reference-width", `${d}px`), n.style.setProperty("--available-width", `${c}px`), n.style.setProperty("--available-height", `${s}px`), i.sameWidth && Object.assign(n.style, {
          width: `${d}px`,
          minWidth: "unset"
        }), i.fitViewport && Object.assign(n.style, {
          maxWidth: `${c}px`,
          maxHeight: `${s}px`
        });
      }
    })
  );
  function l(u = {}) {
    if (!e || !n)
      return;
    const { placement: s, strategy: c, onComplete: d } = i;
    ra(e, n, {
      placement: s,
      middleware: o,
      strategy: c,
      ...u
    }).then((g) => {
      const f = Math.round(g.x), h = Math.round(g.y);
      Object.assign(n.style, {
        position: g.strategy,
        top: "0px",
        left: "0px",
        transform: `translate3d(${f}px, ${h}px, 0)`
      }), d == null || d(g);
    });
  }
  return l(), hn(
    i.listeners ? ua(e, n, l, i.listeners) : void 0,
    i.onCleanup
  );
}
function ar(e, n, t = {}) {
  const { defer: i, ...r } = t, o = i ? z : (l) => l(), a = [];
  return a.push(
    o(() => {
      const l = typeof e == "function" ? e() : e, u = typeof n == "function" ? n() : n;
      a.push(ha(l, u, r));
    })
  ), () => {
    a.forEach((l) => l == null ? void 0 : l());
  };
}
var va = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function sr(e) {
  const { placement: n = "bottom" } = e;
  return {
    arrow: {
      position: "absolute",
      width: fe.arrowSize.reference,
      height: fe.arrowSize.reference,
      [fe.arrowSizeHalf.variable]: `calc(${fe.arrowSize.reference} / 2)`,
      [fe.arrowOffset.variable]: `calc(${fe.arrowSizeHalf.reference} * -1)`
    },
    arrowTip: {
      transform: va[n.split("-")[0]],
      background: fe.arrowBg.reference,
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
function ba(e, n, t) {
  var m, O;
  const i = e.context.translations, r = e.context.disabled, o = e.context.isInteractive, a = e.context.invalid, l = e.context.readOnly, u = e.hasTag("open"), s = e.hasTag("focused"), c = e.hasTag("idle"), d = u && e.context.navigationData && e.context.autoComplete, g = (!c || e.context.isHovering) && !e.context.isInputValueEmpty, f = d ? (m = e.context.navigationData) == null ? void 0 : m.label : e.context.inputValue, h = sr({
    placement: e.context.currentPlacement
  }), v = {
    /**
     * Whether the combobox is focused
     */
    isFocused: s,
    /**
     * Whether the combobox content or listbox is open
     */
    isOpen: u,
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
    selectedValue: (O = e.context.selectionData) == null ? void 0 : O.value,
    /**
     * Function to set the combobox value
     */
    setValue(T) {
      let C;
      typeof T == "string" ? C = { value: T, label: R.getValueLabel(e.context, T) } : C = T, n({ type: "SET_VALUE", ...C });
    },
    /**
     * Function to set the combobox input value
     */
    setInputValue(T) {
      n({ type: "SET_INPUT_VALUE", value: T });
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
      var T;
      (T = R.getInputEl(e.context)) == null || T.focus();
    },
    rootProps: t.element({
      ...ce.root.attrs,
      id: R.getRootId(e.context),
      "data-invalid": B(a),
      "data-readonly": B(l)
    }),
    labelProps: t.label({
      ...ce.label.attrs,
      htmlFor: R.getInputId(e.context),
      id: R.getLabelId(e.context),
      "data-readonly": B(l),
      "data-disabled": B(r),
      "data-invalid": B(a),
      "data-focus": B(s)
    }),
    controlProps: t.element({
      ...ce.control.attrs,
      id: R.getControlId(e.context),
      "data-expanded": B(u),
      "data-focus": B(s),
      "data-disabled": B(r),
      "data-invalid": B(a),
      onPointerOver() {
        o && n("POINTER_OVER");
      },
      onPointerLeave() {
        o && n("POINTER_LEAVE");
      }
    }),
    positionerProps: t.element({
      ...ce.positioner.attrs,
      id: R.getPositionerId(e.context),
      "data-expanded": B(u),
      hidden: !u,
      style: h.floating
    }),
    inputProps: t.input({
      ...ce.input.attrs,
      "aria-invalid": Ki(a),
      "data-invalid": B(a),
      name: e.context.name,
      form: e.context.form,
      disabled: r,
      autoFocus: e.context.autoFocus,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "none",
      spellCheck: "false",
      readOnly: l,
      placeholder: e.context.placeholder,
      id: R.getInputId(e.context),
      type: "text",
      role: "combobox",
      defaultValue: f,
      "data-value": f,
      "aria-autocomplete": e.context.autoComplete ? "both" : "list",
      "aria-controls": u ? R.getContentId(e.context) : void 0,
      "aria-expanded": u,
      "aria-activedescendant": e.context.focusedId ?? void 0,
      onClick() {
        o && n("CLICK_INPUT");
      },
      onFocus() {
        r || n("FOCUS");
      },
      onChange(T) {
        wt(T).isComposing || n({ type: "CHANGE", value: T.currentTarget.value });
      },
      onKeyDown(T) {
        if (!o)
          return;
        const C = wt(T);
        if (C.ctrlKey || C.shiftKey || C.isComposing)
          return;
        let k = !1;
        const F = {
          ArrowDown(E) {
            n(E.altKey ? "ALT_ARROW_DOWN" : "ARROW_DOWN"), k = !0;
          },
          ArrowUp() {
            n(T.altKey ? "ALT_ARROW_UP" : "ARROW_UP"), k = !0;
          },
          Home(E) {
            E.ctrlKey || E.metaKey || n({ type: "HOME", preventDefault: () => E.preventDefault() });
          },
          End(E) {
            E.ctrlKey || E.metaKey || n({ type: "END", preventDefault: () => E.preventDefault() });
          },
          Enter() {
            n("ENTER"), k = !0;
          },
          Escape() {
            n("ESCAPE"), k = !0;
          },
          Tab() {
            n("TAB");
          }
        }, L = Ft(T, e.context), b = F[L];
        b == null || b(T), k && T.preventDefault();
      }
    }),
    triggerProps: t.button({
      ...ce.trigger.attrs,
      id: R.getTriggerId(e.context),
      "aria-haspopup": "listbox",
      type: "button",
      tabIndex: -1,
      "aria-label": i.triggerLabel,
      "aria-expanded": u,
      "aria-controls": u ? R.getContentId(e.context) : void 0,
      disabled: r,
      "data-readonly": B(l),
      "data-disabled": B(r),
      onPointerDown(T) {
        const C = wt(T);
        !o || !si(C) || C.pointerType === "touch" || (n("CLICK_BUTTON"), T.preventDefault());
      },
      onPointerUp(T) {
        T.pointerType === "touch" && n("CLICK_BUTTON");
      }
    }),
    contentProps: t.element({
      ...ce.content.attrs,
      id: R.getContentId(e.context),
      role: "listbox",
      hidden: !u,
      "aria-labelledby": R.getLabelId(e.context),
      onPointerDown(T) {
        T.preventDefault();
      }
    }),
    clearTriggerProps: t.button({
      ...ce.clearTrigger.attrs,
      id: R.getClearTriggerId(e.context),
      type: "button",
      tabIndex: -1,
      disabled: r,
      "aria-label": i.clearTriggerLabel,
      hidden: !g,
      onPointerDown(T) {
        const C = wt(T);
        !o || !si(C) || (n("CLEAR_VALUE"), T.preventDefault());
      }
    }),
    getOptionState(T) {
      var y;
      const { value: C, index: k, disabled: F } = T, L = R.getOptionId(e.context, C, k), b = e.context.focusedId === L, E = ((y = e.context.selectionData) == null ? void 0 : y.value) === C;
      return { disabled: F, focused: b, checked: E };
    },
    getOptionProps(T) {
      const { value: C, label: k, index: F, count: L } = T, b = R.getOptionId(e.context, C, F), E = v.getOptionState(T);
      return t.element({
        ...ce.option.attrs,
        id: b,
        role: "option",
        tabIndex: -1,
        "data-highlighted": B(E.focused),
        "data-disabled": B(E.disabled),
        "data-checked": B(E.checked),
        "aria-selected": E.focused,
        "aria-disabled": E.disabled,
        "aria-posinset": L && F != null ? F + 1 : void 0,
        "aria-setsize": L,
        "data-value": C,
        "data-label": k,
        // Prefer `pointermove` to `pointerenter` to avoid interrupting the keyboard navigation
        // NOTE: for perf, we may want to move these handlers to the listbox
        onPointerMove() {
          E.disabled || n({ type: "POINTEROVER_OPTION", id: b, value: C, label: k });
        },
        onPointerUp() {
          E.disabled || n({ type: "CLICK_OPTION", src: "pointerup", id: b, value: C, label: k });
        },
        onClick() {
          E.disabled || n({ type: "CLICK_OPTION", src: "click", id: b, value: C, label: k });
        },
        onAuxClick(y) {
          E.disabled || (y.preventDefault(), n({ type: "CLICK_OPTION", src: "auxclick", id: b, value: C, label: k }));
        }
      });
    },
    getOptionGroupProps(T) {
      const { label: C } = T;
      return t.element({
        ...ce.optionGroup.attrs,
        role: "group",
        "aria-label": C
      });
    }
  };
  return v;
}
var Je = /* @__PURE__ */ new WeakMap(), ie = [];
function ma(e, n = {}) {
  const { rootEl: t } = n, i = e.filter(Boolean);
  if (i.length === 0)
    return;
  const r = i[0].ownerDocument || document, o = r.defaultView ?? window, a = new Set(i), l = /* @__PURE__ */ new Set(), u = t ?? r.body;
  let s = (f) => {
    for (let O of f.querySelectorAll("[data-live-announcer], [data-zag-top-layer]"))
      a.add(O);
    let h = (O) => {
      if (a.has(O) || l.has(O.parentElement) && O.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let T of a)
        if (O.contains(T))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, v = r.createTreeWalker(f, NodeFilter.SHOW_ELEMENT, { acceptNode: h }), m = h(f);
    if (m === NodeFilter.FILTER_ACCEPT && c(f), m !== NodeFilter.FILTER_REJECT) {
      let O = v.nextNode();
      for (; O != null; )
        c(O), O = v.nextNode();
    }
  }, c = (f) => {
    let h = Je.get(f) ?? 0;
    f.getAttribute("aria-hidden") === "true" && h === 0 || (h === 0 && f.setAttribute("aria-hidden", "true"), l.add(f), Je.set(f, h + 1));
  };
  ie.length && ie[ie.length - 1].disconnect(), s(u);
  const d = new o.MutationObserver((f) => {
    for (let h of f)
      if (!(h.type !== "childList" || h.addedNodes.length === 0) && ![...a, ...l].some((v) => v.contains(h.target))) {
        for (let v of h.removedNodes)
          v instanceof o.Element && (a.delete(v), l.delete(v));
        for (let v of h.addedNodes)
          (v instanceof o.HTMLElement || v instanceof o.SVGElement) && (v.dataset.liveAnnouncer === "true" || v.dataset.zagTopLayer === "true") ? a.add(v) : v instanceof o.Element && s(v);
      }
  });
  d.observe(u, { childList: !0, subtree: !0 });
  let g = {
    observe() {
      d.observe(u, { childList: !0, subtree: !0 });
    },
    disconnect() {
      d.disconnect();
    }
  };
  return ie.push(g), () => {
    d.disconnect();
    for (let f of l) {
      let h = Je.get(f);
      h === 1 ? (f.removeAttribute("aria-hidden"), Je.delete(f)) : Je.set(f, h - 1);
    }
    g === ie[ie.length - 1] ? (ie.pop(), ie.length && ie[ie.length - 1].observe()) : ie.splice(ie.indexOf(g), 1);
  };
}
function cr(e, n = {}) {
  const { defer: t } = n, i = t ? z : (o) => o(), r = [];
  return r.push(
    i(() => {
      const o = typeof e == "function" ? e() : e;
      r.push(ma(o, n));
    })
  ), () => {
    r.forEach((o) => o == null ? void 0 : o());
  };
}
var mi = (e, ...n) => (typeof e == "function" ? e(...n) : e) ?? void 0, pe = (e) => e, sn = () => {
}, ya = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (e++, e.toString(36));
})();
const Ea = Symbol(), Fn = Symbol(), Ze = "a", Dt = "w";
let Oa = (e, n) => new Proxy(e, n);
const Tn = Object.getPrototypeOf, wn = /* @__PURE__ */ new WeakMap(), lr = (e) => e && (wn.has(e) ? wn.get(e) : Tn(e) === Object.prototype || Tn(e) === Array.prototype), yi = (e) => typeof e == "object" && e !== null, Ta = (e) => {
  if (Array.isArray(e))
    return Array.from(e);
  const n = Object.getOwnPropertyDescriptors(e);
  return Object.values(n).forEach((t) => {
    t.configurable = !0;
  }), Object.create(Tn(e), n);
}, ur = (e) => e[Fn] || e, dr = (e, n, t, i) => {
  if (!lr(e))
    return e;
  let r = i && i.get(e);
  if (!r) {
    const u = ur(e);
    r = ((s) => Object.values(Object.getOwnPropertyDescriptors(s)).some((c) => !c.configurable && !c.writable))(u) ? [u, Ta(u)] : [u], i == null || i.set(e, r);
  }
  const [o, a] = r;
  let l = t && t.get(o);
  return l && l[1].f === !!a || (l = ((u, s) => {
    const c = { f: s };
    let d = !1;
    const g = (h, v) => {
      if (!d) {
        let m = c[Ze].get(u);
        if (m || (m = {}, c[Ze].set(u, m)), h === Dt)
          m[Dt] = !0;
        else {
          let O = m[h];
          O || (O = /* @__PURE__ */ new Set(), m[h] = O), O.add(v);
        }
      }
    }, f = { get: (h, v) => v === Fn ? u : (g("k", v), dr(Reflect.get(h, v), c[Ze], c.c, c.t)), has: (h, v) => v === Ea ? (d = !0, c[Ze].delete(u), !0) : (g("h", v), Reflect.has(h, v)), getOwnPropertyDescriptor: (h, v) => (g("o", v), Reflect.getOwnPropertyDescriptor(h, v)), ownKeys: (h) => (g(Dt), Reflect.ownKeys(h)) };
    return s && (f.set = f.deleteProperty = () => !1), [f, c];
  })(o, !!a), l[1].p = Oa(a || o, l[0]), t && t.set(o, l)), l[1][Ze] = n, l[1].c = t, l[1].t = i, l[1].p;
}, fr = (e, n, t, i) => {
  if (Object.is(e, n))
    return !1;
  if (!yi(e) || !yi(n))
    return !0;
  const r = t.get(ur(e));
  if (!r)
    return !0;
  if (i) {
    const a = i.get(e);
    if (a && a.n === n)
      return a.g;
    i.set(e, { n, g: !1 });
  }
  let o = null;
  try {
    for (const a of r.h || [])
      if (o = Reflect.has(e, a) !== Reflect.has(n, a), o)
        return o;
    if (r[Dt] === !0) {
      if (o = ((a, l) => {
        const u = Reflect.ownKeys(a), s = Reflect.ownKeys(l);
        return u.length !== s.length || u.some((c, d) => c !== s[d]);
      })(e, n), o)
        return o;
    } else
      for (const a of r.o || [])
        if (o = !!Reflect.getOwnPropertyDescriptor(e, a) != !!Reflect.getOwnPropertyDescriptor(n, a), o)
          return o;
    for (const a of r.k || [])
      if (o = fr(e[a], n[a], t, i), o)
        return o;
    return o === null && (o = !0), o;
  } finally {
    i && i.set(e, { n, g: o });
  }
}, wa = (e) => lr(e) && e[Fn] || null, Ei = (e, n = !0) => {
  wn.set(e, n);
};
var jt = process.env.NODE_ENV !== "production", cn = (e) => typeof e == "object" && e !== null, Re = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakSet(), Ia = (e = Object.is, n = (s, c) => new Proxy(s, c), t = (s) => cn(s) && !tt.has(s) && (Array.isArray(s) || !(Symbol.iterator in s)) && !(s instanceof WeakMap) && !(s instanceof WeakSet) && !(s instanceof Error) && !(s instanceof Number) && !(s instanceof Date) && !(s instanceof String) && !(s instanceof RegExp) && !(s instanceof ArrayBuffer), i = (s) => {
  switch (s.status) {
    case "fulfilled":
      return s.value;
    case "rejected":
      throw s.reason;
    default:
      throw s;
  }
}, r = /* @__PURE__ */ new WeakMap(), o = (s, c, d = i) => {
  const g = r.get(s);
  if ((g == null ? void 0 : g[0]) === c)
    return g[1];
  const f = Array.isArray(s) ? [] : Object.create(Object.getPrototypeOf(s));
  return Ei(f, !0), r.set(s, [c, f]), Reflect.ownKeys(s).forEach((h) => {
    const v = Reflect.get(s, h);
    tt.has(v) ? (Ei(v, !1), f[h] = v) : v instanceof Promise ? Object.defineProperty(f, h, {
      get() {
        return d(v);
      }
    }) : Re.has(v) ? f[h] = we(v, d) : f[h] = v;
  }), Object.freeze(f);
}, a = /* @__PURE__ */ new WeakMap(), l = [1, 1], u = (s) => {
  if (!cn(s))
    throw new Error("object required");
  const c = a.get(s);
  if (c)
    return c;
  let d = l[0];
  const g = /* @__PURE__ */ new Set(), f = (y, S = ++l[0]) => {
    d !== S && (d = S, g.forEach((I) => I(y, S)));
  };
  let h = l[1];
  const v = (y = ++l[1]) => (h !== y && !g.size && (h = y, O.forEach(([S]) => {
    const I = S[1](y);
    I > d && (d = I);
  })), d), m = (y) => (S, I) => {
    const x = [...S];
    x[1] = [y, ...x[1]], f(x, I);
  }, O = /* @__PURE__ */ new Map(), T = (y, S) => {
    if (jt && O.has(y))
      throw new Error("prop listener already exists");
    if (g.size) {
      const I = S[3](m(y));
      O.set(y, [S, I]);
    } else
      O.set(y, [S]);
  }, C = (y) => {
    var I;
    const S = O.get(y);
    S && (O.delete(y), (I = S[1]) == null || I.call(S));
  }, k = (y) => (g.add(y), g.size === 1 && O.forEach(([I, x], V) => {
    if (jt && x)
      throw new Error("remove already exists");
    const H = I[3](m(V));
    O.set(V, [I, H]);
  }), () => {
    g.delete(y), g.size === 0 && O.forEach(([I, x], V) => {
      x && (x(), O.set(V, [I]));
    });
  }), F = Array.isArray(s) ? [] : Object.create(Object.getPrototypeOf(s)), b = n(F, {
    deleteProperty(y, S) {
      const I = Reflect.get(y, S);
      C(S);
      const x = Reflect.deleteProperty(y, S);
      return x && f(["delete", [S], I]), x;
    },
    set(y, S, I, x) {
      var G;
      const V = Reflect.has(y, S), H = Reflect.get(y, S, x);
      if (V && (e(H, I) || a.has(I) && e(H, a.get(I))))
        return !0;
      C(S), cn(I) && (I = wa(I) || I);
      let Y = I;
      if (!((G = Object.getOwnPropertyDescriptor(y, S)) != null && G.set))
        if (I instanceof Promise)
          I.then((J) => {
            I.status = "fulfilled", I.value = J, f(["resolve", [S], J]);
          }).catch((J) => {
            I.status = "rejected", I.reason = J, f(["reject", [S], J]);
          });
        else {
          !Re.has(I) && t(I) && (Y = Vn(I));
          const J = !tt.has(Y) && Re.get(Y);
          J && T(S, J);
        }
      return Reflect.set(y, S, Y, x), f(["set", [S], I, H]), !0;
    }
  });
  a.set(s, b);
  const E = [F, v, o, k];
  return Re.set(b, E), Reflect.ownKeys(s).forEach((y) => {
    const S = Object.getOwnPropertyDescriptor(s, y);
    S.get || S.set ? Object.defineProperty(F, y, S) : b[y] = s[y];
  }), b;
}) => [
  // public functions
  u,
  // shared state
  Re,
  tt,
  // internal things
  e,
  n,
  t,
  i,
  r,
  o,
  a,
  l
], [Ca] = Ia();
function Vn(e = {}) {
  return Ca(e);
}
function dt(e, n, t) {
  const i = Re.get(e);
  jt && !i && console.warn("Please use proxy object");
  let r;
  const o = [], a = i[3];
  let l = !1;
  const s = a((c) => {
    if (o.push(c), t) {
      n(o.splice(0));
      return;
    }
    r || (r = Promise.resolve().then(() => {
      r = void 0, l && n(o.splice(0));
    }));
  });
  return l = !0, () => {
    l = !1, s();
  };
}
function we(e, n) {
  const t = Re.get(e);
  jt && !t && console.warn("Please use proxy object");
  const [i, r, o] = t;
  return o(i, r(), n);
}
function Oi(e) {
  return tt.add(e), e;
}
function Sa(e, n) {
  Object.keys(n).forEach((r) => {
    if (Object.getOwnPropertyDescriptor(e, r))
      throw new Error("object property already defined");
    const o = n[r], { get: a, set: l } = typeof o == "function" ? { get: o } : o, u = {};
    u.get = () => a(we(i)), l && (u.set = (s) => l(i, s)), Object.defineProperty(e, r, u);
  });
  const i = Vn(e);
  return i;
}
var Ra = (e, n) => Object.is(e, n);
function Ti(e, n, t, i, r) {
  let o = Reflect.get(we(e), n);
  const a = r || Ra;
  function l() {
    const u = we(e);
    a(o, u[n]) || (t(u[n]), o = Reflect.get(u, n));
  }
  return dt(e, l, i);
}
function Pa(e) {
  const n = e.computed ?? pe({}), t = e.context ?? pe({}), i = Vn({
    value: e.initial ?? "",
    previousValue: "",
    event: pe({}),
    previousEvent: pe({}),
    context: Sa(t, n),
    done: !1,
    tags: [],
    hasTag(r) {
      return this.tags.includes(r);
    },
    matches(...r) {
      return r.includes(this.value);
    },
    can(r) {
      return pe(this).nextEvents.includes(r);
    },
    get nextEvents() {
      var a, l;
      const r = ((l = (a = e.states) == null ? void 0 : a[this.value]) == null ? void 0 : l.on) ?? {}, o = (e == null ? void 0 : e.on) ?? {};
      return Object.keys({ ...r, ...o });
    },
    get changed() {
      return this.event.value === "machine.init" || !this.previousValue ? !1 : this.value !== this.previousValue;
    }
  });
  return pe(i);
}
var Aa = () => process.env.NODE_ENV !== "production", rt = (e) => Array.isArray(e), ot = (e) => !(e == null || typeof e != "object" || rt(e)), Da = (e) => typeof e == "number" && !Number.isNaN(e), le = (e) => typeof e == "string", Bt = (e) => typeof e == "function";
function Ht(e) {
  if (!La(e) || e === void 0)
    return e;
  const n = Reflect.ownKeys(e).filter((i) => typeof i == "string"), t = {};
  for (const i of n) {
    const r = e[i];
    r !== void 0 && (t[i] = Ht(r));
  }
  return t;
}
var La = (e) => e && typeof e == "object" && e.constructor === Object;
function pr(e, ...n) {
  for (const t of n) {
    const i = Ht(t);
    for (const r in i)
      ot(t[r]) ? (e[r] || (e[r] = {}), pr(e[r], t[r])) : e[r] = t[r];
  }
  return e;
}
function ln(...e) {
  const n = e.length === 1 ? e[0] : e[1];
  (e.length === 2 ? e[0] : !0) && process.env.NODE_ENV !== "production" && console.warn(n);
}
function Lt(...e) {
  const n = e.length === 1 ? e[0] : e[1];
  if ((e.length === 2 ? e[0] : !0) && process.env.NODE_ENV !== "production")
    throw new Error(n);
}
function Ct(e, n) {
  return (t, i) => {
    if (Da(e))
      return e;
    if (Bt(e))
      return e(t, i);
    if (le(e)) {
      const r = Number.parseFloat(e);
      if (!Number.isNaN(r))
        return r;
      if (n) {
        const o = n == null ? void 0 : n[e];
        return Lt(
          o == null,
          `[@zag-js/core > determine-delay] Cannot determine delay for \`${e}\`. It doesn't exist in \`options.delays\``
        ), Bt(o) ? o(t, i) : o;
      }
    }
  };
}
function wi(e, n, t) {
  typeof t.value == "object" && (t.value = Fe(t.value)), !t.enumerable || t.get || t.set || !t.configurable || !t.writable || n === "__proto__" ? Object.defineProperty(e, n, t) : e[n] = t.value;
}
function Fe(e) {
  if (typeof e != "object")
    return e;
  var n = 0, t, i, r, o = Object.prototype.toString.call(e);
  if (o === "[object Object]" ? r = Object.create(e.__proto__ || null) : o === "[object Array]" ? r = Array(e.length) : o === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(a) {
    r.add(Fe(a));
  })) : o === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(a, l) {
    r.set(Fe(l), Fe(a));
  })) : o === "[object Date]" ? r = /* @__PURE__ */ new Date(+e) : o === "[object RegExp]" ? r = new RegExp(e.source, e.flags) : o === "[object DataView]" ? r = new e.constructor(Fe(e.buffer)) : o === "[object ArrayBuffer]" ? r = e.slice(0) : o.slice(-6) === "Array]" && (r = new e.constructor(e)), r) {
    for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      wi(r, i[n], Object.getOwnPropertyDescriptor(e, i[n]));
    for (n = 0, i = Object.getOwnPropertyNames(e); n < i.length; n++)
      Object.hasOwnProperty.call(r, t = i[n]) && r[t] === e[t] || wi(r, t, Object.getOwnPropertyDescriptor(e, t));
  }
  return r || e;
}
function Ii(e) {
  return Fe(e);
}
function ee(e) {
  return le(e) ? { type: e } : e;
}
function me(e) {
  return e ? rt(e) ? e.slice() : [e] : [];
}
function gr(e) {
  return ot(e) && e.predicate != null;
}
var ka = () => !0;
function $n(e, n, t, i) {
  return (r) => {
    var o;
    return le(r) ? !!((o = e[r]) != null && o.call(e, n, t, i)) : Bt(r) ? r(n, t, i) : r.predicate(e)(n, t, i);
  };
}
function xa(...e) {
  return {
    predicate: (n) => (t, i, r) => e.map($n(n, t, i, r)).some(Boolean)
  };
}
function Na(...e) {
  return {
    predicate: (n) => (t, i, r) => e.map($n(n, t, i, r)).every(Boolean)
  };
}
function _a(e) {
  return {
    predicate: (n) => (t, i, r) => !$n(n, t, i, r)(e)
  };
}
function Fa(...e) {
  return (n, t, i) => i.state.matches(...e);
}
var Mn = { or: xa, and: Na, not: _a, stateIn: Fa };
function hr(e, n) {
  return e = e ?? ka, (t, i, r) => {
    if (le(e)) {
      const o = n[e];
      return Bt(o) ? o(t, i, r) : o;
    }
    return gr(e) ? e.predicate(n)(t, i, r) : e == null ? void 0 : e(t, i, r);
  };
}
function un(e, n) {
  return (t, i, r) => gr(e) ? e.predicate(n)(t, i, r) : e;
}
function Va(e) {
  return le(e) ? { target: e } : e;
}
function $a(e, n) {
  return (t, i, r) => me(e).map(Va).find((o) => hr(o.guard, n)(t, i, r) ?? o.target ?? o.actions);
}
var Ma = Object.defineProperty, ja = (e, n, t) => n in e ? Ma(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, A = (e, n, t) => (ja(e, typeof n != "symbol" ? n + "" : n, t), t);
function Ba(e) {
  for (; e.length > 0; )
    e.pop();
  return e;
}
var vr = class {
  // Let's get started!
  constructor(e, n) {
    var i, r, o, a, l, u;
    A(
      this,
      "status",
      "Not Started"
      /* NotStarted */
    ), A(this, "state"), A(this, "initialState"), A(this, "initialContext"), A(this, "id"), A(
      this,
      "type",
      "machine"
      /* Machine */
    ), A(this, "activityEvents", /* @__PURE__ */ new Map()), A(this, "delayedEvents", /* @__PURE__ */ new Map()), A(this, "stateListeners", /* @__PURE__ */ new Set()), A(this, "contextListeners", /* @__PURE__ */ new Set()), A(this, "eventListeners", /* @__PURE__ */ new Set()), A(this, "doneListeners", /* @__PURE__ */ new Set()), A(this, "contextWatchers", /* @__PURE__ */ new Set()), A(this, "removeStateListener", sn), A(this, "removeEventListener", sn), A(this, "removeContextListener", sn), A(this, "parent"), A(this, "children", /* @__PURE__ */ new Map()), A(this, "guardMap"), A(this, "actionMap"), A(this, "delayMap"), A(this, "activityMap"), A(this, "sync"), A(this, "options"), A(this, "config"), A(this, "start", (s) => {
      if (this.state.value = "", this.status === "Running")
        return this;
      this.status = "Running", this.removeStateListener = dt(
        this.state,
        () => {
          this.stateListeners.forEach((v) => {
            v(this.stateSnapshot);
          });
        },
        this.sync
      ), this.removeEventListener = Ti(
        this.state,
        "event",
        (v) => {
          this.executeActions(this.config.onEvent, v), this.eventListeners.forEach((m) => {
            m(v);
          });
        },
        this.sync
      ), this.removeContextListener = dt(
        this.state.context,
        () => {
          this.log("Context:", this.contextSnapshot), this.contextListeners.forEach((v) => {
            v(this.contextSnapshot);
          });
        },
        this.sync || this.options.debug
      ), this.setupContextWatchers(), this.executeActivities(
        ee(
          "machine.start"
          /* Start */
        ),
        me(this.config.activities),
        "machine.start"
        /* Start */
      ), this.executeActions(this.config.entry, ee(
        "machine.start"
        /* Start */
      ));
      const c = ee(
        "machine.init"
        /* Init */
      ), d = ot(s) ? s.value : s, g = ot(s) ? s.context : void 0;
      g && this.setContext(g);
      const f = {
        target: d ?? this.config.initial
      }, h = this.getNextStateInfo(f, c);
      return this.initialState = h, this.performStateChangeEffects(this.state.value, h, c), this;
    }), A(this, "setupContextWatchers", () => {
      var s;
      for (const [c, d] of Object.entries(this.config.watch ?? {})) {
        const g = (s = this.options.compareFns) == null ? void 0 : s[c], f = Ti(
          this.state.context,
          c,
          () => {
            this.executeActions(d, this.state.event);
          },
          this.sync,
          g
        );
        this.contextWatchers.add(f);
      }
    }), A(this, "stop", () => {
      if (this.status !== "Stopped")
        return this.performExitEffects(this.state.value, ee(
          "machine.stop"
          /* Stop */
        )), this.executeActions(this.config.exit, ee(
          "machine.stop"
          /* Stop */
        )), this.setState(""), this.setEvent(
          "machine.stop"
          /* Stop */
        ), this.stopStateListeners(), this.stopChildren(), this.stopActivities(), this.stopDelayedEvents(), this.stopContextWatchers(), this.stopEventListeners(), this.stopContextListeners(), this.status = "Stopped", this;
    }), A(this, "stopEventListeners", () => {
      this.eventListeners.clear(), this.removeEventListener();
    }), A(this, "stopContextListeners", () => {
      this.contextListeners.clear(), this.removeContextListener();
    }), A(this, "stopStateListeners", () => {
      this.removeStateListener(), this.stateListeners.clear();
    }), A(this, "stopContextWatchers", () => {
      this.contextWatchers.forEach((s) => s()), this.contextWatchers.clear();
    }), A(this, "stopDelayedEvents", () => {
      this.delayedEvents.forEach((s) => {
        s.forEach((c) => c());
      }), this.delayedEvents.clear();
    }), A(this, "stopActivities", (s) => {
      var c, d;
      s ? ((c = this.activityEvents.get(s)) == null || c.forEach((g) => g()), (d = this.activityEvents.get(s)) == null || d.clear(), this.activityEvents.delete(s)) : (this.activityEvents.forEach((g) => {
        g.forEach((f) => f()), g.clear();
      }), this.activityEvents.clear());
    }), A(this, "sendChild", (s, c) => {
      const d = ee(s), g = mi(c, this.contextSnapshot), f = this.children.get(g);
      f || Lt(`[@zag-js/core] Cannot send '${d.type}' event to unknown child`), f.send(d);
    }), A(this, "stopChild", (s) => {
      this.children.has(s) || Lt(`[@zag-js/core > stop-child] Cannot stop unknown child ${s}`), this.children.get(s).stop(), this.children.delete(s);
    }), A(this, "removeChild", (s) => {
      this.children.delete(s);
    }), A(this, "stopChildren", () => {
      this.children.forEach((s) => s.stop()), this.children.clear();
    }), A(this, "setParent", (s) => {
      this.parent = s;
    }), A(this, "spawn", (s, c) => {
      const d = mi(s);
      return c && (d.id = c), d.type = "machine.actor", d.setParent(this), this.children.set(d.id, pe(d)), d.onDone(() => {
        this.removeChild(d.id);
      }).start(), pe(Oi(d));
    }), A(this, "addActivityCleanup", (s, c) => {
      var d;
      s && (this.activityEvents.has(s) ? (d = this.activityEvents.get(s)) == null || d.add(c) : this.activityEvents.set(s, /* @__PURE__ */ new Set([c])));
    }), A(this, "setState", (s) => {
      this.state.previousValue = this.state.value, this.state.value = s;
      const c = this.getStateNode(s);
      s == null ? Ba(this.state.tags) : this.state.tags = me(c == null ? void 0 : c.tags);
    }), A(this, "setContext", (s) => {
      s && pr(this.state.context, s);
    }), A(this, "withContext", (s) => {
      const c = { ...this.config.context, ...Ht(s) };
      return new vr({ ...this.config, context: c }, this.options);
    }), A(this, "setOptions", (s) => {
      const c = Ht(s);
      this.actionMap = { ...this.actionMap, ...c.actions }, this.delayMap = { ...this.delayMap, ...c.delays }, this.activityMap = { ...this.activityMap, ...c.activities }, this.guardMap = { ...this.guardMap, ...c.guards };
    }), A(this, "getStateNode", (s) => {
      var c;
      if (s)
        return (c = this.config.states) == null ? void 0 : c[s];
    }), A(this, "getNextStateInfo", (s, c) => {
      const d = this.determineTransition(s, c), g = !(d != null && d.target), f = (d == null ? void 0 : d.target) ?? this.state.value, h = this.state.value !== f, v = this.getStateNode(f), O = {
        reenter: !g && !h && !(d != null && d.internal),
        transition: d,
        stateNode: v,
        target: f,
        changed: h
      };
      return this.log("NextState:", `[${c.type}]`, this.state.value, "---->", O.target), O;
    }), A(this, "getActionFromDelayedTransition", (s) => {
      const c = ee(
        "machine.after"
        /* After */
      ), g = Ct(s.delay, this.delayMap)(this.contextSnapshot, c);
      let f;
      return {
        entry: () => {
          f = globalThis.setTimeout(() => {
            const h = this.getNextStateInfo(s, c);
            this.performStateChangeEffects(this.state.value, h, c);
          }, g);
        },
        exit: () => {
          globalThis.clearTimeout(f);
        }
      };
    }), A(this, "getDelayedEventActions", (s) => {
      const c = this.getStateNode(s), d = ee(
        "machine.after"
        /* After */
      );
      if (!c || !c.after)
        return;
      const g = [], f = [];
      if (rt(c.after)) {
        const h = this.determineTransition(c.after, d);
        if (!h)
          return;
        const v = this.getActionFromDelayedTransition(h);
        g.push(v.entry), f.push(v.exit);
      } else if (ot(c.after))
        for (const h in c.after) {
          const v = c.after[h];
          let m = {};
          if (rt(v)) {
            const T = this.determineTransition(v, d);
            T && (m = T);
          } else
            le(v) ? m = { target: v, delay: h } : m = { ...v, delay: h };
          const O = this.getActionFromDelayedTransition(m);
          g.push(O.entry), f.push(O.exit);
        }
      return { entries: g, exits: f };
    }), A(this, "executeActions", (s, c) => {
      var g;
      const d = un(s, this.guardMap)(this.contextSnapshot, c, this.guardMeta);
      for (const f of me(d)) {
        const h = le(f) ? (g = this.actionMap) == null ? void 0 : g[f] : f;
        ln(
          le(f) && !h,
          `[@zag-js/core > execute-actions] No implementation found for action: \`${f}\``
        ), h == null || h(this.state.context, c, this.meta);
      }
    }), A(this, "executeActivities", (s, c, d) => {
      var g;
      for (const f of c) {
        const h = le(f) ? (g = this.activityMap) == null ? void 0 : g[f] : f;
        if (!h) {
          ln(`[@zag-js/core > execute-activity] No implementation found for activity: \`${f}\``);
          continue;
        }
        const v = h(this.state.context, s, this.meta);
        v && this.addActivityCleanup(d ?? this.state.value, v);
      }
    }), A(this, "createEveryActivities", (s, c) => {
      if (!s)
        return;
      const d = ee(
        "machine.every"
        /* Every */
      );
      if (rt(s)) {
        const g = me(s).find((m) => {
          const O = m.delay, C = Ct(O, this.delayMap)(this.contextSnapshot, d);
          return hr(m.guard, this.guardMap)(this.contextSnapshot, d, this.guardMeta) ?? C != null;
        });
        if (!g)
          return;
        const h = Ct(g.delay, this.delayMap)(this.contextSnapshot, d);
        c(() => {
          const m = globalThis.setInterval(() => {
            this.executeActions(g.actions, d);
          }, h);
          return () => {
            globalThis.clearInterval(m);
          };
        });
      } else
        for (const g in s) {
          const f = s == null ? void 0 : s[g], v = Ct(g, this.delayMap)(this.contextSnapshot, d);
          c(() => {
            const O = globalThis.setInterval(() => {
              this.executeActions(f, d);
            }, v);
            return () => {
              globalThis.clearInterval(O);
            };
          });
        }
    }), A(this, "setEvent", (s) => {
      this.state.previousEvent = this.state.event, this.state.event = Oi(ee(s));
    }), A(this, "performExitEffects", (s, c) => {
      const d = this.state.value;
      if (d === "")
        return;
      const g = s ? this.getStateNode(s) : void 0;
      this.stopActivities(d);
      const f = un(g == null ? void 0 : g.exit, this.guardMap)(this.contextSnapshot, c, this.guardMeta), h = me(f), v = this.delayedEvents.get(d);
      v && h.push(...v), this.executeActions(h, c), this.eventListeners.clear();
    }), A(this, "performEntryEffects", (s, c) => {
      const d = this.getStateNode(s), g = me(d == null ? void 0 : d.activities);
      this.createEveryActivities(d == null ? void 0 : d.every, (m) => {
        g.unshift(m);
      }), g.length > 0 && this.executeActivities(c, g);
      const f = un(d == null ? void 0 : d.entry, this.guardMap)(
        this.contextSnapshot,
        c,
        this.guardMeta
      ), h = me(f), v = this.getDelayedEventActions(s);
      d != null && d.after && v && (this.delayedEvents.set(s, v == null ? void 0 : v.exits), h.push(...v.entries)), this.executeActions(h, c), (d == null ? void 0 : d.type) === "final" && (this.state.done = !0, this.doneListeners.forEach((m) => {
        m(this.stateSnapshot);
      }), this.stop());
    }), A(this, "performTransitionEffects", (s, c) => {
      const d = this.determineTransition(s, c);
      this.executeActions(d == null ? void 0 : d.actions, c);
    }), A(this, "performStateChangeEffects", (s, c, d) => {
      this.setEvent(d);
      const g = c.changed || c.reenter;
      g && this.performExitEffects(s, d), this.performTransitionEffects(c.transition, d), this.setState(c.target), g && this.performEntryEffects(c.target, d);
    }), A(this, "determineTransition", (s, c) => {
      const d = $a(s, this.guardMap);
      return d == null ? void 0 : d(this.contextSnapshot, c, this.guardMeta);
    }), A(this, "sendParent", (s) => {
      var d;
      this.parent || Lt("[@zag-js/core > send-parent] Cannot send event to an unknown parent");
      const c = ee(s);
      (d = this.parent) == null || d.send(c);
    }), A(this, "log", (...s) => {
      Aa() && this.options.debug && console.log(...s);
    }), A(this, "send", (s) => {
      const c = ee(s);
      this.transition(this.state.value, c);
    }), A(this, "transition", (s, c) => {
      var v, m;
      const d = le(s) ? this.getStateNode(s) : s == null ? void 0 : s.stateNode, g = ee(c);
      if (!d && !this.config.on) {
        const O = this.status === "Stopped" ? "[@zag-js/core > transition] Cannot transition a stopped machine" : `[@zag-js/core > transition] State does not have a definition for \`state\`: ${s}, \`event\`: ${g.type}`;
        ln(O);
        return;
      }
      const f = ((v = d == null ? void 0 : d.on) == null ? void 0 : v[g.type]) ?? ((m = this.config.on) == null ? void 0 : m[g.type]), h = this.getNextStateInfo(f, g);
      return this.performStateChangeEffects(this.state.value, h, g), h.stateNode;
    }), A(this, "subscribe", (s) => (this.stateListeners.add(s), this.status === "Running" && s(this.stateSnapshot), () => {
      this.stateListeners.delete(s);
    })), A(this, "onDone", (s) => (this.doneListeners.add(s), this)), A(this, "onTransition", (s) => (this.stateListeners.add(s), this.status === "Running" && s(this.stateSnapshot), this)), A(this, "onChange", (s) => (this.contextListeners.add(s), this)), A(this, "onEvent", (s) => (this.eventListeners.add(s), this)), this.config = Ii(e), this.options = Ii(n ?? {}), this.id = this.config.id ?? `machine-${ya()}`, this.guardMap = ((i = this.options) == null ? void 0 : i.guards) ?? {}, this.actionMap = ((r = this.options) == null ? void 0 : r.actions) ?? {}, this.delayMap = ((o = this.options) == null ? void 0 : o.delays) ?? {}, this.activityMap = ((a = this.options) == null ? void 0 : a.activities) ?? {}, this.sync = ((l = this.options) == null ? void 0 : l.sync) ?? !1, this.state = Pa(this.config), this.initialContext = we(this.state.context);
    const t = ee(
      "machine.created"
      /* Created */
    );
    this.executeActions((u = this.config) == null ? void 0 : u.created, t);
  }
  // immutable state value
  get stateSnapshot() {
    return pe(we(this.state));
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
}, We = (e, n) => new vr(e, n);
function Ut(e, n, t) {
  if (!e)
    return;
  const i = e.ownerDocument.defaultView || window, r = new i.MutationObserver((o) => {
    for (const a of o)
      a.type === "attributes" && a.attributeName && n.includes(a.attributeName) && t(a);
  });
  return r.observe(e, { attributes: !0, attributeFilter: n }), () => r.disconnect();
}
function Ha(e, n) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView || window, i = new t.MutationObserver(n);
  return i.observe(e, { childList: !0, subtree: !0 }), () => i.disconnect();
}
function Ua(e) {
  const n = {
    each(t) {
      var i;
      for (let r = 0; r < ((i = e.frames) == null ? void 0 : i.length); r += 1) {
        const o = e.frames[r];
        o && t(o);
      }
    },
    addEventListener(t, i, r) {
      return n.each((o) => {
        try {
          o.document.addEventListener(t, i, r);
        } catch (a) {
          console.warn(a);
        }
      }), () => {
        try {
          n.removeEventListener(t, i, r);
        } catch (o) {
          console.warn(o);
        }
      };
    },
    removeEventListener(t, i, r) {
      n.each((o) => {
        try {
          o.document.removeEventListener(t, i, r);
        } catch (a) {
          console.warn(a);
        }
      });
    }
  };
  return n;
}
var jn = (e) => typeof e == "object" && e !== null && e.nodeType === 1, br = (e) => jn(e) && e.tagName === "IFRAME";
function Wa(e) {
  return jn(e) ? e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0 : !1;
}
function Ka(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
var Bn = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type", mr = (e, n = !1) => {
  if (!e)
    return [];
  const t = Array.from(e.querySelectorAll(Bn));
  (n == !0 || n == "if-empty" && t.length === 0) && jn(e) && ft(e) && t.unshift(e);
  const r = t.filter(ft);
  return r.forEach((o, a) => {
    if (br(o) && o.contentDocument) {
      const l = o.contentDocument.body;
      r.splice(a, 1, ...mr(l));
    }
  }), r;
};
function ft(e) {
  return !e || e.closest("[inert]") ? !1 : e.matches(Bn) && Wa(e);
}
function Hn(e, n) {
  if (!e)
    return [];
  const t = Array.from(e.querySelectorAll(Bn)), i = t.filter(Ci);
  return n && Ci(e) && i.unshift(e), i.forEach((r, o) => {
    if (br(r) && r.contentDocument) {
      const a = r.contentDocument.body, l = Hn(a);
      i.splice(o, 1, ...l);
    }
  }), !i.length && n ? t : i;
}
function Ci(e) {
  return e != null && e.tabIndex > 0 ? !0 : ft(e) && !Ka(e);
}
function Ga(e, n) {
  const t = Hn(e, n), i = t[0] || null, r = t[t.length - 1] || null;
  return [i, r];
}
function za(e, n) {
  const t = Hn(e), i = (e == null ? void 0 : e.ownerDocument) || document, r = n ?? i.activeElement;
  if (!r)
    return null;
  const o = t.indexOf(r);
  return t[o + 1] || null;
}
function Ya(e, n = {}) {
  const { triggerElement: t, onFocus: i } = n, r = (e == null ? void 0 : e.ownerDocument) || document, o = r.body;
  function a(l) {
    if (l.key !== "Tab")
      return;
    let u = null;
    const [s, c] = Ga(e, !0), d = !s && !c;
    l.shiftKey && (r.activeElement === s || d) ? u = t : !l.shiftKey && r.activeElement === t ? u = s : !l.shiftKey && (r.activeElement === c || d) && (u = za(o, t)), u && (l.preventDefault(), (i == null ? void 0 : i(u)) ?? u.focus());
  }
  return r == null || r.addEventListener("keydown", a, !0), () => {
    r == null || r.removeEventListener("keydown", a, !0);
  };
}
function qa(e, n) {
  const { defer: t, triggerElement: i, ...r } = n, o = t ? z : (l) => l(), a = [];
  return a.push(
    o(() => {
      const l = typeof e == "function" ? e() : e, u = typeof i == "function" ? i() : i;
      a.push(Ya(l, { triggerElement: u, ...r }));
    })
  ), () => {
    a.forEach((l) => l == null ? void 0 : l());
  };
}
var Si = "pointerdown.outside", Ri = "focus.outside";
function Xa(e) {
  const n = e.composedPath() ?? [e.target];
  for (const t of n)
    if (je(t) && ft(t))
      return !0;
  return !1;
}
function Ja(e, n) {
  const { exclude: t, onFocusOutside: i, onPointerDownOutside: r, onInteractOutside: o } = n;
  if (!e)
    return;
  const a = An(e), l = Ro(e), u = Ua(l);
  function s(v) {
    const m = kt(v);
    return !je(m) || ct(e, m) ? !1 : !(t != null && t(m));
  }
  let c;
  function d(v) {
    function m() {
      if (!(!e || !s(v))) {
        if (r || o) {
          const O = hn(r, o);
          e.addEventListener(Si, O, { once: !0 });
        }
        ci(e, Si, {
          bubbles: !1,
          cancelable: !0,
          detail: {
            originalEvent: v,
            contextmenu: jo(v),
            focusable: Xa(v)
          }
        });
      }
    }
    v.pointerType === "touch" ? (u.removeEventListener("click", m), a.removeEventListener("click", m), c = m, a.addEventListener("click", m, { once: !0 }), u.addEventListener("click", m, { once: !0 })) : m();
  }
  const g = /* @__PURE__ */ new Set(), f = setTimeout(() => {
    g.add(u.addEventListener("pointerdown", d, !0)), g.add(_t(a, "pointerdown", d, !0));
  }, 0);
  function h(v) {
    if (!(!e || !s(v))) {
      if (i || o) {
        const m = hn(i, o);
        e.addEventListener(Ri, m, { once: !0 });
      }
      ci(e, Ri, {
        bubbles: !1,
        cancelable: !0,
        detail: {
          originalEvent: v,
          contextmenu: !1,
          focusable: ft(kt(v))
        }
      });
    }
  }
  return g.add(_t(a, "focusin", h, !0)), g.add(u.addEventListener("focusin", h, !0)), () => {
    clearTimeout(f), c && (u.removeEventListener("click", c), a.removeEventListener("click", c)), g.forEach((v) => v());
  };
}
function yr(e, n) {
  const { defer: t } = n, i = t ? z : (o) => o(), r = [];
  return r.push(
    i(() => {
      const o = typeof e == "function" ? e() : e;
      r.push(Ja(o, n));
    })
  ), () => {
    r.forEach((o) => o == null ? void 0 : o());
  };
}
var Er = {
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
function Za(e) {
  Object.assign(e.style, Er);
}
var St = "__live-region__";
function Qa(e = {}) {
  const { level: n = "polite", document: t = document, root: i, delay: r = 0 } = e, o = t.defaultView ?? window, a = i ?? t.body;
  function l(s, c) {
    const d = t.getElementById(St);
    d == null || d.remove(), c = c ?? r;
    const g = t.createElement("span");
    g.id = St, g.dataset.liveAnnouncer = "true";
    const f = n !== "assertive" ? "status" : "alert";
    g.setAttribute("aria-live", n), g.setAttribute("role", f), Za(g), a.appendChild(g), o.setTimeout(() => {
      g.textContent = s;
    }, c);
  }
  function u() {
    const s = t.getElementById(St);
    s == null || s.remove();
  }
  return {
    announce: l,
    destroy: u,
    toJSON() {
      return St;
    }
  };
}
var { and: Rt, not: es } = Mn;
function ts(e) {
  const n = Ae(e);
  return We(
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
              guard: Rt("isCustomValue", es("allowCustomValue")),
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
                guard: Rt("hasFocusedOption", "autoComplete"),
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
                guard: Rt("autoComplete", "isLastOptionFocused"),
                actions: ["clearFocusedOption", "scrollToTop"]
              },
              { actions: "focusNextOption" }
            ],
            ARROW_UP: [
              {
                guard: Rt("autoComplete", "isFirstOptionFocused"),
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
          var i;
          return ((i = R.getFirstEl(t)) == null ? void 0 : i.id) === t.focusedId;
        },
        isLastOptionFocused: (t) => {
          var i;
          return ((i = R.getLastEl(t)) == null ? void 0 : i.id) === t.focusedId;
        },
        isCustomValue: (t) => {
          var i, r;
          return !!((r = t.isCustomValue) != null && r.call(t, { inputValue: t.inputValue, previousValue: (i = t.selectionData) == null ? void 0 : i.value }));
        },
        allowCustomValue: (t) => !!t.allowCustomValue,
        hasFocusedOption: (t) => !!t.focusedId,
        selectOnTab: (t) => !!t.selectOnTab
      },
      activities: {
        syncInputValue: (t) => {
          const i = R.getInputEl(t);
          return Ut(i, ["data-value"], () => {
            if (!i)
              return;
            const r = i.dataset.value || "";
            i.value = r, i.selectionStart = r.length, i.selectionEnd = r.length;
          });
        },
        trackInteractOutside(t, i, { send: r }) {
          return yr(R.getInputEl(t), {
            exclude(o) {
              return [R.getContentEl(t), R.getTriggerEl(t)].some((l) => ct(l, o));
            },
            onInteractOutside(o) {
              var a;
              (a = t.onInteractOutside) == null || a.call(t, o), !o.defaultPrevented && r({ type: "BLUR", src: "interact-outside" });
            }
          });
        },
        hideOtherElements(t) {
          if (t.ariaHidden)
            return cr([R.getInputEl(t), R.getContentEl(t), R.getTriggerEl(t)]);
        },
        computePlacement(t) {
          return t.currentPlacement = t.positioning.placement, ar(R.getControlEl(t), R.getPositionerEl(t), {
            ...t.positioning,
            onComplete(i) {
              t.currentPlacement = i.placement;
            },
            onCleanup() {
              t.currentPlacement = void 0;
            }
          });
        },
        // in event the options are fetched (async), we still want to auto-highlight the first option
        trackOptionNodes(t, i, r) {
          if (!t.autoHighlight)
            return;
          const o = r.getAction("focusFirstOption"), a = () => o(t, i, r);
          return a(), Ha(R.getContentEl(t), a);
        },
        scrollOptionIntoView(t, i, { getState: r }) {
          const o = R.getInputEl(t);
          return Ut(o, ["aria-activedescendant"], () => {
            const a = r().event;
            if (!/(ARROW_UP|ARROW_DOWN|HOME|END|TAB)/.test(a.type))
              return;
            const u = R.getActiveOptionEl(t);
            u == null || u.scrollIntoView({ block: "nearest" }), t.autoComplete && R.focusInput(t);
          });
        }
      },
      actions: {
        setupLiveRegion(t) {
          t.liveRegion = Qa({
            level: "assertive",
            document: R.getDoc(t)
          });
        },
        removeLiveRegion(t) {
          var i;
          (i = t.liveRegion) == null || i.destroy();
        },
        setActiveOption(t, i) {
          const { label: r, id: o, value: a } = i;
          t.focusedId = o, t.focusedOptionData = { label: r, value: a };
        },
        setNavigationData(t, i) {
          const { label: r, value: o } = i;
          t.navigationData = { label: r, value: o };
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
        selectOption(t, i) {
          const r = !!i.value && !!i.label;
          t.selectionData = r ? {
            label: i.label,
            value: i.value
          } : t.navigationData;
          let o;
          t.selectionData && (t.selectionBehavior === "set" && (o = t.selectionData.label), t.selectionBehavior === "clear" && (o = ""), o != null && (t.inputValue = o));
        },
        blurInputIfNeeded(t) {
          t.autoComplete || !t.blurOnSelect || z(() => {
            var i;
            (i = R.getInputEl(t)) == null || i.blur();
          });
        },
        focusInput(t, i) {
          i.type !== "CHANGE" && R.focusInput(t);
        },
        setInputValue(t, i) {
          const r = i.type === "SET_VALUE" ? i.label : i.value;
          t.inputValue = r;
        },
        clearInputValue(t) {
          t.inputValue = "";
        },
        revertInputValue(t) {
          t.selectionData && (t.inputValue = t.selectionData.label);
        },
        setSelectionData(t, i) {
          const { label: r, value: o } = i;
          t.selectionData = { label: r, value: o };
        },
        clearSelectedValue(t) {
          t.selectionData = null;
        },
        scrollToTop(t) {
          const i = R.getContentEl(t);
          i && (i.scrollTop = 0);
        },
        invokeOnInputChange(t) {
          var i;
          (i = t.onInputChange) == null || i.call(t, { value: t.inputValue });
        },
        invokeOnHighlight(t) {
          var a;
          const { label: i, value: r } = t.navigationData ?? {}, o = R.getMatchingOptionEl(t, r);
          (a = t.onHighlight) == null || a.call(t, { label: i, value: r, relatedTarget: o });
        },
        invokeOnSelect(t) {
          var a;
          const { label: i, value: r } = t.selectionData ?? {}, o = R.getMatchingOptionEl(t, r);
          (a = t.onSelect) == null || a.call(t, { label: i, value: r, relatedTarget: o });
        },
        invokeOnOpen(t) {
          var i;
          (i = t.onOpen) == null || i.call(t);
        },
        invokeOnClose(t) {
          var i;
          (i = t.onClose) == null || i.call(t);
        },
        highlightFirstOption(t) {
          z(() => {
            Or(t, R.getFirstEl(t));
          });
        },
        focusFirstOption(t) {
          z(() => {
            Qe(t, R.getFirstEl(t));
          });
        },
        focusLastOption(t) {
          z(() => {
            Qe(t, R.getLastEl(t));
          });
        },
        focusNextOption(t) {
          z(() => {
            const i = R.getNextEl(t, t.focusedId ?? "");
            Qe(t, i);
          });
        },
        focusPrevOption(t) {
          z(() => {
            let i = R.getPrevEl(t, t.focusedId ?? "");
            Qe(t, i);
          });
        },
        focusMatchingOption(t) {
          z(() => {
            var r;
            const i = R.getMatchingOptionEl(t, (r = t.selectionData) == null ? void 0 : r.value);
            i == null || i.scrollIntoView({ block: "nearest" }), Qe(t, i);
          });
        },
        announceOptionCount(t) {
          z(() => {
            var o;
            const i = R.getOptionCount(t);
            if (!i)
              return;
            const r = t.translations.countAnnouncement(i);
            (o = t.liveRegion) == null || o.announce(r);
          });
        },
        setIsHovering(t) {
          t.isHovering = !0;
        },
        clearIsHovering(t) {
          t.isHovering = !1;
        },
        preventDefault(t, i) {
          i.preventDefault();
        },
        setSectionLabel(t) {
          const i = R.getClosestSectionLabel(t);
          i && (t.sectionLabel = i);
        }
      }
    }
  );
}
function Or(e, n) {
  if (!n)
    return;
  const t = R.getOptionData(n);
  return e.focusedId = n.id, e.focusedOptionData = t, t;
}
function Qe(e, n) {
  if (!n || n.id === e.focusedId)
    return;
  const t = Or(e, n);
  e.navigationData = t;
}
function Tr(e) {
  var n, t, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (t = Tr(e[n])) && (i && (i += " "), i += t);
    else
      for (n in e)
        e[n] && (i && (i += " "), i += n);
  return i;
}
function re() {
  for (var e, n, t = 0, i = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Tr(e)) && (i && (i += " "), i += n);
  return i;
}
function ns(e) {
  return new Proxy({}, {
    get() {
      return e;
    }
  });
}
var Ke = ns((e) => e), wr = typeof document < "u" ? oo : Sn;
function Ir(e) {
  const { children: n, target: t } = e, i = st(null), r = st(null), [, o] = ao((l) => l + 1, 0);
  wr(() => {
    if (!i.current)
      return;
    const l = i.current.ownerDocument;
    return r.current = l.createElement("zag-portal"), l.body.appendChild(r.current), o(), () => {
      r.current && l.body.removeChild(r.current);
    };
  }, []);
  const a = (t == null ? void 0 : t.current) ?? r.current;
  return a ? po(n, a) : Me("span", { ref: i });
}
var { use: Pi } = Cn;
function Cr(e, n) {
  const t = n == null ? void 0 : n.sync, i = st(), r = st(), o = so(
    Hi(
      (u) => {
        const s = dt(e, u, t);
        return u(), s;
      },
      [e, t]
    ),
    () => {
      const u = we(e, Pi);
      try {
        if (i.current && r.current && !fr(i.current, u, r.current, /* @__PURE__ */ new WeakMap()))
          return i.current;
      } catch {
      }
      return u;
    },
    () => we(e, Pi)
  ), a = /* @__PURE__ */ new WeakMap();
  Sn(() => {
    i.current = o, r.current = a;
  });
  const l = co(() => /* @__PURE__ */ new WeakMap(), []);
  return dr(o, a, l);
}
function is(e) {
  return [Cr(e.state), e.send];
}
function rs(e) {
  const n = st();
  return n.current || (n.current = { v: e() }), n.current.v;
}
function os(e, n) {
  const { actions: t, state: i, context: r } = n ?? {}, o = rs(() => {
    const a = typeof e == "function" ? e() : e;
    return r ? a.withContext(r) : a;
  });
  return wr(() => (o.start(i), o.state.can("SETUP") && o.send("SETUP"), () => {
    o.stop();
  }), []), o.setOptions({ actions: t }), o.setContext(r), o;
}
function ht(e, n) {
  const t = os(e, n);
  return [Cr(t.state), t.send, t];
}
function kc({
  children: e,
  displayText: n,
  getKey: t,
  getValue: i,
  items: r,
  onSelect: o,
  part: a,
  value: l,
  ...u
}) {
  var v, m, O, T;
  const s = Hi(
    (C) => r.find((k) => t(i(k)) === C),
    [t, i, r]
  ), [c, d] = lo(r), [g, f] = ht(
    ts({
      id: pt(),
      ...u,
      onOpen() {
        d(r);
      },
      onInputChange(C) {
        var F;
        const k = r.filter(
          (L) => n(L).toLowerCase().includes(C.value.toLowerCase())
        );
        d(k.length > 0 ? k : r), (F = u.onInputChange) == null || F.call(u, C);
      },
      onSelect({ value: C }) {
        if (o) {
          const k = C ? s(C) : void 0;
          o(k ? i(k) : void 0);
        }
      }
    })
  ), h = ba(g, f, Ke);
  return Sn(() => {
    l && t(l) !== h.selectedValue && h.setValue(t(l));
  }, [l]), /* @__PURE__ */ $.jsxs("div", { className: "combobox", children: [
    /* @__PURE__ */ $.jsx("div", { ...h.rootProps, children: /* @__PURE__ */ $.jsxs(
      "div",
      {
        ...h.controlProps,
        className: re("relative inline-block", (v = a == null ? void 0 : a.control) == null ? void 0 : v.className),
        children: [
          /* @__PURE__ */ $.jsx(
            "input",
            {
              ...h.inputProps,
              className: re("select data-[invalid]:select-error", (m = a == null ? void 0 : a.input) == null ? void 0 : m.className)
            }
          ),
          /* @__PURE__ */ $.jsx(
            "button",
            {
              ...h.triggerProps,
              className: re("absolute right-0 inset-y-0 pr-10", (O = a == null ? void 0 : a.trigger) == null ? void 0 : O.className)
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ $.jsx("div", { ...h.positionerProps, className: "z-50", children: c.length > 0 && /* @__PURE__ */ $.jsx(
      "ul",
      {
        ...h.contentProps,
        className: re("menu max-h-60 overflow-y-auto flex-nowrap", (T = a == null ? void 0 : a.content) == null ? void 0 : T.className),
        children: c.map((C, k) => {
          var F;
          return /* @__PURE__ */ Me(
            "li",
            {
              ...h.getOptionProps({
                index: k,
                label: n(C),
                value: t(i(C))
              }),
              className: re((F = a == null ? void 0 : a.option) == null ? void 0 : F.className),
              key: t(i(C))
            },
            /* @__PURE__ */ $.jsx("a", { children: (e == null ? void 0 : e(C)) || n(C) })
          );
        })
      }
    ) })
  ] });
}
var as = ye("select").parts(
  "label",
  "positioner",
  "trigger",
  "option",
  "optionGroup",
  "optionGroupLabel",
  "hiddenSelect",
  "content"
), be = as.build(), D = gt({
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
    var t, i;
    return ((i = (t = e.ids) == null ? void 0 : t.option) == null ? void 0 : i.call(t, n)) ?? `select:${e.id}:option:${n}`;
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
    var t, i;
    return ((i = (t = e.ids) == null ? void 0 : t.optionGroup) == null ? void 0 : i.call(t, n)) ?? `select:${e.id}:optgroup:${n}`;
  },
  getOptionGroupLabelId: (e, n) => {
    var t, i;
    return ((i = (t = e.ids) == null ? void 0 : t.optionGroupLabel) == null ? void 0 : i.call(t, n)) ?? `select:${e.id}:optgroup-label:${n}`;
  },
  getHiddenSelectElement: (e) => D.getById(e, D.getHiddenSelectId(e)),
  getContentElement: (e) => D.getById(e, D.getContentId(e)),
  getTriggerElement: (e) => D.getById(e, D.getTriggerId(e)),
  getPositionerElement: (e) => D.getById(e, D.getPositionerId(e)),
  getOptionElements: (e) => Pn(D.getContentElement(e), "[role=option]:not([data-disabled])"),
  getFirstOption: (e) => oi(D.getContentElement(e), "[role=option]:not([data-disabled])"),
  getLastOption: (e) => oi(D.getContentElement(e), "[role=option]:not([data-disabled]):last-of-type"),
  getNextOption: (e, n) => {
    const t = D.getOptionElements(e);
    return Ln(t, n, e.loop);
  },
  getPreviousOption: (e, n) => {
    const t = D.getOptionElements(e);
    return kn(t, n, e.loop);
  },
  getOptionDetails(e) {
    const { label: n, value: t } = e.dataset;
    return { label: n, value: t };
  },
  getMatchingOption(e, n, t) {
    return xt(D.getOptionElements(e), { state: e.typeahead, key: n, activeId: t });
  },
  getHighlightedOption(e) {
    return e.highlightedId ? D.getById(e, e.highlightedId) : null;
  },
  getClosestOption(e) {
    return je(e) ? e.closest("[data-part=option]") : null;
  }
});
function ss(e) {
  return Vo(e) && "value" in e && "label" in e;
}
function Ai(e) {
  if (!ss(e))
    throw new TypeError("Expected an option data object");
}
function cs(e, n, t) {
  var g;
  const i = e.context.disabled, r = e.context.invalid, o = e.context.isInteractive, a = e.matches("open"), l = e.context.highlightedOption, u = e.context.selectedOption, s = e.context.isTypingAhead;
  function c(f) {
    var v;
    const h = D.getOptionId(e.context, f.value);
    return {
      isDisabled: !!(f.disabled || i),
      isHighlighted: e.context.highlightedId === h,
      isSelected: ((v = e.context.selectedOption) == null ? void 0 : v.value) === f.value
    };
  }
  const d = sr({
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
    highlightedOption: l,
    /**
     * The currently selected option
     */
    selectedOption: u,
    /**
     * Function to focus the select
     */
    focus() {
      var f;
      (f = D.getTriggerElement(e.context)) == null || f.focus();
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
    setSelectedOption(f) {
      Ai(f), n({ type: "SELECT_OPTION", value: f });
    },
    /**
     * Function to set the highlighted option
     */
    setHighlightedOption(f) {
      Ai(f), n({ type: "HIGHLIGHT_OPTION", value: f });
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
    getOptionState: c,
    labelProps: t.label({
      dir: e.context.dir,
      id: D.getLabelId(e.context),
      ...be.label.attrs,
      "data-disabled": B(i),
      "data-invalid": B(r),
      "data-readonly": B(e.context.readOnly),
      htmlFor: D.getHiddenSelectId(e.context),
      onClick() {
        var f;
        i || (f = D.getTriggerElement(e.context)) == null || f.focus();
      }
    }),
    positionerProps: t.element({
      ...be.positioner.attrs,
      id: D.getPositionerId(e.context),
      style: d.floating
    }),
    triggerProps: t.button({
      id: D.getTriggerId(e.context),
      disabled: i,
      dir: e.context.dir,
      type: "button",
      "aria-controls": D.getContentId(e.context),
      "aria-expanded": a,
      "data-expanded": B(a),
      "aria-haspopup": "listbox",
      "aria-labelledby": D.getLabelId(e.context),
      ...be.trigger.attrs,
      "data-disabled": B(i),
      "data-invalid": B(r),
      "aria-invalid": r,
      "data-readonly": B(e.context.readOnly),
      "data-placement": e.context.currentPlacement,
      "data-placeholder-shown": B(!e.context.hasSelectedOption),
      onPointerDown(f) {
        f.button || f.ctrlKey || !o || (f.currentTarget.dataset.pointerType = f.pointerType, !(i || f.pointerType === "touch") && n({ type: "TRIGGER_CLICK" }));
      },
      onClick(f) {
        !o || f.button || f.currentTarget.dataset.pointerType === "touch" && n({ type: "TRIGGER_CLICK" });
      },
      onFocus() {
        n("TRIGGER_FOCUS");
      },
      onBlur() {
        n("TRIGGER_BLUR");
      },
      onKeyDown(f) {
        if (!o)
          return;
        const v = {
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
          Space(m) {
            n(s ? { type: "TYPEAHEAD", key: m.key } : { type: "TRIGGER_KEY" });
          }
        }[Ft(f, e.context)];
        if (v) {
          v(f), f.preventDefault();
          return;
        }
        xt.isValidEvent(f) && (n({ type: "TYPEAHEAD", key: f.key }), f.preventDefault());
      }
    }),
    getOptionProps(f) {
      const { value: h, label: v, valueText: m } = f, O = c(f);
      return t.element({
        id: D.getOptionId(e.context, h),
        role: "option",
        ...be.option.attrs,
        "data-label": v,
        "data-value": h,
        "data-valuetext": m ?? v,
        "aria-selected": O.isSelected,
        "data-selected": B(O.isSelected),
        "data-focus": B(O.isHighlighted),
        "data-disabled": B(O.isDisabled),
        "aria-disabled": Ki(O.isDisabled)
      });
    },
    getOptionGroupLabelProps(f) {
      const { htmlFor: h } = f;
      return t.element({
        id: D.getOptionGroupId(e.context, h),
        role: "group",
        ...be.optionGroupLabel.attrs
      });
    },
    getOptionGroupProps(f) {
      const { id: h } = f;
      return t.element({
        ...be.optionGroup.attrs,
        "data-disabled": B(i),
        id: D.getOptionGroupId(e.context, h),
        "aria-labelledby": D.getOptionGroupLabelId(e.context, h)
      });
    },
    hiddenSelectProps: t.select({
      ...be.hiddenSelect.attrs,
      name: e.context.name,
      form: e.context.form,
      disabled: !o,
      "aria-hidden": !0,
      id: D.getHiddenSelectId(e.context),
      defaultValue: (g = e.context.selectedOption) == null ? void 0 : g.value,
      style: Er,
      tabIndex: -1,
      // Some browser extensions will focus the hidden select.
      // Let's forward the focus to the trigger.
      onFocus() {
        var f;
        (f = D.getTriggerElement(e.context)) == null || f.focus();
      },
      "aria-labelledby": D.getLabelId(e.context)
    }),
    contentProps: t.element({
      hidden: !a,
      dir: e.context.dir,
      id: D.getContentId(e.context),
      role: "listbox",
      ...be.content.attrs,
      "aria-activedescendant": e.context.highlightedId || "",
      "aria-labelledby": D.getLabelId(e.context),
      tabIndex: 0,
      onPointerMove(f) {
        if (!o)
          return;
        const h = D.getClosestOption(f.target);
        !h || h.hasAttribute("data-disabled") ? n({ type: "POINTER_LEAVE" }) : n({ type: "POINTER_MOVE", id: h.id, target: h });
      },
      onPointerUp(f) {
        if (!o)
          return;
        const h = D.getClosestOption(f.target);
        !h || h.hasAttribute("data-disabled") || n({ type: "OPTION_CLICK", src: "pointerup", id: h.id });
      },
      onPointerLeave() {
        n({ type: "POINTER_LEAVE" });
      },
      onClick(f) {
        if (!o)
          return;
        const h = D.getClosestOption(f.target);
        !h || h.hasAttribute("data-disabled") || n({ type: "OPTION_CLICK", src: "click", id: h.id });
      },
      onKeyDown(f) {
        if (!o)
          return;
        const h = {
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
          Tab(m) {
            m.shiftKey || n({ type: "TAB" });
          },
          Enter() {
            n({ type: "TRIGGER_KEY" });
          },
          Space(m) {
            var O;
            s ? n({ type: "TYPEAHEAD", key: m.key }) : (O = h.Enter) == null || O.call(h, m);
          }
        }, v = h[Ft(f)];
        if (v) {
          v(f), f.preventDefault();
          return;
        }
        mo(f.target) || xt.isValidEvent(f) && (n({ type: "TYPEAHEAD", key: f.key }), f.preventDefault());
      }
    })
  };
}
function ls(e, n) {
  const t = (i) => {
    i.key === "Escape" && (n == null || n(i));
  };
  return _t(An(e), "keydown", t);
}
var oe = {
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
    var i;
    const n = this.indexOf(e), t = this.topMostPointerBlockingLayer() ? this.indexOf((i = this.topMostPointerBlockingLayer()) == null ? void 0 : i.node) : -1;
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
    return this.getNestedLayers(e).some((t) => ct(t.node, n));
  },
  isInBranch(e) {
    return Array.from(this.branches).some((n) => ct(n, e));
  },
  add(e) {
    this.layers.push(e);
  },
  addBranch(e) {
    this.branches.push(e);
  },
  remove(e) {
    const n = this.indexOf(e);
    n < 0 || (n < this.count() - 1 && this.getNestedLayers(e).forEach((i) => i.dismiss()), this.layers.splice(n, 1));
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
}, Di;
function Li() {
  oe.layers.forEach(({ node: e }) => {
    e.style.pointerEvents = oe.isBelowPointerBlockingLayer(e) ? "none" : "auto";
  });
}
function us(e) {
  e.style.pointerEvents = "";
}
var dn = "data-inert";
function ds(e) {
  const n = An(e);
  return oe.hasPointerBlockingLayer() && !n.body.hasAttribute(dn) && (Di = document.body.style.pointerEvents, n.body.style.pointerEvents = "none", n.body.setAttribute(dn, "")), () => {
    oe.hasPointerBlockingLayer() || (n.body.style.pointerEvents = Di, n.body.removeAttribute(dn), n.body.style.length === 0 && n.body.removeAttribute("style"));
  };
}
function fs(e, n) {
  if (!e) {
    Mo("[@zag-js/dismissable] node is `null` or `undefined`");
    return;
  }
  const { onDismiss: t, pointerBlocking: i, exclude: r, debug: o } = n, a = { dismiss: t, node: e, pointerBlocking: i };
  oe.add(a), Li();
  function l(g) {
    var h, v;
    const f = kt(g.detail.originalEvent);
    oe.isBelowPointerBlockingLayer(e) || oe.isInBranch(f) || ((h = n.onPointerDownOutside) == null || h.call(n, g), (v = n.onInteractOutside) == null || v.call(n, g), !g.defaultPrevented && (o && console.log("onPointerDownOutside:", g.detail.originalEvent), t == null || t()));
  }
  function u(g) {
    var h, v;
    const f = kt(g.detail.originalEvent);
    oe.isInBranch(f) || ((h = n.onFocusOutside) == null || h.call(n, g), (v = n.onInteractOutside) == null || v.call(n, g), !g.defaultPrevented && (o && console.log("onFocusOutside:", g.detail.originalEvent), t == null || t()));
  }
  function s(g) {
    var f;
    oe.isTopMost(e) && ((f = n.onEscapeKeyDown) == null || f.call(n, g), !g.defaultPrevented && t && (g.preventDefault(), t()));
  }
  function c(g) {
    if (!e)
      return !1;
    const f = typeof r == "function" ? r() : r;
    return (Array.isArray(f) ? f : [f]).some((v) => ct(v, g)) || oe.isInNestedLayer(e, g);
  }
  const d = [
    i ? ds(e) : void 0,
    ls(e, s),
    yr(e, { exclude: c, onFocusOutside: u, onPointerDownOutside: l })
  ];
  return () => {
    oe.remove(e), Li(), us(e), d.forEach((g) => g == null ? void 0 : g());
  };
}
function Sr(e, n) {
  const { defer: t } = n, i = t ? z : (o) => o(), r = [];
  return r.push(
    i(() => {
      const o = typeof e == "function" ? e() : e;
      r.push(fs(o, n));
    })
  ), () => {
    r.forEach((o) => o == null ? void 0 : o());
  };
}
function ps(e) {
  return gs(e) ? e.form : e.closest("form");
}
function gs(e) {
  return e.matches("textarea, input, select, button");
}
function hs(e, n) {
  if (!e)
    return;
  const t = ps(e);
  return t == null || t.addEventListener("reset", n, { passive: !0 }), () => {
    t == null || t.removeEventListener("reset", n);
  };
}
function vs(e, n) {
  const t = e == null ? void 0 : e.closest("fieldset");
  if (t)
    return n(t.disabled), Ut(t, ["disabled"], () => n(t.disabled));
}
function bs(e, n) {
  if (!e)
    return;
  const { onFieldsetDisabled: t, onFormReset: i } = n, r = [
    hs(e, i),
    vs(e, (o) => {
      o && t();
    })
  ];
  return () => {
    r.forEach((o) => o == null ? void 0 : o());
  };
}
var ms = (e) => e.ownerDocument.defaultView || window;
function ys(e, n) {
  const { type: t, property: i = "value" } = n, r = ms(e)[t].prototype;
  return Object.getOwnPropertyDescriptor(r, i) ?? {};
}
function Es(e, n, t) {
  var r;
  (r = ys(e, t).set) == null || r.call(e, n);
}
function Os(e) {
  const n = Ae(e);
  return We(
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
        typeahead: xt.defaultOptions,
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
        selectedId: (t) => t.selectedOption ? D.getOptionId(t, t.selectedOption.value) : null,
        highlightedId: (t) => t.highlightedOption ? D.getOptionId(t, t.highlightedOption.value) : null,
        hasSelectedChanged: (t) => {
          var i, r;
          return ((i = t.selectedOption) == null ? void 0 : i.value) !== ((r = t.prevSelectedOption) == null ? void 0 : r.value);
        },
        hasHighlightedChanged: (t) => {
          var i, r;
          return ((i = t.highlightedOption) == null ? void 0 : i.value) !== ((r = t.prevHighlightedOption) == null ? void 0 : r.value);
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
          return qa(D.getContentElement(t), {
            triggerElement: D.getTriggerElement(t),
            onFocus(i) {
              z(() => i.focus({ preventScroll: !0 }));
            }
          });
        },
        trackFormControlState(t) {
          return bs(D.getHiddenSelectElement(t), {
            onFieldsetDisabled() {
              t.disabled = !0;
            },
            onFormReset() {
              t.prevSelectedOption = t.selectedOption, t.selectedOption = t.initialSelectedOption;
            }
          });
        },
        trackInteractOutside(t, i, { send: r }) {
          let o = !1;
          return Sr(D.getContentElement(t), {
            exclude: [D.getTriggerElement(t)],
            onInteractOutside(a) {
              var l;
              o = a.detail.focusable, (l = t.onInteractOutside) == null || l.call(t, a);
            },
            onDismiss() {
              r({ type: "BLUR", src: "interact-outside", focusable: o });
            }
          });
        },
        computePlacement(t) {
          return t.currentPlacement = t.positioning.placement, ar(D.getTriggerElement(t), D.getPositionerElement(t), {
            ...t.positioning,
            onComplete(i) {
              t.currentPlacement = i.placement;
            }
          });
        },
        scrollToHighlightedOption(t, i, { getState: r }) {
          const o = () => {
            if (r().event.type === "POINTER_MOVE")
              return;
            const l = D.getHighlightedOption(t);
            l == null || l.scrollIntoView({ block: "nearest" });
          };
          return z(() => {
            o();
          }), Ut(D.getContentElement(t), ["aria-activedescendant"], o);
        }
      },
      actions: {
        setInitialSelectedOption(t) {
          t.initialSelectedOption = t.selectedOption;
        },
        highlightPreviousOption(t) {
          if (!t.highlightedId)
            return;
          const i = D.getPreviousOption(t, t.highlightedId);
          xe(t, i);
        },
        highlightNextOption(t) {
          if (!t.highlightedId)
            return;
          const i = D.getNextOption(t, t.highlightedId);
          xe(t, i);
        },
        highlightFirstOption(t) {
          const i = D.getFirstOption(t);
          xe(t, i);
        },
        highlightLastOption(t) {
          const i = D.getLastOption(t);
          xe(t, i);
        },
        focusContent(t) {
          z(() => {
            var i;
            (i = D.getContentElement(t)) == null || i.focus({ preventScroll: !0 });
          });
        },
        focusTrigger(t, i) {
          i.focusable || z(() => {
            var r;
            (r = D.getTriggerElement(t)) == null || r.focus({ preventScroll: !0 });
          });
        },
        selectHighlightedOption(t, i) {
          const r = i.id ?? t.highlightedId;
          if (!r)
            return;
          const o = D.getById(t, r);
          Ne(t, o);
        },
        selectFirstOption(t) {
          const i = D.getFirstOption(t);
          Ne(t, i);
        },
        selectLastOption(t) {
          const i = D.getLastOption(t);
          Ne(t, i);
        },
        selectNextOption(t) {
          if (!t.selectedId)
            return;
          const i = D.getNextOption(t, t.selectedId);
          Ne(t, i);
        },
        selectPreviousOption(t) {
          if (!t.selectedId)
            return;
          const i = D.getPreviousOption(t, t.selectedId);
          Ne(t, i);
        },
        highlightSelectedOption(t) {
          t.selectedOption && (t.prevHighlightedOption = t.highlightedOption, t.highlightedOption = t.selectedOption);
        },
        highlightOption(t, i) {
          const r = i.target ?? D.getById(t, i.id);
          xe(t, r);
        },
        highlightMatchingOption(t, i) {
          const r = D.getMatchingOption(t, i.key, t.highlightedId);
          xe(t, r);
        },
        selectMatchingOption(t, i) {
          const r = D.getMatchingOption(t, i.key, t.selectedId);
          Ne(t, r);
        },
        setHighlightedOption(t, i) {
          i.value && (t.prevHighlightedOption = t.highlightedOption, t.highlightedOption = i.value);
        },
        clearHighlightedOption(t) {
          t.highlightedOption = null;
        },
        setSelectedOption(t, i) {
          i.value && (t.prevSelectedOption = t.selectedOption, t.selectedOption = i.value);
        },
        clearSelectedOption(t) {
          t.selectedOption = null;
        },
        scrollContentToTop(t) {
          var i;
          (i = D.getContentElement(t)) == null || i.scrollTo(0, 0);
        },
        invokeOnOpen(t) {
          var i;
          (i = t.onOpen) == null || i.call(t);
        },
        invokeOnClose(t) {
          var i;
          (i = t.onClose) == null || i.call(t);
        },
        invokeOnHighlight(t) {
          var i;
          t.hasHighlightedChanged && ((i = t.onHighlight) == null || i.call(t, ai(t.highlightedOption)));
        },
        invokeOnSelect(t) {
          var i;
          t.hasSelectedChanged && ((i = t.onChange) == null || i.call(t, ai(t.selectedOption)));
        },
        syncSelectValue(t) {
          const i = t.selectedOption, r = D.getHiddenSelectElement(t);
          !r || !i || Es(r, i.value, { type: "HTMLSelectElement" });
        },
        dispatchChangeEvent(t) {
          const i = D.getHiddenSelectElement(t);
          if (!i)
            return;
          const r = D.getWin(t), o = new r.Event("change", { bubbles: !0 });
          i.dispatchEvent(o);
        }
      }
    }
  );
}
function xe(e, n) {
  n && (e.prevHighlightedOption = e.highlightedOption, e.highlightedOption = D.getOptionDetails(n));
}
function Ne(e, n) {
  n && (e.prevSelectedOption = e.selectedOption, e.selectedOption = D.getOptionDetails(n));
}
const xc = ({ options: e, part: n, placeholder: t, ...i }) => {
  var l, u, s;
  const [r, o] = ht(Os({ id: pt(), ...i })), a = cs(r, o, Ke);
  return /* @__PURE__ */ $.jsxs("div", { children: [
    /* @__PURE__ */ $.jsx("select", { ...a.hiddenSelectProps, children: e.map((c) => /* @__PURE__ */ $.jsx("option", { value: c.value, children: c.label }, c.value)) }),
    /* @__PURE__ */ $.jsx(
      "button",
      {
        ...a.triggerProps,
        className: re("select items-center data-[invalid]:select-error", (l = n == null ? void 0 : n.trigger) == null ? void 0 : l.className),
        children: ((u = a.selectedOption) == null ? void 0 : u.label) ?? t
      }
    ),
    /* @__PURE__ */ $.jsx(Ir, { children: /* @__PURE__ */ $.jsx("div", { ...a.positionerProps, className: "z-50", children: /* @__PURE__ */ $.jsx(
      "ul",
      {
        ...a.contentProps,
        className: re(
          "menu max-h-60 overflow-y-auto flex-nowrap",
          !a.isOpen && "hidden",
          (s = n == null ? void 0 : n.content) == null ? void 0 : s.className
        ),
        children: e.map((c) => {
          var d, g;
          return /* @__PURE__ */ Me(
            "li",
            {
              ...a.getOptionProps(c),
              className: re(c.disabled && "disabled", (d = n == null ? void 0 : n.option) == null ? void 0 : d.className),
              key: c.value
            },
            /* @__PURE__ */ $.jsx("a", { className: re(c.value === ((g = a.selectedOption) == null ? void 0 : g.value) && "active"), children: c.label })
          );
        })
      }
    ) }) })
  ] });
};
var Ts = ye("dialog").parts(
  "trigger",
  "backdrop",
  "container",
  "content",
  "title",
  "description",
  "closeTrigger"
), Ie = Ts.build(), W = gt({
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
  getContentEl: (e) => W.getById(e, W.getContentId(e)),
  getTriggerEl: (e) => W.getById(e, W.getTriggerId(e)),
  getContainerEl: (e) => W.getById(e, W.getContainerId(e)),
  getTitleEl: (e) => W.getById(e, W.getTitleId(e)),
  getDescriptionEl: (e) => W.getById(e, W.getDescriptionId(e))
});
function ws(e, n, t) {
  const i = e.context["aria-label"], r = e.matches("open"), o = e.context.renderedElements;
  return {
    /**
     * Whether the dialog is open
     */
    isOpen: r,
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
      ...Ie.trigger.attrs,
      id: W.getTriggerId(e.context),
      "aria-haspopup": "dialog",
      type: "button",
      "aria-expanded": r,
      "aria-controls": W.getContentId(e.context),
      onClick() {
        n("TOGGLE");
      }
    }),
    backdropProps: t.element({
      ...Ie.backdrop.attrs,
      hidden: !r,
      id: W.getBackdropId(e.context)
    }),
    containerProps: t.element({
      ...Ie.container.attrs,
      hidden: !r,
      id: W.getContainerId(e.context),
      style: {
        pointerEvents: r ? void 0 : "none"
      }
    }),
    contentProps: t.element({
      ...Ie.content.attrs,
      role: e.context.role,
      hidden: !r,
      id: W.getContentId(e.context),
      tabIndex: -1,
      "aria-modal": !0,
      "aria-label": i || void 0,
      "aria-labelledby": i || !o.title ? void 0 : W.getTitleId(e.context),
      "aria-describedby": o.description ? W.getDescriptionId(e.context) : void 0
    }),
    titleProps: t.element({
      ...Ie.title.attrs,
      id: W.getTitleId(e.context)
    }),
    descriptionProps: t.element({
      ...Ie.description.attrs,
      id: W.getDescriptionId(e.context)
    }),
    closeTriggerProps: t.button({
      ...Ie.closeTrigger.attrs,
      id: W.getCloseTriggerId(e.context),
      type: "button",
      onClick(a) {
        a.stopPropagation(), n("CLOSE");
      }
    })
  };
}
var fn = "data-zag-scroll-lock";
function ki(e, n) {
  if (!e)
    return () => {
    };
  const t = e.style.cssText;
  return Object.assign(e.style, n), () => {
    e.style.cssText = t;
  };
}
function Is(e, n, t) {
  if (!e)
    return () => {
    };
  const i = e.style.getPropertyValue(n);
  return e.style.setProperty(n, t), () => {
    i ? e.style.setProperty(n, i) : e.style.removeProperty(n);
  };
}
function Cs(e) {
  const n = e.getBoundingClientRect().left;
  return Math.round(n) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Ss(e) {
  const n = e ?? document, t = n.defaultView ?? window, { documentElement: i, body: r } = n;
  if (r.hasAttribute(fn))
    return;
  r.setAttribute(fn, "");
  const a = t.innerWidth - i.clientWidth, l = () => Is(i, "--scrollbar-width", `${a}px`), u = Cs(i), s = () => ki(r, {
    overflow: "hidden",
    [u]: `${a}px`
  }), c = () => {
    const { scrollX: g, scrollY: f, visualViewport: h } = t, v = (h == null ? void 0 : h.offsetLeft) ?? 0, m = (h == null ? void 0 : h.offsetTop) ?? 0, O = ki(r, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(f - Math.floor(m))}px`,
      left: `${-(g - Math.floor(v))}px`,
      right: "0",
      [u]: `${a}px`
    });
    return () => {
      O(), t.scrollTo(g, f);
    };
  }, d = [l(), Io() ? c() : s()];
  return () => {
    d.forEach((g) => g()), r.removeAttribute(fn);
  };
}
/*!
* tabbable 6.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Rr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Wt = /* @__PURE__ */ Rr.join(","), Pr = typeof Element > "u", Pe = Pr ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Kt = !Pr && Element.prototype.getRootNode ? function(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, Gt = function e(n, t) {
  var i;
  t === void 0 && (t = !0);
  var r = n == null || (i = n.getAttribute) === null || i === void 0 ? void 0 : i.call(n, "inert"), o = r === "" || r === "true", a = o || t && n && e(n.parentNode);
  return a;
}, Rs = function(n) {
  var t, i = n == null || (t = n.getAttribute) === null || t === void 0 ? void 0 : t.call(n, "contenteditable");
  return i === "" || i === "true";
}, Ar = function(n, t, i) {
  if (Gt(n))
    return [];
  var r = Array.prototype.slice.apply(n.querySelectorAll(Wt));
  return t && Pe.call(n, Wt) && r.unshift(n), r = r.filter(i), r;
}, Dr = function e(n, t, i) {
  for (var r = [], o = Array.from(n); o.length; ) {
    var a = o.shift();
    if (!Gt(a, !1))
      if (a.tagName === "SLOT") {
        var l = a.assignedElements(), u = l.length ? l : a.children, s = e(u, !0, i);
        i.flatten ? r.push.apply(r, s) : r.push({
          scopeParent: a,
          candidates: s
        });
      } else {
        var c = Pe.call(a, Wt);
        c && i.filter(a) && (t || !n.includes(a)) && r.push(a);
        var d = a.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(a), g = !Gt(d, !1) && (!i.shadowRootFilter || i.shadowRootFilter(a));
        if (d && g) {
          var f = e(d === !0 ? a.children : d.children, !0, i);
          i.flatten ? r.push.apply(r, f) : r.push({
            scopeParent: a,
            candidates: f
          });
        } else
          o.unshift.apply(o, a.children);
      }
  }
  return r;
}, Lr = function(n, t) {
  return n.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(n.tagName) || Rs(n)) && isNaN(parseInt(n.getAttribute("tabindex"), 10)) ? 0 : n.tabIndex;
}, Ps = function(n, t) {
  return n.tabIndex === t.tabIndex ? n.documentOrder - t.documentOrder : n.tabIndex - t.tabIndex;
}, kr = function(n) {
  return n.tagName === "INPUT";
}, As = function(n) {
  return kr(n) && n.type === "hidden";
}, Ds = function(n) {
  var t = n.tagName === "DETAILS" && Array.prototype.slice.apply(n.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return t;
}, Ls = function(n, t) {
  for (var i = 0; i < n.length; i++)
    if (n[i].checked && n[i].form === t)
      return n[i];
}, ks = function(n) {
  if (!n.name)
    return !0;
  var t = n.form || Kt(n), i = function(l) {
    return t.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, r;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    r = i(window.CSS.escape(n.name));
  else
    try {
      r = i(n.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var o = Ls(r, n.form);
  return !o || o === n;
}, xs = function(n) {
  return kr(n) && n.type === "radio";
}, Ns = function(n) {
  return xs(n) && !ks(n);
}, _s = function(n) {
  var t, i = n && Kt(n), r = (t = i) === null || t === void 0 ? void 0 : t.host, o = !1;
  if (i && i !== n) {
    var a, l, u;
    for (o = !!((a = r) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(r) || n != null && (u = n.ownerDocument) !== null && u !== void 0 && u.contains(n)); !o && r; ) {
      var s, c, d;
      i = Kt(r), r = (s = i) === null || s === void 0 ? void 0 : s.host, o = !!((c = r) !== null && c !== void 0 && (d = c.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, xi = function(n) {
  var t = n.getBoundingClientRect(), i = t.width, r = t.height;
  return i === 0 && r === 0;
}, Fs = function(n, t) {
  var i = t.displayCheck, r = t.getShadowRoot;
  if (getComputedStyle(n).visibility === "hidden")
    return !0;
  var o = Pe.call(n, "details>summary:first-of-type"), a = o ? n.parentElement : n;
  if (Pe.call(a, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || i === "legacy-full") {
    if (typeof r == "function") {
      for (var l = n; n; ) {
        var u = n.parentElement, s = Kt(n);
        if (u && !u.shadowRoot && r(u) === !0)
          return xi(n);
        n.assignedSlot ? n = n.assignedSlot : !u && s !== n.ownerDocument ? n = s.host : n = u;
      }
      n = l;
    }
    if (_s(n))
      return !n.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return xi(n);
  return !1;
}, Vs = function(n) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))
    for (var t = n.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var i = 0; i < t.children.length; i++) {
          var r = t.children.item(i);
          if (r.tagName === "LEGEND")
            return Pe.call(t, "fieldset[disabled] *") ? !0 : !r.contains(n);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, zt = function(n, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Gt(t) || As(t) || Fs(t, n) || // For a details element with a summary, the summary element gets the focus
  Ds(t) || Vs(t));
}, In = function(n, t) {
  return !(Ns(t) || Lr(t) < 0 || !zt(n, t));
}, $s = function(n) {
  var t = parseInt(n.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, Ms = function e(n) {
  var t = [], i = [];
  return n.forEach(function(r, o) {
    var a = !!r.scopeParent, l = a ? r.scopeParent : r, u = Lr(l, a), s = a ? e(r.candidates) : l;
    u === 0 ? a ? t.push.apply(t, s) : t.push(l) : i.push({
      documentOrder: o,
      tabIndex: u,
      item: r,
      isScope: a,
      content: s
    });
  }), i.sort(Ps).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(t);
}, js = function(n, t) {
  t = t || {};
  var i;
  return t.getShadowRoot ? i = Dr([n], t.includeContainer, {
    filter: In.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: $s
  }) : i = Ar(n, t.includeContainer, In.bind(null, t)), Ms(i);
}, Bs = function(n, t) {
  t = t || {};
  var i;
  return t.getShadowRoot ? i = Dr([n], t.includeContainer, {
    filter: zt.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : i = Ar(n, t.includeContainer, zt.bind(null, t)), i;
}, Pt = function(n, t) {
  if (t = t || {}, !n)
    throw new Error("No node provided");
  return Pe.call(n, Wt) === !1 ? !1 : In(t, n);
}, Hs = /* @__PURE__ */ Rr.concat("iframe").join(","), Ni = function(n, t) {
  if (t = t || {}, !n)
    throw new Error("No node provided");
  return Pe.call(n, Hs) === !1 ? !1 : zt(t, n);
};
/*!
* focus-trap 7.4.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _i(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    n && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Fi(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? _i(Object(t), !0).forEach(function(i) {
      Us(e, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _i(Object(t)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return e;
}
function Us(e, n, t) {
  return n = Ks(n), n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Ws(e, n) {
  if (typeof e != "object" || e === null)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, n || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Ks(e) {
  var n = Ws(e, "string");
  return typeof n == "symbol" ? n : String(n);
}
var Vi = {
  activateTrap: function(n, t) {
    if (n.length > 0) {
      var i = n[n.length - 1];
      i !== t && i.pause();
    }
    var r = n.indexOf(t);
    r === -1 || n.splice(r, 1), n.push(t);
  },
  deactivateTrap: function(n, t) {
    var i = n.indexOf(t);
    i !== -1 && n.splice(i, 1), n.length > 0 && n[n.length - 1].unpause();
  }
}, Gs = function(n) {
  return n.tagName && n.tagName.toLowerCase() === "input" && typeof n.select == "function";
}, zs = function(n) {
  return n.key === "Escape" || n.key === "Esc" || n.keyCode === 27;
}, at = function(n) {
  return n.key === "Tab" || n.keyCode === 9;
}, Ys = function(n) {
  return at(n) && !n.shiftKey;
}, qs = function(n) {
  return at(n) && n.shiftKey;
}, $i = function(n) {
  return setTimeout(n, 0);
}, Mi = function(n, t) {
  var i = -1;
  return n.every(function(r, o) {
    return t(r) ? (i = o, !1) : !0;
  }), i;
}, et = function(n) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    i[r - 1] = arguments[r];
  return typeof n == "function" ? n.apply(void 0, i) : n;
}, At = function(n) {
  return n.target.shadowRoot && typeof n.composedPath == "function" ? n.composedPath()[0] : n.target;
}, Xs = [], Js = function(n, t) {
  var i = (t == null ? void 0 : t.document) || document, r = (t == null ? void 0 : t.trapStack) || Xs, o = Fi({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Ys,
    isKeyBackward: qs
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
  }, l, u = function(b, E, y) {
    return b && b[E] !== void 0 ? b[E] : o[y || E];
  }, s = function(b) {
    return a.containerGroups.findIndex(function(E) {
      var y = E.container, S = E.tabbableNodes;
      return y.contains(b) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      S.find(function(I) {
        return I === b;
      });
    });
  }, c = function(b) {
    var E = o[b];
    if (typeof E == "function") {
      for (var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), I = 1; I < y; I++)
        S[I - 1] = arguments[I];
      E = E.apply(void 0, S);
    }
    if (E === !0 && (E = void 0), !E) {
      if (E === void 0 || E === !1)
        return E;
      throw new Error("`".concat(b, "` was specified but was not a node, or did not return a node"));
    }
    var x = E;
    if (typeof E == "string" && (x = i.querySelector(E), !x))
      throw new Error("`".concat(b, "` as selector refers to no known node"));
    return x;
  }, d = function() {
    var b = c("initialFocus");
    if (b === !1)
      return !1;
    if (b === void 0)
      if (s(i.activeElement) >= 0)
        b = i.activeElement;
      else {
        var E = a.tabbableGroups[0], y = E && E.firstTabbableNode;
        b = y || c("fallbackFocus");
      }
    if (!b)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return b;
  }, g = function() {
    if (a.containerGroups = a.containers.map(function(b) {
      var E = js(b, o.tabbableOptions), y = Bs(b, o.tabbableOptions);
      return {
        container: b,
        tabbableNodes: E,
        focusableNodes: y,
        firstTabbableNode: E.length > 0 ? E[0] : null,
        lastTabbableNode: E.length > 0 ? E[E.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(I) {
          var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, V = y.findIndex(function(H) {
            return H === I;
          });
          if (!(V < 0))
            return x ? y.slice(V + 1).find(function(H) {
              return Pt(H, o.tabbableOptions);
            }) : y.slice(0, V).reverse().find(function(H) {
              return Pt(H, o.tabbableOptions);
            });
        }
      };
    }), a.tabbableGroups = a.containerGroups.filter(function(b) {
      return b.tabbableNodes.length > 0;
    }), a.tabbableGroups.length <= 0 && !c("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
  }, f = function L(b) {
    if (b !== !1 && b !== i.activeElement) {
      if (!b || !b.focus) {
        L(d());
        return;
      }
      b.focus({
        preventScroll: !!o.preventScroll
      }), a.mostRecentlyFocusedNode = b, Gs(b) && b.select();
    }
  }, h = function(b) {
    var E = c("setReturnFocus", b);
    return E || (E === !1 ? !1 : b);
  }, v = function(b) {
    var E = At(b);
    if (!(s(E) >= 0)) {
      if (et(o.clickOutsideDeactivates, b)) {
        l.deactivate({
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
      et(o.allowOutsideClick, b) || b.preventDefault();
    }
  }, m = function(b) {
    var E = At(b), y = s(E) >= 0;
    y || E instanceof Document ? y && (a.mostRecentlyFocusedNode = E) : (b.stopImmediatePropagation(), f(a.mostRecentlyFocusedNode || d()));
  }, O = function(b) {
    var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, y = At(b);
    g();
    var S = null;
    if (a.tabbableGroups.length > 0) {
      var I = s(y), x = I >= 0 ? a.containerGroups[I] : void 0;
      if (I < 0)
        E ? S = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : S = a.tabbableGroups[0].firstTabbableNode;
      else if (E) {
        var V = Mi(a.tabbableGroups, function(ve) {
          var ue = ve.firstTabbableNode;
          return y === ue;
        });
        if (V < 0 && (x.container === y || Ni(y, o.tabbableOptions) && !Pt(y, o.tabbableOptions) && !x.nextTabbableNode(y, !1)) && (V = I), V >= 0) {
          var H = V === 0 ? a.tabbableGroups.length - 1 : V - 1, Y = a.tabbableGroups[H];
          S = Y.lastTabbableNode;
        } else
          at(b) || (S = x.nextTabbableNode(y, !1));
      } else {
        var G = Mi(a.tabbableGroups, function(ve) {
          var ue = ve.lastTabbableNode;
          return y === ue;
        });
        if (G < 0 && (x.container === y || Ni(y, o.tabbableOptions) && !Pt(y, o.tabbableOptions) && !x.nextTabbableNode(y)) && (G = I), G >= 0) {
          var J = G === a.tabbableGroups.length - 1 ? 0 : G + 1, he = a.tabbableGroups[J];
          S = he.firstTabbableNode;
        } else
          at(b) || (S = x.nextTabbableNode(y));
      }
    } else
      S = c("fallbackFocus");
    S && (at(b) && b.preventDefault(), f(S));
  }, T = function(b) {
    if (zs(b) && et(o.escapeDeactivates, b) !== !1) {
      b.preventDefault(), l.deactivate();
      return;
    }
    (o.isKeyForward(b) || o.isKeyBackward(b)) && O(b, o.isKeyBackward(b));
  }, C = function(b) {
    var E = At(b);
    s(E) >= 0 || et(o.clickOutsideDeactivates, b) || et(o.allowOutsideClick, b) || (b.preventDefault(), b.stopImmediatePropagation());
  }, k = function() {
    if (a.active)
      return Vi.activateTrap(r, l), a.delayInitialFocusTimer = o.delayInitialFocus ? $i(function() {
        f(d());
      }) : f(d()), i.addEventListener("focusin", m, !0), i.addEventListener("mousedown", v, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", v, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", C, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", T, {
        capture: !0,
        passive: !1
      }), l;
  }, F = function() {
    if (a.active)
      return i.removeEventListener("focusin", m, !0), i.removeEventListener("mousedown", v, !0), i.removeEventListener("touchstart", v, !0), i.removeEventListener("click", C, !0), i.removeEventListener("keydown", T, !0), l;
  };
  return l = {
    get active() {
      return a.active;
    },
    get paused() {
      return a.paused;
    },
    activate: function(b) {
      if (a.active)
        return this;
      var E = u(b, "onActivate"), y = u(b, "onPostActivate"), S = u(b, "checkCanFocusTrap");
      S || g(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = i.activeElement, E == null || E();
      var I = function() {
        S && g(), k(), y == null || y();
      };
      return S ? (S(a.containers.concat()).then(I, I), this) : (I(), this);
    },
    deactivate: function(b) {
      if (!a.active)
        return this;
      var E = Fi({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, b);
      clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, F(), a.active = !1, a.paused = !1, Vi.deactivateTrap(r, l);
      var y = u(E, "onDeactivate"), S = u(E, "onPostDeactivate"), I = u(E, "checkCanReturnFocus"), x = u(E, "returnFocus", "returnFocusOnDeactivate");
      y == null || y();
      var V = function() {
        $i(function() {
          x && f(h(a.nodeFocusedBeforeActivation)), S == null || S();
        });
      };
      return x && I ? (I(h(a.nodeFocusedBeforeActivation)).then(V, V), this) : (V(), this);
    },
    pause: function(b) {
      if (a.paused || !a.active)
        return this;
      var E = u(b, "onPause"), y = u(b, "onPostPause");
      return a.paused = !0, E == null || E(), F(), y == null || y(), this;
    },
    unpause: function(b) {
      if (!a.paused || !a.active)
        return this;
      var E = u(b, "onUnpause"), y = u(b, "onPostUnpause");
      return a.paused = !1, E == null || E(), g(), k(), y == null || y(), this;
    },
    updateContainerElements: function(b) {
      var E = [].concat(b).filter(Boolean);
      return a.containers = E.map(function(y) {
        return typeof y == "string" ? i.querySelector(y) : y;
      }), a.active && g(), this;
    }
  }, l.updateContainerElements(n), l;
};
function Zs(e) {
  const n = Ae(e);
  return We(
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
        trackDismissableElement(t, i, { send: r }) {
          return Sr(() => W.getContentEl(t), {
            defer: !0,
            pointerBlocking: t.modal,
            exclude: [W.getTriggerEl(t)],
            onDismiss() {
              r({ type: "CLOSE", src: "interact-outside" });
            },
            onEscapeKeyDown(a) {
              var l;
              t.closeOnEsc ? r({ type: "CLOSE", src: "escape-key" }) : a.preventDefault(), (l = t.onEsc) == null || l.call(t);
            },
            onPointerDownOutside(a) {
              var l;
              t.closeOnOutsideClick || a.preventDefault(), (l = t.onOutsideClick) == null || l.call(t);
            }
          });
        },
        preventScroll(t) {
          if (t.preventScroll)
            return Ss(W.getDoc(t));
        },
        trapFocus(t) {
          if (!t.trapFocus)
            return;
          let i;
          return gn(() => {
            const r = W.getContentEl(t);
            if (r) {
              i = Js(r, {
                document: W.getDoc(t),
                escapeDeactivates: !1,
                returnFocusOnDeactivate: !1,
                fallbackFocus: r,
                allowOutsideClick: !0,
                initialFocus: Nt(t.initialFocusEl)
              });
              try {
                i.activate();
              } catch {
              }
            }
          }), () => i == null ? void 0 : i.deactivate();
        },
        hideContentBelow(t) {
          return t.modal ? cr(() => [W.getContainerEl(t)], { defer: !0 }) : void 0;
        }
      },
      actions: {
        checkRenderedElements(t) {
          z(() => {
            t.renderedElements.title = !!W.getTitleEl(t), t.renderedElements.description = !!W.getDescriptionEl(t);
          });
        },
        invokeOnClose(t) {
          var i;
          (i = t.onClose) == null || i.call(t);
        },
        invokeOnOpen(t) {
          var i;
          (i = t.onOpen) == null || i.call(t);
        },
        toggleVisibility(t, i, { send: r }) {
          r({ type: t.open ? "OPEN" : "CLOSE", src: "controlled" });
        },
        restoreFocus(t) {
          t.restoreFocus && z(() => {
            const i = Nt(t.finalFocusEl) ?? W.getTriggerEl(t);
            i == null || i.focus({ preventScroll: !0 });
          });
        }
      }
    }
  );
}
const Nc = ({ children: e, trigger: n, ...t }) => {
  const [i, r] = ht(Zs({ id: pt(), ...t })), o = ws(i, r, Ke);
  return /* @__PURE__ */ $.jsxs($.Fragment, { children: [
    n(o.triggerProps),
    /* @__PURE__ */ $.jsxs(Ir, { children: [
      /* @__PURE__ */ $.jsx("input", { type: "checkbox", className: "modal-toggle", checked: o.isOpen, readOnly: !0 }),
      /* @__PURE__ */ $.jsx("div", { ...o.backdropProps, className: "modal", children: /* @__PURE__ */ $.jsxs("div", { ...o.contentProps, className: "modal-box", children: [
        e,
        /* @__PURE__ */ $.jsx("footer", { className: "modal-action", children: /* @__PURE__ */ $.jsx("button", { ...o.closeTriggerProps, className: "btn", children: "Close" }) })
      ] }) })
    ] })
  ] });
};
var Qs = ye("toast").parts("group", "root", "title", "description", "closeTrigger"), nt = Qs.build();
function ec(e) {
  const n = {};
  for (const t of e) {
    const i = t.state.context.placement;
    n[i] || (n[i] = []), n[i].push(t);
  }
  return n;
}
var tc = {
  info: 5e3,
  error: 5e3,
  success: 2e3,
  loading: 1 / 0,
  custom: 5e3
};
function ji(e, n) {
  return e ?? tc[n];
}
function nc(e, n) {
  const t = e.offsets, i = typeof t == "string" ? { left: t, right: t, bottom: t, top: t } : t, r = e.dir === "rtl", o = n.replace("-start", r ? "-right" : "-left").replace("-end", r ? "-left" : "-right"), a = o.includes("right"), l = o.includes("left"), u = {
    position: "fixed",
    pointerEvents: e.count > 0 ? void 0 : "none",
    display: "flex",
    flexDirection: "column",
    "--toast-gutter": e.gutter,
    zIndex: e.zIndex
  };
  let s = "center";
  if (a && (s = "flex-end"), l && (s = "flex-start"), u.alignItems = s, o.includes("top")) {
    const c = i.top;
    u.top = `calc(env(safe-area-inset-top, 0px) + ${c})`;
  }
  if (o.includes("bottom")) {
    const c = i.bottom;
    u.bottom = `calc(env(safe-area-inset-bottom, 0px) + ${c})`;
  }
  if (!o.includes("left")) {
    const c = i.right;
    u.right = `calc(env(safe-area-inset-right, 0px) + ${c})`;
  }
  if (!o.includes("right")) {
    const c = i.left;
    u.left = `calc(env(safe-area-inset-left, 0px) + ${c})`;
  }
  return u;
}
var Ve = gt({
  getGroupId: (e) => `toast-group:${e}`,
  getRootId: (e) => `toast:${e.id}`,
  getTitleId: (e) => `toast:${e.id}:title`,
  getDescriptionId: (e) => `toast:${e.id}:description`,
  getCloseTriggerId: (e) => `toast${e.id}:close`,
  getPortalId: (e) => `toast-portal:${e.id}`
}), ic = {};
function rc(e, n, t) {
  const i = {
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
    toastsByPlacement: ec(e.context.toasts),
    /**
     * Returns whether the toast id is visible
     */
    isVisible(r) {
      return e.context.toasts.length ? !!e.context.toasts.find((o) => o.id == r) : !1;
    },
    /**
     * Function to create a toast.
     */
    create(r) {
      const o = `toast:${_o()}`, a = r.id ? r.id : o;
      if (!i.isVisible(a))
        return n({ type: "ADD_TOAST", toast: { ...r, id: a } }), a;
    },
    /**
     * Function to create or update a toast.
     */
    upsert(r) {
      const { id: o } = r;
      return (o ? i.isVisible(o) : !1) && o != null ? i.update(o, r) : i.create(r);
    },
    /**
     * Function to dismiss a toast by id.
     * If no id is provided, all toasts will be dismissed.
     */
    dismiss(r) {
      r == null ? n("DISMISS_ALL") : i.isVisible(r) && n({ type: "DISMISS_TOAST", id: r });
    },
    /**
     * Function to remove a toast by id.
     * If no id is provided, all toasts will be removed.
     */
    remove(r) {
      r == null ? n("REMOVE_ALL") : i.isVisible(r) && n({ type: "REMOVE_TOAST", id: r });
    },
    /**
     * Function to dismiss all toasts by placement.
     */
    dismissByPlacement(r) {
      const o = i.toastsByPlacement[r];
      o && o.forEach((a) => i.dismiss(a.id));
    },
    /**
     * Function to update a toast's options by id.
     */
    update(r, o) {
      if (i.isVisible(r))
        return n({ type: "UPDATE_TOAST", id: r, toast: o }), r;
    },
    /**
     * Function to create a loading toast.
     */
    loading(r) {
      return r.type = "loading", i.upsert(r);
    },
    /**
     * Function to create a success toast.
     */
    success(r) {
      return r.type = "success", i.upsert(r);
    },
    /**
     * Function to create an error toast.
     */
    error(r) {
      return r.type = "error", i.upsert(r);
    },
    /**
     * Function to create a toast from a promise.
     * - When the promise resolves, the toast will be updated with the success options.
     * - When the promise rejects, the toast will be updated with the error options.
     */
    promise(r, o, a = {}) {
      const l = i.loading({ ...a, ...o.loading });
      return r.then((u) => {
        const s = Nt(o.success, u);
        i.success({ ...a, ...s, id: l });
      }).catch((u) => {
        const s = Nt(o.error, u);
        i.error({ ...a, ...s, id: l });
      }), r;
    },
    /**
     * Function to pause a toast by id.
     */
    pause(r) {
      r == null ? n("PAUSE_ALL") : i.isVisible(r) && n({ type: "PAUSE_TOAST", id: r });
    },
    /**
     * Function to resume a toast by id.
     */
    resume(r) {
      r == null ? n("RESUME_ALL") : i.isVisible(r) && n({ type: "RESUME_TOAST", id: r });
    },
    getGroupProps(r) {
      const { placement: o, label: a = "Notifications" } = r;
      return t.element({
        ...nt.group.attrs,
        tabIndex: -1,
        "aria-label": a,
        id: Ve.getGroupId(o),
        "data-placement": o,
        "aria-live": "polite",
        role: "region",
        style: nc(e.context, o)
      });
    },
    subscribe(r) {
      return dt(e.context.toasts, () => r(e.context.toasts));
    }
  };
  return Object.assign(ic, i), i;
}
var { not: oc, and: ac, or: sc } = Mn;
function cc(e = {}) {
  const { type: n = "info", duration: t, id: i = "toast", placement: r = "bottom", removeDelay: o = 0, ...a } = e, l = Ae(a), u = ji(t, n);
  return We(
    {
      id: i,
      entry: "invokeOnOpen",
      initial: n === "loading" ? "persist" : "active",
      context: {
        id: i,
        type: n,
        remaining: u,
        duration: u,
        removeDelay: o,
        createdAt: Date.now(),
        placement: r,
        ...l
      },
      on: {
        UPDATE: [
          {
            guard: ac("hasTypeChanged", "isChangingToLoading"),
            target: "persist",
            actions: ["setContext", "invokeOnUpdate"]
          },
          {
            guard: sc("hasDurationChanged", "hasTypeChanged"),
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
              guard: oc("isLoadingType"),
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
        trackDocumentVisibility(s, c, { send: d }) {
          if (!s.pauseOnPageIdle)
            return;
          const g = Ve.getDoc(s);
          return _t(g, "visibilitychange", () => {
            d(g.visibilityState === "hidden" ? "PAUSE" : "RESUME");
          });
        }
      },
      guards: {
        isChangingToLoading: (s, c) => {
          var d;
          return ((d = c.toast) == null ? void 0 : d.type) === "loading";
        },
        isLoadingType: (s) => s.type === "loading",
        hasTypeChanged: (s, c) => {
          var d;
          return ((d = c.toast) == null ? void 0 : d.type) !== s.type;
        },
        hasDurationChanged: (s, c) => {
          var d;
          return ((d = c.toast) == null ? void 0 : d.duration) !== s.duration;
        }
      },
      delays: {
        VISIBLE_DURATION: (s) => s.remaining,
        REMOVE_DELAY: (s) => s.removeDelay
      },
      actions: {
        setRemainingDuration(s) {
          s.remaining -= Date.now() - s.createdAt;
        },
        setCreatedAt(s) {
          s.createdAt = Date.now();
        },
        notifyParentToRemove(s, c, { self: d }) {
          d.sendParent({ type: "REMOVE_TOAST", id: d.id });
        },
        invokeOnClosing(s) {
          var c;
          (c = s.onClosing) == null || c.call(s);
        },
        invokeOnClose(s) {
          var c;
          (c = s.onClose) == null || c.call(s);
        },
        invokeOnOpen(s) {
          var c;
          (c = s.onOpen) == null || c.call(s);
        },
        invokeOnUpdate(s) {
          var c;
          (c = s.onUpdate) == null || c.call(s);
        },
        setContext(s, c) {
          const { duration: d, type: g } = c.toast, f = ji(d, g);
          Object.assign(s, { ...c.toast, duration: f, remaining: f });
        }
      }
    }
  );
}
function lc(e) {
  const n = Ae(e);
  return We({
    id: "toaster",
    initial: "active",
    context: {
      dir: "ltr",
      max: Number.MAX_SAFE_INTEGER,
      toasts: [],
      gutter: "1rem",
      zIndex: No,
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
        actions: (t, i, { self: r }) => {
          r.sendChild("PAUSE", i.id);
        }
      },
      PAUSE_ALL: {
        actions: (t) => {
          t.toasts.forEach((i) => i.send("PAUSE"));
        }
      },
      RESUME_TOAST: {
        actions: (t, i, { self: r }) => {
          r.sendChild("RESUME", i.id);
        }
      },
      RESUME_ALL: {
        actions: (t) => {
          t.toasts.forEach((i) => i.send("RESUME"));
        }
      },
      ADD_TOAST: {
        guard: (t) => t.toasts.length < t.max,
        actions: (t, i, { self: r }) => {
          const o = {
            ...i.toast,
            pauseOnPageIdle: t.pauseOnPageIdle,
            pauseOnInteraction: t.pauseOnInteraction,
            dir: t.dir,
            getRootNode: t.getRootNode
          }, a = cc(o), l = r.spawn(a);
          t.toasts.push(l);
        }
      },
      UPDATE_TOAST: {
        actions: (t, i, { self: r }) => {
          r.sendChild({ type: "UPDATE", toast: i.toast }, i.id);
        }
      },
      DISMISS_TOAST: {
        actions: (t, i, { self: r }) => {
          r.sendChild("DISMISS", i.id);
        }
      },
      DISMISS_ALL: {
        actions: (t) => {
          t.toasts.forEach((i) => i.send("DISMISS"));
        }
      },
      REMOVE_TOAST: {
        actions: (t, i, { self: r }) => {
          r.stopChild(i.id);
          const o = t.toasts.findIndex((a) => a.id === i.id);
          t.toasts.splice(o, 1);
        }
      },
      REMOVE_ALL: {
        actions: (t, i, { self: r }) => {
          for (t.toasts.forEach((o) => r.stopChild(o.id)); t.toasts.length; )
            t.toasts.pop();
        }
      }
    }
  });
}
function uc(e, n, t) {
  const i = e.hasTag("visible"), r = e.hasTag("paused"), o = e.context.pauseOnInteraction, a = e.context.placement;
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
    isVisible: i,
    /**
     * Whether the toast is paused.
     */
    isPaused: r,
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
      var l, u;
      return (u = (l = e.context).render) == null ? void 0 : u.call(l, {
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
      ...nt.root.attrs,
      dir: e.context.dir,
      id: Ve.getRootId(e.context),
      "data-open": B(i),
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
      onKeyDown(l) {
        l.key == "Escape" && (n("DISMISS"), l.preventDefault());
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
      ...nt.title.attrs,
      id: Ve.getTitleId(e.context)
    }),
    descriptionProps: t.element({
      ...nt.description.attrs,
      id: Ve.getDescriptionId(e.context)
    }),
    closeTriggerProps: t.button({
      id: Ve.getCloseTriggerId(e.context),
      ...nt.closeTrigger.attrs,
      type: "button",
      "aria-label": "Dismiss notification",
      onClick() {
        n("DISMISS");
      }
    })
  };
}
var Bi = {
  connect: rc,
  machine: lc
};
function dc({
  title: e,
  titleId: n,
  ...t
}, i) {
  return /* @__PURE__ */ Z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: i,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ Z.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ Z.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
  }));
}
const fc = Z.forwardRef(dc), pc = fc;
function gc({
  title: e,
  titleId: n,
  ...t
}, i) {
  return /* @__PURE__ */ Z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: i,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ Z.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ Z.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
  }));
}
const hc = Z.forwardRef(gc), vc = hc;
function bc({
  title: e,
  titleId: n,
  ...t
}, i) {
  return /* @__PURE__ */ Z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: i,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ Z.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ Z.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
    clipRule: "evenodd"
  }));
}
const mc = Z.forwardRef(bc), yc = mc;
function Ec({
  title: e,
  titleId: n,
  ...t
}, i) {
  return /* @__PURE__ */ Z.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: i,
    "aria-labelledby": n
  }, t), e ? /* @__PURE__ */ Z.createElement("title", {
    id: n
  }, e) : null, /* @__PURE__ */ Z.createElement("path", {
    d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
  }));
}
const Oc = Z.forwardRef(Ec), Tc = Oc, wc = ({ actor: e }) => {
  const [n, t] = is(e), i = uc(n, t, Ke);
  function r(o) {
    const a = "w-5";
    switch (o) {
      case "info":
        return /* @__PURE__ */ $.jsx(vc, { className: a });
      case "success":
        return /* @__PURE__ */ $.jsx(pc, { className: a });
      case "error":
        return /* @__PURE__ */ $.jsx(yc, { className: a });
    }
  }
  return /* @__PURE__ */ $.jsxs(
    "div",
    {
      ...i.rootProps,
      className: re(
        "alert w-auto",
        i.type === "info" && "alert-info",
        i.type === "success" && "alert-success",
        i.type === "error" && "alert-error"
      ),
      children: [
        /* @__PURE__ */ $.jsxs("div", { children: [
          r(i.type),
          /* @__PURE__ */ $.jsxs("div", { children: [
            /* @__PURE__ */ $.jsx("h3", { ...i.titleProps, children: i.title }),
            /* @__PURE__ */ $.jsx("p", { ...i.descriptionProps, children: i.description })
          ] })
        ] }),
        /* @__PURE__ */ $.jsx(Tc, { className: "w-4 cursor-pointer", onClick: i.dismiss })
      ]
    }
  );
}, xr = uo({}), _c = () => fo(xr), Ic = ({ children: e }) => {
  const [n, t] = ht(Bi.machine({ id: pt() })), i = Bi.connect(n, t, Ke);
  return /* @__PURE__ */ $.jsxs(xr.Provider, { value: i, children: [
    Object.entries(i.toastsByPlacement).map(([r, o]) => /* @__PURE__ */ Me(
      "div",
      {
        ...i.getGroupProps({ placement: r }),
        className: "toast",
        key: r
      },
      o.map((a) => /* @__PURE__ */ $.jsx(wc, { actor: a }, a.id))
    )),
    e
  ] });
};
var Cc = ye("tabs").parts("root", "tablist", "trigger", "contentGroup", "content", "indicator"), _e = Cc.build(), _ = gt({
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
  getTablistEl: (e) => _.getById(e, _.getTablistId(e)),
  getContentEl: (e, n) => _.getById(e, _.getContentId(e, n)),
  getTriggerEl: (e, n) => _.getById(e, _.getTriggerId(e, n)),
  getIndicatorEl: (e) => _.getById(e, _.getIndicatorId(e)),
  getElements: (e) => {
    const t = `[role=tab][data-ownedby='${CSS.escape(_.getTablistId(e))}']:not([disabled])`;
    return Pn(_.getTablistEl(e), t);
  },
  getFirstEl: (e) => zi(_.getElements(e)),
  getLastEl: (e) => Yi(_.getElements(e)),
  getNextEl: (e, n) => Ln(_.getElements(e), _.getTriggerId(e, n), e.loop),
  getPrevEl: (e, n) => kn(_.getElements(e), _.getTriggerId(e, n), e.loop),
  getActiveContentEl: (e) => {
    if (e.value)
      return _.getContentEl(e, e.value);
  },
  getActiveTabEl: (e) => {
    if (e.value)
      return _.getTriggerEl(e, e.value);
  },
  getOffsetRect: (e) => ({
    left: (e == null ? void 0 : e.offsetLeft) ?? 0,
    top: (e == null ? void 0 : e.offsetTop) ?? 0,
    width: (e == null ? void 0 : e.offsetWidth) ?? 0,
    height: (e == null ? void 0 : e.offsetHeight) ?? 0
  }),
  getRectById: (e, n) => {
    const t = Gi(_.getElements(e), _.getTriggerId(e, n));
    return _.resolveRect(_.getOffsetRect(t), e.orientation);
  },
  resolveRect(e, n) {
    const t = n === "vertical" ? "height" : "width", i = n === "vertical" ? "top" : "left";
    return {
      [i]: `${e[i]}px`,
      [t]: `${e[t]}px`
    };
  }
});
function Sc(e, n, t) {
  const i = e.context.translations, r = e.matches("focused");
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
      ..._e.root.attrs,
      id: _.getRootId(e.context),
      "data-orientation": e.context.orientation,
      "data-focus": B(r),
      dir: e.context.dir
    }),
    tablistProps: t.element({
      ..._e.tablist.attrs,
      id: _.getTablistId(e.context),
      role: "tablist",
      "data-focus": B(r),
      "aria-orientation": e.context.orientation,
      "data-orientation": e.context.orientation,
      "aria-label": i.tablistLabel,
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
        let l = Ft(o, e.context);
        const u = a[l];
        u && (o.preventDefault(), u(o));
      }
    }),
    getTriggerProps(o) {
      const { value: a, disabled: l } = o, u = e.context.value === a;
      return t.button({
        ..._e.trigger.attrs,
        role: "tab",
        type: "button",
        disabled: l,
        "data-orientation": e.context.orientation,
        "data-disabled": B(l),
        "aria-disabled": l,
        "data-value": a,
        "aria-selected": u,
        "data-selected": B(u),
        "aria-controls": _.getContentId(e.context, a),
        "data-ownedby": _.getTablistId(e.context),
        id: _.getTriggerId(e.context, a),
        tabIndex: u ? 0 : -1,
        onFocus() {
          n({ type: "TAB_FOCUS", value: a });
        },
        onBlur(s) {
          const c = s.relatedTarget;
          (c == null ? void 0 : c.getAttribute("role")) !== "tab" && n({ type: "TAB_BLUR" });
        },
        onClick(s) {
          l || (wo() && s.currentTarget.focus(), n({ type: "TAB_CLICK", value: a }));
        }
      });
    },
    contentGroupProps: t.element({
      ..._e.contentGroup.attrs,
      id: _.getContentGroupId(e.context),
      "data-orientation": e.context.orientation
    }),
    getContentProps({ value: o }) {
      const a = e.context.value === o;
      return t.element({
        ..._e.content.attrs,
        id: _.getContentId(e.context, o),
        tabIndex: 0,
        "aria-labelledby": _.getTriggerId(e.context, o),
        role: "tabpanel",
        "data-ownedby": _.getTablistId(e.context),
        hidden: !a
      });
    },
    indicatorProps: t.element({
      id: _.getIndicatorId(e.context),
      ..._e.indicator.attrs,
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
var { not: Rc } = Mn;
function Pc(e) {
  const n = Ae(e);
  return We(
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
              guard: Rc("selectOnFocus"),
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
        setFocusedValue(t, i) {
          t.focusedValue = i.value;
        },
        clearFocusedValue(t) {
          t.focusedValue = null;
        },
        setValue(t, i) {
          t.value = i.value;
        },
        clearValue(t) {
          t.value = null;
        },
        focusFirstTab(t) {
          z(() => {
            var i;
            return (i = _.getFirstEl(t)) == null ? void 0 : i.focus();
          });
        },
        focusLastTab(t) {
          z(() => {
            var i;
            return (i = _.getLastEl(t)) == null ? void 0 : i.focus();
          });
        },
        focusNextTab(t) {
          if (!t.focusedValue)
            return;
          const i = _.getNextEl(t, t.focusedValue);
          z(() => i == null ? void 0 : i.focus());
        },
        focusPrevTab(t) {
          if (!t.focusedValue)
            return;
          const i = _.getPrevEl(t, t.focusedValue);
          z(() => i == null ? void 0 : i.focus());
        },
        checkRenderedElements(t) {
          t.isIndicatorRendered = !!_.getIndicatorEl(t);
        },
        invokeOnChange(t) {
          var i;
          (i = t.onChange) == null || i.call(t, { value: t.value });
        },
        invokeOnFocus(t) {
          var i;
          (i = t.onFocus) == null || i.call(t, { value: t.focusedValue });
        },
        setPrevSelectedTabs(t) {
          t.value != null && (t.previousValues = Ac(t.previousValues, t.value));
        },
        // if tab panel contains focusable elements, remove the tabindex attribute
        setContentTabIndex(t) {
          z(() => {
            const i = _.getActiveContentEl(t);
            if (!i)
              return;
            mr(i).length > 0 ? i.removeAttribute("tabindex") : i.setAttribute("tabindex", "0");
          });
        },
        cleanupObserver(t) {
          var i;
          (i = t.indicatorCleanup) == null || i.call(t);
        },
        enableIndicatorTransition(t) {
          t.canIndicatorTransition = !0;
        },
        setIndicatorRect(t, i) {
          const r = i.id ?? t.value;
          !t.isIndicatorRendered || !r || !_.getTriggerEl(t, r) || (t.indicatorRect = _.getRectById(t, r), gn(() => {
            t.canIndicatorTransition = !1;
          }));
        },
        syncIndicatorRect(t) {
          var o;
          (o = t.indicatorCleanup) == null || o.call(t);
          const i = t.value;
          if (!t.isIndicatorRendered || !i)
            return;
          const r = _.getActiveTabEl(t);
          r && (t.indicatorCleanup = On(r, {
            getRect(a) {
              return _.getOffsetRect(a);
            },
            onChange(a) {
              t.indicatorRect = _.resolveRect(a, t.orientation), gn(() => {
                t.canIndicatorTransition = !1;
              });
            }
          }));
        }
      }
    }
  );
}
function Ac(e, n) {
  const t = Array.from(e).slice(), i = t.indexOf(n);
  return i > -1 && t.splice(i, 1), t.push(n), t;
}
function Fc({ items: e, part: n, ...t }) {
  var a, l;
  const [i, r] = ht(Pc({ id: pt(), ...t })), o = Sc(i, r, Ke);
  return /* @__PURE__ */ $.jsxs("div", { ...o.rootProps, className: (a = n == null ? void 0 : n.root) == null ? void 0 : a.className, children: [
    /* @__PURE__ */ $.jsx("div", { ...o.tablistProps, className: re("tabs", (l = n == null ? void 0 : n.tablist) == null ? void 0 : l.className), children: e.map((u) => {
      var s;
      return /* @__PURE__ */ Me(
        "button",
        {
          ...o.getTriggerProps({ disabled: u.disabled, value: u.value }),
          className: re(
            "tab",
            o.value === u.value && "tab-active",
            u.disabled && "tab-disabled",
            (s = n == null ? void 0 : n.trigger) == null ? void 0 : s.className
          ),
          key: u.value
        },
        u.title
      );
    }) }),
    e.map((u) => {
      var s;
      return /* @__PURE__ */ Me(
        "div",
        {
          ...o.getContentProps({ value: u.value }),
          className: (s = n == null ? void 0 : n.content) == null ? void 0 : s.className,
          key: u.value
        },
        u.content
      );
    })
  ] });
}
const Vc = ({ children: e }) => /* @__PURE__ */ $.jsx(Ic, { children: e });
export {
  kc as Combobox,
  Nc as Modal,
  Vc as Provider,
  xc as Select,
  Fc as Tabs,
  Ic as ToastProvider,
  _c as useToast
};
