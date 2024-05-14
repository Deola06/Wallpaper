function applyBackground() {
    const backgroundImage = localStorage.getItem('backgroundImage');
    const container = document.querySelector('.container');
    if (backgroundImage && container) {
        container.style.backgroundImage = `url('${backgroundImage}')`;
    }
}

function setupBackgroundChange() {
    document.querySelectorAll('.about img').forEach(img => {
        img.addEventListener('click', function() {
            localStorage.setItem('backgroundImage', this.src);
            applyBackground();  
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    applyBackground();
    setupBackgroundChange();
});
