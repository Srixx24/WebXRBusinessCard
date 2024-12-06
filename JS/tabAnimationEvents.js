// Handles the animations and click events for the three info tabs

document.addEventListener('DOMContentLoaded', () => {
    const projectHighlights = document.getElementById('project-highlights');
    const aboutMe = document.getElementById('about-me');
    const connectWithMe = document.getElementById('connect-with-me');

    // Handles click events and animations
    function handleClick(entity, dataContainerId) {
      entity.addEventListener('click', () => {
        entity.setAttribute('animation', 'property: position; to: ' + entity.getAttribute('position').x + ' ' + (entity.getAttribute('position').y + 1) + ' ' + entity.getAttribute('position').z + '; dur: 300;');
        entity.setAttribute('animation__scale', 'property: scale; to: 0.5 0.5 0.5; dur: 300;');
        // Hide after animation
        setTimeout(() => {
          entity.setAttribute('visible', 'false');
          document.getElementById(dataContainerId).setAttribute('visible', 'true'); // Set appropriate container
        }, 300);
      });
    }
    
    // Assign click events
    handleClick(projectHighlights, 'project-container');
    handleClick(aboutMe, 'bio-container');
    handleClick(connectWithMe, 'contact-container');
  });