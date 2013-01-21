/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function (a)
{
	submitbutton = Joomla.submitbutton;
	Joomla.submitbutton = function (b)
	{
		var c = a('form[name="adminForm"]');
		"style.save" == b ? c.trigger("save", ["save", b]) : "style.save2copy" == b ? c.trigger("save", ["save-copy", b]) : "style.apply" == b ? c.trigger("save", ["apply", b]) : submitbutton(b)
	};
	a("#config").closest("#templatestyleOptions").before(a("#config")).remove();
	a("#config").tabs();
	a("#profile").prependTo("#config li.Profiles").profiles('[data-profile="default"]');
	1200 > a(window).width() && a("div.tabs-box").addClass("small-screen");
	a("#config").prev("ul.nav").append('<li class="version">Warp ' + a("#config").data("warpversion") + "</li>");
	var d = a("#config ul.verify").hide();
	//the following sets the radio buttons to disabled if less is not enabled.
	function setDisableLessRadios()
	{
		var lessEnabled = a("input[name='config[less]']:checked").val();
		switch (lessEnabled)
		{
			default:
			case "0":
				//less is disabled
				a("input[name='config[less]']").parent().parent().nextUntil("li.separator").find("input").attr("disabled", "disabled");
				break;
			case "1":
				a("input[name='config[less]']").parent().parent().nextUntil("li.separator").find("input").removeAttr("disabled");
		}
		a("input[name='config[less]'][value='1']").on('click', function (e)
		{
			a(this).parent().parent().nextUntil("li.separator").find("input").removeAttr("disabled");
		});
		a("input[name='config[less]'][value='0']").on('click', function (e)
		{
			a(this).parent().parent().nextUntil("li.separator").find("input").attr("disabled", "disabled");
		});
	}

	function setDisableSassRadios()
	{
		var sassEnabled = a("input[name='config[sass]']:checked").val();
		switch (sassEnabled)
		{
			default:
			case "0":
				//less is disabled
				a("input[name='config[sass]']").parent().parent().nextUntil("li.separator").find("input").attr("disabled", "disabled");
				break;
			case "1":
				a("input[name='config[sass]']").parent().parent().nextUntil("li.separator").find("input").removeAttr("disabled");
		}
		a("input[name='config[sass]'][value='1']").on('click', function (e)
		{
			a(this).parent().parent().nextUntil("li.separator").find("input").removeAttr("disabled");
		});
		a("input[name='config[sass]'][value='0']").on('click', function (e)
		{
			a(this).parent().parent().nextUntil("li.separator").find("input").attr("disabled", "disabled");
		});
	}
	setDisableLessRadios();
	setDisableSassRadios();
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
	a('form[name="adminForm"]').bind("save", function (b, c, d)
	{
		var e = {}, f = [], b = a(this), g = a("#toolbar-" + c);
		g.addClass("saving");
		a("#config li.ignore > .field").find("input, select, textarea").each(function ()
		{
			f.push(a(this).attr("name"))
		});
		a.each(b.serializeArray(), function (b, c)
		{
			-1 < a.inArray(c.name, f) || (e[c.name] = c.value)
		});
		a.ajax({url: b.attr("action"), type: "post", data: a.extend(e, {option: "com_templates", tmpl: "warp-ajax"}), success: function (b)
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
		}})
	})
});