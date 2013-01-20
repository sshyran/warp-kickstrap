window.jQuery || function (r, m)
{
	function eb(a)
	{
		var b = ma[a] = {}, c, e, a = a.split(/\s+/);
		c = 0;
		for (e = a.length;
		     c < e;
		     c++)
		{
			b[a[c]] = !0;
		}
		return b
	}

	function na(a, b, d)
	{
		if (d === m && 1 === a.nodeType)
		{
			if (d = "data-" + b.replace(fb, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d)
			{
				try
				{
					d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : c.isNumeric(d) ? +d : gb.test(d) ? c.parseJSON(d) : d
				}
				catch (e)
				{
				}
				c.data(a, b, d)
			}
			else
			{
				d = m;
			}
		}
		return d
	}

	function Z(a)
	{
		for (var b in
			a)
		{
			if (!("data" === b && c.isEmptyObject(a[b])) && "toJSON" !== b)
			{
				return!1;
			}
		}
		return!0
	}

	function oa(a, b, d)
	{
		var e = b + "defer", f = b + "queue", g = b + "mark", i = c._data(a, e);
		i && (("queue" === d || !c._data(a, f)) && ("mark" === d || !c._data(a, g))) && setTimeout(function ()
		{
			!c._data(a, f) && !c._data(a, g) && (c.removeData(a, e, !0), i.fire())
		}, 0)
	}

	function E()
	{
		return!1
	}

	function K()
	{
		return!0
	}

	function pa(a, b, d)
	{
		b = b || 0;
		if (c.isFunction(b))
		{
			return c.grep(a, function (a, c)
			{
				return!!b.call(a, c, a) === d
			});
		}
		if (b.nodeType)
		{
			return c.grep(a, function (a)
			{
				return a === b === d
			});
		}
		if ("string" === typeof b)
		{
			var e = c.grep(a, function (a)
			{
				return 1 === a.nodeType
			});
			if (hb.test(b))
			{
				return c.filter(b,
					e, !d);
			}
			b = c.filter(b, e)
		}
		return c.grep(a, function (a)
		{
			return 0 <= c.inArray(a, b) === d
		})
	}

	function qa(a)
	{
		var b = ra.split("|"), a = a.createDocumentFragment();
		if (a.createElement)
		{
			for (;
				b.length;)
			{
				a.createElement(b.pop());
			}
		}
		return a
	}

	function sa(a, b)
	{
		if (1 === b.nodeType && c.hasData(a))
		{
			var d, e, f;
			e = c._data(a);
			var g = c._data(b, e), i = e.events;
			if (i)
			{
				for (d in
					delete g.handle, g.events = {}, i)
				{
					e = 0;
					for (f = i[d].length;
					     e < f;
					     e++)
					{
						c.event.add(b, d, i[d][e])
					}
				}
			}
			g.data && (g.data = c.extend({}, g.data))
		}
	}

	function ta(a, b)
	{
		var d;
		if (1 === b.nodeType)
		{
			b.clearAttributes &&
			b.clearAttributes();
			b.mergeAttributes && b.mergeAttributes(a);
			d = b.nodeName.toLowerCase();
			if ("object" === d)
			{
				b.outerHTML = a.outerHTML;
			}
			else if ("input" === d && ("checkbox" === a.type || "radio" === a.type))
			{
				if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value)
				{
					b.value = a.value
				}
			}
			else
			{
				"option" === d ? b.selected = a.defaultSelected : "input" === d || "textarea" === d ? b.defaultValue = a.defaultValue : "script" === d && b.text !== a.text && (b.text = a.text);
			}
			b.removeAttribute(c.expando);
			b.removeAttribute("_submit_attached");
			b.removeAttribute("_change_attached")
		}
	}

	function Q(a)
	{
		return"undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll("*") : []
	}

	function ua(a)
	{
		if ("checkbox" === a.type || "radio" === a.type)
		{
			a.defaultChecked = a.checked
		}
	}

	function va(a)
	{
		var b = (a.nodeName || "").toLowerCase();
		"input" === b ? ua(a) : "script" !== b && "undefined" !== typeof a.getElementsByTagName && c.grep(a.getElementsByTagName("input"), ua)
	}

	function wa(a, b, d)
	{
		var e = "width" === b ? a.offsetWidth : a.offsetHeight, f = "width" === b ? 1 : 0;
		if (0 <
			e)
		{
			if ("border" !== d)
			{
				for (;
					4 > f;
					f += 2)
				{
					d || (e -= parseFloat(c.css(a, "padding" + J[f])) || 0), e = "margin" === d ? e + (parseFloat(c.css(a, d + J[f])) || 0) : e - (parseFloat(c.css(a, "border" + J[f] + "Width")) || 0);
				}
			}
			return e + "px"
		}
		e = F(a, b);
		if (0 > e || null == e)
		{
			e = a.style[b];
		}
		if ($.test(e))
		{
			return e;
		}
		e = parseFloat(e) || 0;
		if (d)
		{
			for (;
				4 > f;
				f += 2)
			{
				e += parseFloat(c.css(a, "padding" + J[f])) || 0, "padding" !== d && (e += parseFloat(c.css(a, "border" + J[f] + "Width")) || 0), "margin" === d && (e += parseFloat(c.css(a, d + J[f])) || 0);
			}
		}
		return e + "px"
	}

	function xa(a)
	{
		return function (b, d)
		{
			"string" !== typeof b && (d = b, b = "*");
			if (c.isFunction(d))
			{
				for (var e = b.toLowerCase().split(ya), f = 0, g = e.length, i, h;
				     f < g;
				     f++)
				{
					i = e[f], (h = /^\+/.test(i)) && (i = i.substr(1) || "*"), i = a[i] = a[i] || [], i[h ? "unshift" : "push"](d)
				}
			}
		}
	}

	function T(a, b, c, e, f, g)
	{
		f = f || b.dataTypes[0];
		g = g || {};
		g[f] = !0;
		for (var f = a[f], i = 0, h = f ? f.length : 0, j = a === aa, n;
		     i < h && (j || !n);
		     i++)
		{
			n = f[i](b, c, e), "string" === typeof n && (!j || g[n] ? n = m : (b.dataTypes.unshift(n), n = T(a, b, c, e, n, g)));
		}
		if ((j || !n) && !g["*"])
		{
			n = T(a, b, c, e, "*", g);
		}
		return n
	}

	function za(a, b)
	{
		var d, e, f = c.ajaxSettings.flatOptions ||
		{};
		for (d in
			b)
		{
			b[d] !== m && ((f[d] ? a : e || (e = {}))[d] = b[d]);
		}
		e && c.extend(!0, a, e)
	}

	function ba(a, b, d, e)
	{
		if (c.isArray(b))
		{
			c.each(b, function (b, c)
			{
				d || ib.test(a) ? e(a, c) : ba(a + "[" + ("object" === typeof c ? b : "") + "]", c, d, e)
			});
		}
		else if (!d && "object" === c.type(b))
		{
			for (var f in
				b)
			{
				ba(a + "[" + f + "]", b[f], d, e);
			}
		}
		else
		{
			e(a, b)
		}
	}

	function Aa()
	{
		try
		{
			return new r.XMLHttpRequest
		}
		catch (a)
		{
		}
	}

	function Ba()
	{
		setTimeout(jb, 0);
		return U = c.now()
	}

	function jb()
	{
		U = m
	}

	function L(a, b)
	{
		var d = {};
		c.each(V.concat.apply([], V.slice(0, b)), function ()
		{
			d[this] = a
		});
		return d
	}

	function Ca(a)
	{
		if (!ca[a])
		{
			var b = k.body, d = c("<" + a + ">").appendTo(b), e = d.css("display");
			d.remove();
			if ("none" === e || "" === e)
			{
				y || (y = k.createElement("iframe"), y.frameBorder = y.width = y.height = 0);
				b.appendChild(y);
				if (!G || !y.createElement)
				{
					G = (y.contentWindow || y.contentDocument).document, G.write((c.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), G.close();
				}
				d = G.createElement(a);
				G.body.appendChild(d);
				e = c.css(d, "display");
				b.removeChild(y)
			}
			ca[a] = e
		}
		return ca[a]
	}

	function Da(a)
	{
		return c.isWindow(a) ? a : 9 === a.nodeType ?
			a.defaultView || a.parentWindow : !1
	}

	var k = r.document, kb = r.navigator, lb = r.location, c = function ()
	{
		function a()
		{
			if (!b.isReady)
			{
				try
				{
					k.documentElement.doScroll("left")
				}
				catch (c)
				{
					setTimeout(a, 1);
					return
				}
				b.ready()
			}
		}

		var b = function (a, c)
		{
			return new b.fn.init(a, c, f)
		}, c = r.jQuery, e = r.$, f, g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, i = /\S/, h = /^\s+/, j = /\s+$/, n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, p = /^[\],:{}\s]*$/, l = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, mb = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, o =
			/(?:^|:|,)(?:\s*\[)+/g, da = /(webkit)[ \/]([\w.]+)/, nb = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, z = /^-ms-/, q = function (a, b)
		{
			return(b + "").toUpperCase()
		}, B = kb.userAgent, s, A, ob = Object.prototype.toString, ea = Object.prototype.hasOwnProperty, fa = Array.prototype.push, S = Array.prototype.slice, Ea = String.prototype.trim, Fa = Array.prototype.indexOf, Ga = {};
		b.fn = b.prototype = {constructor: b, init: function (a, c, d)
		{
			var e;
			if (!a)
			{
				return this;
			}
			if (a.nodeType)
			{
				return this.context =
					this[0] = a, this.length = 1, this;
			}
			if ("body" === a && !c && k.body)
			{
				return this.context = k, this[0] = k.body, this.selector = a, this.length = 1, this;
			}
			if ("string" === typeof a)
			{
				if ((e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : g.exec(a)) && (e[1] || !c))
				{
					if (e[1])
					{
						return d = (c = c instanceof b ? c[0] : c) ? c.ownerDocument || c : k, (a = n.exec(a)) ? b.isPlainObject(c) ? (a = [k.createElement(a[1])], b.fn.attr.call(a, c, !0)) : a = [d.createElement(a[1])] : (a = b.buildFragment([e[1]], [d]), a = (a.cacheable ? b.clone(a.fragment) : a.fragment).childNodes),
							b.merge(this, a);
					}
					if ((c = k.getElementById(e[2])) && c.parentNode)
					{
						if (c.id !== e[2])
						{
							return d.find(a);
						}
						this.length = 1;
						this[0] = c
					}
					this.context = k;
					this.selector = a;
					return this
				}
				return!c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
			}
			if (b.isFunction(a))
			{
				return d.ready(a);
			}
			a.selector !== m && (this.selector = a.selector, this.context = a.context);
			return b.makeArray(a, this)
		}, selector: "", jquery: "1.7.2", length: 0, size: function ()
		{
			return this.length
		}, toArray: function ()
		{
			return S.call(this, 0)
		}, get: function (a)
		{
			return null == a ? this.toArray() :
				0 > a ? this[this.length + a] : this[a]
		}, pushStack: function (a, c, d)
		{
			var e = this.constructor();
			b.isArray(a) ? fa.apply(e, a) : b.merge(e, a);
			e.prevObject = this;
			e.context = this.context;
			"find" === c ? e.selector = this.selector + (this.selector ? " " : "") + d : c && (e.selector = this.selector + "." + c + "(" + d + ")");
			return e
		}, each: function (a, c)
		{
			return b.each(this, a, c)
		}, ready: function (a)
		{
			b.bindReady();
			s.add(a);
			return this
		}, eq: function (a)
		{
			a = +a;
			return-1 === a ? this.slice(a) : this.slice(a, a + 1)
		}, first: function ()
		{
			return this.eq(0)
		}, last: function ()
		{
			return this.eq(-1)
		},
			slice: function ()
			{
				return this.pushStack(S.apply(this, arguments), "slice", S.call(arguments).join(","))
			}, map: function (a)
			{
				return this.pushStack(b.map(this, function (b, c)
				{
					return a.call(b, c, b)
				}))
			}, end: function ()
			{
				return this.prevObject || this.constructor(null)
			}, push: fa, sort: [].sort, splice: [].splice};
		b.fn.init.prototype = b.fn;
		b.extend = b.fn.extend = function ()
		{
			var a, c, d, e, f, s = arguments[0] || {}, g = 1, i = arguments.length, h = !1;
			"boolean" === typeof s && (h = s, s = arguments[1] || {}, g = 2);
			"object" !== typeof s && !b.isFunction(s) && (s =
			{});
			i === g && (s = this, --g);
			for (;
				g < i;
				g++)
			{
				if (null != (a = arguments[g]))
				{
					for (c in
						a)
					{
						d = s[c], e = a[c], s !== e && (h && e && (b.isPlainObject(e) || (f = b.isArray(e))) ? (f ? (f = !1, d = d && b.isArray(d) ? d : []) : d = d && b.isPlainObject(d) ? d : {}, s[c] = b.extend(h, d, e)) : e !== m && (s[c] = e));
					}
				}
			}
			return s
		};
		b.extend({noConflict: function (a)
		{
			r.$ === b && (r.$ = e);
			a && r.jQuery === b && (r.jQuery = c);
			return b
		}, isReady: !1, readyWait: 1, holdReady: function (a)
		{
			a ? b.readyWait++ : b.ready(!0)
		}, ready: function (a)
		{
			if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady)
			{
				if (!k.body)
				{
					return setTimeout(b.ready,
						1);
				}
				b.isReady = !0;
				!0 !== a && 0 < --b.readyWait || (s.fireWith(k, [b]), b.fn.trigger && b(k).trigger("ready").off("ready"))
			}
		}, bindReady: function ()
		{
			if (!s)
			{
				s = b.Callbacks("once memory");
				if ("complete" === k.readyState)
				{
					return setTimeout(b.ready, 1);
				}
				if (k.addEventListener)
				{
					k.addEventListener("DOMContentLoaded", A, !1), r.addEventListener("load", b.ready, !1);
				}
				else if (k.attachEvent)
				{
					k.attachEvent("onreadystatechange", A);
					r.attachEvent("onload", b.ready);
					var c = !1;
					try
					{
						c = null == r.frameElement
					}
					catch (d)
					{
					}
					k.documentElement.doScroll && c &&
					a()
				}
			}
		}, isFunction: function (a)
		{
			return"function" === b.type(a)
		}, isArray: Array.isArray || function (a)
		{
			return"array" === b.type(a)
		}, isWindow: function (a)
		{
			return null != a && a == a.window
		}, isNumeric: function (a)
		{
			return!isNaN(parseFloat(a)) && isFinite(a)
		}, type: function (a)
		{
			return null == a ? "" + a : Ga[ob.call(a)] || "object"
		}, isPlainObject: function (a)
		{
			if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a))
			{
				return!1;
			}
			try
			{
				if (a.constructor && !ea.call(a, "constructor") && !ea.call(a.constructor.prototype, "isPrototypeOf"))
				{
					return!1
				}
			}
			catch (c)
			{
				return!1
			}
			for (var d in
				a)
			{
				;
			}
			return d === m || ea.call(a, d)
		}, isEmptyObject: function (a)
		{
			for (var b in
				a)
			{
				return!1;
			}
			return!0
		}, error: function (a)
		{
			throw Error(a);
		}, parseJSON: function (a)
		{
			if ("string" !== typeof a || !a)
			{
				return null;
			}
			a = b.trim(a);
			if (r.JSON && r.JSON.parse)
			{
				return r.JSON.parse(a);
			}
			if (p.test(a.replace(l, "@").replace(mb, "]").replace(o, "")))
			{
				return(new Function("return " + a))();
			}
			b.error("Invalid JSON: " + a)
		}, parseXML: function (a)
		{
			if ("string" !== typeof a || !a)
			{
				return null;
			}
			var c, d;
			try
			{
				r.DOMParser ? (d = new DOMParser, c = d.parseFromString(a, "text/xml")) :
					(c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
			}
			catch (e)
			{
				c = m
			}
			(!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + a);
			return c
		}, noop: function ()
		{
		}, globalEval: function (a)
		{
			a && i.test(a) && (r.execScript || function (a)
			{
				r.eval.call(r, a)
			})(a)
		}, camelCase: function (a)
		{
			return a.replace(z, "ms-").replace(v, q)
		}, nodeName: function (a, b)
		{
			return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
		}, each: function (a, c, d)
		{
			var e, f = 0, s = a.length, g = s === m || b.isFunction(a);
			if (d)
			{
				if (g)
				{
					for (e in
						a)
					{
						if (!1 === c.apply(a[e], d))
						{
							break
						}
					}
				}
				else
				{
					for (;
						f < s && !1 !== c.apply(a[f++], d);)
					{
						;
					}
				}
			}
			else if (g)
			{
				for (e in
					a)
				{
					if (!1 === c.call(a[e], e, a[e]))
					{
						break
					}
				}
			}
			else
			{
				for (;
					f < s && !1 !== c.call(a[f], f, a[f++]);)
				{
					;
				}
			}
			return a
		}, trim: Ea ? function (a)
		{
			return null == a ? "" : Ea.call(a)
		} : function (a)
		{
			return null == a ? "" : a.toString().replace(h, "").replace(j, "")
		}, makeArray: function (a, c)
		{
			var d = c || [];
			if (null != a)
			{
				var e = b.type(a);
				null == a.length || "string" === e || "function" === e || "regexp" === e || b.isWindow(a) ? fa.call(d, a) : b.merge(d, a)
			}
			return d
		}, inArray: function (a, b, c)
		{
			var d;
			if (b)
			{
				if (Fa)
				{
					return Fa.call(b, a, c);
				}
				d = b.length;
				for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0;
				     c < d;
				     c++)
				{
					if (c in b && b[c] === a)
					{
						return c
					}
				}
			}
			return-1
		}, merge: function (a, b)
		{
			var c = a.length, d = 0;
			if ("number" === typeof b.length)
			{
				for (var e = b.length;
				     d < e;
				     d++)
				{
					a[c++] = b[d];
				}
			}
			else
			{
				for (;
					b[d] !== m;)
				{
					a[c++] = b[d++];
				}
			}
			a.length = c;
			return a
		}, grep: function (a, b, c)
		{
			for (var d = [], e, c = !!c, f = 0, s = a.length;
			     f < s;
			     f++)
			{
				e = !!b(a[f], f), c !== e && d.push(a[f]);
			}
			return d
		}, map: function (a, c, d)
		{
			var e, f, s = [], g = 0, i = a.length;
			if (a instanceof b || i !== m && "number" === typeof i &&
				(0 < i && a[0] && a[i - 1] || 0 === i || b.isArray(a)))
			{
				for (;
					g < i;
					g++)
				{
					e = c(a[g], g, d), null != e && (s[s.length] = e);
				}
			}
			else
			{
				for (f in
					a)
				{
					e = c(a[f], f, d), null != e && (s[s.length] = e);
				}
			}
			return s.concat.apply([], s)
		}, guid: 1, proxy: function (a, c)
		{
			if ("string" === typeof c)
			{
				var d = a[c], c = a, a = d;
			}
			if (!b.isFunction(a))
			{
				return m;
			}
			var e = S.call(arguments, 2), d = function ()
			{
				return a.apply(c, e.concat(S.call(arguments)))
			};
			d.guid = a.guid = a.guid || d.guid || b.guid++;
			return d
		}, access: function (a, c, d, e, f, s, g)
		{
			var i, h = null == d, A = 0, j = a.length;
			if (d && "object" === typeof d)
			{
				for (A in
					d)
				{
					b.access(a,
						c, A, d[A], 1, s, e);
				}
				f = 1
			}
			else if (e !== m)
			{
				i = g === m && b.isFunction(e);
				h && (i ? (i = c, c = function (a, c, d)
				{
					return i.call(b(a), d)
				}) : (c.call(a, e), c = null));
				if (c)
				{
					for (;
						A < j;
						A++)
					{
						c(a[A], d, i ? e.call(a[A], A, c(a[A], d)) : e, g);
					}
				}
				f = 1
			}
			return f ? a : h ? c.call(a) : j ? c(a[0], d) : s
		}, now: function ()
		{
			return(new Date).getTime()
		}, uaMatch: function (a)
		{
			a = a.toLowerCase();
			a = da.exec(a) || nb.exec(a) || t.exec(a) || 0 > a.indexOf("compatible") && u.exec(a) || [];
			return{browser: a[1] || "", version: a[2] || "0"}
		}, sub: function ()
		{
			function a(b, c)
			{
				return new a.fn.init(b, c)
			}

			b.extend(!0,
				a, this);
			a.superclass = this;
			a.fn = a.prototype = this();
			a.fn.constructor = a;
			a.sub = this.sub;
			a.fn.init = function (d, e)
			{
				e && (e instanceof b && !(e instanceof a)) && (e = a(e));
				return b.fn.init.call(this, d, e, c)
			};
			a.fn.init.prototype = a.fn;
			var c = a(k);
			return a
		}, browser: {}});
		b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b)
		{
			Ga["[object " + b + "]"] = b.toLowerCase()
		});
		B = b.uaMatch(B);
		B.browser && (b.browser[B.browser] = !0, b.browser.version = B.version);
		b.browser.webkit && (b.browser.safari = !0);
		i.test("\u00a0") &&
		(h = /^[\s\xA0]+/, j = /[\s\xA0]+$/);
		f = b(k);
		k.addEventListener ? A = function ()
		{
			k.removeEventListener("DOMContentLoaded", A, false);
			b.ready()
		} : k.attachEvent && (A = function ()
		{
			if (k.readyState === "complete")
			{
				k.detachEvent("onreadystatechange", A);
				b.ready()
			}
		});
		return b
	}(), ma = {};
	c.Callbacks = function (a)
	{
		var a = a ? ma[a] || eb(a) : {}, b = [], d = [], e, f, g, i, h, j, n = function (d)
		{
			var e, f, g, i;
			e = 0;
			for (f = d.length;
			     e < f;
			     e++)
			{
				g = d[e], i = c.type(g), "array" === i ? n(g) : "function" === i && (!a.unique || !l.has(g)) && b.push(g)
			}
		}, p = function (c, n)
		{
			n = n || [];
			e = !a.memory ||
				[c, n];
			g = f = !0;
			j = i || 0;
			i = 0;
			for (h = b.length;
			     b && j < h;
			     j++)
			{
				if (!1 === b[j].apply(c, n) && a.stopOnFalse)
				{
					e = !0;
					break
				}
			}
			g = !1;
			b && (a.once ? !0 === e ? l.disable() : b = [] : d && d.length && (e = d.shift(), l.fireWith(e[0], e[1])))
		}, l = {add: function ()
		{
			if (b)
			{
				var a = b.length;
				n(arguments);
				g ? h = b.length : e && !0 !== e && (i = a, p(e[0], e[1]))
			}
			return this
		}, remove: function ()
		{
			if (b)
			{
				for (var c = arguments, d = 0, e = c.length;
				     d < e;
				     d++)
				{
					for (var f = 0;
					     f < b.length && !(c[d] === b[f] && (g && f <= h && (h--, f <= j && j--), b.splice(f--, 1), a.unique));
					     f++)
					{
						;
					}
				}
			}
			return this
		}, has: function (a)
		{
			if (b)
			{
				for (var c =
					0, d = b.length;
				     c < d;
				     c++)
				{
					if (a === b[c])
					{
						return!0;
					}
				}
			}
			return!1
		}, empty: function ()
		{
			b = [];
			return this
		}, disable: function ()
		{
			b = d = e = m;
			return this
		}, disabled: function ()
		{
			return!b
		}, lock: function ()
		{
			d = m;
			(!e || !0 === e) && l.disable();
			return this
		}, locked: function ()
		{
			return!d
		}, fireWith: function (b, c)
		{
			d && (g ? a.once || d.push([b, c]) : (!a.once || !e) && p(b, c));
			return this
		}, fire: function ()
		{
			l.fireWith(this, arguments);
			return this
		}, fired: function ()
		{
			return!!f
		}};
		return l
	};
	var ga = [].slice;
	c.extend({Deferred: function (a)
	{
		var b = c.Callbacks("once memory"),
			d = c.Callbacks("once memory"), e = c.Callbacks("memory"), f = "pending", g = {resolve: b, reject: d, notify: e}, i = {done: b.add, fail: d.add, progress: e.add, state: function ()
			{
				return f
			}, isResolved: b.fired, isRejected: d.fired, then: function (a, b, c)
			{
				h.done(a).fail(b).progress(c);
				return this
			}, always: function ()
			{
				h.done.apply(h, arguments).fail.apply(h, arguments);
				return this
			}, pipe: function (a, b, d)
			{
				return c.Deferred(function (e)
				{
					c.each({done: [a, "resolve"], fail: [b, "reject"], progress: [d, "notify"]}, function (a, b)
					{
						var d = b[0], f = b[1], g;
						if (c.isFunction(d))
						{
							h[a](function ()
							{
								if ((g =
									d.apply(this, arguments)) && c.isFunction(g.promise))
								{
									g.promise().then(e.resolve, e.reject, e.notify);
								}
								else
								{
									e[f + "With"](this === h ? e : this, [g])
								}
							});
						}
						else
						{
							h[a](e[f])
						}
					})
				}).promise()
			}, promise: function (a)
			{
				if (null == a)
				{
					a = i;
				}
				else
				{
					for (var b in
						i)
					{
						a[b] = i[b];
					}
				}
				return a
			}}, h = i.promise({}), j;
		for (j in
			g)
		{
			h[j] = g[j].fire, h[j + "With"] = g[j].fireWith;
		}
		h.done(function ()
		{
			f = "resolved"
		}, d.disable, e.lock).fail(function ()
		{
			f = "rejected"
		}, b.disable, e.lock);
		a && a.call(h, h);
		return h
	}, when: function (a)
	{
		function b(a)
		{
			return function (b)
			{
				e[a] = 1 < arguments.length ?
					ga.call(arguments, 0) : b;
				--h || j.resolveWith(j, e)
			}
		}

		function d(a)
		{
			return function (b)
			{
				i[a] = 1 < arguments.length ? ga.call(arguments, 0) : b;
				j.notifyWith(n, i)
			}
		}

		var e = ga.call(arguments, 0), f = 0, g = e.length, i = Array(g), h = g, j = 1 >= g && a && c.isFunction(a.promise) ? a : c.Deferred(), n = j.promise();
		if (1 < g)
		{
			for (;
				f < g;
				f++)
			{
				e[f] && e[f].promise && c.isFunction(e[f].promise) ? e[f].promise().then(b(f), j.reject, d(f)) : --h;
			}
			h || j.resolveWith(j, e)
		}
		else
		{
			j !== a && j.resolveWith(j, g ? [a] : []);
		}
		return n
	}});
	c.support = function ()
	{
		var a, b, d, e, f, g, i, h, j = k.createElement("div");
		j.setAttribute("className", "t");
		j.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		b = j.getElementsByTagName("*");
		d = j.getElementsByTagName("a")[0];
		if (!b || !b.length || !d)
		{
			return{};
		}
		e = k.createElement("select");
		f = e.appendChild(k.createElement("option"));
		b = j.getElementsByTagName("input")[0];
		a = {leadingWhitespace: 3 === j.firstChild.nodeType, tbody: !j.getElementsByTagName("tbody").length, htmlSerialize: !!j.getElementsByTagName("link").length,
			style: /top/.test(d.getAttribute("style")), hrefNormalized: "/a" === d.getAttribute("href"), opacity: /^0.55/.test(d.style.opacity), cssFloat: !!d.style.cssFloat, checkOn: "on" === b.value, optSelected: f.selected, getSetAttribute: "t" !== j.className, enctype: !!k.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== k.createElement("nav").cloneNode(!0).outerHTML, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0,
			pixelMargin: !0};
		c.boxModel = a.boxModel = "CSS1Compat" === k.compatMode;
		b.checked = !0;
		a.noCloneChecked = b.cloneNode(!0).checked;
		e.disabled = !0;
		a.optDisabled = !f.disabled;
		try
		{
			delete j.test
		}
		catch (n)
		{
			a.deleteExpando = !1
		}
		!j.addEventListener && (j.attachEvent && j.fireEvent) && (j.attachEvent("onclick", function ()
		{
			a.noCloneEvent = !1
		}), j.cloneNode(!0).fireEvent("onclick"));
		b = k.createElement("input");
		b.value = "t";
		b.setAttribute("type", "radio");
		a.radioValue = "t" === b.value;
		b.setAttribute("checked", "checked");
		b.setAttribute("name",
			"t");
		j.appendChild(b);
		d = k.createDocumentFragment();
		d.appendChild(j.lastChild);
		a.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
		a.appendChecked = b.checked;
		d.removeChild(b);
		d.appendChild(j);
		if (j.attachEvent)
		{
			for (i in
			{submit: 1, change: 1, focusin: 1})
			{
				b = "on" + i, h = b in j, h || (j.setAttribute(b, "return;"), h = "function" === typeof j[b]), a[i + "Bubbles"] = h;
			}
		}
		d.removeChild(j);
		d = e = f = j = b = null;
		c(function ()
		{
			var b, d, e, f, i = k.getElementsByTagName("body")[0];
			if (i)
			{
				b = k.createElement("div");
				b.style.cssText = "padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px";
				i.insertBefore(b, i.firstChild);
				j = k.createElement("div");
				b.appendChild(j);
				j.innerHTML = "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>";
				g = j.getElementsByTagName("td");
				h = g[0].offsetHeight === 0;
				g[0].style.display = "";
				g[1].style.display = "none";
				a.reliableHiddenOffsets = h && g[0].offsetHeight === 0;
				if (r.getComputedStyle)
				{
					j.innerHTML = "";
					d = k.createElement("div");
					d.style.width = "0";
					d.style.marginRight = "0";
					j.style.width = "2px";
					j.appendChild(d);
					a.reliableMarginRight = (parseInt((r.getComputedStyle(d,
						null) || {marginRight: 0}).marginRight, 10) || 0) === 0
				}
				if (typeof j.style.zoom !== "undefined")
				{
					j.innerHTML = "";
					j.style.width = j.style.padding = "1px";
					j.style.border = 0;
					j.style.overflow = "hidden";
					j.style.display = "inline";
					j.style.zoom = 1;
					a.inlineBlockNeedsLayout = j.offsetWidth === 3;
					j.style.display = "block";
					j.style.overflow = "visible";
					j.innerHTML = "<div style='width:5px;'></div>";
					a.shrinkWrapBlocks = j.offsetWidth !== 3
				}
				j.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;";
				j.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
				d = j.firstChild;
				e = d.firstChild;
				f = d.nextSibling.firstChild.firstChild;
				f = {doesNotAddBorder: e.offsetTop !== 5, doesAddBorderForTableAndCells: f.offsetTop ===
					5};
				e.style.position = "fixed";
				e.style.top = "20px";
				f.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15;
				e.style.position = e.style.top = "";
				d.style.overflow = "hidden";
				d.style.position = "relative";
				f.subtractsBorderForOverflowNotVisible = e.offsetTop === -5;
				f.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1;
				if (r.getComputedStyle)
				{
					j.style.marginTop = "1%";
					a.pixelMargin = (r.getComputedStyle(j, null) || {marginTop: 0}).marginTop !== "1%"
				}
				if (typeof b.style.zoom !== "undefined")
				{
					b.style.zoom = 1;
				}
				i.removeChild(b);
				j = null;
				c.extend(a, f)
			}
		});
		return a
	}();
	var gb = /^(?:\{.*\}|\[.*\])$/, fb = /([A-Z])/g;
	c.extend({cache: {}, uuid: 0, expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (a)
	{
		a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
		return!!a && !Z(a)
	}, data: function (a, b, d, e)
	{
		if (c.acceptData(a))
		{
			var f;
			f = c.expando;
			var g = "string" === typeof b, i = a.nodeType, h = i ? c.cache : a, j = i ? a[f] : a[f] && f, n = "events" === b;
			if (j && h[j] && (n || e || h[j].data) || !(g && d === m))
			{
				j ||
				(i ? a[f] = j = ++c.uuid : j = f);
				h[j] || (h[j] = {}, i || (h[j].toJSON = c.noop));
				if ("object" === typeof b || "function" === typeof b)
				{
					e ? h[j] = c.extend(h[j], b) : h[j].data = c.extend(h[j].data, b);
				}
				f = a = h[j];
				e || (a.data || (a.data = {}), a = a.data);
				d !== m && (a[c.camelCase(b)] = d);
				if (n && !a[b])
				{
					return f.events;
				}
				g ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
				return d
			}
		}
	}, removeData: function (a, b, d)
	{
		if (c.acceptData(a))
		{
			var e, f, g, i = c.expando, h = a.nodeType, j = h ? c.cache : a, n = h ? a[i] : i;
			if (j[n])
			{
				if (b && (e = d ? j[n] : j[n].data))
				{
					c.isArray(b) || (b in e ? b = [b] : (b = c.camelCase(b),
						b = b in e ? [b] : b.split(" ")));
					f = 0;
					for (g = b.length;
					     f < g;
					     f++)
					{
						delete e[b[f]];
					}
					if (!(d ? Z : c.isEmptyObject)(e))
					{
						return
					}
				}
				if (!d && (delete j[n].data, !Z(j[n])))
				{
					return;
				}
				c.support.deleteExpando || !j.setInterval ? delete j[n] : j[n] = null;
				h && (c.support.deleteExpando ? delete a[i] : a.removeAttribute ? a.removeAttribute(i) : a[i] = null)
			}
		}
	}, _data: function (a, b, d)
	{
		return c.data(a, b, d, !0)
	}, acceptData: function (a)
	{
		if (a.nodeName)
		{
			var b = c.noData[a.nodeName.toLowerCase()];
			if (b)
			{
				return!(!0 === b || a.getAttribute("classid") !== b)
			}
		}
		return!0
	}});
	c.fn.extend({data: function (a, b)
	{
		var d, e, f, g, i, h = this[0], j = 0, n = null;
		if (a === m)
		{
			if (this.length && (n = c.data(h), 1 === h.nodeType && !c._data(h, "parsedAttrs")))
			{
				f = h.attributes;
				for (i = f.length;
				     j < i;
				     j++)
				{
					g = f[j].name, 0 === g.indexOf("data-") && (g = c.camelCase(g.substring(5)), na(h, g, n[g]));
				}
				c._data(h, "parsedAttrs", !0)
			}
			return n
		}
		if ("object" === typeof a)
		{
			return this.each(function ()
			{
				c.data(this, a)
			});
		}
		d = a.split(".", 2);
		d[1] = d[1] ? "." + d[1] : "";
		e = d[1] + "!";
		return c.access(this, function (b)
		{
			if (b === m)
			{
				return n = this.triggerHandler("getData" + e, [d[0]]), n === m && h && (n = c.data(h,
					a), n = na(h, a, n)), n === m && d[1] ? this.data(d[0]) : n;
			}
			d[1] = b;
			this.each(function ()
			{
				var f = c(this);
				f.triggerHandler("setData" + e, d);
				c.data(this, a, b);
				f.triggerHandler("changeData" + e, d)
			})
		}, null, b, 1 < arguments.length, null, !1)
	}, removeData: function (a)
	{
		return this.each(function ()
		{
			c.removeData(this, a)
		})
	}});
	c.extend({_mark: function (a, b)
	{
		a && (b = (b || "fx") + "mark", c._data(a, b, (c._data(a, b) || 0) + 1))
	}, _unmark: function (a, b, d)
	{
		!0 !== a && (d = b, b = a, a = !1);
		if (b)
		{
			var d = d || "fx", e = d + "mark";
			(a = a ? 0 : (c._data(b, e) || 1) - 1) ? c._data(b, e, a) : (c.removeData(b,
				e, !0), oa(b, d, "mark"))
		}
	}, queue: function (a, b, d)
	{
		var e;
		if (a)
		{
			return b = (b || "fx") + "queue", e = c._data(a, b), d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d)), e || []
		}
	}, dequeue: function (a, b)
	{
		var b = b || "fx", d = c.queue(a, b), e = d.shift(), f = {};
		"inprogress" === e && (e = d.shift());
		e && ("fx" === b && d.unshift("inprogress"), c._data(a, b + ".run", f), e.call(a, function ()
		{
			c.dequeue(a, b)
		}, f));
		d.length || (c.removeData(a, b + "queue " + b + ".run", !0), oa(a, b, "queue"))
	}});
	c.fn.extend({queue: function (a, b)
	{
		var d = 2;
		"string" !== typeof a && (b =
			a, a = "fx", d--);
		return arguments.length < d ? c.queue(this[0], a) : b === m ? this : this.each(function ()
		{
			var d = c.queue(this, a, b);
			a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
		})
	}, dequeue: function (a)
	{
		return this.each(function ()
		{
			c.dequeue(this, a)
		})
	}, delay: function (a, b)
	{
		a = c.fx ? c.fx.speeds[a] || a : a;
		return this.queue(b || "fx", function (b, c)
		{
			var f = setTimeout(b, a);
			c.stop = function ()
			{
				clearTimeout(f)
			}
		})
	}, clearQueue: function (a)
	{
		return this.queue(a || "fx", [])
	}, promise: function (a, b)
	{
		function d()
		{
			--i || e.resolveWith(f, [f])
		}

		"string" !== typeof a && (b = a, a = m);
		for (var a = a || "fx", e = c.Deferred(), f = this, g = f.length, i = 1, h = a + "defer", j = a + "queue", n = a + "mark", p;
		     g--;)
		{
			if (p = c.data(f[g], h, m, !0) || (c.data(f[g], j, m, !0) || c.data(f[g], n, m, !0)) && c.data(f[g], h, c.Callbacks("once memory"), !0))
			{
				i++, p.add(d);
			}
		}
		d();
		return e.promise(b)
	}});
	var Ha = /[\n\t\r]/g, W = /\s+/, pb = /\r/g, qb = /^(?:button|input)$/i, rb = /^(?:button|input|object|select|textarea)$/i, sb = /^a(?:rea)?$/i, Ia = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		Ja = c.support.getSetAttribute, w, Ka, La;
	c.fn.extend({attr: function (a, b)
	{
		return c.access(this, c.attr, a, b, 1 < arguments.length)
	}, removeAttr: function (a)
	{
		return this.each(function ()
		{
			c.removeAttr(this, a)
		})
	}, prop: function (a, b)
	{
		return c.access(this, c.prop, a, b, 1 < arguments.length)
	}, removeProp: function (a)
	{
		a = c.propFix[a] || a;
		return this.each(function ()
		{
			try
			{
				this[a] = m, delete this[a]
			}
			catch (b)
			{
			}
		})
	}, addClass: function (a)
	{
		var b, d, e, f, g, i, h;
		if (c.isFunction(a))
		{
			return this.each(function (b)
			{
				c(this).addClass(a.call(this, b, this.className))
			});
		}
		if (a && "string" === typeof a)
		{
			b = a.split(W);
			d = 0;
			for (e = this.length;
			     d < e;
			     d++)
			{
				if (f = this[d], 1 === f.nodeType)
				{
					if (!f.className && 1 === b.length)
					{
						f.className = a;
					}
					else
					{
						g = " " + f.className + " ";
						i = 0;
						for (h = b.length;
						     i < h;
						     i++)
						{
							~g.indexOf(" " + b[i] + " ") || (g += b[i] + " ");
						}
						f.className = c.trim(g)
					}
				}
			}
		}
		return this
	}, removeClass: function (a)
	{
		var b, d, e, f, g, i, h;
		if (c.isFunction(a))
		{
			return this.each(function (b)
			{
				c(this).removeClass(a.call(this, b, this.className))
			});
		}
		if (a && "string" === typeof a || a === m)
		{
			b = (a || "").split(W);
			d = 0;
			for (e = this.length;
			     d < e;
			     d++)
			{
				if (f =
					this[d], 1 === f.nodeType && f.className)
				{
					if (a)
					{
						g = (" " + f.className + " ").replace(Ha, " ");
						i = 0;
						for (h = b.length;
						     i < h;
						     i++)
						{
							g = g.replace(" " + b[i] + " ", " ");
						}
						f.className = c.trim(g)
					}
					else
					{
						f.className = ""
					}
				}
			}
		}
		return this
	}, toggleClass: function (a, b)
	{
		var d = typeof a, e = "boolean" === typeof b;
		return c.isFunction(a) ? this.each(function (d)
		{
			c(this).toggleClass(a.call(this, d, this.className, b), b)
		}) : this.each(function ()
		{
			if ("string" === d)
			{
				for (var f, g = 0, i = c(this), h = b, j = a.split(W);
				     f = j[g++];)
				{
					h = e ? h : !i.hasClass(f), i[h ? "addClass" : "removeClass"](f);
				}
			}
			else if ("undefined" === d || "boolean" === d)
			{
				this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
			}
		})
	}, hasClass: function (a)
	{
		for (var a = " " + a + " ", b = 0, c = this.length;
		     b < c;
		     b++)
		{
			if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(Ha, " ").indexOf(a))
			{
				return!0;
			}
		}
		return!1
	}, val: function (a)
	{
		var b, d, e, f = this[0];
		if (arguments.length)
		{
			return e = c.isFunction(a), this.each(function (d)
			{
				var f = c(this);
				if (1 === this.nodeType && (d = e ? a.call(this,
					d, f.val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : c.isArray(d) && (d = c.map(d, function (a)
				{
					return a == null ? "" : a + ""
				})), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], !b || !("set"in b) || b.set(this, d, "value") === m))
				{
					this.value = d
				}
			});
		}
		if (f)
		{
			if ((b = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()]) && "get"in b && (d = b.get(f, "value")) !== m)
			{
				return d;
			}
			d = f.value;
			return"string" === typeof d ? d.replace(pb, "") : null == d ? "" : d
		}
	}});
	c.extend({valHooks: {option: {get: function (a)
	{
		var b = a.attributes.value;
		return!b ||
			b.specified ? a.value : a.text
	}}, select: {get: function (a)
	{
		var b, d, e = a.selectedIndex, f = [], g = a.options, i = "select-one" === a.type;
		if (0 > e)
		{
			return null;
		}
		a = i ? e : 0;
		for (d = i ? e + 1 : g.length;
		     a < d;
		     a++)
		{
			if (b = g[a], b.selected && (c.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !c.nodeName(b.parentNode, "optgroup")))
			{
				b = c(b).val();
				if (i)
				{
					return b;
				}
				f.push(b)
			}
		}
		return i && !f.length && g.length ? c(g[e]).val() : f
	}, set: function (a, b)
	{
		var d = c.makeArray(b);
		c(a).find("option").each(function ()
		{
			this.selected =
				0 <= c.inArray(c(this).val(), d)
		});
		d.length || (a.selectedIndex = -1);
		return d
	}}}, attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0}, attr: function (a, b, d, e)
	{
		var f, g, i = a.nodeType;
		if (a && !(3 === i || 8 === i || 2 === i))
		{
			if (e && b in c.attrFn)
			{
				return c(a)[b](d);
			}
			if ("undefined" === typeof a.getAttribute)
			{
				return c.prop(a, b, d);
			}
			if (e = 1 !== i || !c.isXMLDoc(a))
			{
				b = b.toLowerCase(), g = c.attrHooks[b] || (Ia.test(b) ? Ka : w);
			}
			if (d !== m)
			{
				if (null === d)
				{
					c.removeAttr(a, b);
				}
				else
				{
					if (g && "set"in g && e && (f = g.set(a, d, b)) !== m)
					{
						return f;
					}
					a.setAttribute(b,
						"" + d);
					return d
				}
			}
			else
			{
				if (g && "get"in g && e && null !== (f = g.get(a, b)))
				{
					return f;
				}
				f = a.getAttribute(b);
				return null === f ? m : f
			}
		}
	}, removeAttr: function (a, b)
	{
		var d, e, f, g, i, h = 0;
		if (b && 1 === a.nodeType)
		{
			e = b.toLowerCase().split(W);
			for (g = e.length;
			     h < g;
			     h++)
			{
				if (f = e[h])
				{
					d = c.propFix[f] || f, (i = Ia.test(f)) || c.attr(a, f, ""), a.removeAttribute(Ja ? f : d), i && d in a && (a[d] = !1)
				}
			}
		}
	}, attrHooks: {type: {set: function (a, b)
	{
		if (qb.test(a.nodeName) && a.parentNode)
		{
			c.error("type property can't be changed");
		}
		else if (!c.support.radioValue && "radio" === b && c.nodeName(a,
			"input"))
		{
			var d = a.value;
			a.setAttribute("type", b);
			d && (a.value = d);
			return b
		}
	}}, value: {get: function (a, b)
	{
		return w && c.nodeName(a, "button") ? w.get(a, b) : b in a ? a.value : null
	}, set: function (a, b, d)
	{
		if (w && c.nodeName(a, "button"))
		{
			return w.set(a, b, d);
		}
		a.value = b
	}}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"},
		prop: function (a, b, d)
		{
			var e, f, g;
			g = a.nodeType;
			if (a && !(3 === g || 8 === g || 2 === g))
			{
				if (g = 1 !== g || !c.isXMLDoc(a))
				{
					b = c.propFix[b] || b, f = c.propHooks[b];
				}
				return d !== m ? f && "set"in f && (e = f.set(a, d, b)) !== m ? e : a[b] = d : f && "get"in f && null !== (e = f.get(a, b)) ? e : a[b]
			}
		}, propHooks: {tabIndex: {get: function (a)
		{
			var b = a.getAttributeNode("tabindex");
			return b && b.specified ? parseInt(b.value, 10) : rb.test(a.nodeName) || sb.test(a.nodeName) && a.href ? 0 : m
		}}}});
	c.attrHooks.tabindex = c.propHooks.tabIndex;
	Ka = {get: function (a, b)
	{
		var d, e = c.prop(a, b);
		return!0 ===
			e || "boolean" !== typeof e && (d = a.getAttributeNode(b)) && !1 !== d.nodeValue ? b.toLowerCase() : m
	}, set: function (a, b, d)
	{
		!1 === b ? c.removeAttr(a, d) : (b = c.propFix[d] || d, b in a && (a[b] = !0), a.setAttribute(d, d.toLowerCase()));
		return d
	}};
	Ja || (La = {name: !0, id: !0, coords: !0}, w = c.valHooks.button = {get: function (a, b)
	{
		var c;
		return(c = a.getAttributeNode(b)) && (La[b] ? "" !== c.nodeValue : c.specified) ? c.nodeValue : m
	}, set: function (a, b, c)
	{
		var e = a.getAttributeNode(c);
		e || (e = k.createAttribute(c), a.setAttributeNode(e));
		return e.nodeValue = b + ""
	}},
		c.attrHooks.tabindex.set = w.set, c.each(["width", "height"], function (a, b)
	{
		c.attrHooks[b] = c.extend(c.attrHooks[b], {set: function (a, c)
		{
			if ("" === c)
			{
				return a.setAttribute(b, "auto"), c
			}
		}})
	}), c.attrHooks.contenteditable = {get: w.get, set: function (a, b, c)
	{
		"" === b && (b = "false");
		w.set(a, b, c)
	}});
	c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function (a, b)
	{
		c.attrHooks[b] = c.extend(c.attrHooks[b], {get: function (a)
		{
			a = a.getAttribute(b, 2);
			return a === null ? m : a
		}})
	});
	c.support.style || (c.attrHooks.style = {get: function (a)
	{
		return a.style.cssText.toLowerCase() ||
			m
	}, set: function (a, b)
	{
		return a.style.cssText = "" + b
	}});
	c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {get: function (a)
	{
		if (a = a.parentNode)
		{
			a.selectedIndex;
			a.parentNode && a.parentNode.selectedIndex
		}
		return null
	}}));
	c.support.enctype || (c.propFix.enctype = "encoding");
	c.support.checkOn || c.each(["radio", "checkbox"], function ()
	{
		c.valHooks[this] = {get: function (a)
		{
			return a.getAttribute("value") === null ? "on" : a.value
		}}
	});
	c.each(["radio", "checkbox"], function ()
	{
		c.valHooks[this] = c.extend(c.valHooks[this],
			{set: function (a, b)
			{
				if (c.isArray(b))
				{
					return a.checked = c.inArray(c(a).val(), b) >= 0
				}
			}})
	});
	var ha = /^(?:textarea|input|select)$/i, Ma = /^([^\.]*)?(?:\.(.+))?$/, tb = /(?:^|\s)hover(\.\S+)?\b/, ub = /^key/, vb = /^(?:mouse|contextmenu)|click/, Na = /^(?:focusinfocus|focusoutblur)$/, wb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, xb = function (a)
	{
		if (a = wb.exec(a))
		{
			a[1] = (a[1] || "").toLowerCase();
			a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)")
		}
		return a
	}, Oa = function (a)
	{
		return c.event.special.hover ? a : a.replace(tb, "mouseenter$1 mouseleave$1")
	};
	c.event = {add: function (a, b, d, e, f)
	{
		var g, i, h, j, n, p, l, k, o;
		if (!(a.nodeType === 3 || a.nodeType === 8 || !b || !d || !(g = c._data(a))))
		{
			if (d.handler)
			{
				l = d;
				d = l.handler;
				f = l.selector
			}
			if (!d.guid)
			{
				d.guid = c.guid++;
			}
			h = g.events;
			if (!h)
			{
				g.events = h = {};
			}
			i = g.handle;
			if (!i)
			{
				g.handle = i = function (a)
				{
					return typeof c !== "undefined" && (!a || c.event.triggered !== a.type) ? c.event.dispatch.apply(i.elem, arguments) : m
				};
				i.elem = a
			}
			b = c.trim(Oa(b)).split(" ");
			for (g = 0;
			     g < b.length;
			     g++)
			{
				j = Ma.exec(b[g]) || [];
				n = j[1];
				p = (j[2] || "").split(".").sort();
				o = c.event.special[n] ||
				{};
				n = (f ? o.delegateType : o.bindType) || n;
				o = c.event.special[n] || {};
				j = c.extend({type: n, origType: j[1], data: e, handler: d, guid: d.guid, selector: f, quick: f && xb(f), namespace: p.join(".")}, l);
				k = h[n];
				if (!k)
				{
					k = h[n] = [];
					k.delegateCount = 0;
					if (!o.setup || o.setup.call(a, e, p, i) === false)
					{
						a.addEventListener ? a.addEventListener(n, i, false) : a.attachEvent && a.attachEvent("on" + n, i)
					}
				}
				if (o.add)
				{
					o.add.call(a, j);
					if (!j.handler.guid)
					{
						j.handler.guid = d.guid
					}
				}
				f ? k.splice(k.delegateCount++, 0, j) : k.push(j);
				c.event.global[n] = true
			}
			a = null
		}
	}, global: {},
		remove: function (a, b, d, e, f)
		{
			var g = c.hasData(a) && c._data(a), i, h, j, n, p, l, k, o, m, r;
			if (g && (k = g.events))
			{
				b = c.trim(Oa(b || "")).split(" ");
				for (i = 0;
				     i < b.length;
				     i++)
				{
					h = Ma.exec(b[i]) || [];
					j = n = h[1];
					h = h[2];
					if (j)
					{
						o = c.event.special[j] || {};
						j = (e ? o.delegateType : o.bindType) || j;
						m = k[j] || [];
						p = m.length;
						h = h ? RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						for (l = 0;
						     l < m.length;
						     l++)
						{
							r = m[l];
							if ((f || n === r.origType) && (!d || d.guid === r.guid) && (!h || h.test(r.namespace)) && (!e || e === r.selector || e === "**" && r.selector))
							{
								m.splice(l--,
									1);
								r.selector && m.delegateCount--;
								o.remove && o.remove.call(a, r)
							}
						}
						if (m.length === 0 && p !== m.length)
						{
							(!o.teardown || o.teardown.call(a, h) === false) && c.removeEvent(a, j, g.handle);
							delete k[j]
						}
					}
					else
					{
						for (j in
							k)
						{
							c.event.remove(a, j + b[i], d, e, true)
						}
					}
				}
				if (c.isEmptyObject(k))
				{
					if (b = g.handle)
					{
						b.elem = null;
					}
					c.removeData(a, ["events", "handle"], true)
				}
			}
		}, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (a, b, d, e)
		{
			if (!d || !(d.nodeType === 3 || d.nodeType === 8))
			{
				var f = a.type || a, g = [], i, h, j, n, p;
				if (!Na.test(f + c.event.triggered))
				{
					if (f.indexOf("!") >=
						0)
					{
						f = f.slice(0, -1);
						i = true
					}
					if (f.indexOf(".") >= 0)
					{
						g = f.split(".");
						f = g.shift();
						g.sort()
					}
					if (d && !c.event.customEvent[f] || c.event.global[f])
					{
						a = typeof a === "object" ? a[c.expando] ? a : new c.Event(f, a) : new c.Event(f);
						a.type = f;
						a.isTrigger = true;
						a.exclusive = i;
						a.namespace = g.join(".");
						a.namespace_re = a.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
						i = f.indexOf(":") < 0 ? "on" + f : "";
						if (d)
						{
							a.result = m;
							if (!a.target)
							{
								a.target = d;
							}
							b = b != null ? c.makeArray(b) : [];
							b.unshift(a);
							j = c.event.special[f] || {};
							if (!(j.trigger &&
								j.trigger.apply(d, b) === false))
							{
								p = [
									[d, j.bindType || f]
								];
								if (!e && !j.noBubble && !c.isWindow(d))
								{
									n = j.delegateType || f;
									g = Na.test(n + f) ? d : d.parentNode;
									for (h = null;
									     g;
									     g = g.parentNode)
									{
										p.push([g, n]);
										h = g
									}
									h && h === d.ownerDocument && p.push([h.defaultView || h.parentWindow || r, n])
								}
								for (h = 0;
								     h < p.length && !a.isPropagationStopped();
								     h++)
								{
									g = p[h][0];
									a.type = p[h][1];
									(n = (c._data(g, "events") || {})[a.type] && c._data(g, "handle")) && n.apply(g, b);
									(n = i && g[i]) && (c.acceptData(g) && n.apply(g, b) === false) && a.preventDefault()
								}
								a.type = f;
								if (!e && !a.isDefaultPrevented() &&
									(!j._default || j._default.apply(d.ownerDocument, b) === false) && !(f === "click" && c.nodeName(d, "a")) && c.acceptData(d))
								{
									if (i && d[f] && (f !== "focus" && f !== "blur" || a.target.offsetWidth !== 0) && !c.isWindow(d))
									{
										(h = d[i]) && (d[i] = null);
										c.event.triggered = f;
										d[f]();
										c.event.triggered = m;
										h && (d[i] = h)
									}
								}
								return a.result
							}
						}
						else
						{
							d = c.cache;
							for (h in
								d)
							{
								d[h].events && d[h].events[f] && c.event.trigger(a, b, d[h].handle.elem, true)
							}
						}
					}
				}
			}
		}, dispatch: function (a)
		{
			var a = c.event.fix(a || r.event), b = (c._data(this, "events") || {})[a.type] || [], d = b.delegateCount,
				e = [].slice.call(arguments, 0), f = !a.exclusive && !a.namespace, g = c.event.special[a.type] || {}, i = [], h, j, n, p, l, k, o;
			e[0] = a;
			a.delegateTarget = this;
			if (!(g.preDispatch && g.preDispatch.call(this, a) === false))
			{
				if (d && !(a.button && a.type === "click"))
				{
					n = c(this);
					n.context = this.ownerDocument || this;
					for (j = a.target;
					     j != this;
					     j = j.parentNode || this)
					{
						if (j.disabled !== true)
						{
							l = {};
							k = [];
							n[0] = j;
							for (h = 0;
							     h < d;
							     h++)
							{
								p = b[h];
								o = p.selector;
								if (l[o] === m)
								{
									var da = l, v = o, t;
									if (p.quick)
									{
										t = p.quick;
										var u = j.attributes || {};
										t = (!t[1] || j.nodeName.toLowerCase() ===
											t[1]) && (!t[2] || (u.id || {}).value === t[2]) && (!t[3] || t[3].test((u["class"] || {}).value))
									}
									else
									{
										t = n.is(o);
									}
									da[v] = t
								}
								l[o] && k.push(p)
							}
							k.length && i.push({elem: j, matches: k})
						}
					}
				}
				b.length > d && i.push({elem: this, matches: b.slice(d)});
				for (h = 0;
				     h < i.length && !a.isPropagationStopped();
				     h++)
				{
					d = i[h];
					a.currentTarget = d.elem;
					for (b = 0;
					     b < d.matches.length && !a.isImmediatePropagationStopped();
					     b++)
					{
						p = d.matches[b];
						if (f || !a.namespace && !p.namespace || a.namespace_re && a.namespace_re.test(p.namespace))
						{
							a.data = p.data;
							a.handleObj = p;
							p = ((c.event.special[p.origType] ||
							{}).handle || p.handler).apply(d.elem, e);
							if (p !== m)
							{
								a.result = p;
								if (p === false)
								{
									a.preventDefault();
									a.stopPropagation()
								}
							}
						}
					}
				}
				g.postDispatch && g.postDispatch.call(this, a);
				return a.result
			}
		}, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: ["char", "charCode", "key", "keyCode"], filter: function (a, b)
		{
			if (a.which == null)
			{
				a.which = b.charCode != null ? b.charCode : b.keyCode;
			}
			return a
		}}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b)
		{
			var c, e, f = b.button, g = b.fromElement;
			if (a.pageX == null && b.clientX != null)
			{
				c = a.target.ownerDocument || k;
				e = c.documentElement;
				c = c.body;
				a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0);
				a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)
			}
			if (!a.relatedTarget && g)
			{
				a.relatedTarget =
					g === a.target ? b.toElement : g;
			}
			if (!a.which && f !== m)
			{
				a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0;
			}
			return a
		}}, fix: function (a)
		{
			if (a[c.expando])
			{
				return a;
			}
			var b, d, e = a, f = c.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props, a = c.Event(e);
			for (b = g.length;
			     b;)
			{
				d = g[--b];
				a[d] = e[d]
			}
			if (!a.target)
			{
				a.target = e.srcElement || k;
			}
			if (a.target.nodeType === 3)
			{
				a.target = a.target.parentNode;
			}
			if (a.metaKey === m)
			{
				a.metaKey = a.ctrlKey;
			}
			return f.filter ? f.filter(a, e) : a
		}, special: {ready: {setup: c.bindReady}, load: {noBubble: !0}, focus: {delegateType: "focusin"},
			blur: {delegateType: "focusout"}, beforeunload: {setup: function (a, b, d)
			{
				if (c.isWindow(this))
				{
					this.onbeforeunload = d
				}
			}, teardown: function (a, b)
			{
				if (this.onbeforeunload === b)
				{
					this.onbeforeunload = null
				}
			}}}, simulate: function (a, b, d, e)
		{
			a = c.extend(new c.Event, d, {type: a, isSimulated: true, originalEvent: {}});
			e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
			a.isDefaultPrevented() && d.preventDefault()
		}};
	c.event.handle = c.event.dispatch;
	c.removeEvent = k.removeEventListener ? function (a, b, c)
	{
		a.removeEventListener && a.removeEventListener(b,
			c, false)
	} : function (a, b, c)
	{
		a.detachEvent && a.detachEvent("on" + b, c)
	};
	c.Event = function (a, b)
	{
		if (!(this instanceof c.Event))
		{
			return new c.Event(a, b);
		}
		if (a && a.type)
		{
			this.originalEvent = a;
			this.type = a.type;
			this.isDefaultPrevented = a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? K : E
		}
		else
		{
			this.type = a;
		}
		b && c.extend(this, b);
		this.timeStamp = a && a.timeStamp || c.now();
		this[c.expando] = true
	};
	c.Event.prototype = {preventDefault: function ()
	{
		this.isDefaultPrevented = K;
		var a = this.originalEvent;
		if (a)
		{
			a.preventDefault ? a.preventDefault() : a.returnValue = false
		}
	}, stopPropagation: function ()
	{
		this.isPropagationStopped = K;
		var a = this.originalEvent;
		if (a)
		{
			a.stopPropagation && a.stopPropagation();
			a.cancelBubble = true
		}
	}, stopImmediatePropagation: function ()
	{
		this.isImmediatePropagationStopped = K;
		this.stopPropagation()
	}, isDefaultPrevented: E, isPropagationStopped: E, isImmediatePropagationStopped: E};
	c.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b)
	{
		c.event.special[a] = {delegateType: b, bindType: b, handle: function (a)
		{
			var e =
				a.relatedTarget, f = a.handleObj, g;
			if (!e || e !== this && !c.contains(this, e))
			{
				a.type = f.origType;
				g = f.handler.apply(this, arguments);
				a.type = b
			}
			return g
		}}
	});
	c.support.submitBubbles || (c.event.special.submit = {setup: function ()
	{
		if (c.nodeName(this, "form"))
		{
			return false;
		}
		c.event.add(this, "click._submit keypress._submit", function (a)
		{
			a = a.target;
			if ((a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form : m) && !a._submit_attached)
			{
				c.event.add(a, "submit._submit", function (a)
				{
					a._submit_bubble = true
				});
				a._submit_attached = true
			}
		})
	},
		postDispatch: function (a)
		{
			if (a._submit_bubble)
			{
				delete a._submit_bubble;
				this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, true)
			}
		}, teardown: function ()
		{
			if (c.nodeName(this, "form"))
			{
				return false;
			}
			c.event.remove(this, "._submit")
		}});
	c.support.changeBubbles || (c.event.special.change = {setup: function ()
	{
		if (ha.test(this.nodeName))
		{
			if (this.type === "checkbox" || this.type === "radio")
			{
				c.event.add(this, "propertychange._change", function (a)
				{
					if (a.originalEvent.propertyName === "checked")
					{
						this._just_changed =
							true
					}
				});
				c.event.add(this, "click._change", function (a)
				{
					if (this._just_changed && !a.isTrigger)
					{
						this._just_changed = false;
						c.event.simulate("change", this, a, true)
					}
				})
			}
			return false
		}
		c.event.add(this, "beforeactivate._change", function (a)
		{
			a = a.target;
			if (ha.test(a.nodeName) && !a._change_attached)
			{
				c.event.add(a, "change._change", function (a)
				{
					this.parentNode && (!a.isSimulated && !a.isTrigger) && c.event.simulate("change", this.parentNode, a, true)
				});
				a._change_attached = true
			}
		})
	}, handle: function (a)
	{
		var b = a.target;
		if (this !== b || a.isSimulated ||
			a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
		{
			return a.handleObj.handler.apply(this, arguments)
		}
	}, teardown: function ()
	{
		c.event.remove(this, "._change");
		return ha.test(this.nodeName)
	}});
	c.support.focusinBubbles || c.each({focus: "focusin", blur: "focusout"}, function (a, b)
	{
		var d = 0, e = function (a)
		{
			c.event.simulate(b, a.target, c.event.fix(a), true)
		};
		c.event.special[b] = {setup: function ()
		{
			d++ === 0 && k.addEventListener(a, e, true)
		}, teardown: function ()
		{
			--d === 0 && k.removeEventListener(a, e, true)
		}}
	});
	c.fn.extend({on: function (a, b, d, e, f)
	{
		var g, i;
		if (typeof a === "object")
		{
			if (typeof b !== "string")
			{
				d = d || b;
				b = m
			}
			for (i in
				a)
			{
				this.on(i, b, d, a[i], f);
			}
			return this
		}
		if (d == null && e == null)
		{
			e = b;
			d = b = m
		}
		else if (e == null)
		{
			if (typeof b === "string")
			{
				e = d;
				d = m
			}
			else
			{
				e = d;
				d = b;
				b = m
			}
		}
		if (e === false)
		{
			e = E;
		}
		else if (!e)
		{
			return this;
		}
		if (f === 1)
		{
			g = e;
			e = function (a)
			{
				c().off(a);
				return g.apply(this, arguments)
			};
			e.guid = g.guid || (g.guid = c.guid++)
		}
		return this.each(function ()
		{
			c.event.add(this, a, e, d, b)
		})
	}, one: function (a, b, c, e)
	{
		return this.on(a, b, c, e, 1)
	}, off: function (a, b, d)
	{
		if (a && a.preventDefault &&
			a.handleObj)
		{
			var e = a.handleObj;
			c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
			return this
		}
		if (typeof a === "object")
		{
			for (e in
				a)
			{
				this.off(e, b, a[e]);
			}
			return this
		}
		if (b === false || typeof b === "function")
		{
			d = b;
			b = m
		}
		d === false && (d = E);
		return this.each(function ()
		{
			c.event.remove(this, a, d, b)
		})
	}, bind: function (a, b, c)
	{
		return this.on(a, null, b, c)
	}, unbind: function (a, b)
	{
		return this.off(a, null, b)
	}, live: function (a, b, d)
	{
		c(this.context).on(a, this.selector, b, d);
		return this
	}, die: function (a, b)
	{
		c(this.context).off(a, this.selector || "**", b);
		return this
	}, delegate: function (a, b, c, e)
	{
		return this.on(b, a, c, e)
	}, undelegate: function (a, b, c)
	{
		return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
	}, trigger: function (a, b)
	{
		return this.each(function ()
		{
			c.event.trigger(a, b, this)
		})
	}, triggerHandler: function (a, b)
	{
		if (this[0])
		{
			return c.event.trigger(a, b, this[0], true)
		}
	}, toggle: function (a)
	{
		var b = arguments, d = a.guid || c.guid++, e = 0, f = function (d)
		{
			var f = (c._data(this, "lastToggle" + a.guid) || 0) % e;
			c._data(this, "lastToggle" +
				a.guid, f + 1);
			d.preventDefault();
			return b[f].apply(this, arguments) || false
		};
		for (f.guid = d;
		     e < b.length;)
		{
			b[e++].guid = d;
		}
		return this.click(f)
	}, hover: function (a, b)
	{
		return this.mouseenter(a).mouseleave(b || a)
	}});
	c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b)
	{
		c.fn[b] = function (a, c)
		{
			if (c == null)
			{
				c = a;
				a = null
			}
			return arguments.length >
				0 ? this.on(b, null, a, c) : this.trigger(b)
		};
		c.attrFn && (c.attrFn[b] = true);
		if (ub.test(b))
		{
			c.event.fixHooks[b] = c.event.keyHooks;
		}
		if (vb.test(b))
		{
			c.event.fixHooks[b] = c.event.mouseHooks
		}
	});
	(function ()
	{
		function a(a, b, c, d, f, g)
		{
			for (var f = 0, i = d.length;
			     f < i;
			     f++)
			{
				var h = d[f];
				if (h)
				{
					for (var j = false, h = h[a];
					     h;)
					{
						if (h[e] === c)
						{
							j = d[h.sizset];
							break
						}
						if (h.nodeType === 1 && !g)
						{
							h[e] = c;
							h.sizset = f
						}
						if (h.nodeName.toLowerCase() === b)
						{
							j = h;
							break
						}
						h = h[a]
					}
					d[f] = j
				}
			}
		}

		function b(a, b, c, d, f, g)
		{
			for (var f = 0, i = d.length;
			     f < i;
			     f++)
			{
				var h = d[f];
				if (h)
				{
					for (var j =
						false, h = h[a];
					     h;)
					{
						if (h[e] === c)
						{
							j = d[h.sizset];
							break
						}
						if (h.nodeType === 1)
						{
							if (!g)
							{
								h[e] = c;
								h.sizset = f
							}
							if (typeof b !== "string")
							{
								if (h === b)
								{
									j = true;
									break
								}
							}
							else if (l.filter(b, [h]).length > 0)
							{
								j = h;
								break
							}
						}
						h = h[a]
					}
					d[f] = j
				}
			}
		}

		var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = "sizcache" + (Math.random() + "").replace(".", ""), f = 0, g = Object.prototype.toString, i = false, h = true, j = /\\/g, n = /\r\n/g, p = /\W/;
		[0, 0].sort(function ()
		{
			h = false;
			return 0
		});
		var l = function (a, b, c, e)
		{
			var c = c || [], f = b = b || k;
			if (b.nodeType !== 1 && b.nodeType !== 9)
			{
				return[];
			}
			if (!a || typeof a !== "string")
			{
				return c;
			}
			var i, h, j, n, p, m = true, r = l.isXML(b), q = [], t = a;
			do {
				d.exec("");
				if (i = d.exec(t))
				{
					t = i[3];
					q.push(i[1]);
					if (i[2])
					{
						n = i[3];
						break
					}
				}
			}
			while (i);
			if (q.length > 1 && v.exec(a))
			{
				if (q.length === 2 && o.relative[q[0]])
				{
					h = B(q[0] + q[1], b, e);
				}
				else
				{
					for (h = o.relative[q[0]] ? [b] : l(q.shift(), b);
					     q.length;)
					{
						a = q.shift();
						o.relative[a] && (a = a + q.shift());
						h = B(a, h, e)
					}
				}
			}
			else
			{
				if (!e && q.length > 1 && b.nodeType === 9 && !r && o.match.ID.test(q[0]) && !o.match.ID.test(q[q.length - 1]))
				{
					i = l.find(q.shift(), b, r);
					b = i.expr ? l.filter(i.expr, i.set)[0] : i.set[0]
				}
				if (b)
				{
					i = e ? {expr: q.pop(), set: u(e)} : l.find(q.pop(), q.length === 1 && (q[0] === "~" || q[0] === "+") && b.parentNode ? b.parentNode : b, r);
					h = i.expr ? l.filter(i.expr, i.set) : i.set;
					for (q.length > 0 ? j = u(h) : m = false;
					     q.length;)
					{
						i = p = q.pop();
						o.relative[p] ? i = q.pop() : p = "";
						i == null && (i = b);
						o.relative[p](j, i, r)
					}
				}
				else
				{
					j = []
				}
			}
			j || (j = h);
			j || l.error(p || a);
			if (g.call(j) === "[object Array]")
			{
				if (m)
				{
					if (b && b.nodeType === 1)
					{
						for (a = 0;
						     j[a] != null;
						     a++)
						{
							j[a] &&
								(j[a] === true || j[a].nodeType === 1 && l.contains(b, j[a])) && c.push(h[a]);
						}
					}
					else
					{
						for (a = 0;
						     j[a] != null;
						     a++)
						{
							j[a] && j[a].nodeType === 1 && c.push(h[a]);
						}
					}
				}
				else
				{
					c.push.apply(c, j);
				}
			}
			else
			{
				u(j, c);
			}
			if (n)
			{
				l(n, f, c, e);
				l.uniqueSort(c)
			}
			return c
		};
		l.uniqueSort = function (a)
		{
			if (z)
			{
				i = h;
				a.sort(z);
				if (i)
				{
					for (var b = 1;
					     b < a.length;
					     b++)
					{
						a[b] === a[b - 1] && a.splice(b--, 1)
					}
				}
			}
			return a
		};
		l.matches = function (a, b)
		{
			return l(a, null, null, b)
		};
		l.matchesSelector = function (a, b)
		{
			return l(b, null, null, [a]).length > 0
		};
		l.find = function (a, b, c)
		{
			var d, e, f, g, i, h;
			if (!a)
			{
				return[];
			}
			e =
				0;
			for (f = o.order.length;
			     e < f;
			     e++)
			{
				i = o.order[e];
				if (g = o.leftMatch[i].exec(a))
				{
					h = g[1];
					g.splice(1, 1);
					if (h.substr(h.length - 1) !== "\\")
					{
						g[1] = (g[1] || "").replace(j, "");
						d = o.find[i](g, b, c);
						if (d != null)
						{
							a = a.replace(o.match[i], "");
							break
						}
					}
				}
			}
			d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
			return{set: d, expr: a}
		};
		l.filter = function (a, b, c, d)
		{
			for (var e, f, g, i, h, j, n, p, k = a, q = [], r = b, t = b && b[0] && l.isXML(b[0]);
			     a && b.length;)
			{
				for (g in
					o.filter)
				{
					if ((e = o.leftMatch[g].exec(a)) != null && e[2])
					{
						j = o.filter[g];
						h = e[1];
						f = false;
						e.splice(1, 1);
						if (h.substr(h.length - 1) !== "\\")
						{
							r === q && (q = []);
							if (o.preFilter[g])
							{
								if (e = o.preFilter[g](e, r, c, q, d, t))
								{
									if (e === true)
									{
										continue
									}
								}
								else
								{
									f = i = true;
								}
							}
							if (e)
							{
								for (n = 0;
								     (h = r[n]) != null;
								     n++)
								{
									if (h)
									{
										i = j(h, e, n, r);
										p = d ^ i;
										if (c && i != null)
										{
											p ? f = true : r[n] = false;
										}
										else if (p)
										{
											q.push(h);
											f = true
										}
									}
								}
							}
							if (i !== m)
							{
								c || (r = q);
								a = a.replace(o.match[g], "");
								if (!f)
								{
									return[];
								}
								break
							}
						}
					}
				}
				if (a === k)if (f == null)l.error(a);
				else break;
				k = a
			}
			return r
		};
		l.error = function (a)
		{
			throw Error("Syntax error, unrecognized expression: " + a);
		};
		var r = l.getText =
				function (a)
				{
					var b, c;
					b = a.nodeType;
					var d = "";
					if (b)if (b === 1 || b === 9 || b === 11)
					{
						if (typeof a.textContent === "string")return a.textContent;
						if (typeof a.innerText === "string")return a.innerText.replace(n, "");
						for (a = a.firstChild;
						     a;
						     a = a.nextSibling)d = d + r(a)
					}
					else
					{
						if (b === 3 || b === 4)return a.nodeValue
					}
					else for (b = 0;
					          c = a[b];
					          b++)c.nodeType !== 8 && (d = d + r(c));
					return d
				}, o = l.selectors = {order: ["ID", "NAME", "TAG"], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {href: function (a)
			{
				return a.getAttribute("href")
			},
				type: function (a)
				{
					return a.getAttribute("type")
				}}, relative: {"+": function (a, b)
			{
				var c = typeof b === "string", d = c && !p.test(b), c = c && !d;
				d && (b = b.toLowerCase());
				for (var d = 0, e = a.length, f;
				     d < e;
				     d++)if (f = a[d])
				{
					for (;
						(f = f.previousSibling) && f.nodeType !== 1;);
					a[d] = c || f && f.nodeName.toLowerCase() === b ? f || false : f === b
				}
				c && l.filter(b, a, true)
			}, ">": function (a, b)
			{
				var c, d = typeof b === "string", e = 0, f = a.length;
				if (d && !p.test(b))for (b = b.toLowerCase();
				                         e < f;
				                         e++)
				{
					if (c = a[e])
					{
						c = c.parentNode;
						a[e] = c.nodeName.toLowerCase() === b ? c : false
					}
				}
				else
				{
					for (;
						e <
							f;
						e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
					d && l.filter(b, a, true)
				}
			}, "": function (c, d, e)
			{
				var g, i = f++, h = b;
				if (typeof d === "string" && !p.test(d))
				{
					g = d = d.toLowerCase();
					h = a
				}
				h("parentNode", d, i, c, g, e)
			}, "~": function (c, d, e)
			{
				var g, i = f++, h = b;
				if (typeof d === "string" && !p.test(d))
				{
					g = d = d.toLowerCase();
					h = a
				}
				h("previousSibling", d, i, c, g, e)
			}}, find: {ID: function (a, b, c)
			{
				if (typeof b.getElementById !== "undefined" && !c)return(a = b.getElementById(a[1])) && a.parentNode ? [a] : []
			}, NAME: function (a, b)
			{
				if (typeof b.getElementsByName !==
					"undefined")
				{
					for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length;
					     e < f;
					     e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
					return c.length === 0 ? null : c
				}
			}, TAG: function (a, b)
			{
				if (typeof b.getElementsByTagName !== "undefined")return b.getElementsByTagName(a[1])
			}}, preFilter: {CLASS: function (a, b, c, d, e, f)
			{
				a = " " + a[1].replace(j, "") + " ";
				if (f)return a;
				for (var f = 0, g;
				     (g = b[f]) != null;
				     f++)g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[f] = false));
				return false
			}, ID: function (a)
			{
				return a[1].replace(j,
					"")
			}, TAG: function (a)
			{
				return a[1].replace(j, "").toLowerCase()
			}, CHILD: function (a)
			{
				if (a[1] === "nth")
				{
					a[2] || l.error(a[0]);
					a[2] = a[2].replace(/^\+|\s*/g, "");
					var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
					a[2] = b[1] + (b[2] || 1) - 0;
					a[3] = b[3] - 0
				}
				else a[2] && l.error(a[0]);
				a[0] = f++;
				return a
			}, ATTR: function (a, b, c, d, e, f)
			{
				b = a[1] = a[1].replace(j, "");
				!f && o.attrMap[b] && (a[1] = o.attrMap[b]);
				a[4] = (a[4] || a[5] || "").replace(j, "");
				a[2] === "~=" && (a[4] = " " + a[4] +
					" ");
				return a
			}, PSEUDO: function (a, b, c, e, f)
			{
				if (a[1] === "not")if ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))a[3] = l(a[3], null, null, b);
				else
				{
					a = l.filter(a[3], b, c, 1 ^ f);
					c || e.push.apply(e, a);
					return false
				}
				else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0]))return true;
				return a
			}, POS: function (a)
			{
				a.unshift(true);
				return a
			}}, filters: {enabled: function (a)
			{
				return a.disabled === false && a.type !== "hidden"
			}, disabled: function (a)
			{
				return a.disabled === true
			}, checked: function (a)
			{
				return a.checked === true
			}, selected: function (a)
			{
				a.parentNode &&
				a.parentNode.selectedIndex;
				return a.selected === true
			}, parent: function (a)
			{
				return!!a.firstChild
			}, empty: function (a)
			{
				return!a.firstChild
			}, has: function (a, b, c)
			{
				return!!l(c[3], a).length
			}, header: function (a)
			{
				return/h\d/i.test(a.nodeName)
			}, text: function (a)
			{
				var b = a.getAttribute("type"), c = a.type;
				return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
			}, radio: function (a)
			{
				return a.nodeName.toLowerCase() === "input" && "radio" === a.type
			}, checkbox: function (a)
			{
				return a.nodeName.toLowerCase() === "input" &&
					"checkbox" === a.type
			}, file: function (a)
			{
				return a.nodeName.toLowerCase() === "input" && "file" === a.type
			}, password: function (a)
			{
				return a.nodeName.toLowerCase() === "input" && "password" === a.type
			}, submit: function (a)
			{
				var b = a.nodeName.toLowerCase();
				return(b === "input" || b === "button") && "submit" === a.type
			}, image: function (a)
			{
				return a.nodeName.toLowerCase() === "input" && "image" === a.type
			}, reset: function (a)
			{
				var b = a.nodeName.toLowerCase();
				return(b === "input" || b === "button") && "reset" === a.type
			}, button: function (a)
			{
				var b = a.nodeName.toLowerCase();
				return b === "input" && "button" === a.type || b === "button"
			}, input: function (a)
			{
				return/input|select|textarea|button/i.test(a.nodeName)
			}, focus: function (a)
			{
				return a === a.ownerDocument.activeElement
			}}, setFilters: {first: function (a, b)
			{
				return b === 0
			}, last: function (a, b, c, d)
			{
				return b === d.length - 1
			}, even: function (a, b)
			{
				return b % 2 === 0
			}, odd: function (a, b)
			{
				return b % 2 === 1
			}, lt: function (a, b, c)
			{
				return b < c[3] - 0
			}, gt: function (a, b, c)
			{
				return b > c[3] - 0
			}, nth: function (a, b, c)
			{
				return c[3] - 0 === b
			}, eq: function (a, b, c)
			{
				return c[3] - 0 === b
			}}, filter: {PSEUDO: function (a, b, c, d)
			{
				var e = b[1], f = o.filters[e];
				if (f)return f(a, c, b, d);
				if (e === "contains")return(a.textContent || a.innerText || r([a]) || "").indexOf(b[3]) >= 0;
				if (e === "not")
				{
					b = b[3];
					c = 0;
					for (d = b.length;
					     c < d;
					     c++)if (b[c] === a)return false;
					return true
				}
				l.error(e)
			}, CHILD: function (a, b)
			{
				var c, d, f, g, i, h;
				c = b[1];
				h = a;
				switch (c)
				{
					case "only":
					case "first":
						for (;
							h = h.previousSibling;)if (h.nodeType === 1)return false;
						if (c === "first")return true;
						h = a;
					case "last":
						for (;
							h = h.nextSibling;)if (h.nodeType === 1)return false;
						return true;
					case "nth":
						c = b[2];
						d =
							b[3];
						if (c === 1 && d === 0)return true;
						f = b[0];
						if ((g = a.parentNode) && (g[e] !== f || !a.nodeIndex))
						{
							i = 0;
							for (h = g.firstChild;
							     h;
							     h = h.nextSibling)if (h.nodeType === 1)h.nodeIndex = ++i;
							g[e] = f
						}
						h = a.nodeIndex - d;
						return c === 0 ? h === 0 : h % c === 0 && h / c >= 0
				}
			}, ID: function (a, b)
			{
				return a.nodeType === 1 && a.getAttribute("id") === b
			}, TAG: function (a, b)
			{
				return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
			}, CLASS: function (a, b)
			{
				return(" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
			}, ATTR: function (a, b)
			{
				var c = b[1],
					c = l.attr ? l.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), d = c + "", e = b[2], f = b[4];
				return c == null ? e === "!=" : !e && l.attr ? c != null : e === "=" ? d === f : e === "*=" ? d.indexOf(f) >= 0 : e === "~=" ? (" " + d + " ").indexOf(f) >= 0 : !f ? d && c !== false : e === "!=" ? d !== f : e === "^=" ? d.indexOf(f) === 0 : e === "$=" ? d.substr(d.length - f.length) === f : e === "|=" ? d === f || d.substr(0, f.length + 1) === f + "-" : false
			}, POS: function (a, b, c, d)
			{
				var e = o.setFilters[b[2]];
				if (e)return e(a, c, b, d)
			}}}, v = o.match.POS, y = function (a, b)
			{
				return"\\" + (b - 0 + 1)
			},
			t;
		for (t in
			o.match)
		{
			o.match[t] = RegExp(o.match[t].source + /(?![^\[]*\])(?![^\(]*\))/.source);
			o.leftMatch[t] = RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[t].source.replace(/\\(\d+)/g, y))
		}
		o.match.globalPOS = v;
		var u = function (a, b)
		{
			a = Array.prototype.slice.call(a, 0);
			if (b)
			{
				b.push.apply(b, a);
				return b
			}
			return a
		};
		try
		{
			Array.prototype.slice.call(k.documentElement.childNodes, 0)[0].nodeType
		}
		catch (w)
		{
			u = function (a, b)
			{
				var c = 0, d = b || [];
				if (g.call(a) === "[object Array]")Array.prototype.push.apply(d, a);
				else if (typeof a.length ===
					"number")for (var e = a.length;
				                  c < e;
				                  c++)d.push(a[c]);
				else for (;
						a[c];
						c++)d.push(a[c]);
				return d
			}
		}
		var z, q;
		if (k.documentElement.compareDocumentPosition)z = function (a, b)
		{
			if (a === b)
			{
				i = true;
				return 0
			}
			return!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
		};
		else
		{
			z = function (a, b)
			{
				if (a === b)
				{
					i = true;
					return 0
				}
				if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
				var c, d, e = [], f = [];
				c = a.parentNode;
				d = b.parentNode;
				var g = c;
				if (c === d)return q(a,
					b);
				if (c)
				{
					if (!d)return 1
				}
				else return-1;
				for (;
					g;)
				{
					e.unshift(g);
					g = g.parentNode
				}
				for (g = d;
				     g;)
				{
					f.unshift(g);
					g = g.parentNode
				}
				c = e.length;
				d = f.length;
				for (g = 0;
				     g < c && g < d;
				     g++)if (e[g] !== f[g])return q(e[g], f[g]);
				return g === c ? q(a, f[g], -1) : q(e[g], b, 1)
			};
			q = function (a, b, c)
			{
				if (a === b)return c;
				for (a = a.nextSibling;
				     a;)
				{
					if (a === b)return-1;
					a = a.nextSibling
				}
				return 1
			}
		}
		(function ()
		{
			var a = k.createElement("div"), b = "script" + (new Date).getTime(), c = k.documentElement;
			a.innerHTML = "<a name='" + b + "'/>";
			c.insertBefore(a, c.firstChild);
			if (k.getElementById(b))
			{
				o.find.ID =
					function (a, b, c)
					{
						if (typeof b.getElementById !== "undefined" && !c)return(b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] : m : []
					};
				o.filter.ID = function (a, b)
				{
					var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
					return a.nodeType === 1 && c && c.nodeValue === b
				}
			}
			c.removeChild(a);
			c = a = null
		})();
		(function ()
		{
			var a = k.createElement("div");
			a.appendChild(k.createComment(""));
			if (a.getElementsByTagName("*").length > 0)o.find.TAG = function (a, b)
			{
				var c = b.getElementsByTagName(a[1]);
				if (a[1] === "*")
				{
					for (var d = [], e = 0;
					     c[e];
					     e++)c[e].nodeType === 1 && d.push(c[e]);
					c = d
				}
				return c
			};
			a.innerHTML = "<a href='#'></a>";
			if (a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#")o.attrHandle.href = function (a)
			{
				return a.getAttribute("href", 2)
			};
			a = null
		})();
		k.querySelectorAll && function ()
		{
			var a = l, b = k.createElement("div");
			b.innerHTML = "<p class='TEST'></p>";
			if (!(b.querySelectorAll && b.querySelectorAll(".TEST").length === 0))
			{
				l =
					function (b, c, d, e)
					{
						c = c || k;
						if (!e && !l.isXML(c))
						{
							var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
							if (f && (c.nodeType === 1 || c.nodeType === 9))
							{
								if (f[1])return u(c.getElementsByTagName(b), d);
								if (f[2] && o.find.CLASS && c.getElementsByClassName)return u(c.getElementsByClassName(f[2]), d)
							}
							if (c.nodeType === 9)
							{
								if (b === "body" && c.body)return u([c.body], d);
								if (f && f[3])
								{
									var g = c.getElementById(f[3]);
									if (g && g.parentNode)
									{
										if (g.id === f[3])return u([g], d)
									}
									else return u([], d)
								}
								try
								{
									return u(c.querySelectorAll(b), d)
								}
								catch (h)
								{
								}
							}
							else if (c.nodeType ===
								1 && c.nodeName.toLowerCase() !== "object")
							{
								var f = c, i = (g = c.getAttribute("id")) || "__sizzle__", j = c.parentNode, n = /^\s*[+~]/.test(b);
								g ? i = i.replace(/'/g, "\\$&") : c.setAttribute("id", i);
								if (n && j)c = c.parentNode;
								try
								{
									if (!n || j)return u(c.querySelectorAll("[id='" + i + "'] " + b), d)
								}
								catch (p)
								{
								}
								finally
								{
									g || f.removeAttribute("id")
								}
							}
						}
						return a(b, c, d, e)
					};
				for (var c in
					a)l[c] = a[c];
				b = null
			}
		}();
		(function ()
		{
			var a = k.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (b)
			{
				var c = !b.call(k.createElement("div"),
					"div"), d = false;
				try
				{
					b.call(k.documentElement, "[test!='']:sizzle")
				}
				catch (e)
				{
					d = true
				}
				l.matchesSelector = function (a, e)
				{
					e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!l.isXML(a))try
					{
						if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e))
						{
							var f = b.call(a, e);
							if (f || !c || a.document && a.document.nodeType !== 11)return f
						}
					}
					catch (g)
					{
					}
					return l(e, null, null, [a]).length > 0
				}
			}
		})();
		(function ()
		{
			var a = k.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (a.getElementsByClassName && a.getElementsByClassName("e").length !==
				0)
			{
				a.lastChild.className = "e";
				if (a.getElementsByClassName("e").length !== 1)
				{
					o.order.splice(1, 0, "CLASS");
					o.find.CLASS = function (a, b, c)
					{
						if (typeof b.getElementsByClassName !== "undefined" && !c)return b.getElementsByClassName(a[1])
					};
					a = null
				}
			}
		})();
		l.contains = k.documentElement.contains ? function (a, b)
		{
			return a !== b && (a.contains ? a.contains(b) : true)
		} : k.documentElement.compareDocumentPosition ? function (a, b)
		{
			return!!(a.compareDocumentPosition(b) & 16)
		} : function ()
		{
			return false
		};
		l.isXML = function (a)
		{
			return(a = (a ? a.ownerDocument ||
				a : 0).documentElement) ? a.nodeName !== "HTML" : false
		};
		var B = function (a, b, c)
		{
			for (var d, e = [], f = "", b = b.nodeType ? [b] : b;
			     d = o.match.PSEUDO.exec(a);)
			{
				f = f + d[0];
				a = a.replace(o.match.PSEUDO, "")
			}
			a = o.relative[a] ? a + "*" : a;
			d = 0;
			for (var g = b.length;
			     d < g;
			     d++)l(a, b[d], e, c);
			return l.filter(f, e)
		};
		l.attr = c.attr;
		l.selectors.attrMap = {};
		c.find = l;
		c.expr = l.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = l.uniqueSort;
		c.text = l.getText;
		c.isXMLDoc = l.isXML;
		c.contains = l.contains
	})();
	var yb = /Until$/, zb = /^(?:parents|prevUntil|prevAll)/, Ab = /,/,
		hb = /^.[^:#\[\.,]*$/, Bb = Array.prototype.slice, Pa = c.expr.match.globalPOS, Cb = {children: !0, contents: !0, next: !0, prev: !0};
	c.fn.extend({find: function (a)
	{
		var b = this, d, e;
		if (typeof a !== "string")return c(a).filter(function ()
		{
			d = 0;
			for (e = b.length;
			     d < e;
			     d++)if (c.contains(b[d], this))return true
		});
		var f = this.pushStack("", "find", a), g, i, h;
		d = 0;
		for (e = this.length;
		     d < e;
		     d++)
		{
			g = f.length;
			c.find(a, this[d], f);
			if (d > 0)for (i = g;
			               i < f.length;
			               i++)for (h = 0;
			                        h < g;
			                        h++)if (f[h] === f[i])
					{
						f.splice(i--, 1);
						break
					}
		}
		return f
	}, has: function (a)
	{
		var b = c(a);
		return this.filter(function ()
		{
			for (var a = 0, e = b.length;
			     a < e;
			     a++)if (c.contains(this, b[a]))return true
		})
	}, not: function (a)
	{
		return this.pushStack(pa(this, a, false), "not", a)
	}, filter: function (a)
	{
		return this.pushStack(pa(this, a, true), "filter", a)
	}, is: function (a)
	{
		return!!a && (typeof a === "string" ? Pa.test(a) ? c(a, this.context).index(this[0]) >= 0 : c.filter(a, this).length > 0 : this.filter(a).length > 0)
	}, closest: function (a, b)
	{
		var d = [], e, f, g = this[0];
		if (c.isArray(a))
		{
			for (f = 1;
			     g && g.ownerDocument && g !== b;)
			{
				for (e = 0;
				     e < a.length;
				     e++)c(g).is(a[e]) &&
				d.push({selector: a[e], elem: g, level: f});
				g = g.parentNode;
				f++
			}
			return d
		}
		var i = Pa.test(a) || typeof a !== "string" ? c(a, b || this.context) : 0;
		e = 0;
		for (f = this.length;
		     e < f;
		     e++)for (g = this[e];
		              g;)if (i ? i.index(g) > -1 : c.find.matchesSelector(g, a))
			{
				d.push(g);
				break
			}
			else
			{
				g = g.parentNode;
				if (!g || !g.ownerDocument || g === b || g.nodeType === 11)break
			}
		d = d.length > 1 ? c.unique(d) : d;
		return this.pushStack(d, "closest", a)
	}, index: function (a)
	{
		return!a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a === "string" ? c.inArray(this[0], c(a)) :
			c.inArray(a.jquery ? a[0] : a, this)
	}, add: function (a, b)
	{
		var d = typeof a === "string" ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a), e = c.merge(this.get(), d);
		return this.pushStack(!d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 || !e[0] || !e[0].parentNode || e[0].parentNode.nodeType === 11 ? e : c.unique(e))
	}, andSelf: function ()
	{
		return this.add(this.prevObject)
	}});
	c.each({parent: function (a)
	{
		return(a = a.parentNode) && a.nodeType !== 11 ? a : null
	}, parents: function (a)
	{
		return c.dir(a, "parentNode")
	}, parentsUntil: function (a, b, d)
	{
		return c.dir(a,
			"parentNode", d)
	}, next: function (a)
	{
		return c.nth(a, 2, "nextSibling")
	}, prev: function (a)
	{
		return c.nth(a, 2, "previousSibling")
	}, nextAll: function (a)
	{
		return c.dir(a, "nextSibling")
	}, prevAll: function (a)
	{
		return c.dir(a, "previousSibling")
	}, nextUntil: function (a, b, d)
	{
		return c.dir(a, "nextSibling", d)
	}, prevUntil: function (a, b, d)
	{
		return c.dir(a, "previousSibling", d)
	}, siblings: function (a)
	{
		return c.sibling((a.parentNode || {}).firstChild, a)
	}, children: function (a)
	{
		return c.sibling(a.firstChild)
	}, contents: function (a)
	{
		return c.nodeName(a,
			"iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
	}}, function (a, b)
	{
		c.fn[a] = function (d, e)
		{
			var f = c.map(this, b, d);
			yb.test(a) || (e = d);
			e && typeof e === "string" && (f = c.filter(e, f));
			f = this.length > 1 && !Cb[a] ? c.unique(f) : f;
			if ((this.length > 1 || Ab.test(e)) && zb.test(a))f = f.reverse();
			return this.pushStack(f, a, Bb.call(arguments).join(","))
		}
	});
	c.extend({filter: function (a, b, d)
	{
		d && (a = ":not(" + a + ")");
		return b.length === 1 ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
	}, dir: function (a, b, d)
	{
		for (var e = [], a = a[b];
		     a && a.nodeType !== 9 && (d === m || a.nodeType !== 1 || !c(a).is(d));)
		{
			a.nodeType === 1 && e.push(a);
			a = a[b]
		}
		return e
	}, nth: function (a, b, c)
	{
		for (var b = b || 1, e = 0;
		     a;
		     a = a[c])if (a.nodeType === 1 && ++e === b)break;
		return a
	}, sibling: function (a, b)
	{
		for (var c = [];
		     a;
		     a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a);
		return c
	}});
	var ra = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Db = / jQuery\d+="(?:\d+|null)"/g,
		ia = /^\s+/, Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Ra = /<([\w:]+)/, Eb = /<tbody/i, Fb = /<|&#?\w+;/, Gb = /<(?:script|style)/i, Hb = /<(?:script|object|embed|option|style)/i, Sa = RegExp("<(?:" + ra + ")[\\s/>]", "i"), Ta = /checked\s*(?:[^=]|=\s*.checked.)/i, Ua = /\/(java|ecma)script/i, Ib = /^\s*<!(?:\[CDATA\[|\-\-)/, v = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3,
			"<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, ja = qa(k);
	v.optgroup = v.option;
	v.tbody = v.tfoot = v.colgroup = v.caption = v.thead;
	v.th = v.td;
	c.support.htmlSerialize || (v._default = [1, "div<div>", "</div>"]);
	c.fn.extend({text: function (a)
	{
		return c.access(this, function (a)
		{
			return a === m ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || k).createTextNode(a))
		}, null, a, arguments.length)
	}, wrapAll: function (a)
	{
		if (c.isFunction(a))return this.each(function (b)
		{
			c(this).wrapAll(a.call(this,
				b))
		});
		if (this[0])
		{
			var b = c(a, this[0].ownerDocument).eq(0).clone(true);
			this[0].parentNode && b.insertBefore(this[0]);
			b.map(function ()
			{
				for (var a = this;
				     a.firstChild && a.firstChild.nodeType === 1;)a = a.firstChild;
				return a
			}).append(this)
		}
		return this
	}, wrapInner: function (a)
	{
		return c.isFunction(a) ? this.each(function (b)
		{
			c(this).wrapInner(a.call(this, b))
		}) : this.each(function ()
		{
			var b = c(this), d = b.contents();
			d.length ? d.wrapAll(a) : b.append(a)
		})
	}, wrap: function (a)
	{
		var b = c.isFunction(a);
		return this.each(function (d)
		{
			c(this).wrapAll(b ?
				a.call(this, d) : a)
		})
	}, unwrap: function ()
	{
		return this.parent().each(function ()
		{
			c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
		}).end()
	}, append: function ()
	{
		return this.domManip(arguments, true, function (a)
		{
			this.nodeType === 1 && this.appendChild(a)
		})
	}, prepend: function ()
	{
		return this.domManip(arguments, true, function (a)
		{
			this.nodeType === 1 && this.insertBefore(a, this.firstChild)
		})
	}, before: function ()
	{
		if (this[0] && this[0].parentNode)return this.domManip(arguments, false, function (a)
		{
			this.parentNode.insertBefore(a,
				this)
		});
		if (arguments.length)
		{
			var a = c.clean(arguments);
			a.push.apply(a, this.toArray());
			return this.pushStack(a, "before", arguments)
		}
	}, after: function ()
	{
		if (this[0] && this[0].parentNode)return this.domManip(arguments, false, function (a)
		{
			this.parentNode.insertBefore(a, this.nextSibling)
		});
		if (arguments.length)
		{
			var a = this.pushStack(this, "after", arguments);
			a.push.apply(a, c.clean(arguments));
			return a
		}
	}, remove: function (a, b)
	{
		for (var d = 0, e;
		     (e = this[d]) != null;
		     d++)if (!a || c.filter(a, [e]).length)
		{
			if (!b && e.nodeType === 1)
			{
				c.cleanData(e.getElementsByTagName("*"));
				c.cleanData([e])
			}
			e.parentNode && e.parentNode.removeChild(e)
		}
		return this
	}, empty: function ()
	{
		for (var a = 0, b;
		     (b = this[a]) != null;
		     a++)for (b.nodeType === 1 && c.cleanData(b.getElementsByTagName("*"));
		              b.firstChild;)b.removeChild(b.firstChild);
		return this
	}, clone: function (a, b)
	{
		a = a == null ? false : a;
		b = b == null ? a : b;
		return this.map(function ()
		{
			return c.clone(this, a, b)
		})
	}, html: function (a)
	{
		return c.access(this, function (a)
		{
			var d = this[0] || {}, e = 0, f = this.length;
			if (a === m)return d.nodeType === 1 ? d.innerHTML.replace(Db, "") : null;
			if (typeof a ===
				"string" && !Gb.test(a) && (c.support.leadingWhitespace || !ia.test(a)) && !v[(Ra.exec(a) || ["", ""])[1].toLowerCase()])
			{
				a = a.replace(Qa, "<$1></$2>");
				try
				{
					for (;
						e < f;
						e++)
					{
						d = this[e] || {};
						if (d.nodeType === 1)
						{
							c.cleanData(d.getElementsByTagName("*"));
							d.innerHTML = a
						}
					}
					d = 0
				}
				catch (g)
				{
				}
			}
			d && this.empty().append(a)
		}, null, a, arguments.length)
	}, replaceWith: function (a)
	{
		if (this[0] && this[0].parentNode)
		{
			if (c.isFunction(a))return this.each(function (b)
			{
				var d = c(this), e = d.html();
				d.replaceWith(a.call(this, b, e))
			});
			typeof a !== "string" && (a =
				c(a).detach());
			return this.each(function ()
			{
				var b = this.nextSibling, d = this.parentNode;
				c(this).remove();
				b ? c(b).before(a) : c(d).append(a)
			})
		}
		return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
	}, detach: function (a)
	{
		return this.remove(a, true)
	}, domManip: function (a, b, d)
	{
		var e, f, g, i = a[0], h = [];
		if (!c.support.checkClone && arguments.length === 3 && typeof i === "string" && Ta.test(i))return this.each(function ()
		{
			c(this).domManip(a, b, d, true)
		});
		if (c.isFunction(i))return this.each(function (e)
		{
			var f =
				c(this);
			a[0] = i.call(this, e, b ? f.html() : m);
			f.domManip(a, b, d)
		});
		if (this[0])
		{
			e = i && i.parentNode;
			e = c.support.parentNode && e && e.nodeType === 11 && e.childNodes.length === this.length ? {fragment: e} : c.buildFragment(a, this, h);
			g = e.fragment;
			if (f = g.childNodes.length === 1 ? g = g.firstChild : g.firstChild)
			{
				b = b && c.nodeName(f, "tr");
				f = 0;
				for (var j = this.length, n = j - 1;
				     f < j;
				     f++)d.call(b ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) : this[f] : this[f],
					e.cacheable || j > 1 && f < n ? c.clone(g, true, true) : g)
			}
			h.length && c.each(h, function (a, b)
			{
				b.src ? c.ajax({type: "GET", global: false, url: b.src, async: false, dataType: "script"}) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ib, "/*$0*/"));
				b.parentNode && b.parentNode.removeChild(b)
			})
		}
		return this
	}});
	c.buildFragment = function (a, b, d)
	{
		var e, f, g, i, h = a[0];
		b && b[0] && (i = b[0].ownerDocument || b[0]);
		i.createDocumentFragment || (i = k);
		if (a.length === 1 && typeof h === "string" && h.length < 512 && i === k && h.charAt(0) === "<" && !Hb.test(h) &&
			(c.support.checkClone || !Ta.test(h)) && (c.support.html5Clone || !Sa.test(h)))
		{
			f = true;
			(g = c.fragments[h]) && g !== 1 && (e = g)
		}
		if (!e)
		{
			e = i.createDocumentFragment();
			c.clean(a, i, e, d)
		}
		f && (c.fragments[h] = g ? e : 1);
		return{fragment: e, cacheable: f}
	};
	c.fragments = {};
	c.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b)
	{
		c.fn[a] = function (d)
		{
			var e = [], d = c(d), f = this.length === 1 && this[0].parentNode;
			if (f && f.nodeType === 11 && f.childNodes.length === 1 && d.length ===
				1)
			{
				d[b](this[0]);
				return this
			}
			for (var f = 0, g = d.length;
			     f < g;
			     f++)
			{
				var i = (f > 0 ? this.clone(true) : this).get();
				c(d[f])[b](i);
				e = e.concat(i)
			}
			return this.pushStack(e, a, d.selector)
		}
	});
	c.extend({clone: function (a, b, d)
	{
		var e, f, g;
		if (c.support.html5Clone || c.isXMLDoc(a) || !Sa.test("<" + a.nodeName + ">"))e = a.cloneNode(true);
		else
		{
			e = k.createElement("div");
			ja.appendChild(e);
			e.innerHTML = a.outerHTML;
			e = e.firstChild
		}
		var i = e;
		if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !c.isXMLDoc(a))
		{
			ta(a,
				i);
			e = Q(a);
			f = Q(i);
			for (g = 0;
			     e[g];
			     ++g)f[g] && ta(e[g], f[g])
		}
		if (b)
		{
			sa(a, i);
			if (d)
			{
				e = Q(a);
				f = Q(i);
				for (g = 0;
				     e[g];
				     ++g)sa(e[g], f[g])
			}
		}
		return i
	}, clean: function (a, b, d, e)
	{
		var f, g = [], b = b || k;
		typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || k);
		for (var i = 0, h;
		     (h = a[i]) != null;
		     i++)
		{
			typeof h === "number" && (h = h + "");
			if (h)
			{
				if (typeof h === "string")if (Fb.test(h))
				{
					h = h.replace(Qa, "<$1></$2>");
					f = (Ra.exec(h) || ["", ""])[1].toLowerCase();
					var j = v[f] || v._default, n = j[0], p = b.createElement("div"), l = ja.childNodes;
					b === k ? ja.appendChild(p) : qa(b).appendChild(p);
					for (p.innerHTML = j[1] + h + j[2];
					     n--;)p = p.lastChild;
					if (!c.support.tbody)
					{
						n = Eb.test(h);
						j = f === "table" && !n ? p.firstChild && p.firstChild.childNodes : j[1] === "<table>" && !n ? p.childNodes : [];
						for (f = j.length - 1;
						     f >= 0;
						     --f)c.nodeName(j[f], "tbody") && !j[f].childNodes.length && j[f].parentNode.removeChild(j[f])
					}
					!c.support.leadingWhitespace && ia.test(h) && p.insertBefore(b.createTextNode(ia.exec(h)[0]), p.firstChild);
					h = p.childNodes;
					if (p)
					{
						p.parentNode.removeChild(p);
						if (l.length > 0)(p = l[l.length -
							1]) && p.parentNode && p.parentNode.removeChild(p)
					}
				}
				else h = b.createTextNode(h);
				var m;
				if (!c.support.appendChecked)if (h[0] && typeof(m = h.length) === "number")for (f = 0;
				                                                                                f < m;
				                                                                                f++)va(h[f]);
				else va(h);
				h.nodeType ? g.push(h) : g = c.merge(g, h)
			}
		}
		if (d)
		{
			a = function (a)
			{
				return!a.type || Ua.test(a.type)
			};
			for (i = 0;
			     g[i];
			     i++)
			{
				b = g[i];
				if (e && c.nodeName(b, "script") && (!b.type || Ua.test(b.type)))e.push(b.parentNode ? b.parentNode.removeChild(b) : b);
				else
				{
					if (b.nodeType === 1)
					{
						h = c.grep(b.getElementsByTagName("script"), a);
						g.splice.apply(g, [i + 1, 0].concat(h))
					}
					d.appendChild(b)
				}
			}
		}
		return g
	},
		cleanData: function (a)
		{
			for (var b, d, e = c.cache, f = c.event.special, g = c.support.deleteExpando, i = 0, h;
			     (h = a[i]) != null;
			     i++)if (!h.nodeName || !c.noData[h.nodeName.toLowerCase()])if (d = h[c.expando])
			{
				if ((b = e[d]) && b.events)
				{
					for (var j in
						b.events)f[j] ? c.event.remove(h, j) : c.removeEvent(h, j, b.handle);
					if (b.handle)b.handle.elem = null
				}
				g ? delete h[c.expando] : h.removeAttribute && h.removeAttribute(c.expando);
				delete e[d]
			}
		}});
	var ka = /alpha\([^)]*\)/i, Jb = /opacity=([^)]*)/, Kb = /([A-Z]|^ms)/g, Lb = /^[\-+]?(?:\d*\.)?\d+$/i, $ = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
		Mb = /^([\-+])=([\-+.\de]+)/, Nb = /^margin/, Ob = {position: "absolute", visibility: "hidden", display: "block"}, J = ["Top", "Right", "Bottom", "Left"], F, Va, Wa;
	c.fn.css = function (a, b)
	{
		return c.access(this, function (a, b, f)
		{
			return f !== m ? c.style(a, b, f) : c.css(a, b)
		}, a, b, arguments.length > 1)
	};
	c.extend({cssHooks: {opacity: {get: function (a, b)
	{
		if (b)
		{
			var c = F(a, "opacity");
			return c === "" ? "1" : c
		}
		return a.style.opacity
	}}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": c.support.cssFloat ?
		"cssFloat" : "styleFloat"}, style: function (a, b, d, e)
	{
		if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style))
		{
			var f, g = c.camelCase(b), i = a.style, h = c.cssHooks[g], b = c.cssProps[g] || g;
			if (d !== m)
			{
				e = typeof d;
				if (e === "string" && (f = Mb.exec(d)))
				{
					d = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b));
					e = "number"
				}
				if (!(d == null || e === "number" && isNaN(d)))
				{
					e === "number" && !c.cssNumber[g] && (d = d + "px");
					if (!h || !("set"in h) || (d = h.set(a, d)) !== m)try
					{
						i[b] = d
					}
					catch (j)
					{
					}
				}
			}
			else return h && "get"in h && (f = h.get(a, false, e)) !== m ? f : i[b]
		}
	}, css: function (a, b, d)
	{
		var e,
			f, b = c.camelCase(b);
		f = c.cssHooks[b];
		b = c.cssProps[b] || b;
		b === "cssFloat" && (b = "float");
		if (f && "get"in f && (e = f.get(a, true, d)) !== m)return e;
		if (F)return F(a, b)
	}, swap: function (a, b, c)
	{
		var e = {}, f;
		for (f in
			b)
		{
			e[f] = a.style[f];
			a.style[f] = b[f]
		}
		c = c.call(a);
		for (f in
			b)a.style[f] = e[f];
		return c
	}});
	c.curCSS = c.css;
	k.defaultView && k.defaultView.getComputedStyle && (Va = function (a, b)
	{
		var d, e, f, g = a.style, b = b.replace(Kb, "-$1").toLowerCase();
		if ((e = a.ownerDocument.defaultView) && (f = e.getComputedStyle(a, null)))
		{
			d = f.getPropertyValue(b);
			d === "" && !c.contains(a.ownerDocument.documentElement, a) && (d = c.style(a, b))
		}
		if (!c.support.pixelMargin && f && Nb.test(b) && $.test(d))
		{
			e = g.width;
			g.width = d;
			d = f.width;
			g.width = e
		}
		return d
	});
	k.documentElement.currentStyle && (Wa = function (a, b)
	{
		var c, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
		if (f == null && g && (c = g[b]))f = c;
		if ($.test(f))
		{
			c = g.left;
			if (e = a.runtimeStyle && a.runtimeStyle.left)a.runtimeStyle.left = a.currentStyle.left;
			g.left = b === "fontSize" ? "1em" : f;
			f = g.pixelLeft + "px";
			g.left = c;
			if (e)a.runtimeStyle.left = e
		}
		return f ===
			"" ? "auto" : f
	});
	F = Va || Wa;
	c.each(["height", "width"], function (a, b)
	{
		c.cssHooks[b] = {get: function (a, e, f)
		{
			if (e)return a.offsetWidth !== 0 ? wa(a, b, f) : c.swap(a, Ob, function ()
			{
				return wa(a, b, f)
			})
		}, set: function (a, b)
		{
			return Lb.test(b) ? b + "px" : b
		}}
	});
	c.support.opacity || (c.cssHooks.opacity = {get: function (a, b)
	{
		return Jb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
	}, set: function (a, b)
	{
		var d = a.style, e = a.currentStyle, f = c.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g =
			e && e.filter || d.filter || "";
		d.zoom = 1;
		if (b >= 1 && c.trim(g.replace(ka, "")) === "")
		{
			d.removeAttribute("filter");
			if (e && !e.filter)return
		}
		d.filter = ka.test(g) ? g.replace(ka, f) : g + " " + f
	}});
	c(function ()
	{
		if (!c.support.reliableMarginRight)c.cssHooks.marginRight = {get: function (a, b)
		{
			return c.swap(a, {display: "inline-block"}, function ()
			{
				return b ? F(a, "margin-right") : a.style.marginRight
			})
		}}
	});
	c.expr && c.expr.filters && (c.expr.filters.hidden = function (a)
	{
		var b = a.offsetHeight;
		return a.offsetWidth === 0 && b === 0 || !c.support.reliableHiddenOffsets &&
			(a.style && a.style.display || c.css(a, "display")) === "none"
	}, c.expr.filters.visible = function (a)
	{
		return!c.expr.filters.hidden(a)
	});
	c.each({margin: "", padding: "", border: "Width"}, function (a, b)
	{
		c.cssHooks[a + b] = {expand: function (c)
		{
			for (var e = typeof c === "string" ? c.split(" ") : [c], f = {}, c = 0;
			     c < 4;
			     c++)f[a + J[c] + b] = e[c] || e[c - 2] || e[0];
			return f
		}}
	});
	var Pb = /%20/g, ib = /\[\]$/, Xa = /\r?\n/g, Qb = /#.*$/, Rb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Sb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Tb = /^(?:GET|HEAD)$/, Ub = /^\/\//, Ya = /\?/, Vb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Wb = /^(?:select|textarea)/i, ya = /\s+/, Xb = /([?&])_=[^&]*/, Za = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, $a = c.fn.load, aa = {}, ab = {}, H, I, bb = ["*/"] + ["*"];
	try
	{
		H = lb.href
	}
	catch (cc)
	{
		H = k.createElement("a"), H.href = "", H = H.href
	}
	I = Za.exec(H.toLowerCase()) || [];
	c.fn.extend({load: function (a, b, d)
	{
		if (typeof a !== "string" && $a)return $a.apply(this, arguments);
		if (!this.length)return this;
		var e = a.indexOf(" ");
		if (e >= 0)var f =
			a.slice(e, a.length), a = a.slice(0, e);
		e = "GET";
		if (b)if (c.isFunction(b))
		{
			d = b;
			b = m
		}
		else if (typeof b === "object")
		{
			b = c.param(b, c.ajaxSettings.traditional);
			e = "POST"
		}
		var g = this;
		c.ajax({url: a, type: e, dataType: "html", data: b, complete: function (a, b, e)
		{
			e = a.responseText;
			if (a.isResolved())
			{
				a.done(function (a)
				{
					e = a
				});
				g.html(f ? c("<div>").append(e.replace(Vb, "")).find(f) : e)
			}
			d && g.each(d, [e, b, a])
		}});
		return this
	}, serialize: function ()
	{
		return c.param(this.serializeArray())
	}, serializeArray: function ()
	{
		return this.map(function ()
		{
			return this.elements ?
				c.makeArray(this.elements) : this
		}).filter(function ()
			{
				return this.name && !this.disabled && (this.checked || Wb.test(this.nodeName) || Sb.test(this.type))
			}).map(function (a, b)
			{
				var d = c(this).val();
				return d == null ? null : c.isArray(d) ? c.map(d, function (a)
				{
					return{name: b.name, value: a.replace(Xa, "\r\n")}
				}) : {name: b.name, value: d.replace(Xa, "\r\n")}
			}).get()
	}});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b)
	{
		c.fn[b] = function (a)
		{
			return this.on(b, a)
		}
	});
	c.each(["get", "post"],
		function (a, b)
		{
			c[b] = function (a, e, f, g)
			{
				if (c.isFunction(e))
				{
					g = g || f;
					f = e;
					e = m
				}
				return c.ajax({type: b, url: a, data: e, success: f, dataType: g})
			}
		});
	c.extend({getScript: function (a, b)
	{
		return c.get(a, m, b, "script")
	}, getJSON: function (a, b, d)
	{
		return c.get(a, b, d, "json")
	}, ajaxSetup: function (a, b)
	{
		if (b)za(a, c.ajaxSettings);
		else
		{
			b = a;
			a = c.ajaxSettings
		}
		za(a, b);
		return a
	}, ajaxSettings: {url: H, isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(I[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		processData: !0, async: !0, accepts: {xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bb}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": r.String, "text html": !0, "text json": c.parseJSON, "text xml": c.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: xa(aa), ajaxTransport: xa(ab), ajax: function (a, b)
	{
		function d(a, b, d, l)
		{
			if (u !== 2)
			{
				u = 2;
				v && clearTimeout(v);
				r = m;
				k = l || "";
				q.readyState =
					a > 0 ? 4 : 0;
				var p, o, s, l = b;
				if (d)
				{
					var t = e, z = q, B = t.contents, w = t.dataTypes, J = t.responseFields, C, x, M, H;
					for (x in
						J)x in d && (z[J[x]] = d[x]);
					for (;
						w[0] === "*";)
					{
						w.shift();
						C === m && (C = t.mimeType || z.getResponseHeader("content-type"))
					}
					if (C)for (x in
						B)if (B[x] && B[x].test(C))
						{
							w.unshift(x);
							break
						}
					if (w[0]in d)M = w[0];
					else
					{
						for (x in
							d)
						{
							if (!w[0] || t.converters[x + " " + w[0]])
							{
								M = x;
								break
							}
							H || (H = x)
						}
						M = M || H
					}
					if (M)
					{
						M !== w[0] && w.unshift(M);
						d = d[M]
					}
					else d = void 0
				}
				else d = m;
				if (a >= 200 && a < 300 || a === 304)
				{
					if (e.ifModified)
					{
						if (C = q.getResponseHeader("Last-Modified"))c.lastModified[n] =
							C;
						if (C = q.getResponseHeader("Etag"))c.etag[n] = C
					}
					if (a === 304)
					{
						l = "notmodified";
						p = true
					}
					else try
					{
						C = e;
						C.dataFilter && (d = C.dataFilter(d, C.dataType));
						var I = C.dataTypes;
						x = {};
						var E, F, L = I.length, G, N = I[0], D, K, O, P, R;
						for (E = 1;
						     E < L;
						     E++)
						{
							if (E === 1)for (F in
								C.converters)typeof F === "string" && (x[F.toLowerCase()] = C.converters[F]);
							D = N;
							N = I[E];
							if (N === "*")N = D;
							else if (D !== "*" && D !== N)
							{
								K = D + " " + N;
								O = x[K] || x["* " + N];
								if (!O)
								{
									R = m;
									for (P in
										x)
									{
										G = P.split(" ");
										if (G[0] === D || G[0] === "*")if (R = x[G[1] + " " + N])
										{
											P = x[P];
											P === true ? O = R : R === true && (O = P);
											break
										}
									}
								}
								!O && !R && c.error("No conversion from " + K.replace(" ", " to "));
								O !== true && (d = O ? O(d) : R(P(d)))
							}
						}
						o = d;
						l = "success";
						p = true
					}
					catch (Q)
					{
						l = "parsererror";
						s = Q
					}
				}
				else
				{
					s = l;
					if (!l || a)
					{
						l = "error";
						a < 0 && (a = 0)
					}
				}
				q.status = a;
				q.statusText = "" + (b || l);
				p ? i.resolveWith(f, [o, l, q]) : i.rejectWith(f, [q, l, s]);
				q.statusCode(j);
				j = m;
				y && g.trigger("ajax" + (p ? "Success" : "Error"), [q, e, p ? o : s]);
				h.fireWith(f, [q, l]);
				if (y)
				{
					g.trigger("ajaxComplete", [q, e]);
					--c.active || c.event.trigger("ajaxStop")
				}
			}
		}

		if (typeof a === "object")
		{
			b = a;
			a = m
		}
		var b = b || {}, e = c.ajaxSetup({},
			b), f = e.context || e, g = f !== e && (f.nodeType || f instanceof c) ? c(f) : c.event, i = c.Deferred(), h = c.Callbacks("once memory"), j = e.statusCode || {}, n, p = {}, l = {}, k, o, r, v, t, u = 0, y, z, q = {readyState: 0, setRequestHeader: function (a, b)
		{
			if (!u)
			{
				var c = a.toLowerCase(), a = l[c] = l[c] || a;
				p[a] = b
			}
			return this
		}, getAllResponseHeaders: function ()
		{
			return u === 2 ? k : null
		}, getResponseHeader: function (a)
		{
			var b;
			if (u === 2)
			{
				if (!o)for (o = {};
				            b = Rb.exec(k);)o[b[1].toLowerCase()] = b[2];
				b = o[a.toLowerCase()]
			}
			return b === m ? null : b
		}, overrideMimeType: function (a)
		{
			if (!u)e.mimeType =
				a;
			return this
		}, abort: function (a)
		{
			a = a || "abort";
			r && r.abort(a);
			d(0, a);
			return this
		}};
		i.promise(q);
		q.success = q.done;
		q.error = q.fail;
		q.complete = h.add;
		q.statusCode = function (a)
		{
			if (a)
			{
				var b;
				if (u < 2)for (b in
					a)j[b] = [j[b], a[b]];
				else
				{
					b = a[q.status];
					q.then(b, b)
				}
			}
			return this
		};
		e.url = ((a || e.url) + "").replace(Qb, "").replace(Ub, I[1] + "//");
		e.dataTypes = c.trim(e.dataType || "*").toLowerCase().split(ya);
		if (e.crossDomain == null)
		{
			t = Za.exec(e.url.toLowerCase());
			e.crossDomain = !(!t || !(t[1] != I[1] || t[2] != I[2] || (t[3] || (t[1] === "http:" ?
				80 : 443)) != (I[3] || (I[1] === "http:" ? 80 : 443))))
		}
		if (e.data && e.processData && typeof e.data !== "string")e.data = c.param(e.data, e.traditional);
		T(aa, e, b, q);
		if (u === 2)return false;
		y = e.global;
		e.type = e.type.toUpperCase();
		e.hasContent = !Tb.test(e.type);
		y && c.active++ === 0 && c.event.trigger("ajaxStart");
		if (!e.hasContent)
		{
			if (e.data)
			{
				e.url = e.url + ((Ya.test(e.url) ? "&" : "?") + e.data);
				delete e.data
			}
			n = e.url;
			if (e.cache === false)
			{
				t = c.now();
				var B = e.url.replace(Xb, "$1_=" + t);
				e.url = B + (B === e.url ? (Ya.test(e.url) ? "&" : "?") + "_=" + t : "")
			}
		}
		(e.data &&
			e.hasContent && e.contentType !== false || b.contentType) && q.setRequestHeader("Content-Type", e.contentType);
		if (e.ifModified)
		{
			n = n || e.url;
			c.lastModified[n] && q.setRequestHeader("If-Modified-Since", c.lastModified[n]);
			c.etag[n] && q.setRequestHeader("If-None-Match", c.etag[n])
		}
		q.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", " + bb + "; q=0.01" : "") : e.accepts["*"]);
		for (z in
			e.headers)q.setRequestHeader(z, e.headers[z]);
		if (e.beforeSend && (e.beforeSend.call(f,
			q, e) === false || u === 2))
		{
			q.abort();
			return false
		}
		for (z in
		{success: 1, error: 1, complete: 1})q[z](e[z]);
		if (r = T(ab, e, b, q))
		{
			q.readyState = 1;
			y && g.trigger("ajaxSend", [q, e]);
			e.async && e.timeout > 0 && (v = setTimeout(function ()
			{
				q.abort("timeout")
			}, e.timeout));
			try
			{
				u = 1;
				r.send(p, d)
			}
			catch (s)
			{
				if (u < 2)d(-1, s);
				else throw s;
			}
		}
		else d(-1, "No Transport");
		return q
	}, param: function (a, b)
	{
		var d = [], e = function (a, b)
		{
			b = c.isFunction(b) ? b() : b;
			d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
		};
		if (b === m)b = c.ajaxSettings.traditional;
		if (c.isArray(a) || a.jquery && !c.isPlainObject(a))c.each(a, function ()
		{
			e(this.name, this.value)
		});
		else for (var f in
			a)ba(f, a[f], b, e);
		return d.join("&").replace(Pb, "+")
	}});
	c.extend({active: 0, lastModified: {}, etag: {}});
	var Yb = c.now(), X = /(\=)\?(&|$)|\?\?/i;
	c.ajaxSetup({jsonp: "callback", jsonpCallback: function ()
	{
		return c.expando + "_" + Yb++
	}});
	c.ajaxPrefilter("json jsonp", function (a, b, d)
	{
		b = typeof a.data === "string" && /^application\/x\-www\-form\-urlencoded/.test(a.contentType);
		if (a.dataTypes[0] === "jsonp" || a.jsonp !==
			false && (X.test(a.url) || b && X.test(a.data)))
		{
			var e, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, g = r[f], i = a.url, h = a.data, j = "$1" + f + "$2";
			if (a.jsonp !== false)
			{
				i = i.replace(X, j);
				if (a.url === i)
				{
					b && (h = h.replace(X, j));
					a.data === h && (i = i + ((/\?/.test(i) ? "&" : "?") + a.jsonp + "=" + f))
				}
			}
			a.url = i;
			a.data = h;
			r[f] = function (a)
			{
				e = [a]
			};
			d.always(function ()
			{
				r[f] = g;
				if (e && c.isFunction(g))r[f](e[0])
			});
			a.converters["script json"] = function ()
			{
				e || c.error(f + " was not called");
				return e[0]
			};
			a.dataTypes[0] =
				"json";
			return"script"
		}
	});
	c.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /javascript|ecmascript/}, converters: {"text script": function (a)
	{
		c.globalEval(a);
		return a
	}}});
	c.ajaxPrefilter("script", function (a)
	{
		if (a.cache === m)a.cache = false;
		if (a.crossDomain)
		{
			a.type = "GET";
			a.global = false
		}
	});
	c.ajaxTransport("script", function (a)
	{
		if (a.crossDomain)
		{
			var b, c = k.head || k.getElementsByTagName("head")[0] || k.documentElement;
			return{send: function (e, f)
			{
				b = k.createElement("script");
				b.async = "async";
				if (a.scriptCharset)b.charset = a.scriptCharset;
				b.src = a.url;
				b.onload = b.onreadystatechange = function (a, e)
				{
					if (e || !b.readyState || /loaded|complete/.test(b.readyState))
					{
						b.onload = b.onreadystatechange = null;
						c && b.parentNode && c.removeChild(b);
						b = m;
						e || f(200, "success")
					}
				};
				c.insertBefore(b, c.firstChild)
			}, abort: function ()
			{
				if (b)b.onload(0, 1)
			}}
		}
	});
	var la = r.ActiveXObject ? function ()
	{
		for (var a in
			D)D[a](0, 1)
	} : !1, Zb = 0, D;
	c.ajaxSettings.xhr = r.ActiveXObject ? function ()
	{
		var a;
		if (!(a =
			!this.isLocal && Aa()))a:{
			try
			{
				a = new r.ActiveXObject("Microsoft.XMLHTTP");
				break a
			}
			catch (b)
			{
			}
			a = void 0
		}
		return a
	} : Aa;
	(function (a)
	{
		c.extend(c.support, {ajax: !!a, cors: !!a && "withCredentials"in a})
	})(c.ajaxSettings.xhr());
	c.support.ajax && c.ajaxTransport(function (a)
	{
		if (!a.crossDomain || c.support.cors)
		{
			var b;
			return{send: function (d, e)
			{
				var f = a.xhr(), g, i;
				a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
				if (a.xhrFields)for (i in
					a.xhrFields)f[i] = a.xhrFields[i];
				a.mimeType && f.overrideMimeType &&
				f.overrideMimeType(a.mimeType);
				!a.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
				try
				{
					for (i in
						d)f.setRequestHeader(i, d[i])
				}
				catch (h)
				{
				}
				f.send(a.hasContent && a.data || null);
				b = function (d, h)
				{
					var i, l, k, o, r;
					try
					{
						if (b && (h || f.readyState === 4))
						{
							b = m;
							if (g)
							{
								f.onreadystatechange = c.noop;
								la && delete D[g]
							}
							if (h)f.readyState !== 4 && f.abort();
							else
							{
								i = f.status;
								k = f.getAllResponseHeaders();
								o = {};
								if ((r = f.responseXML) && r.documentElement)o.xml = r;
								try
								{
									o.text = f.responseText
								}
								catch (v)
								{
								}
								try
								{
									l = f.statusText
								}
								catch (t)
								{
									l =
										""
								}
								!i && a.isLocal && !a.crossDomain ? i = o.text ? 200 : 404 : i === 1223 && (i = 204)
							}
						}
					}
					catch (u)
					{
						h || e(-1, u)
					}
					o && e(i, l, o, k)
				};
				if (!a.async || f.readyState === 4)b();
				else
				{
					g = ++Zb;
					if (la)
					{
						if (!D)
						{
							D = {};
							c(r).unload(la)
						}
						D[g] = b
					}
					f.onreadystatechange = b
				}
			}, abort: function ()
			{
				b && b(0, 1)
			}}
		}
	});
	var ca = {}, y, G, $b = /^(?:toggle|show|hide)$/, ac = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, Y, V = [
		["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
		["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
		["opacity"]
	], U;
	c.fn.extend({show: function (a, b, d)
	{
		if (a || a === 0)return this.animate(L("show", 3), a, b, d);
		for (var d = 0, e = this.length;
		     d < e;
		     d++)
		{
			a = this[d];
			if (a.style)
			{
				b = a.style.display;
				if (!c._data(a, "olddisplay") && b === "none")b = a.style.display = "";
				(b === "" && c.css(a, "display") === "none" || !c.contains(a.ownerDocument.documentElement, a)) && c._data(a, "olddisplay", Ca(a.nodeName))
			}
		}
		for (d = 0;
		     d < e;
		     d++)
		{
			a = this[d];
			if (a.style)
			{
				b = a.style.display;
				if (b === "" || b === "none")a.style.display = c._data(a, "olddisplay") || ""
			}
		}
		return this
	}, hide: function (a, b, d)
	{
		if (a || a === 0)return this.animate(L("hide",
			3), a, b, d);
		for (var d = 0, e = this.length;
		     d < e;
		     d++)
		{
			a = this[d];
			if (a.style)
			{
				b = c.css(a, "display");
				b !== "none" && !c._data(a, "olddisplay") && c._data(a, "olddisplay", b)
			}
		}
		for (d = 0;
		     d < e;
		     d++)if (this[d].style)this[d].style.display = "none";
		return this
	}, _toggle: c.fn.toggle, toggle: function (a, b, d)
	{
		var e = typeof a === "boolean";
		c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function ()
		{
			var b = e ? a : c(this).is(":hidden");
			c(this)[b ? "show" : "hide"]()
		}) : this.animate(L("toggle", 3), a, b, d);
		return this
	},
		fadeTo: function (a, b, c, e)
		{
			return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, e)
		}, animate: function (a, b, d, e)
		{
			function f()
			{
				g.queue === false && c._mark(this);
				var b = c.extend({}, g), d = this.nodeType === 1, e = d && c(this).is(":hidden"), f, k, l, m, o;
				b.animatedProperties = {};
				for (l in
					a)
				{
					f = c.camelCase(l);
					if (l !== f)
					{
						a[f] = a[l];
						delete a[l]
					}
					if ((k = c.cssHooks[f]) && "expand"in k)
					{
						m = k.expand(a[f]);
						delete a[f];
						for (l in
							m)l in a || (a[l] = m[l])
					}
				}
				for (f in
					a)
				{
					k = a[f];
					if (c.isArray(k))
					{
						b.animatedProperties[f] =
							k[1];
						k = a[f] = k[0]
					}
					else b.animatedProperties[f] = b.specialEasing && b.specialEasing[f] || b.easing || "swing";
					if (k === "hide" && e || k === "show" && !e)return b.complete.call(this);
					if (d && (f === "height" || f === "width"))
					{
						b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
						if (c.css(this, "display") === "inline" && c.css(this, "float") === "none")!c.support.inlineBlockNeedsLayout || Ca(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1
					}
				}
				if (b.overflow != null)this.style.overflow = "hidden";
				for (l in
					a)
				{
					d = new c.fx(this, b, l);
					k = a[l];
					if ($b.test(k))if (f = c._data(this, "toggle" + l) || (k === "toggle" ? e ? "show" : "hide" : 0))
					{
						c._data(this, "toggle" + l, f === "show" ? "hide" : "show");
						d[f]()
					}
					else d[k]();
					else
					{
						f = ac.exec(k);
						m = d.cur();
						if (f)
						{
							k = parseFloat(f[2]);
							o = f[3] || (c.cssNumber[l] ? "" : "px");
							if (o !== "px")
							{
								c.style(this, l, (k || 1) + o);
								m = (k || 1) / d.cur() * m;
								c.style(this, l, m + o)
							}
							f[1] && (k = (f[1] === "-=" ? -1 : 1) * k + m);
							d.custom(m, k, o)
						}
						else d.custom(m, k, "")
					}
				}
				return true
			}

			var g = c.speed(b, d, e);
			if (c.isEmptyObject(a))return this.each(g.complete,
				[false]);
			a = c.extend({}, a);
			return g.queue === false ? this.each(f) : this.queue(g.queue, f)
		}, stop: function (a, b, d)
		{
			if (typeof a !== "string")
			{
				d = b;
				b = a;
				a = m
			}
			b && a !== false && this.queue(a || "fx", []);
			return this.each(function ()
			{
				var b, f = false, g = c.timers, i = c._data(this);
				d || c._unmark(true, this);
				if (a == null)for (b in
					i)
				{
					if (i[b] && i[b].stop && b.indexOf(".run") === b.length - 4)
					{
						var h = i[b];
						c.removeData(this, b, true);
						h.stop(d)
					}
				}
				else if (i[b = a + ".run"] && i[b].stop)
				{
					i = i[b];
					c.removeData(this, b, true);
					i.stop(d)
				}
				for (b = g.length;
				     b--;)if (g[b].elem ===
					this && (a == null || g[b].queue === a))
				{
					if (d)g[b](true);
					else g[b].saveState();
					f = true;
					g.splice(b, 1)
				}
				(!d || !f) && c.dequeue(this, a)
			})
		}});
	c.each({slideDown: L("show", 1), slideUp: L("hide", 1), slideToggle: L("toggle", 1), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b)
	{
		c.fn[a] = function (a, c, f)
		{
			return this.animate(b, a, c, f)
		}
	});
	c.extend({speed: function (a, b, d)
	{
		var e = a && typeof a === "object" ? c.extend({}, a) : {complete: d || !d && b || c.isFunction(a) && a, duration: a, easing: d && b || b && !c.isFunction(b) &&
			b};
		e.duration = c.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
		if (e.queue == null || e.queue === true)e.queue = "fx";
		e.old = e.complete;
		e.complete = function (a)
		{
			c.isFunction(e.old) && e.old.call(this);
			e.queue ? c.dequeue(this, e.queue) : a !== false && c._unmark(this)
		};
		return e
	}, easing: {linear: function (a)
	{
		return a
	}, swing: function (a)
	{
		return-Math.cos(a * Math.PI) / 2 + 0.5
	}}, timers: [], fx: function (a, b, c)
	{
		this.options = b;
		this.elem = a;
		this.prop = c;
		b.orig = b.orig ||
		{}
	}});
	c.fx.prototype = {update: function ()
	{
		this.options.step && this.options.step.call(this.elem, this.now, this);
		(c.fx.step[this.prop] || c.fx.step._default)(this)
	}, cur: function ()
	{
		if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))return this.elem[this.prop];
		var a, b = c.css(this.elem, this.prop);
		return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
	}, custom: function (a, b, d)
	{
		function e(a)
		{
			return f.step(a)
		}

		var f = this, g = c.fx;
		this.startTime = U || Ba();
		this.end = b;
		this.now = this.start = a;
		this.pos =
			this.state = 0;
		this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
		e.queue = this.options.queue;
		e.elem = this.elem;
		e.saveState = function ()
		{
			c._data(f.elem, "fxshow" + f.prop) === m && (f.options.hide ? c._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && c._data(f.elem, "fxshow" + f.prop, f.end))
		};
		e() && (c.timers.push(e) && !Y) && (Y = setInterval(g.tick, g.interval))
	}, show: function ()
	{
		var a = c._data(this.elem, "fxshow" + this.prop);
		this.options.orig[this.prop] = a || c.style(this.elem, this.prop);
		this.options.show = true;
		a !== m ?
			this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
		c(this.elem).show()
	}, hide: function ()
	{
		this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
		this.options.hide = true;
		this.custom(this.cur(), 0)
	}, step: function (a)
	{
		var b, d = U || Ba(), e = true, f = this.elem, g = this.options;
		if (a || d >= g.duration + this.startTime)
		{
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();
			g.animatedProperties[this.prop] = true;
			for (b in
				g.animatedProperties)g.animatedProperties[b] !==
				true && (e = false);
			if (e)
			{
				g.overflow != null && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function (a, b)
				{
					f.style["overflow" + b] = g.overflow[a]
				});
				g.hide && c(f).hide();
				if (g.hide || g.show)for (b in
					g.animatedProperties)
				{
					c.style(f, b, g.orig[b]);
					c.removeData(f, "fxshow" + b, true);
					c.removeData(f, "toggle" + b, true)
				}
				if (a = g.complete)
				{
					g.complete = false;
					a.call(f)
				}
			}
			return false
		}
		if (g.duration == Infinity)this.now = d;
		else
		{
			a = d - this.startTime;
			this.state = a / g.duration;
			this.pos = c.easing[g.animatedProperties[this.prop]](this.state, a,
				0, 1, g.duration);
			this.now = this.start + (this.end - this.start) * this.pos
		}
		this.update();
		return true
	}};
	c.extend(c.fx, {tick: function ()
	{
		for (var a, b = c.timers, d = 0;
		     d < b.length;
		     d++)
		{
			a = b[d];
			!a() && b[d] === a && b.splice(d--, 1)
		}
		b.length || c.fx.stop()
	}, interval: 13, stop: function ()
	{
		clearInterval(Y);
		Y = null
	}, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (a)
	{
		c.style(a.elem, "opacity", a.now)
	}, _default: function (a)
	{
		a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
	}}});
	c.each(V.concat.apply([], V), function (a, b)
	{
		b.indexOf("margin") && (c.fx.step[b] = function (a)
		{
			c.style(a.elem, b, Math.max(0, a.now) + a.unit)
		})
	});
	c.expr && c.expr.filters && (c.expr.filters.animated = function (a)
	{
		return c.grep(c.timers,function (b)
		{
			return a === b.elem
		}).length
	});
	var cb, bc = /^t(?:able|d|h)$/i, db = /^(?:body|html)$/i;
	cb = "getBoundingClientRect"in k.documentElement ? function (a, b, d, e)
	{
		try
		{
			e = a.getBoundingClientRect()
		}
		catch (f)
		{
		}
		if (!e || !c.contains(d, a))return e ? {top: e.top, left: e.left} : {top: 0, left: 0};
		a = b.body;
		b =
			Da(b);
		return{top: e.top + (b.pageYOffset || c.support.boxModel && d.scrollTop || a.scrollTop) - (d.clientTop || a.clientTop || 0), left: e.left + (b.pageXOffset || c.support.boxModel && d.scrollLeft || a.scrollLeft) - (d.clientLeft || a.clientLeft || 0)}
	} : function (a, b, d)
	{
		var e, f = a.offsetParent, g = b.body;
		e = (b = b.defaultView) ? b.getComputedStyle(a, null) : a.currentStyle;
		for (var i = a.offsetTop, h = a.offsetLeft;
		     (a = a.parentNode) && a !== g && a !== d;)
		{
			if (c.support.fixedPosition && e.position === "fixed")break;
			e = b ? b.getComputedStyle(a, null) : a.currentStyle;
			i = i - a.scrollTop;
			h = h - a.scrollLeft;
			if (a === f)
			{
				i = i + a.offsetTop;
				h = h + a.offsetLeft;
				if (c.support.doesNotAddBorder && (!c.support.doesAddBorderForTableAndCells || !bc.test(a.nodeName)))
				{
					i = i + (parseFloat(e.borderTopWidth) || 0);
					h = h + (parseFloat(e.borderLeftWidth) || 0)
				}
				f = a.offsetParent
			}
			if (c.support.subtractsBorderForOverflowNotVisible && e.overflow !== "visible")
			{
				i = i + (parseFloat(e.borderTopWidth) || 0);
				h = h + (parseFloat(e.borderLeftWidth) || 0)
			}
		}
		if (e.position === "relative" || e.position === "static")
		{
			i = i + g.offsetTop;
			h = h + g.offsetLeft
		}
		if (c.support.fixedPosition &&
			e.position === "fixed")
		{
			i = i + Math.max(d.scrollTop, g.scrollTop);
			h = h + Math.max(d.scrollLeft, g.scrollLeft)
		}
		return{top: i, left: h}
	};
	c.fn.offset = function (a)
	{
		if (arguments.length)return a === m ? this : this.each(function (b)
		{
			c.offset.setOffset(this, a, b)
		});
		var b = this[0], d = b && b.ownerDocument;
		return!d ? null : b === d.body ? c.offset.bodyOffset(b) : cb(b, d, d.documentElement)
	};
	c.offset = {bodyOffset: function (a)
	{
		var b = a.offsetTop, d = a.offsetLeft;
		if (c.support.doesNotIncludeMarginInBodyOffset)
		{
			b = b + (parseFloat(c.css(a, "marginTop")) || 0);
			d = d + (parseFloat(c.css(a, "marginLeft")) || 0)
		}
		return{top: b, left: d}
	}, setOffset: function (a, b, d)
	{
		var e = c.css(a, "position");
		if (e === "static")a.style.position = "relative";
		var f = c(a), g = f.offset(), i = c.css(a, "top"), h = c.css(a, "left"), j = {}, k = {};
		if ((e === "absolute" || e === "fixed") && c.inArray("auto", [i, h]) > -1)
		{
			k = f.position();
			e = k.top;
			h = k.left
		}
		else
		{
			e = parseFloat(i) || 0;
			h = parseFloat(h) || 0
		}
		c.isFunction(b) && (b = b.call(a, d, g));
		if (b.top != null)j.top = b.top - g.top + e;
		if (b.left != null)j.left = b.left - g.left + h;
		"using"in b ? b.using.call(a,
			j) : f.css(j)
	}};
	c.fn.extend({position: function ()
	{
		if (!this[0])return null;
		var a = this[0], b = this.offsetParent(), d = this.offset(), e = db.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
		d.top = d.top - (parseFloat(c.css(a, "marginTop")) || 0);
		d.left = d.left - (parseFloat(c.css(a, "marginLeft")) || 0);
		e.top = e.top + (parseFloat(c.css(b[0], "borderTopWidth")) || 0);
		e.left = e.left + (parseFloat(c.css(b[0], "borderLeftWidth")) || 0);
		return{top: d.top - e.top, left: d.left - e.left}
	}, offsetParent: function ()
	{
		return this.map(function ()
		{
			for (var a =
				this.offsetParent || k.body;
			     a && !db.test(a.nodeName) && c.css(a, "position") === "static";)a = a.offsetParent;
			return a
		})
	}});
	c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b)
	{
		var d = /Y/.test(b);
		c.fn[a] = function (e)
		{
			return c.access(this, function (a, e, i)
			{
				var h = Da(a);
				if (i === m)return h ? b in h ? h[b] : c.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
				h ? h.scrollTo(!d ? i : c(h).scrollLeft(), d ? i : c(h).scrollTop()) : a[e] = i
			}, a, e, arguments.length, null)
		}
	});
	c.each({Height: "height", Width: "width"},
		function (a, b)
		{
			var d = "client" + a, e = "scroll" + a, f = "offset" + a;
			c.fn["inner" + a] = function ()
			{
				var a = this[0];
				return a ? a.style ? parseFloat(c.css(a, b, "padding")) : this[b]() : null
			};
			c.fn["outer" + a] = function (a)
			{
				var d = this[0];
				return d ? d.style ? parseFloat(c.css(d, b, a ? "margin" : "border")) : this[b]() : null
			};
			c.fn[b] = function (a)
			{
				return c.access(this, function (a, b, g)
				{
					if (c.isWindow(a))
					{
						b = a.document;
						a = b.documentElement[d];
						return c.support.boxModel && a || b.body && b.body[d] || a
					}
					if (a.nodeType === 9)
					{
						b = a.documentElement;
						return b[d] >= b[e] ?
							b[d] : Math.max(a.body[e], b[e], a.body[f], b[f])
					}
					if (g === m)
					{
						a = c.css(a, b);
						b = parseFloat(a);
						return c.isNumeric(b) ? b : a
					}
					c(a).css(b, g)
				}, b, a, arguments.length, null)
			}
		});
	r.jQuery = r.$ = c;
	"function" === typeof define && (define.amd && define.amd.jQuery) && define("jquery", [], function ()
	{
		return c
	})
}(window);
jQuery.noConflict();
