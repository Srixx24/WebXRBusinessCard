fetch('Json/linksData.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title; // Set the title
        // Set background
        const scene = document.querySelector('a-scene');
        scene.setAttribute('background', `color: ${data.background.color};`);

        // Display links
        displayLinks(data.display);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

function displayLinks(display) {
    const linksContainer = document.getElementById('links-container');
    display.forEach(links => {
        const linksElement = document.createElement('a-entity');
        linksElement.innerHTML = `
            <h2>${links.title}</h2>
            <p>${links.description}</p>
            <img src="${links.image}" alt="${links.title}">
            <a href="${links.link}" target="_blank">View links</a>
        `;
        linksContainer.appendChild(linksElement);
    });
}