/*------------------------------------------------------------------------------------------------------------------------
 Author: Sean Goresht
 www: http://seangoresht.com/
 github: https://github.com/srsgores

 twitter: http://twitter.com/S.Goresht

 warp-kickstrap Joomla Template
 Licensed under the GNU Public License

 =============================================================================
 Filename:  admin.js
 =============================================================================
 This file is responsible for performing all client-side JS functions in the administrator back-end.  This includes things like showing/hiding inputs when they are selected (under the template configuration), and saving these configurations to the server.
Variables:
a: this is the $ jQuery object, but in Joomla, we have to be friendly with MooTools.  Think of a as $
 --------------------------------------------------------------------------------------------------------------------- */
jQuery(function (a)
{
	submitbutton = Joomla.submitbutton;
	Joomla.submitbutton = function (b)
	{
		var c = a('form[name="adminForm"]');
		"style.save" == b ? c.trigger("save", ["save", b]) : "style.save2copy" == b ? c.trigger("save", ["save-copy", b]) : "style.apply" == b ? c.trigger("save", ["apply", b]) : submitbutton(b)
	};
	a("#config").closest("div.pane-sliders").before(a("#config")).remove();
	a("#config").tabs();
	a("#profile").prependTo("#config li.Profiles").profiles('[data-profile="default"]');
	1200 > a(window).width() && a("div.tabs-box").addClass("small-screen");
	a("#config").prev("ul.nav").append('<li class="version">Warp ' + a("#config").data("warpversion") + "</li>");
	var d = a("#config ul.verify").hide();
	a("#config a.verify-link").bind("click", function (a)
	{
		a.preventDefault();
		d.slideToggle()
	});
	var h = a("#config ul.systemcheck").hide();
	a("#config a.systemcheck-link").bind("click", function (a)
	{
		a.preventDefault();
		h.slideToggle()
	});

	//this will show the LESS custom file input when the less radio is enabled...
	a("input[name='config[lessdir]']").parent().parent().hide();
	a("input[name='config[less]'][value='1']").on('click', function (e)
	{
		a("input[name='config[lessdir]']").parent().parent().show("fast");
	});
	a("input[name='config[less]'][value='0']").on('click', function (e)
	{
		a("input[name='config[lessdir]']").parent().parent().hide("fast");
	});
	a('form[name="adminForm"]').bind("save", function (b, c, d)
	{
		var e = {}, f = [],
			b = a(this),
			g = a("#toolbar-" + c);
		g.addClass("saving");
		a("#config li.ignore > .field").find("input, select, textarea").each(function ()
		{
			f.push(a(this).attr("name"))
		});
		a.each(b.serializeArray(), function (b, c)
		{
			-1 < a.inArray(c.name, f) || (e[c.name] = c.value)
		});
		a.ajax(
			{
				url:b.attr("action"),
				type:"post",
				data:a.extend(e,
					{
						option:"com_templates",
						tmpl:"warp-ajax"
					}),
				success:function (b)
				{
					g.removeClass("saving");
					try
					{
						if (b = a.parseJSON(b), "success" != b.message)
						{
							alert("Save failed!");
							return
						}
					}
					catch (c)
					{
					}
					submitbutton(d)
				}
			})
	})
});