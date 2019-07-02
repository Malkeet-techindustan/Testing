function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
        types: ["geocode"]
    })
}

function geolocate() {
    navigator.geolocation && navigator.geolocation.getCurrentPosition(function(e) {
        var t = {
                lat: e.coords.latitude,
                lng: e.coords.longitude
            },
            n = new google.maps.Circle({
                center: t,
                radius: e.coords.accuracy
            });
        autocomplete.setBounds(n.getBounds())
    })
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}

function myFunctione() {
    document.getElementById("myDropdowne").classList.toggle("show")
}

function myFunctione1() {
    document.getElementById("myDropdowne1").classList.toggle("show")
}

function curFunction() {
    document.getElementById("curDropdown").classList.toggle("show")
}

function scrollWin() {
    window.scrollTo(500, 0)
}

function formatState(e) {
    if (!e.id) return e.text;
    var t = $("#currency-values").data(e.id + "-name");
    return $('<span><img src="flags/' + e.element.text + '.png" class="img-flag" /> ' + t + " - " + e.text + "</span>")
}
document.createElement("article"), document.createElement("aside"), document.createElement("audio"), document.createElement("address"), document.createElement("canvas"), document.createElement("command"), document.createElement("datalist"), document.createElement("details"), document.createElement("embed"), document.createElement("figcaption"), document.createElement("figure"), document.createElement("footer"), document.createElement("header"), document.createElement("hgroup"), document.createElement("keygen"), document.createElement("mark"), document.createElement("meter"), document.createElement("nav"), document.createElement("output"), document.createElement("progress"), document.createElement("rp"), document.createElement("rt"), document.createElement("ruby"), document.createElement("section"), document.createElement("source"), document.createElement("summary"), document.createElement("time"), document.createElement("video"),
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = pe.type(e);
            return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            if (pe.isFunction(t)) return pe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return pe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (De.test(t)) return pe.filter(t, e, n);
                t = pe.filter(t, e)
            }
            return pe.grep(e, function(e) {
                return pe.inArray(e, t) > -1 !== n
            })
        }

        function a(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function r(e) {
            var t = {};
            return pe.each(e.match(xe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", o), e.removeEventListener("load", o)) : (ie.detachEvent("onreadystatechange", o), e.detachEvent("onload", o))
        }

        function o() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (s(), pe.ready())
        }

        function d(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ae, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? pe.parseJSON(n) : n)
                    } catch (e) {}
                    pe.data(e, t, n)
                } else n = undefined
            }
            return n
        }

        function l(e) {
            var t;
            for (t in e)
                if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u(e, t, n, i) {
            if (Ee(e)) {
                var a, r, s = pe.expando,
                    o = e.nodeType,
                    d = o ? pe.cache : e,
                    l = o ? e[s] : e[s] && s;
                if (l && d[l] && (i || d[l].data) || n !== undefined || "string" != typeof t) return l || (l = o ? e[s] = ne.pop() || pe.guid++ : s), d[l] || (d[l] = o ? {} : {
                    toJSON: pe.noop
                }), "object" != typeof t && "function" != typeof t || (i ? d[l] = pe.extend(d[l], t) : d[l].data = pe.extend(d[l].data, t)), r = d[l], i || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[pe.camelCase(t)] = n), "string" == typeof t ? null == (a = r[t]) && (a = r[pe.camelCase(t)]) : a = r, a
            }
        }

        function c(e, t, n) {
            if (Ee(e)) {
                var i, a, r = e.nodeType,
                    s = r ? pe.cache : e,
                    o = r ? e[pe.expando] : pe.expando;
                if (s[o]) {
                    if (t && (i = n ? s[o] : s[o].data)) {
                        pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t), t = t in i ? [t] : t.split(" ")), a = t.length;
                        for (; a--;) delete i[t[a]];
                        if (n ? !l(i) : !pe.isEmptyObject(i)) return
                    }(n || (delete s[o].data, l(s[o]))) && (r ? pe.cleanData([e], !0) : ce.deleteExpando || s != s.window ? delete s[o] : s[o] = undefined)
                }
            }
        }

        function h(e, t, n, i) {
            var a, r = 1,
                s = 20,
                o = i ? function() {
                    return i.cur()
                } : function() {
                    return pe.css(e, t, "")
                },
                d = o(),
                l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                u = (pe.cssNumber[t] || "px" !== l && +d) && Oe.exec(pe.css(e, t));
            if (u && u[3] !== l) {
                l = l || u[3], n = n || [], u = +d || 1;
                do {
                    r = r || ".5", u /= r, pe.style(e, t, u + l)
                } while (r !== (r = o() / d) && 1 !== r && --s)
            }
            return n && (u = +u || +d || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = u, i.end = a)), a
        }

        function p(e) {
            var t = ze.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            var n, i, a = 0,
                r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[a]); a++) !t || pe.nodeName(i, t) ? r.push(i) : pe.merge(r, f(i, t));
            return t === undefined || t && pe.nodeName(e, t) ? pe.merge([e], r) : r
        }

        function m(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
        }

        function _(e) {
            Pe.test(e.type) && (e.defaultChecked = e.checked)
        }

        function g(e, t, n, i, a) {
            for (var r, s, o, d, l, u, c, h = e.length, g = p(t), y = [], v = 0; v < h; v++)
                if ((s = e[v]) || 0 === s)
                    if ("object" === pe.type(s)) pe.merge(y, s.nodeType ? [s] : s);
                    else if (Re.test(s)) {
                for (d = d || g.appendChild(t.createElement("div")), l = (We.exec(s) || ["", ""])[1].toLowerCase(), c = qe[l] || qe._default, d.innerHTML = c[1] + pe.htmlPrefilter(s) + c[2], r = c[0]; r--;) d = d.lastChild;
                if (!ce.leadingWhitespace && Ue.test(s) && y.push(t.createTextNode(Ue.exec(s)[0])), !ce.tbody)
                    for (s = "table" !== l || Ve.test(s) ? "<table>" !== c[1] || Ve.test(s) ? 0 : d : d.firstChild, r = s && s.childNodes.length; r--;) pe.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                for (pe.merge(y, d.childNodes), d.textContent = ""; d.firstChild;) d.removeChild(d.firstChild);
                d = g.lastChild
            } else y.push(t.createTextNode(s));
            for (d && g.removeChild(d), ce.appendChecked || pe.grep(f(y, "input"), _), v = 0; s = y[v++];)
                if (i && pe.inArray(s, i) > -1) a && a.push(s);
                else if (o = pe.contains(s.ownerDocument, s), d = f(g.appendChild(s), "script"), o && m(d), n)
                for (r = 0; s = d[r++];) Ie.test(s.type || "") && n.push(s);
            return d = null, g
        }

        function y() {
            return !0
        }

        function v() {
            return !1
        }

        function M() {
            try {
                return ie.activeElement
            } catch (e) {}
        }

        function w(e, t, n, i, a, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = undefined);
                for (o in t) w(e, o, n, i, t[o], r);
                return e
            }
            if (null == i && null == a ? (a = n, i = n = undefined) : null == a && ("string" == typeof n ? (a = i, i = undefined) : (a = i, i = n, n = undefined)), !1 === a) a = v;
            else if (!a) return e;
            return 1 === r && (s = a, a = function(e) {
                return pe().off(e), s.apply(this, arguments)
            }, a.guid = s.guid || (s.guid = pe.guid++)), e.each(function() {
                pe.event.add(this, t, a, i, n)
            })
        }

        function b(e, t) {
            return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function D(e) {
            return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
        }

        function L(e) {
            var t = it.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function T(e, t) {
            if (1 === t.nodeType && pe.hasData(e)) {
                var n, i, a, r = pe._data(e),
                    s = pe._data(t, r),
                    o = r.events;
                if (o) {
                    delete s.handle, s.events = {};
                    for (n in o)
                        for (i = 0, a = o[n].length; i < a; i++) pe.event.add(t, n, o[n][i])
                }
                s.data && (s.data = pe.extend({}, s.data))
            }
        }

        function k(e, t) {
            var n, i, a;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ce.noCloneEvent && t[pe.expando]) {
                    a = pe._data(t);
                    for (i in a.events) pe.removeEvent(t, i, a.handle);
                    t.removeAttribute(pe.expando)
                }
                "script" === n && t.text !== e.text ? (D(t).text = e.text, L(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function Y(e, t, n, i) {
            t = re.apply([], t);
            var a, r, s, o, d, l, u = 0,
                c = e.length,
                h = c - 1,
                p = t[0],
                m = pe.isFunction(p);
            if (m || c > 1 && "string" == typeof p && !ce.checkClone && nt.test(p)) return e.each(function(a) {
                var r = e.eq(a);
                m && (t[0] = p.call(this, a, r.html())), Y(r, t, n, i)
            });
            if (c && (l = g(t, e[0].ownerDocument, !1, e, i), a = l.firstChild, 1 === l.childNodes.length && (l = a), a || i)) {
                for (o = pe.map(f(l, "script"), D), s = o.length; u < c; u++) r = l, u !== h && (r = pe.clone(r, !0, !0), s && pe.merge(o, f(r, "script"))), n.call(e[u], r, u);
                if (s)
                    for (d = o[o.length - 1].ownerDocument, pe.map(o, L), u = 0; u < s; u++) r = o[u], Ie.test(r.type || "") && !pe._data(r, "globalEval") && pe.contains(d, r) && (r.src ? pe._evalUrl && pe._evalUrl(r.src) : pe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(at, "")));
                l = a = null
            }
            return e
        }

        function x(e, t, n) {
            for (var i, a = t ? pe.filter(t, e) : e, r = 0; null != (i = a[r]); r++) n || 1 !== i.nodeType || pe.cleanData(f(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function S(e, t) {
            var n = pe(t.createElement(e)).appendTo(t.body),
                i = pe.css(n[0], "display");
            return n.detach(), i
        }

        function C(e) {
            var t = ie,
                n = dt[e];
            return n || (n = S(e, t), "none" !== n && n || (ot = (ot || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ot[0].contentWindow || ot[0].contentDocument).document, t.write(), t.close(), n = S(e, t), ot.detach()), dt[e] = n), n
        }

        function E(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function j(e) {
            if (e in Dt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = bt.length; n--;)
                if ((e = bt[n] + t) in Dt) return e
        }

        function A(e, t) {
            for (var n, i, a, r = [], s = 0, o = e.length; s < o; s++) i = e[s], i.style && (r[s] = pe._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && He(i) && (r[s] = pe._data(i, "olddisplay", C(i.nodeName)))) : (a = He(i), (n && "none" !== n || !a) && pe._data(i, "olddisplay", a ? n : pe.css(i, "display"))));
            for (s = 0; s < o; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
            return e
        }

        function $(e, t, n) {
            var i = vt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function O(e, t, n, i, a) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += pe.css(e, n + Ne[r], !0, a)), i ? ("content" === n && (s -= pe.css(e, "padding" + Ne[r], !0, a)), "margin" !== n && (s -= pe.css(e, "border" + Ne[r] + "Width", !0, a))) : (s += pe.css(e, "padding" + Ne[r], !0, a), "padding" !== n && (s += pe.css(e, "border" + Ne[r] + "Width", !0, a)));
            return s
        }

        function N(e, t, n) {
            var i = !0,
                a = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = pt(e),
                s = ce.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r);
            if (a <= 0 || null == a) {
                if (a = ft(e, t, r), (a < 0 || null == a) && (a = e.style[t]), ut.test(a)) return a;
                i = s && (ce.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
            }
            return a + O(e, t, n || (s ? "border" : "content"), i, r) + "px"
        }

        function H(e, t, n, i, a) {
            return new H.prototype.init(e, t, n, i, a)
        }

        function F() {
            return e.setTimeout(function() {
                Lt = undefined
            }), Lt = pe.now()
        }

        function P(e, t) {
            var n, i = {
                    height: e
                },
                a = 0;
            for (t = t ? 1 : 0; a < 4; a += 2 - t) n = Ne[a], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function W(e, t, n) {
            for (var i, a = (z.tweeners[t] || []).concat(z.tweeners["*"]), r = 0, s = a.length; r < s; r++)
                if (i = a[r].call(n, t, e)) return i
        }

        function I(e, t, n) {
            var i, a, r, s, o, d, l, u = this,
                c = {},
                h = e.style,
                p = e.nodeType && He(e),
                f = pe._data(e, "fxshow");
            n.queue || (o = pe._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, d = o.empty.fire, o.empty.fire = function() {
                o.unqueued || d()
            }), o.unqueued++, u.always(function() {
                u.always(function() {
                    o.unqueued--, pe.queue(e, "fx").length || o.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = pe.css(e, "display"), "inline" === ("none" === l ? pe._data(e, "olddisplay") || C(e.nodeName) : l) && "none" === pe.css(e, "float") && (ce.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ce.shrinkWrapBlocks() || u.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (a = t[i], kt.exec(a)) {
                    if (delete t[i], r = r || "toggle" === a, a === (p ? "hide" : "show")) {
                        if ("show" !== a || !f || f[i] === undefined) continue;
                        p = !0
                    }
                    c[i] = f && f[i] || pe.style(e, i)
                } else l = undefined;
            if (pe.isEmptyObject(c)) "inline" === ("none" === l ? C(e.nodeName) : l) && (h.display = l);
            else {
                f ? "hidden" in f && (p = f.hidden) : f = pe._data(e, "fxshow", {}), r && (f.hidden = !p), p ? pe(e).show() : u.done(function() {
                    pe(e).hide()
                }), u.done(function() {
                    var t;
                    pe._removeData(e, "fxshow");
                    for (t in c) pe.style(e, t, c[t])
                });
                for (i in c) s = W(p ? f[i] : 0, i, u), i in f || (f[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function U(e, t) {
            var n, i, a, r, s;
            for (n in e)
                if (i = pe.camelCase(n), a = t[i], r = e[n], pe.isArray(r) && (a = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = pe.cssHooks[i]) && "expand" in s) {
                    r = s.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = a)
                } else t[i] = a
        }

        function z(e, t, n) {
            var i, a, r = 0,
                s = z.prefilters.length,
                o = pe.Deferred().always(function() {
                    delete d.elem
                }),
                d = function() {
                    if (a) return !1;
                    for (var t = Lt || F(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, s = 0, d = l.tweens.length; s < d; s++) l.tweens[s].run(r);
                    return o.notifyWith(e, [l, r, n]), r < 1 && d ? n : (o.resolveWith(e, [l]), !1)
                },
                l = o.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, {
                        specialEasing: {},
                        easing: pe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Lt || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? l.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; n < i; n++) l.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [l, 1, 0]), o.resolveWith(e, [l, t])) : o.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for (U(u, l.opts.specialEasing); r < s; r++)
                if (i = z.prefilters[r].call(l, e, u, l.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(i.stop, i)), i;
            return pe.map(u, W, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(d, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function q(e) {
            return pe.attr(e, "class") || ""
        }

        function R(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, a = 0,
                    r = t.toLowerCase().match(xe) || [];
                if (pe.isFunction(n))
                    for (; i = r[a++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function V(e, t, n, i) {
            function a(o) {
                var d;
                return r[o] = !0, pe.each(e[o] || [], function(e, o) {
                    var l = o(t, n, i);
                    return "string" != typeof l || s || r[l] ? s ? !(d = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                }), d
            }
            var r = {},
                s = e === Xt;
            return a(t.dataTypes[0]) || !r["*"] && a("*")
        }

        function B(e, t) {
            var n, i, a = pe.ajaxSettings.flatOptions || {};
            for (i in t) t[i] !== undefined && ((a[i] ? e : n || (n = {}))[i] = t[i]);
            return n && pe.extend(!0, e, n), e
        }

        function G(e, t, n) {
            for (var i, a, r, s, o = e.contents, d = e.dataTypes;
                "*" === d[0];) d.shift(), a === undefined && (a = e.mimeType || t.getResponseHeader("Content-Type"));
            if (a)
                for (s in o)
                    if (o[s] && o[s].test(a)) {
                        d.unshift(s);
                        break
                    }
            if (d[0] in n) r = d[0];
            else {
                for (s in n) {
                    if (!d[0] || e.converters[s + " " + d[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            if (r) return r !== d[0] && d.unshift(r), n[r]
        }

        function J(e, t, n, i) {
            var a, r, s, o, d, l = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !d && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = r, r = u.shift())
                    if ("*" === r) r = d;
                    else if ("*" !== d && d !== r) {
                if (!(s = l[d + " " + r] || l["* " + r]))
                    for (a in l)
                        if (o = a.split(" "), o[1] === r && (s = l[d + " " + o[0]] || l["* " + o[0]])) {
                            !0 === s ? s = l[a] : !0 !== l[a] && (r = o[0], u.unshift(o[1]));
                            break
                        }
                if (!0 !== s)
                    if (s && e["throws"]) t = s(t);
                    else try {
                        t = s(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: s ? e : "No conversion from " + d + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function K(e) {
            return e.style && e.style.display || pe.css(e, "display")
        }

        function X(e) {
            if (!pe.contains(e.ownerDocument || ie, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === K(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function Z(e, t, n, i) {
            var a;
            if (pe.isArray(t)) pe.each(t, function(t, a) {
                n || nn.test(e) ? i(e, a) : Z(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i)
            });
            else if (n || "object" !== pe.type(t)) i(e, t);
            else
                for (a in t) Z(e + "[" + a + "]", t[a], n, i)
        }

        function Q() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function ee() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function te(e) {
            return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ne = [],
            ie = e.document,
            ae = ne.slice,
            re = ne.concat,
            se = ne.push,
            oe = ne.indexOf,
            de = {},
            le = de.toString,
            ue = de.hasOwnProperty,
            ce = {},
            he = "1.12.4",
            pe = function(e, t) {
                return new pe.fn.init(e, t)
            },
            fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            _e = /-([\da-z])/gi,
            ge = function(e, t) {
                return t.toUpperCase()
            };
        pe.fn = pe.prototype = {
            jquery: he,
            constructor: pe,
            selector: "",
            length: 0,
            toArray: function() {
                return ae.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : ae.call(this)
            },
            pushStack: function(e) {
                var t = pe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return pe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(pe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ae.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: se,
            sort: ne.sort,
            splice: ne.splice
        }, pe.extend = pe.fn.extend = function() {
            var e, t, n, i, a, r, s = arguments[0] || {},
                o = 1,
                d = arguments.length,
                l = !1;
            for ("boolean" == typeof s && (l = s, s = arguments[o] || {}, o++), "object" == typeof s || pe.isFunction(s) || (s = {}), o === d && (s = this, o--); o < d; o++)
                if (null != (a = arguments[o]))
                    for (i in a) e = s[i], n = a[i], s !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, r = e && pe.isArray(e) ? e : []) : r = e && pe.isPlainObject(e) ? e : {}, s[i] = pe.extend(l, r, n)) : n !== undefined && (s[i] = n));
            return s
        }, pe.extend({
            expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === pe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === pe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (!ce.ownFirst)
                    for (t in e) return ue.call(e, t);
                for (t in e);
                return t === undefined || ue.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[le.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && pe.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(me, "ms-").replace(_e, ge)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, a = 0;
                if (n(e))
                    for (i = e.length; a < i && !1 !== t.call(e[a], a, e[a]); a++);
                else
                    for (a in e)
                        if (!1 === t.call(e[a], a, e[a])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(fe, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : se.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (oe) return oe.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, a = e.length; i < n;) e[a++] = t[i++];
                if (n !== n)
                    for (; t[i] !== undefined;) e[a++] = t[i++];
                return e.length = a, e
            },
            grep: function(e, t, n) {
                for (var i = [], a = 0, r = e.length, s = !n; a < r; a++) !t(e[a], a) !== s && i.push(e[a]);
                return i
            },
            map: function(e, t, i) {
                var a, r, s = 0,
                    o = [];
                if (n(e))
                    for (a = e.length; s < a; s++) null != (r = t(e[s], s, i)) && o.push(r);
                else
                    for (s in e) null != (r = t(e[s], s, i)) && o.push(r);
                return re.apply([], o)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, a;
                return "string" == typeof t && (a = e[t], t = e, e = a), pe.isFunction(e) ? (n = ae.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(ae.call(arguments)))
                }, i.guid = e.guid = e.guid || pe.guid++, i) : undefined
            },
            now: function() {
                return +new Date
            },
            support: ce
        }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            de["[object " + t + "]"] = t.toLowerCase()
        });
        var ye = function(e) {
            function t(e, t, n, i) {
                var a, r, s, o, d, l, c, p, f = t && t.ownerDocument,
                    m = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((t ? t.ownerDocument || t : W) !== j && E(t), t = t || j, $)) {
                    if (11 !== m && (l = ge.exec(e)))
                        if (a = l[1]) {
                            if (9 === m) {
                                if (!(s = t.getElementById(a))) return n;
                                if (s.id === a) return n.push(s), n
                            } else if (f && (s = f.getElementById(a)) && F(t, s) && s.id === a) return n.push(s), n
                        } else {
                            if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && !R[e + " "] && (!O || !O.test(e))) {
                        if (1 !== m) f = t, p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((o = t.getAttribute("id")) ? o = o.replace(ve, "\\$&") : t.setAttribute("id", o = P), c = T(e), r = c.length, d = he.test(o) ? "#" + o : "[id='" + o + "']"; r--;) c[r] = d + " " + h(c[r]);
                            p = c.join(","), f = ye.test(e) && u(t.parentNode) || t
                        }
                        if (p) try {
                            return Z.apply(n, f.querySelectorAll(p)), n
                        } catch (e) {} finally {
                            o === P && t.removeAttribute("id")
                        }
                    }
                }
                return Y(e.replace(oe, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[P] = !0, e
            }

            function a(e) {
                var t = j.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || B) - (~e.sourceIndex || B);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function o(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function d(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var a, r = e([], n.length, t), s = r.length; s--;) n[a = r[s]] && (n[a] = !(i[a] = n[a]))
                    })
                })
            }

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function c() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    a = n && "parentNode" === i,
                    r = U++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, r)
                } : function(t, n, s) {
                    var o, d, l, u = [I, r];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a) {
                                if (l = t[P] || (t[P] = {}), d = l[t.uniqueID] || (l[t.uniqueID] = {}), (o = d[i]) && o[0] === I && o[1] === r) return u[2] = o[2];
                                if (d[i] = u, u[2] = e(t, n, s)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var a = e.length; a--;)
                        if (!e[a](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var a = 0, r = n.length; a < r; a++) t(e, n[a], i);
                return i
            }

            function _(e, t, n, i, a) {
                for (var r, s = [], o = 0, d = e.length, l = null != t; o < d; o++)(r = e[o]) && (n && !n(r, i, a) || (s.push(r), l && t.push(o)));
                return s
            }

            function g(e, t, n, a, r, s) {
                return a && !a[P] && (a = g(a)), r && !r[P] && (r = g(r, s)), i(function(i, s, o, d) {
                    var l, u, c, h = [],
                        p = [],
                        f = s.length,
                        g = i || m(t || "*", o.nodeType ? [o] : o, []),
                        y = !e || !i && t ? g : _(g, h, e, o, d),
                        v = n ? r || (i ? e : f || a) ? [] : s : y;
                    if (n && n(y, v, o, d), a)
                        for (l = _(v, p), a(l, [], o, d), u = l.length; u--;)(c = l[u]) && (v[p[u]] = !(y[p[u]] = c));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (l = [], u = v.length; u--;)(c = v[u]) && l.push(y[u] = c);
                                r(null, v = [], l, d)
                            }
                            for (u = v.length; u--;)(c = v[u]) && (l = r ? ee(i, c) : h[u]) > -1 && (i[l] = !(s[l] = c))
                        }
                    } else v = _(v === s ? v.splice(f, v.length) : v), r ? r(null, s, v, d) : Z.apply(s, v)
                })
            }

            function y(e) {
                for (var t, n, i, a = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], o = r ? 1 : 0, d = p(function(e) {
                        return e === t
                    }, s, !0), l = p(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), u = [function(e, n, i) {
                        var a = !r && (i || n !== x) || ((t = n).nodeType ? d(e, n, i) : l(e, n, i));
                        return t = null, a
                    }]; o < a; o++)
                    if (n = b.relative[e[o].type]) u = [p(f(u), n)];
                    else {
                        if (n = b.filter[e[o].type].apply(null, e[o].matches), n[P]) {
                            for (i = ++o; i < a && !b.relative[e[i].type]; i++);
                            return g(o > 1 && f(u), o > 1 && h(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(oe, "$1"), n, o < i && y(e.slice(o, i)), i < a && y(e = e.slice(i)), i < a && h(e))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function v(e, n) {
                var a = n.length > 0,
                    r = e.length > 0,
                    s = function(i, s, o, d, l) {
                        var u, c, h, p = 0,
                            f = "0",
                            m = i && [],
                            g = [],
                            y = x,
                            v = i || r && b.find.TAG("*", l),
                            M = I += null == y ? 1 : Math.random() || .1,
                            w = v.length;
                        for (l && (x = s === j || s || l); f !== w && null != (u = v[f]); f++) {
                            if (r && u) {
                                for (c = 0, s || u.ownerDocument === j || (E(u), o = !$); h = e[c++];)
                                    if (h(u, s || j, o)) {
                                        d.push(u);
                                        break
                                    }
                                l && (I = M)
                            }
                            a && ((u = !h && u) && p--, i && m.push(u))
                        }
                        if (p += f, a && f !== p) {
                            for (c = 0; h = n[c++];) h(m, g, s, o);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || g[f] || (g[f] = K.call(d));
                                g = _(g)
                            }
                            Z.apply(d, g), l && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(d)
                        }
                        return l && (I = M, x = y), m
                    };
                return a ? i(s) : s
            }
            var M, w, b, D, L, T, k, Y, x, S, C, E, j, A, $, O, N, H, F, P = "sizzle" + 1 * new Date,
                W = e.document,
                I = 0,
                U = 0,
                z = n(),
                q = n(),
                R = n(),
                V = function(e, t) {
                    return e === t && (C = !0), 0
                },
                B = 1 << 31,
                G = {}.hasOwnProperty,
                J = [],
                K = J.pop,
                X = J.push,
                Z = J.push,
                Q = J.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ae = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                de = new RegExp("^" + ne + "*," + ne + "*"),
                le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                ce = new RegExp(re),
                he = new RegExp("^" + ie + "$"),
                pe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                _e = /^[^{]+\{\s*\[native \w/,
                ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                ve = /'|\\/g,
                Me = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                be = function() {
                    E()
                };
            try {
                Z.apply(J = Q.call(W.childNodes), W.childNodes), J[W.childNodes.length].nodeType
            } catch (e) {
                Z = {
                    apply: J.length ? function(e, t) {
                        X.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, L = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, E = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : W;
                return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, A = j.documentElement, $ = !L(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), w.attributes = a(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = a(function(e) {
                    return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = _e.test(j.getElementsByClassName), w.getById = a(function(e) {
                    return A.appendChild(e).id = P, !j.getElementsByName || !j.getElementsByName(P).length
                }), w.getById ? (b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && $) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, b.filter.ID = function(e) {
                    var t = e.replace(Me, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var t = e.replace(Me, we);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), b.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        a = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[a++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, b.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && $) return t.getElementsByClassName(e)
                }, N = [], O = [], (w.qsa = _e.test(j.querySelectorAll)) && (a(function(e) {
                    A.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || O.push(".#.+[+~]")
                }), a(function(e) {
                    var t = j.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = _e.test(H = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && a(function(e) {
                    w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), N.push("!=", re)
                }), O = O.length && new RegExp(O.join("|")), N = N.length && new RegExp(N.join("|")), t = _e.test(A.compareDocumentPosition), F = t || _e.test(A.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = t ? function(e, t) {
                    if (e === t) return C = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === W && F(W, e) ? -1 : t === j || t.ownerDocument === W && F(W, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return C = !0, 0;
                    var n, i = 0,
                        a = e.parentNode,
                        r = t.parentNode,
                        o = [e],
                        d = [t];
                    if (!a || !r) return e === j ? -1 : t === j ? 1 : a ? -1 : r ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                    if (a === r) return s(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) d.unshift(n);
                    for (; o[i] === d[i];) i++;
                    return i ? s(o[i], d[i]) : o[i] === W ? -1 : d[i] === W ? 1 : 0
                }, j) : j
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== j && E(e), n = n.replace(ue, "='$1']"), w.matchesSelector && $ && !R[n + " "] && (!N || !N.test(n)) && (!O || !O.test(n))) try {
                    var i = H.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, j, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== j && E(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== j && E(e);
                var n = b.attrHandle[t.toLowerCase()],
                    i = n && G.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !$) : undefined;
                return i !== undefined ? i : w.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    a = 0;
                if (C = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(V), C) {
                    for (; t = e[a++];) t === e[a] && (i = n.push(a));
                    for (; i--;) e.splice(n[i], 1)
                }
                return S = null, e
            }, D = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += D(e)
                    } else if (3 === a || 4 === a) return e.nodeValue
                } else
                    for (; t = e[i++];) n += D(t);
                return n
            }, b = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Me, we), e[3] = (e[3] || e[4] || e[5] || "").replace(Me, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Me, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(a) {
                            var r = t.attr(a, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, a) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === i && 0 === a ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, d) {
                            var l, u, c, h, p, f, m = r !== s ? "nextSibling" : "previousSibling",
                                _ = t.parentNode,
                                g = o && t.nodeName.toLowerCase(),
                                y = !d && !o,
                                v = !1;
                            if (_) {
                                if (r) {
                                    for (; m;) {
                                        for (h = t; h = h[m];)
                                            if (o ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? _.firstChild : _.lastChild], s && y) {
                                    for (h = _, c = h[P] || (h[P] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), l = u[e] || [], p = l[0] === I && l[1], v = p && l[2], h = p && _.childNodes[p]; h = ++p && h && h[m] || (v = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++v && h === t) {
                                            u[e] = [I, p, v];
                                            break
                                        }
                                } else if (y && (h = t, c = h[P] || (h[P] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), l = u[e] || [], p = l[0] === I && l[1], v = p), !1 === v)
                                    for (;
                                        (h = ++p && h && h[m] || (v = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++v || (y && (c = h[P] || (h[P] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), u[e] = [I, v]), h !== t)););
                                return (v -= a) === i || v % i == 0 && v / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var a, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[P] ? r(n) : r.length > 1 ? (a = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, a = r(e, n), s = a.length; s--;) i = ee(e, a[s]), e[i] = !(t[i] = a[s])
                        }) : function(e) {
                            return r(e, 0, a)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            a = k(e.replace(oe, "$1"));
                        return a[P] ? i(function(e, t, n, i) {
                            for (var r, s = a(e, null, i, []), o = e.length; o--;)(r = s[o]) && (e[o] = !(t[o] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, a(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(Me, we),
                            function(t) {
                                return (t.textContent || t.innerText || D(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Me, we).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === A
                    },
                    focus: function(e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, b.pseudos.nth = b.pseudos.eq;
            for (M in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[M] = o(M);
            for (M in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[M] = d(M);
            return c.prototype = b.filters = b.pseudos, b.setFilters = new c, T = t.tokenize = function(e, n) {
                var i, a, r, s, o, d, l, u = q[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (o = e, d = [], l = b.preFilter; o;) {
                    i && !(a = de.exec(o)) || (a && (o = o.slice(a[0].length) || o), d.push(r = [])), i = !1, (a = le.exec(o)) && (i = a.shift(), r.push({
                        value: i,
                        type: a[0].replace(oe, " ")
                    }), o = o.slice(i.length));
                    for (s in b.filter) !(a = pe[s].exec(o)) || l[s] && !(a = l[s](a)) || (i = a.shift(), r.push({
                        value: i,
                        type: s,
                        matches: a
                    }), o = o.slice(i.length));
                    if (!i) break
                }
                return n ? o.length : o ? t.error(e) : q(e, d).slice(0)
            }, k = t.compile = function(e, t) {
                var n, i = [],
                    a = [],
                    r = R[e + " "];
                if (!r) {
                    for (t || (t = T(e)), n = t.length; n--;) r = y(t[n]), r[P] ? i.push(r) : a.push(r);
                    r = R(e, v(a, i)), r.selector = e
                }
                return r
            }, Y = t.select = function(e, t, n, i) {
                var a, r, s, o, d, l = "function" == typeof e && e,
                    c = !i && T(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === t.nodeType && $ && b.relative[r[1].type]) {
                        if (!(t = (b.find.ID(s.matches[0].replace(Me, we), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (a = pe.needsContext.test(e) ? 0 : r.length; a-- && (s = r[a], !b.relative[o = s.type]);)
                        if ((d = b.find[o]) && (i = d(s.matches[0].replace(Me, we), ye.test(r[0].type) && u(t.parentNode) || t))) {
                            if (r.splice(a, 1), !(e = i.length && h(r))) return Z.apply(n, i), n;
                            break
                        }
                }
                return (l || k(e, c))(i, t, !$, n, !t || ye.test(e) && u(t.parentNode) || t), n
            }, w.sortStable = P.split("").sort(V).join("") === P, w.detectDuplicates = !!C, E(), w.sortDetached = a(function(e) {
                return 1 & e.compareDocumentPosition(j.createElement("div"))
            }), a(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && a(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), a(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains;
        var ve = function(e, t, n) {
                for (var i = [], a = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (a && pe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            Me = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            we = pe.expr.match.needsContext,
            be = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            De = /^.[^:#\[\.,]*$/;
        pe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, pe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    a = i.length;
                if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < a; t++)
                        if (pe.contains(i[t], this)) return !0
                }));
                for (t = 0; t < a; t++) pe.find(e, i[t], n);
                return n = this.pushStack(a > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
            }
        });
        var Le, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (pe.fn.init = function(e, t, n) {
            var i, a;
            if (!e) return this;
            if (n = n || Le, "string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), be.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((a = ie.getElementById(i[2])) && a.parentNode) {
                    if (a.id !== i[2]) return Le.find(e);
                    this.length = 1, this[0] = a
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        }).prototype = pe.fn, Le = pe(ie);
        var ke = /^(?:parents|prev(?:Until|All))/,
            Ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        pe.fn.extend({
            has: function(e) {
                var t, n = pe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (pe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, a = this.length, r = [], s = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < a; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? pe.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), pe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ve(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ve(e, "parentNode", n)
            },
            next: function(e) {
                return a(e, "nextSibling")
            },
            prev: function(e) {
                return a(e, "previousSibling")
            },
            nextAll: function(e) {
                return ve(e, "nextSibling")
            },
            prevAll: function(e) {
                return ve(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ve(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ve(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Me((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Me(e.firstChild)
            },
            contents: function(e) {
                return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
            }
        }, function(e, t) {
            pe.fn[e] = function(n, i) {
                var a = pe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = pe.filter(i, a)), this.length > 1 && (Ye[e] || (a = pe.uniqueSort(a)), ke.test(e) && (a = a.reverse())), this.pushStack(a)
            }
        });
        var xe = /\S+/g;
        pe.Callbacks = function(e) {
            e = "string" == typeof e ? r(e) : pe.extend({}, e);
            var t, n, i, a, s = [],
                o = [],
                d = -1,
                l = function() {
                    for (a = e.once, i = t = !0; o.length; d = -1)
                        for (n = o.shift(); ++d < s.length;) !1 === s[d].apply(n[0], n[1]) && e.stopOnFalse && (d = s.length, n = !1);
                    e.memory || (n = !1), t = !1, a && (s = n ? [] : "")
                },
                u = {
                    add: function() {
                        return s && (n && !t && (d = s.length - 1, o.push(n)), function t(n) {
                            pe.each(n, function(n, i) {
                                pe.isFunction(i) ? e.unique && u.has(i) || s.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return pe.each(arguments, function(e, t) {
                            for (var n;
                                (n = pe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= d && d--
                        }), this
                    },
                    has: function(e) {
                        return e ? pe.inArray(e, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return a = o = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return a = !0, n || u.disable(), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, n) {
                        return a || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, pe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return pe.Deferred(function(n) {
                                pe.each(t, function(t, r) {
                                    var s = pe.isFunction(e[t]) && e[t];
                                    a[r[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? pe.extend(e, i) : i
                        }
                    },
                    a = {};
                return i.pipe = i.then, pe.each(t, function(e, r) {
                    var s = r[2],
                        o = r[3];
                    i[r[1]] = s.add, o && s.add(function() {
                        n = o
                    }, t[1 ^ e][2].disable, t[2][2].lock), a[r[0]] = function() {
                        return a[r[0] + "With"](this === a ? i : this, arguments), this
                    }, a[r[0] + "With"] = s.fireWith
                }), i.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var t, n, i, a = 0,
                    r = ae.call(arguments),
                    s = r.length,
                    o = 1 !== s || e && pe.isFunction(e.promise) ? s : 0,
                    d = 1 === o ? e : pe.Deferred(),
                    l = function(e, n, i) {
                        return function(a) {
                            n[e] = this, i[e] = arguments.length > 1 ? ae.call(arguments) : a, i === t ? d.notifyWith(n, i) : --o || d.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); a < s; a++) r[a] && pe.isFunction(r[a].promise) ? r[a].promise().progress(l(a, n, t)).done(l(a, i, r)).fail(d.reject) : --o;
                return o || d.resolveWith(i, r), d.promise()
            }
        });
        var Se;
        pe.fn.ready = function(e) {
            return pe.ready.promise().done(e), this
        }, pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? pe.readyWait++ : pe.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (Se.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
            }
        }), pe.ready.promise = function(t) {
            if (!Se)
                if (Se = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
                else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", o), e.addEventListener("load", o);
            else {
                ie.attachEvent("onreadystatechange", o), e.attachEvent("onload", o);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!pe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        s(), pe.ready()
                    }
                }()
            }
            return Se.promise(t)
        }, pe.ready.promise();
        var Ce;
        for (Ce in pe(ce)) break;
        ce.ownFirst = "0" === Ce, ce.inlineBlockNeedsLayout = !1, pe(function() {
                var e, t, n, i;
                (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ce.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ie.createElement("div");
                ce.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    ce.deleteExpando = !1
                }
                e = null
            }();
        var Ee = function(e) {
                var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            },
            je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ae = /([A-Z])/g;
        pe.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !l(e)
                },
                data: function(e, t, n) {
                    return u(e, t, n)
                },
                removeData: function(e, t) {
                    return c(e, t)
                },
                _data: function(e, t, n) {
                    return u(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return c(e, t, !0)
                }
            }), pe.fn.extend({
                data: function(e, t) {
                    var n, i, a, r = this[0],
                        s = r && r.attributes;
                    if (e === undefined) {
                        if (this.length && (a = pe.data(r), 1 === r.nodeType && !pe._data(r, "parsedAttrs"))) {
                            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)), d(r, i, a[i])));
                            pe._data(r, "parsedAttrs", !0)
                        }
                        return a
                    }
                    return "object" == typeof e ? this.each(function() {
                        pe.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        pe.data(this, e, t)
                    }) : r ? d(r, e, pe.data(r, e)) : undefined
                },
                removeData: function(e) {
                    return this.each(function() {
                        pe.removeData(this, e)
                    })
                }
            }), pe.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = pe.queue(e, t),
                        i = n.length,
                        a = n.shift(),
                        r = pe._queueHooks(e, t),
                        s = function() {
                            pe.dequeue(e, t)
                        };
                    "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete r.stop, a.call(e, s, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return pe._data(e, n) || pe._data(e, n, {
                        empty: pe.Callbacks("once memory").add(function() {
                            pe._removeData(e, t + "queue"), pe._removeData(e, n)
                        })
                    })
                }
            }), pe.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : t === undefined ? this : this.each(function() {
                        var n = pe.queue(this, e, t);
                        pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        pe.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        a = pe.Deferred(),
                        r = this,
                        s = this.length,
                        o = function() {
                            --i || a.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = pe._data(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                    return o(), a.promise(t)
                }
            }),
            function() {
                var e;
                ce.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, i;
                    return (n = ie.getElementsByTagName("body")[0]) && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
                }
            }();
        var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Oe = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
            Ne = ["Top", "Right", "Bottom", "Left"],
            He = function(e, t) {
                return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
            },
            Fe = function(e, t, n, i, a, r, s) {
                var o = 0,
                    d = e.length,
                    l = null == n;
                if ("object" === pe.type(n)) {
                    a = !0;
                    for (o in n) Fe(e, t, o, n[o], !0, r, s)
                } else if (i !== undefined && (a = !0, pe.isFunction(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(pe(e), n)
                    })), t))
                    for (; o < d; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
                return a ? e : l ? t.call(e) : d ? t(e[0], n) : r
            },
            Pe = /^(?:checkbox|radio)$/i,
            We = /<([\w:-]+)/,
            Ie = /^$|\/(?:java|ecma)script/i,
            Ue = /^\s+/,
            ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var e = ie.createElement("div"),
                t = ie.createDocumentFragment(),
                n = ie.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ce.leadingWhitespace = 3 === e.firstChild.nodeType, ce.tbody = !e.getElementsByTagName("tbody").length, ce.htmlSerialize = !!e.getElementsByTagName("link").length, ce.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ce.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ce.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ce.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, ce.attributes = !e.getAttribute(pe.expando)
        }();
        var qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ce.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td;
        var Re = /<|&#?\w+;/,
            Ve = /<tbody/i;
        ! function() {
            var t, n, i = ie.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ce[t] = n in e) || (i.setAttribute(n, "t"), ce[t] = !1 === i.attributes[n].expando);
            i = null
        }();
        var Be = /^(?:input|select|textarea)$/i,
            Ge = /^key/,
            Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ke = /^(?:focusinfocus|focusoutblur)$/,
            Xe = /^([^.]*)(?:\.(.+)|)/;
        pe.event = {
            global: {},
            add: function(e, t, n, i, a) {
                var r, s, o, d, l, u, c, h, p, f, m, _ = pe._data(e);
                if (_) {
                    for (n.handler && (d = n, n = d.handler, a = d.selector), n.guid || (n.guid = pe.guid++), (s = _.events) || (s = _.events = {}), (u = _.handle) || (u = _.handle = function(e) {
                            return void 0 === pe || e && pe.event.triggered === e.type ? undefined : pe.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = e), t = (t || "").match(xe) || [""], o = t.length; o--;) r = Xe.exec(t[o]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (a ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, c = pe.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && pe.expr.match.needsContext.test(a),
                        namespace: f.join(".")
                    }, d), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, l.setup && !1 !== l.setup.call(e, i, f, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), l.add && (l.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, c) : h.push(c), pe.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, a) {
                var r, s, o, d, l, u, c, h, p, f, m, _ = pe.hasData(e) && pe._data(e);
                if (_ && (u = _.events)) {
                    for (t = (t || "").match(xe) || [""], l = t.length; l--;)
                        if (o = Xe.exec(t[l]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
                            for (c = pe.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, h = u[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), d = r = h.length; r--;) s = h[r], !a && m !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, c.remove && c.remove.call(e, s));
                            d && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, _.handle) || pe.removeEvent(e, p, _.handle), delete u[p])
                        } else
                            for (p in u) pe.event.remove(e, p + t[l], n, i, !0);
                    pe.isEmptyObject(u) && (delete _.handle, pe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, a) {
                var r, s, o, d, l, u, c, h = [i || ie],
                    p = ue.call(t, "type") ? t.type : t,
                    f = ue.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ke.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, a || !l.trigger || !1 !== l.trigger.apply(i, n))) {
                    if (!a && !l.noBubble && !pe.isWindow(i)) {
                        for (d = l.delegateType || p, Ke.test(d + p) || (o = o.parentNode); o; o = o.parentNode) h.push(o), u = o;
                        u === (i.ownerDocument || ie) && h.push(u.defaultView || u.parentWindow || e)
                    }
                    for (c = 0;
                        (o = h[c++]) && !t.isPropagationStopped();) t.type = c > 1 ? d : l.bindType || p, r = (pe._data(o, "events") || {})[t.type] && pe._data(o, "handle"), r && r.apply(o, n), (r = s && o[s]) && r.apply && Ee(o) && (t.result = r.apply(o, n), !1 === t.result && t.preventDefault());
                    if (t.type = p, !a && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(h.pop(), n)) && Ee(i) && s && i[p] && !pe.isWindow(i)) {
                        u = i[s], u && (i[s] = null), pe.event.triggered = p;
                        try {
                            i[p]()
                        } catch (e) {}
                        pe.event.triggered = undefined, u && (i[s] = u)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = pe.event.fix(e);
                var t, n, i, a, r, s = [],
                    o = ae.call(arguments),
                    d = (pe._data(this, "events") || {})[e.type] || [],
                    l = pe.event.special[e.type] || {};
                if (o[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                    for (s = pe.event.handlers.call(this, e, d), t = 0;
                        (a = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = a.elem, n = 0;
                            (r = a.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, (i = ((pe.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, o)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, a, r, s = [],
                    o = t.delegateCount,
                    d = e.target;
                if (o && d.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; d != this; d = d.parentNode || this)
                        if (1 === d.nodeType && (!0 !== d.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < o; n++) r = t[n], a = r.selector + " ", i[a] === undefined && (i[a] = r.needsContext ? pe(a, this).index(d) > -1 : pe.find(a, this, null, [d]).length), i[a] && i.push(r);
                            i.length && s.push({
                                elem: d,
                                handlers: i
                            })
                        }
                return o < t.length && s.push({
                    elem: this,
                    handlers: t.slice(o)
                }), s
            },
            fix: function(e) {
                if (e[pe.expando]) return e;
                var t, n, i, a = e.type,
                    r = e,
                    s = this.fixHooks[a];
                for (s || (this.fixHooks[a] = s = Je.test(a) ? this.mouseHooks : Ge.test(a) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new pe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, a, r = t.button,
                        s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, a = i.documentElement, n = i.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || r === undefined || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== M() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === M() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(e) {
                        return pe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = pe.extend(new pe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, pe.removeEvent = ie.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, pe.Event = function(e, t) {
            if (!(this instanceof pe.Event)) return new pe.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? y : v) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
        }, pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        a = e.relatedTarget,
                        r = e.handleObj;
                    return a && (a === i || pe.contains(i, a)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ce.submit || (pe.event.special.submit = {
            setup: function() {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
                    n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), pe._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.remove(this, "._submit")
            }
        }), ce.change || (pe.event.special.change = {
            setup: function() {
                if (Be.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), pe.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
                })), !1;
                pe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Be.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                    }), pe._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return pe.event.remove(this, "._change"), !Be.test(this.nodeName)
            }
        }), ce.focusin || pe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                pe.event.simulate(t, e.target, pe.event.fix(e))
            };
            pe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        a = pe._data(i, t);
                    a || i.addEventListener(e, n, !0), pe._data(i, t, (a || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        a = pe._data(i, t) - 1;
                    a ? pe._data(i, t, a) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
                }
            }
        }), pe.fn.extend({
            on: function(e, t, n, i) {
                return w(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return w(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, a;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, t, e[a]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = v), this.each(function() {
                    pe.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    pe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return pe.event.trigger(e, t, n, !0)
            }
        });
        var Ze = / jQuery\d+="(?:null|\d+)"/g,
            Qe = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
            et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /^true\/(.*)/,
            at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            rt = p(ie),
            st = rt.appendChild(ie.createElement("div"));
        pe.extend({
            htmlPrefilter: function(e) {
                return e.replace(et, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, a, r, s, o, d = pe.contains(e.ownerDocument, e);
                if (ce.html5Clone || pe.isXMLDoc(e) || !Qe.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(r = st.firstChild)), !(ce.noCloneEvent && ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for (i = f(r), o = f(e), s = 0; null != (a = o[s]); ++s) i[s] && k(a, i[s]);
                if (t)
                    if (n)
                        for (o = o || f(e), i = i || f(r), s = 0; null != (a = o[s]); s++) T(a, i[s]);
                    else T(e, r);
                return i = f(r, "script"), i.length > 0 && m(i, !d && f(e, "script")), i = o = a = null, r
            },
            cleanData: function(e, t) {
                for (var n, i, a, r, s = 0, o = pe.expando, d = pe.cache, l = ce.attributes, u = pe.event.special; null != (n = e[s]); s++)
                    if ((t || Ee(n)) && (a = n[o], r = a && d[a])) {
                        if (r.events)
                            for (i in r.events) u[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, r.handle);
                        d[a] && (delete d[a], l || "undefined" == typeof n.removeAttribute ? n[o] = undefined : n.removeAttribute(o), ne.push(a))
                    }
            }
        }), pe.fn.extend({
            domManip: Y,
            detach: function(e) {
                return x(this, e, !0)
            },
            remove: function(e) {
                return x(this, e)
            },
            text: function(e) {
                return Fe(this, function(e) {
                    return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return Y(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        b(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return Y(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = b(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Y(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Y(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && pe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return pe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Fe(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : undefined;
                    if ("string" == typeof e && !tt.test(e) && (ce.htmlSerialize || !Qe.test(e)) && (ce.leadingWhitespace || !Ue.test(e)) && !qe[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(f(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Y(this, arguments, function(t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(f(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), pe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            pe.fn[e] = function(e) {
                for (var n, i = 0, a = [], r = pe(e), s = r.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), pe(r[i])[t](n), se.apply(a, n.get());
                return this.pushStack(a)
            }
        });
        var ot, dt = {
                HTML: "block",
                BODY: "block"
            },
            lt = /^margin/,
            ut = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
            ct = function(e, t, n, i) {
                var a, r, s = {};
                for (r in t) s[r] = e.style[r], e.style[r] = t[r];
                a = n.apply(e, i || []);
                for (r in t) e.style[r] = s[r];
                return a
            },
            ht = ie.documentElement;
        ! function() {
            function t() {
                var t, u, c = ie.documentElement;
                c.appendChild(d), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = a = o = !1, i = s = !0, e.getComputedStyle && (u = e.getComputedStyle(l), n = "1%" !== (u || {}).top, o = "2px" === (u || {}).marginLeft, a = "4px" === (u || {
                    width: "4px"
                }).width, l.style.marginRight = "50%", i = "4px" === (u || {
                    marginRight: "4px"
                }).marginRight, t = l.appendChild(ie.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", s = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", r = 0 === l.getClientRects().length, r && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", r = 0 === t[0].offsetHeight)), c.removeChild(d)
            }
            var n, i, a, r, s, o, d = ie.createElement("div"),
                l = ie.createElement("div");
            l.style && (l.style.cssText = "float:left;opacity:.5", ce.opacity = "0.5" === l.style.opacity, ce.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ce.clearCloneStyle = "content-box" === l.style.backgroundClip, d = ie.createElement("div"), d.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", d.appendChild(l), ce.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(ce, {
                reliableHiddenOffsets: function() {
                    return null == n && t(), r
                },
                boxSizingReliable: function() {
                    return null == n && t(), a
                },
                pixelMarginRight: function() {
                    return null == n && t(), i
                },
                pixelPosition: function() {
                    return null == n && t(), n
                },
                reliableMarginRight: function() {
                    return null == n && t(), s
                },
                reliableMarginLeft: function() {
                    return null == n && t(), o
                }
            }))
        }();
        var pt, ft, mt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (pt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, ft = function(e, t, n) {
            var i, a, r, s, o = e.style;
            return n = n || pt(e), s = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== s && s !== undefined || pe.contains(e.ownerDocument, e) || (s = pe.style(e, t)), n && !ce.pixelMarginRight() && ut.test(s) && lt.test(t) && (i = o.width, a = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = a, o.maxWidth = r), s === undefined ? s : s + ""
        }) : ht.currentStyle && (pt = function(e) {
            return e.currentStyle
        }, ft = function(e, t, n) {
            var i, a, r, s, o = e.style;
            return n = n || pt(e), s = n ? n[t] : undefined, null == s && o && o[t] && (s = o[t]), ut.test(s) && !mt.test(t) && (i = o.left, a = e.runtimeStyle, r = a && a.left, r && (a.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : s, s = o.pixelLeft + "px", o.left = i, r && (a.left = r)), s === undefined ? s : s + "" || "auto"
        });
        var _t = /alpha\([^)]*\)/i,
            gt = /opacity\s*=\s*([^)]*)/i,
            yt = /^(none|table(?!-c[ea]).+)/,
            vt = new RegExp("^(" + $e + ")(.*)$", "i"),
            Mt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            wt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            bt = ["Webkit", "O", "Moz", "ms"],
            Dt = ie.createElement("div").style;
        pe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ft(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ce.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, r, s, o = pe.camelCase(t),
                        d = e.style;
                    if (t = pe.cssProps[o] || (pe.cssProps[o] = j(o) || o), s = pe.cssHooks[t] || pe.cssHooks[o], n === undefined) return s && "get" in s && (a = s.get(e, !1, i)) !== undefined ? a : d[t];
                    if (r = typeof n, "string" === r && (a = Oe.exec(n)) && a[1] && (n = h(e, t, a), r = "number"), null != n && n === n && ("number" === r && (n += a && a[3] || (pe.cssNumber[o] ? "" : "px")), ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), !(s && "set" in s && (n = s.set(e, n, i)) === undefined))) try {
                        d[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var a, r, s, o = pe.camelCase(t);
                return t = pe.cssProps[o] || (pe.cssProps[o] = j(o) || o), s = pe.cssHooks[t] || pe.cssHooks[o], s && "get" in s && (r = s.get(e, !0, n)), r === undefined && (r = ft(e, t, i)), "normal" === r && t in wt && (r = wt[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
            }
        }), pe.each(["height", "width"], function(e, t) {
            pe.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ct(e, Mt, function() {
                        return N(e, t, i)
                    }) : N(e, t, i)
                },
                set: function(e, n, i) {
                    var a = i && pt(e);
                    return $(e, n, i ? O(e, t, i, ce.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, a), a) : 0)
                }
            }
        }), ce.opacity || (pe.cssHooks.opacity = {
            get: function(e, t) {
                return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    a = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(r.replace(_t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = _t.test(r) ? r.replace(_t, a) : r + " " + a)
            }
        }), pe.cssHooks.marginRight = E(ce.reliableMarginRight, function(e, t) {
            if (t) return ct(e, {
                display: "inline-block"
            }, ft, [e, "marginRight"])
        }), pe.cssHooks.marginLeft = E(ce.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(ft(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ct(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), pe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            pe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) a[e + Ne[i] + t] = r[i] || r[i - 2] || r[0];
                    return a
                }
            }, lt.test(e) || (pe.cssHooks[e + t].set = $)
        }), pe.fn.extend({
            css: function(e, t) {
                return Fe(this, function(e, t, n) {
                    var i, a, r = {},
                        s = 0;
                    if (pe.isArray(t)) {
                        for (i = pt(e), a = t.length; s < a; s++) r[t[s]] = pe.css(e, t[s], !1, i);
                        return r
                    }
                    return n !== undefined ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return A(this, !0)
            },
            hide: function() {
                return A(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    He(this) ? pe(this).show() : pe(this).hide()
                })
            }
        }), pe.Tween = H, H.prototype = {
            constructor: H,
            init: function(e, t, n, i, a, r) {
                this.elem = e, this.prop = n, this.easing = a || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (pe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, pe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, pe.fx = H.prototype.init, pe.fx.step = {};
        var Lt, Tt, kt = /^(?:toggle|show|hide)$/,
            Yt = /queueHooks$/;
        pe.Animation = pe.extend(z, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return h(n.elem, e, Oe.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                    for (var n, i = 0, a = e.length; i < a; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
                },
                prefilters: [I],
                prefilter: function(e, t) {
                    t ? z.prefilters.unshift(e) : z.prefilters.push(e)
                }
            }), pe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? pe.extend({}, e) : {
                    complete: n || !n && t || pe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !pe.isFunction(t) && t
                };
                return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue)
                }, i
            }, pe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(He).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var a = pe.isEmptyObject(e),
                        r = pe.speed(t, n, i),
                        s = function() {
                            var t = z(this, pe.extend({}, e), r);
                            (a || pe._data(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, a || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            a = null != e && e + "queueHooks",
                            r = pe.timers,
                            s = pe._data(this);
                        if (a) s[a] && s[a].stop && i(s[a]);
                        else
                            for (a in s) s[a] && s[a].stop && Yt.test(a) && i(s[a]);
                        for (a = r.length; a--;) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n), t = !1, r.splice(a, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = pe._data(this),
                            i = n[e + "queue"],
                            a = n[e + "queueHooks"],
                            r = pe.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, pe.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function(e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function(e, i, a) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, a)
                }
            }), pe.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                pe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), pe.timers = [], pe.fx.tick = function() {
                var e, t = pe.timers,
                    n = 0;
                for (Lt = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || pe.fx.stop(), Lt = undefined
            }, pe.fx.timer = function(e) {
                pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
            }, pe.fx.interval = 13, pe.fx.start = function() {
                Tt || (Tt = e.setInterval(pe.fx.tick, pe.fx.interval))
            }, pe.fx.stop = function() {
                e.clearInterval(Tt), Tt = null
            }, pe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, pe.fn.delay = function(t, n) {
                return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var a = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(a)
                    }
                })
            },
            function() {
                var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    a = i.appendChild(ie.createElement("option"));
                n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ce.getSetAttribute = "t" !== n.className, ce.style = /top/.test(e.getAttribute("style")), ce.hrefNormalized = "/a" === e.getAttribute("href"), ce.checkOn = !!t.value, ce.optSelected = a.selected, ce.enctype = !!ie.createElement("form").enctype, i.disabled = !0, ce.optDisabled = !a.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), ce.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ce.radioValue = "t" === t.value
            }();
        var xt = /\r/g,
            St = /[\x20\t\r\n\f]+/g;
        pe.fn.extend({
            val: function(e) {
                var t, n, i, a = this[0]; {
                    if (arguments.length) return i = pe.isFunction(e), this.each(function(n) {
                        var a;
                        1 === this.nodeType && (a = i ? e.call(this, n, pe(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : pe.isArray(a) && (a = pe.map(a, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, a, "value") !== undefined || (this.value = a))
                    });
                    if (a) return (t = pe.valHooks[a.type] || pe.valHooks[a.nodeName.toLowerCase()]) && "get" in t && (n = t.get(a, "value")) !== undefined ? n : (n = a.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
                }
            }
        }), pe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : pe.trim(pe.text(e)).replace(St, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, a = e.selectedIndex, r = "select-one" === e.type || a < 0, s = r ? null : [], o = r ? a + 1 : i.length, d = a < 0 ? o : r ? a : 0; d < o; d++)
                            if (n = i[d], (n.selected || d === a) && (ce.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), r) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, a = e.options, r = pe.makeArray(t), s = a.length; s--;)
                            if (i = a[s], pe.inArray(pe.valHooks.option.get(i), r) > -1) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), pe.each(["radio", "checkbox"], function() {
            pe.valHooks[this] = {
                set: function(e, t) {
                    if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
                }
            }, ce.checkOn || (pe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Ct, Et, jt = pe.expr.attrHandle,
            At = /^(?:checked|selected)$/i,
            $t = ce.getSetAttribute,
            Ot = ce.input;
        pe.fn.extend({
            attr: function(e, t) {
                return Fe(this, pe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    pe.removeAttr(this, e)
                })
            }
        }), pe.extend({
            attr: function(e, t, n) {
                var i, a, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === r && pe.isXMLDoc(e) || (t = t.toLowerCase(), a = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Et : Ct)), n !== undefined ? null === n ? void pe.removeAttr(e, t) : a && "set" in a && (i = a.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : (i = pe.find.attr(e, t), null == i ? undefined : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ce.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, a = 0,
                    r = t && t.match(xe);
                if (r && 1 === e.nodeType)
                    for (; n = r[a++];) i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Ot && $t || !At.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute($t ? n : i)
            }
        }), Et = {
            set: function(e, t, n) {
                return !1 === t ? pe.removeAttr(e, n) : Ot && $t || !At.test(n) ? e.setAttribute(!$t && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = jt[t] || pe.find.attr;
            Ot && $t || !At.test(t) ? jt[t] = function(e, t, i) {
                var a, r;
                return i || (r = jt[t], jt[t] = a, a = null != n(e, t, i) ? t.toLowerCase() : null, jt[t] = r), a
            } : jt[t] = function(e, t, n) {
                if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Ot && $t || (pe.attrHooks.value = {
            set: function(e, t, n) {
                if (!pe.nodeName(e, "input")) return Ct && Ct.set(e, t, n);
                e.defaultValue = t
            }
        }), $t || (Ct = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, jt.id = jt.name = jt.coords = function(e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, pe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: Ct.set
        }, pe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Ct.set(e, "" !== t && t, n)
            }
        }, pe.each(["width", "height"], function(e, t) {
            pe.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), ce.style || (pe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Nt = /^(?:input|select|textarea|button|object)$/i,
            Ht = /^(?:a|area)$/i;
        pe.fn.extend({
            prop: function(e, t) {
                return Fe(this, pe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = pe.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = undefined, delete this[e]
                    } catch (e) {}
                })
            }
        }), pe.extend({
            prop: function(e, t, n) {
                var i, a, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, a = pe.propHooks[t]), n !== undefined ? a && "set" in a && (i = a.set(e, n, t)) !== undefined ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Nt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), ce.hrefNormalized || pe.each(["href", "src"], function(e, t) {
            pe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ce.optSelected || (pe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pe.propFix[this.toLowerCase()] = this
        }), ce.enctype || (pe.propFix.enctype = "encoding");
        var Ft = /[\t\r\n\f]/g;
        pe.fn.extend({
            addClass: function(e) {
                var t, n, i, a, r, s, o, d = 0;
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, q(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(xe) || []; n = this[d++];)
                        if (a = q(n), i = 1 === n.nodeType && (" " + a + " ").replace(Ft, " ")) {
                            for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o = pe.trim(i), a !== o && pe.attr(n, "class", o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, a, r, s, o, d = 0;
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, q(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(xe) || []; n = this[d++];)
                        if (a = q(n), i = 1 === n.nodeType && (" " + a + " ").replace(Ft, " ")) {
                            for (s = 0; r = t[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o = pe.trim(i), a !== o && pe.attr(n, "class", o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                    pe(this).toggleClass(e.call(this, n, q(this), t), t)
                }) : this.each(function() {
                    var t, i, a, r;
                    if ("string" === n)
                        for (i = 0, a = pe(this), r = e.match(xe) || []; t = r[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else e !== undefined && "boolean" !== n || (t = q(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + q(n) + " ").replace(Ft, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            pe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), pe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Pt = e.location,
            Wt = pe.now(),
            It = /\?/,
            Ut = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        pe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                a = pe.trim(t + "");
            return a && !pe.trim(a.replace(Ut, function(e, t, a, r) {
                return n && t && (i = 0), 0 === i ? e : (n = a || t, i += !r - !a, "")
            })) ? Function("return " + a)() : pe.error("Invalid JSON: " + t)
        }, pe.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (e) {
                n = undefined
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
        };
        var zt = /#.*$/,
            qt = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Bt = /^(?:GET|HEAD)$/,
            Gt = /^\/\//,
            Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Kt = {},
            Xt = {},
            Zt = "*/".concat("*"),
            Qt = Pt.href,
            en = Jt.exec(Qt.toLowerCase()) || [];
        pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Qt,
                type: "GET",
                isLocal: Vt.test(en[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": pe.parseJSON,
                    "text xml": pe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? B(B(e, pe.ajaxSettings), t) : B(pe.ajaxSettings, e)
            },
            ajaxPrefilter: R(Kt),
            ajaxTransport: R(Xt),
            ajax: function(t, n) {
                function i(t, n, i, a) {
                    var r, c, y, v, w, D = n;
                    2 !== M && (M = 2, d && e.clearTimeout(d), u = undefined, o = a || "", b.readyState = t > 0 ? 4 : 0, r = t >= 200 && t < 300 || 304 === t, i && (v = G(h, b, i)), v = J(h, v, b, r), r ? (h.ifModified && (w = b.getResponseHeader("Last-Modified"), w && (pe.lastModified[s] = w), (w = b.getResponseHeader("etag")) && (pe.etag[s] = w)), 204 === t || "HEAD" === h.type ? D = "nocontent" : 304 === t ? D = "notmodified" : (D = v.state, c = v.data, y = v.error, r = !y)) : (y = D, !t && D || (D = "error", t < 0 && (t = 0))), b.status = t, b.statusText = (n || D) + "", r ? m.resolveWith(p, [c, D, b]) : m.rejectWith(p, [b, D, y]), b.statusCode(g), g = undefined, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? c : y]), _.fireWith(p, [b, D]), l && (f.trigger("ajaxComplete", [b, h]), --pe.active || pe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = undefined), n = n || {};
                var a, r, s, o, d, l, u, c, h = pe.ajaxSetup({}, n),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                    m = pe.Deferred(),
                    _ = pe.Callbacks("once memory"),
                    g = h.statusCode || {},
                    y = {},
                    v = {},
                    M = 0,
                    w = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === M) {
                                if (!c)
                                    for (c = {}; t = Rt.exec(o);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === M ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return M || (e = v[n] = v[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return M || (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (M < 2)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else b.always(e[b.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return u && u.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(b).complete = _.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || Qt) + "").replace(zt, "").replace(Gt, en[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = pe.trim(h.dataType || "*").toLowerCase().match(xe) || [""], null == h.crossDomain && (a = Jt.exec(h.url.toLowerCase()), h.crossDomain = !(!a || a[1] === en[1] && a[2] === en[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), V(Kt, h, n, b), 2 === M) return b;
                l = pe.event && h.global, l && 0 == pe.active++ && pe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Bt.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (It.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = qt.test(s) ? s.replace(qt, "$1_=" + Wt++) : s + (It.test(s) ? "&" : "?") + "_=" + Wt++)), h.ifModified && (pe.lastModified[s] && b.setRequestHeader("If-Modified-Since", pe.lastModified[s]), pe.etag[s] && b.setRequestHeader("If-None-Match", pe.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : h.accepts["*"]);
                for (r in h.headers) b.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, b, h) || 2 === M)) return b.abort();
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) b[r](h[r]);
                if (u = V(Xt, h, n, b)) {
                    if (b.readyState = 1, l && f.trigger("ajaxSend", [b, h]), 2 === M) return b;
                    h.async && h.timeout > 0 && (d = e.setTimeout(function() {
                        b.abort("timeout")
                    }, h.timeout));
                    try {
                        M = 1, u.send(y, i)
                    } catch (e) {
                        if (!(M < 2)) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return b
            },
            getJSON: function(e, t, n) {
                return pe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return pe.get(e, undefined, t, "script")
            }
        }), pe.each(["get", "post"], function(e, t) {
            pe[t] = function(e, n, i, a) {
                return pe.isFunction(n) && (a = a || i, i = n, n = undefined), pe.ajax(pe.extend({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: i
                }, pe.isPlainObject(e) && e))
            }
        }), pe._evalUrl = function(e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, pe.fn.extend({
            wrapAll: function(e) {
                if (pe.isFunction(e)) return this.each(function(t) {
                    pe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return pe.isFunction(e) ? this.each(function(t) {
                    pe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = pe.isFunction(e);
                return this.each(function(n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), pe.expr.filters.hidden = function(e) {
            return ce.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : X(e)
        }, pe.expr.filters.visible = function(e) {
            return !pe.expr.filters.hidden(e)
        };
        var tn = /%20/g,
            nn = /\[\]$/,
            an = /\r?\n/g,
            rn = /^(?:submit|button|image|reset|file)$/i,
            sn = /^(?:input|select|textarea|keygen)/i;
        pe.param = function(e, t) {
            var n, i = [],
                a = function(e, t) {
                    t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
                a(this.name, this.value)
            });
            else
                for (n in e) Z(n, e[n], t, a);
            return i.join("&").replace(tn, "+")
        }, pe.fn.extend({
            serialize: function() {
                return pe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !rn.test(e) && (this.checked || !Pe.test(e))
                }).map(function(e, t) {
                    var n = pe(this).val();
                    return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(an, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(an, "\r\n")
                    }
                }).get()
            }
        }), pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
            return this.isLocal ? ee() : ie.documentMode > 8 ? Q() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || ee()
        } : Q;
        var on = 0,
            dn = {},
            ln = pe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in dn) dn[e](undefined, !0)
        }), ce.cors = !!ln && "withCredentials" in ln, ln = ce.ajax = !!ln, ln && pe.ajaxTransport(function(t) {
            if (!t.crossDomain || ce.cors) {
                var n;
                return {
                    send: function(i, a) {
                        var r, s = t.xhr(),
                            o = ++on;
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) s[r] = t.xhrFields[r];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i) i[r] !== undefined && s.setRequestHeader(r, i[r] + "");
                        s.send(t.hasContent && t.data || null), n = function(e, i) {
                            var r, d, l;
                            if (n && (i || 4 === s.readyState))
                                if (delete dn[o], n = undefined, s.onreadystatechange = pe.noop, i) 4 !== s.readyState && s.abort();
                                else {
                                    l = {}, r = s.status, "string" == typeof s.responseText && (l.text = s.responseText);
                                    try {
                                        d = s.statusText
                                    } catch (e) {
                                        d = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = l.text ? 200 : 404
                                }
                            l && a(r, d, l, s.getAllResponseHeaders())
                        }, t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = dn[o] = n : n()
                    },
                    abort: function() {
                        n && n(undefined, !0)
                    }
                }
            }
        }), pe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return pe.globalEval(e), e
                }
            }
        }), pe.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), pe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ie.head || pe("head")[0] || ie.documentElement;
                return {
                    send: function(i, a) {
                        t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || a(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(undefined, !0)
                    }
                }
            }
        });
        var un = [],
            cn = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = un.pop() || pe.expando + "_" + Wt++;
                return this[e] = !0, e
            }
        }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var a, r, s, o = !1 !== t.jsonp && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
            if (o || "jsonp" === t.dataTypes[0]) return a = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(cn, "$1" + a) : !1 !== t.jsonp && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
                return s || pe.error(a + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = e[a], e[a] = function() {
                s = arguments
            }, i.always(function() {
                r === undefined ? pe(e).removeProp(a) : e[a] = r, t[a] && (t.jsonpCallback = n.jsonpCallback, un.push(a)), s && pe.isFunction(r) && r(s[0]), s = r = undefined
            }), "script"
        }), pe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ie;
            var i = be.exec(e),
                a = !n && [];
            return i ? [t.createElement(i[1])] : (i = g([e], t, a), a && a.length && pe(a).remove(), pe.merge([], i.childNodes))
        };
        var hn = pe.fn.load;
        pe.fn.load = function(e, t, n) {
            if ("string" != typeof e && hn) return hn.apply(this, arguments);
            var i, a, r, s = this,
                o = e.indexOf(" ");
            return o > -1 && (i = pe.trim(e.slice(o, e.length)), e = e.slice(0, o)), pe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (a = "POST"), s.length > 0 && pe.ajax({
                url: e,
                type: a || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, s.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            pe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), pe.expr.filters.animated = function(e) {
            return pe.grep(pe.timers, function(t) {
                return e === t.elem
            }).length
        }, pe.offset = {
            setOffset: function(e, t, n) {
                var i, a, r, s, o, d, l, u = pe.css(e, "position"),
                    c = pe(e),
                    h = {};
                "static" === u && (e.style.position = "relative"), o = c.offset(), r = pe.css(e, "top"), d = pe.css(e, "left"), l = ("absolute" === u || "fixed" === u) && pe.inArray("auto", [r, d]) > -1, l ? (i = c.position(), s = i.top, a = i.left) : (s = parseFloat(r) || 0, a = parseFloat(d) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, o))), null != t.top && (h.top = t.top - o.top + s), null != t.left && (h.left = t.left - o.left + a), "using" in t ? t.using.call(e, h) : c.css(h)
            }
        }, pe.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === undefined ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    a = this[0],
                    r = a && a.ownerDocument;
                if (r) return t = r.documentElement, pe.contains(t, a) ? ("undefined" != typeof a.getBoundingClientRect && (i = a.getBoundingClientRect()), n = te(r), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - pe.css(i, "marginTop", !0),
                        left: t.left - n.left - pe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                    return e || ht
                })
            }
        }), pe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            pe.fn[e] = function(i) {
                return Fe(this, function(e, i, a) {
                    var r = te(e);
                    if (a === undefined) return r ? t in r ? r[t] : r.document.documentElement[i] : e[i];
                    r ? r.scrollTo(n ? pe(r).scrollLeft() : a, n ? a : pe(r).scrollTop()) : e[i] = a
                }, e, i, arguments.length, null)
            }
        }), pe.each(["top", "left"], function(e, t) {
            pe.cssHooks[t] = E(ce.pixelPosition, function(e, n) {
                if (n) return n = ft(e, t), ut.test(n) ? pe(e).position()[t] + "px" : n
            })
        }), pe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            pe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                pe.fn[i] = function(i, a) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === a ? "margin" : "border");
                    return Fe(this, function(t, n, i) {
                        var a;
                        return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : i === undefined ? pe.css(t, n, s) : pe.style(t, n, i, s)
                    }, t, r ? i : undefined, r, null)
                }
            })
        }), pe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), pe.fn.size = function() {
            return this.length
        }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return pe
        });
        var pn = e.jQuery,
            fn = e.$;
        return pe.noConflict = function(t) {
            return e.$ === pe && (e.$ = fn), t && e.jQuery === pe && (e.jQuery = pn), pe
        }, t || (e.jQuery = e.$ = pe), pe
    }),
    function(e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, i) {
                var a = e.Event(n);
                return t.trigger(a, i), !1 !== a.result
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && !1 !== e.data("remote")
            },
            handleRemote: function(i) {
                var a, r, s, o, d, l;
                if (n.fire(i, "ajax:before")) {
                    if (o = i.data("with-credentials") || null, d = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        a = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), s = e(i[0]).serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (s.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (a = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (a = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (a = i.data("method"), r = n.href(i), s = i.data("params") || null);
                    return l = {
                        type: a || "GET",
                        data: s,
                        dataType: d,
                        beforeSend: function(e, a) {
                            if (a.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + a.accepts.script), !n.fire(i, "ajax:beforeSend", [e, a])) return !1;
                            i.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(r)
                    }, o && (l.xhrFields = {
                        withCredentials: o
                    }), r && (l.url = r), n.ajax(l)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (e) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var a = n.href(i),
                    r = i.data("method"),
                    s = i.attr("target"),
                    o = n.csrfToken(),
                    d = n.csrfParam(),
                    l = e('<form method="post" action="' + a + '"></form>'),
                    u = '<input name="_method" value="' + r + '" type="hidden" />';
                d === t || o === t || n.isCrossDomain(a) || (u += '<input name="' + d + '" value="' + o + '" type="hidden" />'), s && l.attr("target", s), l.hide().append(u).appendTo("body"), l.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    a = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        a = n.confirm(i)
                    } catch (e) {
                        (console.error || console.log).call(console, e.stack || e)
                    }
                    t = n.fire(e, "confirm:complete", [a])
                }
                return a && t
            },
            blankInputs: function(t, n, i) {
                var a, r, s, o, d = e(),
                    l = n || "input,textarea",
                    u = t.find(l),
                    c = {};
                return u.each(function() {
                    a = e(this), a.is("input[type=radio]") ? (o = a.attr("name"), c[o] || (0 === t.find('input[type=radio]:checked[name="' + o + '"]').length && (s = t.find('input[type=radio][name="' + o + '"]'), d = d.add(s)), c[o] = o)) : (r = a.is("input[type=checkbox],input[type=radio]") ? a.is(":checked") : !!a.val()) === i && (d = d.add(a))
                }), !!d.length && d
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function() {
            n.enableElement(e(this))
        }), i.on("ajax:complete", n.buttonDisableSelector, function() {
            n.enableFormElement(e(this))
        }), i.on("click.rails", n.linkClickSelector, function(t) {
            var i = e(this),
                a = i.data("method"),
                r = i.data("params"),
                s = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (s && (!a || "GET" === a) && !r) return !0;
                var o = n.handleRemote(i);
                return !1 === o ? n.enableElement(i) : o.fail(function() {
                    n.enableElement(i)
                }), !1
            }
            return a ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var a = n.handleRemote(i);
            return !1 === a ? n.enableFormElement(i) : a.fail(function() {
                n.enableFormElement(i)
            }), !1
        }), i.on("change.rails", n.inputChangeSelector, function(t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.on("submit.rails", n.formSubmitSelector, function(i) {
            var a, r, s = e(this),
                o = n.isRemote(s);
            if (!n.allowAction(s)) return n.stopEverything(i);
            if (s.attr("novalidate") === t)
                if (s.data("ujs:formnovalidate-button") === t) {
                    if ((a = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [a])) return n.stopEverything(i)
                } else s.data("ujs:formnovalidate-button", t);
            if (o) {
                if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(s)
                    }, 13);
                    var d = n.fire(s, "ajax:aborted:file", [r]);
                    return d || setTimeout(function() {
                        n.enableFormElements(s)
                    }, 13), d
                }
                return n.handleRemote(s), !1
            }
            setTimeout(function() {
                n.disableFormElements(s)
            }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var a = i.attr("name"),
                r = a ? {
                    name: a,
                    value: i.val()
                } : null,
                s = i.closest("form");
            0 === s.length && (s = e("#" + i.attr("form"))), s.data("ujs:submit-button", r), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (e.style[n] !== undefined) return {
                    end: t[n]
                };
            return !1
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var a = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(a, t), this
        }, e(function() {
            e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                bindType: e.support.transition.end,
                delegateType: e.support.transition.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.alert");
                a || n.data("bs.alert", a = new i(this)), "string" == typeof t && a[t].call(n)
            })
        }
        var n = '[data-dismiss="alert"]',
            i = function(t) {
                e(t).on("click", n, this.close)
            };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
            function n() {
                s.detach().trigger("closed.bs.alert").remove()
            }
            var a = e(this),
                r = a.attr("data-target");
            r || (r = a.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var s = e("#" === r ? [] : r);
            t && t.preventDefault(), s.length || (s = a.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var a = e.fn.alert;
        e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
            return e.fn.alert = a, this
        }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.button"),
                    r = "object" == typeof t && t;
                a || i.data("bs.button", a = new n(this, r)), "toggle" == t ? a.toggle() : t && a.setState(t)
            })
        }
        var n = function(t, i) {
            this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.7", n.DEFAULTS = {
            loadingText: "loading..."
        }, n.prototype.setState = function(t) {
            var n = "disabled",
                i = this.$element,
                a = i.is("input") ? "val" : "html",
                r = i.data();
            t += "Text", null == r.resetText && i.data("resetText", i[a]()), setTimeout(e.proxy(function() {
                i[a](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
        }, n.prototype.toggle = function() {
            var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var i = e.fn.button;
        e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
            return e.fn.button = i, this
        }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = e(n.target).closest(".btn");
            t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
            e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.carousel"),
                    r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                    s = "string" == typeof t ? t : r.slide;
                a || i.data("bs.carousel", a = new n(this, r)), "number" == typeof t ? a.to(t) : s ? a[s]() : r.interval && a.pause().cycle()
            })
        }
        var n = function(t, n) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            }
        }, n.prototype.cycle = function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
        }, n.prototype.getItemForDirection = function(e, t) {
            var n = this.getItemIndex(t);
            if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
            var i = "prev" == e ? -1 : 1,
                a = (n + i) % this.$items.length;
            return this.$items.eq(a)
        }, n.prototype.to = function(e) {
            var t = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
        }, n.prototype.pause = function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, n.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, n.prototype.slide = function(t, i) {
            var a = this.$element.find(".item.active"),
                r = i || this.getItemForDirection(t, a),
                s = this.interval,
                o = "next" == t ? "left" : "right",
                d = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var l = r[0],
                u = e.Event("slide.bs.carousel", {
                    relatedTarget: l,
                    direction: o
                });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var c = e(this.$indicators.children()[this.getItemIndex(r)]);
                    c && c.addClass("active")
                }
                var h = e.Event("slid.bs.carousel", {
                    relatedTarget: l,
                    direction: o
                });
                return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, a.addClass(o), r.addClass(o), a.one("bsTransitionEnd", function() {
                    r.removeClass([t, o].join(" ")).addClass("active"), a.removeClass(["active", o].join(" ")), d.sliding = !1, setTimeout(function() {
                        d.$element.trigger(h)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (a.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
            }
        };
        var i = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = i, this
        };
        var a = function(n) {
            var i, a = e(this),
                r = e(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var s = e.extend({}, r.data(), a.data()),
                    o = a.attr("data-slide-to");
                o && (s.interval = !1), t.call(r, s), o && r.data("bs.carousel").to(o), n.preventDefault()
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), e(window).on("load", function() {
            e('[data-ride="carousel"]').each(function() {
                var n = e(this);
                t.call(n, n.data())
            })
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return e(i)
        }

        function n(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.collapse"),
                    r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
                !a && r.toggle && /show|hide/.test(t) && (r.toggle = !1), a || n.data("bs.collapse", a = new i(this, r)), "string" == typeof t && a[t]()
            })
        }
        var i = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(a && a.length && (t = a.data("bs.collapse")) && t.transitioning)) {
                    var r = e.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        a && a.length && (n.call(a, "hide"), t || a.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var o = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!e.support.transition) return o.call(this);
                        var d = e.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][d])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var a = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!e.support.transition) return a.call(this);
                    this.$element[n](0).one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function() {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
                var a = e(i);
                this.addAriaAndCollapsedClass(t(a), a)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
            var n = e.hasClass("in");
            e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var a = e.fn.collapse;
        e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = a, this
        }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var a = e(this);
            a.attr("data-target") || i.preventDefault();
            var r = t(a),
                s = r.data("bs.collapse"),
                o = s ? "toggle" : a.data();
            n.call(r, o)
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            var n = t.attr("data-target");
            n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && e(n);
            return i && i.length ? i : t.parent()
        }

        function n(n) {
            n && 3 === n.which || (e(a).remove(), e(r).each(function() {
                var i = e(this),
                    a = t(i),
                    r = {
                        relatedTarget: this
                    };
                a.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(a[0], n.target) || (a.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), a.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
            }))
        }

        function i(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
            })
        }
        var a = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            s = function(t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
        s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
            var a = e(this);
            if (!a.is(".disabled, :disabled")) {
                var r = t(a),
                    s = r.hasClass("open");
                if (n(), !s) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                    var o = {
                        relatedTarget: this
                    };
                    if (r.trigger(i = e.Event("show.bs.dropdown", o)), i.isDefaultPrevented()) return;
                    a.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", o))
                }
                return !1
            }
        }, s.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = e(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var a = t(i),
                        s = a.hasClass("open");
                    if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && a.find(r).trigger("focus"), i.trigger("click");
                    var o = " li:not(.disabled):visible a",
                        d = a.find(".dropdown-menu" + o);
                    if (d.length) {
                        var l = d.index(n.target);
                        38 == n.which && l > 0 && l--, 40 == n.which && l < d.length - 1 && l++, ~l || (l = 0), d.eq(l).trigger("focus")
                    }
                }
            }
        };
        var o = e.fn.dropdown;
        e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = o, this
        }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
    }(jQuery),
    function(e) {
        "use strict";

        function t(t, i) {
            return this.each(function() {
                var a = e(this),
                    r = a.data("bs.modal"),
                    s = e.extend({}, n.DEFAULTS, a.data(), "object" == typeof t && t);
                r || a.data("bs.modal", r = new n(this, s)), "string" == typeof t ? r[t](i) : s.show && r.show(i)
            })
        }
        var n = function(t, n) {
            this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e)
        }, n.prototype.show = function(t) {
            var i = this,
                a = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var a = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), a && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var r = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                a ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
            }))
        }, n.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(t) {
            var i = this,
                a = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && a;
                if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                        if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function() {
                    i.removeBackdrop(), t && t()
                };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else t && t()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var e = window.innerWidth;
            if (!e) {
                var t = document.documentElement.getBoundingClientRect();
                e = t.right - Math.abs(t.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var i = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
            return e.fn.modal = i, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = e(this),
                a = i.attr("href"),
                r = e(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
                s = r.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(a) && a
                }, r.data(), i.data());
            i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
                e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), t.call(r, s, this)
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.tab");
                a || i.data("bs.tab", a = new n(this)), "string" == typeof t && a[t]()
            })
        }
        var n = function(t) {
            this.element = e(t)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var t = this.element,
                n = t.closest("ul:not(.dropdown-menu)"),
                i = t.data("target");
            if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var a = n.find(".active:last a"),
                    r = e.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    s = e.Event("show.bs.tab", {
                        relatedTarget: a[0]
                    });
                if (a.trigger(r), t.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var o = e(i);
                    this.activate(t.closest("li"), n), this.activate(o, o.parent(), function() {
                        a.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: a[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function(t, i, a) {
            function r() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
            }
            var s = i.find("> .active"),
                o = a && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
            s.length && o ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
        };
        var i = e.fn.tab;
        e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
            return e.fn.tab = i, this
        };
        var a = function(n) {
            n.preventDefault(), t.call(e(this), "show")
        };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.affix"),
                    r = "object" == typeof t && t;
                a || i.data("bs.affix", a = new n(this, r)), "string" == typeof t && a[t]()
            })
        }
        var n = function(t, i) {
            this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
                offset: 0,
                target: window
            }, n.prototype.getState = function(e, t, n, i) {
                var a = this.$target.scrollTop(),
                    r = this.$element.offset(),
                    s = this.$target.height();
                if (null != n && "top" == this.affixed) return a < n && "top";
                if ("bottom" == this.affixed) return null != n ? !(a + this.unpin <= r.top) && "bottom" : !(a + s <= e - i) && "bottom";
                var o = null == this.affixed,
                    d = o ? a : r.top,
                    l = o ? s : t;
                return null != n && a <= n ? "top" : null != i && d + l >= e - i && "bottom"
            }, n.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var e = this.$target.scrollTop(),
                    t = this.$element.offset();
                return this.pinnedOffset = t.top - e
            }, n.prototype.checkPositionWithEventLoop = function() {
                setTimeout(e.proxy(this.checkPosition, this), 1)
            },
            n.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height(),
                        i = this.options.offset,
                        a = i.top,
                        r = i.bottom,
                        s = Math.max(e(document).height(), e(document.body).height());
                    "object" != typeof i && (r = a = i), "function" == typeof a && (a = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
                    var o = this.getState(s, t, a, r);
                    if (this.affixed != o) {
                        null != this.unpin && this.$element.css("top", "");
                        var d = "affix" + (o ? "-" + o : ""),
                            l = e.Event(d + ".bs.affix");
                        if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                        this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(d).trigger(d.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == o && this.$element.offset({
                        top: s - t - r
                    })
                }
            };
        var i = e.fn.affix;
        e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
            return e.fn.affix = i, this
        }, e(window).on("load", function() {
            e('[data-spy="affix"]').each(function() {
                var n = e(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
            })
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(n, i) {
            this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                a || i.data("bs.scrollspy", a = new t(this, r)), "string" == typeof n && a[n]()
            })
        }
        t.VERSION = "3.3.7", t.DEFAULTS = {
            offset: 10
        }, t.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, t.prototype.refresh = function() {
            var t = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var t = e(this),
                    a = t.data("target") || t.attr("href"),
                    r = /^#./.test(a) && e(a);
                return r && r.length && r.is(":visible") && [
                    [r[n]().top + i, a]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                a = this.offsets,
                r = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = r[r.length - 1]) && this.activate(e);
            if (s && t < a[0]) return this.activeTarget = null, this.clear();
            for (e = a.length; e--;) s != r[e] && t >= a[e] && (a[e + 1] === undefined || t < a[e + 1]) && this.activate(r[e])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, this.clear();
            var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                i = e(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, t.prototype.clear = function() {
            e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = e.fn.scrollspy;
        e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = i, this
        }, e(window).on("load.bs.scrollspy.data-api", function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                n.call(t, t.data())
            })
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.tooltip"),
                    r = "object" == typeof t && t;
                !a && /destroy|hide/.test(t) || (a || i.data("bs.tooltip", a = new n(this, r)), "string" == typeof t && a[t]())
            })
        }
        var n = function(e, t) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
        };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function(t, n, i) {
            if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var a = this.options.trigger.split(" "), r = a.length; r--;) {
                var s = a[r];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var o = "hover" == s ? "mouseenter" : "focusin",
                        d = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(d + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.getOptions = function(t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, n.prototype.getDelegateOptions = function() {
            var t = {},
                n = this.getDefaults();
            return this._options && e.each(this._options, function(e, i) {
                n[e] != i && (t[e] = i)
            }), t
        }, n.prototype.enter = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.isInStateTrue = function() {
            for (var e in this.inState)
                if (this.inState[e]) return !0;
            return !1
        }, n.prototype.leave = function(t) {
            var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)
            }
        }, n.prototype.show = function() {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !i) return;
                var a = this,
                    r = this.tip(),
                    s = this.getUID(this.type);
                this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
                var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    d = /\s?auto?\s?/i,
                    l = d.test(o);
                l && (o = o.replace(d, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(),
                    c = r[0].offsetWidth,
                    h = r[0].offsetHeight;
                if (l) {
                    var p = o,
                        f = this.getPosition(this.$viewport);
                    o = "bottom" == o && u.bottom + h > f.bottom ? "top" : "top" == o && u.top - h < f.top ? "bottom" : "right" == o && u.right + c > f.width ? "left" : "left" == o && u.left - c < f.left ? "right" : o, r.removeClass(p).addClass(o)
                }
                var m = this.getCalculatedOffset(o, u, c, h);
                this.applyPlacement(m, o);
                var _ = function() {
                    var e = a.hoverState;
                    a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == e && a.leave(a)
                };
                e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", _).emulateTransitionEnd(n.TRANSITION_DURATION) : _()
            }
        }, n.prototype.applyPlacement = function(t, n) {
            var i = this.tip(),
                a = i[0].offsetWidth,
                r = i[0].offsetHeight,
                s = parseInt(i.css("margin-top"), 10),
                o = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(o) && (o = 0), t.top += s, t.left += o, e.offset.setOffset(i[0], e.extend({
                using: function(e) {
                    i.css({
                        top: Math.round(e.top),
                        left: Math.round(e.left)
                    })
                }
            }, t), 0), i.addClass("in");
            var d = i[0].offsetWidth,
                l = i[0].offsetHeight;
            "top" == n && l != r && (t.top = t.top + r - l);
            var u = this.getViewportAdjustedDelta(n, t, d, l);
            u.left ? t.left += u.left : t.top += u.top;
            var c = /top|bottom/.test(n),
                h = c ? 2 * u.left - a + d : 2 * u.top - r + l,
                p = c ? "offsetWidth" : "offsetHeight";
            i.offset(t), this.replaceArrow(h, i[0][p], c)
        }, n.prototype.replaceArrow = function(e, t, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function(t) {
            function i() {
                "in" != a.hoverState && r.detach(), a.$element && a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), t && t()
            }
            var a = this,
                r = e(this.$tip),
                s = e.Event("hide.bs." + this.type);
            if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
        }, n.prototype.fixTitle = function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function() {
            return this.getTitle()
        }, n.prototype.getPosition = function(t) {
            t = t || this.$element;
            var n = t[0],
                i = "BODY" == n.tagName,
                a = n.getBoundingClientRect();
            null == a.width && (a = e.extend({}, a, {
                width: a.right - a.left,
                height: a.bottom - a.top
            }));
            var r = window.SVGElement && n instanceof window.SVGElement,
                s = i ? {
                    top: 0,
                    left: 0
                } : r ? null : t.offset(),
                o = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                d = i ? {
                    width: e(window).width(),
                    height: e(window).height()
                } : null;
            return e.extend({}, a, o, d, s)
        }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
            return "bottom" == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - n / 2
            } : "top" == e ? {
                top: t.top - i,
                left: t.left + t.width / 2 - n / 2
            } : "left" == e ? {
                top: t.top + t.height / 2 - i / 2,
                left: t.left - n
            } : {
                top: t.top + t.height / 2 - i / 2,
                left: t.left + t.width
            }
        }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
            var a = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return a;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var o = t.top - r - s.scroll,
                    d = t.top + r - s.scroll + i;
                o < s.top ? a.top = s.top - o : d > s.top + s.height && (a.top = s.top + s.height - d)
            } else {
                var l = t.left - r,
                    u = t.left + r + n;
                l < s.left ? a.left = s.left - l : u > s.right && (a.left = s.left + s.width - u)
            }
            return a
        }, n.prototype.getTitle = function() {
            var e = this.$element,
                t = this.options;
            return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
        }, n.prototype.getUID = function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        }, n.prototype.tip = function() {
            if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function() {
            this.enabled = !0
        }, n.prototype.disable = function() {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function(t) {
            var n = this;
            t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function() {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() {
                e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
            })
        };
        var i = e.fn.tooltip;
        e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = i, this
        }
    }(jQuery),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.popover"),
                    r = "object" == typeof t && t;
                !a && /destroy|hide/.test(t) || (a || i.data("bs.popover", a = new n(this, r)), "string" == typeof t && a[t]())
            })
        }
        var n = function(e, t) {
            this.init("popover", e, t)
        };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
        }, n.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function() {
            var e = this.$element,
                t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = e.fn.popover;
        e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
            return e.fn.popover = i, this
        }
    }(jQuery),
    function(e) {
        function t(e, t, n) {
            switch (arguments.length) {
                case 2:
                    return null != e ? e : t;
                case 3:
                    return null != e ? e : null != t ? t : n;
                default:
                    throw new Error("Implement me")
            }
        }

        function n(e, t) {
            return Ye.call(e, t)
        }

        function i() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function a(e) {
            !1 === we.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function r(e, t) {
            var n = !0;
            return f(function() {
                return n && (a(e), n = !1), t.apply(this, arguments)
            }, t)
        }

        function s(e, t) {
            yt[e] || (a(t), yt[e] = !0)
        }

        function o(e, t) {
            return function(n) {
                return g(e.call(this, n), t)
            }
        }

        function d(e, t) {
            return function(n) {
                return this.localeData().ordinal(e.call(this, n), t)
            }
        }

        function l(e, t) {
            var n, i, a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                r = e.clone().add(a, "months");
            return t - r < 0 ? (n = e.clone().add(a - 1, "months"), i = (t - r) / (r - n)) : (n = e.clone().add(a + 1, "months"), i = (t - r) / (n - r)), -(a + i)
        }

        function u(e, t, n) {
            var i;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && t < 12 && (t += 12), i || 12 !== t || (t = 0), t) : t
        }

        function c() {}

        function h(e, t) {
            !1 !== t && A(e), m(this, e), this._d = new Date(+e._d), !1 === Mt && (Mt = !0, we.updateOffset(this), Mt = !1)
        }

        function p(e) {
            var t = k(e),
                n = t.year || 0,
                i = t.quarter || 0,
                a = t.month || 0,
                r = t.week || 0,
                s = t.day || 0,
                o = t.hour || 0,
                d = t.minute || 0,
                l = t.second || 0,
                u = t.millisecond || 0;
            this._milliseconds = +u + 1e3 * l + 6e4 * d + 36e5 * o, this._days = +s + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = we.localeData(), this._bubble()
        }

        function f(e, t) {
            for (var i in t) n(t, i) && (e[i] = t[i]);
            return n(t, "toString") && (e.toString = t.toString), n(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function m(e, t) {
            var n, i, a;
            if ("undefined" != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (e._i = t._i), "undefined" != typeof t._f && (e._f = t._f), "undefined" != typeof t._l && (e._l = t._l), "undefined" != typeof t._strict && (e._strict = t._strict), "undefined" != typeof t._tzm && (e._tzm = t._tzm), "undefined" != typeof t._isUTC && (e._isUTC = t._isUTC), "undefined" != typeof t._offset && (e._offset = t._offset), "undefined" != typeof t._pf && (e._pf = t._pf), "undefined" != typeof t._locale && (e._locale = t._locale), Ne.length > 0)
                for (n in Ne) i = Ne[n], void 0 !== (a = t[i]) && (e[i] = a);
            return e
        }

        function _(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function g(e, t, n) {
            for (var i = "" + Math.abs(e), a = e >= 0; i.length < t;) i = "0" + i;
            return (a ? n ? "+" : "" : "-") + i
        }

        function y(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function v(e, t) {
            var n;
            return t = F(t, e), e.isBefore(t) ? n = y(e, t) : (n = y(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
        }

        function M(e, t) {
            return function(n, i) {
                var a, r;
                return null === i || isNaN(+i) || (s(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), r = n, n = i, i = r), n = "string" == typeof n ? +n : n, a = we.duration(n, i), w(this, a, e), this
            }
        }

        function w(e, t, n, i) {
            var a = t._milliseconds,
                r = t._days,
                s = t._months;
            i = null == i || i, a && e._d.setTime(+e._d + a * n), r && me(e, "Date", fe(e, "Date") + r * n), s && pe(e, fe(e, "Month") + s * n), i && we.updateOffset(e, r || s)
        }

        function b(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function D(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
        }

        function L(e, t, n) {
            var i, a = Math.min(e.length, t.length),
                r = Math.abs(e.length - t.length),
                s = 0;
            for (i = 0; i < a; i++)(n && e[i] !== t[i] || !n && x(e[i]) !== x(t[i])) && s++;
            return s + r
        }

        function T(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = ct[e] || ht[t] || t
            }
            return e
        }

        function k(e) {
            var t, i, a = {};
            for (i in e) n(e, i) && (t = T(i)) && (a[t] = e[i]);
            return a
        }

        function Y(t) {
            var n, i;
            if (0 === t.indexOf("week")) n = 7, i = "day";
            else {
                if (0 !== t.indexOf("month")) return;
                n = 12, i = "month"
            }
            we[t] = function(a, r) {
                var s, o, d = we._locale[t],
                    l = [];
                if ("number" == typeof a && (r = a, a = e), o = function(e) {
                        var t = we().utc().set(i, e);
                        return d.call(we._locale, t, a || "")
                    }, null != r) return o(r);
                for (s = 0; s < n; s++) l.push(o(s));
                return l
            }
        }

        function x(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
        }

        function S(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function C(e, t, n) {
            return le(we([e, 11, 31 + t - n]), t, n).week
        }

        function E(e) {
            return j(e) ? 366 : 365
        }

        function j(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function A(e) {
            var t;
            e._a && -2 === e._pf.overflow && (t = e._a[Se] < 0 || e._a[Se] > 11 ? Se : e._a[Ce] < 1 || e._a[Ce] > S(e._a[xe], e._a[Se]) ? Ce : e._a[Ee] < 0 || e._a[Ee] > 24 || 24 === e._a[Ee] && (0 !== e._a[je] || 0 !== e._a[Ae] || 0 !== e._a[$e]) ? Ee : e._a[je] < 0 || e._a[je] > 59 ? je : e._a[Ae] < 0 || e._a[Ae] > 59 ? Ae : e._a[$e] < 0 || e._a[$e] > 999 ? $e : -1, e._pf._overflowDayOfYear && (t < xe || t > Ce) && (t = Ce), e._pf.overflow = t)
        }

        function $(t) {
            return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === e)), t._isValid
        }

        function O(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function N(e) {
            for (var t, n, i, a, r = 0; r < e.length;) {
                for (a = O(e[r]).split("-"), t = a.length, n = O(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = H(a.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && L(a, n, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return null
        }

        function H(e) {
            var t = null;
            if (!Oe[e] && He) try {
                t = we.locale(), require("./locale/" + e), we.locale(t)
            } catch (e) {}
            return Oe[e]
        }

        function F(e, t) {
            var n, i;
            return t._isUTC ? (n = t.clone(), i = (we.isMoment(e) || D(e) ? +e : +we(e)) - +n, n._d.setTime(+n._d + i), we.updateOffset(n, !1), n) : we(e).local()
        }

        function P(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function W(e) {
            var t, n, i = e.match(Ie);
            for (t = 0, n = i.length; t < n; t++) gt[i[t]] ? i[t] = gt[i[t]] : i[t] = P(i[t]);
            return function(a) {
                var r = "";
                for (t = 0; t < n; t++) r += i[t] instanceof Function ? i[t].call(a, e) : i[t];
                return r
            }
        }

        function I(e, t) {
            return e.isValid() ? (t = U(t, e.localeData()), pt[t] || (pt[t] = W(t)), pt[t](e)) : e.localeData().invalidDate()
        }

        function U(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (Ue.lastIndex = 0; i >= 0 && Ue.test(e);) e = e.replace(Ue, n), Ue.lastIndex = 0, i -= 1;
            return e
        }

        function z(e, t) {
            var n = t._strict;
            switch (e) {
                case "Q":
                    return Qe;
                case "DDDD":
                    return tt;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return n ? nt : Re;
                case "Y":
                case "G":
                case "g":
                    return at;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return n ? it : Ve;
                case "S":
                    if (n) return Qe;
                case "SS":
                    if (n) return et;
                case "SSS":
                    if (n) return tt;
                case "DDD":
                    return qe;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Ge;
                case "a":
                case "A":
                    return t._locale._meridiemParse;
                case "x":
                    return Xe;
                case "X":
                    return Ze;
                case "Z":
                case "ZZ":
                    return Je;
                case "T":
                    return Ke;
                case "SSSS":
                    return Be;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return n ? et : ze;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return ze;
                case "Do":
                    return n ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                default:
                    return new RegExp(Z(X(e.replace("\\", "")), "i"))
            }
        }

        function q(e) {
            e = e || "";
            var t = e.match(Je) || [],
                n = t[t.length - 1] || [],
                i = (n + "").match(lt) || ["-", 0, 0],
                a = 60 * i[1] + x(i[2]);
            return "+" === i[0] ? a : -a
        }

        function R(e, t, n) {
            var i, a = n._a;
            switch (e) {
                case "Q":
                    null != t && (a[Se] = 3 * (x(t) - 1));
                    break;
                case "M":
                case "MM":
                    null != t && (a[Se] = x(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    i = n._locale.monthsParse(t, e, n._strict), null != i ? a[Se] = i : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (a[Ce] = x(t));
                    break;
                case "Do":
                    null != t && (a[Ce] = x(parseInt(t.match(/\d{1,2}/)[0], 10)));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (n._dayOfYear = x(t));
                    break;
                case "YY":
                    a[xe] = we.parseTwoDigitYear(t);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    a[xe] = x(t);
                    break;
                case "a":
                case "A":
                    n._meridiem = t;
                    break;
                case "h":
                case "hh":
                    n._pf.bigHour = !0;
                case "H":
                case "HH":
                    a[Ee] = x(t);
                    break;
                case "m":
                case "mm":
                    a[je] = x(t);
                    break;
                case "s":
                case "ss":
                    a[Ae] = x(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    a[$e] = x(1e3 * ("0." + t));
                    break;
                case "x":
                    n._d = new Date(x(t));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, n._tzm = q(t);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    i = n._locale.weekdaysParse(t), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = t;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = x(t));
                    break;
                case "gg":
                case "GG":
                    n._w = n._w || {}, n._w[e] = we.parseTwoDigitYear(t)
            }
        }

        function V(e) {
            var n, i, a, r, s, o, d;
            n = e._w, null != n.GG || null != n.W || null != n.E ? (s = 1, o = 4, i = t(n.GG, e._a[xe], le(we(), 1, 4).year), a = t(n.W, 1), r = t(n.E, 1)) : (s = e._locale._week.dow, o = e._locale._week.doy, i = t(n.gg, e._a[xe], le(we(), s, o).year), a = t(n.w, 1), null != n.d ? (r = n.d) < s && ++a : r = null != n.e ? n.e + s : s), d = ue(i, a, r, o, s), e._a[xe] = d.year, e._dayOfYear = d.dayOfYear
        }

        function B(e) {
            var n, i, a, r, s = [];
            if (!e._d) {
                for (a = J(e), e._w && null == e._a[Ce] && null == e._a[Se] && V(e), e._dayOfYear && (r = t(e._a[xe], a[xe]), e._dayOfYear > E(r) && (e._pf._overflowDayOfYear = !0), i = re(r, 0, e._dayOfYear), e._a[Se] = i.getUTCMonth(), e._a[Ce] = i.getUTCDate()), n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = s[n] = a[n];
                for (; n < 7; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
                24 === e._a[Ee] && 0 === e._a[je] && 0 === e._a[Ae] && 0 === e._a[$e] && (e._nextDay = !0, e._a[Ee] = 0), e._d = (e._useUTC ? re : ae).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ee] = 24)
            }
        }

        function G(e) {
            var t;
            e._d || (t = k(e._i), e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], B(e))
        }

        function J(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function K(t) {
            if (t._f === we.ISO_8601) return void ee(t);
            t._a = [], t._pf.empty = !0;
            var n, i, a, r, s, o = "" + t._i,
                d = o.length,
                l = 0;
            for (a = U(t._f, t._locale).match(Ie) || [], n = 0; n < a.length; n++) r = a[n], i = (o.match(z(r, t)) || [])[0], i && (s = o.substr(0, o.indexOf(i)), s.length > 0 && t._pf.unusedInput.push(s), o = o.slice(o.indexOf(i) + i.length), l += i.length), gt[r] ? (i ? t._pf.empty = !1 : t._pf.unusedTokens.push(r), R(r, i, t)) : t._strict && !i && t._pf.unusedTokens.push(r);
            t._pf.charsLeftOver = d - l, o.length > 0 && t._pf.unusedInput.push(o), !0 === t._pf.bigHour && t._a[Ee] <= 12 && (t._pf.bigHour = e), t._a[Ee] = u(t._locale, t._a[Ee], t._meridiem), B(t), A(t)
        }

        function X(e) {
            return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) {
                return t || n || i || a
            })
        }

        function Z(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function Q(e) {
            var t, n, a, r, s;
            if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++) s = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._pf = i(), t._f = e._f[r], K(t), $(t) && (s += t._pf.charsLeftOver, s += 10 * t._pf.unusedTokens.length, t._pf.score = s, (null == a || s < a) && (a = s, n = t));
            f(e, n || t)
        }

        function ee(e) {
            var t, n, i = e._i,
                a = rt.exec(i);
            if (a) {
                for (e._pf.iso = !0, t = 0, n = ot.length; t < n; t++)
                    if (ot[t][1].exec(i)) {
                        e._f = ot[t][0] + (a[6] || " ");
                        break
                    }
                for (t = 0, n = dt.length; t < n; t++)
                    if (dt[t][1].exec(i)) {
                        e._f += dt[t][0];
                        break
                    }
                i.match(Je) && (e._f += "Z"), K(e)
            } else e._isValid = !1
        }

        function te(e) {
            ee(e), !1 === e._isValid && (delete e._isValid, we.createFromInputFallback(e))
        }

        function ne(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }

        function ie(t) {
            var n, i = t._i;
            i === e ? t._d = new Date : D(i) ? t._d = new Date(+i) : null !== (n = Fe.exec(i)) ? t._d = new Date(+n[1]) : "string" == typeof i ? te(t) : b(i) ? (t._a = ne(i.slice(0), function(e) {
                return parseInt(e, 10)
            }), B(t)) : "object" == typeof i ? G(t) : "number" == typeof i ? t._d = new Date(i) : we.createFromInputFallback(t)
        }

        function ae(e, t, n, i, a, r, s) {
            var o = new Date(e, t, n, i, a, r, s);
            return e < 1970 && o.setFullYear(e), o
        }

        function re(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 1970 && t.setUTCFullYear(e), t
        }

        function se(e, t) {
            if ("string" == typeof e)
                if (isNaN(e)) {
                    if ("number" != typeof(e = t.weekdaysParse(e))) return null
                } else e = parseInt(e, 10);
            return e
        }

        function oe(e, t, n, i, a) {
            return a.relativeTime(t || 1, !!n, e, i)
        }

        function de(e, t, n) {
            var i = we.duration(e).abs(),
                a = ke(i.as("s")),
                r = ke(i.as("m")),
                s = ke(i.as("h")),
                o = ke(i.as("d")),
                d = ke(i.as("M")),
                l = ke(i.as("y")),
                u = a < ft.s && ["s", a] || 1 === r && ["m"] || r < ft.m && ["mm", r] || 1 === s && ["h"] || s < ft.h && ["hh", s] || 1 === o && ["d"] || o < ft.d && ["dd", o] || 1 === d && ["M"] || d < ft.M && ["MM", d] || 1 === l && ["y"] || ["yy", l];
            return u[2] = t, u[3] = +e > 0, u[4] = n, oe.apply({}, u)
        }

        function le(e, t, n) {
            var i, a = n - t,
                r = n - e.day();
            return r > a && (r -= 7), r < a - 7 && (r += 7), i = we(e).add(r, "d"), {
                week: Math.ceil(i.dayOfYear() / 7),
                year: i.year()
            }
        }

        function ue(e, t, n, i, a) {
            var r, s, o = re(e, 0, 1).getUTCDay();
            return o = 0 === o ? 7 : o, n = null != n ? n : a, r = a - o + (o > i ? 7 : 0) - (o < a ? 7 : 0), s = 7 * (t - 1) + (n - a) + r + 1, {
                year: s > 0 ? e : e - 1,
                dayOfYear: s > 0 ? s : E(e - 1) + s
            }
        }

        function ce(t) {
            var n, i = t._i,
                a = t._f;
            return t._locale = t._locale || we.localeData(t._l), null === i || a === e && "" === i ? we.invalid({
                nullInput: !0
            }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)), we.isMoment(i) ? new h(i, !0) : (a ? b(a) ? Q(t) : K(t) : ie(t), n = new h(t), n._nextDay && (n.add(1, "d"), n._nextDay = e), n))
        }

        function he(e, t) {
            var n, i;
            if (1 === t.length && b(t[0]) && (t = t[0]), !t.length) return we();
            for (n = t[0], i = 1; i < t.length; ++i) t[i][e](n) && (n = t[i]);
            return n
        }

        function pe(e, t) {
            var n;
            return "string" == typeof t && "number" != typeof(t = e.localeData().monthsParse(t)) ? e : (n = Math.min(e.date(), S(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
        }

        function fe(e, t) {
            return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
        }

        function me(e, t, n) {
            return "Month" === t ? pe(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function _e(e, t) {
            return function(n) {
                return null != n ? (me(this, e, n), we.updateOffset(this, t), this) : fe(this, e)
            }
        }

        function ge(e) {
            return 400 * e / 146097
        }

        function ye(e) {
            return 146097 * e / 400
        }

        function ve(e) {
            we.duration.fn[e] = function() {
                return this._data[e]
            }
        }

        function Me(e) {
            "undefined" == typeof ender && (be = Te.moment, Te.moment = e ? r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", we) : we)
        }
        for (var we, be, De, Le = "2.9.0", Te = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, ke = Math.round, Ye = Object.prototype.hasOwnProperty, xe = 0, Se = 1, Ce = 2, Ee = 3, je = 4, Ae = 5, $e = 6, Oe = {}, Ne = [], He = "undefined" != typeof module && module && module.exports, Fe = /^\/?Date\((\-?\d+)/i, Pe = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, We = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Ie = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Ue = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ze = /\d\d?/, qe = /\d{1,3}/, Re = /\d{1,4}/, Ve = /[+\-]?\d{1,6}/, Be = /\d+/, Ge = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Je = /Z|[\+\-]\d\d:?\d\d/gi, Ke = /T/i, Xe = /[\+\-]?\d+/, Ze = /[\+\-]?\d+(\.\d{1,3})?/, Qe = /\d/, et = /\d\d/, tt = /\d{3}/, nt = /\d{4}/, it = /[+-]?\d{6}/, at = /[+-]?\d+/, rt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, st = "YYYY-MM-DDTHH:mm:ssZ", ot = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], dt = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], lt = /([\+\-]|\d\d)/gi, ut = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }), ct = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                Q: "quarter",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, ht = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, pt = {}, ft = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, mt = "DDD w W M D d".split(" "), _t = "M D H h m s w W".split(" "), gt = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(e) {
                    return this.localeData().monthsShort(this, e)
                },
                MMMM: function(e) {
                    return this.localeData().months(this, e)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(e) {
                    return this.localeData().weekdaysMin(this, e)
                },
                ddd: function(e) {
                    return this.localeData().weekdaysShort(this, e)
                },
                dddd: function(e) {
                    return this.localeData().weekdays(this, e)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return g(this.year() % 100, 2)
                },
                YYYY: function() {
                    return g(this.year(), 4)
                },
                YYYYY: function() {
                    return g(this.year(), 5)
                },
                YYYYYY: function() {
                    var e = this.year();
                    return (e >= 0 ? "+" : "-") + g(Math.abs(e), 6)
                },
                gg: function() {
                    return g(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return g(this.weekYear(), 4)
                },
                ggggg: function() {
                    return g(this.weekYear(), 5)
                },
                GG: function() {
                    return g(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return g(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return g(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return x(this.milliseconds() / 100)
                },
                SS: function() {
                    return g(x(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return g(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return g(this.milliseconds(), 3)
                },
                Z: function() {
                    var e = this.utcOffset(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + g(x(e / 60), 2) + ":" + g(x(e) % 60, 2)
                },
                ZZ: function() {
                    var e = this.utcOffset(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + g(x(e / 60), 2) + g(x(e) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                x: function() {
                    return this.valueOf()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, yt = {}, vt = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], Mt = !1; mt.length;) De = mt.pop(), gt[De + "o"] = d(gt[De], De);
        for (; _t.length;) De = _t.pop(), gt[De + De] = o(gt[De], 2);
        gt.DDDD = o(gt.DDD, 3), f(c.prototype, {
            set: function(e) {
                var t, n;
                for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(e) {
                return this._months[e.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(e) {
                return this._monthsShort[e.month()]
            },
            monthsParse: function(e, t, n) {
                var i, a, r;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (a = we.utc([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""),
                            this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                    if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                    if (!n && this._monthsParse[i].test(e)) return i
                }
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(e) {
                return this._weekdays[e.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(e) {
                return this._weekdaysShort[e.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(e) {
                return this._weekdaysMin[e.day()]
            },
            weekdaysParse: function(e) {
                var t, n, i;
                for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; t < 7; t++)
                    if (this._weekdaysParse[t] || (n = we([2e3, 1]).day(t), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
            },
            _longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function(e) {
                var t = this._longDateFormat[e];
                return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e] = t), t
            },
            isPM: function(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(e, t, n) {
                var i = this._calendar[e];
                return "function" == typeof i ? i.apply(t, [n]) : i
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(e, t, n, i) {
                var a = this._relativeTime[n];
                return "function" == typeof a ? a(e, t, n, i) : a.replace(/%d/i, e)
            },
            pastFuture: function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
            },
            ordinal: function(e) {
                return this._ordinal.replace("%d", e)
            },
            _ordinal: "%d",
            _ordinalParse: /\d{1,2}/,
            preparse: function(e) {
                return e
            },
            postformat: function(e) {
                return e
            },
            week: function(e) {
                return le(e, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            firstDayOfWeek: function() {
                return this._week.dow
            },
            firstDayOfYear: function() {
                return this._week.doy
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        }), we = function(t, n, a, r) {
            var s;
            return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = n, s._l = a, s._strict = r, s._isUTC = !1, s._pf = i(), ce(s)
        }, we.suppressDeprecationWarnings = !1, we.createFromInputFallback = r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), we.min = function() {
            return he("isBefore", [].slice.call(arguments, 0))
        }, we.max = function() {
            return he("isAfter", [].slice.call(arguments, 0))
        }, we.utc = function(t, n, a, r) {
            var s;
            return "boolean" == typeof a && (r = a, a = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = a, s._i = t, s._f = n, s._strict = r, s._pf = i(), ce(s).utc()
        }, we.unix = function(e) {
            return we(1e3 * e)
        }, we.duration = function(e, t) {
            var i, a, r, s, o = e,
                d = null;
            return we.isDuration(e) ? o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (d = Pe.exec(e)) ? (i = "-" === d[1] ? -1 : 1, o = {
                y: 0,
                d: x(d[Ce]) * i,
                h: x(d[Ee]) * i,
                m: x(d[je]) * i,
                s: x(d[Ae]) * i,
                ms: x(d[$e]) * i
            }) : (d = We.exec(e)) ? (i = "-" === d[1] ? -1 : 1, r = function(e) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * i
            }, o = {
                y: r(d[2]),
                M: r(d[3]),
                d: r(d[4]),
                h: r(d[5]),
                m: r(d[6]),
                s: r(d[7]),
                w: r(d[8])
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = v(we(o.from), we(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), a = new p(o), we.isDuration(e) && n(e, "_locale") && (a._locale = e._locale), a
        }, we.version = Le, we.defaultFormat = st, we.ISO_8601 = function() {}, we.momentProperties = Ne, we.updateOffset = function() {}, we.relativeTimeThreshold = function(t, n) {
            return ft[t] !== e && (n === e ? ft[t] : (ft[t] = n, !0))
        }, we.lang = r("moment.lang is deprecated. Use moment.locale instead.", function(e, t) {
            return we.locale(e, t)
        }), we.locale = function(e, t) {
            var n;
            return e && (n = void 0 !== t ? we.defineLocale(e, t) : we.localeData(e)) && (we.duration._locale = we._locale = n), we._locale._abbr
        }, we.defineLocale = function(e, t) {
            return null !== t ? (t.abbr = e, Oe[e] || (Oe[e] = new c), Oe[e].set(t), we.locale(e), Oe[e]) : (delete Oe[e], null)
        }, we.langData = r("moment.langData is deprecated. Use moment.localeData instead.", function(e) {
            return we.localeData(e)
        }), we.localeData = function(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return we._locale;
            if (!b(e)) {
                if (t = H(e)) return t;
                e = [e]
            }
            return N(e)
        }, we.isMoment = function(e) {
            return e instanceof h || null != e && n(e, "_isAMomentObject")
        }, we.isDuration = function(e) {
            return e instanceof p
        };
        for (De = vt.length - 1; De >= 0; --De) Y(vt[De]);
        we.normalizeUnits = function(e) {
            return T(e)
        }, we.invalid = function(e) {
            var t = we.utc(NaN);
            return null != e ? f(t._pf, e) : t._pf.userInvalidated = !0, t
        }, we.parseZone = function() {
            return we.apply(null, arguments).parseZone()
        }, we.parseTwoDigitYear = function(e) {
            return x(e) + (x(e) > 68 ? 1900 : 2e3)
        }, we.isDate = D, f(we.fn = h.prototype, {
            clone: function() {
                return we(this)
            },
            valueOf: function() {
                return +this._d - 6e4 * (this._offset || 0)
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                var e = we(this).utc();
                return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : I(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
            },
            isValid: function() {
                return $(this)
            },
            isDSTShifted: function() {
                return !!this._a && (this.isValid() && L(this._a, (this._isUTC ? we.utc(this._a) : we(this._a)).toArray()) > 0)
            },
            parsingFlags: function() {
                return f({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function(e) {
                return this.utcOffset(0, e)
            },
            local: function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(this._dateUtcOffset(), "m")), this
            },
            format: function(e) {
                var t = I(this, e || we.defaultFormat);
                return this.localeData().postformat(t)
            },
            add: M(1, "add"),
            subtract: M(-1, "subtract"),
            diff: function(e, t, n) {
                var i, a, r = F(e, this),
                    s = 6e4 * (r.utcOffset() - this.utcOffset());
                return t = T(t), "year" === t || "month" === t || "quarter" === t ? (a = l(this, r), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (i = this - r, a = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? a : _(a)
            },
            from: function(e, t) {
                return we.duration({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t)
            },
            fromNow: function(e) {
                return this.from(we(), e)
            },
            calendar: function(e) {
                var t = e || we(),
                    n = F(t, this).startOf("day"),
                    i = this.diff(n, "days", !0),
                    a = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(a, this, we(t)))
            },
            isLeapYear: function() {
                return j(this.year())
            },
            isDST: function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            },
            day: function(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = se(e, this.localeData()), this.add(e - t, "d")) : t
            },
            month: _e("Month", !0),
            startOf: function(e) {
                switch (e = T(e)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function(t) {
                return t = T(t), t === e || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
            },
            isAfter: function(e, t) {
                return t = T(void 0 !== t ? t : "millisecond"), "millisecond" === t ? (e = we.isMoment(e) ? e : we(e), +this > +e) : (we.isMoment(e) ? +e : +we(e)) < +this.clone().startOf(t)
            },
            isBefore: function(e, t) {
                var n;
                return t = T(void 0 !== t ? t : "millisecond"), "millisecond" === t ? (e = we.isMoment(e) ? e : we(e), +this < +e) : (n = we.isMoment(e) ? +e : +we(e), +this.clone().endOf(t) < n)
            },
            isBetween: function(e, t, n) {
                return this.isAfter(e, n) && this.isBefore(t, n)
            },
            isSame: function(e, t) {
                var n;
                return t = T(t || "millisecond"), "millisecond" === t ? (e = we.isMoment(e) ? e : we(e), +this == +e) : (n = +we(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
            },
            min: r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(e) {
                return e = we.apply(null, arguments), e < this ? this : e
            }),
            max: r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(e) {
                return e = we.apply(null, arguments), e > this ? this : e
            }),
            zone: r("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }),
            utcOffset: function(e, t) {
                var n, i = this._offset || 0;
                return null != e ? ("string" == typeof e && (e = q(e)), Math.abs(e) < 16 && (e *= 60), !this._isUTC && t && (n = this._dateUtcOffset()), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), i !== e && (!t || this._changeInProgress ? w(this, we.duration(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, we.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : this._dateUtcOffset()
            },
            isLocal: function() {
                return !this._isUTC
            },
            isUtcOffset: function() {
                return this._isUTC
            },
            isUtc: function() {
                return this._isUTC && 0 === this._offset
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(q(this._i)), this
            },
            hasAlignedHourOffset: function(e) {
                return e = e ? we(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0
            },
            daysInMonth: function() {
                return S(this.year(), this.month())
            },
            dayOfYear: function(e) {
                var t = ke((we(this).startOf("day") - we(this).startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            },
            quarter: function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            },
            weekYear: function(e) {
                var t = le(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == e ? t : this.add(e - t, "y")
            },
            isoWeekYear: function(e) {
                var t = le(this, 1, 4).year;
                return null == e ? t : this.add(e - t, "y")
            },
            week: function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            },
            isoWeek: function(e) {
                var t = le(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            },
            weekday: function(e) {
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            },
            isoWeekday: function(e) {
                return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            },
            isoWeeksInYear: function() {
                return C(this.year(), 1, 4)
            },
            weeksInYear: function() {
                var e = this.localeData()._week;
                return C(this.year(), e.dow, e.doy)
            },
            get: function(e) {
                return e = T(e), this[e]()
            },
            set: function(e, t) {
                var n;
                if ("object" == typeof e)
                    for (n in e) this.set(n, e[n]);
                else e = T(e), "function" == typeof this[e] && this[e](t);
                return this
            },
            locale: function(t) {
                var n;
                return t === e ? this._locale._abbr : (n = we.localeData(t), null != n && (this._locale = n), this)
            },
            lang: r("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return t === e ? this.localeData() : this.locale(t)
            }),
            localeData: function() {
                return this._locale
            },
            _dateUtcOffset: function() {
                return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
            }
        }), we.fn.millisecond = we.fn.milliseconds = _e("Milliseconds", !1), we.fn.second = we.fn.seconds = _e("Seconds", !1), we.fn.minute = we.fn.minutes = _e("Minutes", !1), we.fn.hour = we.fn.hours = _e("Hours", !0), we.fn.date = _e("Date", !0), we.fn.dates = r("dates accessor is deprecated. Use date instead.", _e("Date", !0)), we.fn.year = _e("FullYear", !0), we.fn.years = r("years accessor is deprecated. Use year instead.", _e("FullYear", !0)), we.fn.days = we.fn.day, we.fn.months = we.fn.month, we.fn.weeks = we.fn.week, we.fn.isoWeeks = we.fn.isoWeek, we.fn.quarters = we.fn.quarter, we.fn.toJSON = we.fn.toISOString, we.fn.isUTC = we.fn.isUtc, f(we.duration.fn = p.prototype, {
            _bubble: function() {
                var e, t, n, i = this._milliseconds,
                    a = this._days,
                    r = this._months,
                    s = this._data,
                    o = 0;
                s.milliseconds = i % 1e3, e = _(i / 1e3), s.seconds = e % 60, t = _(e / 60), s.minutes = t % 60, n = _(t / 60), s.hours = n % 24, a += _(n / 24), o = _(ge(a)), a -= _(ye(o)), r += _(a / 30), a %= 30, o += _(r / 12), r %= 12, s.days = a, s.months = r, s.years = o
            },
            abs: function() {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function() {
                return _(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12)
            },
            humanize: function(e) {
                var t = de(this, !e, this.localeData());
                return e && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
            },
            add: function(e, t) {
                var n = we.duration(e, t);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function(e, t) {
                var n = we.duration(e, t);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function(e) {
                return e = T(e), this[e.toLowerCase() + "s"]()
            },
            as: function(e) {
                var t, n;
                if ("month" === (e = T(e)) || "year" === e) return t = this._days + this._milliseconds / 864e5, n = this._months + 12 * ge(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(ye(this._months / 12)), e) {
                    case "week":
                        return t / 7 + this._milliseconds / 6048e5;
                    case "day":
                        return t + this._milliseconds / 864e5;
                    case "hour":
                        return 24 * t + this._milliseconds / 36e5;
                    case "minute":
                        return 24 * t * 60 + this._milliseconds / 6e4;
                    case "second":
                        return 24 * t * 60 * 60 + this._milliseconds / 1e3;
                    case "millisecond":
                        return Math.floor(24 * t * 60 * 60 * 1e3) + this._milliseconds;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            },
            lang: we.fn.lang,
            locale: we.fn.locale,
            toIsoString: r("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                return this.toISOString()
            }),
            toISOString: function() {
                var e = Math.abs(this.years()),
                    t = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    i = Math.abs(this.hours()),
                    a = Math.abs(this.minutes()),
                    r = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (i || a || r ? "T" : "") + (i ? i + "H" : "") + (a ? a + "M" : "") + (r ? r + "S" : "") : "P0D"
            },
            localeData: function() {
                return this._locale
            },
            toJSON: function() {
                return this.toISOString()
            }
        }), we.duration.fn.toString = we.duration.fn.toISOString;
        for (De in ut) n(ut, De) && ve(De.toLowerCase());
        we.duration.fn.asMilliseconds = function() {
                return this.as("ms")
            }, we.duration.fn.asSeconds = function() {
                return this.as("s")
            }, we.duration.fn.asMinutes = function() {
                return this.as("m")
            }, we.duration.fn.asHours = function() {
                return this.as("h")
            }, we.duration.fn.asDays = function() {
                return this.as("d")
            }, we.duration.fn.asWeeks = function() {
                return this.as("weeks")
            }, we.duration.fn.asMonths = function() {
                return this.as("M")
            }, we.duration.fn.asYears = function() {
                return this.as("y")
            }, we.locale("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === x(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("af", {
                    months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                    weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                    weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                    meridiemParse: /vm|nm/i,
                    isPM: function(e) {
                        return /^nm$/i.test(e)
                    },
                    meridiem: function(e, t, n) {
                        return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Vandag om] LT",
                        nextDay: "[M\xf4re om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[Gister om] LT",
                        lastWeek: "[Laas] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oor %s",
                        past: "%s gelede",
                        s: "'n paar sekondes",
                        m: "'n minuut",
                        mm: "%d minute",
                        h: "'n uur",
                        hh: "%d ure",
                        d: "'n dag",
                        dd: "%d dae",
                        M: "'n maand",
                        MM: "%d maande",
                        y: "'n jaar",
                        yy: "%d jaar"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ar-ma", {
                    months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
                    monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u0661",
                        2: "\u0662",
                        3: "\u0663",
                        4: "\u0664",
                        5: "\u0665",
                        6: "\u0666",
                        7: "\u0667",
                        8: "\u0668",
                        9: "\u0669",
                        0: "\u0660"
                    },
                    n = {
                        "\u0661": "1",
                        "\u0662": "2",
                        "\u0663": "3",
                        "\u0664": "4",
                        "\u0665": "5",
                        "\u0666": "6",
                        "\u0667": "7",
                        "\u0668": "8",
                        "\u0669": "9",
                        "\u0660": "0"
                    };
                return e.defineLocale("ar-sa", {
                    months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    meridiemParse: /\u0635|\u0645/,
                    isPM: function(e) {
                        return "\u0645" === e
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\u0635" : "\u0645"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                            return n[e]
                        }).replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ar-tn", {
                    months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u0661",
                        2: "\u0662",
                        3: "\u0663",
                        4: "\u0664",
                        5: "\u0665",
                        6: "\u0666",
                        7: "\u0667",
                        8: "\u0668",
                        9: "\u0669",
                        0: "\u0660"
                    },
                    n = {
                        "\u0661": "1",
                        "\u0662": "2",
                        "\u0663": "3",
                        "\u0664": "4",
                        "\u0665": "5",
                        "\u0666": "6",
                        "\u0667": "7",
                        "\u0668": "8",
                        "\u0669": "9",
                        "\u0660": "0"
                    },
                    i = function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                    },
                    a = {
                        s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
                        m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"],
                        h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
                        d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
                        M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
                        y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
                    },
                    r = function(e) {
                        return function(t, n) {
                            var r = i(t),
                                s = a[e][i(t)];
                            return 2 === r && (s = s[n ? 0 : 1]), s.replace(/%d/i, t)
                        }
                    },
                    s = ["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a \u064a\u0646\u0627\u064a\u0631", "\u0634\u0628\u0627\u0637 \u0641\u0628\u0631\u0627\u064a\u0631", "\u0622\u0630\u0627\u0631 \u0645\u0627\u0631\u0633", "\u0646\u064a\u0633\u0627\u0646 \u0623\u0628\u0631\u064a\u0644", "\u0623\u064a\u0627\u0631 \u0645\u0627\u064a\u0648", "\u062d\u0632\u064a\u0631\u0627\u0646 \u064a\u0648\u0646\u064a\u0648", "\u062a\u0645\u0648\u0632 \u064a\u0648\u0644\u064a\u0648", "\u0622\u0628 \u0623\u063a\u0633\u0637\u0633", "\u0623\u064a\u0644\u0648\u0644 \u0633\u0628\u062a\u0645\u0628\u0631", "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u0623\u0648\u0644 \u0623\u0643\u062a\u0648\u0628\u0631", "\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a \u0646\u0648\u0641\u0645\u0628\u0631", "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644 \u062f\u064a\u0633\u0645\u0628\u0631"];
                return e.defineLocale("ar", {
                    months: s,
                    monthsShort: s,
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    meridiemParse: /\u0635|\u0645/,
                    isPM: function(e) {
                        return "\u0645" === e
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\u0635" : "\u0645"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0628\u0639\u062f %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: r("s"),
                        m: r("m"),
                        mm: r("m"),
                        h: r("h"),
                        hh: r("h"),
                        d: r("d"),
                        dd: r("d"),
                        M: r("M"),
                        MM: r("M"),
                        y: r("y"),
                        yy: r("y")
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                            return n[e]
                        }).replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                    1: "-inci",
                    5: "-inci",
                    8: "-inci",
                    70: "-inci",
                    80: "-inci",
                    2: "-nci",
                    7: "-nci",
                    20: "-nci",
                    50: "-nci",
                    3: "-\xfcnc\xfc",
                    4: "-\xfcnc\xfc",
                    100: "-\xfcnc\xfc",
                    6: "-nc\u0131",
                    9: "-uncu",
                    10: "-uncu",
                    30: "-uncu",
                    60: "-\u0131nc\u0131",
                    90: "-\u0131nc\u0131"
                };
                return e.defineLocale("az", {
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),
                    weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),
                    weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[bug\xfcn saat] LT",
                        nextDay: "[sabah saat] LT",
                        nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
                        lastDay: "[d\xfcn\u0259n] LT",
                        lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \u0259vv\u0259l",
                        s: "birne\xe7\u0259 saniyy\u0259",
                        m: "bir d\u0259qiq\u0259",
                        mm: "%d d\u0259qiq\u0259",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
                    isPM: function(e) {
                        return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015fam"
                    },
                    ordinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
                    ordinal: function(e) {
                        if (0 === e) return e + "-\u0131nc\u0131";
                        var n = e % 10,
                            i = e % 100 - n,
                            a = e >= 100 ? 100 : null;
                        return e + (t[n] || t[i] || t[a])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t) {
                    var n = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }

                function n(e, n, i) {
                    var a = {
                        mm: n ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
                        hh: n ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
                        dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
                        MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
                        yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"
                    };
                    return "m" === i ? n ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === i ? n ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : e + " " + t(a[i], +e)
                }

                function i(e, t) {
                    return {
                        nominative: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_"),
                        accusative: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_")
                    }[/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative"][e.month()]
                }

                function a(e, t) {
                    return {
                        nominative: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                        accusative: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_")
                    }[/\[ ?[\u0412\u0432] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/.test(t) ? "accusative" : "nominative"][e.day()]
                }
                return e.defineLocale("be", {
                    months: i,
                    monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),
                    weekdays: a,
                    weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
                    weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0433.",
                        LLL: "D MMMM YYYY \u0433., LT",
                        LLLL: "dddd, D MMMM YYYY \u0433., LT"
                    },
                    calendar: {
                        sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
                        nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
                        lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
                        nextWeek: function() {
                            return "[\u0423] dddd [\u045e] LT"
                        },
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u043f\u0440\u0430\u0437 %s",
                        past: "%s \u0442\u0430\u043c\u0443",
                        s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: "\u0434\u0437\u0435\u043d\u044c",
                        dd: n,
                        M: "\u043c\u0435\u0441\u044f\u0446",
                        MM: n,
                        y: "\u0433\u043e\u0434",
                        yy: n
                    },
                    meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
                    isPM: function(e) {
                        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u043d\u043e\u0447\u044b" : e < 12 ? "\u0440\u0430\u043d\u0456\u0446\u044b" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430"
                    },
                    ordinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044b" : e + "-\u0456";
                            case "D":
                                return e + "-\u0433\u0430";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("bg", {
                    months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
                    monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
                    weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
                    weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
                        nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
                        nextWeek: "dddd [\u0432] LT",
                        lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0441\u043b\u0435\u0434 %s",
                        past: "\u043f\u0440\u0435\u0434\u0438 %s",
                        s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                        mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                        h: "\u0447\u0430\u0441",
                        hh: "%d \u0447\u0430\u0441\u0430",
                        d: "\u0434\u0435\u043d",
                        dd: "%d \u0434\u043d\u0438",
                        M: "\u043c\u0435\u0441\u0435\u0446",
                        MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
                        y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                        yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
                    },
                    ordinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            n = e % 100;
                        return 0 === e ? e + "-\u0435\u0432" : 0 === n ? e + "-\u0435\u043d" : n > 10 && n < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u09e7",
                        2: "\u09e8",
                        3: "\u09e9",
                        4: "\u09ea",
                        5: "\u09eb",
                        6: "\u09ec",
                        7: "\u09ed",
                        8: "\u09ee",
                        9: "\u09ef",
                        0: "\u09e6"
                    },
                    n = {
                        "\u09e7": "1",
                        "\u09e8": "2",
                        "\u09e9": "3",
                        "\u09ea": "4",
                        "\u09eb": "5",
                        "\u09ec": "6",
                        "\u09ed": "7",
                        "\u09ee": "8",
                        "\u09ef": "9",
                        "\u09e6": "0"
                    };
                return e.defineLocale("bn", {
                    months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09c1\u09df\u09be\u09b0\u09c0_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0985\u0997\u09be\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),
                    monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0985\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd".split("_"),
                    weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09cd\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09c1\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),
                    weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09cd\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0\u09c1_\u09b6\u09a8\u09bf".split("_"),
                    weekdaysMin: "\u09b0\u09ac_\u09b8\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1_\u09ac\u09cd\u09b0\u09bf\u09b9_\u09b6\u09c1_\u09b6\u09a8\u09bf".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u09b8\u09ae\u09df",
                        LTS: "A h:mm:ss \u09b8\u09ae\u09df",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[\u0986\u099c] LT",
                        nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT",
                        lastWeek: "[\u0997\u09a4] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u09aa\u09b0\u09c7",
                        past: "%s \u0986\u0997\u09c7",
                        s: "\u0995\u098f\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
                        m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
                        mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
                        h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
                        hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
                        d: "\u098f\u0995 \u09a6\u09bf\u09a8",
                        dd: "%d \u09a6\u09bf\u09a8",
                        M: "\u098f\u0995 \u09ae\u09be\u09b8",
                        MM: "%d \u09ae\u09be\u09b8",
                        y: "\u098f\u0995 \u09ac\u099b\u09b0",
                        yy: "%d \u09ac\u099b\u09b0"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u09b0\u09be\u09a4|\u09b6\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09c7\u09b2|\u09b0\u09be\u09a4/,
                    isPM: function(e) {
                        return /^(\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09c7\u09b2|\u09b0\u09be\u09a4)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u09b0\u09be\u09a4" : e < 10 ? "\u09b6\u0995\u09be\u09b2" : e < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : e < 20 ? "\u09ac\u09bf\u0995\u09c7\u09b2" : "\u09b0\u09be\u09a4"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u0f21",
                        2: "\u0f22",
                        3: "\u0f23",
                        4: "\u0f24",
                        5: "\u0f25",
                        6: "\u0f26",
                        7: "\u0f27",
                        8: "\u0f28",
                        9: "\u0f29",
                        0: "\u0f20"
                    },
                    n = {
                        "\u0f21": "1",
                        "\u0f22": "2",
                        "\u0f23": "3",
                        "\u0f24": "4",
                        "\u0f25": "5",
                        "\u0f26": "6",
                        "\u0f27": "7",
                        "\u0f28": "8",
                        "\u0f29": "9",
                        "\u0f20": "0"
                    };
                return e.defineLocale("bo", {
                    months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
                    monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
                    weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
                    weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
                    weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",
                        nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",
                        nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",
                        lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT",
                        lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0f63\u0f0b",
                        past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63",
                        s: "\u0f63\u0f58\u0f0b\u0f66\u0f44",
                        m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58",
                        h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",
                        d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        dd: "%d \u0f49\u0f72\u0f53\u0f0b",
                        M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        MM: "%d \u0f5f\u0fb3\u0f0b\u0f56",
                        y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        yy: "%d \u0f63\u0f7c"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
                    isPM: function(e) {
                        return /^(\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : e < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : e < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : e < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(t) {
                function n(e, t, n) {
                    return e + " " + r({
                        mm: "munutenn",
                        MM: "miz",
                        dd: "devezh"
                    }[n], e)
                }

                function i(e) {
                    switch (a(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }

                function a(e) {
                    return e > 9 ? a(e % 10) : e
                }

                function r(e, t) {
                    return 2 === t ? s(e) : e
                }

                function s(t) {
                    var n = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return n[t.charAt(0)] === e ? t : n[t.charAt(0)] + t.substring(1)
                }
                return t.defineLocale("br", {
                    months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                    monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                    weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                    longDateFormat: {
                        LT: "h[e]mm A",
                        LTS: "h[e]mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D [a viz] MMMM YYYY",
                        LLL: "D [a viz] MMMM YYYY LT",
                        LLLL: "dddd, D [a viz] MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hiziv da] LT",
                        nextDay: "[Warc'hoazh da] LT",
                        nextWeek: "dddd [da] LT",
                        lastDay: "[Dec'h da] LT",
                        lastWeek: "dddd [paset da] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "a-benn %s",
                        past: "%s 'zo",
                        s: "un nebeud segondenno\xf9",
                        m: "ur vunutenn",
                        mm: n,
                        h: "un eur",
                        hh: "%d eur",
                        d: "un devezh",
                        dd: n,
                        M: "ur miz",
                        MM: n,
                        y: "ur bloaz",
                        yy: i
                    },
                    ordinalParse: /\d{1,2}(a\xf1|vet)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "a\xf1" : "vet")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = e + " ";
                    switch (n) {
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return i += 1 === e ? "dan" : "dana";
                        case "MM":
                            return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                return e.defineLocale("bs", {
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[ju\u010der u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[pro\u0161lu] dddd [u] LT";
                                case 6:
                                    return "[pro\u0161le] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[pro\u0161li] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ca", {
                    months: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                    weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                    weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                    weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextDay: function() {
                            return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastDay: function() {
                            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "fa %s",
                        s: "uns segons",
                        m: "un minut",
                        mm: "%d minuts",
                        h: "una hora",
                        hh: "%d hores",
                        d: "un dia",
                        dd: "%d dies",
                        M: "un mes",
                        MM: "%d mesos",
                        y: "un any",
                        yy: "%d anys"
                    },
                    ordinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
                    ordinal: function(e, t) {
                        var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8";
                        return "w" !== t && "W" !== t || (n = "a"), e + n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e) {
                    return e > 1 && e < 5 && 1 != ~~(e / 10)
                }

                function n(e, n, i, a) {
                    var r = e + " ";
                    switch (i) {
                        case "s":
                            return n || a ? "p\xe1r sekund" : "p\xe1r sekundami";
                        case "m":
                            return n ? "minuta" : a ? "minutu" : "minutou";
                        case "mm":
                            return n || a ? r + (t(e) ? "minuty" : "minut") : r + "minutami";
                        case "h":
                            return n ? "hodina" : a ? "hodinu" : "hodinou";
                        case "hh":
                            return n || a ? r + (t(e) ? "hodiny" : "hodin") : r + "hodinami";
                        case "d":
                            return n || a ? "den" : "dnem";
                        case "dd":
                            return n || a ? r + (t(e) ? "dny" : "dn\xed") : r + "dny";
                        case "M":
                            return n || a ? "m\u011bs\xedc" : "m\u011bs\xedcem";
                        case "MM":
                            return n || a ? r + (t(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : r + "m\u011bs\xedci";
                        case "y":
                            return n || a ? "rok" : "rokem";
                        case "yy":
                            return n || a ? r + (t(e) ? "roky" : "let") : r + "lety"
                    }
                }
                var i = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
                    a = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");
                return e.defineLocale("cs", {
                    months: i,
                    monthsShort: a,
                    monthsParse: function(e, t) {
                        var n, i = [];
                        for (n = 0; n < 12; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                        return i
                    }(i, a),
                    weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),
                    weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                    weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[z\xedtra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v ned\u011bli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve st\u0159edu v] LT";
                                case 4:
                                    return "[ve \u010dtvrtek v] LT";
                                case 5:
                                    return "[v p\xe1tek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[v\u010dera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou ned\u011bli v] LT";
                                case 1:
                                case 2:
                                    return "[minul\xe9] dddd [v] LT";
                                case 3:
                                    return "[minulou st\u0159edu v] LT";
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "p\u0159ed %s",
                        s: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("cv", {
                    months: "\u043a\u0103\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u0103\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\xe7\u0115\u0440\u0442\u043c\u0435_\u0443\u0442\u0103_\xe7\u0443\u0440\u043b\u0430_\u0430\u0432\u0103\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),
                    monthsShort: "\u043a\u0103\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\xe7\u0115\u0440_\u0443\u0442\u0103_\xe7\u0443\u0440_\u0430\u0432_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),
                    weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u0115\xe7\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u0103\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),
                    weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u0115\xe7_\u044d\u0440\u043d_\u0448\u0103\u043c".split("_"),
                    weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\xe7_\u044d\u0440_\u0448\u043c".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD-MM-YYYY",
                        LL: "YYYY [\xe7\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u0103\u0445\u0115\u043d] D[-\u043c\u0115\u0448\u0115]",
                        LLL: "YYYY [\xe7\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u0103\u0445\u0115\u043d] D[-\u043c\u0115\u0448\u0115], LT",
                        LLLL: "dddd, YYYY [\xe7\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u0103\u0445\u0115\u043d] D[-\u043c\u0115\u0448\u0115], LT"
                    },
                    calendar: {
                        sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        lastDay: "[\u0114\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        nextWeek: "[\xc7\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        lastWeek: "[\u0418\u0440\u0442\u043d\u0115] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\xe7\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d")
                        },
                        past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
                        s: "\u043f\u0115\u0440-\u0438\u043a \xe7\u0435\u043a\u043a\u0443\u043d\u0442",
                        m: "\u043f\u0115\u0440 \u043c\u0438\u043d\u0443\u0442",
                        mm: "%d \u043c\u0438\u043d\u0443\u0442",
                        h: "\u043f\u0115\u0440 \u0441\u0435\u0445\u0435\u0442",
                        hh: "%d \u0441\u0435\u0445\u0435\u0442",
                        d: "\u043f\u0115\u0440 \u043a\u0443\u043d",
                        dd: "%d \u043a\u0443\u043d",
                        M: "\u043f\u0115\u0440 \u0443\u0439\u0103\u0445",
                        MM: "%d \u0443\u0439\u0103\u0445",
                        y: "\u043f\u0115\u0440 \xe7\u0443\u043b",
                        yy: "%d \xe7\u0443\u043b"
                    },
                    ordinalParse: /\d{1,2}-\u043c\u0115\u0448/,
                    ordinal: "%d-\u043c\u0115\u0448",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("cy", {
                    months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                    monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                    weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                    weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heddiw am] LT",
                        nextDay: "[Yfory am] LT",
                        nextWeek: "dddd [am] LT",
                        lastDay: "[Ddoe am] LT",
                        lastWeek: "dddd [diwethaf am] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "mewn %s",
                        past: "%s yn \xf4l",
                        s: "ychydig eiliadau",
                        m: "munud",
                        mm: "%d munud",
                        h: "awr",
                        hh: "%d awr",
                        d: "diwrnod",
                        dd: "%d diwrnod",
                        M: "mis",
                        MM: "%d mis",
                        y: "blwyddyn",
                        yy: "%d flynedd"
                    },
                    ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                    ordinal: function(e) {
                        var t = e,
                            n = "",
                            i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                        return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = i[t]), e + n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("da", {
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
                    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd [d.] D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[I dag kl.] LT",
                        nextDay: "[I morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[I g\xe5r kl.] LT",
                        lastWeek: "[sidste] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "f\xe5 sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "et \xe5r",
                        yy: "%d \xe5r"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? i[n][0] : i[n][1]
                }
                return e.defineLocale("de-at", {
                    months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "J\xe4n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[Morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[Gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? i[n][0] : i[n][1]
                }
                return e.defineLocale("de", {
                    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[Morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[Gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("el", {
                    monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),
                    monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),
                    months: function(e, t) {
                        return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
                    },
                    monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),
                    weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),
                    weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),
                    weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),
                    meridiem: function(e, t, n) {
                        return e > 11 ? n ? "\u03bc\u03bc" : "\u039c\u039c" : n ? "\u03c0\u03bc" : "\u03a0\u039c"
                    },
                    isPM: function(e) {
                        return "\u03bc" === (e + "").toLowerCase()[0]
                    },
                    meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendarEl: {
                        sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",
                        nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",
                        nextWeek: "dddd [{}] LT",
                        lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 6:
                                    return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                                default:
                                    return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    calendar: function(e, t) {
                        var n = this._calendarEl[e],
                            i = t && t.hours();
                        return "function" == typeof n && (n = n.apply(t)), n.replace("{}", i % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2")
                    },
                    relativeTime: {
                        future: "\u03c3\u03b5 %s",
                        past: "%s \u03c0\u03c1\u03b9\u03bd",
                        s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
                        m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                        mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
                        h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
                        hh: "%d \u03ce\u03c1\u03b5\u03c2",
                        d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
                        dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
                        M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
                        MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
                        y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",
                        yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                    },
                    ordinalParse: /\d{1,2}\u03b7/,
                    ordinal: "%d\u03b7",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("en-au", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("en-ca", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM, YYYY",
                        LLL: "D MMMM, YYYY LT",
                        LLLL: "dddd, D MMMM, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("en-gb", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("eo", {
                    months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"),
                    weekdays: "Diman\u0109o_Lundo_Mardo_Merkredo_\u0134a\u016ddo_Vendredo_Sabato".split("_"),
                    weekdaysShort: "Dim_Lun_Mard_Merk_\u0134a\u016d_Ven_Sab".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_\u0134a_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "D[-an de] MMMM, YYYY",
                        LLL: "D[-an de] MMMM, YYYY LT",
                        LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
                    },
                    meridiemParse: /[ap]\.t\.m/i,
                    isPM: function(e) {
                        return "p" === e.charAt(0).toLowerCase()
                    },
                    meridiem: function(e, t, n) {
                        return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                    },
                    calendar: {
                        sameDay: "[Hodia\u016d je] LT",
                        nextDay: "[Morga\u016d je] LT",
                        nextWeek: "dddd [je] LT",
                        lastDay: "[Hiera\u016d je] LT",
                        lastWeek: "[pasinta] dddd [je] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "je %s",
                        past: "anta\u016d %s",
                        s: "sekundoj",
                        m: "minuto",
                        mm: "%d minutoj",
                        h: "horo",
                        hh: "%d horoj",
                        d: "tago",
                        dd: "%d tagoj",
                        M: "monato",
                        MM: "%d monatoj",
                        y: "jaro",
                        yy: "%d jaroj"
                    },
                    ordinalParse: /\d{1,2}a/,
                    ordinal: "%da",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
                return e.defineLocale("es", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, i) {
                        return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
                    },
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_S\xe1".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    ordinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n, i) {
                    var a = {
                        s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
                        m: ["\xfche minuti", "\xfcks minut"],
                        mm: [e + " minuti", e + " minutit"],
                        h: ["\xfche tunni", "tund aega", "\xfcks tund"],
                        hh: [e + " tunni", e + " tundi"],
                        d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
                        M: ["kuu aja", "kuu aega", "\xfcks kuu"],
                        MM: [e + " kuu", e + " kuud"],
                        y: ["\xfche aasta", "aasta", "\xfcks aasta"],
                        yy: [e + " aasta", e + " aastat"]
                    };
                    return t ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
                }
                return e.defineLocale("et", {
                    months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                    monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                    weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
                    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[T\xe4na,] LT",
                        nextDay: "[Homme,] LT",
                        nextWeek: "[J\xe4rgmine] dddd LT",
                        lastDay: "[Eile,] LT",
                        lastWeek: "[Eelmine] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s p\xe4rast",
                        past: "%s tagasi",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: "%d p\xe4eva",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("eu", {
                    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY[ko] MMMM[ren] D[a]",
                        LLL: "YYYY[ko] MMMM[ren] D[a] LT",
                        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
                        l: "YYYY-M-D",
                        ll: "YYYY[ko] MMM D[a]",
                        lll: "YYYY[ko] MMM D[a] LT",
                        llll: "ddd, YYYY[ko] MMM D[a] LT"
                    },
                    calendar: {
                        sameDay: "[gaur] LT[etan]",
                        nextDay: "[bihar] LT[etan]",
                        nextWeek: "dddd LT[etan]",
                        lastDay: "[atzo] LT[etan]",
                        lastWeek: "[aurreko] dddd LT[etan]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s barru",
                        past: "duela %s",
                        s: "segundo batzuk",
                        m: "minutu bat",
                        mm: "%d minutu",
                        h: "ordu bat",
                        hh: "%d ordu",
                        d: "egun bat",
                        dd: "%d egun",
                        M: "hilabete bat",
                        MM: "%d hilabete",
                        y: "urte bat",
                        yy: "%d urte"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u06f1",
                        2: "\u06f2",
                        3: "\u06f3",
                        4: "\u06f4",
                        5: "\u06f5",
                        6: "\u06f6",
                        7: "\u06f7",
                        8: "\u06f8",
                        9: "\u06f9",
                        0: "\u06f0"
                    },
                    n = {
                        "\u06f1": "1",
                        "\u06f2": "2",
                        "\u06f3": "3",
                        "\u06f4": "4",
                        "\u06f5": "5",
                        "\u06f6": "6",
                        "\u06f7": "7",
                        "\u06f8": "8",
                        "\u06f9": "9",
                        "\u06f0": "0"
                    };
                return e.defineLocale("fa", {
                    months: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
                    weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
                    weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
                    weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
                    isPM: function(e) {
                        return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
                        nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",
                        nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT",
                        lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
                        lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u062f\u0631 %s",
                        past: "%s \u067e\u06cc\u0634",
                        s: "\u0686\u0646\u062f\u06cc\u0646 \u062b\u0627\u0646\u06cc\u0647",
                        m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",
                        mm: "%d \u062f\u0642\u06cc\u0642\u0647",
                        h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a",
                        hh: "%d \u0633\u0627\u0639\u062a",
                        d: "\u06cc\u06a9 \u0631\u0648\u0632",
                        dd: "%d \u0631\u0648\u0632",
                        M: "\u06cc\u06a9 \u0645\u0627\u0647",
                        MM: "%d \u0645\u0627\u0647",
                        y: "\u06cc\u06a9 \u0633\u0627\u0644",
                        yy: "%d \u0633\u0627\u0644"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u06f0-\u06f9]/g, function(e) {
                            return n[e]
                        }).replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "\u060c")
                    },
                    ordinalParse: /\d{1,2}\u0645/,
                    ordinal: "%d\u0645",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, i, a) {
                    var r = "";
                    switch (i) {
                        case "s":
                            return a ? "muutaman sekunnin" : "muutama sekunti";
                        case "m":
                            return a ? "minuutin" : "minuutti";
                        case "mm":
                            r = a ? "minuutin" : "minuuttia";
                            break;
                        case "h":
                            return a ? "tunnin" : "tunti";
                        case "hh":
                            r = a ? "tunnin" : "tuntia";
                            break;
                        case "d":
                            return a ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
                        case "dd":
                            r = a ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
                            break;
                        case "M":
                            return a ? "kuukauden" : "kuukausi";
                        case "MM":
                            r = a ? "kuukauden" : "kuukautta";
                            break;
                        case "y":
                            return a ? "vuoden" : "vuosi";
                        case "yy":
                            r = a ? "vuoden" : "vuotta"
                    }
                    return r = n(e, a) + " " + r
                }

                function n(e, t) {
                    return e < 10 ? t ? a[e] : i[e] : e
                }
                var i = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
                    a = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", i[7], i[8], i[9]];
                return e.defineLocale("fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] LT",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] LT",
                        llll: "ddd, Do MMM YYYY, [klo] LT"
                    },
                    calendar: {
                        sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s p\xe4\xe4st\xe4",
                        past: "%s sitten",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("fo", {
                    months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),
                    weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
                    weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D. MMMM, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\xcd dag kl.] LT",
                        nextDay: "[\xcd morgin kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[\xcd gj\xe1r kl.] LT",
                        lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "um %s",
                        past: "%s s\xed\xf0ani",
                        s: "f\xe1 sekund",
                        m: "ein minutt",
                        mm: "%d minuttir",
                        h: "ein t\xedmi",
                        hh: "%d t\xedmar",
                        d: "ein dagur",
                        dd: "%d dagar",
                        M: "ein m\xe1na\xf0i",
                        MM: "%d m\xe1na\xf0ir",
                        y: "eitt \xe1r",
                        yy: "%d \xe1r"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("fr-ca", {
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Aujourd'hui \xe0] LT",
                        nextDay: "[Demain \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[Hier \xe0] LT",
                        lastWeek: "dddd [dernier \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinalParse: /\d{1,2}(er|)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "er" : "")
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("fr", {
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Aujourd'hui \xe0] LT",
                        nextDay: "[Demain \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[Hier \xe0] LT",
                        lastWeek: "dddd [dernier \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinalParse: /\d{1,2}(er|)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "er" : "")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                    n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                return e.defineLocale("fy", {
                    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                    monthsShort: function(e, i) {
                        return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
                    },
                    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[hjoed om] LT",
                        nextDay: "[moarn om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[juster om] LT",
                        lastWeek: "[\xf4fr\xfbne] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oer %s",
                        past: "%s lyn",
                        s: "in pear sekonden",
                        m: "ien min\xfat",
                        mm: "%d minuten",
                        h: "ien oere",
                        hh: "%d oeren",
                        d: "ien dei",
                        dd: "%d dagen",
                        M: "ien moanne",
                        MM: "%d moannen",
                        y: "ien jier",
                        yy: "%d jierren"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("gl", {
                    months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xu\xf1o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
                    monthsShort: "Xan._Feb._Mar._Abr._Mai._Xu\xf1._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
                    weekdays: "Domingo_Luns_Martes_M\xe9rcores_Xoves_Venres_S\xe1bado".split("_"),
                    weekdaysShort: "Dom._Lun._Mar._M\xe9r._Xov._Ven._S\xe1b.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_M\xe9_Xo_Ve_S\xe1".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                        },
                        lastDay: function() {
                            return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT"
                        },
                        lastWeek: function() {
                            return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return "uns segundos" === e ? "nuns segundos" : "en " + e
                        },
                        past: "hai %s",
                        s: "uns segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "unha hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un ano",
                        yy: "%d anos"
                    },
                    ordinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("he", {
                    months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),
                    monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),
                    weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),
                    weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),
                    weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [\u05d1]MMMM YYYY",
                        LLL: "D [\u05d1]MMMM YYYY LT",
                        LLLL: "dddd, D [\u05d1]MMMM YYYY LT",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY LT",
                        llll: "ddd, D MMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",
                        nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT",
                        nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT",
                        lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",
                        lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u05d1\u05e2\u05d5\u05d3 %s",
                        past: "\u05dc\u05e4\u05e0\u05d9 %s",
                        s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
                        m: "\u05d3\u05e7\u05d4",
                        mm: "%d \u05d3\u05e7\u05d5\u05ea",
                        h: "\u05e9\u05e2\u05d4",
                        hh: function(e) {
                            return 2 === e ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : e + " \u05e9\u05e2\u05d5\u05ea"
                        },
                        d: "\u05d9\u05d5\u05dd",
                        dd: function(e) {
                            return 2 === e ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : e + " \u05d9\u05de\u05d9\u05dd"
                        },
                        M: "\u05d7\u05d5\u05d3\u05e9",
                        MM: function(e) {
                            return 2 === e ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : e + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"
                        },
                        y: "\u05e9\u05e0\u05d4",
                        yy: function(e) {
                            return 2 === e ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : e % 10 == 0 && 10 !== e ? e + " \u05e9\u05e0\u05d4" : e + " \u05e9\u05e0\u05d9\u05dd"
                        }
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u0967",
                        2: "\u0968",
                        3: "\u0969",
                        4: "\u096a",
                        5: "\u096b",
                        6: "\u096c",
                        7: "\u096d",
                        8: "\u096e",
                        9: "\u096f",
                        0: "\u0966"
                    },
                    n = {
                        "\u0967": "1",
                        "\u0968": "2",
                        "\u0969": "3",
                        "\u096a": "4",
                        "\u096b": "5",
                        "\u096c": "6",
                        "\u096d": "7",
                        "\u096e": "8",
                        "\u096f": "9",
                        "\u0966": "0"
                    };
                return e.defineLocale("hi", {
                    months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),
                    monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),
                    weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
                    weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
                    weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u092c\u091c\u0947",
                        LTS: "A h:mm:ss \u092c\u091c\u0947",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[\u0906\u091c] LT",
                        nextDay: "[\u0915\u0932] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0915\u0932] LT",
                        lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u092e\u0947\u0902",
                        past: "%s \u092a\u0939\u0932\u0947",
                        s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
                        m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
                        mm: "%d \u092e\u093f\u0928\u091f",
                        h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
                        hh: "%d \u0918\u0902\u091f\u0947",
                        d: "\u090f\u0915 \u0926\u093f\u0928",
                        dd: "%d \u0926\u093f\u0928",
                        M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
                        MM: "%d \u092e\u0939\u0940\u0928\u0947",
                        y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
                        yy: "%d \u0935\u0930\u094d\u0937"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0930\u093e\u0924" === t ? e < 4 ? e : e + 12 : "\u0938\u0941\u092c\u0939" === t ? e : "\u0926\u094b\u092a\u0939\u0930" === t ? e >= 10 ? e : e + 12 : "\u0936\u093e\u092e" === t ? e + 12 : void 0
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u0930\u093e\u0924" : e < 10 ? "\u0938\u0941\u092c\u0939" : e < 17 ? "\u0926\u094b\u092a\u0939\u0930" : e < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = e + " ";
                    switch (n) {
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return i += 1 === e ? "dan" : "dana";
                        case "MM":
                            return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                return e.defineLocale("hr", {
                    months: "sje\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
                    monthsShort: "sje._vel._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[ju\u010der u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[pro\u0161lu] dddd [u] LT";
                                case 6:
                                    return "[pro\u0161le] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[pro\u0161li] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n, i) {
                    var a = e;
                    switch (n) {
                        case "s":
                            return i || t ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
                        case "m":
                            return "egy" + (i || t ? " perc" : " perce");
                        case "mm":
                            return a + (i || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (i || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "hh":
                            return a + (i || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "d":
                            return "egy" + (i || t ? " nap" : " napja");
                        case "dd":
                            return a + (i || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (i || t ? " h\xf3nap" : " h\xf3napja");
                        case "MM":
                            return a + (i || t ? " h\xf3nap" : " h\xf3napja");
                        case "y":
                            return "egy" + (i || t ? " \xe9v" : " \xe9ve");
                        case "yy":
                            return a + (i || t ? " \xe9v" : " \xe9ve")
                    }
                    return ""
                }

                function n(e) {
                    return (e ? "" : "[m\xfalt] ") + "[" + i[this.day()] + "] LT[-kor]"
                }
                var i = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");
                return e.defineLocale("hu", {
                    months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
                    monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
                    weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
                    weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D., LT",
                        LLLL: "YYYY. MMMM D., dddd LT"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(e) {
                        return "u" === e.charAt(1).toLowerCase()
                    },
                    meridiem: function(e, t, n) {
                        return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return n.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return n.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s m\xfalva",
                        past: "%s",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t) {
                    return {
                        nominative: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_"),
                        accusative: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_")
                    }[/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative"][e.month()]
                }

                function n(e) {
                    return "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_")[e.month()]
                }

                function i(e) {
                    return "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_")[e.day()]
                }
                return e.defineLocale("hy-am", {
                    months: t,
                    monthsShort: n,
                    weekdays: i,
                    weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
                    weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0569.",
                        LLL: "D MMMM YYYY \u0569., LT",
                        LLLL: "dddd, D MMMM YYYY \u0569., LT"
                    },
                    calendar: {
                        sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT",
                        nextDay: "[\u057e\u0561\u0572\u0568] LT",
                        lastDay: "[\u0565\u0580\u0565\u056f] LT",
                        nextWeek: function() {
                            return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
                        },
                        lastWeek: function() {
                            return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0570\u0565\u057f\u0578",
                        past: "%s \u0561\u057c\u0561\u057b",
                        s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
                        m: "\u0580\u0578\u057a\u0565",
                        mm: "%d \u0580\u0578\u057a\u0565",
                        h: "\u056a\u0561\u0574",
                        hh: "%d \u056a\u0561\u0574",
                        d: "\u0585\u0580",
                        dd: "%d \u0585\u0580",
                        M: "\u0561\u0574\u056b\u057d",
                        MM: "%d \u0561\u0574\u056b\u057d",
                        y: "\u057f\u0561\u0580\u056b",
                        yy: "%d \u057f\u0561\u0580\u056b"
                    },
                    meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
                    isPM: function(e) {
                        return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : e < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"
                    },
                    ordinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === e ? e + "-\u056b\u0576" : e + "-\u0580\u0564";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("id", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "LT.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] LT",
                        LLLL: "dddd, D MMMM YYYY [pukul] LT"
                    },
                    meridiemParse: /pagi|siang|sore|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e) {
                        return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Besok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kemarin pukul] LT",
                        lastWeek: "dddd [lalu pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e) {
                    return e % 100 == 11 || e % 10 != 1
                }

                function n(e, n, i, a) {
                    var r = e + " ";
                    switch (i) {
                        case "s":
                            return n || a ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
                        case "m":
                            return n ? "m\xedn\xfata" : "m\xedn\xfatu";
                        case "mm":
                            return t(e) ? r + (n || a ? "m\xedn\xfatur" : "m\xedn\xfatum") : n ? r + "m\xedn\xfata" : r + "m\xedn\xfatu";
                        case "hh":
                            return t(e) ? r + (n || a ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                        case "d":
                            return n ? "dagur" : a ? "dag" : "degi";
                        case "dd":
                            return t(e) ? n ? r + "dagar" : r + (a ? "daga" : "d\xf6gum") : n ? r + "dagur" : r + (a ? "dag" : "degi");
                        case "M":
                            return n ? "m\xe1nu\xf0ur" : a ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
                        case "MM":
                            return t(e) ? n ? r + "m\xe1nu\xf0ir" : r + (a ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : n ? r + "m\xe1nu\xf0ur" : r + (a ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
                        case "y":
                            return n || a ? "\xe1r" : "\xe1ri";
                        case "yy":
                            return t(e) ? r + (n || a ? "\xe1r" : "\xe1rum") : r + (n || a ? "\xe1r" : "\xe1ri")
                    }
                }
                return e.defineLocale("is", {
                    months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),
                    weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),
                    weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
                    weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] LT",
                        LLLL: "dddd, D. MMMM YYYY [kl.] LT"
                    },
                    calendar: {
                        sameDay: "[\xed dag kl.] LT",
                        nextDay: "[\xe1 morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[\xed g\xe6r kl.] LT",
                        lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s s\xed\xf0an",
                        s: n,
                        m: n,
                        mm: n,
                        h: "klukkustund",
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("it", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "Domenica_Luned\xec_Marted\xec_Mercoled\xec_Gioved\xec_Venerd\xec_Sabato".split("_"),
                    weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                    weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                        },
                        past: "%s fa",
                        s: "alcuni secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    ordinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ja", {
                    months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
                    weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    longDateFormat: {
                        LT: "Ah\u6642m\u5206",
                        LTS: "LTs\u79d2",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5LT",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5LT dddd"
                    },
                    meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
                    isPM: function(e) {
                        return "\u5348\u5f8c" === e
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c"
                    },
                    calendar: {
                        sameDay: "[\u4eca\u65e5] LT",
                        nextDay: "[\u660e\u65e5] LT",
                        nextWeek: "[\u6765\u9031]dddd LT",
                        lastDay: "[\u6628\u65e5] LT",
                        lastWeek: "[\u524d\u9031]dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s\u5f8c",
                        past: "%s\u524d",
                        s: "\u6570\u79d2",
                        m: "1\u5206",
                        mm: "%d\u5206",
                        h: "1\u6642\u9593",
                        hh: "%d\u6642\u9593",
                        d: "1\u65e5",
                        dd: "%d\u65e5",
                        M: "1\u30f6\u6708",
                        MM: "%d\u30f6\u6708",
                        y: "1\u5e74",
                        yy: "%d\u5e74"
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t) {
                    return {
                        nominative: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),
                        accusative: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_")
                    }[/D[oD] *MMMM?/.test(t) ? "accusative" : "nominative"][e.month()]
                }

                function n(e, t) {
                    return {
                        nominative: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),
                        accusative: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_")
                    }[/(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/.test(t) ? "accusative" : "nominative"][e.day()]
                }
                return e.defineLocale("ka", {
                    months: t,
                    monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),
                    weekdays: n,
                    weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),
                    weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",
                        nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",
                        lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",
                        nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",
                        lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10e8\u10d8") : e + "\u10e8\u10d8"
                        },
                        past: function(e) {
                            return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0
                        },
                        s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",
                        m: "\u10ec\u10e3\u10d7\u10d8",
                        mm: "%d \u10ec\u10e3\u10d7\u10d8",
                        h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
                        hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8",
                        d: "\u10d3\u10e6\u10d4",
                        dd: "%d \u10d3\u10e6\u10d4",
                        M: "\u10d7\u10d5\u10d4",
                        MM: "%d \u10d7\u10d5\u10d4",
                        y: "\u10ec\u10d4\u10da\u10d8",
                        yy: "%d \u10ec\u10d4\u10da\u10d8"
                    },
                    ordinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
                    ordinal: function(e) {
                        return 0 === e ? e : 1 === e ? e + "-\u10da\u10d8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10db\u10d4-" + e : e + "-\u10d4"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("km", {
                    months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b7\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b7\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
                    weekdaysShort: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
                    weekdaysMin: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c8 \u1798\u17c9\u17c4\u1784] LT",
                        nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",
                        nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT",
                        lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",
                        lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s\u1791\u17c0\u178f",
                        past: "%s\u1798\u17bb\u1793",
                        s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
                        m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
                        mm: "%d \u1793\u17b6\u1791\u17b8",
                        h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
                        hh: "%d \u1798\u17c9\u17c4\u1784",
                        d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
                        dd: "%d \u1790\u17d2\u1784\u17c3",
                        M: "\u1798\u17bd\u1799\u1781\u17c2",
                        MM: "%d \u1781\u17c2",
                        y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
                        yy: "%d \u1786\u17d2\u1793\u17b6\u17c6"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ko", {
                    months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
                    weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    longDateFormat: {
                        LT: "A h\uc2dc m\ubd84",
                        LTS: "A h\uc2dc m\ubd84 s\ucd08",
                        L: "YYYY.MM.DD",
                        LL: "YYYY\ub144 MMMM D\uc77c",
                        LLL: "YYYY\ub144 MMMM D\uc77c LT",
                        LLLL: "YYYY\ub144 MMMM D\uc77c dddd LT"
                    },
                    calendar: {
                        sameDay: "\uc624\ub298 LT",
                        nextDay: "\ub0b4\uc77c LT",
                        nextWeek: "dddd LT",
                        lastDay: "\uc5b4\uc81c LT",
                        lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \ud6c4",
                        past: "%s \uc804",
                        s: "\uba87\ucd08",
                        ss: "%d\ucd08",
                        m: "\uc77c\ubd84",
                        mm: "%d\ubd84",
                        h: "\ud55c\uc2dc\uac04",
                        hh: "%d\uc2dc\uac04",
                        d: "\ud558\ub8e8",
                        dd: "%d\uc77c",
                        M: "\ud55c\ub2ec",
                        MM: "%d\ub2ec",
                        y: "\uc77c\ub144",
                        yy: "%d\ub144"
                    },
                    ordinalParse: /\d{1,2}\uc77c/,
                    ordinal: "%d\uc77c",
                    meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
                    isPM: function(e) {
                        return "\uc624\ud6c4" === e
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4"
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = {
                        m: ["eng Minutt", "enger Minutt"],
                        h: ["eng Stonn", "enger Stonn"],
                        d: ["een Dag", "engem Dag"],
                        M: ["ee Mount", "engem Mount"],
                        y: ["ee Joer", "engem Joer"]
                    };
                    return t ? i[n][0] : i[n][1]
                }

                function n(e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                }

                function i(e) {
                    return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                }

                function a(e) {
                    if (e = parseInt(e, 10), isNaN(e)) return !1;
                    if (e < 0) return !0;
                    if (e < 10) return 4 <= e && e <= 7;
                    if (e < 100) {
                        var t = e % 10,
                            n = e / 10;
                        return a(0 === t ? n : t)
                    }
                    if (e < 1e4) {
                        for (; e >= 10;) e /= 10;
                        return a(e)
                    }
                    return e /= 1e3, a(e)
                }
                return e.defineLocale("lb", {
                    months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "H:mm [Auer]",
                        LTS: "H:mm:ss [Auer]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[G\xebschter um] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT"
                            }
                        }
                    },
                    relativeTime: {
                        future: n,
                        past: i,
                        s: "e puer Sekonnen",
                        m: t,
                        mm: "%d Minutten",
                        h: t,
                        hh: "%d Stonnen",
                        d: t,
                        dd: "%d Deeg",
                        M: t,
                        MM: "%d M\xe9int",
                        y: t,
                        yy: "%d Joer"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n, i) {
                    return t ? "kelios sekund\u0117s" : i ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes"
                }

                function n(e, t, n, i) {
                    return t ? a(n)[0] : i ? a(n)[1] : a(n)[2]
                }

                function i(e) {
                    return e % 10 == 0 || e > 10 && e < 20
                }

                function a(e) {
                    return o[e].split("_")
                }

                function r(e, t, r, s) {
                    var o = e + " ";
                    return 1 === e ? o + n(e, t, r[0], s) : t ? o + (i(e) ? a(r)[1] : a(r)[0]) : s ? o + a(r)[1] : o + (i(e) ? a(r)[1] : a(r)[2])
                }

                function s(e, t) {
                    var n = -1 === t.indexOf("dddd HH:mm"),
                        i = d[e.day()];
                    return n ? i : i.substring(0, i.length - 2) + "\u012f"
                }
                var o = {
                        m: "minut\u0117_minut\u0117s_minut\u0119",
                        mm: "minut\u0117s_minu\u010di\u0173_minutes",
                        h: "valanda_valandos_valand\u0105",
                        hh: "valandos_valand\u0173_valandas",
                        d: "diena_dienos_dien\u0105",
                        dd: "dienos_dien\u0173_dienas",
                        M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",
                        MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
                        y: "metai_met\u0173_metus",
                        yy: "metai_met\u0173_metus"
                    },
                    d = "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_");
                return e.defineLocale("lt", {
                    months: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: s,
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], LT [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
                    },
                    calendar: {
                        sameDay: "[\u0160iandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Pra\u0117jus\u012f] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prie\u0161 %s",
                        s: t,
                        m: n,
                        mm: r,
                        h: n,
                        hh: r,
                        d: n,
                        dd: r,
                        M: n,
                        MM: r,
                        y: n,
                        yy: r
                    },
                    ordinalParse: /\d{1,2}-oji/,
                    ordinal: function(e) {
                        return e + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = e.split("_");
                    return n ? t % 10 == 1 && 11 !== t ? i[2] : i[3] : t % 10 == 1 && 11 !== t ? i[0] : i[1]
                }

                function n(e, n, a) {
                    return e + " " + t(i[a], e, n)
                }
                var i = {
                    mm: "min\u016bti_min\u016btes_min\u016bte_min\u016btes",
                    hh: "stundu_stundas_stunda_stundas",
                    dd: "dienu_dienas_diena_dienas",
                    MM: "m\u0113nesi_m\u0113ne\u0161us_m\u0113nesis_m\u0113ne\u0161i",
                    yy: "gadu_gadus_gads_gadi"
                };
                return e.defineLocale("lv", {
                    months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, LT",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
                    },
                    calendar: {
                        sameDay: "[\u0160odien pulksten] LT",
                        nextDay: "[R\u012bt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s v\u0113l\u0101k",
                        past: "%s agr\u0101k",
                        s: "da\u017eas sekundes",
                        m: "min\u016bti",
                        mm: n,
                        h: "stundu",
                        hh: n,
                        d: "dienu",
                        dd: n,
                        M: "m\u0113nesi",
                        MM: n,
                        y: "gadu",
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("mk", {
                    months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
                    monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),
                    weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),
                    weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",
                        nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",
                        nextWeek: "dddd [\u0432\u043e] LT",
                        lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0412\u043e \u0438\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0412\u043e \u0438\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u043f\u043e\u0441\u043b\u0435 %s",
                        past: "\u043f\u0440\u0435\u0434 %s",
                        s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                        mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                        h: "\u0447\u0430\u0441",
                        hh: "%d \u0447\u0430\u0441\u0430",
                        d: "\u0434\u0435\u043d",
                        dd: "%d \u0434\u0435\u043d\u0430",
                        M: "\u043c\u0435\u0441\u0435\u0446",
                        MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438",
                        y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                        yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
                    },
                    ordinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            n = e % 100;
                        return 0 === e ? e + "-\u0435\u0432" : 0 === n ? e + "-\u0435\u043d" : n > 10 && n < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ml", {
                    months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),
                    monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),
                    weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),
                    weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),
                    weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),
                    longDateFormat: {
                        LT: "A h:mm -\u0d28\u0d41",
                        LTS: "A h:mm:ss -\u0d28\u0d41",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",
                        nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",
                        lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",
                        past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",
                        s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",
                        m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
                        mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
                        h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
                        hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
                        d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",
                        dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02",
                        M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",
                        MM: "%d \u0d2e\u0d3e\u0d38\u0d02",
                        y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",
                        yy: "%d \u0d35\u0d7c\u0d37\u0d02"
                    },
                    meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
                    isPM: function(e) {
                        return /^(\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : e < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : e < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : e < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u0967",
                        2: "\u0968",
                        3: "\u0969",
                        4: "\u096a",
                        5: "\u096b",
                        6: "\u096c",
                        7: "\u096d",
                        8: "\u096e",
                        9: "\u096f",
                        0: "\u0966"
                    },
                    n = {
                        "\u0967": "1",
                        "\u0968": "2",
                        "\u0969": "3",
                        "\u096a": "4",
                        "\u096b": "5",
                        "\u096c": "6",
                        "\u096d": "7",
                        "\u096e": "8",
                        "\u096f": "9",
                        "\u0966": "0"
                    };
                return e.defineLocale("mr", {
                    months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),
                    monthsShort: "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),
                    weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
                    weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
                    weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u0935\u093e\u091c\u0924\u093e",
                        LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[\u0906\u091c] LT",
                        nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0915\u093e\u0932] LT",
                        lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0928\u0902\u0924\u0930",
                        past: "%s \u092a\u0942\u0930\u094d\u0935\u0940",
                        s: "\u0938\u0947\u0915\u0902\u0926",
                        m: "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f",
                        mm: "%d \u092e\u093f\u0928\u093f\u091f\u0947",
                        h: "\u090f\u0915 \u0924\u093e\u0938",
                        hh: "%d \u0924\u093e\u0938",
                        d: "\u090f\u0915 \u0926\u093f\u0935\u0938",
                        dd: "%d \u0926\u093f\u0935\u0938",
                        M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
                        MM: "%d \u092e\u0939\u093f\u0928\u0947",
                        y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
                        yy: "%d \u0935\u0930\u094d\u0937\u0947"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === t ? e < 4 ? e : e + 12 : "\u0938\u0915\u093e\u0933\u0940" === t ? e : "\u0926\u0941\u092a\u093e\u0930\u0940" === t ? e >= 10 ? e : e + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === t ? e + 12 : void 0
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u0930\u093e\u0924\u094d\u0930\u0940" : e < 10 ? "\u0938\u0915\u093e\u0933\u0940" : e < 17 ? "\u0926\u0941\u092a\u093e\u0930\u0940" : e < 20 ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ms-my", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "LT.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] LT",
                        LLLL: "dddd, D MMMM YYYY [pukul] LT"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e) {
                        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u1041",
                        2: "\u1042",
                        3: "\u1043",
                        4: "\u1044",
                        5: "\u1045",
                        6: "\u1046",
                        7: "\u1047",
                        8: "\u1048",
                        9: "\u1049",
                        0: "\u1040"
                    },
                    n = {
                        "\u1041": "1",
                        "\u1042": "2",
                        "\u1043": "3",
                        "\u1044": "4",
                        "\u1045": "5",
                        "\u1046": "6",
                        "\u1047": "7",
                        "\u1048": "8",
                        "\u1049": "9",
                        "\u1040": "0"
                    };
                return e.defineLocale("my", {
                    months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),
                    monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),
                    weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),
                    weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1004\u103a\u1039\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1004\u103a\u1039\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",
                        nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",
                        nextWeek: "dddd LT [\u1019\u103e\u102c]",
                        lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",
                        lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
                        past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
                        s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
                        m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
                        mm: "%d \u1019\u102d\u1014\u1005\u103a",
                        h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
                        hh: "%d \u1014\u102c\u101b\u102e",
                        d: "\u1010\u1005\u103a\u101b\u1000\u103a",
                        dd: "%d \u101b\u1000\u103a",
                        M: "\u1010\u1005\u103a\u101c",
                        MM: "%d \u101c",
                        y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
                        yy: "%d \u1014\u103e\u1005\u103a"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("nb", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8n_man_tirs_ons_tors_fre_l\xf8r".split("_"),
                    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                    longDateFormat: {
                        LT: "H.mm",
                        LTS: "LT.ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] LT",
                        LLLL: "dddd D. MMMM YYYY [kl.] LT"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[i g\xe5r kl.] LT",
                        lastWeek: "[forrige] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "for %s siden",
                        s: "noen sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                        1: "\u0967",
                        2: "\u0968",
                        3: "\u0969",
                        4: "\u096a",
                        5: "\u096b",
                        6: "\u096c",
                        7: "\u096d",
                        8: "\u096e",
                        9: "\u096f",
                        0: "\u0966"
                    },
                    n = {
                        "\u0967": "1",
                        "\u0968": "2",
                        "\u0969": "3",
                        "\u096a": "4",
                        "\u096b": "5",
                        "\u096c": "6",
                        "\u096d": "7",
                        "\u096e": "8",
                        "\u096f": "9",
                        "\u0966": "0"
                    };
                return e.defineLocale("ne", {
                    months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),
                    monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),
                    weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),
                    weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),
                    weekdaysMin: "\u0906\u0907._\u0938\u094b._\u092e\u0919\u094d_\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),
                    longDateFormat: {
                        LT: "A\u0915\u094b h:mm \u092c\u091c\u0947",
                        LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                            return n[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0930\u093e\u0924\u0940|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u092c\u0947\u0932\u0941\u0915\u093e|\u0938\u093e\u0901\u091d|\u0930\u093e\u0924\u0940/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0930\u093e\u0924\u0940" === t ? e < 3 ? e : e + 12 : "\u092c\u093f\u0939\u093e\u0928" === t ? e : "\u0926\u093f\u0909\u0901\u0938\u094b" === t ? e >= 10 ? e : e + 12 : "\u092c\u0947\u0932\u0941\u0915\u093e" === t || "\u0938\u093e\u0901\u091d" === t ? e + 12 : void 0
                    },
                    meridiem: function(e) {
                        return e < 3 ? "\u0930\u093e\u0924\u0940" : e < 10 ? "\u092c\u093f\u0939\u093e\u0928" : e < 15 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : e < 18 ? "\u092c\u0947\u0932\u0941\u0915\u093e" : e < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u0940"
                    },
                    calendar: {
                        sameDay: "[\u0906\u091c] LT",
                        nextDay: "[\u092d\u094b\u0932\u0940] LT",
                        nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",
                        lastDay: "[\u0939\u093f\u091c\u094b] LT",
                        lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s\u092e\u093e",
                        past: "%s \u0905\u0917\u093e\u0921\u0940",
                        s: "\u0915\u0947\u0939\u0940 \u0938\u092e\u092f",
                        m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",
                        mm: "%d \u092e\u093f\u0928\u0947\u091f",
                        h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",
                        hh: "%d \u0918\u0923\u094d\u091f\u093e",
                        d: "\u090f\u0915 \u0926\u093f\u0928",
                        dd: "%d \u0926\u093f\u0928",
                        M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
                        MM: "%d \u092e\u0939\u093f\u0928\u093e",
                        y: "\u090f\u0915 \u092c\u0930\u094d\u0937",
                        yy: "%d \u092c\u0930\u094d\u0937"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
                return e.defineLocale("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, i) {
                        return /-MMM-/.test(i) ? n[e.month()] : t[e.month()]
                    },
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "\xe9\xe9n minuut",
                        mm: "%d minuten",
                        h: "\xe9\xe9n uur",
                        hh: "%d uur",
                        d: "\xe9\xe9n dag",
                        dd: "%d dagen",
                        M: "\xe9\xe9n maand",
                        MM: "%d maanden",
                        y: "\xe9\xe9n jaar",
                        yy: "%d jaar"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("nn", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                    weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"),
                    weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[I dag klokka] LT",
                        nextDay: "[I morgon klokka] LT",
                        nextWeek: "dddd [klokka] LT",
                        lastDay: "[I g\xe5r klokka] LT",
                        lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "for %s sidan",
                        s: "nokre sekund",
                        m: "eit minutt",
                        mm: "%d minutt",
                        h: "ein time",
                        hh: "%d timar",
                        d: "ein dag",
                        dd: "%d dagar",
                        M: "ein m\xe5nad",
                        MM: "%d m\xe5nader",
                        y: "eit \xe5r",
                        yy: "%d \xe5r"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e) {
                    return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
                }

                function n(e, n, i) {
                    var a = e + " ";
                    switch (i) {
                        case "m":
                            return n ? "minuta" : "minut\u0119";
                        case "mm":
                            return a + (t(e) ? "minuty" : "minut");
                        case "h":
                            return n ? "godzina" : "godzin\u0119";
                        case "hh":
                            return a + (t(e) ? "godziny" : "godzin");
                        case "MM":
                            return a + (t(e) ? "miesi\u0105ce" : "miesi\u0119cy");
                        case "yy":
                            return a + (t(e) ? "lata" : "lat")
                    }
                }
                var i = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
                    a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");
                return e.defineLocale("pl", {
                    months: function(e, t) {
                        return /D MMMM/.test(t) ? a[e.month()] : i[e.month()]
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
                    weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
                    weekdaysShort: "nie_pon_wt_\u015br_czw_pt_sb".split("_"),
                    weekdaysMin: "N_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Dzi\u015b o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: "[W] dddd [o] LT",
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                                case 3:
                                    return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                                case 6:
                                    return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                                default:
                                    return "[W zesz\u0142y] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: "1 dzie\u0144",
                        dd: "%d dni",
                        M: "miesi\u0105c",
                        MM: n,
                        y: "rok",
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("pt-br", {
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),
                    weekdaysMin: "dom_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1b".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [\xe0s] LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] LT"
                    },
                    calendar: {
                        sameDay: "[Hoje \xe0s] LT",
                        nextDay: "[Amanh\xe3 \xe0s] LT",
                        nextWeek: "dddd [\xe0s] LT",
                        lastDay: "[Ontem \xe0s] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "%s atr\xe1s",
                        s: "segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    ordinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba"
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("pt", {
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),
                    weekdaysMin: "dom_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1b".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hoje \xe0s] LT",
                        nextDay: "[Amanh\xe3 \xe0s] LT",
                        nextWeek: "dddd [\xe0s] LT",
                        lastDay: "[Ontem \xe0s] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "h\xe1 %s",
                        s: "segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    ordinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = {
                            mm: "minute",
                            hh: "ore",
                            dd: "zile",
                            MM: "luni",
                            yy: "ani"
                        },
                        a = " ";
                    return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + i[n]
                }
                return e.defineLocale("ro", {
                    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                    monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                    weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[azi la] LT",
                        nextDay: "[m\xe2ine la] LT",
                        nextWeek: "dddd [la] LT",
                        lastDay: "[ieri la] LT",
                        lastWeek: "[fosta] dddd [la] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "%s \xeen urm\u0103",
                        s: "c\xe2teva secunde",
                        m: "un minut",
                        mm: t,
                        h: "o or\u0103",
                        hh: t,
                        d: "o zi",
                        dd: t,
                        M: "o lun\u0103",
                        MM: t,
                        y: "un an",
                        yy: t
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t) {
                    var n = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }

                function n(e, n, i) {
                    var a = {
                        mm: n ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
                        hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
                        dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
                        MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                        yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"
                    };
                    return "m" === i ? n ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + t(a[i], +e)
                }

                function i(e, t) {
                    return {
                        nominative: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
                        accusative: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_")
                    }[/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative"][e.month()]
                }

                function a(e, t) {
                    return {
                        nominative: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
                        accusative: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_")
                    }[/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative"][e.month()]
                }

                function r(e, t) {
                    return {
                        nominative: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
                        accusative: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_")
                    }[/\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/.test(t) ? "accusative" : "nominative"][e.day()]
                }
                return e.defineLocale("ru", {
                    months: i,
                    monthsShort: a,
                    weekdays: r,
                    weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    monthsParse: [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439|\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i],
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0433.",
                        LLL: "D MMMM YYYY \u0433., LT",
                        LLLL: "dddd, D MMMM YYYY \u0433., LT"
                    },
                    calendar: {
                        sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432] LT",
                        nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",
                        lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
                        nextWeek: function() {
                            return 2 === this.day() ? "[\u0412\u043e] dddd [\u0432] LT" : "[\u0412] dddd [\u0432] LT"
                        },
                        lastWeek: function(e) {
                            if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd [\u0432] LT" : "[\u0412] dddd [\u0432] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd [\u0432] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd [\u0432] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0447\u0435\u0440\u0435\u0437 %s",
                        past: "%s \u043d\u0430\u0437\u0430\u0434",
                        s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
                        m: n,
                        mm: n,
                        h: "\u0447\u0430\u0441",
                        hh: n,
                        d: "\u0434\u0435\u043d\u044c",
                        dd: n,
                        M: "\u043c\u0435\u0441\u044f\u0446",
                        MM: n,
                        y: "\u0433\u043e\u0434",
                        yy: n
                    },
                    meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
                    isPM: function(e) {
                        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u043d\u043e\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430"
                    },
                    ordinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return e + "-\u0439";
                            case "D":
                                return e + "-\u0433\u043e";
                            case "w":
                            case "W":
                                return e + "-\u044f";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e) {
                    return e > 1 && e < 5
                }

                function n(e, n, i, a) {
                    var r = e + " ";
                    switch (i) {
                        case "s":
                            return n || a ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                        case "m":
                            return n ? "min\xfata" : a ? "min\xfatu" : "min\xfatou";
                        case "mm":
                            return n || a ? r + (t(e) ? "min\xfaty" : "min\xfat") : r + "min\xfatami";
                        case "h":
                            return n ? "hodina" : a ? "hodinu" : "hodinou";
                        case "hh":
                            return n || a ? r + (t(e) ? "hodiny" : "hod\xedn") : r + "hodinami";
                        case "d":
                            return n || a ? "de\u0148" : "d\u0148om";
                        case "dd":
                            return n || a ? r + (t(e) ? "dni" : "dn\xed") : r + "d\u0148ami";
                        case "M":
                            return n || a ? "mesiac" : "mesiacom";
                        case "MM":
                            return n || a ? r + (t(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                        case "y":
                            return n || a ? "rok" : "rokom";
                        case "yy":
                            return n || a ? r + (t(e) ? "roky" : "rokov") : r + "rokmi"
                    }
                }
                var i = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
                    a = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");
                return e.defineLocale("sk", {
                    months: i,
                    monthsShort: a,
                    monthsParse: function(e, t) {
                        var n, i = [];
                        for (n = 0; n < 12; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                        return i
                    }(i, a),
                    weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nede\u013eu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo \u0161tvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[v\u010dera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minul\xfa nede\u013eu o] LT";
                                case 1:
                                case 2:
                                    return "[minul\xfd] dddd [o] LT";
                                case 3:
                                    return "[minul\xfa stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [o] LT";
                                case 6:
                                    return "[minul\xfa sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t, n) {
                    var i = e + " ";
                    switch (n) {
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return i += 1 === e ? "minuta" : 2 === e ? "minuti" : 3 === e || 4 === e ? "minute" : "minut";
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return i += 1 === e ? "ura" : 2 === e ? "uri" : 3 === e || 4 === e ? "ure" : "ur";
                        case "dd":
                            return i += 1 === e ? "dan" : "dni";
                        case "MM":
                            return i += 1 === e ? "mesec" : 2 === e ? "meseca" : 3 === e || 4 === e ? "mesece" : "mesecev";
                        case "yy":
                            return i += 1 === e ? "leto" : 2 === e ? "leti" : 3 === e || 4 === e ? "leta" : "let"
                    }
                }
                return e.defineLocale("sl", {
                    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
                    weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
                    weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danes ob] LT",
                        nextDay: "[jutri ob] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v] [nedeljo] [ob] LT";
                                case 3:
                                    return "[v] [sredo] [ob] LT";
                                case 6:
                                    return "[v] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[v] dddd [ob] LT"
                            }
                        },
                        lastDay: "[v\u010deraj ob] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[prej\u0161nja] dddd [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prej\u0161nji] dddd [ob] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u010dez %s",
                        past: "%s nazaj",
                        s: "nekaj sekund",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "en dan",
                        dd: t,
                        M: "en mesec",
                        MM: t,
                        y: "eno leto",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("sq", {
                    months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),
                    monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),
                    weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),
                    weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),
                    weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"),
                    meridiemParse: /PD|MD/,
                    isPM: function(e) {
                        return "M" === e.charAt(0)
                    },
                    meridiem: function(e) {
                        return e < 12 ? "PD" : "MD"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Sot n\xeb] LT",
                        nextDay: "[Nes\xebr n\xeb] LT",
                        nextWeek: "dddd [n\xeb] LT",
                        lastDay: "[Dje n\xeb] LT",
                        lastWeek: "dddd [e kaluar n\xeb] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "n\xeb %s",
                        past: "%s m\xeb par\xeb",
                        s: "disa sekonda",
                        m: "nj\xeb minut\xeb",
                        mm: "%d minuta",
                        h: "nj\xeb or\xeb",
                        hh: "%d or\xeb",
                        d: "nj\xeb dit\xeb",
                        dd: "%d dit\xeb",
                        M: "nj\xeb muaj",
                        MM: "%d muaj",
                        y: "nj\xeb vit",
                        yy: "%d vite"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                    words: {
                        m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],
                        mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"],
                        h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],
                        hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"],
                        dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"],
                        MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"],
                        yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, n, i) {
                        var a = t.words[i];
                        return 1 === i.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
                    }
                };
                return e.defineLocale("sr-cyrl", {
                    months: ["\u0458\u0430\u043d\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440\u0438\u043b", "\u043c\u0430\u0458", "\u0458\u0443\u043d", "\u0458\u0443\u043b", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u043e\u043a\u0442\u043e\u0431\u0430\u0440", "\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440"],
                    monthsShort: ["\u0458\u0430\u043d.", "\u0444\u0435\u0431.", "\u043c\u0430\u0440.", "\u0430\u043f\u0440.", "\u043c\u0430\u0458", "\u0458\u0443\u043d", "\u0458\u0443\u043b", "\u0430\u0432\u0433.", "\u0441\u0435\u043f.", "\u043e\u043a\u0442.", "\u043d\u043e\u0432.", "\u0434\u0435\u0446."],
                    weekdays: ["\u043d\u0435\u0434\u0435\u0459\u0430", "\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0443\u0442\u043e\u0440\u0430\u043a", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u043f\u0435\u0442\u0430\u043a", "\u0441\u0443\u0431\u043e\u0442\u0430"],
                    weekdaysShort: ["\u043d\u0435\u0434.", "\u043f\u043e\u043d.", "\u0443\u0442\u043e.", "\u0441\u0440\u0435.", "\u0447\u0435\u0442.", "\u043f\u0435\u0442.", "\u0441\u0443\u0431."],
                    weekdaysMin: ["\u043d\u0435", "\u043f\u043e", "\u0443\u0442", "\u0441\u0440", "\u0447\u0435", "\u043f\u0435", "\u0441\u0443"],
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",
                        nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                                case 3:
                                    return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                                case 6:
                                    return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0443] dddd [\u0443] LT"
                            }
                        },
                        lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
                        lastWeek: function() {
                            return ["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0437\u0430 %s",
                        past: "\u043f\u0440\u0435 %s",
                        s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "\u0434\u0430\u043d",
                        dd: t.translate,
                        M: "\u043c\u0435\u0441\u0435\u0446",
                        MM: t.translate,
                        y: "\u0433\u043e\u0434\u0438\u043d\u0443",
                        yy: t.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                    words: {
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, n, i) {
                        var a = t.words[i];
                        return 1 === i.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
                    }
                };
                return e.defineLocale("sr", {
                    months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
                    monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
                    weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "\u010detvrtak", "petak", "subota"],
                    weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "\u010det.", "pet.", "sub."],
                    weekdaysMin: ["ne", "po", "ut", "sr", "\u010de", "pe", "su"],
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[ju\u010de u] LT",
                        lastWeek: function() {
                            return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("sv", {
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
                    weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
                    weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Idag] LT",
                        nextDay: "[Imorgon] LT",
                        lastDay: "[Ig\xe5r] LT",
                        nextWeek: "dddd LT",
                        lastWeek: "[F\xf6rra] dddd[en] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "f\xf6r %s sedan",
                        s: "n\xe5gra sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en m\xe5nad",
                        MM: "%d m\xe5nader",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    },
                    ordinalParse: /\d{1,2}(e|a)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("ta", {
                    months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
                    monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
                    weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),
                    weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),
                    weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",
                        nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",
                        lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0b87\u0bb2\u0bcd",
                        past: "%s \u0bae\u0bc1\u0ba9\u0bcd",
                        s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
                        m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",
                        mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
                        h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
                        hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
                        d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",
                        dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",
                        M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",
                        MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
                        y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",
                        yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"
                    },
                    ordinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
                    ordinal: function(e) {
                        return e + "\u0bb5\u0ba4\u0bc1"
                    },
                    meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
                    meridiem: function(e) {
                        return e < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : e < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : e < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : e < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : e < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : e < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd"
                    },
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === t ? e < 2 ? e : e + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === t || "\u0b95\u0bbe\u0bb2\u0bc8" === t ? e : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === t && e >= 10 ? e : e + 12
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("th", {
                    months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),
                    monthsShort: "\u0e21\u0e01\u0e23\u0e32_\u0e01\u0e38\u0e21\u0e20\u0e32_\u0e21\u0e35\u0e19\u0e32_\u0e40\u0e21\u0e29\u0e32_\u0e1e\u0e24\u0e29\u0e20\u0e32_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32_\u0e01\u0e23\u0e01\u0e0e\u0e32_\u0e2a\u0e34\u0e07\u0e2b\u0e32_\u0e01\u0e31\u0e19\u0e22\u0e32_\u0e15\u0e38\u0e25\u0e32_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32_\u0e18\u0e31\u0e19\u0e27\u0e32".split("_"),
                    weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),
                    longDateFormat: {
                        LT: "H \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 m \u0e19\u0e32\u0e17\u0e35",
                        LTS: "LT s \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                        L: "YYYY/MM/DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 LT",
                        LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 LT"
                    },
                    meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
                    isPM: function(e) {
                        return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === e
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"
                    },
                    calendar: {
                        sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                        nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                        nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",
                        lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                        lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0e2d\u0e35\u0e01 %s",
                        past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
                        s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                        m: "1 \u0e19\u0e32\u0e17\u0e35",
                        mm: "%d \u0e19\u0e32\u0e17\u0e35",
                        h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        d: "1 \u0e27\u0e31\u0e19",
                        dd: "%d \u0e27\u0e31\u0e19",
                        M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        y: "1 \u0e1b\u0e35",
                        yy: "%d \u0e1b\u0e35"
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("tl-ph", {
                    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "MM/D/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY LT",
                        LLLL: "dddd, MMMM DD, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Ngayon sa] LT",
                        nextDay: "[Bukas sa] LT",
                        nextWeek: "dddd [sa] LT",
                        lastDay: "[Kahapon sa] LT",
                        lastWeek: "dddd [huling linggo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "sa loob ng %s",
                        past: "%s ang nakalipas",
                        s: "ilang segundo",
                        m: "isang minuto",
                        mm: "%d minuto",
                        h: "isang oras",
                        hh: "%d oras",
                        d: "isang araw",
                        dd: "%d araw",
                        M: "isang buwan",
                        MM: "%d buwan",
                        y: "isang taon",
                        yy: "%d taon"
                    },
                    ordinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                var t = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'\xfcnc\xfc",
                    4: "'\xfcnc\xfc",
                    100: "'\xfcnc\xfc",
                    6: "'nc\u0131",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'\u0131nc\u0131",
                    90: "'\u0131nc\u0131"
                };
                return e.defineLocale("tr", {
                    months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
                    monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[bug\xfcn saat] LT",
                        nextDay: "[yar\u0131n saat] LT",
                        nextWeek: "[haftaya] dddd [saat] LT",
                        lastDay: "[d\xfcn] LT",
                        lastWeek: "[ge\xe7en hafta] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \xf6nce",
                        s: "birka\xe7 saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir y\u0131l",
                        yy: "%d y\u0131l"
                    },
                    ordinalParse: /\d{1,2}'(inci|nci|\xfcnc\xfc|nc\u0131|uncu|\u0131nc\u0131)/,
                    ordinal: function(e) {
                        if (0 === e) return e + "'\u0131nc\u0131";
                        var n = e % 10,
                            i = e % 100 - n,
                            a = e >= 100 ? 100 : null;
                        return e + (t[n] || t[i] || t[a])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("tzm-latn", {
                    months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
                    monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
                    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
                    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
                    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[asdkh g] LT",
                        nextDay: "[aska g] LT",
                        nextWeek: "dddd [g] LT",
                        lastDay: "[assant g] LT",
                        lastWeek: "dddd [g] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dadkh s yan %s",
                        past: "yan %s",
                        s: "imik",
                        m: "minu\u1e0d",
                        mm: "%d minu\u1e0d",
                        h: "sa\u025ba",
                        hh: "%d tassa\u025bin",
                        d: "ass",
                        dd: "%d ossan",
                        M: "ayowr",
                        MM: "%d iyyirn",
                        y: "asgas",
                        yy: "%d isgasn"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("tzm", {
                    months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
                    monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
                    weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
                    weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
                    weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",
                        nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",
                        nextWeek: "dddd [\u2d34] LT",
                        lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",
                        lastWeek: "dddd [\u2d34] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",
                        past: "\u2d62\u2d30\u2d4f %s",
                        s: "\u2d49\u2d4e\u2d49\u2d3d",
                        m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a",
                        mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",
                        h: "\u2d59\u2d30\u2d44\u2d30",
                        hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",
                        d: "\u2d30\u2d59\u2d59",
                        dd: "%d o\u2d59\u2d59\u2d30\u2d4f",
                        M: "\u2d30\u2d62o\u2d53\u2d54",
                        MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",
                        y: "\u2d30\u2d59\u2d33\u2d30\u2d59",
                        yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                function t(e, t) {
                    var n = e.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }

                function n(e, n, i) {
                    var a = {
                        mm: "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
                        hh: "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
                        dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
                        MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
                        yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"
                    };
                    return "m" === i ? n ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === i ? n ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : e + " " + t(a[i], +e)
                }

                function i(e, t) {
                    return {
                        nominative: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_"),
                        accusative: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_")
                    }[/D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative"][e.month()]
                }

                function a(e, t) {
                    return {
                        nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                        accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
                        genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")
                    }[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()]
                }

                function r(e) {
                    return function() {
                        return e + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT"
                    }
                }
                return e.defineLocale("uk", {
                    months: i,
                    monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
                    weekdays: a,
                    weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0440.",
                        LLL: "D MMMM YYYY \u0440., LT",
                        LLLL: "dddd, D MMMM YYYY \u0440., LT"
                    },
                    calendar: {
                        sameDay: r("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),
                        nextDay: r("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
                        lastDay: r("[\u0412\u0447\u043e\u0440\u0430 "),
                        nextWeek: r("[\u0423] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return r("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return r("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0437\u0430 %s",
                        past: "%s \u0442\u043e\u043c\u0443",
                        s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
                        m: n,
                        mm: n,
                        h: "\u0433\u043e\u0434\u0438\u043d\u0443",
                        hh: n,
                        d: "\u0434\u0435\u043d\u044c",
                        dd: n,
                        M: "\u043c\u0456\u0441\u044f\u0446\u044c",
                        MM: n,
                        y: "\u0440\u0456\u043a",
                        yy: n
                    },
                    meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
                    isPM: function(e) {
                        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u043d\u043e\u0447\u0456" : e < 12 ? "\u0440\u0430\u043d\u043a\u0443" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430"
                    },
                    ordinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-\u0439";
                            case "D":
                                return e + "-\u0433\u043e";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("uz", {
                    months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
                    monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),
                    weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),
                    weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "D MMMM YYYY, dddd LT"
                    },
                    calendar: {
                        sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",
                        nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",
                        past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",
                        s: "\u0444\u0443\u0440\u0441\u0430\u0442",
                        m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",
                        mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430",
                        h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",
                        hh: "%d \u0441\u043e\u0430\u0442",
                        d: "\u0431\u0438\u0440 \u043a\u0443\u043d",
                        dd: "%d \u043a\u0443\u043d",
                        M: "\u0431\u0438\u0440 \u043e\u0439",
                        MM: "%d \u043e\u0439",
                        y: "\u0431\u0438\u0440 \u0439\u0438\u043b",
                        yy: "%d \u0439\u0438\u043b"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("vi", {
                    months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
                    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                    weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [n\u0103m] YYYY",
                        LLL: "D MMMM [n\u0103m] YYYY LT",
                        LLLL: "dddd, D MMMM [n\u0103m] YYYY LT",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY LT",
                        llll: "ddd, D MMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[H\xf4m nay l\xfac] LT",
                        nextDay: "[Ng\xe0y mai l\xfac] LT",
                        nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT",
                        lastDay: "[H\xf4m qua l\xfac] LT",
                        lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s t\u1edbi",
                        past: "%s tr\u01b0\u1edbc",
                        s: "v\xe0i gi\xe2y",
                        m: "m\u1ed9t ph\xfat",
                        mm: "%d ph\xfat",
                        h: "m\u1ed9t gi\u1edd",
                        hh: "%d gi\u1edd",
                        d: "m\u1ed9t ng\xe0y",
                        dd: "%d ng\xe0y",
                        M: "m\u1ed9t th\xe1ng",
                        MM: "%d th\xe1ng",
                        y: "m\u1ed9t n\u0103m",
                        yy: "%d n\u0103m"
                    },
                    ordinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("zh-cn", {
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    longDateFormat: {
                        LT: "Ah\u70b9mm",
                        LTS: "Ah\u70b9m\u5206s\u79d2",
                        L: "YYYY-MM-DD",
                        LL: "YYYY\u5e74MMMD\u65e5",
                        LLL: "YYYY\u5e74MMMD\u65e5LT",
                        LLLL: "YYYY\u5e74MMMD\u65e5ddddLT",
                        l: "YYYY-MM-DD",
                        ll: "YYYY\u5e74MMMD\u65e5",
                        lll: "YYYY\u5e74MMMD\u65e5LT",
                        llll: "YYYY\u5e74MMMD\u65e5ddddLT"
                    },
                    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return n < 600 ? "\u51cc\u6668" : n < 900 ? "\u65e9\u4e0a" : n < 1130 ? "\u4e0a\u5348" : n < 1230 ? "\u4e2d\u5348" : n < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    },
                    calendar: {
                        sameDay: function() {
                            return 0 === this.minutes() ? "[\u4eca\u5929]Ah[\u70b9\u6574]" : "[\u4eca\u5929]LT"
                        },
                        nextDay: function() {
                            return 0 === this.minutes() ? "[\u660e\u5929]Ah[\u70b9\u6574]" : "[\u660e\u5929]LT"
                        },
                        lastDay: function() {
                            return 0 === this.minutes() ? "[\u6628\u5929]Ah[\u70b9\u6574]" : "[\u6628\u5929]LT"
                        },
                        nextWeek: function() {
                            var t, n;
                            return t = e().startOf("week"), n = this.unix() - t.unix() >= 604800 ? "[\u4e0b]" : "[\u672c]", 0 === this.minutes() ? n + "dddAh\u70b9\u6574" : n + "dddAh\u70b9mm"
                        },
                        lastWeek: function() {
                            var t, n;
                            return t = e().startOf("week"), n = this.unix() < t.unix() ? "[\u4e0a]" : "[\u672c]", 0 === this.minutes() ? n + "dddAh\u70b9\u6574" : n + "dddAh\u70b9mm"
                        },
                        sameElse: "LL"
                    },
                    ordinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u5468";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s\u5185",
                        past: "%s\u524d",
                        s: "\u51e0\u79d2",
                        m: "1\u5206\u949f",
                        mm: "%d\u5206\u949f",
                        h: "1\u5c0f\u65f6",
                        hh: "%d\u5c0f\u65f6",
                        d: "1\u5929",
                        dd: "%d\u5929",
                        M: "1\u4e2a\u6708",
                        MM: "%d\u4e2a\u6708",
                        y: "1\u5e74",
                        yy: "%d\u5e74"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
            function(e) {
                e(we)
            }(function(e) {
                return e.defineLocale("zh-tw", {
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    longDateFormat: {
                        LT: "Ah\u9edemm",
                        LTS: "Ah\u9edem\u5206s\u79d2",
                        L: "YYYY\u5e74MMMD\u65e5",
                        LL: "YYYY\u5e74MMMD\u65e5",
                        LLL: "YYYY\u5e74MMMD\u65e5LT",
                        LLLL: "YYYY\u5e74MMMD\u65e5ddddLT",
                        l: "YYYY\u5e74MMMD\u65e5",
                        ll: "YYYY\u5e74MMMD\u65e5",
                        lll: "YYYY\u5e74MMMD\u65e5LT",
                        llll: "YYYY\u5e74MMMD\u65e5ddddLT"
                    },
                    meridiemParse: /\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e2d\u5348" === t ? e >= 11 ? e : e + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return n < 900 ? "\u65e9\u4e0a" : n < 1130 ? "\u4e0a\u5348" : n < 1230 ? "\u4e2d\u5348" : n < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    },
                    calendar: {
                        sameDay: "[\u4eca\u5929]LT",
                        nextDay: "[\u660e\u5929]LT",
                        nextWeek: "[\u4e0b]ddddLT",
                        lastDay: "[\u6628\u5929]LT",
                        lastWeek: "[\u4e0a]ddddLT",
                        sameElse: "L"
                    },
                    ordinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u9031";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s\u5167",
                        past: "%s\u524d",
                        s: "\u5e7e\u79d2",
                        m: "\u4e00\u5206\u9418",
                        mm: "%d\u5206\u9418",
                        h: "\u4e00\u5c0f\u6642",
                        hh: "%d\u5c0f\u6642",
                        d: "\u4e00\u5929",
                        dd: "%d\u5929",
                        M: "\u4e00\u500b\u6708",
                        MM: "%d\u500b\u6708",
                        y: "\u4e00\u5e74",
                        yy: "%d\u5e74"
                    }
                })
            }), we.locale("en"), He ? module.exports = we : "function" == typeof define && define.amd ? (define(function(e, t, n) {
                return n.config && n.config() && !0 === n.config().noGlobal && (Te.moment = be), we
            }), Me(!0)) : Me()
    }.call(this),
    function(e) {
        "use strict";
        if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
        else if ("object" == typeof exports) module.exports = e(require("jquery"), require("moment"));
        else {
            if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
            if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
            e(jQuery, moment)
        }
    }(function(e, t) {
        "use strict";
        if (!t) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
        var n = function(n, i) {
            var a, r, s, o, d, l, u, c = {},
                h = !0,
                p = !1,
                f = !1,
                m = 0,
                _ = [{
                    clsName: "days",
                    navFnc: "M",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "y",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "y",
                    navStep: 10
                }, {
                    clsName: "decades",
                    navFnc: "y",
                    navStep: 100
                }],
                g = ["days", "months", "years", "decades"],
                y = ["top", "bottom", "auto"],
                v = ["left", "right", "auto"],
                M = ["default", "top", "bottom"],
                w = {
                    up: 38,
                    38: "up",
                    down: 40,
                    40: "down",
                    left: 37,
                    37: "left",
                    right: 39,
                    39: "right",
                    tab: 9,
                    9: "tab",
                    escape: 27,
                    27: "escape",
                    enter: 13,
                    13: "enter",
                    pageUp: 33,
                    33: "pageUp",
                    pageDown: 34,
                    34: "pageDown",
                    shift: 16,
                    16: "shift",
                    control: 17,
                    17: "control",
                    space: 32,
                    32: "space",
                    t: 84,
                    84: "t",
                    "delete": 46,
                    46: "delete"
                },
                b = {},
                D = function() {
                    return void 0 !== t.tz && void 0 !== i.timeZone && null !== i.timeZone && "" !== i.timeZone
                },
                L = function(e) {
                    var n;
                    return n = void 0 === e || null === e ? t() : t.isDate(e) || t.isMoment(e) ? t(e) : D() ? t.tz(e, l, i.useStrict, i.timeZone) : t(e, l, i.useStrict), D() && n.tz(i.timeZone), n
                },
                T = function(e) {
                    if ("string" != typeof e || e.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                    switch (e) {
                        case "y":
                            return -1 !== d.indexOf("Y");
                        case "M":
                            return -1 !== d.indexOf("M");
                        case "d":
                            return -1 !== d.toLowerCase().indexOf("d");
                        case "h":
                        case "H":
                            return -1 !== d.toLowerCase().indexOf("h");
                        case "m":
                            return -1 !== d.indexOf("m");
                        case "s":
                            return -1 !== d.indexOf("s");
                        default:
                            return !1
                    }
                },
                k = function() {
                    return T("h") || T("m") || T("s")
                },
                Y = function() {
                    return T("y") || T("M") || T("d")
                },
                x = function() {
                    var t = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").addClass(i.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", i.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").addClass(i.icons.next)))),
                        n = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", i.calendarWeeks ? "8" : "7")));
                    return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]
                },
                S = function() {
                    var t = e("<tr>"),
                        n = e("<tr>"),
                        a = e("<tr>");
                    return T("h") && (t.append(e("<td>").append(e("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: i.tooltips.incrementHour
                    }).addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({
                        "data-time-component": "hours",
                        title: i.tooltips.pickHour
                    }).attr("data-action", "showHours"))), a.append(e("<td>").append(e("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: i.tooltips.decrementHour
                    }).addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(i.icons.down))))), T("m") && (T("h") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), a.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: i.tooltips.incrementMinute
                    }).addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({
                        "data-time-component": "minutes",
                        title: i.tooltips.pickMinute
                    }).attr("data-action", "showMinutes"))), a.append(e("<td>").append(e("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: i.tooltips.decrementMinute
                    }).addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(i.icons.down))))), T("s") && (T("m") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), a.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: i.tooltips.incrementSecond
                    }).addClass("btn").attr("data-action", "incrementSeconds").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({
                        "data-time-component": "seconds",
                        title: i.tooltips.pickSecond
                    }).attr("data-action", "showSeconds"))), a.append(e("<td>").append(e("<a>").attr({
                        href: "#",
                        tabindex: "-1",
                        title: i.tooltips.decrementSecond
                    }).addClass("btn").attr("data-action", "decrementSeconds").append(e("<span>").addClass(i.icons.down))))), o || (t.append(e("<td>").addClass("separator")), n.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({
                        "data-action": "togglePeriod",
                        tabindex: "-1",
                        title: i.tooltips.togglePeriod
                    }))), a.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, n, a]))
                },
                C = function() {
                    var t = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),
                        n = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),
                        i = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),
                        a = [S()];
                    return T("h") && a.push(t), T("m") && a.push(n), T("s") && a.push(i), a
                },
                E = function() {
                    var t = [];
                    return i.showTodayButton && t.push(e("<td>").append(e("<a>").attr({
                        "data-action": "today",
                        title: i.tooltips.today
                    }).append(e("<span>").addClass(i.icons.today)))), !i.sideBySide && Y() && k() && t.push(e("<td>").append(e("<a>").attr({
                        "data-action": "togglePicker",
                        title: i.tooltips.selectTime
                    }).append(e("<span>").addClass(i.icons.time)))), i.showClear && t.push(e("<td>").append(e("<a>").attr({
                        "data-action": "clear",
                        title: i.tooltips.clear
                    }).append(e("<span>").addClass(i.icons.clear)))), i.showClose && t.push(e("<td>").append(e("<a>").attr({
                        "data-action": "close",
                        title: i.tooltips.close
                    }).append(e("<span>").addClass(i.icons.close)))), e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
                },
                j = function() {
                    var t = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                        n = e("<div>").addClass("datepicker").append(x()),
                        a = e("<div>").addClass("timepicker").append(C()),
                        r = e("<ul>").addClass("list-unstyled"),
                        s = e("<li>").addClass("picker-switch" + (i.collapse ? " accordion-toggle" : "")).append(E());
                    return i.inline && t.removeClass("dropdown-menu"), o && t.addClass("usetwentyfour"), T("s") && !o && t.addClass("wider"), i.sideBySide && Y() && k() ? (t.addClass("timepicker-sbs"), "top" === i.toolbarPlacement && t.append(s), t.append(e("<div>").addClass("row").append(n.addClass("col-md-6")).append(a.addClass("col-md-6"))), "bottom" === i.toolbarPlacement && t.append(s), t) : ("top" === i.toolbarPlacement && r.append(s), Y() && r.append(e("<li>").addClass(i.collapse && k() ? "collapse in" : "").append(n)), "default" === i.toolbarPlacement && r.append(s),
                        k() && r.append(e("<li>").addClass(i.collapse && Y() ? "collapse" : "").append(a)), "bottom" === i.toolbarPlacement && r.append(s), t.append(r))
                },
                A = function() {
                    var t, a = {};
                    return t = n.is("input") || i.inline ? n.data() : n.find("input").data(), t.dateOptions && t.dateOptions instanceof Object && (a = e.extend(!0, a, t.dateOptions)), e.each(i, function(e) {
                        var n = "date" + e.charAt(0).toUpperCase() + e.slice(1);
                        void 0 !== t[n] && (a[e] = t[n])
                    }), a
                },
                $ = function() {
                    var t, a = (p || n).position(),
                        r = (p || n).offset(),
                        s = i.widgetPositioning.vertical,
                        o = i.widgetPositioning.horizontal;
                    if (i.widgetParent) t = i.widgetParent.append(f);
                    else if (n.is("input")) t = n.after(f).parent();
                    else {
                        if (i.inline) return void(t = n.append(f));
                        t = n, n.children().first().after(f)
                    }
                    if ("auto" === s && (s = r.top + 1.5 * f.height() >= e(window).height() + e(window).scrollTop() && f.height() + n.outerHeight() < r.top ? "top" : "bottom"), "auto" === o && (o = t.width() < r.left + f.outerWidth() / 2 && r.left + f.outerWidth() > e(window).width() ? "right" : "left"), "top" === s ? f.addClass("top").removeClass("bottom") : f.addClass("bottom").removeClass("top"), "right" === o ? f.addClass("pull-right") : f.removeClass("pull-right"), "static" === t.css("position") && (t = t.parents().filter(function() {
                            return "static" !== e(this).css("position")
                        }).first()), 0 === t.length) throw new Error("datetimepicker component should be placed within a non-static positioned container");
                    f.css({
                        top: "top" === s ? "auto" : a.top + n.outerHeight(),
                        bottom: "top" === s ? t.outerHeight() - (t === n ? 0 : a.top) : "auto",
                        left: "left" === o ? t === n ? 0 : a.left : "auto",
                        right: "left" === o ? "auto" : t.outerWidth() - n.outerWidth() - (t === n ? 0 : a.left)
                    })
                },
                O = function(e) {
                    "dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || n.trigger(e)
                },
                N = function(e) {
                    "y" === e && (e = "YYYY"), O({
                        type: "dp.update",
                        change: e,
                        viewDate: r.clone()
                    })
                },
                H = function(e) {
                    f && (e && (u = Math.max(m, Math.min(3, u + e))), f.find(".datepicker > div").hide().filter(".datepicker-" + _[u].clsName).show())
                },
                F = function() {
                    var t = e("<tr>"),
                        n = r.clone().startOf("w").startOf("d");
                    for (!0 === i.calendarWeeks && t.append(e("<th>").addClass("cw").text("#")); n.isBefore(r.clone().endOf("w"));) t.append(e("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
                    f.find(".datepicker-days thead").append(t)
                },
                P = function(e) {
                    return !0 === i.disabledDates[e.format("YYYY-MM-DD")]
                },
                W = function(e) {
                    return !0 === i.enabledDates[e.format("YYYY-MM-DD")]
                },
                I = function(e) {
                    return !0 === i.disabledHours[e.format("H")]
                },
                U = function(e) {
                    return !0 === i.enabledHours[e.format("H")]
                },
                z = function(t, n) {
                    if (!t.isValid()) return !1;
                    if (i.disabledDates && "d" === n && P(t)) return !1;
                    if (i.enabledDates && "d" === n && !W(t)) return !1;
                    if (i.minDate && t.isBefore(i.minDate, n)) return !1;
                    if (i.maxDate && t.isAfter(i.maxDate, n)) return !1;
                    if (i.daysOfWeekDisabled && "d" === n && -1 !== i.daysOfWeekDisabled.indexOf(t.day())) return !1;
                    if (i.disabledHours && ("h" === n || "m" === n || "s" === n) && I(t)) return !1;
                    if (i.enabledHours && ("h" === n || "m" === n || "s" === n) && !U(t)) return !1;
                    if (i.disabledTimeIntervals && ("h" === n || "m" === n || "s" === n)) {
                        var a = !1;
                        if (e.each(i.disabledTimeIntervals, function() {
                                if (t.isBetween(this[0], this[1])) return a = !0, !1
                            }), a) return !1
                    }
                    return !0
                },
                q = function() {
                    for (var t = [], n = r.clone().startOf("y").startOf("d"); n.isSame(r, "y");) t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
                    f.find(".datepicker-months td").empty().append(t)
                },
                R = function() {
                    var t = f.find(".datepicker-months"),
                        n = t.find("th"),
                        s = t.find("tbody").find("span");
                    n.eq(0).find("span").attr("title", i.tooltips.prevYear), n.eq(1).attr("title", i.tooltips.selectYear), n.eq(2).find("span").attr("title", i.tooltips.nextYear), t.find(".disabled").removeClass("disabled"), z(r.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(r.year()), z(r.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), s.removeClass("active"), a.isSame(r, "y") && !h && s.eq(a.month()).addClass("active"), s.each(function(t) {
                        z(r.clone().month(t), "M") || e(this).addClass("disabled")
                    })
                },
                V = function() {
                    var e = f.find(".datepicker-years"),
                        t = e.find("th"),
                        n = r.clone().subtract(5, "y"),
                        s = r.clone().add(6, "y"),
                        o = "";
                    for (t.eq(0).find("span").attr("title", i.tooltips.prevDecade), t.eq(1).attr("title", i.tooltips.selectDecade), t.eq(2).find("span").attr("title", i.tooltips.nextDecade), e.find(".disabled").removeClass("disabled"), i.minDate && i.minDate.isAfter(n, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(n.year() + "-" + s.year()), i.maxDate && i.maxDate.isBefore(s, "y") && t.eq(2).addClass("disabled"); !n.isAfter(s, "y");) o += '<span data-action="selectYear" class="year' + (n.isSame(a, "y") && !h ? " active" : "") + (z(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
                    e.find("td").html(o)
                },
                B = function() {
                    var e, n = f.find(".datepicker-decades"),
                        s = n.find("th"),
                        o = t({
                            y: r.year() - r.year() % 100 - 1
                        }),
                        d = o.clone().add(100, "y"),
                        l = o.clone(),
                        u = !1,
                        c = !1,
                        h = "";
                    for (s.eq(0).find("span").attr("title", i.tooltips.prevCentury), s.eq(2).find("span").attr("title", i.tooltips.nextCentury), n.find(".disabled").removeClass("disabled"), (o.isSame(t({
                            y: 1900
                        })) || i.minDate && i.minDate.isAfter(o, "y")) && s.eq(0).addClass("disabled"), s.eq(1).text(o.year() + "-" + d.year()), (o.isSame(t({
                            y: 2e3
                        })) || i.maxDate && i.maxDate.isBefore(d, "y")) && s.eq(2).addClass("disabled"); !o.isAfter(d, "y");) e = o.year() + 12, u = i.minDate && i.minDate.isAfter(o, "y") && i.minDate.year() <= e, c = i.maxDate && i.maxDate.isAfter(o, "y") && i.maxDate.year() <= e, h += '<span data-action="selectDecade" class="decade' + (a.isAfter(o) && a.year() <= e ? " active" : "") + (z(o, "y") || u || c ? "" : " disabled") + '" data-selection="' + (o.year() + 6) + '">' + (o.year() + 1) + " - " + (o.year() + 12) + "</span>", o.add(12, "y");
                    h += "<span></span><span></span><span></span>", n.find("td").html(h), s.eq(1).text(l.year() + 1 + "-" + o.year())
                },
                G = function() {
                    var t, n, s, o = f.find(".datepicker-days"),
                        d = o.find("th"),
                        l = [],
                        u = [];
                    if (Y()) {
                        for (d.eq(0).find("span").attr("title", i.tooltips.prevMonth), d.eq(1).attr("title", i.tooltips.selectMonth), d.eq(2).find("span").attr("title", i.tooltips.nextMonth), o.find(".disabled").removeClass("disabled"), d.eq(1).text(r.format(i.dayViewHeaderFormat)), z(r.clone().subtract(1, "M"), "M") || d.eq(0).addClass("disabled"), z(r.clone().add(1, "M"), "M") || d.eq(2).addClass("disabled"), t = r.clone().startOf("M").startOf("w").startOf("d"), s = 0; s < 42; s++) 0 === t.weekday() && (n = e("<tr>"), i.calendarWeeks && n.append('<td class="cw">' + t.week() + "</td>"), l.push(n)), u = ["day"], t.isBefore(r, "M") && u.push("old"), t.isAfter(r, "M") && u.push("new"), t.isSame(a, "d") && !h && u.push("active"), z(t, "d") || u.push("disabled"), t.isSame(L(), "d") && u.push("today"), 0 !== t.day() && 6 !== t.day() || u.push("weekend"), O({
                            type: "dp.classify",
                            date: t,
                            classNames: u
                        }), n.append('<td data-action="selectDay" data-day="' + t.format("L") + '" class="' + u.join(" ") + '">' + t.date() + "</td>"), t.add(1, "d");
                        o.find("tbody").empty().append(l), R(), V(), B()
                    }
                },
                J = function() {
                    var t = f.find(".timepicker-hours table"),
                        n = r.clone().startOf("d"),
                        i = [],
                        a = e("<tr>");
                    for (r.hour() > 11 && !o && n.hour(12); n.isSame(r, "d") && (o || r.hour() < 12 && n.hour() < 12 || r.hour() > 11);) n.hour() % 4 == 0 && (a = e("<tr>"), i.push(a)), a.append('<td data-action="selectHour" class="hour' + (z(n, "h") ? "" : " disabled") + '">' + n.format(o ? "HH" : "hh") + "</td>"), n.add(1, "h");
                    t.empty().append(i)
                },
                K = function() {
                    for (var t = f.find(".timepicker-minutes table"), n = r.clone().startOf("h"), a = [], s = e("<tr>"), o = 1 === i.stepping ? 5 : i.stepping; r.isSame(n, "h");) n.minute() % (4 * o) == 0 && (s = e("<tr>"), a.push(s)), s.append('<td data-action="selectMinute" class="minute' + (z(n, "m") ? "" : " disabled") + '">' + n.format("mm") + "</td>"), n.add(o, "m");
                    t.empty().append(a)
                },
                X = function() {
                    for (var t = f.find(".timepicker-seconds table"), n = r.clone().startOf("m"), i = [], a = e("<tr>"); r.isSame(n, "m");) n.second() % 20 == 0 && (a = e("<tr>"), i.push(a)), a.append('<td data-action="selectSecond" class="second' + (z(n, "s") ? "" : " disabled") + '">' + n.format("ss") + "</td>"), n.add(5, "s");
                    t.empty().append(i)
                },
                Z = function() {
                    var e, t, n = f.find(".timepicker span[data-time-component]");
                    o || (e = f.find(".timepicker [data-action=togglePeriod]"), t = a.clone().add(a.hours() >= 12 ? -12 : 12, "h"), e.text(a.format("A")), z(t, "h") ? e.removeClass("disabled") : e.addClass("disabled")), n.filter("[data-time-component=hours]").text(a.format(o ? "HH" : "hh")), n.filter("[data-time-component=minutes]").text(a.format("mm")), n.filter("[data-time-component=seconds]").text(a.format("ss")), J(), K(), X()
                },
                Q = function() {
                    f && (G(), Z())
                },
                ee = function(e) {
                    var t = h ? null : a;
                    if (!e) return h = !0, s.val(""), n.data("date", ""), O({
                        type: "dp.change",
                        date: !1,
                        oldDate: t
                    }), void Q();
                    if (e = e.clone().locale(i.locale), D() && e.tz(i.timeZone), 1 !== i.stepping)
                        for (e.minutes(Math.round(e.minutes() / i.stepping) * i.stepping).seconds(0); i.minDate && e.isBefore(i.minDate);) e.add(i.stepping, "minutes");
                    z(e) ? (a = e, r = a.clone(), s.val(a.format(d)), n.data("date", a.format(d)), h = !1, Q(), O({
                        type: "dp.change",
                        date: a.clone(),
                        oldDate: t
                    })) : (i.keepInvalid ? O({
                        type: "dp.change",
                        date: e,
                        oldDate: t
                    }) : s.val(h ? "" : a.format(d)), O({
                        type: "dp.error",
                        date: e,
                        oldDate: t
                    }))
                },
                te = function() {
                    var t = !1;
                    return f ? (f.find(".collapse").each(function() {
                        var n = e(this).data("collapse");
                        return !n || !n.transitioning || (t = !0, !1)
                    }), t ? c : (p && p.hasClass("btn") && p.toggleClass("active"), f.hide(), e(window).off("resize", $), f.off("click", "[data-action]"), f.off("mousedown", !1), f.remove(), f = !1, O({
                        type: "dp.hide",
                        date: a.clone()
                    }), s.blur(), r = a.clone(), c)) : c
                },
                ne = function() {
                    ee(null)
                },
                ie = function(e) {
                    return void 0 === i.parseInputDate ? (!t.isMoment(e) || e instanceof Date) && (e = L(e)) : e = i.parseInputDate(e), e
                },
                ae = {
                    next: function() {
                        var e = _[u].navFnc;
                        r.add(_[u].navStep, e), G(), N(e)
                    },
                    previous: function() {
                        var e = _[u].navFnc;
                        r.subtract(_[u].navStep, e), G(), N(e)
                    },
                    pickerSwitch: function() {
                        H(1)
                    },
                    selectMonth: function(t) {
                        var n = e(t.target).closest("tbody").find("span").index(e(t.target));
                        r.month(n), u === m ? (ee(a.clone().year(r.year()).month(r.month())), i.inline || te()) : (H(-1), G()), N("M")
                    },
                    selectYear: function(t) {
                        var n = parseInt(e(t.target).text(), 10) || 0;
                        r.year(n), u === m ? (ee(a.clone().year(r.year())), i.inline || te()) : (H(-1), G()), N("YYYY")
                    },
                    selectDecade: function(t) {
                        var n = parseInt(e(t.target).data("selection"), 10) || 0;
                        r.year(n), u === m ? (ee(a.clone().year(r.year())), i.inline || te()) : (H(-1), G()), N("YYYY")
                    },
                    selectDay: function(t) {
                        var n = r.clone();
                        e(t.target).is(".old") && n.subtract(1, "M"), e(t.target).is(".new") && n.add(1, "M"), ee(n.date(parseInt(e(t.target).text(), 10))), k() || i.keepOpen || i.inline || te()
                    },
                    incrementHours: function() {
                        var e = a.clone().add(1, "h");
                        z(e, "h") && ee(e)
                    },
                    incrementMinutes: function() {
                        var e = a.clone().add(i.stepping, "m");
                        z(e, "m") && ee(e)
                    },
                    incrementSeconds: function() {
                        var e = a.clone().add(1, "s");
                        z(e, "s") && ee(e)
                    },
                    decrementHours: function() {
                        var e = a.clone().subtract(1, "h");
                        z(e, "h") && ee(e)
                    },
                    decrementMinutes: function() {
                        var e = a.clone().subtract(i.stepping, "m");
                        z(e, "m") && ee(e)
                    },
                    decrementSeconds: function() {
                        var e = a.clone().subtract(1, "s");
                        z(e, "s") && ee(e)
                    },
                    togglePeriod: function() {
                        ee(a.clone().add(a.hours() >= 12 ? -12 : 12, "h"))
                    },
                    togglePicker: function(t) {
                        var n, a = e(t.target),
                            r = a.closest("ul"),
                            s = r.find(".in"),
                            o = r.find(".collapse:not(.in)");
                        if (s && s.length) {
                            if ((n = s.data("collapse")) && n.transitioning) return;
                            s.collapse ? (s.collapse("hide"), o.collapse("show")) : (s.removeClass("in"), o.addClass("in")), a.is("span") ? a.toggleClass(i.icons.time + " " + i.icons.date) : a.find("span").toggleClass(i.icons.time + " " + i.icons.date)
                        }
                    },
                    showPicker: function() {
                        f.find(".timepicker > div:not(.timepicker-picker)").hide(), f.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function() {
                        f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function() {
                        f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-minutes").show()
                    },
                    showSeconds: function() {
                        f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-seconds").show()
                    },
                    selectHour: function(t) {
                        var n = parseInt(e(t.target).text(), 10);
                        o || (a.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), ee(a.clone().hours(n)), ae.showPicker.call(c)
                    },
                    selectMinute: function(t) {
                        ee(a.clone().minutes(parseInt(e(t.target).text(), 10))), ae.showPicker.call(c)
                    },
                    selectSecond: function(t) {
                        ee(a.clone().seconds(parseInt(e(t.target).text(), 10))), ae.showPicker.call(c)
                    },
                    clear: ne,
                    today: function() {
                        var e = L();
                        z(e, "d") && ee(e)
                    },
                    close: te
                },
                re = function(t) {
                    return !e(t.currentTarget).is(".disabled") && (ae[e(t.currentTarget).data("action")].apply(c, arguments), !1)
                },
                se = function() {
                    var t, n = {
                        year: function(e) {
                            return e.month(0).date(1).hours(0).seconds(0).minutes(0)
                        },
                        month: function(e) {
                            return e.date(1).hours(0).seconds(0).minutes(0)
                        },
                        day: function(e) {
                            return e.hours(0).seconds(0).minutes(0)
                        },
                        hour: function(e) {
                            return e.seconds(0).minutes(0)
                        },
                        minute: function(e) {
                            return e.seconds(0)
                        }
                    };
                    return s.prop("disabled") || !i.ignoreReadonly && s.prop("readonly") || f ? c : (void 0 !== s.val() && 0 !== s.val().trim().length ? ee(ie(s.val().trim())) : h && i.useCurrent && (i.inline || s.is("input") && 0 === s.val().trim().length) && (t = L(), "string" == typeof i.useCurrent && (t = n[i.useCurrent](t)), ee(t)), f = j(), F(), q(), f.find(".timepicker-hours").hide(), f.find(".timepicker-minutes").hide(), f.find(".timepicker-seconds").hide(), Q(), H(), e(window).on("resize", $), f.on("click", "[data-action]", re), f.on("mousedown", !1), p && p.hasClass("btn") && p.toggleClass("active"), $(), f.show(), i.focusOnShow && !s.is(":focus") && s.focus(), O({
                        type: "dp.show"
                    }), c)
                },
                oe = function() {
                    return f ? te() : se()
                },
                de = function(e) {
                    var t, n, a, r, s = null,
                        o = [],
                        d = {},
                        l = e.which,
                        u = "p";
                    b[l] = u;
                    for (t in b) b.hasOwnProperty(t) && b[t] === u && (o.push(t), parseInt(t, 10) !== l && (d[t] = !0));
                    for (t in i.keyBinds)
                        if (i.keyBinds.hasOwnProperty(t) && "function" == typeof i.keyBinds[t] && (a = t.split(" "), a.length === o.length && w[l] === a[a.length - 1])) {
                            for (r = !0, n = a.length - 2; n >= 0; n--)
                                if (!(w[a[n]] in d)) {
                                    r = !1;
                                    break
                                }
                            if (r) {
                                s = i.keyBinds[t];
                                break
                            }
                        }
                    s && (s.call(c, f), e.stopPropagation(), e.preventDefault())
                },
                le = function(e) {
                    b[e.which] = "r", e.stopPropagation(), e.preventDefault()
                },
                ue = function(t) {
                    var n = e(t.target).val().trim(),
                        i = n ? ie(n) : null;
                    return ee(i), t.stopImmediatePropagation(), !1
                },
                ce = function() {
                    s.on({
                        change: ue,
                        blur: i.debug ? "" : te,
                        keydown: de,
                        keyup: le,
                        focus: i.allowInputToggle ? se : ""
                    }), n.is("input") ? s.on({
                        focus: se
                    }) : p && (p.on("click", oe), p.on("mousedown", !1))
                },
                he = function() {
                    s.off({
                        change: ue,
                        blur: blur,
                        keydown: de,
                        keyup: le,
                        focus: i.allowInputToggle ? te : ""
                    }), n.is("input") ? s.off({
                        focus: se
                    }) : p && (p.off("click", oe), p.off("mousedown", !1))
                },
                pe = function(t) {
                    var n = {};
                    return e.each(t, function() {
                        var e = ie(this);
                        e.isValid() && (n[e.format("YYYY-MM-DD")] = !0)
                    }), !!Object.keys(n).length && n
                },
                fe = function(t) {
                    var n = {};
                    return e.each(t, function() {
                        n[this] = !0
                    }), !!Object.keys(n).length && n
                },
                me = function() {
                    var e = i.format || "L LT";
                    d = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                        return (a.localeData().longDateFormat(e) || e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
                            return a.localeData().longDateFormat(e) || e
                        })
                    }), l = i.extraFormats ? i.extraFormats.slice() : [], l.indexOf(e) < 0 && l.indexOf(d) < 0 && l.push(d), o = d.toLowerCase().indexOf("a") < 1 && d.replace(/\[.*?\]/g, "").indexOf("h") < 1, T("y") && (m = 2), T("M") && (m = 1), T("d") && (m = 0), u = Math.max(m, u), h || ee(a)
                };
            if (c.destroy = function() {
                    te(), he(), n.removeData("DateTimePicker"), n.removeData("date")
                }, c.toggle = oe, c.show = se, c.hide = te, c.disable = function() {
                    return te(), p && p.hasClass("btn") && p.addClass("disabled"), s.prop("disabled", !0), c
                }, c.enable = function() {
                    return p && p.hasClass("btn") && p.removeClass("disabled"), s.prop("disabled", !1), c
                }, c.ignoreReadonly = function(e) {
                    if (0 === arguments.length) return i.ignoreReadonly;
                    if ("boolean" != typeof e) throw new TypeError("ignoreReadonly () expects a boolean parameter");
                    return i.ignoreReadonly = e, c
                }, c.options = function(t) {
                    if (0 === arguments.length) return e.extend(!0, {}, i);
                    if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object");
                    return e.extend(!0, i, t), e.each(i, function(e, t) {
                        if (void 0 === c[e]) throw new TypeError("option " + e + " is not recognized!");
                        c[e](t)
                    }), c
                }, c.date = function(e) {
                    if (0 === arguments.length) return h ? null : a.clone();
                    if (!(null === e || "string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                    return ee(null === e ? null : ie(e)), c
                }, c.format = function(e) {
                    if (0 === arguments.length) return i.format;
                    if ("string" != typeof e && ("boolean" != typeof e || !1 !== e)) throw new TypeError("format() expects a string or boolean:false parameter " + e);
                    return i.format = e, d && me(), c
                }, c.timeZone = function(e) {
                    if (0 === arguments.length) return i.timeZone;
                    if ("string" != typeof e) throw new TypeError("newZone() expects a string parameter");
                    return i.timeZone = e, c
                }, c.dayViewHeaderFormat = function(e) {
                    if (0 === arguments.length) return i.dayViewHeaderFormat;
                    if ("string" != typeof e) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                    return i.dayViewHeaderFormat = e, c
                }, c.extraFormats = function(e) {
                    if (0 === arguments.length) return i.extraFormats;
                    if (!1 !== e && !(e instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                    return i.extraFormats = e, l && me(), c
                }, c.disabledDates = function(t) {
                    if (0 === arguments.length) return i.disabledDates ? e.extend({}, i.disabledDates) : i.disabledDates;
                    if (!t) return i.disabledDates = !1, Q(), c;
                    if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                    return i.disabledDates = pe(t), i.enabledDates = !1, Q(), c
                }, c.enabledDates = function(t) {
                    if (0 === arguments.length) return i.enabledDates ? e.extend({}, i.enabledDates) : i.enabledDates;
                    if (!t) return i.enabledDates = !1, Q(), c;
                    if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                    return i.enabledDates = pe(t), i.disabledDates = !1, Q(), c
                }, c.daysOfWeekDisabled = function(e) {
                    if (0 === arguments.length) return i.daysOfWeekDisabled.splice(0);
                    if ("boolean" == typeof e && !e) return i.daysOfWeekDisabled = !1, Q(), c;
                    if (!(e instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                    if (i.daysOfWeekDisabled = e.reduce(function(e, t) {
                            return t = parseInt(t, 10), t > 6 || t < 0 || isNaN(t) ? e : (-1 === e.indexOf(t) && e.push(t), e)
                        }, []).sort(), i.useCurrent && !i.keepInvalid) {
                        for (var t = 0; !z(a, "d");) {
                            if (a.add(1, "d"), 31 === t) throw "Tried 31 times to find a valid date";
                            t++
                        }
                        ee(a)
                    }
                    return Q(), c
                }, c.maxDate = function(e) {
                    if (0 === arguments.length) return i.maxDate ? i.maxDate.clone() : i.maxDate;
                    if ("boolean" == typeof e && !1 === e) return i.maxDate = !1, Q(), c;
                    "string" == typeof e && ("now" !== e && "moment" !== e || (e = L()));
                    var t = ie(e);
                    if (!t.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + e);
                    if (i.minDate && t.isBefore(i.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + t.format(d));
                    return i.maxDate = t, i.useCurrent && !i.keepInvalid && a.isAfter(e) && ee(i.maxDate), r.isAfter(t) && (r = t.clone().subtract(i.stepping, "m")), Q(), c
                }, c.minDate = function(e) {
                    if (0 === arguments.length) return i.minDate ? i.minDate.clone() : i.minDate;
                    if ("boolean" == typeof e && !1 === e) return i.minDate = !1, Q(), c;
                    "string" == typeof e && ("now" !== e && "moment" !== e || (e = L()));
                    var t = ie(e);
                    if (!t.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + e);
                    if (i.maxDate && t.isAfter(i.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + t.format(d));
                    return i.minDate = t, i.useCurrent && !i.keepInvalid && a.isBefore(e) && ee(i.minDate), r.isBefore(t) && (r = t.clone().add(i.stepping, "m")), Q(), c
                }, c.defaultDate = function(e) {
                    if (0 === arguments.length) return i.defaultDate ? i.defaultDate.clone() : i.defaultDate;
                    if (!e) return i.defaultDate = !1, c;
                    "string" == typeof e && (e = "now" === e || "moment" === e ? L() : L(e));
                    var t = ie(e);
                    if (!t.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + e);
                    if (!z(t)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                    return i.defaultDate = t, (i.defaultDate && i.inline || "" === s.val().trim()) && ee(i.defaultDate), c
                }, c.locale = function(e) {
                    if (0 === arguments.length) return i.locale;
                    if (!t.localeData(e)) throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
                    return i.locale = e, a.locale(i.locale), r.locale(i.locale), d && me(), f && (te(), se()), c
                }, c.stepping = function(e) {
                    return 0 === arguments.length ? i.stepping : (e = parseInt(e, 10), (isNaN(e) || e < 1) && (e = 1), i.stepping = e, c)
                }, c.useCurrent = function(e) {
                    var t = ["year", "month", "day", "hour", "minute"];
                    if (0 === arguments.length) return i.useCurrent;
                    if ("boolean" != typeof e && "string" != typeof e) throw new TypeError("useCurrent() expects a boolean or string parameter");
                    if ("string" == typeof e && -1 === t.indexOf(e.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + t.join(", "));
                    return i.useCurrent = e, c
                }, c.collapse = function(e) {
                    if (0 === arguments.length) return i.collapse;
                    if ("boolean" != typeof e) throw new TypeError("collapse() expects a boolean parameter");
                    return i.collapse === e ? c : (i.collapse = e, f && (te(), se()), c)
                }, c.icons = function(t) {
                    if (0 === arguments.length) return e.extend({}, i.icons);
                    if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                    return e.extend(i.icons, t), f && (te(), se()), c
                }, c.tooltips = function(t) {
                    if (0 === arguments.length) return e.extend({}, i.tooltips);
                    if (!(t instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
                    return e.extend(i.tooltips, t), f && (te(), se()), c
                }, c.useStrict = function(e) {
                    if (0 === arguments.length) return i.useStrict;
                    if ("boolean" != typeof e) throw new TypeError("useStrict() expects a boolean parameter");
                    return i.useStrict = e, c
                }, c.sideBySide = function(e) {
                    if (0 === arguments.length) return i.sideBySide;
                    if ("boolean" != typeof e) throw new TypeError("sideBySide() expects a boolean parameter");
                    return i.sideBySide = e, f && (te(), se()), c
                }, c.viewMode = function(e) {
                    if (0 === arguments.length) return i.viewMode;
                    if ("string" != typeof e) throw new TypeError("viewMode() expects a string parameter");
                    if (-1 === g.indexOf(e)) throw new TypeError("viewMode() parameter must be one of (" + g.join(", ") + ") value");
                    return i.viewMode = e, u = Math.max(g.indexOf(e), m), H(), c
                }, c.toolbarPlacement = function(e) {
                    if (0 === arguments.length) return i.toolbarPlacement;
                    if ("string" != typeof e) throw new TypeError("toolbarPlacement() expects a string parameter");
                    if (-1 === M.indexOf(e)) throw new TypeError("toolbarPlacement() parameter must be one of (" + M.join(", ") + ") value");
                    return i.toolbarPlacement = e, f && (te(), se()), c
                }, c.widgetPositioning = function(t) {
                    if (0 === arguments.length) return e.extend({}, i.widgetPositioning);
                    if ("[object Object]" !== {}.toString.call(t)) throw new TypeError("widgetPositioning() expects an object variable");
                    if (t.horizontal) {
                        if ("string" != typeof t.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                        if (t.horizontal = t.horizontal.toLowerCase(), -1 === v.indexOf(t.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + v.join(", ") + ")");
                        i.widgetPositioning.horizontal = t.horizontal
                    }
                    if (t.vertical) {
                        if ("string" != typeof t.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                        if (t.vertical = t.vertical.toLowerCase(), -1 === y.indexOf(t.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                        i.widgetPositioning.vertical = t.vertical
                    }
                    return Q(), c
                }, c.calendarWeeks = function(e) {
                    if (0 === arguments.length) return i.calendarWeeks;
                    if ("boolean" != typeof e) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                    return i.calendarWeeks = e, Q(), c
                }, c.showTodayButton = function(e) {
                    if (0 === arguments.length) return i.showTodayButton;
                    if ("boolean" != typeof e) throw new TypeError("showTodayButton() expects a boolean parameter");
                    return i.showTodayButton = e, f && (te(), se()), c
                }, c.showClear = function(e) {
                    if (0 === arguments.length) return i.showClear;
                    if ("boolean" != typeof e) throw new TypeError("showClear() expects a boolean parameter");
                    return i.showClear = e, f && (te(), se()), c
                }, c.widgetParent = function(t) {
                    if (0 === arguments.length) return i.widgetParent;
                    if ("string" == typeof t && (t = e(t)), null !== t && "string" != typeof t && !(t instanceof e)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                    return i.widgetParent = t, f && (te(), se()), c
                }, c.keepOpen = function(e) {
                    if (0 === arguments.length) return i.keepOpen;
                    if ("boolean" != typeof e) throw new TypeError("keepOpen() expects a boolean parameter");
                    return i.keepOpen = e, c
                }, c.focusOnShow = function(e) {
                    if (0 === arguments.length) return i.focusOnShow;
                    if ("boolean" != typeof e) throw new TypeError("focusOnShow() expects a boolean parameter");
                    return i.focusOnShow = e, c
                }, c.inline = function(e) {
                    if (0 === arguments.length) return i.inline;
                    if ("boolean" != typeof e) throw new TypeError("inline() expects a boolean parameter");
                    return i.inline = e, c
                }, c.clear = function() {
                    return ne(), c
                }, c.keyBinds = function(e) {
                    return 0 === arguments.length ? i.keyBinds : (i.keyBinds = e, c)
                }, c.getMoment = function(e) {
                    return L(e)
                }, c.debug = function(e) {
                    if ("boolean" != typeof e) throw new TypeError("debug() expects a boolean parameter");
                    return i.debug = e, c
                }, c.allowInputToggle = function(e) {
                    if (0 === arguments.length) return i.allowInputToggle;
                    if ("boolean" != typeof e) throw new TypeError("allowInputToggle() expects a boolean parameter");
                    return i.allowInputToggle = e, c
                }, c.showClose = function(e) {
                    if (0 === arguments.length) return i.showClose;
                    if ("boolean" != typeof e) throw new TypeError("showClose() expects a boolean parameter");
                    return i.showClose = e, c
                }, c.keepInvalid = function(e) {
                    if (0 === arguments.length) return i.keepInvalid;
                    if ("boolean" != typeof e) throw new TypeError("keepInvalid() expects a boolean parameter");
                    return i.keepInvalid = e, c
                }, c.datepickerInput = function(e) {
                    if (0 === arguments.length) return i.datepickerInput;
                    if ("string" != typeof e) throw new TypeError("datepickerInput() expects a string parameter");
                    return i.datepickerInput = e, c
                }, c.parseInputDate = function(e) {
                    if (0 === arguments.length) return i.parseInputDate;
                    if ("function" != typeof e) throw new TypeError("parseInputDate() sholud be as function");
                    return i.parseInputDate = e, c
                }, c.disabledTimeIntervals = function(t) {
                    if (0 === arguments.length) return i.disabledTimeIntervals ? e.extend({}, i.disabledTimeIntervals) : i.disabledTimeIntervals;
                    if (!t) return i.disabledTimeIntervals = !1, Q(), c;
                    if (!(t instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
                    return i.disabledTimeIntervals = t, Q(), c
                }, c.disabledHours = function(t) {
                    if (0 === arguments.length) return i.disabledHours ? e.extend({}, i.disabledHours) : i.disabledHours;
                    if (!t) return i.disabledHours = !1, Q(), c;
                    if (!(t instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                    if (i.disabledHours = fe(t), i.enabledHours = !1, i.useCurrent && !i.keepInvalid) {
                        for (var n = 0; !z(a, "h");) {
                            if (a.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                            n++
                        }
                        ee(a)
                    }
                    return Q(), c
                }, c.enabledHours = function(t) {
                    if (0 === arguments.length) return i.enabledHours ? e.extend({}, i.enabledHours) : i.enabledHours;
                    if (!t) return i.enabledHours = !1, Q(), c;
                    if (!(t instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                    if (i.enabledHours = fe(t), i.disabledHours = !1, i.useCurrent && !i.keepInvalid) {
                        for (var n = 0; !z(a, "h");) {
                            if (a.add(1, "h"), 24 === n) throw "Tried 24 times to find a valid date";
                            n++
                        }
                        ee(a)
                    }
                    return Q(), c
                }, c.viewDate = function(e) {
                    if (0 === arguments.length) return r.clone();
                    if (!e) return r = a.clone(), c;
                    if (!("string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
                    return r = ie(e), N(), c
                }, n.is("input")) s = n;
            else if (s = n.find(i.datepickerInput), 0 === s.length) s = n.find("input");
            else if (!s.is("input")) throw new Error('CSS class "' + i.datepickerInput + '" cannot be applied to non input element');
            if (n.hasClass("input-group") && (p = 0 === n.find(".datepickerbutton").length ? n.find(".input-group-addon") : n.find(".datepickerbutton")), !i.inline && !s.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
            return a = L(), r = a.clone(), e.extend(!0, i, A()), c.options(i), me(), ce(), s.prop("disabled") && c.disable(), s.is("input") && 0 !== s.val().trim().length ? ee(ie(s.val().trim())) : i.defaultDate && void 0 === s.attr("placeholder") && ee(i.defaultDate), i.inline && se(), c
        };
        return e.fn.datetimepicker = function(t) {
            t = t || {};
            var i, a = Array.prototype.slice.call(arguments, 1),
                r = !0,
                s = ["destroy", "hide", "show", "toggle"];
            if ("object" == typeof t) return this.each(function() {
                var i, a = e(this);
                a.data("DateTimePicker") || (i = e.extend(!0, {}, e.fn.datetimepicker.defaults, t), a.data("DateTimePicker", n(a, i)))
            });
            if ("string" == typeof t) return this.each(function() {
                var n = e(this),
                    s = n.data("DateTimePicker");
                if (!s) throw new Error('bootstrap-datetimepicker("' + t + '") method was called on an element that is not using DateTimePicker');
                i = s[t].apply(s, a), r = i === s
            }), r || e.inArray(t, s) > -1 ? this : i;
            throw new TypeError("Invalid arguments for DateTimePicker: " + t)
        }, e.fn.datetimepicker.defaults = {
            timeZone: "",
            format: !1,
            dayViewHeaderFormat: "MMMM YYYY",
            extraFormats: !1,
            stepping: 1,
            minDate: !1,
            maxDate: !1,
            useCurrent: !0,
            collapse: !0,
            locale: t.locale(),
            defaultDate: !1,
            disabledDates: !1,
            enabledDates: !1,
            icons: {
                time: "glyphicon glyphicon-time",
                date: "glyphicon glyphicon-calendar",
                up: "glyphicon glyphicon-chevron-up",
                down: "glyphicon glyphicon-chevron-down",
                previous: "glyphicon glyphicon-chevron-left",
                next: "glyphicon glyphicon-chevron-right",
                today: "glyphicon glyphicon-screenshot",
                clear: "glyphicon glyphicon-trash",
                close: "glyphicon glyphicon-remove"
            },
            tooltips: {
                today: "Go to today",
                clear: "Clear selection",
                close: "Close the picker",
                selectMonth: "Select Month",
                prevMonth: "Previous Month",
                nextMonth: "Next Month",
                selectYear: "Select Year",
                prevYear: "Previous Year",
                nextYear: "Next Year",
                selectDecade: "Select Decade",
                prevDecade: "Previous Decade",
                nextDecade: "Next Decade",
                prevCentury: "Previous Century",
                nextCentury: "Next Century",
                pickHour: "Pick Hour",
                incrementHour: "Increment Hour",
                decrementHour: "Decrement Hour",
                pickMinute: "Pick Minute",
                incrementMinute: "Increment Minute",
                decrementMinute: "Decrement Minute",
                pickSecond: "Pick Second",
                incrementSecond: "Increment Second",
                decrementSecond: "Decrement Second",
                togglePeriod: "Toggle Period",
                selectTime: "Select Time"
            },
            useStrict: !1,
            sideBySide: !1,
            daysOfWeekDisabled: !1,
            calendarWeeks: !1,
            viewMode: "days",
            toolbarPlacement: "default",
            showTodayButton: !1,
            showClear: !1,
            showClose: !1,
            widgetPositioning: {
                horizontal: "auto",
                vertical: "auto"
            },
            widgetParent: null,
            ignoreReadonly: !1,
            keepOpen: !1,
            focusOnShow: !0,
            inline: !1,
            keepInvalid: !1,
            datepickerInput: ".datepickerinput",
            keyBinds: {
                up: function(e) {
                    if (e) {
                        var t = this.date() || this.getMoment();
                        e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(7, "d")) : this.date(t.clone().add(this.stepping(), "m"))
                    }
                },
                down: function(e) {
                    if (!e) return void this.show();
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().add(7, "d")) : this.date(t.clone().subtract(this.stepping(), "m"))
                },
                "control up": function(e) {
                    if (e) {
                        var t = this.date() || this.getMoment();
                        e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(1, "y")) : this.date(t.clone().add(1, "h"))
                    }
                },
                "control down": function(e) {
                    if (e) {
                        var t = this.date() || this.getMoment();
                        e.find(".datepicker").is(":visible") ? this.date(t.clone().add(1, "y")) : this.date(t.clone().subtract(1, "h"))
                    }
                },
                left: function(e) {
                    if (e) {
                        var t = this.date() || this.getMoment();
                        e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "d"))
                    }
                },
                right: function(e) {
                    if (e) {
                        var t = this.date() || this.getMoment();
                        e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "d"))
                    }
                },
                pageUp: function(e) {
                    if (e) {
                        var t = this.date() || this.getMoment();
                        e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "M"))
                    }
                },
                pageDown: function(e) {
                    if (e) {
                        var t = this.date() || this.getMoment();
                        e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "M"))
                    }
                },
                enter: function() {
                    this.hide()
                },
                escape: function() {
                    this.hide()
                },
                "control space": function(e) {
                    e && e.find(".timepicker").is(":visible") && e.find('.btn[data-action="togglePeriod"]').click()
                },
                t: function() {
                    this.date(this.getMoment())
                },
                "delete": function() {
                    this.clear()
                }
            },
            debug: !1,
            allowInputToggle: !1,
            disabledTimeIntervals: !1,
            disabledHours: !1,
            enabledHours: !1,
            viewDate: !1
        }, e.fn.datetimepicker
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e, t) {
        function n() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function i() {
            var e = new Date;
            return n(e.getFullYear(), e.getMonth(), e.getDate())
        }

        function a(e, t) {
            return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
        }

        function r(n, i) {
            return function() {
                return i !== t && e.fn.datepicker.deprecated(i), this[n].apply(this, arguments)
            }
        }

        function s(e) {
            return e && !isNaN(e.getTime())
        }

        function o(t, n) {
            function i(e, t) {
                return t.toLowerCase()
            }
            var a, r = e(t).data(),
                s = {},
                o = new RegExp("^" + n.toLowerCase() + "([A-Z])");
            n = new RegExp("^" + n.toLowerCase());
            for (var d in r) n.test(d) && (a = d.replace(o, i), s[a] = r[d]);
            return s
        }

        function d(t) {
            var n = {};
            if (_[t] || (t = t.split("-")[0], _[t])) {
                var i = _[t];
                return e.each(m, function(e, t) {
                    t in i && (n[t] = i[t])
                }), n
            }
        }
        var l = function() {
                var t = {
                    get: function(e) {
                        return this.slice(e)[0]
                    },
                    contains: function(e) {
                        for (var t = e && e.valueOf(), n = 0, i = this.length; n < i; n++)
                            if (0 <= this[n].valueOf() - t && this[n].valueOf() - t < 864e5) return n;
                        return -1
                    },
                    remove: function(e) {
                        this.splice(e, 1)
                    },
                    replace: function(t) {
                        t && (e.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
                    },
                    clear: function() {
                        this.length = 0
                    },
                    copy: function() {
                        var e = new l;
                        return e.replace(this), e
                    }
                };
                return function() {
                    var n = [];
                    return n.push.apply(n, arguments), e.extend(n, t), n
                }
            }(),
            u = function(t, n) {
                e.data(t, "datepicker", this), this._process_options(n),
                    this.dates = new l, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = e(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = e(g.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(e, t) {
                        return Number(t) + 1
                    }), this._process_options({
                        startDate: this._o.startDate,
                        endDate: this._o.endDate,
                        daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                        daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                        datesDisabled: this.o.datesDisabled
                    }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show()
            };
        u.prototype = {
            constructor: u,
            _resolveViewName: function(t) {
                return e.each(g.viewModes, function(n, i) {
                    if (t === n || -1 !== e.inArray(t, i.names)) return t = n, !1
                }), t
            },
            _resolveDaysOfWeek: function(t) {
                return e.isArray(t) || (t = t.split(/[,\s]*/)), e.map(t, Number)
            },
            _check_template: function(n) {
                try {
                    if (n === t || "" === n) return !1;
                    if ((n.match(/[<>]/g) || []).length <= 0) return !0;
                    return e(n).length > 0
                } catch (e) {
                    return !1
                }
            },
            _process_options: function(t) {
                this._o = e.extend({}, this._o, t);
                var a = this.o = e.extend({}, this._o),
                    r = a.language;
                _[r] || (r = r.split("-")[0], _[r] || (r = f.language)), a.language = r, a.startView = this._resolveViewName(a.startView), a.minViewMode = this._resolveViewName(a.minViewMode), a.maxViewMode = this._resolveViewName(a.maxViewMode), a.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, a.startView)), !0 !== a.multidate && (a.multidate = Number(a.multidate) || !1, !1 !== a.multidate && (a.multidate = Math.max(0, a.multidate))), a.multidateSeparator = String(a.multidateSeparator), a.weekStart %= 7, a.weekEnd = (a.weekStart + 6) % 7;
                var s = g.parseFormat(a.format);
                a.startDate !== -Infinity && (a.startDate ? a.startDate instanceof Date ? a.startDate = this._local_to_utc(this._zero_time(a.startDate)) : a.startDate = g.parseDate(a.startDate, s, a.language, a.assumeNearbyYear) : a.startDate = -Infinity), a.endDate !== Infinity && (a.endDate ? a.endDate instanceof Date ? a.endDate = this._local_to_utc(this._zero_time(a.endDate)) : a.endDate = g.parseDate(a.endDate, s, a.language, a.assumeNearbyYear) : a.endDate = Infinity), a.daysOfWeekDisabled = this._resolveDaysOfWeek(a.daysOfWeekDisabled || []), a.daysOfWeekHighlighted = this._resolveDaysOfWeek(a.daysOfWeekHighlighted || []), a.datesDisabled = a.datesDisabled || [], e.isArray(a.datesDisabled) || (a.datesDisabled = a.datesDisabled.split(",")), a.datesDisabled = e.map(a.datesDisabled, function(e) {
                    return g.parseDate(e, s, a.language, a.assumeNearbyYear)
                });
                var o = String(a.orientation).toLowerCase().split(/\s+/g),
                    d = a.orientation.toLowerCase();
                if (o = e.grep(o, function(e) {
                        return /^auto|left|right|top|bottom$/.test(e)
                    }), a.orientation = {
                        x: "auto",
                        y: "auto"
                    }, d && "auto" !== d)
                    if (1 === o.length) switch (o[0]) {
                        case "top":
                        case "bottom":
                            a.orientation.y = o[0];
                            break;
                        case "left":
                        case "right":
                            a.orientation.x = o[0]
                    } else d = e.grep(o, function(e) {
                        return /^left|right$/.test(e)
                    }), a.orientation.x = d[0] || "auto", d = e.grep(o, function(e) {
                        return /^top|bottom$/.test(e)
                    }), a.orientation.y = d[0] || "auto";
                    else;
                if (a.defaultViewDate instanceof Date || "string" == typeof a.defaultViewDate) a.defaultViewDate = g.parseDate(a.defaultViewDate, s, a.language, a.assumeNearbyYear);
                else if (a.defaultViewDate) {
                    var l = a.defaultViewDate.year || (new Date).getFullYear(),
                        u = a.defaultViewDate.month || 0,
                        c = a.defaultViewDate.day || 1;
                    a.defaultViewDate = n(l, u, c)
                } else a.defaultViewDate = i()
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(e) {
                for (var n, i, a, r = 0; r < e.length; r++) n = e[r][0], 2 === e[r].length ? (i = t, a = e[r][1]) : 3 === e[r].length && (i = e[r][1], a = e[r][2]), n.on(a, i)
            },
            _unapplyEvents: function(e) {
                for (var n, i, a, r = 0; r < e.length; r++) n = e[r][0], 2 === e[r].length ? (a = t, i = e[r][1]) : 3 === e[r].length && (a = e[r][1], i = e[r][2]), n.off(i, a)
            },
            _buildEvents: function() {
                var t = {
                    keyup: e.proxy(function(t) {
                        -1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: e.proxy(this.keydown, this),
                    paste: e.proxy(this.paste, this)
                };
                !0 === this.o.showOnFocus && (t.focus = e.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, t]
                ] : this.component && this.inputField.length ? this._events = [
                    [this.inputField, t],
                    [this.component, {
                        click: e.proxy(this.show, this)
                    }]
                ] : this._events = [
                    [this.element, {
                        click: e.proxy(this.show, this),
                        keydown: e.proxy(this.keydown, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: e.proxy(function(e) {
                        this._focused_from = e.target
                    }, this)
                }], [this.element, {
                    blur: e.proxy(function(e) {
                        this._focused_from = e.target
                    }, this)
                }]), this.o.immediateUpdates && this._events.push([this.element, {
                    "changeYear changeMonth": e.proxy(function(e) {
                        this.update(e.date)
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: e.proxy(this.click, this)
                    }],
                    [this.picker, ".prev, .next", {
                        click: e.proxy(this.navArrowsClick, this)
                    }],
                    [this.picker, ".day:not(.disabled)", {
                        click: e.proxy(this.dayCellClick, this)
                    }],
                    [e(window), {
                        resize: e.proxy(this.place, this)
                    }],
                    [e(document), {
                        "mousedown touchstart": e.proxy(function(e) {
                            this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(t, n) {
                var i = n || this.dates.get(-1),
                    a = this._utc_to_local(i);
                this.element.trigger({
                    type: t,
                    date: a,
                    viewMode: this.viewMode,
                    dates: e.map(this.dates, this._utc_to_local),
                    format: e.proxy(function(e, t) {
                        0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
                        var n = this.dates.get(e);
                        return g.formatDate(n, t, this.o.language)
                    }, this)
                })
            },
            show: function() {
                if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && e(this.element).blur(), this
            },
            hide: function() {
                return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
            },
            destroy: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            },
            paste: function(t) {
                var n;
                if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== e.inArray("text/plain", t.originalEvent.clipboardData.types)) n = t.originalEvent.clipboardData.getData("text/plain");
                else {
                    if (!window.clipboardData) return;
                    n = window.clipboardData.getData("Text")
                }
                this.setDate(n), this.update(), t.preventDefault()
            },
            _utc_to_local: function(e) {
                if (!e) return e;
                var t = new Date(e.getTime() + 6e4 * e.getTimezoneOffset());
                return t.getTimezoneOffset() !== e.getTimezoneOffset() && (t = new Date(e.getTime() + 6e4 * t.getTimezoneOffset())), t
            },
            _local_to_utc: function(e) {
                return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
            },
            _zero_time: function(e) {
                return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
            },
            _zero_utc_time: function(e) {
                return e && n(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
            },
            getDates: function() {
                return e.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return e.map(this.dates, function(e) {
                    return new Date(e)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var e = this.dates.get(-1);
                return e !== t ? new Date(e) : null
            },
            clearDates: function() {
                this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            },
            setDates: function() {
                var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
            },
            setUTCDates: function() {
                var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.setDates.apply(this, e.map(t, this._utc_to_local)), this
            },
            setDate: r("setDates"),
            setUTCDate: r("setUTCDates"),
            remove: r("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
            setValue: function() {
                var e = this.getFormattedDate();
                return this.inputField.val(e), this
            },
            getFormattedDate: function(n) {
                n === t && (n = this.o.format);
                var i = this.o.language;
                return e.map(this.dates, function(e) {
                    return g.formatDate(e, n, i)
                }).join(this.o.multidateSeparator)
            },
            getStartDate: function() {
                return this.o.startDate
            },
            setStartDate: function(e) {
                return this._process_options({
                    startDate: e
                }), this.update(), this.updateNavArrows(), this
            },
            getEndDate: function() {
                return this.o.endDate
            },
            setEndDate: function(e) {
                return this._process_options({
                    endDate: e
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekDisabled: function(e) {
                return this._process_options({
                    daysOfWeekDisabled: e
                }), this.update(), this
            },
            setDaysOfWeekHighlighted: function(e) {
                return this._process_options({
                    daysOfWeekHighlighted: e
                }), this.update(), this
            },
            setDatesDisabled: function(e) {
                return this._process_options({
                    datesDisabled: e
                }), this.update(), this
            },
            place: function() {
                if (this.isInline) return this;
                var t = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = 10,
                    a = e(this.o.container),
                    r = a.width(),
                    s = "body" === this.o.container ? e(document).scrollTop() : a.scrollTop(),
                    o = a.offset(),
                    d = [0];
                this.element.parents().each(function() {
                    var t = e(this).css("z-index");
                    "auto" !== t && 0 !== Number(t) && d.push(Number(t))
                });
                var l = Math.max.apply(Math, d) + this.o.zIndexOffset,
                    u = this.component ? this.component.parent().offset() : this.element.offset(),
                    c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    p = u.left - o.left,
                    f = u.top - o.top;
                "body" !== this.o.container && (f += s), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= t - h)) : u.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= u.left - i) : p + t > r ? (this.picker.addClass("datepicker-orient-right"), p += h - t) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
                var m, _ = this.o.orientation.y;
                if ("auto" === _ && (m = -s + f - n, _ = m < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + _), "top" === _ ? f -= n + parseInt(this.picker.css("padding-top")) : f += c, this.o.rtl) {
                    var g = r - (p + h);
                    this.picker.css({
                        top: f,
                        right: g,
                        zIndex: l
                    })
                } else this.picker.css({
                    top: f,
                    left: p,
                    zIndex: l
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var t = this.dates.copy(),
                    n = [],
                    i = !1;
                return arguments.length ? (e.each(arguments, e.proxy(function(e, t) {
                    t instanceof Date && (t = this._local_to_utc(t)), n.push(t)
                }, this)), i = !0) : (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), n = n && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = e.map(n, e.proxy(function(e) {
                    return g.parseDate(e, this.o.format, this.o.language, this.o.assumeNearbyYear)
                }, this)), n = e.grep(n, e.proxy(function(e) {
                    return !this.dateWithinRange(e) || !e
                }, this), !0), this.dates.replace(n), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), i ? (this.setValue(), this.element.change()) : this.dates.length && String(t) !== String(this.dates) && i && (this._trigger("changeDate"), this.element.change()), !this.dates.length && t.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
            },
            fillDow: function() {
                if (this.o.showWeekDays) {
                    var t = this.o.weekStart,
                        n = "<tr>";
                    for (this.o.calendarWeeks && (n += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) n += '<th class="dow', -1 !== e.inArray(t, this.o.daysOfWeekDisabled) && (n += " disabled"), n += '">' + _[this.o.language].daysMin[t++ % 7] + "</th>";
                    n += "</tr>", this.picker.find(".datepicker-days thead").append(n)
                }
            },
            fillMonths: function() {
                for (var e, t = this._utc_to_local(this.viewDate), n = "", i = 0; i < 12; i++) e = t && t.getMonth() === i ? " focused" : "", n += '<span class="month' + e + '">' + _[this.o.language].monthsShort[i] + "</span>";
                this.picker.find(".datepicker-months td").html(n)
            },
            setRange: function(t) {
                t && t.length ? this.range = e.map(t, function(e) {
                    return e.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(t) {
                var n = [],
                    r = this.viewDate.getUTCFullYear(),
                    s = this.viewDate.getUTCMonth(),
                    o = i();
                return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < s ? n.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > s) && n.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && a(t, o) && n.push("today"), -1 !== this.dates.contains(t) && n.push("active"), this.dateWithinRange(t) || n.push("disabled"), this.dateIsDisabled(t) && n.push("disabled", "disabled-date"), -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && n.push("range"), -1 !== e.inArray(t.valueOf(), this.range) && n.push("selected"), t.valueOf() === this.range[0] && n.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && n.push("range-end")), n
            },
            _fill_yearsView: function(n, i, a, r, s, o, d) {
                for (var l, u, c, h = "", p = a / 10, f = this.picker.find(n), m = Math.floor(r / a) * a, _ = m + 9 * p, g = Math.floor(this.viewDate.getFullYear() / p) * p, y = e.map(this.dates, function(e) {
                        return Math.floor(e.getUTCFullYear() / p) * p
                    }), v = m - p; v <= _ + p; v += p) l = [i], u = null, v === m - p ? l.push("old") : v === _ + p && l.push("new"), -1 !== e.inArray(v, y) && l.push("active"), (v < s || v > o) && l.push("disabled"), v === g && l.push("focused"), d !== e.noop && (c = d(new Date(v, 0, 1)), c === t ? c = {} : "boolean" == typeof c ? c = {
                    enabled: c
                } : "string" == typeof c && (c = {
                    classes: c
                }), !1 === c.enabled && l.push("disabled"), c.classes && (l = l.concat(c.classes.split(/\s+/))), c.tooltip && (u = c.tooltip)), h += '<span class="' + l.join(" ") + '"' + (u ? ' title="' + u + '"' : "") + ">" + v + "</span>";
                f.find(".datepicker-switch").text(m + "-" + _), f.find("td").html(h)
            },
            fill: function() {
                var i, a, r = new Date(this.viewDate),
                    s = r.getUTCFullYear(),
                    o = r.getUTCMonth(),
                    d = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                    l = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                    u = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                    c = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                    h = _[this.o.language].today || _.en.today || "",
                    p = _[this.o.language].clear || _.en.clear || "",
                    f = _[this.o.language].titleFormat || _.en.titleFormat;
                if (!isNaN(s) && !isNaN(o)) {
                    this.picker.find(".datepicker-days .datepicker-switch").text(g.formatDate(r, f, this.o.language)), this.picker.find("tfoot .today").text(h).css("display", !0 === this.o.todayBtn || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(p).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
                    var m = n(s, o, 0),
                        y = m.getUTCDate();
                    m.setUTCDate(y - (m.getUTCDay() - this.o.weekStart + 7) % 7);
                    var v = new Date(m);
                    m.getUTCFullYear() < 100 && v.setUTCFullYear(m.getUTCFullYear()), v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf();
                    for (var M, w, b = []; m.valueOf() < v;) {
                        if ((M = m.getUTCDay()) === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                            var D = new Date(+m + (this.o.weekStart - M - 7) % 7 * 864e5),
                                L = new Date(Number(D) + (11 - D.getUTCDay()) % 7 * 864e5),
                                T = new Date(Number(T = n(L.getUTCFullYear(), 0, 1)) + (11 - T.getUTCDay()) % 7 * 864e5),
                                k = (L - T) / 864e5 / 7 + 1;
                            b.push('<td class="cw">' + k + "</td>")
                        }
                        w = this.getClassNames(m), w.push("day");
                        var Y = m.getUTCDate();
                        this.o.beforeShowDay !== e.noop && (a = this.o.beforeShowDay(this._utc_to_local(m)), a === t ? a = {} : "boolean" == typeof a ? a = {
                            enabled: a
                        } : "string" == typeof a && (a = {
                            classes: a
                        }), !1 === a.enabled && w.push("disabled"), a.classes && (w = w.concat(a.classes.split(/\s+/))), a.tooltip && (i = a.tooltip), a.content && (Y = a.content)), w = e.isFunction(e.uniqueSort) ? e.uniqueSort(w) : e.unique(w), b.push('<td class="' + w.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ' data-date="' + m.getTime().toString() + '">' + Y + "</td>"), i = null, M === this.o.weekEnd && b.push("</tr>"), m.setUTCDate(m.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").html(b.join(""));
                    var x = _[this.o.language].monthsTitle || _.en.monthsTitle || "Months",
                        S = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? x : s).end().find("tbody span").removeClass("active");
                    if (e.each(this.dates, function(e, t) {
                            t.getUTCFullYear() === s && S.eq(t.getUTCMonth()).addClass("active")
                        }), (s < d || s > u) && S.addClass("disabled"), s === d && S.slice(0, l).addClass("disabled"), s === u && S.slice(c + 1).addClass("disabled"), this.o.beforeShowMonth !== e.noop) {
                        var C = this;
                        e.each(S, function(n, i) {
                            var a = new Date(s, n, 1),
                                r = C.o.beforeShowMonth(a);
                            r === t ? r = {} : "boolean" == typeof r ? r = {
                                enabled: r
                            } : "string" == typeof r && (r = {
                                classes: r
                            }), !1 !== r.enabled || e(i).hasClass("disabled") || e(i).addClass("disabled"), r.classes && e(i).addClass(r.classes), r.tooltip && e(i).prop("title", r.tooltip)
                        })
                    }
                    this._fill_yearsView(".datepicker-years", "year", 10, s, d, u, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, s, d, u, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, s, d, u, this.o.beforeShowCentury)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var e, t, n = new Date(this.viewDate),
                        i = n.getUTCFullYear(),
                        a = n.getUTCMonth(),
                        r = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                        s = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                        o = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                        d = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                        l = 1;
                    switch (this.viewMode) {
                        case 0:
                            e = i <= r && a <= s, t = i >= o && a >= d;
                            break;
                        case 4:
                            l *= 10;
                        case 3:
                            l *= 10;
                        case 2:
                            l *= 10;
                        case 1:
                            e = Math.floor(i / l) * l <= r, t = Math.floor(i / l) * l + l >= o
                    }
                    this.picker.find(".prev").toggleClass("disabled", e), this.picker.find(".next").toggleClass("disabled", t)
                }
            },
            click: function(t) {
                t.preventDefault(), t.stopPropagation();
                var a, r, s, o;
                a = e(t.target), a.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), a.hasClass("today") && !a.hasClass("day") && (this.setViewMode(0), this._setDate(i(), "linked" === this.o.todayBtn ? null : "view")), a.hasClass("clear") && this.clearDates(), a.hasClass("disabled") || (a.hasClass("month") || a.hasClass("year") || a.hasClass("decade") || a.hasClass("century")) && (this.viewDate.setUTCDate(1), r = 1, 1 === this.viewMode ? (o = a.parent().find("span").index(a), s = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(o)) : (o = 0, s = Number(a.text()), this.viewDate.setUTCFullYear(s)), this._trigger(g.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(n(s, o, r)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from
            },
            dayCellClick: function(t) {
                var n = e(t.currentTarget),
                    i = n.data("date"),
                    a = new Date(i);
                this.o.updateViewDate && (a.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), a.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(a)
            },
            navArrowsClick: function(t) {
                var n = e(t.currentTarget),
                    i = n.hasClass("prev") ? -1 : 1;
                0 !== this.viewMode && (i *= 12 * g.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, i), this._trigger(g.viewModes[this.viewMode].e, this.viewDate), this.fill()
            },
            _toggle_multidate: function(e) {
                var t = this.dates.contains(e);
                if (e || this.dates.clear(), -1 !== t ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(e, t) {
                t && "date" !== t || this._toggle_multidate(e && new Date(e)), (!t && this.o.updateViewDate || "view" === t) && (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || t && "date" !== t || this.hide()
            },
            moveDay: function(e, t) {
                var n = new Date(e);
                return n.setUTCDate(e.getUTCDate() + t), n
            },
            moveWeek: function(e, t) {
                return this.moveDay(e, 7 * t)
            },
            moveMonth: function(e, t) {
                if (!s(e)) return this.o.defaultViewDate;
                if (!t) return e;
                var n, i, a = new Date(e.valueOf()),
                    r = a.getUTCDate(),
                    o = a.getUTCMonth(),
                    d = Math.abs(t);
                if (t = t > 0 ? 1 : -1, 1 === d) i = -1 === t ? function() {
                    return a.getUTCMonth() === o
                } : function() {
                    return a.getUTCMonth() !== n
                }, n = o + t, a.setUTCMonth(n), n = (n + 12) % 12;
                else {
                    for (var l = 0; l < d; l++) a = this.moveMonth(a, t);
                    n = a.getUTCMonth(), a.setUTCDate(r), i = function() {
                        return n !== a.getUTCMonth()
                    }
                }
                for (; i();) a.setUTCDate(--r), a.setUTCMonth(n);
                return a
            },
            moveYear: function(e, t) {
                return this.moveMonth(e, 12 * t)
            },
            moveAvailableDate: function(e, t, n) {
                do {
                    if (e = this[n](e, t), !this.dateWithinRange(e)) return !1;
                    n = "moveDay"
                } while (this.dateIsDisabled(e));
                return e
            },
            weekOfDateIsDisabled: function(t) {
                return -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)
            },
            dateIsDisabled: function(t) {
                return this.weekOfDateIsDisabled(t) || e.grep(this.o.datesDisabled, function(e) {
                    return a(t, e)
                }).length > 0
            },
            dateWithinRange: function(e) {
                return e >= this.o.startDate && e <= this.o.endDate
            },
            keydown: function(e) {
                if (!this.picker.is(":visible")) return void(40 !== e.keyCode && 27 !== e.keyCode || (this.show(), e.stopPropagation()));
                var t, n, i = !1,
                    a = this.focusDate || this.viewDate;
                switch (e.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault(), e.stopPropagation();
                        break;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                        t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1, 0 === this.viewMode ? e.ctrlKey ? (n = this.moveAvailableDate(a, t, "moveYear")) && this._trigger("changeYear", this.viewDate) : e.shiftKey ? (n = this.moveAvailableDate(a, t, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === e.keyCode || 39 === e.keyCode ? n = this.moveAvailableDate(a, t, "moveDay") : this.weekOfDateIsDisabled(a) || (n = this.moveAvailableDate(a, t, "moveWeek")) : 1 === this.viewMode ? (38 !== e.keyCode && 40 !== e.keyCode || (t *= 4), n = this.moveAvailableDate(a, t, "moveMonth")) : 2 === this.viewMode && (38 !== e.keyCode && 40 !== e.keyCode || (t *= 4), n = this.moveAvailableDate(a, t, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), e.preventDefault());
                        break;
                    case 13:
                        if (!this.o.forceParse) break;
                        a = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(a), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), e.stopPropagation(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
            },
            setViewMode: function(e) {
                this.viewMode = e, this.picker.children("div").hide().filter(".datepicker-" + g.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate))
            }
        };
        var c = function(t, n) {
            e.data(t, "datepicker", this), this.element = e(t), this.inputs = e.map(n.inputs, function(e) {
                return e.jquery ? e[0] : e
            }), delete n.inputs, this.keepEmptyValues = n.keepEmptyValues, delete n.keepEmptyValues, p.call(e(this.inputs), n).on("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function(t) {
                return e.data(t, "datepicker")
            }), this.updateDates()
        };
        c.prototype = {
            updateDates: function() {
                this.dates = e.map(this.pickers, function(e) {
                    return e.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var t = e.map(this.dates, function(e) {
                    return e.valueOf()
                });
                e.each(this.pickers, function(e, n) {
                    n.setRange(t)
                })
            },
            dateUpdated: function(n) {
                if (!this.updating) {
                    this.updating = !0;
                    var i = e.data(n.target, "datepicker");
                    if (i !== t) {
                        var a = i.getUTCDate(),
                            r = this.keepEmptyValues,
                            s = e.inArray(n.target, this.inputs),
                            o = s - 1,
                            d = s + 1,
                            l = this.inputs.length;
                        if (-1 !== s) {
                            if (e.each(this.pickers, function(e, t) {
                                    t.getUTCDate() || t !== i && r || t.setUTCDate(a)
                                }), a < this.dates[o])
                                for (; o >= 0 && a < this.dates[o];) this.pickers[o--].setUTCDate(a);
                            else if (a > this.dates[d])
                                for (; d < l && a > this.dates[d];) this.pickers[d++].setUTCDate(a);
                            this.updateDates(), delete this.updating
                        }
                    }
                }
            },
            destroy: function() {
                e.map(this.pickers, function(e) {
                    e.destroy()
                }), e(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker
            },
            remove: r("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
        };
        var h = e.fn.datepicker,
            p = function(n) {
                var i = Array.apply(null, arguments);
                i.shift();
                var a;
                if (this.each(function() {
                        var t = e(this),
                            r = t.data("datepicker"),
                            s = "object" == typeof n && n;
                        if (!r) {
                            var l = o(this, "date"),
                                h = e.extend({}, f, l, s),
                                p = d(h.language),
                                m = e.extend({}, f, p, l, s);
                            t.hasClass("input-daterange") || m.inputs ? (e.extend(m, {
                                inputs: m.inputs || t.find("input").toArray()
                            }), r = new c(this, m)) : r = new u(this, m), t.data("datepicker", r)
                        }
                        "string" == typeof n && "function" == typeof r[n] && (a = r[n].apply(r, i))
                    }), a === t || a instanceof u || a instanceof c) return this;
                if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + n + " function)");
                return a
            };
        e.fn.datepicker = p;
        var f = e.fn.datepicker.defaults = {
                assumeNearbyYear: !1,
                autoclose: !1,
                beforeShowDay: e.noop,
                beforeShowMonth: e.noop,
                beforeShowYear: e.noop,
                beforeShowDecade: e.noop,
                beforeShowCentury: e.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                daysOfWeekHighlighted: [],
                datesDisabled: [],
                endDate: Infinity,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keepEmptyValues: !1,
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                maxViewMode: 4,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -Infinity,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                updateViewDate: !0,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                showOnFocus: !0,
                zIndexOffset: 10,
                container: "body",
                immediateUpdates: !1,
                title: "",
                templates: {
                    leftArrow: "&#x00AB;",
                    rightArrow: "&#x00BB;"
                },
                showWeekDays: !0
            },
            m = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        e.fn.datepicker.Constructor = u;
        var _ = e.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear",
                    titleFormat: "MM yyyy"
                }
            },
            g = {
                viewModes: [{
                    names: ["days", "month"],
                    clsName: "days",
                    e: "changeMonth"
                }, {
                    names: ["months", "year"],
                    clsName: "months",
                    e: "changeYear",
                    navStep: 1
                }, {
                    names: ["years", "decade"],
                    clsName: "years",
                    e: "changeDecade",
                    navStep: 10
                }, {
                    names: ["decades", "century"],
                    clsName: "decades",
                    e: "changeCentury",
                    navStep: 100
                }, {
                    names: ["centuries", "millennium"],
                    clsName: "centuries",
                    e: "changeMillennium",
                    navStep: 1e3
                }],
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
                parseFormat: function(e) {
                    if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
                    var t = e.replace(this.validParts, "\0").split("\0"),
                        n = e.match(this.validParts);
                    if (!t || !t.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                    return {
                        separators: t,
                        parts: n
                    }
                },
                parseDate: function(n, a, r, s) {
                    function o(e, t) {
                        return !0 === t && (t = 10), e < 100 && (e += 2e3) > (new Date).getFullYear() + t && (e -= 100), e
                    }

                    function d() {
                        var e = this.slice(0, l[p].length),
                            t = l[p].slice(0, e.length);
                        return e.toLowerCase() === t.toLowerCase()
                    }
                    if (!n) return t;
                    if (n instanceof Date) return n;
                    if ("string" == typeof a && (a = g.parseFormat(a)), a.toValue) return a.toValue(n, a, r);
                    var l, c, h, p, f, m = {
                            d: "moveDay",
                            m: "moveMonth",
                            w: "moveWeek",
                            y: "moveYear"
                        },
                        y = {
                            yesterday: "-1d",
                            today: "+0d",
                            tomorrow: "+1d"
                        };
                    if (n in y && (n = y[n]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n)) {
                        for (l = n.match(/([\-+]\d+)([dmwy])/gi), n = new Date, p = 0; p < l.length; p++) c = l[p].match(/([\-+]\d+)([dmwy])/i), h = Number(c[1]), f = m[c[2].toLowerCase()], n = u.prototype[f](n, h);
                        return u.prototype._zero_utc_time(n)
                    }
                    l = n && n.match(this.nonpunctuation) || [];
                    var v, M, w = {},
                        b = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        D = {
                            yyyy: function(e, t) {
                                return e.setUTCFullYear(s ? o(t, s) : t)
                            },
                            m: function(e, t) {
                                if (isNaN(e)) return e;
                                for (t -= 1; t < 0;) t += 12;
                                for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) e.setUTCDate(e.getUTCDate() - 1);
                                return e
                            },
                            d: function(e, t) {
                                return e.setUTCDate(t)
                            }
                        };
                    D.yy = D.yyyy, D.M = D.MM = D.mm = D.m, D.dd = D.d, n = i();
                    var L = a.parts.slice();
                    if (l.length !== L.length && (L = e(L).filter(function(t, n) {
                            return -1 !== e.inArray(n, b)
                        }).toArray()), l.length === L.length) {
                        var T;
                        for (p = 0, T = L.length; p < T; p++) {
                            if (v = parseInt(l[p], 10), c = L[p], isNaN(v)) switch (c) {
                                case "MM":
                                    M = e(_[r].months).filter(d), v = e.inArray(M[0], _[r].months) + 1;
                                    break;
                                case "M":
                                    M = e(_[r].monthsShort).filter(d), v = e.inArray(M[0], _[r].monthsShort) + 1
                            }
                            w[c] = v
                        }
                        var k, Y;
                        for (p = 0; p < b.length; p++)(Y = b[p]) in w && !isNaN(w[Y]) && (k = new Date(n), D[Y](k, w[Y]), isNaN(k) || (n = k))
                    }
                    return n
                },
                formatDate: function(t, n, i) {
                    if (!t) return "";
                    if ("string" == typeof n && (n = g.parseFormat(n)), n.toDisplay) return n.toDisplay(t, n, i);
                    var a = {
                        d: t.getUTCDate(),
                        D: _[i].daysShort[t.getUTCDay()],
                        DD: _[i].days[t.getUTCDay()],
                        m: t.getUTCMonth() + 1,
                        M: _[i].monthsShort[t.getUTCMonth()],
                        MM: _[i].months[t.getUTCMonth()],
                        yy: t.getUTCFullYear().toString().substring(2),
                        yyyy: t.getUTCFullYear()
                    };
                    a.dd = (a.d < 10 ? "0" : "") + a.d, a.mm = (a.m < 10 ? "0" : "") + a.m, t = [];
                    for (var r = e.extend([], n.separators), s = 0, o = n.parts.length; s <= o; s++) r.length && t.push(r.shift()), t.push(a[n.parts[s]]);
                    return t.join("")
                },
                headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + f.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + f.templates.rightArrow + "</th></tr></thead>",
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        g.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = g, e.fn.datepicker.noConflict = function() {
            return e.fn.datepicker = h, this
        }, e.fn.datepicker.version = "1.7.1", e.fn.datepicker.deprecated = function(e) {
            var t = window.console;
            t && t.warn && t.warn("DEPRECATED: " + e)
        }, e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
            var n = e(this);
            n.data("datepicker") || (t.preventDefault(), p.call(n, "show"))
        }), e(function() {
            p.call(e('[data-provide="datepicker-inline"]'))
        })
    }),
    function(e, t) {
        function n() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function i() {
            var e = new Date;
            return n(e.getFullYear(), e.getMonth(), e.getDate())
        }

        function a(e, t) {
            return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
        }

        function r(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }

        function s(t, n) {
            function i(e, t) {
                return t.toLowerCase()
            }
            var a, r = e(t).data(),
                s = {},
                o = new RegExp("^" + n.toLowerCase() + "([A-Z])");
            n = new RegExp("^" + n.toLowerCase());
            for (var d in r) n.test(d) && (a = d.replace(o, i), s[a] = r[d]);
            return s
        }

        function o(t) {
            var n = {};
            if (m[t] || (t = t.split("-")[0], m[t])) {
                var i = m[t];
                return e.each(f, function(e, t) {
                    t in i && (n[t] = i[t])
                }), n
            }
        }
        var d = function() {
                var t = {
                    get: function(e) {
                        return this.slice(e)[0]
                    },
                    contains: function(e) {
                        for (var t = e && e.valueOf(), n = 0, i = this.length; i > n; n++)
                            if (this[n].valueOf() === t) return n;
                        return -1
                    },
                    remove: function(e) {
                        this.splice(e, 1)
                    },
                    replace: function(t) {
                        t && (e.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
                    },
                    clear: function() {
                        this.length = 0
                    },
                    copy: function() {
                        var e = new d;
                        return e.replace(this), e
                    }
                };
                return function() {
                    var n = [];
                    return n.push.apply(n, arguments), e.extend(n, t), n
                }
            }(),
            l = function(t, n) {
                this._process_options(n), this.dates = new d, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = e(t), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = e(_.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(e, t) {
                    return parseInt(t) + 1
                }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
            };
        l.prototype = {
            constructor: l,
            _process_options: function(a) {
                this._o = e.extend({}, this._o, a);
                var r = this.o = e.extend({}, this._o),
                    s = r.language;
                switch (m[s] || (s = s.split("-")[0], m[s] || (s = p.language)), r.language = s, r.startView) {
                    case 2:
                    case "decade":
                        r.startView = 2;
                        break;
                    case 1:
                    case "year":
                        r.startView = 1;
                        break;
                    default:
                        r.startView = 0
                }
                switch (r.minViewMode) {
                    case 1:
                    case "months":
                        r.minViewMode = 1;
                        break;
                    case 2:
                    case "years":
                        r.minViewMode = 2;
                        break;
                    default:
                        r.minViewMode = 0
                }
                r.startView = Math.max(r.startView, r.minViewMode), !0 !== r.multidate && (r.multidate = Number(r.multidate) || !1, !1 !== r.multidate && (r.multidate = Math.max(0, r.multidate))), r.multidateSeparator = String(r.multidateSeparator), r.weekStart %= 7, r.weekEnd = (r.weekStart + 6) % 7;
                var o = _.parseFormat(r.format);
                if (r.startDate !== -1 / 0 && (r.startDate ? r.startDate instanceof Date ? r.startDate = this._local_to_utc(this._zero_time(r.startDate)) : r.startDate = _.parseDate(r.startDate, o, r.language) : r.startDate = -1 / 0), r.endDate !== 1 / 0 && (r.endDate ? r.endDate instanceof Date ? r.endDate = this._local_to_utc(this._zero_time(r.endDate)) : r.endDate = _.parseDate(r.endDate, o, r.language) : r.endDate = 1 / 0), r.daysOfWeekDisabled = r.daysOfWeekDisabled || [], e.isArray(r.daysOfWeekDisabled) || (r.daysOfWeekDisabled = r.daysOfWeekDisabled.split(/[,\s]*/)), r.daysOfWeekDisabled = e.map(r.daysOfWeekDisabled, function(e) {
                        return parseInt(e, 10)
                    }), r.datesDisabled = r.datesDisabled || [], !e.isArray(r.datesDisabled)) {
                    var d = [];
                    d.push(_.parseDate(r.datesDisabled, o, r.language)), r.datesDisabled = d
                }
                r.datesDisabled = e.map(r.datesDisabled, function(e) {
                    return _.parseDate(e, o, r.language)
                });
                var l = String(r.orientation).toLowerCase().split(/\s+/g),
                    u = r.orientation.toLowerCase();
                if (l = e.grep(l, function(e) {
                        return /^auto|left|right|top|bottom$/.test(e)
                    }), r.orientation = {
                        x: "auto",
                        y: "auto"
                    }, u && "auto" !== u)
                    if (1 === l.length) switch (l[0]) {
                        case "top":
                        case "bottom":
                            r.orientation.y = l[0];
                            break;
                        case "left":
                        case "right":
                            r.orientation.x = l[0]
                    } else u = e.grep(l, function(e) {
                        return /^left|right$/.test(e)
                    }), r.orientation.x = u[0] || "auto", u = e.grep(l, function(e) {
                        return /^top|bottom$/.test(e)
                    }), r.orientation.y = u[0] || "auto";
                if (r.defaultViewDate) {
                    var c = r.defaultViewDate.year || (new Date).getFullYear(),
                        h = r.defaultViewDate.month || 0,
                        f = r.defaultViewDate.day || 1;
                    r.defaultViewDate = n(c, h, f)
                } else r.defaultViewDate = i();
                r.showOnFocus = r.showOnFocus === t || r.showOnFocus
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(e) {
                for (var n, i, a, r = 0; r < e.length; r++) n = e[r][0], 2 === e[r].length ? (i = t, a = e[r][1]) : 3 === e[r].length && (i = e[r][1], a = e[r][2]), n.on(a, i)
            },
            _unapplyEvents: function(e) {
                for (var n, i, a, r = 0; r < e.length; r++) n = e[r][0], 2 === e[r].length ? (a = t, i = e[r][1]) : 3 === e[r].length && (a = e[r][1], i = e[r][2]), n.off(i, a)
            },
            _buildEvents: function() {
                var t = {
                    keyup: e.proxy(function(t) {
                        -1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: e.proxy(this.keydown, this)
                };
                !0 === this.o.showOnFocus && (t.focus = e.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, t]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), t],
                    [this.component, {
                        click: e.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: e.proxy(this.show, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: e.proxy(function(e) {
                        this._focused_from = e.target
                    }, this)
                }], [this.element, {
                    blur: e.proxy(function(e) {
                        this._focused_from = e.target
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: e.proxy(this.click, this)
                    }],
                    [e(window), {
                        resize: e.proxy(this.place, this)
                    }],
                    [e(document), {
                        mousedown: e.proxy(function(e) {
                            this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(t, n) {
                var i = n || this.dates.get(-1),
                    a = this._utc_to_local(i);
                this.element.trigger({
                    type: t,
                    date: a,
                    dates: e.map(this.dates, this._utc_to_local),
                    format: e.proxy(function(e, t) {
                        0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format;
                        var n = this.dates.get(e);
                        return _.formatDate(n, t, this.o.language)
                    }, this)
                })
            },
            show: function() {
                return this.element.attr("readonly") && !1 === this.o.enableOnReadonly ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && e(this.element).blur(), this)
            },
            hide: function() {
                return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
            },
            remove: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            },
            _utc_to_local: function(e) {
                return e && new Date(e.getTime() + 6e4 * e.getTimezoneOffset())
            },
            _local_to_utc: function(e) {
                return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset())
            },
            _zero_time: function(e) {
                return e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
            },
            _zero_utc_time: function(e) {
                return e && new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
            },
            getDates: function() {
                return e.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return e.map(this.dates, function(e) {
                    return new Date(e)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var e = this.dates.get(-1);
                return void 0 !== e ? new Date(e) : null
            },
            clearDates: function() {
                var e;
                this.isInput ? e = this.element : this.component && (e = this.element.find("input")), e && e.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            },
            setDates: function() {
                var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
            },
            setUTCDates: function() {
                var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
            },
            setDate: r("setDates"),
            setUTCDate: r("setUTCDates"),
            setValue: function() {
                var e = this.getFormattedDate();
                return this.isInput ? this.element.val(e).change() : this.component && this.element.find("input").val(e).change(), this
            },
            getFormattedDate: function(n) {
                n === t && (n = this.o.format);
                var i = this.o.language;
                return e.map(this.dates, function(e) {
                    return _.formatDate(e, n, i)
                }).join(this.o.multidateSeparator)
            },
            setStartDate: function(e) {
                return this._process_options({
                    startDate: e
                }), this.update(), this.updateNavArrows(), this
            },
            setEndDate: function(e) {
                return this._process_options({
                    endDate: e
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekDisabled: function(e) {
                return this._process_options({
                    daysOfWeekDisabled: e
                }), this.update(), this.updateNavArrows(), this
            },
            setDatesDisabled: function(e) {
                this._process_options({
                    datesDisabled: e
                }), this.update(), this.updateNavArrows()
            },
            place: function() {
                if (this.isInline) return this;
                var t = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = 10,
                    a = e(this.o.container).width(),
                    r = e(this.o.container).height(),
                    s = e(this.o.container).scrollTop(),
                    o = e(this.o.container).offset(),
                    d = [];
                this.element.parents().each(function() {
                    var t = e(this).css("z-index");
                    "auto" !== t && 0 !== t && d.push(parseInt(t))
                });
                var l = Math.max.apply(Math, d) + 10,
                    u = this.component ? this.component.parent().offset() : this.element.offset(),
                    c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    p = u.left - o.left,
                    f = u.top - o.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= t - h)) : u.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= u.left - i) : p + t > a ? (this.picker.addClass("datepicker-orient-right"), p = u.left + h - t) : this.picker.addClass("datepicker-orient-left");
                var m, _, g = this.o.orientation.y;
                if ("auto" === g && (m = -s + f - n, _ = s + r - (f + c + n), g = Math.max(m, _) === _ ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + g), "top" === g ? f += c : f -= n + parseInt(this.picker.css("padding-top")), this.o.rtl) {
                    var y = a - (p + h);
                    this.picker.css({
                        top: f,
                        right: y,
                        zIndex: l
                    })
                } else this.picker.css({
                    top: f,
                    left: p,
                    zIndex: l
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var t = this.dates.copy(),
                    n = [],
                    i = !1;
                return arguments.length ? (e.each(arguments, e.proxy(function(e, t) {
                    t instanceof Date && (t = this._local_to_utc(t)), n.push(t)
                }, this)), i = !0) : (n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), n = n && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = e.map(n, e.proxy(function(e) {
                    return _.parseDate(e, this.o.format, this.o.language)
                }, this)), n = e.grep(n, e.proxy(function(e) {
                    return e < this.o.startDate || e > this.o.endDate || !e
                }, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), i ? this.setValue() : n.length && String(t) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && t.length && this._trigger("clearDate"), this.fill(), this
            },
            fillDow: function() {
                var e = this.o.weekStart,
                    t = "<tr>";
                if (this.o.calendarWeeks) {
                    this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(e, t) {
                        return parseInt(t) + 1
                    });
                    t += '<th class="cw">&#160;</th>'
                }
                for (; e < this.o.weekStart + 7;) t += '<th class="dow">' + m[this.o.language].daysMin[e++ % 7] + "</th>";
                t += "</tr>", this.picker.find(".datepicker-days thead").append(t)
            },
            fillMonths: function() {
                for (var e = "", t = 0; 12 > t;) e += '<span class="month">' + m[this.o.language].monthsShort[t++] + "</span>";
                this.picker.find(".datepicker-months td").html(e)
            },
            setRange: function(t) {
                t && t.length ? this.range = e.map(t, function(e) {
                    return e.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(t) {
                var n = [],
                    i = this.viewDate.getUTCFullYear(),
                    r = this.viewDate.getUTCMonth(),
                    s = new Date;
                return t.getUTCFullYear() < i || t.getUTCFullYear() === i && t.getUTCMonth() < r ? n.push("old") : (t.getUTCFullYear() > i || t.getUTCFullYear() === i && t.getUTCMonth() > r) && n.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === s.getFullYear() && t.getUTCMonth() === s.getMonth() && t.getUTCDate() === s.getDate() && n.push("today"), -1 !== this.dates.contains(t) && n.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)) && n.push("disabled"), this.o.datesDisabled.length > 0 && e.grep(this.o.datesDisabled, function(e) {
                    return a(t, e)
                }).length > 0 && n.push("disabled", "disabled-date"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && n.push("range"), -1 !== e.inArray(t.valueOf(), this.range) && n.push("selected")), n
            },
            fill: function() {
                var i, a = new Date(this.viewDate),
                    r = a.getUTCFullYear(),
                    s = a.getUTCMonth(),
                    o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    d = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    c = m[this.o.language].today || m.en.today || "",
                    h = m[this.o.language].clear || m.en.clear || "";
                if (!isNaN(r) && !isNaN(s)) {
                    this.picker.find(".datepicker-days thead .datepicker-switch").text(m[this.o.language].months[s] + " " + r), this.picker.find("tfoot .today").text(c).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(h).toggle(!1 !== this.o.clearBtn), this.updateNavArrows(), this.fillMonths();
                    var p = n(r, s - 1, 28),
                        f = _.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                    p.setUTCDate(f), p.setUTCDate(f - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                    var g = new Date(p);
                    g.setUTCDate(g.getUTCDate() + 42), g = g.valueOf();
                    for (var y, v = []; p.valueOf() < g;) {
                        if (p.getUTCDay() === this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) {
                            var M = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                                w = new Date(Number(M) + (11 - M.getUTCDay()) % 7 * 864e5),
                                b = new Date(Number(b = n(w.getUTCFullYear(), 0, 1)) + (11 - b.getUTCDay()) % 7 * 864e5),
                                D = (w - b) / 864e5 / 7 + 1;
                            v.push('<td class="cw">' + D + "</td>")
                        }
                        if (y = this.getClassNames(p), y.push("day"), this.o.beforeShowDay !== e.noop) {
                            var L = this.o.beforeShowDay(this._utc_to_local(p));
                            L === t ? L = {} : "boolean" == typeof L ? L = {
                                enabled: L
                            } : "string" == typeof L && (L = {
                                classes: L
                            }), !1 === L.enabled && y.push("disabled"), L.classes && (y = y.concat(L.classes.split(/\s+/))), L.tooltip && (i = L.tooltip)
                        }
                        y = e.unique(y), v.push('<td class="' + y.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + p.getUTCDate() + "</td>"), i = null, p.getUTCDay() === this.o.weekEnd && v.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").empty().append(v.join(""));
                    var T = this.picker.find(".datepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");
                    if (e.each(this.dates, function(e, t) {
                            t.getUTCFullYear() === r && T.eq(t.getUTCMonth()).addClass("active")
                        }), (o > r || r > l) && T.addClass("disabled"), r === o && T.slice(0, d).addClass("disabled"), r === l && T.slice(u + 1).addClass("disabled"), this.o.beforeShowMonth !== e.noop) {
                        var k = this;
                        e.each(T, function(t, n) {
                            if (!e(n).hasClass("disabled")) {
                                var i = new Date(r, t, 1);
                                !1 === k.o.beforeShowMonth(i) && e(n).addClass("disabled")
                            }
                        })
                    }
                    v = "", r = 10 * parseInt(r / 10, 10);
                    var Y = this.picker.find(".datepicker-years").find("th:eq(1)").text(r + "-" + (r + 9)).end().find("td");
                    r -= 1;
                    for (var x, S = e.map(this.dates, function(e) {
                            return e.getUTCFullYear()
                        }), C = -1; 11 > C; C++) x = ["year"], -1 === C ? x.push("old") : 10 === C && x.push("new"), -1 !== e.inArray(r, S) && x.push("active"), (o > r || r > l) && x.push("disabled"), v += '<span class="' + x.join(" ") + '">' + r + "</span>", r += 1;
                    Y.html(v)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var e = new Date(this.viewDate),
                        t = e.getUTCFullYear(),
                        n = e.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                            break;
                        case 1:
                        case 2:
                            this.o.startDate !== -1 / 0 && t <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== 1 / 0 && t >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            })
                    }
                }
            },
            click: function(t) {
                t.preventDefault();
                var i, a, r, s = e(t.target).closest("span, td, th");
                if (1 === s.length) switch (s[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (s[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var o = _.modes[this.viewMode].navStep * ("prev" === s[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, o), this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, o), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                                }
                                this.fill();
                                break;
                            case "today":
                                var d = new Date;
                                d = n(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0), this.showMode(-2);
                                var l = "linked" === this.o.todayBtn ? null : "view";
                                this._setDate(d, l);
                                break;
                            case "clear":
                                this.clearDates()
                        }
                        break;
                    case "span":
                        s.hasClass("disabled") || (this.viewDate.setUTCDate(1), s.hasClass("month") ? (r = 1, a = s.parent().find("span").index(s), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(n(i, a, r))) : (r = 1, a = 0, i = parseInt(s.text(), 10) || 0, this.viewDate.setUTCFullYear(i), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(n(i, a, r))), this.showMode(-1), this.fill());
                        break;
                    case "td":
                        s.hasClass("day") && !s.hasClass("disabled") && (r = parseInt(s.text(), 10) || 1, i = this.viewDate.getUTCFullYear(), a = this.viewDate.getUTCMonth(), s.hasClass("old") ? 0 === a ? (a = 11, i -= 1) : a -= 1 : s.hasClass("new") && (11 === a ? (a = 0, i += 1) : a += 1), this._setDate(n(i, a, r)))
                }
                this.picker.is(":visible") && this._focused_from && e(this._focused_from).focus(), delete this._focused_from
            },
            _toggle_multidate: function(e) {
                var t = this.dates.contains(e);
                if (e || this.dates.clear(), -1 !== t ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(e, t) {
                t && "date" !== t || this._toggle_multidate(e && new Date(e)), t && "view" !== t || (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate");
                var n;
                this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), !this.o.autoclose || t && "date" !== t || this.hide()
            },
            moveMonth: function(e, n) {
                if (!e) return t;
                if (!n) return e;
                var i, a, r = new Date(e.valueOf()),
                    s = r.getUTCDate(),
                    o = r.getUTCMonth(),
                    d = Math.abs(n);
                if (n = n > 0 ? 1 : -1, 1 === d) a = -1 === n ? function() {
                    return r.getUTCMonth() === o
                } : function() {
                    return r.getUTCMonth() !== i
                }, i = o + n, r.setUTCMonth(i), (0 > i || i > 11) && (i = (i + 12) % 12);
                else {
                    for (var l = 0; d > l; l++) r = this.moveMonth(r, n);
                    i = r.getUTCMonth(), r.setUTCDate(s), a = function() {
                        return i !== r.getUTCMonth()
                    }
                }
                for (; a();) r.setUTCDate(--s), r.setUTCMonth(i);
                return r
            },
            moveYear: function(e, t) {
                return this.moveMonth(e, 12 * t)
            },
            dateWithinRange: function(e) {
                return e >= this.o.startDate && e <= this.o.endDate
            },
            keydown: function(e) {
                if (!this.picker.is(":visible")) return void(27 === e.keyCode && this.show());
                var t, n, a, r = !1,
                    s = this.focusDate || this.viewDate;
                switch (e.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.o.keyboardNavigation) break;
                        t = 37 === e.keyCode ? -1 : 1, e.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || i(), t), a = this.moveYear(s, t), this._trigger("changeYear", this.viewDate)) : e.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || i(), t), a = this.moveMonth(s, t), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || i()), n.setUTCDate(n.getUTCDate() + t), a = new Date(s), a.setUTCDate(s.getUTCDate() + t)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), e.preventDefault());
                        break;
                    case 38:
                    case 40:
                        if (!this.o.keyboardNavigation) break;
                        t = 38 === e.keyCode ? -1 : 1, e.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || i(), t), a = this.moveYear(s, t), this._trigger("changeYear", this.viewDate)) : e.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || i(), t), a = this.moveMonth(s, t), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || i()), n.setUTCDate(n.getUTCDate() + 7 * t), a = new Date(s), a.setUTCDate(s.getUTCDate() + 7 * t)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), e.preventDefault());
                        break;
                    case 32:
                        break;
                    case 13:
                        s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), r = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), "function" == typeof e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                if (r) {
                    this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                    var o;
                    this.isInput ? o = this.element : this.component && (o = this.element.find("input")), o && o.change()
                }
            },
            showMode: function(e) {
                e && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + e))), this.picker.children("div").hide().filter(".datepicker-" + _.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }
        };
        var u = function(t, n) {
            this.element = e(t), this.inputs = e.map(n.inputs, function(e) {
                return e.jquery ? e[0] : e
            }), delete n.inputs, h.call(e(this.inputs), n).bind("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function(t) {
                return e(t).data("datepicker")
            }), this.updateDates()
        };
        u.prototype = {
            updateDates: function() {
                this.dates = e.map(this.pickers, function(e) {
                    return e.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var t = e.map(this.dates, function(e) {
                    return e.valueOf()
                });
                e.each(this.pickers, function(e, n) {
                    n.setRange(t)
                })
            },
            dateUpdated: function(t) {
                if (!this.updating) {
                    this.updating = !0;
                    var n = e(t.target).data("datepicker"),
                        i = n.getUTCDate(),
                        a = e.inArray(t.target, this.inputs),
                        r = a - 1,
                        s = a + 1,
                        o = this.inputs.length;
                    if (-1 !== a) {
                        if (e.each(this.pickers, function(e, t) {
                                t.getUTCDate() || t.setUTCDate(i)
                            }), i < this.dates[r])
                            for (; r >= 0 && i < this.dates[r];) this.pickers[r--].setUTCDate(i);
                        else if (i > this.dates[s])
                            for (; o > s && i > this.dates[s];) this.pickers[s++].setUTCDate(i);
                        this.updateDates(), delete this.updating
                    }
                }
            },
            remove: function() {
                e.map(this.pickers, function(e) {
                    e.remove()
                }), delete this.element.data().datepicker
            }
        };
        var c = e.fn.datepicker,
            h = function(n) {
                var i = Array.apply(null, arguments);
                i.shift();
                var a;
                return this.each(function() {
                    var r = e(this),
                        d = r.data("datepicker"),
                        c = "object" == typeof n && n;
                    if (!d) {
                        var h = s(this, "date"),
                            f = e.extend({}, p, h, c),
                            m = o(f.language),
                            _ = e.extend({}, p, m, h, c);
                        if (r.hasClass("input-daterange") || _.inputs) {
                            var g = {
                                inputs: _.inputs || r.find("input").toArray()
                            };
                            r.data("datepicker", d = new u(this, e.extend(_, g)))
                        } else r.data("datepicker", d = new l(this, _))
                    }
                    return ("string" != typeof n || "function" != typeof d[n] || (a = d[n].apply(d, i)) === t) && void 0
                }), a !== t ? a : this
            };
        e.fn.datepicker = h;
        var p = e.fn.datepicker.defaults = {
                autoclose: !1,
                beforeShowDay: e.noop,
                beforeShowMonth: e.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                datesDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -1 / 0,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                container: "body"
            },
            f = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        e.fn.datepicker.Constructor = l;
        var m = e.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear"
                }
            },
            _ = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                },
                getDaysInMonth: function(e, t) {
                    return [31, _.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(e) {
                    var t = e.replace(this.validParts, "\0").split("\0"),
                        n = e.match(this.validParts);
                    if (!t || !t.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                    return {
                        separators: t,
                        parts: n
                    }
                },
                parseDate: function(i, a, r) {
                    function s() {
                        var e = this.slice(0, h[u].length),
                            t = h[u].slice(0, e.length);
                        return e.toLowerCase() === t.toLowerCase()
                    }
                    if (!i) return t;
                    if (i instanceof Date) return i;
                    "string" == typeof a && (a = _.parseFormat(a));
                    var o, d, u, c = /([\-+]\d+)([dmwy])/,
                        h = i.match(/([\-+]\d+)([dmwy])/g);
                    if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
                        for (i = new Date, u = 0; u < h.length; u++) switch (o = c.exec(h[u]), d = parseInt(o[1]), o[2]) {
                            case "d":
                                i.setUTCDate(i.getUTCDate() + d);
                                break;
                            case "m":
                                i = l.prototype.moveMonth.call(l.prototype, i, d);
                                break;
                            case "w":
                                i.setUTCDate(i.getUTCDate() + 7 * d);
                                break;
                            case "y":
                                i = l.prototype.moveYear.call(l.prototype, i, d)
                        }
                        return n(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0)
                    }
                    h = i && i.match(this.nonpunctuation) || [], i = new Date;
                    var p, f, g = {},
                        y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        v = {
                            yyyy: function(e, t) {
                                return e.setUTCFullYear(t)
                            },
                            yy: function(e, t) {
                                return e.setUTCFullYear(2e3 + t)
                            },
                            m: function(e, t) {
                                if (isNaN(e)) return e;
                                for (t -= 1; 0 > t;) t += 12;
                                for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) e.setUTCDate(e.getUTCDate() - 1);
                                return e
                            },
                            d: function(e, t) {
                                return e.setUTCDate(t)
                            }
                        };
                    v.M = v.MM = v.mm = v.m, v.dd = v.d, i = n(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);
                    var M = a.parts.slice();
                    if (h.length !== M.length && (M = e(M).filter(function(t, n) {
                            return -1 !== e.inArray(n, y)
                        }).toArray()), h.length === M.length) {
                        var w;
                        for (u = 0, w = M.length; w > u; u++) {
                            if (p = parseInt(h[u], 10), o = M[u], isNaN(p)) switch (o) {
                                case "MM":
                                    f = e(m[r].months).filter(s), p = e.inArray(f[0], m[r].months) + 1;
                                    break;
                                case "M":
                                    f = e(m[r].monthsShort).filter(s), p = e.inArray(f[0], m[r].monthsShort) + 1
                            }
                            g[o] = p
                        }
                        var b, D;
                        for (u = 0; u < y.length; u++)(D = y[u]) in g && !isNaN(g[D]) && (b = new Date(i), v[D](b, g[D]), isNaN(b) || (i = b))
                    }
                    return i
                },
                formatDate: function(t, n, i) {
                    if (!t) return "";
                    "string" == typeof n && (n = _.parseFormat(n));
                    var a = {
                        d: t.getUTCDate(),
                        D: m[i].daysShort[t.getUTCDay()],
                        DD: m[i].days[t.getUTCDay()],
                        m: t.getUTCMonth() + 1,
                        M: m[i].monthsShort[t.getUTCMonth()],
                        MM: m[i].months[t.getUTCMonth()],
                        yy: t.getUTCFullYear().toString().substring(2),
                        yyyy: t.getUTCFullYear()
                    };
                    a.dd = (a.d < 10 ? "0" : "") + a.d, a.mm = (a.m < 10 ? "0" : "") + a.m, t = [];
                    for (var r = e.extend([], n.separators), s = 0, o = n.parts.length; o >= s; s++) r.length && t.push(r.shift()), t.push(a[n.parts[s]]);
                    return t.join("")
                },
                headTemplate: '<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        _.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + _.headTemplate + "<tbody></tbody>" + _.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + _.headTemplate + _.contTemplate + _.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + _.headTemplate + _.contTemplate + _.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = _, e.fn.datepicker.noConflict = function() {
            return e.fn.datepicker = c, this
        }, e.fn.datepicker.version = "1.4.1", e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
            var n = e(this);
            n.data("datepicker") || (t.preventDefault(), h.call(n, "show"))
        }), e(function() {
            h.call(e('[data-provide="datepicker-inline"]'))
        })
    }(window.jQuery);
var placeSearch, autocomplete;
! function(e) {
    var t = 0,
        n = function() {
            return (new Date).getTime() + t++
        },
        i = function(e) {
            return "[" + e + "]$1"
        },
        a = function(e) {
            return "_" + e + "_$1"
        },
        r = function(t, n, i) {
            return t ? "function" == typeof t ? (n && console.warn("association-insertion-traversal is ignored, because association-insertion-node is given as a function."), t(i)) : "string" == typeof t ? n ? i[n](t) : "this" == t ? i : e(t) : void 0 : i.parent()
        };
    e(document).on("click", ".add_fields", function(t) {
        t.preventDefault();
        var s = e(this),
            o = s.data("association"),
            d = s.data("associations"),
            l = s.data("association-insertion-template"),
            u = s.data("association-insertion-method") || s.data("association-insertion-position") || "before",
            c = s.data("association-insertion-node"),
            h = s.data("association-insertion-traversal"),
            p = parseInt(s.data("count"), 10),
            f = new RegExp("\\[new_" + o + "\\](.*?\\s)", "g"),
            m = new RegExp("_new_" + o + "_(\\w*)", "g"),
            _ = n(),
            g = l.replace(f, i(_)),
            y = [];
        for (g == l && (f = new RegExp("\\[new_" + d + "\\](.*?\\s)", "g"), m = new RegExp("_new_" + d + "_(\\w*)", "g"), g = l.replace(f, i(_))), g = g.replace(m, a(_)), y = [g], p = isNaN(p) ? 1 : Math.max(p, 1), p -= 1; p;) _ = n(), g = l.replace(f, i(_)), g = g.replace(m, a(_)), y.push(g), p -= 1;
        var v = r(c, h, s);
        v && 0 != v.length || console.warn("Couldn't find the element to insert the template. Make sure your `data-association-insertion-*` on `link_to_add_association` is correct."), e.each(y, function(t, n) {
            var i = e(n);
            v.trigger("cocoon:before-insert", [i]);
            v[u](i);
            v.trigger("cocoon:after-insert", [i])
        })
    }), e(document).on("click", ".remove_fields.dynamic, .remove_fields.existing", function(t) {
        var n = e(this),
            i = n.data("wrapper-class") || "nested-fields",
            a = n.closest("." + i),
            r = a.parent();
        t.preventDefault(), r.trigger("cocoon:before-remove", [a]);
        var s = r.data("remove-timeout") || 0;
        setTimeout(function() {
            n.hasClass("dynamic") ? a.remove() : (n.prev("input[type=hidden]").val("1"), a.hide()), r.trigger("cocoon:after-remove", [a])
        }, s)
    }), e(document).on("ready page:load", function() {
        e(".remove_fields.existing.destroyed").each(function() {
            var t = e(this),
                n = t.data("wrapper-class") || "nested-fields";
            t.closest("." + n).hide()
        })
    })
}(jQuery),
function(e) {
    e(window).on("load", function() {
        e(document).scrollzipInit()
    }), e.fn.scrollzipInit = function() {
        e("body").prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>")
    }, e.fn.scrollzip = function(t) {
        var n = e.extend({
            showFunction: null,
            hideFunction: null,
            showShift: 0,
            wholeVisible: !1,
            hideShift: 0
        }, t);
        return this.each(function() {
            return e(this).addClass("scrollzip"), e.isFunction(n.showFunction) && !e(this).hasClass("isShown") && e(window).outerHeight() + e("#scrollzipPoint").offset().top - n.showShift > e(this).offset().top + (n.wholeVisible ? e(this).outerHeight() : 0) && e("#scrollzipPoint").offset().top + (n.wholeVisible ? e(this).outerHeight() : 0) < e(this).outerHeight() + e(this).offset().top - n.showShift && (e(this).addClass("isShown"), n.showFunction.call(this)), e.isFunction(n.hideFunction) && e(this).hasClass("isShown") && (e(window).outerHeight() + e("#scrollzipPoint").offset().top - n.hideShift < e(this).offset().top + (n.wholeVisible ? e(this).outerHeight() : 0) || e("#scrollzipPoint").offset().top + (n.wholeVisible ? e(this).outerHeight() : 0) > e(this).outerHeight() + e(this).offset().top - n.hideShift) && (e(this).removeClass("isShown"), n.hideFunction.call(this)), this
        })
    }
}(jQuery), $(document).ready(function() {
        function e() {
            $(window).width() > 1199 ? $("header .custnav ul.menus").css({
                display: "block"
            }) : $("header .custnav ul.menus").css({
                display: "none"
            })
        }
        $(".faqorder").show(), $(".faqpayment").hide(), $("#mobilemenu").click(function() {
            $("header .custnav ul.menus").slideToggle()
        }), $(window).resize(function() {
            setTimeout(function() {
                e()
            }, 0)
        }), $(".openmodel-register").click(function() {
            $("body").toggleClass("modal-open2")
        }), $("#Modal-signup .close").click(function() {
            $("body").removeClass("modal-open2")
        }), $(".paymentstep .pickdelivery .deliveryinfo .info h3").click(function() {
            $(".paymentstep .pickdelivery .deliveryinfo .details").toggle()
        }), $(".orderstep .myorder .summary .subtitle").click(function() {
            $(".orderstep .myorder .summaryinner").toggle()
        }), $(".nextbtn").click(function() {
            $(".orderconts .orderstep .custtab > li").removeClass("active"), $(".orderconts .orderstep .custtab > li:nth-child(2)").addClass("active"), $(".faqorder").hide(), $(".faqpayment").show()
        }), $(".prvsbtn").click(function() {
            $(".orderconts .orderstep .custtab > li").removeClass("active"), $(".orderconts .orderstep .custtab > li:nth-child(1)").addClass("active"), $(".faqorder").show(), $(".faqpayment").hide()
        }), $(".paymentstep .rbttn").click(function() {
            $(".orderconts .orderstep .custtab > li").removeClass("active"),
                $(".orderconts .orderstep .custtab > li:nth-child(3)").addClass("active")
        }), $(".declare").click(function() {
            $(".reviewdrop").toggle()
        }), $(".faqs .question .title").click(function() {
            var e = $(this);
            return e.hasClass("title_active") ? (e.next(".faqdesc").slideToggle("slow"), e.removeClass("title_active")) : ($(".title_active").next(".faqdesc").slideToggle("slow"), $(".title_active").removeClass("title_active"), e.next(".faqdesc").slideToggle("slow"), e.addClass("title_active")), !1
        })
    }), $(document).on("ready", function() {
        function e(e) {
            var t = $(e),
                n = $(".nested-fields").length > 0 ? ".nested-fields" : ".newcurrencyBlock",
                i = t.parents(n).find(".currency-select option:selected").val(),
                a = "/orders/calculate?currency_id=" + i;
            "aud_currency" === t.attr("id") ? a += "&cost=" + t.parents(n).find("#aud_currency").val() : a += "&foreign_units=" + t.parents(n).find("#foreign_currency").val(), $.getJSON(a, function(e) {
                t.parents(n).find("#foreign_currency").val(e.foreign_units), t.parents(n).find("#aud_currency").val(e.cost)
            })
        }
        $(document).on("change", ".currency-select, .custfieldhome", function() {
            var i = $("#currency-values"),
                a = i.data(this.value);
            parentClass = $(".nested-fields").length > 0 ? ".nested-fields" : ".newcurrencyBlock", $(this).parents(parentClass).find(".rate .amount").text(a + " " + $(this).find("option:selected").text()), clearTimeout(t);
            var r = this;
            t = setTimeout(function() {
                e(r)
            }, n)
        });
        var t, n = 1500;
        $(document).on("keyup", "#foreign_currency, #aud_currency", function() {
            clearTimeout(t);
            var i = this;
            t = setTimeout(function() {
                e(i)
            }, n)
        }), $(document).on("keydown", "#foreign_currency, #aud_currency", function() {
            clearTimeout(t)
        }), $(function() {
            var e = window.location.hash;
            e && $('ul.nav a[href="' + e + '"]').tab("show"), $(".deliverytitle.chosen").tab("show"), setTimeout(function() {
                $("html, body").scrollTop(0)
            }, 5), $(".nav-tabs a").click(function() {
                $(this).tab("show");
                var e = $("body").scrollTop() || $("html").scrollTop();
                window.location.hash = this.hash, $("html,body").scrollTop(e)
            })
        }), $(document).on("click", ".deliverytitle", function() {
            var e = $(this),
                t = e.data("option");
            $("#order_delivery_method").val(t)
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, n) {
            return n === undefined && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
        } : e(jQuery)
    }(function(e) {
        var t = function() {
                if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
                var t;
                return function() {
                        if (!t || !t.requirejs) {
                            t ? n = t : t = {};
                            var e, n, i;
                            ! function(t) {
                                function a(e, t) {
                                    return w.call(e, t)
                                }

                                function r(e, t) {
                                    var n, i, a, r, s, o, d, l, u, c, h, p, f = t && t.split("/"),
                                        m = v.map,
                                        _ = m && m["*"] || {};
                                    if (e) {
                                        for (e = e.split("/"), s = e.length - 1, v.nodeIdCompat && D.test(e[s]) && (e[s] = e[s].replace(D, "")), "." === e[0].charAt(0) && f && (p = f.slice(0, f.length - 1), e = p.concat(e)), u = 0; u < e.length; u++)
                                            if ("." === (h = e[u])) e.splice(u, 1), u -= 1;
                                            else if (".." === h) {
                                            if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                                            u > 0 && (e.splice(u - 1, 2), u -= 2)
                                        }
                                        e = e.join("/")
                                    }
                                    if ((f || _) && m) {
                                        for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                                            if (i = n.slice(0, u).join("/"), f)
                                                for (c = f.length; c > 0; c -= 1)
                                                    if ((a = m[f.slice(0, c).join("/")]) && (a = a[i])) {
                                                        r = a, o = u;
                                                        break
                                                    }
                                            if (r) break;
                                            !d && _ && _[i] && (d = _[i], l = u)
                                        }!r && d && (r = d, o = l), r && (n.splice(0, o, r), e = n.join("/"))
                                    }
                                    return e
                                }

                                function s(e, n) {
                                    return function() {
                                        var i = b.call(arguments, 0);
                                        return "string" != typeof i[0] && 1 === i.length && i.push(null), f.apply(t, i.concat([e, n]))
                                    }
                                }

                                function o(e) {
                                    return function(t) {
                                        return r(t, e)
                                    }
                                }

                                function d(e) {
                                    return function(t) {
                                        g[e] = t
                                    }
                                }

                                function l(e) {
                                    if (a(y, e)) {
                                        var n = y[e];
                                        delete y[e], M[e] = !0, p.apply(t, n)
                                    }
                                    if (!a(g, e) && !a(M, e)) throw new Error("No " + e);
                                    return g[e]
                                }

                                function u(e) {
                                    var t, n = e ? e.indexOf("!") : -1;
                                    return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                                }

                                function c(e) {
                                    return e ? u(e) : []
                                }

                                function h(e) {
                                    return function() {
                                        return v && v.config && v.config[e] || {}
                                    }
                                }
                                var p, f, m, _, g = {},
                                    y = {},
                                    v = {},
                                    M = {},
                                    w = Object.prototype.hasOwnProperty,
                                    b = [].slice,
                                    D = /\.js$/;
                                m = function(e, t) {
                                    var n, i = u(e),
                                        a = i[0],
                                        s = t[1];
                                    return e = i[1], a && (a = r(a, s), n = l(a)), a ? e = n && n.normalize ? n.normalize(e, o(s)) : r(e, s) : (e = r(e, s), i = u(e), a = i[0], e = i[1], a && (n = l(a))), {
                                        f: a ? a + "!" + e : e,
                                        n: e,
                                        pr: a,
                                        p: n
                                    }
                                }, _ = {
                                    require: function(e) {
                                        return s(e)
                                    },
                                    exports: function(e) {
                                        var t = g[e];
                                        return void 0 !== t ? t : g[e] = {}
                                    },
                                    module: function(e) {
                                        return {
                                            id: e,
                                            uri: "",
                                            exports: g[e],
                                            config: h(e)
                                        }
                                    }
                                }, p = function(e, n, i, r) {
                                    var o, u, h, p, f, v, w, b = [],
                                        D = typeof i;
                                    if (r = r || e, v = c(r), "undefined" === D || "function" === D) {
                                        for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                            if (p = m(n[f], v), "require" === (u = p.f)) b[f] = _.require(e);
                                            else if ("exports" === u) b[f] = _.exports(e), w = !0;
                                        else if ("module" === u) o = b[f] = _.module(e);
                                        else if (a(g, u) || a(y, u) || a(M, u)) b[f] = l(u);
                                        else {
                                            if (!p.p) throw new Error(e + " missing " + u);
                                            p.p.load(p.n, s(r, !0), d(u), {}), b[f] = g[u]
                                        }
                                        h = i ? i.apply(g[e], b) : undefined, e && (o && o.exports !== t && o.exports !== g[e] ? g[e] = o.exports : h === t && w || (g[e] = h))
                                    } else e && (g[e] = i)
                                }, e = n = f = function(e, n, i, a, r) {
                                    if ("string" == typeof e) return _[e] ? _[e](n) : l(m(e, c(n)).f);
                                    if (!e.splice) {
                                        if (v = e, v.deps && f(v.deps, v.callback), !n) return;
                                        n.splice ? (e = n, n = i, i = null) : e = t
                                    }
                                    return n = n || function() {}, "function" == typeof i && (i = a, a = r), a ? p(t, e, n, i) : setTimeout(function() {
                                        p(t, e, n, i)
                                    }, 4), f
                                }, f.config = function(e) {
                                    return f(e)
                                }, e._defined = g, i = function(e, t, n) {
                                    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                    t.splice || (n = t, t = []), a(g, e) || a(y, e) || (y[e] = [e, t, n])
                                }, i.amd = {
                                    jQuery: !0
                                }
                            }(), t.requirejs = e, t.require = n, t.define = i
                        }
                    }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                        var t = e || $;
                        return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                    }), t.define("select2/utils", ["jquery"], function(e) {
                        function t(e) {
                            var t = e.prototype,
                                n = [];
                            for (var i in t) {
                                "function" == typeof t[i] && ("constructor" !== i && n.push(i))
                            }
                            return n
                        }
                        var n = {};
                        n.Extend = function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            var i = {}.hasOwnProperty;
                            for (var a in t) i.call(t, a) && (e[a] = t[a]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        }, n.Decorate = function(e, n) {
                            function i() {
                                var t = Array.prototype.unshift,
                                    i = n.prototype.constructor.length,
                                    a = e.prototype.constructor;
                                i > 0 && (t.call(arguments, e.prototype.constructor), a = n.prototype.constructor), a.apply(this, arguments)
                            }

                            function a() {
                                this.constructor = i
                            }
                            var r = t(n),
                                s = t(e);
                            n.displayName = e.displayName, i.prototype = new a;
                            for (var o = 0; o < s.length; o++) {
                                var d = s[o];
                                i.prototype[d] = e.prototype[d]
                            }
                            for (var l = (function(e) {
                                    var t = function() {};
                                    e in i.prototype && (t = i.prototype[e]);
                                    var a = n.prototype[e];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, t), a.apply(this, arguments)
                                    }
                                }), u = 0; u < r.length; u++) {
                                var c = r[u];
                                i.prototype[c] = l(c)
                            }
                            return i
                        };
                        var i = function() {
                            this.listeners = {}
                        };
                        i.prototype.on = function(e, t) {
                            this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                        }, i.prototype.trigger = function(e) {
                            var t = Array.prototype.slice,
                                n = t.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, i.prototype.invoke = function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                        }, n.Observable = i, n.generateChars = function(e) {
                            for (var t = "", n = 0; n < e; n++) {
                                t += Math.floor(36 * Math.random()).toString(36)
                            }
                            return t
                        }, n.bind = function(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }, n._convertData = function(e) {
                            for (var t in e) {
                                var n = t.split("-"),
                                    i = e;
                                if (1 !== n.length) {
                                    for (var a = 0; a < n.length; a++) {
                                        var r = n[a];
                                        r = r.substring(0, 1).toLowerCase() + r.substring(1), r in i || (i[r] = {}), a == n.length - 1 && (i[r] = e[t]), i = i[r]
                                    }
                                    delete e[t]
                                }
                            }
                            return e
                        }, n.hasScroll = function(t, n) {
                            var i = e(n),
                                a = n.style.overflowX,
                                r = n.style.overflowY;
                            return (a !== r || "hidden" !== r && "visible" !== r) && ("scroll" === a || "scroll" === r || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                        }, n.escapeMarkup = function(e) {
                            var t = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                                return t[e]
                            })
                        }, n.appendMany = function(t, n) {
                            if ("1.7" === e.fn.jquery.substr(0, 3)) {
                                var i = e();
                                e.map(n, function(e) {
                                    i = i.add(e)
                                }), n = i
                            }
                            t.append(n)
                        }, n.__cache = {};
                        var a = 0;
                        return n.GetUniqueElementId = function(e) {
                            var t = e.getAttribute("data-select2-id");
                            return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++a), t = a.toString())), t
                        }, n.StoreData = function(e, t, i) {
                            var a = n.GetUniqueElementId(e);
                            n.__cache[a] || (n.__cache[a] = {}), n.__cache[a][t] = i
                        }, n.GetData = function(t, i) {
                            var a = n.GetUniqueElementId(t);
                            return i ? n.__cache[a] && null != n.__cache[a][i] ? n.__cache[a][i] : e(t).data(i) : n.__cache[a]
                        }, n.RemoveData = function(e) {
                            var t = n.GetUniqueElementId(e);
                            null != n.__cache[t] && delete n.__cache[t]
                        }, n
                    }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                        function n(e, t, i) {
                            this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                        }
                        return t.Extend(n, t.Observable), n.prototype.render = function() {
                            var t = e('<ul class="select2-results__options" role="tree"></ul>');
                            return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                        }, n.prototype.clear = function() {
                            this.$results.empty()
                        }, n.prototype.displayMessage = function(t) {
                            var n = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                a = this.options.get("translations").get(t.message);
                            i.append(n(a(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                        }, n.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }, n.prototype.append = function(e) {
                            this.hideLoading();
                            var t = [];
                            if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            }));
                            e.results = this.sort(e.results);
                            for (var n = 0; n < e.results.length; n++) {
                                var i = e.results[n],
                                    a = this.option(i);
                                t.push(a)
                            }
                            this.$results.append(t)
                        }, n.prototype.position = function(e, t) {
                            t.find(".select2-results").append(e)
                        }, n.prototype.sort = function(e) {
                            return this.options.get("sorter")(e)
                        }, n.prototype.highlightFirstItem = function() {
                            var e = this.$results.find(".select2-results__option[aria-selected]"),
                                t = e.filter("[aria-selected=true]");
                            t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                        }, n.prototype.setClasses = function() {
                            var n = this;
                            this.data.current(function(i) {
                                var a = e.map(i, function(e) {
                                    return e.id.toString()
                                });
                                n.$results.find(".select2-results__option[aria-selected]").each(function() {
                                    var n = e(this),
                                        i = t.GetData(this, "data"),
                                        r = "" + i.id;
                                    null != i.element && i.element.selected || null == i.element && e.inArray(r, a) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                                })
                            })
                        }, n.prototype.showLoading = function(e) {
                            this.hideLoading();
                            var t = this.options.get("translations").get("searching"),
                                n = {
                                    disabled: !0,
                                    loading: !0,
                                    text: t(e)
                                },
                                i = this.option(n);
                            i.className += " loading-results", this.$results.prepend(i)
                        }, n.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }, n.prototype.option = function(n) {
                            var i = document.createElement("li");
                            i.className = "select2-results__option";
                            var a = {
                                role: "treeitem",
                                "aria-selected": "false"
                            };
                            n.disabled && (delete a["aria-selected"], a["aria-disabled"] = "true"), null == n.id && delete a["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (a.role = "group", a["aria-label"] = n.text, delete a["aria-selected"]);
                            for (var r in a) {
                                var s = a[r];
                                i.setAttribute(r, s)
                            }
                            if (n.children) {
                                var o = e(i),
                                    d = document.createElement("strong");
                                d.className = "select2-results__group";
                                e(d);
                                this.template(n, d);
                                for (var l = [], u = 0; u < n.children.length; u++) {
                                    var c = n.children[u],
                                        h = this.option(c);
                                    l.push(h)
                                }
                                var p = e("<ul></ul>", {
                                    "class": "select2-results__options select2-results__options--nested"
                                });
                                p.append(l), o.append(d), o.append(p)
                            } else this.template(n, i);
                            return t.StoreData(i, "data", n), i
                        }, n.prototype.bind = function(n) {
                            var i = this,
                                a = n.id + "-results";
                            this.$results.attr("id", a), n.on("results:all", function(e) {
                                i.clear(), i.append(e.data), n.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), n.on("results:append", function(e) {
                                i.append(e.data), n.isOpen() && i.setClasses()
                            }), n.on("query", function(e) {
                                i.hideMessages(), i.showLoading(e)
                            }), n.on("select", function() {
                                n.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), n.on("unselect", function() {
                                n.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), n.on("open", function() {
                                i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                            }), n.on("close", function() {
                                i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                            }), n.on("results:toggle", function() {
                                var e = i.getHighlightedResults();
                                0 !== e.length && e.trigger("mouseup")
                            }), n.on("results:select", function() {
                                var e = i.getHighlightedResults();
                                if (0 !== e.length) {
                                    var n = t.GetData(e[0], "data");
                                    "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                        data: n
                                    })
                                }
                            }), n.on("results:previous", function() {
                                var e = i.getHighlightedResults(),
                                    t = i.$results.find("[aria-selected]"),
                                    n = t.index(e);
                                if (!(n <= 0)) {
                                    var a = n - 1;
                                    0 === e.length && (a = 0);
                                    var r = t.eq(a);
                                    r.trigger("mouseenter");
                                    var s = i.$results.offset().top,
                                        o = r.offset().top,
                                        d = i.$results.scrollTop() + (o - s);
                                    0 === a ? i.$results.scrollTop(0) : o - s < 0 && i.$results.scrollTop(d)
                                }
                            }), n.on("results:next", function() {
                                var e = i.getHighlightedResults(),
                                    t = i.$results.find("[aria-selected]"),
                                    n = t.index(e),
                                    a = n + 1;
                                if (!(a >= t.length)) {
                                    var r = t.eq(a);
                                    r.trigger("mouseenter");
                                    var s = i.$results.offset().top + i.$results.outerHeight(!1),
                                        o = r.offset().top + r.outerHeight(!1),
                                        d = i.$results.scrollTop() + o - s;
                                    0 === a ? i.$results.scrollTop(0) : o > s && i.$results.scrollTop(d)
                                }
                            }), n.on("results:focus", function(e) {
                                e.element.addClass("select2-results__option--highlighted")
                            }), n.on("results:message", function(e) {
                                i.displayMessage(e)
                            }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                                var t = i.$results.scrollTop(),
                                    n = i.$results.get(0).scrollHeight - t + e.deltaY,
                                    a = e.deltaY > 0 && t - e.deltaY <= 0,
                                    r = e.deltaY < 0 && n <= i.$results.height();
                                a ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(n) {
                                var a = e(this),
                                    r = t.GetData(this, "data");
                                if ("true" === a.attr("aria-selected")) return void(i.options.get("multiple") ? i.trigger("unselect", {
                                    originalEvent: n,
                                    data: r
                                }) : i.trigger("close", {}));
                                i.trigger("select", {
                                    originalEvent: n,
                                    data: r
                                })
                            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                                var n = t.GetData(this, "data");
                                i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                                    data: n,
                                    element: e(this)
                                })
                            })
                        }, n.prototype.getHighlightedResults = function() {
                            return this.$results.find(".select2-results__option--highlighted")
                        }, n.prototype.destroy = function() {
                            this.$results.remove()
                        }, n.prototype.ensureHighlightVisible = function() {
                            var e = this.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = this.$results.find("[aria-selected]"),
                                    n = t.index(e),
                                    i = this.$results.offset().top,
                                    a = e.offset().top,
                                    r = this.$results.scrollTop() + (a - i),
                                    s = a - i;
                                r -= 2 * e.outerHeight(!1), n <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r)
                            }
                        }, n.prototype.template = function(t, n) {
                            var i = this.options.get("templateResult"),
                                a = this.options.get("escapeMarkup"),
                                r = i(t, n);
                            null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = a(r) : e(n).append(r)
                        }, n
                    }), t.define("select2/keys", [], function() {
                        return {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        }
                    }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                        function i(e, t) {
                            this.$element = e, this.options = t, i.__super__.constructor.call(this)
                        }
                        return t.Extend(i, t.Observable), i.prototype.render = function() {
                            var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), this.$selection = n, n
                        }, i.prototype.bind = function(e) {
                            var t = this,
                                i = (e.id, e.id + "-results");
                            this.container = e, this.$selection.on("focus", function(e) {
                                t.trigger("focus", e)
                            }), this.$selection.on("blur", function(e) {
                                t._handleBlur(e)
                            }), this.$selection.on("keydown", function(e) {
                                t.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                            }), e.on("results:focus", function(e) {
                                t.$selection.attr("aria-activedescendant", e.data._resultId)
                            }), e.on("selection:update", function(e) {
                                t.update(e.data)
                            }), e.on("open", function() {
                                t.$selection.attr("aria-expanded", "true"), t.$selection.attr("aria-owns", i), t._attachCloseHandler(e)
                            }), e.on("close", function() {
                                t.$selection.attr("aria-expanded", "false"), t.$selection.removeAttr("aria-activedescendant"), t.$selection.removeAttr("aria-owns"), t.$selection.focus(), window.setTimeout(function() {
                                    t.$selection.focus()
                                }, 0), t._detachCloseHandler(e)
                            }), e.on("enable", function() {
                                t.$selection.attr("tabindex", t._tabindex)
                            }), e.on("disable", function() {
                                t.$selection.attr("tabindex", "-1")
                            })
                        }, i.prototype._handleBlur = function(t) {
                            var n = this;
                            window.setTimeout(function() {
                                document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                            }, 1)
                        }, i.prototype._attachCloseHandler = function(n) {
                            e(document.body).on("mousedown.select2." + n.id, function(n) {
                                var i = e(n.target),
                                    a = i.closest(".select2");
                                e(".select2.select2-container--open").each(function() {
                                    e(this), this != a[0] && t.GetData(this, "element").select2("close")
                                })
                            })
                        }, i.prototype._detachCloseHandler = function(t) {
                            e(document.body).off("mousedown.select2." + t.id)
                        }, i.prototype.position = function(e, t) {
                            t.find(".selection").append(e)
                        }, i.prototype.destroy = function() {
                            this._detachCloseHandler(this.container)
                        }, i.prototype.update = function() {
                            throw new Error("The `update` method must be defined in child classes.")
                        }, i
                    }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n) {
                        function i() {
                            i.__super__.constructor.apply(this, arguments)
                        }
                        return n.Extend(i, t), i.prototype.render = function() {
                            var e = i.__super__.render.call(this);
                            return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                        }, i.prototype.bind = function(e) {
                            var t = this;
                            i.__super__.bind.apply(this, arguments);
                            var n = e.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", n).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(e) {
                                1 === e.which && t.trigger("toggle", {
                                    originalEvent: e
                                })
                            }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), e.on("focus", function() {
                                e.isOpen() || t.$selection.focus()
                            })
                        }, i.prototype.clear = function() {
                            var e = this.$selection.find(".select2-selection__rendered");
                            e.empty(), e.removeAttr("title")
                        }, i.prototype.display = function(e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t))
                        }, i.prototype.selectionContainer = function() {
                            return e("<span></span>")
                        }, i.prototype.update = function(e) {
                            if (0 === e.length) return void this.clear();
                            var t = e[0],
                                n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(t, n);
                            n.empty().append(i), n.attr("title", t.title || t.text)
                        }, i
                    }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                        function i() {
                            i.__super__.constructor.apply(this, arguments)
                        }
                        return n.Extend(i, t), i.prototype.render = function() {
                            var e = i.__super__.render.call(this);
                            return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                        }, i.prototype.bind = function() {
                            var t = this;
                            i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                                t.trigger("toggle", {
                                    originalEvent: e
                                })
                            }), this.$selection.on("click", ".select2-selection__choice__remove", function(i) {
                                if (!t.options.get("disabled")) {
                                    var a = e(this),
                                        r = a.parent(),
                                        s = n.GetData(r[0], "data");
                                    t.trigger("unselect", {
                                        originalEvent: i,
                                        data: s
                                    })
                                }
                            })
                        }, i.prototype.clear = function() {
                            var e = this.$selection.find(".select2-selection__rendered");
                            e.empty(), e.removeAttr("title")
                        }, i.prototype.display = function(e, t) {
                            var n = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(n(e, t))
                        }, i.prototype.selectionContainer = function() {
                            return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                        }, i.prototype.update = function(e) {
                            if (this.clear(), 0 !== e.length) {
                                for (var t = [], i = 0; i < e.length; i++) {
                                    var a = e[i],
                                        r = this.selectionContainer(),
                                        s = this.display(a, r);
                                    r.append(s), r.attr("title", a.title || a.text), n.StoreData(r[0], "data", a), t.push(r)
                                }
                                var o = this.$selection.find(".select2-selection__rendered");
                                n.appendMany(o, t)
                            }
                        }, i
                    }), t.define("select2/selection/placeholder", ["../utils"], function() {
                        function e(e, t, n) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                        }
                        return e.prototype.normalizePlaceholder = function(e, t) {
                            return "string" == typeof t && (t = {
                                id: "",
                                text: t
                            }), t
                        }, e.prototype.createPlaceholder = function(e, t) {
                            var n = this.selectionContainer();
                            return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                        }, e.prototype.update = function(e, t) {
                            var n = 1 == t.length && t[0].id != this.placeholder.id;
                            if (t.length > 1 || n) return e.call(this, t);
                            this.clear();
                            var i = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(i)
                        }, e
                    }), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(e, t, n) {
                        function i() {}
                        return i.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                                i._handleClear(e)
                            }), t.on("keypress", function(e) {
                                i._handleKeyboardClear(e, t)
                            })
                        }, i.prototype._handleClear = function(e, t) {
                            if (!this.options.get("disabled")) {
                                var i = this.$selection.find(".select2-selection__clear");
                                if (0 !== i.length) {
                                    t.stopPropagation();
                                    var a = n.GetData(i[0], "data"),
                                        r = this.$element.val();
                                    this.$element.val(this.placeholder.id);
                                    var s = {
                                        data: a
                                    };
                                    if (this.trigger("clear", s), s.prevented) return void this.$element.val(r);
                                    for (var o = 0; o < a.length; o++)
                                        if (s = {
                                                data: a[o]
                                            }, this.trigger("unselect", s), s.prevented) return void this.$element.val(r);
                                    this.$element.trigger("change"), this.trigger("toggle", {})
                                }
                            }
                        }, i.prototype._handleKeyboardClear = function(e, n, i) {
                            i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                        }, i.prototype.update = function(t, i) {
                            if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                                var a = e('<span class="select2-selection__clear">&times;</span>');
                                n.StoreData(a[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(a)
                            }
                        }, i
                    }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                        function i(e, t, n) {
                            e.call(this, t, n)
                        }
                        return i.prototype.render = function(t) {
                            var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = n, this.$search = n.find("input");
                            var i = t.call(this);
                            return this._transferTabIndex(), i
                        }, i.prototype.bind = function(e, i, a) {
                            var r = this;
                            e.call(this, i, a), i.on("open", function() {
                                r.$search.trigger("focus")
                            }), i.on("close", function() {
                                r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                            }), i.on("enable", function() {
                                r.$search.prop("disabled", !1), r._transferTabIndex()
                            }), i.on("disable", function() {
                                r.$search.prop("disabled", !0)
                            }), i.on("focus", function() {
                                r.$search.trigger("focus")
                            }), i.on("results:focus", function(e) {
                                r.$search.attr("aria-activedescendant", e.id)
                            }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                                r.trigger("focus", e)
                            }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                                r._handleBlur(e)
                            }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                                if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === r.$search.val()) {
                                    var i = r.$searchContainer.prev(".select2-selection__choice");
                                    if (i.length > 0) {
                                        var a = t.GetData(i[0], "data");
                                        r.searchRemoveChoice(a), e.preventDefault()
                                    }
                                }
                            });
                            var s = document.documentMode,
                                o = s && s <= 11;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                                if (o) return void r.$selection.off("input.search input.searchcheck");
                                r.$selection.off("keyup.search")
                            }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                                if (o && "input" === e.type) return void r.$selection.off("input.search input.searchcheck");
                                var t = e.which;
                                t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e)
                            })
                        }, i.prototype._transferTabIndex = function() {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                        }, i.prototype.createPlaceholder = function(e, t) {
                            this.$search.attr("placeholder", t.text)
                        }, i.prototype.update = function(e, t) {
                            var n = this.$search[0] == document.activeElement;
                            if (this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n) {
                                this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus()
                            }
                        }, i.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var e = this.$search.val();
                                this.trigger("query", {
                                    term: e
                                })
                            }
                            this._keyUpPrevented = !1
                        }, i.prototype.searchRemoveChoice = function(e, t) {
                            this.trigger("unselect", {
                                data: t
                            }), this.$search.val(t.text), this.handleSearch()
                        }, i.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var e = "";
                            if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
                            else {
                                e = .75 * (this.$search.val().length + 1) + "em"
                            }
                            this.$search.css("width", e)
                        }, i
                    }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                        function t() {}
                        return t.prototype.bind = function(t, n, i) {
                            var a = this,
                                r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                            t.call(this, n, i), n.on("*", function(t, n) {
                                if (-1 !== e.inArray(t, r)) {
                                    n = n || {};
                                    var i = e.Event("select2:" + t, {
                                        params: n
                                    });
                                    a.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                                }
                            })
                        }, t
                    }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                        function n(e) {
                            this.dict = e || {}
                        }
                        return n.prototype.all = function() {
                            return this.dict
                        }, n.prototype.get = function(e) {
                            return this.dict[e]
                        }, n.prototype.extend = function(t) {
                            this.dict = e.extend({}, t.all(), this.dict)
                        }, n._cache = {}, n.loadPath = function(e) {
                            if (!(e in n._cache)) {
                                var i = t(e);
                                n._cache[e] = i
                            }
                            return new n(n._cache[e])
                        }, n
                    }), t.define("select2/diacritics", [], function() {
                        return {
                            "\u24b6": "A",
                            "\uff21": "A",
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\u1ea6": "A",
                            "\u1ea4": "A",
                            "\u1eaa": "A",
                            "\u1ea8": "A",
                            "\xc3": "A",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u1eb0": "A",
                            "\u1eae": "A",
                            "\u1eb4": "A",
                            "\u1eb2": "A",
                            "\u0226": "A",
                            "\u01e0": "A",
                            "\xc4": "A",
                            "\u01de": "A",
                            "\u1ea2": "A",
                            "\xc5": "A",
                            "\u01fa": "A",
                            "\u01cd": "A",
                            "\u0200": "A",
                            "\u0202": "A",
                            "\u1ea0": "A",
                            "\u1eac": "A",
                            "\u1eb6": "A",
                            "\u1e00": "A",
                            "\u0104": "A",
                            "\u023a": "A",
                            "\u2c6f": "A",
                            "\ua732": "AA",
                            "\xc6": "AE",
                            "\u01fc": "AE",
                            "\u01e2": "AE",
                            "\ua734": "AO",
                            "\ua736": "AU",
                            "\ua738": "AV",
                            "\ua73a": "AV",
                            "\ua73c": "AY",
                            "\u24b7": "B",
                            "\uff22": "B",
                            "\u1e02": "B",
                            "\u1e04": "B",
                            "\u1e06": "B",
                            "\u0243": "B",
                            "\u0182": "B",
                            "\u0181": "B",
                            "\u24b8": "C",
                            "\uff23": "C",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\xc7": "C",
                            "\u1e08": "C",
                            "\u0187": "C",
                            "\u023b": "C",
                            "\ua73e": "C",
                            "\u24b9": "D",
                            "\uff24": "D",
                            "\u1e0a": "D",
                            "\u010e": "D",
                            "\u1e0c": "D",
                            "\u1e10": "D",
                            "\u1e12": "D",
                            "\u1e0e": "D",
                            "\u0110": "D",
                            "\u018b": "D",
                            "\u018a": "D",
                            "\u0189": "D",
                            "\ua779": "D",
                            "\u01f1": "DZ",
                            "\u01c4": "DZ",
                            "\u01f2": "Dz",
                            "\u01c5": "Dz",
                            "\u24ba": "E",
                            "\uff25": "E",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\u1ec0": "E",
                            "\u1ebe": "E",
                            "\u1ec4": "E",
                            "\u1ec2": "E",
                            "\u1ebc": "E",
                            "\u0112": "E",
                            "\u1e14": "E",
                            "\u1e16": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\xcb": "E",
                            "\u1eba": "E",
                            "\u011a": "E",
                            "\u0204": "E",
                            "\u0206": "E",
                            "\u1eb8": "E",
                            "\u1ec6": "E",
                            "\u0228": "E",
                            "\u1e1c": "E",
                            "\u0118": "E",
                            "\u1e18": "E",
                            "\u1e1a": "E",
                            "\u0190": "E",
                            "\u018e": "E",
                            "\u24bb": "F",
                            "\uff26": "F",
                            "\u1e1e": "F",
                            "\u0191": "F",
                            "\ua77b": "F",
                            "\u24bc": "G",
                            "\uff27": "G",
                            "\u01f4": "G",
                            "\u011c": "G",
                            "\u1e20": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u01e6": "G",
                            "\u0122": "G",
                            "\u01e4": "G",
                            "\u0193": "G",
                            "\ua7a0": "G",
                            "\ua77d": "G",
                            "\ua77e": "G",
                            "\u24bd": "H",
                            "\uff28": "H",
                            "\u0124": "H",
                            "\u1e22": "H",
                            "\u1e26": "H",
                            "\u021e": "H",
                            "\u1e24": "H",
                            "\u1e28": "H",
                            "\u1e2a": "H",
                            "\u0126": "H",
                            "\u2c67": "H",
                            "\u2c75": "H",
                            "\ua78d": "H",
                            "\u24be": "I",
                            "\uff29": "I",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u0130": "I",
                            "\xcf": "I",
                            "\u1e2e": "I",
                            "\u1ec8": "I",
                            "\u01cf": "I",
                            "\u0208": "I",
                            "\u020a": "I",
                            "\u1eca": "I",
                            "\u012e": "I",
                            "\u1e2c": "I",
                            "\u0197": "I",
                            "\u24bf": "J",
                            "\uff2a": "J",
                            "\u0134": "J",
                            "\u0248": "J",
                            "\u24c0": "K",
                            "\uff2b": "K",
                            "\u1e30": "K",
                            "\u01e8": "K",
                            "\u1e32": "K",
                            "\u0136": "K",
                            "\u1e34": "K",
                            "\u0198": "K",
                            "\u2c69": "K",
                            "\ua740": "K",
                            "\ua742": "K",
                            "\ua744": "K",
                            "\ua7a2": "K",
                            "\u24c1": "L",
                            "\uff2c": "L",
                            "\u013f": "L",
                            "\u0139": "L",
                            "\u013d": "L",
                            "\u1e36": "L",
                            "\u1e38": "L",
                            "\u013b": "L",
                            "\u1e3c": "L",
                            "\u1e3a": "L",
                            "\u0141": "L",
                            "\u023d": "L",
                            "\u2c62": "L",
                            "\u2c60": "L",
                            "\ua748": "L",
                            "\ua746": "L",
                            "\ua780": "L",
                            "\u01c7": "LJ",
                            "\u01c8": "Lj",
                            "\u24c2": "M",
                            "\uff2d": "M",
                            "\u1e3e": "M",
                            "\u1e40": "M",
                            "\u1e42": "M",
                            "\u2c6e": "M",
                            "\u019c": "M",
                            "\u24c3": "N",
                            "\uff2e": "N",
                            "\u01f8": "N",
                            "\u0143": "N",
                            "\xd1": "N",
                            "\u1e44": "N",
                            "\u0147": "N",
                            "\u1e46": "N",
                            "\u0145": "N",
                            "\u1e4a": "N",
                            "\u1e48": "N",
                            "\u0220": "N",
                            "\u019d": "N",
                            "\ua790": "N",
                            "\ua7a4": "N",
                            "\u01ca": "NJ",
                            "\u01cb": "Nj",
                            "\u24c4": "O",
                            "\uff2f": "O",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\u1ed2": "O",
                            "\u1ed0": "O",
                            "\u1ed6": "O",
                            "\u1ed4": "O",
                            "\xd5": "O",
                            "\u1e4c": "O",
                            "\u022c": "O",
                            "\u1e4e": "O",
                            "\u014c": "O",
                            "\u1e50": "O",
                            "\u1e52": "O",
                            "\u014e": "O",
                            "\u022e": "O",
                            "\u0230": "O",
                            "\xd6": "O",
                            "\u022a": "O",
                            "\u1ece": "O",
                            "\u0150": "O",
                            "\u01d1": "O",
                            "\u020c": "O",
                            "\u020e": "O",
                            "\u01a0": "O",
                            "\u1edc": "O",
                            "\u1eda": "O",
                            "\u1ee0": "O",
                            "\u1ede": "O",
                            "\u1ee2": "O",
                            "\u1ecc": "O",
                            "\u1ed8": "O",
                            "\u01ea": "O",
                            "\u01ec": "O",
                            "\xd8": "O",
                            "\u01fe": "O",
                            "\u0186": "O",
                            "\u019f": "O",
                            "\ua74a": "O",
                            "\ua74c": "O",
                            "\u01a2": "OI",
                            "\ua74e": "OO",
                            "\u0222": "OU",
                            "\u24c5": "P",
                            "\uff30": "P",
                            "\u1e54": "P",
                            "\u1e56": "P",
                            "\u01a4": "P",
                            "\u2c63": "P",
                            "\ua750": "P",
                            "\ua752": "P",
                            "\ua754": "P",
                            "\u24c6": "Q",
                            "\uff31": "Q",
                            "\ua756": "Q",
                            "\ua758": "Q",
                            "\u024a": "Q",
                            "\u24c7": "R",
                            "\uff32": "R",
                            "\u0154": "R",
                            "\u1e58": "R",
                            "\u0158": "R",
                            "\u0210": "R",
                            "\u0212": "R",
                            "\u1e5a": "R",
                            "\u1e5c": "R",
                            "\u0156": "R",
                            "\u1e5e": "R",
                            "\u024c": "R",
                            "\u2c64": "R",
                            "\ua75a": "R",
                            "\ua7a6": "R",
                            "\ua782": "R",
                            "\u24c8": "S",
                            "\uff33": "S",
                            "\u1e9e": "S",
                            "\u015a": "S",
                            "\u1e64": "S",
                            "\u015c": "S",
                            "\u1e60": "S",
                            "\u0160": "S",
                            "\u1e66": "S",
                            "\u1e62": "S",
                            "\u1e68": "S",
                            "\u0218": "S",
                            "\u015e": "S",
                            "\u2c7e": "S",
                            "\ua7a8": "S",
                            "\ua784": "S",
                            "\u24c9": "T",
                            "\uff34": "T",
                            "\u1e6a": "T",
                            "\u0164": "T",
                            "\u1e6c": "T",
                            "\u021a": "T",
                            "\u0162": "T",
                            "\u1e70": "T",
                            "\u1e6e": "T",
                            "\u0166": "T",
                            "\u01ac": "T",
                            "\u01ae": "T",
                            "\u023e": "T",
                            "\ua786": "T",
                            "\ua728": "TZ",
                            "\u24ca": "U",
                            "\uff35": "U",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\u0168": "U",
                            "\u1e78": "U",
                            "\u016a": "U",
                            "\u1e7a": "U",
                            "\u016c": "U",
                            "\xdc": "U",
                            "\u01db": "U",
                            "\u01d7": "U",
                            "\u01d5": "U",
                            "\u01d9": "U",
                            "\u1ee6": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u01d3": "U",
                            "\u0214": "U",
                            "\u0216": "U",
                            "\u01af": "U",
                            "\u1eea": "U",
                            "\u1ee8": "U",
                            "\u1eee": "U",
                            "\u1eec": "U",
                            "\u1ef0": "U",
                            "\u1ee4": "U",
                            "\u1e72": "U",
                            "\u0172": "U",
                            "\u1e76": "U",
                            "\u1e74": "U",
                            "\u0244": "U",
                            "\u24cb": "V",
                            "\uff36": "V",
                            "\u1e7c": "V",
                            "\u1e7e": "V",
                            "\u01b2": "V",
                            "\ua75e": "V",
                            "\u0245": "V",
                            "\ua760": "VY",
                            "\u24cc": "W",
                            "\uff37": "W",
                            "\u1e80": "W",
                            "\u1e82": "W",
                            "\u0174": "W",
                            "\u1e86": "W",
                            "\u1e84": "W",
                            "\u1e88": "W",
                            "\u2c72": "W",
                            "\u24cd": "X",
                            "\uff38": "X",
                            "\u1e8a": "X",
                            "\u1e8c": "X",
                            "\u24ce": "Y",
                            "\uff39": "Y",
                            "\u1ef2": "Y",
                            "\xdd": "Y",
                            "\u0176": "Y",
                            "\u1ef8": "Y",
                            "\u0232": "Y",
                            "\u1e8e": "Y",
                            "\u0178": "Y",
                            "\u1ef6": "Y",
                            "\u1ef4": "Y",
                            "\u01b3": "Y",
                            "\u024e": "Y",
                            "\u1efe": "Y",
                            "\u24cf": "Z",
                            "\uff3a": "Z",
                            "\u0179": "Z",
                            "\u1e90": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u1e92": "Z",
                            "\u1e94": "Z",
                            "\u01b5": "Z",
                            "\u0224": "Z",
                            "\u2c7f": "Z",
                            "\u2c6b": "Z",
                            "\ua762": "Z",
                            "\u24d0": "a",
                            "\uff41": "a",
                            "\u1e9a": "a",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\u1ea7": "a",
                            "\u1ea5": "a",
                            "\u1eab": "a",
                            "\u1ea9": "a",
                            "\xe3": "a",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u1eb1": "a",
                            "\u1eaf": "a",
                            "\u1eb5": "a",
                            "\u1eb3": "a",
                            "\u0227": "a",
                            "\u01e1": "a",
                            "\xe4": "a",
                            "\u01df": "a",
                            "\u1ea3": "a",
                            "\xe5": "a",
                            "\u01fb": "a",
                            "\u01ce": "a",
                            "\u0201": "a",
                            "\u0203": "a",
                            "\u1ea1": "a",
                            "\u1ead": "a",
                            "\u1eb7": "a",
                            "\u1e01": "a",
                            "\u0105": "a",
                            "\u2c65": "a",
                            "\u0250": "a",
                            "\ua733": "aa",
                            "\xe6": "ae",
                            "\u01fd": "ae",
                            "\u01e3": "ae",
                            "\ua735": "ao",
                            "\ua737": "au",
                            "\ua739": "av",
                            "\ua73b": "av",
                            "\ua73d": "ay",
                            "\u24d1": "b",
                            "\uff42": "b",
                            "\u1e03": "b",
                            "\u1e05": "b",
                            "\u1e07": "b",
                            "\u0180": "b",
                            "\u0183": "b",
                            "\u0253": "b",
                            "\u24d2": "c",
                            "\uff43": "c",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\xe7": "c",
                            "\u1e09": "c",
                            "\u0188": "c",
                            "\u023c": "c",
                            "\ua73f": "c",
                            "\u2184": "c",
                            "\u24d3": "d",
                            "\uff44": "d",
                            "\u1e0b": "d",
                            "\u010f": "d",
                            "\u1e0d": "d",
                            "\u1e11": "d",
                            "\u1e13": "d",
                            "\u1e0f": "d",
                            "\u0111": "d",
                            "\u018c": "d",
                            "\u0256": "d",
                            "\u0257": "d",
                            "\ua77a": "d",
                            "\u01f3": "dz",
                            "\u01c6": "dz",
                            "\u24d4": "e",
                            "\uff45": "e",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\u1ec1": "e",
                            "\u1ebf": "e",
                            "\u1ec5": "e",
                            "\u1ec3": "e",
                            "\u1ebd": "e",
                            "\u0113": "e",
                            "\u1e15": "e",
                            "\u1e17": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\xeb": "e",
                            "\u1ebb": "e",
                            "\u011b": "e",
                            "\u0205": "e",
                            "\u0207": "e",
                            "\u1eb9": "e",
                            "\u1ec7": "e",
                            "\u0229": "e",
                            "\u1e1d": "e",
                            "\u0119": "e",
                            "\u1e19": "e",
                            "\u1e1b": "e",
                            "\u0247": "e",
                            "\u025b": "e",
                            "\u01dd": "e",
                            "\u24d5": "f",
                            "\uff46": "f",
                            "\u1e1f": "f",
                            "\u0192": "f",
                            "\ua77c": "f",
                            "\u24d6": "g",
                            "\uff47": "g",
                            "\u01f5": "g",
                            "\u011d": "g",
                            "\u1e21": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u01e7": "g",
                            "\u0123": "g",
                            "\u01e5": "g",
                            "\u0260": "g",
                            "\ua7a1": "g",
                            "\u1d79": "g",
                            "\ua77f": "g",
                            "\u24d7": "h",
                            "\uff48": "h",
                            "\u0125": "h",
                            "\u1e23": "h",
                            "\u1e27": "h",
                            "\u021f": "h",
                            "\u1e25": "h",
                            "\u1e29": "h",
                            "\u1e2b": "h",
                            "\u1e96": "h",
                            "\u0127": "h",
                            "\u2c68": "h",
                            "\u2c76": "h",
                            "\u0265": "h",
                            "\u0195": "hv",
                            "\u24d8": "i",
                            "\uff49": "i",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\xef": "i",
                            "\u1e2f": "i",
                            "\u1ec9": "i",
                            "\u01d0": "i",
                            "\u0209": "i",
                            "\u020b": "i",
                            "\u1ecb": "i",
                            "\u012f": "i",
                            "\u1e2d": "i",
                            "\u0268": "i",
                            "\u0131": "i",
                            "\u24d9": "j",
                            "\uff4a": "j",
                            "\u0135": "j",
                            "\u01f0": "j",
                            "\u0249": "j",
                            "\u24da": "k",
                            "\uff4b": "k",
                            "\u1e31": "k",
                            "\u01e9": "k",
                            "\u1e33": "k",
                            "\u0137": "k",
                            "\u1e35": "k",
                            "\u0199": "k",
                            "\u2c6a": "k",
                            "\ua741": "k",
                            "\ua743": "k",
                            "\ua745": "k",
                            "\ua7a3": "k",
                            "\u24db": "l",
                            "\uff4c": "l",
                            "\u0140": "l",
                            "\u013a": "l",
                            "\u013e": "l",
                            "\u1e37": "l",
                            "\u1e39": "l",
                            "\u013c": "l",
                            "\u1e3d": "l",
                            "\u1e3b": "l",
                            "\u017f": "l",
                            "\u0142": "l",
                            "\u019a": "l",
                            "\u026b": "l",
                            "\u2c61": "l",
                            "\ua749": "l",
                            "\ua781": "l",
                            "\ua747": "l",
                            "\u01c9": "lj",
                            "\u24dc": "m",
                            "\uff4d": "m",
                            "\u1e3f": "m",
                            "\u1e41": "m",
                            "\u1e43": "m",
                            "\u0271": "m",
                            "\u026f": "m",
                            "\u24dd": "n",
                            "\uff4e": "n",
                            "\u01f9": "n",
                            "\u0144": "n",
                            "\xf1": "n",
                            "\u1e45": "n",
                            "\u0148": "n",
                            "\u1e47": "n",
                            "\u0146": "n",
                            "\u1e4b": "n",
                            "\u1e49": "n",
                            "\u019e": "n",
                            "\u0272": "n",
                            "\u0149": "n",
                            "\ua791": "n",
                            "\ua7a5": "n",
                            "\u01cc": "nj",
                            "\u24de": "o",
                            "\uff4f": "o",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\u1ed3": "o",
                            "\u1ed1": "o",
                            "\u1ed7": "o",
                            "\u1ed5": "o",
                            "\xf5": "o",
                            "\u1e4d": "o",
                            "\u022d": "o",
                            "\u1e4f": "o",
                            "\u014d": "o",
                            "\u1e51": "o",
                            "\u1e53": "o",
                            "\u014f": "o",
                            "\u022f": "o",
                            "\u0231": "o",
                            "\xf6": "o",
                            "\u022b": "o",
                            "\u1ecf": "o",
                            "\u0151": "o",
                            "\u01d2": "o",
                            "\u020d": "o",
                            "\u020f": "o",
                            "\u01a1": "o",
                            "\u1edd": "o",
                            "\u1edb": "o",
                            "\u1ee1": "o",
                            "\u1edf": "o",
                            "\u1ee3": "o",
                            "\u1ecd": "o",
                            "\u1ed9": "o",
                            "\u01eb": "o",
                            "\u01ed": "o",
                            "\xf8": "o",
                            "\u01ff": "o",
                            "\u0254": "o",
                            "\ua74b": "o",
                            "\ua74d": "o",
                            "\u0275": "o",
                            "\u01a3": "oi",
                            "\u0223": "ou",
                            "\ua74f": "oo",
                            "\u24df": "p",
                            "\uff50": "p",
                            "\u1e55": "p",
                            "\u1e57": "p",
                            "\u01a5": "p",
                            "\u1d7d": "p",
                            "\ua751": "p",
                            "\ua753": "p",
                            "\ua755": "p",
                            "\u24e0": "q",
                            "\uff51": "q",
                            "\u024b": "q",
                            "\ua757": "q",
                            "\ua759": "q",
                            "\u24e1": "r",
                            "\uff52": "r",
                            "\u0155": "r",
                            "\u1e59": "r",
                            "\u0159": "r",
                            "\u0211": "r",
                            "\u0213": "r",
                            "\u1e5b": "r",
                            "\u1e5d": "r",
                            "\u0157": "r",
                            "\u1e5f": "r",
                            "\u024d": "r",
                            "\u027d": "r",
                            "\ua75b": "r",
                            "\ua7a7": "r",
                            "\ua783": "r",
                            "\u24e2": "s",
                            "\uff53": "s",
                            "\xdf": "s",
                            "\u015b": "s",
                            "\u1e65": "s",
                            "\u015d": "s",
                            "\u1e61": "s",
                            "\u0161": "s",
                            "\u1e67": "s",
                            "\u1e63": "s",
                            "\u1e69": "s",
                            "\u0219": "s",
                            "\u015f": "s",
                            "\u023f": "s",
                            "\ua7a9": "s",
                            "\ua785": "s",
                            "\u1e9b": "s",
                            "\u24e3": "t",
                            "\uff54": "t",
                            "\u1e6b": "t",
                            "\u1e97": "t",
                            "\u0165": "t",
                            "\u1e6d": "t",
                            "\u021b": "t",
                            "\u0163": "t",
                            "\u1e71": "t",
                            "\u1e6f": "t",
                            "\u0167": "t",
                            "\u01ad": "t",
                            "\u0288": "t",
                            "\u2c66": "t",
                            "\ua787": "t",
                            "\ua729": "tz",
                            "\u24e4": "u",
                            "\uff55": "u",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\u0169": "u",
                            "\u1e79": "u",
                            "\u016b": "u",
                            "\u1e7b": "u",
                            "\u016d": "u",
                            "\xfc": "u",
                            "\u01dc": "u",
                            "\u01d8": "u",
                            "\u01d6": "u",
                            "\u01da": "u",
                            "\u1ee7": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u01d4": "u",
                            "\u0215": "u",
                            "\u0217": "u",
                            "\u01b0": "u",
                            "\u1eeb": "u",
                            "\u1ee9": "u",
                            "\u1eef": "u",
                            "\u1eed": "u",
                            "\u1ef1": "u",
                            "\u1ee5": "u",
                            "\u1e73": "u",
                            "\u0173": "u",
                            "\u1e77": "u",
                            "\u1e75": "u",
                            "\u0289": "u",
                            "\u24e5": "v",
                            "\uff56": "v",
                            "\u1e7d": "v",
                            "\u1e7f": "v",
                            "\u028b": "v",
                            "\ua75f": "v",
                            "\u028c": "v",
                            "\ua761": "vy",
                            "\u24e6": "w",
                            "\uff57": "w",
                            "\u1e81": "w",
                            "\u1e83": "w",
                            "\u0175": "w",
                            "\u1e87": "w",
                            "\u1e85": "w",
                            "\u1e98": "w",
                            "\u1e89": "w",
                            "\u2c73": "w",
                            "\u24e7": "x",
                            "\uff58": "x",
                            "\u1e8b": "x",
                            "\u1e8d": "x",
                            "\u24e8": "y",
                            "\uff59": "y",
                            "\u1ef3": "y",
                            "\xfd": "y",
                            "\u0177": "y",
                            "\u1ef9": "y",
                            "\u0233": "y",
                            "\u1e8f": "y",
                            "\xff": "y",
                            "\u1ef7": "y",
                            "\u1e99": "y",
                            "\u1ef5": "y",
                            "\u01b4": "y",
                            "\u024f": "y",
                            "\u1eff": "y",
                            "\u24e9": "z",
                            "\uff5a": "z",
                            "\u017a": "z",
                            "\u1e91": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u1e93": "z",
                            "\u1e95": "z",
                            "\u01b6": "z",
                            "\u0225": "z",
                            "\u0240": "z",
                            "\u2c6c": "z",
                            "\ua763": "z",
                            "\u0386": "\u0391",
                            "\u0388": "\u0395",
                            "\u0389": "\u0397",
                            "\u038a": "\u0399",
                            "\u03aa": "\u0399",
                            "\u038c": "\u039f",
                            "\u038e": "\u03a5",
                            "\u03ab": "\u03a5",
                            "\u038f": "\u03a9",
                            "\u03ac": "\u03b1",
                            "\u03ad": "\u03b5",
                            "\u03ae": "\u03b7",
                            "\u03af": "\u03b9",
                            "\u03ca": "\u03b9",
                            "\u0390": "\u03b9",
                            "\u03cc": "\u03bf",
                            "\u03cd": "\u03c5",
                            "\u03cb": "\u03c5",
                            "\u03b0": "\u03c5",
                            "\u03c9": "\u03c9",
                            "\u03c2": "\u03c3"
                        }
                    }), t.define("select2/data/base", ["../utils"], function(e) {
                        function t() {
                            t.__super__.constructor.call(this)
                        }
                        return e.Extend(t, e.Observable), t.prototype.current = function() {
                            throw new Error("The `current` method must be defined in child classes.")
                        }, t.prototype.query = function() {
                            throw new Error("The `query` method must be defined in child classes.")
                        }, t.prototype.bind = function() {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                            var i = t.id + "-result-";
                            return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
                        }, t
                    }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                        function i(e, t) {
                            this.$element = e, this.options = t, i.__super__.constructor.call(this)
                        }
                        return t.Extend(i, e), i.prototype.current = function(e) {
                            var t = [],
                                i = this;
                            this.$element.find(":selected").each(function() {
                                var e = n(this),
                                    a = i.item(e);
                                t.push(a)
                            }), e(t)
                        }, i.prototype.select = function(e) {
                            var t = this;
                            if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                            if (this.$element.prop("multiple")) this.current(function(i) {
                                var a = [];
                                e = [e], e.push.apply(e, i);
                                for (var r = 0; r < e.length; r++) {
                                    var s = e[r].id; - 1 === n.inArray(s, a) && a.push(s)
                                }
                                t.$element.val(a), t.$element.trigger("change")
                            });
                            else {
                                var i = e.id;
                                this.$element.val(i), this.$element.trigger("change")
                            }
                        }, i.prototype.unselect = function(e) {
                            var t = this;
                            if (this.$element.prop("multiple")) {
                                if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("change");
                                this.current(function(i) {
                                    for (var a = [], r = 0; r < i.length; r++) {
                                        var s = i[r].id;
                                        s !== e.id && -1 === n.inArray(s, a) && a.push(s)
                                    }
                                    t.$element.val(a), t.$element.trigger("change")
                                })
                            }
                        }, i.prototype.bind = function(e) {
                            var t = this;
                            this.container = e, e.on("select", function(e) {
                                t.select(e.data)
                            }), e.on("unselect", function(e) {
                                t.unselect(e.data)
                            })
                        }, i.prototype.destroy = function() {
                            this.$element.find("*").each(function() {
                                t.RemoveData(this)
                            })
                        }, i.prototype.query = function(e, t) {
                            var i = [],
                                a = this;
                            this.$element.children().each(function() {
                                var t = n(this);
                                if (t.is("option") || t.is("optgroup")) {
                                    var r = a.item(t),
                                        s = a.matches(e, r);
                                    null !== s && i.push(s)
                                }
                            }), t({
                                results: i
                            })
                        }, i.prototype.addOptions = function(e) {
                            t.appendMany(this.$element, e)
                        }, i.prototype.option = function(e) {
                            var i;
                            e.children ? (i = document.createElement("optgroup"), i.label = e.text) : (i = document.createElement("option"), i.textContent !== undefined ? i.textContent = e.text : i.innerText = e.text), e.id !== undefined && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
                            var a = n(i),
                                r = this._normalizeItem(e);
                            return r.element = i, t.StoreData(i, "data", r), a
                        }, i.prototype.item = function(e) {
                            var i = {};
                            if (null != (i = t.GetData(e[0], "data"))) return i;
                            if (e.is("option")) i = {
                                id: e.val(),
                                text: e.text(),
                                disabled: e.prop("disabled"),
                                selected: e.prop("selected"),
                                title: e.prop("title")
                            };
                            else if (e.is("optgroup")) {
                                i = {
                                    text: e.prop("label"),
                                    children: [],
                                    title: e.prop("title")
                                };
                                for (var a = e.children("option"), r = [], s = 0; s < a.length; s++) {
                                    var o = n(a[s]),
                                        d = this.item(o);
                                    r.push(d)
                                }
                                i.children = r
                            }
                            return i = this._normalizeItem(i), i.element = e[0], t.StoreData(e[0], "data", i), i
                        }, i.prototype._normalizeItem = function(e) {
                            e !== Object(e) && (e = {
                                id: e,
                                text: e
                            }), e = n.extend({}, {
                                text: ""
                            }, e);
                            var t = {
                                selected: !1,
                                disabled: !1
                            };
                            return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                        }, i.prototype.matches = function(e, t) {
                            return this.options.get("matcher")(e, t)
                        }, i
                    }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                        function i(e, t) {
                            var n = t.get("data") || [];
                            i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                        }
                        return t.Extend(i, e), i.prototype.select = function(e) {
                            var t = this.$element.find("option").filter(function(t, n) {
                                return n.value == e.id.toString()
                            });
                            0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                        }, i.prototype.convertToOptions = function(e) {
                            function i(e) {
                                return function() {
                                    return n(this).val() == e.id
                                }
                            }
                            for (var a = this, r = this.$element.find("option"), s = r.map(function() {
                                    return a.item(n(this)).id
                                }).get(), o = [], d = 0; d < e.length; d++) {
                                var l = this._normalizeItem(e[d]);
                                if (n.inArray(l.id, s) >= 0) {
                                    var u = r.filter(i(l)),
                                        c = this.item(u),
                                        h = n.extend(!0, {}, l, c),
                                        p = this.option(h);
                                    u.replaceWith(p)
                                } else {
                                    var f = this.option(l);
                                    if (l.children) {
                                        var m = this.convertToOptions(l.children);
                                        t.appendMany(f, m)
                                    }
                                    o.push(f)
                                }
                            }
                            return o
                        }, i
                    }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                        function i(e, t) {
                            this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                        }
                        return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                            var t = {
                                data: function(e) {
                                    return n.extend({}, e, {
                                        q: e.term
                                    })
                                },
                                transport: function(e, t, i) {
                                    var a = n.ajax(e);
                                    return a.then(t), a.fail(i), a
                                }
                            };
                            return n.extend({}, t, e, !0)
                        }, i.prototype.processResults = function(e) {
                            return e
                        }, i.prototype.query = function(e, t) {
                            function i() {
                                var i = r.transport(r, function(i) {
                                    var r = a.processResults(i, e);
                                    a.options.get("debug") && window.console && console.error && (r && r.results && n.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(r)
                                }, function() {
                                    "status" in i && (0 === i.status || "0" === i.status) || a.trigger("results:message", {
                                        message: "errorLoading"
                                    })
                                });
                                a._request = i
                            }
                            var a = this;
                            null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var r = n.extend({
                                type: "GET"
                            }, this.ajaxOptions);
                            "function" == typeof r.url && (r.url = r.url.call(this.$element, e)), "function" == typeof r.data && (r.data = r.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                        }, i
                    }), t.define("select2/data/tags", ["jquery"], function(e) {
                        function t(t, n, i) {
                            var a = i.get("tags"),
                                r = i.get("createTag");
                            r !== undefined && (this.createTag = r);
                            var s = i.get("insertTag");
                            if (s !== undefined && (this.insertTag = s), t.call(this, n, i), e.isArray(a))
                                for (var o = 0; o < a.length; o++) {
                                    var d = a[o],
                                        l = this._normalizeItem(d),
                                        u = this.option(l);
                                    this.$element.append(u)
                                }
                        }
                        return t.prototype.query = function(e, t, n) {
                            function i(e, r) {
                                for (var s = e.results, o = 0; o < s.length; o++) {
                                    var d = s[o],
                                        l = null != d.children && !i({
                                            results: d.children
                                        }, !0);
                                    if ((d.text || "").toUpperCase() === (t.term || "").toUpperCase() || l) return !r && (e.data = s, void n(e))
                                }
                                if (r) return !0;
                                var u = a.createTag(t);
                                if (null != u) {
                                    var c = a.option(u);
                                    c.attr("data-select2-tag", !0), a.addOptions([c]), a.insertTag(s, u)
                                }
                                e.results = s, n(e)
                            }
                            var a = this;
                            if (this._removeOldTags(), null == t.term || null != t.page) return void e.call(this, t, n);
                            e.call(this, t, i)
                        }, t.prototype.createTag = function(t, n) {
                            var i = e.trim(n.term);
                            return "" === i ? null : {
                                id: i,
                                text: i
                            }
                        }, t.prototype.insertTag = function(e, t, n) {
                            t.unshift(n)
                        }, t.prototype._removeOldTags = function() {
                            this._lastTag;
                            this.$element.find("option[data-select2-tag]").each(function() {
                                this.selected || e(this).remove()
                            })
                        }, t
                    }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                        function t(e, t, n) {
                            var i = n.get("tokenizer");
                            i !== undefined && (this.tokenizer = i), e.call(this, t, n)
                        }
                        return t.prototype.bind = function(e, t, n) {
                            e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                        }, t.prototype.query = function(t, n, i) {
                            function a(t) {
                                var n = s._normalizeItem(t);
                                if (!s.$element.find("option").filter(function() {
                                        return e(this).val() === n.id
                                    }).length) {
                                    var i = s.option(n);
                                    i.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([i])
                                }
                                r(n)
                            }

                            function r(e) {
                                s.trigger("select", {
                                    data: e
                                })
                            }
                            var s = this;
                            n.term = n.term || "";
                            var o = this.tokenizer(n, this.options, a);
                            o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), n.term = o.term), t.call(this, n, i)
                        }, t.prototype.tokenizer = function(t, n, i, a) {
                            for (var r = i.get("tokenSeparators") || [], s = n.term, o = 0, d = this.createTag || function(e) {
                                    return {
                                        id: e.term,
                                        text: e.term
                                    }
                                }; o < s.length;) {
                                var l = s[o];
                                if (-1 !== e.inArray(l, r)) {
                                    var u = s.substr(0, o),
                                        c = e.extend({}, n, {
                                            term: u
                                        }),
                                        h = d(c);
                                    null != h ? (a(h), s = s.substr(o + 1) || "", o = 0) : o++
                                } else o++
                            }
                            return {
                                term: s
                            }
                        }, t
                    }), t.define("select2/data/minimumInputLength", [], function() {
                        function e(e, t, n) {
                            this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                        }
                        return e.prototype.query = function(e, t, n) {
                            if (t.term = t.term || "", t.term.length < this.minimumInputLength) return void this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            });
                            e.call(this, t, n)
                        }, e
                    }), t.define("select2/data/maximumInputLength", [], function() {
                        function e(e, t, n) {
                            this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                        }
                        return e.prototype.query = function(e, t, n) {
                            if (t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) return void this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: t.term,
                                    params: t
                                }
                            });
                            e.call(this, t, n)
                        }, e
                    }), t.define("select2/data/maximumSelectionLength", [], function() {
                        function e(e, t, n) {
                            this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                        }
                        return e.prototype.query = function(e, t, n) {
                            var i = this;
                            this.current(function(a) {
                                var r = null != a ? a.length : 0;
                                if (i.maximumSelectionLength > 0 && r >= i.maximumSelectionLength) return void i.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: i.maximumSelectionLength
                                    }
                                });
                                e.call(i, t, n)
                            })
                        }, e
                    }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                        function n(e, t) {
                            this.$element = e, this.options = t, n.__super__.constructor.call(this)
                        }
                        return t.Extend(n, t.Observable), n.prototype.render = function() {
                            var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                        }, n.prototype.bind = function() {}, n.prototype.position = function() {}, n.prototype.destroy = function() {
                            this.$dropdown.remove()
                        }, n
                    }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e) {
                        function t() {}
                        return t.prototype.render = function(t) {
                            var n = t.call(this),
                                i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                            return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                        }, t.prototype.bind = function(t, n, i) {
                            var a = this;
                            t.call(this, n, i), this.$search.on("keydown", function(e) {
                                a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented()
                            }), this.$search.on("input", function() {
                                e(this).off("keyup")
                            }), this.$search.on("keyup input", function(e) {
                                a.handleSearch(e)
                            }), n.on("open", function() {
                                a.$search.attr("tabindex", 0), a.$search.focus(), window.setTimeout(function() {
                                    a.$search.focus()
                                }, 0)
                            }), n.on("close", function() {
                                a.$search.attr("tabindex", -1), a.$search.val(""), a.$search.blur()
                            }), n.on("focus", function() {
                                n.isOpen() || a.$search.focus()
                            }), n.on("results:all", function(e) {
                                if (null == e.query.term || "" === e.query.term) {
                                    a.showSearch(e) ? a.$searchContainer.removeClass("select2-search--hide") : a.$searchContainer.addClass("select2-search--hide")
                                }
                            })
                        }, t.prototype.handleSearch = function() {
                            if (!this._keyUpPrevented) {
                                var e = this.$search.val();
                                this.trigger("query", {
                                    term: e
                                })
                            }
                            this._keyUpPrevented = !1
                        }, t.prototype.showSearch = function() {
                            return !0
                        }, t
                    }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                        function e(e, t, n, i) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                        }
                        return e.prototype.append = function(e, t) {
                            t.results = this.removePlaceholder(t.results), e.call(this, t)
                        }, e.prototype.normalizePlaceholder = function(e, t) {
                            return "string" == typeof t && (t = {
                                id: "",
                                text: t
                            }), t
                        }, e.prototype.removePlaceholder = function(e, t) {
                            for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                                var a = t[i];
                                this.placeholder.id === a.id && n.splice(i, 1)
                            }
                            return n
                        }, e
                    }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                        function t(e, t, n, i) {
                            this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                        }
                        return t.prototype.append = function(e, t) {
                            this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                        }, t.prototype.bind = function(t, n, i) {
                            var a = this;
                            t.call(this, n, i), n.on("query", function(e) {
                                a.lastParams = e, a.loading = !0
                            }), n.on("query:append", function(e) {
                                a.lastParams = e, a.loading = !0
                            }), this.$results.on("scroll", function() {
                                var t = e.contains(document.documentElement, a.$loadingMore[0]);
                                if (!a.loading && t) {
                                    a.$results.offset().top + a.$results.outerHeight(!1) + 50 >= a.$loadingMore.offset().top + a.$loadingMore.outerHeight(!1) && a.loadMore()
                                }
                            })
                        }, t.prototype.loadMore = function() {
                            this.loading = !0;
                            var t = e.extend({}, {
                                page: 1
                            }, this.lastParams);
                            t.page++, this.trigger("query:append", t)
                        }, t.prototype.showLoadingMore = function(e, t) {
                            return t.pagination && t.pagination.more
                        }, t.prototype.createLoadingMore = function() {
                            var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                n = this.options.get("translations").get("loadingMore");
                            return t.html(n(this.lastParams)), t
                        }, t
                    }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                        function n(t, n, i) {
                            this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
                        }
                        return n.prototype.bind = function(e, t, n) {
                            var i = this,
                                a = !1;
                            e.call(this, t, n), t.on("open", function() {
                                i._showDropdown(), i._attachPositioningHandler(t), a || (a = !0, t.on("results:all", function() {
                                    i._positionDropdown(), i._resizeDropdown()
                                }), t.on("results:append", function() {
                                    i._positionDropdown(), i._resizeDropdown()
                                }))
                            }), t.on("close", function() {
                                i._hideDropdown(), i._detachPositioningHandler(t)
                            }), this.$dropdownContainer.on("mousedown", function(e) {
                                e.stopPropagation()
                            })
                        }, n.prototype.destroy = function(e) {
                            e.call(this), this.$dropdownContainer.remove()
                        }, n.prototype.position = function(e, t, n) {
                            t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                                position: "absolute",
                                top: -999999
                            }), this.$container = n
                        }, n.prototype.render = function(t) {
                            var n = e("<span></span>"),
                                i = t.call(this);
                            return n.append(i), this.$dropdownContainer = n, n
                        }, n.prototype._hideDropdown = function() {
                            this.$dropdownContainer.detach()
                        }, n.prototype._attachPositioningHandler = function(n, i) {
                            var a = this,
                                r = "scroll.select2." + i.id,
                                s = "resize.select2." + i.id,
                                o = "orientationchange.select2." + i.id,
                                d = this.$container.parents().filter(t.hasScroll);
                            d.each(function() {
                                t.StoreData(this, "select2-scroll-position", {
                                    x: e(this).scrollLeft(),
                                    y: e(this).scrollTop()
                                })
                            }), d.on(r, function() {
                                var n = t.GetData(this, "select2-scroll-position");
                                e(this).scrollTop(n.y)
                            }), e(window).on(r + " " + s + " " + o, function() {
                                a._positionDropdown(), a._resizeDropdown()
                            })
                        }, n.prototype._detachPositioningHandler = function(n, i) {
                            var a = "scroll.select2." + i.id,
                                r = "resize.select2." + i.id,
                                s = "orientationchange.select2." + i.id;
                            this.$container.parents().filter(t.hasScroll).off(a), e(window).off(a + " " + r + " " + s)
                        }, n.prototype._positionDropdown = function() {
                            var t = e(window),
                                n = this.$dropdown.hasClass("select2-dropdown--above"),
                                i = this.$dropdown.hasClass("select2-dropdown--below"),
                                a = null,
                                r = this.$container.offset();
                            r.bottom = r.top + this.$container.outerHeight(!1);
                            var s = {
                                height: this.$container.outerHeight(!1)
                            };
                            s.top = r.top, s.bottom = r.top + s.height;
                            var o = {
                                    height: this.$dropdown.outerHeight(!1)
                                },
                                d = {
                                    top: t.scrollTop(),
                                    bottom: t.scrollTop() + t.height()
                                },
                                l = d.top < r.top - o.height,
                                u = d.bottom > r.bottom + o.height,
                                c = {
                                    left: r.left,
                                    top: s.bottom
                                },
                                h = this.$dropdownParent;
                            "static" === h.css("position") && (h = h.offsetParent());
                            var p = h.offset();
                            c.top -= p.top, c.left -= p.left, n || i || (a = "below"), u || !l || n ? !l && u && n && (a = "below") : a = "above", ("above" == a || n && "below" !== a) && (c.top = s.top - p.top - o.height), null != a && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + a), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + a)), this.$dropdownContainer.css(c)
                        }, n.prototype._resizeDropdown = function() {
                            var e = {
                                width: this.$container.outerWidth(!1) + "px"
                            };
                            this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                        }, n.prototype._showDropdown = function() {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                        }, n
                    }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function e(t) {
                            for (var n = 0, i = 0; i < t.length; i++) {
                                var a = t[i];
                                a.children ? n += e(a.children) : n++
                            }
                            return n
                        }

                        function t(e, t, n, i) {
                            this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity), e.call(this, t, n, i)
                        }
                        return t.prototype.showSearch = function(t, n) {
                            return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
                        }, t
                    }), t.define("select2/dropdown/selectOnClose", ["../utils"], function(e) {
                        function t() {}
                        return t.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n), t.on("close", function(e) {
                                i._handleSelectOnClose(e)
                            })
                        }, t.prototype._handleSelectOnClose = function(t, n) {
                            if (n && null != n.originalSelect2Event) {
                                var i = n.originalSelect2Event;
                                if ("select" === i._type || "unselect" === i._type) return
                            }
                            var a = this.getHighlightedResults();
                            if (!(a.length < 1)) {
                                var r = e.GetData(a[0], "data");
                                null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                                    data: r
                                })
                            }
                        }, t
                    }), t.define("select2/dropdown/closeOnSelect", [], function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, n) {
                            var i = this;
                            e.call(this, t, n), t.on("select", function(e) {
                                i._selectTriggered(e)
                            }), t.on("unselect", function(e) {
                                i._selectTriggered(e)
                            })
                        }, e.prototype._selectTriggered = function(e, t) {
                            var n = t.originalEvent;
                            n && n.ctrlKey || this.trigger("close", {
                                originalEvent: n,
                                originalSelect2Event: t
                            })
                        }, e
                    }), t.define("select2/i18n/en", [], function() {
                        return {
                            errorLoading: function() {
                                return "The results could not be loaded."
                            },
                            inputTooLong: function(e) {
                                var t = e.input.length - e.maximum,
                                    n = "Please delete " + t + " character";
                                return 1 != t && (n += "s"), n
                            },
                            inputTooShort: function(e) {
                                return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                            },
                            loadingMore: function() {
                                return "Loading more results\u2026"
                            },
                            maximumSelected: function(e) {
                                var t = "You can only select " + e.maximum + " item";
                                return 1 != e.maximum && (t += "s"), t
                            },
                            noResults: function() {
                                return "No results found"
                            },
                            searching: function() {
                                return "Searching\u2026"
                            }
                        }
                    }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, i, a, r, s, o, d, l, u, c, h, p, f, m, _, g, y, v, M, w, b, D, L, T, k, Y, x) {
                        function S() {
                            this.reset()
                        }
                        return S.prototype.apply = function(c) {
                            if (c = e.extend(!0, {}, this.defaults, c), null == c.dataAdapter) {
                                if (null != c.ajax ? c.dataAdapter = f : null != c.data ? c.dataAdapter = p : c.dataAdapter = h, c.minimumInputLength > 0 && (c.dataAdapter = l.Decorate(c.dataAdapter, g)), c.maximumInputLength > 0 && (c.dataAdapter = l.Decorate(c.dataAdapter, y)), c.maximumSelectionLength > 0 && (c.dataAdapter = l.Decorate(c.dataAdapter, v)), c.tags && (c.dataAdapter = l.Decorate(c.dataAdapter, m)), null == c.tokenSeparators && null == c.tokenizer || (c.dataAdapter = l.Decorate(c.dataAdapter, _)), null != c.query) {
                                    var x = t(c.amdBase + "compat/query");
                                    c.dataAdapter = l.Decorate(c.dataAdapter, x)
                                }
                                if (null != c.initSelection) {
                                    var S = t(c.amdBase + "compat/initSelection");
                                    c.dataAdapter = l.Decorate(c.dataAdapter, S)
                                }
                            }
                            if (null == c.resultsAdapter && (c.resultsAdapter = n, null != c.ajax && (c.resultsAdapter = l.Decorate(c.resultsAdapter, D)), null != c.placeholder && (c.resultsAdapter = l.Decorate(c.resultsAdapter, b)), c.selectOnClose && (c.resultsAdapter = l.Decorate(c.resultsAdapter, k))), null == c.dropdownAdapter) {
                                if (c.multiple) c.dropdownAdapter = M;
                                else {
                                    var C = l.Decorate(M, w);
                                    c.dropdownAdapter = C
                                }
                                if (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = l.Decorate(c.dropdownAdapter, T)), c.closeOnSelect && (c.dropdownAdapter = l.Decorate(c.dropdownAdapter, Y)), null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass) {
                                    var E = t(c.amdBase + "compat/dropdownCss");
                                    c.dropdownAdapter = l.Decorate(c.dropdownAdapter, E)
                                }
                                c.dropdownAdapter = l.Decorate(c.dropdownAdapter, L)
                            }
                            if (null == c.selectionAdapter) {
                                if (c.multiple ? c.selectionAdapter = a : c.selectionAdapter = i, null != c.placeholder && (c.selectionAdapter = l.Decorate(c.selectionAdapter, r)), c.allowClear && (c.selectionAdapter = l.Decorate(c.selectionAdapter, s)), c.multiple && (c.selectionAdapter = l.Decorate(c.selectionAdapter, o)), null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass) {
                                    var j = t(c.amdBase + "compat/containerCss");
                                    c.selectionAdapter = l.Decorate(c.selectionAdapter, j)
                                }
                                c.selectionAdapter = l.Decorate(c.selectionAdapter, d)
                            }
                            if ("string" == typeof c.language)
                                if (c.language.indexOf("-") > 0) {
                                    var A = c.language.split("-"),
                                        $ = A[0];
                                    c.language = [c.language, $]
                                } else c.language = [c.language];
                            if (e.isArray(c.language)) {
                                var O = new u;
                                c.language.push("en");
                                for (var N = c.language, H = 0; H < N.length; H++) {
                                    var F = N[H],
                                        P = {};
                                    try {
                                        P = u.loadPath(F)
                                    } catch (e) {
                                        try {
                                            F = this.defaults.amdLanguageBase + F, P = u.loadPath(F)
                                        } catch (e) {
                                            c.debug && window.console && console.warn && console.warn('Select2: The language file for "' + F + '" could not be automatically loaded. A fallback will be used instead.');
                                            continue
                                        }
                                    }
                                    O.extend(P)
                                }
                                c.translations = O
                            } else {
                                var W = u.loadPath(this.defaults.amdLanguageBase + "en"),
                                    I = new u(c.language);
                                I.extend(W), c.translations = I
                            }
                            return c
                        }, S.prototype.reset = function() {
                            function t(e) {
                                function t(e) {
                                    return c[e] || e
                                }
                                return e.replace(/[^\u0000-\u007E]/g, t)
                            }

                            function n(i, a) {
                                if ("" === e.trim(i.term)) return a;
                                if (a.children && a.children.length > 0) {
                                    for (var r = e.extend(!0, {}, a), s = a.children.length - 1; s >= 0; s--) {
                                        null == n(i, a.children[s]) && r.children.splice(s, 1)
                                    }
                                    return r.children.length > 0 ? r : n(i, r)
                                }
                                var o = t(a.text).toUpperCase(),
                                    d = t(i.term).toUpperCase();
                                return o.indexOf(d) > -1 ? a : null
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: l.escapeMarkup,
                                language: x,
                                matcher: n,
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function(e) {
                                    return e
                                },
                                templateResult: function(e) {
                                    return e.text
                                },
                                templateSelection: function(e) {
                                    return e.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, S.prototype.set = function(t, n) {
                            var i = e.camelCase(t),
                                a = {};
                            a[i] = n;
                            var r = l._convertData(a);
                            e.extend(!0, this.defaults, r)
                        }, new S
                    }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, i) {
                        function a(t, a) {
                            if (this.options = t, null != a && this.fromElement(a), this.options = n.apply(this.options), a && a.is("input")) {
                                var r = e(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r)
                            }
                        }
                        return a.prototype.fromElement = function(e) {
                            var n = ["select2"];
                            null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                            var a = {};
                            a = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, i.GetData(e[0])) : i.GetData(e[0]);
                            var r = t.extend(!0, {}, a);
                            r = i._convertData(r);
                            for (var s in r) t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], r[s]) : this.options[s] = r[s]);
                            return this
                        }, a.prototype.get = function(e) {
                            return this.options[e]
                        }, a.prototype.set = function(e, t) {
                            this.options[e] = t
                        }, a
                    }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
                        var a = function(e, i) {
                            null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), a.__super__.constructor.call(this);
                            var r = e.attr("tabindex") || 0;
                            n.StoreData(e[0], "old-tabindex", r), e.attr("tabindex", "-1");
                            var s = this.options.get("dataAdapter");
                            this.dataAdapter = new s(e, this.options);
                            var o = this.render();
                            this._placeContainer(o);
                            var d = this.options.get("selectionAdapter");
                            this.selection = new d(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                            var l = this.options.get("dropdownAdapter");
                            this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                            var u = this.options.get("resultsAdapter");
                            this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var c = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                                c.trigger("selection:update", {
                                    data: e
                                })
                            }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
                        };
                        return n.Extend(a, n.Observable), a.prototype._generateId = function(e) {
                            var t = "";
                            return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
                        }, a.prototype._placeContainer = function(e) {
                            e.insertAfter(this.$element);
                            var t = this._resolveWidth(this.$element, this.options.get("width"));
                            null != t && e.css("width", t)
                        }, a.prototype._resolveWidth = function(e, t) {
                            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == t) {
                                var i = this._resolveWidth(e, "style");
                                return null != i ? i : this._resolveWidth(e, "element")
                            }
                            if ("element" == t) {
                                var a = e.outerWidth(!1);
                                return a <= 0 ? "auto" : a + "px"
                            }
                            if ("style" == t) {
                                var r = e.attr("style");
                                if ("string" != typeof r) return null;
                                for (var s = r.split(";"), o = 0, d = s.length; o < d; o += 1) {
                                    var l = s[o].replace(/\s/g, ""),
                                        u = l.match(n);
                                    if (null !== u && u.length >= 1) return u[1]
                                }
                                return null
                            }
                            return t
                        }, a.prototype._bindAdapters = function() {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                        }, a.prototype._registerDomEvents = function() {
                            var t = this;
                            this.$element.on("change.select2", function() {
                                t.dataAdapter.current(function(e) {
                                    t.trigger("selection:update", {
                                        data: e
                                    })
                                })
                            }), this.$element.on("focus.select2", function(e) {
                                t.trigger("focus", e)
                            }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                            var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != i ? (this._observer = new i(function(n) {
                                e.each(n, t._syncA), e.each(n, t._syncS)
                            }), this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                        }, a.prototype._registerDataEvents = function() {
                            var e = this;
                            this.dataAdapter.on("*", function(t, n) {
                                e.trigger(t, n)
                            })
                        }, a.prototype._registerSelectionEvents = function() {
                            var t = this,
                                n = ["toggle", "focus"];
                            this.selection.on("toggle", function() {
                                t.toggleDropdown()
                            }), this.selection.on("focus", function(e) {
                                t.focus(e)
                            }), this.selection.on("*", function(i, a) {
                                -1 === e.inArray(i, n) && t.trigger(i, a)
                            })
                        }, a.prototype._registerDropdownEvents = function() {
                            var e = this;
                            this.dropdown.on("*", function(t, n) {
                                e.trigger(t, n)
                            })
                        }, a.prototype._registerResultsEvents = function() {
                            var e = this;
                            this.results.on("*", function(t, n) {
                                e.trigger(t, n)
                            })
                        }, a.prototype._registerEvents = function() {
                            var e = this;
                            this.on("open", function() {
                                e.$container.addClass("select2-container--open")
                            }), this.on("close", function() {
                                e.$container.removeClass("select2-container--open")
                            }), this.on("enable", function() {
                                e.$container.removeClass("select2-container--disabled")
                            }), this.on("disable", function() {
                                e.$container.addClass("select2-container--disabled")
                            }), this.on("blur", function() {
                                e.$container.removeClass("select2-container--focus")
                            }), this.on("query", function(t) {
                                e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(n) {
                                    e.trigger("results:all", {
                                        data: n,
                                        query: t
                                    })
                                })
                            }), this.on("query:append", function(t) {
                                this.dataAdapter.query(t, function(n) {
                                    e.trigger("results:append", {
                                        data: n,
                                        query: t
                                    })
                                })
                            }), this.on("keypress", function(t) {
                                var n = t.which;
                                e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                            })
                        }, a.prototype._syncAttributes = function() {
                            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                        }, a.prototype._syncSubtree = function(e, t) {
                            var n = !1,
                                i = this;
                            if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                                if (t)
                                    if (t.addedNodes && t.addedNodes.length > 0)
                                        for (var a = 0; a < t.addedNodes.length; a++) {
                                            var r = t.addedNodes[a];
                                            r.selected && (n = !0)
                                        } else t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                                    else n = !0;
                                n && this.dataAdapter.current(function(e) {
                                    i.trigger("selection:update", {
                                        data: e
                                    })
                                })
                            }
                        }, a.prototype.trigger = function(e, t) {
                            var n = a.__super__.trigger,
                                i = {
                                    open: "opening",
                                    close: "closing",
                                    select: "selecting",
                                    unselect: "unselecting",
                                    clear: "clearing"
                                };
                            if (t === undefined && (t = {}), e in i) {
                                var r = i[e],
                                    s = {
                                        prevented: !1,
                                        name: e,
                                        args: t
                                    };
                                if (n.call(this, r, s), s.prevented) return void(t.prevented = !0)
                            }
                            n.call(this, e, t)
                        }, a.prototype.toggleDropdown = function() {
                            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                        }, a.prototype.open = function() {
                            this.isOpen() || this.trigger("query", {})
                        }, a.prototype.close = function() {
                            this.isOpen() && this.trigger("close", {})
                        }, a.prototype.isOpen = function() {
                            return this.$container.hasClass("select2-container--open")
                        }, a.prototype.hasFocus = function() {
                            return this.$container.hasClass("select2-container--focus")
                        }, a.prototype.focus = function() {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                        }, a.prototype.enable = function(e) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                            var t = !e[0];
                            this.$element.prop("disabled", t)
                        }, a.prototype.data = function() {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var e = [];
                            return this.dataAdapter.current(function(t) {
                                e = t
                            }), e
                        }, a.prototype.val = function(t) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                            var n = t[0];
                            e.isArray(n) && (n = e.map(n, function(e) {
                                return e.toString()
                            })), this.$element.val(n).trigger("change")
                        }, a.prototype.destroy = function() {
                            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                        }, a.prototype.render = function() {
                            var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
                        }, a
                    }), t.define("select2/compat/utils", ["jquery"], function(e) {
                        function t(t, n, i) {
                            var a, r, s = [];
                            a = e.trim(t.attr("class")), a && (a = "" + a, e(a.split(/\s+/)).each(function() {
                                0 === this.indexOf("select2-") && s.push(this)
                            })), a = e.trim(n.attr("class")), a && (a = "" + a, e(a.split(/\s+/)).each(function() {
                                0 !== this.indexOf("select2-") && null != (r = i(this)) && s.push(r)
                            })), t.attr("class", s.join(" "))
                        }
                        return {
                            syncCssClasses: t
                        }
                    }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function(e, t) {
                        function n() {
                            return null
                        }

                        function i() {}
                        return i.prototype.render = function(i) {
                            var a = i.call(this),
                                r = this.options.get("containerCssClass") || "";
                            e.isFunction(r) && (r = r(this.$element));
                            var s = this.options.get("adaptContainerCssClass");
                            if (s = s || n, -1 !== r.indexOf(":all:")) {
                                r = r.replace(":all:", "");
                                var o = s;
                                s = function(e) {
                                    var t = o(e);
                                    return null != t ? t + " " + e : e
                                }
                            }
                            var d = this.options.get("containerCss") || {};
                            return e.isFunction(d) && (d = d(this.$element)), t.syncCssClasses(a, this.$element, s), a.css(d), a.addClass(r), a
                        }, i
                    }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(e, t) {
                        function n() {
                            return null
                        }

                        function i() {}
                        return i.prototype.render = function(i) {
                            var a = i.call(this),
                                r = this.options.get("dropdownCssClass") || "";
                            e.isFunction(r) && (r = r(this.$element));
                            var s = this.options.get("adaptDropdownCssClass");
                            if (s = s || n, -1 !== r.indexOf(":all:")) {
                                r = r.replace(":all:", "");
                                var o = s;
                                s = function(e) {
                                    var t = o(e);
                                    return null != t ? t + " " + e : e
                                }
                            }
                            var d = this.options.get("dropdownCss") || {};
                            return e.isFunction(d) && (d = d(this.$element)), t.syncCssClasses(a, this.$element, s), a.css(d), a.addClass(r), a
                        }, i
                    }), t.define("select2/compat/initSelection", ["jquery"], function(e) {
                        function t(e, t, n) {
                            n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
                        }
                        return t.prototype.current = function(t, n) {
                            var i = this;
                            if (this._isInitialized) return void t.call(this, n);
                            this.initSelection.call(null, this.$element, function(t) {
                                i._isInitialized = !0, e.isArray(t) || (t = [t]), n(t)
                            })
                        }, t
                    }), t.define("select2/compat/inputData", ["jquery", "../utils"], function(e, t) {
                        function n(e, t, n) {
                            this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
                        }
                        return n.prototype.current = function(t, n) {
                            function i(t, n) {
                                var a = [];
                                return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0, a.push(t)) : t.selected = !1, t.children && a.push.apply(a, i(t.children, n)), a
                            }
                            for (var a = [], r = 0; r < this._currentData.length; r++) {
                                var s = this._currentData[r];
                                a.push.apply(a, i(s, this.$element.val().split(this._valueSeparator)))
                            }
                            n(a)
                        }, n.prototype.select = function(t, n) {
                            if (this.options.get("multiple")) {
                                var i = this.$element.val();
                                i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("change")
                            } else this.current(function(t) {
                                e.map(t, function(e) {
                                    e.selected = !1
                                })
                            }), this.$element.val(n.id), this.$element.trigger("change")
                        }, n.prototype.unselect = function(e, t) {
                            var n = this;
                            t.selected = !1, this.current(function(e) {
                                for (var i = [], a = 0; a < e.length; a++) {
                                    var r = e[a];
                                    t.id != r.id && i.push(r.id)
                                }
                                n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("change")
                            })
                        }, n.prototype.query = function(e, t, n) {
                            for (var i = [], a = 0; a < this._currentData.length; a++) {
                                var r = this._currentData[a],
                                    s = this.matches(t, r);
                                null !== s && i.push(s)
                            }
                            n({
                                results: i
                            })
                        }, n.prototype.addOptions = function(n, i) {
                            var a = e.map(i, function(e) {
                                return t.GetData(e[0], "data")
                            });
                            this._currentData.push.apply(this._currentData, a)
                        }, n
                    }), t.define("select2/compat/matcher", ["jquery"], function(e) {
                        function t(t) {
                            function n(n, i) {
                                var a = e.extend(!0, {}, i);
                                if (null == n.term || "" === e.trim(n.term)) return a;
                                if (i.children) {
                                    for (var r = i.children.length - 1; r >= 0; r--) {
                                        var s = i.children[r];
                                        t(n.term, s.text, s) || a.children.splice(r, 1)
                                    }
                                    if (a.children.length > 0) return a
                                }
                                return t(n.term, i.text, i) ? a : null
                            }
                            return n
                        }
                        return t
                    }), t.define("select2/compat/query", [], function() {
                        function e(e, t, n) {
                            n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
                        }
                        return e.prototype.query = function(e, t, n) {
                            t.callback = n, this.options.get("query").call(null, t)
                        }, e
                    }), t.define("select2/dropdown/attachContainer", [], function() {
                        function e(e, t, n) {
                            e.call(this, t, n)
                        }
                        return e.prototype.position = function(e, t, n) {
                            n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
                        }, e
                    }), t.define("select2/dropdown/stopPropagation", [], function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, n) {
                            e.call(this, t, n);
                            var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$dropdown.on(i.join(" "), function(e) {
                                e.stopPropagation()
                            })
                        }, e
                    }), t.define("select2/selection/stopPropagation", [], function() {
                        function e() {}
                        return e.prototype.bind = function(e, t, n) {
                            e.call(this, t, n);
                            var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$selection.on(i.join(" "), function(e) {
                                e.stopPropagation()
                            })
                        }, e
                    }),
                    function(n) {
                        "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(e)
                    }(function(e) {
                        function t(t) {
                            var s = t || window.event,
                                o = d.call(arguments, 1),
                                l = 0,
                                c = 0,
                                h = 0,
                                p = 0,
                                f = 0,
                                m = 0;
                            if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (c = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (c = -1 * h, h = 0), l = 0 === h ? c : h, "deltaY" in s && (h = -1 * s.deltaY, l = h), "deltaX" in s && (c = s.deltaX, 0 === h && (l = -1 * c)), 0 !== h || 0 !== c) {
                                if (1 === s.deltaMode) {
                                    var _ = e.data(this, "mousewheel-line-height");
                                    l *= _, h *= _, c *= _
                                } else if (2 === s.deltaMode) {
                                    var g = e.data(this, "mousewheel-page-height");
                                    l *= g, h *= g, c *= g
                                }
                                if (p = Math.max(Math.abs(h), Math.abs(c)), (!r || p < r) && (r = p, i(s, p) && (r /= 40)), i(s, p) && (l /= 40, c /= 40, h /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / r), c = Math[c >= 1 ? "floor" : "ceil"](c / r), h = Math[h >= 1 ? "floor" : "ceil"](h / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var y = this.getBoundingClientRect();
                                    f = t.clientX - y.left, m = t.clientY - y.top
                                }
                                return t.deltaX = c, t.deltaY = h, t.deltaFactor = r, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, o.unshift(t, l, c, h), a && clearTimeout(a), a = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, o)
                            }
                        }

                        function n() {
                            r = null
                        }

                        function i(e, t) {
                            return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
                        }
                        var a, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            d = Array.prototype.slice;
                        if (e.event.fixHooks)
                            for (var l = s.length; l;) e.event.fixHooks[s[--l]] = e.event.mouseHooks;
                        var u = e.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function() {
                                if (this.addEventListener)
                                    for (var n = o.length; n;) this.addEventListener(o[--n], t, !1);
                                else this.onmousewheel = t;
                                e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
                            },
                            teardown: function() {
                                if (this.removeEventListener)
                                    for (var n = o.length; n;) this.removeEventListener(o[--n], t, !1);
                                else this.onmousewheel = null;
                                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                            },
                            getLineHeight: function(t) {
                                var n = e(t),
                                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                            },
                            getPageHeight: function(t) {
                                return e(t).height()
                            },
                            settings: {
                                adjustOldDeltas: !0,
                                normalizeOffset: !0
                            }
                        };
                        e.fn.extend({
                            mousewheel: function(e) {
                                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                            },
                            unmousewheel: function(e) {
                                return this.unbind("mousewheel", e)
                            }
                        })
                    }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(e, t, n, i, a) {
                        if (null == e.fn.select2) {
                            var r = ["open", "close", "destroy"];
                            e.fn.select2 = function(t) {
                                if ("object" == typeof(t = t || {})) return this.each(function() {
                                    var i = e.extend(!0, {}, t);
                                    new n(e(this), i)
                                }), this;
                                if ("string" == typeof t) {
                                    var i, s = Array.prototype.slice.call(arguments, 1);
                                    return this.each(function() {
                                        var e = a.GetData(this, "select2");
                                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, s)
                                    }), e.inArray(t, r) > -1 ? this : i
                                }
                                throw new Error("Invalid arguments for Select2: " + t)
                            }
                        }
                        return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
                    }), {
                        define: t.define,
                        require: t.require
                    }
            }(),
            n = t.require("jquery.select2");
        return e.fn.select2.amd = t, n
    });
var ready = function() {
    if ($(".delivery_date").length > 0 && ($(".delivery_date").datepicker({
            changeYear: !0,
            startDate: $(".delivery_date").data("start"),
            yearRange: "0:+1",
            format: "dd-mm-yyyy",
            autoclose: !0,
            daysOfWeekDisabled: [0, 6]
        }), $(".pickup_date").datepicker({
            changeYear: !0,
            startDate: $(".pickup_date").data("start"),
            yearRange: "0:+1",
            format: "dd-mm-yyyy",
            autoclose: !0,
            daysOfWeekDisabled: [0, 6]
        })), $('input[name="date"]').length > 0) {
        var e = $('input[name="date"]'),
            t = $(".bootstrap-iso form").length > 0 ? $(".bootstrap-iso form").parent() : "body",
            n = {
                format: "mm/dd/yyyy",
                container: t,
                todayHighlight: !0,
                autoclose: !0,
                Default: !1
            };
        e.datepicker(n)
    }
    $("tr").click(function() {
            $(this).find("a").length > 0 && (window.location = $(this).find("a").attr("href"))
        }).hover(function() {
            $(this).toggleClass("hover")
        }), $(window).scroll(function() {
            $(this).scrollTop() >= 50 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
        }), $("#return-to-top").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 500)
        }),
        function(e) {
            e.fn.dropdown = function() {
                this.find(".buy-currency-dropdown").click(function() {
                    e(this), e("#myDropdowne1").removeClass("show"), e("#myDropdowne1").toggleClass("show"), e("#myDropdown").removeClass("show")
                }), e(window).click(function() {
                    e("#myDropdowne1").removeClass("show")
                }), e(".links").click(function(e) {
                    e.stopPropagation()
                })
            }
        }(jQuery), $(".links").dropdown(),
        function(e) {
            e.fn.dropdown = function() {
                var t = this;
                t.find(".country-dropdown").click(function() {
                    e(this);
                    e("#myDropdown").removeClass("show"), e("#myDropdown").toggleClass("show"), e("#myDropdowne1").removeClass("show")
                }), t.find("#myDropdown").find("#myDropdown a").click(function() {
                    e(this).text();
                    e("#myDropdown").find(".country-dropdown").text("haha")
                }), e(window).click(function() {
                    e("#myDropdown").removeClass("show")
                }), e(".links").click(function(e) {
                    e.stopPropagation()
                })
            }
        }(jQuery), $(".links").dropdown(), $(".c-select2").select2({
            templateResult: formatState
        })
};
$(document).ready(ready), $(document).ready(function() {
    $('[data-toggle="popover"]').popover()
});