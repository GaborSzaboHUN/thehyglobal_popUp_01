const adsCloseButton = document.querySelector('.ads-btn.close')
const hysocietyAdsContainer = document.querySelector('.hysociety-ads.auction.active')

/* - - - - CLOSE ADS CONTAINER - - - - */

adsCloseButton.addEventListener('click', () => {
    hysocietyAdsContainer.classList.remove('active')
})