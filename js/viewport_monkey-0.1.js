/*
	Viewport Monkey v0.2
	Author: Jason Morgan
	Twitter: @jaymorgan
*/

// Send properties as "bottom", "top" for the vert prop
// Send "left" and "right" for the horizontal prop
// If not set or not set coeerctly they will default to the bottom left


function vpm_viewportMonkeyInit(initial_position_vert, initial_position_hori) {
		
	$(document).ready(function () {
	    $('head').append('<link rel="stylesheet" href="css/vpm_ViewportMonkeyStyles.css" type="text/css" />');
	});
	
	var vpm_numsDiv = "<div class='vpm_monkeynums'>	Viewport Width:<input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-' /><select id='vpm_monkeyUnits'><option value='px'>px</option><option value='em'>em</option></select><button class='vpm_changepos'>move</button><img src=''/></div>";
	
	$(vpm_numsDiv).appendTo($('body'));
	
	var vpm_monkeynums = $('.vpm_monkeynums');
	
	vpm_monkeynums.css({
		'background-color' : 'rgba(0,0,0,0.4)',
		'font-family': 'sans-serif',
		'font-weight' : 'bolder',
		'position': 'absolute',
		'color': 'white',
		'padding': '8px',
		'-moz-border-radius': '6px',
		'-webkit-border-radius': '6px',
		'-ms-border-radius': '6px',
		'-o-border-radius': '6px',
		'border-radius': '6px'
	});
	
	var initposvert = initial_position_vert;
	var initposhori = initial_position_hori;
	
	if(initposvert === "bottom"){
		if (initposhori === "left") {
			initpos = "bottomleft";
		} else if (initposhori === "right") {
			initpos = "bottomright";
		} else {
			// Something went wrong!
			// Set to default
			initpos = "bottomleft";
		}
	} else if (initposvert === "top") {
		if (initposhori === "left") {
			initpos = "topleft";
		} else if (initposhori === "right") {
			initpos = "topright";
		} else {
			// Something went wrong!
			// Set to default
			initpos = "bottomleft";
		}
	} else {
		// Something went wrong!
		// Set to default
		initpos = "bottomleft";
	}
	
	console.log('initpos = ' + initpos);
	
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
	
	// Found this at CSS-Tricks.com
	// http://css-tricks.com/snippets/javascript/javascript-array-contains/
	Array.prototype.contains = function ( needle ) {
	   for (i in this) {
	       if (this[i] == needle) return i;
	   }
	   return 'x';
	}
	
	// Array of CSS Class names to move the Monkey around the screen
	var positions = ['positiontopleft', 'positionbottomleft', 'positionbottomright', 'positiontopright'];
	
	// Find the position as sent from the props at top
	
	var postest = positions.contains('position'+initpos);
	
	if (postest != 'x') {
	   vpm_setNewClass(positions[postest]);
	} else {
		vpm_setNewClass(positions[0]);
	}
	
	//	Stores the current index of the positions array
	var currentPosition = 0;
	
	function checkPostion(){
	  var oldClass = positions[currentPosition];
	  currentPosition++;
	  if(currentPosition >= positions.length){
	  	currentPosition =0;
	  } 
	  var newClass = positions[nclass];
	  vpm_monkeynums.removeClass(oldClass);
	  vpm_setNewClass(newClass);  
	}
	
	function vpm_setNewClass(newClass) {
		
		vpm_monkeynums.addClass(newClass);
	}
	
	vpm_movebtn.on("click", function(event){
		checkPostion();
	  vpm_monkeynums.css('background-color', '#ff5a00');
	});
	
	function vpm_findInArray(a, x){
		
	}
	
}

