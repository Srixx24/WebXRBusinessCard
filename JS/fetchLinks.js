fetch('Json/linksData.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title; // Set the title
        // Set background
        const scene = document.querySelector('a-scene');
        scene.setAttribute('background', `color: ${data.background.color};`);

        // Display links
        displayContact(data.contacts);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

function displayContact(contacts) {
    const contactContainer = document.getElementById('contact-container');
    contacts.forEach(contact => {
        const contactElement = document.createElement('a-entity');
        contactElement.innerHTML = `
            <h1>${contact.title}</h1>
            <h3>${contact.description}</h3>
            <img src="${contact.image}" alt="${contact.title}">
            <a href="${contact.link}" target="_blank">View Links</a>
        `;
        contactContainer.appendChild(contactElement);
    });
}