function viewportMonkeyInit() {
	var numsDiv = "<div class='monkeynums'>	Viewport Width:<input type='counter' name='wSRcounter' class='monkeyReadout' value='-init-' /><select id='monkeyUnits'><option value='px'>px</option><option value='em'>em</option></select><button class='changepos'>move</button></div>";
	
	$(numsDiv).appendTo($('body'));
	
	var monkeynums = $('.monkeynums');
	
	monkeynums.css({
		'background-color' : 'black',
		'font-family': 'sans-serif',
		'font-weight' : 'bolder',
		'position': 'fixed',
		'bottom': '-6px',
		'left': '-6px',
		'color': 'white',
		'padding': '14px',
		'-moz-border-radius': '6px',
		'-webkit-border-radius': '6px',
		'-ms-border-radius': '6px',
		'-o-border-radius': '6px',
		'border-radius': '6px'
	});
	
	var monkeySelector = $('#monkeyUnits');
	var win = $(window);
	var windwidth;
	var movebtn = $('.changepos');
	
	win.on('resize', function() {
		calculateSize();
	});
	
	win.on('load', function() {
		calculateSize();
	});
	
	monkeySelector.on('change', function(){
		calculateSize();
	});
	
	movebtn.on('click', function(event){
		monkeynums.css({
			'background-color' : 'grey',
			'bottom': '',
			'top': '-6px',
			'left': '-6px'
		});
		
	});
	
	function windowWidthOutput() {
		$('input.monkeyReadout').val(windwidth);
	};
	
	function calculateSize() {
		windwidth = win.width();
		var units = checkMonkeyUnits();
		if (units == 'em') {
			var emSize = $('body').css('font-size');
			var emWidth = windwidth / parseInt(emSize);
			windwidth = emWidth; 
		}
		windowWidthOutput();
	}
	
	function checkMonkeyUnits() {
		var currentUnits = monkeySelector.val();
		return currentUnits;
	}
}
viewportMonkeyInit();
