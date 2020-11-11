/**
 * moutheme: Default Javascript
 * @license MIT
 */

$(function () {
  "use strict";

  function i() {
    var i = t.width(), o = t.height(), n = 16, r = 9, a = i / n, c = o / r, d = Math.max(a, c), s = Math.ceil(n * d),
      u = Math.ceil(r * d), l = 0, h = 0;
    s > i && (l = .5 * -(s - i)), u > o && (h = .5 * -(u - o)), e.css({width: s, height: u, top: h, left: l})
  }

  var t = $(".video-wrapper"), e = t.find("video");
  return $(window).resize(i), i(), !1
}), $(function () {
  "use strict";
  try {
    return $("#Grid").mixItUp({animation: {duration: 500}}), !1
  }catch (e) {

  }
  //
}), $(function () {
  return $(window).stellar({verticalScrolling: !0, horizontalScrolling: !1, verticalOffset: 40}), !1
}), $(function () {
  return $(".tooltip").tooltipster({position: "right", animation: "fade", delay: 1}), !1
}), $(function () {
  return $(".tooltip-2").tooltipster({position: "top", animation: "fade", delay: 1}), !1
}), $(function () {
  return $(".tooltip-3").tooltipster({position: "bottom", animation: "fade", delay: 1}), !1
}), function (i) {
  i(document).ready(function () {
    var t = i(".accordion");
    t.each(function () {
      i(this).addClass("ui-accordion ui-widget ui-helper-reset"), i(this).find("h3").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"), i(this).find("div").addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), i(this).find("div").hide().first().show(), i(this).find("h3").first().removeClass("ui-accordion-header-active ui-state-active ui-corner-top").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i(this).find("span").first().addClass("ui-accordion-icon-active")
    }), $trigger = t.find("h3"), $trigger.on("click", function (t) {
      var e = i(this).parent();
      i(this).next().is(":hidden") && ($triggerloc = i("h3", e), $triggerloc.removeClass("ui-accordion-header-active ui-state-active ui-corner-top").next().slideUp(300), $triggerloc.find("span").removeClass("ui-accordion-icon-active"), i(this).find("span").addClass("ui-accordion-icon-active"), i(this).addClass("ui-accordion-header-active ui-state-active ui-corner-top").next().slideDown(300)), t.preventDefault()
    })
  })
}(this.jQuery);

/**************************************
 * Royal Preloader jQuery
 ***************************************/

Royal_Preloader.config({
  mode: 'text',
  text: '蓝猫科技...',
  background: '#00aecd'
});
