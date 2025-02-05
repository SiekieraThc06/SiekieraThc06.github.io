const hamburger = document.getElementById('ham');
const menu = document.querySelector('.menu-rozw');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});