// ==========================
// Smooth Navbar Shadow
// ==========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#111";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
    } else {
        header.style.background = "rgba(0,0,0,0.75)";
        header.style.boxShadow = "none";
    }

});

// ==========================
// Fade Animation on Scroll
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

const elements = document.querySelectorAll(
".card, .review, .gallery img, section h2, #about p"
);

elements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

// ==========================
// Product Card Hover Effect
// ==========================

document.querySelectorAll(".card").forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// ==========================
// Welcome Message
// ==========================

window.onload = function () {

    console.log("Welcome to RS Glass Beads Website ❤️");

};

// ==========================
// Smooth Scroll for Nav Links
// ==========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});