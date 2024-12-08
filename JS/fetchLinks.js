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

function displayContact(data) {
    const contacts = data.contacts;
    const header = data.header;
    const contactContainer = document.getElementById('contact-container');
    if (!contactContainer) {
        console.error('Contact container not found');
        return;
    }

    while (contactContainer.firstChild) {
        contactContainer.removeChild(contactContainer.firstChild);
    }

        const titleText = document.createElement('a-text');
        titleText.setAttribute('value', header);
        titleText.setAttribute('color', '#000000');
        titleText.setAttribute('position', '-0.8 2 0');
        contactContainer.appendChild(titleText);

        const positions = [
            { link: { name: 'Github', index: 0 }, image: contacts[0].image, linkPosition: '0.2 0.8 0', imagePosition: '-1 0.8 0.1' },
            { link: { name: 'LinkedIn', index: 1 }, image: contacts[1].image, linkPosition: '0.2 -0.4 0', imagePosition: '-1 -0.4 0.1' },
            { link: { name: 'Gmail', index: 2 }, image: contacts[2].image, linkPosition: '0.2 -1.6 0', imagePosition: '-1 -1.6 0.1' }
        ];

        positions.forEach(pos => {
            // Create link text
            const linkText = document.createElement('a-text');
            linkText.setAttribute('value', pos.link.name);
            linkText.setAttribute('color', '#000000');
            linkText.setAttribute('position', pos.linkPosition);
            linkText.setAttribute('class', 'clickable');
    
            // Listener for links
            linkText.addEventListener('click', () => {
                window.open(contacts[pos.link.index].link, '_blank');
            });
    
            // Create images
            const image = document.createElement('a-image');
            image.setAttribute('src', pos.image);
            image.setAttribute('position', pos.imagePosition);
            image.setAttribute('width', '1.5');
            image.setAttribute('height', '1.2');
    
            // Append links and images
            contactContainer.appendChild(linkText);
            contactContainer.appendChild(image);
        });
    }