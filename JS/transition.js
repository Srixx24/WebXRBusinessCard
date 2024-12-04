// Responsible for transition between welcome page and main page

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    if (overlay) {
        overlay.addEventListener('click', function() {
            if (welcomeScreen && logo) {
                // Fade out
                welcomeScreen.style.opacity = '0';
                logo.style.opacity = '0';
                
                // Wait for the transition to complete before hiding elements
                setTimeout(() => {
                    welcomeScreen.style.display = 'none';
                    logo.style.display = 'none';
                    overlay.style.display = 'none';
                }, 1000);
            }
        });
    }
});