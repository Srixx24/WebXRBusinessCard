// Responsible for transition between welcome page and main page

const overlay = document.getElementById('overlay');
if (overlay) {
    overlay.addEventListener('click', function() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const logo = document.getElementById('logo');
        if (welcomeScreen && logo) {
            welcomeScreen.style.opacity = '0';
            logo.style.opacity = '0';
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                logo.style.display = 'none';
                overlay.style.display = 'none';
            }, 1000);
        }
    });
}