(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = t(n);
    fetch(n.href, i);
  }
})();
const la = !1;
var Bn = Array.isArray,
  Kd = Array.prototype.indexOf,
  Mn = Array.from,
  Xd = Object.defineProperty,
  mt = Object.getOwnPropertyDescriptor,
  el = Object.getOwnPropertyDescriptors,
  Gd = Object.prototype,
  Zd = Array.prototype,
  In = Object.getPrototypeOf;
function ao(o) {
  return typeof o == "function";
}
const Jd = () => {};
function Qd(o) {
  return o();
}
function an(o) {
  for (var e = 0; e < o.length; e++) o[e]();
}
const Re = 2,
  tl = 4,
  Co = 8,
  Ln = 16,
  Je = 32,
  It = 64,
  er = 128,
  Ke = 256,
  tr = 512,
  me = 1024,
  at = 2048,
  eo = 4096,
  nt = 8192,
  br = 16384,
  eu = 32768,
  to = 65536,
  tu = 1 << 17,
  ou = 1 << 19,
  ol = 1 << 20,
  We = Symbol("$state"),
  rl = Symbol("legacy props"),
  ru = Symbol("");
function nl(o) {
  return o === this.v;
}
function nu(o, e) {
  return o != o
    ? e == e
    : o !== e || (o !== null && typeof o == "object") || typeof o == "function";
}
function Pn(o) {
  return !nu(o, this.v);
}
function iu(o) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function su() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function au(o) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function lu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cu(o) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function du() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function uu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hu() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function pu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let oo = !1,
  fu = !1;
function gu() {
  oo = !0;
}
const Nn = 1,
  An = 2,
  il = 4,
  mu = 8,
  vu = 16,
  bu = 1,
  yu = 2,
  sl = 4,
  ku = 8,
  wu = 16,
  xu = 1,
  Cu = 2,
  be = Symbol(),
  al = "http://www.w3.org/2000/svg";
function ll(o) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let J = null;
function ca(o) {
  J = o;
}
function Oe(o, e = !1, t) {
  (J = { p: J, c: null, e: null, m: !1, s: o, x: null, l: null }),
    oo && !e && (J.l = { s: null, u: null, r1: [], r2: ye(!1) });
}
function Be(o) {
  const e = J;
  if (e !== null) {
    const s = e.e;
    if (s !== null) {
      var t = W,
        r = Y;
      e.e = null;
      try {
        for (var n = 0; n < s.length; n++) {
          var i = s[n];
          Ge(i.effect), bt(i.reaction), So(i.fn);
        }
      } finally {
        Ge(t), bt(r);
      }
    }
    (J = e.p), (e.m = !0);
  }
  return {};
}
function Eo() {
  return !oo || (J !== null && J.l === null);
}
function ye(o, e) {
  var t = { f: 0, v: o, reactions: null, equals: nl, rv: 0, wv: 0 };
  return t;
}
function Xe(o) {
  return Eu(ye(o));
}
function cl(o, e = !1) {
  const t = ye(o);
  return (
    e || (t.equals = Pn),
    oo && J !== null && J.l !== null && (J.l.s ??= []).push(t),
    t
  );
}
function Eu(o) {
  return (
    Y !== null && !it && Y.f & Re && (qe === null ? Ru([o]) : qe.push(o)), o
  );
}
function V(o, e) {
  return (
    Y !== null &&
      !it &&
      Eo() &&
      Y.f & (Re | Ln) &&
      (qe === null || !qe.includes(o)) &&
      pu(),
    ln(o, e)
  );
}
function ln(o, e) {
  return (
    o.equals(e) ||
      (o.v,
      (o.v = e),
      (o.wv = Cl()),
      dl(o, at),
      Eo() &&
        W !== null &&
        W.f & me &&
        !(W.f & (Je | It)) &&
        (tt === null ? Du([o]) : tt.push(o))),
    e
  );
}
function da(o, e = 1) {
  var t = T(o),
    r = e === 1 ? t++ : t--;
  return V(o, t), r;
}
function dl(o, e) {
  var t = o.reactions;
  if (t !== null)
    for (var r = Eo(), n = t.length, i = 0; i < n; i++) {
      var s = t[i],
        a = s.f;
      a & at ||
        (!r && s === W) ||
        (Ze(s, e), a & (me | Ke) && (a & Re ? dl(s, eo) : xr(s)));
    }
}
let ul = !1;
function ae(o, e = null, t) {
  if (typeof o != "object" || o === null || We in o) return o;
  const r = In(o);
  if (r !== Gd && r !== Zd) return o;
  var n = new Map(),
    i = Bn(o),
    s = ye(0);
  i && n.set("length", ye(o.length));
  var a;
  return new Proxy(o, {
    defineProperty(l, c, d) {
      (!("value" in d) ||
        d.configurable === !1 ||
        d.enumerable === !1 ||
        d.writable === !1) &&
        du();
      var h = n.get(c);
      return (
        h === void 0 ? ((h = ye(d.value)), n.set(c, h)) : V(h, ae(d.value, a)),
        !0
      );
    },
    deleteProperty(l, c) {
      var d = n.get(c);
      if (d === void 0) c in l && n.set(c, ye(be));
      else {
        if (i && typeof c == "string") {
          var h = n.get("length"),
            u = Number(c);
          Number.isInteger(u) && u < h.v && V(h, u);
        }
        V(d, be), ua(s);
      }
      return !0;
    },
    get(l, c, d) {
      if (c === We) return o;
      var h = n.get(c),
        u = c in l;
      if (
        (h === void 0 &&
          (!u || mt(l, c)?.writable) &&
          ((h = ye(ae(u ? l[c] : be, a))), n.set(c, h)),
        h !== void 0)
      ) {
        var p = T(h);
        return p === be ? void 0 : p;
      }
      return Reflect.get(l, c, d);
    },
    getOwnPropertyDescriptor(l, c) {
      var d = Reflect.getOwnPropertyDescriptor(l, c);
      if (d && "value" in d) {
        var h = n.get(c);
        h && (d.value = T(h));
      } else if (d === void 0) {
        var u = n.get(c),
          p = u?.v;
        if (u !== void 0 && p !== be)
          return { enumerable: !0, configurable: !0, value: p, writable: !0 };
      }
      return d;
    },
    has(l, c) {
      if (c === We) return !0;
      var d = n.get(c),
        h = (d !== void 0 && d.v !== be) || Reflect.has(l, c);
      if (d !== void 0 || (W !== null && (!h || mt(l, c)?.writable))) {
        d === void 0 && ((d = ye(h ? ae(l[c], a) : be)), n.set(c, d));
        var u = T(d);
        if (u === be) return !1;
      }
      return h;
    },
    set(l, c, d, h) {
      var u = n.get(c),
        p = c in l;
      if (i && c === "length")
        for (var g = d; g < u.v; g += 1) {
          var f = n.get(g + "");
          f !== void 0 ? V(f, be) : g in l && ((f = ye(be)), n.set(g + "", f));
        }
      u === void 0
        ? (!p || mt(l, c)?.writable) &&
          ((u = ye(void 0)), V(u, ae(d, a)), n.set(c, u))
        : ((p = u.v !== be), V(u, ae(d, a)));
      var m = Reflect.getOwnPropertyDescriptor(l, c);
      if ((m?.set && m.set.call(h, d), !p)) {
        if (i && typeof c == "string") {
          var k = n.get("length"),
            v = Number(c);
          Number.isInteger(v) && v >= k.v && V(k, v + 1);
        }
        ua(s);
      }
      return !0;
    },
    ownKeys(l) {
      T(s);
      var c = Reflect.ownKeys(l).filter((u) => {
        var p = n.get(u);
        return p === void 0 || p.v !== be;
      });
      for (var [d, h] of n) h.v !== be && !(d in l) && c.push(d);
      return c;
    },
    setPrototypeOf() {
      uu();
    },
  });
}
function ua(o, e = 1) {
  V(o, o.v + e);
}
function ha(o) {
  return o !== null && typeof o == "object" && We in o ? o[We] : o;
}
function _u(o, e) {
  return Object.is(ha(o), ha(e));
}
var pa, hl, pl;
function Su() {
  if (pa === void 0) {
    pa = window;
    var o = Element.prototype,
      e = Node.prototype;
    (hl = mt(e, "firstChild").get),
      (pl = mt(e, "nextSibling").get),
      (o.__click = void 0),
      (o.__className = ""),
      (o.__attributes = null),
      (o.__styles = null),
      (o.__e = void 0),
      (Text.prototype.__t = void 0);
  }
}
function _o(o = "") {
  return document.createTextNode(o);
}
function Gt(o) {
  return hl.call(o);
}
function yr(o) {
  return pl.call(o);
}
function P(o, e) {
  return Gt(o);
}
function K(o, e) {
  {
    var t = Gt(o);
    return t instanceof Comment && t.data === "" ? yr(t) : t;
  }
}
function U(o, e = 1, t = !1) {
  let r = o;
  for (; e--; ) r = yr(r);
  return r;
}
function Tu(o) {
  o.textContent = "";
}
function ie(o) {
  var e = Re | at,
    t = Y !== null && Y.f & Re ? Y : null;
  return (
    W === null || (t !== null && t.f & Ke) ? (e |= Ke) : (W.f |= ol),
    {
      ctx: J,
      deps: null,
      effects: null,
      equals: nl,
      f: e,
      fn: o,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: t ?? W,
    }
  );
}
function jn(o) {
  const e = ie(o);
  return (e.equals = Pn), e;
}
function fl(o) {
  var e = o.effects;
  if (e !== null) {
    o.effects = null;
    for (var t = 0; t < e.length; t += 1) De(e[t]);
  }
}
function Ou(o) {
  for (var e = o.parent; e !== null; ) {
    if (!(e.f & Re)) return e;
    e = e.parent;
  }
  return null;
}
function Bu(o) {
  var e,
    t = W;
  Ge(Ou(o));
  try {
    fl(o), (e = _l(o));
  } finally {
    Ge(t);
  }
  return e;
}
function gl(o) {
  var e = Bu(o),
    t = (gt || o.f & Ke) && o.deps !== null ? eo : me;
  Ze(o, t), o.equals(e) || ((o.v = e), (o.wv = Cl()));
}
function ml(o) {
  W === null && Y === null && au(),
    Y !== null && Y.f & Ke && W === null && su(),
    $n && iu();
}
function Mu(o, e) {
  var t = e.last;
  t === null
    ? (e.last = e.first = o)
    : ((t.next = o), (o.prev = t), (e.last = o));
}
function Lt(o, e, t, r = !0) {
  var n = (o & It) !== 0,
    i = W,
    s = {
      ctx: J,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: o | at,
      first: null,
      fn: e,
      last: null,
      next: null,
      parent: n ? null : i,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
    };
  if (t) {
    var a = Kt;
    try {
      fa(!0), Hn(s), (s.f |= eu);
    } catch (d) {
      throw (De(s), d);
    } finally {
      fa(a);
    }
  } else e !== null && xr(s);
  var l =
    t &&
    s.deps === null &&
    s.first === null &&
    s.nodes_start === null &&
    s.teardown === null &&
    (s.f & (ol | er)) === 0;
  if (!l && !n && r && (i !== null && Mu(s, i), Y !== null && Y.f & Re)) {
    var c = Y;
    (c.effects ??= []).push(s);
  }
  return s;
}
function Iu(o) {
  const e = Lt(Co, null, !1);
  return Ze(e, me), (e.teardown = o), e;
}
function Ot(o) {
  ml();
  var e = W !== null && (W.f & Je) !== 0 && J !== null && !J.m;
  if (e) {
    var t = J;
    (t.e ??= []).push({ fn: o, effect: W, reaction: Y });
  } else {
    var r = So(o);
    return r;
  }
}
function Lu(o) {
  return ml(), Rn(o);
}
function Pu(o) {
  const e = Lt(It, o, !0);
  return () => {
    De(e);
  };
}
function Nu(o) {
  const e = Lt(It, o, !0);
  return (t = {}) =>
    new Promise((r) => {
      t.outro
        ? Zt(e, () => {
            De(e), r(void 0);
          })
        : (De(e), r(void 0));
    });
}
function So(o) {
  return Lt(tl, o, !1);
}
function Rn(o) {
  return Lt(Co, o, !0);
}
function re(o, e = [], t = ie) {
  const r = e.map(t);
  return ro(() => o(...r.map(T)));
}
function ro(o, e = 0) {
  return Lt(Co | Ln | e, o, !0);
}
function vt(o, e = !0) {
  return Lt(Co | Je, o, !0, e);
}
function vl(o) {
  var e = o.teardown;
  if (e !== null) {
    const t = $n,
      r = Y;
    ga(!0), bt(null);
    try {
      e.call(null);
    } finally {
      ga(t), bt(r);
    }
  }
}
function bl(o, e = !1) {
  var t = o.first;
  for (o.first = o.last = null; t !== null; ) {
    var r = t.next;
    De(t, e), (t = r);
  }
}
function Au(o) {
  for (var e = o.first; e !== null; ) {
    var t = e.next;
    e.f & Je || De(e), (e = t);
  }
}
function De(o, e = !0) {
  var t = !1;
  if ((e || o.f & ou) && o.nodes_start !== null) {
    for (var r = o.nodes_start, n = o.nodes_end; r !== null; ) {
      var i = r === n ? null : yr(r);
      r.remove(), (r = i);
    }
    t = !0;
  }
  bl(o, e && !t), ir(o, 0), Ze(o, br);
  var s = o.transitions;
  if (s !== null) for (const l of s) l.stop();
  vl(o);
  var a = o.parent;
  a !== null && a.first !== null && yl(o),
    (o.next =
      o.prev =
      o.teardown =
      o.ctx =
      o.deps =
      o.fn =
      o.nodes_start =
      o.nodes_end =
        null);
}
function yl(o) {
  var e = o.parent,
    t = o.prev,
    r = o.next;
  t !== null && (t.next = r),
    r !== null && (r.prev = t),
    e !== null &&
      (e.first === o && (e.first = r), e.last === o && (e.last = t));
}
function Zt(o, e) {
  var t = [];
  Dn(o, t, !0),
    kl(t, () => {
      De(o), e && e();
    });
}
function kl(o, e) {
  var t = o.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var n of o) n.out(r);
  } else e();
}
function Dn(o, e, t) {
  if (!(o.f & nt)) {
    if (((o.f ^= nt), o.transitions !== null))
      for (const s of o.transitions) (s.is_global || t) && e.push(s);
    for (var r = o.first; r !== null; ) {
      var n = r.next,
        i = (r.f & to) !== 0 || (r.f & Je) !== 0;
      Dn(r, e, i ? t : !1), (r = n);
    }
  }
}
function yo(o) {
  wl(o, !0);
}
function wl(o, e) {
  if (o.f & nt) {
    (o.f ^= nt), o.f & me || (o.f ^= me), To(o) && (Ze(o, at), xr(o));
    for (var t = o.first; t !== null; ) {
      var r = t.next,
        n = (t.f & to) !== 0 || (t.f & Je) !== 0;
      wl(t, n ? e : !1), (t = r);
    }
    if (o.transitions !== null)
      for (const i of o.transitions) (i.is_global || e) && i.in();
  }
}
let cn = !1,
  dn = [];
function ju() {
  cn = !1;
  const o = dn.slice();
  (dn = []), an(o);
}
function kr(o) {
  cn || ((cn = !0), queueMicrotask(ju)), dn.push(o);
}
let Fo = !1,
  or = !1,
  rr = null,
  Kt = !1,
  $n = !1;
function fa(o) {
  Kt = o;
}
function ga(o) {
  $n = o;
}
let un = [],
  mo = 0;
let Y = null,
  it = !1;
function bt(o) {
  Y = o;
}
let W = null;
function Ge(o) {
  W = o;
}
let qe = null;
function Ru(o) {
  qe = o;
}
let fe = null,
  Ee = 0,
  tt = null;
function Du(o) {
  tt = o;
}
let xl = 1,
  nr = 0,
  gt = !1;
function Cl() {
  return ++xl;
}
function To(o) {
  var e = o.f;
  if (e & at) return !0;
  if (e & eo) {
    var t = o.deps,
      r = (e & Ke) !== 0;
    if (t !== null) {
      var n,
        i,
        s = (e & tr) !== 0,
        a = r && W !== null && !gt,
        l = t.length;
      if (s || a) {
        for (n = 0; n < l; n++)
          (i = t[n]),
            (s || !i?.reactions?.includes(o)) && (i.reactions ??= []).push(o);
        s && (o.f ^= tr);
      }
      for (n = 0; n < l; n++)
        if (((i = t[n]), To(i) && gl(i), i.wv > o.wv)) return !0;
    }
    (!r || (W !== null && !gt)) && Ze(o, me);
  }
  return !1;
}
function $u(o, e) {
  for (var t = e; t !== null; ) {
    if (t.f & er)
      try {
        t.fn(o);
        return;
      } catch {
        t.f ^= er;
      }
    t = t.parent;
  }
  throw ((Fo = !1), o);
}
function Hu(o) {
  return (o.f & br) === 0 && (o.parent === null || (o.parent.f & er) === 0);
}
function wr(o, e, t, r) {
  if (Fo) {
    if ((t === null && (Fo = !1), Hu(e))) throw o;
    return;
  }
  t !== null && (Fo = !0);
  {
    $u(o, e);
    return;
  }
}
function El(o, e, t = 0) {
  var r = o.reactions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.f & Re
        ? El(i, e, t + 1)
        : e === i && (t === 0 ? Ze(i, at) : i.f & me && Ze(i, eo), xr(i));
    }
}
function _l(o) {
  var e = fe,
    t = Ee,
    r = tt,
    n = Y,
    i = gt,
    s = qe,
    a = J,
    l = it,
    c = o.f;
  (fe = null),
    (Ee = 0),
    (tt = null),
    (Y = c & (Je | It) ? null : o),
    (gt = (c & Ke) !== 0 && (!Kt || n === null || l)),
    (qe = null),
    ca(o.ctx),
    (it = !1),
    nr++;
  try {
    var d = (0, o.fn)(),
      h = o.deps;
    if (fe !== null) {
      var u;
      if ((ir(o, Ee), h !== null && Ee > 0))
        for (h.length = Ee + fe.length, u = 0; u < fe.length; u++)
          h[Ee + u] = fe[u];
      else o.deps = h = fe;
      if (!gt) for (u = Ee; u < h.length; u++) (h[u].reactions ??= []).push(o);
    } else h !== null && Ee < h.length && (ir(o, Ee), (h.length = Ee));
    if (Eo() && tt !== null && !(o.f & (Re | eo | at)))
      for (u = 0; u < tt.length; u++) El(tt[u], o);
    return n !== null && nr++, d;
  } finally {
    (fe = e), (Ee = t), (tt = r), (Y = n), (gt = i), (qe = s), ca(a), (it = l);
  }
}
function Fu(o, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Kd.call(t, o);
    if (r !== -1) {
      var n = t.length - 1;
      n === 0 ? (t = e.reactions = null) : ((t[r] = t[n]), t.pop());
    }
  }
  t === null &&
    e.f & Re &&
    (fe === null || !fe.includes(e)) &&
    (Ze(e, eo), e.f & (Ke | tr) || (e.f ^= tr), fl(e), ir(e, 0));
}
function ir(o, e) {
  var t = o.deps;
  if (t !== null) for (var r = e; r < t.length; r++) Fu(o, t[r]);
}
function Hn(o) {
  var e = o.f;
  if (!(e & br)) {
    Ze(o, me);
    var t = W,
      r = J;
    W = o;
    try {
      e & Ln ? Au(o) : bl(o), vl(o);
      var n = _l(o);
      (o.teardown = typeof n == "function" ? n : null), (o.wv = xl);
      var i = o.deps,
        s;
      la && fu && o.f & at;
    } catch (a) {
      wr(a, o, t, r || o.ctx);
    } finally {
      W = t;
    }
  }
}
function Uu() {
  if (mo > 1e3) {
    mo = 0;
    try {
      lu();
    } catch (o) {
      if (rr !== null) wr(o, rr, null);
      else throw o;
    }
  }
  mo++;
}
function zu(o) {
  var e = o.length;
  if (e !== 0) {
    Uu();
    var t = Kt;
    Kt = !0;
    try {
      for (var r = 0; r < e; r++) {
        var n = o[r];
        n.f & me || (n.f ^= me);
        var i = [];
        Sl(n, i), Wu(i);
      }
    } finally {
      Kt = t;
    }
  }
}
function Wu(o) {
  var e = o.length;
  if (e !== 0)
    for (var t = 0; t < e; t++) {
      var r = o[t];
      if (!(r.f & (br | nt)))
        try {
          To(r) &&
            (Hn(r),
            r.deps === null &&
              r.first === null &&
              r.nodes_start === null &&
              (r.teardown === null ? yl(r) : (r.fn = null)));
        } catch (n) {
          wr(n, r, null, r.ctx);
        }
    }
}
function qu() {
  if (((or = !1), mo > 1001)) return;
  const o = un;
  (un = []), zu(o), or || ((mo = 0), (rr = null));
}
function xr(o) {
  or || ((or = !0), queueMicrotask(qu)), (rr = o);
  for (var e = o; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (t & (It | Je)) {
      if (!(t & me)) return;
      e.f ^= me;
    }
  }
  un.push(e);
}
function Sl(o, e) {
  var t = o.first,
    r = [];
  e: for (; t !== null; ) {
    var n = t.f,
      i = (n & Je) !== 0,
      s = i && (n & me) !== 0,
      a = t.next;
    if (!s && !(n & nt))
      if (n & Co) {
        if (i) t.f ^= me;
        else {
          var l = Y;
          try {
            (Y = t), To(t) && Hn(t);
          } catch (u) {
            wr(u, t, null, t.ctx);
          } finally {
            Y = l;
          }
        }
        var c = t.first;
        if (c !== null) {
          t = c;
          continue;
        }
      } else n & tl && r.push(t);
    if (a === null) {
      let u = t.parent;
      for (; u !== null; ) {
        if (o === u) break e;
        var d = u.next;
        if (d !== null) {
          t = d;
          continue e;
        }
        u = u.parent;
      }
    }
    t = a;
  }
  for (var h = 0; h < r.length; h++) (c = r[h]), e.push(c), Sl(c, e);
}
function T(o) {
  var e = o.f,
    t = (e & Re) !== 0;
  if (Y !== null && !it) {
    qe !== null && qe.includes(o) && hu();
    var r = Y.deps;
    o.rv < nr &&
      ((o.rv = nr),
      fe === null && r !== null && r[Ee] === o
        ? Ee++
        : fe === null
          ? (fe = [o])
          : (!gt || !fe.includes(o)) && fe.push(o));
  } else if (t && o.deps === null && o.effects === null) {
    var n = o,
      i = n.parent;
    i !== null && !(i.f & Ke) && (n.f ^= Ke);
  }
  return t && ((n = o), To(n) && gl(n)), o.v;
}
function Bt(o) {
  var e = it;
  try {
    return (it = !0), o();
  } finally {
    it = e;
  }
}
const Vu = -7169;
function Ze(o, e) {
  o.f = (o.f & Vu) | e;
}
function Yu(o) {
  if (!(typeof o != "object" || !o || o instanceof EventTarget)) {
    if (We in o) hn(o);
    else if (!Array.isArray(o))
      for (let e in o) {
        const t = o[e];
        typeof t == "object" && t && We in t && hn(t);
      }
  }
}
function hn(o, e = new Set()) {
  if (
    typeof o == "object" &&
    o !== null &&
    !(o instanceof EventTarget) &&
    !e.has(o)
  ) {
    e.add(o), o instanceof Date && o.getTime();
    for (let r in o)
      try {
        hn(o[r], e);
      } catch {}
    const t = In(o);
    if (
      t !== Object.prototype &&
      t !== Array.prototype &&
      t !== Map.prototype &&
      t !== Set.prototype &&
      t !== Date.prototype
    ) {
      const r = el(t);
      for (let n in r) {
        const i = r[n].get;
        if (i)
          try {
            i.call(o);
          } catch {}
      }
    }
  }
}
function Ku(o) {
  return (
    o.endsWith("capture") &&
    o !== "gotpointercapture" &&
    o !== "lostpointercapture"
  );
}
const Xu = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart",
];
function Gu(o) {
  return Xu.includes(o);
}
const Zu = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback",
};
function Ju(o) {
  return (o = o.toLowerCase()), Zu[o] ?? o;
}
const Qu = ["touchstart", "touchmove"];
function eh(o) {
  return Qu.includes(o);
}
function th(o, e) {
  if (e) {
    const t = document.body;
    (o.autofocus = !0),
      kr(() => {
        document.activeElement === t && o.focus();
      });
  }
}
let ma = !1;
function oh() {
  ma ||
    ((ma = !0),
    document.addEventListener(
      "reset",
      (o) => {
        Promise.resolve().then(() => {
          if (!o.defaultPrevented)
            for (const e of o.target.elements) e.__on_r?.();
        });
      },
      { capture: !0 },
    ));
}
function Tl(o) {
  var e = Y,
    t = W;
  bt(null), Ge(null);
  try {
    return o();
  } finally {
    bt(e), Ge(t);
  }
}
function Ol(o, e, t, r = t) {
  o.addEventListener(e, () => Tl(t));
  const n = o.__on_r;
  n
    ? (o.__on_r = () => {
        n(), r(!0);
      })
    : (o.__on_r = () => r(!0)),
    oh();
}
const Bl = new Set(),
  pn = new Set();
function Ml(o, e, t, r = {}) {
  function n(i) {
    if ((r.capture || ho.call(e, i), !i.cancelBubble))
      return Tl(() => t?.call(this, i));
  }
  return (
    o.startsWith("pointer") || o.startsWith("touch") || o === "wheel"
      ? kr(() => {
          e.addEventListener(o, n, r);
        })
      : e.addEventListener(o, n, r),
    n
  );
}
function _t(o, e, t, r, n) {
  var i = { capture: r, passive: n },
    s = Ml(o, e, t, i);
  (e === document.body || e === window || e === document) &&
    Iu(() => {
      e.removeEventListener(o, s, i);
    });
}
function $e(o) {
  for (var e = 0; e < o.length; e++) Bl.add(o[e]);
  for (var t of pn) t(o);
}
function ho(o) {
  var e = this,
    t = e.ownerDocument,
    r = o.type,
    n = o.composedPath?.() || [],
    i = n[0] || o.target,
    s = 0,
    a = o.__root;
  if (a) {
    var l = n.indexOf(a);
    if (l !== -1 && (e === document || e === window)) {
      o.__root = e;
      return;
    }
    var c = n.indexOf(e);
    if (c === -1) return;
    l <= c && (s = l);
  }
  if (((i = n[s] || o.target), i !== e)) {
    Xd(o, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      },
    });
    var d = Y,
      h = W;
    bt(null), Ge(null);
    try {
      for (var u, p = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var f = i["__" + r];
          if (f !== void 0 && !i.disabled)
            if (Bn(f)) {
              var [m, ...k] = f;
              m.apply(i, [o, ...k]);
            } else f.call(i, o);
        } catch (v) {
          u ? p.push(v) : (u = v);
        }
        if (o.cancelBubble || g === e || g === null) break;
        i = g;
      }
      if (u) {
        for (let v of p)
          queueMicrotask(() => {
            throw v;
          });
        throw u;
      }
    } finally {
      (o.__root = e), delete o.currentTarget, bt(d), Ge(h);
    }
  }
}
function Il(o) {
  var e = document.createElement("template");
  return (e.innerHTML = o), e.content;
}
function Jt(o, e) {
  var t = W;
  t.nodes_start === null && ((t.nodes_start = o), (t.nodes_end = e));
}
function $(o, e) {
  var t = (e & xu) !== 0,
    r = (e & Cu) !== 0,
    n,
    i = !o.startsWith("<!>");
  return () => {
    n === void 0 && ((n = Il(i ? o : "<!>" + o)), t || (n = Gt(n)));
    var s = r ? document.importNode(n, !0) : n.cloneNode(!0);
    if (t) {
      var a = Gt(s),
        l = s.lastChild;
      Jt(a, l);
    } else Jt(s, s);
    return s;
  };
}
function rh(o, e, t = "svg") {
  var r = !o.startsWith("<!>"),
    n = `<${t}>${r ? o : "<!>" + o}</${t}>`,
    i;
  return () => {
    if (!i) {
      var s = Il(n),
        a = Gt(s);
      i = Gt(a);
    }
    var l = i.cloneNode(!0);
    return Jt(l, l), l;
  };
}
function nh(o = "") {
  {
    var e = _o(o + "");
    return Jt(e, e), e;
  }
}
function te() {
  var o = document.createDocumentFragment(),
    e = document.createComment(""),
    t = _o();
  return o.append(e, t), Jt(e, t), o;
}
function I(o, e) {
  o !== null && o.before(e);
}
function Ve(o, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (o.__t ??= o.nodeValue) && ((o.__t = t), (o.nodeValue = t + ""));
}
function ih(o, e) {
  return sh(o, e);
}
const Dt = new Map();
function sh(
  o,
  { target: e, anchor: t, props: r = {}, events: n, context: i, intro: s = !0 },
) {
  Su();
  var a = new Set(),
    l = (h) => {
      for (var u = 0; u < h.length; u++) {
        var p = h[u];
        if (!a.has(p)) {
          a.add(p);
          var g = eh(p);
          e.addEventListener(p, ho, { passive: g });
          var f = Dt.get(p);
          f === void 0
            ? (document.addEventListener(p, ho, { passive: g }), Dt.set(p, 1))
            : Dt.set(p, f + 1);
        }
      }
    };
  l(Mn(Bl)), pn.add(l);
  var c = void 0,
    d = Nu(() => {
      var h = t ?? e.appendChild(_o());
      return (
        vt(() => {
          if (i) {
            Oe({});
            var u = J;
            u.c = i;
          }
          n && (r.$$events = n), (c = o(h, r) || {}), i && Be();
        }),
        () => {
          for (var u of a) {
            e.removeEventListener(u, ho);
            var p = Dt.get(u);
            --p === 0
              ? (document.removeEventListener(u, ho), Dt.delete(u))
              : Dt.set(u, p);
          }
          pn.delete(l), h !== t && h.parentNode?.removeChild(h);
        }
      );
    });
  return ah.set(c, d), c;
}
let ah = new WeakMap();
function ne(o, e, t = !1) {
  var r = o,
    n = null,
    i = null,
    s = be,
    a = t ? to : 0,
    l = !1;
  const c = (h, u = !0) => {
      (l = !0), d(u, h);
    },
    d = (h, u) => {
      s !== (s = h) &&
        (s
          ? (n ? yo(n) : u && (n = vt(() => u(r))),
            i &&
              Zt(i, () => {
                i = null;
              }))
          : (i ? yo(i) : u && (i = vt(() => u(r))),
            n &&
              Zt(n, () => {
                n = null;
              })));
    };
  ro(() => {
    (l = !1), e(c), l || d(null, null);
  }, a);
}
function Oo(o, e) {
  return e;
}
function lh(o, e, t, r) {
  for (var n = [], i = e.length, s = 0; s < i; s++) Dn(e[s].e, n, !0);
  var a = i > 0 && n.length === 0 && t !== null;
  if (a) {
    var l = t.parentNode;
    Tu(l), l.append(t), r.clear(), pt(o, e[0].prev, e[i - 1].next);
  }
  kl(n, () => {
    for (var c = 0; c < i; c++) {
      var d = e[c];
      a || (r.delete(d.k), pt(o, d.prev, d.next)), De(d.e, !a);
    }
  });
}
function yt(o, e, t, r, n, i = null) {
  var s = o,
    a = { items: new Map(), first: null },
    l = (e & il) !== 0;
  if (l) {
    var c = o;
    s = c.appendChild(_o());
  }
  var d = null,
    h = !1,
    u = jn(() => {
      var p = t();
      return Bn(p) ? p : p == null ? [] : Mn(p);
    });
  ro(() => {
    var p = T(u),
      g = p.length;
    (h && g === 0) ||
      ((h = g === 0),
      ch(p, a, s, n, e, r, t),
      i !== null &&
        (g === 0
          ? d
            ? yo(d)
            : (d = vt(() => i(s)))
          : d !== null &&
            Zt(d, () => {
              d = null;
            })),
      T(u));
  });
}
function ch(o, e, t, r, n, i, s) {
  var a = (n & mu) !== 0,
    l = (n & (Nn | An)) !== 0,
    c = o.length,
    d = e.items,
    h = e.first,
    u = h,
    p,
    g = null,
    f,
    m = [],
    k = [],
    v,
    w,
    b,
    y;
  if (a)
    for (y = 0; y < c; y += 1)
      (v = o[y]),
        (w = i(v, y)),
        (b = d.get(w)),
        b !== void 0 && (b.a?.measure(), (f ??= new Set()).add(b));
  for (y = 0; y < c; y += 1) {
    if (((v = o[y]), (w = i(v, y)), (b = d.get(w)), b === void 0)) {
      var _ = u ? u.e.nodes_start : t;
      (g = uh(_, e, g, g === null ? e.first : g.next, v, w, y, r, n, s)),
        d.set(w, g),
        (m = []),
        (k = []),
        (u = g.next);
      continue;
    }
    if (
      (l && dh(b, v, y, n),
      b.e.f & nt && (yo(b.e), a && (b.a?.unfix(), (f ??= new Set()).delete(b))),
      b !== u)
    ) {
      if (p !== void 0 && p.has(b)) {
        if (m.length < k.length) {
          var B = k[0],
            C;
          g = B.prev;
          var x = m[0],
            O = m[m.length - 1];
          for (C = 0; C < m.length; C += 1) va(m[C], B, t);
          for (C = 0; C < k.length; C += 1) p.delete(k[C]);
          pt(e, x.prev, O.next),
            pt(e, g, x),
            pt(e, O, B),
            (u = B),
            (g = O),
            (y -= 1),
            (m = []),
            (k = []);
        } else
          p.delete(b),
            va(b, u, t),
            pt(e, b.prev, b.next),
            pt(e, b, g === null ? e.first : g.next),
            pt(e, g, b),
            (g = b);
        continue;
      }
      for (m = [], k = []; u !== null && u.k !== w; )
        u.e.f & nt || (p ??= new Set()).add(u), k.push(u), (u = u.next);
      if (u === null) continue;
      b = u;
    }
    m.push(b), (g = b), (u = b.next);
  }
  if (u !== null || p !== void 0) {
    for (var S = p === void 0 ? [] : Mn(p); u !== null; )
      u.e.f & nt || S.push(u), (u = u.next);
    var M = S.length;
    if (M > 0) {
      var L = n & il && c === 0 ? t : null;
      if (a) {
        for (y = 0; y < M; y += 1) S[y].a?.measure();
        for (y = 0; y < M; y += 1) S[y].a?.fix();
      }
      lh(e, S, L, d);
    }
  }
  a &&
    kr(() => {
      if (f !== void 0) for (b of f) b.a?.apply();
    }),
    (W.first = e.first && e.first.e),
    (W.last = g && g.e);
}
function dh(o, e, t, r) {
  r & Nn && ln(o.v, e), r & An ? ln(o.i, t) : (o.i = t);
}
function uh(o, e, t, r, n, i, s, a, l, c) {
  var d = (l & Nn) !== 0,
    h = (l & vu) === 0,
    u = d ? (h ? cl(n) : ye(n)) : n,
    p = l & An ? ye(s) : s,
    g = { i: p, v: u, k: i, a: null, e: null, prev: t, next: r };
  try {
    return (
      (g.e = vt(() => a(o, u, p, c), ul)),
      (g.e.prev = t && t.e),
      (g.e.next = r && r.e),
      t === null ? (e.first = g) : ((t.next = g), (t.e.next = g.e)),
      r !== null && ((r.prev = g), (r.e.prev = g.e)),
      g
    );
  } finally {
  }
}
function va(o, e, t) {
  for (
    var r = o.next ? o.next.e.nodes_start : t,
      n = e ? e.e.nodes_start : t,
      i = o.e.nodes_start;
    i !== r;

  ) {
    var s = yr(i);
    n.before(i), (i = s);
  }
}
function pt(o, e, t) {
  e === null ? (o.first = t) : ((e.next = t), (e.e.next = t && t.e)),
    t !== null && ((t.prev = e), (t.e.prev = e && e.e));
}
function we(o, e, t, r, n) {
  var i = e.$$slots?.[t],
    s = !1;
  i === !0 && ((i = e.children), (s = !0)),
    i === void 0 || i(o, s ? () => r : r);
}
function ba(o, e, ...t) {
  var r = o,
    n = Jd,
    i;
  ro(() => {
    n !== (n = e()) && (i && (De(i), (i = null)), (i = vt(() => n(r, ...t))));
  }, to);
}
function hh(o, e, t) {
  var r = o,
    n,
    i;
  ro(() => {
    n !== (n = e()) && (i && (Zt(i), (i = null)), n && (i = vt(() => t(r, n))));
  }, to);
}
function ph(o, e, t, r, n, i) {
  var s,
    a,
    l = null,
    c = o,
    d;
  ro(() => {
    const h = e() || null;
    var u = al;
    h !== s &&
      (d &&
        (h === null
          ? Zt(d, () => {
              (d = null), (a = null);
            })
          : h === a
            ? yo(d)
            : De(d)),
      h &&
        h !== a &&
        (d = vt(() => {
          if (((l = document.createElementNS(u, h)), Jt(l, l), r)) {
            var p = l.appendChild(_o());
            r(l, p);
          }
          (W.nodes_end = l), c.before(l);
        })),
      (s = h),
      s && (a = s));
  }, to);
}
function Ll(o) {
  var e,
    t,
    r = "";
  if (typeof o == "string" || typeof o == "number") r += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var n = o.length;
      for (e = 0; e < n; e++)
        o[e] && (t = Ll(o[e])) && (r && (r += " "), (r += t));
    } else for (t in o) o[t] && (r && (r += " "), (r += t));
  return r;
}
function fh() {
  for (var o, e, t = 0, r = "", n = arguments.length; t < n; t++)
    (o = arguments[t]) && (e = Ll(o)) && (r && (r += " "), (r += e));
  return r;
}
function Pl(o) {
  return typeof o == "object" ? fh(o) : (o ?? "");
}
function Lo(o, e) {
  var t = (o.__attributes ??= {});
  t.value === (t.value = e ?? void 0) ||
    (o.value === e && (e !== 0 || o.nodeName !== "PROGRESS")) ||
    (o.value = e ?? "");
}
function gh(o, e) {
  var t = (o.__attributes ??= {});
  t.checked !== (t.checked = e ?? void 0) && (o.checked = e);
}
function mh(o, e) {
  e
    ? o.hasAttribute("selected") || o.setAttribute("selected", "")
    : o.removeAttribute("selected");
}
function _e(o, e, t, r) {
  var n = (o.__attributes ??= {});
  n[e] !== (n[e] = t) &&
    (e === "style" && "__styles" in o && (o.__styles = {}),
    e === "loading" && (o[ru] = t),
    t == null
      ? o.removeAttribute(e)
      : typeof t != "string" && Nl(o).includes(e)
        ? (o[e] = t)
        : o.setAttribute(e, t));
}
function ya(o, e, t, r, n = !1, i = !1, s = !1) {
  var a = e || {},
    l = o.tagName === "OPTION";
  for (var c in e) c in t || (t[c] = null);
  t.class && (t.class = Pl(t.class));
  var d = Nl(o),
    h = (o.__attributes ??= {});
  for (const v in t) {
    let w = t[v];
    if (l && v === "value" && w == null) {
      (o.value = o.__value = ""), (a[v] = w);
      continue;
    }
    var u = a[v];
    if (w !== u) {
      a[v] = w;
      var p = v[0] + v[1];
      if (p !== "$$") {
        if (p === "on") {
          const b = {},
            y = "$$" + v;
          let _ = v.slice(2);
          var g = Gu(_);
          if ((Ku(_) && ((_ = _.slice(0, -7)), (b.capture = !0)), !g && u)) {
            if (w != null) continue;
            o.removeEventListener(_, a[y], b), (a[y] = null);
          }
          if (w != null)
            if (g) (o[`__${_}`] = w), $e([_]);
            else {
              let B = function (C) {
                a[v].call(this, C);
              };
              var k = B;
              a[y] = Ml(_, o, B, b);
            }
          else g && (o[`__${_}`] = void 0);
        } else if (v === "style" && w != null) o.style.cssText = w + "";
        else if (v === "autofocus") th(o, !!w);
        else if (!i && (v === "__value" || (v === "value" && w != null)))
          o.value = o.__value = w;
        else if (v === "selected" && l) mh(o, w);
        else {
          var f = v;
          n || (f = Ju(f));
          var m = f === "defaultValue" || f === "defaultChecked";
          if (w == null && !i && !m)
            if (((h[v] = null), f === "value" || f === "checked")) {
              let b = o;
              if (f === "value") {
                let y = b.defaultValue;
                b.removeAttribute(f), (b.defaultValue = y);
              } else {
                let y = b.defaultChecked;
                b.removeAttribute(f), (b.defaultChecked = y);
              }
            } else o.removeAttribute(v);
          else
            m || (d.includes(f) && (i || typeof w != "string"))
              ? (o[f] = w)
              : typeof w != "function" && _e(o, f, w);
        }
        v === "style" && "__styles" in o && (o.__styles = {});
      }
    }
  }
  return a;
}
var ka = new Map();
function Nl(o) {
  var e = ka.get(o.nodeName);
  if (e) return e;
  ka.set(o.nodeName, (e = []));
  for (var t, r = o, n = Element.prototype; n !== r; ) {
    t = el(r);
    for (var i in t) t[i].set && e.push(i);
    r = In(r);
  }
  return e;
}
function sr(o, e, t) {
  var r = o.__className,
    n = vh(e, t);
  (r !== n || ul) &&
    (e == null && !t ? o.removeAttribute("class") : (o.className = n),
    (o.__className = n));
}
function vh(o, e) {
  return (o ?? "") + (e ? " " + e : "");
}
function Po(o, e, t) {
  if (t) {
    if (o.classList.contains(e)) return;
    o.classList.add(e);
  } else {
    if (!o.classList.contains(e)) return;
    o.classList.remove(e);
  }
}
function bh(o, e, t = e) {
  var r = Eo();
  Ol(o, "input", (n) => {
    var i = n ? o.defaultValue : o.value;
    if (((i = qr(o) ? Vr(i) : i), t(i), r && i !== (i = e()))) {
      var s = o.selectionStart,
        a = o.selectionEnd;
      (o.value = i ?? ""),
        a !== null &&
          ((o.selectionStart = s),
          (o.selectionEnd = Math.min(a, o.value.length)));
    }
  }),
    Bt(e) == null && o.value && t(qr(o) ? Vr(o.value) : o.value),
    Rn(() => {
      var n = e();
      (qr(o) && n === Vr(o.value)) ||
        (o.type === "date" && !n && !o.value) ||
        (n !== o.value && (o.value = n ?? ""));
    });
}
function qr(o) {
  var e = o.type;
  return e === "number" || e === "range";
}
function Vr(o) {
  return o === "" ? null : +o;
}
function Al(o, e, t) {
  if (o.multiple) return wh(o, e);
  for (var r of o.options) {
    var n = vo(r);
    if (_u(n, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (o.selectedIndex = -1);
}
function yh(o, e) {
  So(() => {
    var t = new MutationObserver(() => {
      var r = o.__value;
      Al(o, r);
    });
    return (
      t.observe(o, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["value"],
      }),
      () => {
        t.disconnect();
      }
    );
  });
}
function kh(o, e, t = e) {
  var r = !0;
  Ol(o, "change", (n) => {
    var i = n ? "[selected]" : ":checked",
      s;
    if (o.multiple) s = [].map.call(o.querySelectorAll(i), vo);
    else {
      var a = o.querySelector(i) ?? o.querySelector("option:not([disabled])");
      s = a && vo(a);
    }
    t(s);
  }),
    So(() => {
      var n = e();
      if ((Al(o, n, r), r && n === void 0)) {
        var i = o.querySelector(":checked");
        i !== null && ((n = vo(i)), t(n));
      }
      (o.__value = n), (r = !1);
    }),
    yh(o);
}
function wh(o, e) {
  for (var t of o.options) t.selected = ~e.indexOf(vo(t));
}
function vo(o) {
  return "__value" in o ? o.__value : o.value;
}
function wa(o, e) {
  return o === e || o?.[We] === e;
}
function ar(o = {}, e, t, r) {
  return (
    So(() => {
      var n, i;
      return (
        Rn(() => {
          (n = i),
            (i = []),
            Bt(() => {
              o !== t(...i) &&
                (e(o, ...i), n && wa(t(...n), o) && e(null, ...n));
            });
        }),
        () => {
          kr(() => {
            i && wa(t(...i), o) && e(null, ...i);
          });
        }
      );
    }),
    o
  );
}
function xh(o = !1) {
  const e = J,
    t = e.l.u;
  if (!t) return;
  let r = () => Yu(e.s);
  if (o) {
    let n = 0,
      i = {};
    const s = ie(() => {
      let a = !1;
      const l = e.s;
      for (const c in l) l[c] !== i[c] && ((i[c] = l[c]), (a = !0));
      return a && n++, n;
    });
    r = () => T(s);
  }
  t.b.length &&
    Lu(() => {
      xa(e, r), an(t.b);
    }),
    Ot(() => {
      const n = Bt(() => t.m.map(Qd));
      return () => {
        for (const i of n) typeof i == "function" && i();
      };
    }),
    t.a.length &&
      Ot(() => {
        xa(e, r), an(t.a);
      });
}
function xa(o, e) {
  if (o.l.s) for (const t of o.l.s) T(t);
  e();
}
let No = !1;
function Ch(o) {
  var e = No;
  try {
    return (No = !1), [o(), No];
  } finally {
    No = e;
  }
}
const Eh = {
  get(o, e) {
    if (!o.exclude.includes(e))
      return T(o.version), e in o.special ? o.special[e]() : o.props[e];
  },
  set(o, e, t) {
    return (
      e in o.special ||
        (o.special[e] = ce(
          {
            get [e]() {
              return o.props[e];
            },
          },
          e,
          sl,
        )),
      o.special[e](t),
      da(o.version),
      !0
    );
  },
  getOwnPropertyDescriptor(o, e) {
    if (!o.exclude.includes(e) && e in o.props)
      return { enumerable: !0, configurable: !0, value: o.props[e] };
  },
  deleteProperty(o, e) {
    return o.exclude.includes(e) || (o.exclude.push(e), da(o.version)), !0;
  },
  has(o, e) {
    return o.exclude.includes(e) ? !1 : e in o.props;
  },
  ownKeys(o) {
    return Reflect.ownKeys(o.props).filter((e) => !o.exclude.includes(e));
  },
};
function ve(o, e) {
  return new Proxy({ props: o, exclude: e, special: {}, version: ye(0) }, Eh);
}
const _h = {
  get(o, e) {
    let t = o.props.length;
    for (; t--; ) {
      let r = o.props[t];
      if ((ao(r) && (r = r()), typeof r == "object" && r !== null && e in r))
        return r[e];
    }
  },
  set(o, e, t) {
    let r = o.props.length;
    for (; r--; ) {
      let n = o.props[r];
      ao(n) && (n = n());
      const i = mt(n, e);
      if (i && i.set) return i.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(o, e) {
    let t = o.props.length;
    for (; t--; ) {
      let r = o.props[t];
      if ((ao(r) && (r = r()), typeof r == "object" && r !== null && e in r)) {
        const n = mt(r, e);
        return n && !n.configurable && (n.configurable = !0), n;
      }
    }
  },
  has(o, e) {
    if (e === We || e === rl) return !1;
    for (let t of o.props)
      if ((ao(t) && (t = t()), t != null && e in t)) return !0;
    return !1;
  },
  ownKeys(o) {
    const e = [];
    for (let t of o.props) {
      ao(t) && (t = t());
      for (const r in t) e.includes(r) || e.push(r);
    }
    return e;
  },
};
function Me(...o) {
  return new Proxy({ props: o }, _h);
}
function Ca(o) {
  for (var e = W, t = W; e !== null && !(e.f & (Je | It)); ) e = e.parent;
  try {
    return Ge(e), o();
  } finally {
    Ge(t);
  }
}
function ce(o, e, t, r) {
  var n = (t & bu) !== 0,
    i = !oo || (t & yu) !== 0,
    s = (t & ku) !== 0,
    a = (t & wu) !== 0,
    l = !1,
    c;
  s ? ([c, l] = Ch(() => o[e])) : (c = o[e]);
  var d = We in o || rl in o,
    h =
      (s && (mt(o, e)?.set ?? (d && e in o && ((B) => (o[e] = B))))) || void 0,
    u = r,
    p = !0,
    g = !1,
    f = () => ((g = !0), p && ((p = !1), a ? (u = Bt(r)) : (u = r)), u);
  c === void 0 && r !== void 0 && (h && i && cu(), (c = f()), h && h(c));
  var m;
  if (i)
    m = () => {
      var B = o[e];
      return B === void 0 ? f() : ((p = !0), (g = !1), B);
    };
  else {
    var k = Ca(() => (n ? ie : jn)(() => o[e]));
    (k.f |= tu),
      (m = () => {
        var B = T(k);
        return B !== void 0 && (u = void 0), B === void 0 ? u : B;
      });
  }
  if (!(t & sl)) return m;
  if (h) {
    var v = o.$$legacy;
    return function (B, C) {
      return arguments.length > 0
        ? ((!i || !C || v || l) && h(C ? m() : B), B)
        : m();
    };
  }
  var w = !1,
    b = !1,
    y = cl(c),
    _ = Ca(() =>
      ie(() => {
        var B = m(),
          C = T(y);
        return w ? ((w = !1), (b = !0), C) : ((b = !1), (y.v = B));
      }),
    );
  return (
    n || (_.equals = Pn),
    function (B, C) {
      if (arguments.length > 0) {
        const x = C ? T(_) : i && s ? ae(B) : B;
        return (
          _.equals(x) ||
            ((w = !0), V(y, x), g && u !== void 0 && (u = x), Bt(() => T(_))),
          B
        );
      }
      return T(_);
    }
  );
}
function Sh(o) {
  J === null && ll(),
    oo && J.l !== null
      ? Th(J).m.push(o)
      : Ot(() => {
          const e = Bt(o);
          if (typeof e == "function") return e;
        });
}
function jl(o) {
  J === null && ll(), Sh(() => () => Bt(o));
}
function Th(o) {
  var e = o.l;
  return (e.u ??= { a: [], b: [], m: [] });
}
const Oh = "5";
typeof window < "u" && (window.__svelte ||= { v: new Set() }).v.add(Oh);
gu();
class Bh {
  #e = Xe(ae([]));
  get notes() {
    return T(this.#e);
  }
  set notes(e) {
    V(this.#e, ae(e));
  }
  #t = Xe(null);
  get activeNoteId() {
    return T(this.#t);
  }
  set activeNoteId(e) {
    V(this.#t, ae(e));
  }
  constructor() {
    this.loadFromLocalStorage(), this.setupAutoSave();
  }
  setupAutoSave() {
    Pu(() => {
      Ot(() => {
        this.saveToLocalStorage();
      });
    });
  }
  loadFromLocalStorage() {
    const e = localStorage.getItem("NoteList");
    if (e)
      try {
        this.notes = JSON.parse(e);
      } catch (t) {
        console.error("Error al parsear NoteList desde localStorage:", t),
          (this.notes = []);
      }
    else this.notes = [];
  }
  saveToLocalStorage() {
    try {
      localStorage.setItem("NoteList", JSON.stringify(this.notes));
    } catch (e) {
      console.error("Error al guardar NoteList en localStorage:", e);
    }
  }
  updateNoteById = (e, t) => {
    this.notes = this.notes.map((r) => (r.id === e ? t(r) : r));
  };
  markModified = (e) => {
    const t = e.metadata.map((r) =>
      r.name === "modified" ? { ...r, value: this.currentDate() } : r,
    );
    return { ...e, metadata: t };
  };
  requireNote = (e, t = "Note") => {
    const r = this.getNoteById(e);
    if (!r) throw new Error(`${t} ${e} not found`);
    return r;
  };
  wouldCreateCycle = (e, t) => {
    let r = this.getNoteById(e);
    for (; r?.parentId; ) {
      if (r.parentId === t) return !0;
      r = this.getNoteById(r.parentId);
    }
    return !1;
  };
  validateParentChild = (e, t) => {
    if (
      (this.requireNote(e, "Parent note"),
      this.requireNote(t, "Child note"),
      this.wouldCreateCycle(e, t))
    )
      throw new Error("This operation would create a circular reference");
  };
  validateNoteOrder(e, t, r) {
    const n = {
      sameLength: e.length === t.length,
      allIdsValid: e.every((i) => t.includes(i)),
      allUnique: new Set(e).size === e.length,
      contextValid: r ? e.every(r) : !0,
    };
    return Object.values(n).every(Boolean);
  }
  validateRootOrder = (e) => {
    const t = this.getRootNotes().map((r) => r.id);
    return this.validateNoteOrder(e, t);
  };
  validateSiblingOrder = (e, t) =>
    this.validateNoteOrder(
      t,
      e.children,
      (r) => this.getNoteById(r)?.parentId === e.id,
    );
  removeFromParent = (e) => {
    this.notes = this.notes.map((t) =>
      t.children.includes(e)
        ? this.markModified({
            ...t,
            children: t.children.filter((r) => r !== e),
          })
        : t,
    );
  };
  addChild = (e, t) => {
    this.validateParentChild(e, t);
    const r = this.getNoteById(t);
    r && r.parentId && r.parentId !== e && this.removeFromParent(t),
      this.updateNoteById(e, (n) =>
        n.children.includes(t)
          ? n
          : this.markModified({ ...n, children: [...n.children, t] }),
      ),
      this.updateNoteById(t, (n) => ({ ...n, parentId: e }));
  };
  handleParentChange = (e, t) => {
    const r = this.requireNote(e);
    t !== r.parentId &&
      (t
        ? this.addChild(t, e)
        : r.parentId &&
          (this.removeFromParent(e),
          this.updateNoteById(e, (n) =>
            this.markModified({ ...n, parentId: void 0 }),
          )));
  };
  generateUniqueTitle = () => {
    const e = "Nota Nueva",
      t = new Set(this.notes.map((n) => n.title));
    if (!t.has(e)) return e;
    let r = 1;
    for (; t.has(`${e} ${r}`); ) r++;
    return `${e} ${r}`;
  };
  createDefaultMetadata = () => [
    {
      id: crypto.randomUUID(),
      name: "created",
      value: this.currentDate(),
      type: "datetime",
    },
    {
      id: crypto.randomUUID(),
      name: "modified",
      value: this.currentDate(),
      type: "datetime",
    },
  ];
  currentDate = () => new Date().toISOString();
  sanitizeTitle = (e) =>
    e
      .replace(/[\n\r]+/g, " ")
      .trim()
      .slice(0, 100);
  getDescendants = (e) => {
    const t = this.getNoteById(e);
    return t
      ? t.children.reduce((r, n) => [...r, n, ...this.getDescendants(n)], [])
      : [];
  };
  createNote = (e) => {
    typeof e == "string" &&
      (console.log("probando"), this.requireNote(e, "Parent note"));
    const t = {
      id: crypto.randomUUID(),
      title: this.generateUniqueTitle(),
      children: [],
      content: "",
      metadata: this.createDefaultMetadata(),
      properties: [],
      parentId: typeof e == "string" ? e : void 0,
    };
    (this.notes = [...this.notes, t]),
      typeof e == "string" && this.addChild(e, t.id),
      (this.activeNoteId = t.id);
  };
  updateNote = (e, t) => {
    this.requireNote(e),
      "parentId" in t && this.handleParentChange(e, t.parentId ?? null),
      this.updateNoteById(e, (r) => {
        const n = {
          ...r,
          ...t,
          title: this.sanitizeTitle(t.title ?? r.title),
          properties: t.properties ?? r.properties,
        };
        return this.markModified(n);
      });
  };
  deleteNote = (e) => {
    this.requireNote(e);
    const t = new Set([e, ...this.getDescendants(e)]);
    (this.notes = this.notes
      .filter((r) => !t.has(r.id))
      .map((r) =>
        r.children.some((n) => t.has(n))
          ? this.markModified({
              ...r,
              children: r.children.filter((n) => !t.has(n)),
            })
          : r,
      )),
      this.activeNoteId &&
        t.has(this.activeNoteId) &&
        (this.activeNoteId = null);
  };
  moveNote = (e, t) => {
    const r = this.requireNote(e);
    if (t !== r.parentId) {
      if (t === null) {
        r.parentId &&
          (this.removeFromParent(e), this.updateNote(e, { parentId: void 0 }));
        return;
      }
      if ((this.requireNote(t, "New parent note"), t === e))
        throw new Error("Cannot move note to itself");
      if (this.wouldCreateCycle(t, e))
        throw new Error("Cannot move note to its own descendant");
      this.handleParentChange(e, t);
    }
  };
  reorderNotes = (e, t) => {
    if (e === null) {
      if ((this.getRootNotes().map((n) => n.id), !this.validateRootOrder(t)))
        throw new Error("Invalid root notes order");
      this.notes = [
        ...t.map((n) => this.requireNote(n)),
        ...this.notes.filter((n) => n.parentId !== void 0),
      ];
      return;
    }
    const r = this.requireNote(e, "Parent note");
    if (!this.validateSiblingOrder(r, t))
      throw new Error("Invalid children order");
    this.updateNoteById(e, (n) => this.markModified({ ...n, children: t }));
  };
  createProperty = (e, t) => {
    if (!this.getNoteById(e)) throw new Error(`Note ${e} not found`);
    this.notes = this.notes.map((r) => {
      if (r.id === e) {
        const n = {
          ...t,
          id: crypto.randomUUID(),
          value: t.value ?? this.getDefaultTypeValue(t.type),
        };
        return {
          ...r,
          properties: [...r.properties, n],
          metadata: r.metadata.map((i) =>
            i.name === "modified" ? { ...i, value: this.currentDate() } : i,
          ),
        };
      }
      return r;
    });
  };
  updateProperty = (e, t, r) => {
    if (!this.getNoteById(e)) throw new Error(`Note ${e} not found`);
    this.notes = this.notes.map((n) => {
      if (n.id === e) {
        const i = n.properties.map((s) => {
          if (s.id === t) {
            const a = r.type ?? s.type;
            return {
              ...s,
              ...r,
              value:
                r.type !== void 0
                  ? this.getDefaultTypeValue(a)
                  : (r.value ?? s.value),
              type: a,
            };
          }
          return s;
        });
        return {
          ...n,
          properties: i,
          metadata: n.metadata.map((s) =>
            s.name === "modified" ? { ...s, value: this.currentDate() } : s,
          ),
        };
      }
      return n;
    });
  };
  deleteProperty = (e, t) => {
    const r = this.getNoteById(e);
    if (!r) throw new Error(`Note ${e} not found`);
    if (!r.properties.some((n) => n.id === t))
      throw new Error(`Property ${t} not found in note ${e}`);
    this.notes = this.notes.map((n) =>
      n.id === e
        ? {
            ...n,
            properties: n.properties.filter((i) => i.id !== t),
            metadata: n.metadata.map((i) =>
              i.name === "modified" ? { ...i, value: this.currentDate() } : i,
            ),
          }
        : n,
    );
  };
  getDefaultTypeValue(e) {
    switch (e) {
      case "text":
        return "";
      case "list":
        return [];
      case "number":
        return 0;
      case "check":
        return !1;
      case "date":
        return new Date().toISOString().split("T")[0];
      case "datetime":
        return new Date().toISOString();
      default:
        return "";
    }
  }
  getNoteById = (e) => this.notes.find((t) => t.id === e);
  getActiveNote = () => {
    if (!this.activeNoteId) return null;
    const e = this.getNoteById(this.activeNoteId);
    return (
      e ||
      (console.warn("Active note was removed, cleaning reference"),
      (this.activeNoteId = null),
      null)
    );
  };
  getRootNotes = () => this.notes.filter((e) => !e.parentId);
  getBreadcrumbPath(e) {
    const t = [];
    let r = this.getNoteById(e);
    for (; r; )
      t.unshift({ id: r.id, title: r.title }),
        (r = r.parentId ? this.getNoteById(r.parentId) : void 0);
    return t;
  }
  setActiveNote = (e) => {
    this.requireNote(e), (this.activeNoteId = e);
  };
}
const X = ae(new Bh());
class Mh {
  #e = Xe(
    ae({
      propertyEditor: {
        isVisible: !1,
        targetNoteId: null,
        editingProperty: null,
        originalName: null,
      },
      dragAndDrop: null,
      windows: [],
      activeWindowId: null,
      focus: { targetId: null, timestamp: 0 },
    }),
  );
  get state() {
    return T(this.#e);
  }
  set state(e) {
    V(this.#e, ae(e));
  }
  clearDragAndDrop = () => {
    this.state.dragAndDrop = null;
  };
  openPropertyEditor = (e, t = null) => {
    this.state.propertyEditor = {
      isVisible: !0,
      targetNoteId: e,
      editingProperty: t ? { ...t } : null,
      originalName: t?.name || null,
    };
  };
  closePropertyEditor = () => {
    this.state.propertyEditor = {
      isVisible: !1,
      targetNoteId: null,
      editingProperty: null,
      originalName: null,
    };
  };
  updateEditingProperty = (e) => {
    this.state.propertyEditor.editingProperty &&
      (this.state.propertyEditor.editingProperty = {
        ...this.state.propertyEditor.editingProperty,
        ...e,
      });
  };
  createWindow = (e, t) => {
    const r = { id: crypto.randomUUID(), noteId: e, title: t },
      n = { id: crypto.randomUUID(), tabs: [r], activeTabId: r.id };
    return (
      (this.state.windows = [...this.state.windows, n]),
      (this.state.activeWindowId = n.id),
      n
    );
  };
  addTabToWindow = (e, t, r) => {
    const n = { id: crypto.randomUUID(), noteId: t, title: r };
    this.state.windows = this.state.windows.map((i) =>
      i.id === e ? { ...i, tabs: [...i.tabs, n], activeTabId: n.id } : i,
    );
  };
  switchActiveTab = (e, t) => {
    this.state.windows = this.state.windows.map((r) =>
      r.id === e ? { ...r, activeTabId: t } : r,
    );
  };
  closeTab = (e, t) => {
    this.state.windows = this.state.windows.map((r) => {
      if (r.id === e) {
        const n = r.tabs.filter((s) => s.id !== t),
          i =
            r.activeTabId === t
              ? n.length > 0
                ? n[0].id
                : null
              : r.activeTabId;
        return { ...r, tabs: n, activeTabId: i };
      }
      return r;
    });
  };
  closeWindow = (e) => {
    (this.state.windows = this.state.windows.filter((t) => t.id !== e)),
      this.state.activeWindowId === e &&
        (this.state.activeWindowId =
          this.state.windows.length > 0 ? this.state.windows[0].id : null);
  };
  requestFocus = (e) => {
    this.state.focus = { targetId: e, timestamp: Date.now() };
  };
  clearFocus = () => {
    this.state.focus = { targetId: null, timestamp: 0 };
  };
}
const q = ae(new Mh());
/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */ const Ih = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
var Lh = rh("<svg><!><!></svg>");
function Ie(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = ve(t, [
      "name",
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "iconNode",
    ]);
  Oe(e, !1);
  let n = ce(e, "name", 8, void 0),
    i = ce(e, "color", 8, "currentColor"),
    s = ce(e, "size", 8, 24),
    a = ce(e, "strokeWidth", 8, 2),
    l = ce(e, "absoluteStrokeWidth", 8, !1),
    c = ce(e, "iconNode", 24, () => []);
  const d = (...f) =>
    f.filter((m, k, v) => !!m && v.indexOf(m) === k).join(" ");
  xh();
  var h = Lh();
  let u;
  var p = P(h);
  yt(p, 1, c, Oo, (f, m) => {
    let k = () => T(m)[0],
      v = () => T(m)[1];
    var w = te(),
      b = K(w);
    ph(b, k, !0, (y, _) => {
      let B;
      re(
        () =>
          (B = ya(
            y,
            B,
            { ...v() },
            void 0,
            y.namespaceURI === al,
            y.nodeName.includes("-"),
          )),
      );
    }),
      I(f, w);
  });
  var g = U(p);
  we(g, e, "default", {}),
    re(
      (f, m) =>
        (u = ya(
          h,
          u,
          {
            ...Ih,
            ...r,
            width: s(),
            height: s(),
            stroke: i(),
            "stroke-width": f,
            class: m,
          },
          void 0,
          !0,
        )),
      [
        () => (l() ? (Number(a()) * 24) / Number(s()) : a()),
        () => d("lucide-icon", "lucide", n() ? `lucide-${n()}` : "", t.class),
      ],
      jn,
    ),
    I(o, h),
    Be();
}
function Ph(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "calendar-clock" }, () => t, {
      iconNode: [
        [
          "path",
          { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" },
        ],
        ["path", { d: "M16 2v4" }],
        ["path", { d: "M8 2v4" }],
        ["path", { d: "M3 10h5" }],
        ["path", { d: "M17.5 17.5 16 16.3V14" }],
        ["circle", { cx: "16", cy: "16", r: "6" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Nh(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "calendar" }, () => t, {
      iconNode: [
        ["path", { d: "M8 2v4" }],
        ["path", { d: "M16 2v4" }],
        ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
        ["path", { d: "M3 10h18" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Ah(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "chevron-down" }, () => t, {
      iconNode: [["path", { d: "m6 9 6 6 6-6" }]],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function jh(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "chevron-right" }, () => t, {
      iconNode: [["path", { d: "m9 18 6-6-6-6" }]],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Rh(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "ellipsis-vertical" }, () => t, {
      iconNode: [
        ["circle", { cx: "12", cy: "12", r: "1" }],
        ["circle", { cx: "12", cy: "5", r: "1" }],
        ["circle", { cx: "12", cy: "19", r: "1" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Dh(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "hash" }, () => t, {
      iconNode: [
        ["line", { x1: "4", x2: "20", y1: "9", y2: "9" }],
        ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }],
        ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }],
        ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function $h(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "list" }, () => t, {
      iconNode: [
        ["path", { d: "M3 12h.01" }],
        ["path", { d: "M3 18h.01" }],
        ["path", { d: "M3 6h.01" }],
        ["path", { d: "M8 12h13" }],
        ["path", { d: "M8 18h13" }],
        ["path", { d: "M8 6h13" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Rl(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "plus" }, () => t, {
      iconNode: [
        ["path", { d: "M5 12h14" }],
        ["path", { d: "M12 5v14" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Hh(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "sliders-horizontal" }, () => t, {
      iconNode: [
        ["line", { x1: "21", x2: "14", y1: "4", y2: "4" }],
        ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }],
        ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }],
        ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }],
        ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }],
        ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }],
        ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }],
        ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
        ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Fh(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "square-check-big" }, () => t, {
      iconNode: [
        [
          "path",
          {
            d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",
          },
        ],
        ["path", { d: "m9 11 3 3L22 4" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Uh(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "text" }, () => t, {
      iconNode: [
        ["path", { d: "M17 6.1H3" }],
        ["path", { d: "M21 12.1H3" }],
        ["path", { d: "M15.1 18H3" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Fn(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "trash-2" }, () => t, {
      iconNode: [
        ["path", { d: "M3 6h18" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
function Dl(o, e) {
  const t = ve(e, ["children", "$$slots", "$$events", "$$legacy"]);
  Ie(
    o,
    Me({ name: "x" }, () => t, {
      iconNode: [
        ["path", { d: "M18 6 6 18" }],
        ["path", { d: "m6 6 12 12" }],
      ],
      children: (n, i) => {
        var s = te(),
          a = K(s);
        we(a, e, "default", {}), I(n, s);
      },
      $$slots: { default: !0 },
    }),
  );
}
const zh = (o, e) => {
    o.stopPropagation(), V(e, !T(e));
  },
  Ea = (o, e, t) => {
    (o.key === "Enter" || o.type === "click") &&
      (X.setActiveNote(e.note.id),
      e.note.children.length > 0 && !T(t) && V(t, !0));
  };
var Wh = $(
    '<button class="p-1 hover:bg-(--color-neutral) rounded-field transition-colors"><!></button>',
  ),
  qh = $('<ul class="space-y-1"></ul>'),
  Vh = $(
    '<li><div role="button" tabindex="0" draggable="true"><!> <span class="truncate cursor-move"> </span></div> <!></li>',
  );
function $l(o, e) {
  Oe(e, !0);
  let t = ce(e, "depth", 3, 0),
    r = Xe(!0),
    n = ie(() => {
      q.state.dragAndDrop?.draggedNoteId, e.note.id;
    }),
    i = ie(() =>
      q.state.dragAndDrop && q.state.dragAndDrop.dropTargetId === e.note.id
        ? q.state.dragAndDrop.position
        : null,
    ),
    s = ie(() => e.note.id === X.activeNoteId);
  const a = (b) => {
      b.stopPropagation(),
        b.dataTransfer.setData("text/plain", e.note.id),
        (b.dataTransfer.effectAllowed = "move"),
        (q.state.dragAndDrop = {
          draggedNoteId: e.note.id,
          dropTargetId: null,
          position: null,
        });
    },
    l = (b) => {
      q.clearDragAndDrop();
    },
    c = (b) => {
      if (
        (b.preventDefault(), q.state.dragAndDrop?.draggedNoteId === e.note.id)
      )
        return;
      b.dataTransfer.dropEffect = "move";
      const _ = b.currentTarget.getBoundingClientRect(),
        B = b.clientY - _.top;
      let C = null;
      B < _.height * 0.3
        ? (C = "top")
        : B > _.height * 0.7
          ? (C = "bottom")
          : (C = "center"),
        q.state.dragAndDrop &&
          ((q.state.dragAndDrop.dropTargetId = e.note.id),
          (q.state.dragAndDrop.position = C));
    },
    d = (b) => {
      const y = b.currentTarget.getBoundingClientRect();
      (b.clientX < y.left ||
        b.clientX > y.right ||
        b.clientY < y.top ||
        b.clientY > y.bottom) &&
        q.state.dragAndDrop?.dropTargetId === e.note.id &&
        ((q.state.dragAndDrop.dropTargetId = null),
        (q.state.dragAndDrop.position = null));
    },
    h = (b) => {
      b.preventDefault(), b.stopPropagation();
      const y = q.state.dragAndDrop;
      if ((q.clearDragAndDrop(), !y)) return;
      const { draggedNoteId: _, position: B } = y;
      if (!(!_ || _ === e.note.id)) {
        if (B === "center") X.moveNote(_, e.note.id);
        else if (B === "top" || B === "bottom") {
          const C = e.note.parentId || null;
          X.moveNote(_, C);
          let x = C
            ? X.getNoteById(C)?.children || []
            : X.getRootNotes().map((M) => M.id);
          x = x.filter((M) => M !== _);
          const O = x.indexOf(e.note.id),
            S = B === "bottom" ? O + 1 : O;
          x.splice(S, 0, _), X.reorderNotes(C, x);
        }
      }
    };
  var u = Vh(),
    p = P(u);
  (p.__click = [Ea, e, r]), (p.__keydown = [Ea, e, r]);
  var g = P(p);
  {
    var f = (b) => {
      var y = Wh();
      y.__click = [zh, r];
      var _ = P(y);
      {
        var B = (x) => {
            Ah(x, { size: "18", "aria-hidden": "true" });
          },
          C = (x) => {
            jh(x, { size: "18", "aria-hidden": "true" });
          };
        ne(_, (x) => {
          T(r) ? x(B) : x(C, !1);
        });
      }
      re(() => {
        _e(y, "aria-expanded", T(r) ? "true" : "false"),
          _e(y, "aria-label", T(r) ? "Colapsar" : "Expandir");
      }),
        I(b, y);
    };
    ne(g, (b) => {
      e.note.children && e.note.children.length > 0 && b(f);
    });
  }
  var m = U(g, 2),
    k = P(m),
    v = U(p, 2);
  {
    var w = (b) => {
      var y = qh();
      yt(
        y,
        21,
        () => e.note.children,
        Oo,
        (_, B) => {
          const C = ie(() => X.getNoteById(T(B))),
            x = ie(() => t() + 1);
          $l(_, {
            get note() {
              return T(C);
            },
            get depth() {
              return T(x);
            },
          });
        },
      ),
        I(b, y);
    };
    ne(v, (b) => {
      T(r) && e.note.children.length > 0 && b(w);
    });
  }
  re(() => {
    sr(
      u,
      `group/node list-none cursor-pointer ${(T(n) ? "opacity-50" : "") ?? ""}`,
    ),
      sr(
        p,
        `flex ml-1.5 py-1 rounded-field select-none transition-colors hover:bg-(--color-neutral)
           ${(T(s) ? "bg-(--color-neutral)" : "") ?? ""}
           ${(T(i) === "top" ? "drop-top" : "") ?? ""} 
           ${(T(i) === "bottom" ? "drop-bottom" : "") ?? ""} 
           ${(T(i) === "center" ? "drop-center" : "") ?? ""} svelte-16wo5j7`,
      ),
      _e(p, "style", `margin-left: ${t() * 0.25}rem`),
      Ve(k, e.note.title);
  }),
    _t("dragstart", p, a),
    _t("dragend", p, l),
    _t("dragover", p, c),
    _t("dragleave", p, d),
    _t("drop", p, h),
    I(o, u),
    Be();
}
$e(["click", "keydown"]);
var Yh = () => X.createNote(),
  Kh = $(
    '<ul class="menu rounded-box w-full p-2"><li class="group menu-title flex flex-row justify-between"><p>Notes</p> <button class="btn btn-xs mb-4 btn-success inline-flex w-auto opacity-0 group-hover:opacity-100"><!></button></li> <!></ul>',
  );
function Xh(o, e) {
  Oe(e, !0);
  let t = ie(() => X.getRootNotes());
  var r = Kh(),
    n = P(r),
    i = U(P(n), 2);
  i.__click = [Yh];
  var s = P(i);
  Rl(s, { size: "18" });
  var a = U(n, 2);
  {
    var l = (c) => {
      var d = te(),
        h = K(d);
      yt(
        h,
        17,
        () => T(t),
        (u) => u.id,
        (u, p) => {
          $l(u, {
            get note() {
              return T(p);
            },
            depth: 0,
          });
        },
      ),
        I(c, d);
    };
    ne(a, (c) => {
      T(t).length > 0 && c(l);
    });
  }
  I(o, r), Be();
}
$e(["click"]);
var Gh = $(
  '<aside class="bg-base-200 overflow-hidden relative"><div class="handle svelte-uejue7" role="button" tabindex="-1"></div> <!></aside>',
);
function Zh(o, e) {
  Oe(e, !0);
  let t = Xe(12.5),
    r = !1,
    n = 0,
    i = 0;
  function s(u) {
    (r = !0),
      (n = u.clientX),
      (i = T(t)),
      document.addEventListener("mousemove", a),
      document.addEventListener("mouseup", l),
      document.body.classList.add("cursor-col-resize", "select-none");
  }
  function a(u) {
    if (!r) return;
    const g = (u.clientX - n) / 16;
    let f = i + g;
    (f = Math.max(8, Math.min(30, f))), V(t, ae(f));
  }
  function l() {
    (r = !1),
      document.removeEventListener("mousemove", a),
      document.removeEventListener("mouseup", l),
      document.body.classList.remove("cursor-col-resize", "select-none");
  }
  jl(() => {
    document.removeEventListener("mousemove", a),
      document.removeEventListener("mouseup", l);
  });
  var c = Gh(),
    d = P(c);
  d.__mousedown = s;
  var h = U(d, 2);
  Xh(h, {}),
    re(() => _e(c, "style", `width: ${T(t) ?? ""}rem;`)),
    I(o, c),
    Be();
}
$e(["mousedown"]);
var Hl = ((o) => (
    (o.EDITOR = "editor"),
    (o.TITLE = "title"),
    (o.PROPERTY_EDITOR = "property-editor"),
    o
  ))(Hl || {}),
  Jh = $('<h1 class="text-4xl font-bold my-6" contenteditable="true"> </h1>');
function Qh(o, e) {
  Oe(e, !0);
  let t = ie(() => X.getNoteById(e.id).title);
  function r() {
    let l = i.innerText;
    T(t) && X.updateNote(e.id, { title: X.sanitizeTitle(l) });
  }
  const n = (l) => {
    l.key === "Escape" && i.blur(),
      l.key === "Enter" &&
        (l.preventDefault(), r(), i.blur(), q.requestFocus(Hl.EDITOR));
  };
  let i;
  var s = Jh();
  s.__keydown = n;
  var a = P(s);
  ar(
    s,
    (l) => (i = l),
    () => i,
  ),
    re(() => Ve(a, T(t))),
    _t("blur", s, () => {
      r();
    }),
    I(o, s),
    Be();
}
$e(["keydown"]);
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}",
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var ko =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Cr(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
function ep(o) {
  if (o.__esModule) return o;
  var e = o.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(o).forEach(function (r) {
      var n = Object.getOwnPropertyDescriptor(o, r);
      Object.defineProperty(
        t,
        r,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return o[r];
              },
            },
      );
    }),
    t
  );
}
function Yr() {}
Object.assign(Yr, {
  default: Yr,
  register: Yr,
  revert: function () {},
  __esModule: !0,
});
Element.prototype.matches ||
  (Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (o) {
      const e = (this.document || this.ownerDocument).querySelectorAll(o);
      let t = e.length;
      for (; --t >= 0 && e.item(t) !== this; );
      return t > -1;
    });
Element.prototype.closest ||
  (Element.prototype.closest = function (o) {
    let e = this;
    if (!document.documentElement.contains(e)) return null;
    do {
      if (e.matches(o)) return e;
      e = e.parentElement || e.parentNode;
    } while (e !== null);
    return null;
  });
Element.prototype.prepend ||
  (Element.prototype.prepend = function (o) {
    const e = document.createDocumentFragment();
    Array.isArray(o) || (o = [o]),
      o.forEach((t) => {
        const r = t instanceof Node;
        e.appendChild(r ? t : document.createTextNode(t));
      }),
      this.insertBefore(e, this.firstChild);
  });
Element.prototype.scrollIntoViewIfNeeded ||
  (Element.prototype.scrollIntoViewIfNeeded = function (o) {
    o = arguments.length === 0 ? !0 : !!o;
    const e = this.parentNode,
      t = window.getComputedStyle(e, null),
      r = parseInt(t.getPropertyValue("border-top-width")),
      n = parseInt(t.getPropertyValue("border-left-width")),
      i = this.offsetTop - e.offsetTop < e.scrollTop,
      s =
        this.offsetTop - e.offsetTop + this.clientHeight - r >
        e.scrollTop + e.clientHeight,
      a = this.offsetLeft - e.offsetLeft < e.scrollLeft,
      l =
        this.offsetLeft - e.offsetLeft + this.clientWidth - n >
        e.scrollLeft + e.clientWidth,
      c = i && !s;
    (i || s) &&
      o &&
      (e.scrollTop =
        this.offsetTop -
        e.offsetTop -
        e.clientHeight / 2 -
        r +
        this.clientHeight / 2),
      (a || l) &&
        o &&
        (e.scrollLeft =
          this.offsetLeft -
          e.offsetLeft -
          e.clientWidth / 2 -
          n +
          this.clientWidth / 2),
      (i || s || a || l) && !o && this.scrollIntoView(c);
  });
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (o) {
    const e = Date.now();
    return setTimeout(function () {
      o({
        didTimeout: !1,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - e));
        },
      });
    }, 1);
  };
window.cancelIdleCallback =
  window.cancelIdleCallback ||
  function (o) {
    clearTimeout(o);
  };
let tp = (o = 21) =>
  crypto
    .getRandomValues(new Uint8Array(o))
    .reduce(
      (e, t) => (
        (t &= 63),
        t < 36
          ? (e += t.toString(36))
          : t < 62
            ? (e += (t - 26).toString(36).toUpperCase())
            : t > 62
              ? (e += "-")
              : (e += "_"),
        e
      ),
      "",
    );
var Fl = ((o) => (
  (o.VERBOSE = "VERBOSE"),
  (o.INFO = "INFO"),
  (o.WARN = "WARN"),
  (o.ERROR = "ERROR"),
  o
))(Fl || {});
const j = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
  },
  op = { LEFT: 0 };
function Bo(o, e, t = "log", r, n = "color: inherit") {
  if (!("console" in window) || !window.console[t]) return;
  const i = ["info", "log", "warn", "error"].includes(t),
    s = [];
  switch (Bo.logLevel) {
    case "ERROR":
      if (t !== "error") return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t)) return;
      break;
    case "INFO":
      if (!i || o) return;
      break;
  }
  r && s.push(r);
  const a = "Editor.js 2.31.0-rc.7";
  o &&
    (i
      ? (s.unshift(
          `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`,
          n,
        ),
        (e = `%c${a}%c ${e}`))
      : (e = `( ${a} )${e}`));
  try {
    i ? (r ? console[t](`${e} %o`, ...s) : console[t](e, ...s)) : console[t](e);
  } catch {}
}
Bo.logLevel = "VERBOSE";
function rp(o) {
  Bo.logLevel = o;
}
const z = Bo.bind(window, !1),
  Le = Bo.bind(window, !0);
function Mt(o) {
  return Object.prototype.toString
    .call(o)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
function Q(o) {
  return Mt(o) === "function" || Mt(o) === "asyncfunction";
}
function le(o) {
  return Mt(o) === "object";
}
function st(o) {
  return Mt(o) === "string";
}
function np(o) {
  return Mt(o) === "boolean";
}
function _a(o) {
  return Mt(o) === "number";
}
function Sa(o) {
  return Mt(o) === "undefined";
}
function Pe(o) {
  return o ? Object.keys(o).length === 0 && o.constructor === Object : !0;
}
function Ul(o) {
  return (
    (o > 47 && o < 58) ||
    o === 32 ||
    o === 13 ||
    o === 229 ||
    (o > 64 && o < 91) ||
    (o > 95 && o < 112) ||
    (o > 185 && o < 193) ||
    (o > 218 && o < 223)
  );
}
async function ip(o, e = () => {}, t = () => {}) {
  async function r(n, i, s) {
    try {
      await n.function(n.data), await i(Sa(n.data) ? {} : n.data);
    } catch {
      s(Sa(n.data) ? {} : n.data);
    }
  }
  return o.reduce(async (n, i) => (await n, r(i, e, t)), Promise.resolve());
}
function zl(o) {
  return Array.prototype.slice.call(o);
}
function lr(o, e) {
  return function () {
    const t = this,
      r = arguments;
    window.setTimeout(() => o.apply(t, r), e);
  };
}
function sp(o) {
  return o.name.split(".").pop();
}
function ap(o) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(o);
}
function Ta(o, e, t) {
  let r;
  return (...n) => {
    const i = this,
      s = () => {
        (r = null), o.apply(i, n);
      };
    window.clearTimeout(r), (r = window.setTimeout(s, e));
  };
}
function fn(o, e, t = void 0) {
  let r,
    n,
    i,
    s = null,
    a = 0;
  t || (t = {});
  const l = function () {
    (a = t.leading === !1 ? 0 : Date.now()),
      (s = null),
      (i = o.apply(r, n)),
      s || (r = n = null);
  };
  return function () {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return (
      (r = this),
      (n = arguments),
      d <= 0 || d > e
        ? (s && (clearTimeout(s), (s = null)),
          (a = c),
          (i = o.apply(r, n)),
          s || (r = n = null))
        : !s && t.trailing !== !1 && (s = setTimeout(l, d)),
      i
    );
  };
}
function lp() {
  const o = { win: !1, mac: !1, x11: !1, linux: !1 },
    e = Object.keys(o).find(
      (t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1,
    );
  return e && (o[e] = !0), o;
}
function cr(o) {
  return o[0].toUpperCase() + o.slice(1);
}
function gn(o, ...e) {
  if (!e.length) return o;
  const t = e.shift();
  if (le(o) && le(t))
    for (const r in t)
      le(t[r])
        ? (o[r] || Object.assign(o, { [r]: {} }), gn(o[r], t[r]))
        : Object.assign(o, { [r]: t[r] });
  return gn(o, ...e);
}
function Un(o) {
  const e = lp();
  return (
    (o = o
      .replace(/shift/gi, "⇧")
      .replace(/backspace/gi, "⌫")
      .replace(/enter/gi, "⏎")
      .replace(/up/gi, "↑")
      .replace(/left/gi, "→")
      .replace(/down/gi, "↓")
      .replace(/right/gi, "←")
      .replace(/escape/gi, "⎋")
      .replace(/insert/gi, "Ins")
      .replace(/delete/gi, "␡")
      .replace(/\+/gi, " + ")),
    e.mac
      ? (o = o.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥"))
      : (o = o.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN")),
    o
  );
}
function cp(o) {
  try {
    return new URL(o).href;
  } catch {}
  return o.substring(0, 2) === "//"
    ? window.location.protocol + o
    : window.location.origin + o;
}
function dp() {
  return tp(10);
}
function up(o) {
  window.open(o, "_blank");
}
function hp(o = "") {
  return `${o}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function mn(o, e, t) {
  const r = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  o && Le(r, "warn");
}
function no(o, e, t) {
  const r = t.value ? "value" : "get",
    n = t[r],
    i = `#${e}Cache`;
  if (
    ((t[r] = function (...s) {
      return this[i] === void 0 && (this[i] = n.apply(this, ...s)), this[i];
    }),
    r === "get" && t.set)
  ) {
    const s = t.set;
    t.set = function (a) {
      delete o[i], s.apply(this, a);
    };
  }
  return t;
}
const Wl = 650;
function io() {
  return window.matchMedia(`(max-width: ${Wl}px)`).matches;
}
const vn =
  typeof window < "u" &&
  window.navigator &&
  window.navigator.platform &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1));
function pp(o, e) {
  const t = Array.isArray(o) || le(o),
    r = Array.isArray(e) || le(e);
  return t || r ? JSON.stringify(o) === JSON.stringify(e) : o === e;
}
let E = class pe {
  static isSingleTag(e) {
    return (
      e.tagName &&
      [
        "AREA",
        "BASE",
        "BR",
        "COL",
        "COMMAND",
        "EMBED",
        "HR",
        "IMG",
        "INPUT",
        "KEYGEN",
        "LINK",
        "META",
        "PARAM",
        "SOURCE",
        "TRACK",
        "WBR",
      ].includes(e.tagName)
    );
  }
  static isLineBreakTag(e) {
    return e && e.tagName && ["BR", "WBR"].includes(e.tagName);
  }
  static make(e, t = null, r = {}) {
    const n = document.createElement(e);
    if (Array.isArray(t)) {
      const i = t.filter((s) => s !== void 0);
      n.classList.add(...i);
    } else t && n.classList.add(t);
    for (const i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    return n;
  }
  static text(e) {
    return document.createTextNode(e);
  }
  static append(e, t) {
    Array.isArray(t) ? t.forEach((r) => e.appendChild(r)) : e.appendChild(t);
  }
  static prepend(e, t) {
    Array.isArray(t)
      ? ((t = t.reverse()), t.forEach((r) => e.prepend(r)))
      : e.prepend(t);
  }
  static swap(e, t) {
    const r = document.createElement("div"),
      n = e.parentNode;
    n.insertBefore(r, e),
      n.insertBefore(e, t),
      n.insertBefore(t, r),
      n.removeChild(r);
  }
  static find(e = document, t) {
    return e.querySelector(t);
  }
  static get(e) {
    return document.getElementById(e);
  }
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  static get allInputsSelector() {
    return (
      "[contenteditable=true], textarea, input:not([type]), " +
      ["text", "password", "email", "number", "search", "tel", "url"]
        .map((e) => `input[type="${e}"]`)
        .join(", ")
    );
  }
  static findAllInputs(e) {
    return zl(e.querySelectorAll(pe.allInputsSelector)).reduce(
      (t, r) =>
        pe.isNativeInput(r) || pe.containsOnlyInlineElements(r)
          ? [...t, r]
          : [...t, ...pe.getDeepestBlockElements(r)],
      [],
    );
  }
  static getDeepestNode(e, t = !1) {
    const r = t ? "lastChild" : "firstChild",
      n = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[r]) {
      let i = e[r];
      if (pe.isSingleTag(i) && !pe.isNativeInput(i) && !pe.isLineBreakTag(i))
        if (i[n]) i = i[n];
        else if (i.parentNode[n]) i = i.parentNode[n];
        else return i.parentNode;
      return this.getDeepestNode(i, t);
    }
    return e;
  }
  static isElement(e) {
    return _a(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  static isFragment(e) {
    return _a(e)
      ? !1
      : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  static isNativeInput(e) {
    const t = ["INPUT", "TEXTAREA"];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  static canSetCaret(e) {
    let t = !0;
    if (pe.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else t = pe.isContentEditable(e);
    return t;
  }
  static isNodeEmpty(e, t) {
    let r;
    return this.isSingleTag(e) && !this.isLineBreakTag(e)
      ? !1
      : (this.isElement(e) && this.isNativeInput(e)
          ? (r = e.value)
          : (r = e.textContent.replace("​", "")),
        t && (r = r.replace(new RegExp(t, "g"), "")),
        r.length === 0);
  }
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  static isEmpty(e, t) {
    const r = [e];
    for (; r.length > 0; )
      if (((e = r.shift()), !!e)) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t)) return !1;
        e.childNodes && r.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  static isHTMLString(e) {
    const t = pe.make("div");
    return (t.innerHTML = e), t.childElementCount > 0;
  }
  static getContentLength(e) {
    return pe.isNativeInput(e)
      ? e.value.length
      : e.nodeType === Node.TEXT_NODE
        ? e.length
        : e.textContent.length;
  }
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video",
    ];
  }
  static containsOnlyInlineElements(e) {
    let t;
    st(e) ? ((t = document.createElement("div")), (t.innerHTML = e)) : (t = e);
    const r = (n) =>
      !pe.blockElements.includes(n.tagName.toLowerCase()) &&
      Array.from(n.children).every(r);
    return Array.from(t.children).every(r);
  }
  static getDeepestBlockElements(e) {
    return pe.containsOnlyInlineElements(e)
      ? [e]
      : Array.from(e.children).reduce(
          (t, r) => [...t, ...pe.getDeepestBlockElements(r)],
          [],
        );
  }
  static getHolder(e) {
    return st(e) ? document.getElementById(e) : e;
  }
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  static offset(e) {
    const t = e.getBoundingClientRect(),
      r = window.pageXOffset || document.documentElement.scrollLeft,
      n = window.pageYOffset || document.documentElement.scrollTop,
      i = t.top + n,
      s = t.left + r;
    return { top: i, left: s, bottom: i + t.height, right: s + t.width };
  }
};
function fp(o) {
  return !/[^\t\n\r ]/.test(o);
}
function gp(o) {
  const e = window.getComputedStyle(o),
    t = parseFloat(e.fontSize),
    r = parseFloat(e.lineHeight) || t * 1.2,
    n = parseFloat(e.paddingTop),
    i = parseFloat(e.borderTopWidth),
    s = parseFloat(e.marginTop),
    a = t * 0.8,
    l = (r - t) / 2;
  return s + i + n + l + a;
}
function ql(o) {
  o.dataset.empty = E.isEmpty(o) ? "true" : "false";
}
const mp = {
    blockTunes: { toggler: { "Click to tune": "", "or drag to move": "" } },
    inlineToolbar: { converter: { "Convert to": "" } },
    toolbar: { toolbox: { Add: "" } },
    popover: { Filter: "", "Nothing found": "", "Convert to": "" },
  },
  vp = { Text: "", Link: "", Bold: "", Italic: "" },
  bp = {
    link: { "Add a link": "" },
    stub: { "The block can not be displayed correctly.": "" },
  },
  yp = {
    delete: { Delete: "", "Click to delete": "" },
    moveUp: { "Move up": "" },
    moveDown: { "Move down": "" },
  },
  Vl = { ui: mp, toolNames: vp, tools: bp, blockTunes: yp },
  Yl = class zt {
    static ui(e, t) {
      return zt._t(e, t);
    }
    static t(e, t) {
      return zt._t(e, t);
    }
    static setDictionary(e) {
      zt.currentDictionary = e;
    }
    static _t(e, t) {
      const r = zt.getNamespace(e);
      return !r || !r[t] ? t : r[t];
    }
    static getNamespace(e) {
      return e
        .split(".")
        .reduce(
          (t, r) => (!t || !Object.keys(t).length ? {} : t[r]),
          zt.currentDictionary,
        );
    }
  };
Yl.currentDictionary = Vl;
let ge = Yl;
class Kl extends Error {}
let Mo = class {
  constructor() {
    this.subscribers = {};
  }
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []),
      this.subscribers[e].push(t);
  }
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const r = (n) => {
      const i = t(n),
        s = this.subscribers[e].indexOf(r);
      return s !== -1 && this.subscribers[e].splice(s, 1), i;
    };
    this.subscribers[e].push(r);
  }
  emit(e, t) {
    Pe(this.subscribers) ||
      !this.subscribers[e] ||
      this.subscribers[e].reduce((r, n) => {
        const i = n(r);
        return i !== void 0 ? i : r;
      }, t);
  }
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(
        `EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`,
      );
      return;
    }
    for (let r = 0; r < this.subscribers[e].length; r++)
      if (this.subscribers[e][r] === t) {
        delete this.subscribers[e][r];
        break;
      }
  }
  destroy() {
    this.subscribers = {};
  }
};
function et(o) {
  Object.setPrototypeOf(this, {
    get id() {
      return o.id;
    },
    get name() {
      return o.name;
    },
    get config() {
      return o.config;
    },
    get holder() {
      return o.holder;
    },
    get isEmpty() {
      return o.isEmpty;
    },
    get selected() {
      return o.selected;
    },
    set stretched(e) {
      o.stretched = e;
    },
    get stretched() {
      return o.stretched;
    },
    get focusable() {
      return o.focusable;
    },
    call(e, t) {
      return o.call(e, t);
    },
    save() {
      return o.save();
    },
    validate(e) {
      return o.validate(e);
    },
    dispatchChange() {
      o.dispatchChange();
    },
    getActiveToolboxEntry() {
      return o.getActiveToolboxEntry();
    },
  });
}
let Io = class {
    constructor() {
      this.allListeners = [];
    }
    on(e, t, r, n = !1) {
      const i = hp("l"),
        s = { id: i, element: e, eventType: t, handler: r, options: n };
      if (!this.findOne(e, t, r))
        return this.allListeners.push(s), e.addEventListener(t, r, n), i;
    }
    off(e, t, r, n) {
      const i = this.findAll(e, t, r);
      i.forEach((s, a) => {
        const l = this.allListeners.indexOf(i[a]);
        l > -1 &&
          (this.allListeners.splice(l, 1),
          s.element.removeEventListener(s.eventType, s.handler, s.options));
      });
    }
    offById(e) {
      const t = this.findById(e);
      t && t.element.removeEventListener(t.eventType, t.handler, t.options);
    }
    findOne(e, t, r) {
      const n = this.findAll(e, t, r);
      return n.length > 0 ? n[0] : null;
    }
    findAll(e, t, r) {
      let n;
      const i = e ? this.findByEventTarget(e) : [];
      return (
        e && t && r
          ? (n = i.filter((s) => s.eventType === t && s.handler === r))
          : e && t
            ? (n = i.filter((s) => s.eventType === t))
            : (n = i),
        n
      );
    }
    removeAll() {
      this.allListeners.map((e) => {
        e.element.removeEventListener(e.eventType, e.handler, e.options);
      }),
        (this.allListeners = []);
    }
    destroy() {
      this.removeAll();
    }
    findByEventTarget(e) {
      return this.allListeners.filter((t) => {
        if (t.element === e) return t;
      });
    }
    findByType(e) {
      return this.allListeners.filter((t) => {
        if (t.eventType === e) return t;
      });
    }
    findByHandler(e) {
      return this.allListeners.filter((t) => {
        if (t.handler === e) return t;
      });
    }
    findById(e) {
      return this.allListeners.find((t) => t.id === e);
    }
  },
  H = class Xl {
    constructor({ config: e, eventsDispatcher: t }) {
      if (
        ((this.nodes = {}),
        (this.listeners = new Io()),
        (this.readOnlyMutableListeners = {
          on: (r, n, i, s = !1) => {
            this.mutableListenerIds.push(this.listeners.on(r, n, i, s));
          },
          clearAll: () => {
            for (const r of this.mutableListenerIds) this.listeners.offById(r);
            this.mutableListenerIds = [];
          },
        }),
        (this.mutableListenerIds = []),
        new.target === Xl)
      )
        throw new TypeError(
          "Constructors for abstract class Module are not allowed.",
        );
      (this.config = e), (this.eventsDispatcher = t);
    }
    set state(e) {
      this.Editor = e;
    }
    removeAllNodes() {
      for (const e in this.nodes) {
        const t = this.nodes[e];
        t instanceof HTMLElement && t.remove();
      }
    }
    get isRtl() {
      return this.config.i18n.direction === "rtl";
    }
  },
  A = class lt {
    constructor() {
      (this.instance = null),
        (this.selection = null),
        (this.savedSelectionRange = null),
        (this.isFakeBackgroundEnabled = !1),
        (this.commandBackground = "backColor"),
        (this.commandRemoveFormat = "removeFormat");
    }
    static get CSS() {
      return {
        editorWrapper: "codex-editor",
        editorZone: "codex-editor__redactor",
      };
    }
    static get anchorNode() {
      const e = window.getSelection();
      return e ? e.anchorNode : null;
    }
    static get anchorElement() {
      const e = window.getSelection();
      if (!e) return null;
      const t = e.anchorNode;
      return t ? (E.isElement(t) ? t : t.parentElement) : null;
    }
    static get anchorOffset() {
      const e = window.getSelection();
      return e ? e.anchorOffset : null;
    }
    static get isCollapsed() {
      const e = window.getSelection();
      return e ? e.isCollapsed : null;
    }
    static get isAtEditor() {
      return this.isSelectionAtEditor(lt.get());
    }
    static isSelectionAtEditor(e) {
      if (!e) return !1;
      let t = e.anchorNode || e.focusNode;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let r = null;
      return (
        t && t instanceof Element && (r = t.closest(`.${lt.CSS.editorZone}`)),
        r ? r.nodeType === Node.ELEMENT_NODE : !1
      );
    }
    static isRangeAtEditor(e) {
      if (!e) return;
      let t = e.startContainer;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let r = null;
      return (
        t && t instanceof Element && (r = t.closest(`.${lt.CSS.editorZone}`)),
        r ? r.nodeType === Node.ELEMENT_NODE : !1
      );
    }
    static get isSelectionExists() {
      return !!lt.get().anchorNode;
    }
    static get range() {
      return this.getRangeFromSelection(this.get());
    }
    static getRangeFromSelection(e) {
      return e && e.rangeCount ? e.getRangeAt(0) : null;
    }
    static get rect() {
      let e = document.selection,
        t,
        r = { x: 0, y: 0, width: 0, height: 0 };
      if (e && e.type !== "Control")
        return (
          (e = e),
          (t = e.createRange()),
          (r.x = t.boundingLeft),
          (r.y = t.boundingTop),
          (r.width = t.boundingWidth),
          (r.height = t.boundingHeight),
          r
        );
      if (!window.getSelection)
        return z("Method window.getSelection is not supported", "warn"), r;
      if (
        ((e = window.getSelection()),
        e.rangeCount === null || isNaN(e.rangeCount))
      )
        return (
          z("Method SelectionUtils.rangeCount is not supported", "warn"), r
        );
      if (e.rangeCount === 0) return r;
      if (
        ((t = e.getRangeAt(0).cloneRange()),
        t.getBoundingClientRect && (r = t.getBoundingClientRect()),
        r.x === 0 && r.y === 0)
      ) {
        const n = document.createElement("span");
        if (n.getBoundingClientRect) {
          n.appendChild(document.createTextNode("​")),
            t.insertNode(n),
            (r = n.getBoundingClientRect());
          const i = n.parentNode;
          i.removeChild(n), i.normalize();
        }
      }
      return r;
    }
    static get text() {
      return window.getSelection ? window.getSelection().toString() : "";
    }
    static get() {
      return window.getSelection();
    }
    static setCursor(e, t = 0) {
      const r = document.createRange(),
        n = window.getSelection();
      return E.isNativeInput(e)
        ? E.canSetCaret(e)
          ? (e.focus(),
            (e.selectionStart = e.selectionEnd = t),
            e.getBoundingClientRect())
          : void 0
        : (r.setStart(e, t),
          r.setEnd(e, t),
          n.removeAllRanges(),
          n.addRange(r),
          r.getBoundingClientRect());
    }
    static isRangeInsideContainer(e) {
      const t = lt.range;
      return t === null ? !1 : e.contains(t.startContainer);
    }
    static addFakeCursor() {
      const e = lt.range;
      if (e === null) return;
      const t = E.make("span", "codex-editor__fake-cursor");
      (t.dataset.mutationFree = "true"), e.collapse(), e.insertNode(t);
    }
    static isFakeCursorInsideContainer(e) {
      return E.find(e, ".codex-editor__fake-cursor") !== null;
    }
    static removeFakeCursor(e = document.body) {
      const t = E.find(e, ".codex-editor__fake-cursor");
      t && t.remove();
    }
    removeFakeBackground() {
      this.isFakeBackgroundEnabled &&
        ((this.isFakeBackgroundEnabled = !1),
        document.execCommand(this.commandRemoveFormat));
    }
    setFakeBackground() {
      document.execCommand(this.commandBackground, !1, "#a8d6ff"),
        (this.isFakeBackgroundEnabled = !0);
    }
    save() {
      this.savedSelectionRange = lt.range;
    }
    restore() {
      if (!this.savedSelectionRange) return;
      const e = window.getSelection();
      e.removeAllRanges(), e.addRange(this.savedSelectionRange);
    }
    clearSaved() {
      this.savedSelectionRange = null;
    }
    collapseToEnd() {
      const e = window.getSelection(),
        t = document.createRange();
      t.selectNodeContents(e.focusNode),
        t.collapse(!1),
        e.removeAllRanges(),
        e.addRange(t);
    }
    findParentTag(e, t, r = 10) {
      const n = window.getSelection();
      let i = null;
      return !n || !n.anchorNode || !n.focusNode
        ? null
        : ([n.anchorNode, n.focusNode].forEach((s) => {
            let a = r;
            for (
              ;
              a > 0 &&
              s.parentNode &&
              !(
                s.tagName === e &&
                ((i = s),
                t && s.classList && !s.classList.contains(t) && (i = null),
                i)
              );

            )
              (s = s.parentNode), a--;
          }),
          i);
    }
    expandToTag(e) {
      const t = window.getSelection();
      t.removeAllRanges();
      const r = document.createRange();
      r.selectNodeContents(e), t.addRange(r);
    }
  };
function kp(o, e) {
  const { type: t, target: r, addedNodes: n, removedNodes: i } = o;
  return o.type === "attributes" && o.attributeName === "data-empty"
    ? !1
    : !!(
        e.contains(r) ||
        (t === "childList" &&
          (Array.from(n).some((s) => s === e) ||
            Array.from(i).some((s) => s === e)))
      );
}
const bn = "redactor dom changed",
  Gl = "block changed",
  Zl = "fake cursor is about to be toggled",
  Jl = "fake cursor have been set",
  wo = "editor mobile layout toggled";
function yn(o, e) {
  if (!o.conversionConfig) return !1;
  const t = o.conversionConfig[e];
  return Q(t) || st(t);
}
function dr(o, e) {
  return yn(o.tool, e);
}
function Ql(o, e) {
  return Object.entries(o).some(([t, r]) => e[t] && pp(e[t], r));
}
async function ec(o, e) {
  const t = (await o.save()).data,
    r = e.find((n) => n.name === o.name);
  return r !== void 0 && !yn(r, "export")
    ? []
    : e.reduce((n, i) => {
        if (!yn(i, "import") || i.toolbox === void 0) return n;
        const s = i.toolbox.filter((a) => {
          if (Pe(a) || a.icon === void 0) return !1;
          if (a.data !== void 0) {
            if (Ql(a.data, t)) return !1;
          } else if (i.name === o.name) return !1;
          return !0;
        });
        return n.push({ ...i, toolbox: s }), n;
      }, []);
}
function Oa(o, e) {
  return o.mergeable
    ? o.name === e.name
      ? !0
      : dr(e, "export") && dr(o, "import")
    : !1;
}
function wp(o, e) {
  const t = e?.export;
  return Q(t)
    ? t(o)
    : st(t)
      ? o[t]
      : (t !== void 0 &&
          z(
            "Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export.",
          ),
        "");
}
function Ba(o, e, t) {
  const r = e?.import;
  return Q(r)
    ? r(o, t)
    : st(r)
      ? { [r]: o }
      : (r !== void 0 &&
          z(
            "Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data.",
          ),
        {});
}
var Z = ((o) => (
    (o.Default = "default"), (o.Separator = "separator"), (o.Html = "html"), o
  ))(Z || {}),
  ot = ((o) => (
    (o.APPEND_CALLBACK = "appendCallback"),
    (o.RENDERED = "rendered"),
    (o.MOVED = "moved"),
    (o.UPDATED = "updated"),
    (o.REMOVED = "removed"),
    (o.ON_PASTE = "onPaste"),
    o
  ))(ot || {});
let rt = class ct extends Mo {
  constructor(
    { id: e = dp(), data: t, tool: r, readOnly: n, tunesData: i },
    s,
  ) {
    super(),
      (this.cachedInputs = []),
      (this.toolRenderedElement = null),
      (this.tunesInstances = new Map()),
      (this.defaultTunesInstances = new Map()),
      (this.unavailableTunesData = {}),
      (this.inputIndex = 0),
      (this.editorEventBus = null),
      (this.handleFocus = () => {
        this.dropInputsCache(), this.updateCurrentInput();
      }),
      (this.didMutated = (a = void 0) => {
        const l = a === void 0,
          c = a instanceof InputEvent;
        !l && !c && this.detectToolRootChange(a);
        let d;
        l || c
          ? (d = !0)
          : (d = !(
              a.length > 0 &&
              a.every((h) => {
                const { addedNodes: u, removedNodes: p, target: g } = h;
                return [...Array.from(u), ...Array.from(p), g].some(
                  (f) => (
                    E.isElement(f) || (f = f.parentElement),
                    f && f.closest('[data-mutation-free="true"]') !== null
                  ),
                );
              })
            )),
          d &&
            (this.dropInputsCache(),
            this.updateCurrentInput(),
            this.toggleInputsEmptyMark(),
            this.call("updated"),
            this.emit("didMutated", this));
      }),
      (this.name = r.name),
      (this.id = e),
      (this.settings = r.settings),
      (this.config = r.settings.config || {}),
      (this.editorEventBus = s || null),
      (this.blockAPI = new et(this)),
      (this.tool = r),
      (this.toolInstance = r.create(t, this.blockAPI, n)),
      (this.tunes = r.tunes),
      this.composeTunes(i),
      (this.holder = this.compose()),
      window.requestIdleCallback(() => {
        this.watchBlockMutations(),
          this.addInputEvents(),
          this.toggleInputsEmptyMark();
      });
  }
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target",
    };
  }
  get inputs() {
    if (this.cachedInputs.length !== 0) return this.cachedInputs;
    const e = E.findAllInputs(this.holder);
    return (
      this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1),
      (this.cachedInputs = e),
      e
    );
  }
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  set currentInput(e) {
    const t = this.inputs.findIndex((r) => r === e || r.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  get firstInput() {
    return this.inputs[0];
  }
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  get data() {
    return this.save().then((e) => (e && !Pe(e.data) ? e.data : {}));
  }
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  get mergeable() {
    return Q(this.toolInstance.merge);
  }
  get focusable() {
    return this.inputs.length !== 0;
  }
  get isEmpty() {
    const e = E.isEmpty(this.pluginsContent, "/"),
      t = !this.hasMedia;
    return e && t;
  }
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget",
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  set selected(e) {
    var t, r;
    this.holder.classList.toggle(ct.CSS.selected, e);
    const n = e === !0 && A.isRangeInsideContainer(this.holder),
      i = e === !1 && A.isFakeCursorInsideContainer(this.holder);
    (n || i) &&
      ((t = this.editorEventBus) == null || t.emit(Zl, { state: e }),
      n ? A.addFakeCursor() : A.removeFakeCursor(this.holder),
      (r = this.editorEventBus) == null || r.emit(Jl, { state: e }));
  }
  get selected() {
    return this.holder.classList.contains(ct.CSS.selected);
  }
  set stretched(e) {
    this.holder.classList.toggle(ct.CSS.wrapperStretched, e);
  }
  get stretched() {
    return this.holder.classList.contains(ct.CSS.wrapperStretched);
  }
  set dropTarget(e) {
    this.holder.classList.toggle(ct.CSS.dropTarget, e);
  }
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  call(e, t) {
    if (Q(this.toolInstance[e])) {
      e === "appendCallback" &&
        z(
          "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
          "warn",
        );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (r) {
        z(`Error during '${e}' call: ${r.message}`, "error");
      }
    }
  }
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent),
      t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries(),
    ].forEach(([i, s]) => {
      if (Q(s.save))
        try {
          t[i] = s.save();
        } catch (a) {
          z(
            `Tune ${s.constructor.name} save method throws an Error %o`,
            "warn",
            a,
          );
        }
    });
    const r = window.performance.now();
    let n;
    return Promise.resolve(e)
      .then(
        (i) => (
          (n = window.performance.now()),
          { id: this.id, tool: this.name, data: i, tunes: t, time: n - r }
        ),
      )
      .catch((i) => {
        z(
          `Saving process for ${this.name} tool failed due to the ${i}`,
          "log",
          "red",
        );
      });
  }
  async validate(e) {
    let t = !0;
    return (
      this.toolInstance.validate instanceof Function &&
        (t = await this.toolInstance.validate(e)),
      t
    );
  }
  getTunes() {
    const e = [],
      t = [],
      r =
        typeof this.toolInstance.renderSettings == "function"
          ? this.toolInstance.renderSettings()
          : [];
    return (
      E.isElement(r)
        ? e.push({ type: Z.Html, element: r })
        : Array.isArray(r)
          ? e.push(...r)
          : e.push(r),
      [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()]
        .map((n) => n.render())
        .forEach((n) => {
          E.isElement(n)
            ? t.push({ type: Z.Html, element: n })
            : Array.isArray(n)
              ? t.push(...n)
              : t.push(n);
        }),
      { toolTunes: e, commonTunes: t }
    );
  }
  updateCurrentInput() {
    this.currentInput =
      E.isNativeInput(document.activeElement) || !A.anchorNode
        ? document.activeElement
        : A.anchorNode;
  }
  dispatchChange() {
    this.didMutated();
  }
  destroy() {
    this.unwatchBlockMutations(),
      this.removeInputEvents(),
      super.destroy(),
      Q(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1) return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data,
      r = e;
    return r?.find((n) => Ql(n.data, t));
  }
  async exportDataAsString() {
    const e = await this.data;
    return wp(e, this.tool.conversionConfig);
  }
  compose() {
    const e = E.make("div", ct.CSS.wrapper),
      t = E.make("div", ct.CSS.content),
      r = this.toolInstance.render();
    e.setAttribute("data-cy", "block-wrapper"),
      (e.dataset.id = this.id),
      (this.toolRenderedElement = r),
      t.appendChild(this.toolRenderedElement);
    let n = t;
    return (
      [
        ...this.tunesInstances.values(),
        ...this.defaultTunesInstances.values(),
      ].forEach((i) => {
        if (Q(i.wrap))
          try {
            n = i.wrap(n);
          } catch (s) {
            z(
              `Tune ${i.constructor.name} wrap method throws an Error %o`,
              "warn",
              s,
            );
          }
      }),
      e.appendChild(n),
      e
    );
  }
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(
        t.name,
        t.create(e[t.name], this.blockAPI),
      );
    }),
      Object.entries(e).forEach(([t, r]) => {
        this.tunesInstances.has(t) || (this.unavailableTunesData[t] = r);
      });
  }
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus),
        E.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus),
        E.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  watchBlockMutations() {
    var e;
    (this.redactorDomChangedCallback = (t) => {
      const { mutations: r } = t;
      r.some((n) => kp(n, this.toolRenderedElement)) && this.didMutated(r);
    }),
      (e = this.editorEventBus) == null ||
        e.on(bn, this.redactorDomChangedCallback);
  }
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null ||
      e.off(bn, this.redactorDomChangedCallback);
  }
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const r = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = r;
      }
    });
  }
  dropInputsCache() {
    this.cachedInputs = [];
  }
  toggleInputsEmptyMark() {
    this.inputs.forEach(ql);
  }
};
class xp extends H {
  constructor() {
    super(...arguments),
      (this.insert = (
        e = this.config.defaultBlock,
        t = {},
        r = {},
        n,
        i,
        s,
        a,
      ) => {
        const l = this.Editor.BlockManager.insert({
          id: a,
          tool: e,
          data: t,
          index: n,
          needToFocus: i,
          replace: s,
        });
        return new et(l);
      }),
      (this.composeBlockData = async (e) => {
        const t = this.Editor.Tools.blockTools.get(e);
        return new rt({
          tool: t,
          api: this.Editor.API,
          readOnly: !0,
          data: {},
          tunesData: {},
        }).data;
      }),
      (this.update = async (e, t, r) => {
        const { BlockManager: n } = this.Editor,
          i = n.getBlockById(e);
        if (i === void 0) throw new Error(`Block with id "${e}" not found`);
        const s = await n.update(i, t, r);
        return new et(s);
      }),
      (this.convert = async (e, t, r) => {
        var n, i;
        const { BlockManager: s, Tools: a } = this.Editor,
          l = s.getBlockById(e);
        if (!l) throw new Error(`Block with id "${e}" not found`);
        const c = a.blockTools.get(l.name),
          d = a.blockTools.get(t);
        if (!d) throw new Error(`Block Tool with type "${t}" not found`);
        const h =
            ((n = c?.conversionConfig) == null ? void 0 : n.export) !== void 0,
          u = ((i = d.conversionConfig) == null ? void 0 : i.import) !== void 0;
        if (h && u) {
          const p = await s.convert(l, t, r);
          return new et(p);
        } else {
          const p = [h ? !1 : cr(l.name), u ? !1 : cr(t)]
            .filter(Boolean)
            .join(" and ");
          throw new Error(
            `Conversion from "${l.name}" to "${t}" is not possible. ${p} tool(s) should provide a "conversionConfig"`,
          );
        }
      }),
      (this.insertMany = (
        e,
        t = this.Editor.BlockManager.blocks.length - 1,
      ) => {
        this.validateIndex(t);
        const r = e.map(({ id: n, type: i, data: s }) =>
          this.Editor.BlockManager.composeBlock({
            id: n,
            tool: i || this.config.defaultBlock,
            data: s,
          }),
        );
        return (
          this.Editor.BlockManager.insertMany(r, t), r.map((n) => new et(n))
        );
      });
  }
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: (e) => this.getBlockByElement(e),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert,
    };
  }
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      Le("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      Le("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new et(t);
  }
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0
      ? (Le("There is no block with id `" + e + "`", "warn"), null)
      : new et(t);
  }
  getBlockByElement(e) {
    const t = this.Editor.BlockManager.getBlock(e);
    if (t === void 0) {
      Le("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new et(t);
  }
  swap(e, t) {
    z(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info",
    ),
      this.Editor.BlockManager.swap(e, t);
  }
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      Le(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 &&
      this.Editor.BlockManager.insert(),
      this.Editor.BlockManager.currentBlock &&
        this.Editor.Caret.setToBlock(
          this.Editor.BlockManager.currentBlock,
          this.Editor.Caret.positions.END,
        ),
      this.Editor.Toolbar.close();
  }
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(),
      await this.Editor.BlockManager.clear(),
      await this.Editor.Renderer.render(e.blocks),
      this.Editor.ModificationsObserver.enable();
  }
  renderFromHTML(e) {
    return (
      this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0)
    );
  }
  stretchBlock(e, t = !0) {
    mn(!0, "blocks.stretchBlock()", "BlockAPI");
    const r = this.Editor.BlockManager.getBlockByIndex(e);
    r && (r.stretched = t);
  }
  insertNewBlock() {
    z(
      "Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.",
      "warn",
    ),
      this.insert();
  }
  validateIndex(e) {
    if (typeof e != "number") throw new Error("Index should be a number");
    if (e < 0) throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
function Cp(o, e) {
  return typeof o == "number"
    ? e.BlockManager.getBlockByIndex(o)
    : typeof o == "string"
      ? e.BlockManager.getBlockById(o)
      : e.BlockManager.getBlockById(o.id);
}
class Ep extends H {
  constructor() {
    super(...arguments),
      (this.setToFirstBlock = (
        e = this.Editor.Caret.positions.DEFAULT,
        t = 0,
      ) =>
        this.Editor.BlockManager.firstBlock
          ? (this.Editor.Caret.setToBlock(
              this.Editor.BlockManager.firstBlock,
              e,
              t,
            ),
            !0)
          : !1),
      (this.setToLastBlock = (
        e = this.Editor.Caret.positions.DEFAULT,
        t = 0,
      ) =>
        this.Editor.BlockManager.lastBlock
          ? (this.Editor.Caret.setToBlock(
              this.Editor.BlockManager.lastBlock,
              e,
              t,
            ),
            !0)
          : !1),
      (this.setToPreviousBlock = (
        e = this.Editor.Caret.positions.DEFAULT,
        t = 0,
      ) =>
        this.Editor.BlockManager.previousBlock
          ? (this.Editor.Caret.setToBlock(
              this.Editor.BlockManager.previousBlock,
              e,
              t,
            ),
            !0)
          : !1),
      (this.setToNextBlock = (
        e = this.Editor.Caret.positions.DEFAULT,
        t = 0,
      ) =>
        this.Editor.BlockManager.nextBlock
          ? (this.Editor.Caret.setToBlock(
              this.Editor.BlockManager.nextBlock,
              e,
              t,
            ),
            !0)
          : !1),
      (this.setToBlock = (
        e,
        t = this.Editor.Caret.positions.DEFAULT,
        r = 0,
      ) => {
        const n = Cp(e, this.Editor);
        return n === void 0 ? !1 : (this.Editor.Caret.setToBlock(n, t, r), !0);
      }),
      (this.focus = (e = !1) =>
        e
          ? this.setToLastBlock(this.Editor.Caret.positions.END)
          : this.setToFirstBlock(this.Editor.Caret.positions.START));
  }
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus,
    };
  }
}
class _p extends H {
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t),
    };
  }
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
let Sp = class tc extends H {
  static getNamespace(e, t) {
    return t ? `blockTunes.${e}` : `tools.${e}`;
  }
  get methods() {
    return {
      t: () => {
        Le("I18n.t() method can be accessed only from Tools", "warn");
      },
    };
  }
  getMethodsForTool(e, t) {
    return Object.assign(this.methods, {
      t: (r) => ge.t(tc.getNamespace(e, t), r),
    });
  }
};
class Tp extends H {
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods,
    };
  }
  getMethodsForTool(e, t) {
    return Object.assign(this.methods, {
      i18n: this.Editor.I18nAPI.getMethodsForTool(e, t),
    });
  }
}
class Op extends H {
  get methods() {
    return { close: () => this.close(), open: () => this.open() };
  }
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class Bp extends H {
  get methods() {
    return {
      on: (e, t, r, n) => this.on(e, t, r, n),
      off: (e, t, r, n) => this.off(e, t, r, n),
      offById: (e) => this.offById(e),
    };
  }
  on(e, t, r, n) {
    return this.listeners.on(e, t, r, n);
  }
  off(e, t, r, n) {
    this.listeners.off(e, t, r, n);
  }
  offById(e) {
    this.listeners.offById(e);
  }
}
var oc = { exports: {} };
(function (o, e) {
  (function (t, r) {
    o.exports = r();
  })(window, function () {
    return (function (t) {
      var r = {};
      function n(i) {
        if (r[i]) return r[i].exports;
        var s = (r[i] = { i, l: !1, exports: {} });
        return t[i].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
      }
      return (
        (n.m = t),
        (n.c = r),
        (n.d = function (i, s, a) {
          n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
        }),
        (n.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (n.t = function (i, s) {
          if (
            (1 & s && (i = n(i)),
            8 & s || (4 & s && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var a = Object.create(null);
          if (
            (n.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: i }),
            2 & s && typeof i != "string")
          )
            for (var l in i)
              n.d(
                a,
                l,
                function (c) {
                  return i[c];
                }.bind(null, l),
              );
          return a;
        }),
        (n.n = function (i) {
          var s =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return n.d(s, "a", s), s;
        }),
        (n.o = function (i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }),
        (n.p = "/"),
        n((n.s = 0))
      );
    })([
      function (t, r, n) {
        n(1),
          (t.exports = (function () {
            var i = n(6),
              s = "cdx-notify--bounce-in",
              a = null;
            return {
              show: function (l) {
                if (l.message) {
                  (function () {
                    if (a) return !0;
                    (a = i.getWrapper()), document.body.appendChild(a);
                  })();
                  var c = null,
                    d = l.time || 8e3;
                  switch (l.type) {
                    case "confirm":
                      c = i.confirm(l);
                      break;
                    case "prompt":
                      c = i.prompt(l);
                      break;
                    default:
                      (c = i.alert(l)),
                        window.setTimeout(function () {
                          c.remove();
                        }, d);
                  }
                  a.appendChild(c), c.classList.add(s);
                }
              },
            };
          })());
      },
      function (t, r, n) {
        var i = n(2);
        typeof i == "string" && (i = [[t.i, i, ""]]);
        var s = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(4)(i, s), i.locals && (t.exports = i.locals);
      },
      function (t, r, n) {
        (t.exports = n(3)(!1)).push([
          t.i,
          `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`,
          "",
        ]);
      },
      function (t, r) {
        t.exports = function (n) {
          var i = [];
          return (
            (i.toString = function () {
              return this.map(function (s) {
                var a = (function (l, c) {
                  var d = l[1] || "",
                    h = l[3];
                  if (!h) return d;
                  if (c && typeof btoa == "function") {
                    var u =
                        ((g = h),
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(g))),
                          ) +
                          " */"),
                      p = h.sources.map(function (f) {
                        return "/*# sourceURL=" + h.sourceRoot + f + " */";
                      });
                    return [d].concat(p).concat([u]).join(`
`);
                  }
                  var g;
                  return [d].join(`
`);
                })(s, n);
                return s[2] ? "@media " + s[2] + "{" + a + "}" : a;
              }).join("");
            }),
            (i.i = function (s, a) {
              typeof s == "string" && (s = [[null, s, ""]]);
              for (var l = {}, c = 0; c < this.length; c++) {
                var d = this[c][0];
                typeof d == "number" && (l[d] = !0);
              }
              for (c = 0; c < s.length; c++) {
                var h = s[c];
                (typeof h[0] == "number" && l[h[0]]) ||
                  (a && !h[2]
                    ? (h[2] = a)
                    : a && (h[2] = "(" + h[2] + ") and (" + a + ")"),
                  i.push(h));
              }
            }),
            i
          );
        };
      },
      function (t, r, n) {
        var i,
          s,
          a = {},
          l =
            ((i = function () {
              return window && document && document.all && !window.atob;
            }),
            function () {
              return s === void 0 && (s = i.apply(this, arguments)), s;
            }),
          c = (function (C) {
            var x = {};
            return function (O) {
              if (typeof O == "function") return O();
              if (x[O] === void 0) {
                var S = function (M) {
                  return document.querySelector(M);
                }.call(this, O);
                if (
                  window.HTMLIFrameElement &&
                  S instanceof window.HTMLIFrameElement
                )
                  try {
                    S = S.contentDocument.head;
                  } catch {
                    S = null;
                  }
                x[O] = S;
              }
              return x[O];
            };
          })(),
          d = null,
          h = 0,
          u = [],
          p = n(5);
        function g(C, x) {
          for (var O = 0; O < C.length; O++) {
            var S = C[O],
              M = a[S.id];
            if (M) {
              M.refs++;
              for (var L = 0; L < M.parts.length; L++) M.parts[L](S.parts[L]);
              for (; L < S.parts.length; L++) M.parts.push(b(S.parts[L], x));
            } else {
              var R = [];
              for (L = 0; L < S.parts.length; L++) R.push(b(S.parts[L], x));
              a[S.id] = { id: S.id, refs: 1, parts: R };
            }
          }
        }
        function f(C, x) {
          for (var O = [], S = {}, M = 0; M < C.length; M++) {
            var L = C[M],
              R = x.base ? L[0] + x.base : L[0],
              N = { css: L[1], media: L[2], sourceMap: L[3] };
            S[R] ? S[R].parts.push(N) : O.push((S[R] = { id: R, parts: [N] }));
          }
          return O;
        }
        function m(C, x) {
          var O = c(C.insertInto);
          if (!O)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
            );
          var S = u[u.length - 1];
          if (C.insertAt === "top")
            S
              ? S.nextSibling
                ? O.insertBefore(x, S.nextSibling)
                : O.appendChild(x)
              : O.insertBefore(x, O.firstChild),
              u.push(x);
          else if (C.insertAt === "bottom") O.appendChild(x);
          else {
            if (typeof C.insertAt != "object" || !C.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var M = c(C.insertInto + " " + C.insertAt.before);
            O.insertBefore(x, M);
          }
        }
        function k(C) {
          if (C.parentNode === null) return !1;
          C.parentNode.removeChild(C);
          var x = u.indexOf(C);
          x >= 0 && u.splice(x, 1);
        }
        function v(C) {
          var x = document.createElement("style");
          return (
            C.attrs.type === void 0 && (C.attrs.type = "text/css"),
            w(x, C.attrs),
            m(C, x),
            x
          );
        }
        function w(C, x) {
          Object.keys(x).forEach(function (O) {
            C.setAttribute(O, x[O]);
          });
        }
        function b(C, x) {
          var O, S, M, L;
          if (x.transform && C.css) {
            if (!(L = x.transform(C.css))) return function () {};
            C.css = L;
          }
          if (x.singleton) {
            var R = h++;
            (O = d || (d = v(x))),
              (S = B.bind(null, O, R, !1)),
              (M = B.bind(null, O, R, !0));
          } else
            C.sourceMap &&
            typeof URL == "function" &&
            typeof URL.createObjectURL == "function" &&
            typeof URL.revokeObjectURL == "function" &&
            typeof Blob == "function" &&
            typeof btoa == "function"
              ? ((O = (function (N) {
                  var F = document.createElement("link");
                  return (
                    N.attrs.type === void 0 && (N.attrs.type = "text/css"),
                    (N.attrs.rel = "stylesheet"),
                    w(F, N.attrs),
                    m(N, F),
                    F
                  );
                })(x)),
                (S = function (N, F, Ne) {
                  var ue = Ne.css,
                    Ae = Ne.sourceMap,
                    He = F.convertToAbsoluteUrls === void 0 && Ae;
                  (F.convertToAbsoluteUrls || He) && (ue = p(ue)),
                    Ae &&
                      (ue +=
                        `
/*# sourceMappingURL=data:application/json;base64,` +
                        btoa(unescape(encodeURIComponent(JSON.stringify(Ae)))) +
                        " */");
                  var Fe = new Blob([ue], { type: "text/css" }),
                    Rt = N.href;
                  (N.href = URL.createObjectURL(Fe)),
                    Rt && URL.revokeObjectURL(Rt);
                }.bind(null, O, x)),
                (M = function () {
                  k(O), O.href && URL.revokeObjectURL(O.href);
                }))
              : ((O = v(x)),
                (S = function (N, F) {
                  var Ne = F.css,
                    ue = F.media;
                  if ((ue && N.setAttribute("media", ue), N.styleSheet))
                    N.styleSheet.cssText = Ne;
                  else {
                    for (; N.firstChild; ) N.removeChild(N.firstChild);
                    N.appendChild(document.createTextNode(Ne));
                  }
                }.bind(null, O)),
                (M = function () {
                  k(O);
                }));
          return (
            S(C),
            function (N) {
              if (N) {
                if (
                  N.css === C.css &&
                  N.media === C.media &&
                  N.sourceMap === C.sourceMap
                )
                  return;
                S((C = N));
              } else M();
            }
          );
        }
        t.exports = function (C, x) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error(
              "The style-loader cannot be used in a non-browser environment",
            );
          ((x = x || {}).attrs = typeof x.attrs == "object" ? x.attrs : {}),
            x.singleton ||
              typeof x.singleton == "boolean" ||
              (x.singleton = l()),
            x.insertInto || (x.insertInto = "head"),
            x.insertAt || (x.insertAt = "bottom");
          var O = f(C, x);
          return (
            g(O, x),
            function (S) {
              for (var M = [], L = 0; L < O.length; L++) {
                var R = O[L];
                (N = a[R.id]).refs--, M.push(N);
              }
              for (S && g(f(S, x), x), L = 0; L < M.length; L++) {
                var N;
                if ((N = M[L]).refs === 0) {
                  for (var F = 0; F < N.parts.length; F++) N.parts[F]();
                  delete a[N.id];
                }
              }
            }
          );
        };
        var y,
          _ =
            ((y = []),
            function (C, x) {
              return (
                (y[C] = x),
                y.filter(Boolean).join(`
`)
              );
            });
        function B(C, x, O, S) {
          var M = O ? "" : S.css;
          if (C.styleSheet) C.styleSheet.cssText = _(x, M);
          else {
            var L = document.createTextNode(M),
              R = C.childNodes;
            R[x] && C.removeChild(R[x]),
              R.length ? C.insertBefore(L, R[x]) : C.appendChild(L);
          }
        }
      },
      function (t, r) {
        t.exports = function (n) {
          var i = typeof window < "u" && window.location;
          if (!i) throw new Error("fixUrls requires window.location");
          if (!n || typeof n != "string") return n;
          var s = i.protocol + "//" + i.host,
            a = s + i.pathname.replace(/\/[^\/]*$/, "/");
          return n.replace(
            /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function (l, c) {
              var d,
                h = c
                  .trim()
                  .replace(/^"(.*)"$/, function (u, p) {
                    return p;
                  })
                  .replace(/^'(.*)'$/, function (u, p) {
                    return p;
                  });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h)
                ? l
                : ((d =
                    h.indexOf("//") === 0
                      ? h
                      : h.indexOf("/") === 0
                        ? s + h
                        : a + h.replace(/^\.\//, "")),
                  "url(" + JSON.stringify(d) + ")");
            },
          );
        };
      },
      function (t, r, n) {
        var i, s, a, l, c, d, h, u, p;
        t.exports =
          ((i = "cdx-notifies"),
          (s = "cdx-notify"),
          (a = "cdx-notify__cross"),
          (l = "cdx-notify__button--confirm"),
          (c = "cdx-notify__button--cancel"),
          (d = "cdx-notify__input"),
          (h = "cdx-notify__button"),
          (u = "cdx-notify__btns-wrapper"),
          {
            alert: (p = function (g) {
              var f = document.createElement("DIV"),
                m = document.createElement("DIV"),
                k = g.message,
                v = g.style;
              return (
                f.classList.add(s),
                v && f.classList.add(s + "--" + v),
                (f.innerHTML = k),
                m.classList.add(a),
                m.addEventListener("click", f.remove.bind(f)),
                f.appendChild(m),
                f
              );
            }),
            confirm: function (g) {
              var f = p(g),
                m = document.createElement("div"),
                k = document.createElement("button"),
                v = document.createElement("button"),
                w = f.querySelector("." + a),
                b = g.cancelHandler,
                y = g.okHandler;
              return (
                m.classList.add(u),
                (k.innerHTML = g.okText || "Confirm"),
                (v.innerHTML = g.cancelText || "Cancel"),
                k.classList.add(h),
                v.classList.add(h),
                k.classList.add(l),
                v.classList.add(c),
                b &&
                  typeof b == "function" &&
                  (v.addEventListener("click", b),
                  w.addEventListener("click", b)),
                y && typeof y == "function" && k.addEventListener("click", y),
                k.addEventListener("click", f.remove.bind(f)),
                v.addEventListener("click", f.remove.bind(f)),
                m.appendChild(k),
                m.appendChild(v),
                f.appendChild(m),
                f
              );
            },
            prompt: function (g) {
              var f = p(g),
                m = document.createElement("div"),
                k = document.createElement("button"),
                v = document.createElement("input"),
                w = f.querySelector("." + a),
                b = g.cancelHandler,
                y = g.okHandler;
              return (
                m.classList.add(u),
                (k.innerHTML = g.okText || "Ok"),
                k.classList.add(h),
                k.classList.add(l),
                v.classList.add(d),
                g.placeholder && v.setAttribute("placeholder", g.placeholder),
                g.default && (v.value = g.default),
                g.inputType && (v.type = g.inputType),
                b && typeof b == "function" && w.addEventListener("click", b),
                y &&
                  typeof y == "function" &&
                  k.addEventListener("click", function () {
                    y(v.value);
                  }),
                k.addEventListener("click", f.remove.bind(f)),
                m.appendChild(v),
                m.appendChild(k),
                f.appendChild(m),
                f
              );
            },
            getWrapper: function () {
              var g = document.createElement("DIV");
              return g.classList.add(i), g;
            },
          });
      },
    ]);
  });
})(oc);
var Mp = oc.exports;
const Ip = Cr(Mp);
class Lp {
  show(e) {
    Ip.show(e);
  }
}
class Pp extends H {
  constructor({ config: e, eventsDispatcher: t }) {
    super({ config: e, eventsDispatcher: t }), (this.notifier = new Lp());
  }
  get methods() {
    return { show: (e) => this.show(e) };
  }
  show(e) {
    return this.notifier.show(e);
  }
}
class Np extends H {
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      },
    };
  }
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var rc = { exports: {} };
(function (o, e) {
  (function (t, r) {
    o.exports = r();
  })(ko, function () {
    function t(h) {
      var u = h.tags,
        p = Object.keys(u),
        g = p
          .map(function (f) {
            return typeof u[f];
          })
          .every(function (f) {
            return f === "object" || f === "boolean" || f === "function";
          });
      if (!g) throw new Error("The configuration was invalid");
      this.config = h;
    }
    var r = [
      "P",
      "LI",
      "TD",
      "TH",
      "DIV",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "PRE",
    ];
    function n(h) {
      return r.indexOf(h.nodeName) !== -1;
    }
    var i = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function s(h) {
      return i.indexOf(h.nodeName) !== -1;
    }
    (t.prototype.clean = function (h) {
      const u = document.implementation.createHTMLDocument(),
        p = u.createElement("div");
      return (p.innerHTML = h), this._sanitize(u, p), p.innerHTML;
    }),
      (t.prototype._sanitize = function (h, u) {
        var p = a(h, u),
          g = p.firstChild();
        if (g)
          do {
            if (g.nodeType === Node.TEXT_NODE)
              if (
                g.data.trim() === "" &&
                ((g.previousElementSibling && n(g.previousElementSibling)) ||
                  (g.nextElementSibling && n(g.nextElementSibling)))
              ) {
                u.removeChild(g), this._sanitize(h, u);
                break;
              } else continue;
            if (g.nodeType === Node.COMMENT_NODE) {
              u.removeChild(g), this._sanitize(h, u);
              break;
            }
            var f = s(g),
              m;
            f && (m = Array.prototype.some.call(g.childNodes, n));
            var k = !!u.parentNode,
              v = n(u) && n(g) && k,
              w = g.nodeName.toLowerCase(),
              b = l(this.config, w, g),
              y = f && m;
            if (y || c(g, b) || (!this.config.keepNestedBlockElements && v)) {
              if (!(g.nodeName === "SCRIPT" || g.nodeName === "STYLE"))
                for (; g.childNodes.length > 0; )
                  u.insertBefore(g.childNodes[0], g);
              u.removeChild(g), this._sanitize(h, u);
              break;
            }
            for (var _ = 0; _ < g.attributes.length; _ += 1) {
              var B = g.attributes[_];
              d(B, b, g) && (g.removeAttribute(B.name), (_ = _ - 1));
            }
            this._sanitize(h, g);
          } while ((g = p.nextSibling()));
      });
    function a(h, u) {
      return h.createTreeWalker(
        u,
        NodeFilter.SHOW_TEXT |
          NodeFilter.SHOW_ELEMENT |
          NodeFilter.SHOW_COMMENT,
        null,
        !1,
      );
    }
    function l(h, u, p) {
      return typeof h.tags[u] == "function" ? h.tags[u](p) : h.tags[u];
    }
    function c(h, u) {
      return typeof u > "u" ? !0 : typeof u == "boolean" ? !u : !1;
    }
    function d(h, u, p) {
      var g = h.name.toLowerCase();
      return u === !0
        ? !1
        : typeof u[g] == "function"
          ? !u[g](h.value, p)
          : typeof u[g] > "u" || u[g] === !1
            ? !0
            : typeof u[g] == "string"
              ? u[g] !== h.value
              : !1;
    }
    return t;
  });
})(rc);
var Ap = rc.exports;
const jp = Cr(Ap);
function zn(o, e) {
  return o.map((t) => {
    const r = Q(e) ? e(t.tool) : e;
    return Pe(r) || (t.data = Wn(t.data, r)), t;
  });
}
function ze(o, e = {}) {
  const t = { tags: e };
  return new jp(t).clean(o);
}
function Wn(o, e) {
  return Array.isArray(o) ? Rp(o, e) : le(o) ? Dp(o, e) : st(o) ? $p(o, e) : o;
}
function Rp(o, e) {
  return o.map((t) => Wn(t, e));
}
function Dp(o, e) {
  const t = {};
  for (const r in o) {
    if (!Object.prototype.hasOwnProperty.call(o, r)) continue;
    const n = o[r],
      i = Hp(e[r]) ? e[r] : e;
    t[r] = Wn(n, i);
  }
  return t;
}
function $p(o, e) {
  return le(e) ? ze(o, e) : e === !1 ? ze(o, {}) : o;
}
function Hp(o) {
  return le(o) || np(o) || Q(o);
}
class Fp extends H {
  get methods() {
    return { clean: (e, t) => this.clean(e, t) };
  }
  clean(e, t) {
    return ze(e, t);
  }
}
class Up extends H {
  get methods() {
    return { save: () => this.save() };
  }
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled
      ? (Le(e, "warn"), Promise.reject(new Error(e)))
      : this.Editor.Saver.save();
  }
}
class zp extends H {
  constructor() {
    super(...arguments), (this.selectionUtils = new A());
  }
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground(),
    };
  }
  findParentTag(e, t) {
    return this.selectionUtils.findParentTag(e, t);
  }
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
}
class Wp extends H {
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values()),
    };
  }
}
class qp extends H {
  get classes() {
    return {
      block: "cdx-block",
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active",
    };
  }
}
class Vp extends H {
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e),
    };
  }
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  close() {
    this.Editor.Toolbar.close();
  }
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Le(
        "Could't toggle the Toolbar because there is no block selected ",
        "warn",
      );
      return;
    }
    (e ?? !this.Editor.BlockSettings.opened)
      ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open())
      : this.Editor.BlockSettings.close();
  }
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Le(
        "Could't toggle the Toolbox because there is no block selected ",
        "warn",
      );
      return;
    }
    (e ?? !this.Editor.Toolbar.toolbox.opened)
      ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open())
      : this.Editor.Toolbar.toolbox.close();
  }
}
var nc = { exports: {} };
/*!
 * CodeX.Tooltips
 *
 * @version 1.0.5
 *
 * @licence MIT
 * @author CodeX <https://codex.so>
 *
 *
 */ (function (o, e) {
  (function (t, r) {
    o.exports = r();
  })(window, function () {
    return (function (t) {
      var r = {};
      function n(i) {
        if (r[i]) return r[i].exports;
        var s = (r[i] = { i, l: !1, exports: {} });
        return t[i].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
      }
      return (
        (n.m = t),
        (n.c = r),
        (n.d = function (i, s, a) {
          n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
        }),
        (n.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (n.t = function (i, s) {
          if (
            (1 & s && (i = n(i)),
            8 & s || (4 & s && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var a = Object.create(null);
          if (
            (n.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: i }),
            2 & s && typeof i != "string")
          )
            for (var l in i)
              n.d(
                a,
                l,
                function (c) {
                  return i[c];
                }.bind(null, l),
              );
          return a;
        }),
        (n.n = function (i) {
          var s =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return n.d(s, "a", s), s;
        }),
        (n.o = function (i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }),
        (n.p = ""),
        n((n.s = 0))
      );
    })([
      function (t, r, n) {
        t.exports = n(1);
      },
      function (t, r, n) {
        n.r(r),
          n.d(r, "default", function () {
            return i;
          });
        class i {
          constructor() {
            (this.nodes = { wrapper: null, content: null }),
              (this.showed = !1),
              (this.offsetTop = 10),
              (this.offsetLeft = 10),
              (this.offsetRight = 10),
              (this.hidingDelay = 0),
              (this.handleWindowScroll = () => {
                this.showed && this.hide(!0);
              }),
              this.loadStyles(),
              this.prepare(),
              window.addEventListener("scroll", this.handleWindowScroll, {
                passive: !0,
              });
          }
          get CSS() {
            return {
              tooltip: "ct",
              tooltipContent: "ct__content",
              tooltipShown: "ct--shown",
              placement: {
                left: "ct--left",
                bottom: "ct--bottom",
                right: "ct--right",
                top: "ct--top",
              },
            };
          }
          show(a, l, c) {
            this.nodes.wrapper || this.prepare(),
              this.hidingTimeout && clearTimeout(this.hidingTimeout);
            const d = Object.assign(
              {
                placement: "bottom",
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                delay: 70,
                hidingDelay: 0,
              },
              c,
            );
            if (
              (d.hidingDelay && (this.hidingDelay = d.hidingDelay),
              (this.nodes.content.innerHTML = ""),
              typeof l == "string")
            )
              this.nodes.content.appendChild(document.createTextNode(l));
            else {
              if (!(l instanceof Node))
                throw Error(
                  "[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " +
                    typeof l +
                    " given.",
                );
              this.nodes.content.appendChild(l);
            }
            switch (
              (this.nodes.wrapper.classList.remove(
                ...Object.values(this.CSS.placement),
              ),
              d.placement)
            ) {
              case "top":
                this.placeTop(a, d);
                break;
              case "left":
                this.placeLeft(a, d);
                break;
              case "right":
                this.placeRight(a, d);
                break;
              case "bottom":
              default:
                this.placeBottom(a, d);
            }
            d && d.delay
              ? (this.showingTimeout = setTimeout(() => {
                  this.nodes.wrapper.classList.add(this.CSS.tooltipShown),
                    (this.showed = !0);
                }, d.delay))
              : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown),
                (this.showed = !0));
          }
          hide(a = !1) {
            if (this.hidingDelay && !a)
              return (
                this.hidingTimeout && clearTimeout(this.hidingTimeout),
                void (this.hidingTimeout = setTimeout(() => {
                  this.hide(!0);
                }, this.hidingDelay))
              );
            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),
              (this.showed = !1),
              this.showingTimeout && clearTimeout(this.showingTimeout);
          }
          onHover(a, l, c) {
            a.addEventListener("mouseenter", () => {
              this.show(a, l, c);
            }),
              a.addEventListener("mouseleave", () => {
                this.hide();
              });
          }
          destroy() {
            this.nodes.wrapper.remove(),
              window.removeEventListener("scroll", this.handleWindowScroll);
          }
          prepare() {
            (this.nodes.wrapper = this.make("div", this.CSS.tooltip)),
              (this.nodes.content = this.make("div", this.CSS.tooltipContent)),
              this.append(this.nodes.wrapper, this.nodes.content),
              this.append(document.body, this.nodes.wrapper);
          }
          loadStyles() {
            const a = "codex-tooltips-style";
            if (document.getElementById(a)) return;
            const l = n(2),
              c = this.make("style", null, {
                textContent: l.toString(),
                id: a,
              });
            this.prepend(document.head, c);
          }
          placeBottom(a, l) {
            const c = a.getBoundingClientRect(),
              d =
                c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
              h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
            this.applyPlacement("bottom", d, h);
          }
          placeTop(a, l) {
            const c = a.getBoundingClientRect(),
              d =
                c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
              h =
                c.top +
                window.pageYOffset -
                this.nodes.wrapper.clientHeight -
                this.offsetTop;
            this.applyPlacement("top", d, h);
          }
          placeLeft(a, l) {
            const c = a.getBoundingClientRect(),
              d =
                c.left -
                this.nodes.wrapper.offsetWidth -
                this.offsetLeft -
                l.marginLeft,
              h =
                c.top +
                window.pageYOffset +
                a.clientHeight / 2 -
                this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("left", d, h);
          }
          placeRight(a, l) {
            const c = a.getBoundingClientRect(),
              d = c.right + this.offsetRight + l.marginRight,
              h =
                c.top +
                window.pageYOffset +
                a.clientHeight / 2 -
                this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("right", d, h);
          }
          applyPlacement(a, l, c) {
            this.nodes.wrapper.classList.add(this.CSS.placement[a]),
              (this.nodes.wrapper.style.left = l + "px"),
              (this.nodes.wrapper.style.top = c + "px");
          }
          make(a, l = null, c = {}) {
            const d = document.createElement(a);
            Array.isArray(l) ? d.classList.add(...l) : l && d.classList.add(l);
            for (const h in c) c.hasOwnProperty(h) && (d[h] = c[h]);
            return d;
          }
          append(a, l) {
            Array.isArray(l)
              ? l.forEach((c) => a.appendChild(c))
              : a.appendChild(l);
          }
          prepend(a, l) {
            Array.isArray(l)
              ? (l = l.reverse()).forEach((c) => a.prepend(c))
              : a.prepend(l);
          }
        }
      },
      function (t, r) {
        t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
      },
    ]).default;
  });
})(nc);
var Yp = nc.exports;
const Kp = Cr(Yp);
let je = null;
function qn() {
  je || (je = new Kp());
}
function Xp(o, e, t) {
  qn(), je?.show(o, e, t);
}
function ur(o = !1) {
  qn(), je?.hide(o);
}
function hr(o, e, t) {
  qn(), je?.onHover(o, e, t);
}
function Gp() {
  je?.destroy(), (je = null);
}
class Zp extends H {
  constructor({ config: e, eventsDispatcher: t }) {
    super({ config: e, eventsDispatcher: t });
  }
  get methods() {
    return {
      show: (e, t, r) => this.show(e, t, r),
      hide: () => this.hide(),
      onHover: (e, t, r) => this.onHover(e, t, r),
    };
  }
  show(e, t, r) {
    Xp(e, t, r);
  }
  hide() {
    ur();
  }
  onHover(e, t, r) {
    hr(e, t, r);
  }
}
class Jp extends H {
  get methods() {
    return { nodes: this.editorNodes };
  }
  get editorNodes() {
    return {
      wrapper: this.Editor.UI.nodes.wrapper,
      redactor: this.Editor.UI.nodes.redactor,
    };
  }
}
function ic(o, e) {
  const t = {};
  return (
    Object.entries(o).forEach(([r, n]) => {
      if (le(n)) {
        const i = e ? `${e}.${r}` : r;
        Object.values(n).every((s) => st(s)) ? (t[r] = i) : (t[r] = ic(n, i));
        return;
      }
      t[r] = n;
    }),
    t
  );
}
const Te = ic(Vl);
function Qp(o, e) {
  const t = {};
  return (
    Object.keys(o).forEach((r) => {
      const n = e[r];
      n !== void 0 ? (t[n] = o[r]) : (t[r] = o[r]);
    }),
    t
  );
}
const sc = class po {
  constructor(e, t) {
    (this.cursor = -1),
      (this.items = []),
      (this.items = e || []),
      (this.focusedCssClass = t);
  }
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  setCursor(e) {
    e < this.items.length &&
      e >= -1 &&
      (this.dropCursor(),
      (this.cursor = e),
      this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  setItems(e) {
    this.items = e;
  }
  next() {
    this.cursor = this.leafNodesAndReturnIndex(po.directions.RIGHT);
  }
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(po.directions.LEFT);
  }
  dropCursor() {
    this.cursor !== -1 &&
      (this.items[this.cursor].classList.remove(this.focusedCssClass),
      (this.cursor = -1));
  }
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0) return this.cursor;
    let t = this.cursor;
    return (
      t === -1
        ? (t = e === po.directions.RIGHT ? -1 : 0)
        : this.items[t].classList.remove(this.focusedCssClass),
      e === po.directions.RIGHT
        ? (t = (t + 1) % this.items.length)
        : (t = (this.items.length + t - 1) % this.items.length),
      E.canSetCaret(this.items[t]) &&
        lr(() => A.setCursor(this.items[t]), 50)(),
      this.items[t].classList.add(this.focusedCssClass),
      t
    );
  }
};
sc.directions = { RIGHT: "right", LEFT: "left" };
let lo = sc,
  pr = class kn {
    constructor(e) {
      (this.iterator = null),
        (this.activated = !1),
        (this.flipCallbacks = []),
        (this.onKeyDown = (t) => {
          if (this.isEventReadyForHandling(t))
            switch (
              (kn.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode)
            ) {
              case j.TAB:
                this.handleTabPress(t);
                break;
              case j.LEFT:
              case j.UP:
                this.flipLeft();
                break;
              case j.RIGHT:
              case j.DOWN:
                this.flipRight();
                break;
              case j.ENTER:
                this.handleEnterPress(t);
                break;
            }
        }),
        (this.iterator = new lo(e.items, e.focusedItemClass)),
        (this.activateCallback = e.activateCallback),
        (this.allowedKeys = e.allowedKeys || kn.usedKeys);
    }
    get isActivated() {
      return this.activated;
    }
    static get usedKeys() {
      return [j.TAB, j.LEFT, j.RIGHT, j.ENTER, j.UP, j.DOWN];
    }
    activate(e, t) {
      (this.activated = !0),
        e && this.iterator.setItems(e),
        t !== void 0 && this.iterator.setCursor(t),
        document.addEventListener("keydown", this.onKeyDown, !0);
    }
    deactivate() {
      (this.activated = !1),
        this.dropCursor(),
        document.removeEventListener("keydown", this.onKeyDown);
    }
    focusFirst() {
      this.dropCursor(), this.flipRight();
    }
    flipLeft() {
      this.iterator.previous(), this.flipCallback();
    }
    flipRight() {
      this.iterator.next(), this.flipCallback();
    }
    hasFocus() {
      return !!this.iterator.currentItem;
    }
    onFlip(e) {
      this.flipCallbacks.push(e);
    }
    removeOnFlip(e) {
      this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
    }
    dropCursor() {
      this.iterator.dropCursor();
    }
    isEventReadyForHandling(e) {
      return this.activated && this.allowedKeys.includes(e.keyCode);
    }
    handleTabPress(e) {
      switch (e.shiftKey ? lo.directions.LEFT : lo.directions.RIGHT) {
        case lo.directions.RIGHT:
          this.flipRight();
          break;
        case lo.directions.LEFT:
          this.flipLeft();
          break;
      }
    }
    handleEnterPress(e) {
      this.activated &&
        (this.iterator.currentItem &&
          (e.stopPropagation(),
          e.preventDefault(),
          this.iterator.currentItem.click()),
        Q(this.activateCallback) &&
          this.activateCallback(this.iterator.currentItem));
    }
    flipCallback() {
      this.iterator.currentItem &&
        this.iterator.currentItem.scrollIntoViewIfNeeded(),
        this.flipCallbacks.forEach((e) => e());
    }
  };
const ef =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>',
  tf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',
  of =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>',
  rf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>',
  nf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>',
  sf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',
  af =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>',
  lf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>',
  Ma =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>',
  cf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>',
  df =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',
  ac =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>',
  uf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',
  hf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',
  pf =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>',
  ff = "__",
  gf = "--";
function Ct(o) {
  return (e, t) =>
    [[o, e].filter((r) => !!r).join(ff), t].filter((r) => !!r).join(gf);
}
const co = Ct("ce-hint"),
  uo = {
    root: co(),
    alignedStart: co(null, "align-left"),
    alignedCenter: co(null, "align-center"),
    title: co("title"),
    description: co("description"),
  };
class mf {
  constructor(e) {
    (this.nodes = {
      root: E.make("div", [
        uo.root,
        e.alignment === "center" ? uo.alignedCenter : uo.alignedStart,
      ]),
      title: E.make("div", uo.title, { textContent: e.title }),
    }),
      this.nodes.root.appendChild(this.nodes.title),
      e.description !== void 0 &&
        ((this.nodes.description = E.make("div", uo.description, {
          textContent: e.description,
        })),
        this.nodes.root.appendChild(this.nodes.description));
  }
  getElement() {
    return this.nodes.root;
  }
}
let Vn = class {
  constructor(e) {
    this.params = e;
  }
  get name() {
    if (this.params !== void 0 && "name" in this.params)
      return this.params.name;
  }
  destroy() {
    ur();
  }
  onChildrenOpen() {
    var e;
    this.params !== void 0 &&
      "children" in this.params &&
      typeof ((e = this.params.children) == null ? void 0 : e.onOpen) ==
        "function" &&
      this.params.children.onOpen();
  }
  onChildrenClose() {
    var e;
    this.params !== void 0 &&
      "children" in this.params &&
      typeof ((e = this.params.children) == null ? void 0 : e.onClose) ==
        "function" &&
      this.params.children.onClose();
  }
  handleClick() {
    var e, t;
    this.params !== void 0 &&
      "onActivate" in this.params &&
      ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
  }
  addHint(e, t) {
    const r = new mf(t);
    hr(e, r.getElement(), { placement: t.position, hidingDelay: 100 });
  }
  get children() {
    var e;
    return this.params !== void 0 &&
      "children" in this.params &&
      ((e = this.params.children) == null ? void 0 : e.items) !== void 0
      ? this.params.children.items
      : [];
  }
  get hasChildren() {
    return this.children.length > 0;
  }
  get isChildrenOpen() {
    var e;
    return (
      this.params !== void 0 &&
      "children" in this.params &&
      ((e = this.params.children) == null ? void 0 : e.isOpen) === !0
    );
  }
  get isChildrenFlippable() {
    var e;
    return !(
      this.params === void 0 ||
      !("children" in this.params) ||
      ((e = this.params.children) == null ? void 0 : e.isFlippable) === !1
    );
  }
  get isChildrenSearchable() {
    var e;
    return (
      this.params !== void 0 &&
      "children" in this.params &&
      ((e = this.params.children) == null ? void 0 : e.searchable) === !0
    );
  }
  get closeOnActivate() {
    return (
      this.params !== void 0 &&
      "closeOnActivate" in this.params &&
      this.params.closeOnActivate
    );
  }
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params)
      ? !1
      : typeof this.params.isActive == "function"
        ? this.params.isActive()
        : this.params.isActive === !0;
  }
};
const xe = Ct("ce-popover-item"),
  ee = {
    container: xe(),
    active: xe(null, "active"),
    disabled: xe(null, "disabled"),
    focused: xe(null, "focused"),
    hidden: xe(null, "hidden"),
    confirmationState: xe(null, "confirmation"),
    noHover: xe(null, "no-hover"),
    noFocus: xe(null, "no-focus"),
    title: xe("title"),
    secondaryTitle: xe("secondary-title"),
    icon: xe("icon"),
    iconTool: xe("icon", "tool"),
    iconChevronRight: xe("icon", "chevron-right"),
    wobbleAnimation: Ct("wobble")(),
  };
let St = class extends Vn {
  constructor(e, t) {
    super(e),
      (this.params = e),
      (this.nodes = { root: null, icon: null }),
      (this.confirmationState = null),
      (this.removeSpecialFocusBehavior = () => {
        var r;
        (r = this.nodes.root) == null || r.classList.remove(ee.noFocus);
      }),
      (this.removeSpecialHoverBehavior = () => {
        var r;
        (r = this.nodes.root) == null || r.classList.remove(ee.noHover);
      }),
      (this.onErrorAnimationEnd = () => {
        var r, n;
        (r = this.nodes.icon) == null || r.classList.remove(ee.wobbleAnimation),
          (n = this.nodes.icon) == null ||
            n.removeEventListener("animationend", this.onErrorAnimationEnd);
      }),
      (this.nodes.root = this.make(e, t));
  }
  get isDisabled() {
    return this.params.isDisabled === !0;
  }
  get toggle() {
    return this.params.toggle;
  }
  get title() {
    return this.params.title;
  }
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  get isFocused() {
    return this.nodes.root === null
      ? !1
      : this.nodes.root.classList.contains(ee.focused);
  }
  getElement() {
    return this.nodes.root;
  }
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  toggleActive(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(ee.active, e);
  }
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(ee.hidden, e);
  }
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  make(e, t) {
    var r, n;
    const i = t?.wrapperTag || "div",
      s = E.make(i, ee.container, { type: i === "button" ? "button" : void 0 });
    return (
      e.name && (s.dataset.itemName = e.name),
      (this.nodes.icon = E.make("div", [ee.icon, ee.iconTool], {
        innerHTML: e.icon || af,
      })),
      s.appendChild(this.nodes.icon),
      e.title !== void 0 &&
        s.appendChild(E.make("div", ee.title, { innerHTML: e.title || "" })),
      e.secondaryLabel &&
        s.appendChild(
          E.make("div", ee.secondaryTitle, { textContent: e.secondaryLabel }),
        ),
      this.hasChildren &&
        s.appendChild(
          E.make("div", [ee.icon, ee.iconChevronRight], { innerHTML: rf }),
        ),
      this.isActive && s.classList.add(ee.active),
      e.isDisabled && s.classList.add(ee.disabled),
      e.hint !== void 0 &&
        ((r = t?.hint) == null ? void 0 : r.enabled) !== !1 &&
        this.addHint(s, {
          ...e.hint,
          position: ((n = t?.hint) == null ? void 0 : n.position) || "right",
        }),
      s
    );
  }
  enableConfirmationMode(e) {
    if (this.nodes.root === null) return;
    const t = {
        ...this.params,
        ...e,
        confirmation: "confirmation" in e ? e.confirmation : void 0,
      },
      r = this.make(t);
    (this.nodes.root.innerHTML = r.innerHTML),
      this.nodes.root.classList.add(ee.confirmationState),
      (this.confirmationState = e),
      this.enableSpecialHoverAndFocusBehavior();
  }
  disableConfirmationMode() {
    if (this.nodes.root === null) return;
    const e = this.make(this.params);
    (this.nodes.root.innerHTML = e.innerHTML),
      this.nodes.root.classList.remove(ee.confirmationState),
      (this.confirmationState = null),
      this.disableSpecialHoverAndFocusBehavior();
  }
  enableSpecialHoverAndFocusBehavior() {
    var e, t, r;
    (e = this.nodes.root) == null || e.classList.add(ee.noHover),
      (t = this.nodes.root) == null || t.classList.add(ee.noFocus),
      (r = this.nodes.root) == null ||
        r.addEventListener("mouseleave", this.removeSpecialHoverBehavior, {
          once: !0,
        });
  }
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(),
      this.removeSpecialHoverBehavior(),
      (e = this.nodes.root) == null ||
        e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  activateOrEnableConfirmationMode(e) {
    var t;
    if (!("confirmation" in e) || e.confirmation === void 0)
      try {
        (t = e.onActivate) == null || t.call(e, e),
          this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else this.enableConfirmationMode(e.confirmation);
  }
  animateError() {
    var e, t, r;
    ((e = this.nodes.icon) != null &&
      e.classList.contains(ee.wobbleAnimation)) ||
      ((t = this.nodes.icon) == null || t.classList.add(ee.wobbleAnimation),
      (r = this.nodes.icon) == null ||
        r.addEventListener("animationend", this.onErrorAnimationEnd));
  }
};
const Kr = Ct("ce-popover-item-separator"),
  Xr = { container: Kr(), line: Kr("line"), hidden: Kr(null, "hidden") };
class lc extends Vn {
  constructor() {
    super(),
      (this.nodes = {
        root: E.make("div", Xr.container),
        line: E.make("div", Xr.line),
      }),
      this.nodes.root.appendChild(this.nodes.line);
  }
  getElement() {
    return this.nodes.root;
  }
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(Xr.hidden, e);
  }
}
var Ye = ((o) => (
  (o.Closed = "closed"), (o.ClosedOnActivate = "closed-on-activate"), o
))(Ye || {});
const he = Ct("ce-popover"),
  oe = {
    popover: he(),
    popoverContainer: he("container"),
    popoverOpenTop: he(null, "open-top"),
    popoverOpenLeft: he(null, "open-left"),
    popoverOpened: he(null, "opened"),
    search: he("search"),
    nothingFoundMessage: he("nothing-found-message"),
    nothingFoundMessageDisplayed: he("nothing-found-message", "displayed"),
    items: he("items"),
    overlay: he("overlay"),
    overlayHidden: he("overlay", "hidden"),
    popoverNested: he(null, "nested"),
    getPopoverNestedClass: (o) => he(null, `nested-level-${o.toString()}`),
    popoverInline: he(null, "inline"),
    popoverHeader: he("header"),
  };
var Xt = ((o) => (
  (o.NestingLevel = "--nesting-level"),
  (o.PopoverHeight = "--popover-height"),
  (o.InlinePopoverWidth = "--inline-popover-width"),
  (o.TriggerItemLeft = "--trigger-item-left"),
  (o.TriggerItemTop = "--trigger-item-top"),
  o
))(Xt || {});
const Ia = Ct("ce-popover-item-html"),
  La = { root: Ia(), hidden: Ia(null, "hidden") };
let xo = class extends Vn {
  constructor(e, t) {
    var r, n;
    super(e),
      (this.nodes = { root: E.make("div", La.root) }),
      this.nodes.root.appendChild(e.element),
      e.name && (this.nodes.root.dataset.itemName = e.name),
      e.hint !== void 0 &&
        ((r = t?.hint) == null ? void 0 : r.enabled) !== !1 &&
        this.addHint(this.nodes.root, {
          ...e.hint,
          position: ((n = t?.hint) == null ? void 0 : n.position) || "right",
        });
  }
  getElement() {
    return this.nodes.root;
  }
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(La.hidden, e);
  }
  getControls() {
    const e = this.nodes.root.querySelectorAll(
      `button, ${E.allInputsSelector}`,
    );
    return Array.from(e);
  }
};
class cc extends Mo {
  constructor(e, t = {}) {
    super(),
      (this.params = e),
      (this.itemsRenderParams = t),
      (this.listeners = new Io()),
      (this.messages = { nothingFound: "Nothing found", search: "Search" }),
      (this.items = this.buildItems(e.items)),
      e.messages && (this.messages = { ...this.messages, ...e.messages }),
      (this.nodes = {}),
      (this.nodes.popoverContainer = E.make("div", [oe.popoverContainer])),
      (this.nodes.nothingFoundMessage = E.make(
        "div",
        [oe.nothingFoundMessage],
        { textContent: this.messages.nothingFound },
      )),
      this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage),
      (this.nodes.items = E.make("div", [oe.items])),
      this.items.forEach((r) => {
        const n = r.getElement();
        n !== null && this.nodes.items.appendChild(n);
      }),
      this.nodes.popoverContainer.appendChild(this.nodes.items),
      this.listeners.on(this.nodes.popoverContainer, "click", (r) =>
        this.handleClick(r),
      ),
      (this.nodes.popover = E.make("div", [oe.popover, this.params.class])),
      this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  get itemsDefault() {
    return this.items.filter((e) => e instanceof St);
  }
  getElement() {
    return this.nodes.popover;
  }
  show() {
    this.nodes.popover.classList.add(oe.popoverOpened),
      this.search !== void 0 && this.search.focus();
  }
  hide() {
    this.nodes.popover.classList.remove(oe.popoverOpened),
      this.nodes.popover.classList.remove(oe.popoverOpenTop),
      this.itemsDefault.forEach((e) => e.reset()),
      this.search !== void 0 && this.search.clear(),
      this.emit(Ye.Closed);
  }
  destroy() {
    var e;
    this.items.forEach((t) => t.destroy()),
      this.nodes.popover.remove(),
      this.listeners.removeAll(),
      (e = this.search) == null || e.destroy();
  }
  activateItemByName(e) {
    const t = this.items.find((r) => r.name === e);
    this.handleItemClick(t);
  }
  buildItems(e) {
    return e.map((t) => {
      switch (t.type) {
        case Z.Separator:
          return new lc();
        case Z.Html:
          return new xo(t, this.itemsRenderParams[Z.Html]);
        default:
          return new St(t, this.itemsRenderParams[Z.Default]);
      }
    });
  }
  getTargetItem(e) {
    return this.items
      .filter((t) => t instanceof St || t instanceof xo)
      .find((t) => {
        const r = t.getElement();
        return r === null ? !1 : e.composedPath().includes(r);
      });
  }
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e),
          "handleClick" in e &&
            typeof e.handleClick == "function" &&
            e.handleClick();
        return;
      }
      this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()),
        "handleClick" in e &&
          typeof e.handleClick == "function" &&
          e.handleClick(),
        this.toggleItemActivenessIfNeeded(e),
        e.closeOnActivate && (this.hide(), this.emit(Ye.ClosedOnActivate));
    }
  }
  handleClick(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.handleItemClick(t);
  }
  toggleItemActivenessIfNeeded(e) {
    if (
      e instanceof St &&
      (e.toggle === !0 && e.toggleActive(), typeof e.toggle == "string")
    ) {
      const t = this.itemsDefault.filter((r) => r.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach((r) => {
        r.toggleActive(r === e);
      });
    }
  }
}
var fr = ((o) => ((o.Search = "search"), o))(fr || {});
const Gr = Ct("cdx-search-field"),
  Zr = { wrapper: Gr(), icon: Gr("icon"), input: Gr("input") };
class vf extends Mo {
  constructor({ items: e, placeholder: t }) {
    super(),
      (this.listeners = new Io()),
      (this.items = e),
      (this.wrapper = E.make("div", Zr.wrapper));
    const r = E.make("div", Zr.icon, { innerHTML: uf });
    (this.input = E.make("input", Zr.input, { placeholder: t, tabIndex: -1 })),
      this.wrapper.appendChild(r),
      this.wrapper.appendChild(this.input),
      this.listeners.on(this.input, "input", () => {
        (this.searchQuery = this.input.value),
          this.emit(fr.Search, {
            query: this.searchQuery,
            items: this.foundItems,
          });
      });
  }
  getElement() {
    return this.wrapper;
  }
  focus() {
    this.input.focus();
  }
  clear() {
    (this.input.value = ""),
      (this.searchQuery = ""),
      this.emit(fr.Search, { query: "", items: this.foundItems });
  }
  destroy() {
    this.listeners.removeAll();
  }
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  checkItem(e) {
    var t, r;
    const n = ((t = e.title) == null ? void 0 : t.toLowerCase()) || "",
      i = (r = this.searchQuery) == null ? void 0 : r.toLowerCase();
    return i !== void 0 ? n.includes(i) : !1;
  }
}
var bf = Object.defineProperty,
  yf = Object.getOwnPropertyDescriptor,
  kf = (o, e, t, r) => {
    for (var n = yf(e, t), i = o.length - 1, s; i >= 0; i--)
      (s = o[i]) && (n = s(e, t, n) || n);
    return n && bf(e, t, n), n;
  };
const dc = class uc extends cc {
  constructor(e, t) {
    super(e, t),
      (this.nestingLevel = 0),
      (this.nestedPopoverTriggerItem = null),
      (this.previouslyHoveredItem = null),
      (this.scopeElement = document.body),
      (this.hide = () => {
        var r;
        super.hide(),
          this.destroyNestedPopoverIfExists(),
          (r = this.flipper) == null || r.deactivate(),
          (this.previouslyHoveredItem = null);
      }),
      (this.onFlip = () => {
        const r = this.itemsDefault.find((n) => n.isFocused);
        r?.onFocus();
      }),
      (this.onSearch = (r) => {
        var n;
        const i = r.query === "",
          s = r.items.length === 0;
        this.items.forEach((l) => {
          let c = !1;
          l instanceof St
            ? (c = !r.items.includes(l))
            : (l instanceof lc || l instanceof xo) && (c = s || !i),
            l.toggleHidden(c);
        }),
          this.toggleNothingFoundMessage(s);
        const a =
          r.query === ""
            ? this.flippableElements
            : r.items.map((l) => l.getElement());
        (n = this.flipper) != null &&
          n.isActivated &&
          (this.flipper.deactivate(), this.flipper.activate(a));
      }),
      e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel),
      this.nestingLevel > 0 &&
        this.nodes.popover.classList.add(oe.popoverNested),
      e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement),
      this.nodes.popoverContainer !== null &&
        this.listeners.on(this.nodes.popoverContainer, "mouseover", (r) =>
          this.handleHover(r),
        ),
      e.searchable && this.addSearch(),
      e.flippable !== !1 &&
        ((this.flipper = new pr({
          items: this.flippableElements,
          focusedItemClass: ee.focused,
          allowedKeys: [j.TAB, j.UP, j.DOWN, j.ENTER],
        })),
        this.flipper.onFlip(this.onFlip));
  }
  hasFocus() {
    return this.flipper === void 0 ? !1 : this.flipper.hasFocus();
  }
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  get offsetTop() {
    return this.nodes.popoverContainer === null
      ? 0
      : this.nodes.popoverContainer.offsetTop;
  }
  show() {
    var e;
    this.nodes.popover.style.setProperty(
      Xt.PopoverHeight,
      this.size.height + "px",
    ),
      this.shouldOpenBottom ||
        this.nodes.popover.classList.add(oe.popoverOpenTop),
      this.shouldOpenRight ||
        this.nodes.popover.classList.add(oe.popoverOpenLeft),
      super.show(),
      (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  destroy() {
    this.hide(), super.destroy();
  }
  showNestedItems(e) {
    (this.nestedPopover !== null && this.nestedPopover !== void 0) ||
      ((this.nestedPopoverTriggerItem = e), this.showNestedPopoverForItem(e));
  }
  handleHover(e) {
    const t = this.getTargetItem(e);
    t !== void 0 &&
      this.previouslyHoveredItem !== t &&
      (this.destroyNestedPopoverIfExists(),
      (this.previouslyHoveredItem = t),
      t.hasChildren && this.showNestedPopoverForItem(t));
  }
  setTriggerItemPosition(e, t) {
    const r = t.getElement(),
      n = (r ? r.offsetTop : 0) - this.scrollTop,
      i = this.offsetTop + n;
    e.style.setProperty(Xt.TriggerItemTop, i + "px");
  }
  destroyNestedPopoverIfExists() {
    var e, t;
    this.nestedPopover === void 0 ||
      this.nestedPopover === null ||
      (this.nestedPopover.off(Ye.ClosedOnActivate, this.hide),
      this.nestedPopover.hide(),
      this.nestedPopover.destroy(),
      this.nestedPopover.getElement().remove(),
      (this.nestedPopover = null),
      (e = this.flipper) == null || e.activate(this.flippableElements),
      (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
  }
  showNestedPopoverForItem(e) {
    var t;
    (this.nestedPopover = new uc({
      searchable: e.isChildrenSearchable,
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable,
      messages: this.messages,
    })),
      e.onChildrenOpen(),
      this.nestedPopover.on(Ye.ClosedOnActivate, this.hide);
    const r = this.nestedPopover.getElement();
    return (
      this.nodes.popover.appendChild(r),
      this.setTriggerItemPosition(r, e),
      r.style.setProperty(
        Xt.NestingLevel,
        this.nestedPopover.nestingLevel.toString(),
      ),
      this.nestedPopover.show(),
      (t = this.flipper) == null || t.deactivate(),
      this.nestedPopover
    );
  }
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null) return !1;
    const e = this.nodes.popoverContainer.getBoundingClientRect(),
      t = this.scopeElement.getBoundingClientRect(),
      r = this.size.height,
      n = e.top + r,
      i = e.top - r,
      s = Math.min(window.innerHeight, t.bottom);
    return i < t.top || n <= s;
  }
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null) return !1;
    const e = this.nodes.popover.getBoundingClientRect(),
      t = this.scopeElement.getBoundingClientRect(),
      r = this.size.width,
      n = e.right + r,
      i = e.left - r,
      s = Math.min(window.innerWidth, t.right);
    return i < t.left || n <= s;
  }
  get size() {
    var e;
    const t = { height: 0, width: 0 };
    if (this.nodes.popover === null) return t;
    const r = this.nodes.popover.cloneNode(!0);
    (r.style.visibility = "hidden"),
      (r.style.position = "absolute"),
      (r.style.top = "-1000px"),
      r.classList.add(oe.popoverOpened),
      (e = r.querySelector("." + oe.popoverNested)) == null || e.remove(),
      document.body.appendChild(r);
    const n = r.querySelector("." + oe.popoverContainer);
    return (
      (t.height = n.offsetHeight), (t.width = n.offsetWidth), r.remove(), t
    );
  }
  get flippableElements() {
    return this.items
      .map((e) => {
        if (e instanceof St) return e.getElement();
        if (e instanceof xo) return e.getControls();
      })
      .flat()
      .filter((e) => e != null);
  }
  addSearch() {
    (this.search = new vf({
      items: this.itemsDefault,
      placeholder: this.messages.search,
    })),
      this.search.on(fr.Search, this.onSearch);
    const e = this.search.getElement();
    e.classList.add(oe.search),
      this.nodes.popoverContainer.insertBefore(
        e,
        this.nodes.popoverContainer.firstChild,
      );
  }
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(
      oe.nothingFoundMessageDisplayed,
      e,
    );
  }
};
kf([no], dc.prototype, "size");
let Yn = dc;
class wf extends Yn {
  constructor(e) {
    const t = !io();
    super(
      { ...e, class: oe.popoverInline },
      {
        [Z.Default]: {
          wrapperTag: "button",
          hint: { position: "top", alignment: "center", enabled: t },
        },
        [Z.Html]: {
          hint: { position: "top", alignment: "center", enabled: t },
        },
      },
    ),
      this.items.forEach((r) => {
        (!(r instanceof St) && !(r instanceof xo)) ||
          (r.hasChildren && r.isChildrenOpen && this.showNestedItems(r));
      });
  }
  get offsetLeft() {
    return this.nodes.popoverContainer === null
      ? 0
      : this.nodes.popoverContainer.offsetLeft;
  }
  show() {
    this.nestingLevel === 0 &&
      this.nodes.popover.style.setProperty(
        Xt.InlinePopoverWidth,
        this.size.width + "px",
      ),
      super.show();
  }
  handleHover() {}
  setTriggerItemPosition(e, t) {
    const r = t.getElement(),
      n = r ? r.offsetLeft : 0,
      i = this.offsetLeft + n;
    e.style.setProperty(Xt.TriggerItemLeft, i + "px");
  }
  showNestedItems(e) {
    if (this.nestedPopoverTriggerItem === e) {
      this.destroyNestedPopoverIfExists(),
        (this.nestedPopoverTriggerItem = null);
      return;
    }
    super.showNestedItems(e);
  }
  showNestedPopoverForItem(e) {
    const t = super.showNestedPopoverForItem(e);
    return (
      t.getElement().classList.add(oe.getPopoverNestedClass(t.nestingLevel)), t
    );
  }
  handleItemClick(e) {
    var t;
    e !== this.nestedPopoverTriggerItem &&
      ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(),
      super.destroyNestedPopoverIfExists()),
      super.handleItemClick(e);
  }
}
const hc = class fo {
  constructor() {
    this.scrollPosition = null;
  }
  lock() {
    vn ? this.lockHard() : document.body.classList.add(fo.CSS.scrollLocked);
  }
  unlock() {
    vn
      ? this.unlockHard()
      : document.body.classList.remove(fo.CSS.scrollLocked);
  }
  lockHard() {
    (this.scrollPosition = window.pageYOffset),
      document.documentElement.style.setProperty(
        "--window-scroll-offset",
        `${this.scrollPosition}px`,
      ),
      document.body.classList.add(fo.CSS.scrollLockedHard);
  }
  unlockHard() {
    document.body.classList.remove(fo.CSS.scrollLockedHard),
      this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition),
      (this.scrollPosition = null);
  }
};
hc.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard",
};
let xf = hc;
const Jr = Ct("ce-popover-header"),
  Qr = { root: Jr(), text: Jr("text"), backButton: Jr("back-button") };
class Cf {
  constructor({ text: e, onBackButtonClick: t }) {
    (this.listeners = new Io()),
      (this.text = e),
      (this.onBackButtonClick = t),
      (this.nodes = {
        root: E.make("div", [Qr.root]),
        backButton: E.make("button", [Qr.backButton]),
        text: E.make("div", [Qr.text]),
      }),
      (this.nodes.backButton.innerHTML = of),
      this.nodes.root.appendChild(this.nodes.backButton),
      this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick),
      (this.nodes.text.innerText = this.text),
      this.nodes.root.appendChild(this.nodes.text);
  }
  getElement() {
    return this.nodes.root;
  }
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
}
class Ef {
  constructor() {
    this.history = [];
  }
  push(e) {
    this.history.push(e);
  }
  pop() {
    return this.history.pop();
  }
  get currentTitle() {
    return this.history.length === 0
      ? ""
      : this.history[this.history.length - 1].title;
  }
  get currentItems() {
    return this.history.length === 0
      ? []
      : this.history[this.history.length - 1].items;
  }
  reset() {
    for (; this.history.length > 1; ) this.pop();
  }
}
let pc = class extends cc {
  constructor(e) {
    super(e, {
      [Z.Default]: { hint: { enabled: !1 } },
      [Z.Html]: { hint: { enabled: !1 } },
    }),
      (this.scrollLocker = new xf()),
      (this.history = new Ef()),
      (this.isHidden = !0),
      (this.nodes.overlay = E.make("div", [oe.overlay, oe.overlayHidden])),
      this.nodes.popover.insertBefore(
        this.nodes.overlay,
        this.nodes.popover.firstChild,
      ),
      this.listeners.on(this.nodes.overlay, "click", () => {
        this.hide();
      }),
      this.history.push({ items: e.items });
  }
  show() {
    this.nodes.overlay.classList.remove(oe.overlayHidden),
      super.show(),
      this.scrollLocker.lock(),
      (this.isHidden = !1);
  }
  hide() {
    this.isHidden ||
      (super.hide(),
      this.nodes.overlay.classList.add(oe.overlayHidden),
      this.scrollLocker.unlock(),
      this.history.reset(),
      (this.isHidden = !0));
  }
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title),
      this.history.push({ title: e.title, items: e.children });
  }
  updateItemsAndHeader(e, t) {
    if (
      (this.header !== null &&
        this.header !== void 0 &&
        (this.header.destroy(), (this.header = null)),
      t !== void 0)
    ) {
      this.header = new Cf({
        text: t,
        onBackButtonClick: () => {
          this.history.pop(),
            this.updateItemsAndHeader(
              this.history.currentItems,
              this.history.currentTitle,
            );
        },
      });
      const r = this.header.getElement();
      r !== null &&
        this.nodes.popoverContainer.insertBefore(
          r,
          this.nodes.popoverContainer.firstChild,
        );
    }
    this.items.forEach((r) => {
      var n;
      return (n = r.getElement()) == null ? void 0 : n.remove();
    }),
      (this.items = this.buildItems(e)),
      this.items.forEach((r) => {
        var n;
        const i = r.getElement();
        i !== null && ((n = this.nodes.items) == null || n.appendChild(i));
      });
  }
};
class _f extends H {
  constructor() {
    super(...arguments),
      (this.opened = !1),
      (this.selection = new A()),
      (this.popover = null),
      (this.close = () => {
        this.opened &&
          ((this.opened = !1),
          A.isAtEditor || this.selection.restore(),
          this.selection.clearSaved(),
          !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted &&
            this.Editor.BlockManager.currentBlock &&
            this.Editor.BlockSelection.unselectBlock(
              this.Editor.BlockManager.currentBlock,
            ),
          this.eventsDispatcher.emit(this.events.closed),
          this.popover &&
            (this.popover.off(Ye.Closed, this.onPopoverClose),
            this.popover.destroy(),
            this.popover.getElement().remove(),
            (this.popover = null)));
      }),
      (this.onPopoverClose = () => {
        this.close();
      });
  }
  get events() {
    return { opened: "block-settings-opened", closed: "block-settings-closed" };
  }
  get CSS() {
    return { settings: "ce-settings" };
  }
  get flipper() {
    var e;
    if (this.popover !== null)
      return "flipper" in this.popover
        ? (e = this.popover) == null
          ? void 0
          : e.flipper
        : void 0;
  }
  make() {
    (this.nodes.wrapper = E.make("div", [this.CSS.settings])),
      this.nodes.wrapper.setAttribute("data-cy", "block-tunes"),
      this.eventsDispatcher.on(wo, this.close);
  }
  destroy() {
    this.removeAllNodes(),
      this.listeners.destroy(),
      this.eventsDispatcher.off(wo, this.close);
  }
  async open(e = this.Editor.BlockManager.currentBlock) {
    var t;
    (this.opened = !0),
      this.selection.save(),
      this.Editor.BlockSelection.selectBlock(e),
      this.Editor.BlockSelection.clearCache();
    const { toolTunes: r, commonTunes: n } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const i = io() ? pc : Yn;
    (this.popover = new i({
      searchable: !0,
      items: await this.getTunesItems(e, n, r),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: ge.ui(Te.ui.popover, "Nothing found"),
        search: ge.ui(Te.ui.popover, "Filter"),
      },
    })),
      this.popover.on(Ye.Closed, this.onPopoverClose),
      (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()),
      this.popover.show();
  }
  getElement() {
    return this.nodes.wrapper;
  }
  async getTunesItems(e, t, r) {
    const n = [];
    r !== void 0 &&
      r.length > 0 &&
      (n.push(...r), n.push({ type: Z.Separator }));
    const i = Array.from(this.Editor.Tools.blockTools.values()),
      s = (await ec(e, i)).reduce(
        (a, l) => (
          l.toolbox.forEach((c) => {
            a.push({
              icon: c.icon,
              title: ge.t(Te.toolNames, c.title),
              name: l.name,
              closeOnActivate: !0,
              onActivate: async () => {
                const { BlockManager: d, Caret: h, Toolbar: u } = this.Editor,
                  p = await d.convert(e, l.name, c.data);
                u.close(), h.setToBlock(p, h.positions.END);
              },
            });
          }),
          a
        ),
        [],
      );
    return (
      s.length > 0 &&
        (n.push({
          icon: ac,
          name: "convert-to",
          title: ge.ui(Te.ui.popover, "Convert to"),
          children: { searchable: !0, items: s },
        }),
        n.push({ type: Z.Separator })),
      n.push(...t),
      n.map((a) => this.resolveTuneAliases(a))
    );
  }
  resolveTuneAliases(e) {
    if (e.type === Z.Separator || e.type === Z.Html) return e;
    const t = Qp(e, { label: "title" });
    return (
      e.confirmation &&
        (t.confirmation = this.resolveTuneAliases(e.confirmation)),
      t
    );
  }
}
var fc = { exports: {} };
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */ (function (o, e) {
  (function (t, r) {
    o.exports = r();
  })(window, function () {
    return (function (t) {
      var r = {};
      function n(i) {
        if (r[i]) return r[i].exports;
        var s = (r[i] = { i, l: !1, exports: {} });
        return t[i].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
      }
      return (
        (n.m = t),
        (n.c = r),
        (n.d = function (i, s, a) {
          n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
        }),
        (n.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (n.t = function (i, s) {
          if (
            (1 & s && (i = n(i)),
            8 & s || (4 & s && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var a = Object.create(null);
          if (
            (n.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: i }),
            2 & s && typeof i != "string")
          )
            for (var l in i)
              n.d(
                a,
                l,
                function (c) {
                  return i[c];
                }.bind(null, l),
              );
          return a;
        }),
        (n.n = function (i) {
          var s =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return n.d(s, "a", s), s;
        }),
        (n.o = function (i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }),
        (n.p = ""),
        n((n.s = 0))
      );
    })([
      function (t, r, n) {
        function i(l, c) {
          for (var d = 0; d < c.length; d++) {
            var h = c[d];
            (h.enumerable = h.enumerable || !1),
              (h.configurable = !0),
              "value" in h && (h.writable = !0),
              Object.defineProperty(l, h.key, h);
          }
        }
        function s(l, c, d) {
          return c && i(l.prototype, c), d && i(l, d), l;
        }
        n.r(r);
        var a = (function () {
          function l(c) {
            var d = this;
            (function (h, u) {
              if (!(h instanceof u))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
              (this.commands = {}),
              (this.keys = {}),
              (this.name = c.name),
              this.parseShortcutName(c.name),
              (this.element = c.on),
              (this.callback = c.callback),
              (this.executeShortcut = function (h) {
                d.execute(h);
              }),
              this.element.addEventListener(
                "keydown",
                this.executeShortcut,
                !1,
              );
          }
          return (
            s(l, null, [
              {
                key: "supportedCommands",
                get: function () {
                  return {
                    SHIFT: ["SHIFT"],
                    CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"],
                    ALT: ["ALT", "OPTION"],
                  };
                },
              },
              {
                key: "keyCodes",
                get: function () {
                  return {
                    0: 48,
                    1: 49,
                    2: 50,
                    3: 51,
                    4: 52,
                    5: 53,
                    6: 54,
                    7: 55,
                    8: 56,
                    9: 57,
                    A: 65,
                    B: 66,
                    C: 67,
                    D: 68,
                    E: 69,
                    F: 70,
                    G: 71,
                    H: 72,
                    I: 73,
                    J: 74,
                    K: 75,
                    L: 76,
                    M: 77,
                    N: 78,
                    O: 79,
                    P: 80,
                    Q: 81,
                    R: 82,
                    S: 83,
                    T: 84,
                    U: 85,
                    V: 86,
                    W: 87,
                    X: 88,
                    Y: 89,
                    Z: 90,
                    BACKSPACE: 8,
                    ENTER: 13,
                    ESCAPE: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    INSERT: 45,
                    DELETE: 46,
                    ".": 190,
                  };
                },
              },
            ]),
            s(l, [
              {
                key: "parseShortcutName",
                value: function (c) {
                  c = c.split("+");
                  for (var d = 0; d < c.length; d++) {
                    c[d] = c[d].toUpperCase();
                    var h = !1;
                    for (var u in l.supportedCommands)
                      if (l.supportedCommands[u].includes(c[d])) {
                        h = this.commands[u] = !0;
                        break;
                      }
                    h || (this.keys[c[d]] = !0);
                  }
                  for (var p in l.supportedCommands)
                    this.commands[p] || (this.commands[p] = !1);
                },
              },
              {
                key: "execute",
                value: function (c) {
                  var d,
                    h = {
                      CMD: c.ctrlKey || c.metaKey,
                      SHIFT: c.shiftKey,
                      ALT: c.altKey,
                    },
                    u = !0;
                  for (d in this.commands)
                    this.commands[d] !== h[d] && (u = !1);
                  var p,
                    g = !0;
                  for (p in this.keys) g = g && c.keyCode === l.keyCodes[p];
                  u && g && this.callback(c);
                },
              },
              {
                key: "remove",
                value: function () {
                  this.element.removeEventListener(
                    "keydown",
                    this.executeShortcut,
                  );
                },
              },
            ]),
            l
          );
        })();
        r.default = a;
      },
    ]).default;
  });
})(fc);
var Sf = fc.exports;
const Tf = Cr(Sf);
class Of {
  constructor() {
    this.registeredShortcuts = new Map();
  }
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`,
      );
    const t = new Tf({ name: e.name, on: e.on, callback: e.handler }),
      r = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...r, t]);
  }
  remove(e, t) {
    const r = this.findShortcut(e, t);
    if (!r) return;
    r.remove();
    const n = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(
      e,
      n.filter((i) => i !== r),
    );
  }
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(
      ({ name: r }) => r === t,
    );
  }
}
const Qt = new Of();
var Bf = Object.defineProperty,
  Mf = Object.getOwnPropertyDescriptor,
  gc = (o, e, t, r) => {
    for (var n = Mf(e, t), i = o.length - 1, s; i >= 0; i--)
      (s = o[i]) && (n = s(e, t, n) || n);
    return n && Bf(e, t, n), n;
  },
  Uo = ((o) => (
    (o.Opened = "toolbox-opened"),
    (o.Closed = "toolbox-closed"),
    (o.BlockAdded = "toolbox-block-added"),
    o
  ))(Uo || {});
const Kn = class mc extends Mo {
  constructor({ api: e, tools: t, i18nLabels: r }) {
    super(),
      (this.opened = !1),
      (this.listeners = new Io()),
      (this.popover = null),
      (this.handleMobileLayoutToggle = () => {
        this.destroyPopover(), this.initPopover();
      }),
      (this.onPopoverClose = () => {
        (this.opened = !1), this.emit("toolbox-closed");
      }),
      (this.api = e),
      (this.tools = t),
      (this.i18nLabels = r),
      this.enableShortcuts(),
      (this.nodes = { toolbox: E.make("div", mc.CSS.toolbox) }),
      this.initPopover(),
      this.nodes.toolbox.setAttribute("data-cy", "toolbox"),
      this.api.events.on(wo, this.handleMobileLayoutToggle);
  }
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  static get CSS() {
    return { toolbox: "ce-toolbox" };
  }
  getElement() {
    return this.nodes.toolbox;
  }
  hasFocus() {
    if (this.popover !== null)
      return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  destroy() {
    var e;
    super.destroy(),
      this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(),
      this.removeAllShortcuts(),
      (e = this.popover) == null || e.off(Ye.Closed, this.onPopoverClose),
      this.listeners.destroy(),
      this.api.events.off(wo, this.handleMobileLayoutToggle);
  }
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  open() {
    var e;
    this.isEmpty ||
      ((e = this.popover) == null || e.show(),
      (this.opened = !0),
      this.emit("toolbox-opened"));
  }
  close() {
    var e;
    (e = this.popover) == null || e.hide(),
      (this.opened = !1),
      this.emit("toolbox-closed");
  }
  toggle() {
    this.opened ? this.close() : this.open();
  }
  initPopover() {
    var e;
    const t = io() ? pc : Yn;
    (this.popover = new t({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter,
      },
      items: this.toolboxItemsToBeDisplayed,
    })),
      this.popover.on(Ye.Closed, this.onPopoverClose),
      (e = this.nodes.toolbox) == null || e.append(this.popover.getElement());
  }
  destroyPopover() {
    this.popover !== null &&
      (this.popover.hide(),
      this.popover.off(Ye.Closed, this.onPopoverClose),
      this.popover.destroy(),
      (this.popover = null)),
      this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return (
      this.tools.forEach((t) => {
        t.toolbox && e.push(t);
      }),
      e
    );
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, r, n = !0) => ({
      icon: t.icon,
      title: ge.t(Te.toolNames, t.title || cr(r.name)),
      name: r.name,
      onActivate: () => {
        this.toolButtonActivated(r.name, t.data);
      },
      secondaryLabel: r.shortcut && n ? Un(r.shortcut) : "",
    });
    return this.toolsToBeDisplayed.reduce(
      (t, r) => (
        Array.isArray(r.toolbox)
          ? r.toolbox.forEach((n, i) => {
              t.push(e(n, r, i === 0));
            })
          : r.toolbox !== void 0 && t.push(e(r.toolbox, r)),
        t
      ),
      [],
    );
  }
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  enableShortcutForTool(e, t) {
    Qt.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: async (r) => {
        r.preventDefault();
        const n = this.api.blocks.getCurrentBlockIndex(),
          i = this.api.blocks.getBlockByIndex(n);
        if (i)
          try {
            const s = await this.api.blocks.convert(i.id, e);
            this.api.caret.setToBlock(s, "end");
            return;
          } catch {}
        this.insertNewBlock(e);
      },
    });
  }
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && Qt.remove(this.api.ui.nodes.redactor, t);
    });
  }
  async insertNewBlock(e, t) {
    const r = this.api.blocks.getCurrentBlockIndex(),
      n = this.api.blocks.getBlockByIndex(r);
    if (!n) return;
    const i = n.isEmpty ? r : r + 1;
    let s;
    if (t) {
      const l = await this.api.blocks.composeBlockData(e);
      s = Object.assign(l, t);
    }
    const a = this.api.blocks.insert(e, s, void 0, i, void 0, n.isEmpty);
    a.call(ot.APPEND_CALLBACK),
      this.api.caret.setToBlock(i),
      this.emit("toolbox-block-added", { block: a }),
      this.api.toolbar.close();
  }
};
gc([no], Kn.prototype, "toolsToBeDisplayed");
gc([no], Kn.prototype, "toolboxItemsToBeDisplayed");
let If = Kn;
const vc = "block hovered";
async function Lf(o, e) {
  const t = navigator.keyboard;
  if (!t) return e;
  try {
    return (await t.getLayoutMap()).get(o) || e;
  } catch (r) {
    return console.error(r), e;
  }
}
class Pf extends H {
  constructor({ config: e, eventsDispatcher: t }) {
    super({ config: e, eventsDispatcher: t }), (this.toolboxInstance = null);
  }
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden",
    };
  }
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          z("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        (this.Editor.BlockManager.currentBlock = this.hoveredBlock),
          this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          z(
            "toolbox.toggle() called before initialization is finished",
            "warn",
          );
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      },
    };
  }
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      },
    };
  }
  get blockTunesToggler() {
    return {
      hide: () =>
        this.nodes.settingsToggler.classList.add(
          this.CSS.settingsTogglerHidden,
        ),
      show: () =>
        this.nodes.settingsToggler.classList.remove(
          this.CSS.settingsTogglerHidden,
        ),
    };
  }
  toggleReadOnly(e) {
    e
      ? (this.destroy(),
        this.Editor.BlockSettings.destroy(),
        this.disableModuleBindings())
      : window.requestIdleCallback(
          () => {
            this.drawUI(), this.enableModuleBindings();
          },
          { timeout: 2e3 },
        );
  }
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      z(
        "Can't open Toolbar since Editor initialization is not finished yet",
        "warn",
      );
      return;
    }
    if (
      (this.toolboxInstance.opened && this.toolboxInstance.close(),
      this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(),
      !e)
    )
      return;
    this.hoveredBlock = e;
    const t = e.holder,
      { isMobile: r } = this.Editor.UI;
    let n;
    const i = 20,
      s = e.firstInput,
      a = t.getBoundingClientRect(),
      l = s !== void 0 ? s.getBoundingClientRect() : null,
      c = l !== null ? l.top - a.top : null,
      d = c !== null ? c > i : void 0;
    if (r) n = t.offsetTop + t.offsetHeight;
    else if (s === void 0 || d) {
      const h = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      n = t.offsetTop + h;
    } else {
      const h = gp(s),
        u = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10);
      n = t.offsetTop + h - u + 8 + c;
    }
    (this.nodes.wrapper.style.top = `${Math.floor(n)}px`),
      this.Editor.BlockManager.blocks.length === 1 && e.isEmpty
        ? this.blockTunesToggler.hide()
        : this.blockTunesToggler.show(),
      this.open();
  }
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled ||
      ((e = this.nodes.wrapper) == null ||
        e.classList.remove(this.CSS.toolbarOpened),
      this.blockActions.hide(),
      (t = this.toolboxInstance) == null || t.close(),
      this.Editor.BlockSettings.close(),
      this.reset());
  }
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened),
      e ? this.blockActions.show() : this.blockActions.hide();
  }
  async make() {
    (this.nodes.wrapper = E.make("div", this.CSS.toolbar)),
      ["content", "actions"].forEach((i) => {
        this.nodes[i] = E.make("div", this.CSS[i]);
      }),
      E.append(this.nodes.wrapper, this.nodes.content),
      E.append(this.nodes.content, this.nodes.actions),
      (this.nodes.plusButton = E.make("div", this.CSS.plusButton, {
        innerHTML: df,
      })),
      E.append(this.nodes.actions, this.nodes.plusButton),
      this.readOnlyMutableListeners.on(
        this.nodes.plusButton,
        "click",
        () => {
          ur(!0), this.plusButtonClicked();
        },
        !1,
      );
    const e = E.make("div");
    e.appendChild(document.createTextNode(ge.ui(Te.ui.toolbar.toolbox, "Add"))),
      e.appendChild(
        E.make("div", this.CSS.plusButtonShortcut, { textContent: "/" }),
      ),
      hr(this.nodes.plusButton, e, { hidingDelay: 400 }),
      (this.nodes.settingsToggler = E.make("span", this.CSS.settingsToggler, {
        innerHTML: cf,
      })),
      E.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = E.make("div"),
      r = E.text(ge.ui(Te.ui.blockTunes.toggler, "Click to tune")),
      n = await Lf("Slash", "/");
    t.appendChild(r),
      t.appendChild(
        E.make("div", this.CSS.plusButtonShortcut, {
          textContent: Un(`CMD + ${n}`),
        }),
      ),
      hr(this.nodes.settingsToggler, t, { hidingDelay: 400 }),
      E.append(this.nodes.actions, this.makeToolbox()),
      E.append(this.nodes.actions, this.Editor.BlockSettings.getElement()),
      E.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  makeToolbox() {
    return (
      (this.toolboxInstance = new If({
        api: this.Editor.API.methods,
        tools: this.Editor.Tools.blockTools,
        i18nLabels: {
          filter: ge.ui(Te.ui.popover, "Filter"),
          nothingFound: ge.ui(Te.ui.popover, "Nothing found"),
        },
      })),
      this.toolboxInstance.on(Uo.Opened, () => {
        this.Editor.UI.nodes.wrapper.classList.add(
          this.CSS.openedToolboxHolderModifier,
        );
      }),
      this.toolboxInstance.on(Uo.Closed, () => {
        this.Editor.UI.nodes.wrapper.classList.remove(
          this.CSS.openedToolboxHolderModifier,
        );
      }),
      this.toolboxInstance.on(Uo.BlockAdded, ({ block: e }) => {
        const { BlockManager: t, Caret: r } = this.Editor,
          n = t.getBlockById(e.id);
        n.inputs.length === 0 &&
          (n === t.lastBlock
            ? (t.insertAtEnd(), r.setToBlock(t.lastBlock))
            : r.setToBlock(t.nextBlock));
      }),
      this.toolboxInstance.getElement()
    );
  }
  plusButtonClicked() {
    var e;
    (this.Editor.BlockManager.currentBlock = this.hoveredBlock),
      (e = this.toolboxInstance) == null || e.toggle();
  }
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      this.nodes.settingsToggler,
      "mousedown",
      (e) => {
        var t;
        e.stopPropagation(),
          this.settingsTogglerClicked(),
          (t = this.toolboxInstance) != null &&
            t.opened &&
            this.toolboxInstance.close(),
          ur(!0);
      },
      !0,
    ),
      io() ||
        this.eventsDispatcher.on(vc, (e) => {
          var t;
          this.Editor.BlockSettings.opened ||
            ((t = this.toolboxInstance) != null && t.opened) ||
            this.moveAndOpen(e.block);
        });
  }
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  settingsTogglerClicked() {
    (this.Editor.BlockManager.currentBlock = this.hoveredBlock),
      this.Editor.BlockSettings.opened
        ? this.Editor.BlockSettings.close()
        : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  destroy() {
    this.removeAllNodes(),
      this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var Tt = ((o) => (
    (o[(o.Block = 0)] = "Block"),
    (o[(o.Inline = 1)] = "Inline"),
    (o[(o.Tune = 2)] = "Tune"),
    o
  ))(Tt || {}),
  zo = ((o) => (
    (o.Shortcut = "shortcut"),
    (o.Toolbox = "toolbox"),
    (o.EnabledInlineTools = "inlineToolbar"),
    (o.EnabledBlockTunes = "tunes"),
    (o.Config = "config"),
    o
  ))(zo || {}),
  bc = ((o) => ((o.Shortcut = "shortcut"), (o.SanitizeConfig = "sanitize"), o))(
    bc || {},
  ),
  Wt = ((o) => (
    (o.IsEnabledLineBreaks = "enableLineBreaks"),
    (o.Toolbox = "toolbox"),
    (o.ConversionConfig = "conversionConfig"),
    (o.IsReadOnlySupported = "isReadOnlySupported"),
    (o.PasteConfig = "pasteConfig"),
    o
  ))(Wt || {}),
  gr = ((o) => (
    (o.IsInline = "isInline"),
    (o.Title = "title"),
    (o.IsReadOnlySupported = "isReadOnlySupported"),
    o
  ))(gr || {}),
  wn = ((o) => ((o.IsTune = "isTune"), o))(wn || {});
let Xn = class {
  constructor({
    name: e,
    constructable: t,
    config: r,
    api: n,
    isDefault: i,
    isInternal: s = !1,
    defaultPlaceholder: a,
  }) {
    (this.api = n),
      (this.name = e),
      (this.constructable = t),
      (this.config = r),
      (this.isDefault = i),
      (this.isInternal = s),
      (this.defaultPlaceholder = a);
  }
  get settings() {
    const e = this.config.config || {};
    return (
      this.isDefault &&
        !("placeholder" in e) &&
        this.defaultPlaceholder &&
        (e.placeholder = this.defaultPlaceholder),
      e
    );
  }
  reset() {
    if (Q(this.constructable.reset)) return this.constructable.reset();
  }
  prepare() {
    if (Q(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings,
      });
  }
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  isInline() {
    return this.type === Tt.Inline;
  }
  isBlock() {
    return this.type === Tt.Block;
  }
  isTune() {
    return this.type === Tt.Tune;
  }
};
class Nf extends H {
  constructor({ config: e, eventsDispatcher: t }) {
    super({ config: e, eventsDispatcher: t }),
      (this.CSS = { inlineToolbar: "ce-inline-toolbar" }),
      (this.opened = !1),
      (this.popover = null),
      (this.toolbarVerticalMargin = io() ? 20 : 6),
      (this.tools = new Map()),
      window.requestIdleCallback(
        () => {
          this.make();
        },
        { timeout: 2e3 },
      );
  }
  async tryToShow(e = !1) {
    e && this.close(),
      this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  close() {
    var e, t;
    if (this.opened) {
      for (const [r, n] of this.tools) {
        const i = this.getToolShortcut(r.name);
        i !== void 0 && Qt.remove(this.Editor.UI.nodes.redactor, i),
          Q(n.clear) && n.clear();
      }
      (this.tools = new Map()),
        this.reset(),
        (this.opened = !1),
        (e = this.popover) == null || e.hide(),
        (t = this.popover) == null || t.destroy(),
        (this.popover = null);
    }
  }
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  destroy() {
    var e;
    this.removeAllNodes(),
      (e = this.popover) == null || e.destroy(),
      (this.popover = null);
  }
  make() {
    (this.nodes.wrapper = E.make("div", [
      this.CSS.inlineToolbar,
      ...(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []),
    ])),
      this.nodes.wrapper.setAttribute("data-cy", "inline-toolbar"),
      E.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  async open() {
    var e;
    if (this.opened) return;
    (this.opened = !0),
      this.popover !== null && this.popover.destroy(),
      this.createToolsInstances();
    const t = await this.getPopoverItems();
    (this.popover = new wf({
      items: t,
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: ge.ui(Te.ui.popover, "Nothing found"),
        search: ge.ui(Te.ui.popover, "Filter"),
      },
    })),
      this.move(this.popover.size.width),
      (e = this.nodes.wrapper) == null || e.append(this.popover.getElement()),
      this.popover.show();
  }
  move(e) {
    const t = A.rect,
      r = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
      n = {
        x: t.x - r.x,
        y: t.y + t.height - r.top + this.toolbarVerticalMargin,
      };
    n.x + e + r.x > this.Editor.UI.contentRect.right &&
      (n.x = this.Editor.UI.contentRect.right - e - r.x),
      (this.nodes.wrapper.style.left = Math.floor(n.x) + "px"),
      (this.nodes.wrapper.style.top = Math.floor(n.y) + "px");
  }
  reset() {
    (this.nodes.wrapper.style.left = "0"), (this.nodes.wrapper.style.top = "0");
  }
  allowedToShow() {
    const e = ["IMG", "INPUT"],
      t = A.get(),
      r = A.text;
    if (!t || !t.anchorNode || t.isCollapsed || r.length < 1) return !1;
    const n = E.isElement(t.anchorNode)
      ? t.anchorNode
      : t.anchorNode.parentElement;
    if (n === null || (t !== null && e.includes(n.tagName))) return !1;
    const i = this.Editor.BlockManager.getBlock(t.anchorNode);
    return !i ||
      this.getTools().some((s) => i.tool.inlineTools.has(s.name)) === !1
      ? !1
      : n.closest("[contenteditable]") !== null;
  }
  getTools() {
    const e = this.Editor.BlockManager.currentBlock;
    return e
      ? Array.from(e.tool.inlineTools.values()).filter(
          (t) =>
            !(this.Editor.ReadOnly.isEnabled && t.isReadOnlySupported !== !0),
        )
      : [];
  }
  createToolsInstances() {
    (this.tools = new Map()),
      this.getTools().forEach((e) => {
        const t = e.create();
        this.tools.set(e, t);
      });
  }
  async getPopoverItems() {
    const e = [];
    let t = 0;
    for (const [r, n] of this.tools) {
      const i = await n.render(),
        s = this.getToolShortcut(r.name);
      if (s !== void 0)
        try {
          this.enableShortcuts(r.name, s);
        } catch {}
      const a = s !== void 0 ? Un(s) : void 0,
        l = ge.t(Te.toolNames, r.title || cr(r.name));
      [i].flat().forEach((c) => {
        var d, h;
        const u = {
          name: r.name,
          onActivate: () => {
            this.toolClicked(n);
          },
          hint: { title: l, description: a },
        };
        if (E.isElement(c)) {
          const p = { ...u, element: c, type: Z.Html };
          if (Q(n.renderActions)) {
            const g = n.renderActions();
            p.children = {
              isOpen: (d = n.checkState) == null ? void 0 : d.call(n, A.get()),
              isFlippable: !1,
              items: [{ type: Z.Html, element: g }],
            };
          } else (h = n.checkState) == null || h.call(n, A.get());
          e.push(p);
        } else if (c.type === Z.Html) e.push({ ...u, ...c, type: Z.Html });
        else if (c.type === Z.Separator) e.push({ type: Z.Separator });
        else {
          const p = { ...u, ...c, type: Z.Default };
          "children" in p && t !== 0 && e.push({ type: Z.Separator }),
            e.push(p),
            "children" in p &&
              t < this.tools.size - 1 &&
              e.push({ type: Z.Separator });
        }
      }),
        t++;
    }
    return e;
  }
  getToolShortcut(e) {
    const { Tools: t } = this.Editor,
      r = t.inlineTools.get(e),
      n = t.internal.inlineTools;
    return Array.from(n.keys()).includes(e)
      ? this.inlineTools[e][bc.Shortcut]
      : r?.shortcut;
  }
  enableShortcuts(e, t) {
    Qt.add({
      name: t,
      handler: (r) => {
        var n;
        const { currentBlock: i } = this.Editor.BlockManager;
        i &&
          i.tool.enabledInlineTools &&
          (r.preventDefault(),
          (n = this.popover) == null || n.activateItemByName(e));
      },
      on: document,
    });
  }
  toolClicked(e) {
    var t;
    const r = A.range;
    (t = e.surround) == null || t.call(e, r), this.checkToolsState();
  }
  checkToolsState() {
    var e;
    (e = this.tools) == null ||
      e.forEach((t) => {
        var r;
        (r = t.checkState) == null || r.call(t, A.get());
      });
  }
  get inlineTools() {
    const e = {};
    return (
      Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, r]) => {
        e[t] = r.create();
      }),
      e
    );
  }
}
function yc() {
  const o = window.getSelection();
  if (o === null) return [null, 0];
  let e = o.focusNode,
    t = o.focusOffset;
  return e === null
    ? [null, 0]
    : (e.nodeType !== Node.TEXT_NODE &&
        e.childNodes.length > 0 &&
        (e.childNodes[t]
          ? ((e = e.childNodes[t]), (t = 0))
          : ((e = e.childNodes[t - 1]), (t = e.textContent.length))),
      [e, t]);
}
function kc(o, e, t, r) {
  const n = document.createRange();
  r === "left"
    ? (n.setStart(o, 0), n.setEnd(e, t))
    : (n.setStart(e, t), n.setEnd(o, o.childNodes.length));
  const i = n.cloneContents(),
    s = document.createElement("div");
  s.appendChild(i);
  const a = s.textContent || "";
  return fp(a);
}
function Wo(o) {
  const e = E.getDeepestNode(o);
  if (e === null || E.isEmpty(o)) return !0;
  if (E.isNativeInput(e)) return e.selectionEnd === 0;
  if (E.isEmpty(o)) return !0;
  const [t, r] = yc();
  return t === null ? !1 : kc(o, t, r, "left");
}
function qo(o) {
  const e = E.getDeepestNode(o, !0);
  if (e === null) return !0;
  if (E.isNativeInput(e)) return e.selectionEnd === e.value.length;
  const [t, r] = yc();
  return t === null ? !1 : kc(o, t, r, "right");
}
var wc = {},
  Gn = {},
  Er = {},
  Pt = {},
  Zn = {},
  Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.allInputsSelector = Af;
function Af() {
  var o = ["text", "password", "email", "number", "search", "tel", "url"];
  return (
    "[contenteditable=true], textarea, input:not([type]), " +
    o
      .map(function (e) {
        return 'input[type="'.concat(e, '"]');
      })
      .join(", ")
  );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.allInputsSelector = void 0);
  var e = Jn;
  Object.defineProperty(o, "allInputsSelector", {
    enumerable: !0,
    get: function () {
      return e.allInputsSelector;
    },
  });
})(Zn);
var Nt = {},
  Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.isNativeInput = jf;
function jf(o) {
  var e = ["INPUT", "TEXTAREA"];
  return o && o.tagName ? e.includes(o.tagName) : !1;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isNativeInput = void 0);
  var e = Qn;
  Object.defineProperty(o, "isNativeInput", {
    enumerable: !0,
    get: function () {
      return e.isNativeInput;
    },
  });
})(Nt);
var xc = {},
  ei = {};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.append = Rf;
function Rf(o, e) {
  Array.isArray(e)
    ? e.forEach(function (t) {
        o.appendChild(t);
      })
    : o.appendChild(e);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.append = void 0);
  var e = ei;
  Object.defineProperty(o, "append", {
    enumerable: !0,
    get: function () {
      return e.append;
    },
  });
})(xc);
var ti = {},
  oi = {};
Object.defineProperty(oi, "__esModule", { value: !0 });
oi.blockElements = Df;
function Df() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video",
  ];
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.blockElements = void 0);
  var e = oi;
  Object.defineProperty(o, "blockElements", {
    enumerable: !0,
    get: function () {
      return e.blockElements;
    },
  });
})(ti);
var Cc = {},
  ri = {};
Object.defineProperty(ri, "__esModule", { value: !0 });
ri.calculateBaseline = $f;
function $f(o) {
  var e = window.getComputedStyle(o),
    t = parseFloat(e.fontSize),
    r = parseFloat(e.lineHeight) || t * 1.2,
    n = parseFloat(e.paddingTop),
    i = parseFloat(e.borderTopWidth),
    s = parseFloat(e.marginTop),
    a = t * 0.8,
    l = (r - t) / 2,
    c = s + i + n + l + a;
  return c;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.calculateBaseline = void 0);
  var e = ri;
  Object.defineProperty(o, "calculateBaseline", {
    enumerable: !0,
    get: function () {
      return e.calculateBaseline;
    },
  });
})(Cc);
var Ec = {},
  ni = {},
  ii = {},
  si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
si.isContentEditable = Hf;
function Hf(o) {
  return o.contentEditable === "true";
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isContentEditable = void 0);
  var e = si;
  Object.defineProperty(o, "isContentEditable", {
    enumerable: !0,
    get: function () {
      return e.isContentEditable;
    },
  });
})(ii);
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.canSetCaret = zf;
var Ff = Nt,
  Uf = ii;
function zf(o) {
  var e = !0;
  if ((0, Ff.isNativeInput)(o))
    switch (o.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else e = (0, Uf.isContentEditable)(o);
  return e;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.canSetCaret = void 0);
  var e = ni;
  Object.defineProperty(o, "canSetCaret", {
    enumerable: !0,
    get: function () {
      return e.canSetCaret;
    },
  });
})(Ec);
var _r = {},
  ai = {};
function Wf(o, e, t) {
  const r = t.value !== void 0 ? "value" : "get",
    n = t[r],
    i = `#${e}Cache`;
  if (
    ((t[r] = function (...s) {
      return this[i] === void 0 && (this[i] = n.apply(this, s)), this[i];
    }),
    r === "get" && t.set)
  ) {
    const s = t.set;
    t.set = function (a) {
      delete o[i], s.apply(this, a);
    };
  }
  return t;
}
function _c() {
  const o = { win: !1, mac: !1, x11: !1, linux: !1 },
    e = Object.keys(o).find(
      (t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1,
    );
  return e !== void 0 && (o[e] = !0), o;
}
function li(o) {
  return (
    o != null && o !== "" && (typeof o != "object" || Object.keys(o).length > 0)
  );
}
function qf(o) {
  return !li(o);
}
const Vf = () =>
  typeof window < "u" &&
  window.navigator !== null &&
  li(window.navigator.platform) &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1));
function Yf(o) {
  const e = _c();
  return (
    (o = o
      .replace(/shift/gi, "⇧")
      .replace(/backspace/gi, "⌫")
      .replace(/enter/gi, "⏎")
      .replace(/up/gi, "↑")
      .replace(/left/gi, "→")
      .replace(/down/gi, "↓")
      .replace(/right/gi, "←")
      .replace(/escape/gi, "⎋")
      .replace(/insert/gi, "Ins")
      .replace(/delete/gi, "␡")
      .replace(/\+/gi, "+")),
    e.mac
      ? (o = o.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥"))
      : (o = o.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN")),
    o
  );
}
function Kf(o) {
  return o[0].toUpperCase() + o.slice(1);
}
function Xf(o) {
  const e = document.createElement("div");
  (e.style.position = "absolute"),
    (e.style.left = "-999px"),
    (e.style.bottom = "-999px"),
    (e.innerHTML = o),
    document.body.appendChild(e);
  const t = window.getSelection(),
    r = document.createRange();
  if ((r.selectNode(e), t === null))
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(),
    t.addRange(r),
    document.execCommand("copy"),
    document.body.removeChild(e);
}
function Gf(o, e, t) {
  let r;
  return (...n) => {
    const i = this,
      s = () => {
        (r = void 0), t !== !0 && o.apply(i, n);
      },
      a = t === !0 && r !== void 0;
    window.clearTimeout(r), (r = window.setTimeout(s, e)), a && o.apply(i, n);
  };
}
function kt(o) {
  return Object.prototype.toString
    .call(o)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
function Zf(o) {
  return kt(o) === "boolean";
}
function Sc(o) {
  return kt(o) === "function" || kt(o) === "asyncfunction";
}
function Jf(o) {
  return Sc(o) && /^\s*class\s+/.test(o.toString());
}
function Qf(o) {
  return kt(o) === "number";
}
function Vo(o) {
  return kt(o) === "object";
}
function eg(o) {
  return Promise.resolve(o) === o;
}
function tg(o) {
  return kt(o) === "string";
}
function og(o) {
  return kt(o) === "undefined";
}
function xn(o, ...e) {
  if (!e.length) return o;
  const t = e.shift();
  if (Vo(o) && Vo(t))
    for (const r in t)
      Vo(t[r])
        ? (o[r] === void 0 && Object.assign(o, { [r]: {} }), xn(o[r], t[r]))
        : Object.assign(o, { [r]: t[r] });
  return xn(o, ...e);
}
function rg(o, e, t) {
  const r = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  o && console.warn(r);
}
function ng(o) {
  try {
    return new URL(o).href;
  } catch {}
  return o.substring(0, 2) === "//"
    ? window.location.protocol + o
    : window.location.origin + o;
}
function ig(o) {
  return (
    (o > 47 && o < 58) ||
    o === 32 ||
    o === 13 ||
    o === 229 ||
    (o > 64 && o < 91) ||
    (o > 95 && o < 112) ||
    (o > 185 && o < 193) ||
    (o > 218 && o < 223)
  );
}
const sg = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191,
  },
  ag = { LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4 };
let lg = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  add(o) {
    return new Promise((e, t) => {
      this.completed = this.completed.then(o).then(e).catch(t);
    });
  }
};
function cg(o, e, t = void 0) {
  let r,
    n,
    i,
    s = null,
    a = 0;
  t || (t = {});
  const l = function () {
    (a = t.leading === !1 ? 0 : Date.now()),
      (s = null),
      (i = o.apply(r, n)),
      s === null && (r = n = null);
  };
  return function () {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return (
      (r = this),
      (n = arguments),
      d <= 0 || d > e
        ? (s && (clearTimeout(s), (s = null)),
          (a = c),
          (i = o.apply(r, n)),
          s === null && (r = n = null))
        : !s && t.trailing !== !1 && (s = setTimeout(l, d)),
      i
    );
  };
}
const dg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        PromiseQueue: lg,
        beautifyShortcut: Yf,
        cacheable: Wf,
        capitalize: Kf,
        copyTextToClipboard: Xf,
        debounce: Gf,
        deepMerge: xn,
        deprecationAssert: rg,
        getUserOS: _c,
        getValidUrl: ng,
        isBoolean: Zf,
        isClass: Jf,
        isEmpty: qf,
        isFunction: Sc,
        isIosDevice: Vf,
        isNumber: Qf,
        isObject: Vo,
        isPrintableKey: ig,
        isPromise: eg,
        isString: tg,
        isUndefined: og,
        keyCodes: sg,
        mouseButtons: ag,
        notEmpty: li,
        throttle: cg,
        typeOf: kt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ci = ep(dg);
Object.defineProperty(ai, "__esModule", { value: !0 });
ai.containsOnlyInlineElements = pg;
var ug = ci,
  hg = ti;
function pg(o) {
  var e;
  (0, ug.isString)(o)
    ? ((e = document.createElement("div")), (e.innerHTML = o))
    : (e = o);
  var t = function (r) {
    return (
      !(0, hg.blockElements)().includes(r.tagName.toLowerCase()) &&
      Array.from(r.children).every(t)
    );
  };
  return Array.from(e.children).every(t);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.containsOnlyInlineElements = void 0);
  var e = ai;
  Object.defineProperty(o, "containsOnlyInlineElements", {
    enumerable: !0,
    get: function () {
      return e.containsOnlyInlineElements;
    },
  });
})(_r);
var Tc = {},
  di = {},
  Sr = {},
  ui = {};
Object.defineProperty(ui, "__esModule", { value: !0 });
ui.make = fg;
function fg(o, e, t) {
  var r;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var n = document.createElement(o);
  if (Array.isArray(e)) {
    var i = e.filter(function (a) {
      return a !== void 0;
    });
    (r = n.classList).add.apply(r, i);
  } else e !== null && n.classList.add(e);
  for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s]);
  return n;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.make = void 0);
  var e = ui;
  Object.defineProperty(o, "make", {
    enumerable: !0,
    get: function () {
      return e.make;
    },
  });
})(Sr);
Object.defineProperty(di, "__esModule", { value: !0 });
di.fragmentToString = mg;
var gg = Sr;
function mg(o) {
  var e = (0, gg.make)("div");
  return e.appendChild(o), e.innerHTML;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.fragmentToString = void 0);
  var e = di;
  Object.defineProperty(o, "fragmentToString", {
    enumerable: !0,
    get: function () {
      return e.fragmentToString;
    },
  });
})(Tc);
var Oc = {},
  hi = {};
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.getContentLength = bg;
var vg = Nt;
function bg(o) {
  var e, t;
  return (0, vg.isNativeInput)(o)
    ? o.value.length
    : o.nodeType === Node.TEXT_NODE
      ? o.length
      : (t =
            (e = o.textContent) === null || e === void 0
              ? void 0
              : e.length) !== null && t !== void 0
        ? t
        : 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getContentLength = void 0);
  var e = hi;
  Object.defineProperty(o, "getContentLength", {
    enumerable: !0,
    get: function () {
      return e.getContentLength;
    },
  });
})(Oc);
var pi = {},
  fi = {},
  Pa =
    (ko && ko.__spreadArray) ||
    function (o, e, t) {
      if (t || arguments.length === 2)
        for (var r = 0, n = e.length, i; r < n; r++)
          (i || !(r in e)) &&
            (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
      return o.concat(i || Array.prototype.slice.call(e));
    };
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.getDeepestBlockElements = Bc;
var yg = _r;
function Bc(o) {
  return (0, yg.containsOnlyInlineElements)(o)
    ? [o]
    : Array.from(o.children).reduce(function (e, t) {
        return Pa(Pa([], e, !0), Bc(t), !0);
      }, []);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getDeepestBlockElements = void 0);
  var e = fi;
  Object.defineProperty(o, "getDeepestBlockElements", {
    enumerable: !0,
    get: function () {
      return e.getDeepestBlockElements;
    },
  });
})(pi);
var Mc = {},
  gi = {},
  Tr = {},
  mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.isLineBreakTag = kg;
function kg(o) {
  return ["BR", "WBR"].includes(o.tagName);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isLineBreakTag = void 0);
  var e = mi;
  Object.defineProperty(o, "isLineBreakTag", {
    enumerable: !0,
    get: function () {
      return e.isLineBreakTag;
    },
  });
})(Tr);
var Or = {},
  vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.isSingleTag = wg;
function wg(o) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR",
  ].includes(o.tagName);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isSingleTag = void 0);
  var e = vi;
  Object.defineProperty(o, "isSingleTag", {
    enumerable: !0,
    get: function () {
      return e.isSingleTag;
    },
  });
})(Or);
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.getDeepestNode = Ic;
var xg = Nt,
  Cg = Tr,
  Eg = Or;
function Ic(o, e) {
  e === void 0 && (e = !1);
  var t = e ? "lastChild" : "firstChild",
    r = e ? "previousSibling" : "nextSibling";
  if (o.nodeType === Node.ELEMENT_NODE && o[t]) {
    var n = o[t];
    if (
      (0, Eg.isSingleTag)(n) &&
      !(0, xg.isNativeInput)(n) &&
      !(0, Cg.isLineBreakTag)(n)
    )
      if (n[r]) n = n[r];
      else if (n.parentNode !== null && n.parentNode[r]) n = n.parentNode[r];
      else return n.parentNode;
    return Ic(n, e);
  }
  return o;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getDeepestNode = void 0);
  var e = gi;
  Object.defineProperty(o, "getDeepestNode", {
    enumerable: !0,
    get: function () {
      return e.getDeepestNode;
    },
  });
})(Mc);
var Lc = {},
  bi = {},
  Ao =
    (ko && ko.__spreadArray) ||
    function (o, e, t) {
      if (t || arguments.length === 2)
        for (var r = 0, n = e.length, i; r < n; r++)
          (i || !(r in e)) &&
            (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
      return o.concat(i || Array.prototype.slice.call(e));
    };
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.findAllInputs = Bg;
var _g = _r,
  Sg = pi,
  Tg = Zn,
  Og = Nt;
function Bg(o) {
  return Array.from(o.querySelectorAll((0, Tg.allInputsSelector)())).reduce(
    function (e, t) {
      return (0, Og.isNativeInput)(t) || (0, _g.containsOnlyInlineElements)(t)
        ? Ao(Ao([], e, !0), [t], !1)
        : Ao(Ao([], e, !0), (0, Sg.getDeepestBlockElements)(t), !0);
    },
    [],
  );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.findAllInputs = void 0);
  var e = bi;
  Object.defineProperty(o, "findAllInputs", {
    enumerable: !0,
    get: function () {
      return e.findAllInputs;
    },
  });
})(Lc);
var Pc = {},
  yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.isCollapsedWhitespaces = Mg;
function Mg(o) {
  return !/[^\t\n\r ]/.test(o);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isCollapsedWhitespaces = void 0);
  var e = yi;
  Object.defineProperty(o, "isCollapsedWhitespaces", {
    enumerable: !0,
    get: function () {
      return e.isCollapsedWhitespaces;
    },
  });
})(Pc);
var ki = {},
  wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.isElement = Lg;
var Ig = ci;
function Lg(o) {
  return (0, Ig.isNumber)(o)
    ? !1
    : !!o && !!o.nodeType && o.nodeType === Node.ELEMENT_NODE;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isElement = void 0);
  var e = wi;
  Object.defineProperty(o, "isElement", {
    enumerable: !0,
    get: function () {
      return e.isElement;
    },
  });
})(ki);
var Nc = {},
  xi = {},
  Ci = {},
  Ei = {};
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.isLeaf = Pg;
function Pg(o) {
  return o === null ? !1 : o.childNodes.length === 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isLeaf = void 0);
  var e = Ei;
  Object.defineProperty(o, "isLeaf", {
    enumerable: !0,
    get: function () {
      return e.isLeaf;
    },
  });
})(Ci);
var _i = {},
  Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.isNodeEmpty = Dg;
var Ng = Tr,
  Ag = ki,
  jg = Nt,
  Rg = Or;
function Dg(o, e) {
  var t = "";
  return (0, Rg.isSingleTag)(o) && !(0, Ng.isLineBreakTag)(o)
    ? !1
    : ((0, Ag.isElement)(o) && (0, jg.isNativeInput)(o)
        ? (t = o.value)
        : o.textContent !== null && (t = o.textContent.replace("​", "")),
      e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")),
      t.trim().length === 0);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isNodeEmpty = void 0);
  var e = Si;
  Object.defineProperty(o, "isNodeEmpty", {
    enumerable: !0,
    get: function () {
      return e.isNodeEmpty;
    },
  });
})(_i);
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.isEmpty = Fg;
var $g = Ci,
  Hg = _i;
function Fg(o, e) {
  o.normalize();
  for (var t = [o]; t.length > 0; ) {
    var r = t.shift();
    if (r) {
      if (((o = r), (0, $g.isLeaf)(o) && !(0, Hg.isNodeEmpty)(o, e))) return !1;
      t.push.apply(t, Array.from(o.childNodes));
    }
  }
  return !0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isEmpty = void 0);
  var e = xi;
  Object.defineProperty(o, "isEmpty", {
    enumerable: !0,
    get: function () {
      return e.isEmpty;
    },
  });
})(Nc);
var Ac = {},
  Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.isFragment = zg;
var Ug = ci;
function zg(o) {
  return (0, Ug.isNumber)(o)
    ? !1
    : !!o && !!o.nodeType && o.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isFragment = void 0);
  var e = Ti;
  Object.defineProperty(o, "isFragment", {
    enumerable: !0,
    get: function () {
      return e.isFragment;
    },
  });
})(Ac);
var jc = {},
  Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.isHTMLString = qg;
var Wg = Sr;
function qg(o) {
  var e = (0, Wg.make)("div");
  return (e.innerHTML = o), e.childElementCount > 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isHTMLString = void 0);
  var e = Oi;
  Object.defineProperty(o, "isHTMLString", {
    enumerable: !0,
    get: function () {
      return e.isHTMLString;
    },
  });
})(jc);
var Rc = {},
  Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.offset = Vg;
function Vg(o) {
  var e = o.getBoundingClientRect(),
    t = window.pageXOffset || document.documentElement.scrollLeft,
    r = window.pageYOffset || document.documentElement.scrollTop,
    n = e.top + r,
    i = e.left + t;
  return { top: n, left: i, bottom: n + e.height, right: i + e.width };
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.offset = void 0);
  var e = Bi;
  Object.defineProperty(o, "offset", {
    enumerable: !0,
    get: function () {
      return e.offset;
    },
  });
})(Rc);
var Dc = {},
  Mi = {};
Object.defineProperty(Mi, "__esModule", { value: !0 });
Mi.prepend = Yg;
function Yg(o, e) {
  Array.isArray(e)
    ? ((e = e.reverse()),
      e.forEach(function (t) {
        return o.prepend(t);
      }))
    : o.prepend(e);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.prepend = void 0);
  var e = Mi;
  Object.defineProperty(o, "prepend", {
    enumerable: !0,
    get: function () {
      return e.prepend;
    },
  });
})(Dc);
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.prepend =
      o.offset =
      o.make =
      o.isLineBreakTag =
      o.isSingleTag =
      o.isNodeEmpty =
      o.isLeaf =
      o.isHTMLString =
      o.isFragment =
      o.isEmpty =
      o.isElement =
      o.isContentEditable =
      o.isCollapsedWhitespaces =
      o.findAllInputs =
      o.isNativeInput =
      o.allInputsSelector =
      o.getDeepestNode =
      o.getDeepestBlockElements =
      o.getContentLength =
      o.fragmentToString =
      o.containsOnlyInlineElements =
      o.canSetCaret =
      o.calculateBaseline =
      o.blockElements =
      o.append =
        void 0);
  var e = Zn;
  Object.defineProperty(o, "allInputsSelector", {
    enumerable: !0,
    get: function () {
      return e.allInputsSelector;
    },
  });
  var t = Nt;
  Object.defineProperty(o, "isNativeInput", {
    enumerable: !0,
    get: function () {
      return t.isNativeInput;
    },
  });
  var r = xc;
  Object.defineProperty(o, "append", {
    enumerable: !0,
    get: function () {
      return r.append;
    },
  });
  var n = ti;
  Object.defineProperty(o, "blockElements", {
    enumerable: !0,
    get: function () {
      return n.blockElements;
    },
  });
  var i = Cc;
  Object.defineProperty(o, "calculateBaseline", {
    enumerable: !0,
    get: function () {
      return i.calculateBaseline;
    },
  });
  var s = Ec;
  Object.defineProperty(o, "canSetCaret", {
    enumerable: !0,
    get: function () {
      return s.canSetCaret;
    },
  });
  var a = _r;
  Object.defineProperty(o, "containsOnlyInlineElements", {
    enumerable: !0,
    get: function () {
      return a.containsOnlyInlineElements;
    },
  });
  var l = Tc;
  Object.defineProperty(o, "fragmentToString", {
    enumerable: !0,
    get: function () {
      return l.fragmentToString;
    },
  });
  var c = Oc;
  Object.defineProperty(o, "getContentLength", {
    enumerable: !0,
    get: function () {
      return c.getContentLength;
    },
  });
  var d = pi;
  Object.defineProperty(o, "getDeepestBlockElements", {
    enumerable: !0,
    get: function () {
      return d.getDeepestBlockElements;
    },
  });
  var h = Mc;
  Object.defineProperty(o, "getDeepestNode", {
    enumerable: !0,
    get: function () {
      return h.getDeepestNode;
    },
  });
  var u = Lc;
  Object.defineProperty(o, "findAllInputs", {
    enumerable: !0,
    get: function () {
      return u.findAllInputs;
    },
  });
  var p = Pc;
  Object.defineProperty(o, "isCollapsedWhitespaces", {
    enumerable: !0,
    get: function () {
      return p.isCollapsedWhitespaces;
    },
  });
  var g = ii;
  Object.defineProperty(o, "isContentEditable", {
    enumerable: !0,
    get: function () {
      return g.isContentEditable;
    },
  });
  var f = ki;
  Object.defineProperty(o, "isElement", {
    enumerable: !0,
    get: function () {
      return f.isElement;
    },
  });
  var m = Nc;
  Object.defineProperty(o, "isEmpty", {
    enumerable: !0,
    get: function () {
      return m.isEmpty;
    },
  });
  var k = Ac;
  Object.defineProperty(o, "isFragment", {
    enumerable: !0,
    get: function () {
      return k.isFragment;
    },
  });
  var v = jc;
  Object.defineProperty(o, "isHTMLString", {
    enumerable: !0,
    get: function () {
      return v.isHTMLString;
    },
  });
  var w = Ci;
  Object.defineProperty(o, "isLeaf", {
    enumerable: !0,
    get: function () {
      return w.isLeaf;
    },
  });
  var b = _i;
  Object.defineProperty(o, "isNodeEmpty", {
    enumerable: !0,
    get: function () {
      return b.isNodeEmpty;
    },
  });
  var y = Tr;
  Object.defineProperty(o, "isLineBreakTag", {
    enumerable: !0,
    get: function () {
      return y.isLineBreakTag;
    },
  });
  var _ = Or;
  Object.defineProperty(o, "isSingleTag", {
    enumerable: !0,
    get: function () {
      return _.isSingleTag;
    },
  });
  var B = Sr;
  Object.defineProperty(o, "make", {
    enumerable: !0,
    get: function () {
      return B.make;
    },
  });
  var C = Rc;
  Object.defineProperty(o, "offset", {
    enumerable: !0,
    get: function () {
      return C.offset;
    },
  });
  var x = Dc;
  Object.defineProperty(o, "prepend", {
    enumerable: !0,
    get: function () {
      return x.prepend;
    },
  });
})(Pt);
var Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.getContenteditableSlice = Xg;
var Kg = Pt;
function Xg(o, e, t, r, n) {
  var i;
  n === void 0 && (n = !1);
  var s = document.createRange();
  if (
    (r === "left"
      ? (s.setStart(o, 0), s.setEnd(e, t))
      : (s.setStart(e, t), s.setEnd(o, o.childNodes.length)),
    n === !0)
  ) {
    var a = s.extractContents();
    return (0, Kg.fragmentToString)(a);
  }
  var l = s.cloneContents(),
    c = document.createElement("div");
  c.appendChild(l);
  var d = (i = c.textContent) !== null && i !== void 0 ? i : "";
  return d;
}
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.checkContenteditableSliceForEmptiness = Jg;
var Gg = Pt,
  Zg = Br;
function Jg(o, e, t, r) {
  var n = (0, Zg.getContenteditableSlice)(o, e, t, r);
  return (0, Gg.isCollapsedWhitespaces)(n);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.checkContenteditableSliceForEmptiness = void 0);
  var e = Er;
  Object.defineProperty(o, "checkContenteditableSliceForEmptiness", {
    enumerable: !0,
    get: function () {
      return e.checkContenteditableSliceForEmptiness;
    },
  });
})(Gn);
var $c = {};
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getContenteditableSlice = void 0);
  var e = Br;
  Object.defineProperty(o, "getContenteditableSlice", {
    enumerable: !0,
    get: function () {
      return e.getContenteditableSlice;
    },
  });
})($c);
var Hc = {},
  Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.focus = em;
var Qg = Pt;
function em(o, e) {
  var t, r;
  if ((e === void 0 && (e = !0), (0, Qg.isNativeInput)(o))) {
    o.focus();
    var n = e ? 0 : o.value.length;
    o.setSelectionRange(n, n);
  } else {
    var i = document.createRange(),
      s = window.getSelection();
    if (!s) return;
    var a = function (u) {
        var p = document.createTextNode("");
        u.appendChild(p), i.setStart(p, 0), i.setEnd(p, 0);
      },
      l = function (u) {
        return u != null;
      },
      c = o.childNodes,
      d = e ? c[0] : c[c.length - 1];
    if (l(d)) {
      for (; l(d) && d.nodeType !== Node.TEXT_NODE; )
        d = e ? d.firstChild : d.lastChild;
      if (l(d) && d.nodeType === Node.TEXT_NODE) {
        var h =
            (r =
              (t = d.textContent) === null || t === void 0
                ? void 0
                : t.length) !== null && r !== void 0
              ? r
              : 0,
          n = e ? 0 : h;
        i.setStart(d, n), i.setEnd(d, n);
      } else a(o);
    } else a(o);
    s.removeAllRanges(), s.addRange(i);
  }
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.focus = void 0);
  var e = Ii;
  Object.defineProperty(o, "focus", {
    enumerable: !0,
    get: function () {
      return e.focus;
    },
  });
})(Hc);
var Li = {},
  Mr = {};
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.getCaretNodeAndOffset = tm;
function tm() {
  var o = window.getSelection();
  if (o === null) return [null, 0];
  var e = o.focusNode,
    t = o.focusOffset;
  return e === null
    ? [null, 0]
    : (e.nodeType !== Node.TEXT_NODE &&
        e.childNodes.length > 0 &&
        (e.childNodes[t] !== void 0
          ? ((e = e.childNodes[t]), (t = 0))
          : ((e = e.childNodes[t - 1]),
            e.textContent !== null && (t = e.textContent.length))),
      [e, t]);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getCaretNodeAndOffset = void 0);
  var e = Mr;
  Object.defineProperty(o, "getCaretNodeAndOffset", {
    enumerable: !0,
    get: function () {
      return e.getCaretNodeAndOffset;
    },
  });
})(Li);
var Fc = {},
  Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.getRange = om;
function om() {
  var o = window.getSelection();
  return o && o.rangeCount ? o.getRangeAt(0) : null;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.getRange = void 0);
  var e = Ir;
  Object.defineProperty(o, "getRange", {
    enumerable: !0,
    get: function () {
      return e.getRange;
    },
  });
})(Fc);
var Uc = {},
  Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.isCaretAtEndOfInput = im;
var Na = Pt,
  rm = Li,
  nm = Gn;
function im(o) {
  var e = (0, Na.getDeepestNode)(o, !0);
  if (e === null) return !0;
  if ((0, Na.isNativeInput)(e)) return e.selectionEnd === e.value.length;
  var t = (0, rm.getCaretNodeAndOffset)(),
    r = t[0],
    n = t[1];
  return r === null
    ? !1
    : (0, nm.checkContenteditableSliceForEmptiness)(o, r, n, "right");
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isCaretAtEndOfInput = void 0);
  var e = Pi;
  Object.defineProperty(o, "isCaretAtEndOfInput", {
    enumerable: !0,
    get: function () {
      return e.isCaretAtEndOfInput;
    },
  });
})(Uc);
var zc = {},
  Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.isCaretAtStartOfInput = lm;
var jo = Pt,
  sm = Mr,
  am = Er;
function lm(o) {
  var e = (0, jo.getDeepestNode)(o);
  if (e === null || (0, jo.isEmpty)(o)) return !0;
  if ((0, jo.isNativeInput)(e)) return e.selectionEnd === 0;
  if ((0, jo.isEmpty)(o)) return !0;
  var t = (0, sm.getCaretNodeAndOffset)(),
    r = t[0],
    n = t[1];
  return r === null
    ? !1
    : (0, am.checkContenteditableSliceForEmptiness)(o, r, n, "left");
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isCaretAtStartOfInput = void 0);
  var e = Ni;
  Object.defineProperty(o, "isCaretAtStartOfInput", {
    enumerable: !0,
    get: function () {
      return e.isCaretAtStartOfInput;
    },
  });
})(zc);
var Wc = {},
  Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.save = um;
var cm = Pt,
  dm = Ir;
function um() {
  var o = (0, dm.getRange)(),
    e = (0, cm.make)("span");
  if (((e.id = "cursor"), (e.hidden = !0), !!o))
    return (
      o.insertNode(e),
      function () {
        var t = window.getSelection();
        t &&
          (o.setStartAfter(e),
          o.setEndAfter(e),
          t.removeAllRanges(),
          t.addRange(o),
          setTimeout(function () {
            e.remove();
          }, 150));
      }
    );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.save = void 0);
  var e = Ai;
  Object.defineProperty(o, "save", {
    enumerable: !0,
    get: function () {
      return e.save;
    },
  });
})(Wc);
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.save =
      o.isCaretAtStartOfInput =
      o.isCaretAtEndOfInput =
      o.getRange =
      o.getCaretNodeAndOffset =
      o.focus =
      o.getContenteditableSlice =
      o.checkContenteditableSliceForEmptiness =
        void 0);
  var e = Gn;
  Object.defineProperty(o, "checkContenteditableSliceForEmptiness", {
    enumerable: !0,
    get: function () {
      return e.checkContenteditableSliceForEmptiness;
    },
  });
  var t = $c;
  Object.defineProperty(o, "getContenteditableSlice", {
    enumerable: !0,
    get: function () {
      return t.getContenteditableSlice;
    },
  });
  var r = Hc;
  Object.defineProperty(o, "focus", {
    enumerable: !0,
    get: function () {
      return r.focus;
    },
  });
  var n = Li;
  Object.defineProperty(o, "getCaretNodeAndOffset", {
    enumerable: !0,
    get: function () {
      return n.getCaretNodeAndOffset;
    },
  });
  var i = Fc;
  Object.defineProperty(o, "getRange", {
    enumerable: !0,
    get: function () {
      return i.getRange;
    },
  });
  var s = Uc;
  Object.defineProperty(o, "isCaretAtEndOfInput", {
    enumerable: !0,
    get: function () {
      return s.isCaretAtEndOfInput;
    },
  });
  var a = zc;
  Object.defineProperty(o, "isCaretAtStartOfInput", {
    enumerable: !0,
    get: function () {
      return a.isCaretAtStartOfInput;
    },
  });
  var l = Wc;
  Object.defineProperty(o, "save", {
    enumerable: !0,
    get: function () {
      return l.save;
    },
  });
})(wc);
class hm extends H {
  keydown(e) {
    switch ((this.beforeKeydownProcessing(e), e.keyCode)) {
      case j.BACKSPACE:
        this.backspace(e);
        break;
      case j.DELETE:
        this.delete(e);
        break;
      case j.ENTER:
        this.enter(e);
        break;
      case j.DOWN:
      case j.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case j.UP:
      case j.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case j.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e),
      e.code === "Slash" &&
        (e.ctrlKey || e.metaKey) &&
        (e.preventDefault(), this.commandSlashPressed());
  }
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) &&
      Ul(e.keyCode) &&
      (this.Editor.Toolbar.close(),
      e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        e.shiftKey ||
        this.Editor.BlockSelection.clearSelection(e));
  }
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: r, Caret: n } = this.Editor;
    t.anyBlockSelected &&
      t.copySelectedBlocks(e).then(() => {
        const i = r.removeSelectedBlocks(),
          s = r.insertDefaultBlockAtIndex(i, !0);
        n.setToBlock(s, n.positions.START), t.clearSelection(e);
      });
  }
  tabPressed(e) {
    const { InlineToolbar: t, Caret: r } = this.Editor;
    t.opened ||
      ((e.shiftKey ? r.navigatePrevious(!0) : r.navigateNext(!0)) &&
        e.preventDefault());
  }
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 ||
      this.activateBlockSettings();
  }
  slashPressed(e) {
    this.Editor.BlockManager.currentBlock.isEmpty &&
      (e.preventDefault(),
      this.Editor.Caret.insertContentAtCaretPosition("/"),
      this.activateToolbox());
  }
  enter(e) {
    const { BlockManager: t, UI: r } = this.Editor,
      n = t.currentBlock;
    if (
      n === void 0 ||
      n.tool.isLineBreaksEnabled ||
      (r.someToolbarOpened && r.someFlipperButtonFocused) ||
      (e.shiftKey && !vn)
    )
      return;
    let i = n;
    n.currentInput !== void 0 && Wo(n.currentInput) && !n.hasMedia
      ? this.Editor.BlockManager.insertDefaultBlockAtIndex(
          this.Editor.BlockManager.currentBlockIndex,
        )
      : n.currentInput && qo(n.currentInput)
        ? (i = this.Editor.BlockManager.insertDefaultBlockAtIndex(
            this.Editor.BlockManager.currentBlockIndex + 1,
          ))
        : (i = this.Editor.BlockManager.split()),
      this.Editor.Caret.setToBlock(i),
      this.Editor.Toolbar.moveAndOpen(i),
      e.preventDefault();
  }
  backspace(e) {
    const { BlockManager: t, Caret: r } = this.Editor,
      { currentBlock: n, previousBlock: i } = t;
    if (
      !(
        n === void 0 ||
        !A.isCollapsed ||
        !n.currentInput ||
        !Wo(n.currentInput)
      )
    ) {
      if (
        (e.preventDefault(),
        this.Editor.Toolbar.close(),
        n.currentInput !== n.firstInput)
      ) {
        r.navigatePrevious();
        return;
      }
      if (i !== null) {
        if (i.isEmpty) {
          t.removeBlock(i);
          return;
        }
        if (n.isEmpty) {
          t.removeBlock(n);
          const s = t.currentBlock;
          r.setToBlock(s, r.positions.END);
          return;
        }
        Oa(i, n) ? this.mergeBlocks(i, n) : r.setToBlock(i, r.positions.END);
      }
    }
  }
  delete(e) {
    const { BlockManager: t, Caret: r } = this.Editor,
      { currentBlock: n, nextBlock: i } = t;
    if (!(!A.isCollapsed || !qo(n.currentInput))) {
      if (
        (e.preventDefault(),
        this.Editor.Toolbar.close(),
        n.currentInput !== n.lastInput)
      ) {
        r.navigateNext();
        return;
      }
      if (i !== null) {
        if (i.isEmpty) {
          t.removeBlock(i);
          return;
        }
        if (n.isEmpty) {
          t.removeBlock(n), r.setToBlock(i, r.positions.START);
          return;
        }
        Oa(n, i) ? this.mergeBlocks(n, i) : r.setToBlock(i, r.positions.START);
      }
    }
  }
  mergeBlocks(e, t) {
    const { BlockManager: r, Toolbar: n } = this.Editor;
    e.lastInput !== void 0 &&
      (wc.focus(e.lastInput, !1),
      r.mergeBlocks(e, t).then(() => {
        n.close();
      }));
  }
  arrowRightAndDown(e) {
    const t =
      pr.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === j.TAB);
    if (this.Editor.UI.someToolbarOpened && t) return;
    this.Editor.Toolbar.close();
    const { currentBlock: r } = this.Editor.BlockManager,
      n =
        (r?.currentInput !== void 0 ? qo(r.currentInput) : void 0) ||
        this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === j.DOWN && n) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (
      e.keyCode === j.DOWN || (e.keyCode === j.RIGHT && !this.isRtl)
        ? this.Editor.Caret.navigateNext()
        : this.Editor.Caret.navigatePrevious()
    ) {
      e.preventDefault();
      return;
    }
    lr(() => {
      this.Editor.BlockManager.currentBlock &&
        this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(),
      this.Editor.BlockSelection.clearSelection(e);
  }
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (
        pr.usedKeys.includes(e.keyCode) &&
        (!e.shiftKey || e.keyCode === j.TAB)
      )
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const { currentBlock: t } = this.Editor.BlockManager,
      r =
        (t?.currentInput !== void 0 ? Wo(t.currentInput) : void 0) ||
        this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === j.UP && r) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (
      e.keyCode === j.UP || (e.keyCode === j.LEFT && !this.isRtl)
        ? this.Editor.Caret.navigatePrevious()
        : this.Editor.Caret.navigateNext()
    ) {
      e.preventDefault();
      return;
    }
    lr(() => {
      this.Editor.BlockManager.currentBlock &&
        this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(),
      this.Editor.BlockSelection.clearSelection(e);
  }
  needToolbarClosing(e) {
    const t = e.keyCode === j.ENTER && this.Editor.Toolbar.toolbox.opened,
      r = e.keyCode === j.ENTER && this.Editor.BlockSettings.opened,
      n = e.keyCode === j.ENTER && this.Editor.InlineToolbar.opened,
      i = e.keyCode === j.TAB;
    return !(e.shiftKey || i || t || r || n);
  }
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(),
      this.Editor.Toolbar.toolbox.open();
  }
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(),
      this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
let en = class {
  constructor(e) {
    (this.blocks = []), (this.workingArea = e);
  }
  get length() {
    return this.blocks.length;
  }
  get array() {
    return this.blocks;
  }
  get nodes() {
    return zl(this.workingArea.children);
  }
  static set(e, t, r) {
    return isNaN(Number(t))
      ? (Reflect.set(e, t, r), !0)
      : (e.insert(+t, r), !0);
  }
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  swap(e, t) {
    const r = this.blocks[t];
    E.swap(this.blocks[e].holder, r.holder),
      (this.blocks[t] = this.blocks[e]),
      (this.blocks[e] = r);
  }
  move(e, t) {
    const r = this.blocks.splice(t, 1)[0],
      n = e - 1,
      i = Math.max(0, n),
      s = this.blocks[i];
    e > 0
      ? this.insertToDOM(r, "afterend", s)
      : this.insertToDOM(r, "beforebegin", s),
      this.blocks.splice(e, 0, r);
    const a = this.composeBlockEvent("move", { fromIndex: t, toIndex: e });
    r.call(ot.MOVED, a);
  }
  insert(e, t, r = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length),
      r && (this.blocks[e].holder.remove(), this.blocks[e].call(ot.REMOVED));
    const n = r ? 1 : 0;
    if ((this.blocks.splice(e, n, t), e > 0)) {
      const i = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", i);
    } else {
      const i = this.blocks[e + 1];
      i ? this.insertToDOM(t, "beforebegin", i) : this.insertToDOM(t);
    }
  }
  replace(e, t) {
    if (this.blocks[e] === void 0) throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), (this.blocks[e] = t);
  }
  insertMany(e, t) {
    const r = new DocumentFragment();
    for (const n of e) r.appendChild(n.holder);
    if (this.length > 0) {
      if (t > 0) {
        const n = Math.min(t - 1, this.length - 1);
        this.blocks[n].holder.after(r);
      } else t === 0 && this.workingArea.prepend(r);
      this.blocks.splice(t, 0, ...e);
    } else this.blocks.push(...e), this.workingArea.appendChild(r);
    e.forEach((n) => n.call(ot.RENDERED));
  }
  remove(e) {
    isNaN(e) && (e = this.length - 1),
      this.blocks[e].holder.remove(),
      this.blocks[e].call(ot.REMOVED),
      this.blocks.splice(e, 1);
  }
  removeAll() {
    (this.workingArea.innerHTML = ""),
      this.blocks.forEach((e) => e.call(ot.REMOVED)),
      (this.blocks.length = 0);
  }
  insertAfter(e, t) {
    const r = this.blocks.indexOf(e);
    this.insert(r + 1, t);
  }
  get(e) {
    return this.blocks[e];
  }
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  insertToDOM(e, t, r) {
    t
      ? r.holder.insertAdjacentElement(t, e.holder)
      : this.workingArea.appendChild(e.holder),
      e.call(ot.RENDERED);
  }
  composeBlockEvent(e, t) {
    return new CustomEvent(e, { detail: t });
  }
};
const Aa = "block-removed",
  ja = "block-added",
  pm = "block-moved",
  Ra = "block-changed";
class fm {
  constructor() {
    this.completed = Promise.resolve();
  }
  add(e) {
    return new Promise((t, r) => {
      this.completed = this.completed.then(e).then(t).catch(r);
    });
  }
}
class gm extends H {
  constructor() {
    super(...arguments), (this._currentBlockIndex = -1), (this._blocks = null);
  }
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  get firstBlock() {
    return this._blocks[0];
  }
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1
      ? null
      : this._blocks[this.currentBlockIndex + 1];
  }
  get nextContentfulBlock() {
    return this.blocks
      .slice(this.currentBlockIndex + 1)
      .find((e) => !!e.inputs.length);
  }
  get previousContentfulBlock() {
    return this.blocks
      .slice(0, this.currentBlockIndex)
      .reverse()
      .find((e) => !!e.inputs.length);
  }
  get previousBlock() {
    return this.currentBlockIndex === 0
      ? null
      : this._blocks[this.currentBlockIndex - 1];
  }
  get blocks() {
    return this._blocks.array;
  }
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  prepare() {
    const e = new en(this.Editor.UI.nodes.redactor);
    (this._blocks = new Proxy(e, { set: en.set, get: en.get })),
      this.listeners.on(document, "copy", (t) =>
        this.Editor.BlockEvents.handleCommandC(t),
      );
  }
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  composeBlock({ tool: e, data: t = {}, id: r = void 0, tunes: n = {} }) {
    const i = this.Editor.ReadOnly.isEnabled,
      s = this.Editor.Tools.blockTools.get(e),
      a = new rt(
        {
          id: r,
          data: t,
          tool: s,
          api: this.Editor.API,
          readOnly: i,
          tunesData: n,
        },
        this.eventsDispatcher,
      );
    return (
      i ||
        window.requestIdleCallback(
          () => {
            this.bindBlockEvents(a);
          },
          { timeout: 2e3 },
        ),
      a
    );
  }
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: r = {},
    index: n,
    needToFocus: i = !0,
    replace: s = !1,
    tunes: a = {},
  } = {}) {
    let l = n;
    l === void 0 && (l = this.currentBlockIndex + (s ? 0 : 1));
    const c = this.composeBlock({ id: e, tool: t, data: r, tunes: a });
    return (
      s && this.blockDidMutated(Aa, this.getBlockByIndex(l), { index: l }),
      this._blocks.insert(l, c, s),
      this.blockDidMutated(ja, c, { index: l }),
      i
        ? (this.currentBlockIndex = l)
        : l <= this.currentBlockIndex && this.currentBlockIndex++,
      c
    );
  }
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  async update(e, t, r) {
    if (!t && !r) return e;
    const n = await e.data,
      i = this.composeBlock({
        id: e.id,
        tool: e.name,
        data: Object.assign({}, n, t ?? {}),
        tunes: r ?? e.tunes,
      }),
      s = this.getBlockIndex(e);
    return (
      this._blocks.replace(s, i), this.blockDidMutated(Ra, i, { index: s }), i
    );
  }
  replace(e, t, r) {
    const n = this.getBlockIndex(e);
    return this.insert({ tool: t, data: r, index: n, replace: !0 });
  }
  paste(e, t, r = !1) {
    const n = this.insert({ tool: e, replace: r });
    try {
      window.requestIdleCallback(() => {
        n.call(ot.ON_PASTE, t);
      });
    } catch (i) {
      z(`${e}: onPaste callback call is failed`, "error", i);
    }
    return n;
  }
  insertDefaultBlockAtIndex(e, t = !1) {
    const r = this.composeBlock({ tool: this.config.defaultBlock });
    return (
      (this._blocks[e] = r),
      this.blockDidMutated(ja, r, { index: e }),
      t
        ? (this.currentBlockIndex = e)
        : e <= this.currentBlockIndex && this.currentBlockIndex++,
      r
    );
  }
  insertAtEnd() {
    return (this.currentBlockIndex = this.blocks.length - 1), this.insert();
  }
  async mergeBlocks(e, t) {
    let r;
    if (e.name === t.name && e.mergeable) {
      const n = await t.data;
      if (Pe(n)) {
        console.error(
          "Could not merge Block. Failed to extract original Block data.",
        );
        return;
      }
      const [i] = zn([n], e.tool.sanitizeConfig);
      r = i;
    } else if (e.mergeable && dr(t, "export") && dr(e, "import")) {
      const n = await t.exportDataAsString(),
        i = ze(n, e.tool.sanitizeConfig);
      r = Ba(i, e.tool.conversionConfig);
    }
    r !== void 0 &&
      (await e.mergeWith(r),
      this.removeBlock(t),
      (this.currentBlockIndex = this._blocks.indexOf(e)));
  }
  removeBlock(e, t = !0) {
    return new Promise((r) => {
      const n = this._blocks.indexOf(e);
      if (!this.validateIndex(n))
        throw new Error("Can't find a Block to remove");
      e.destroy(),
        this._blocks.remove(n),
        this.blockDidMutated(Aa, e, { index: n }),
        this.currentBlockIndex >= n && this.currentBlockIndex--,
        this.blocks.length
          ? n === 0 && (this.currentBlockIndex = 0)
          : (this.unsetCurrentBlock(), t && this.insert()),
        r();
    });
  }
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), (e = t));
    return e;
  }
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--) this._blocks.remove(e);
    this.unsetCurrentBlock(),
      this.insert(),
      this.currentBlock.firstInput.focus();
  }
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(),
      t = E.make("div");
    t.appendChild(e);
    const r = { text: E.isEmpty(t) ? "" : t.innerHTML };
    return this.insert({ data: r });
  }
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  getBlock(e) {
    E.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes,
      r = e.closest(`.${rt.CSS.wrapper}`),
      n = t.indexOf(r);
    if (n >= 0) return this._blocks[n];
  }
  setCurrentBlockByChildNode(e) {
    E.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${rt.CSS.wrapper}`);
    if (!t) return;
    const r = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (r != null && r.isEqualNode(this.Editor.UI.nodes.wrapper))
      return (
        (this.currentBlockIndex = this._blocks.nodes.indexOf(t)),
        this.currentBlock.updateCurrentInput(),
        this.currentBlock
      );
  }
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node)) return;
    E.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${rt.CSS.wrapper}`);
    return this.blocks.find((r) => r.holder === t);
  }
  swap(e, t) {
    this._blocks.swap(e, t), (this.currentBlockIndex = t);
  }
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      z("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      z(
        "Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.",
        "warn",
      );
      return;
    }
    this._blocks.move(e, t),
      (this.currentBlockIndex = e),
      this.blockDidMutated(pm, this.currentBlock, { fromIndex: t, toIndex: e });
  }
  async convert(e, t, r) {
    if (!(await e.save()))
      throw new Error(
        "Could not convert Block. Failed to extract original Block data.",
      );
    const n = this.Editor.Tools.blockTools.get(t);
    if (!n) throw new Error(`Could not convert Block. Tool «${t}» not found.`);
    const i = await e.exportDataAsString(),
      s = ze(i, n.sanitizeConfig);
    let a = Ba(s, n.conversionConfig, n.settings);
    return r && (a = Object.assign(a, r)), this.replace(e, n.name, a);
  }
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  async clear(e = !1) {
    const t = new fm();
    this.blocks.forEach((r) => {
      t.add(async () => {
        await this.removeBlock(r, !1);
      });
    }),
      await t.completed,
      this.unsetCurrentBlock(),
      e && this.insert(),
      this.Editor.UI.checkEmptiness();
  }
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (r) => {
      t.keydown(r);
    }),
      this.readOnlyMutableListeners.on(e.holder, "keyup", (r) => {
        t.keyup(r);
      }),
      this.readOnlyMutableListeners.on(e.holder, "dragover", (r) => {
        t.dragOver(r);
      }),
      this.readOnlyMutableListeners.on(e.holder, "dragleave", (r) => {
        t.dragLeave(r);
      }),
      e.on("didMutated", (r) =>
        this.blockDidMutated(Ra, r, { index: this.getBlockIndex(r) }),
      );
  }
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(document, "cut", (e) =>
      this.Editor.BlockEvents.handleCommandX(e),
    ),
      this.blocks.forEach((e) => {
        this.bindBlockEvents(e);
      });
  }
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  blockDidMutated(e, t, r) {
    const n = new CustomEvent(e, { detail: { target: new et(t), ...r } });
    return this.eventsDispatcher.emit(Gl, { event: n }), t;
  }
}
class mm extends H {
  constructor() {
    super(...arguments),
      (this.anyBlockSelectedCache = null),
      (this.needToSelectAll = !1),
      (this.nativeInputSelected = !1),
      (this.readyToBlockSelection = !1);
  }
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: { src: !0, width: !0, height: !0 },
      a: { href: !0 },
      b: {},
      i: {},
      u: {},
    };
  }
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((r) => {
      r.selected = e;
    }),
      this.clearCache();
  }
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return (
      this.anyBlockSelectedCache === null &&
        (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)),
      this.anyBlockSelectedCache
    );
  }
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  prepare() {
    (this.selection = new A()),
      Qt.add({
        name: "CMD+A",
        handler: (e) => {
          const { BlockManager: t, ReadOnly: r } = this.Editor;
          if (r.isEnabled) {
            e.preventDefault(), this.selectAllBlocks();
            return;
          }
          t.currentBlock && this.handleCommandA(e);
        },
        on: this.Editor.UI.nodes.redactor,
      });
  }
  toggleReadOnly() {
    A.get().removeAllRanges(), (this.allBlocksSelected = !1);
  }
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let r;
    isNaN(e) ? (r = t.currentBlock) : (r = t.getBlockByIndex(e)),
      (r.selected = !1),
      this.clearCache();
  }
  clearSelection(e, t = !1) {
    const { BlockManager: r, Caret: n, RectangleSelection: i } = this.Editor;
    (this.needToSelectAll = !1),
      (this.nativeInputSelected = !1),
      (this.readyToBlockSelection = !1);
    const s = e && e instanceof KeyboardEvent,
      a = s && Ul(e.keyCode);
    if (this.anyBlockSelected && s && a && !A.isSelectionExists) {
      const l = r.removeSelectedBlocks();
      r.insertDefaultBlockAtIndex(l, !0),
        n.setToBlock(r.currentBlock),
        lr(() => {
          const c = e.key;
          n.insertContentAtCaretPosition(c.length > 1 ? "" : c);
        }, 20)();
    }
    if (
      (this.Editor.CrossBlockSelection.clear(e),
      !this.anyBlockSelected || i.isRectActivated())
    ) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), (this.allBlocksSelected = !1);
  }
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = E.make("div");
    this.selectedBlocks.forEach((i) => {
      const s = ze(i.holder.innerHTML, this.sanitizerConfig),
        a = E.make("p");
      (a.innerHTML = s), t.appendChild(a);
    });
    const r = Array.from(t.childNodes).map((i) => i.textContent).join(`

`),
      n = t.innerHTML;
    return (
      e.clipboardData.setData("text/plain", r),
      e.clipboardData.setData("text/html", n),
      Promise.all(this.selectedBlocks.map((i) => i.save())).then((i) => {
        try {
          e.clipboardData.setData(
            this.Editor.Paste.MIME_TYPE,
            JSON.stringify(i),
          );
        } catch {}
      })
    );
  }
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor,
      r = t.getBlockByIndex(e);
    r !== void 0 && this.selectBlock(r);
  }
  selectBlock(e) {
    this.selection.save(),
      A.get().removeAllRanges(),
      (e.selected = !0),
      this.clearCache(),
      this.Editor.InlineToolbar.close();
  }
  unselectBlock(e) {
    (e.selected = !1), this.clearCache();
  }
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  destroy() {
    Qt.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  handleCommandA(e) {
    if (
      (this.Editor.RectangleSelection.clearSelection(),
      E.isNativeInput(e.target) && !this.readyToBlockSelection)
    ) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target),
      r = t.inputs;
    if (r.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (r.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll
      ? (e.preventDefault(),
        this.selectAllBlocks(),
        (this.needToSelectAll = !1),
        (this.readyToBlockSelection = !1))
      : this.readyToBlockSelection &&
        (e.preventDefault(), this.selectBlock(t), (this.needToSelectAll = !0));
  }
  selectAllBlocks() {
    this.selection.save(),
      A.get().removeAllRanges(),
      (this.allBlocksSelected = !0),
      this.Editor.InlineToolbar.close();
  }
}
let vm = class Cn extends H {
  get positions() {
    return { START: "start", END: "end", DEFAULT: "default" };
  }
  static get CSS() {
    return { shadowCaret: "cdx-shadow-caret" };
  }
  setToBlock(e, t = this.positions.DEFAULT, r = 0) {
    var n;
    const { BlockManager: i, BlockSelection: s } = this.Editor;
    if ((s.clearSelection(), !e.focusable)) {
      (n = window.getSelection()) == null || n.removeAllRanges(),
        s.selectBlock(e),
        (i.currentBlock = e);
      return;
    }
    let a;
    switch (t) {
      case this.positions.START:
        a = e.firstInput;
        break;
      case this.positions.END:
        a = e.lastInput;
        break;
      default:
        a = e.currentInput;
    }
    if (!a) return;
    const l = E.getDeepestNode(a, t === this.positions.END),
      c = E.getContentLength(l);
    switch (!0) {
      case t === this.positions.START:
        r = 0;
        break;
      case t === this.positions.END:
      case r > c:
        r = c;
        break;
    }
    this.set(l, r),
      i.setCurrentBlockByChildNode(e.holder),
      (i.currentBlock.currentInput = a);
  }
  setToInput(e, t = this.positions.DEFAULT, r = 0) {
    const { currentBlock: n } = this.Editor.BlockManager,
      i = E.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(i, 0);
        break;
      case this.positions.END:
        this.set(i, E.getContentLength(i));
        break;
      default:
        r && this.set(i, r);
    }
    n.currentInput = e;
  }
  set(e, t = 0) {
    const { top: r, bottom: n } = A.setCursor(e, t),
      { innerHeight: i } = window;
    r < 0
      ? window.scrollBy(0, r - 30)
      : n > i && window.scrollBy(0, n - i + 30);
  }
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty) this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  extractFragmentFromCaretPosition() {
    const e = A.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0),
        r = this.Editor.BlockManager.currentBlock.currentInput;
      if ((t.deleteContents(), r))
        if (E.isNativeInput(r)) {
          const n = r,
            i = document.createDocumentFragment(),
            s = n.value.substring(0, n.selectionStart),
            a = n.value.substring(n.selectionStart);
          return (i.textContent = a), (n.value = s), i;
        } else {
          const n = t.cloneRange();
          return (
            n.selectNodeContents(r),
            n.setStart(t.endContainer, t.endOffset),
            n.extractContents()
          );
        }
    }
  }
  navigateNext(e = !1) {
    const { BlockManager: t } = this.Editor,
      { currentBlock: r, nextBlock: n } = t;
    if (r === void 0) return !1;
    const { nextInput: i, currentInput: s } = r,
      a = s !== void 0 ? qo(s) : void 0;
    let l = n;
    const c = e || a || !r.focusable;
    if (i && c) return this.setToInput(i, this.positions.START), !0;
    if (l === null) {
      if (r.tool.isDefault || !c) return !1;
      l = t.insertAtEnd();
    }
    return c ? (this.setToBlock(l, this.positions.START), !0) : !1;
  }
  navigatePrevious(e = !1) {
    const { currentBlock: t, previousBlock: r } = this.Editor.BlockManager;
    if (!t) return !1;
    const { previousInput: n, currentInput: i } = t,
      s = i !== void 0 ? Wo(i) : void 0,
      a = e || s || !t.focusable;
    return n && a
      ? (this.setToInput(n, this.positions.END), !0)
      : r !== null && a
        ? (this.setToBlock(r, this.positions.END), !0)
        : !1;
  }
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(Cn.CSS.shadowCaret),
      e.insertAdjacentElement("beforeend", t);
  }
  restoreCaret(e) {
    const t = e.querySelector(`.${Cn.CSS.shadowCaret}`);
    if (!t) return;
    new A().expandToTag(t);
    const r = document.createRange();
    r.selectNode(t), r.extractContents();
  }
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(),
      r = document.createElement("div"),
      n = A.get(),
      i = A.range;
    (r.innerHTML = e),
      Array.from(r.childNodes).forEach((c) => t.appendChild(c)),
      t.childNodes.length === 0 && t.appendChild(new Text());
    const s = t.lastChild;
    i.deleteContents(), i.insertNode(t);
    const a = document.createRange(),
      l = s.nodeType === Node.TEXT_NODE ? s : s.firstChild;
    l !== null && l.textContent !== null && a.setStart(l, l.textContent.length),
      n.removeAllRanges(),
      n.addRange(a);
  }
};
class bm extends H {
  constructor() {
    super(...arguments),
      (this.onMouseUp = () => {
        this.listeners.off(document, "mouseover", this.onMouseOver),
          this.listeners.off(document, "mouseup", this.onMouseUp);
      }),
      (this.onMouseOver = (e) => {
        const { BlockManager: t, BlockSelection: r } = this.Editor;
        if (e.relatedTarget === null && e.target === null) return;
        const n =
            t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock,
          i = t.getBlockByChildNode(e.target);
        if (!(!n || !i) && i !== n) {
          if (n === this.firstSelectedBlock) {
            A.get().removeAllRanges(),
              (n.selected = !0),
              (i.selected = !0),
              r.clearCache();
            return;
          }
          if (i === this.firstSelectedBlock) {
            (n.selected = !1), (i.selected = !1), r.clearCache();
            return;
          }
          this.Editor.InlineToolbar.close(),
            this.toggleBlocksSelectedState(n, i),
            (this.lastSelectedBlock = i);
        }
      });
  }
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  watchSelection(e) {
    if (e.button !== op.LEFT) return;
    const { BlockManager: t } = this.Editor;
    (this.firstSelectedBlock = t.getBlock(e.target)),
      (this.lastSelectedBlock = this.firstSelectedBlock),
      this.listeners.on(document, "mouseover", this.onMouseOver),
      this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  get isCrossBlockSelectionStarted() {
    return (
      !!this.firstSelectedBlock &&
      !!this.lastSelectedBlock &&
      this.firstSelectedBlock !== this.lastSelectedBlock
    );
  }
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: r } = this.Editor;
    this.lastSelectedBlock ||
      (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock),
      this.firstSelectedBlock === this.lastSelectedBlock &&
        ((this.firstSelectedBlock.selected = !0),
        r.clearCache(),
        A.get().removeAllRanges());
    const n = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1),
      i = t.blocks[n];
    i &&
      (this.lastSelectedBlock.selected !== i.selected
        ? ((i.selected = !0), r.clearCache())
        : ((this.lastSelectedBlock.selected = !1), r.clearCache()),
      (this.lastSelectedBlock = i),
      this.Editor.InlineToolbar.close(),
      i.holder.scrollIntoView({ block: "nearest" }));
  }
  clear(e) {
    const { BlockManager: t, BlockSelection: r, Caret: n } = this.Editor,
      i = t.blocks.indexOf(this.firstSelectedBlock),
      s = t.blocks.indexOf(this.lastSelectedBlock);
    if (
      r.anyBlockSelected &&
      i > -1 &&
      s > -1 &&
      e &&
      e instanceof KeyboardEvent
    )
      switch (e.keyCode) {
        case j.DOWN:
        case j.RIGHT:
          n.setToBlock(t.blocks[Math.max(i, s)], n.positions.END);
          break;
        case j.UP:
        case j.LEFT:
          n.setToBlock(t.blocks[Math.min(i, s)], n.positions.START);
          break;
        default:
          n.setToBlock(t.blocks[Math.max(i, s)], n.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    A.isCollapsed || this.Editor.BlockSelection.clearSelection(e),
      t.nodes.redactor.contains(e.target)
        ? this.watchSelection(e)
        : this.Editor.BlockSelection.clearSelection(e);
  }
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: r, BlockSelection: n } = this.Editor,
      i = r.blocks.indexOf(e),
      s = r.blocks.indexOf(t),
      a = e.selected !== t.selected;
    for (let l = Math.min(i, s); l <= Math.max(i, s); l++) {
      const c = r.blocks[l];
      c !== this.firstSelectedBlock &&
        c !== (a ? e : t) &&
        ((r.blocks[l].selected = !r.blocks[l].selected), n.clearCache());
    }
  }
}
class ym extends H {
  constructor() {
    super(...arguments), (this.isStartedAtEditor = !1);
  }
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(
      e.nodes.holder,
      "drop",
      async (t) => {
        await this.processDrop(t);
      },
      !0,
    ),
      this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
        this.processDragStart();
      }),
      this.readOnlyMutableListeners.on(
        e.nodes.holder,
        "dragover",
        (t) => {
          this.processDragOver(t);
        },
        !0,
      );
  }
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  async processDrop(e) {
    const { BlockManager: t, Paste: r, Caret: n } = this.Editor;
    e.preventDefault(),
      t.blocks.forEach((s) => {
        s.dropTarget = !1;
      }),
      A.isAtEditor &&
        !A.isCollapsed &&
        this.isStartedAtEditor &&
        document.execCommand("delete"),
      (this.isStartedAtEditor = !1);
    const i = t.setCurrentBlockByChildNode(e.target);
    if (i) this.Editor.Caret.setToBlock(i, n.positions.END);
    else {
      const s = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(s, n.positions.END);
    }
    await r.processDataTransfer(e.dataTransfer, !0);
  }
  processDragStart() {
    A.isAtEditor && !A.isCollapsed && (this.isStartedAtEditor = !0),
      this.Editor.InlineToolbar.close();
  }
  processDragOver(e) {
    e.preventDefault();
  }
}
const km = 180,
  wm = 400;
class xm extends H {
  constructor({ config: e, eventsDispatcher: t }) {
    super({ config: e, eventsDispatcher: t }),
      (this.disabled = !1),
      (this.batchingTimeout = null),
      (this.batchingOnChangeQueue = new Map()),
      (this.batchTime = wm),
      (this.mutationObserver = new MutationObserver((r) => {
        this.redactorChanged(r);
      })),
      this.eventsDispatcher.on(Gl, (r) => {
        this.particularBlockChanged(r.event);
      }),
      this.eventsDispatcher.on(Zl, () => {
        this.disable();
      }),
      this.eventsDispatcher.on(Jl, () => {
        this.enable();
      });
  }
  enable() {
    this.mutationObserver.observe(this.Editor.UI.nodes.redactor, {
      childList: !0,
      subtree: !0,
      characterData: !0,
      attributes: !0,
    }),
      (this.disabled = !1);
  }
  disable() {
    this.mutationObserver.disconnect(), (this.disabled = !0);
  }
  particularBlockChanged(e) {
    this.disabled ||
      !Q(this.config.onChange) ||
      (this.batchingOnChangeQueue.set(
        `block:${e.detail.target.id}:event:${e.type}`,
        e,
      ),
      this.batchingTimeout && clearTimeout(this.batchingTimeout),
      (this.batchingTimeout = setTimeout(() => {
        let t;
        this.batchingOnChangeQueue.size === 1
          ? (t = this.batchingOnChangeQueue.values().next().value)
          : (t = Array.from(this.batchingOnChangeQueue.values())),
          this.config.onChange &&
            this.config.onChange(this.Editor.API.methods, t),
          this.batchingOnChangeQueue.clear();
      }, this.batchTime)));
  }
  redactorChanged(e) {
    this.eventsDispatcher.emit(bn, { mutations: e });
  }
}
const qc = class Vc extends H {
  constructor() {
    super(...arguments),
      (this.MIME_TYPE = "application/x-editor-js"),
      (this.toolsTags = {}),
      (this.tagsByTool = {}),
      (this.toolsPatterns = []),
      (this.toolsFiles = {}),
      (this.exceptionList = []),
      (this.processTool = (e) => {
        try {
          const t = e.create({}, {}, !1);
          if (e.pasteConfig === !1) {
            this.exceptionList.push(e.name);
            return;
          }
          if (!Q(t.onPaste)) return;
          this.getTagsConfig(e),
            this.getFilesConfig(e),
            this.getPatternsConfig(e);
        } catch (t) {
          z(
            `Paste handling for «${e.name}» Tool hasn't been set up because of the error`,
            "warn",
            t,
          );
        }
      }),
      (this.handlePasteEvent = async (e) => {
        const { BlockManager: t, Toolbar: r } = this.Editor,
          n = t.setCurrentBlockByChildNode(e.target);
        !n ||
          (this.isNativeBehaviour(e.target) &&
            !e.clipboardData.types.includes("Files")) ||
          (n && this.exceptionList.includes(n.name)) ||
          (e.preventDefault(),
          this.processDataTransfer(e.clipboardData),
          r.close());
      });
  }
  async prepare() {
    this.processTools();
  }
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  async processDataTransfer(e, t = !1) {
    const { Tools: r } = this.Editor,
      n = e.types;
    if (
      (n.includes ? n.includes("Files") : n.contains("Files")) &&
      !Pe(this.toolsFiles)
    ) {
      await this.processFiles(e.files);
      return;
    }
    const i = e.getData(this.MIME_TYPE),
      s = e.getData("text/plain");
    let a = e.getData("text/html");
    if (i)
      try {
        this.insertEditorJSData(JSON.parse(i));
        return;
      } catch {}
    t && s.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : s) + "</p>");
    const l = Object.keys(this.toolsTags).reduce(
        (h, u) => (
          (h[u.toLowerCase()] = this.toolsTags[u].sanitizationConfig ?? {}), h
        ),
        {},
      ),
      c = Object.assign({}, l, r.getAllInlineToolsSanitizeConfig(), { br: {} }),
      d = ze(a, c);
    !d.trim() || d.trim() === s || !E.isHTMLString(d)
      ? await this.processText(s)
      : await this.processText(d, !0);
  }
  async processText(e, t = !1) {
    const { Caret: r, BlockManager: n } = this.Editor,
      i = t ? this.processHTML(e) : this.processPlain(e);
    if (!i.length) return;
    if (i.length === 1) {
      i[0].isBlock
        ? this.processSingleBlock(i.pop())
        : this.processInlinePaste(i.pop());
      return;
    }
    const s =
      n.currentBlock && n.currentBlock.tool.isDefault && n.currentBlock.isEmpty;
    i.map(async (a, l) => this.insertBlock(a, l === 0 && s)),
      n.currentBlock && r.setToBlock(n.currentBlock, r.positions.END);
  }
  setCallback() {
    this.listeners.on(
      this.Editor.UI.nodes.holder,
      "paste",
      this.handlePasteEvent,
    );
  }
  unsetCallback() {
    this.listeners.off(
      this.Editor.UI.nodes.holder,
      "paste",
      this.handlePasteEvent,
    );
  }
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  collectTagNames(e) {
    return st(e) ? [e] : le(e) ? Object.keys(e) : [];
  }
  getTagsConfig(e) {
    if (e.pasteConfig === !1) return;
    const t = e.pasteConfig.tags || [],
      r = [];
    t.forEach((n) => {
      const i = this.collectTagNames(n);
      r.push(...i),
        i.forEach((s) => {
          if (Object.prototype.hasOwnProperty.call(this.toolsTags, s)) {
            z(
              `Paste handler for «${e.name}» Tool on «${s}» tag is skipped because it is already used by «${this.toolsTags[s].tool.name}» Tool.`,
              "warn",
            );
            return;
          }
          const a = le(n) ? n[s] : null;
          this.toolsTags[s.toUpperCase()] = { tool: e, sanitizationConfig: a };
        });
    }),
      (this.tagsByTool[e.name] = r.map((n) => n.toUpperCase()));
  }
  getFilesConfig(e) {
    if (e.pasteConfig === !1) return;
    const { files: t = {} } = e.pasteConfig;
    let { extensions: r, mimeTypes: n } = t;
    (!r && !n) ||
      (r &&
        !Array.isArray(r) &&
        (z(
          `«extensions» property of the onDrop config for «${e.name}» Tool should be an array`,
        ),
        (r = [])),
      n &&
        !Array.isArray(n) &&
        (z(
          `«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`,
        ),
        (n = [])),
      n &&
        (n = n.filter((i) =>
          ap(i)
            ? !0
            : (z(
                `MIME type value «${i}» for the «${e.name}» Tool is not a valid MIME type`,
                "warn",
              ),
              !1),
        )),
      (this.toolsFiles[e.name] = { extensions: r || [], mimeTypes: n || [] }));
  }
  getPatternsConfig(e) {
    e.pasteConfig === !1 ||
      !e.pasteConfig.patterns ||
      Pe(e.pasteConfig.patterns) ||
      Object.entries(e.pasteConfig.patterns).forEach(([t, r]) => {
        r instanceof RegExp ||
          z(
            `Pattern ${r} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,
            "warn",
          ),
          this.toolsPatterns.push({ key: t, pattern: r, tool: e });
      });
  }
  isNativeBehaviour(e) {
    return E.isNativeInput(e);
  }
  async processFiles(e) {
    const { BlockManager: t } = this.Editor;
    let r;
    (r = await Promise.all(Array.from(e).map((i) => this.processFile(i)))),
      (r = r.filter((i) => !!i));
    const n = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    r.forEach((i, s) => {
      t.paste(i.type, i.event, s === 0 && n);
    });
  }
  async processFile(e) {
    const t = sp(e),
      r = Object.entries(this.toolsFiles).find(
        ([i, { mimeTypes: s, extensions: a }]) => {
          const [l, c] = e.type.split("/"),
            d = a.find((u) => u.toLowerCase() === t.toLowerCase()),
            h = s.find((u) => {
              const [p, g] = u.split("/");
              return p === l && (g === c || g === "*");
            });
          return !!d || !!h;
        },
      );
    if (!r) return;
    const [n] = r;
    return { event: this.composePasteEvent("file", { file: e }), type: n };
  }
  processHTML(e) {
    const { Tools: t } = this.Editor,
      r = E.make("DIV");
    return (
      (r.innerHTML = e),
      this.getNodes(r)
        .map((n) => {
          let i,
            s = t.defaultTool,
            a = !1;
          switch (n.nodeType) {
            case Node.DOCUMENT_FRAGMENT_NODE:
              (i = E.make("div")), i.appendChild(n);
              break;
            case Node.ELEMENT_NODE:
              (i = n),
                (a = !0),
                this.toolsTags[i.tagName] &&
                  (s = this.toolsTags[i.tagName].tool);
              break;
          }
          const { tags: l } = s.pasteConfig || { tags: [] },
            c = l.reduce(
              (u, p) => (
                this.collectTagNames(p).forEach((g) => {
                  const f = le(p) ? p[g] : null;
                  u[g.toLowerCase()] = f || {};
                }),
                u
              ),
              {},
            ),
            d = Object.assign({}, c, s.baseSanitizeConfig);
          if (i.tagName.toLowerCase() === "table") {
            const u = ze(i.outerHTML, d);
            i = E.make("div", void 0, { innerHTML: u }).firstChild;
          } else i.innerHTML = ze(i.innerHTML, d);
          const h = this.composePasteEvent("tag", { data: i });
          return { content: i, isBlock: a, tool: s.name, event: h };
        })
        .filter((n) => {
          const i = E.isEmpty(n.content),
            s = E.isSingleTag(n.content);
          return !i || s;
        })
    );
  }
  processPlain(e) {
    const { defaultBlock: t } = this.config;
    if (!e) return [];
    const r = t;
    return e
      .split(/\r?\n/)
      .filter((n) => n.trim())
      .map((n) => {
        const i = E.make("div");
        i.textContent = n;
        const s = this.composePasteEvent("tag", { data: i });
        return { content: i, tool: r, isBlock: !1, event: s };
      });
  }
  async processSingleBlock(e) {
    const { Caret: t, BlockManager: r } = this.Editor,
      { currentBlock: n } = r;
    if (
      !n ||
      e.tool !== n.name ||
      !E.containsOnlyInlineElements(e.content.innerHTML)
    ) {
      this.insertBlock(e, n?.tool.isDefault && n.isEmpty);
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  async processInlinePaste(e) {
    const { BlockManager: t, Caret: r } = this.Editor,
      { content: n } = e;
    if (
      t.currentBlock &&
      t.currentBlock.tool.isDefault &&
      n.textContent.length < Vc.PATTERN_PROCESSING_MAX_LENGTH
    ) {
      const i = await this.processPattern(n.textContent);
      if (i) {
        const s =
            t.currentBlock &&
            t.currentBlock.tool.isDefault &&
            t.currentBlock.isEmpty,
          a = t.paste(i.tool, i.event, s);
        r.setToBlock(a, r.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const i = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand("insertHTML", !1, ze(n.innerHTML, i));
    } else this.insertBlock(e);
  }
  async processPattern(e) {
    const t = this.toolsPatterns.find((r) => {
      const n = r.pattern.exec(e);
      return n ? e === n.shift() : !1;
    });
    return t
      ? {
          event: this.composePasteEvent("pattern", { key: t.key, data: e }),
          tool: t.tool.name,
        }
      : void 0;
  }
  insertBlock(e, t = !1) {
    const { BlockManager: r, Caret: n } = this.Editor,
      { currentBlock: i } = r;
    let s;
    if (t && i && i.isEmpty) {
      (s = r.paste(e.tool, e.event, !0)), n.setToBlock(s, n.positions.END);
      return;
    }
    (s = r.paste(e.tool, e.event)), n.setToBlock(s, n.positions.END);
  }
  insertEditorJSData(e) {
    const { BlockManager: t, Caret: r, Tools: n } = this.Editor;
    zn(e, (i) => n.blockTools.get(i).sanitizeConfig).forEach(
      ({ tool: i, data: s }, a) => {
        let l = !1;
        a === 0 &&
          (l =
            t.currentBlock &&
            t.currentBlock.tool.isDefault &&
            t.currentBlock.isEmpty);
        const c = t.insert({ tool: i, data: s, replace: l });
        r.setToBlock(c, r.positions.END);
      },
    );
  }
  processElementNode(e, t, r) {
    const n = Object.keys(this.toolsTags),
      i = e,
      { tool: s } = this.toolsTags[i.tagName] || {},
      a = this.tagsByTool[s?.name] || [],
      l = n.includes(i.tagName),
      c = E.blockElements.includes(i.tagName.toLowerCase()),
      d = Array.from(i.children).some(
        ({ tagName: u }) => n.includes(u) && !a.includes(u),
      ),
      h = Array.from(i.children).some(({ tagName: u }) =>
        E.blockElements.includes(u.toLowerCase()),
      );
    if (!c && !l && !d) return r.appendChild(i), [...t, r];
    if ((l && !d) || (c && !h && !d)) return [...t, r, i];
  }
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let r;
    const n = (i, s) => {
      if (E.isEmpty(s) && !E.isSingleTag(s)) return i;
      const a = i[i.length - 1];
      let l = new DocumentFragment();
      switch ((a && E.isFragment(a) && (l = i.pop()), s.nodeType)) {
        case Node.ELEMENT_NODE:
          if (((r = this.processElementNode(s, i, l)), r)) return r;
          break;
        case Node.TEXT_NODE:
          return l.appendChild(s), [...i, l];
        default:
          return [...i, l];
      }
      return [...i, ...Array.from(s.childNodes).reduce(n, [])];
    };
    return t.reduce(n, []);
  }
  composePasteEvent(e, t) {
    return new CustomEvent(e, { detail: t });
  }
};
qc.PATTERN_PROCESSING_MAX_LENGTH = 450;
let Cm = qc;
class Em extends H {
  constructor() {
    super(...arguments),
      (this.toolsDontSupportReadOnly = []),
      (this.readOnlyEnabled = !1);
  }
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  async prepare() {
    const { Tools: e } = this.Editor,
      { blockTools: t } = e,
      r = [];
    Array.from(t.entries()).forEach(([n, i]) => {
      i.isReadOnlySupported || r.push(n);
    }),
      (this.toolsDontSupportReadOnly = r),
      this.config.readOnly && r.length > 0 && this.throwCriticalError(),
      this.toggle(this.config.readOnly, !0);
  }
  async toggle(e = !this.readOnlyEnabled, t = !1) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const r = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const i in this.Editor)
      this.Editor[i].toggleReadOnly && this.Editor[i].toggleReadOnly(e);
    if (r === e) return this.readOnlyEnabled;
    if (t) return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const n = await this.Editor.Saver.save();
    return (
      await this.Editor.BlockManager.clear(),
      await this.Editor.Renderer.render(n.blocks),
      this.Editor.ModificationsObserver.enable(),
      this.readOnlyEnabled
    );
  }
  throwCriticalError() {
    throw new Kl(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`,
    );
  }
}
let _m = class Yo extends H {
  constructor() {
    super(...arguments),
      (this.isRectSelectionActivated = !1),
      (this.SCROLL_SPEED = 3),
      (this.HEIGHT_OF_SCROLL_ZONE = 40),
      (this.BOTTOM_SCROLL_ZONE = 1),
      (this.TOP_SCROLL_ZONE = 2),
      (this.MAIN_MOUSE_BUTTON = 0),
      (this.mousedown = !1),
      (this.isScrolling = !1),
      (this.inScrollZone = null),
      (this.startX = 0),
      (this.startY = 0),
      (this.mouseX = 0),
      (this.mouseY = 0),
      (this.stackOfSelected = []),
      (this.listenerIds = []);
  }
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom",
    };
  }
  prepare() {
    this.enableModuleBindings();
  }
  startSelection(e, t) {
    const r = document.elementFromPoint(
      e - window.pageXOffset,
      t - window.pageYOffset,
    );
    r.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) ||
      ((this.Editor.BlockSelection.allBlocksSelected = !1),
      this.clearSelection(),
      (this.stackOfSelected = []));
    const n = [
        `.${rt.CSS.content}`,
        `.${this.Editor.Toolbar.CSS.toolbar}`,
        `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`,
      ],
      i = r.closest("." + this.Editor.UI.CSS.editorWrapper),
      s = n.some((a) => !!r.closest(a));
    !i || s || ((this.mousedown = !0), (this.startX = e), (this.startY = t));
  }
  endSelection() {
    (this.mousedown = !1),
      (this.startX = 0),
      (this.startY = 0),
      (this.overlayRectangle.style.display = "none");
  }
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(
      e,
      "mousedown",
      (t) => {
        this.processMouseDown(t);
      },
      !1,
    ),
      this.listeners.on(
        document.body,
        "mousemove",
        fn((t) => {
          this.processMouseMove(t);
        }, 10),
        { passive: !0 },
      ),
      this.listeners.on(document.body, "mouseleave", () => {
        this.processMouseLeave();
      }),
      this.listeners.on(
        window,
        "scroll",
        fn((t) => {
          this.processScroll(t);
        }, 10),
        { passive: !0 },
      ),
      this.listeners.on(
        document.body,
        "mouseup",
        () => {
          this.processMouseUp();
        },
        !1,
      );
  }
  processMouseDown(e) {
    e.button === this.MAIN_MOUSE_BUTTON &&
      (e.target.closest(E.allInputsSelector) !== null ||
        this.startSelection(e.pageX, e.pageY));
  }
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  processScroll(e) {
    this.changingRectangle(e);
  }
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  scrollByZones(e) {
    if (
      ((this.inScrollZone = null),
      e <= this.HEIGHT_OF_SCROLL_ZONE &&
        (this.inScrollZone = this.TOP_SCROLL_ZONE),
      document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE &&
        (this.inScrollZone = this.BOTTOM_SCROLL_ZONE),
      !this.inScrollZone)
    ) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling ||
      (this.scrollVertical(
        this.inScrollZone === this.TOP_SCROLL_ZONE
          ? -this.SCROLL_SPEED
          : this.SCROLL_SPEED,
      ),
      (this.isScrolling = !0));
  }
  genHTML() {
    const { UI: e } = this.Editor,
      t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper),
      r = E.make("div", Yo.CSS.overlay, {}),
      n = E.make("div", Yo.CSS.overlayContainer, {}),
      i = E.make("div", Yo.CSS.rect, {});
    return (
      n.appendChild(i),
      r.appendChild(n),
      t.appendChild(r),
      (this.overlayRectangle = i),
      { container: t, overlay: r }
    );
  }
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown)) return;
    const t = window.pageYOffset;
    window.scrollBy(0, e),
      (this.mouseY += window.pageYOffset - t),
      setTimeout(() => {
        this.scrollVertical(e);
      }, 0);
  }
  changingRectangle(e) {
    if (!this.mousedown) return;
    e.pageY !== void 0 && ((this.mouseX = e.pageX), (this.mouseY = e.pageY));
    const {
        rightPos: t,
        leftPos: r,
        index: n,
      } = this.genInfoForMouseSelection(),
      i = this.startX > t && this.mouseX > t,
      s = this.startX < r && this.mouseX < r;
    (this.rectCrossesBlocks = !(i || s)),
      this.isRectSelectionActivated ||
        ((this.rectCrossesBlocks = !1),
        (this.isRectSelectionActivated = !0),
        this.shrinkRectangleToPoint(),
        (this.overlayRectangle.style.display = "block")),
      this.updateRectangleSize(),
      this.Editor.Toolbar.close(),
      n !== void 0 &&
        (this.trySelectNextBlock(n),
        this.inverseSelection(),
        A.get().removeAllRanges());
  }
  shrinkRectangleToPoint() {
    (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`),
      (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`),
      (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`),
      (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`);
  }
  inverseSelection() {
    const e = this.Editor.BlockManager.getBlockByIndex(
      this.stackOfSelected[0],
    ).selected;
    if (this.rectCrossesBlocks && !e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(t);
    if (!this.rectCrossesBlocks && e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(t);
  }
  updateRectangleSize() {
    this.mouseY >= this.startY
      ? ((this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`),
        (this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`))
      : ((this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`),
        (this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`)),
      this.mouseX >= this.startX
        ? ((this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`),
          (this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`))
        : ((this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`),
          (this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`));
  }
  genInfoForMouseSelection() {
    const e = document.body.offsetWidth / 2,
      t = this.mouseY - window.pageYOffset,
      r = document.elementFromPoint(e, t),
      n = this.Editor.BlockManager.getBlockByChildNode(r);
    let i;
    n !== void 0 &&
      (i = this.Editor.BlockManager.blocks.findIndex(
        (d) => d.holder === n.holder,
      ));
    const s = this.Editor.BlockManager.lastBlock.holder.querySelector(
        "." + rt.CSS.content,
      ),
      a = Number.parseInt(window.getComputedStyle(s).width, 10) / 2,
      l = e - a,
      c = e + a;
    return { index: i, leftPos: l, rightPos: c };
  }
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e),
      this.stackOfSelected.push(e);
  }
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e,
      r = this.stackOfSelected.length,
      n = 1,
      i = -1,
      s = 0;
    if (t) return;
    const a = this.stackOfSelected[r - 1] - this.stackOfSelected[r - 2] > 0;
    let l = s;
    r > 1 && (l = a ? n : i);
    const c = e > this.stackOfSelected[r - 1] && l === n,
      d = e < this.stackOfSelected[r - 1] && l === i,
      h = !(c || d || l === s);
    if (
      !h &&
      (e > this.stackOfSelected[r - 1] ||
        this.stackOfSelected[r - 1] === void 0)
    ) {
      let g = this.stackOfSelected[r - 1] + 1 || e;
      for (g; g <= e; g++) this.addBlockInSelection(g);
      return;
    }
    if (!h && e < this.stackOfSelected[r - 1]) {
      for (let g = this.stackOfSelected[r - 1] - 1; g >= e; g--)
        this.addBlockInSelection(g);
      return;
    }
    if (!h) return;
    let u = r - 1,
      p;
    for (
      e > this.stackOfSelected[r - 1]
        ? (p = () => e > this.stackOfSelected[u])
        : (p = () => e < this.stackOfSelected[u]);
      p();

    )
      this.rectCrossesBlocks &&
        this.Editor.BlockSelection.unSelectBlockByIndex(
          this.stackOfSelected[u],
        ),
        this.stackOfSelected.pop(),
        u--;
  }
};
class Sm extends H {
  async render(e) {
    return new Promise((t) => {
      const { Tools: r, BlockManager: n } = this.Editor;
      if (e.length === 0) n.insert();
      else {
        const i = e.map(({ type: s, data: a, tunes: l, id: c }) => {
          r.available.has(s) === !1 &&
            (Le(
              `Tool «${s}» is not found. Check 'tools' property at the Editor.js config.`,
              "warn",
            ),
            (a = this.composeStubDataForTool(s, a, c)),
            (s = r.stubTool));
          let d;
          try {
            d = n.composeBlock({ id: c, tool: s, data: a, tunes: l });
          } catch (h) {
            z(`Block «${s}» skipped because of plugins error`, "error", {
              data: a,
              error: h,
            }),
              (a = this.composeStubDataForTool(s, a, c)),
              (s = r.stubTool),
              (d = n.composeBlock({ id: c, tool: s, data: a, tunes: l }));
          }
          return d;
        });
        n.insertMany(i);
      }
      window.requestIdleCallback(
        () => {
          t();
        },
        { timeout: 2e3 },
      );
    });
  }
  composeStubDataForTool(e, t, r) {
    const { Tools: n } = this.Editor;
    let i = e;
    if (n.unavailable.has(e)) {
      const s = n.unavailable.get(e).toolbox;
      s !== void 0 && s[0].title !== void 0 && (i = s[0].title);
    }
    return { savedData: { id: r, type: e, data: t }, title: i };
  }
}
class Tm extends H {
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor,
      r = e.blocks,
      n = [];
    try {
      r.forEach((a) => {
        n.push(this.getSavedData(a));
      });
      const i = await Promise.all(n),
        s = await zn(i, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(s);
    } catch (i) {
      Le("Saving failed due to the Error %o", "error", i);
    }
  }
  async getSavedData(e) {
    const t = await e.save(),
      r = t && (await e.validate(t.data));
    return { ...t, isValid: r };
  }
  makeOutput(e) {
    const t = [];
    return (
      e.forEach(({ id: r, tool: n, data: i, tunes: s, isValid: a }) => {
        if (!a) {
          z(`Block «${n}» skipped because saved data is invalid`);
          return;
        }
        if (n === this.Editor.Tools.stubTool) {
          t.push(i);
          return;
        }
        const l = { id: r, type: n, data: i, ...(!Pe(s) && { tunes: s }) };
        t.push(l);
      }),
      { time: +new Date(), blocks: t, version: "2.31.0-rc.7" }
    );
  }
}
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}",
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Om =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function Bm(o) {
  const e = document.createElement("div");
  e.innerHTML = o.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */ class ji {
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  constructor({ data: e, config: t, api: r, readOnly: n }) {
    (this.api = r),
      (this.readOnly = n),
      (this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }),
      this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)),
      (this._placeholder = t.placeholder
        ? t.placeholder
        : ji.DEFAULT_PLACEHOLDER),
      (this._data = e ?? {}),
      (this._element = null),
      (this._preserveBlank = t.preserveBlank ?? !1);
  }
  onKeyUp(e) {
    if ((e.code !== "Backspace" && e.code !== "Delete") || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  drawView() {
    const e = document.createElement("DIV");
    return (
      e.classList.add(this._CSS.wrapper, this._CSS.block),
      (e.contentEditable = "false"),
      (e.dataset.placeholderActive = this.api.i18n.t(this._placeholder)),
      this._data.text && (e.innerHTML = this._data.text),
      this.readOnly ||
        ((e.contentEditable = "true"),
        e.addEventListener("keyup", this.onKeyUp)),
      e
    );
  }
  render() {
    return (this._element = this.drawView()), this._element;
  }
  merge(e) {
    if (!this._element) return;
    this._data.text += e.text;
    const t = Bm(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  save(e) {
    return { text: e.innerHTML };
  }
  onPaste(e) {
    const t = { text: e.detail.data.innerHTML };
    (this._data = t),
      window.requestAnimationFrame(() => {
        this._element && (this._element.innerHTML = this._data.text || "");
      });
  }
  static get conversionConfig() {
    return { export: "text", import: "text" };
  }
  static get sanitize() {
    return { text: { br: !0 } };
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get pasteConfig() {
    return { tags: ["P"] };
  }
  static get toolbox() {
    return { icon: Om, title: "Text" };
  }
}
class Ri {
  constructor() {
    this.commandName = "bold";
  }
  static get sanitize() {
    return { b: {} };
  }
  render() {
    return {
      icon: ef,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName),
    };
  }
  get shortcut() {
    return "CMD+B";
  }
}
Ri.isInline = !0;
Ri.title = "Bold";
class Di {
  constructor() {
    (this.commandName = "italic"),
      (this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--italic",
      }),
      (this.nodes = { button: null });
  }
  static get sanitize() {
    return { i: {} };
  }
  render() {
    return (
      (this.nodes.button = document.createElement("button")),
      (this.nodes.button.type = "button"),
      this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier),
      (this.nodes.button.innerHTML = lf),
      this.nodes.button
    );
  }
  surround() {
    document.execCommand(this.commandName);
  }
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  get shortcut() {
    return "CMD+I";
  }
}
Di.isInline = !0;
Di.title = "Italic";
class $i {
  constructor({ api: e }) {
    (this.commandLink = "createLink"),
      (this.commandUnlink = "unlink"),
      (this.ENTER_KEY = 13),
      (this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--link",
        buttonUnlink: "ce-inline-tool--unlink",
        input: "ce-inline-tool-input",
        inputShowed: "ce-inline-tool-input--showed",
      }),
      (this.nodes = { button: null, input: null }),
      (this.inputOpened = !1),
      (this.toolbar = e.toolbar),
      (this.inlineToolbar = e.inlineToolbar),
      (this.notifier = e.notifier),
      (this.i18n = e.i18n),
      (this.selection = new A());
  }
  static get sanitize() {
    return { a: { href: !0, target: "_blank", rel: "nofollow" } };
  }
  render() {
    return (
      (this.nodes.button = document.createElement("button")),
      (this.nodes.button.type = "button"),
      this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier),
      (this.nodes.button.innerHTML = Ma),
      this.nodes.button
    );
  }
  renderActions() {
    return (
      (this.nodes.input = document.createElement("input")),
      (this.nodes.input.placeholder = this.i18n.t("Add a link")),
      (this.nodes.input.enterKeyHint = "done"),
      this.nodes.input.classList.add(this.CSS.input),
      this.nodes.input.addEventListener("keydown", (e) => {
        e.keyCode === this.ENTER_KEY && this.enterPressed(e);
      }),
      this.nodes.input
    );
  }
  surround(e) {
    if (e) {
      this.inputOpened
        ? (this.selection.restore(), this.selection.removeFakeBackground())
        : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t),
          this.unlink(),
          this.closeActions(),
          this.checkState(),
          this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      (this.nodes.button.innerHTML = hf),
        this.nodes.button.classList.add(this.CSS.buttonUnlink),
        this.nodes.button.classList.add(this.CSS.buttonActive),
        this.openActions();
      const t = e.getAttribute("href");
      (this.nodes.input.value = t !== "null" ? t : ""), this.selection.save();
    } else
      (this.nodes.button.innerHTML = Ma),
        this.nodes.button.classList.remove(this.CSS.buttonUnlink),
        this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  clear() {
    this.closeActions();
  }
  get shortcut() {
    return "CMD+K";
  }
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed),
      e && this.nodes.input.focus(),
      (this.inputOpened = !0);
  }
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new A();
      t.save(),
        this.selection.restore(),
        this.selection.removeFakeBackground(),
        t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed),
      (this.nodes.input.value = ""),
      e && this.selection.clearSaved(),
      (this.inputOpened = !1);
  }
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(),
        this.unlink(),
        e.preventDefault(),
        this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error",
      }),
        z("Incorrect Link pasted", "warn", t);
      return;
    }
    (t = this.prepareLink(t)),
      this.selection.restore(),
      this.selection.removeFakeBackground(),
      this.insertLink(t),
      e.preventDefault(),
      e.stopPropagation(),
      e.stopImmediatePropagation(),
      this.selection.collapseToEnd(),
      this.inlineToolbar.close();
  }
  validateURL(e) {
    return !/\s/.test(e);
  }
  prepareLink(e) {
    return (e = e.trim()), (e = this.addProtocol(e)), e;
  }
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e)) return e;
    const t = /^\/[^/\s]/.test(e),
      r = e.substring(0, 1) === "#",
      n = /^\/\/[^/\s]/.test(e);
    return !t && !r && !n && (e = "http://" + e), e;
  }
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t),
      document.execCommand(this.commandLink, !1, e);
  }
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
$i.isInline = !0;
$i.title = "Link";
let Yc = class {
  constructor({ api: e }) {
    (this.i18nAPI = e.i18n),
      (this.blocksAPI = e.blocks),
      (this.selectionAPI = e.selection),
      (this.toolsAPI = e.tools),
      (this.caretAPI = e.caret);
  }
  async render() {
    const e = A.get(),
      t = this.blocksAPI.getBlockByElement(e.anchorNode);
    if (t === void 0) return [];
    const r = this.toolsAPI.getBlockTools(),
      n = await ec(t, r);
    if (n.length === 0) return [];
    const i = n.reduce((c, d) => {
        var h;
        return (
          (h = d.toolbox) == null ||
            h.forEach((u) => {
              c.push({
                icon: u.icon,
                title: ge.t(Te.toolNames, u.title),
                name: d.name,
                closeOnActivate: !0,
                onActivate: async () => {
                  const p = await this.blocksAPI.convert(t.id, d.name, u.data);
                  this.caretAPI.setToBlock(p, "end");
                },
              });
            }),
          c
        );
      }, []),
      s = await t.getActiveToolboxEntry(),
      a = s !== void 0 ? s.icon : ac,
      l = !io();
    return {
      icon: a,
      name: "convert-to",
      hint: { title: this.i18nAPI.t("Convert to") },
      children: {
        searchable: l,
        items: i,
        onOpen: () => {
          l &&
            (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
        },
        onClose: () => {
          l &&
            (this.selectionAPI.restore(),
            this.selectionAPI.removeFakeBackground());
        },
      },
    };
  }
};
Yc.isInline = !0;
let Kc = class {
  constructor({ data: e, api: t }) {
    (this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle",
    }),
      (this.api = t),
      (this.title = e.title || this.api.i18n.t("Error")),
      (this.subtitle = this.api.i18n.t(
        "The block can not be displayed correctly.",
      )),
      (this.savedData = e.savedData),
      (this.wrapper = this.make());
  }
  render() {
    return this.wrapper;
  }
  save() {
    return this.savedData;
  }
  make() {
    const e = E.make("div", this.CSS.wrapper),
      t = pf,
      r = E.make("div", this.CSS.info),
      n = E.make("div", this.CSS.title, { textContent: this.title }),
      i = E.make("div", this.CSS.subtitle, { textContent: this.subtitle });
    return (
      (e.innerHTML = t), r.appendChild(n), r.appendChild(i), e.appendChild(r), e
    );
  }
};
Kc.isReadOnlySupported = !0;
class Mm extends Xn {
  constructor() {
    super(...arguments), (this.type = Tt.Inline);
  }
  get title() {
    return this.constructable[gr.Title];
  }
  create() {
    return new this.constructable({ api: this.api, config: this.settings });
  }
  get isReadOnlySupported() {
    return this.constructable[gr.IsReadOnlySupported] ?? !1;
  }
}
class Im extends Xn {
  constructor() {
    super(...arguments), (this.type = Tt.Tune);
  }
  create(e, t) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: t,
      data: e,
    });
  }
}
let Ue = class qt extends Map {
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new qt(e);
  }
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new qt(e);
  }
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new qt(e);
  }
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new qt(e);
  }
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new qt(e);
  }
};
var Lm = Object.defineProperty,
  Pm = Object.getOwnPropertyDescriptor,
  Xc = (o, e, t, r) => {
    for (var n = Pm(e, t), i = o.length - 1, s; i >= 0; i--)
      (s = o[i]) && (n = s(e, t, n) || n);
    return n && Lm(e, t, n), n;
  };
class Hi extends Xn {
  constructor() {
    super(...arguments),
      (this.type = Tt.Block),
      (this.inlineTools = new Ue()),
      (this.tunes = new Ue());
  }
  create(e, t, r) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: r,
      api: this.api,
      config: this.settings,
    });
  }
  get isReadOnlySupported() {
    return this.constructable[Wt.IsReadOnlySupported] === !0;
  }
  get isLineBreaksEnabled() {
    return this.constructable[Wt.IsEnabledLineBreaks];
  }
  get toolbox() {
    const e = this.constructable[Wt.Toolbox],
      t = this.config[zo.Toolbox];
    if (!Pe(e) && t !== !1)
      return t
        ? Array.isArray(e)
          ? Array.isArray(t)
            ? t.map((r, n) => {
                const i = e[n];
                return i ? { ...i, ...r } : r;
              })
            : [t]
          : Array.isArray(t)
            ? t
            : [{ ...e, ...t }]
        : Array.isArray(e)
          ? e
          : [e];
  }
  get conversionConfig() {
    return this.constructable[Wt.ConversionConfig];
  }
  get enabledInlineTools() {
    return this.config[zo.EnabledInlineTools] || !1;
  }
  get enabledBlockTunes() {
    return this.config[zo.EnabledBlockTunes];
  }
  get pasteConfig() {
    return this.constructable[Wt.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig,
      t = this.baseSanitizeConfig;
    if (Pe(e)) return t;
    const r = {};
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        const i = e[n];
        le(i) ? (r[n] = Object.assign({}, t, i)) : (r[n] = i);
      }
    return r;
  }
  get baseSanitizeConfig() {
    const e = {};
    return (
      Array.from(this.inlineTools.values()).forEach((t) =>
        Object.assign(e, t.sanitizeConfig),
      ),
      Array.from(this.tunes.values()).forEach((t) =>
        Object.assign(e, t.sanitizeConfig),
      ),
      e
    );
  }
}
Xc([no], Hi.prototype, "sanitizeConfig");
Xc([no], Hi.prototype, "baseSanitizeConfig");
class Nm {
  constructor(e, t, r) {
    (this.api = r), (this.config = e), (this.editorConfig = t);
  }
  get(e) {
    const { class: t, isInternal: r = !1, ...n } = this.config[e],
      i = this.getConstructor(t),
      s = t[wn.IsTune];
    return new i({
      name: e,
      constructable: t,
      config: n,
      api: this.api.getMethodsForTool(e, s),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: r,
    });
  }
  getConstructor(e) {
    switch (!0) {
      case e[gr.IsInline]:
        return Mm;
      case e[wn.IsTune]:
        return Im;
      default:
        return Hi;
    }
  }
}
let Gc = class {
  constructor({ api: e }) {
    (this.CSS = { animation: "wobble" }), (this.api = e);
  }
  render() {
    return {
      icon: tf,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down",
    };
  }
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(),
      t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const r = t.holder,
      n = r.getBoundingClientRect();
    let i = Math.abs(window.innerHeight - r.offsetHeight);
    n.top < window.innerHeight && (i = window.scrollY + r.offsetHeight),
      window.scrollTo(0, i),
      this.api.blocks.move(e + 1),
      this.api.toolbar.toggleBlockSettings(!0);
  }
};
Gc.isTune = !0;
let Zc = class {
  constructor({ api: e }) {
    this.api = e;
  }
  render() {
    return {
      icon: sf,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick(),
      },
    };
  }
  handleClick() {
    this.api.blocks.delete();
  }
};
Zc.isTune = !0;
let Jc = class {
  constructor({ api: e }) {
    (this.CSS = { animation: "wobble" }), (this.api = e);
  }
  render() {
    return {
      icon: nf,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up",
    };
  }
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(),
      t = this.api.blocks.getBlockByIndex(e),
      r = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !r)
      throw new Error("Unable to move Block up since it is already the first");
    const n = t.holder,
      i = r.holder,
      s = n.getBoundingClientRect(),
      a = i.getBoundingClientRect();
    let l;
    a.top > 0
      ? (l = Math.abs(s.top) - Math.abs(a.top))
      : (l = Math.abs(s.top) + a.height),
      window.scrollBy(0, -1 * l),
      this.api.blocks.move(e - 1),
      this.api.toolbar.toggleBlockSettings(!0);
  }
};
Jc.isTune = !0;
var Am = Object.defineProperty,
  jm = Object.getOwnPropertyDescriptor,
  Rm = (o, e, t, r) => {
    for (var n = jm(e, t), i = o.length - 1, s; i >= 0; i--)
      (s = o[i]) && (n = s(e, t, n) || n);
    return n && Am(e, t, n), n;
  };
let Qc = class extends H {
  constructor() {
    super(...arguments),
      (this.stubTool = "stub"),
      (this.toolsAvailable = new Ue()),
      (this.toolsUnavailable = new Ue());
  }
  get available() {
    return this.toolsAvailable;
  }
  get unavailable() {
    return this.toolsUnavailable;
  }
  get inlineTools() {
    return this.available.inlineTools;
  }
  get blockTools() {
    return this.available.blockTools;
  }
  get blockTunes() {
    return this.available.blockTunes;
  }
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  get internal() {
    return this.available.internalTools;
  }
  async prepare() {
    if (
      (this.validateTools(),
      (this.config.tools = gn({}, this.internalTools, this.config.tools)),
      !Object.prototype.hasOwnProperty.call(this.config, "tools") ||
        Object.keys(this.config.tools).length === 0)
    )
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new Nm(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0) return Promise.resolve();
    await ip(
      t,
      (r) => {
        this.toolPrepareMethodSuccess(r);
      },
      (r) => {
        this.toolPrepareMethodFallback(r);
      },
    ),
      this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return (
      Array.from(this.inlineTools.values()).forEach((t) => {
        Object.assign(e, t.sanitizeConfig);
      }),
      e
    );
  }
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      Q(e.reset) && (await e.reset());
    });
  }
  get internalTools() {
    return {
      convertTo: { class: Yc, isInternal: !0 },
      link: { class: $i, isInternal: !0 },
      bold: { class: Ri, isInternal: !0 },
      italic: { class: Di, isInternal: !0 },
      paragraph: { class: ji, inlineToolbar: !0, isInternal: !0 },
      stub: { class: Kc, isInternal: !0 },
      moveUp: { class: Jc, isInternal: !0 },
      delete: { class: Zc, isInternal: !0 },
      moveDown: { class: Gc, isInternal: !0 },
    };
  }
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const r = ["render"].filter((n) => !t.create()[n]);
      if (r.length) {
        z(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          r,
        ),
          this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  getListOfPrepareFunctions(e) {
    const t = [];
    return (
      Object.entries(e).forEach(([r, n]) => {
        t.push({
          function: Q(n.class.prepare) ? n.class.prepare : () => {},
          data: { toolName: r, config: n.config },
        });
      }),
      t
    );
  }
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new Ue(
          Array.isArray(this.config.inlineToolbar)
            ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)])
            : Array.from(this.inlineTools.entries()),
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) &&
        (e.inlineTools = new Ue(
          ["convertTo", ...e.enabledInlineTools].map((t) => [
            t,
            this.inlineTools.get(t),
          ]),
        ));
    }
  }
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new Ue(
          e.enabledBlockTunes.map((r) => [r, this.blockTunes.get(r)]),
        );
        e.tunes = new Ue([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new Ue(
          this.config.tunes.map((r) => [r, this.blockTunes.get(r)]),
        );
        e.tunes = new Ue([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools) return;
        const t = this.config.tools[e];
        if (!Q(t) && !Q(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`,
          );
      }
  }
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      le(this.config.tools[t])
        ? (e[t] = this.config.tools[t])
        : (e[t] = { class: this.config.tools[t] });
    return e;
  }
};
Rm([no], Qc.prototype, "getAllInlineToolsSanitizeConfig");
const Dm = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
class $m extends H {
  constructor() {
    super(...arguments),
      (this.isMobile = !1),
      (this.contentRectCache = null),
      (this.resizeDebouncer = Ta(() => {
        this.windowResize();
      }, 200)),
      (this.selectionChangeDebounced = Ta(() => {
        this.selectionChanged();
      }, km)),
      (this.documentTouchedListener = (e) => {
        this.documentTouched(e);
      });
  }
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl",
    };
  }
  get contentRect() {
    if (this.contentRectCache !== null) return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${rt.CSS.content}`);
    return e
      ? ((this.contentRectCache = e.getBoundingClientRect()),
        this.contentRectCache)
      : { width: 650, left: 0, right: 0 };
  }
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  toggleReadOnly(e) {
    e
      ? this.unbindReadOnlySensitiveListeners()
      : window.requestIdleCallback(
          () => {
            this.bindReadOnlySensitiveListeners();
          },
          { timeout: 2e3 },
        );
  }
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: r } = this.Editor;
    return !!(t.opened || r.opened || e.toolbox.opened);
  }
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus()
      ? !0
      : Object.entries(this.Editor)
          .filter(([e, t]) => t.flipper instanceof pr)
          .some(([e, t]) => t.flipper.hasFocus());
  }
  destroy() {
    (this.nodes.holder.innerHTML = ""),
      this.unbindReadOnlyInsensitiveListeners();
  }
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: r } = this.Editor;
    t.close(), r.close(), e.toolbox.close();
  }
  setIsMobile() {
    const e = window.innerWidth < Wl;
    e !== this.isMobile &&
      this.eventsDispatcher.emit(wo, { isEnabled: this.isMobile }),
      (this.isMobile = e);
  }
  make() {
    (this.nodes.holder = E.getHolder(this.config.holder)),
      (this.nodes.wrapper = E.make("div", [
        this.CSS.editorWrapper,
        ...(this.isRtl ? [this.CSS.editorRtlFix] : []),
      ])),
      (this.nodes.redactor = E.make("div", this.CSS.editorZone)),
      this.nodes.holder.offsetWidth < this.contentRect.width &&
        this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),
      (this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px"),
      this.nodes.wrapper.appendChild(this.nodes.redactor),
      this.nodes.holder.appendChild(this.nodes.wrapper),
      this.bindReadOnlyInsensitiveListeners();
  }
  loadStyles() {
    const e = "editor-js-styles";
    if (E.get(e)) return;
    const t = E.make("style", null, { id: e, textContent: Dm.toString() });
    this.config.style &&
      !Pe(this.config.style) &&
      this.config.style.nonce &&
      t.setAttribute("nonce", this.config.style.nonce),
      E.prepend(document.head, t);
  }
  bindReadOnlyInsensitiveListeners() {
    this.listeners.on(
      document,
      "selectionchange",
      this.selectionChangeDebounced,
    ),
      this.listeners.on(window, "resize", this.resizeDebouncer, {
        passive: !0,
      }),
      this.listeners.on(
        this.nodes.redactor,
        "mousedown",
        this.documentTouchedListener,
        { capture: !0, passive: !0 },
      ),
      this.listeners.on(
        this.nodes.redactor,
        "touchstart",
        this.documentTouchedListener,
        { capture: !0, passive: !0 },
      );
  }
  unbindReadOnlyInsensitiveListeners() {
    this.listeners.off(
      document,
      "selectionchange",
      this.selectionChangeDebounced,
    ),
      this.listeners.off(window, "resize", this.resizeDebouncer),
      this.listeners.off(
        this.nodes.redactor,
        "mousedown",
        this.documentTouchedListener,
      ),
      this.listeners.off(
        this.nodes.redactor,
        "touchstart",
        this.documentTouchedListener,
      );
  }
  bindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "click",
      (e) => {
        this.redactorClicked(e);
      },
      !1,
    ),
      this.readOnlyMutableListeners.on(
        document,
        "keydown",
        (e) => {
          this.documentKeydown(e);
        },
        !0,
      ),
      this.readOnlyMutableListeners.on(
        document,
        "mousedown",
        (e) => {
          this.documentClicked(e);
        },
        !0,
      ),
      this.watchBlockHoveredEvents(),
      this.enableInputsEmptyMark();
  }
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(
      this.nodes.redactor,
      "mousemove",
      fn((t) => {
        const r = t.target.closest(".ce-block");
        this.Editor.BlockSelection.anyBlockSelected ||
          (r &&
            e !== r &&
            ((e = r),
            this.eventsDispatcher.emit(vc, {
              block: this.Editor.BlockManager.getBlockByChildNode(r),
            })));
      }, 20),
      { passive: !0 },
    );
  }
  unbindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.clearAll();
  }
  windowResize() {
    (this.contentRectCache = null), this.setIsMobile();
  }
  documentKeydown(e) {
    switch (e.keyCode) {
      case j.ENTER:
        this.enterPressed(e);
        break;
      case j.BACKSPACE:
      case j.DELETE:
        this.backspacePressed(e);
        break;
      case j.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager,
      r = e.target.closest(`.${this.CSS.editorWrapper}`),
      n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && r === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    r ||
      (t && n) ||
      (this.Editor.BlockManager.unsetCurrentBlock(),
      this.Editor.Toolbar.close());
  }
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: r, Caret: n } = this.Editor;
    if (r.anyBlockSelected && !A.isSelectionExists) {
      const i = t.removeSelectedBlocks(),
        s = t.insertDefaultBlockAtIndex(i, !0);
      n.setToBlock(s, n.positions.START),
        r.clearSelection(e),
        e.preventDefault(),
        e.stopPropagation(),
        e.stopImmediatePropagation();
    }
  }
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e),
      this.Editor.Toolbar.toolbox.opened
        ? (this.Editor.Toolbar.toolbox.close(),
          this.Editor.Caret.setToBlock(
            this.Editor.BlockManager.currentBlock,
            this.Editor.Caret.positions.END,
          ))
        : this.Editor.BlockSettings.opened
          ? this.Editor.BlockSettings.close()
          : this.Editor.InlineToolbar.opened
            ? this.Editor.InlineToolbar.close()
            : this.Editor.Toolbar.close();
  }
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: r } = this.Editor;
    if (this.someToolbarOpened) return;
    const n = t.currentBlockIndex >= 0;
    if (r.anyBlockSelected && !A.isSelectionExists) {
      r.clearSelection(e),
        e.preventDefault(),
        e.stopImmediatePropagation(),
        e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && n && e.target.tagName === "BODY") {
      const i = this.Editor.BlockManager.insert();
      e.preventDefault(),
        this.Editor.Caret.setToBlock(i),
        this.Editor.Toolbar.moveAndOpen(i);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  documentClicked(e) {
    var t, r;
    if (!e.isTrusted) return;
    const n = e.target;
    this.nodes.holder.contains(n) ||
      A.isAtEditor ||
      (this.Editor.BlockManager.unsetCurrentBlock(),
      this.Editor.Toolbar.close());
    const i =
        (t = this.Editor.BlockSettings.nodes.wrapper) == null
          ? void 0
          : t.contains(n),
      s =
        (r = this.Editor.Toolbar.nodes.settingsToggler) == null
          ? void 0
          : r.contains(n),
      a = i || s;
    if (this.Editor.BlockSettings.opened && !a) {
      this.Editor.BlockSettings.close();
      const l = this.Editor.BlockManager.getBlockByChildNode(n);
      this.Editor.Toolbar.moveAndOpen(l);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const r = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX,
        n = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(r, n);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() ||
        this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.ReadOnly.isEnabled || this.Editor.Toolbar.moveAndOpen();
  }
  redactorClicked(e) {
    if (!A.isCollapsed) return;
    const t = e.target,
      r = e.metaKey || e.ctrlKey;
    if (E.isAnchor(t) && r) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const n = t.getAttribute("href"),
        i = cp(n);
      up(i);
      return;
    }
    this.processBottomZoneClick(e);
  }
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1),
      r = E.offset(t.holder).bottom,
      n = e.pageY,
      { BlockSelection: i } = this.Editor;
    if (
      e.target instanceof Element &&
      e.target.isEqualNode(this.nodes.redactor) &&
      !i.anyBlockSelected &&
      r < n
    ) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: s, Caret: a, Toolbar: l } = this.Editor;
      (!s.lastBlock.tool.isDefault || !s.lastBlock.isEmpty) && s.insertAtEnd(),
        a.setToTheLastBlock(),
        l.moveAndOpen(s.lastBlock);
    }
  }
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor,
      r = A.anchorElement;
    if (
      (e.isCrossBlockSelectionStarted &&
        t.anyBlockSelected &&
        A.get().removeAllRanges(),
      !r)
    ) {
      A.range || this.Editor.InlineToolbar.close();
      return;
    }
    const n = r.closest(`.${rt.CSS.content}`);
    ((n === null ||
      n.closest(`.${A.CSS.editorWrapper}`) !== this.nodes.wrapper) &&
      (this.Editor.InlineToolbar.containsNode(r) ||
        this.Editor.InlineToolbar.close(),
      r.dataset.inlineToolbar !== "true")) ||
      (this.Editor.BlockManager.currentBlock ||
        this.Editor.BlockManager.setCurrentBlockByChildNode(r),
      this.Editor.InlineToolbar.tryToShow(!0));
  }
  enableInputsEmptyMark() {
    function e(t) {
      const r = t.target;
      ql(r);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e),
      this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e),
      this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
}
const Hm = {
  BlocksAPI: xp,
  CaretAPI: Ep,
  EventsAPI: _p,
  I18nAPI: Sp,
  API: Tp,
  InlineToolbarAPI: Op,
  ListenersAPI: Bp,
  NotifierAPI: Pp,
  ReadOnlyAPI: Np,
  SanitizerAPI: Fp,
  SaverAPI: Up,
  SelectionAPI: zp,
  ToolsAPI: Wp,
  StylesAPI: qp,
  ToolbarAPI: Vp,
  TooltipAPI: Zp,
  UiAPI: Jp,
  BlockSettings: _f,
  Toolbar: Pf,
  InlineToolbar: Nf,
  BlockEvents: hm,
  BlockManager: gm,
  BlockSelection: mm,
  Caret: vm,
  CrossBlockSelection: bm,
  DragNDrop: ym,
  ModificationsObserver: xm,
  Paste: Cm,
  ReadOnly: Em,
  RectangleSelection: _m,
  Renderer: Sm,
  Saver: Tm,
  Tools: Qc,
  UI: $m,
};
class Fm {
  constructor(e) {
    (this.moduleInstances = {}), (this.eventsDispatcher = new Mo());
    let t, r;
    (this.isReady = new Promise((n, i) => {
      (t = n), (r = i);
    })),
      Promise.resolve()
        .then(async () => {
          (this.configuration = e),
            this.validate(),
            this.init(),
            await this.start(),
            await this.render();
          const {
            BlockManager: n,
            Caret: i,
            UI: s,
            ModificationsObserver: a,
          } = this.moduleInstances;
          s.checkEmptiness(),
            a.enable(),
            this.configuration.autofocus === !0 &&
              this.configuration.readOnly !== !0 &&
              i.setToBlock(n.blocks[0], i.positions.START),
            t();
        })
        .catch((n) => {
          z(`Editor.js is not ready because of ${n}`, "error"), r(n);
        });
  }
  set configuration(e) {
    var t, r;
    le(e) ? (this.config = { ...e }) : (this.config = { holder: e }),
      mn(!!this.config.holderId, "config.holderId", "config.holder"),
      this.config.holderId &&
        !this.config.holder &&
        ((this.config.holder = this.config.holderId),
        (this.config.holderId = null)),
      this.config.holder == null && (this.config.holder = "editorjs"),
      this.config.logLevel || (this.config.logLevel = Fl.VERBOSE),
      rp(this.config.logLevel),
      mn(
        !!this.config.initialBlock,
        "config.initialBlock",
        "config.defaultBlock",
      ),
      (this.config.defaultBlock =
        this.config.defaultBlock || this.config.initialBlock || "paragraph"),
      (this.config.minHeight =
        this.config.minHeight !== void 0 ? this.config.minHeight : 300);
    const n = { type: this.config.defaultBlock, data: {} };
    (this.config.placeholder = this.config.placeholder || !1),
      (this.config.sanitizer = this.config.sanitizer || {
        p: !0,
        b: !0,
        a: !0,
      }),
      (this.config.hideToolbar = this.config.hideToolbar
        ? this.config.hideToolbar
        : !1),
      (this.config.tools = this.config.tools || {}),
      (this.config.i18n = this.config.i18n || {}),
      (this.config.data = this.config.data || { blocks: [] }),
      (this.config.onReady = this.config.onReady || (() => {})),
      (this.config.onChange = this.config.onChange || (() => {})),
      (this.config.inlineToolbar =
        this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0),
      (Pe(this.config.data) ||
        !this.config.data.blocks ||
        this.config.data.blocks.length === 0) &&
        (this.config.data = { blocks: [n] }),
      (this.config.readOnly = this.config.readOnly || !1),
      (t = this.config.i18n) != null &&
        t.messages &&
        ge.setDictionary(this.config.i18n.messages),
      (this.config.i18n.direction =
        ((r = this.config.i18n) == null ? void 0 : r.direction) || "ltr");
  }
  get configuration() {
    return this.config;
  }
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error(
        "«holderId» and «holder» param can't assign at the same time.",
      );
    if (st(t) && !E.get(t))
      throw Error(
        `element with ID «${t}» is missing. Pass correct holder's ID.`,
      );
    if (t && le(t) && !E.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  init() {
    this.constructModules(), this.configureModules();
  }
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly",
    ].reduce(
      (e, t) =>
        e.then(async () => {
          try {
            await this.moduleInstances[t].prepare();
          } catch (r) {
            if (r instanceof Kl) throw new Error(r.message);
            z(`Module ${t} was skipped because of %o`, "warn", r);
          }
        }),
      Promise.resolve(),
    );
  }
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  constructModules() {
    Object.entries(Hm).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher,
        });
      } catch (r) {
        z("[constructModules]", `Module ${e} skipped because`, "error", r);
      }
    });
  }
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) &&
        (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  getModulesDiff(e) {
    const t = {};
    for (const r in this.moduleInstances)
      r !== e && (t[r] = this.moduleInstances[r]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */ class Um {
  static get version() {
    return "2.31.0-rc.7";
  }
  constructor(e) {
    let t = () => {};
    le(e) && Q(e.onReady) && (t = e.onReady);
    const r = new Fm(e);
    this.isReady = r.isReady.then(() => {
      this.exportAPI(r), t();
    });
  }
  exportAPI(e) {
    const t = ["configuration"],
      r = () => {
        Object.values(e.moduleInstances).forEach((n) => {
          Q(n.destroy) && n.destroy(), n.listeners.removeAll();
        }),
          Gp(),
          (e = null);
        for (const n in this)
          Object.prototype.hasOwnProperty.call(this, n) && delete this[n];
        Object.setPrototypeOf(this, null);
      };
    t.forEach((n) => {
      this[n] = e[n];
    }),
      (this.destroy = r),
      Object.setPrototypeOf(this, e.moduleInstances.API.methods),
      delete this.exportAPI,
      Object.entries({
        blocks: { clear: "clear", render: "render" },
        caret: { focus: "focus" },
        events: { on: "on", off: "off", emit: "emit" },
        saver: { save: "save" },
      }).forEach(([n, i]) => {
        Object.entries(i).forEach(([s, a]) => {
          this[a] = e.moduleInstances.API.methods[n][s];
        });
      });
  }
}
function zm(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var tn = { exports: {} },
  Da;
function Wm() {
  return (
    Da ||
      ((Da = 1),
      (function (o, e) {
        (function (t, r) {
          o.exports = r();
        })(self, () =>
          (() => {
            var t = {
                523: (s, a, l) => {
                  l.d(a, { A: () => p });
                  var c = l(601),
                    d = l.n(c),
                    h = l(314),
                    u = l.n(h)()(d());
                  u.push([
                    s.id,
                    `.ce-block--drop-target .ce-block__content:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -20px;
  margin-top: -1px;
  height: 8px;
  width: 8px;
  border: solid #a0a0a0;
  border-width: 1px 1px 0 0;
  -webkit-transform-origin: right;
  transform-origin: right;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.ce-block--drop-target .ce-block__content:after {
  background: none;
}
`,
                    "",
                  ]);
                  const p = u;
                },
                314: (s) => {
                  s.exports = function (a) {
                    var l = [];
                    return (
                      (l.toString = function () {
                        return this.map(function (c) {
                          var d = "",
                            h = c[5] !== void 0;
                          return (
                            c[4] && (d += "@supports (".concat(c[4], ") {")),
                            c[2] && (d += "@media ".concat(c[2], " {")),
                            h &&
                              (d += "@layer".concat(
                                c[5].length > 0 ? " ".concat(c[5]) : "",
                                " {",
                              )),
                            (d += a(c)),
                            h && (d += "}"),
                            c[2] && (d += "}"),
                            c[4] && (d += "}"),
                            d
                          );
                        }).join("");
                      }),
                      (l.i = function (c, d, h, u, p) {
                        typeof c == "string" && (c = [[null, c, void 0]]);
                        var g = {};
                        if (h)
                          for (var f = 0; f < this.length; f++) {
                            var m = this[f][0];
                            m != null && (g[m] = !0);
                          }
                        for (var k = 0; k < c.length; k++) {
                          var v = [].concat(c[k]);
                          (h && g[v[0]]) ||
                            (p !== void 0 &&
                              (v[5] === void 0 ||
                                (v[1] = "@layer"
                                  .concat(
                                    v[5].length > 0 ? " ".concat(v[5]) : "",
                                    " {",
                                  )
                                  .concat(v[1], "}")),
                              (v[5] = p)),
                            d &&
                              (v[2] &&
                                (v[1] = "@media "
                                  .concat(v[2], " {")
                                  .concat(v[1], "}")),
                              (v[2] = d)),
                            u &&
                              (v[4]
                                ? ((v[1] = "@supports ("
                                    .concat(v[4], ") {")
                                    .concat(v[1], "}")),
                                  (v[4] = u))
                                : (v[4] = "".concat(u))),
                            l.push(v));
                        }
                      }),
                      l
                    );
                  };
                },
                601: (s) => {
                  s.exports = function (a) {
                    return a[1];
                  };
                },
                72: (s) => {
                  var a = [];
                  function l(h) {
                    for (var u = -1, p = 0; p < a.length; p++)
                      if (a[p].identifier === h) {
                        u = p;
                        break;
                      }
                    return u;
                  }
                  function c(h, u) {
                    for (var p = {}, g = [], f = 0; f < h.length; f++) {
                      var m = h[f],
                        k = u.base ? m[0] + u.base : m[0],
                        v = p[k] || 0,
                        w = "".concat(k, " ").concat(v);
                      p[k] = v + 1;
                      var b = l(w),
                        y = {
                          css: m[1],
                          media: m[2],
                          sourceMap: m[3],
                          supports: m[4],
                          layer: m[5],
                        };
                      if (b !== -1) a[b].references++, a[b].updater(y);
                      else {
                        var _ = d(y, u);
                        (u.byIndex = f),
                          a.splice(f, 0, {
                            identifier: w,
                            updater: _,
                            references: 1,
                          });
                      }
                      g.push(w);
                    }
                    return g;
                  }
                  function d(h, u) {
                    var p = u.domAPI(u);
                    return (
                      p.update(h),
                      function (g) {
                        if (g) {
                          if (
                            g.css === h.css &&
                            g.media === h.media &&
                            g.sourceMap === h.sourceMap &&
                            g.supports === h.supports &&
                            g.layer === h.layer
                          )
                            return;
                          p.update((h = g));
                        } else p.remove();
                      }
                    );
                  }
                  s.exports = function (h, u) {
                    var p = c((h = h || []), (u = u || {}));
                    return function (g) {
                      g = g || [];
                      for (var f = 0; f < p.length; f++) {
                        var m = l(p[f]);
                        a[m].references--;
                      }
                      for (var k = c(g, u), v = 0; v < p.length; v++) {
                        var w = l(p[v]);
                        a[w].references === 0 &&
                          (a[w].updater(), a.splice(w, 1));
                      }
                      p = k;
                    };
                  };
                },
                659: (s) => {
                  var a = {};
                  s.exports = function (l, c) {
                    var d = (function (h) {
                      if (a[h] === void 0) {
                        var u = document.querySelector(h);
                        if (
                          window.HTMLIFrameElement &&
                          u instanceof window.HTMLIFrameElement
                        )
                          try {
                            u = u.contentDocument.head;
                          } catch {
                            u = null;
                          }
                        a[h] = u;
                      }
                      return a[h];
                    })(l);
                    if (!d)
                      throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                      );
                    d.appendChild(c);
                  };
                },
                540: (s) => {
                  s.exports = function (a) {
                    var l = document.createElement("style");
                    return (
                      a.setAttributes(l, a.attributes),
                      a.insert(l, a.options),
                      l
                    );
                  };
                },
                56: (s, a, l) => {
                  s.exports = function (c) {
                    var d = l.nc;
                    d && c.setAttribute("nonce", d);
                  };
                },
                825: (s) => {
                  s.exports = function (a) {
                    if (typeof document > "u")
                      return { update: function () {}, remove: function () {} };
                    var l = a.insertStyleElement(a);
                    return {
                      update: function (c) {
                        (function (d, h, u) {
                          var p = "";
                          u.supports &&
                            (p += "@supports (".concat(u.supports, ") {")),
                            u.media && (p += "@media ".concat(u.media, " {"));
                          var g = u.layer !== void 0;
                          g &&
                            (p += "@layer".concat(
                              u.layer.length > 0 ? " ".concat(u.layer) : "",
                              " {",
                            )),
                            (p += u.css),
                            g && (p += "}"),
                            u.media && (p += "}"),
                            u.supports && (p += "}");
                          var f = u.sourceMap;
                          f &&
                            typeof btoa < "u" &&
                            (p += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(f))),
                              ),
                              " */",
                            )),
                            h.styleTagTransform(p, d, h.options);
                        })(l, a, c);
                      },
                      remove: function () {
                        (function (c) {
                          if (c.parentNode === null) return !1;
                          c.parentNode.removeChild(c);
                        })(l);
                      },
                    };
                  };
                },
                113: (s) => {
                  s.exports = function (a, l) {
                    if (l.styleSheet) l.styleSheet.cssText = a;
                    else {
                      for (; l.firstChild; ) l.removeChild(l.firstChild);
                      l.appendChild(document.createTextNode(a));
                    }
                  };
                },
              },
              r = {};
            function n(s) {
              var a = r[s];
              if (a !== void 0) return a.exports;
              var l = (r[s] = { id: s, exports: {} });
              return t[s](l, l.exports, n), l.exports;
            }
            (n.n = (s) => {
              var a = s && s.__esModule ? () => s.default : () => s;
              return n.d(a, { a }), a;
            }),
              (n.d = (s, a) => {
                for (var l in a)
                  n.o(a, l) &&
                    !n.o(s, l) &&
                    Object.defineProperty(s, l, { enumerable: !0, get: a[l] });
              }),
              (n.o = (s, a) => Object.prototype.hasOwnProperty.call(s, a)),
              (n.nc = void 0);
            var i = {};
            return (
              (() => {
                n.d(i, { default: () => B });
                var s = n(72),
                  a = n.n(s),
                  l = n(825),
                  c = n.n(l),
                  d = n(659),
                  h = n.n(d),
                  u = n(56),
                  p = n.n(u),
                  g = n(540),
                  f = n.n(g),
                  m = n(113),
                  k = n.n(m),
                  v = n(523),
                  w = {};
                function b(C) {
                  return (
                    (b =
                      typeof Symbol == "function" &&
                      typeof Symbol.iterator == "symbol"
                        ? function (x) {
                            return typeof x;
                          }
                        : function (x) {
                            return x &&
                              typeof Symbol == "function" &&
                              x.constructor === Symbol &&
                              x !== Symbol.prototype
                              ? "symbol"
                              : typeof x;
                          }),
                    b(C)
                  );
                }
                function y(C, x) {
                  for (var O = 0; O < x.length; O++) {
                    var S = x[O];
                    (S.enumerable = S.enumerable || !1),
                      (S.configurable = !0),
                      "value" in S && (S.writable = !0),
                      Object.defineProperty(C, _(S.key), S);
                  }
                }
                function _(C) {
                  var x = (function (O, S) {
                    if (b(O) != "object" || !O) return O;
                    var M = O[Symbol.toPrimitive];
                    if (M !== void 0) {
                      var L = M.call(O, "string");
                      if (b(L) != "object") return L;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return String(O);
                  })(C);
                  return b(x) == "symbol" ? x : x + "";
                }
                (w.styleTagTransform = k()),
                  (w.setAttributes = p()),
                  (w.insert = h().bind(null, "head")),
                  (w.domAPI = c()),
                  (w.insertStyleElement = f()),
                  a()(v.A, w),
                  v.A && v.A.locals && v.A.locals;
                var B = (function () {
                  return (
                    (C = function S(M, L) {
                      var R = M.configuration,
                        N = M.blocks,
                        F = M.toolbar,
                        Ne = M.save;
                      (function (ue, Ae) {
                        if (!(ue instanceof Ae))
                          throw new TypeError(
                            "Cannot call a class as a function",
                          );
                      })(this, S),
                        (this.toolbar = F),
                        (this.borderStyle = L || "1px dashed #aaa"),
                        (this.api = N),
                        (this.holder =
                          typeof R.holder == "string"
                            ? document.getElementById(R.holder)
                            : R.holder),
                        (this.readOnly = R.readOnly),
                        (this.startBlock = null),
                        (this.endBlock = null),
                        (this.save = Ne),
                        this.setDragListener(),
                        this.setDropListener();
                    }),
                    (O = [
                      {
                        key: "isReadOnlySupported",
                        get: function () {
                          return !0;
                        },
                      },
                    ]),
                    (x = [
                      {
                        key: "setElementCursor",
                        value: function (S) {
                          if (S) {
                            var M = document.createRange(),
                              L = window.getSelection();
                            M.setStart(S.childNodes[0], 0),
                              M.collapse(!0),
                              L.removeAllRanges(),
                              L.addRange(M),
                              S.focus();
                          }
                        },
                      },
                      {
                        key: "setDragListener",
                        value: function () {
                          var S = this;
                          if (!this.readOnly) {
                            var M = this.holder.querySelector(
                              ".ce-toolbar__settings-btn",
                            );
                            if (M) this.initializeDragListener(M);
                            else {
                              var L = new MutationObserver(function (R, N) {
                                var F = S.holder.querySelector(
                                  ".ce-toolbar__settings-btn",
                                );
                                F &&
                                  (S.initializeDragListener(F), N.disconnect());
                              });
                              L.observe(this.holder, {
                                childList: !0,
                                subtree: !0,
                              });
                            }
                          }
                        },
                      },
                      {
                        key: "initializeDragListener",
                        value: function (S) {
                          var M = this;
                          S.setAttribute("draggable", "true"),
                            S.addEventListener("dragstart", function () {
                              M.startBlock = M.api.getCurrentBlockIndex();
                            }),
                            S.addEventListener("drag", function () {
                              if ((M.toolbar.close(), !M.isTheOnlyBlock())) {
                                var L = M.holder.querySelectorAll(".ce-block"),
                                  R = M.holder.querySelector(
                                    ".ce-block--drop-target",
                                  );
                                M.setElementCursor(R), M.setBorderBlocks(L, R);
                              }
                            });
                        },
                      },
                      {
                        key: "setBorderBlocks",
                        value: function (S, M) {
                          var L = this;
                          Object.values(S).forEach(function (R) {
                            var N = R.querySelector(".ce-block__content");
                            R !== M
                              ? (N.style.removeProperty("border-top"),
                                N.style.removeProperty("border-bottom"))
                              : Object.keys(S).find(function (F) {
                                    return S[F] === M;
                                  }) > L.startBlock
                                ? (N.style.borderBottom = L.borderStyle)
                                : (N.style.borderTop = L.borderStyle);
                          });
                        },
                      },
                      {
                        key: "setDropListener",
                        value: function () {
                          var S = this;
                          document.addEventListener("drop", function (M) {
                            var L = M.target;
                            if (S.holder.contains(L) && S.startBlock !== null) {
                              var R = S.getDropTarget(L);
                              if (R) {
                                var N = R.querySelector(".ce-block__content");
                                N.style.removeProperty("border-top"),
                                  N.style.removeProperty("border-bottom"),
                                  (S.endBlock = S.getTargetPosition(R)),
                                  S.moveBlocks();
                              }
                            }
                            S.startBlock = null;
                          });
                        },
                      },
                      {
                        key: "getDropTarget",
                        value: function (S) {
                          return S.classList.contains("ce-block")
                            ? S
                            : S.closest(".ce-block");
                        },
                      },
                      {
                        key: "getTargetPosition",
                        value: function (S) {
                          return Array.from(S.parentNode.children).indexOf(S);
                        },
                      },
                      {
                        key: "isTheOnlyBlock",
                        value: function () {
                          return this.api.getBlocksCount() === 1;
                        },
                      },
                      {
                        key: "moveBlocks",
                        value: function () {
                          this.isTheOnlyBlock() ||
                            this.api.move(this.endBlock, this.startBlock);
                        },
                      },
                    ]) && y(C.prototype, x),
                    O && y(C, O),
                    Object.defineProperty(C, "prototype", { writable: !1 }),
                    C
                  );
                  var C, x, O;
                })();
              })(),
              i.default
            );
          })(),
        );
      })(tn)),
    tn.exports
  );
}
var qm = Wm();
const Vm = zm(qm);
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}",
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Ym =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>',
  Km =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>',
  Xm =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>',
  Gm =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>',
  Zm =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>',
  Jm =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>',
  Qm =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */ let ev = class {
  constructor({ data: e, config: t, api: r, readOnly: n }) {
    (this.api = r),
      (this.readOnly = n),
      (this._settings = t),
      (this._data = this.normalizeData(e)),
      (this._element = this.getTag());
  }
  get _CSS() {
    return { block: this.api.styles.block, wrapper: "ce-header" };
  }
  isHeaderData(e) {
    return e.text !== void 0;
  }
  normalizeData(e) {
    const t = { text: "", level: this.defaultLevel.number };
    return (
      this.isHeaderData(e) &&
        ((t.text = e.text || ""),
        e.level !== void 0 &&
          !isNaN(parseInt(e.level.toString())) &&
          (t.level = parseInt(e.level.toString()))),
      t
    );
  }
  render() {
    return this._element;
  }
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div"),
    }));
  }
  setLevel(e) {
    this.data = { level: e, text: this.data.text };
  }
  merge(e) {
    this._element.insertAdjacentHTML("beforeend", e.text);
  }
  validate(e) {
    return e.text.trim() !== "";
  }
  save(e) {
    return { text: e.innerHTML, level: this.currentLevel.number };
  }
  static get conversionConfig() {
    return { export: "text", import: "text" };
  }
  static get sanitize() {
    return { level: !1, text: {} };
  }
  static get isReadOnlySupported() {
    return !0;
  }
  get data() {
    return (
      (this._data.text = this._element.innerHTML),
      (this._data.level = this.currentLevel.number),
      this._data
    );
  }
  set data(e) {
    if (
      ((this._data = this.normalizeData(e)),
      e.level !== void 0 && this._element.parentNode)
    ) {
      const t = this.getTag();
      (t.innerHTML = this._element.innerHTML),
        this._element.parentNode.replaceChild(t, this._element),
        (this._element = t);
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  getTag() {
    const e = document.createElement(this.currentLevel.tag);
    return (
      (e.innerHTML = this._data.text || ""),
      e.classList.add(this._CSS.wrapper),
      (e.contentEditable = this.readOnly ? "false" : "true"),
      (e.dataset.placeholder = this.api.i18n.t(
        this._settings.placeholder || "",
      )),
      e
    );
  }
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find(
        (t) => t.number === this._settings.defaultLevel,
      );
      if (e) return e;
      console.warn(
        "(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels",
      );
    }
    return this.levels[1];
  }
  get levels() {
    const e = [
      { number: 1, tag: "H1", svg: Ym },
      { number: 2, tag: "H2", svg: Km },
      { number: 3, tag: "H3", svg: Xm },
      { number: 4, tag: "H4", svg: Gm },
      { number: 5, tag: "H5", svg: Zm },
      { number: 6, tag: "H6", svg: Jm },
    ];
    return this._settings.levels
      ? e.filter((t) => this._settings.levels.includes(t.number))
      : e;
  }
  onPaste(e) {
    const t = e.detail;
    if ("data" in t) {
      const r = t.data;
      let n = this.defaultLevel.number;
      switch (r.tagName) {
        case "H1":
          n = 1;
          break;
        case "H2":
          n = 2;
          break;
        case "H3":
          n = 3;
          break;
        case "H4":
          n = 4;
          break;
        case "H5":
          n = 5;
          break;
        case "H6":
          n = 6;
          break;
      }
      this._settings.levels &&
        (n = this._settings.levels.reduce((i, s) =>
          Math.abs(s - n) < Math.abs(i - n) ? s : i,
        )),
        (this.data = { level: n, text: r.innerHTML });
    }
  }
  static get pasteConfig() {
    return { tags: ["H1", "H2", "H3", "H4", "H5", "H6"] };
  }
  static get toolbox() {
    return { icon: Qm, title: "Heading" };
  }
};
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          '.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"•"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}',
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const tv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>',
  $a =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',
  Ha =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>',
  Fa =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>',
  ov =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
  rv =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>',
  nv =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
  iv =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
  sv =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>',
  av =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var mr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function lv(o) {
  if (o.__esModule) return o;
  var e = o.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(o).forEach(function (r) {
      var n = Object.getOwnPropertyDescriptor(o, r);
      Object.defineProperty(
        t,
        r,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return o[r];
              },
            },
      );
    }),
    t
  );
}
var G = {},
  Fi = {},
  Ui = {};
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.allInputsSelector = cv;
function cv() {
  var o = ["text", "password", "email", "number", "search", "tel", "url"];
  return (
    "[contenteditable=true], textarea, input:not([type]), " +
    o
      .map(function (e) {
        return 'input[type="'.concat(e, '"]');
      })
      .join(", ")
  );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.allInputsSelector = void 0);
  var e = Ui;
  Object.defineProperty(o, "allInputsSelector", {
    enumerable: !0,
    get: function () {
      return e.allInputsSelector;
    },
  });
})(Fi);
var At = {},
  zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.isNativeInput = dv;
function dv(o) {
  var e = ["INPUT", "TEXTAREA"];
  return o && o.tagName ? e.includes(o.tagName) : !1;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isNativeInput = void 0);
  var e = zi;
  Object.defineProperty(o, "isNativeInput", {
    enumerable: !0,
    get: function () {
      return e.isNativeInput;
    },
  });
})(At);
var ed = {},
  Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.append = uv;
function uv(o, e) {
  Array.isArray(e)
    ? e.forEach(function (t) {
        o.appendChild(t);
      })
    : o.appendChild(e);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.append = void 0);
  var e = Wi;
  Object.defineProperty(o, "append", {
    enumerable: !0,
    get: function () {
      return e.append;
    },
  });
})(ed);
var qi = {},
  Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.blockElements = hv;
function hv() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video",
  ];
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.blockElements = void 0);
  var e = Vi;
  Object.defineProperty(o, "blockElements", {
    enumerable: !0,
    get: function () {
      return e.blockElements;
    },
  });
})(qi);
var td = {},
  Yi = {};
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.calculateBaseline = pv;
function pv(o) {
  var e = window.getComputedStyle(o),
    t = parseFloat(e.fontSize),
    r = parseFloat(e.lineHeight) || t * 1.2,
    n = parseFloat(e.paddingTop),
    i = parseFloat(e.borderTopWidth),
    s = parseFloat(e.marginTop),
    a = t * 0.8,
    l = (r - t) / 2,
    c = s + i + n + l + a;
  return c;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.calculateBaseline = void 0);
  var e = Yi;
  Object.defineProperty(o, "calculateBaseline", {
    enumerable: !0,
    get: function () {
      return e.calculateBaseline;
    },
  });
})(td);
var od = {},
  Ki = {},
  Xi = {},
  Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.isContentEditable = fv;
function fv(o) {
  return o.contentEditable === "true";
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isContentEditable = void 0);
  var e = Gi;
  Object.defineProperty(o, "isContentEditable", {
    enumerable: !0,
    get: function () {
      return e.isContentEditable;
    },
  });
})(Xi);
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.canSetCaret = vv;
var gv = At,
  mv = Xi;
function vv(o) {
  var e = !0;
  if ((0, gv.isNativeInput)(o))
    switch (o.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else e = (0, mv.isContentEditable)(o);
  return e;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.canSetCaret = void 0);
  var e = Ki;
  Object.defineProperty(o, "canSetCaret", {
    enumerable: !0,
    get: function () {
      return e.canSetCaret;
    },
  });
})(od);
var Lr = {},
  Zi = {};
function bv(o, e, t) {
  const r = t.value !== void 0 ? "value" : "get",
    n = t[r],
    i = `#${e}Cache`;
  if (
    ((t[r] = function (...s) {
      return this[i] === void 0 && (this[i] = n.apply(this, s)), this[i];
    }),
    r === "get" && t.set)
  ) {
    const s = t.set;
    t.set = function (a) {
      delete o[i], s.apply(this, a);
    };
  }
  return t;
}
function rd() {
  const o = { win: !1, mac: !1, x11: !1, linux: !1 },
    e = Object.keys(o).find(
      (t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1,
    );
  return e !== void 0 && (o[e] = !0), o;
}
function Ji(o) {
  return (
    o != null && o !== "" && (typeof o != "object" || Object.keys(o).length > 0)
  );
}
function yv(o) {
  return !Ji(o);
}
const kv = () =>
  typeof window < "u" &&
  window.navigator !== null &&
  Ji(window.navigator.platform) &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1));
function wv(o) {
  const e = rd();
  return (
    (o = o
      .replace(/shift/gi, "⇧")
      .replace(/backspace/gi, "⌫")
      .replace(/enter/gi, "⏎")
      .replace(/up/gi, "↑")
      .replace(/left/gi, "→")
      .replace(/down/gi, "↓")
      .replace(/right/gi, "←")
      .replace(/escape/gi, "⎋")
      .replace(/insert/gi, "Ins")
      .replace(/delete/gi, "␡")
      .replace(/\+/gi, "+")),
    e.mac
      ? (o = o.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥"))
      : (o = o.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN")),
    o
  );
}
function xv(o) {
  return o[0].toUpperCase() + o.slice(1);
}
function Cv(o) {
  const e = document.createElement("div");
  (e.style.position = "absolute"),
    (e.style.left = "-999px"),
    (e.style.bottom = "-999px"),
    (e.innerHTML = o),
    document.body.appendChild(e);
  const t = window.getSelection(),
    r = document.createRange();
  if ((r.selectNode(e), t === null))
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(),
    t.addRange(r),
    document.execCommand("copy"),
    document.body.removeChild(e);
}
function Ev(o, e, t) {
  let r;
  return (...n) => {
    const i = this,
      s = () => {
        (r = void 0), t !== !0 && o.apply(i, n);
      },
      a = t === !0 && r !== void 0;
    window.clearTimeout(r), (r = window.setTimeout(s, e)), a && o.apply(i, n);
  };
}
function wt(o) {
  return Object.prototype.toString
    .call(o)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
function _v(o) {
  return wt(o) === "boolean";
}
function nd(o) {
  return wt(o) === "function" || wt(o) === "asyncfunction";
}
function Sv(o) {
  return nd(o) && /^\s*class\s+/.test(o.toString());
}
function Tv(o) {
  return wt(o) === "number";
}
function Ko(o) {
  return wt(o) === "object";
}
function Ov(o) {
  return Promise.resolve(o) === o;
}
function Bv(o) {
  return wt(o) === "string";
}
function Mv(o) {
  return wt(o) === "undefined";
}
function En(o, ...e) {
  if (!e.length) return o;
  const t = e.shift();
  if (Ko(o) && Ko(t))
    for (const r in t)
      Ko(t[r])
        ? (o[r] === void 0 && Object.assign(o, { [r]: {} }), En(o[r], t[r]))
        : Object.assign(o, { [r]: t[r] });
  return En(o, ...e);
}
function Iv(o, e, t) {
  const r = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  o && console.warn(r);
}
function Lv(o) {
  try {
    return new URL(o).href;
  } catch {}
  return o.substring(0, 2) === "//"
    ? window.location.protocol + o
    : window.location.origin + o;
}
function Pv(o) {
  return (
    (o > 47 && o < 58) ||
    o === 32 ||
    o === 13 ||
    o === 229 ||
    (o > 64 && o < 91) ||
    (o > 95 && o < 112) ||
    (o > 185 && o < 193) ||
    (o > 218 && o < 223)
  );
}
const Nv = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191,
  },
  Av = { LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4 };
class jv {
  constructor() {
    this.completed = Promise.resolve();
  }
  add(e) {
    return new Promise((t, r) => {
      this.completed = this.completed.then(e).then(t).catch(r);
    });
  }
}
function Rv(o, e, t = void 0) {
  let r,
    n,
    i,
    s = null,
    a = 0;
  t || (t = {});
  const l = function () {
    (a = t.leading === !1 ? 0 : Date.now()),
      (s = null),
      (i = o.apply(r, n)),
      s === null && (r = n = null);
  };
  return function () {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return (
      (r = this),
      (n = arguments),
      d <= 0 || d > e
        ? (s && (clearTimeout(s), (s = null)),
          (a = c),
          (i = o.apply(r, n)),
          s === null && (r = n = null))
        : !s && t.trailing !== !1 && (s = setTimeout(l, d)),
      i
    );
  };
}
const Dv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        PromiseQueue: jv,
        beautifyShortcut: wv,
        cacheable: bv,
        capitalize: xv,
        copyTextToClipboard: Cv,
        debounce: Ev,
        deepMerge: En,
        deprecationAssert: Iv,
        getUserOS: rd,
        getValidUrl: Lv,
        isBoolean: _v,
        isClass: Sv,
        isEmpty: yv,
        isFunction: nd,
        isIosDevice: kv,
        isNumber: Tv,
        isObject: Ko,
        isPrintableKey: Pv,
        isPromise: Ov,
        isString: Bv,
        isUndefined: Mv,
        keyCodes: Nv,
        mouseButtons: Av,
        notEmpty: Ji,
        throttle: Rv,
        typeOf: wt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qi = lv(Dv);
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.containsOnlyInlineElements = Fv;
var $v = Qi,
  Hv = qi;
function Fv(o) {
  var e;
  (0, $v.isString)(o)
    ? ((e = document.createElement("div")), (e.innerHTML = o))
    : (e = o);
  var t = function (r) {
    return (
      !(0, Hv.blockElements)().includes(r.tagName.toLowerCase()) &&
      Array.from(r.children).every(t)
    );
  };
  return Array.from(e.children).every(t);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.containsOnlyInlineElements = void 0);
  var e = Zi;
  Object.defineProperty(o, "containsOnlyInlineElements", {
    enumerable: !0,
    get: function () {
      return e.containsOnlyInlineElements;
    },
  });
})(Lr);
var id = {},
  es = {},
  Pr = {},
  ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.make = Uv;
function Uv(o, e, t) {
  var r;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var n = document.createElement(o);
  if (Array.isArray(e)) {
    var i = e.filter(function (a) {
      return a !== void 0;
    });
    (r = n.classList).add.apply(r, i);
  } else e !== null && n.classList.add(e);
  for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s]);
  return n;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.make = void 0);
  var e = ts;
  Object.defineProperty(o, "make", {
    enumerable: !0,
    get: function () {
      return e.make;
    },
  });
})(Pr);
Object.defineProperty(es, "__esModule", { value: !0 });
es.fragmentToString = Wv;
var zv = Pr;
function Wv(o) {
  var e = (0, zv.make)("div");
  return e.appendChild(o), e.innerHTML;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.fragmentToString = void 0);
  var e = es;
  Object.defineProperty(o, "fragmentToString", {
    enumerable: !0,
    get: function () {
      return e.fragmentToString;
    },
  });
})(id);
var sd = {},
  os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.getContentLength = Vv;
var qv = At;
function Vv(o) {
  var e, t;
  return (0, qv.isNativeInput)(o)
    ? o.value.length
    : o.nodeType === Node.TEXT_NODE
      ? o.length
      : (t =
            (e = o.textContent) === null || e === void 0
              ? void 0
              : e.length) !== null && t !== void 0
        ? t
        : 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getContentLength = void 0);
  var e = os;
  Object.defineProperty(o, "getContentLength", {
    enumerable: !0,
    get: function () {
      return e.getContentLength;
    },
  });
})(sd);
var rs = {},
  ns = {},
  Ua =
    (mr && mr.__spreadArray) ||
    function (o, e, t) {
      if (t || arguments.length === 2)
        for (var r = 0, n = e.length, i; r < n; r++)
          (i || !(r in e)) &&
            (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
      return o.concat(i || Array.prototype.slice.call(e));
    };
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.getDeepestBlockElements = ad;
var Yv = Lr;
function ad(o) {
  return (0, Yv.containsOnlyInlineElements)(o)
    ? [o]
    : Array.from(o.children).reduce(function (e, t) {
        return Ua(Ua([], e, !0), ad(t), !0);
      }, []);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getDeepestBlockElements = void 0);
  var e = ns;
  Object.defineProperty(o, "getDeepestBlockElements", {
    enumerable: !0,
    get: function () {
      return e.getDeepestBlockElements;
    },
  });
})(rs);
var ld = {},
  is = {},
  Nr = {},
  ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.isLineBreakTag = Kv;
function Kv(o) {
  return ["BR", "WBR"].includes(o.tagName);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isLineBreakTag = void 0);
  var e = ss;
  Object.defineProperty(o, "isLineBreakTag", {
    enumerable: !0,
    get: function () {
      return e.isLineBreakTag;
    },
  });
})(Nr);
var Ar = {},
  as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.isSingleTag = Xv;
function Xv(o) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR",
  ].includes(o.tagName);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isSingleTag = void 0);
  var e = as;
  Object.defineProperty(o, "isSingleTag", {
    enumerable: !0,
    get: function () {
      return e.isSingleTag;
    },
  });
})(Ar);
Object.defineProperty(is, "__esModule", { value: !0 });
is.getDeepestNode = cd;
var Gv = At,
  Zv = Nr,
  Jv = Ar;
function cd(o, e) {
  e === void 0 && (e = !1);
  var t = e ? "lastChild" : "firstChild",
    r = e ? "previousSibling" : "nextSibling";
  if (o.nodeType === Node.ELEMENT_NODE && o[t]) {
    var n = o[t];
    if (
      (0, Jv.isSingleTag)(n) &&
      !(0, Gv.isNativeInput)(n) &&
      !(0, Zv.isLineBreakTag)(n)
    )
      if (n[r]) n = n[r];
      else if (n.parentNode !== null && n.parentNode[r]) n = n.parentNode[r];
      else return n.parentNode;
    return cd(n, e);
  }
  return o;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getDeepestNode = void 0);
  var e = is;
  Object.defineProperty(o, "getDeepestNode", {
    enumerable: !0,
    get: function () {
      return e.getDeepestNode;
    },
  });
})(ld);
var dd = {},
  ls = {},
  Ro =
    (mr && mr.__spreadArray) ||
    function (o, e, t) {
      if (t || arguments.length === 2)
        for (var r = 0, n = e.length, i; r < n; r++)
          (i || !(r in e)) &&
            (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
      return o.concat(i || Array.prototype.slice.call(e));
    };
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.findAllInputs = rb;
var Qv = Lr,
  eb = rs,
  tb = Fi,
  ob = At;
function rb(o) {
  return Array.from(o.querySelectorAll((0, tb.allInputsSelector)())).reduce(
    function (e, t) {
      return (0, ob.isNativeInput)(t) || (0, Qv.containsOnlyInlineElements)(t)
        ? Ro(Ro([], e, !0), [t], !1)
        : Ro(Ro([], e, !0), (0, eb.getDeepestBlockElements)(t), !0);
    },
    [],
  );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.findAllInputs = void 0);
  var e = ls;
  Object.defineProperty(o, "findAllInputs", {
    enumerable: !0,
    get: function () {
      return e.findAllInputs;
    },
  });
})(dd);
var ud = {},
  cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.isCollapsedWhitespaces = nb;
function nb(o) {
  return !/[^\t\n\r ]/.test(o);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isCollapsedWhitespaces = void 0);
  var e = cs;
  Object.defineProperty(o, "isCollapsedWhitespaces", {
    enumerable: !0,
    get: function () {
      return e.isCollapsedWhitespaces;
    },
  });
})(ud);
var ds = {},
  us = {};
Object.defineProperty(us, "__esModule", { value: !0 });
us.isElement = sb;
var ib = Qi;
function sb(o) {
  return (0, ib.isNumber)(o)
    ? !1
    : !!o && !!o.nodeType && o.nodeType === Node.ELEMENT_NODE;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isElement = void 0);
  var e = us;
  Object.defineProperty(o, "isElement", {
    enumerable: !0,
    get: function () {
      return e.isElement;
    },
  });
})(ds);
var hd = {},
  hs = {},
  ps = {},
  fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.isLeaf = ab;
function ab(o) {
  return o === null ? !1 : o.childNodes.length === 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isLeaf = void 0);
  var e = fs;
  Object.defineProperty(o, "isLeaf", {
    enumerable: !0,
    get: function () {
      return e.isLeaf;
    },
  });
})(ps);
var gs = {},
  ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.isNodeEmpty = hb;
var lb = Nr,
  cb = ds,
  db = At,
  ub = Ar;
function hb(o, e) {
  var t = "";
  return (0, ub.isSingleTag)(o) && !(0, lb.isLineBreakTag)(o)
    ? !1
    : ((0, cb.isElement)(o) && (0, db.isNativeInput)(o)
        ? (t = o.value)
        : o.textContent !== null && (t = o.textContent.replace("​", "")),
      e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")),
      t.trim().length === 0);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isNodeEmpty = void 0);
  var e = ms;
  Object.defineProperty(o, "isNodeEmpty", {
    enumerable: !0,
    get: function () {
      return e.isNodeEmpty;
    },
  });
})(gs);
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.isEmpty = gb;
var pb = ps,
  fb = gs;
function gb(o, e) {
  o.normalize();
  for (var t = [o]; t.length > 0; ) {
    var r = t.shift();
    if (r) {
      if (((o = r), (0, pb.isLeaf)(o) && !(0, fb.isNodeEmpty)(o, e))) return !1;
      t.push.apply(t, Array.from(o.childNodes));
    }
  }
  return !0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isEmpty = void 0);
  var e = hs;
  Object.defineProperty(o, "isEmpty", {
    enumerable: !0,
    get: function () {
      return e.isEmpty;
    },
  });
})(hd);
var pd = {},
  vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.isFragment = vb;
var mb = Qi;
function vb(o) {
  return (0, mb.isNumber)(o)
    ? !1
    : !!o && !!o.nodeType && o.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isFragment = void 0);
  var e = vs;
  Object.defineProperty(o, "isFragment", {
    enumerable: !0,
    get: function () {
      return e.isFragment;
    },
  });
})(pd);
var fd = {},
  bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.isHTMLString = yb;
var bb = Pr;
function yb(o) {
  var e = (0, bb.make)("div");
  return (e.innerHTML = o), e.childElementCount > 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isHTMLString = void 0);
  var e = bs;
  Object.defineProperty(o, "isHTMLString", {
    enumerable: !0,
    get: function () {
      return e.isHTMLString;
    },
  });
})(fd);
var gd = {},
  ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.offset = kb;
function kb(o) {
  var e = o.getBoundingClientRect(),
    t = window.pageXOffset || document.documentElement.scrollLeft,
    r = window.pageYOffset || document.documentElement.scrollTop,
    n = e.top + r,
    i = e.left + t;
  return { top: n, left: i, bottom: n + e.height, right: i + e.width };
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.offset = void 0);
  var e = ys;
  Object.defineProperty(o, "offset", {
    enumerable: !0,
    get: function () {
      return e.offset;
    },
  });
})(gd);
var md = {},
  ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.prepend = wb;
function wb(o, e) {
  Array.isArray(e)
    ? ((e = e.reverse()),
      e.forEach(function (t) {
        return o.prepend(t);
      }))
    : o.prepend(e);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.prepend = void 0);
  var e = ks;
  Object.defineProperty(o, "prepend", {
    enumerable: !0,
    get: function () {
      return e.prepend;
    },
  });
})(md);
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.prepend =
      o.offset =
      o.make =
      o.isLineBreakTag =
      o.isSingleTag =
      o.isNodeEmpty =
      o.isLeaf =
      o.isHTMLString =
      o.isFragment =
      o.isEmpty =
      o.isElement =
      o.isContentEditable =
      o.isCollapsedWhitespaces =
      o.findAllInputs =
      o.isNativeInput =
      o.allInputsSelector =
      o.getDeepestNode =
      o.getDeepestBlockElements =
      o.getContentLength =
      o.fragmentToString =
      o.containsOnlyInlineElements =
      o.canSetCaret =
      o.calculateBaseline =
      o.blockElements =
      o.append =
        void 0);
  var e = Fi;
  Object.defineProperty(o, "allInputsSelector", {
    enumerable: !0,
    get: function () {
      return e.allInputsSelector;
    },
  });
  var t = At;
  Object.defineProperty(o, "isNativeInput", {
    enumerable: !0,
    get: function () {
      return t.isNativeInput;
    },
  });
  var r = ed;
  Object.defineProperty(o, "append", {
    enumerable: !0,
    get: function () {
      return r.append;
    },
  });
  var n = qi;
  Object.defineProperty(o, "blockElements", {
    enumerable: !0,
    get: function () {
      return n.blockElements;
    },
  });
  var i = td;
  Object.defineProperty(o, "calculateBaseline", {
    enumerable: !0,
    get: function () {
      return i.calculateBaseline;
    },
  });
  var s = od;
  Object.defineProperty(o, "canSetCaret", {
    enumerable: !0,
    get: function () {
      return s.canSetCaret;
    },
  });
  var a = Lr;
  Object.defineProperty(o, "containsOnlyInlineElements", {
    enumerable: !0,
    get: function () {
      return a.containsOnlyInlineElements;
    },
  });
  var l = id;
  Object.defineProperty(o, "fragmentToString", {
    enumerable: !0,
    get: function () {
      return l.fragmentToString;
    },
  });
  var c = sd;
  Object.defineProperty(o, "getContentLength", {
    enumerable: !0,
    get: function () {
      return c.getContentLength;
    },
  });
  var d = rs;
  Object.defineProperty(o, "getDeepestBlockElements", {
    enumerable: !0,
    get: function () {
      return d.getDeepestBlockElements;
    },
  });
  var h = ld;
  Object.defineProperty(o, "getDeepestNode", {
    enumerable: !0,
    get: function () {
      return h.getDeepestNode;
    },
  });
  var u = dd;
  Object.defineProperty(o, "findAllInputs", {
    enumerable: !0,
    get: function () {
      return u.findAllInputs;
    },
  });
  var p = ud;
  Object.defineProperty(o, "isCollapsedWhitespaces", {
    enumerable: !0,
    get: function () {
      return p.isCollapsedWhitespaces;
    },
  });
  var g = Xi;
  Object.defineProperty(o, "isContentEditable", {
    enumerable: !0,
    get: function () {
      return g.isContentEditable;
    },
  });
  var f = ds;
  Object.defineProperty(o, "isElement", {
    enumerable: !0,
    get: function () {
      return f.isElement;
    },
  });
  var m = hd;
  Object.defineProperty(o, "isEmpty", {
    enumerable: !0,
    get: function () {
      return m.isEmpty;
    },
  });
  var k = pd;
  Object.defineProperty(o, "isFragment", {
    enumerable: !0,
    get: function () {
      return k.isFragment;
    },
  });
  var v = fd;
  Object.defineProperty(o, "isHTMLString", {
    enumerable: !0,
    get: function () {
      return v.isHTMLString;
    },
  });
  var w = ps;
  Object.defineProperty(o, "isLeaf", {
    enumerable: !0,
    get: function () {
      return w.isLeaf;
    },
  });
  var b = gs;
  Object.defineProperty(o, "isNodeEmpty", {
    enumerable: !0,
    get: function () {
      return b.isNodeEmpty;
    },
  });
  var y = Nr;
  Object.defineProperty(o, "isLineBreakTag", {
    enumerable: !0,
    get: function () {
      return y.isLineBreakTag;
    },
  });
  var _ = Ar;
  Object.defineProperty(o, "isSingleTag", {
    enumerable: !0,
    get: function () {
      return _.isSingleTag;
    },
  });
  var B = Pr;
  Object.defineProperty(o, "make", {
    enumerable: !0,
    get: function () {
      return B.make;
    },
  });
  var C = gd;
  Object.defineProperty(o, "offset", {
    enumerable: !0,
    get: function () {
      return C.offset;
    },
  });
  var x = md;
  Object.defineProperty(o, "prepend", {
    enumerable: !0,
    get: function () {
      return x.prepend;
    },
  });
})(G);
const ke = "cdx-list",
  de = {
    wrapper: ke,
    item: `${ke}__item`,
    itemContent: `${ke}__item-content`,
    itemChildren: `${ke}__item-children`,
  };
let vd = class dt {
    static get CSS() {
      return { ...de, orderedList: `${ke}-ordered` };
    }
    constructor(e, t) {
      (this.config = t), (this.readOnly = e);
    }
    renderWrapper(e) {
      let t;
      return (
        e === !0
          ? (t = G.make("ol", [dt.CSS.wrapper, dt.CSS.orderedList]))
          : (t = G.make("ol", [dt.CSS.orderedList, dt.CSS.itemChildren])),
        t
      );
    }
    renderItem(e, t) {
      const r = G.make("li", dt.CSS.item),
        n = G.make("div", dt.CSS.itemContent, {
          innerHTML: e,
          contentEditable: (!this.readOnly).toString(),
        });
      return r.appendChild(n), r;
    }
    getItemContent(e) {
      const t = e.querySelector(`.${dt.CSS.itemContent}`);
      return !t || G.isEmpty(t) ? "" : t.innerHTML;
    }
    getItemMeta() {
      return {};
    }
    composeDefaultMeta() {
      return {};
    }
  },
  bd = class ut {
    static get CSS() {
      return { ...de, unorderedList: `${ke}-unordered` };
    }
    constructor(e, t) {
      (this.config = t), (this.readOnly = e);
    }
    renderWrapper(e) {
      let t;
      return (
        e === !0
          ? (t = G.make("ul", [ut.CSS.wrapper, ut.CSS.unorderedList]))
          : (t = G.make("ul", [ut.CSS.unorderedList, ut.CSS.itemChildren])),
        t
      );
    }
    renderItem(e, t) {
      const r = G.make("li", ut.CSS.item),
        n = G.make("div", ut.CSS.itemContent, {
          innerHTML: e,
          contentEditable: (!this.readOnly).toString(),
        });
      return r.appendChild(n), r;
    }
    getItemContent(e) {
      const t = e.querySelector(`.${ut.CSS.itemContent}`);
      return !t || G.isEmpty(t) ? "" : t.innerHTML;
    }
    getItemMeta() {
      return {};
    }
    composeDefaultMeta() {
      return {};
    }
  };
function Et(o) {
  return o.nodeType === Node.ELEMENT_NODE;
}
var bo = {},
  ws = {},
  jr = {},
  Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.getContenteditableSlice = Cb;
var xb = G;
function Cb(o, e, t, r, n) {
  var i;
  n === void 0 && (n = !1);
  var s = document.createRange();
  if (
    (r === "left"
      ? (s.setStart(o, 0), s.setEnd(e, t))
      : (s.setStart(e, t), s.setEnd(o, o.childNodes.length)),
    n === !0)
  ) {
    var a = s.extractContents();
    return (0, xb.fragmentToString)(a);
  }
  var l = s.cloneContents(),
    c = document.createElement("div");
  c.appendChild(l);
  var d = (i = c.textContent) !== null && i !== void 0 ? i : "";
  return d;
}
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.checkContenteditableSliceForEmptiness = Sb;
var Eb = G,
  _b = Rr;
function Sb(o, e, t, r) {
  var n = (0, _b.getContenteditableSlice)(o, e, t, r);
  return (0, Eb.isCollapsedWhitespaces)(n);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.checkContenteditableSliceForEmptiness = void 0);
  var e = jr;
  Object.defineProperty(o, "checkContenteditableSliceForEmptiness", {
    enumerable: !0,
    get: function () {
      return e.checkContenteditableSliceForEmptiness;
    },
  });
})(ws);
var yd = {};
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getContenteditableSlice = void 0);
  var e = Rr;
  Object.defineProperty(o, "getContenteditableSlice", {
    enumerable: !0,
    get: function () {
      return e.getContenteditableSlice;
    },
  });
})(yd);
var kd = {},
  xs = {};
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.focus = Ob;
var Tb = G;
function Ob(o, e) {
  var t, r;
  if ((e === void 0 && (e = !0), (0, Tb.isNativeInput)(o))) {
    o.focus();
    var n = e ? 0 : o.value.length;
    o.setSelectionRange(n, n);
  } else {
    var i = document.createRange(),
      s = window.getSelection();
    if (!s) return;
    var a = function (u, p) {
        p === void 0 && (p = !1);
        var g = document.createTextNode("");
        p ? u.insertBefore(g, u.firstChild) : u.appendChild(g),
          i.setStart(g, 0),
          i.setEnd(g, 0);
      },
      l = function (u) {
        return u != null;
      },
      c = o.childNodes,
      d = e ? c[0] : c[c.length - 1];
    if (l(d)) {
      for (; l(d) && d.nodeType !== Node.TEXT_NODE; )
        d = e ? d.firstChild : d.lastChild;
      if (l(d) && d.nodeType === Node.TEXT_NODE) {
        var h =
            (r =
              (t = d.textContent) === null || t === void 0
                ? void 0
                : t.length) !== null && r !== void 0
              ? r
              : 0,
          n = e ? 0 : h;
        i.setStart(d, n), i.setEnd(d, n);
      } else a(o, e);
    } else a(o);
    s.removeAllRanges(), s.addRange(i);
  }
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.focus = void 0);
  var e = xs;
  Object.defineProperty(o, "focus", {
    enumerable: !0,
    get: function () {
      return e.focus;
    },
  });
})(kd);
var Cs = {},
  Dr = {};
Object.defineProperty(Dr, "__esModule", { value: !0 });
Dr.getCaretNodeAndOffset = Bb;
function Bb() {
  var o = window.getSelection();
  if (o === null) return [null, 0];
  var e = o.focusNode,
    t = o.focusOffset;
  return e === null
    ? [null, 0]
    : (e.nodeType !== Node.TEXT_NODE &&
        e.childNodes.length > 0 &&
        (e.childNodes[t] !== void 0
          ? ((e = e.childNodes[t]), (t = 0))
          : ((e = e.childNodes[t - 1]),
            e.textContent !== null && (t = e.textContent.length))),
      [e, t]);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getCaretNodeAndOffset = void 0);
  var e = Dr;
  Object.defineProperty(o, "getCaretNodeAndOffset", {
    enumerable: !0,
    get: function () {
      return e.getCaretNodeAndOffset;
    },
  });
})(Cs);
var wd = {},
  $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
$r.getRange = Mb;
function Mb() {
  var o = window.getSelection();
  return o && o.rangeCount ? o.getRangeAt(0) : null;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.getRange = void 0);
  var e = $r;
  Object.defineProperty(o, "getRange", {
    enumerable: !0,
    get: function () {
      return e.getRange;
    },
  });
})(wd);
var xd = {},
  Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.isCaretAtEndOfInput = Pb;
var za = G,
  Ib = Cs,
  Lb = ws;
function Pb(o) {
  var e = (0, za.getDeepestNode)(o, !0);
  if (e === null) return !0;
  if ((0, za.isNativeInput)(e)) return e.selectionEnd === e.value.length;
  var t = (0, Ib.getCaretNodeAndOffset)(),
    r = t[0],
    n = t[1];
  return r === null
    ? !1
    : (0, Lb.checkContenteditableSliceForEmptiness)(o, r, n, "right");
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isCaretAtEndOfInput = void 0);
  var e = Es;
  Object.defineProperty(o, "isCaretAtEndOfInput", {
    enumerable: !0,
    get: function () {
      return e.isCaretAtEndOfInput;
    },
  });
})(xd);
var Cd = {},
  _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.isCaretAtStartOfInput = jb;
var Do = G,
  Nb = Dr,
  Ab = jr;
function jb(o) {
  var e = (0, Do.getDeepestNode)(o);
  if (e === null || (0, Do.isEmpty)(o)) return !0;
  if ((0, Do.isNativeInput)(e)) return e.selectionEnd === 0;
  if ((0, Do.isEmpty)(o)) return !0;
  var t = (0, Nb.getCaretNodeAndOffset)(),
    r = t[0],
    n = t[1];
  return r === null
    ? !1
    : (0, Ab.checkContenteditableSliceForEmptiness)(o, r, n, "left");
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isCaretAtStartOfInput = void 0);
  var e = _s;
  Object.defineProperty(o, "isCaretAtStartOfInput", {
    enumerable: !0,
    get: function () {
      return e.isCaretAtStartOfInput;
    },
  });
})(Cd);
var Ed = {},
  Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.save = $b;
var Rb = G,
  Db = $r;
function $b() {
  var o = (0, Db.getRange)(),
    e = (0, Rb.make)("span");
  if (((e.id = "cursor"), (e.hidden = !0), !!o))
    return (
      o.insertNode(e),
      function () {
        var t = window.getSelection();
        t &&
          (o.setStartAfter(e),
          o.setEndAfter(e),
          t.removeAllRanges(),
          t.addRange(o),
          setTimeout(function () {
            e.remove();
          }, 150));
      }
    );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.save = void 0);
  var e = Ss;
  Object.defineProperty(o, "save", {
    enumerable: !0,
    get: function () {
      return e.save;
    },
  });
})(Ed);
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.save =
      o.isCaretAtStartOfInput =
      o.isCaretAtEndOfInput =
      o.getRange =
      o.getCaretNodeAndOffset =
      o.focus =
      o.getContenteditableSlice =
      o.checkContenteditableSliceForEmptiness =
        void 0);
  var e = ws;
  Object.defineProperty(o, "checkContenteditableSliceForEmptiness", {
    enumerable: !0,
    get: function () {
      return e.checkContenteditableSliceForEmptiness;
    },
  });
  var t = yd;
  Object.defineProperty(o, "getContenteditableSlice", {
    enumerable: !0,
    get: function () {
      return t.getContenteditableSlice;
    },
  });
  var r = kd;
  Object.defineProperty(o, "focus", {
    enumerable: !0,
    get: function () {
      return r.focus;
    },
  });
  var n = Cs;
  Object.defineProperty(o, "getCaretNodeAndOffset", {
    enumerable: !0,
    get: function () {
      return n.getCaretNodeAndOffset;
    },
  });
  var i = wd;
  Object.defineProperty(o, "getRange", {
    enumerable: !0,
    get: function () {
      return i.getRange;
    },
  });
  var s = xd;
  Object.defineProperty(o, "isCaretAtEndOfInput", {
    enumerable: !0,
    get: function () {
      return s.isCaretAtEndOfInput;
    },
  });
  var a = Cd;
  Object.defineProperty(o, "isCaretAtStartOfInput", {
    enumerable: !0,
    get: function () {
      return a.isCaretAtStartOfInput;
    },
  });
  var l = Ed;
  Object.defineProperty(o, "save", {
    enumerable: !0,
    get: function () {
      return l.save;
    },
  });
})(bo);
let Hb = class se {
  static get CSS() {
    return {
      ...de,
      checklist: `${ke}-checklist`,
      itemChecked: `${ke}__checkbox--checked`,
      noHover: `${ke}__checkbox--no-hover`,
      checkbox: `${ke}__checkbox-check`,
      checkboxContainer: `${ke}__checkbox`,
    };
  }
  constructor(e, t) {
    (this.config = t), (this.readOnly = e);
  }
  renderWrapper(e) {
    let t;
    return (
      e === !0
        ? ((t = G.make("ul", [se.CSS.wrapper, se.CSS.checklist])),
          t.addEventListener("click", (r) => {
            const n = r.target;
            if (n) {
              const i = n.closest(`.${se.CSS.checkboxContainer}`);
              i && i.contains(n) && this.toggleCheckbox(i);
            }
          }))
        : (t = G.make("ul", [se.CSS.checklist, se.CSS.itemChildren])),
      t
    );
  }
  renderItem(e, t) {
    const r = G.make("li", [se.CSS.item, se.CSS.item]),
      n = G.make("div", se.CSS.itemContent, {
        innerHTML: e,
        contentEditable: (!this.readOnly).toString(),
      }),
      i = G.make("span", se.CSS.checkbox),
      s = G.make("div", se.CSS.checkboxContainer);
    return (
      t.checked === !0 && s.classList.add(se.CSS.itemChecked),
      (i.innerHTML = tv),
      s.appendChild(i),
      r.appendChild(s),
      r.appendChild(n),
      r
    );
  }
  getItemContent(e) {
    const t = e.querySelector(`.${se.CSS.itemContent}`);
    return !t || G.isEmpty(t) ? "" : t.innerHTML;
  }
  getItemMeta(e) {
    const t = e.querySelector(`.${se.CSS.checkboxContainer}`);
    return { checked: t ? t.classList.contains(se.CSS.itemChecked) : !1 };
  }
  composeDefaultMeta() {
    return { checked: !1 };
  }
  toggleCheckbox(e) {
    e.classList.toggle(se.CSS.itemChecked),
      e.classList.add(se.CSS.noHover),
      e.addEventListener(
        "mouseleave",
        () => this.removeSpecialHoverBehavior(e),
        { once: !0 },
      );
  }
  removeSpecialHoverBehavior(e) {
    e.classList.remove(se.CSS.noHover);
  }
};
function on(o, e = "after") {
  const t = [];
  let r;
  function n(i) {
    switch (e) {
      case "after":
        return i.nextElementSibling;
      case "before":
        return i.previousElementSibling;
    }
  }
  for (r = n(o); r !== null; ) t.push(r), (r = n(r));
  return t.length !== 0 ? t : null;
}
function Qe(o, e = !0) {
  let t = o;
  return (
    o.classList.contains(de.item) &&
      (t = o.querySelector(`.${de.itemChildren}`)),
    t === null
      ? []
      : e
        ? Array.from(t.querySelectorAll(`:scope > .${de.item}`))
        : Array.from(t.querySelectorAll(`.${de.item}`))
  );
}
function Fb(o) {
  return o.nextElementSibling === null;
}
function Ub(o) {
  return o.querySelector(`.${de.itemChildren}`) !== null;
}
function ht(o) {
  return o.querySelector(`.${de.itemChildren}`);
}
function rn(o) {
  let e = o;
  o.classList.contains(de.item) && (e = ht(o)),
    e !== null && Qe(e).length === 0 && e.remove();
}
function Xo(o) {
  return o.querySelector(`.${de.itemContent}`);
}
function $t(o, e = !0) {
  const t = Xo(o);
  t && bo.focus(t, e);
}
let nn = class {
  get currentItem() {
    const e = window.getSelection();
    if (!e) return null;
    let t = e.anchorNode;
    return !t || (Et(t) || (t = t.parentNode), !t) || !Et(t)
      ? null
      : t.closest(`.${de.item}`);
  }
  get currentItemLevel() {
    const e = this.currentItem;
    if (e === null) return null;
    let t = e.parentNode,
      r = 0;
    for (; t !== null && t !== this.listWrapper; )
      Et(t) && t.classList.contains(de.item) && (r += 1), (t = t.parentNode);
    return r + 1;
  }
  constructor({ data: e, config: t, api: r, readOnly: n, block: i }, s) {
    (this.config = t),
      (this.data = e),
      (this.readOnly = n),
      (this.api = r),
      (this.block = i),
      (this.renderer = s);
  }
  render() {
    return (
      (this.listWrapper = this.renderer.renderWrapper(!0)),
      this.data.items.length
        ? this.appendItems(this.data.items, this.listWrapper)
        : this.appendItems(
            [{ content: "", meta: {}, items: [] }],
            this.listWrapper,
          ),
      this.readOnly ||
        this.listWrapper.addEventListener(
          "keydown",
          (e) => {
            switch (e.key) {
              case "Enter":
                this.enterPressed(e);
                break;
              case "Backspace":
                this.backspace(e);
                break;
              case "Tab":
                e.shiftKey ? this.shiftTab(e) : this.addTab(e);
                break;
            }
          },
          !1,
        ),
      "start" in this.data.meta &&
        this.data.meta.start !== void 0 &&
        this.changeStartWith(this.data.meta.start),
      "counterType" in this.data.meta &&
        this.data.meta.counterType !== void 0 &&
        this.changeCounters(this.data.meta.counterType),
      this.listWrapper
    );
  }
  save(e) {
    const t = e ?? this.listWrapper,
      r = (s) =>
        Qe(s).map((a) => {
          const l = ht(a),
            c = this.renderer.getItemContent(a),
            d = this.renderer.getItemMeta(a),
            h = l ? r(l) : [];
          return { content: c, meta: d, items: h };
        }),
      n = t ? r(t) : [];
    let i = { style: this.data.style, meta: {}, items: n };
    return (
      this.data.style === "ordered" &&
        (i.meta = {
          start: this.data.meta.start,
          counterType: this.data.meta.counterType,
        }),
      i
    );
  }
  static get pasteConfig() {
    return { tags: ["OL", "UL", "LI"] };
  }
  merge(e) {
    const t = this.block.holder.querySelectorAll(`.${de.item}`),
      r = t[t.length - 1],
      n = Xo(r);
    if (
      r === null ||
      n === null ||
      (n.insertAdjacentHTML("beforeend", e.items[0].content),
      this.listWrapper === void 0)
    )
      return;
    const i = Qe(this.listWrapper);
    if (i.length === 0) return;
    const s = i[i.length - 1];
    let a = ht(s);
    const l = e.items.shift();
    l !== void 0 &&
      (l.items.length !== 0 &&
        (a === null && (a = this.renderer.renderWrapper(!1)),
        this.appendItems(l.items, a)),
      e.items.length > 0 && this.appendItems(e.items, this.listWrapper));
  }
  onPaste(e) {
    const t = e.detail.data;
    this.data = this.pasteHandler(t);
    const r = this.listWrapper;
    r && r.parentNode && r.parentNode.replaceChild(this.render(), r);
  }
  pasteHandler(e) {
    const { tagName: t } = e;
    let r = "unordered",
      n;
    switch (t) {
      case "OL":
        (r = "ordered"), (n = "ol");
        break;
      case "UL":
      case "LI":
        (r = "unordered"), (n = "ul");
    }
    const i = { style: r, meta: {}, items: [] };
    r === "ordered" &&
      ((this.data.meta.counterType = "numeric"), (this.data.meta.start = 1));
    const s = (a) =>
      Array.from(a.querySelectorAll(":scope > li")).map((l) => {
        const c = l.querySelector(`:scope > ${n}`),
          d = c ? s(c) : [];
        return { content: l.innerHTML ?? "", meta: {}, items: d };
      });
    return (i.items = s(e)), i;
  }
  changeStartWith(e) {
    this.listWrapper.style.setProperty("counter-reset", `item ${e - 1}`),
      (this.data.meta.start = e);
  }
  changeCounters(e) {
    this.listWrapper.style.setProperty("--list-counter-type", e),
      (this.data.meta.counterType = e);
  }
  enterPressed(e) {
    var t;
    const r = this.currentItem;
    if ((e.stopPropagation(), e.preventDefault(), e.isComposing || r === null))
      return;
    const n =
        ((t = this.renderer) == null
          ? void 0
          : t.getItemContent(r).trim().length) === 0,
      i = r.parentNode === this.listWrapper,
      s = r.previousElementSibling === null,
      a = this.api.blocks.getCurrentBlockIndex();
    if (i && n)
      if (Fb(r) && !Ub(r)) {
        s
          ? this.convertItemToDefaultBlock(a, !0)
          : this.convertItemToDefaultBlock();
        return;
      } else {
        this.splitList(r);
        return;
      }
    else if (n) {
      this.unshiftItem(r);
      return;
    } else this.splitItem(r);
  }
  backspace(e) {
    var t;
    const r = this.currentItem;
    if (
      r !== null &&
      bo.isCaretAtStartOfInput(r) &&
      ((t = window.getSelection()) == null ? void 0 : t.isCollapsed) !== !1
    ) {
      if (
        (e.stopPropagation(),
        r.parentNode === this.listWrapper && r.previousElementSibling === null)
      ) {
        this.convertFirstItemToDefaultBlock();
        return;
      }
      e.preventDefault(), this.mergeItemWithPrevious(r);
    }
  }
  shiftTab(e) {
    e.stopPropagation(),
      e.preventDefault(),
      this.currentItem !== null && this.unshiftItem(this.currentItem);
  }
  unshiftItem(e) {
    if (!e.parentNode || !Et(e.parentNode)) return;
    const t = e.parentNode.closest(`.${de.item}`);
    if (!t) return;
    let r = ht(e);
    if (e.parentElement === null) return;
    const n = on(e);
    n !== null &&
      (r === null && (r = this.renderer.renderWrapper(!1)),
      n.forEach((i) => {
        r.appendChild(i);
      }),
      e.appendChild(r)),
      t.after(e),
      $t(e, !1),
      rn(t);
  }
  splitList(e) {
    const t = Qe(e),
      r = this.block,
      n = this.api.blocks.getCurrentBlockIndex();
    if (t.length !== 0) {
      const l = t[0];
      this.unshiftItem(l), $t(e, !1);
    }
    if (
      e.previousElementSibling === null &&
      e.parentNode === this.listWrapper
    ) {
      this.convertItemToDefaultBlock(n);
      return;
    }
    const i = on(e);
    if (i === null) return;
    const s = this.renderer.renderWrapper(!0);
    i.forEach((l) => {
      s.appendChild(l);
    });
    const a = this.save(s);
    (a.meta.start = this.data.style == "ordered" ? 1 : void 0),
      this.api.blocks.insert(r?.name, a, this.config, n + 1),
      this.convertItemToDefaultBlock(n + 1),
      s.remove();
  }
  splitItem(e) {
    const [t, r] = bo.getCaretNodeAndOffset();
    if (t === null) return;
    const n = Xo(e);
    let i;
    n === null
      ? (i = "")
      : (i = bo.getContenteditableSlice(n, t, r, "right", !0));
    const s = ht(e),
      a = this.renderItem(i);
    e?.after(a), s && a.appendChild(s), $t(a);
  }
  mergeItemWithPrevious(e) {
    const t = e.previousElementSibling,
      r = e.parentNode;
    if (r === null || !Et(r)) return;
    const n = r.closest(`.${de.item}`);
    if ((!t && !n) || (t && !Et(t))) return;
    let i;
    if (t) {
      const h = Qe(t, !1);
      h.length !== 0 && h.length !== 0 ? (i = h[h.length - 1]) : (i = t);
    } else i = n;
    const s = this.renderer.getItemContent(e);
    if (!i) return;
    $t(i, !1);
    const a = Xo(i);
    if (a === null) return;
    a.insertAdjacentHTML("beforeend", s);
    const l = Qe(e);
    if (l.length === 0) {
      e.remove(), rn(i);
      return;
    }
    const c = t || n,
      d = ht(c) ?? this.renderer.renderWrapper(!1);
    t
      ? l.forEach((h) => {
          d.appendChild(h);
        })
      : l.forEach((h) => {
          d.prepend(h);
        }),
      ht(c) === null && i.appendChild(d),
      e.remove();
  }
  addTab(e) {
    var t;
    e.stopPropagation(), e.preventDefault();
    const r = this.currentItem;
    if (!r) return;
    if (((t = this.config) == null ? void 0 : t.maxLevel) !== void 0) {
      const s = this.currentItemLevel;
      if (s !== null && s === this.config.maxLevel) return;
    }
    const n = r.previousSibling;
    if (n === null || !Et(n)) return;
    const i = ht(n);
    if (i)
      i.appendChild(r),
        Qe(r).forEach((s) => {
          i.appendChild(s);
        });
    else {
      const s = this.renderer.renderWrapper(!1);
      s.appendChild(r),
        Qe(r).forEach((a) => {
          s.appendChild(a);
        }),
        n.appendChild(s);
    }
    rn(r), $t(r, !1);
  }
  convertItemToDefaultBlock(e, t) {
    let r;
    const n = this.currentItem,
      i = n !== null ? this.renderer.getItemContent(n) : "";
    t === !0 && this.api.blocks.delete(),
      e !== void 0
        ? (r = this.api.blocks.insert(void 0, { text: i }, void 0, e))
        : (r = this.api.blocks.insert()),
      n?.remove(),
      this.api.caret.setToBlock(r, "start");
  }
  convertFirstItemToDefaultBlock() {
    const e = this.currentItem;
    if (e === null) return;
    const t = Qe(e);
    if (t.length !== 0) {
      const s = t[0];
      this.unshiftItem(s), $t(e);
    }
    const r = on(e),
      n = this.api.blocks.getCurrentBlockIndex(),
      i = r === null;
    this.convertItemToDefaultBlock(n, i);
  }
  renderItem(e, t) {
    const r = t ?? this.renderer.composeDefaultMeta();
    switch (!0) {
      case this.renderer instanceof vd:
        return this.renderer.renderItem(e, r);
      case this.renderer instanceof bd:
        return this.renderer.renderItem(e, r);
      default:
        return this.renderer.renderItem(e, r);
    }
  }
  appendItems(e, t) {
    e.forEach((r) => {
      var n;
      const i = this.renderItem(r.content, r.meta);
      if ((t.appendChild(i), r.items.length)) {
        const s = (n = this.renderer) == null ? void 0 : n.renderWrapper(!1);
        this.appendItems(r.items, s), i.appendChild(s);
      }
    });
  }
};
const Ht = {
  wrapper: `${ke}-start-with-field`,
  input: `${ke}-start-with-field__input`,
  startWithElementWrapperInvalid: `${ke}-start-with-field--invalid`,
};
function zb(o, { value: e, placeholder: t, attributes: r, sanitize: n }) {
  const i = G.make("div", Ht.wrapper),
    s = G.make("input", Ht.input, { placeholder: t, tabIndex: -1, value: e });
  for (const a in r) s.setAttribute(a, r[a]);
  return (
    i.appendChild(s),
    s.addEventListener("input", () => {
      n !== void 0 && (s.value = n(s.value));
      const a = s.checkValidity();
      !a &&
        !i.classList.contains(Ht.startWithElementWrapperInvalid) &&
        i.classList.add(Ht.startWithElementWrapperInvalid),
        a &&
          i.classList.contains(Ht.startWithElementWrapperInvalid) &&
          i.classList.remove(Ht.startWithElementWrapperInvalid),
        a && o(s.value);
    }),
    i
  );
}
const $o = new Map([
    ["Numeric", "numeric"],
    ["Lower Roman", "lower-roman"],
    ["Upper Roman", "upper-roman"],
    ["Lower Alpha", "lower-alpha"],
    ["Upper Alpha", "upper-alpha"],
  ]),
  Wa = new Map([
    ["numeric", ov],
    ["lower-roman", rv],
    ["upper-roman", nv],
    ["lower-alpha", sv],
    ["upper-alpha", iv],
  ]);
function Wb(o) {
  return o.replace(/\D+/g, "");
}
function qb(o) {
  return typeof o.items[0] == "string";
}
function Vb(o) {
  return !("meta" in o);
}
function Yb(o) {
  return (
    typeof o.items[0] != "string" &&
    "text" in o.items[0] &&
    "checked" in o.items[0] &&
    typeof o.items[0].text == "string" &&
    typeof o.items[0].checked == "boolean"
  );
}
function Kb(o) {
  const e = [];
  return qb(o)
    ? (o.items.forEach((t) => {
        e.push({ content: t, meta: {}, items: [] });
      }),
      { style: o.style, meta: {}, items: e })
    : Yb(o)
      ? (o.items.forEach((t) => {
          e.push({ content: t.text, meta: { checked: t.checked }, items: [] });
        }),
        { style: "checklist", meta: {}, items: e })
      : Vb(o)
        ? { style: o.style, meta: {}, items: o.items }
        : o;
}
let Xb = class _n {
  static get isReadOnlySupported() {
    return !0;
  }
  static get enableLineBreaks() {
    return !0;
  }
  static get toolbox() {
    return [
      { icon: Ha, title: "Unordered List", data: { style: "unordered" } },
      { icon: Fa, title: "Ordered List", data: { style: "ordered" } },
      { icon: $a, title: "Checklist", data: { style: "checklist" } },
    ];
  }
  static get pasteConfig() {
    return { tags: ["OL", "UL", "LI"] };
  }
  static get conversionConfig() {
    return {
      export: (e) => _n.joinRecursive(e),
      import: (e, t) => ({
        meta: {},
        items: [{ content: e, meta: {}, items: [] }],
        style: t?.defaultStyle !== void 0 ? t.defaultStyle : "unordered",
      }),
    };
  }
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  set listStyle(e) {
    var t;
    (this.data.style = e), this.changeTabulatorByStyle();
    const r = this.list.render();
    (t = this.listElement) == null || t.replaceWith(r), (this.listElement = r);
  }
  constructor({ data: e, config: t, api: r, readOnly: n, block: i }) {
    var s;
    (this.api = r),
      (this.readOnly = n),
      (this.config = t),
      (this.block = i),
      (this.defaultListStyle =
        ((s = this.config) == null ? void 0 : s.defaultStyle) || "unordered");
    const a = { style: this.defaultListStyle, meta: {}, items: [] };
    (this.data = Object.keys(e).length ? Kb(e) : a),
      this.listStyle === "ordered" &&
        this.data.meta.counterType === void 0 &&
        (this.data.meta.counterType = "numeric"),
      this.changeTabulatorByStyle();
  }
  static joinRecursive(e) {
    return e.items.map((t) => `${t.content} ${_n.joinRecursive(t)}`).join("");
  }
  render() {
    return (this.listElement = this.list.render()), this.listElement;
  }
  save() {
    return (this.data = this.list.save()), this.data;
  }
  merge(e) {
    this.list.merge(e);
  }
  renderSettings() {
    const e = [
      {
        label: this.api.i18n.t("Unordered"),
        icon: Ha,
        closeOnActivate: !0,
        isActive: this.listStyle == "unordered",
        onActivate: () => {
          this.listStyle = "unordered";
        },
      },
      {
        label: this.api.i18n.t("Ordered"),
        icon: Fa,
        closeOnActivate: !0,
        isActive: this.listStyle == "ordered",
        onActivate: () => {
          this.listStyle = "ordered";
        },
      },
      {
        label: this.api.i18n.t("Checklist"),
        icon: $a,
        closeOnActivate: !0,
        isActive: this.listStyle == "checklist",
        onActivate: () => {
          this.listStyle = "checklist";
        },
      },
    ];
    if (this.listStyle === "ordered") {
      const t = zb((i) => this.changeStartWith(Number(i)), {
          value: String(this.data.meta.start ?? 1),
          placeholder: "",
          attributes: { required: "true" },
          sanitize: (i) => Wb(i),
        }),
        r = [
          {
            label: this.api.i18n.t("Start with"),
            icon: av,
            children: { items: [{ element: t, type: "html" }] },
          },
        ],
        n = {
          label: this.api.i18n.t("Counter type"),
          icon: Wa.get(this.data.meta.counterType),
          children: { items: [] },
        };
      $o.forEach((i, s) => {
        n.children.items.push({
          title: this.api.i18n.t(s),
          icon: Wa.get($o.get(s)),
          isActive: this.data.meta.counterType === $o.get(s),
          closeOnActivate: !0,
          onActivate: () => {
            this.changeCounters($o.get(s));
          },
        });
      }),
        e.push({ type: "separator" }, ...r, n);
    }
    return e;
  }
  onPaste(e) {
    const { tagName: t } = e.detail.data;
    switch (t) {
      case "OL":
        this.listStyle = "ordered";
        break;
      case "UL":
      case "LI":
        this.listStyle = "unordered";
    }
    this.list.onPaste(e);
  }
  pasteHandler(e) {
    return this.list.pasteHandler(e);
  }
  changeCounters(e) {
    var t;
    (t = this.list) == null || t.changeCounters(e),
      (this.data.meta.counterType = e);
  }
  changeStartWith(e) {
    var t;
    (t = this.list) == null || t.changeStartWith(e), (this.data.meta.start = e);
  }
  changeTabulatorByStyle() {
    switch (this.listStyle) {
      case "ordered":
        this.list = new nn(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block,
          },
          new vd(this.readOnly, this.config),
        );
        break;
      case "unordered":
        this.list = new nn(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block,
          },
          new bd(this.readOnly, this.config),
        );
        break;
      case "checklist":
        this.list = new nn(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block,
          },
          new Hb(this.readOnly, this.config),
        );
        break;
    }
  }
};
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}",
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function Gb(o, e) {
  let t = "";
  for (
    ;
    t !==
      `
` && e > 0;

  )
    (e = e - 1), (t = o.substr(e, 1));
  return (
    t ===
      `
` && (e += 1),
    e
  );
}
const Zb =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
/**
 * CodeTool for Editor.js
 * @version 2.0.0
 * @license MIT
 */ class Ts {
  static get isReadOnlySupported() {
    return !0;
  }
  static get enableLineBreaks() {
    return !0;
  }
  constructor({ data: e, config: t, api: r, readOnly: n }) {
    (this.api = r),
      (this.readOnly = n),
      (this.placeholder = this.api.i18n.t(
        t.placeholder || Ts.DEFAULT_PLACEHOLDER,
      )),
      (this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-code",
        textarea: "ce-code__textarea",
      }),
      (this.nodes = { holder: null, textarea: null }),
      (this.data = { code: e.code ?? "" }),
      (this.nodes.holder = this.drawView());
  }
  render() {
    return this.nodes.holder;
  }
  save(e) {
    return { code: e.querySelector("textarea").value };
  }
  onPaste(e) {
    const t = e.detail;
    if ("data" in t) {
      const r = t.data;
      this.data = { code: r || "" };
    }
  }
  get data() {
    return this._data;
  }
  set data(e) {
    (this._data = e),
      this.nodes.textarea && (this.nodes.textarea.value = e.code);
  }
  static get toolbox() {
    return { icon: Zb, title: "Code" };
  }
  static get DEFAULT_PLACEHOLDER() {
    return "Enter a code";
  }
  static get pasteConfig() {
    return { tags: ["pre"] };
  }
  static get sanitize() {
    return { code: !0 };
  }
  tabHandler(e) {
    e.stopPropagation(), e.preventDefault();
    const t = e.target,
      r = e.shiftKey,
      n = t.selectionStart,
      i = t.value,
      s = "  ";
    let a;
    if (!r)
      (a = n + s.length), (t.value = i.substring(0, n) + s + i.substring(n));
    else {
      const l = Gb(i, n);
      if (i.substr(l, s.length) !== s) return;
      (t.value = i.substring(0, l) + i.substring(l + s.length)),
        (a = n - s.length);
    }
    t.setSelectionRange(a, a);
  }
  drawView() {
    const e = document.createElement("div"),
      t = document.createElement("textarea");
    return (
      e.classList.add(this.CSS.baseClass, this.CSS.wrapper),
      t.classList.add(this.CSS.textarea, this.CSS.input),
      (t.value = this.data.code),
      (t.placeholder = this.placeholder),
      this.readOnly && (t.disabled = !0),
      e.appendChild(t),
      t.addEventListener("keydown", (r) => {
        switch (r.code) {
          case "Tab":
            this.tabHandler(r);
            break;
        }
      }),
      (this.nodes.textarea = t),
      e
    );
  }
}
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          '.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px;padding-bottom:0}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{visibility:hidden;position:absolute;bottom:0;left:0;margin-bottom:10px}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__image-preloader{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{visibility:hidden!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{visibility:visible}.image-tool--caption{padding-bottom:50px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}',
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Jb =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',
  Qb =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',
  _d =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>',
  ey =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',
  ty =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function Ft(o, e = null, t = {}) {
  const r = document.createElement(o);
  Array.isArray(e) ? r.classList.add(...e) : e !== null && r.classList.add(e);
  for (const n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
  return r;
}
var Go = ((o) => (
  (o.Empty = "empty"), (o.Uploading = "uploading"), (o.Filled = "filled"), o
))(Go || {});
let oy = class {
  constructor({ api: e, config: t, onSelectFile: r, readOnly: n }) {
    (this.api = e),
      (this.config = t),
      (this.onSelectFile = r),
      (this.readOnly = n),
      (this.nodes = {
        wrapper: Ft("div", [this.CSS.baseClass, this.CSS.wrapper]),
        imageContainer: Ft("div", [this.CSS.imageContainer]),
        fileButton: this.createFileButton(),
        imageEl: void 0,
        imagePreloader: Ft("div", this.CSS.imagePreloader),
        caption: Ft("div", [this.CSS.input, this.CSS.caption], {
          contentEditable: !this.readOnly,
        }),
      }),
      (this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder),
      this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),
      this.nodes.wrapper.appendChild(this.nodes.imageContainer),
      this.nodes.wrapper.appendChild(this.nodes.caption),
      this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  applyTune(e, t) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`, t);
  }
  render() {
    return this.toggleStatus("empty"), this.nodes.wrapper;
  }
  showPreloader(e) {
    (this.nodes.imagePreloader.style.backgroundImage = `url(${e})`),
      this.toggleStatus("uploading");
  }
  hidePreloader() {
    (this.nodes.imagePreloader.style.backgroundImage = ""),
      this.toggleStatus("empty");
  }
  fillImage(e) {
    const t = /\.mp4$/.test(e) ? "VIDEO" : "IMG",
      r = { src: e };
    let n = "load";
    t === "VIDEO" &&
      ((r.autoplay = !0),
      (r.loop = !0),
      (r.muted = !0),
      (r.playsinline = !0),
      (n = "loadeddata")),
      (this.nodes.imageEl = Ft(t, this.CSS.imageEl, r)),
      this.nodes.imageEl.addEventListener(n, () => {
        this.toggleStatus("filled"),
          this.nodes.imagePreloader !== void 0 &&
            (this.nodes.imagePreloader.style.backgroundImage = "");
      }),
      this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  fillCaption(e) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = e);
  }
  toggleStatus(e) {
    for (const t in Go)
      if (Object.prototype.hasOwnProperty.call(Go, t)) {
        const r = Go[t];
        this.nodes.wrapper.classList.toggle(
          `${this.CSS.wrapper}--${r}`,
          r === e,
        );
      }
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption",
    };
  }
  createFileButton() {
    const e = Ft("div", [this.CSS.button]);
    return (
      (e.innerHTML =
        this.config.buttonContent ??
        `${_d} ${this.api.i18n.t("Select an Image")}`),
      e.addEventListener("click", () => {
        this.onSelectFile();
      }),
      e
    );
  }
};
function ry(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var Sd = { exports: {} };
(function (o, e) {
  (function (t, r) {
    o.exports = r();
  })(window, function () {
    return (function (t) {
      var r = {};
      function n(i) {
        if (r[i]) return r[i].exports;
        var s = (r[i] = { i, l: !1, exports: {} });
        return t[i].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
      }
      return (
        (n.m = t),
        (n.c = r),
        (n.d = function (i, s, a) {
          n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
        }),
        (n.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (n.t = function (i, s) {
          if (
            (1 & s && (i = n(i)),
            8 & s || (4 & s && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var a = Object.create(null);
          if (
            (n.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: i }),
            2 & s && typeof i != "string")
          )
            for (var l in i)
              n.d(
                a,
                l,
                function (c) {
                  return i[c];
                }.bind(null, l),
              );
          return a;
        }),
        (n.n = function (i) {
          var s =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return n.d(s, "a", s), s;
        }),
        (n.o = function (i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }),
        (n.p = ""),
        n((n.s = 3))
      );
    })([
      function (t, r) {
        var n;
        n = (function () {
          return this;
        })();
        try {
          n = n || new Function("return this")();
        } catch {
          typeof window == "object" && (n = window);
        }
        t.exports = n;
      },
      function (t, r, n) {
        (function (i) {
          var s = n(2),
            a = setTimeout;
          function l() {}
          function c(m) {
            if (!(this instanceof c))
              throw new TypeError("Promises must be constructed via new");
            if (typeof m != "function") throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              f(m, this);
          }
          function d(m, k) {
            for (; m._state === 3; ) m = m._value;
            m._state !== 0
              ? ((m._handled = !0),
                c._immediateFn(function () {
                  var v = m._state === 1 ? k.onFulfilled : k.onRejected;
                  if (v !== null) {
                    var w;
                    try {
                      w = v(m._value);
                    } catch (b) {
                      return void u(k.promise, b);
                    }
                    h(k.promise, w);
                  } else (m._state === 1 ? h : u)(k.promise, m._value);
                }))
              : m._deferreds.push(k);
          }
          function h(m, k) {
            try {
              if (k === m)
                throw new TypeError(
                  "A promise cannot be resolved with itself.",
                );
              if (k && (typeof k == "object" || typeof k == "function")) {
                var v = k.then;
                if (k instanceof c)
                  return (m._state = 3), (m._value = k), void p(m);
                if (typeof v == "function")
                  return void f(
                    ((w = v),
                    (b = k),
                    function () {
                      w.apply(b, arguments);
                    }),
                    m,
                  );
              }
              (m._state = 1), (m._value = k), p(m);
            } catch (y) {
              u(m, y);
            }
            var w, b;
          }
          function u(m, k) {
            (m._state = 2), (m._value = k), p(m);
          }
          function p(m) {
            m._state === 2 &&
              m._deferreds.length === 0 &&
              c._immediateFn(function () {
                m._handled || c._unhandledRejectionFn(m._value);
              });
            for (var k = 0, v = m._deferreds.length; k < v; k++)
              d(m, m._deferreds[k]);
            m._deferreds = null;
          }
          function g(m, k, v) {
            (this.onFulfilled = typeof m == "function" ? m : null),
              (this.onRejected = typeof k == "function" ? k : null),
              (this.promise = v);
          }
          function f(m, k) {
            var v = !1;
            try {
              m(
                function (w) {
                  v || ((v = !0), h(k, w));
                },
                function (w) {
                  v || ((v = !0), u(k, w));
                },
              );
            } catch (w) {
              if (v) return;
              (v = !0), u(k, w);
            }
          }
          (c.prototype.catch = function (m) {
            return this.then(null, m);
          }),
            (c.prototype.then = function (m, k) {
              var v = new this.constructor(l);
              return d(this, new g(m, k, v)), v;
            }),
            (c.prototype.finally = s.a),
            (c.all = function (m) {
              return new c(function (k, v) {
                if (!m || m.length === void 0)
                  throw new TypeError("Promise.all accepts an array");
                var w = Array.prototype.slice.call(m);
                if (w.length === 0) return k([]);
                var b = w.length;
                function y(B, C) {
                  try {
                    if (C && (typeof C == "object" || typeof C == "function")) {
                      var x = C.then;
                      if (typeof x == "function")
                        return void x.call(
                          C,
                          function (O) {
                            y(B, O);
                          },
                          v,
                        );
                    }
                    (w[B] = C), --b == 0 && k(w);
                  } catch (O) {
                    v(O);
                  }
                }
                for (var _ = 0; _ < w.length; _++) y(_, w[_]);
              });
            }),
            (c.resolve = function (m) {
              return m && typeof m == "object" && m.constructor === c
                ? m
                : new c(function (k) {
                    k(m);
                  });
            }),
            (c.reject = function (m) {
              return new c(function (k, v) {
                v(m);
              });
            }),
            (c.race = function (m) {
              return new c(function (k, v) {
                for (var w = 0, b = m.length; w < b; w++) m[w].then(k, v);
              });
            }),
            (c._immediateFn =
              (typeof i == "function" &&
                function (m) {
                  i(m);
                }) ||
              function (m) {
                a(m, 0);
              }),
            (c._unhandledRejectionFn = function (m) {
              typeof console < "u" &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", m);
            }),
            (r.a = c);
        }).call(this, n(5).setImmediate);
      },
      function (t, r, n) {
        r.a = function (i) {
          var s = this.constructor;
          return this.then(
            function (a) {
              return s.resolve(i()).then(function () {
                return a;
              });
            },
            function (a) {
              return s.resolve(i()).then(function () {
                return s.reject(a);
              });
            },
          );
        };
      },
      function (t, r, n) {
        function i(f) {
          return (i =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (m) {
                  return typeof m;
                }
              : function (m) {
                  return m &&
                    typeof Symbol == "function" &&
                    m.constructor === Symbol &&
                    m !== Symbol.prototype
                    ? "symbol"
                    : typeof m;
                })(f);
        }
        n(4);
        var s,
          a,
          l,
          c,
          d,
          h,
          u,
          p = n(8),
          g =
            ((a = function (f) {
              return new Promise(function (m, k) {
                (f = c(f)), (f = d(f)).beforeSend && f.beforeSend();
                var v = window.XMLHttpRequest
                  ? new window.XMLHttpRequest()
                  : new window.ActiveXObject("Microsoft.XMLHTTP");
                v.open(f.method, f.url),
                  v.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                  Object.keys(f.headers).forEach(function (b) {
                    var y = f.headers[b];
                    v.setRequestHeader(b, y);
                  });
                var w = f.ratio;
                v.upload.addEventListener(
                  "progress",
                  function (b) {
                    var y = Math.round((b.loaded / b.total) * 100),
                      _ = Math.ceil((y * w) / 100);
                    f.progress(Math.min(_, 100));
                  },
                  !1,
                ),
                  v.addEventListener(
                    "progress",
                    function (b) {
                      var y = Math.round((b.loaded / b.total) * 100),
                        _ = Math.ceil((y * (100 - w)) / 100) + w;
                      f.progress(Math.min(_, 100));
                    },
                    !1,
                  ),
                  (v.onreadystatechange = function () {
                    if (v.readyState === 4) {
                      var b = v.response;
                      try {
                        b = JSON.parse(b);
                      } catch {}
                      var y = p.parseHeaders(v.getAllResponseHeaders()),
                        _ = { body: b, code: v.status, headers: y };
                      u(v.status) ? m(_) : k(_);
                    }
                  }),
                  v.send(f.data);
              });
            }),
            (l = function (f) {
              return (f.method = "POST"), a(f);
            }),
            (c = function () {
              var f =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              if (f.url && typeof f.url != "string")
                throw new Error("Url must be a string");
              if (
                ((f.url = f.url || ""), f.method && typeof f.method != "string")
              )
                throw new Error("`method` must be a string or null");
              if (
                ((f.method = f.method ? f.method.toUpperCase() : "GET"),
                f.headers && i(f.headers) !== "object")
              )
                throw new Error("`headers` must be an object or null");
              if (
                ((f.headers = f.headers || {}),
                f.type &&
                  (typeof f.type != "string" ||
                    !Object.values(s).includes(f.type)))
              )
                throw new Error(
                  "`type` must be taken from module's «contentType» library",
                );
              if (f.progress && typeof f.progress != "function")
                throw new Error("`progress` must be a function or null");
              if (
                ((f.progress = f.progress || function (m) {}),
                (f.beforeSend = f.beforeSend || function (m) {}),
                f.ratio && typeof f.ratio != "number")
              )
                throw new Error("`ratio` must be a number");
              if (f.ratio < 0 || f.ratio > 100)
                throw new Error("`ratio` must be in a 0-100 interval");
              if (
                ((f.ratio = f.ratio || 90),
                f.accept && typeof f.accept != "string")
              )
                throw new Error(
                  "`accept` must be a string with a list of allowed mime-types",
                );
              if (
                ((f.accept = f.accept || "*/*"),
                f.multiple && typeof f.multiple != "boolean")
              )
                throw new Error("`multiple` must be a true or false");
              if (
                ((f.multiple = f.multiple || !1),
                f.fieldName && typeof f.fieldName != "string")
              )
                throw new Error("`fieldName` must be a string");
              return (f.fieldName = f.fieldName || "files"), f;
            }),
            (d = function (f) {
              switch (f.method) {
                case "GET":
                  var m = h(f.data, s.URLENCODED);
                  delete f.data,
                    (f.url = /\?/.test(f.url)
                      ? f.url + "&" + m
                      : f.url + "?" + m);
                  break;
                case "POST":
                case "PUT":
                case "DELETE":
                case "UPDATE":
                  var k = (function () {
                    return (
                      (arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : {}
                      ).type || s.JSON
                    );
                  })(f);
                  (p.isFormData(f.data) || p.isFormElement(f.data)) &&
                    (k = s.FORM),
                    (f.data = h(f.data, k)),
                    k !== g.contentType.FORM && (f.headers["content-type"] = k);
              }
              return f;
            }),
            (h = function () {
              var f =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              switch (arguments.length > 1 ? arguments[1] : void 0) {
                case s.URLENCODED:
                  return p.urlEncode(f);
                case s.JSON:
                  return p.jsonEncode(f);
                case s.FORM:
                  return p.formEncode(f);
                default:
                  return f;
              }
            }),
            (u = function (f) {
              return f >= 200 && f < 300;
            }),
            {
              contentType: (s = {
                URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
                FORM: "multipart/form-data",
                JSON: "application/json; charset=utf-8",
              }),
              request: a,
              get: function (f) {
                return (f.method = "GET"), a(f);
              },
              post: l,
              transport: function (f) {
                return (
                  (f = c(f)),
                  p.selectFiles(f).then(function (m) {
                    for (var k = new FormData(), v = 0; v < m.length; v++)
                      k.append(f.fieldName, m[v], m[v].name);
                    p.isObject(f.data) &&
                      Object.keys(f.data).forEach(function (b) {
                        var y = f.data[b];
                        k.append(b, y);
                      });
                    var w = f.beforeSend;
                    return (
                      (f.beforeSend = function () {
                        return w(m);
                      }),
                      (f.data = k),
                      l(f)
                    );
                  })
                );
              },
              selectFiles: function (f) {
                return delete (f = c(f)).beforeSend, p.selectFiles(f);
              },
            });
        t.exports = g;
      },
      function (t, r, n) {
        n.r(r);
        var i = n(1);
        window.Promise = window.Promise || i.a;
      },
      function (t, r, n) {
        (function (i) {
          var s = (i !== void 0 && i) || (typeof self < "u" && self) || window,
            a = Function.prototype.apply;
          function l(c, d) {
            (this._id = c), (this._clearFn = d);
          }
          (r.setTimeout = function () {
            return new l(a.call(setTimeout, s, arguments), clearTimeout);
          }),
            (r.setInterval = function () {
              return new l(a.call(setInterval, s, arguments), clearInterval);
            }),
            (r.clearTimeout = r.clearInterval =
              function (c) {
                c && c.close();
              }),
            (l.prototype.unref = l.prototype.ref = function () {}),
            (l.prototype.close = function () {
              this._clearFn.call(s, this._id);
            }),
            (r.enroll = function (c, d) {
              clearTimeout(c._idleTimeoutId), (c._idleTimeout = d);
            }),
            (r.unenroll = function (c) {
              clearTimeout(c._idleTimeoutId), (c._idleTimeout = -1);
            }),
            (r._unrefActive = r.active =
              function (c) {
                clearTimeout(c._idleTimeoutId);
                var d = c._idleTimeout;
                d >= 0 &&
                  (c._idleTimeoutId = setTimeout(function () {
                    c._onTimeout && c._onTimeout();
                  }, d));
              }),
            n(6),
            (r.setImmediate =
              (typeof self < "u" && self.setImmediate) ||
              (i !== void 0 && i.setImmediate) ||
              (this && this.setImmediate)),
            (r.clearImmediate =
              (typeof self < "u" && self.clearImmediate) ||
              (i !== void 0 && i.clearImmediate) ||
              (this && this.clearImmediate));
        }).call(this, n(0));
      },
      function (t, r, n) {
        (function (i, s) {
          (function (a, l) {
            if (!a.setImmediate) {
              var c,
                d,
                h,
                u,
                p,
                g = 1,
                f = {},
                m = !1,
                k = a.document,
                v = Object.getPrototypeOf && Object.getPrototypeOf(a);
              (v = v && v.setTimeout ? v : a),
                {}.toString.call(a.process) === "[object process]"
                  ? (c = function (y) {
                      s.nextTick(function () {
                        b(y);
                      });
                    })
                  : (function () {
                        if (a.postMessage && !a.importScripts) {
                          var y = !0,
                            _ = a.onmessage;
                          return (
                            (a.onmessage = function () {
                              y = !1;
                            }),
                            a.postMessage("", "*"),
                            (a.onmessage = _),
                            y
                          );
                        }
                      })()
                    ? ((u = "setImmediate$" + Math.random() + "$"),
                      (p = function (y) {
                        y.source === a &&
                          typeof y.data == "string" &&
                          y.data.indexOf(u) === 0 &&
                          b(+y.data.slice(u.length));
                      }),
                      a.addEventListener
                        ? a.addEventListener("message", p, !1)
                        : a.attachEvent("onmessage", p),
                      (c = function (y) {
                        a.postMessage(u + y, "*");
                      }))
                    : a.MessageChannel
                      ? (((h = new MessageChannel()).port1.onmessage =
                          function (y) {
                            b(y.data);
                          }),
                        (c = function (y) {
                          h.port2.postMessage(y);
                        }))
                      : k && "onreadystatechange" in k.createElement("script")
                        ? ((d = k.documentElement),
                          (c = function (y) {
                            var _ = k.createElement("script");
                            (_.onreadystatechange = function () {
                              b(y),
                                (_.onreadystatechange = null),
                                d.removeChild(_),
                                (_ = null);
                            }),
                              d.appendChild(_);
                          }))
                        : (c = function (y) {
                            setTimeout(b, 0, y);
                          }),
                (v.setImmediate = function (y) {
                  typeof y != "function" && (y = new Function("" + y));
                  for (
                    var _ = new Array(arguments.length - 1), B = 0;
                    B < _.length;
                    B++
                  )
                    _[B] = arguments[B + 1];
                  var C = { callback: y, args: _ };
                  return (f[g] = C), c(g), g++;
                }),
                (v.clearImmediate = w);
            }
            function w(y) {
              delete f[y];
            }
            function b(y) {
              if (m) setTimeout(b, 0, y);
              else {
                var _ = f[y];
                if (_) {
                  m = !0;
                  try {
                    (function (B) {
                      var C = B.callback,
                        x = B.args;
                      switch (x.length) {
                        case 0:
                          C();
                          break;
                        case 1:
                          C(x[0]);
                          break;
                        case 2:
                          C(x[0], x[1]);
                          break;
                        case 3:
                          C(x[0], x[1], x[2]);
                          break;
                        default:
                          C.apply(l, x);
                      }
                    })(_);
                  } finally {
                    w(y), (m = !1);
                  }
                }
              }
            }
          })(typeof self > "u" ? (i === void 0 ? this : i) : self);
        }).call(this, n(0), n(7));
      },
      function (t, r) {
        var n,
          i,
          s = (t.exports = {});
        function a() {
          throw new Error("setTimeout has not been defined");
        }
        function l() {
          throw new Error("clearTimeout has not been defined");
        }
        function c(v) {
          if (n === setTimeout) return setTimeout(v, 0);
          if ((n === a || !n) && setTimeout)
            return (n = setTimeout), setTimeout(v, 0);
          try {
            return n(v, 0);
          } catch {
            try {
              return n.call(null, v, 0);
            } catch {
              return n.call(this, v, 0);
            }
          }
        }
        (function () {
          try {
            n = typeof setTimeout == "function" ? setTimeout : a;
          } catch {
            n = a;
          }
          try {
            i = typeof clearTimeout == "function" ? clearTimeout : l;
          } catch {
            i = l;
          }
        })();
        var d,
          h = [],
          u = !1,
          p = -1;
        function g() {
          u &&
            d &&
            ((u = !1),
            d.length ? (h = d.concat(h)) : (p = -1),
            h.length && f());
        }
        function f() {
          if (!u) {
            var v = c(g);
            u = !0;
            for (var w = h.length; w; ) {
              for (d = h, h = []; ++p < w; ) d && d[p].run();
              (p = -1), (w = h.length);
            }
            (d = null),
              (u = !1),
              (function (b) {
                if (i === clearTimeout) return clearTimeout(b);
                if ((i === l || !i) && clearTimeout)
                  return (i = clearTimeout), clearTimeout(b);
                try {
                  i(b);
                } catch {
                  try {
                    return i.call(null, b);
                  } catch {
                    return i.call(this, b);
                  }
                }
              })(v);
          }
        }
        function m(v, w) {
          (this.fun = v), (this.array = w);
        }
        function k() {}
        (s.nextTick = function (v) {
          var w = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var b = 1; b < arguments.length; b++) w[b - 1] = arguments[b];
          h.push(new m(v, w)), h.length !== 1 || u || c(f);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (s.title = "browser"),
          (s.browser = !0),
          (s.env = {}),
          (s.argv = []),
          (s.version = ""),
          (s.versions = {}),
          (s.on = k),
          (s.addListener = k),
          (s.once = k),
          (s.off = k),
          (s.removeListener = k),
          (s.removeAllListeners = k),
          (s.emit = k),
          (s.prependListener = k),
          (s.prependOnceListener = k),
          (s.listeners = function (v) {
            return [];
          }),
          (s.binding = function (v) {
            throw new Error("process.binding is not supported");
          }),
          (s.cwd = function () {
            return "/";
          }),
          (s.chdir = function (v) {
            throw new Error("process.chdir is not supported");
          }),
          (s.umask = function () {
            return 0;
          });
      },
      function (t, r, n) {
        function i(a, l) {
          for (var c = 0; c < l.length; c++) {
            var d = l[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        var s = n(9);
        t.exports = (function () {
          function a() {
            (function (h, u) {
              if (!(h instanceof u))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
          }
          var l, c, d;
          return (
            (l = a),
            (d = [
              {
                key: "urlEncode",
                value: function (h) {
                  return s(h);
                },
              },
              {
                key: "jsonEncode",
                value: function (h) {
                  return JSON.stringify(h);
                },
              },
              {
                key: "formEncode",
                value: function (h) {
                  if (this.isFormData(h)) return h;
                  if (this.isFormElement(h)) return new FormData(h);
                  if (this.isObject(h)) {
                    var u = new FormData();
                    return (
                      Object.keys(h).forEach(function (p) {
                        var g = h[p];
                        u.append(p, g);
                      }),
                      u
                    );
                  }
                  throw new Error(
                    "`data` must be an instance of Object, FormData or <FORM> HTMLElement",
                  );
                },
              },
              {
                key: "isObject",
                value: function (h) {
                  return (
                    Object.prototype.toString.call(h) === "[object Object]"
                  );
                },
              },
              {
                key: "isFormData",
                value: function (h) {
                  return h instanceof FormData;
                },
              },
              {
                key: "isFormElement",
                value: function (h) {
                  return h instanceof HTMLFormElement;
                },
              },
              {
                key: "selectFiles",
                value: function () {
                  var h =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {};
                  return new Promise(function (u, p) {
                    var g = document.createElement("INPUT");
                    (g.type = "file"),
                      h.multiple && g.setAttribute("multiple", "multiple"),
                      h.accept && g.setAttribute("accept", h.accept),
                      (g.style.display = "none"),
                      document.body.appendChild(g),
                      g.addEventListener(
                        "change",
                        function (f) {
                          var m = f.target.files;
                          u(m), document.body.removeChild(g);
                        },
                        !1,
                      ),
                      g.click();
                  });
                },
              },
              {
                key: "parseHeaders",
                value: function (h) {
                  var u = h.trim().split(/[\r\n]+/),
                    p = {};
                  return (
                    u.forEach(function (g) {
                      var f = g.split(": "),
                        m = f.shift(),
                        k = f.join(": ");
                      m && (p[m] = k);
                    }),
                    p
                  );
                },
              },
            ]),
            (c = null) && i(l.prototype, c),
            d && i(l, d),
            a
          );
        })();
      },
      function (t, r) {
        var n = function (s) {
            return encodeURIComponent(s)
              .replace(/[!'()*]/g, escape)
              .replace(/%20/g, "+");
          },
          i = function (s, a, l, c) {
            return (
              (a = a || null),
              (l = l || "&"),
              (c = c || null),
              s
                ? (function (d) {
                    for (var h = new Array(), u = 0; u < d.length; u++)
                      d[u] && h.push(d[u]);
                    return h;
                  })(
                    Object.keys(s).map(function (d) {
                      var h,
                        u,
                        p = d;
                      if (
                        (c && (p = c + "[" + p + "]"),
                        typeof s[d] == "object" && s[d] !== null)
                      )
                        h = i(s[d], null, l, p);
                      else {
                        a &&
                          ((u = p),
                          (p =
                            !isNaN(parseFloat(u)) && isFinite(u)
                              ? a + Number(p)
                              : p));
                        var g = s[d];
                        (g =
                          (g =
                            (g = (g = g === !0 ? "1" : g) === !1 ? "0" : g) ===
                            0
                              ? "0"
                              : g) || ""),
                          (h = n(p) + "=" + n(g));
                      }
                      return h;
                    }),
                  )
                    .join(l)
                    .replace(/[!'()*]/g, "")
                : ""
            );
          };
        t.exports = i;
      },
    ]);
  });
})(Sd);
var ny = Sd.exports;
const Ut = ry(ny);
function sn(o) {
  return o !== void 0 && typeof o.then == "function";
}
let iy = class {
  constructor({ config: e, onUpload: t, onError: r }) {
    (this.config = e), (this.onUpload = t), (this.onError = r);
  }
  uploadSelectedFile({ onPreview: e }) {
    const t = function (n) {
      const i = new FileReader();
      i.readAsDataURL(n),
        (i.onload = (s) => {
          e(s.target.result);
        });
    };
    let r;
    if (
      this.config.uploader &&
      typeof this.config.uploader.uploadByFile == "function"
    ) {
      const n = this.config.uploader.uploadByFile;
      r = Ut.selectFiles({ accept: this.config.types ?? "image/*" }).then(
        (i) => {
          t(i[0]);
          const s = n(i[0]);
          return (
            sn(s) ||
              console.warn(
                "Custom uploader method uploadByFile should return a Promise",
              ),
            s
          );
        },
      );
    } else
      r = Ut.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (n) => {
          t(n[0]);
        },
        fieldName: this.config.field ?? "image",
      }).then((n) => n.body);
    r.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
    });
  }
  uploadByUrl(e) {
    let t;
    this.config.uploader &&
    typeof this.config.uploader.uploadByUrl == "function"
      ? ((t = this.config.uploader.uploadByUrl(e)),
        sn(t) ||
          console.warn(
            "Custom uploader method uploadByUrl should return a Promise",
          ))
      : (t = Ut.post({
          url: this.config.endpoints.byUrl,
          data: Object.assign({ url: e }, this.config.additionalRequestData),
          type: Ut.contentType.JSON,
          headers: this.config.additionalRequestHeaders,
        }).then((r) => r.body)),
      t
        .then((r) => {
          this.onUpload(r);
        })
        .catch((r) => {
          this.onError(r);
        });
  }
  uploadByFile(e, { onPreview: t }) {
    const r = new FileReader();
    r.readAsDataURL(e),
      (r.onload = (i) => {
        t(i.target.result);
      });
    let n;
    if (
      this.config.uploader &&
      typeof this.config.uploader.uploadByFile == "function"
    )
      (n = this.config.uploader.uploadByFile(e)),
        sn(n) ||
          console.warn(
            "Custom uploader method uploadByFile should return a Promise",
          );
    else {
      const i = new FormData();
      i.append(this.config.field ?? "image", e),
        this.config.additionalRequestData &&
          Object.keys(this.config.additionalRequestData).length &&
          Object.entries(this.config.additionalRequestData).forEach(
            ([s, a]) => {
              i.append(s, a);
            },
          ),
        (n = Ut.post({
          url: this.config.endpoints.byFile,
          data: i,
          type: Ut.contentType.JSON,
          headers: this.config.additionalRequestHeaders,
        }).then((s) => s.body));
    }
    n.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
    });
  }
};
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */ let sy = class Sn {
  constructor({ data: e, config: t, api: r, readOnly: n, block: i }) {
    (this.isCaptionEnabled = null),
      (this.api = r),
      (this.block = i),
      (this.config = {
        endpoints: t.endpoints,
        additionalRequestData: t.additionalRequestData,
        additionalRequestHeaders: t.additionalRequestHeaders,
        field: t.field,
        types: t.types,
        captionPlaceholder: this.api.i18n.t(t.captionPlaceholder ?? "Caption"),
        buttonContent: t.buttonContent,
        uploader: t.uploader,
        actions: t.actions,
        features: t.features || {},
      }),
      (this.uploader = new iy({
        config: this.config,
        onUpload: (s) => this.onUpload(s),
        onError: (s) => this.uploadingFailed(s),
      })),
      (this.ui = new oy({
        api: r,
        config: this.config,
        onSelectFile: () => {
          this.uploader.uploadSelectedFile({
            onPreview: (s) => {
              this.ui.showPreloader(s);
            },
          });
        },
        readOnly: n,
      })),
      (this._data = {
        caption: "",
        withBorder: !1,
        withBackground: !1,
        stretched: !1,
        file: { url: "" },
      }),
      (this.data = e);
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get toolbox() {
    return { icon: _d, title: "Image" };
  }
  static get tunes() {
    return [
      { name: "withBorder", icon: Qb, title: "With border", toggle: !0 },
      { name: "stretched", icon: ey, title: "Stretch image", toggle: !0 },
      {
        name: "withBackground",
        icon: Jb,
        title: "With background",
        toggle: !0,
      },
    ];
  }
  render() {
    var e, t, r;
    return (
      (((e = this.config.features) == null ? void 0 : e.caption) === !0 ||
        ((t = this.config.features) == null ? void 0 : t.caption) === void 0 ||
        (((r = this.config.features) == null ? void 0 : r.caption) ===
          "optional" &&
          this.data.caption)) &&
        (this.isCaptionEnabled = !0),
      this.ui.render()
    );
  }
  validate(e) {
    return !!e.file.url;
  }
  save() {
    const e = this.ui.nodes.caption;
    return (this._data.caption = e.innerHTML), this.data;
  }
  renderSettings() {
    var e;
    const t = Sn.tunes.concat(this.config.actions || []),
      r = {
        border: "withBorder",
        background: "withBackground",
        stretch: "stretched",
        caption: "caption",
      };
    ((e = this.config.features) == null ? void 0 : e.caption) === "optional" &&
      t.push({ name: "caption", icon: ty, title: "With caption", toggle: !0 });
    const n = t.filter((s) => {
        var a, l;
        const c = Object.keys(r).find((d) => r[d] === s.name);
        return c === "caption"
          ? ((a = this.config.features) == null ? void 0 : a.caption) !== !1
          : c == null ||
              ((l = this.config.features) == null ? void 0 : l[c]) !== !1;
      }),
      i = (s) => {
        let a = this.data[s.name];
        return s.name === "caption" && (a = this.isCaptionEnabled ?? a), a;
      };
    return n.map((s) => ({
      icon: s.icon,
      label: this.api.i18n.t(s.title),
      name: s.name,
      toggle: s.toggle,
      isActive: i(s),
      onActivate: () => {
        if (typeof s.action == "function") {
          s.action(s.name);
          return;
        }
        let a = !i(s);
        s.name === "caption" &&
          ((this.isCaptionEnabled = !(this.isCaptionEnabled ?? !1)),
          (a = this.isCaptionEnabled)),
          this.tuneToggled(s.name, a);
      },
    }));
  }
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  static get pasteConfig() {
    return {
      tags: [{ img: { src: !0 } }],
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i,
      },
      files: { mimeTypes: ["image/*"] },
    };
  }
  async onPaste(e) {
    switch (e.type) {
      case "tag": {
        const t = e.detail.data;
        if (/^blob:/.test(t.src)) {
          const r = await (await fetch(t.src)).blob();
          this.uploadFile(r);
          break;
        }
        this.uploadUrl(t.src);
        break;
      }
      case "pattern": {
        const t = e.detail.data;
        this.uploadUrl(t);
        break;
      }
      case "file": {
        const t = e.detail.file;
        this.uploadFile(t);
        break;
      }
    }
  }
  set data(e) {
    (this.image = e.file),
      (this._data.caption = e.caption || ""),
      this.ui.fillCaption(this._data.caption),
      Sn.tunes.forEach(({ name: t }) => {
        const r = typeof e[t] < "u" ? e[t] === !0 || e[t] === "true" : !1;
        this.setTune(t, r);
      }),
      e.caption && this.setTune("caption", !0);
  }
  get data() {
    return this._data;
  }
  set image(e) {
    (this._data.file = e || { url: "" }),
      e && e.url && this.ui.fillImage(e.url);
  }
  onUpload(e) {
    e.success && e.file
      ? (this.image = e.file)
      : this.uploadingFailed("incorrect response: " + JSON.stringify(e));
  }
  uploadingFailed(e) {
    console.log("Image Tool: uploading failed because of", e),
      this.api.notifier.show({
        message: this.api.i18n.t("Couldn’t upload image. Please try another."),
        style: "error",
      }),
      this.ui.hidePreloader();
  }
  tuneToggled(e, t) {
    e === "caption"
      ? (this.ui.applyTune(e, t),
        t == !1 && ((this._data.caption = ""), this.ui.fillCaption("")))
      : this.setTune(e, t);
  }
  setTune(e, t) {
    (this._data[e] = t),
      this.ui.applyTune(e, t),
      e === "stretched" &&
        Promise.resolve()
          .then(() => {
            this.block.stretched = t;
          })
          .catch((r) => {
            console.error(r);
          });
  }
  uploadFile(e) {
    this.uploader.uploadByFile(e, {
      onPreview: (t) => {
        this.ui.showPreloader(t);
      },
    });
  }
  uploadUrl(e) {
    this.ui.showPreloader(e), this.uploader.uploadByUrl(e);
  }
};
(function () {
  var o;
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      (e.nonce =
        (o = document.head.querySelector("meta[property=csp-nonce]")) == null
          ? void 0
          : o.content),
        e.appendChild(
          document.createTextNode(
            '.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size)}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;border-top:1px solid var(--color-border)}.tc-add-column--disabled{visibility:hidden}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row--disabled{display:none}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}',
          ),
        ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
function Se(o, e, t = {}) {
  const r = document.createElement(o);
  Array.isArray(e) ? r.classList.add(...e) : e && r.classList.add(e);
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
  return r;
}
function qa(o) {
  const e = o.getBoundingClientRect();
  return {
    y1: Math.floor(e.top + window.pageYOffset),
    x1: Math.floor(e.left + window.pageXOffset),
    x2: Math.floor(e.right + window.pageXOffset),
    y2: Math.floor(e.bottom + window.pageYOffset),
  };
}
function Va(o, e) {
  const t = qa(o),
    r = qa(e);
  return {
    fromTopBorder: r.y1 - t.y1,
    fromLeftBorder: r.x1 - t.x1,
    fromRightBorder: t.x2 - r.x2,
    fromBottomBorder: t.y2 - r.y2,
  };
}
function ay(o, e) {
  const t = o.getBoundingClientRect(),
    { width: r, height: n, x: i, y: s } = t,
    { clientX: a, clientY: l } = e;
  return { width: r, height: n, x: a - i, y: l - s };
}
function Ya(o, e) {
  return e.parentNode.insertBefore(o, e);
}
function Ka(o, e = !0) {
  const t = document.createRange(),
    r = window.getSelection();
  t.selectNodeContents(o), t.collapse(e), r.removeAllRanges(), r.addRange(t);
}
let ly = class Ce {
  constructor({ items: e }) {
    (this.items = e), (this.wrapper = void 0), (this.itemEls = []);
  }
  static get CSS() {
    return {
      popover: "tc-popover",
      popoverOpened: "tc-popover--opened",
      item: "tc-popover__item",
      itemHidden: "tc-popover__item--hidden",
      itemConfirmState: "tc-popover__item--confirm",
      itemIcon: "tc-popover__item-icon",
      itemLabel: "tc-popover__item-label",
    };
  }
  render() {
    return (
      (this.wrapper = Se("div", Ce.CSS.popover)),
      this.items.forEach((e, t) => {
        const r = Se("div", Ce.CSS.item),
          n = Se("div", Ce.CSS.itemIcon, { innerHTML: e.icon }),
          i = Se("div", Ce.CSS.itemLabel, { textContent: e.label });
        (r.dataset.index = t),
          r.appendChild(n),
          r.appendChild(i),
          this.wrapper.appendChild(r),
          this.itemEls.push(r);
      }),
      this.wrapper.addEventListener("click", (e) => {
        this.popoverClicked(e);
      }),
      this.wrapper
    );
  }
  popoverClicked(e) {
    const t = e.target.closest(`.${Ce.CSS.item}`);
    if (!t) return;
    const r = t.dataset.index,
      n = this.items[r];
    if (n.confirmationRequired && !this.hasConfirmationState(t)) {
      this.setConfirmationState(t);
      return;
    }
    n.onClick();
  }
  setConfirmationState(e) {
    e.classList.add(Ce.CSS.itemConfirmState);
  }
  clearConfirmationState(e) {
    e.classList.remove(Ce.CSS.itemConfirmState);
  }
  hasConfirmationState(e) {
    return e.classList.contains(Ce.CSS.itemConfirmState);
  }
  get opened() {
    return this.wrapper.classList.contains(Ce.CSS.popoverOpened);
  }
  open() {
    this.items.forEach((e, t) => {
      typeof e.hideIf == "function" &&
        this.itemEls[t].classList.toggle(Ce.CSS.itemHidden, e.hideIf());
    }),
      this.wrapper.classList.add(Ce.CSS.popoverOpened);
  }
  close() {
    this.wrapper.classList.remove(Ce.CSS.popoverOpened),
      this.itemEls.forEach((e) => {
        this.clearConfirmationState(e);
      });
  }
};
const cy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>',
  Xa =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',
  dy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>',
  uy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>',
  hy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>',
  py =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>',
  fy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>',
  Ga =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',
  gy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',
  my =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',
  vy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',
  by =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
let Za = class Vt {
  constructor({
    api: e,
    items: t,
    onOpen: r,
    onClose: n,
    cssModifier: i = "",
  }) {
    (this.api = e),
      (this.items = t),
      (this.onOpen = r),
      (this.onClose = n),
      (this.cssModifier = i),
      (this.popover = null),
      (this.wrapper = this.createToolbox());
  }
  static get CSS() {
    return {
      toolbox: "tc-toolbox",
      toolboxShowed: "tc-toolbox--showed",
      toggler: "tc-toolbox__toggler",
    };
  }
  get element() {
    return this.wrapper;
  }
  createToolbox() {
    const e = Se("div", [
      Vt.CSS.toolbox,
      this.cssModifier ? `${Vt.CSS.toolbox}--${this.cssModifier}` : "",
    ]);
    e.dataset.mutationFree = "true";
    const t = this.createPopover(),
      r = this.createToggler();
    return e.appendChild(r), e.appendChild(t), e;
  }
  createToggler() {
    const e = Se("div", Vt.CSS.toggler, { innerHTML: fy });
    return (
      e.addEventListener("click", () => {
        this.togglerClicked();
      }),
      e
    );
  }
  createPopover() {
    return (
      (this.popover = new ly({ items: this.items })), this.popover.render()
    );
  }
  togglerClicked() {
    this.popover.opened
      ? (this.popover.close(), this.onClose())
      : (this.popover.open(), this.onOpen());
  }
  show(e) {
    const t = e();
    Object.entries(t).forEach(([r, n]) => {
      this.wrapper.style[r] = n;
    }),
      this.wrapper.classList.add(Vt.CSS.toolboxShowed);
  }
  hide() {
    this.popover.close(), this.wrapper.classList.remove(Vt.CSS.toolboxShowed);
  }
};
function yy(o, e) {
  let t = 0;
  return function (...r) {
    const n = new Date().getTime();
    if (!(n - t < o)) return (t = n), e(...r);
  };
}
const D = {
  wrapper: "tc-wrap",
  wrapperReadOnly: "tc-wrap--readonly",
  table: "tc-table",
  row: "tc-row",
  withHeadings: "tc-table--heading",
  rowSelected: "tc-row--selected",
  cell: "tc-cell",
  cellSelected: "tc-cell--selected",
  addRow: "tc-add-row",
  addRowDisabled: "tc-add-row--disabled",
  addColumn: "tc-add-column",
  addColumnDisabled: "tc-add-column--disabled",
};
let ky = class {
    constructor(e, t, r, n) {
      (this.readOnly = e),
        (this.api = t),
        (this.data = r),
        (this.config = n),
        (this.wrapper = null),
        (this.table = null),
        (this.toolboxColumn = this.createColumnToolbox()),
        (this.toolboxRow = this.createRowToolbox()),
        this.createTableWrapper(),
        (this.hoveredRow = 0),
        (this.hoveredColumn = 0),
        (this.selectedRow = 0),
        (this.selectedColumn = 0),
        (this.tunes = { withHeadings: !1 }),
        this.resize(),
        this.fill(),
        (this.focusedCell = { row: 0, column: 0 }),
        (this.documentClicked = (i) => {
          const s = i.target.closest(`.${D.table}`) !== null,
            a = i.target.closest(`.${D.wrapper}`) === null;
          (s || a) && this.hideToolboxes();
          const l = i.target.closest(`.${D.addRow}`),
            c = i.target.closest(`.${D.addColumn}`);
          l && l.parentNode === this.wrapper
            ? (this.addRow(void 0, !0), this.hideToolboxes())
            : c &&
              c.parentNode === this.wrapper &&
              (this.addColumn(void 0, !0), this.hideToolboxes());
        }),
        this.readOnly || this.bindEvents();
    }
    getWrapper() {
      return this.wrapper;
    }
    bindEvents() {
      document.addEventListener("click", this.documentClicked),
        this.table.addEventListener(
          "mousemove",
          yy(150, (e) => this.onMouseMoveInTable(e)),
          { passive: !0 },
        ),
        (this.table.onkeypress = (e) => this.onKeyPressListener(e)),
        this.table.addEventListener("keydown", (e) =>
          this.onKeyDownListener(e),
        ),
        this.table.addEventListener("focusin", (e) =>
          this.focusInTableListener(e),
        );
    }
    createColumnToolbox() {
      return new Za({
        api: this.api,
        cssModifier: "column",
        items: [
          {
            label: this.api.i18n.t("Add column to left"),
            icon: uy,
            hideIf: () => this.numberOfColumns === this.config.maxcols,
            onClick: () => {
              this.addColumn(this.selectedColumn, !0), this.hideToolboxes();
            },
          },
          {
            label: this.api.i18n.t("Add column to right"),
            icon: hy,
            hideIf: () => this.numberOfColumns === this.config.maxcols,
            onClick: () => {
              this.addColumn(this.selectedColumn + 1, !0), this.hideToolboxes();
            },
          },
          {
            label: this.api.i18n.t("Delete column"),
            icon: Xa,
            hideIf: () => this.numberOfColumns === 1,
            confirmationRequired: !0,
            onClick: () => {
              this.deleteColumn(this.selectedColumn), this.hideToolboxes();
            },
          },
        ],
        onOpen: () => {
          this.selectColumn(this.hoveredColumn), this.hideRowToolbox();
        },
        onClose: () => {
          this.unselectColumn();
        },
      });
    }
    createRowToolbox() {
      return new Za({
        api: this.api,
        cssModifier: "row",
        items: [
          {
            label: this.api.i18n.t("Add row above"),
            icon: py,
            hideIf: () => this.numberOfRows === this.config.maxrows,
            onClick: () => {
              this.addRow(this.selectedRow, !0), this.hideToolboxes();
            },
          },
          {
            label: this.api.i18n.t("Add row below"),
            icon: dy,
            hideIf: () => this.numberOfRows === this.config.maxrows,
            onClick: () => {
              this.addRow(this.selectedRow + 1, !0), this.hideToolboxes();
            },
          },
          {
            label: this.api.i18n.t("Delete row"),
            icon: Xa,
            hideIf: () => this.numberOfRows === 1,
            confirmationRequired: !0,
            onClick: () => {
              this.deleteRow(this.selectedRow), this.hideToolboxes();
            },
          },
        ],
        onOpen: () => {
          this.selectRow(this.hoveredRow), this.hideColumnToolbox();
        },
        onClose: () => {
          this.unselectRow();
        },
      });
    }
    moveCursorToNextRow() {
      this.focusedCell.row !== this.numberOfRows
        ? ((this.focusedCell.row += 1), this.focusCell(this.focusedCell))
        : (this.addRow(),
          (this.focusedCell.row += 1),
          this.focusCell(this.focusedCell),
          this.updateToolboxesPosition(0, 0));
    }
    getCell(e, t) {
      return this.table.querySelectorAll(
        `.${D.row}:nth-child(${e}) .${D.cell}`,
      )[t - 1];
    }
    getRow(e) {
      return this.table.querySelector(`.${D.row}:nth-child(${e})`);
    }
    getRowByCell(e) {
      return e.parentElement;
    }
    getRowFirstCell(e) {
      return e.querySelector(`.${D.cell}:first-child`);
    }
    setCellContent(e, t, r) {
      const n = this.getCell(e, t);
      n.innerHTML = r;
    }
    addColumn(e = -1, t = !1) {
      var r;
      let n = this.numberOfColumns;
      if (
        this.config &&
        this.config.maxcols &&
        this.numberOfColumns >= this.config.maxcols
      )
        return;
      for (let s = 1; s <= this.numberOfRows; s++) {
        let a;
        const l = this.createCell();
        if (
          (e > 0 && e <= n
            ? ((a = this.getCell(s, e)), Ya(l, a))
            : (a = this.getRow(s).appendChild(l)),
          s === 1)
        ) {
          const c = this.getCell(s, e > 0 ? e : n + 1);
          c && t && Ka(c);
        }
      }
      const i = this.wrapper.querySelector(`.${D.addColumn}`);
      (r = this.config) != null &&
        r.maxcols &&
        this.numberOfColumns > this.config.maxcols - 1 &&
        i &&
        i.classList.add(D.addColumnDisabled),
        this.addHeadingAttrToFirstRow();
    }
    addRow(e = -1, t = !1) {
      let r,
        n = Se("div", D.row);
      this.tunes.withHeadings && this.removeHeadingAttrFromFirstRow();
      let i = this.numberOfColumns;
      if (
        this.config &&
        this.config.maxrows &&
        this.numberOfRows >= this.config.maxrows &&
        a
      )
        return;
      if (e > 0 && e <= this.numberOfRows) {
        let l = this.getRow(e);
        r = Ya(n, l);
      } else r = this.table.appendChild(n);
      this.fillRow(r, i),
        this.tunes.withHeadings && this.addHeadingAttrToFirstRow();
      const s = this.getRowFirstCell(r);
      s && t && Ka(s);
      const a = this.wrapper.querySelector(`.${D.addRow}`);
      return (
        this.config &&
          this.config.maxrows &&
          this.numberOfRows >= this.config.maxrows &&
          a &&
          a.classList.add(D.addRowDisabled),
        r
      );
    }
    deleteColumn(e) {
      for (let r = 1; r <= this.numberOfRows; r++) {
        const n = this.getCell(r, e);
        if (!n) return;
        n.remove();
      }
      const t = this.wrapper.querySelector(`.${D.addColumn}`);
      t && t.classList.remove(D.addColumnDisabled);
    }
    deleteRow(e) {
      this.getRow(e).remove();
      const t = this.wrapper.querySelector(`.${D.addRow}`);
      t && t.classList.remove(D.addRowDisabled),
        this.addHeadingAttrToFirstRow();
    }
    createTableWrapper() {
      if (
        ((this.wrapper = Se("div", D.wrapper)),
        (this.table = Se("div", D.table)),
        this.readOnly && this.wrapper.classList.add(D.wrapperReadOnly),
        this.wrapper.appendChild(this.toolboxRow.element),
        this.wrapper.appendChild(this.toolboxColumn.element),
        this.wrapper.appendChild(this.table),
        !this.readOnly)
      ) {
        const e = Se("div", D.addColumn, { innerHTML: Ga }),
          t = Se("div", D.addRow, { innerHTML: Ga });
        this.wrapper.appendChild(e), this.wrapper.appendChild(t);
      }
    }
    computeInitialSize() {
      const e = this.data && this.data.content,
        t = Array.isArray(e),
        r = t ? e.length : !1,
        n = t ? e.length : void 0,
        i = r ? e[0].length : void 0,
        s = Number.parseInt(this.config && this.config.rows),
        a = Number.parseInt(this.config && this.config.cols),
        l = !isNaN(s) && s > 0 ? s : void 0,
        c = !isNaN(a) && a > 0 ? a : void 0;
      return { rows: n || l || 2, cols: i || c || 2 };
    }
    resize() {
      const { rows: e, cols: t } = this.computeInitialSize();
      for (let r = 0; r < e; r++) this.addRow();
      for (let r = 0; r < t; r++) this.addColumn();
    }
    fill() {
      const e = this.data;
      if (e && e.content)
        for (let t = 0; t < e.content.length; t++)
          for (let r = 0; r < e.content[t].length; r++)
            this.setCellContent(t + 1, r + 1, e.content[t][r]);
    }
    fillRow(e, t) {
      for (let r = 1; r <= t; r++) {
        const n = this.createCell();
        e.appendChild(n);
      }
    }
    createCell() {
      return Se("div", D.cell, { contentEditable: !this.readOnly });
    }
    get numberOfRows() {
      return this.table.childElementCount;
    }
    get numberOfColumns() {
      return this.numberOfRows
        ? this.table.querySelectorAll(`.${D.row}:first-child .${D.cell}`).length
        : 0;
    }
    get isColumnMenuShowing() {
      return this.selectedColumn !== 0;
    }
    get isRowMenuShowing() {
      return this.selectedRow !== 0;
    }
    onMouseMoveInTable(e) {
      const { row: t, column: r } = this.getHoveredCell(e);
      (this.hoveredColumn = r),
        (this.hoveredRow = t),
        this.updateToolboxesPosition();
    }
    onKeyPressListener(e) {
      if (e.key === "Enter") {
        if (e.shiftKey) return !0;
        this.moveCursorToNextRow();
      }
      return e.key !== "Enter";
    }
    onKeyDownListener(e) {
      e.key === "Tab" && e.stopPropagation();
    }
    focusInTableListener(e) {
      const t = e.target,
        r = this.getRowByCell(t);
      this.focusedCell = {
        row:
          Array.from(this.table.querySelectorAll(`.${D.row}`)).indexOf(r) + 1,
        column: Array.from(r.querySelectorAll(`.${D.cell}`)).indexOf(t) + 1,
      };
    }
    hideToolboxes() {
      this.hideRowToolbox(),
        this.hideColumnToolbox(),
        this.updateToolboxesPosition();
    }
    hideRowToolbox() {
      this.unselectRow(), this.toolboxRow.hide();
    }
    hideColumnToolbox() {
      this.unselectColumn(), this.toolboxColumn.hide();
    }
    focusCell() {
      this.focusedCellElem.focus();
    }
    get focusedCellElem() {
      const { row: e, column: t } = this.focusedCell;
      return this.getCell(e, t);
    }
    updateToolboxesPosition(e = this.hoveredRow, t = this.hoveredColumn) {
      this.isColumnMenuShowing ||
        (t > 0 &&
          t <= this.numberOfColumns &&
          this.toolboxColumn.show(() => ({
            left: `calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${t} - 1) * 2))`,
          }))),
        this.isRowMenuShowing ||
          (e > 0 &&
            e <= this.numberOfRows &&
            this.toolboxRow.show(() => {
              const r = this.getRow(e),
                { fromTopBorder: n } = Va(this.table, r),
                { height: i } = r.getBoundingClientRect();
              return { top: `${Math.ceil(n + i / 2)}px` };
            }));
    }
    setHeadingsSetting(e) {
      (this.tunes.withHeadings = e),
        e
          ? (this.table.classList.add(D.withHeadings),
            this.addHeadingAttrToFirstRow())
          : (this.table.classList.remove(D.withHeadings),
            this.removeHeadingAttrFromFirstRow());
    }
    addHeadingAttrToFirstRow() {
      for (let e = 1; e <= this.numberOfColumns; e++) {
        let t = this.getCell(1, e);
        t && t.setAttribute("heading", this.api.i18n.t("Heading"));
      }
    }
    removeHeadingAttrFromFirstRow() {
      for (let e = 1; e <= this.numberOfColumns; e++) {
        let t = this.getCell(1, e);
        t && t.removeAttribute("heading");
      }
    }
    selectRow(e) {
      const t = this.getRow(e);
      t && ((this.selectedRow = e), t.classList.add(D.rowSelected));
    }
    unselectRow() {
      if (this.selectedRow <= 0) return;
      const e = this.table.querySelector(`.${D.rowSelected}`);
      e && e.classList.remove(D.rowSelected), (this.selectedRow = 0);
    }
    selectColumn(e) {
      for (let t = 1; t <= this.numberOfRows; t++) {
        const r = this.getCell(t, e);
        r && r.classList.add(D.cellSelected);
      }
      this.selectedColumn = e;
    }
    unselectColumn() {
      if (this.selectedColumn <= 0) return;
      let e = this.table.querySelectorAll(`.${D.cellSelected}`);
      Array.from(e).forEach((t) => {
        t.classList.remove(D.cellSelected);
      }),
        (this.selectedColumn = 0);
    }
    getHoveredCell(e) {
      let t = this.hoveredRow,
        r = this.hoveredColumn;
      const { width: n, height: i, x: s, y: a } = ay(this.table, e);
      return (
        s >= 0 &&
          (r = this.binSearch(
            this.numberOfColumns,
            (l) => this.getCell(1, l),
            ({ fromLeftBorder: l }) => s < l,
            ({ fromRightBorder: l }) => s > n - l,
          )),
        a >= 0 &&
          (t = this.binSearch(
            this.numberOfRows,
            (l) => this.getCell(l, 1),
            ({ fromTopBorder: l }) => a < l,
            ({ fromBottomBorder: l }) => a > i - l,
          )),
        { row: t || this.hoveredRow, column: r || this.hoveredColumn }
      );
    }
    binSearch(e, t, r, n) {
      let i = 0,
        s = e + 1,
        a = 0,
        l;
      for (; i < s - 1 && a < 10; ) {
        l = Math.ceil((i + s) / 2);
        const c = t(l),
          d = Va(this.table, c);
        if (r(d)) s = l;
        else if (n(d)) i = l;
        else break;
        a++;
      }
      return l;
    }
    getData() {
      const e = [];
      for (let t = 1; t <= this.numberOfRows; t++) {
        const r = this.table.querySelector(`.${D.row}:nth-child(${t})`),
          n = Array.from(r.querySelectorAll(`.${D.cell}`));
        n.every((i) => !i.textContent.trim()) ||
          e.push(n.map((i) => i.innerHTML));
      }
      return e;
    }
    destroy() {
      document.removeEventListener("click", this.documentClicked);
    }
  },
  wy = class {
    static get isReadOnlySupported() {
      return !0;
    }
    static get enableLineBreaks() {
      return !0;
    }
    constructor({ data: e, config: t, api: r, readOnly: n, block: i }) {
      (this.api = r),
        (this.readOnly = n),
        (this.config = t),
        (this.data = {
          withHeadings: this.getConfig("withHeadings", !1, e),
          stretched: this.getConfig("stretched", !1, e),
          content: e && e.content ? e.content : [],
        }),
        (this.table = null),
        (this.block = i);
    }
    static get toolbox() {
      return { icon: by, title: "Table" };
    }
    render() {
      return (
        (this.table = new ky(this.readOnly, this.api, this.data, this.config)),
        (this.container = Se("div", this.api.styles.block)),
        this.container.appendChild(this.table.getWrapper()),
        this.table.setHeadingsSetting(this.data.withHeadings),
        this.container
      );
    }
    renderSettings() {
      return [
        {
          label: this.api.i18n.t("With headings"),
          icon: my,
          isActive: this.data.withHeadings,
          closeOnActivate: !0,
          toggle: !0,
          onActivate: () => {
            (this.data.withHeadings = !0),
              this.table.setHeadingsSetting(this.data.withHeadings);
          },
        },
        {
          label: this.api.i18n.t("Without headings"),
          icon: vy,
          isActive: !this.data.withHeadings,
          closeOnActivate: !0,
          toggle: !0,
          onActivate: () => {
            (this.data.withHeadings = !1),
              this.table.setHeadingsSetting(this.data.withHeadings);
          },
        },
        {
          label: this.data.stretched
            ? this.api.i18n.t("Collapse")
            : this.api.i18n.t("Stretch"),
          icon: this.data.stretched ? cy : gy,
          closeOnActivate: !0,
          toggle: !0,
          onActivate: () => {
            (this.data.stretched = !this.data.stretched),
              (this.block.stretched = this.data.stretched);
          },
        },
      ];
    }
    save() {
      const e = this.table.getData();
      return {
        withHeadings: this.data.withHeadings,
        stretched: this.data.stretched,
        content: e,
      };
    }
    destroy() {
      this.table.destroy();
    }
    getConfig(e, t = void 0, r = void 0) {
      const n = this.data || r;
      return n
        ? n[e]
          ? n[e]
          : t
        : this.config && this.config[e]
          ? this.config[e]
          : t;
    }
    static get pasteConfig() {
      return { tags: ["TABLE", "TR", "TH", "TD"] };
    }
    onPaste(e) {
      const t = e.detail.data,
        r = t.querySelector(":scope > thead, tr:first-of-type th"),
        n = Array.from(t.querySelectorAll("tr")).map((i) =>
          Array.from(i.querySelectorAll("th, td")).map((s) => s.innerHTML),
        );
      (this.data = { withHeadings: r !== null, content: n }),
        this.table.wrapper && this.table.wrapper.replaceWith(this.render());
    }
  };
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}",
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const xy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>',
  Cy =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>',
  Ey =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
var vr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function _y(o) {
  if (o.__esModule) return o;
  var e = o.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(o).forEach(function (r) {
      var n = Object.getOwnPropertyDescriptor(o, r);
      Object.defineProperty(
        t,
        r,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return o[r];
              },
            },
      );
    }),
    t
  );
}
var Zo = {},
  Os = {},
  Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.allInputsSelector = Sy;
function Sy() {
  var o = ["text", "password", "email", "number", "search", "tel", "url"];
  return (
    "[contenteditable=true], textarea, input:not([type]), " +
    o
      .map(function (e) {
        return 'input[type="'.concat(e, '"]');
      })
      .join(", ")
  );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.allInputsSelector = void 0);
  var e = Bs;
  Object.defineProperty(o, "allInputsSelector", {
    enumerable: !0,
    get: function () {
      return e.allInputsSelector;
    },
  });
})(Os);
var jt = {},
  Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.isNativeInput = Ty;
function Ty(o) {
  var e = ["INPUT", "TEXTAREA"];
  return o && o.tagName ? e.includes(o.tagName) : !1;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isNativeInput = void 0);
  var e = Ms;
  Object.defineProperty(o, "isNativeInput", {
    enumerable: !0,
    get: function () {
      return e.isNativeInput;
    },
  });
})(jt);
var Td = {},
  Is = {};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.append = Oy;
function Oy(o, e) {
  Array.isArray(e)
    ? e.forEach(function (t) {
        o.appendChild(t);
      })
    : o.appendChild(e);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.append = void 0);
  var e = Is;
  Object.defineProperty(o, "append", {
    enumerable: !0,
    get: function () {
      return e.append;
    },
  });
})(Td);
var Ls = {},
  Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.blockElements = By;
function By() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video",
  ];
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.blockElements = void 0);
  var e = Ps;
  Object.defineProperty(o, "blockElements", {
    enumerable: !0,
    get: function () {
      return e.blockElements;
    },
  });
})(Ls);
var Od = {},
  Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.calculateBaseline = My;
function My(o) {
  var e = window.getComputedStyle(o),
    t = parseFloat(e.fontSize),
    r = parseFloat(e.lineHeight) || t * 1.2,
    n = parseFloat(e.paddingTop),
    i = parseFloat(e.borderTopWidth),
    s = parseFloat(e.marginTop),
    a = t * 0.8,
    l = (r - t) / 2,
    c = s + i + n + l + a;
  return c;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.calculateBaseline = void 0);
  var e = Ns;
  Object.defineProperty(o, "calculateBaseline", {
    enumerable: !0,
    get: function () {
      return e.calculateBaseline;
    },
  });
})(Od);
var Bd = {},
  As = {},
  js = {},
  Rs = {};
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.isContentEditable = Iy;
function Iy(o) {
  return o.contentEditable === "true";
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isContentEditable = void 0);
  var e = Rs;
  Object.defineProperty(o, "isContentEditable", {
    enumerable: !0,
    get: function () {
      return e.isContentEditable;
    },
  });
})(js);
Object.defineProperty(As, "__esModule", { value: !0 });
As.canSetCaret = Ny;
var Ly = jt,
  Py = js;
function Ny(o) {
  var e = !0;
  if ((0, Ly.isNativeInput)(o))
    switch (o.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else e = (0, Py.isContentEditable)(o);
  return e;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.canSetCaret = void 0);
  var e = As;
  Object.defineProperty(o, "canSetCaret", {
    enumerable: !0,
    get: function () {
      return e.canSetCaret;
    },
  });
})(Bd);
var Hr = {},
  Ds = {};
function Ay(o, e, t) {
  const r = t.value !== void 0 ? "value" : "get",
    n = t[r],
    i = `#${e}Cache`;
  if (
    ((t[r] = function (...s) {
      return this[i] === void 0 && (this[i] = n.apply(this, s)), this[i];
    }),
    r === "get" && t.set)
  ) {
    const s = t.set;
    t.set = function (a) {
      delete o[i], s.apply(this, a);
    };
  }
  return t;
}
function Md() {
  const o = { win: !1, mac: !1, x11: !1, linux: !1 },
    e = Object.keys(o).find(
      (t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1,
    );
  return e !== void 0 && (o[e] = !0), o;
}
function $s(o) {
  return (
    o != null && o !== "" && (typeof o != "object" || Object.keys(o).length > 0)
  );
}
function jy(o) {
  return !$s(o);
}
const Ry = () =>
  typeof window < "u" &&
  window.navigator !== null &&
  $s(window.navigator.platform) &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1));
function Dy(o) {
  const e = Md();
  return (
    (o = o
      .replace(/shift/gi, "⇧")
      .replace(/backspace/gi, "⌫")
      .replace(/enter/gi, "⏎")
      .replace(/up/gi, "↑")
      .replace(/left/gi, "→")
      .replace(/down/gi, "↓")
      .replace(/right/gi, "←")
      .replace(/escape/gi, "⎋")
      .replace(/insert/gi, "Ins")
      .replace(/delete/gi, "␡")
      .replace(/\+/gi, "+")),
    e.mac
      ? (o = o.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥"))
      : (o = o.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN")),
    o
  );
}
function $y(o) {
  return o[0].toUpperCase() + o.slice(1);
}
function Hy(o) {
  const e = document.createElement("div");
  (e.style.position = "absolute"),
    (e.style.left = "-999px"),
    (e.style.bottom = "-999px"),
    (e.innerHTML = o),
    document.body.appendChild(e);
  const t = window.getSelection(),
    r = document.createRange();
  if ((r.selectNode(e), t === null))
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(),
    t.addRange(r),
    document.execCommand("copy"),
    document.body.removeChild(e);
}
function Fy(o, e, t) {
  let r;
  return (...n) => {
    const i = this,
      s = () => {
        (r = void 0), t !== !0 && o.apply(i, n);
      },
      a = t === !0 && r !== void 0;
    window.clearTimeout(r), (r = window.setTimeout(s, e)), a && o.apply(i, n);
  };
}
function xt(o) {
  return Object.prototype.toString
    .call(o)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
function Uy(o) {
  return xt(o) === "boolean";
}
function Id(o) {
  return xt(o) === "function" || xt(o) === "asyncfunction";
}
function zy(o) {
  return Id(o) && /^\s*class\s+/.test(o.toString());
}
function Wy(o) {
  return xt(o) === "number";
}
function Jo(o) {
  return xt(o) === "object";
}
function qy(o) {
  return Promise.resolve(o) === o;
}
function Vy(o) {
  return xt(o) === "string";
}
function Yy(o) {
  return xt(o) === "undefined";
}
function Tn(o, ...e) {
  if (!e.length) return o;
  const t = e.shift();
  if (Jo(o) && Jo(t))
    for (const r in t)
      Jo(t[r])
        ? (o[r] === void 0 && Object.assign(o, { [r]: {} }), Tn(o[r], t[r]))
        : Object.assign(o, { [r]: t[r] });
  return Tn(o, ...e);
}
function Ky(o, e, t) {
  const r = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  o && console.warn(r);
}
function Xy(o) {
  try {
    return new URL(o).href;
  } catch {}
  return o.substring(0, 2) === "//"
    ? window.location.protocol + o
    : window.location.origin + o;
}
function Gy(o) {
  return (
    (o > 47 && o < 58) ||
    o === 32 ||
    o === 13 ||
    o === 229 ||
    (o > 64 && o < 91) ||
    (o > 95 && o < 112) ||
    (o > 185 && o < 193) ||
    (o > 218 && o < 223)
  );
}
const Zy = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191,
  },
  Jy = { LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4 };
class Qy {
  constructor() {
    this.completed = Promise.resolve();
  }
  add(e) {
    return new Promise((t, r) => {
      this.completed = this.completed.then(e).then(t).catch(r);
    });
  }
}
function e1(o, e, t = void 0) {
  let r,
    n,
    i,
    s = null,
    a = 0;
  t || (t = {});
  const l = function () {
    (a = t.leading === !1 ? 0 : Date.now()),
      (s = null),
      (i = o.apply(r, n)),
      s === null && (r = n = null);
  };
  return function () {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const d = e - (c - a);
    return (
      (r = this),
      (n = arguments),
      d <= 0 || d > e
        ? (s && (clearTimeout(s), (s = null)),
          (a = c),
          (i = o.apply(r, n)),
          s === null && (r = n = null))
        : !s && t.trailing !== !1 && (s = setTimeout(l, d)),
      i
    );
  };
}
const t1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        PromiseQueue: Qy,
        beautifyShortcut: Dy,
        cacheable: Ay,
        capitalize: $y,
        copyTextToClipboard: Hy,
        debounce: Fy,
        deepMerge: Tn,
        deprecationAssert: Ky,
        getUserOS: Md,
        getValidUrl: Xy,
        isBoolean: Uy,
        isClass: zy,
        isEmpty: jy,
        isFunction: Id,
        isIosDevice: Ry,
        isNumber: Wy,
        isObject: Jo,
        isPrintableKey: Gy,
        isPromise: qy,
        isString: Vy,
        isUndefined: Yy,
        keyCodes: Zy,
        mouseButtons: Jy,
        notEmpty: $s,
        throttle: e1,
        typeOf: xt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Hs = _y(t1);
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.containsOnlyInlineElements = n1;
var o1 = Hs,
  r1 = Ls;
function n1(o) {
  var e;
  (0, o1.isString)(o)
    ? ((e = document.createElement("div")), (e.innerHTML = o))
    : (e = o);
  var t = function (r) {
    return (
      !(0, r1.blockElements)().includes(r.tagName.toLowerCase()) &&
      Array.from(r.children).every(t)
    );
  };
  return Array.from(e.children).every(t);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.containsOnlyInlineElements = void 0);
  var e = Ds;
  Object.defineProperty(o, "containsOnlyInlineElements", {
    enumerable: !0,
    get: function () {
      return e.containsOnlyInlineElements;
    },
  });
})(Hr);
var Ld = {},
  Fs = {},
  Fr = {},
  Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.make = i1;
function i1(o, e, t) {
  var r;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var n = document.createElement(o);
  if (Array.isArray(e)) {
    var i = e.filter(function (a) {
      return a !== void 0;
    });
    (r = n.classList).add.apply(r, i);
  } else e !== null && n.classList.add(e);
  for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s]);
  return n;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.make = void 0);
  var e = Us;
  Object.defineProperty(o, "make", {
    enumerable: !0,
    get: function () {
      return e.make;
    },
  });
})(Fr);
Object.defineProperty(Fs, "__esModule", { value: !0 });
Fs.fragmentToString = a1;
var s1 = Fr;
function a1(o) {
  var e = (0, s1.make)("div");
  return e.appendChild(o), e.innerHTML;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.fragmentToString = void 0);
  var e = Fs;
  Object.defineProperty(o, "fragmentToString", {
    enumerable: !0,
    get: function () {
      return e.fragmentToString;
    },
  });
})(Ld);
var Pd = {},
  zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
zs.getContentLength = c1;
var l1 = jt;
function c1(o) {
  var e, t;
  return (0, l1.isNativeInput)(o)
    ? o.value.length
    : o.nodeType === Node.TEXT_NODE
      ? o.length
      : (t =
            (e = o.textContent) === null || e === void 0
              ? void 0
              : e.length) !== null && t !== void 0
        ? t
        : 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getContentLength = void 0);
  var e = zs;
  Object.defineProperty(o, "getContentLength", {
    enumerable: !0,
    get: function () {
      return e.getContentLength;
    },
  });
})(Pd);
var Ws = {},
  qs = {},
  Ja =
    (vr && vr.__spreadArray) ||
    function (o, e, t) {
      if (t || arguments.length === 2)
        for (var r = 0, n = e.length, i; r < n; r++)
          (i || !(r in e)) &&
            (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
      return o.concat(i || Array.prototype.slice.call(e));
    };
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.getDeepestBlockElements = Nd;
var d1 = Hr;
function Nd(o) {
  return (0, d1.containsOnlyInlineElements)(o)
    ? [o]
    : Array.from(o.children).reduce(function (e, t) {
        return Ja(Ja([], e, !0), Nd(t), !0);
      }, []);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getDeepestBlockElements = void 0);
  var e = qs;
  Object.defineProperty(o, "getDeepestBlockElements", {
    enumerable: !0,
    get: function () {
      return e.getDeepestBlockElements;
    },
  });
})(Ws);
var Ad = {},
  Vs = {},
  Ur = {},
  Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.isLineBreakTag = u1;
function u1(o) {
  return ["BR", "WBR"].includes(o.tagName);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isLineBreakTag = void 0);
  var e = Ys;
  Object.defineProperty(o, "isLineBreakTag", {
    enumerable: !0,
    get: function () {
      return e.isLineBreakTag;
    },
  });
})(Ur);
var zr = {},
  Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.isSingleTag = h1;
function h1(o) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR",
  ].includes(o.tagName);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isSingleTag = void 0);
  var e = Ks;
  Object.defineProperty(o, "isSingleTag", {
    enumerable: !0,
    get: function () {
      return e.isSingleTag;
    },
  });
})(zr);
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.getDeepestNode = jd;
var p1 = jt,
  f1 = Ur,
  g1 = zr;
function jd(o, e) {
  e === void 0 && (e = !1);
  var t = e ? "lastChild" : "firstChild",
    r = e ? "previousSibling" : "nextSibling";
  if (o.nodeType === Node.ELEMENT_NODE && o[t]) {
    var n = o[t];
    if (
      (0, g1.isSingleTag)(n) &&
      !(0, p1.isNativeInput)(n) &&
      !(0, f1.isLineBreakTag)(n)
    )
      if (n[r]) n = n[r];
      else if (n.parentNode !== null && n.parentNode[r]) n = n.parentNode[r];
      else return n.parentNode;
    return jd(n, e);
  }
  return o;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.getDeepestNode = void 0);
  var e = Vs;
  Object.defineProperty(o, "getDeepestNode", {
    enumerable: !0,
    get: function () {
      return e.getDeepestNode;
    },
  });
})(Ad);
var Rd = {},
  Xs = {},
  Ho =
    (vr && vr.__spreadArray) ||
    function (o, e, t) {
      if (t || arguments.length === 2)
        for (var r = 0, n = e.length, i; r < n; r++)
          (i || !(r in e)) &&
            (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
      return o.concat(i || Array.prototype.slice.call(e));
    };
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.findAllInputs = k1;
var m1 = Hr,
  v1 = Ws,
  b1 = Os,
  y1 = jt;
function k1(o) {
  return Array.from(o.querySelectorAll((0, b1.allInputsSelector)())).reduce(
    function (e, t) {
      return (0, y1.isNativeInput)(t) || (0, m1.containsOnlyInlineElements)(t)
        ? Ho(Ho([], e, !0), [t], !1)
        : Ho(Ho([], e, !0), (0, v1.getDeepestBlockElements)(t), !0);
    },
    [],
  );
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.findAllInputs = void 0);
  var e = Xs;
  Object.defineProperty(o, "findAllInputs", {
    enumerable: !0,
    get: function () {
      return e.findAllInputs;
    },
  });
})(Rd);
var Dd = {},
  Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.isCollapsedWhitespaces = w1;
function w1(o) {
  return !/[^\t\n\r ]/.test(o);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isCollapsedWhitespaces = void 0);
  var e = Gs;
  Object.defineProperty(o, "isCollapsedWhitespaces", {
    enumerable: !0,
    get: function () {
      return e.isCollapsedWhitespaces;
    },
  });
})(Dd);
var Zs = {},
  Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.isElement = C1;
var x1 = Hs;
function C1(o) {
  return (0, x1.isNumber)(o)
    ? !1
    : !!o && !!o.nodeType && o.nodeType === Node.ELEMENT_NODE;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isElement = void 0);
  var e = Js;
  Object.defineProperty(o, "isElement", {
    enumerable: !0,
    get: function () {
      return e.isElement;
    },
  });
})(Zs);
var $d = {},
  Qs = {},
  ea = {},
  ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.isLeaf = E1;
function E1(o) {
  return o === null ? !1 : o.childNodes.length === 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isLeaf = void 0);
  var e = ta;
  Object.defineProperty(o, "isLeaf", {
    enumerable: !0,
    get: function () {
      return e.isLeaf;
    },
  });
})(ea);
var oa = {},
  ra = {};
Object.defineProperty(ra, "__esModule", { value: !0 });
ra.isNodeEmpty = B1;
var _1 = Ur,
  S1 = Zs,
  T1 = jt,
  O1 = zr;
function B1(o, e) {
  var t = "";
  return (0, O1.isSingleTag)(o) && !(0, _1.isLineBreakTag)(o)
    ? !1
    : ((0, S1.isElement)(o) && (0, T1.isNativeInput)(o)
        ? (t = o.value)
        : o.textContent !== null && (t = o.textContent.replace("​", "")),
      e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")),
      t.trim().length === 0);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isNodeEmpty = void 0);
  var e = ra;
  Object.defineProperty(o, "isNodeEmpty", {
    enumerable: !0,
    get: function () {
      return e.isNodeEmpty;
    },
  });
})(oa);
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.isEmpty = L1;
var M1 = ea,
  I1 = oa;
function L1(o, e) {
  o.normalize();
  for (var t = [o]; t.length > 0; ) {
    var r = t.shift();
    if (r) {
      if (((o = r), (0, M1.isLeaf)(o) && !(0, I1.isNodeEmpty)(o, e))) return !1;
      t.push.apply(t, Array.from(o.childNodes));
    }
  }
  return !0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.isEmpty = void 0);
  var e = Qs;
  Object.defineProperty(o, "isEmpty", {
    enumerable: !0,
    get: function () {
      return e.isEmpty;
    },
  });
})($d);
var Hd = {},
  na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
na.isFragment = N1;
var P1 = Hs;
function N1(o) {
  return (0, P1.isNumber)(o)
    ? !1
    : !!o && !!o.nodeType && o.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isFragment = void 0);
  var e = na;
  Object.defineProperty(o, "isFragment", {
    enumerable: !0,
    get: function () {
      return e.isFragment;
    },
  });
})(Hd);
var Fd = {},
  ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.isHTMLString = j1;
var A1 = Fr;
function j1(o) {
  var e = (0, A1.make)("div");
  return (e.innerHTML = o), e.childElementCount > 0;
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.isHTMLString = void 0);
  var e = ia;
  Object.defineProperty(o, "isHTMLString", {
    enumerable: !0,
    get: function () {
      return e.isHTMLString;
    },
  });
})(Fd);
var Ud = {},
  sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.offset = R1;
function R1(o) {
  var e = o.getBoundingClientRect(),
    t = window.pageXOffset || document.documentElement.scrollLeft,
    r = window.pageYOffset || document.documentElement.scrollTop,
    n = e.top + r,
    i = e.left + t;
  return { top: n, left: i, bottom: n + e.height, right: i + e.width };
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.offset = void 0);
  var e = sa;
  Object.defineProperty(o, "offset", {
    enumerable: !0,
    get: function () {
      return e.offset;
    },
  });
})(Ud);
var zd = {},
  aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.prepend = D1;
function D1(o, e) {
  Array.isArray(e)
    ? ((e = e.reverse()),
      e.forEach(function (t) {
        return o.prepend(t);
      }))
    : o.prepend(e);
}
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }), (o.prepend = void 0);
  var e = aa;
  Object.defineProperty(o, "prepend", {
    enumerable: !0,
    get: function () {
      return e.prepend;
    },
  });
})(zd);
(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.prepend =
      o.offset =
      o.make =
      o.isLineBreakTag =
      o.isSingleTag =
      o.isNodeEmpty =
      o.isLeaf =
      o.isHTMLString =
      o.isFragment =
      o.isEmpty =
      o.isElement =
      o.isContentEditable =
      o.isCollapsedWhitespaces =
      o.findAllInputs =
      o.isNativeInput =
      o.allInputsSelector =
      o.getDeepestNode =
      o.getDeepestBlockElements =
      o.getContentLength =
      o.fragmentToString =
      o.containsOnlyInlineElements =
      o.canSetCaret =
      o.calculateBaseline =
      o.blockElements =
      o.append =
        void 0);
  var e = Os;
  Object.defineProperty(o, "allInputsSelector", {
    enumerable: !0,
    get: function () {
      return e.allInputsSelector;
    },
  });
  var t = jt;
  Object.defineProperty(o, "isNativeInput", {
    enumerable: !0,
    get: function () {
      return t.isNativeInput;
    },
  });
  var r = Td;
  Object.defineProperty(o, "append", {
    enumerable: !0,
    get: function () {
      return r.append;
    },
  });
  var n = Ls;
  Object.defineProperty(o, "blockElements", {
    enumerable: !0,
    get: function () {
      return n.blockElements;
    },
  });
  var i = Od;
  Object.defineProperty(o, "calculateBaseline", {
    enumerable: !0,
    get: function () {
      return i.calculateBaseline;
    },
  });
  var s = Bd;
  Object.defineProperty(o, "canSetCaret", {
    enumerable: !0,
    get: function () {
      return s.canSetCaret;
    },
  });
  var a = Hr;
  Object.defineProperty(o, "containsOnlyInlineElements", {
    enumerable: !0,
    get: function () {
      return a.containsOnlyInlineElements;
    },
  });
  var l = Ld;
  Object.defineProperty(o, "fragmentToString", {
    enumerable: !0,
    get: function () {
      return l.fragmentToString;
    },
  });
  var c = Pd;
  Object.defineProperty(o, "getContentLength", {
    enumerable: !0,
    get: function () {
      return c.getContentLength;
    },
  });
  var d = Ws;
  Object.defineProperty(o, "getDeepestBlockElements", {
    enumerable: !0,
    get: function () {
      return d.getDeepestBlockElements;
    },
  });
  var h = Ad;
  Object.defineProperty(o, "getDeepestNode", {
    enumerable: !0,
    get: function () {
      return h.getDeepestNode;
    },
  });
  var u = Rd;
  Object.defineProperty(o, "findAllInputs", {
    enumerable: !0,
    get: function () {
      return u.findAllInputs;
    },
  });
  var p = Dd;
  Object.defineProperty(o, "isCollapsedWhitespaces", {
    enumerable: !0,
    get: function () {
      return p.isCollapsedWhitespaces;
    },
  });
  var g = js;
  Object.defineProperty(o, "isContentEditable", {
    enumerable: !0,
    get: function () {
      return g.isContentEditable;
    },
  });
  var f = Zs;
  Object.defineProperty(o, "isElement", {
    enumerable: !0,
    get: function () {
      return f.isElement;
    },
  });
  var m = $d;
  Object.defineProperty(o, "isEmpty", {
    enumerable: !0,
    get: function () {
      return m.isEmpty;
    },
  });
  var k = Hd;
  Object.defineProperty(o, "isFragment", {
    enumerable: !0,
    get: function () {
      return k.isFragment;
    },
  });
  var v = Fd;
  Object.defineProperty(o, "isHTMLString", {
    enumerable: !0,
    get: function () {
      return v.isHTMLString;
    },
  });
  var w = ea;
  Object.defineProperty(o, "isLeaf", {
    enumerable: !0,
    get: function () {
      return w.isLeaf;
    },
  });
  var b = oa;
  Object.defineProperty(o, "isNodeEmpty", {
    enumerable: !0,
    get: function () {
      return b.isNodeEmpty;
    },
  });
  var y = Ur;
  Object.defineProperty(o, "isLineBreakTag", {
    enumerable: !0,
    get: function () {
      return y.isLineBreakTag;
    },
  });
  var _ = zr;
  Object.defineProperty(o, "isSingleTag", {
    enumerable: !0,
    get: function () {
      return _.isSingleTag;
    },
  });
  var B = Fr;
  Object.defineProperty(o, "make", {
    enumerable: !0,
    get: function () {
      return B.make;
    },
  });
  var C = Ud;
  Object.defineProperty(o, "offset", {
    enumerable: !0,
    get: function () {
      return C.offset;
    },
  });
  var x = zd;
  Object.defineProperty(o, "prepend", {
    enumerable: !0,
    get: function () {
      return x.prepend;
    },
  });
})(Zo);
var Wd = ((o) => ((o.Left = "left"), (o.Center = "center"), o))(Wd || {});
let $1 = class Qo {
  constructor({ data: e, config: t, api: r, readOnly: n, block: i }) {
    const { DEFAULT_ALIGNMENT: s } = Qo;
    (this.api = r),
      (this.readOnly = n),
      (this.quotePlaceholder = r.i18n.t(
        t?.quotePlaceholder ?? Qo.DEFAULT_QUOTE_PLACEHOLDER,
      )),
      (this.captionPlaceholder = r.i18n.t(
        t?.captionPlaceholder ?? Qo.DEFAULT_CAPTION_PLACEHOLDER,
      )),
      (this.data = {
        text: e.text || "",
        caption: e.caption || "",
        alignment: Object.values(Wd).includes(e.alignment)
          ? e.alignment
          : (t?.defaultAlignment ?? s),
      }),
      (this.css = {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption",
      }),
      (this.block = i);
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get toolbox() {
    return { icon: Ey, title: "Quote" };
  }
  static get contentless() {
    return !0;
  }
  static get enableLineBreaks() {
    return !0;
  }
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }
  static get conversionConfig() {
    return {
      import: "text",
      export: function (e) {
        return e.caption ? `${e.text} — ${e.caption}` : e.text;
      },
    };
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption",
    };
  }
  get settings() {
    return [
      { name: "left", icon: Cy },
      { name: "center", icon: xy },
    ];
  }
  render() {
    const e = Zo.make("blockquote", [this.css.baseClass, this.css.wrapper]),
      t = Zo.make("div", [this.css.input, this.css.text], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.text,
      }),
      r = Zo.make("div", [this.css.input, this.css.caption], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.caption,
      });
    return (
      (t.dataset.placeholder = this.quotePlaceholder),
      (r.dataset.placeholder = this.captionPlaceholder),
      e.appendChild(t),
      e.appendChild(r),
      e
    );
  }
  save(e) {
    const t = e.querySelector(`.${this.css.text}`),
      r = e.querySelector(`.${this.css.caption}`);
    return Object.assign(this.data, {
      text: t?.innerHTML ?? "",
      caption: r?.innerHTML ?? "",
    });
  }
  static get sanitize() {
    return { text: { br: !0 }, caption: { br: !0 }, alignment: {} };
  }
  renderSettings() {
    const e = (t) => t && t[0].toUpperCase() + t.slice(1);
    return this.settings.map((t) => ({
      icon: t.icon,
      label: this.api.i18n.t(`Align ${e(t.name)}`),
      onActivate: () => this._toggleTune(t.name),
      isActive: this.data.alignment === t.name,
      closeOnActivate: !0,
    }));
  }
  _toggleTune(e) {
    (this.data.alignment = e), this.block.dispatchChange();
  }
};
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ".cdx-marker{background:rgba(245,235,111,.29);padding:3px 0}",
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const H1 =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3536 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3536 9.31802L7.96729 12.7043C7.40889 13.2627 7.02827 13.9739 6.8734 14.7482L6.69798 15.6253C6.55804 16.325 7.17496 16.942 7.87468 16.802L8.75176 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3536 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
let F1 = class go {
  static get CSS() {
    return "cdx-marker";
  }
  constructor({ api: e }) {
    (this.api = e),
      (this.button = null),
      (this.tag = "MARK"),
      (this.iconClasses = {
        base: this.api.styles.inlineToolButton,
        active: this.api.styles.inlineToolButtonActive,
      });
  }
  static get isInline() {
    return !0;
  }
  render() {
    return (
      (this.button = document.createElement("button")),
      (this.button.type = "button"),
      this.button.classList.add(this.iconClasses.base),
      (this.button.innerHTML = this.toolboxIcon),
      this.button
    );
  }
  surround(e) {
    if (!e) return;
    let t = this.api.selection.findParentTag(this.tag, go.CSS);
    t ? this.unwrap(t) : this.wrap(e);
  }
  wrap(e) {
    let t = document.createElement(this.tag);
    t.classList.add(go.CSS),
      t.appendChild(e.extractContents()),
      e.insertNode(t),
      this.api.selection.expandToTag(t);
  }
  unwrap(e) {
    this.api.selection.expandToTag(e);
    let t = window.getSelection(),
      r = t.getRangeAt(0),
      n = r.extractContents();
    e.parentNode.removeChild(e),
      r.insertNode(n),
      t.removeAllRanges(),
      t.addRange(r);
  }
  checkState() {
    const e = this.api.selection.findParentTag(this.tag, go.CSS);
    this.button.classList.toggle(this.iconClasses.active, !!e);
  }
  get toolboxIcon() {
    return H1;
  }
  static get sanitize() {
    return { mark: { class: go.CSS } };
  }
};
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          ".inline-code{background:rgba(250,239,240,.78);color:#b44437;padding:3px 4px;border-radius:5px;margin:0 1px;font-family:inherit;font-size:.86em;font-weight:500;letter-spacing:.3px}",
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const U1 =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
class Yt {
  constructor({ api: e }) {
    (this.tag = "CODE"),
      (this.api = e),
      (this.button = null),
      (this.iconClasses = {
        base: this.api.styles.inlineToolButton,
        active: this.api.styles.inlineToolButtonActive,
      });
  }
  static get CSS() {
    return "inline-code";
  }
  static get isInline() {
    return !0;
  }
  render() {
    return (
      (this.button = document.createElement("button")),
      (this.button.type = "button"),
      this.button.classList.add(this.iconClasses.base),
      (this.button.innerHTML = this.toolboxIcon),
      this.button
    );
  }
  surround(e) {
    if (!e) return;
    let t = this.api.selection.findParentTag(this.tag, Yt.CSS);
    t ? this.unwrap(t) : this.wrap(e);
  }
  wrap(e) {
    let t = document.createElement(this.tag);
    t.classList.add(Yt.CSS),
      t.appendChild(e.extractContents()),
      e.insertNode(t),
      this.api.selection.expandToTag(t);
  }
  unwrap(e) {
    var t;
    this.api.selection.expandToTag(e);
    const r = window.getSelection();
    if (!r) return;
    const n = r.getRangeAt(0),
      i = n.extractContents();
    (t = e.parentNode) == null || t.removeChild(e),
      n.insertNode(i),
      r.removeAllRanges(),
      r.addRange(n);
  }
  checkState() {
    const e = this.api.selection.findParentTag(this.tag, Yt.CSS);
    return (
      this.button && this.button.classList.toggle(this.iconClasses.active, !!e),
      !!e
    );
  }
  get toolboxIcon() {
    return U1;
  }
  static get sanitize() {
    return { code: { class: Yt.CSS } };
  }
}
(function () {
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(
        document.createTextNode(
          '.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}',
        ),
      ),
        document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const z1 = {
  vimeo: {
    regex:
      /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
    embedUrl:
      "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
    html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
    height: 320,
    width: 580,
  },
  youtube: {
    regex:
      /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
    embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    id: ([o, e]) => {
      if (!e && o) return o;
      const t = {
        start: "start",
        end: "end",
        t: "start",
        time_continue: "start",
        list: "list",
      };
      let r = e
        .slice(1)
        .split("&")
        .map((n) => {
          const [i, s] = n.split("=");
          return !o && i === "v"
            ? ((o = s), null)
            : !t[i] || s === "LL" || s.startsWith("RDMM") || s.startsWith("FL")
              ? null
              : `${t[i]}=${s}`;
        })
        .filter((n) => !!n);
      return o + "?" + r.join("&");
    },
  },
  coub: {
    regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
    embedUrl: "https://coub.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
  },
  vine: {
    regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
    embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
  },
  imgur: {
    regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
    embedUrl: "http://imgur.com/<%= remote_id %>/embed",
    html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
    height: 500,
    width: 540,
  },
  gfycat: {
    regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
    embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
    html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
    height: 436,
    width: 580,
  },
  "twitch-channel": {
    regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600,
  },
  "twitch-video": {
    regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
    embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600,
  },
  "yandex-music-album": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
    embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
    height: 400,
    width: 540,
  },
  "yandex-music-track": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
    height: 100,
    width: 540,
    id: (o) => o.join("/"),
  },
  "yandex-music-playlist": {
    regex:
      /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
    embedUrl:
      "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
    height: 400,
    width: 540,
    id: (o) => o.join("/"),
  },
  codepen: {
    regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
    embedUrl:
      "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
    html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
    height: 300,
    width: 600,
    id: (o) => o.join("/embed/"),
  },
  instagram: {
    regex: /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/(.*)/,
    embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 505,
    width: 400,
    id: (o) => {
      var e;
      return (e = o?.[0]) == null ? void 0 : e.split("/")[0];
    },
  },
  twitter: {
    regex: /^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,
    embedUrl:
      "https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",
    html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
    id: (o) => o[1],
  },
  pinterest: {
    regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
    id: (o) => o[1],
  },
  facebook: {
    regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
    id: (o) => o.join("/"),
  },
  aparat: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
    html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
  },
  miro: {
    regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
    embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
    html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>',
  },
  github: {
    regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
    embedUrl:
      'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',
    html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
    height: 300,
    width: 600,
    id: (o) => `${o.join("/")}.js`,
  },
};
function On(o, e, t) {
  var r, n, i, s, a;
  e == null && (e = 100);
  function l() {
    var d = Date.now() - s;
    d < e && d >= 0
      ? (r = setTimeout(l, e - d))
      : ((r = null), t || ((a = o.apply(i, n)), (i = n = null)));
  }
  var c = function () {
    (i = this), (n = arguments), (s = Date.now());
    var d = t && !r;
    return (
      r || (r = setTimeout(l, e)), d && ((a = o.apply(i, n)), (i = n = null)), a
    );
  };
  return (
    (c.clear = function () {
      r && (clearTimeout(r), (r = null));
    }),
    (c.flush = function () {
      r && ((a = o.apply(i, n)), (i = n = null), clearTimeout(r), (r = null));
    }),
    c
  );
}
On.debounce = On;
var W1 = On;
class ft {
  constructor({ data: e, api: t, readOnly: r }) {
    (this.api = t),
      (this._data = {}),
      (this.element = null),
      (this.readOnly = r),
      (this.data = e);
  }
  set data(e) {
    var t;
    if (!(e instanceof Object)) throw Error("Embed Tool data should be object");
    const {
      service: r,
      source: n,
      embed: i,
      width: s,
      height: a,
      caption: l = "",
    } = e;
    this._data = {
      service: r || this.data.service,
      source: n || this.data.source,
      embed: i || this.data.embed,
      width: s || this.data.width,
      height: a || this.data.height,
      caption: l || this.data.caption || "",
    };
    const c = this.element;
    c && ((t = c.parentNode) == null || t.replaceChild(this.render(), c));
  }
  get data() {
    if (this.element) {
      const e = this.element.querySelector(`.${this.api.styles.input}`);
      this._data.caption = e ? e.innerHTML : "";
    }
    return this._data;
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      container: "embed-tool",
      containerLoading: "embed-tool--loading",
      preloader: "embed-tool__preloader",
      caption: "embed-tool__caption",
      url: "embed-tool__url",
      content: "embed-tool__content",
    };
  }
  render() {
    if (!this.data.service) {
      const a = document.createElement("div");
      return (this.element = a), a;
    }
    const { html: e } = ft.services[this.data.service],
      t = document.createElement("div"),
      r = document.createElement("div"),
      n = document.createElement("template"),
      i = this.createPreloader();
    t.classList.add(
      this.CSS.baseClass,
      this.CSS.container,
      this.CSS.containerLoading,
    ),
      r.classList.add(this.CSS.input, this.CSS.caption),
      t.appendChild(i),
      (r.contentEditable = (!this.readOnly).toString()),
      (r.dataset.placeholder = this.api.i18n.t("Enter a caption")),
      (r.innerHTML = this.data.caption || ""),
      (n.innerHTML = e),
      n.content.firstChild.setAttribute("src", this.data.embed),
      n.content.firstChild.classList.add(this.CSS.content);
    const s = this.embedIsReady(t);
    return (
      n.content.firstChild && t.appendChild(n.content.firstChild),
      t.appendChild(r),
      s.then(() => {
        t.classList.remove(this.CSS.containerLoading);
      }),
      (this.element = t),
      t
    );
  }
  createPreloader() {
    const e = document.createElement("preloader"),
      t = document.createElement("div");
    return (
      (t.textContent = this.data.source),
      e.classList.add(this.CSS.preloader),
      t.classList.add(this.CSS.url),
      e.appendChild(t),
      e
    );
  }
  save() {
    return this.data;
  }
  onPaste(e) {
    var t;
    const { key: r, data: n } = e.detail,
      {
        regex: i,
        embedUrl: s,
        width: a,
        height: l,
        id: c = (u) => u.shift() || "",
      } = ft.services[r],
      d = (t = i.exec(n)) == null ? void 0 : t.slice(1),
      h = d ? s.replace(/<%= remote_id %>/g, c(d)) : "";
    this.data = { service: r, source: n, embed: h, width: a, height: l };
  }
  static prepare({ config: e = {} }) {
    const { services: t = {} } = e;
    let r = Object.entries(z1);
    const n = Object.entries(t)
        .filter(([s, a]) => typeof a == "boolean" && a === !0)
        .map(([s]) => s),
      i = Object.entries(t)
        .filter(([s, a]) => typeof a == "object")
        .filter(([s, a]) => ft.checkServiceConfig(a))
        .map(([s, a]) => {
          const {
            regex: l,
            embedUrl: c,
            html: d,
            height: h,
            width: u,
            id: p,
          } = a;
          return [
            s,
            { regex: l, embedUrl: c, html: d, height: h, width: u, id: p },
          ];
        });
    n.length && (r = r.filter(([s]) => n.includes(s))),
      (r = r.concat(i)),
      (ft.services = r.reduce(
        (s, [a, l]) =>
          a in s ? ((s[a] = Object.assign({}, s[a], l)), s) : ((s[a] = l), s),
        {},
      )),
      (ft.patterns = r.reduce(
        (s, [a, l]) => (l && typeof l != "boolean" && (s[a] = l.regex), s),
        {},
      ));
  }
  static checkServiceConfig(e) {
    const { regex: t, embedUrl: r, html: n, height: i, width: s, id: a } = e;
    let l =
      !!(t && t instanceof RegExp) &&
      !!(r && typeof r == "string") &&
      !!(n && typeof n == "string");
    return (
      (l = l && (a !== void 0 ? a instanceof Function : !0)),
      (l = l && (i !== void 0 ? Number.isFinite(i) : !0)),
      (l = l && (s !== void 0 ? Number.isFinite(s) : !0)),
      l
    );
  }
  static get pasteConfig() {
    return { patterns: ft.patterns };
  }
  static get isReadOnlySupported() {
    return !0;
  }
  embedIsReady(e) {
    let t;
    return new Promise((r, n) => {
      (t = new MutationObserver(W1.debounce(r, 450))),
        t.observe(e, { childList: !0, subtree: !0 });
    }).then(() => {
      t.disconnect();
    });
  }
}
const q1 = {
  paragraph: { config: { preserveBlank: !0 } },
  header: {
    class: ev,
    inlineToolbar: !0,
    inlineToolbar: ["link", "marker", "inlineCode"],
    config: { levels: [1, 2, 3, 4, 5, 6], defaultLevel: 1 },
  },
  list: {
    class: Xb,
    inlineToolbar: ["link", "bold", "italic"],
    config: { defaultStyle: "unordered", shortcut: "CMD+SHIFT+L" },
  },
  code: { class: Ts, config: { placeholder: "Enter code here..." } },
  image: {
    class: sy,
    config: { endpoints: { byFile: "unset", byUrl: "unset" } },
  },
  table: { class: wy, inlineToolbar: !0, config: { rows: 2, cols: 3 } },
  quote: {
    class: $1,
    inlineToolbar: !0,
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  marker: { class: F1, shortcut: "CMD+SHIFT+M" },
  inlineCode: { class: Yt, shortcut: "CMD+SHIFT+C" },
  embed: {
    class: ft,
    config: { services: { youtube: !0, codesandbox: !0, codepen: !0 } },
  },
};
var V1 = $('<div id="editorjs" class="font-stretch-75%"></div>');
function Y1(o, e) {
  Oe(e, !0);
  let t = ce(e, "noteId", 3, null),
    r = ie(() => X.getNoteById(t()).content),
    n = null,
    i = null,
    s = !1,
    a = null;
  function l(u) {
    t() && X.updateNote(t(), { content: u });
  }
  function c(u = null) {
    d();
    try {
      n = new Um({
        holder: "editorjs",
        tools: q1,
        autofocus: !0,
        inlineToolbar: ["bold", "italic", "link", "marker", "inlineCode"],
        data: u ? JSON.parse(u) : { blocks: [] },
        onReady: () => {
          (i = new Vm(n)), (s = !0);
        },
        onChange: async () => {
          if (s)
            try {
              const p = await n.save();
              l(JSON.stringify(p));
            } catch (p) {
              console.error("Error al guardar el contenido del editor:", p);
            }
        },
      });
    } catch (p) {
      console.error("Error al inicializar EditorJS:", p);
    }
  }
  function d() {
    i && typeof i.destroy == "function" && (i.destroy(), (i = null)),
      n && typeof n.destroy == "function" && (n.destroy(), (n = null)),
      (s = !1);
  }
  Ot(() => {
    t() !== a && ((a = t()), c(T(r)));
  }),
    jl(() => {
      d();
    });
  var h = V1();
  I(o, h), Be();
}
function K1(o) {
  const e = new Date(o),
    t = e.getFullYear(),
    r = String(e.getMonth() + 1).padStart(2, "0"),
    n = String(e.getDate()).padStart(2, "0"),
    i = String(e.getHours()).padStart(2, "0"),
    s = String(e.getMinutes()).padStart(2, "0");
  return `${t}-${r}-${n} ${i}:${s}`;
}
function Qa(o) {
  return o.slice(0, 16);
}
var X1 = $("<p>no content</p>"),
  G1 = $(
    '<div class="dropdown"><button aria-haspopup="true"><!></button> <ul role="menu" tabindex="-1"><!></ul></div>',
  );
function qd(o, e) {
  Oe(e, !0);
  let t = ce(
      e,
      "labelClass",
      3,
      "inline-flex gap-1 p-2 items-center clickable rounded-field",
    ),
    r = ce(e, "position", 3, "start"),
    n = ce(e, "minMenuWidth", 3, 24),
    i = !1,
    s = Xe(ae(i.isOpen)),
    a,
    l;
  const c = () => {
      V(s, !1);
    },
    d = () => {
      V(s, !T(s)), console.log("toggle", T(s));
    },
    h = (w) => {
      w.key === "Escape" && c(),
        (w.key === "Enter" || w.key === " ") && (w.preventDefault(), d());
    };
  Ot(() => {
    if (!T(s)) return;
    const w = (b) => {
      !a?.contains(b.target) &&
        !l?.contains(b.target) &&
        (console.log("Cerrando por click fuera"), c());
    };
    return (
      setTimeout(() => {
        document.addEventListener("click", w);
      }, 0),
      document.addEventListener("keydown", h),
      () => {
        document.removeEventListener("click", w),
          document.removeEventListener("keydown", h);
      }
    );
  });
  var u = G1(),
    p = P(u);
  p.__click = d;
  var g = P(p);
  ba(g, () => e.label),
    ar(
      p,
      (w) => (l = w),
      () => l,
    );
  var f = U(p, 2),
    m = P(f);
  {
    var k = (w) => {
        var b = te(),
          y = K(b);
        ba(y, () => e.menuList), I(w, b);
      },
      v = (w) => {
        var b = X1();
        I(w, b);
      };
    ne(m, (w) => {
      e.menuList ? w(k) : w(v, !1);
    });
  }
  ar(
    f,
    (w) => (a = w),
    () => a,
  ),
    re(() => {
      Po(u, "dropdown-start", r() === "start"),
        Po(u, "dropdown-center", r() === "center"),
        Po(u, "dropdown-end", r() === "end"),
        sr(p, Pl(t()), "svelte-3kpd"),
        _e(p, "aria-expanded", T(s)),
        sr(
          f,
          `dropdown-content menu interactive-list bg-base-200 mt-1 b-1 b-neutral shadow min-w-${n() ?? ""}`,
        ),
        Po(f, "invisible", !T(s));
    }),
    I(o, u),
    Be();
}
$e(["click"]);
var Z1 = $('<span class="property-icon"><!></span>'),
  J1 = $('<!> <p class="text-left w-(--property-label-width)"> </p>', 1),
  Q1 = (o, e, t, r) => {
    q.openPropertyEditor(e(), t()), V(r, !1);
  },
  ek = (o, e, t, r) => {
    X.deleteProperty(e(), t().id), V(r, !1);
  },
  tk = $(
    '<li><button><!>Edit Property</button></li> <li><button class="text-rose-500"><!>Delete Property</button></li>',
    1,
  ),
  ok = (o, e, t) => e.onUpdate(t().name, o.target.value),
  rk = $('<input type="text" placeholder="No value" class="grow-1">'),
  nk = $(
    '<button class="clickable mr-[-0.25rem] text-(--color-font-faint)" aria-label="Remove item"><!></button>',
  ),
  ik = $('<div class="badge badge-neutral"><span> </span> <!></div>'),
  sk = $('<input type="text" class="flex">'),
  ak = $(
    '<div class="inline-flex gap-1 grow-1 flex-wrap border-2 border-amber-50"><!> <!></div>',
  ),
  lk = (o, e, t) => {
    const r = Number(o.target.value);
    isNaN(r) || e.onUpdate(t().name, r);
  },
  ck = $('<input type="number">'),
  dk = (o, e, t) => e.onUpdate(t().name, o.target.checked),
  uk = $('<input type="checkbox">'),
  hk = (o, e, t) => e.onUpdate(t().name, new Date(o.target.value)),
  pk = $('<input type="date">'),
  fk = (o, e, t) => e.onUpdate(t().name, new Date(o.target.value)),
  gk = $('<input type="datetime-local">'),
  mk = $(
    '<li class="property-item flex gap-2 ml-[-0.5rem] relative svelte-1cjbskb"><!> <!></li>',
  );
function vk(o, e) {
  Oe(e, !0);
  let t = ce(e, "noteId", 3, null),
    r = ce(e, "property", 3, null),
    n = ce(e, "readonly", 3, !1),
    i = Xe(!1),
    s = Xe(null);
  function a(m) {
    if (r().type === "list") {
      const k = [...r().value];
      k.splice(m, 1), e.onUpdate(r().name, k);
    }
  }
  function l(m) {
    if (m.key === "Enter" || m.type === "blur") {
      const k = T(s).value.trim();
      if (!k) return;
      const v = [...r().value, k];
      e.onUpdate(r().name, v), (T(s).value = "");
    }
    if (m.key === "Backspace" || m.key === "Delete") {
      let k = r().value.length - 1;
      a(k);
    }
  }
  function c(m) {
    switch (m) {
      case "text":
        return Uh;
      case "list":
        return $h;
      case "number":
        return Dh;
      case "check":
        return Fh;
      case "date":
        return Nh;
      case "datetime":
        return Ph;
      default:
        return null;
    }
  }
  const d = ie(() => c(r().type));
  var h = mk(),
    u = P(h);
  qd(u, {
    position: "center",
    label: (v) => {
      var w = J1(),
        b = K(w);
      {
        var y = (C) => {
          var x = Z1(),
            O = P(x);
          hh(
            O,
            () => T(d),
            (S, M) => {
              M(S, { size: "18" });
            },
          ),
            I(C, x);
        };
        ne(b, (C) => {
          T(d) && C(y);
        });
      }
      var _ = U(b, 2),
        B = P(_);
      re(() => Ve(B, r().name)), I(v, w);
    },
    menuList: (v) => {
      var w = tk(),
        b = K(w),
        y = P(b);
      y.__click = [Q1, t, r, i];
      var _ = P(y);
      Hh(_, { size: "18" });
      var B = U(b, 2),
        C = P(B);
      C.__click = [ek, t, r, i];
      var x = P(C);
      Fn(x, { size: "18" }), I(v, w);
    },
    $$slots: { label: !0, menuList: !0 },
  });
  var p = U(u, 2);
  {
    var g = (m) => {
        var k = rk();
        (k.__change = [ok, e, r]),
          re(() => {
            _e(k, "name", r().name), Lo(k, r().value);
          }),
          I(m, k);
      },
      f = (m) => {
        var k = te(),
          v = K(k);
        {
          var w = (y) => {
              var _ = ak(),
                B = P(_);
              yt(
                B,
                17,
                () => r().value,
                Oo,
                (O, S, M) => {
                  var L = ik(),
                    R = P(L),
                    N = P(R),
                    F = U(R, 2);
                  {
                    var Ne = (ue) => {
                      var Ae = nk();
                      Ae.__click = () => a(M);
                      var He = P(Ae);
                      Dl(He, { size: "18" }), I(ue, Ae);
                    };
                    ne(F, (ue) => {
                      n() || ue(Ne);
                    });
                  }
                  re(() => Ve(N, T(S))), I(O, L);
                },
              );
              var C = U(B, 2);
              {
                var x = (O) => {
                  var S = sk();
                  (S.__keydown = l),
                    ar(
                      S,
                      (M) => V(s, M),
                      () => T(s),
                    ),
                    re(() => {
                      _e(S, "name", r().name),
                        _e(
                          S,
                          "placeholder",
                          r().value.length === 0 ? "Type to add items..." : "",
                        );
                    }),
                    _t("blur", S, l),
                    I(O, S);
                };
                ne(C, (O) => {
                  n() || O(x);
                });
              }
              I(y, _);
            },
            b = (y) => {
              var _ = te(),
                B = K(_);
              {
                var C = (O) => {
                    var S = ck();
                    (S.__change = [lk, e, r]),
                      re(() => {
                        _e(S, "name", r().name),
                          Lo(S, r().value),
                          (S.disabled = n());
                      }),
                      I(O, S);
                  },
                  x = (O) => {
                    var S = te(),
                      M = K(S);
                    {
                      var L = (N) => {
                          var F = uk();
                          (F.__change = [dk, e, r]),
                            re(() => {
                              _e(F, "name", r().name),
                                gh(F, r().value),
                                (F.disabled = n());
                            }),
                            I(N, F);
                        },
                        R = (N) => {
                          var F = te(),
                            Ne = K(F);
                          {
                            var ue = (He) => {
                                var Fe = pk();
                                (Fe.__change = [hk, e, r]),
                                  re(
                                    (Rt) => {
                                      _e(Fe, "name", r().name),
                                        Lo(Fe, Rt),
                                        (Fe.disabled = n());
                                    },
                                    [
                                      () =>
                                        r().value instanceof Date
                                          ? r()
                                              .value.toISOString()
                                              .split("T")[0]
                                          : r().value,
                                    ],
                                  ),
                                  I(He, Fe);
                              },
                              Ae = (He) => {
                                var Fe = te(),
                                  Rt = K(Fe);
                                {
                                  var Vd = (Wr) => {
                                    var so = gk();
                                    (so.__change = [fk, e, r]),
                                      re(
                                        (Yd) => {
                                          _e(so, "name", r().name),
                                            Lo(so, Yd),
                                            (so.disabled = n());
                                        },
                                        [
                                          () =>
                                            r().value instanceof Date
                                              ? Qa(r().value.toISOString())
                                              : Qa(r().value),
                                        ],
                                      ),
                                      I(Wr, so);
                                  };
                                  ne(
                                    Rt,
                                    (Wr) => {
                                      r().type === "datetime" && Wr(Vd);
                                    },
                                    !0,
                                  );
                                }
                                I(He, Fe);
                              };
                            ne(
                              Ne,
                              (He) => {
                                r().type === "date" ? He(ue) : He(Ae, !1);
                              },
                              !0,
                            );
                          }
                          I(N, F);
                        };
                      ne(
                        M,
                        (N) => {
                          r().type === "check" ? N(L) : N(R, !1);
                        },
                        !0,
                      );
                    }
                    I(O, S);
                  };
                ne(
                  B,
                  (O) => {
                    r().type === "number" ? O(C) : O(x, !1);
                  },
                  !0,
                );
              }
              I(y, _);
            };
          ne(
            v,
            (y) => {
              r().type === "list" ? y(w) : y(b, !1);
            },
            !0,
          );
        }
        I(m, k);
      };
    ne(p, (m) => {
      r().type === "text" ? m(g) : m(f, !1);
    });
  }
  I(o, h), Be();
}
$e(["click", "change", "keydown"]);
function bk(o, e, t, r) {
  if (!T(e) || !T(t).trim()) {
    alert("Property name is required");
    return;
  }
  const n = X.getNoteById(T(e));
  if (n) {
    if (n.properties.some((i) => i.name === T(t).trim())) {
      alert("Property name must be unique");
      return;
    }
    X.createProperty(T(e), { name: T(t).trim(), type: T(r), value: void 0 }),
      V(t, ""),
      V(r, "text"),
      q.closePropertyEditor();
  }
}
function yk(o, e, t) {
  !T(e) || !T(t) || (X.deleteProperty(T(e), T(t).id), q.closePropertyEditor());
}
var kk = $("<option> </option>"),
  wk = $(
    '<button class="btn btn-success">Save</button> <button class="btn btn-delete"><!>Delete</button>',
    1,
  ),
  xk = $('<button class="btn btn-success">Add Property</button>'),
  Ck = $(
    '<div class="property-editor relative p-6 shadow-lg bg-(--color-bg-secondary)"><h3 class="text-xl font-bold mb-3">Property Editor</h3> <button class="absolute top-0 right-0 p-3 clickable"><!></button> <div class="py-2"><label for="type" class="w-[5rem] inline-block">Type</label> <select class="p-1" name="type"></select></div> <div class="form-group"><label class="w-[5rem] inline-block" for="name">Name</label> <input name="name" type="text" class="p-1" placeholder="Enter property name"></div> <div class="mt-6 py-2 flex gap-3"><!> <button class="btn btn-neutral">Cancel</button></div></div>',
  );
function Ek(o, e) {
  Oe(e, !0);
  const t = [
    { value: "text", label: "Text" },
    { value: "list", label: "List" },
    { value: "number", label: "Number" },
    { value: "check", label: "Check" },
    { value: "date", label: "Date" },
    { value: "datetime", label: "Datetime" },
  ];
  let r = Xe(""),
    n = Xe("text"),
    i = ie(() => q.state.propertyEditor.targetNoteId);
  const s = ie(() => q.state.propertyEditor.editingProperty),
    a = ie(() => !!T(s));
  Ot(() => {
    T(a)
      ? (V(r, ae(T(s).name)), V(n, ae(T(s).type)))
      : (V(r, ""), V(n, "text"));
  });
  function l() {
    const y = q.state.propertyEditor.targetNoteId;
    if (!y || !T(s)) return;
    const _ = X.getNoteById(y);
    if (_) {
      if (
        T(r).trim() !== q.state.propertyEditor.originalName &&
        _.properties.some((B) => B.name === T(r).trim())
      ) {
        alert("Property name must be unique");
        return;
      }
      X.updateProperty(y, T(s).id, { name: T(r).trim(), type: T(n) }),
        q.closePropertyEditor();
    }
  }
  var c = Ck(),
    d = U(P(c), 2);
  d.__click = function (...y) {
    q.closePropertyEditor?.apply(this, y);
  };
  var h = P(d);
  Dl(h, {});
  var u = U(d, 2),
    p = U(P(u), 2);
  yt(
    p,
    21,
    () => t,
    Oo,
    (y, _) => {
      let B = () => T(_).value,
        C = () => T(_).label;
      var x = kk(),
        O = {},
        S = P(x);
      re(() => {
        O !== (O = B()) && (x.value = (x.__value = B()) == null ? "" : B()),
          Ve(S, C());
      }),
        I(y, x);
    },
  );
  var g = U(u, 2),
    f = U(P(g), 2),
    m = U(g, 2),
    k = P(m);
  {
    var v = (y) => {
        var _ = wk(),
          B = K(_);
        B.__click = l;
        var C = U(B, 2);
        C.__click = [yk, i, s];
        var x = P(C);
        Fn(x, { size: "18" }), I(y, _);
      },
      w = (y) => {
        var _ = xk();
        (_.__click = [bk, i, r, n]), I(y, _);
      };
    ne(k, (y) => {
      T(a) ? y(v) : y(w, !1);
    });
  }
  var b = U(k, 2);
  (b.__click = function (...y) {
    q.closePropertyEditor?.apply(this, y);
  }),
    kh(
      p,
      () => T(n),
      (y) => V(n, y),
    ),
    bh(
      f,
      () => T(r),
      (y) => V(r, y),
    ),
    I(o, c),
    Be();
}
$e(["click"]);
var _k = $(
    '<li><p><span class="text-blue-400"> </span> <span class="text-amber-200"> </span></p></li>',
  ),
  Sk = (o, e) => q.openPropertyEditor(e.note.id),
  Tk = $(
    '<button class="inline-flex gap-1 p-2 items-center clickable rounded-field ml-[-.5rem]"><!>Add Property</button>',
  ),
  Ok = $(
    '<div class="properties-container"><div class="my-6"><ul><li><p><span class="text-blue-400">ID:</span> <span class="text-amber-200"> </span></p></li> <!></ul></div> <div class="custom-properties my-6"><h3 class="text-xl font-bold py-1">Properties</h3> <ul class="property-box"></ul> <!></div></div>',
  );
function Bk(o, e) {
  Oe(e, !0);
  function t(s, a) {
    if (!e.note) return;
    const l = e.note.properties.map((c) =>
      c.name === s ? { ...c, value: a } : c,
    );
    X.updateNote(e.note.id, { properties: l });
  }
  var r = te(),
    n = K(r);
  {
    var i = (s) => {
      var a = Ok(),
        l = P(a),
        c = P(l),
        d = P(c),
        h = P(d),
        u = U(P(h), 2),
        p = P(u),
        g = U(d, 2);
      yt(
        g,
        17,
        () => e.note.metadata,
        (b) => b.name,
        (b, y) => {
          var _ = _k(),
            B = P(_),
            C = P(B),
            x = P(C),
            O = U(C, 2),
            S = P(O);
          re(
            (M) => {
              Ve(x, `${T(y).name ?? ""}:`), Ve(S, M);
            },
            [() => K1(T(y).value)],
          ),
            I(b, _);
        },
      );
      var f = U(l, 2),
        m = U(P(f), 2);
      yt(
        m,
        21,
        () => e.note.properties,
        Oo,
        (b, y) => {
          vk(b, {
            get noteId() {
              return e.note.id;
            },
            get property() {
              return T(y);
            },
            onUpdate: t,
          });
        },
      );
      var k = U(m, 2);
      {
        var v = (b) => {
            Ek(b, {});
          },
          w = (b) => {
            var y = Tk();
            y.__click = [Sk, e];
            var _ = P(y);
            Rl(_, { size: "18" }), I(b, y);
          };
        ne(k, (b) => {
          q.state.propertyEditor.isVisible &&
          q.state.propertyEditor.targetNoteId === e.note.id
            ? b(v)
            : b(w, !1);
        });
      }
      re(() => Ve(p, e.note.id)), I(s, a);
    };
    ne(n, (s) => {
      e.note && s(i);
    });
  }
  I(o, r), Be();
}
$e(["click"]);
var Mk = (o, e) => X.setActiveNote(T(e).id),
  Ik = $("<button> </button>"),
  Lk = $("<li><!></li>"),
  Pk = $('<div class="breadcrumbs"><ul></ul></div>');
function Nk(o, e) {
  Oe(e, !0);
  let t = ce(e, "note", 3, !0),
    r = ie(() => X.getBreadcrumbPath(t().id));
  var n = Pk(),
    i = P(n);
  yt(
    i,
    23,
    () => T(r),
    (s) => s.id,
    (s, a, l) => {
      var c = Lk(),
        d = P(c);
      {
        var h = (p) => {
            var g = nh();
            re(() => Ve(g, T(a).title)), I(p, g);
          },
          u = (p) => {
            var g = Ik();
            g.__click = [Mk, a];
            var f = P(g);
            re(() => Ve(f, T(a).title)), I(p, g);
          };
        ne(d, (p) => {
          T(l) == T(r).length - 1 ? p(h) : p(u, !1);
        });
      }
      I(s, c);
    },
  ),
    I(o, n),
    Be();
}
$e(["click"]);
var Ak = (o, e) => {
    X.deleteNote(T(e).id);
  },
  jk = $('<li><button class="text-rose-500"><!>Delete Note</button></li>'),
  Rk = $(
    '<div class="navbar shadow-sm py-2 px-8 border-neutral border-b-1"><div class="flex-1"><!></div> <!></div> <article class="p-3 w-3xl mx-auto"><header><!> <!> <!></header></article>',
    1,
  ),
  Dk = $(
    '<article class="p-3 w-3xl mx-auto"><header><h1>Create or select a new note</h1></header></article>',
  ),
  $k = $('<main class="overflow-auto"><!></main>');
function Hk(o, e) {
  Oe(e, !0);
  const t = ie(() => X.getActiveNote());
  var r = $k(),
    n = P(r);
  {
    var i = (a) => {
        var l = Rk(),
          c = K(l),
          d = P(c),
          h = P(d);
        Nk(h, {
          get note() {
            return T(t);
          },
        });
        var u = U(d, 2);
        qd(u, {
          position: "end",
          label: (b) => {
            Rh(b, { size: "20" });
          },
          menuList: (b) => {
            var y = jk(),
              _ = P(y);
            _.__click = [Ak, t];
            var B = P(_);
            Fn(B, { size: "18" }), I(b, y);
          },
          $$slots: { label: !0, menuList: !0 },
        });
        var p = U(c, 2),
          g = P(p),
          f = P(g);
        Qh(f, {
          get id() {
            return T(t).id;
          },
        });
        var m = U(f, 2);
        Bk(m, {
          get note() {
            return T(t);
          },
        });
        var k = U(m, 2);
        Y1(k, {
          get noteId() {
            return T(t).id;
          },
        }),
          I(a, l);
      },
      s = (a) => {
        var l = Dk();
        I(a, l);
      };
    ne(n, (a) => {
      T(t) ? a(i) : a(s, !1);
    });
  }
  I(o, r), Be();
}
$e(["click"]);
var Fk = $(
  '<div id="layout" class="h-screen grid grid-flow-col overflow-hidden"><!> <!></div>',
);
function Uk(o) {
  var e = Fk(),
    t = P(e);
  Zh(t, {});
  var r = U(t, 2);
  Hk(r, {}), I(o, e);
}
ih(Uk, { target: document.getElementById("app") || document.body });
