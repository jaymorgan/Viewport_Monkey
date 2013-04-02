/*
	Viewport Monkey v1
	Author: Jason Morgan
	Twitter: @jaymorgan

	Copyright (c) 2013 Jason Morgan (www.jmorgan.ws)
	Dual licensed under the MIT and GPL licenses
*/

// Send properties as "bottom", "top" for the vert prop
// Send "left" and "right" for the horizontal prop
// If not set or not set correctly they will default to the bottom left
(function( $ ) {

function vpm_viewportMonkeyInit(initial_position_vert, initial_position_hori) {
		
	$(document).ready(function () {
	    // $('head').append('<link rel="stylesheet" href="css/vpm_ViewportMonkeyStyles.css" type="text/css" />');
	});
	
	// The Monkey
	var vpm_numsDiv = "<div class='vpm_monkeynums'><input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-'><a href='#' id='vpm_monkeyUnits'>px</a><a href='#' id='vpm_arrowButton'><div id='vpm_arrow'></div></a></div>";
	
	// Define the Body
	var vpm_body = $('body');
	// Add the Monkey to the Body
	$(vpm_numsDiv).appendTo(vpm_body);
	
	// Grab the main pieces with jQuery and store them in variables
	var vpm_monkeynums = $('.vpm_monkeynums');
	var vpm_monkeyReadout = $('.vpm_monkeyReadout');
	var vpm_monkeyUnitsButton = $('#vpm_monkeyUnits');
	var vpm_monkeyMoveButton = $('#vpm_arrowButton');
	var vpm_monkeyMoveArrow = $('#vpm_arrow');

	// Define the styles for the different pieces, so we dont' needs another stylesheet

	// Styles for the Monkey background
	vpm_monkeynums.css({
		'background-color' : 'rgba(0,0,0,0.4)',
		'font-family': 'sans-serif',
		'font-weight' : 'bolder',
		'position': 'absolute',
		'color': 'white',
		'padding': '4px 14px',
	});
	// Styles for the Numbers Readout
	vpm_monkeyReadout.css({
		'background-color': 'transparent',
		'border': 'none',
		'width': '60px',
		'margin': '0',
		'padding': '2px 8px 0 0',
		'color': 'orange',
		'text-shadow': '0px 1px 2px rgba(0,0,0,0.5)',
		'font-size': '1.4em',
		'text-align': 'right',
		'vertical-align': 'top'
	});
	// Styles for the Units Button
	vpm_monkeyUnitsButton.css({
		'padding': '4px',
		'border': '1px solid #ff5a00',
		'background': 'rgba(#333333, 0.5)',
		'color': 'orange',
		'text-shadow': '0px 1px 2px rgba(0,0,0,0.5)',
		'text-decoration': 'none',
		'border-radius' : '4px',
		'display': 'inline-block',
		'width': '24px',
		'text-align': 'center',
		'margin-right': '8px'
	});
	// Styles for the Arrow Holder
	vpm_monkeyMoveButton.css({
		'display': 'inline-block',
		'background': 'transparent',
		'padding': '0',
		'text-align': 'center',
		'vertical-align': 'bottom'
	});

	// Rollover for the Arrow
	vpm_monkeyMoveButton.hover(function (){
		vpm_monkeyMoveArrow.css({
			'border-bottom-color': '#895810'
		});
	}, function (){
		vpm_monkeyMoveArrow.css({
			'border-bottom-color': 'orange'
		});
	});

	// Styles for the Arrow itself
	vpm_monkeyMoveArrow.css({
		'display': 'block',
		'margin': '6px',
		'padding': '0',
		'width': '0',
		'height': '0',
		'border-left': '8px solid transparent',
		'border-right': '8px solid transparent',
		'border-bottom': '16px solid orange'
	});

	// Starts the portion to move the Monkey around the screen
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

	// Unit Switch Button Event
	vpm_monkeyUnitsButton.on("click", function(event){
		event.preventDefault();
		if (this.innerHTML == 'px') {this.innerHTML = 'em'} else{this.innerHTML = 'px'};
		vpm_calculateSize();
	});

	function vpm_windowWidthOutput() {
		vpm_monkeyReadout.val(vpm_windwidth);
	};
	
	// Pulls the size of the viewport and converts to EMs if its set to show EMs
	function vpm_calculateSize() {
		vpm_windwidth = vpm_win.width();
		// Get the value of the Units Toggle Button
		var vpm_units = vpm_checkMonkeyUnits();
		// If the toggle is set to EMs this if captures that and translated the numbers to EMs
		if (vpm_units == 'em') {
			var vpm_emSize = vpm_body.css('font-size');
			var vpm_emWidth = vpm_windwidth / parseInt(vpm_emSize);
			vpm_windwidth = vpm_emWidth; 
		}
		vpm_windowWidthOutput();
	}
	
	// Checks to see what the units dropdown is set to
	function vpm_checkMonkeyUnits() {
		var vpm_currentUnits = vpm_monkeyUnitsButton.html();
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
		currentPosition++;
		if(currentPosition >= positions.length){
			currentPosition =0;
		}
		return currentPosition;
	}

	// Move Button Event
	vpm_monkeyMoveButton.on("click", function(event){
		var thing = checkPostion();
		vpm_setNewClass(positions[thing]);
	});
	
	function vpm_setNewClass(pos) {
		console.log(pos);
		if (pos === 'topleft') {
			vpm_monkeynums.css({
				'top' : '3px',
				'left' : '3px',
				'right' : 'auto',
				'bottom' : 'auto'
			});
			vpm_monkeyMoveArrow.css({
				'-webkit-transform': 'rotate(90deg)',
				'-moz-transform': 'rotate(90deg)',
				'-ms-transform': 'rotate(90deg)',
				'-o-transform': 'rotate(90deg)',
				'-webkit-transform': 'rotate(90deg)'
			});
		}
		if (pos === 'topright') {
			vpm_monkeynums.css({
				'top' : '3px',
				'left' : 'auto',
				'right' : '3px',
				'bottom' : 'auto'
			});
			vpm_monkeyMoveArrow.css({
				'-webkit-transform': 'rotate(180deg)',
				'-moz-transform': 'rotate(180deg)',
				'-ms-transform': 'rotate(180deg)',
				'-o-transform': 'rotate(180deg)',
				'-webkit-transform': 'rotate(180deg)'
			});
		}
		if (pos === 'bottomleft') {
			vpm_monkeynums.css({
				'top' : 'auto',
				'left' : '3px',
				'right' : 'auto',
				'bottom' : '3px'
			});
			vpm_monkeyMoveArrow.css({
				'-webkit-transform': 'rotate(0deg)',
				'-moz-transform': 'rotate(0deg)',
				'-ms-transform': 'rotate(0deg)',
				'-o-transform': 'rotate(0deg)',
				'-webkit-transform': 'rotate(0deg)'
			});
		}
		if (pos === 'bottomright') {
			vpm_monkeynums.css({
				'top' : 'auto',
				'left' : 'auto',
				'right' : '3px',
				'bottom' : '3px'
			});
			vpm_monkeyMoveArrow.css({
				'-webkit-transform': 'rotate(-90deg)',
				'-moz-transform': 'rotate(-90deg)',
				'-ms-transform': 'rotate(-90deg)',
				'-o-transform': 'rotate(-90deg)',
				'-webkit-transform': 'rotate(-90deg)'
			});
		}
	}
}

// Puts the monkey in the bottom left by default
//
vpm_viewportMonkeyInit('bottom', 'left');



})( jQuery);