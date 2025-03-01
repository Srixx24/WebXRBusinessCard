// Sets up all content for project container

document.addEventListener('DOMContentLoaded', () => {  
    fetch('Json/projectData.json')
        .then(response => response.json())
        .then(data => {
            document.title = data.title; // Set the title
            const scene = document.querySelector('a-scene');
            // Display projects
            displayProjects(data.projects);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
        let currentProjectIndex = 0; // Track current project
        let projects = []; // Store projects
        
        function displayProjects(projectsData) {
            projects = projectsData;
            const projectContainer = document.getElementById('project-container');
        
            // Initial display
            showProject(currentProjectIndex);
        
            projectContainer.addEventListener('click', () => {
                animateAndShowNextProject();
            });
        }
        
        function showProject(index) {
            const projectContainer = document.getElementById('project-container');
        
            // Clear previous project elements
            while (projectContainer.firstChild) {
                projectContainer.removeChild(projectContainer.firstChild);
            }
        
            const project = projects[index];
        
            // Create a-text elements for title
            const titleText = document.createElement('a-text');
            titleText.setAttribute('value', project.title);
            titleText.setAttribute('fontSize', '2');
            titleText.setAttribute('color', '#000000');
            titleText.setAttribute('position', '-1.7 2 0.1');
        
            // Create a-text element for description
            const descriptionText = document.createElement('a-text');
            descriptionText.setAttribute('value', project.description);
            descriptionText.setAttribute('color', '#000000');
            descriptionText.setAttribute('position', '-1.8 0.5 0.1');
            descriptionText.setAttribute('width', '3.5');
            descriptionText.setAttribute('height', '5');
            descriptionText.setAttribute('wrap-count', '40');
        
            // Create an image element
            const imageElement = document.createElement('a-image');
            imageElement.setAttribute('src', project.image);
            imageElement.setAttribute('position', '0 -0.9 0.1'); 
            imageElement.setAttribute('width', '2');
            imageElement.setAttribute('height', '1.5');
        
            // Create a link (as a-text)
            const linkText = document.createElement('a-text');
            linkText.setAttribute('value', 'View Project');
            linkText.setAttribute('color', '#00FF00');
            linkText.setAttribute('position', '-0.6 -2 0.1');
            linkText.setAttribute('class', 'clickable');
        
            // Listener for links
            linkText.addEventListener('click', () => {
                window.open(project.link, '_blank');
            });
        
            // Append all elements
            projectContainer.appendChild(titleText);
            projectContainer.appendChild(descriptionText);
            projectContainer.appendChild(imageElement);
            projectContainer.appendChild(linkText);
        
            // Add instruction text
            const instructionText = document.createElement('a-text');
            instructionText.setAttribute('value', 'Click anywhere for next project');
            instructionText.setAttribute('color', '#000000');
            instructionText.setAttribute('position', '-1.5 -2.3 0.1');
            projectContainer.appendChild(instructionText);
        }
        
        function animateAndShowNextProject() {
            const projectContainer = document.getElementById('project-container');
            
            // Animate closing and opening
            projectContainer.setAttribute('animation', 'property: scale; to: 1 0 1; dur: 500; easing: easeInOutQuad;');
            
            setTimeout(() => {
                currentProjectIndex = (currentProjectIndex + 1) % projects.length; // Loop projects
                showProject(currentProjectIndex);
                
                // Animate opening back
                projectContainer.setAttribute('animation', 'property: scale; to: 1 1 1; dur: 500; easing: easeInOutQuad;');
            }, 500); // Match the timeout with animation duration *Important*
        }
    }
);