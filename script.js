// Toggle the Mobile Menu
const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Optional: Turn the hamburger icon into an 'X'
    menuIcon.classList.toggle('fa-times'); 
});

// Close menu when clicking a link (optional, good for UX)
navbar.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-times');
});