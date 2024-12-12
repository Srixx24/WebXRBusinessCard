// Sets up all content for link container

document.addEventListener('DOMContentLoaded', () => {  
    fetch('Scenes/Json/linksData.json')
        .then(response => response.json())
        .then(data => {
            document.title = data.title; // Set the title
            const scene = document.querySelector('a-scene');
            // Display contacts
            displayContacts(data.contacts);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
        let currentContactIndex = 0; // Track current contact
        let contacts = []; // Store contacts
        
        function displayContacts(contactsData) {
            contacts = contactsData;
            const contactContainer = document.getElementById('contact-container');
        
            // Initial display
            showContact(currentContactIndex);
        
            contactContainer.addEventListener('click', () => {
                animateAndShowNextContact();
            });
        }
        
        function showContact(index) {
            const contactContainer = document.getElementById('contact-container');
        
            // Clear previous contact elements
            while (contactContainer.firstChild) {
                contactContainer.removeChild(contactContainer.firstChild);
            }
        
            const contact = contacts[index];
        
            // Create a-text elements for title
            const titleText = document.createElement('a-text');
            titleText.setAttribute('value', contact.title);
            titleText.setAttribute('fontSize', '2');
            titleText.setAttribute('color', '#000000');
            titleText.setAttribute('position', '-0.9 2 0.1');
        
            // Create a-text element for description
            const descriptionText = document.createElement('a-text');
            descriptionText.setAttribute('value', contact.description);
            descriptionText.setAttribute('color', '#000000');
            descriptionText.setAttribute('position', '-1.2 -1 0.1');
            descriptionText.setAttribute('width', '3.5');
            descriptionText.setAttribute('height', '5');
            descriptionText.setAttribute('wrap-count', '40');
        
            // Create an image element
            const imageElement = document.createElement('a-image');
            imageElement.setAttribute('src', contact.image);
            imageElement.setAttribute('position', '0 0.5 0.1'); 
            imageElement.setAttribute('width', '2');
            imageElement.setAttribute('height', '1.5');
        
            // Create a link (as a-text)
            const linkText = document.createElement('a-text');
            linkText.setAttribute('value', contact.linkName);
            linkText.setAttribute('color', '#00FF00');
            linkText.setAttribute('position', '-0.4 -0.5 0.1');
            linkText.setAttribute('class', 'clickable');
        
            // Listener for links
            linkText.addEventListener('mouseenter', () => {
                linkText.setAttribute('color', '#099631');
            });
            linkText.addEventListener('mouseleave', () => {
                linkText.setAttribute('color', '#000000');
            });
            linkText.addEventListener('click', () => {
                window.open(contact.link, '_blank');
            });
        
            // Append all elements
            contactContainer.appendChild(titleText);
            contactContainer.appendChild(descriptionText);
            contactContainer.appendChild(imageElement);
            contactContainer.appendChild(linkText);
        
            // Add instruction text
            const instructionText = document.createElement('a-text');
            instructionText.setAttribute('value', 'Click anywhere for next page');
            instructionText.setAttribute('color', '#000000');
            instructionText.setAttribute('position', '-1.5 -2.3 0.1');
            contactContainer.appendChild(instructionText);
        }
        
        function animateAndShowNextContact() {
            const contactContainer = document.getElementById('contact-container');
            
            // Animate closing and opening
            contactContainer.setAttribute('animation', 'property: scale; to: 1 0 1; dur: 500; easing: easeInOutQuad;');
            
            setTimeout(() => {
                currentContactIndex = (currentContactIndex + 1) % contacts.length; // Loop contacts
                showContact(currentContactIndex);
                
                // Animate opening back
                contactContainer.setAttribute('animation', 'property: scale; to: 1 1 1; dur: 500; easing: easeInOutQuad;');
            }, 500); // Match the timeout with animation duration *Important*
        }
    }
);