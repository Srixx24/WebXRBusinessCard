// Responsible for transition between welcome page and into AR scene
// then the toggle between scenes after welcome

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
        
        // AR scene toggle
        document.getElementById('ar-toggle').addEventListener('click', () => {

            if (isARMode) {
                arScene.style.display = 'none';
                forestScene.style.display = 'block';
                document.getElementById('forest-label').setAttribute('value', 'Press black rock to go to AR View');
                isARMode = false; // Update to Forest
            }
        });
        // Forest scene toggle
        document.getElementById('forest-toggle').addEventListener('click', () => {

            if (!isARMode) {
                forestScene.style.display = 'none';
                arScene.style.display = 'block';
                document.getElementById('ar-label').setAttribute('value', 'Press the kitten to go to Forest');
                isARMode = true; // Update to AR
            }
        });
    }
});