// Responsible for transition between welcome page and main page

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    const scene = document.getElementById('scene');

        overlay.addEventListener('click', function() {
            // Fade out welcome screen and logo
            welcomeScreen.style.opacity = '0';
            logo.style.opacity = '0';

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                logo.style.display = 'none';
                overlay.style.display = 'none';

                // Show the A-Frame scene
                scene.style.display = 'block';
            }, 1000);
        });
});