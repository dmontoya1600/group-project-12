window.addEventListener('DOMContentLoaded', () => {
    console.log('hey')

    const navbar = document.getElementById("navbar");
    const navbarToggle = document.querySelector(".navbar-toggle");

    const openNavbar = () => {
        navbar.classList.add("opened");
        navbarToggle.setAttribute("aria-label", "Close navigation menu.");
    }

    const closeNavbar = () => {
        navbar.classList.remove("opened");
        navbarToggle.setAttribute("aria-label", "Open navigation menu.");
    }

    navbarToggle.addEventListener("click", () => {
        // console.log('WTFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF')
        if (navbar.classList.contains("opened")) {
            closeNavbar();
        } else {
             openNavbar();
        }
    });

    const navbarMenu = document.querySelector(".navbar-menu");
    const navbarLinksContainer = document.querySelector(".navbar-links");

    navbarLinksContainer.addEventListener("click", (clickEvent) => {
         clickEvent.stopPropagation();
    });

navbarMenu.addEventListener("click", closeNavbar);
})
