var thumbnails = document.getElementById("thumbnails");
var imgs = thumbnails.getElementsByTagName("img");
var main = document.getElementById("main");
var currentIndex = 0;

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];

  img.addEventListener("click", function() {
    main.src = this.src;
    currentIndex = i;
  });
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 37) { // Left arrow key
    showPreviousImage();
  } else if (event.keyCode === 39) { // Right arrow key
    showNextImage();
  }
});

function showNextImage() {
  currentIndex = (currentIndex + 1) % imgs.length;
  main.src = imgs[currentIndex].src;
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  main.src = imgs[currentIndex].src;
}
