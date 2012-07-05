

	function viewportMonkeyInit() {
		var numsDiv = "<div class='nums'>WINDOW SIZE: <input type='counter' name='wSRcounter' class='monkeyReadout' value='-init-' /></div>";
		$(numsDiv).appendTo($('body'));
		
		var win = $(window);
		var windwidth;
		
		win.on('resize', function() {
			calculateSize();
		});
		
		function resizeWindow() {
			$('input.wSRcounter').val(windwidth);
		};
		function calculateSize() {
			windwidth = win.width();
			resizeWindow();
		}
	}
	viewportMonkeyInit();

