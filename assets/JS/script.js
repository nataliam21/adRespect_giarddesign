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

var macy = Macy({
  container: ".macy-container", // Klasa kontenera elementów siatki
  trueOrder: true, // Zachowanie kolejności elementów
  waitForImages: false, // Czekanie na załadowanie obrazów
  margin: 43, // Margines między elementami
  columns: 3, // Ilość kolumn w siatce
  breakAt: {
    1200: 3,
    940: 3,
    520: 2,
    400: 2,
  },
});
