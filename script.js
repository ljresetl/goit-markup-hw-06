document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeButton = document.querySelector(".mobile-menu-close");

    burgerMenu.addEventListener("click", function () {
        mobileMenu.classList.add("is-open");
    });

    closeButton.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
    });

    // Закриття при кліку поза меню
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            mobileMenu.classList.remove("is-open");
        }
    });
});
