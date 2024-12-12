// Handles events for AR scene only

document.addEventListener('DOMContentLoaded', () => {
    const githubIcon = document.getElementById('Github');
    const linkedinIcon = document.getElementById('Linkedin');
    const gmailIcon = document.getElementById('Gmail');
    const toggleIcon = document.getElementById('Toggle');
    const customCursor = document.getElementById('custom-cursor');

    function changeCursorColor(color) {
        customCursor.setAttribute('color', color); // Change cursor color on hover
    }

    // Github events
    githubIcon.addEventListener('click', function() {
        window.open('https://github.com/Srixx24/', '_blank');
    });
    githubIcon.addEventListener('mouseenter', () => {
        changeCursorColor('#099631');
    });
    githubIcon.addEventListener('mouseleave', () => {
        changeCursorColor('#FF0000');
    });

    // Linkedin events
    linkedinIcon.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/jackielovins/', '_blank');
    });
    linkedinIcon.addEventListener('mouseenter', () => {
        changeCursorColor('#099631');
    });
    linkedinIcon.addEventListener('mouseleave', () => {
        changeCursorColor('#FF0000');
    });

    // Gmail events
    gmailIcon.addEventListener('click', function() {
        window.open('mailto:jacolynlovins@gmail.com');
    });
    gmailIcon.addEventListener('mouseenter', () => {
        changeCursorColor('#099631');
    });
    gmailIcon.addEventListener('mouseleave', () => {
        changeCursorColor('#FF0000');
    });

    // Forest Scene events
    toggleIcon.addEventListener('click', function() {
        window.location.href = 'forest.html';
    });
    toggleIcon.addEventListener('mouseenter', () => {
        changeCursorColor('#099631');
    });
    toggleIcon.addEventListener('mouseleave', () => {
        changeCursorColor('#FF0000');
    });
});