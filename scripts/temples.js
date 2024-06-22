// JavaScript to support footer dynamic content
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// JavaScript to support hamburger menu toggle
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
}

document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
