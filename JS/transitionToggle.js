// Responsible for transition between welcome page and main page
// Responsible for toggle between scenes

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    const arScene = document.getElementById('AR-camera');
    const forestScene = document.getElementById('forest-scene');

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
                forestScene.style.display = 'none';
                arScene.style.display = 'block';
            }, 1000);
        });

        // Toggle between AR and forest scene
        let isARMode = true;
        document.getElementById('Scene-toggle').addEventListener('click', () => {
            isARMode = !isARMode;

            if (isARMode) {
                forestScene.style.display = 'none';
                arScene.style.display = 'block'; // Show AR camera scene
                document.getElementById('Toggle-label').setAttribute('value', 'Press black rock to go to Forest');
            } else {
                arScene.style.display = 'none';
                forestScene.style.display = 'block'; // Show forest scene
                document.getElementById('Toggle-label').setAttribute('value', 'Press black rock to go to AR View');
            }
        });
    }
});