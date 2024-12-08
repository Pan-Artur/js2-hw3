const options = {
    rootMargin: "100px", // Коли елемент потрапляє на 100px в область видимості
};

const observer = new IntersectionObserver(observerImages, options);

const imagesArr = document.querySelectorAll(".image");

const buttonExitEl = document.querySelector(".btn-exit");
const buttonCloseEl = document.querySelector(".btn-close");

function observerImages(entries) {
    entries.forEach((entry) => {
        const imageEl = entry.target;

        if (entry.isIntersecting) {
            imageEl.src = imageEl.dataset.src; // Завантажуємо зображення
            imageEl.classList.add("animated-image"); // Додаємо клас для анімації входу
            imageEl.classList.remove("hidden-animated-image"); // Видаляємо клас "hidden-animated-image" при вході в поле зору
        } else {
            imageEl.classList.add("hidden-animated-image"); // Додаємо клас "hidden-animated-image" при виході з поля зору
            imageEl.classList.remove("animated-image"); // Видаляємо клас анімації
        }
    });
}

buttonExitEl.addEventListener("click",() => {
    imagesArr.forEach((imageEl) => {
        observer.observe(imageEl); // Починаємо спостерігати за кожним зображенням
    });
});

buttonCloseEl.addEventListener("click",() => {
    imagesArr.forEach((imageEl) => {
        observer.unobserve(imageEl); // Закінчуємо спостерігати за кожним зображенням
        imagesArr.forEach((imageEl) => {
            imageEl.classList.add("classic-image"); // Додаємо клас "classic-image" коли перемкнули режим кнопки
            imageEl.classList.remove("animated-image"); // Видаляємо клас анімації
            imageEl.classList.remove("hidden-animated-image"); // Видаляємо клас "hidden-animated-image" коли перемкнули режим кнопки
        });
    });
});
