fetch('Json/bioData.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title; // Set the title
        const scene = document.querySelector('a-scene');
        // Display bio
        displayBio(data.bio);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

function displayBio(bio) {
    const bioContainer = document.getElementById('bio-container');
    bioContainer.setAttribute('visible', 'true');
    const bioElement = document.createElement('a-entity');
    
    // Create a-text element for title
    const titleText = document.createElement('a-text');
    titleText.setAttribute('value', bio.title);
    titleText.setAttribute('fontSize', '2');
    titleText.setAttribute('color', '#FFFFFF');
    titleText.setAttribute('position', '0 1 0.1');

    // Create a-text element for description
    const descriptionText = document.createElement('a-text');
    descriptionText.setAttribute('value', bio.description);
    descriptionText.setAttribute('color', '#FFFFFF');
    descriptionText.setAttribute('wrap-count', '30');
    descriptionText.setAttribute('position', '0 0 0.1');

    // Create an image element
    const imageElement = document.createElement('a-image');
    imageElement.setAttribute('src', bio.image);
    imageElement.setAttribute('position', '0 -1 0');
    imageElement.setAttribute('width', '2');
    imageElement.setAttribute('height', '1.5');

    // Create a link (as a-text)
    const linkText = document.createElement('a-text');
    linkText.setAttribute('value', 'View Resume');
    linkText.setAttribute('color', '#00FF00');
    linkText.setAttribute('position', '0 -2 0.1');
    linkText.setAttribute('class', 'clickable');

    // Listener for links
    linkText.addEventListener('click', () => {
        window.open(bio.link, '_blank');
    });

    // Append all elements to bioElement
    bioElement.appendChild(titleText);
    bioElement.appendChild(descriptionText);
    bioElement.appendChild(imageElement);
    bioElement.appendChild(linkText);

    // Append bioElement to the bioContainer
    bioContainer.appendChild(bioElement);
}