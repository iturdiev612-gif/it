
// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Закрытие меню после клика

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// ================================
// SCROLL ANIMATION
// ================================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// CONTACT FORM
// ================================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Пожалуйста, заполните обязательные поля.";

        return;
    }


    formMessage.textContent =
        "Спасибо! Ваше сообщение принято 🚀";


    form.reset();


    setTimeout(() => {
        formMessage.textContent = "";
    }, 5000);

});


// ================================
// PROJECT BUTTONS
// ================================

const projectButtons =
    document.querySelectorAll(".details-btn");

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.textContent =
            "Скоро здесь будет проект 🚀";

        setTimeout(() => {

            button.textContent =
                "Подробнее →";

        }, 2500);

    });

});


// ================================
// HEADER SCROLL EFFECT
// ================================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 22, 0.94)";

    } else {

        header.style.background =
            "rgba(5, 8, 22, 0.72)";

    }

});


// ================================
// MOUSE PARALLAX
// ================================

const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");
const codeWindow =
    document.querySelector(".code-window");

document.addEventListener("mousemove", (event) => {

    if (window.innerWidth <= 700) return;

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);


    if (orb1) {

        orb1.style.transform =
            `translate(${x * 25}px, ${y * 25}px)`;

    }


    if (orb2) {

        orb2.style.transform =
            `translate(${x * -35}px, ${y * -35}px)`;

    }


    if (codeWindow) {

        codeWindow.style.transform =
            `rotate(4deg) translate(${x * 12}px, ${y * 12}px)`;

    }

});
