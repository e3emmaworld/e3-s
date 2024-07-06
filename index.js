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

