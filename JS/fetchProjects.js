fetch('Json/projectData.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title; // Set the title
        // Set background
        const scene = document.querySelector('a-scene');
        scene.setAttribute('background', `color: ${data.background.color};`);

        // Display projects
        displayProjects(data.projects);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

function displayProjects(projects) {
    const projectContainer = document.getElementById('project-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title}">
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectElement);
    });
}