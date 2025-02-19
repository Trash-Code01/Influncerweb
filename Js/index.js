const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const body = document.body;
const menuLinks = document.querySelectorAll('.menu-link');

function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    body.classList.add('no-scroll');
}

function closeMenuFunction() {
    mobileMenu.classList.add('translate-x-full');
    body.classList.remove('no-scroll');
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunction);
menuLinks.forEach(link => link.addEventListener('click', closeMenuFunction));