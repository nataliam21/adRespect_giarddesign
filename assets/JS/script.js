$(document).ready(function () {
  $("#toggleSearch").click(function () {
    $(".search-box, .search-overlay").toggleClass("active");
    $("body").toggleClass("noscroll");
  });

  $("#closeSearch").click(function () {
    $(".search-box, .search-overlay").removeClass("active");
    $("body").removeClass("noscroll");
  });
});
