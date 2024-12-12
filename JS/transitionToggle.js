// Responsible for transition between welcome page and into AR scene
// then the toggle between scenes after welcome

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    const arScene = document.getElementById('AR-camera');

    // Check if elements exist before adding event listeners
    if (overlay && welcomeScreen && logo && arScene && forestScene) {
        overlay.addEventListener('click', () => {
            // Fade out welcome screen and logo
            welcomeScreen.style.opacity = '0';
            logo.style.opacity = '0';

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                logo.style.display = 'none';
                overlay.style.display = 'none';
                arScene.style.display = 'block';
            }, 1000);
        });
    }
});