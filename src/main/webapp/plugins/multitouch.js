/**
 * Multitouch plugin.
 */
Draw.loadPlugin(function(ui)
{
	ui.editor.graph.click = function(me)
	{
		console.log("clicked!");
	};
});