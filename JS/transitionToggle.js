// Responsible for transition between welcome page and main page
// Responsible for toggle between scenes

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    const scene = document.getElementById('scene');

    // Check if elements exist before adding event listeners
    function transitionToMainPage() {
        return new Promise((resolve) => {
            // Fade out welcome screen and logo
            welcomeScreen.style.opacity = '0';
            logo.style.opacity = '0';

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                logo.style.display = 'none';
                overlay.style.display = 'none';
                scene.style.display = 'block';

                resolve(); // Resolve promise after transition
            }, 1000);
        });
    }

    // Wait for promise before contin.
    if (overlay && welcomeScreen && logo && scene) {
        overlay.addEventListener('click', () => {
            transitionToMainPage().then(() => {
                // Add toggle logic
                let isARMode = false;
                const forest = document.getElementById('forest-scene');
                const videoContainer = document.getElementById('AR-camera');
                const sceneElement = document.getElementById('overlay');

                if (sceneElement) {
                    sceneElement.addEventListener('click', () => {
                        isARMode = !isARMode;

                        if (isARMode) {
                            forest.setAttribute('visible', 'false');
                            videoContainer.setAttribute('visible', 'true');
                            document.getElementById('Toggle-label').setAttribute('text', 'value', 'Forest');
                        } else {
                            forest.setAttribute('visible', 'true');
                            videoContainer.setAttribute('visible', 'false');
                            document.getElementById('Toggle-label').setAttribute('text', 'value', 'AR Camera');
                        }
                    });
                }
            });
        });
    }
});