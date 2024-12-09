// Camera access and permission script, plus toggle commands

async function startCamera() {
    try {
        // Request camera access
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        // Make video element for texture
        const video = document.createElement('video');
        video.srcObject = stream;
        video.muted = true; // *Mute to allow autoplay*
        video.play();

        // Set the video as texture for plane
        const arScene = document.getElementById('AR-scene');
        arScene.children[0].setAttribute('material', 'src', video);
    } catch (error) {
        console.error('Error accessing the camera: ', error);
    }
}

// Toggle between AR and forest scene
document.addEventListener('DOMContentLoaded', () => {
    startCamera();

    let isARMode = true;
    const forest = document.getElementById('forest-scene');
    const videoContainer = document.getElementById('AR-scene');
    
    document.getElementById('corner-toggle').addEventListener('click', () => {
        isARMode = !isARMode;

        if (isARMode) {
            forest.setAttribute('visible', 'false');
            videoContainer.setAttribute('visible', 'true');
            document.getElementById('corner-toggle').setAttribute('text', 'value', 'Forest');
        } else {
            forest.setAttribute('visible', 'true');
            videoContainer.setAttribute('visible', 'false');
            document.getElementById('corner-toggle').setAttribute('text', 'value', 'AR');
        }
    });
});