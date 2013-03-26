/*
	Viewport Monkey v1
	Author: Jason Morgan
	Twitter: @jaymorgan
*/// Send properties as "bottom", "top" for the vert prop
// Send "left" and "right" for the horizontal prop
// If not set or not set coeerctly they will default to the bottom left
(function(e) {
    function t(t, n) {
        function E() {
            u.val(m);
        }
        function S() {
            var e, t, n;
            m = v.width();
            e = x();
            if (e == "em") {
                t = s.css("font-size");
                n = m / parseInt(t);
                m = n;
            }
            E();
        }
        function x() {
            var e = a.html();
            return e;
        }
        function T() {
            var e = y[w];
            w++;
            w >= y.length && (w = 0);
            return w;
        }
        function N(e) {
            console.log(e);
            if (e === "topleft") {
                o.css({
                    top: "3px",
                    left: "3px",
                    right: "auto",
                    bottom: "auto"
                });
                l.css({
                    "-webkit-transform": "rotate(90deg)",
                    "-moz-transform": "rotate(90deg)",
                    "-ms-transform": "rotate(90deg)",
                    "-o-transform": "rotate(90deg)",
                    "-webkit-transform": "rotate(90deg)"
                });
            }
            if (e === "topright") {
                o.css({
                    top: "3px",
                    left: "auto",
                    right: "3px",
                    bottom: "auto"
                });
                l.css({
                    "-webkit-transform": "rotate(180deg)",
                    "-moz-transform": "rotate(180deg)",
                    "-ms-transform": "rotate(180deg)",
                    "-o-transform": "rotate(180deg)",
                    "-webkit-transform": "rotate(180deg)"
                });
            }
            if (e === "bottomleft") {
                o.css({
                    top: "auto",
                    left: "3px",
                    right: "auto",
                    bottom: "3px"
                });
                l.css({
                    "-webkit-transform": "rotate(0deg)",
                    "-moz-transform": "rotate(0deg)",
                    "-ms-transform": "rotate(0deg)",
                    "-o-transform": "rotate(0deg)",
                    "-webkit-transform": "rotate(0deg)"
                });
            }
            if (e === "bottomright") {
                o.css({
                    top: "auto",
                    left: "auto",
                    right: "3px",
                    bottom: "3px"
                });
                l.css({
                    "-webkit-transform": "rotate(-90deg)",
                    "-moz-transform": "rotate(-90deg)",
                    "-ms-transform": "rotate(-90deg)",
                    "-o-transform": "rotate(-90deg)",
                    "-webkit-transform": "rotate(-90deg)"
                });
            }
        }
        var r, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w;
        e(document).ready(function() {});
        r = "<div class='vpm_monkeynums'><input type='counter' name='wSRcounter' class='vpm_monkeyReadout' value='-init-'><a href='#' id='vpm_monkeyUnits'>px</a><a href='#' id='vpm_arrowButton'><div id='vpm_arrow'></div></a></div>";
        s = e("body");
        e(r).appendTo(s);
        o = e(".vpm_monkeynums");
        u = e(".vpm_monkeyReadout");
        a = e("#vpm_monkeyUnits");
        f = e("#vpm_arrowButton");
        l = e("#vpm_arrow");
        o.css({
            "background-color": "rgba(0,0,0,0.4)",
            "font-family": "sans-serif",
            "font-weight": "bolder",
            position: "absolute",
            color: "white",
            padding: "4px 14px"
        });
        u.css({
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
        a.css({
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
        f.css({
            display: "inline-block",
            background: "transparent",
            padding: "0",
            "text-align": "center",
            "vertical-align": "bottom"
        });
        f.hover(function() {
            l.css({
                "border-bottom-color": "#895810"
            });
        }, function() {
            l.css({
                "border-bottom-color": "orange"
            });
        });
        l.css({
            display: "block",
            margin: "6px",
            padding: "0",
            width: "0",
            height: "0",
            "border-left": "8px solid transparent",
            "border-right": "8px solid transparent",
            "border-bottom": "16px solid orange"
        });
        c = t;
        h = n;
        c === "bottom" ? h === "left" ? p = "bottomleft" : h === "right" ? p = "bottomright" : p = "bottomleft" : c === "top" ? h === "left" ? p = "topleft" : h === "right" ? p = "topright" : p = "bottomleft" : p = "bottomleft";
        d = e("#vpm_monkeyUnits");
        v = e(window);
        g = e(".vpm_changepos");
        v.on("resize", function() {
            S();
        });
        v.on("load", function() {
            S();
        });
        d.on("change", function() {
            S();
        });
        a.on("click", function(e) {
            e.preventDefault();
            this.innerHTML == "px" ? this.innerHTML = "em" : this.innerHTML = "px";
            S();
        });
        Array.prototype.contains = function(e) {
            for (i in this) if (this[i] == e) return i;
            return "x";
        };
        y = [ "bottomleft", "topleft", "topright", "bottomright" ];
        b = y.contains(p);
        b != "x" ? N(y[b]) : N(y[b]);
        w = b;
        f.on("click", function() {
            var e = T();
            N(y[e]);
        });
    }
    t("bottom", "left");
})(jQuery);