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

let macy = Macy({
  container: ".macy-container",
  trueOrder: true,
  waitForImages: false,
  margin: 20,
  columns: 3,
  breakAt: {
    1200: 3,
    940: 3,
    520: 2,
    400: 2,
  },
});

//lightbox.option({
// resizeDuration: 200,
//  wrapAround: true,
//});
