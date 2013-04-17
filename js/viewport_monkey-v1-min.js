/*
	Viewport Monkey v1
	Author: Jason Morgan
	Twitter: @jaymorgan

	Copyright (c) 2013 Jason Morgan (www.jmorgan.ws)
	Dual licensed under the MIT and GPL licenses
*/// TO INITIATE - vpm_viewportMonkeyInit('top', 'left');
// Send properties as "bottom", "top" for the vert prop
// Send "left" and "right" for the horizontal prop
// If not set or not set correctly they will default to the bottom left
(function(e) {
    function t(t, n) {
        function T() {
            f.val(y);
        }
        function N() {
            var e, t, n;
            y = g.width();
            e = C();
            if (e == "em") {
                t = s.css("font-size");
                n = y / parseInt(t);
                y = n;
            }
            T();
        }
        function C() {
            var e = l.html();
            return e;
        }
        function k() {
            var e;
            pos = S % 4;
            e = w[pos];
            S++;
            console.log("checker = " + e);
            return e;
        }
        function L(e) {
            switch (e) {
              case "bottomright":
                u.css({
                    top: "auto",
                    bottom: "0",
                    right: "0",
                    left: "auto"
                });
                break;
              case "bottomleft":
                u.css({
                    top: "auto",
                    bottom: "0",
                    right: "auto",
                    left: "0"
                });
              case "topleft":
                u.css({
                    top: "0",
                    bottom: "auto",
                    right: "auto",
                    left: "0"
                });
              case "topright":
                u.css({
                    top: "0",
                    bottom: "auto",
                    right: "0",
                    left: "auto"
                });
            }
        }
        function A(e) {
            switch (e) {
              case "topright":
                O(-90);
                u.delay(320).queue(function(e) {
                    L("bottomright");
                    h.css({
                        "-webkit-transform": "rotate(-90deg)",
                        "-moz-transform": "rotate(-90deg)",
                        "-ms-transform": "rotate(-90deg)",
                        "-o-transform": "rotate(-90deg)",
                        "-webkit-transform": "rotate(-90deg)"
                    });
                    e();
                }).queue(function(e) {
                    O(90);
                    e();
                }).delay(400).queue(function(e) {
                    M("dn");
                    O(0);
                    e();
                });
                break;
              case "bottomright":
                O(90);
                u.delay(320).queue(function(e) {
                    L("bottomleft");
                    h.css({
                        "-webkit-transform": "rotate(0deg)",
                        "-moz-transform": "rotate(0deg)",
                        "-ms-transform": "rotate(0deg)",
                        "-o-transform": "rotate(0deg)",
                        "-webkit-transform": "rotate(0deg)"
                    });
                    e();
                }).queue(function(e) {
                    O(0);
                    e();
                });
                break;
              case "bottomleft":
                O(90);
                u.delay(320).queue(function(e) {
                    L("topleft");
                    h.css({
                        "-webkit-transform": "rotate(90deg)",
                        "-moz-transform": "rotate(90deg)",
                        "-ms-transform": "rotate(90deg)",
                        "-o-transform": "rotate(90deg)",
                        "-webkit-transform": "rotate(90deg)"
                    });
                    e();
                }).queue(function(e) {
                    O(-90);
                    e();
                }).delay(0).queue(function(e) {
                    M("up");
                    O(0);
                    e();
                });
                break;
              default:
                M("up");
                O(-90);
                u.delay(320).queue(function(e) {
                    u.css({
                        top: "0",
                        bottom: "auto",
                        right: "0",
                        left: "auto"
                    });
                    h.css({
                        "-webkit-transform": "rotate(180deg)",
                        "-moz-transform": "rotate(180deg)",
                        "-ms-transform": "rotate(180deg)",
                        "-o-transform": "rotate(180deg)",
                        "-webkit-transform": "rotate(180deg)"
                    });
                    e();
                }).queue(function(e) {
                    O(0);
                    e();
                });
            }
        }
        function O(e) {
            deggers = e + "deg";
            e == 0 ? o = "1" : o = "0";
            a.css({
                "-webkit-transform": "rotateX(" + deggers + ")",
                "-moz-transform": "rotateX(" + deggers + ")",
                "-ms-transform": "rotateX(" + deggers + ")",
                "-o-transform": "rotateX(" + deggers + ")",
                transform: "rotateX(" + deggers + ")",
                opacity: o
            });
        }
        function M(e) {
            console.log("set_origin");
            e == "up" ? a.css({
                "-webkit-transform-origin": "top right",
                "-moz-transform-origin": "top right",
                "-ms-transform-origin": "top right",
                "-o-transform-origin": "top right",
                "transform-origin": "top right"
            }) : a.css({
                "-webkit-transform-origin": "bottom left",
                "-moz-transform-origin": "bottom left",
                "-ms-transform-origin": "bottom left",
                "-o-transform-origin": "bottom left",
                "transform-origin": "bottom left"
            });
        }
        var r, s, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S;
        e(document).ready(function() {});
        r = "<div id='vpm_monkeyHolder'><div id='vpm_theMonkey'><input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-'><a href='#' id='vpm_monkeyUnits'>px</a><a href='#' id='vpm_arrowButton'><div id='vpm_arrow'></div></a></div></div>";
        s = e("body");
        e(r).appendTo(s);
        u = e("#vpm_monkeyHolder");
        a = e("#vpm_theMonkey");
        f = e(".vpm_monkeyReadout");
        l = e("#vpm_monkeyUnits");
        c = e("#vpm_arrowButton");
        h = e("#vpm_arrow");
        u.css({
            position: "fixed",
            "-webkit-perspective": "750",
            "-moz-perspective": "750",
            "-ms-perspective": "750",
            "-o-perspective": "750",
            perspective: "750",
            bottom: "0",
            left: "0"
        });
        a.css({
            "background-color": "rgba(0,0,0,0.4)",
            "font-family": "sans-serif",
            "font-weight": "bolder",
            padding: "4px 14px",
            "box-sizing": "border-box",
            "-webkit-transform-style": "preserve-3D",
            "-moz-transform-style": "preserve-3D",
            "-o-transform-style": "preserve-3D",
            "transform-style": "preserve-3D",
            "-webkit-transition-property": "-webkit-transform, opacity",
            "-moz-transition-property": "-moz-transform, opacity",
            "-o-transition-property": "-o-transform, opacity",
            "transition-property": "transform, opacity",
            "-webkit-transition-duration": "0.3s",
            "-moz-transition-duration": "0.3s",
            "-o-transition-duration": "0.3s",
            "transition-duration": "0.3s",
            "-webkit-transition-timing-function": "ease-in-out",
            "-moz-transition-timing-function": "ease-in-out",
            "-o-transition-timing-function": "ease-in-out",
            "transition-timing-function": "ease-in-out",
            "box-shadow": "rgba(120, 120, 120, 0.3) 2px 2px 4px"
        });
        f.css({
            "background-color": "transparent",
            border: "none",
            width: "100px",
            margin: "0",
            padding: "2px 8px 0 0",
            color: "orange",
            "text-shadow": "0px 1px 2px rgba(0,0,0,0.5)",
            "font-size": "1.4em",
            "text-align": "right",
            "vertical-align": "top"
        });
        l.css({
            padding: "4px",
            border: "1px solid #ff5a00",
            background: "rgba(#333333, 0.5)",
            color: "orange",
            "text-shadow": "0px 1px 2px rgba(0,0,0,0.5)",
            "text-decoration": "none",
            "border-radius": "4px",
            display: "inline-block",
            width: "24px",
            "text-align": "center",
            "margin-right": "8px"
        });
        c.css({
            display: "inline-block",
            background: "transparent",
            padding: "0",
            "text-align": "center",
            "vertical-align": "bottom"
        });
        c.hover(function() {
            h.css({
                "border-bottom-color": "#895810"
            });
        }, function() {
            h.css({
                "border-bottom-color": "orange"
            });
        });
        h.css({
            display: "block",
            margin: "6px",
            padding: "0",
            width: "0",
            height: "0",
            "border-left": "8px solid transparent",
            "border-right": "8px solid transparent",
            "border-bottom": "16px solid orange"
        });
        p = t;
        d = n;
        p === "bottom" ? d === "left" ? v = "bottomleft" : d === "right" ? v = "bottomright" : v = "bottomleft" : p === "top" ? d === "left" ? v = "topleft" : d === "right" ? v = "topright" : v = "bottomleft" : v = "bottomleft";
        console.log("initial_position = " + v);
        m = e("#vpm_monkeyUnits");
        g = e(window);
        b = e(".vpm_changepos");
        g.on("resize", function() {
            N();
        });
        g.on("load", function() {
            N();
        });
        m.on("change", function() {
            N();
        });
        l.on("click", function(e) {
            e.preventDefault();
            this.innerHTML == "px" ? this.innerHTML = "em" : this.innerHTML = "px";
            N();
        });
        Array.prototype.contains = function(e) {
            for (i in this) if (this[i] == e) return i;
            return "x";
        };
        w = [ "bottomleft", "topleft", "topright", "bottomright" ];
        E = w.contains(v);
        console.log("1 postest = " + E);
        S = E;
        x = k();
        A(x);
        c.on("click", function() {
            x = k();
            A(x);
        });
    }
    t("top", "left");
})(jQuery);