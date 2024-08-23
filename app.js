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

function onArrowClick(arrows){
    const slider = arrows.closest('.top-movies-container').querySelector('.movie-slider')
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'))
    if(arrows.classList.contains('left-arrow')){
        slider.style.setProperty('--slider-index', sliderIndex - 1)
    }

    if(arrows.classList.contains('right-arrow')){
        slider.style.setProperty('--slider-index', sliderIndex + 1)
    }
    console.log(slider)
}