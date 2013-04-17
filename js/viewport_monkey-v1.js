/*
	Viewport Monkey v1
	Author: Jason Morgan
	Twitter: @jaymorgan

	Copyright (c) 2013 Jason Morgan (www.jmorgan.ws)
	Dual licensed under the MIT and GPL licenses
*/

// TO INITIATE - vpm_viewportMonkeyInit('top', 'left');
// Send properties as "bottom", "top" for the vert prop
// Send "left" and "right" for the horizontal prop
// If not set or not set correctly they will default to the bottom left
(function( $ ) {

function vpm_viewportMonkeyInit(initial_position_vert, initial_position_hori) {
		
	$(document).ready(function () {
	    // $('head').append('<link rel="stylesheet" href="css/vpm_ViewportMonkeyStyles.css" type="text/css" />');
	});
	
	// The Monkey
	var vpm_numsDiv = "<div id='vpm_monkeyHolder'><div id='vpm_theMonkey'><input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-'><a href='#' id='vpm_monkeyUnits'>px</a><a href='#' id='vpm_arrowButton'><div id='vpm_arrow'></div></a></div></div>";
	
	// Define the Body
	var vpm_body = $('body');
	// Add the Monkey to the Body
	$(vpm_numsDiv).appendTo(vpm_body);
	
	// Grab the main pieces with jQuery and store them in variables
	var vpm_monkeyHolder = $('#vpm_monkeyHolder');
	var vpm_theMonkey = $('#vpm_theMonkey');
	var vpm_monkeyReadout = $('.vpm_monkeyReadout');
	var vpm_monkeyUnitsButton = $('#vpm_monkeyUnits');
	var vpm_monkeyMoveButton = $('#vpm_arrowButton');
	var vpm_monkeyMoveArrow = $('#vpm_arrow');

	// Define the styles for the different pieces, so we dont' needs another stylesheet

	// Styles for the monkeyHolder
	vpm_monkeyHolder.css({
		'position': 'fixed',
		'-webkit-perspective': '750',
		'-moz-perspective': '750',
		'-ms-perspective': '750',
		'-o-perspective': '750',
		'perspective': '750',
		'bottom': '0',
		'left': '0'
	});
	// Styles for the Monkey background
	vpm_theMonkey.css({
		'background-color' : 'rgba(0,0,0,0.4)',
		'font-family': 'sans-serif',
		'font-weight' : 'bolder',
		'padding': '4px 14px',
		'box-sizing': 'border-box',
		'-webkit-transform-style': 'preserve-3D',
		'-moz-transform-style': 'preserve-3D',
		'-o-transform-style': 'preserve-3D',
		'transform-style': 'preserve-3D',
		'-webkit-transition-property': '-webkit-transform, opacity',
		'-moz-transition-property': '-moz-transform, opacity',
		'-o-transition-property': '-o-transform, opacity',
		'transition-property': 'transform, opacity',
		'-webkit-transition-duration': '0.3s',
		'-moz-transition-duration': '0.3s',
		'-o-transition-duration': '0.3s',
		'transition-duration': '0.3s',
		'-webkit-transition-timing-function': 'ease-in-out',
		'-moz-transition-timing-function': 'ease-in-out',
		'-o-transition-timing-function': 'ease-in-out',
		'transition-timing-function': 'ease-in-out',
		'box-shadow': 'rgba(120, 120, 120, 0.3) 2px 2px 4px'
	});
	
	// Styles for the Numbers Readout
	vpm_monkeyReadout.css({
		'background-color': 'transparent',
		'border': 'none',
		'width': '100px',
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
	var initial_position;

	if(initpos_v === "bottom"){
		if (initpos_h === "left") {
			initial_position = "bottomleft";
		} else if (initpos_h === "right") {
			initial_position = "bottomright";
		} else {
			// Something went wrong! Set to default
			initial_position = "bottomleft";
		}
	} else if (initpos_v === "top") {
		if (initpos_h === "left") {
			initial_position = "topleft";
		} else if (initpos_h === "right") {
			initial_position = "topright";
		} else {
			// Something went wrong! Set to default
			initial_position = "bottomleft";
		}
	} else {
		// Something went wrong! Set to default
		initial_position = "bottomleft";
	}
	console.log('initial_position = ' + initial_position);
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
	var postest = positions.contains(initial_position);
	
	console.log('1 postest = ' + postest);
	//	Stores the current index of the positions array
	var currentPosition = postest;
	
	function checkPostion(){
		pos = currentPosition % 4;
		var oldClass = positions[pos];
		currentPosition++;
		console.log('checker = ' + oldClass);
		return oldClass;
	}

	// For intial Load
	x = checkPostion();
	vpm_set_styles(x);

	// Move Button Event
	vpm_monkeyMoveButton.on("click", function(event){
		x = checkPostion();
		vpm_set_styles(x);
	});
	
	function position_monkey_holder_at ( send_to_position ) {

		switch (send_to_position)
		{
			case 'bottomright':
				vpm_monkeyHolder.css({
					'top': 'auto',
					'bottom': '0',
					'right': '0',
					'left': 'auto' });
				break;
			case 'bottomleft':
				vpm_monkeyHolder.css({
					'top': 'auto',
					'bottom': '0',
					'right': 'auto',
					'left': '0' });
			case 'topleft':
				vpm_monkeyHolder.css({
					'top': '0',
					'bottom': 'auto',
					'right': 'auto',
					'left': '0' });
			case 'topright':
				vpm_monkeyHolder.css({
					'top': '0',
					'bottom': 'auto',
					'right': '0',
					'left': 'auto' });
		}
	}

	function vpm_set_styles (pos) {
		switch (pos)
		{
			case 'topright':
				spin_vpm_theMonkey(-90);
				vpm_monkeyHolder.delay(320).
					queue(function(next){
						position_monkey_holder_at('bottomright');
						vpm_monkeyMoveArrow.css({
							'-webkit-transform': 'rotate(-90deg)',
							'-moz-transform': 'rotate(-90deg)',
							'-ms-transform': 'rotate(-90deg)',
							'-o-transform': 'rotate(-90deg)',
							'-webkit-transform': 'rotate(-90deg)'
						});
						next();
					}).
					queue(function(next){
						spin_vpm_theMonkey(90);
						next();
					}).
					delay(400).
					queue(function(next){
						set_origin("dn");
						spin_vpm_theMonkey(0);
						next();
					});
				break;
			case 'bottomright':
				spin_vpm_theMonkey(90);
				vpm_monkeyHolder.delay(320).
					queue(function(next){
						position_monkey_holder_at('bottomleft');
						vpm_monkeyMoveArrow.css({
							'-webkit-transform': 'rotate(0deg)',
							'-moz-transform': 'rotate(0deg)',
							'-ms-transform': 'rotate(0deg)',
							'-o-transform': 'rotate(0deg)',
							'-webkit-transform': 'rotate(0deg)'
						});
						next();
					}).
					queue(function(next){
						spin_vpm_theMonkey(0);
						next();
					});
				break;
			case 'bottomleft':
				spin_vpm_theMonkey(90);
				vpm_monkeyHolder.delay(320).
					queue(function(next){
						position_monkey_holder_at('topleft');
						vpm_monkeyMoveArrow.css({
							'-webkit-transform': 'rotate(90deg)',
							'-moz-transform': 'rotate(90deg)',
							'-ms-transform': 'rotate(90deg)',
							'-o-transform': 'rotate(90deg)',
							'-webkit-transform': 'rotate(90deg)'
						});
						next();
					}).
					queue(function(next){
						spin_vpm_theMonkey(-90);
						next();
					}).
					delay(0).
					queue(function(next){
						set_origin("up");
						spin_vpm_theMonkey(0);
						next();
					});

				break;
			// default is 'top-left'
			default:
				set_origin("up");
			  	spin_vpm_theMonkey(-90);
			  	vpm_monkeyHolder.delay(320).queue(function(next){
		    		vpm_monkeyHolder.css({
		    			'top': '0',
		    			'bottom': 'auto',
		    			'right': '0',
		    			'left': 'auto'
		    		});
		    		vpm_monkeyMoveArrow.css({
		    			'-webkit-transform': 'rotate(180deg)',
		    			'-moz-transform': 'rotate(180deg)',
		    			'-ms-transform': 'rotate(180deg)',
		    			'-o-transform': 'rotate(180deg)',
		    			'-webkit-transform': 'rotate(180deg)'
		    		});
					next();
				}).queue(function(next){
					spin_vpm_theMonkey(0);
					next();
				});
		}
	}


	function spin_vpm_theMonkey (howManyDegs) {
		deggers = howManyDegs+"deg";
		if (howManyDegs==0) {o = "1"} else {o = "0"};
		vpm_theMonkey.css({
			'-webkit-transform': 'rotateX(' + deggers + ')',
			'-moz-transform': 'rotateX(' + deggers + ')',
			'-ms-transform': 'rotateX(' + deggers + ')',
			'-o-transform': 'rotateX(' + deggers + ')',
			'transform': 'rotateX(' + deggers + ')',
			'opacity': o
		});
	}

	function set_origin (direction) {
		console.log('set_origin');
		if (direction == "up") {
			vpm_theMonkey.css({
				"-webkit-transform-origin": "top right",
				"-moz-transform-origin": "top right",
				"-ms-transform-origin": "top right",
				"-o-transform-origin": "top right",
				"transform-origin": "top right"
			});
		} else {
			vpm_theMonkey.css({
				"-webkit-transform-origin": "bottom left",
				"-moz-transform-origin": "bottom left",
				"-ms-transform-origin": "bottom left",
				"-o-transform-origin": "bottom left",
				"transform-origin": "bottom left"
			});
		};
	}
}

// Puts the monkey in the bottom left by default

vpm_viewportMonkeyInit('top', 'left');



})( jQuery);