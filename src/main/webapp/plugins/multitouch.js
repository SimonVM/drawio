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
	    console.log(evt);
	  },
	  mouseMove: function(sender, evt)
	  {
	    console.log('mouseMove');
	    console.log(evt);
	  },
	  mouseUp: function(sender, evt)
	  {
	    console.log('mouseUp');
	    console.log(evt);
	  }
	});
});