/**
 * Multitouch plugin.
 */
Draw.loadPlugin(function(ui)
{
	ui.editor.graph.addMouseListener(
	{
	  mouseDown: function(sender, evt)
	  {
	    console.log('mouseDown');
	  },
	  mouseMove: function(sender, evt)
	  {
	    console.log('mouseMove');
	  },
	  mouseUp: function(sender, evt)
	  {
	    console.log('mouseUp');
	  }
	});
});