// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// ================= CLOSE MENU =================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ================= ACTIVE NAV =================

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.navbar a[href="#${sectionId}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .project-card, .service-card, .contact-content"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ================= CURRENT YEAR =================

const footer = document.querySelector(".footer-content p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Abdalkreem Eslam - Kimo`;

}