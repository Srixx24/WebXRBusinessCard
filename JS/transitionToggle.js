// Responsible for transition between welcome page and main page
// Responsible for toggle between scenes

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const welcomeScreen = document.getElementById('welcome-screen');
    const logo = document.getElementById('logo');
    const scene = document.getElementById('AR-camera');

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
            }, 1000);
        });
    }
});

    // Toggle between AR and forest scene
document.addEventListener('DOMContentLoaded', () => {
    let isARMode = false;
    const forest = document.getElementById('forest-scene');
    const videoContainer = document.getElementById('AR-camera');
   
    document.getElementById('Scene-toggle').addEventListener('click', () => {
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
});
