const texts = [
    "Ouças As Músicas do Momento",
    "Seja bem-vindo ao Spotify",
    "Ouça sem interrupções",
];

let currentIndex = 0;

const textSlide = document.getElementById('text-slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateText() {
    textSlide.textContent = texts[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateText();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % texts.length;
    updateText();
});

updateText();




document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});
