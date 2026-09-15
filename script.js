/* =====================================================
   SIWES DEFENSE WEBSITE
   Vanilla JavaScript
===================================================== */


/* =====================================================
   LIGHTBOX
===================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

const galleryItems = document.querySelectorAll(".gallery-item");


/*
    Open lightbox when a gallery item is clicked.
*/

galleryItems.forEach((item) => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");
        const caption = item.querySelector("figcaption");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightboxCaption.textContent =
            caption ? caption.innerText : image.alt;

        lightbox.classList.add("active");

        lightbox.setAttribute("aria-hidden", "false");

        // Prevent page scrolling while lightbox is open
        document.body.style.overflow = "hidden";

    });

});


/*
    Close lightbox function.
*/

function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


/*
    Close button.
*/

lightboxClose.addEventListener("click", closeLightbox);


/*
    Clicking the dark area outside the image closes it.
*/

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/*
    Escape key also closes the lightbox.
*/

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("active")
    ) {
        closeLightbox();
    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");


/*
    If IntersectionObserver is supported,
    reveal sections as they enter the viewport.
*/

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        observer.observe(element);
    });

} else {

    // Fallback for older browsers

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


/* =====================================================
   DOWNLOAD BUTTON FEEDBACK
===================================================== */

const downloadButtons =
    document.querySelectorAll(".download-btn");


downloadButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /*
            The actual download is handled by the
            browser because the buttons use normal
            <a href="..."> links.
        */

        button.classList.add("pressed");

        setTimeout(() => {
            button.classList.remove("pressed");
        }, 200);

    });

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cSIWES DEFENSE SYSTEM ONLINE",
    "font-weight:bold;font-size:18px;"
);

console.log(
    "Aratoluwada Toluwade // Mechatronics Engineering // FUNAAB"
);