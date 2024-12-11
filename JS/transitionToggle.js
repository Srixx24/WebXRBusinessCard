// Responsible for transition between welcome page and main page
// Responsible for toggle between scenes

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    const forestScene = document.getElementById('forest-scene');

    // Check if elements exist before adding event listeners
    if (overlay && welcomeScreen && logo && forestScene) {
        overlay.addEventListener('click', () => {
            // Fade out welcome screen and logo
            welcomeScreen.style.opacity = '0';
            logo.style.opacity = '0';

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                logo.style.display = 'none';
                overlay.style.display = 'none';
                forestScene.style.display = 'block';
            }, 1000);
        });
    }
});