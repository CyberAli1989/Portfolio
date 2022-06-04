jQuery(function ($) {
    var items = $(".items .item");
    var btns = $(".filter .btn").click(function(arguments) {
        // body
      var active = btns
        .removeClass("current")
        .filter(this)
        .addClass("current")
        .data("filter");
      items
        .hide()
        .filter("." + active)
        .fadeIn(450);
    });
  });
  