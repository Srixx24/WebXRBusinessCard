fetch('Json/projectData.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title; // Set the title
        const scene = document.querySelector('a-scene');
        // Display projects
        displayProjects(data.projects);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

function displayProjects(projects) {
    const projectContainer = document.getElementById('project-container');

    projects.forEach((project, index) => {
        const projectElement = document.createElement('a-entity');
        
        // Set position for each project element
        projectElement.setAttribute('position', `0 ${index * -1.5} 0`);

        // Create a-text elements for title
        const titleText = document.createElement('a-text');
        titleText.setAttribute('value', project.title);
        titleText.setAttribute('fontSize', '2');
        titleText.setAttribute('color', '#FFFFFF');
        titleText.setAttribute('position', '0 0 0.1');

        // Create a-text element for description
        const descriptionText = document.createElement('a-text');
        descriptionText.setAttribute('value', project.description);
        descriptionText.setAttribute('color', '#FFFFFF');
        descriptionText.setAttribute('position', '0 -0.5 0.1');

        // Create an image element
        const imageElement = document.createElement('a-image');
        imageElement.setAttribute('src', project.image);
        imageElement.setAttribute('position', '0 -1 0'); 
        imageElement.setAttribute('width', '2');
        imageElement.setAttribute('height', '1.5');

        // Create a link (as a-text)
        const linkText = document.createElement('a-text');
        linkText.setAttribute('value', 'View Project');
        linkText.setAttribute('color', '#00FF00');
        linkText.setAttribute('position', '0 -1.5 0.1');
        linkText.setAttribute('class', 'clickable');

        // Listener for links
        linkText.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });

        // Append all elements to projectElement
        projectElement.appendChild(titleText);
        projectElement.appendChild(descriptionText);
        projectElement.appendChild(imageElement);
        projectElement.appendChild(linkText);

        // Append projectElement to the projectContainer
        projectContainer.appendChild(projectElement);
    });
}