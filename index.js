const navBar = document.getElementById('nav-bar');
const closeBtn = document.getElementById('close-icon');
const openBtn = document.getElementById('open-icon');
const mobileImage = document.getElementById('mobile-image');
const desktopImage = document.getElementById('desktop-image');
const header = document.getElementById('header');
const info = document.getElementById('info');
const iconArrow = document.getElementById('icon-arrow');
const shopNow = document.getElementById('shop-now');
const leftAngle = document.querySelector('.angle-left');
const rightAngle = document.querySelector('.angle-right');

openBtn.addEventListener('click', () => {
    navBar.classList.add('show');
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('show');
})

rightAngle.addEventListener('click', nextFurniture);

leftAngle.addEventListener('click', previousFurniture);

const furnitures = [
    {
        heroImg:'./images/desktop-image-hero-1.jpg',
        header: 'Discover innovative ways to decorate',
        description: 'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        arrowIcon: './images/icon-arrow.svg',
        shop: 'Shop now'
    },
    {
        heroImg:'./images/desktop-image-hero-2.jpg',
        header: 'We are available all across the globe',
        description: 'With stores all over the world, it"s easy for you to find furniture for your home or place of business. Locally, we"re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don"t hesitate to contact us today.',
        arrowIcon: './images/icon-arrow.svg',
        shop: 'Shop now'
    },
    {
        heroImg:'./images/desktop-image-hero-3.jpg',
        header: 'Manufactured with the best materials',
        description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        arrowIcon: './images/icon-arrow.svg',
        shop: 'Shop now'
    }
]

let currentIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    desktopImage.srcset = furnitures[currentIndex].heroImg;
    header.textContent = furnitures[currentIndex].header;
    info.textContent = furnitures[currentIndex].description;
    iconArrow.src = furnitures[currentIndex].arrowIcon;
    shopNow.textContent = furnitures[currentIndex].shop;
})

function nextFurniture(){
    currentIndex++;
    if (currentIndex > furnitures.length - 1){
        currentIndex = 0;
    }
    desktopImage.srcset = furnitures[currentIndex].heroImg;
    header.textContent = furnitures[currentIndex].header;
    info.textContent = furnitures[currentIndex].description;
    iconArrow.src = furnitures[currentIndex].arrowIcon;
    shopNow.textContent = furnitures[currentIndex].shop;
}


function previousFurniture(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = furnitures.length - 1;
    }
    desktopImage.srcset = furnitures[currentIndex].heroImg;
    header.textContent = furnitures[currentIndex].header;
    info.textContent = furnitures[currentIndex].description;
    iconArrow.src = furnitures[currentIndex].arrowIcon;
    shopNow.textContent = furnitures[currentIndex].shop;
}