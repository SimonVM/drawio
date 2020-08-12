/**
 * Multitouch plugin.
 */
Draw.loadPlugin(function(ui)
{
	if (ui.editor.isChromelessView())
	{
		ui.editor.graph.click = function(me)
		{
			console.log("clicked!");
		};
	}
});