// Camera access and permission script, plus toggle commands

async function startCamera() {
    const video = document.getElementById('video');

    try {
        // Request access to the user's camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream; // Set the video source to the stream
        video.play(); // Start playing the video

        // Set the video as a texture for the A-Frame material
        video.addEventListener('loadeddata', () => {
            const videoContainer = document.getElementById('AR-scene');
            videoContainer.setAttribute('material', 'src', video);
        });
    } catch (error) {
        console.error('Error accessing the camera: ', error);
    }
}

// Toggle between AR and forest scene
let isARMode = false;
document.getElementById('corner-toggle').addEventListener('click', () => {
isARMode = !isARMode;

const forest = document.getElementById('forest-scene');
const videoContainer = document.getElementById('AR-scene');

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

// Start the camera when the page loads
window.addEventListener('load', startCamera);