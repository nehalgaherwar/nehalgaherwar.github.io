// Simple JavaScript to animate skill bars on page load and show welcome popup
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome popup
    const popup = document.getElementById('welcome-popup');
    popup.style.display = 'flex';

    // Close popup on button click
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Close popup on outside click
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill .fill');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
});
