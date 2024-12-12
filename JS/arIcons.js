// Handles events for AR scene only

document.addEventListener('DOMContentLoaded', () => {
    const githubIcon = document.getElementById('Github');
    const linkedinIcon = document.getElementById('Linkedin');
    const gmailIcon = document.getElementById('Gmail');
    const toggleIcon = document.getElementById('Toggle');

    githubIcon.addEventListener('click', function() {
        window.open('https://github.com/Srixx24/', '_blank');
    });
    linkedinIcon.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/jackielovins/', '_blank');
    });
    gmailIcon.addEventListener('click', function() {
        window.open('mailto:jacolynlovins@gmail.com');
    });
    toggleIcon.addEventListener('click', function() {
        window.location.href = 'https://srixx24.github.io/WebXRBusinessCard/forest.html';
    });
});