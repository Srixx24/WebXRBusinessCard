// Sets up link for Bio container

document.addEventListener('DOMContentLoaded', () => {
    fetch('Scenes/Json/bioData.json')
        .then(response => response.json())
        .then(data => {
            const scene = document.querySelector('a-scene');
            // Display bio
            displayBio(data.bio[0]);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function displayBio(bio) {
    const bioContainer = document.getElementById('bio-container');
    if (!bioContainer) {
        console.error('Bio container not found');
        return;
    }

    const bioElement = document.createElement('a-entity');

    // Create a link
    const linkText = document.createElement('a-text');
    linkText.setAttribute('value', 'View Resume');
    linkText.setAttribute('color', '#000000');
    linkText.setAttribute('position', '-0.6 -2.3 0.1');
    linkText.setAttribute('class', 'clickable');

    // Listener for links
    linkText.addEventListener('mouseenter', () => {
        linkText.setAttribute('color', '#099631');
    });
    linkText.addEventListener('mouseleave', () => {
        linkText.setAttribute('color', '#000000');
    });
    linkText.addEventListener('click', () => {
        window.open(bio.link, '_blank');
    });

    // Append element to bioElement
    bioElement.appendChild(linkText);

    // Append bioElement to the bioContainer
    bioContainer.appendChild(bioElement);
}