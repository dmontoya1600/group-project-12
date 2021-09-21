window.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById("navbar");
    const navbarToggle = document.querySelector(".navbar-toggle");

    function openMobileNavbar() {
        navbar.classList.add("opened");
        navbarToggle.setAttribute("aria-label", "Close navigation menu.");
    }

    function closeMobileNavbar() {
        navbar.classList.remove("opened");
        navbarToggle.setAttribute("aria-label", "Open navigation menu.");
    }

    navbarToggle.addEventListener("click", () => {
        // console.log('WTFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF')
        if (navbar.classList.contains("opened")) {
            closeMobileNavbar();
        } else {
            openMobileNavbar();
        }
    });

    const navbarMenu = document.querySelector(".navbar-menu");
    const navbarLinksContainer = document.querySelector(".navbar-links");

    navbarLinksContainer.addEventListener("click", (clickEvent) => {
        clickEvent.stopPropagation();
    });

    navbarMenu.addEventListener("click", closeMobileNavbar);
})
