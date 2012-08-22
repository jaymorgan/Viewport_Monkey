function vpm_viewportMonkeyInit() {
	
	$(document).ready(function () {
	    $('head').append('<link rel="stylesheet" href="css/vpm_ViewportMonkeyStyles.css" type="text/css" />');
	});
	
	var vpm_numsDiv = "<div class='positiontopleft vpm_monkeynums'>	Viewport Width:<input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-' /><select id='vpm_monkeyUnits'><option value='px'>px</option><option value='em'>em</option></select><button class='vpm_changepos'>move</button></div>";
	
	$(vpm_numsDiv).appendTo($('body'));
	
	var vpm_monkeynums = $('.vpm_monkeynums');
	
	vpm_monkeynums.css({
		'background-color' : 'black',
		'font-family': 'sans-serif',
		'font-weight' : 'bolder',
		'position': 'absolute',
		'color': 'white',
		'padding': '14px',
		'-moz-border-radius': '6px',
		'-webkit-border-radius': '6px',
		'-ms-border-radius': '6px',
		'-o-border-radius': '6px',
		'border-radius': '6px'
	});
	
	var vpm_monkeySelector = $('#vpm_monkeyUnits');
	var vpm_win = $(window);
	var vpm_windwidth;
	var vpm_movebtn = $('.vpm_changepos');
	
	vpm_win.on('resize', function() {
		vpm_calculateSize();
	});
	
	vpm_win.on('load', function() {
		vpm_calculateSize();
	});
	
	vpm_monkeySelector.on('change', function(){
		vpm_calculateSize();
	});
	
	function vpm_windowWidthOutput() {
		$('input.vpm_monkeyReadout').val(vpm_windwidth);
	};
	
	// Pulls the size of the viewport and converts to EMs if its set to show EMs
	function vpm_calculateSize() {
		vpm_windwidth = vpm_win.width();
		var vpm_units = vpm_checkMonkeyUnits();
		// If the dropdown is set to EMs this if capturesthat and translated the numbers to EMs
		if (vpm_units == 'em') {
			var vpm_emSize = $('body').css('font-size');
			var vpm_emWidth = vpm_windwidth / parseInt(vpm_emSize);
			vpm_windwidth = vpm_emWidth; 
		}
		vpm_windowWidthOutput();
	}
	
	// Checks to see what the units dropdown is set to
	function vpm_checkMonkeyUnits() {
		var vpm_currentUnits = vpm_monkeySelector.val();
		return vpm_currentUnits;
	}
	
	// Array of CSS Class names to move the Monkey around the screen
	var positions = ['positiontopleft', 'positionbottomleft', 'positionbottomright', 'positiontopright'];
	//	Stores the current index of the positions array
	var currentPosition = 0;
	
	function checkPostion(){
	  var oldClass = positions[currentPosition];
	  currentPosition++;
	  if(currentPosition >= positions.length){
	  	currentPosition =0;
	  } 
	    var newClass = positions[currentPosition];
	    vpm_monkeynums.removeClass(oldClass);
	    vpm_monkeynums.addClass(newClass);
	}
	
	vpm_movebtn.on("click", function(event){
		checkPostion();
	  vpm_monkeynums.css('background-color', '#ff5a00');
	});
	
}

