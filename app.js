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