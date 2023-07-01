// toggle class active
const navbarMenu = document.querySelector('.navbar-menu');

// ketika hamburger menu diklik
document.querySelector('#hamburger').onclick = () => {
    navbarMenu.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector('.hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target)) {
        navbarMenu.classList.remove('active');
    } 
});