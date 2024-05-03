document.addEventListener('DOMContentLoaded', function () {
    const boxesContainer = document.getElementById('boxes');
    const btn = document.getElementById('btn');

    if (!boxesContainer || !btn) {
        console.error('Elements not found.');
        return;  // Stop if elements are not found
    }

    btn.addEventListener('click', () => {
        console.log('Button clicked');  // Check if event fires
        boxesContainer.classList.toggle('big');
    });

    function createBoxes() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
                boxesContainer.appendChild(box);
            }
        }
    }

    createBoxes();
});
