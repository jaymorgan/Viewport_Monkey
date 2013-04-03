/*
	Viewport Monkey v1
	Author: Jason Morgan
	Twitter: @jaymorgan

	Copyright (c) 2013 Jason Morgan (www.jmorgan.ws)
	Dual licensed under the MIT and GPL licenses
*/// Send properties as "bottom", "top" for the vert prop
// Send "left" and "right" for the horizontal prop
// If not set or not set correctly they will default to the bottom left
(function(e) {
    function t(t, n) {
        function S() {
            a.val(g);
        }
        function x() {
            var e, t, n;
            g = m.width();
            e = T();
            if (e == "em") {
                t = s.css("font-size");
                n = g / parseInt(t);
                g = n;
            }
            S();
        }
        function T() {
            var e = f.html();
            return e;
        }
        function N() {
            var e;
            pos = E % 4;
            e = b[pos];
            E++;
            return E % 4;
        }
        function C(e) {
            if (e === "topleft") {
                u.css({
                    top: "0px",
                    left: "0px",
                    right: "auto",
                    bottom: "auto"
                });
                c.css({
                    "-webkit-transform": "rotate(90deg)",
                    "-moz-transform": "rotate(90deg)",
                    "-ms-transform": "rotate(90deg)",
                    "-o-transform": "rotate(90deg)",
                    "-webkit-transform": "rotate(90deg)"
                });
            }
            if (e === "topright") {
                u.css({
                    top: "0px",
                    left: "auto",
                    right: "0px",
                    bottom: "auto"
                });
                c.css({
                    "-webkit-transform": "rotate(180deg)",
                    "-moz-transform": "rotate(180deg)",
                    "-ms-transform": "rotate(180deg)",
                    "-o-transform": "rotate(180deg)",
                    "-webkit-transform": "rotate(180deg)"
                });
            }
            if (e === "bottomleft") {
                u.css({
                    top: "auto",
                    left: "0px",
                    right: "auto",
                    bottom: "0px"
                });
                c.css({
                    "-webkit-transform": "rotate(0deg)",
                    "-moz-transform": "rotate(0deg)",
                    "-ms-transform": "rotate(0deg)",
                    "-o-transform": "rotate(0deg)",
                    "-webkit-transform": "rotate(0deg)"
                });
            }
            if (e === "bottomright") {
                u.css({
                    top: "auto",
                    left: "auto",
                    right: "0",
                    bottom: "0"
                });
                c.css({
                    "-webkit-transform": "rotate(-90deg)",
                    "-moz-transform": "rotate(-90deg)",
                    "-ms-transform": "rotate(-90deg)",
                    "-o-transform": "rotate(-90deg)",
                    "-webkit-transform": "rotate(-90deg)"
                });
            }
        }
        var r, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E;
        e(document).ready(function() {});
        r = "<div id='vpm_monkeyHolder'><div id='vpm_theMonkey'><input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-'><a href='#' id='vpm_monkeyUnits'>px</a><a href='#' id='vpm_arrowButton'><div id='vpm_arrow'></div></a></div></div>";
        s = e("body");
        e(r).appendTo(s);
        o = e("#vpm_monkeyHolder");
        u = e("#vpm_theMonkey");
        a = e(".vpm_monkeyReadout");
        f = e("#vpm_monkeyUnits");
        l = e("#vpm_arrowButton");
        c = e("#vpm_arrow");
        u.css({
            "background-color": "rgba(0,0,0,0.4)",
            "font-family": "sans-serif",
            "font-weight": "bolder",
            position: "absolute",
            color: "white",
            padding: "4px 14px"
        });
        a.css({
            "background-color": "transparent",
            border: "none",
            width: "60px",
            margin: "0",
            padding: "2px 8px 0 0",
            color: "orange",
            "text-shadow": "0px 1px 2px rgba(0,0,0,0.5)",
            "font-size": "1.4em",
            "text-align": "right",
            "vertical-align": "top"
        });
        f.css({
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
        l.css({
            display: "inline-block",
            background: "transparent",
            padding: "0",
            "text-align": "center",
            "vertical-align": "bottom"
        });
        l.hover(function() {
            c.css({
                "border-bottom-color": "#895810"
            });
        }, function() {
            c.css({
                "border-bottom-color": "orange"
            });
        });
        c.css({
            display: "block",
            margin: "6px",
            padding: "0",
            width: "0",
            height: "0",
            "border-left": "8px solid transparent",
            "border-right": "8px solid transparent",
            "border-bottom": "16px solid orange"
        });
        h = t;
        p = n;
        h === "bottom" ? p === "left" ? d = "bottomleft" : p === "right" ? d = "bottomright" : d = "bottomleft" : h === "top" ? p === "left" ? d = "topleft" : p === "right" ? d = "topright" : d = "bottomleft" : d = "bottomleft";
        v = e("#vpm_monkeyUnits");
        m = e(window);
        y = e(".vpm_changepos");
        m.on("resize", function() {
            x();
        });
        m.on("load", function() {
            x();
        });
        v.on("change", function() {
            x();
        });
        f.on("click", function(e) {
            e.preventDefault();
            this.innerHTML == "px" ? this.innerHTML = "em" : this.innerHTML = "px";
            x();
        });
        Array.prototype.contains = function(e) {
            for (i in this) if (this[i] == e) return i;
            return "x";
        };
        b = [ "bottomleft", "topleft", "topright", "bottomright" ];
        w = b.contains(d);
        w != "x" ? C(b[w]) : C(b[w]);
        E = w;
        l.on("click", function() {
            C(b[N()]);
        });
    }
    t("bottom", "left");
})(jQuery);