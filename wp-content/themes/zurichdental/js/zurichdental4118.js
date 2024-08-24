jQuery(document).ready(function(){




/*
* Dynamic Menu
*/
        var r = null;
        jQuery(".home-featured-col").first().closest(".section").addClass("featured-btns-section"), jQuery(".section.featured-btns-section").on("click", function(t) {
            if (jQuery(t.originalEvent.srcElement).closest("a").length <= 0 && jQuery(t.originalEvent.originalTarget).closest("a").length <= 0) {
                var e = jQuery(this),
                    i = e.find(".home-featured");
                i.removeClass("focused");
                var s = jQuery(".front li a", i),
                    n = Elastic.easeOut.config(1, .5);
                return TweenMax.staggerFromTo(s, .6, {
                    scale: 1,
                    opacity: 1
                }, {
                    scale: .4,
                    opacity: 1,
                    delay: 0,
                    ease: n
                }, .08), jQuery(".home-featured-col").removeClass("back front").addClass("initial"), !1
            }
        }), jQuery(".home-featured-col > a").on("click", function(t) {
            if (t.stopPropagation(), jQuery(this).parent().hasClass("front")) {
                var e = jQuery(this).closest(".home-featured");
                e.removeClass("focused");
                var i = jQuery(".front li a", e);
                return jQuery(".home-featured-col").removeClass("back front").addClass("initial"), !1
            }
            var s = jQuery(this).closest(".home-featured"),
                n = jQuery(this).closest(".home-featured-col"),
                o = !1,
                r = .4,
                a = Elastic.easeOut.config(1, .5);
            if (s.find("a.activated").removeClass("activated"), s.find("ul > .front").length > 0) {
                var l = s.find(".home-featured-main.front").index(),
                    h = n.index();
                o = h > l, a = Elastic.easeOut.config(1, 1)
            } else {
                var h = n.index();
                o = h > 1, r = .8
            }
            s.find(".initial").removeClass("initial"), s.find(".front").removeClass("front"), s.find(".home-featured-col").addClass("back"), n.addClass("front").removeClass("back"), n.next().addClass("front").removeClass("back"), s.addClass("focused");
            var i = n.next().find("li a");
            return o && (i = jQuery(i.get().reverse())), i.show(), isMobile || TweenMax.staggerFromTo(i, 1.8, {
                scale: r,
                opacity: 1
            }, {
                scale: 1,
                opacity: 1,
                delay: 0,
                ease: a,
                onComplete: function() {
                    jQuery(this.target).addClass("activated").attr("style", "")
                }
            }, .08), !1
        })

 });


