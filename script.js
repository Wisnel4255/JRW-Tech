
/* =========================================
   JRW-TECH WEBSITE
   Main JavaScript
========================================= */



/* 1. MOBILE NAVIGATION */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.innerHTML = isOpen
            ? '<i class="fas fa-xmark"></i>'
            : '<i class="fas fa-bars"></i>';

    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.innerHTML =
                '<i class="fas fa-bars"></i>';

        });

    });

}



    /* 2. PORTFOLIO FILTER */

    const filterButtons = document.querySelectorAll(".filter-btn");

    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;

            // Update active button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            // Filter cards
            portfolioCards.forEach(function (card) {

                const category = card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    category === selectedCategory
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });


    /* 3. BLOG SEARCH */

    const blogSearch = document.getElementById("blogSearch");

    const blogCards = document.querySelectorAll(".blog-card");

    if (blogSearch) {

        blogSearch.addEventListener("input", function () {

            const searchValue = blogSearch.value.toLowerCase().trim();

            blogCards.forEach(function (card) {

                const cardText = card.textContent.toLowerCase();

                if (cardText.includes(searchValue)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    /* 4. CONTACT FORM VALIDATION */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();
                return;

            }

            const formMessage = document.getElementById("formMessage");

            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your message form is ready. Connect an email service to receive it.";

            }

            contactForm.reset();

        });

    }


    /* 5. BOOKING FORM VALIDATION */

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!bookingForm.checkValidity()) {

                bookingForm.reportValidity();
                return;

            }

            const bookingMessage =
                document.getElementById("bookingMessage");

            if (bookingMessage) {

                bookingMessage.textContent =
                    "Thank you! Your appointment request form is ready. Connect a booking service to confirm your appointment.";

            }

            bookingForm.reset();

        });

    }


    /* 6. CURRENT YEAR IN FOOTER */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    /* 7. SCROLL TO TOP BUTTON */

    const scrollButton = document.createElement("button");

    scrollButton.className = "scroll-top";
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

    scrollButton.setAttribute("aria-label", "Scroll to top");

    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            scrollButton.classList.add("visible");

        } else {

            scrollButton.classList.remove("visible");

        }

    });

    scrollButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* 8. NEWSLETTER FORM */

    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const newsletterMessage =
                document.getElementById("newsletterMessage");

            if (newsletterMessage) {

                newsletterMessage.textContent =
                    "Thank you for your interest! Newsletter registration needs an email service.";

            }

            newsletterForm.reset();

        });

    }

});
