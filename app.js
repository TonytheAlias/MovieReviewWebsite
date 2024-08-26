
document.addEventListener("click", e => {
    let arrows
    if (e.target.matches('.arrows')){
        arrows = e.target
    }
    else {
      arrows = e.target.closest('.arrows')
    }
    if(arrows != null) {
        onArrowClick(arrows)
    }  
})

function onArrowClick(arrows) {
    const slider = arrows.closest('.top-movies-container').querySelector('.movie-slider');
    let sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));

    const imgCount = slider.children.length; // Number of images in the slider
    const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'));

    const maxIndex = Math.ceil(imgCount / itemsPerScreen); // Maximum index, based on the number of images

    if (arrows.classList.contains('left-arrow')) {
        if (sliderIndex - 1 < 0 ) {
            // If at the beginning, move to the last item
            slider.style.setProperty('--slider-index', maxIndex - 1);
        } else {
            slider.style.setProperty('--slider-index', sliderIndex - 1);
        }
    }

    if (arrows.classList.contains('right-arrow')) {
        if (sliderIndex + 1 >= maxIndex) {
            // If at the end, move to the first item
            slider.style.setProperty('--slider-index', 0);
        } else {
            slider.style.setProperty('--slider-index', sliderIndex + 1);
        }
    }
}