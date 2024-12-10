// Toggle between AR and forest scene
document.addEventListener('DOMContentLoaded', () => {
    let isARMode = false;
    const forest = document.getElementById('forest-scene');
    const videoContainer = document.getElementById('AR-camera');
    
    document.getElementById('Scene-toggle').addEventListener('click', () => {
        isARMode = !isARMode;

        if (isARMode) {
            forest.setAttribute('visible', 'false');
            videoContainer.setAttribute('visible', 'true');
            document.getElementById('Toggle-label').setAttribute('text', 'value', 'Forest');
        } else {
            forest.setAttribute('visible', 'true');
            videoContainer.setAttribute('visible', 'false');
            document.getElementById('Toggle-label').setAttribute('text', 'value', 'AR');
        }
    });
});