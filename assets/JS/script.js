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
    1140: 3,
    960: 3,
    720: 2,
    540: 2,
  },
});

//lightbox.option({
// resizeDuration: 200,
//  wrapAround: true,
//});

const expandButton = document.getElementById("button_realizations");
const macyContainer = document.getElementById("photo_gallery");
const gradientOverlay = document.querySelector(".gradient-overlay");
const expandContainer = document.querySelector(".expand-container");

function handleExpandClick() {
  gradientOverlay.style.display = "none";
  expandButton.removeEventListener("click", handleExpandClick);
  expandContainer.classList.add("expanded");
  macy.recalculate(true);
}
expandButton.addEventListener("click", handleExpandClick);
