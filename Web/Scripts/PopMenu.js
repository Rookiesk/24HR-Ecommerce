﻿(function (b) {
    b.fn.popmenu = function (d) {
        var a = b.extend({ controller: !0, width: "300px", background: "#34495e", focusColor: "#1abc9c", borderRadius: "10px", top: "50", left: "0", iconSize: "100px" }, d), g = !0 === a.controller ? "none" : "block"; d = b(this); var c = d.children("ul"), f = c.children("li"), h = f.children("a"), e = d.children(".pop_ctrl"); return function () {
            c.css({ display: g, position: "absolute", "margin-top": -a.top, "margin-left": -a.left, background: a.background, width: a.width, "float": "left", padding: "0", "border-radius": a.borderRadius });
            f.css({ display: "block", color: "#fff", "float": "left", width: a.iconSize, height: a.iconSize, "text-align": "center", "border-radius": a.borderRadius }); h.css({ "text-decoration": "none", color: "#fff" }); e.hover(function () { e.css("cursor", "pointer") }, function () { e.css("cursor", "default") }); e.click(function (a) { a.preventDefault(); c.show("fast"); b(document).mouseup(function (a) { c.is(a.target) || 0 !== c.has(a.target).length || c.hide() }) }); f.hover(function () { b(this).css({ background: a.focusColor, cursor: "pointer" }) }, function () {
                b(this).css({
                    background: a.background,
                    cursor: "default"
                })
            })
        }()
    }
})(jQuery);