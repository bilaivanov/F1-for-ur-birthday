let currentSlide = 1;

function nextSlide() {
    document.getElementById(`slide${currentSlide}`).style.display = 'none';
    currentSlide++;
    if (currentSlide > 5) currentSlide = 1; // Loop back to the first slide
    document.getElementById(`slide${currentSlide}`).style.display = 'block';
}

// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(`slide${currentSlide}`).style.display = 'block';
});
