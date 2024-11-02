document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded');
    createStars(100); // Adjust the number of stars as needed
});

function createStars(count) {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration between 2s and 5s
        star.style.animationDelay = `${Math.random() * 5}s`; // Random start delay between 0s and 5s
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('random-move-image');

    function getRandomPosition() {
        const x = Math.random() * (window.innerWidth - img.clientWidth);
        const y = Math.random() * (window.innerHeight - img.clientHeight);
        return { x, y };
    }

    function moveImage() {
        const { x, y } = getRandomPosition();
        img.style.transform = `translate(${x}px, ${y}px)`;
    }

    setInterval(moveImage, 500); // Move the image every second
});
const word = "E3'S EMMAH'S WORLD";
let currentText = "";
let index = 0;

function spellWord() {
    if (index < word.length) {
        currentText += word[index];  // Add one letter at a time
        document.getElementById("output").textContent = currentText;
        index++;
        setTimeout(spellWord, 200); // Repeat every 500ms
    }
}

spellWord(); // Start the process
const word = "";Welcome to E3's Emmah's World Website
let currentText = "";
let index = 0;

function spellWord() {
    if (index < word.length) {
        currentText += word[index];  // Add one letter at a time
        document.getElementById("output").textContent = currentText;
        index++;
        setTimeout(spellWord, 200); // Repeat every 500ms
    }
}

spellWord(); // Start the process

