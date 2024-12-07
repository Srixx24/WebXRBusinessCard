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

  // Track the currently opened tabs
  let currentOpenContainer = null;

  // Handles click events and animations for ring
  function handleClick(entity, dataContainerId) {
      entity.addEventListener('click', () => {
          // If an old tab is open, close it first
          if (currentOpenContainer && currentOpenContainer !== entity) {
              const currentContainerId = containers[currentOpenContainer.id];
              const currentContainer = document.getElementById(currentContainerId);

              // Reverse animation on ring old
              currentOpenContainer.setAttribute('animation', 'property: position; to: ' + currentOpenContainer.getAttribute('position').x + ' ' + currentOpenContainer.getAttribute('position').y + ' ' + currentOpenContainer.getAttribute('position').z + '; dur: 300;');
              currentOpenContainer.setAttribute('animation__scale', 'property: scale; to: 1 1 1; dur: 300;');

              // Show old ring after animation
              setTimeout(() => {
                  currentOpenContainer.setAttribute('visible', 'true');
                  currentContainer.setAttribute('visible', 'false');
              }, 300);
          }

          // Animate clicked ring
          entity.setAttribute('animation', 'property: position; to: ' + entity.getAttribute('position').x + ' ' + (entity.getAttribute('position').y + 1) + ' ' + entity.getAttribute('position').z + '; dur: 300;');
          entity.setAttribute('animation__scale', 'property: scale; to: 0.5 0.5 0.5; dur: 300;');

          // Hide ring after animation and show tab
          setTimeout(() => {
              entity.setAttribute('visible', 'false');
              document.getElementById(dataContainerId).setAttribute('visible', 'true');
          }, 300);

          // Update currently open tab
          currentOpenContainer = entity;
      });
  }

  // Assign click events
  handleClick(projectHighlights, 'project-container');
  handleClick(aboutMe, 'bio-container');
  handleClick(connectWithMe, 'contact-container');
});