const imageCont = document.getElementById('sliderImage-section');
const sliderImages = document.getElementsByClassName('sliderImage');
const fullSizeImgs = document.getElementsByClassName('mySlides');

let currentImage = 0;


// Removes 'show' classes from large images
// Removes 'active' class from sliderImages
function reset() {
    for (let img of fullSizeImgs) {
        img.classList.remove('show');
    }
    for (let image of sliderImages) {
        image.firstElementChild.classList.remove('active');
    }
}

// Show larger image based on thumbnail index clicked
imageCont.addEventListener('click', (e) => {
    reset();
    // Find index of images clicked
    const index = [...sliderImages].indexOf(e.target.parentNode);
    // Use that index to show its larger IMG
    fullSizeImgs[index].classList.add('show');

    // Set global variable for currentImage
    // currentImage = index;

    displayImages();
})

function displayImages() {
    let images = sliderImages[currentImage].firstElementChild;
    images.classList.add('active');
}