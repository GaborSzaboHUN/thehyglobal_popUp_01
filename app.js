const adsButtons = document.querySelectorAll('.ads-btn')
const hysocietyAdsContainer = document.querySelector('.hysociety-ads.auction.active')
const adsBlur = document.querySelector('.ads-blur.active')

/* - - - - CLOSE ADS CONTAINER - - - - */

function adsButtonClick() {
    hysocietyAdsContainer.style.opacity = 0;
    adsBlur.style.opacity = 0;

    setTimeout(() => {
        hysocietyAdsContainer.classList.remove('active')
        adsBlur.classList.remove('active')
    }, 300);
}

adsButtons.forEach((adsButton) => {
    adsButton.addEventListener('click', adsButtonClick)
})


/* - - - - VOLUME CONTROL - - - - */

const video = document.getElementById('videoPlayer');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', function () {
    video.muted = !video.muted;
    if (video.muted) {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
});