// Responsible for transition between welcome page and main page

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    const scene = document.getElementById('scene');

    // Check if elements exist before adding event listeners
    if (overlay && welcomeScreen && logo && scene) {
        overlay.addEventListener('click', () => {
            // Fade out welcome screen and logo
            welcomeScreen.style.opacity = '0';
            logo.style.opacity = '0';

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                logo.style.display = 'none';
                overlay.style.display = 'none';
                scene.style.display = 'block';
            
                const arScene = document.querySelector('#AR-scene');
                arScene.setAttribute('xr-camera', '');
            }, 1000);
        });
    }
});