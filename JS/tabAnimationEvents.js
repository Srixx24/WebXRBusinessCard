// Handles ring animations and click events for the three info tabs

document.addEventListener('DOMContentLoaded', () => {
    const projectHighlights = document.getElementById('project-highlights');
    const aboutMe = document.getElementById('about-me');
    const connectWithMe = document.getElementById('connect-with-me');

    const containers = {
        'project-highlights': 'project-container',
        'about-me': 'bio-container',
        'connect-with-me': 'contact-container'
    };

    // Tracks tabs and rings
    let currentOpenContainer = null;
    let currentOpenRing = null;

    // Handles click events and animations
    function handleClick(entity, dataContainerId) {
        entity.addEventListener('click', () => {
            // If an old tab is open, close it first
            if (currentOpenContainer && currentOpenRing && currentOpenRing !== entity) {
                const currentContainerId = containers[currentOpenRing.id];
                const currentContainer = document.getElementById(currentContainerId);

                    currentContainer.setAttribute('visible', 'false');
                    currentOpenRing.setAttribute('visible', 'true');

            }

            // Animate the clicked ring
            entity.setAttribute('animation', `property: position; to: ${entity.getAttribute('position').x} ${entity.getAttribute('position').y + 1} ${entity.getAttribute('position').z}; dur: 800;`);
            entity.setAttribute('animation__scale', 'property: scale; to: 1.1 1.1 1; dir: alternate; dur: 1400;loop: true;');

            // Hide ring/show tab
            setTimeout(() => {
                entity.setAttribute('visible', 'false');
                document.getElementById(dataContainerId).setAttribute('visible', 'true');
            }, 300);

            // Update currently open tab and ring
            currentOpenContainer = document.getElementById(dataContainerId);
            currentOpenRing = entity;
        });
    }

    // Assign click events
    handleClick(projectHighlights, 'project-container');
    handleClick(aboutMe, 'bio-container');
    handleClick(connectWithMe, 'contact-container');
});