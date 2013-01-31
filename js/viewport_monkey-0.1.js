/*
	Viewport Monkey v0.2
	Author: Jason Morgan
	Twitter: @jaymorgan
*/

// Send properties as "bottom", "top" for the vert prop
// Send "left" and "right" for the horizontal prop
// If not set or not set coeerctly they will default to the bottom left
(function( $ ) {

function vpm_viewportMonkeyInit(initial_position_vert, initial_position_hori) {
		
	$(document).ready(function () {
	    // $('head').append('<link rel="stylesheet" href="css/vpm_ViewportMonkeyStyles.css" type="text/css" />');
	});
	
	var vpm_numsDiv = "<div class='vpm_monkeynums'><input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-'><a href='#' id='vpm_monkeyUnits'>px</a><a href='#' id='vpm_arrow'></a></div>";
	
	$(vpm_numsDiv).appendTo($('body'));
	
	var vpm_monkeynums = $('.vpm_monkeynums');
	var vpm_monkeyReadout = $('.vpm_monkeyReadout');
	var vpm_monkeyUnitsButton = $('#vpm_monkeyUnits');

	vpm_monkeynums.css({
		'background-color' : 'rgba(0,0,0,0.4)',
		'font-family': 'sans-serif',
		'font-weight' : 'bolder',
		'position': 'absolute',
		'color': 'white',
		'padding': '8px',
	});

	vpm_monkeyReadout.css({
		'background-color': 'transparent',
		'border': 'none',
		'width': '60px',
		'color': 'orange',
		'text-shadow': '0px 1px 2px rgba(0,0,0,0.5)',
		'font-size': '1.4em',
		'text-align': 'right'
	});

	vpm_monkeyUnitsButton.css({
		'padding': '4px',
		'border': '1px solid #333',
		'background': '#ddd',
		'color': '#333',
		'text-decoration': 'none',
		'border-radius' : '4px'
	});

	var initpos_v = initial_position_vert;
	var initpos_h = initial_position_hori;
	var ipos;

	if(initpos_v === "bottom"){
		if (initpos_h === "left") {
			ipos = "bottomleft";
		} else if (initpos_h === "right") {
			ipos = "bottomright";
		} else {
			// Something went wrong! Set to default
			ipos = "bottomleft";
		}
	} else if (initpos_v === "top") {
		if (initpos_h === "left") {
			ipos = "topleft";
		} else if (initpos_h === "right") {
			ipos = "topright";
		} else {
			// Something went wrong! Set to default
			ipos = "bottomleft";
		}
	} else {
		// Something went wrong! Set to default
		ipos = "bottomleft";
	}
	
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
	var positions = ['bottomleft', 'topleft', 'topright', 'bottomright'];
	
	// Find the position as sent from the props at top
	var postest = positions.contains(ipos);

	if (postest != 'x') {
		vpm_setNewClass(positions[postest]);
	} else {
		vpm_setNewClass(positions[postest]);
	}
	
	//	Stores the current index of the positions array
	var currentPosition = postest;
	
	function checkPostion(){
		var oldClass = positions[currentPosition];
		console.log(oldClass);
		currentPosition++;
		if(currentPosition >= positions.length){
			currentPosition =0;
		}
		return currentPosition;
	}
	
	// Move Button Event
	vpm_movebtn.on("click", function(event){
		var thing = checkPostion();
		vpm_setNewClass(positions[thing]);
	});
	
	function vpm_setNewClass(pos) {
		console.log('here - ' + pos);
		if (pos === 'topleft') {
			vpm_monkeynums.css({
				'top' : '3px',
				'left' : '3px',
				'right' : 'auto',
				'bottom' : 'auto'
			});
		}
		if (pos === 'topright') {
			vpm_monkeynums.css({
				'top' : '3px',
				'left' : 'auto',
				'right' : '3px',
				'bottom' : 'auto'
			});
		}
		if (pos === 'bottomleft') {
			vpm_monkeynums.css({
				'top' : 'auto',
				'left' : '3px',
				'right' : 'auto',
				'bottom' : '3px'
			});
		}
		if (pos === 'bottomright') {
			vpm_monkeynums.css({
				'top' : 'auto',
				'left' : 'auto',
				'right' : '3px',
				'bottom' : '3px'
			});
		}
	}
}

// Puts the monkey in the bottom left by default
//
vpm_viewportMonkeyInit('bottom', 'left');



})( jQuery);