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

        // Listener for links
        firstLink.addEventListener('click', () => {
            window.open(contact.link, '_blank');
        });
        secondLink.addEventListener('click', () => {
            window.open(contact.link, '_blank');
        });
        thirdLink.addEventListener('click', () => {
            window.open(contact.link, '_blank');
        });

        // Append all elements to contactElement
        contactElement.appendChild(firstLink);
        contactElement.appendChild(secondLink);
        contactElement.appendChild(thirdLink);

        // Append contactElement to the contactContainer
        contactContainer.appendChild(contactElement);
}