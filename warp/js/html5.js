(function (k, c)
{
	function p(a, b)
	{
		var d = a.createElement("p"), e = a.getElementsByTagName("head")[0] || a.documentElement;
		d.innerHTML = "x<style>" + b + "</style>";
		return e.insertBefore(d.lastChild, e.firstChild)
	}

	function m()
	{
		var a = j.elements;
		return"string" == typeof a ? a.split(" ") : a
	}

	function q(a)
	{
		var b, d = {}, e = a.createElement;
		b = a.createDocumentFragment;
		for (var f = m(), h = b(), r = f.length;
		     r--;)
		{
			b = f[r], d[b] = e(b), h.createElement(b);
		}
		a.createElement = function (a)
		{
			var b = (d[a] || (d[a] = e(a))).cloneNode(!1);
			return j.shivMethods && !v.test(a) &&
				b.canHaveChildren && !b.xmlns && !b.tagUrn ? h.appendChild(b) : b
		};
		a.createDocumentFragment = function ()
		{
			var a = h.cloneNode(!1);
			return j.shivMethods ? (q(a), a) : a
		}
	}

	function s(a)
	{
		var b;
		if (a.documentShived)
		{
			return a;
		}
		j.shivCSS && !t && (b = !!p(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}"));
		j.shivMethods && !n && (b = !q(a));
		b && (a.documentShived = b);
		return a
	}

	function w(a)
	{
		for (var b, d = a.attributes, e = d.length, f = a.ownerDocument.createElement(l + ":" + a.nodeName);
		     e--;)
		{
			b = d[e], b.specified && f.setAttribute(b.nodeName, b.nodeValue);
		}
		f.style.cssText = a.style.cssText;
		return f
	}

	function u(a)
	{
		var b, d, e = a.namespaces, f = a.parentWindow;
		if (!x || a.printShived)
		{
			return a;
		}
		"undefined" == typeof e[l] && e.add(l);
		f.attachEvent("onbeforeprint", function ()
		{
			var h, e, f;
			h = a.styleSheets;
			for (var c = [], g = h.length, i = Array(g);
			     g--;)
			{
				i[g] = h[g];
			}
			for (;
				f = i.pop();)
			{
				if (!f.disabled && y.test(f.media))
				{
					h = f.imports;
					g = 0;
					for (e = h.length;
					     g < e;
					     g++)
					{
						i.push(h[g]);
					}
					c.push(f.cssText)
				}
			}
			g = c.reverse().join("").split("{");
			i = g.length;
			h = RegExp("(^|[\\s,>+~])(" + m().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi");
			for (e = "$1" + l + "\\:$2";
			     i--;)
			{
				c = g[i] = g[i].split("}"), c[c.length - 1] = c[c.length - 1].replace(h, e), g[i] = c.join("}");
			}
			c = g.join("{");
			i = a.getElementsByTagName("*");
			h = i.length;
			e = RegExp("^(?:" + m().join("|") + ")$", "i");
			for (f = [];
			     h--;)
			{
				g = i[h], e.test(g.nodeName) && f.push(g.applyElement(w(g)));
			}
			d = f;
			b = p(a, c)
		});
		f.attachEvent("onafterprint", function ()
		{
			for (var a = d, c = a.length;
			     c--;)
			{
				a[c].removeNode();
			}
			b.removeNode(!0)
		});
		a.printShived = !0;
		return a
	}

	var o = k.html5 || {}, v = /^<|^(?:button|textarea|select|optgroup|option)$/i, t, n;
	(function ()
	{
		var a, b = c.createElement("a"), d = k.getComputedStyle, e = c.documentElement, f = c.body || (a = e.insertBefore(c.createElement("body"), e.firstChild));
		f.insertBefore(b, f.firstChild);
		b.hidden = !0;
		b.innerHTML = "<xyz></xyz>";
		t = "none" == (b.currentStyle || d(b, null)).display;
		if (!(d = 1 == b.childNodes.length))
		{
			a:{
				try
				{
					c.createElement("a")
				}
				catch (h)
				{
					d = !0;
					break a
				}
				d = c.createDocumentFragment();
				d = "undefined" == typeof d.cloneNode || "undefined" == typeof d.createDocumentFragment || "undefined" == typeof d.createElement
			}
		}
		n = d;
		f.removeChild(b);
		a && e.removeChild(a)
	})();
	var j = {elements: o.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "), shivCSS: !1 !== o.shivCSS, shivMethods: !1 !== o.shivMethods, type: "default", shivDocument: s};
	k.html5 = j;
	s(c);
	var y =
		/^$|\b(?:all|print)\b/, l = "html5shiv", x = !n && function ()
	{
		var a = c.documentElement;
		return!("undefined" == typeof c.namespaces || "undefined" == typeof c.parentWindow || "undefined" == typeof a.applyElement || "undefined" == typeof a.removeNode || "undefined" == typeof k.attachEvent)
	}();
	j.type += " print";
	j.shivPrint = u;
	u(c)
})(this, document);
