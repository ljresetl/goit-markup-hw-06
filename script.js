function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        burger.style.display = "none"; // Ховаємо бургер
    } else {
        burger.style.display = "block"; // Показуємо бургер
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.querySelector(".open-modal-btn");
    const closeModalBtn = document.querySelector(".modal-close");
    const modalOverlay = document.querySelector(".modal-overlay");

    if (!openModalBtn || !closeModalBtn || !modalOverlay) {
        console.error("Помилка: один з елементів не знайдено в DOM.");
        return;
    }

    // Відкриття модального вікна
    openModalBtn.addEventListener("click", function () {
        modalOverlay.classList.add("is-open");
    });

    // Закриття модального вікна при натисканні на кнопку закриття
    closeModalBtn.addEventListener("click", function () {
        modalOverlay.classList.remove("is-open");
    });

    // Закриття модального вікна при натисканні на фон
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove("is-open");
        }
    });
});



