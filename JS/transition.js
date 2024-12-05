// Responsible for transition between welcome page, main page, and events

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
            }, 1000);
        });
        
        // Click event listeners
        document.getElementById('project-highlights').addEventListener('click', () => {
            console.log('Project Highlights clicked');
            document.getElementById('project-highlights').setAttribute('visible', 'false');
            // Add Trigger event later
        });

        document.getElementById('about-me').addEventListener('click', () => {
            console.log('About Me clicked');
            document.getElementById('about-me').setAttribute('visible', 'false');
            // Add Trigger event later
        });

        document.getElementById('connect-with-me').addEventListener('click', () => {
            console.log('Connect With Me clicked');
            document.getElementById('connect-with-me').setAttribute('visible', 'false');
            // Add Trigger event later
        });
    }
});