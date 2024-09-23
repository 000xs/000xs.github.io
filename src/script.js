 // Mobile menu toggle
 const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Special offer function
function showSpecialOffer() {
    const now = new Date();
    const hour = now.getHours();
    let message = "";

    if (hour < 11) {
        message = "Morning Special: Get a free croissant with any coffee purchase!";
    } else if (hour < 15) {
        message = "Lunch Special: 50% off on sandwiches with any drink order!";
    } else {
        message = "Evening Special: Buy one coffee, get one free after 5 PM!";
    }

    alert(message);
}

// Call the function when the page loads
window.onload = showSpecialOffer;