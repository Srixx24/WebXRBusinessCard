// Set up links for Contacts container

document.addEventListener('DOMContentLoaded', () => {
    fetch('Json/linksData.json')
        .then(response => response.json())
        .then(data => {
            const scene = document.querySelector('a-scene');
            // Display links
            displayContact(data.contacts);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function displayContact(contacts) {
    const contactContainer = document.getElementById('contact-container');
    if (!contactContainer) {
        console.error('Contact container not found');
        return;
    }

    while (contactContainer.firstChild) {
        contactContainer.removeChild(contactContainer.firstChild);
    }
        const firstLink = document.createElement('a-text');
        firstLink.setAttribute('value', 'Github');
        firstLink.setAttribute('color', '#000000');
        firstLink.setAttribute('position', '0.2 0.8 0');
        firstLink.setAttribute('class', 'clickable');

        const secondLink = document.createElement('a-text');
        secondLink.setAttribute('value', 'LinkedIn');
        secondLink.setAttribute('color', '#000000');
        secondLink.setAttribute('position', '0.2 -0.4 0');
        secondLink.setAttribute('class', 'clickable');

        const thirdLink = document.createElement('a-text');
        thirdLink.setAttribute('value', 'Gmail');
        thirdLink.setAttribute('color', '#000000');
        thirdLink.setAttribute('position', '0.2 -1.6 0');
        thirdLink.setAttribute('class', 'clickable');

        const firstImage = document.createElement('a-image');
        firstImage.setAttribute('src', project.image);
        firstImage.setAttribute('position', '-1 0.8 0.1'); 
        firstImage.setAttribute('width', '1.5');
        firstImage.setAttribute('height', '1.2');

        const secondImage = document.createElement('a-image');
        secondImage.setAttribute('src', project.image);
        secondImage.setAttribute('position', '-1 -0.4 0.1'); 
        secondImage.setAttribute('width', '1.2');
        secondImage.setAttribute('height', '0.8');

        const thirdImage = document.createElement('a-image');
        thirdImage.setAttribute('src', project.image);
        thirdImage.setAttribute('position', '-1 -1.6 0.1'); 
        thirdImage.setAttribute('width', '1.5');
        thirdImage.setAttribute('height', '1.2');

        // Listener for links
        firstLink.addEventListener('click', () => {
            window.open(contacts[0].link, '_blank');
        });
        secondLink.addEventListener('click', () => {
            window.open(contacts[1].link, '_blank');
        });
        thirdLink.addEventListener('click', () => {
            window.open(contacts[2].link, '_blank');
        });

        // Append all elements
        contactContainer.appendChild(firstLink);
        contactContainer.appendChild(secondLink);
        contactContainer.appendChild(thirdLink);
        contactContainer.appendChild(firstImage);
        contactContainer.appendChild(secondImage);
        contactContainer.appendChild(thirdImage);

        contactContainer.setAttribute('visible', 'true');
}