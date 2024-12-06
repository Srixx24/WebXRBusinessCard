fetch('Json/linksData.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title; // Set the title
        const scene = document.querySelector('a-scene');
        // Display links
        displayContact(data.contacts);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

    function displayContact(contacts) {
        const contactContainer = document.getElementById('contact-container');
        contactContainer.setAttribute('visible', 'true');
    
        contacts.forEach((contact, index) => {
            const contactElement = document.createElement('a-entity');
    
            // Set position for each contact element
            contactElement.setAttribute('position', `0 ${index * -1.5} 0`);
    
            // Create a-text element for title
            const titleText = document.createElement('a-text');
            titleText.setAttribute('value', contact.title);
            titleText.setAttribute('fontSize', '2');
            titleText.setAttribute('color', '#FFFFFF');
            titleText.setAttribute('position', '0 0 0.1');
    
            // Create a-text element for description
            const descriptionText = document.createElement('a-text');
            descriptionText.setAttribute('value', contact.description);
            descriptionText.setAttribute('color', '#FFFFFF');
            descriptionText.setAttribute('position', '0 -0.5 0.1');
    
            // Create an image element
            const imageElement = document.createElement('a-image');
            imageElement.setAttribute('src', contact.image);
            imageElement.setAttribute('position', '0 -1 0');
            imageElement.setAttribute('width', '2');
            imageElement.setAttribute('height', '1.5');
    
            // Create a link (as a-text)
            const linkText = document.createElement('a-text');
            linkText.setAttribute('value', 'View Links');
            linkText.setAttribute('color', '#00FF00');
            linkText.setAttribute('position', '0 -1.5 0.1'); 
            linkText.setAttribute('class', 'clickable');
    
            // Listener for links
            linkText.addEventListener('click', () => {
                window.open(contact.link, '_blank');
            });
    
            // Append all elements to contactElement
            contactElement.appendChild(titleText);
            contactElement.appendChild(descriptionText);
            contactElement.appendChild(imageElement);
            contactElement.appendChild(linkText);
    
            // Append contactElement to the contactContainer
            contactContainer.appendChild(contactElement);
        });
}