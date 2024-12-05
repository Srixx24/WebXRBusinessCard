fetch('Json/bioData.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title; // Set the title
        // Set background
        const scene = document.querySelector('a-scene');
        scene.setAttribute('background', `color: ${data.background.color};`);

        // Display bio
        displayBio(data.bio);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

function displayBio(bio) {
    const bioContainer = document.getElementById('bio-container');
    const bioElement = document.createElement('a-entity');
    bioElement.innerHTML = `
        <h2>${bio.title}</h2>
        <p>${bio.description}</p>
        <img src="${bio.image}" style="width: 100px; height: auto;">
        <a href="${bio.link}" target="_blank">View Resume</a>
    `;
    bioContainer.appendChild(bioElement);
}