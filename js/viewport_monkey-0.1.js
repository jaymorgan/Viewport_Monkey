function viewportMonkeyInit() {
	var numsDiv = "<div class='monkeynums'>Viewport Size: <input type='counter' name='wSRcounter' class='monkeyReadout' value='-init-' /></div>";
	$(numsDiv).appendTo($('body'));
	
	$('.monkeynums').css({
		'background-color' : 'black',
		'font-family': 'sans-serif',
		'font-weight' : 'bolder',
		'position': 'fixed',
		'bottom': '0px',
		'left': '0px',
		'color': 'white',
		'padding': '8px'
	});
	
	var win = $(window);
	var windwidth;
	
	win.on('resize', function() {
		calculateSize();
	});
	
	function resizeWindow() {
		$('input.monkeyReadout').val(windwidth);
	};
	function calculateSize() {
		windwidth = win.width();
		resizeWindow();
	}
}
viewportMonkeyInit();
